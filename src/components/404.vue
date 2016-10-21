<template>
    <div class="page404">
        <div class="pagebg">
            <div class="pagebox">
                <div class="pageimg"><img src="./../assets/images/miss.png"> </div>
                <h1>{{ msg }}</h1>
                <p>Don't worry, you just lost :)</p>
                <p style="font-size:14px;">摩比教师选聘专培考核系统</p>
                <div class="pageBtns">
                    <el-button type="danger" @click.native="showHome">考核首页</el-button>
                    <el-button type="success" @click.native="showAdmin">登录后台管理</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '啊哈！页面不见了~ '
    }
  },methods:{
        showHome(){
            this.$router.push({ name: 'homeLogin'});
        },
        showAdmin(){
            this.$router.push({ name: 'adminLogin'});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page404{ width:100%; height:100vh; overflow: hidden; background:linear-gradient(to bottom,#7de8dc,#d9fbd0);}
    .pagebg{ width:100%; height:100vh; background: url("./../assets/images/page404bg.png") no-repeat center top; background-size: 100% auto;}
    .pagebox{ max-width: 500px; margin: 10vh auto; text-align: center; line-height:200%;}
    .pagebox h1{ font-size:30px; padding:30px 0 10px;}
    .pagebox p{ color:#666; font-size:18px;}
    .pageBtns{ padding:30px 0;}
</style>
