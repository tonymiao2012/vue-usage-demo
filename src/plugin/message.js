import Vue from 'vue'
import MessageComponent from './Message.vue'

let vm = null

const getInstance = function() {
  if(!vm) {
    // 单例模式
    vm = new Vue({
      render: h => h(MessageComponent)
    }).$mount() // 转换为真实dom
  
    document.body.appendChild(vm.$el) // 挂在body上
  }

  return vm.$children[0];
}

const Message = {
  info(options) {
    getInstance().add(options)
  }
}

export {
  Message,
}
// 挂在到Vue上面，在全局可以用this.$message可以拿到这个插件
export default {
  install(Vue) {
    Vue.prototype.$message = {
      info: Message.info
    }
  }
}