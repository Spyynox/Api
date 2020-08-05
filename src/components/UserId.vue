<template>
	<div class="text-md-center">

        <div v-for="post in posts" :key="post.id">
            <div v-if="$route.params.id == post.id">
                <div class="card">
                    <div class="card-body">
                        <p class="full-name">Utilisateur n° {{ post.id }}</p>
                        <p class="full-name">{{ post.name }}</p>
                        <p class="username">@{{ post.username }}</p>
                    </div>
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
        name: 'UserId',
        data() {
            return {
                posts: [],
                errors: [],
            }
        },

        // Fetches posts when the component is created.
        created() {
            axios.get(`http://212.47.241.143:5000/user`, headers)
            .then(response => {
                // JSON responses are automatically parsed.
                this.posts = response.data
                console.log(response)
            })
        }
    }
</script>


<style scoped>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Raleway";
        background-color: #e6e6e6;
    }

    .card {
        width: 400px;
        margin: 75px auto 0;
        background-color: #fff;
        box-shadow: 0 3px 30px rgba(0, 0, 0, .14);
        color: #444;
        text-align: center;
        font-size: 16px;
    }

    .card .card-body {
        padding: 10px 40px;
    }

    .card .card-body .full-name {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        margin: 10px 0 0;
    }

    .card .card-body .username {
        font-size: 13px;
        color: #777;
        margin: 5px 0 0;
    }

    .card .card-body .city {
        font-weight: 500;
        margin: 10px 0 0;
    }

    .card .card-body .desc {
        line-height: 24px;
    }

    .card .social-icon {
        font-size: 18px;
        margin: 0 7px;
    }

    .card .social-icon.facebook {
        color: #3b5999;
    }

    .card .social-icon.twitter {
        color: #55acee;
    }

    .card .social-icon.tumblr {
        color: #34465d;
    }

    .card .social-icon.youtube {
        color: #cd201f;
    }

    .card .social-icon.linkedin {
        color: #0077b5;
    }

    .card .social-icon.google-plus {
        color: #dd4b39;
    }

    .card .card-footer {
        display: table;
        width: 100%;
        border-top: 1px solid #e6e6e6;
    }

    .card .card-footer .col {
        display: table-cell;
        padding: 5px 10px;
        font-size: 15px;
    }

    .card .card-footer .count {
        font-size: 18px;
        font-weight: 600;
    }

    .vr {
        border-right: 1px solid #e6e6e6;
    }
</style>