<template>
    <div class="selection-container">
        <h2>{{ selectMessage }}</h2>
        <!-- <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
                {{ lang.text }}
            </option>
        </select> -->
        <div class="langoptions-container">
            <div class="flag-container" v-for="(lang, i) in langs" :key="`Lang${i}`">
                <input type="image" :id="lang.text" :src="lang.src" :value="lang.code" @click="handleSelection" :alt="lang.code" width="120" height="70"/>
                <label :for="lang.text">{{  lang.text }}</label>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "selectLanguage",
    data() {
        return {
            langs: [
                { code: "en", text: "English", src: "https://www.cia.gov/the-world-factbook/static/207adb1f82584e4e4812247ee3870228/fc898/UK-flag.jpg"},
                { code: "es", text: "Español", src: "https://www.cia.gov/the-world-factbook/static/d21e89432a1c16c63e5b3c2ecd020800/212d8/SP-flag.jpg" },
                { code: "fr", text: "Français", src: "https://www.cia.gov/the-world-factbook/static/6ff09e3ae4da489810f797ab1cf8e366/f0719/FR-flag.jpg" }
            ]
        }
    },
    computed: {
        selectMessage() {
            return this.$t('select-language')
        }
    },  
    methods: {
        handleSelection(e) {
            this.$i18n.locale = e.target.value
            this.$emit('language-selected')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>