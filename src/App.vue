<template>
    <div id="app">
        <app-styles></app-styles>
        <app-navigation></app-navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation';
    import Styles from '@/components/styles/Styles';

    export default {
        components: {
            appNavigation: Navigation,
            appStyles: Styles,
        },
        name: 'app',
    };
</script>
