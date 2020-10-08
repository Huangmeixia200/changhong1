require.config({
    // baseUrl: '', //公共的路径，基路径，所有模块共有的路径
    paths: { //模块路径,路径引入后缀名必须忽略，配置里面已经存在后缀名（扩展名）。
        //  jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) 
        'jq_Bootstrap':'https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min',
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
        'jq_cookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.0/jquery.cookie.min',
        'jq_lazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.8.3/jquery.lazyload.min',
        'jq_bootstrap':'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min',
      
    },
    shim: { //不支持AMD模块，支持AMD
        'jq_Bootstrap':{
            deps: ['jquery'], //模块的依赖
            exports: 'jq_Bootstrap'
        },
        'jq_cookie': {
            deps: ['jquery'], //模块的依赖
            exports: 'jq_cookie'
        },
        'jq_lazyload': {
            deps: ['jquery'], //模块的依赖
            exports: 'jq_lazyload'
        },
        'jq_bootstrap':{
            deps: ['jquery'],
            exports: 'jq_bootstrap'
        }

    }
});
