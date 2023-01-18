import { createStore } from 'vuex'

export default createStore({
  state: {
    journal: [

    ],
    contacts: [
       {
      pseudo:"Victor",
      numero:"06 06 06 06 06",
       },
       {
      pseudo:"Quentin",
      numero:"07 07 07 07 07",
       },
       {
      pseudo:"Oumar",
      numero:"08 08 08 08 08",
       },
    ]
  },
  getters: {
  },
  mutations: {
    ajoutJournal(state,contact) {
    state.journal.push(contact)
    },
  },
  actions: {
  },
  modules: {
  }
})
