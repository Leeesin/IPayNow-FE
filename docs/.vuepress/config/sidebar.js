module.exports = {
    sidebar: [
        {
            title: '开发规范',
            collapsable: true,
            children: [
                '/开发规范/Vue开发规范.md',
                '/开发规范/接口开发规范.md',
            ]
        },
        {
            title: 'Vue组件库',
            collapsable: true,
            children: [
                '/Vue组件库/sync-date-picker'
            ]
        },
        {
            title: '小程序组件库',
            collapsable: true,
            children: [
                '/小程序组件库/模态框'
            ]
        },
        {
            title: '技术文章精选',
            collapsable: true,
            children: [
                '/技术文章精选/200行代码实现简版react.md',
                '/技术文章精选/Promise实现详解.md',
                '/技术文章精选/利用Vue原理实现一个mini版的MVVM框架.md',
            ]
        },
        {
            title: 'electron踩坑',
            collapsable: true,
            children: [
                encodeURI('/electron踩坑/设置透明窗口时的兼容性问题')//vuepress 不支持中文文件名 先解码一下 
            ]
        },
        {
            title: 'JS工具函数',
            collapsable: true,
            children: [
                encodeURI('/JS工具函数/COPY.md')//vuepress 不支持中文文件名 先解码一下 
            ]
        },
        {
            title: '小程序相关',
            collapsable: true,
            children: [
                encodeURI('/小程序相关/禁止再次分享.md')//vuepress 不支持中文文件名 先解码一下 
            ]
        },
        {
            title: '各前端项目文档',
            collapsable: true,
            children: [
                encodeURI('/各前端项目文档/运营后台/doc.md')//vuepress 不支持中文文件名 先解码一下 
            ]
        },
        {
            title: 'Vue基础与进阶',
            collapsable: true,
            children: [
                encodeURI('/Vue基础与进阶/进阶/使用mixin复用业务逻辑.md'),
            ]
        },
        {
            title: '线上代码发布注意事项',
            collapsable: true,
            children: [
                '/线上代码发布注意事项/必看',
            ]
        },

    ]
}