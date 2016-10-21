<style scoped>
    .loginTop{ padding:10px; color:#fff; margin:15vh auto 10px; text-shadow: 0 2px 2px rgba(255,255,255,0.3); font-size:24px; text-align: center;}
    .loginBody{ width:100%; height:100vh; overflow: hidden; background:url("./../assets/images/loginBg.jpg") no-repeat; background-size: cover;}
    .loginBox{width: 500px;margin:20px auto; background:rgba(255,255,255,0.8); box-shadow: 0 5px 20px rgba(0,0,0,0.4); border-radius: 10px; padding:60px 40px 40px;  box-sizing: border-box; }
</style>
<template>
    <div class="loginBody">
        <div class="loginTop"><img src="./../assets/images/logo.png"><span>摩比教师选聘专培考核后台管理系统</span><span style="margin-left:10px;">登录</span></div>
        <div class="loginBox">
            <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password" auto-complete="off"  placeholder="6-20位字母或汉字"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.native="onSubmit">登录后台管理</el-button>
                    <!--<el-button @click.native.prevent="">登录前台考核</el-button>-->
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
                this.$router.push({ name: 'adminMain'});
            }
        }
    }
</script>

