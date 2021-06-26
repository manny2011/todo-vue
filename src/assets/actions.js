const actions = {//actions提交的是mutation,要想改数据，必须得commit ,触发mutation去改变！
  asyncDelete(){
    setTimeout(()=>{
      console.log('baozi async ');
    },500)
  }
}

export default actions

//职责分离，大项目分开管理方便！