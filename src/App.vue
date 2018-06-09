<template>
  <div id="app" class="layout">
    <header>
      <app-header title="Boilerplate App" />
    </header>
    <div class="body">
      <main class="content">
        <app-body />
        <counter></counter>
      </main>
    </div>
    <footer>
      <app-footer />
    </footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';
import Counter from './components/Counter'
import store from './stores/Counter'


export default {
  name: 'App',
  store,
  components: { AppHeader, AppBody, AppFooter, Counter }
};
</script>
