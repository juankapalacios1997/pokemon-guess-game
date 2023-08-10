<template>
    <div class="picture-container">
        <img
            v-if="!showPokemon" 
            :src="imgSrc" 
            class="hidden-pokemon"
            alt="Pokemon"
        />
        <img 
            v-else
            :src="imgSrc" 
            class="revealed-pokemon fade-in"
            alt="Pokemon"
        />
    </div>
</template>

<script>
    export default {
        name: 'PokemonPicture',
        props: {
            pokemonId: {
                type: Number,
                required: true
            },
            showPokemon: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        computed: { 
            imgSrc() {
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
            }
        }
    }
</script>