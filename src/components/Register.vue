<template>
    <div class="grid-container">
        <div v-if="!submitted" class="grid-padding-x grid-x">
            <div class="cell small-12">
                <h1>Join the flock</h1>
                <p>Register for Goodbirds now (no obligation, no payment details).</p>
                <p>Get early access, win goodies and get a discounted rate for life<sup class="asterisk">*</sup></p>
                <form>
                    <div class="grid-x">
                        <div class="cell small-12 medium-6">
                            <label
                                v-bind:class="{ 'is-invalid-label': attemptSubmit && missingName }"
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                aria-describedby="nameHelpText"
                                aria-required="true"
                                required
                                v-bind:class="{ 'is-invalid-input': attemptSubmit && missingName }"
                                v-model="userData.name">
                            <span
                                class="form-error"
                                v-bind:class="{ 'is-visible': attemptSubmit && missingName }"
                            >
                                This field is required.
                            </span>
                            <p class="help-text" id="nameHelpText">Please enter your name.</p>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="cell small-12 medium-6">
                            <label
                                v-bind:class="{ 'is-invalid-label': attemptSubmit && realEmail }">
                                Your email address
                            </label>
                            <input
                                type="text"
                                placeholder="Your email address"
                                aria-describedby="emailHelpText"
                                aria-required="true"
                                required
                                v-bind:class="{ 'is-invalid-input': attemptSubmit && realEmail }"
                                v-model="userData.email">
                            <span
                                class="form-error"
                                v-bind:class="{ 'is-visible': attemptSubmit && realEmail }"
                            >Please enter a valid email address.</span>
                            <p class="help-text" id="emailHelpText">Please enter your email address.</p>
                        </div>
                    </div>
                    <div class="grid-x">
                        <div class="cell small-12 medium-6">
                            <button
                                class="button"
                                @click.prevent="validateForm"
                            >Register</button>
                        </div>
                    </div>
                </form>
                <div class="grid-x grid-padding-y">
                    <div class="cell small-12 medium-6">
                        <p><sup class="asterisk">*</sup> Goodbirds will cost £25 + VAT per month from October 2017. If you sign up for early access before then you will get a lifetime rate of £15.00 + VAT per month.</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="submitted" class="grid-x grid-padding-x">
            <div class="cell small-12 medium-6">
                <p>Thank you for registering with Goodbirds. We'll be in touch soon.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                userData: {
                    name: '',
                    email: '',
                },
                attemptSubmit: false,
                submitted: false,
            };
        },
        computed: {
            missingName() {
                return this.userData.name === '';
            },
            realEmail() {
                const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
                return this.userData.email === '' || !re.test(this.userData.email);
            },
        },
        methods: {
            validateForm() {
                this.attemptSubmit = true;
                if (this.missingName !== true && this.realEmail !== true) {
                    this.submitted = true;
                }
            },
        },
    };
</script>

<style>
    .asterisk {
        top: -0.1em;
        font-size: 25px;
    }
</style>
