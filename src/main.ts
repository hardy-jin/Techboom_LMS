import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { store,key } from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn' //全局国际化配置：中文
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import axios from 'axios'
import Vue from 'vue'
import 'nprogress/nprogress.css'
import Mock from 'mockjs'
import './mock/index'
import '@/styles/index.scss' // global css
import VuePdf from 'vue3-pdfjs'

const app = createApp(App);


app.use(store,key)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn, //全局国际化配置：中文
      })
    .mount('#app')

Object.keys(Icons).forEach((key) => {
    app.component(key,Icons[key as keyof typeof Icons])
});
