<style scoped>
    .studentList{ background: #fff; border-radius: 6px; padding:20px;}
</style>
<style>
    .studentList-top .el-form-item__content{ float:left;}
    .studentList_table .el-table th > div{display: inline;}
</style>
<template>
    <div class="studentBox">
    <div class="studentList">
        <div class="studentList-top">
            <el-row :gutter="20">
                <el-col :span="20">
                    <div class="grid-content">
                        <el-form label-position="left" :inline="true" :model="form" @submit.prevent="onSubmit" class="demo-form-inline">
                            <el-form-item label="按时间查询">
                                <el-date-picker
                                        v-model="form.date1"
                                        type="daterange"
                                        align="right"
                                        placeholder="选择日期范围"
                                        :picker-options="pickerOptions2"
                                        style="width: 220px">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="按姓名查询">
                                <el-input v-model="form.name" placeholder="请输入学员姓名"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" icon="search">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content" style="text-align: right">
                        <el-button type="success" icon="plus" @click.native="addStudentFn()">添加学员</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="studentList_table" v-loading.fullscreen="fullscreenLoading">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column
                        label="序号"
                        type="index"
                        width="100">
                </el-table-column>
                <el-table-column
                        property="name"
                        label="学员姓名">
                </el-table-column>
                <el-table-column
                        property="tel"
                        label="电话">
                </el-table-column>
                <el-table-column
                        property="sex"
                        label="性别">
                </el-table-column>
                <el-table-column
                        property="date"
                        label="创建日期">
                </el-table-column>
                <el-table-column
                        property="creatman"
                        label="创建人">
                </el-table-column>
                <el-table-column
                        label="操作"
                        inline-template
                >
                    <div>
                        <el-button type="danger" :plain="true" @click.native="delColumn(row.id)" size="small">删除</el-button>
                        <el-button type="primary" :plain="true" @click.native="showDetail(row.id)" size="small">详情</el-button>
                        <el-button type="success" :plain="true" @click.native="editDetail(row.id)" size="small">编辑</el-button>
                    </div>
                </el-table-column>
            </el-table>
        </div>
    </div>
     <adminfooter></adminfooter>
    </div>
</template>
<script>
    import adminfooter from './../admin/footer'

    export default {
        components:{
            adminfooter
        },
        data() {
            return {
                form: {
                    name: '',
                    date1: ''
                },
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                tableData: [{
                    id:"0200232323",
                    date: '2016-05-02',
                    name: '王小虎',
                    tel:"18201652946",
                    sex:"男",
                    creatman:"万军"
                }, {
                    id:"0200232324",
                    date: '2016-05-04',
                    name: '王小虎',
                    tel:"18201652946",
                    sex:"男",
                    creatman:"万军"
                }, {
                    id:"0200232325",
                    date: '2016-05-01',
                    name: '王小虎',
                    tel:"18201652946",
                    sex:"男",
                    creatman:"万军"
                }, {
                    id:"0200232326",
                    date: '2016-05-03',
                    name: '王小虎',
                    tel:"18201652946",
                    sex:"女",
                    creatman:"万军"
                }],
                fullscreenLoading: false
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            delColumn(id){
                this.tableData.shift()
                this.fullscreenLoading = true;
                console.log("删除"+id);
            },
            showDetail(id){
                console.log("详情"+id);
            },
            editDetail(id){
                console.log("编辑"+id);
            },
            addStudentFn(){
                this.$router.push({ name: 'studentAdd'});
            }
        },
        watch:{
            "form.date1":function(){
                console.log(this.form.date1)
            }
        },
        created () {
            this.$store.state.adminleftnavnum="2-1"; //设置左侧导航2-1 active
        }
    }
</script>
