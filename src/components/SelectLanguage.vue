<template>
    <div class="language-container">
        <div class="selection-container">
            <select v-model="$i18n.locale">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
                    {{ lang.text }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: "selectLanguage",
    data() {
        return {
            langs: [
                { code: "en", text: "English"},
                { code: "es", text: "Español"}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>