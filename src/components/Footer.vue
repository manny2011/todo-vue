<template>
  <footer class="footer" v-show="ifFooterShow">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong>{{itemLeftCount}}</strong> item left</span>

				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" v-show="ifClearCompletedShow" @click.prevent='clear'>Clear completed</button>
			</footer>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	methods: {
		clear(){
			this.$store.commit({
				type:'clear',
			})
		}
	},
	computed: {
		...mapGetters([//像使用自身的计算属性一样使用store中的
			'ifFooterShow',
			'itemLeftCount',
			'ifClearCompletedShow'
		])
	}
}
</script>

<style>

</style>