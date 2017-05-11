<template>
  <div id="article">
    <div class="user-search">
      <div class="user-search-input">
        <Input placeholder="请输入..." style="width: 300px" v-model="keyword"></Input>
        <Button type="primary" icon="ios-search" @click="search(keyword)">搜索</Button>
      </div>
    </div>
    <div class="user-list">
      <Table border :context="self" :columns="columns" :data="data"></Table>
      <div class="page">
        <Page :total="Page.total" :current="Page.current" :page-size="Page.pageSize" @on-change="flip"></Page>
      </div>
    </div>
    <Modal
      ok-text="修改"
      v-model="viewModel.isShow"
      :loading="viewModel.loading"
      title="查看详细信息"
      @on-ok="update">
      <Form :model="viewModel" :label-width="80">
        <Form-item label="标题">
          <Input v-model="viewModel.data.title"></Input>
        </Form-item>
        <Form-item label="文本域">
          <Input v-model="viewModel.data.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
        </Form-item>
        <Form-item label="单选框">
          <Radio-group v-model="viewModel.data.status">
            <Radio label="1">开启</Radio>
            <Radio label="0">关闭</Radio>
          </Radio-group>
        </Form-item>
      </Form>
    </Modal>
    </Modal>
  </div>
</template>
<script>
  import { getArticleList, deleteArticle, updateArticle } from '../api/article/article'
  export default {
    name: 'user',
    data () {
      return {
        self: this,
        // 全选length
        allRemove: 0,
        // 搜索
        keyword: '',
        //  查看model
        viewModel: {
          isShow: false,
          loading: true,
          data: {
            id: '',
            title: '',
            content: '',
            status: 0,
            pid: ''
          }
        },
        // 分页配置
        Page: {
          total: 5,
          pageSize: 1,
          current: 1
        },
        // 表头设置
        columns: [
          {
            title: '标题',
            key: 'title',
            render (row, column, index) {
              return `<strong>${row.title}</strong>`
            }
          },
          {
            title: '内容',
            key: 'content',
            render (row, column, index) {
              return row.content.substring(0, 20) + '...'
            }
          },
          {
            title: '栏目',
            key: 'name'
          },
          {
            title: 'pid',
            key: 'pid'
          },
          {
            title: '发布时间',
            key: 'time'
          },
          {
            title: '状态',
            key: 'status',
            render (row) {
              const color = row.status === 1 ? 'green' : 'red'
              const text = row.status === 1 ? '已发布' : '未发布'
              return '<tag type="dot" color="' + color + '">' + text + '</tag>'
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render (row, column, index) {
              let id = row.id
              return `<i-button type="primary" size="small" @click="show(${index})">编辑</i-button> <i-button type="error" size="small" @click="remove(${index},${id})">删除</i-button>`
            }
          }
        ],
        data: []
      }
    },
    mounted: function () {
      let data = {
        limit: this.Page.pageSize
      }
      getArticleList(data).then(res => {
        if (res.status === 200) {
          console.log(res)
          this.data = res.data.data.list
          this.Page.total = res.data.data.dataCount
        } else {
          this.$Message.error('网络异常')
        }
      }).catch(error => {
        this.$Message.error(error)
      })
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
          id: this.viewModel.data.id,
          title: this.viewModel.data.title,
          content: this.viewModel.data.content,
          status: this.viewModel.data.status
        }
        updateArticle(updata).then(res => {
          if (res.status === 200) {
            this.viewModel.loading = false
            this.$Message.success('修改成功')
            this.viewModel.isShow = false
          }
        }).catch(function (error) {
          console.log(error)
          this.$Message.error(error)
        })
      },
      // 添加
      add () {
        this.addModel.isShow = true
      },
      // 删除
      remove (index, id) {
        console.log(id)
        let data = {
          id: id
        }
        deleteArticle(data).then(res => {
          console.log(res)
          if (res.status === 200) {
            this.data.splice(index, 1)
            this.$Message.success('删除成功')
          }
        }).catch(error => {
          this.$Message.error(error)
          console.error(error)
        })
      },
      // 翻页
      flip (index) {
        let data = {
          page: index,
          limit: this.Page.pageSize
        }
        getArticleList(data).then(res => {
          if (res.status === 200) {
            console.log(res.data.data)
            this.data = res.data.data.list
            this.Page.total = res.data.data.dataCount
          }
        }).catch(error => {
          console.log(error)
        })
      },
      // 翻页
      search (keyword) {
        let _keyword = {
          keywords: keyword
        }
        getArticleList(_keyword).then(res => {
          if (res.status === 200) {
            console.log(res.data.data)
            this.data = res.data.data.list
            this.Page.total = res.data.data.total
          }
        }).catch(error => {
          console.log(error)
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
