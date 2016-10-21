<style scoped>
    .studentList{ background: #fff; border-radius: 6px; padding:20px; }
    .form-title{ font-size:20px; padding-bottom: 20px; padding-top: 10px; font-weight: normal;}
    .form-base{ clear: both; position: relative; padding-right: 190px;}
    .form-base-left{}
    .form-base-right{ width:150px; height:150px; position: absolute; right:0px; top:0px;}
</style>
<style>
    .studentList-top .el-form-item__content{ float:left;}
    .form-base-right .el-dragger__cover__progress{width:100%; margin-top: 10%;}
    .studentList_table .el-table th > div{display: inline;}
    .form-base-right .el-dragger{ width:150px; height:150px;}
    .form-base-right .el-icon-plus{ width:60px; height:60px; color:#99a9bf; font-size:50px;margin: 40px 0 3px;}
</style>
<template>
    <div>
        <div class="studentList">
            <div class="clearfix">
                <el-form ref="form" :rules="rules" :model="form" label-width="80px" @submit.prevent="onSubmit">
                    <h2 class="form-title">基本信息</h2>
                    <div class="form-base clearfix">
                        <div class="form-base-left">
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="姓名" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="性别">
                                        <el-select v-model="form.sex" placeholder="性别">
                                            <el-option label="男" value="man"></el-option>
                                            <el-option label="女" value="woman"></el-option>
                                        </el-select>
                                        <!--<select v-model="form.sexy" class="el-input__inner" placeholder="性别">
                                            <option value="">请选择性别</option>
                                            <option value="man">男</option>
                                            <option value="woman">女</option>
                                        </select>-->
                                    </el-form-item>

                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="籍贯">
                                        <el-input v-model="form.native"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="毕业学校">
                                        <el-input v-model="form.school"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="专业">
                                        <el-input v-model="form.discipline"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="学历">
                                        <el-input v-model="form.education"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="科目">
                                        <el-input v-model="form.subject"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="年级">
                                        <el-input v-model="form.grade"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="电话">
                                        <el-input v-model="form.tel"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="form-base-right">
                            <el-upload
                                    action="http://jsonplaceholder.typicode.com/"
                                    type="drag"
                                    :thumbnail-mode="true"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                            >
                                <i class="el-icon-plus"></i>
                                <div class="el-dragger__text">添加照片</em></div>
                            </el-upload>
                        </div>
                    </div>
                    <h2 class="form-title">个人表现</h2>
                    <div class="form-box">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="功底测试">
                                    <el-col :span="16">
                                        <el-input v-model="form.score1"></el-input>
                                    </el-col>
                                    <el-col :span="8">&nbsp;&nbsp;分</el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item label="行业调查报告成绩" label-width="160px">
                                    <el-col :span="6">
                                        <select v-model="form.score2" placeholder="A" class="el-input__inner">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="B">C</option>
                                            <option value="B">D</option>
                                        </select>
                                    </el-col>
                                    <el-col :span="18">
                                    </el-col>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="展现力">
                                    <el-col :span="16">
                                        <el-input v-model="form.score3"></el-input>
                                    </el-col>
                                    <el-col :span="8">&nbsp;&nbsp;分</el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="功底" label-width="160px">
                                    <el-col :span="16">
                                        <el-input v-model="form.score4"></el-input>
                                    </el-col>
                                    <el-col :span="8">&nbsp;&nbsp;分</el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="积极">
                                    <el-col :span="16">
                                        <el-input v-model="form.score5"></el-input>
                                    </el-col>
                                    <el-col :span="8">&nbsp;&nbsp;分</el-col>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="作业质量">
                                    <el-col :span="16">
                                        <el-input v-model="form.score6"></el-input>
                                    </el-col>
                                    <el-col :span="8">&nbsp;&nbsp;分</el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="课程设计" label-width="160px">
                                    <el-col :span="16">
                                        <el-input v-model="form.score7"></el-input>
                                    </el-col>
                                    <el-col :span="8">&nbsp;&nbsp;分</el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="语言表达">
                                    <el-col :span="16">
                                        <el-input v-model="form.score8"></el-input>
                                    </el-col>
                                    <el-col :span="8">&nbsp;&nbsp;分</el-col>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="竞赛经历">
                                    <el-input type="textarea" v-model="form.contest" placeholder="如果你无法简洁的表达你的想法，那只说明你还不够了解它。     -- 阿尔伯特·爱因斯坦"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </div>
        </div>
        <adminfooter></adminfooter>
    </div>
</template>
<script>
    import adminfooter from './../admin/footer';
    export default {
        components:{
            adminfooter
        },
        data() {
            return {
                form: {
                    name: '',
                    sex:'',
                    native:'',
                    school:'',
                    discipline:'',
                    education:'',
                    subject:'',
                    grade:'',
                    tel:'',
                    score1:'',
                    score2:'B',
                    score3:'',
                    score4:'',
                    score5:'',
                    score6:'',
                    score7:'',
                    score8:'',
                    contest:''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动姓名', trigger: 'blur'}
                    ],sexy:[
                        {required: true, message: '请选择性别', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            onSubmit(){

            }
        },
        created () {
            this.$store.state.adminleftnavnum="2-2"; //设置左侧导航2-2 active
        }
    }
</script>
