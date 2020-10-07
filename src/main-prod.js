import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入设置标题、关键字、描述的模块
import Meta from 'vue-meta'
// 导入公共样式global.css
import './assets/css/global.css'
// 导入动画样式
import './assets/css/animate.css'
// 导入fullpage插件
// import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage'

Vue.config.productionTip = false
Vue.use(Meta)
Vue.use(VueFullPage)
new Vue({
  router,
  data() {
    return {
      keywords: 'web前端，个人简历，开发',
      description: '周振亮的web前端工程师个人简历,前端学习，前端开发'
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: 'keywords',
          content: this.keywords
        },
        {
          name: 'description',
          content: this.description
        }
      ]
    }
  },
  render: h => h(App)
}).$mount('#app')
