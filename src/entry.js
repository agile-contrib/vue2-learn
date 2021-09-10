import Vue from 'vue';

// 引入兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入基础和公共样式
import '@hai2007/style/normalize.css';
import './style/common.css';

/**
 * 查看的时候，放开需要的部分就可以了
 */

import App from './pages/basic.vue'; // 基础

//根对象
new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启动vue
    render: createElement => createElement(App)

});
