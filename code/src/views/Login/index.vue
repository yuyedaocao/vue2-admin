<template>
	<div class="login">
		<el-tabs v-model="activeName" @tab-click="handleChanceTab">
			<el-tab-pane label="登录" name="first">
				<el-form label-width="80px" :model="formLogin">
					<el-form-item label="邮箱">
						<el-input v-model="formLogin.username"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input v-model="formLogin.password"></el-input>
					</el-form-item>
					<el-form-item label="验证码">
						<el-col :span="13">
							<el-form-item  label="">
								<el-input v-model="formLogin.vcode"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="9"  :offset="2">
							<el-button type="primary">获取验证码</el-button>
						</el-col>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="handleLogin">登录</el-button>
					</el-form-item>
				</el-form>

			</el-tab-pane>
			<el-tab-pane label="注册" name="second">注册</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				formLogin: {
					username: '',
					password: '',
					vcode: ''
				}
			};
		},
		methods: {
			handleChanceTab(tab, event) {
				console.log(tab, event);
			},
			handleLogin() {
				
			}
		}
	};
</script>

<style>
	.login {
		width: 400px;
		margin: 0 auto;
	}
</style>
