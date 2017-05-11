<template>
  <div id="system">
    <Row>
      <div class="system-broadcast">
        <Col span="24">
        <Alert show-icon>
          自定义图标
          <Icon type="android-apps" slot="icon"></Icon>
          <template slot="desc">系统通知</template>
        </Alert>
        </Col>
      </div>
    </Row>
    <Row :gutter="40">
      <div class="system-modular" v-for="n in 4">
        <Col span="6">
        <Card style="width:320px">
          <div style="text-align:center">
            <img src="../../src/assets/logo.png">
            <h3>一套基于 Vue.js 的高质量UI组件库{{n}}</h3>
          </div>
        </Card>
        </Col>
      </div>
    </Row>
    <Row>
      <div class="system-basicdata">
        <Col span="24">
        <div class="border">基本数据</div>
        </Col>
      </div>
    </Row>
  </div>
</template>
<script>
  export default {
    name: 'system',
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style>
  .border {
    border: 1px solid red;
  }
</style>
