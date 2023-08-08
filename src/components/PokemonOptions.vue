<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemonOptions" :key="pokemon.id" @click="handleClick(pokemon.id)">{{ capitalizeFirstLetter(pokemon.name) }}</li>
            <li class="button-li" @click="handleNewGame">New Game</li>
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
            }
        }, 
        methods: {
            capitalizeFirstLetter(name) {
                return name.charAt(0).toUpperCase() + name.slice(1)
            },
            handleClick(id) {
                this.$emit('selection', id)
            },
            handleNewGame() {
                this.$emit('clickNewGame')
            }
        }
    }
</script>