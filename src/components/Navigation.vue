<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 pad-top pad-bottom">
                <img class="logo" src="../../static/img/logo.svg" alt="" />
                <ul class="menu">
                    <router-link to="/" tag="li"><a>Home</a></router-link>
                    <li><a href="https://medium.com/good-birds" target="_blank">News</a></li>
                    <router-link to="/register" tag="li"><a>Register</a></router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
    };
</script>

<style lang="scss">
    .menu {
        float: right;
    }
    .logo {
        float: left;
        width: 260px;
    }
</style>
