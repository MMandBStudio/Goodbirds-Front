<template>
    <div id="app">
        <app-navigation></app-navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation';

    export default {
        components: {
            appNavigation: Navigation,
        },
        name: 'app',
    };
</script>
