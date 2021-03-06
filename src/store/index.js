import {createStore} from 'vuex'
import {initialState} from "./initialState";


export const config = {
  state: initialState,
  mutations: {
    setQuery(state, query) {
      state.query = query
    },
    setLocale(state, locale) {
      state.locale = locale
    },
  },
  getters: {
    allProjects(state) {
      return state.projects;
    },
    getQuery(state) {
      return state.query;
    },
    filterByQuery(state) {
      const list = state.projects;
      return list.filter(item => {
        return item.name.toLowerCase().includes(state.query.toLowerCase());
      })
    },
    getLocale(state) {
      return state.locale
    }
  }
};

export const store = createStore(config);
