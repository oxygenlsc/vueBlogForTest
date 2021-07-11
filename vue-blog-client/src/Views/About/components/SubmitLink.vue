<template>
  <div class="submit-link">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="网站名字" prop="Linkname">
        <el-input v-model="ruleForm.Linkname"></el-input>
      </el-form-item>
      <el-form-item label="网站地址" prop="Linkurl">
        <el-input v-model="ruleForm.Linkurl"></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址" prop="Emilurl">
        <el-input v-model="ruleForm.Emilurl"></el-input>
      </el-form-item>
      <el-form-item label="网站描述" prop="Webdesc">
        <el-input v-model="ruleForm.Webdesc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        Linkname: "",
        Emilurl: "",
        Linkurl: "",
        Webdesc: "",
      },
      rules: {
        Linkname: [
          { required: true, message: "请输入网站名字", trigger: "blur" },
          {
            min: 1,
            max: 40,
            message: "长度在 1 到 40 个字符",
            trigger: "blur",
          },
        ],
        Emilurl: [
          { required: true, message: "请输入网站email", trigger: "blur" },
          {
            min: 1,
            max: 40,
            message: "长度在 1 到 40 个字符",
            trigger: "blur",
          },
        ],
        Linkurl: [
          { required: true, message: "请输入网站地址", trigger: "blur" },
          {
            min: 1,
            max: 40,
            message: "长度在 1 到 40 个字符",
            trigger: "blur",
          },
        ],
        Webdesc: [
          { required: true, message: "请输入网站描述", trigger: "blur" },
          {
            min: 1,
            max: 40,
            message: "长度在 1 到 40 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.$emit('handleSubmit',this.ruleForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style>
</style>