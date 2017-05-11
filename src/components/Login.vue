<template>
  <div id="login">
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
      <Col span="6">
      <div class="login">
        <div class="login-head">
          <h2>银泉酒店 后台登录</h2>
        </div>
        <div class="login-input">
          <Input v-model="username" icon="person" placeholder="用户名" class="Input-width" size="large"
                 @on-blur="checkUserName"></Input>
          <br>
          <Input v-model="password" icon="eye-disabled" type="password" class="Input-width" placeholder="密码"
                 :maxlength="16"
                 size="large" :disabled="disabled"></Input>
        </div>
        <div class="login-btn">
          <Button type="info" @click="login">登录</Button>
          <br>
          <Button type="info">忘记密码</Button>
        </div>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        disabled: false
      }
    },
    filters: {},
    methods: {
      checkUserName: function () {
        this.disabled = this.username === '' ? Boolean(1) : Boolean(0)
        if (this.username === '') {
          this.$Message.warning('用户名不得为空')
        }
      },
      login: function () {
        if (this.password === '') {
          this.$Message.warning('密码不得为空')
        }
      }
    }
  }
</script>
<style>
  .login {
    margin-top: 120px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    text-align: center;
  }

  .login-head {
    height: 80px;
  }

  .login-head > h2 {
    font-family: "Hiragino Sans GB";
    font-size: 26px;
    text-align: center;
    line-height: 80px;
  }

  .login-input {
    height: 120px;
    padding: 10px;
  }

  .login-input > .Input-width {
    width: 300px;
    margin: 10px;
  }

  .login-btn {
    margin: 20px;
  }

  .login-btn Button {
    margin: 5px;
    width: 300px;
  }
</style>
