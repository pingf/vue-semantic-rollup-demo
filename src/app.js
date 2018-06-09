
import Vue from 'vue';
import SemanticUIVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import Vuex from 'vuex'

Vue.config.productionTip = false;

import App from './App.vue';



Vue.use(SemanticUIVue);
Vue.use(Vuex);

const app = new Vue({
  render: h => h(App)
});

export { app };
