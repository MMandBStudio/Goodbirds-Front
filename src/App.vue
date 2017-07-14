<template>
    <div id="app">
        <app-styles></app-styles>
        <app-navigation></app-navigation>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation';
    import Footer from '@/components/Footer';
    import Styles from '@/components/styles/Styles';

    export default {
        components: {
            appNavigation: Navigation,
            appFooter: Footer,
            appStyles: Styles,
        },
        name: 'app',
    };
</script>
