<template>
	<div class="text-md-center">
		<h2>Login</h2>
        <form @keyup.enter="logItIn">
            Username: <input type="text" v-model="login.username" label="Username" required><br/><br/>
            Password: <input type="password" v-model="login.password" label="Password" required><br/><br/>
        </form>

        <button class="mb-3" success @click='logItIn'>Login</button>
	</div>	
</template>


<script>
    const axios = require('axios');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TOKEN'
    }

	export default {
		name: 'Login',
		data() {
			return {
				login:{
					username:"",
					password:""
				}
			}
		},
        
		methods:{
			logItIn(){
				axios.post('http://212.47.241.143:5000/auth/login',this.login, {
                    headers: headers
                })
				.then(response => {
					localStorage.setItem('token',response.data.token);
					console.log(response.data.token)
					

					this.$router.push('/');
				},);
			}
		}
    }

</script>
