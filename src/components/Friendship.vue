<template>
	<div class="text-md-center">
        <div v-for="post in posts" :key="post.id">
            <div class="card">
                <div class="card-body">
                    <p class="full-name">Utilisateur n° {{ post.id }}</p>
                    <p class="full-name">{{ post.name }}</p>
                </div>
            </div>
        </div>
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
        name: 'Friendship',
        data() {
            return {
                posts: [],
                errors: [],
            }
        },

        // Fetches posts when the component is created.
        created() {
            axios.get(`http://212.47.241.143:5000/friendship`, headers)
            .then(response => {
                // JSON responses are automatically parsed.
                this.posts = response.data
                console.log(response)
            })
        }
    }
</script>
