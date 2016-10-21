//////////////////////////////////////////////////////////////////////////////////////
//
//      ┏┛┻━━━━━┛┻┓
//      ┃　　　　　  　   ┃
//      ┃　　 　━　　    ┃
//      ┃　┳┛　  ┗┳   ┃
//      ┃　　　　　　     ┃
//      ┃　　　 ┻　　    ┃
//      ┃　　　　　   　  ┃
//      ┗━┓　　　┏━━━┛
//         ┃　　　┃   author:yaohuitao@100tal.com
//         ┃　　　┃   路由配置
//         ┃　　　┗━━━━━━━━━┓
//         ┃　　　　　　　          ┣┓
//         ┃　　　　               ┏┛
//         ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛
//            ┃ ┫ ┫     ┃ ┫ ┫
//            ┗━┻━┛    ┗━┻━┛
//////////////////////////////////////////////////////////////////////////////////////
var homeLogin=require('./home/login');
var appname="摩比学堂专培考核系统";
module.exports = [
    {
        path: '/admin/login',
        name:"adminLogin",
        component: require('./admin/login'),
        beforeEnter: (to, from, next) => {
            document.title="登录后台管理-"+appname;
            next();
        }
    },
    {
        path: '/admin',
        name:"adminIndex",
        component: require('./admin/index'),
        beforeEnter: (to, from, next) => {
            document.title="后台管理-"+appname;
            next();
        },
        children: [
            {
                path: 'main',
                name:"adminMain",
                component: require('./admin/main')
            },
            {
                path: '',
                component: require('./admin/main')
            },
            {
                path: 'student',
                name:"studentList",
                component: require('./admin/studentList')
            },
            {
                path: 'studentAdd',
                name:"studentAdd",
                component: require('./admin/studentAdd')
            }
        ]
    },
    { path: '/',name:"defaultPath", component:homeLogin,beforeEnter: (to, from, next) => {
        document.title="登录前台-"+appname;
        next();
    }},//默认路径
    { path: '/home/login',name:"homeLogin", component:homeLogin,beforeEnter: (to, from, next) => {
        document.title="登录前台-"+appname;
        next();
    }},
    { path: '*', component:require('./components/404'),beforeEnter: (to, from, next) => {
        document.title="404-"+appname;
        next();
    }}
]