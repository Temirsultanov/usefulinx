document.addEventListener("DOMContentLoaded", () => {
    const App = {
        data() {
            return {
                page : "signup",
                isSignup : false,
            }
        },
        methods: {
            onLandingSignUpButtonClick () {
                this.page = "signup";
            },
            onLandingLoginButtonClick () {
                this.isSignup = true;
                this.page = "signup";
            },
        },
    }
    Vue.createApp(App).mount("#app");
})