// import { resolve } from 'core-js/fn/promise'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const mutations = {

  setPaymentsListData(state, payload) {
    state.PaymentsList = payload
  },

  pushPaymentsList(state, payload) {
    state.PaymentsList.push(payload)
  },

  setCategoryList(state, payload) {
    if (!Array.isArray(payload)) {
      payload = [payload]
    }
    state.CategoryList.push(...payload)

  },
  addPageList(state, payload) {
    state.pageList = payload
  }


}
const getters = {

  getPaymentsList: state => state.PaymentsList,
  getFullPaymentValue: state => {
    return state.PaymentsList.reduce((res, cur) => res + cur.amount, 0)
  },

  //Длина списка
  addLengthPaymentsListstate: state => {
    return state.PaymentsList.length
    // console.log(state.PaymentsList.length)
  },
  // getCategoryList: state => {
  //   state.CategoryList
  // }
  getCategotylist: state => {
    return state.CategoryList
  },
  getPageList: state => {
    return state.pageList
  }
}

export default new Vuex.Store({
  state: {
    PaymentsList: [],
    LenPaymentsList: '',
    CategoryList: [],
    date: '',
    PaymentsListTest: [],
    pageList: [],
  },
  mutations,

  getters,
  // mutations: {
  //   setPaymentsListData(state, payload) {
  //     state.paymentsList = payload
  //   }
  // },
  actions: {
    getData({ commit }) {
      this.date = new Intl.DateTimeFormat("ru").format(new Date());
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              numberId: '',
              date: this.date,
              category: 'Food',
              amount: 180,
            },
            {
              numberId: '',
              date: this.date,
              category: 'Transport',
              amount: 190,
            },
            {
              numberId: '',
              date: this.date,
              category: 'Category1',
              amount: 200,
            },
          ])
        }, 1200)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    },

    loadCategories({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Category1'])

        }, 1000)
      })
        .then(res => {
          commit('setCategoryList', res)
        })
    },

    pageListfetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              page1: [
                { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
              ]
            },
            {
              page2: [
                { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
              ]
            },
          ])
        }, 100)
      })
        .then(res => {
          commit('addPageList', res)
        })
    }
  },


  modules: {
  }
})
