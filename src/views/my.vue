<template>
  <div class="app-container">
    <img alt="girl" src="../assets/lee1.jpeg">
    <br>
    <button @click="printStore">输出vuex</button>
    <br>
    <input v-model="name" type="text">
    <button @click="commitUserInfo">更改vuex数据</button>
    <br>
    <p>接下来，看狗</p>
    <img v-for="item in list" :key="item" class="dogs" :src="item">
  </div>
</template>

<script>
import list from '@/static/dog.json'
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'My',
  setup(props, context) {
    const store = useStore()
    const printStore = () => {
      console.log(store.state.userInfo)
    }
    const name = ref('')
    const commitUserInfo = () => {
      store.commit('setUserInfo', {
        name: name.value
      })
    }
    return {
      printStore,
      name,
      commitUserInfo,
      list
    }
  }
}
</script>

<style lang="scss" scoped>
.dogs {
	width: 300px;
}
</style>
