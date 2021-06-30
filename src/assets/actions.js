const actions = {//actions提交的是mutation,要想改数据，必须得commit ,触发mutation去改变！
  asyncDelete({ commit, state, rootState }) {//参数解析 es6
    setTimeout(() => {
      console.log('baozi async ');
    }, 500)
  }
}

export default actions

//职责分离，大项目分开管理方便！