<template>
<div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading' // 定义的组件名称 使用时写法：loading
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width:100%;
  height:100%;
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567656156972&di=ca656268869f611b3d604df4b9d350c3&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fbf745342987031e9387958409c512665db6513ab81bb-5M44D2_fw658') center center no-repeat  white;
  z-index: 1000;
  opacity: 0.3;
}
</style>