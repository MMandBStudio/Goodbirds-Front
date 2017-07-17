<template>
    <div class="root-container">
        <div class="hero hero-home pad-bottom">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <h1 class="spaced-h1">Make your business fly</h1>
                        <p class="pad-top">
                            <router-link to="register" tag="a">Register now</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pad bg">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12 medium-9">
                        <p>Goodbirds helps you gather ideas, expand them into marketing concepts, and send them to your customers.</p>
                    </div>
                    <div class="cell small-12 medium-3">
                        <p>
                            <router-link to="register" tag="a" class="button">Create account</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-container pad-top">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12 medium-6 pad-top pad-bottom">
                    <h3>Why Goodbirds?</h3>
                    <p>It makes marketing fun.</p>
                    <ul class="pad-top">
                        <li>Got an idea for a customer offer, or a window display, or a staff day out?</li>
                        <li>Got a promotion from a supplier?</li>
                        <li>Got late availability, or a cancellation to fill?</li>
                        <li>Don’t have the time to capitalise?</li>
                    </ul>
                    <p>Just email it to <a href="mailto:hatch@goodbirds.co.uk">hatch@goodbirds.co.uk</a> and your promotion has already started.</p>
                    <p class="pad-top">Your account will soon be brimming with your original ideas.</p>
                </div>
                <div class="cell small-12 medium-6 pad-top pad-bottom">
                    <img src="../../static/img/want-to-grow.jpg" alt=""/>
                    <p class="text-center pad-top"><i>Would you like to grow faster?</i></p>
                </div>
            </div>
        </div>
        <div class="hero hero-flight pad-top pad-bottom">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12 medium-6 medium-offset-6 float-right">
                        <h3>How it works</h3>
                        <p>Grow your business in ten minutes a day: go to your account, select who to send the offer, news or incentive to (everyone, a group of people or one to one), check it and send it. Collect rewards and keep up the good work.</p>
                        <p>Need a calendar to take bookings? Need an offer page for customers to check out? Need it posting to your Facebook page or Twitter feed? Need to take payments online? Just tick a few boxes and it's done.</p>
                        <p>Your offer is out there, your customers can respond, your business is growing.</p>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="text-center pad-top-large pad-bottom">Goodbirds is fledging now and will be taking flight in September 2017.</h3>
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12 medium-6 card bg pad-top pad-bottom fix-height">
                    <p class="text-center marg-bottom-tiny">* Goodbirds will cost</p>
                    <p class="emph text-center marg-bottom-tiny">£25 + VAT</p>
                    <p class="text-center">per month from October</p>
                    <p>Register for early access now and you'll get a month's free trial and a discounted rate of £15 a month for as long as you stay in the nest.</p>
                </div>
                <div class="cell small-12 medium-6">
                    <img class="fix-height" src="../../static/img/eggs.jpg" alt="" />
                </div>
            </div>
            <div class="grid-x grid-x-padding pad-top">
                <div class="cell small-12">
                    <p class="text-center pad-top">Be a good egg and sign up for early access now to get news, goodies and discounts*</p>
                    <p class="text-center pad-top">
                        <router-link to="register" tag="a" class="button">Create Account</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
    };
</script>

<style lang="scss" scoped>
    .spaced-h1 {
        padding-top: 200px;
    }

    .fix-height {
        height: 375px;
    }
</style>
