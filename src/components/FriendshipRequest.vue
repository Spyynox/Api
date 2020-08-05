<template>
	<div class="text-md-center">
        <form @keyup.enter="logItIn">
            requestedId: <input type="text" v-model="posts.requestedId" label="requestedId" required><br/><br/>
        </form>

        <button class="mb-3" success @click='logItIn'>Login</button>

        <div v-for="post in posts" :key="post.id">
            <div class="card">
                <div class="card-body">
                    <p class="full-name">Utilisateur n° {{ post.id }}</p>
                    <p class="full-name">{{ post.name }}</p>
                </div>

                
                <div class="card-footer">
                    <div class="col vr">
                        <button class="mb-3" @click='Accept(posts.id)'>Accepter</button>
                    </div>
                    <div class="col">
                        <button class="mb-3" @click='Delete'>Refusé</button>
                    </div>
                </div>

                <div>
                    <button class="mb-3" @click='removeFirends'>Refusé</button>
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
        name: 'FriendshipRequest',
        data() {
            return {
                posts: [],
                errors: [],
                data: {
                    requestedId: ""
                },
                id: ""
                ,
            }
        },

        // Fetches posts when the component is created.
        created() {
            axios.get(`http://212.47.241.143:5000/friendship/request`, headers)
            .then(response => {
                // JSON responses are automatically parsed.
                this.posts = response.data
                console.log(response)
            })
            
        },

        methods:{
            logItIn(){
                axios.post('http://212.47.241.143:5000/friendship/request',this.data.requestedId , headers)
                .then(response => {
                    console.log(response)
                })
                .catch((response, err) => {
                    console.log(err);
                    console.log();
                })
            },

            Accept() {
                axios.get(`http://212.47.241.143:5000/friendship/request/${encodeURIComponent(this.id)}/accept`, headers)
                .then(response => {
                    console.log(response)
                })
            },

            Delete() {
                axios.get(`http://212.47.241.143:5000/friendship/request/${encodeURIComponent(this.id)}/reject`, headers)
                .then(response => {
                    console.log(response)
                })
            },

            removeFirends() {
                axios.delete("friendship/request/" + encodeURIComponent(this.id), headers)
                .then(response => {
                console.log(response);
                })
            },
        }
    }
</script>

<style>

    .text-md-center {
        margin-top: 2%;
    }

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