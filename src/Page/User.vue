<template>
  <div id="user">
    <div class="user-search">
      <div class="user-search-btn">
        <Button type="error" @click="removeAll">全部删除</Button>
        <Button type="primary" @click="add">添加用户</Button>
      </div>
      <div class="user-search-input">
        <Input placeholder="请输入..." style="width: 300px"></Input>
        <Button type="primary" icon="ios-search">搜索</Button>
      </div>
    </div>
    <div class="user-list">
      <Table border :context="self" :columns="columns" :data="data" @on-select-all="selectAll"></Table>
      <div class="page">
        <Page :total="Page.total" :current="Page.current" :page-size="Page.pageSize" @on-change="flip"></Page>
      </div>
    </div>
    <Modal
      ok-text="修改"
      v-model="viewModel.isShow"
      :loading="viewModel.loading"
      title="修改个人信息"
      @on-ok="update">
      <Form :model="viewModel" :label-width="80">
        <Form-item label="用户名">
          <Input v-model="viewModel.data.name" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="电话">
          <Input v-model="viewModel.data.tel" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="邮箱">
          <Input v-model="viewModel.data.mail" placeholder="请输入"></Input>
        </Form-item>
      </Form>
    </Modal>
    </Modal>
    <Modal
      v-model="addModel.isShow"
      title="添加用户">
      <Form :model="addModel" :label-width="80">
        <Form-item label="用户名">
          <Input v-model="addModel.name" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="电 话">
          <Input v-model="addModel.emil" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="邮 箱">
          <Input v-model="addModel.mail" placeholder="请输入"></Input>
        </Form-item>
      </Form>
    </Modal>
  </div>
</template>
<script>
  export default {
    name: 'user',
    data () {
      return {
        self: this,
        // 全选length
        allRemove: 0,
        //  查看model
        viewModel: {
          isShow: false,
          loading: true,
          data: {
            name: '',
            tel: '',
            mail: '',
            uid: ''
          }
        },
        // 添加用户model
        addModel: {
          isShow: false,
          name: '',
          age: '',
          address: ''
        },
        // 分页配置
        Page: {
          total: 100,
          pageSize: 1,
          current: 1
        },
        // 表头设置
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '用户名',
            key: 'name',
            render (row, column, index) {
              return `<Icon type="person"></Icon> <strong>${row.name}</strong>`
            }
          },
          {
            title: '电话',
            key: 'tel'
          },
          {
            title: '邮箱',
            key: 'mail'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render (row, column, index) {
              return `<i-button type="primary" size="small" @click="show(${index})">编辑</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
            }
          }
        ],
        data: [
          {
            name: '党金',
            tel: '1573685341',
            mail: '990171616@qq.com',
            uid: 11111
          }
        ]
      }
    },
    methods: {
      // 查看
      show (index) {
        this.viewModel.isShow = true
        this.viewModel.data = this.data[index]
      },
      // 修改
      update () {
        // 封装数据
        let updata = {
          name: this.viewModel.name,
          tel: this.viewModel.tel,
          mail: this.viewModel.mail
        }
        console.log(updata)
      },
      // 添加
      add () {
        this.addModel.isShow = true
        let data = {
          name: '1',
          tel: '1',
          mail: '1',
          uid: '1'
        }
        this.data.push(data)
      },
      // 删除
      remove (index) {
        this.data.splice(index, 1)
      },
      // 翻页
      flip (index) {
        this.data.mail = index
        console.log(this.data)
      },
      // 全选
      selectAll (selection) {
        this.allRemove = selection.length
      },
      // 全选删除
      removeAll () {
        this.$Modal.warning({
          content: '是否要全部删除，删除后数据不可恢复',
          scrollable: true,
          onOk: function () {
          }
        })
      }
    }
  }
</script>
<style>
  .user-search {
    height: 50px;
    padding: 5px 0;
  }

  .user-search-btn {
    position: relative;
    float: left;
  }

  .user-search-input {
    float: right;
  }

  .page {
    width: 420px;
    margin: 0 auto;
    margin-top: 20px;
  }

</style>
