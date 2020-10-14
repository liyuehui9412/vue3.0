<template>
  <div class="hello">
    <h1 ref="title">{{ msg }}</h1>
    <button @click="changeColor">变个身</button>
    <button @click="hrefHandle">跳转</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const router = useRouter()
    const changeColor = () => {
      let i = 0
      let str = '#'
      let random = 0
      const aryNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
      for (i = 0; i < 6; i++) {
        random = parseInt(Math.random() * 16)
        str += aryNum[random]
      }
      document.body.style.backgroundColor = str
    }
    const hrefHandle = () => {
      router.push('/my')
    }
    return {
      changeColor,
      hrefHandle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
