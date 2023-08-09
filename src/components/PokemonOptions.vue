<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemonOptions" :key="pokemon.id" @click="handleClick(pokemon.id)" class="option-li">{{ capitalizeFirstLetter(pokemon.name) }}</li>
            <li class="button-li" @click="handleNewGame">{{$t('new-game')}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PokemonOptions',
        props: {
            pokemonOptions: {
                type: Array,
                required: true
            },
            nameSelected: {
                type: Array
            },
            isCorrect: {
                type: Boolean
            }
        },
        data() {
            return {
                liEles: []
            }
        },
        watch: {
            nameSelected: function(value) {
                let name = this.capitalizeFirstLetter(value[0].name)
                Array.from(this.liEles).filter(ele => { return ele.textContent === name})[0].style = this.isCorrect ? "background-color: rgb(50, 250, 50);" : "background-color: rgb(250, 50, 50);"
            }
        },
        methods: {
            capitalizeFirstLetter(name) {
                return name.charAt(0).toUpperCase() + name.slice(1)
            },
            handleClick(id) {
                this.liEles.forEach(ele => {
                    ele.style.pointerEvents = "none";
                    ele.classList.add("is-disabled")
                })
                this.$emit('selection', id)
            },
            handleNewGame() {
                this.$emit('clickNewGame')
            }
        }, mounted() {
            this.liEles = document.querySelectorAll(".option-li")
        }
    }
</script>