<template>
  <div :class="{fullscreen:fullscreen}" class="tinymce-container" :style="{width:containerWidth}">
    <textarea :id="tinymceId" class="tinymce-textarea" />
  </div>
</template>

<script>
import plugins from './plugins'
import toolbar from './toolbar'
import load from './dynamicLoadScript'
const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'

export default {
  name: 'Tinymce',
  props: {
    id: {
      type: String,
      default: function() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    modelValue: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    menubar: {
      type: String,
      default: 'edit view format table'
    },
    height: {
      type: [Number, String],
      required: false,
      default: 400
    },
    width: {
      type: [Number, String],
      required: false,
      default: 'auto'
    }
  },
  data() {
    return {
      hasInit: false,
      tinymceId: null,
      fullscreen: false,
      languageTypeList: {
        'en': 'en',
        'zh': 'zh_CN',
        'es': 'es_MX',
        'ja': 'ja'
      }
    }
  },
  computed: {
    containerWidth() {
      const width = this.width
      if (/^[\d]+(\.[\d]+)?$/.test(width)) { // matches `100`, `'100'`
        return `${width}px`
      }
      return width
    }
  },
  watch: {
    modelValue(val) {
      if (this.hasInit && this.getContent() !== val) {
        this.$nextTick(() => window.tinymce.get(this.tinymceId).setContent(val || ''))
      }
    }
  },
  created() {
    this.tinymceId = this.id
  },
  mounted() {
    this.init()
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce()
    }
  },
  deactivated() {
    this.destroyTinymce()
  },
  destroyed() {
    this.destroyTinymce()
  },
  methods: {
    init() {
      // dynamic load tinymce from cdn
      load(tinymceCDN, (err) => {
        if (err) {
          console.log(err.message)
          return
        }
        this.initTinymce()
      })
    },
    initTinymce() {
      const _this = this
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        language: this.languageTypeList['zh'],
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: true,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        plugins: plugins,
				end_container_on_empty_block: true,
        powerpaste_word_import: 'propmt',
				powerpaste_html_import: 'propmt',
				powerpaste_allow_local_images: true,
				paste_data_images: true,
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        fontsize_formats: "11pt 12pt 12pt 14pt 18pt 24pt 36pt 72pt",
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: editor => {
          if (_this.modelValue) {
            editor.setContent(_this.modelValue)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.$emit('update:modelValue', editor.getContent())
          })
        },
				paste_preprocess: (plugin, args) => {
					// 处理远程图片
					let imageArray = []
					args.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, (match, capture) => {
						//判断是否需要本地化
						if(capture.indexOf('//')===0) imageArray.push('http:'+capture)
						else imageArray.push(capture)
					})
					if (imageArray.length > 0) this.uploadRemoteFile(imageArray, 0)
				},
        images_upload_handler: function (blobInfo, success, failure) {
          // 处理本地图片
          // 在回调中，记得调用success函数，传入上传好的图片地址；
          // blobInfo.blob() 得到图片的file对象；
          let files = blobInfo.blob()
          if (!files.name) {
            files = new window.File([files], 'image.png')
          }
          let formData = new FormData();
          formData.append('file', files)
          uploadImage(formData)
          .then(res => {
            success(process.env.VUE_APP_Image + '/' + res.data)
          })
        },
        setup(editor) {
          editor.on('FullscreenStateChanged', (e) => {
            _this.fullscreen = e.state
          })
        },
        convert_urls: false
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId)
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen')
      }
      if (tinymce) {
        tinymce.destroy()
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value)
    },
    getContent() {
      return window.tinymce.get(this.tinymceId).getContent()
    },
    // 图片上传时使用
    imageSuccessCBK(str) {
      window.tinymce.get(this.tinymceId).insertContent(`<img src="${process.env.VUE_APP_Image}/${str}" >`)
    },
		// 上传远程图片
		uploadRemoteFile(imageArray, n) {
			// if (n < imageArray.length) {
			// 	// 判断图片url是本地图片还是外部图片
			// 	if(imageArray[n].indexOf('blob:')== 0) {
			// 		// 本地图片查看images_upload_handler函数，当前函数不做处理
			// 	}
			// 	else {
			// 		let params = {
			// 			imgUrl: imageArray[n]
			// 		}
			// 		uploadRemoteImage(params)
			// 		.then(res => {
			// 			let html = window.tinymce.get(this.tinymceId).getContent()
			// 			html = html.replace(imageArray[n], `${process.env.VUE_APP_Image}/${res.data}`)
			// 			window.tinymce.get(this.tinymceId).setContent(html)
			// 			this.uploadRemoteFile(imageArray, ++n)
			// 		})
			// 	}
			// }else {
			// 	//this.loading = false
			// 	this.$emit('input', tinymce.activeEditor.getContent())
			// }
		},
  }
}
</script>

<style lang="scss" scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}

.tinymce-container {
  :deep(.mce-fullscreen) {
    z-index: 10000;
  }
}

.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}

.editor-custom-btn-container {
  position: absolute;
  right: 6px;
  top: 8px;
  /*z-index: 2005;*/
}

.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}

.editor-upload-btn {
  display: inline-block;
}
</style>

<style type="text/css">
  .mce-branding {
    display: none !important;
  }
  .mce-wordcount {
    margin-right: 20px !important;
  }
  .mce-flow-layout {
    padding: 5px 0 !important;
  }
  .mce-stack-layout .mce-menu-item:nth-child(3) {
	  display: none;
  }
</style>
