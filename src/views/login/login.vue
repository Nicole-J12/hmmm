<template>
  <div class="login-box">
    <div class="wrap">
      <div class="title">
        <img src="../../assets/login-logo.png" alt="" />
        <span class="login-title">黑马面面</span>
        <i></i>
        <span class="sub-title">用户登录</span>
      </div>
    </div>
    <img src="../../assets/login_banner_ele.png" alt="" />
  </div>
</template>

<script>
export default {};
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
  }
}
</style>
