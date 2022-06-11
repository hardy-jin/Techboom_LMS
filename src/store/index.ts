// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import UserService from '../services/UserService'

export interface State {
  count: number
  collapse: boolean
  selectedCourseId: string
  user: any
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: null,
    count: 0,
    collapse: false,
    selectedCourseId: ''
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count;
    },
    setCollapse(state: State, collapse: boolean) {
      state.collapse = collapse;
    },
    setSelectedCourse(state: State, selectedCourseId: string) {
      state.selectedCourseId = selectedCourseId;
    }
  },
  actions: {
  },
  getters: {
    getCount(state: State) {
      return state.count;
    },
    getCollapse(state: State) {
      return state.collapse;
    },
    getSelectedCourse(state: State) {
      return state.selectedCourseId;
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}