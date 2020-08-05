<template>
	<div class="register">
		<div class="text-md-center">
			<h2>Register</h2>
			Name: <input type="text" v-model="register.name" label="Name" required><br/><br/>
			Username: <input type="text" v-model="register.username" label="Username" required><br/><br/>
			Password: <input type="password" v-model="register.password" label="Password" required><br/><br/>
			
			<button class="mb-3" success @click='registerIt'>Register</button>
		</div>	
	</div>
</template>


<script>
	const axios = require('axios');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TOKEN'
    }
	export default {
		name: 'Register',
		data() {
			return {
				register:{
					username:"",
					password:"",
					name:""
				}
			}
		},
		methods:{
			registerIt() {
				axios.post('http://212.47.241.143:5000/auth/register',this.register, {
                    headers: headers
                })
				.then(response => {
					localStorage.setItem('token',response.data.token);
					console.log(response.data.token);

				});
			}
		}
	}
</script>
