<!--
 * @Author: your name
 * @Date: 2022-02-15 18:46:22
 * @LastEditTime: 2022-03-17 14:20:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ruoyi-ui\src\views\index.vue
-->
<template>
  <div class="app-container home">
    <el-row :gutter="20"> this is home </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      // 版本号
      version: '1.0.0',
    }
  },
  methods: {
    goTarget(href) {
      window.open(href, '_blank')
    },
  },
}
</script>

<style scoped lang="scss">
</style>
