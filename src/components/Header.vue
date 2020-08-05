<template>
    <header>

        <router-link class="router-link" to="/">Home</router-link>
        <router-link class="router-link" to="/friendship">Friendship</router-link>
        <router-link class="router-link" to="/friendship/request">Friendship Request</router-link>
        <router-link class="router-link" to="/user">All User</router-link>
        <router-link class="router-link" to="/user/me">Profile</router-link>
        <router-link class="router-link" to="/user/:id(\\d+)">UserId</router-link>

        <nav>
            <router-link class="router-link register" to="/register">Register</router-link>
            <router-link class="router-link login" to="/login">Login</router-link>
            <router-link class="router-link" to="/logout">Logout</router-link>
        </nav>

    </header>
</template>


<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }
</script>


<style scoped>
header {
    display: flex;
    background-color: red;
    color: white;
    height: 50px;
    padding-top: 15px;
}

nav {
    display: flex;
}

nav .router-link {
    position: absolute;
    right: 2%;
    list-style: none;
}

.router-link {
    color: white;
    text-decoration: none;
    margin-left: 2%;
    font-size: 20px;
}

.register {
    right: 13% !important;
}

.login {
    right: 8% !important;
}
</style>