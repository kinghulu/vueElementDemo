<style scoped>
    .success {
        color: #13CE66;
    }
    .warning {
        color: #f7ba2a;
    }
    .danger {
        color: #ff4949;
    }
    .mtp20{ margin-top: 20px;}
    .adminCount,.adminFunc{ background: #fff; padding:20px; text-align: center;}
    .adminCount .num{font-size:30px; line-height:50px; }
    .adminCount .info{ color:#888; line-height: 20px; padding-top:8px; padding-bottom: 6px;}
    .adminFunc-top{ font-size:20px; color:#17addd; border-bottom:1px dashed #ddd; padding:10px; text-align: left;}
    .adminFunc-list{ overflow: hidden;}
    .adminFunc-list li{ width:20%; float:left; box-sizing: border-box; padding-top: 10px;}
    .adminFunc-list li a{ display: block; padding:20px 0 10px; border-radius:4px; transition: all 0.2s 0s ease;}
    .adminFunc-list li a:hover{ background: #eee;}
    .adminFunc-list-text{ color:#888;}
    .el-icon-addStu{ width:55px; height:55px; background: url(./../assets/images/icos.png) no-repeat; background-position:-2px -36px; }
    .el-icon-addTea{ width:55px; height:55px; background: url(./../assets/images/icos.png) no-repeat; background-position:-64px -36px; }
    .el-icon-addMian{ width:55px; height:55px; background: url(./../assets/images/icos.png) no-repeat; background-position:-190px -36px; }
    .el-icon-viewScore{ width:55px; height:55px; background: url(./../assets/images/icos.png) no-repeat; background-position:-128px -36px; }
    .el-icon-exportScore{width:55px; height:55px; background: url(./../assets/images/icos.png) no-repeat; background-position:-246px -36px; }
    @media screen and (max-width:764px){
        .adminFunc-list li{width:50%;}
    }
    @media screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2) {
        .el-icon-addStu,.el-icon-addTea,.el-icon-addMian,.el-icon-viewScore,.el-icon-exportScore{ transform:scale(0.5,0.5); -webkit-transform:scale(0.5,0.5);transform-origin:50% bottom;-webkit-transform-origin:50% bottom;}
    }
</style>
<template>
    <div class="adminmain">
        <div class="adminCount">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="num warning">216</div>
                    <div class="info">共面试学员</div>
                </el-col>
                <el-col :span="6">
                    <div class="num success">4</div>
                    <div class="info">近期面试</div>
                </el-col>
                <el-col :span="6">
                    <div class="num danger">16</div>
                    <div class="info">总面试次数</div>
                </el-col>
                <el-col :span="6">
                    <div class="num">16</div>
                    <div class="info">评委老师</div>
                </el-col>
            </el-row>
        </div>
        <div class="adminFunc mtp20">
            <div class="adminFunc-top">常用功能</div>
            <div class="adminFunc-list">
                <ul>
                    <li>
                        <router-link :to="{ name: 'studentAdd' }">
                        <div class="adminFunc-list-ico"> <i class="el-icon-addStu"></i></div>
                        <div class="adminFunc-list-text">添加学员</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'studentList' }">
                        <div class="adminFunc-list-ico"> <i class="el-icon-addTea"></i></div>
                        <div class="adminFunc-list-text">添加评委</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'adminLogin' }">
                        <div class="adminFunc-list-ico"> <i class="el-icon-addMian"></i></div>
                        <div class="adminFunc-list-text">添加面试</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'adminLogin' }">
                        <div class="adminFunc-list-ico"><i class="el-icon-viewScore"></i></div>
                        <div class="adminFunc-list-text">查看成绩</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'adminLogin' }">
                        <div class="adminFunc-list-ico"> <i class="el-icon-exportScore"></i></div>
                        <div class="adminFunc-list-text">导出成绩</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <adminfooter></adminfooter>
    </div>
</template>
<script>
    import adminfooter from './../admin/footer'
    export default {
        components: {
            adminfooter
        },
        data() {
            return {
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
