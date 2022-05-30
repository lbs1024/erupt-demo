window.eruptSiteConfig = {
    // erupt接口地址，在全后端分离时指定
    domain: "",
    // 附件地址，一般情况下不需要指定，如果自定义对象存储空间，则需要在此指定附件资源访问地址
    fileDomain: "",
    // 标题
    title: "Erupt Framework",
    // 描述
    desc: "通用数据管理框架",
    // 是否展示版权信息
    copyright: true,
    // 高德地图api key，使用地图组件必须指定此属性
    amapKey: "",
    // logo路径
    logoPath: "",
    // logo文字
    logoText: "",
    // 注册页地址
    registerPage: "",
    // 自定义导航栏按钮，配置后将会出现在页面右上角
    r_tools: [{
        text: "自定义功能按钮",
        icon: "fa-eercast",
        mobileHidden: true,
        click: function (event) {
            alert("Function button");
        }
    }],
    // 登录成功事件
    login: function (user) {

    },

    // 注销事件
    logout: function (user) {

    }
};

// 路由回调函数
window.eruptRouterEvent = {
    // key标识要监听的路由切换地址，为url hash 地址最后一段
    demo: {
        // 路由载入事件
        load: function (e) {

        },
        // 路由退出事件
        unload: function (e) {

        }
    },
    // $为全路径通配符，在任何路由切换时都会执行load和unload事件
    $: {
        load: function (e) {

        },
        unload: function (e) {

        }
    }
};

// erupt声明周期函数
window.eruptEvent = {
    // 页面加载完成后回调
    startup: function () {

    }
}
