import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: {
      Home: '/',
      Browse: '/browse',
      Specials: '/specials',
      Community: '/community',
      About: '/about'
    }
  },
  mutations: {},
  actions: {},
});
