<template>
	<div class="login">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
			<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
	.login{
		width: 400px;
		margin: 0 auto;
	}
</style>
