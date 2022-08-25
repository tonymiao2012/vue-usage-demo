<template>
  <div>
    <div>{{this.title}}</div>
    <slot :contentInfo="contentInfo">默认内容</slot>
    <slot name="footer" :footerInfo="footerInfo">默认footer</slot>
  </div>
</template>

<script>
export default {
  props: ['title'],
  created() {
    // 插槽传值举例
    console.log('current title', this.title);
  },
  data() {
    return {
      footerInfo: {
        name: 'ok'
      },
      contentInfo: {
        name: 'content'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.footerInfo.name = 'cancel'
    }, 3000)
  }
}
</script>