import Vuex from 'vuex'


export const store = new Vuex.Store({
  state: {
    query: '',
    projects: [
      {
        name: 'DZ-Helper',
        description: 'A service for solving homework for schoolchildren and students.',
        style: {
          backgroundColor: '#149DCC',
          boxShadow: 'rgba(20, 157, 204, 0.68) 0 0 1rem 2px'
        },
        linkTo: {
          url: 'https://dz-helper.ru',
          name: 'Homepage',
        }
      },
      {
        name: 'Sibirskiy Konditer',
        description: 'Website for a confectionery store.',
        style: {
          backgroundColor: '#FFC200',
          boxShadow: 'rgba(255, 194, 0, 0.68) 0 0 1rem 2px'
        },
        linkTo: {
          url: 'https://sibirskiy-konditer-uu.ru',
          name: 'Homepage'
        }
      },
      {
        name: 'Explrms Page',
        description: 'This own page :D',
        style: {
          backgroundColor: '#7ec715',
          boxShadow: 'rgba(126, 199, 21, 0.68) 0 0 1rem 2px'
        },
        linkTo: {
          url: 'https://github.com/explrms/explrms-page',
          name: 'GitHub'
        }
      }
    ]
  },
  mutations: {
  },
  getters: {
    allProjects: state => {
      return state.projects;
    }
  }
})
