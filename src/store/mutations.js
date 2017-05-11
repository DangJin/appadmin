/**
 * Created by DangJin on 2017/5/4.
 */
// import * as types from './mutation-types'
// export default {
//   [types.UPDATE_USERINFO] (state) {
//     state.user.name = 'zhuzitongxue'
//   }
// }
export const increment = state => {
  state.count = state.count + 5
}

export const decrement = state => {
  state.count = state.count - 5
}

