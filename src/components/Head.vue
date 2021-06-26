<template>
  <header class="header">
				<h1>todos</h1>
				<input
					class="new-todo"
					placeholder="What needs to be done?"
					autofocus
					v-model="newTodo"
					@keyup.enter='addTodo'
				/>
			</header>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	data:function(){
		return {
			newTodo:''
		}
	},
	methods:{
		...mapMutations({
			add:'addTodo'
		}),
		addTodo(){
			this.add({
				name:this.newTodo,
			})
			// this.$store.commit('addTodo',{
				// name:this.newTodo,
			// })
			this.newTodo = ''
		}
	}
}
</script>

<style>

</style>