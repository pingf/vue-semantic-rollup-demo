
import Vue from 'vue';
import SemanticUIVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;

import App from './App.vue';


Vue.use(SemanticUIVue);
const app = new Vue({
  render: h => h(App)
});

export { app };
