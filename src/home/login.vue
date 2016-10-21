<style scoped>
    .loginTop{ padding:10px; float:left; color:#fff; text-shadow: 0 2px 2px rgba(255,255,255,0.5); font-size:20px; text-align: center;}
    .loginBody{ width:100%; height:100vh; overflow: hidden; background:url("./../assets/images/homeLogin.jpg") no-repeat; background-size: cover;}
    .loginBox{ width: 500px; position: absolute; top:30vh; left:50%; margin-left:-250px; background:rgba(255,255,255,0.8);border-radius:20px; padding:60px 40px 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.4); box-sizing: border-box; }
    .loginGirl{ width:160px; height:160px; background: url("./../assets/images/loginBoy.png") no-repeat; background-size:100% auto; position: absolute; top:-142px; left:50%; margin-left:-80px;}
</style>
<template>
    <div class="loginBody">
        <div class="loginTop"><img src="./../assets/images/logo.png"><span>摩比教师选聘专培考核系统</span><span style="margin-left:10px;">前台登录</span></div>
        <div class="loginBox">
            <div class="loginGirl"></div>
            <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password" auto-complete="off"  placeholder="6-20位字母或汉字"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success">登录前台考核</el-button>
                    <el-button @click.native.prevent="goadmin" type="text">后台管理系统</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            goadmin(){
                this.$router.push({name:"adminMain"})
            }
        }
    }
</script>
