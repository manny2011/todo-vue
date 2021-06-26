<template>
  <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" />
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<li :class='{completed:item.done,editing:item.id == editId}'
					v-for="item in list"
					:key='item.id'>
						<div class="view">
							<!-- 对于checkbox,其属性名是checked -->
							<input class="toggle" type="checkbox" v-bind:checked='item.done' @input.prevent="select($event,item)" />
							<label @dblclick="showEdit(item)">{{item.name}}</label>
							<button class="destroy" @click.prevent='deleteTodo(item)'></button>
						</div>
						<input class="edit" v-bind:value="item.name" @change.enter='finishEdit($event,item)'/>
					</li>
				</ul>
			</section>
</template>

<script>
// 即store中的各个部分，在组件中都可以映射成更方便使用的对象！
import {mapMutations,mapActions,mapState} from 'vuex'

export default {
	data () {
		return {
			editId:-1
		}
	},
  methods: {
		...mapMutations({
			delTodo:'deleteTodo',
			update:'updateTodo',
			selectTodo:'select'
		}),
		...mapActions([
			'asyncDelete'
		]),
		deleteTodo(item){
			// this.$store.commit('deleteTodo', item)//-->mutation
			this.delTodo(item)
			// this.$store.dispatch({//-->action
			// 	type:'asyncDelete',
			// 	params:{}
			// })
			this.asyncDelete({params:{}})
		},
		showEdit(item){
			this.editId = item.id
		},
		finishEdit(e,item){//多个参数时，得显式地指定下 $event.
			this.editId = -1
			console.log(e,item);
			// this.$store.commit({
			// 	type:'updateTodo',
			// 	name:e.target.value,//这个event是要哪个控件来处理的
			// 	item,
			// })
			this.update({
				name:e.target.value,//这个event是要哪个控件来处理的
				item,
			})
		},
		select(e,item){
			let value = e.target.checked
			console.log(e,value);
			// this.$store.commit({
				// type:'select',
				// done: value,//"true" ---> true  string--->bool
				// item,
			// })
			this.selectTodo({
				done: value,//"true" ---> true  string--->bool
				item,
			})
		}
	},
	computed: {
		...mapState({
			list:state=>state.list
		})
	}
}
</script>

<style>

</style>