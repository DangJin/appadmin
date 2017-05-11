<template>
  <div class="edit-form" style="width: 1000px;">
    <Form :model="formItem" :label-width="80">
      <Form-item label="文章标题">
        <Input v-model="formItem.input" placeholder="请输入"></Input>
      </Form-item>
      <Form-item label="文章分类">
        <Select v-model="formItem.select" placeholder="请选择">
          <Option value="item.name"  v-for="item in formItem.select" :key="item.id">{{ item.name}}</Option>
        </Select>
      </Form-item>
      <Form-item label="发布时间">
        <Row>
          <Col span="11">
          <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
          </Col>
          <Col span="2" style="text-align: center">
          -</Col>
          <Col span="11">
          <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
          </Col>
        </Row>
      </Form-item>
      <Form-item label="文章内容">
        <div id="article" style="height: 400px"></div>
      </Form-item>
      <Form-item>
        <Button type="primary">立即发布</Button>
        <Button type="ghost" style="margin-left: 8px">取消</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  import WangEditor from 'wangeditor'
  import { category } from '../../src/api/article/article'
  export default {
    name: '',
    data () {
      return {
        wangEditor: {
          bar: [
            'source', '|',
            'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|',
            'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', '|',
            'link', 'unlink', 'table', 'emotion', '|',
            'img',
            'video',
            // 'location',
            'insertcode', '|',
            'undo', 'redo', 'fullscreen'
          ]
        },
        formItem: {
          input: '',
          select: '',
          date: '',
          time: ''
        }
      }
    },
    methods: {},
    mounted () {
      // 创建编辑器
      var editor = new WangEditor('article')
      editor.config.menus = this.wangEditor.bar
      editor.create()
      // 加载数据
      category().then(res => {
        if (res.status === 200) {
          this.formItem.select = res.data.data
          console.log(res.data)
        }
      })
    }
  }
</script>
<style>
</style>
