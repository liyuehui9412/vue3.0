<template>
  <div class="app-container">
    <img alt="girl" src="../assets/lee.jpeg">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const msg = '碰一下QAQ'
    return {
      msg: msg
    }
  }
}
</script>

<style scoped>
</style>
