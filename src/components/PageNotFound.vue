<template>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12">
                <p>Grumpy bird image here</p>
            </div>
            <div class="cell small-12">
                <h1>Looks like you fell out of the nest...</h1>
                <p>404 - Page Not Found</p>
                <router-link to="/" tag="a">Return to the home page ')></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pageNotFound',
    };
</script>
