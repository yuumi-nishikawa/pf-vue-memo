import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    count: 0,
    memos:[]
  },
  getters: {
    getCount:(state) => {
      return state.memos.length
    },
    getAll:(state) => {
      return state.memos
    },
    getMemoById:(state) => (id) => {
      // findは配列の中から条件に合うものを探す
      // ここではidが一致するものを探している
      return state.memos.find((memo) => memo.id === id)
    }
  },
  mutations: {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
    // メモを保存する
    save(state, newMemo) {
      if (newMemo.id) {
        let x = state.memos.find((memo) => memo.id === newMemo.id)
        x.title = newMemo.title
        x.text = newMemo.text
      } else {
      // idを付与する
      // ++でカウントアップ
      newMemo.id = ++state.count
      // 配列の先頭に追加するのがunshift
      state.memos.unshift(newMemo)
      }
    },
    // メモを削除する
    delete(state, id) {
      state.memos = state.memos.filter((memo) => memo.id !== id)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
