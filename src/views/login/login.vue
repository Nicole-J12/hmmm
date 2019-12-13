<template>
  <div class="login-box">
    <div class="wrap">
      <div class="title">
        <img src="../../assets/login-logo.png" alt />
        <span class="login-title">黑马面面</span>
        <i></i>
        <span class="sub-title">用户登录</span>
      </div>
      <el-form class="from-box" ref="form" :model="form">
        <!-- 手机 -->
        <el-form-item>
          <el-input
            v-model="form.name"
            placeholder="请输入手机号码"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-row class="el-row">
            <el-col :span="18">
              <el-input
                v-model="form.key"
                placeholder="请输入验证吗"
                prefix-icon="el-icon-key"
              ></el-input>
            </el-col>
            <el-col :span="6">
              <img src="../../assets/yanzhengma.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 用户协议 -->
        <el-form-item>
          <el-checkbox-group v-model="form.type">
            <el-checkbox v-model="form.checked"
              >我已阅读并同意<el-link type="primary">用户协议</el-link>和
              <el-link type="primary">隐私条款</el-link></el-checkbox
            >
          </el-checkbox-group>
        </el-form-item>
        <!-- 登录及注册 -->
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button type="success">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
};
</script>

<style lang="less">
.login-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .wrap {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding: 43px;

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 28px;
      img {
        width: 22px;
        height: 17px;
        margin-right: 14px;
      }
      .login-title {
        font-size: 24px;
      }
      i {
        width: 1px;
        height: 28px;
        margin: 0 14px;
        background-color: #c7c7c7;
      }
      .sub-title {
        font-size: 22px;
      }
    }

    .from-box {
      .el-row {
        display: flex;
        img {
          width: 100%;
          height: 40px;
        }
      }
      .el-checkbox {
        display: flex;
        align-items: center;
        .el-checkbox__label {
          display: flex;
          align-items: center;
        }
      }
      .el-button {
        width: 100%;
        margin-bottom: 25px;
      }
      .el-button + .el-button {
        width: 100%;
        margin: 0;
      }
    }
  }
}
</style>
