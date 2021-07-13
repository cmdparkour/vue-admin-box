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
        label: 'public', des: [ '' ], children: [
            { label: 'favicon.ico', des: [ '' ] },
        ]
    },
    {
        label: 'src', des: [ '' ], children: [
            {
                label: 'api', des: [ '' ], children: [
                    {
                        label: 'system', des: [ '' ], children: [
                            { label: 'user.ts', des: [ '' ] },
                        ]
                    },
                    { label: 'card.ts' },
                    { label: 'table.ts' },
                    { label: 'user.ts' },
                    { label: 'work.ts' },
                ]
            },
            {
                label: 'assets', children: [
                    {
                        label: 'images', children: [
                            { label: '401.gif' },
                            { label: '404_cloud.png' },
                            { label: '404.png' }
                        ]
                    },
                    {
                        label: 'style', children: [
                            { label: 'common.scss' },
                            { label: 'transition.scss' }
                        ]
                    },
                    { label: 'logo.png' },
                ]
            },
            {
                label: 'components', children: [
                    { label: 'chart', children: [] },
                    { label: 'cropper', children: [] },
                    { label: 'layer', children: [] },
                    { label: 'tinymce', children: [] },
                ]
            },
            {
                label: 'config', children: [
                    { label: 'index.ts' }
                ]
            },
            {
                label: 'demo', children: [
                    { label: 'vue-dom.vue' },
                    { label: 'vue.vue' },
                ]
            },
            {
                label: 'directive', children: [
                    { label: 'clickOutside' },
                    { label: 'copy' },
                    { label: 'debounce' },
                    { label: 'drag' },
                    { label: 'dragable' },
                    { label: 'longpress' },
                    { label: 'waterMarker' },
                ]
            },
            {
                label: 'layout', children: [
                    {
                        label: 'Header', children: [
                            {
                                label: 'functionList', children: [
                                    { label: 'fullscreen.vue', },
                                    { label: 'github.vue', },
                                    { label: 'sizeChange.vue', },
                                    { label: 'theme.vue', },
                                    { label: 'word.vue', },
                                ]
                            },
                            { label: 'Breadcrumb.vue' },
                            { label: 'index.vue' },
                            { label: 'passwordLayer.vue' },
                        ]
                    },
                    {
                        label: 'Logo', children: [
                            { label: 'index.vue' }
                        ]
                    },
                    {
                        label: 'Menu', children: [
                            { label: 'index.vue' },
                            { label: 'Link.vue' },
                            { label: 'MenuItem.vue' },
                        ]
                    },
                    {
                        label: 'Tabs', children: [
                            { label: 'index.vue' },
                            { label: 'item.vue' },
                            { label: 'tabsHook.ts' },
                        ]
                    },
                    {
                        label: 'index.vue', children: [

                        ]
                    }
                ]
            },
            {
                label: 'locale', children: [
                    {
                        label: 'modules', children: [
                            { label: 'en.ts' },
                            { label: 'zh.ts' }
                        ]
                    },
                    { label: 'index.ts' },
                ]
            },
            {
                label: 'router', children: [
                    { label: 'modules', children: [] },
                    { label: 'createNode.ts' },
                    { label: 'index.ts' },
                ]
            },
            {
                label: 'store', children: [
                    { label: 'modules', children: [] },
                    { label: 'plugins' },
                    { label: 'index.ts' }
                ]
            },
            { label: 'theme', children: [] },
            {
                label: 'utils', children: [
                    {
                        label: 'system', children: [
                            { label: 'nprogress.ts' },
                            { label: 'request.ts' },
                            { label: 'statistics.ts' },
                            { label: 'title.ts' },
                        ]
                    }
                ]
            },
            {
                label: 'views', children: [
                    { label: 'main', children: [] },
                    {
                        label: 'system', children: [
                            { label: '401.vue' },
                            { label: '404.vue' },
                            { label: 'login.vue' },
                            { label: 'redirect.vue' },
                        ]
                    },
                ]
            },
            { label: 'App.vue', children: [] },
            { label: 'main.ts', children: [] },
            { label: 'shims-vue.d.ts', children: [] },
        ]
    },
    { label: '.env.development', },
    { label: '.gitignore', },
    { label: 'index.html', },
    { label: 'mockProdServer.ts', },
    { label: 'package.json', },
    { label: 'README.md', },
    { label: 'tsconfig.json', },
    { label: 'VERSION.md', },
    { label: 'vite.config.ts', }
]