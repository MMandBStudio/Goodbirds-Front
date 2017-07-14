<template>
    <div class="bg pad-top pad-bottom">
        <div class="grid-container">
            <div class="grid-padding-x grid-x">
                <div class="cell small-12 medium-4">
                    <img src="../../static/img/logo.svg" alt="" />
                </div>
                <div class="cell small-12 medium-8">
                    <ul class="float-right menu pad-top">
                        <router-link to="/" tag="li"><a>Home</a></router-link>
                        <router-link to="/register" tag="li"><a>Register</a></router-link>
                        <li><a href="https://medium.com/good-birds" target="_blank">News</a></li>
                    </ul>
                </div>
            </div>
            <div class="grid-padding-x grid-x pad-top">
                <div class="small-12 medium-8">
                    <p class="small">&copy; 2017 Goodbirds by MM&B Studio</p>
                </div>
                <div class="small-12 medium-4">
                    <p class="small text-right">
                        Privacy | Terms
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer',
    };
</script>
