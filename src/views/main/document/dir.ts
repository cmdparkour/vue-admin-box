export const data = [
    {
        label: 'mock',
        des: [
            'mock数据模拟中心，用于数据的模拟管理，开发环境可以查看到http请求，线上环境使用Mock.js作为模拟数据。',
            '线下环境不需要多余的配置，直接新建文件写mock数据即可，参考内部的几个文件写法。',
            '线上环境在打包前需要配置mockProdServer.ts文件，需要把mock文件夹内部的文件引入至mockProdServer.ts文件。请参照文件内部写法'
        ], children: [
            {
                label: 'card.ts',
                des: [
                    '页面-卡片列表, Mock数据模拟'
                ]
            },
            { label: 'systemUser.ts', des: [ '系统管理模块，Mock数据模拟，如角色管理、用户管理' ] },
            { label: 'table.ts', des: [ '页面-业务表格，页面-分类联动表格，页面-树联动表格， Mock数据模拟' ] },
            { label: 'user.ts', des: [ '用户登录、退出登录等数据的Mock数据模拟' ] },
            { label: 'work.ts', des: [ '工作列表的Mock数据模拟' ] },
        ]
    },
    {
        label: 'public', des: [ '一些公用不需要打包的资源' ], children: [
            { label: 'favicon.ico', des: [ '网站图标' ] },
        ]
    },
    {
        label: 'src', des: [ '网站根目录，核心目录，包含了业务代码、路由配置、状态管理、数据请求、自定义组件、自定义事件等等一系列核心的代码' ], children: [
            {
                label: 'api', des: [ '接口集合，用来统一管理接口数据，业务代码通过引入来进行调用' ], children: [
                    {
                        label: 'system', des: [ '系统管理模块的接口' ], children: [
                            { label: 'user.ts', des: [ '用户管理相关接口' ] },
                        ]
                    },
                    { label: 'card.ts', des: ['卡片列表相关接口'] },
                    { label: 'table.ts', des: ['表格类增删改查接口，包括业务表格、分类联动表格、树联动表格。'] },
                    { label: 'user.ts', des: ['登录、退出登录等的接口'] },
                    { label: 'work.ts', des: ['工作列表的接口'] },
                ]
            },
            {
                label: 'assets', des: ['公共资源集中处理'], children: [
                    {
                        label: 'images', des: ['图片'], children: []
                    },
                    {
                        label: 'style', des: ['公共样式管理中心'], children: [
                            { label: 'common.scss', des: ['通用样式，及覆盖样式书写区'] },
                            { label: 'transition.scss', des: ['过渡动画样式书写区，如：fade'] }
                        ]
                    },
                    { label: 'logo.png', des: ['logo图片'] },
                ]
            },
            {
                label: 'components', des: ['公用组件管理'], children: [
                    { label: 'chart', children: [], des: ['echarts公用组件，支持任意类型图表，但体积略大'] },
                    { label: 'cropper', children: [], des: ['弹窗裁剪控件，基于原生cropperjs封装而成'] },
                    { label: 'layer', children: [], des: ['公用弹窗组件，推荐使用'] },
                    { label: 'table', children: [], des: ['公用表格组件，封装了底层的表格和分页功能，并支持所有表格类api，具体使用请参照crud页面'] },
                    { label: 'tinymce', children: [], des: ['文档编辑器组件，基于tinymce封装而成'] },
                ]
            },
            {
                label: 'config', des: ['项目核心配置文件'], children: [
                    { label: 'index.ts', des: ['核心配置文件'] }
                ]
            },
            {
                label: 'demo', des: ['vue模板demo区'], children: [
                    { label: 'vue-dom.vue', des: ['vue操作dom的ts示例文件'] },
                    { label: 'vue.vue', des: ['vue单文件基础模板'] },
                ]
            },
            {
                label: 'directive', des: ['自定义指令集合，包含了点击外部指令、复制指令，防抖指令，拖拽指令，弹窗拖拽指令，长按指令，水印生成指令等，具体使用可参照自定义指令栏目'], children: [
                    { label: 'clickOutside', des: ['点击dom外部指令，触发相应的事件'] },
                    { label: 'copy', des: ['复制指令，可复制ref/reactive等系列的值'] },
                    { label: 'debounce', des: ['防抖指令'] },
                    { label: 'drag', des: ['普通dom拖拽指令'] },
                    { label: 'dragable', des: ['element-plus的弹窗拖拽指令，已高度集成，不通用，可参考表格类页面的新增编辑弹窗，然后拖拽展示'] },
                    { label: 'longpress', des: ['长按指令'] },
                    { label: 'waterMarker', des: ['水印指令'] },
                ]
            },
            {
                label: 'layout', des: [
                    '项目核心布局页面，包含了左侧菜单栏、logo展示区、头部面包屑导航、右侧扩展功能区、标签展示功能区，以及页面刷新全屏等一系列核心的功能', 
                    '左侧菜单栏，包含了收缩，跳转，菜单国际化处理等诸多功能的实现',
                    '顶部功能区，包含了收缩菜单、面包屑导航、标签管理区、右上角功能扩展区等功能'

                ], children: [
                    {
                        label: 'Header', des: ['顶部功能区，左侧有收缩菜单功能、面包屑导航，右侧有全屏、选择语言、选择布局大小（针对element-plus）、主题选择、修改密码、退出登录等功能'], children: [
                            {
                                label: 'functionList', des: ['顶部菜单右侧功能区'], children: [
                                    { label: 'fullscreen.vue', des: ['全屏功能'] },
                                    { label: 'github.vue', des: ['github导航功能'] },
                                    { label: 'sizeChange.vue', des: ['尺寸修改功能'] },
                                    { label: 'theme.vue', des: ['主题 ，系统配置选择功能'] },
                                    { label: 'word.vue', des: ['语言选择功能'] },
                                ]
                            },
                            { label: 'Breadcrumb.vue', des: ['页面导航功能'] },
                            { label: 'index.vue', des: ['顶部header主文件，用于顶部布局及引入相关功能组件'] },
                            { label: 'passwordLayer.vue', des: ['密码修改弹窗功能'] },
                        ]
                    },
                    {
                        label: 'Logo', des: ['logo展示区代码'], children: [
                            { label: 'index.vue', des: ['logo展示主文件'] }
                        ]
                    },
                    {
                        label: 'Menu', des: ['左侧菜单管理区'], children: [
                            { label: 'index.vue', des: ['菜单管理主文件'] },
                            { label: 'Link.vue', des: ['跳转功能实现'] },
                            { label: 'MenuItem.vue', des: ['菜单单行组件，包含了下拉展开等一系列的功能'] },
                        ]
                    },
                    {
                        label: 'Tabs', des: ['标签管理区，包含了keep-alive功能的主要实现区，刷新，关闭页面，路由跳转之后自动定位功能'], children: [
                            { label: 'index.vue', des: ['主文件，实现了重新加载等一系列的功能'] },
                            { label: 'item.vue', des: ['基础组件，你所看到的每一个可点击的标签都是基于这个文件'] },
                            { label: 'tabsHook.ts', des: ['主要是本地存储相关的一些函数处理'] },
                        ]
                    },
                    {
                        label: 'index.vue', des: ['layout核心文件，用于引入上述那些菜单、功能以及实现布局等功能，router文件夹里面引入的就是此文件']
                    }
                ]
            },
            {
                label: 'locale', des: ['国际化处理文件， 可适用各类中大型项目的国际化管理'], children: [
                    {
                        label: 'modules', des: ['国际化信息配置区，可基于这个文件夹扩展语言'], children: [
                            { label: 'en.ts', des: ['英语相关'], },
                            { label: 'zh.ts', des: ['中文相关'] }
                        ]
                    },
                    { label: 'index.ts', des: ['国际化配置文件管理中心，main.ts内引入此文件'] },
                ]
            },
            {
                label: 'router', des: ['路由管理中心，可自由切换hash或history模式'], children: [
                    { label: 'modules', des: ['核心路由配置区域，需要在index.ts内引入使用，因为自动引入有顺序问题，故不使用文件夹直接解析的模式'], children: [] },
                    { label: 'createNode.ts', des: [
                        '一个很牛逼的配置文件，实现了整个系统两个难点', 
                        '一、keep-alive针对component需要名称的问题，它解决了不用开发人员自己配置名称，由系统自动来生成的名称，并由系统进行自动管理，用户只需要在router里面写入noCache: true，即可直接开启此功能',
                        '二、transition内部不能使用单文件组件的问题，它解决了用户可以直接在template.vue这一类的页面组件内直接写多个同级div的问题，因为transition是用于实现动画的，故需要做此处理'
                    ] },
                    { label: 'index.ts', des: ['路由核心管理文件'] },
                ]
            },
            {
                label: 'store', des: ['vuex状态管理组件,包含了本地化存储插件、分文件管理大文件等功能，已针对于中大型项目做了大量的细节适配。退出功能可直接清除所有的本地存储信息，所以如有异常，重新登录即可。'], children: [
                    { label: 'modules', des: ['分模块定义了各个系列的状态管理文件，不需要在index.ts内部单独引入，已做全量引入，扩展文件，可直接复制其中一个文件进行改造即可。'], children: [] },
                    { label: 'plugins', des: ['主要为本地化插件，支持localStorage/sessionStorage等的存储'] },
                    { label: 'index.ts', des: ['状态管理核心文件'] }
                ]
            },
            { label: 'theme', des: ['主题管理文件，暂未使用到，后期开发计划主要使用的地方。'], children: [] },
            {
                label: 'utils', des: ['部分通用的JS处理逻辑，其中system为系统内部的处理专用，开发者可自行建立其他文件夹来进行开发，以便区分。'], children: [
                    {
                        label: 'system', des: ['系统内部通用处理专用文件夹，包括了进度条处理、请求封装处理、百度统计、标题管理等。'], children: [
                            { label: 'nprogress.ts', des: ['进度条管理文件'] },
                            { label: 'request.ts', des: ['axios封装文件'] },
                            { label: 'statistics.ts', des: ['百度统计专用文件'] },
                            { label: 'title.ts', des: ['页面标题处理专用'] },
                        ]
                    }
                ]
            },
            {
                label: 'views', des: ['页面集中管理中心'], children: [
                    { label: 'main', des: ['业务相关处理建议直接放入此文件夹中，方便统一管理，与路由命名统一，以便后期好维护'], children: [] },
                    {
                        label: 'system', des: ['系统内部处理文件，包括了404页面、401权限页面、登录页面、重定向页面等等。'], children: [
                            { label: '401.vue' },
                            { label: '404.vue' },
                            { label: 'login.vue' },
                            { label: 'redirect.vue' },
                        ]
                    },
                ]
            },
            { label: 'App.vue', des: ['页面入口文件，主要引入了router-view以便路由切换。'], children: [] },
            { label: 'main.ts', des: ['页面核心处理js文件，对vue引入及处理的主要页面，全局JS入口文件'], children: [] },
            { label: 'shims-vue.d.ts', des: [
                'shims-vue.d.ts是为了 typescript 做的适配定义文件，因为.vue 文件不是一个常规的文件类型，ts 是不能理解 vue 文件是干嘛的，加这一段是是告诉 ts，vue 文件是这种类型的。'
            ], children: [] },
        ]
    },
    { label: '.env.development', des: ['环境变量配置文件，本地环境，其他环境自行扩展即可'] },
    { label: '.gitignore', des: ['git提交时忽略的文件'] },
    { label: 'index.html', des: ['页面主入口文件'] },
    { label: 'mockProdServer.ts', des: ['用于线上配置mock数据的文件，需要单独引入mock文件夹内的文件'] },
    { label: 'package.json', des: ['包管理文件'] },
    { label: 'README.md', des: ['项目说明文件'] },
    { label: 'tsconfig.json', des: ['ts配置文件'] },
    { label: 'VERSION.md', des: ['版本说明文件'] },
    { label: 'vite.config.ts', des: ['vite配置文件，包含了分包处理、Mock数据处理、全局@符号处理等基础功能。'] }
]