<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12">
                <ul class="menu">
                    <router-link to="/" tag="li"><a>Home</a></router-link>
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
