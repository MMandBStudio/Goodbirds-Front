<template>
    <div>
        <app-fonts></app-fonts>
        <app-typography></app-typography>
        <app-margins></app-margins>
        <app-padding></app-padding>
        <app-buttons></app-buttons>
        <app-backgrounds></app-backgrounds>
        <app-heroes></app-heroes>
    </div>
</template>

<script>
    import Fonts from '@/components/styles/Fonts';
    import Typography from '@/components/styles/Typography';
    import Margins from '@/components/styles/Margin';
    import Padding from '@/components/styles/Padding';
    import Buttons from '@/components/styles/Buttons';
    import Backgrounds from '@/components/styles/Backgrounds';
    import Heroes from '@/components/styles/Heroes';

    export default {
        components: {
            appFonts: Fonts,
            appTypography: Typography,
            appMargins: Margins,
            appPadding: Padding,
            appButtons: Buttons,
            appBackgrounds: Backgrounds,
            appHeroes: Heroes,
        },
        name: 'styles',
    };
</script>
