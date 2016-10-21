<style scoped>
    .adminTop{ height:70px; position: fixed; left:0; top:0; right:0; z-index: 12; box-shadow: 0 5px 6px -6px rgba(0,0,0,0.3); background:#fff;   font-size:18px;}
    .adminTop-left{ float:left; height:60px; line-height:60px;margin-top:5px;padding-left: 10px;}
    .adminTop-left img{ user-select: none; height:60px;}
    .adminCont{ padding-top:70px; padding-left:220px; box-sizing: border-box; min-height:100vh; background: #f6f8f7;}
    .adminTop-right{float:right;}
    .adminBox{ padding:20px;}
    .adminleft-pic{ float:left; height:50px; width:50px; overflow: hidden; border-radius: 50%; border:1px solid #eee; margin-right:10px;}
    .adminleft-pic img{ width:100%; height:100%;}
    .adminleft-name{ float:left; height:50px; margin-top:10px; line-height:50px; padding:0 20px 0 10px;}
    .adminFoot{ text-align: center; color:#999; font-size:12px; padding:10px;}
    @media screen and (max-width:764px){
        .adminCont{padding-left:0px; padding-top:0px;}
        .adminTop{ font-size:12px;}
        .adminTop-left{ width:40%; line-height: 30px;}
        .adminTop-left img{ float:left;}
        .adminTop-left span{ margin-top:20px; white-space: pre-wrap; word-break: break-all;}
    }
    @media screen and (max-width:320px){
        .adminTop{ font-size:12px;}
        .adminTop-left img{ float:left; display: none;}
        .adminleft-pic{ display: none;}
    }
    .bounce-enter-active {
        -webkit-animation:fadeInDown 0.2s 0s ease both;
        animation:fadeInDown 0.2s 0s ease both;
    }
    .bounce-leave-active {
        -webkit-animation:fadeOutDown 0.2s 0s ease both;
        animation:fadeOutDown 0.2s 0s ease both;
    }

    @-webkit-keyframes fadeInDown{
        0%{opacity:0.4;
            -webkit-transform:translateY(-20px)}
        100%{opacity:1;
            -webkit-transform:translateY(0)}
    }
    @keyframes fadeInDown{
        0%{opacity:0.4;
            transform:translateY(-20px)}
        100%{opacity:1;
            transform:translateY(0)}
    }
    @-webkit-keyframes fadeOutDown{
        0%{opacity:1;
            -webkit-transform:translateY(0)}
        100%{opacity:0;
            -webkit-transform:translateY(20px)}
    }
    @keyframes fadeOutDown{
        0%{opacity:1;
            transform:translateY(0)}
        100%{opacity:0;
            transform:translateY(20px)}
    }
</style>
<template>
    <div class="adminBody">
        <div class="adminTop">
            <div class="adminTop-left"><img src="./../assets/images/logo.png"> <span>摩比教师选聘专培考核后台管理系统</span></div>
            <div class="adminTop-right">
                <div class="adminleft-user">
                    <div class="adminleft-name">
                        <el-dropdown trigger="click">
                            <div class="el-dropdown-link">
                                <div class="adminleft-pic"><img src="./../assets/images/miss.png"></div>
                                {{form.name}}老师<i class="el-icon-caret-bottom el-icon-right"></i>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>修改密码</el-dropdown-item>
                                <el-dropdown-item>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <adminleft></adminleft>

        <div class="adminCont">
            <div class="adminBox">
                <transition name="bounce" mode="out-in" appear>
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
    import adminleft from './../admin/left'
    export default {
        components: {
            adminleft
        },

        data() {
            return {
                form: {
                    name: '万君',
                    password: 'ss'
                }
            }
        }
    }
</script>

