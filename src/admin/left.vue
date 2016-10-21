<style scoped>
    .adminleft{ position: fixed; left:0; top:70px; bottom:0; width:220px; background:#1d2b36;z-index:2;}
    [class*=" el-icon-nav"], [class^="el-icon-nav"]{
        width:24px; height:30px;background: url(./../assets/images/icos.png) no-repeat; vertical-align: middle;
    }
    .el-icon-navHome{background-position:-1px 0px; }
    .el-icon-navUser{background-position:-34px 0px; }
    .el-icon-navMian{background-position:-70px 0px; }
    .el-icon-navAdmin{background-position:-102px 0px; }
    .el-icon-navScore{background-position:-137px -1px;}
    .el-menu-admin{ padding-top: 20px;}
    @media screen and (max-width:764px){
        .el-menu-admin{ padding-top:0px;}
        .adminleft{font-size:14px; position: static; left:0; padding-top: 70px; width:100%;}
    }
</style>
<style>
    .adminleft-nav .el-menu--dark{background-color: #1d2b36;}
    .adminleft-nav .el-menu--dark .el-menu-item, .adminleft-nav .el-menu--dark .el-submenu__title{font-size:16px; color:#7599b1; transition: all 0.2s 0s ease;}
    .adminleft-nav .el-menu--dark .el-submenu .el-menu-item{ font-size:14px;}
    .adminleft-nav .el-menu--dark .el-submenu__title{font-size:16px; color:#7599b1}
    .adminleft-nav .el-menu--dark .is-active{ background: #2e3f4d; color:#39bee9; text-indent: 10px;}
</style>
<template id="leftNavBox">
    <div class="adminleft">
        <div class="adminleft-nav" v-bind:class="navtype">
            <el-menu :default-active="navselected" :active="navselected" @select="selectItems" class="el-menu-admin" theme="dark" router>
                <el-menu-item index="1" :route="{name:'adminMain'}"><i class="el-icon-navHome"></i>主页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-navUser"></i>学员管理</template>
                    <el-menu-item index="2-1" :route="{name:'studentList'}">学员列表</el-menu-item>
                    <el-menu-item index="2-2" :route="{name:'studentAdd'}">添加学员</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-navMian"></i>面试管理</template>
                    <el-menu-item index="3-1">面试列表</el-menu-item>
                    <el-menu-item index="3-2">添加面试</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-navAdmin"></i>人员管理</template>
                    <el-menu-item index="4-1">人员列表</el-menu-item>
                    <el-menu-item index="4-2">添加人员</el-menu-item>
                </el-submenu>
                <el-menu-item index="5"><i class="el-icon-navScore"></i>成绩管理</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                navtype:"horizontal",
                navselected:"1"
            }
        },
        methods: {
            onSubmit() {
            },
            getNavType(){
                this.navselected=this.$store.state.adminleftnavnum;
            },
            selectItems(index){
                this.$store.state.adminleftnavnum=index;
            }
        }/*,
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'getNavType'
        }*/,
        watch: {
            // 监测store.state
            '$store.state.adminleftnavnum': 'getNavType'
        }
    }

</script>
