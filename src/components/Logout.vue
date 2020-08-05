<template>
	
	<div>
		
		<h2>You are logged out!</h2>
	</div>

</template>


<script>
	const axios = require('axios');
	const headers = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
        }
    }

	export default {
		name: "Logout",
		created () {
			axios.get("http://212.47.241.143:5000/logout", {
				headers: headers
			})
			.then(response => {
				localStorage.removeItem('token');
				console.log(response);
				this.$router.push('/');
			})
		}

	}
</script>
