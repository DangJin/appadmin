<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-ceiling">
        <div class="layout-ceiling-main">
          <a href="#">{{count}}</a> |
          <a href="#">帮助中心</a> |
          <a href="#">安全中心</a> |
          <a href="#">服务大厅</a>
        </div>
      </div>
    </Menu>
    <div class="layout-content">
      <Row>
        <i-col span="5">
          <Menu active-name="1-2" width="auto" :open-names="['1']" class="left-menu" @on-select="routeTo">
            <Submenu name="1">
              <template slot="title">
                <Icon type="monitor"></Icon>
                系统配置
              </template>
              <Menu-item name="System">系统信息</Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="person-stalker"></Icon>
                用户管理
              </template>
              <Menu-item name="user">
                用户列表
              </Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-pricetag"></Icon>
                订单管理
              </template>
              <Menu-item name="3-1">选项 1</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-cart"></Icon>
                优惠券管理
              </template>
              <Menu-item name="3-1">选项 1</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-home"></Icon>
                房间管理
              </template>
              <Menu-item name="3-1">选项 1</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-bookmarks"></Icon>
                内容管理
              </template>
              <Menu-item name="Article">所有文章</Menu-item>
              <Menu-item name="Editor">编辑文章</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="19">
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item>Home</Breadcrumb-item>
              <Breadcrumb-item>{{$route.name}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
        </i-col>
        <i-col span="19">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </i-col>
      </Row>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData {{count}}
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters({count: 'count'})
    },
    methods: {
      routeTo (e) {
        this.$router.push(e)
      },
      ...mapActions([
        'increment',
        'decrement'
      ])
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    height: 900px;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
  }

  .layout-breadcrumb {
    border-bottom: 4px solid #f5f7f9;
    padding: 10px 15px;
  }

  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }

  .layout-content {
    min-height: 800px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-ceiling {
    background: #464c5b;
    overflow: hidden;
  }

  .layout-ceiling-main {
    float: right;
    margin-right: 15px;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .left-menu {
    height: 800px;
  }
</style>
