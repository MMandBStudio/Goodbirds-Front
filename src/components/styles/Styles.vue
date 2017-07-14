<template>
    <div>
        <app-fonts></app-fonts>
        <app-typography></app-typography>
    </div>
</template>

<script>
    import Fonts from '@/components/styles/Fonts';
    import Typography from '@/components/styles/Typography';

    export default {
        components: {
            appFonts: Fonts,
            appTypography: Typography,
        },
        name: 'styles',
    };
</script>
