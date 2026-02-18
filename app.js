const app = Vue.createApp({
    data() {
        return {
            message: '',
            theme: 'light'
        }
    },
    computed: {
        htmlOutput() {
            return marked.parse(this.message)
        },
        charCount() {
            return this.htmlOutput.replace(/<[^>]*>/g, '').length
        },
        themeIcon() {
            return this.theme === 'light' ? 'dark_mode' : 'light_mode'
        }
    },
    mounted() {
        const saved = localStorage.getItem('markdownText')
        if (saved) {
            this.message = saved
        }

        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            this.theme = savedTheme
            document.documentElement.setAttribute('data-bs-theme', savedTheme)
        }
    },
    watch: {
        message(newValue) {
            localStorage.setItem('markdownText', newValue)
        },
        theme(newValue) {
            localStorage.setItem('theme', newValue)
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            document.documentElement.setAttribute('data-bs-theme', this.theme)
        }
    }
})

app.mount('#app')