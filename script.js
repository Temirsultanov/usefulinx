document.addEventListener("DOMContentLoaded", () => {
    const App = {
        data() {
            return {
                page : "landing",
            }
        },
        methods: {
            onLandingSignUpButtonClick () {
                this.page = "signup";
            }
        },
    }
    Vue.createApp(App).mount("#app");
})