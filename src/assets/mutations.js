const mutations = {//其中只能写同步代码，否则 报错
  addTodo(state, payload) {
    console.log(payload);
    let id = state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1
    payload.id = id
    payload.done = false
    state.list.push(payload)
  },
  deleteTodo(state, item) {
    console.log(item);
    const i = state.list.indexOf(item)
    console.log(i);
    state.list.splice(i, 1)
  },
  clear(state) {
    state.list = []
  },
  updateTodo(state, payload) {
    console.log(state, payload);
    payload.item.name = payload.name
  },
  select(state, payload) {
    console.log(state, payload);
    payload.item.done = payload.done
  }
}

export default mutations