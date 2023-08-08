<template>
    <div class="main-container">
        <h1 v-if="!pokemon">Por favor, espere</h1>
        <div v-else>
            <h1>{{$t('main-message')}}</h1>
            <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
            <h2 v-if="showMessage" class="message">{{  message }}</h2>
            <PokemonOptions :pokemonOptions="pokemonArr" @selection="handleSelection" @clickNewGame="newGame"/>
        </div>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import { getPokemonOptions } from '@/helpers/getPokemonOptions';

    export default {
        name: 'PokemonPage',
        components: {
            PokemonOptions, 
            PokemonPicture
        },
        data() {
            return {
                pokemon: null,
                pokemonArr: [],
                showPokemon: false,
                showMessage: false,
                message: '',
                missMessages: [
                    this.$t('miss-messages.message1'),
                    this.$t('miss-messages.message2'),
                    this.$t('miss-messages.message3'),
                    this.$t('miss-messages.message4'),
                    this.$t('miss-messages.message5'),
                ],
                hitMessages: [
                    this.$t('hit-messages.message1'),
                    this.$t('hit-messages.message2'),
                    this.$t('hit-messages.message3'),
                    this.$t('hit-messages.message4'),
                    this.$t('hit-messages.message5'),
                ]
            }
        },
        methods: {
            async mixPokemonArr() {
                this.pokemonArr = await getPokemonOptions()

                const randomId = Math.floor(Math.random() * 4)
                this.pokemon = this.pokemonArr[randomId]
            },
            handleSelection(id) {
                this.showPokemon = true;
                if(id === this.pokemon.id) {  
                    this.message = `${this.hitMessages[Math.floor(Math.random() * 5)]}${this.pokemon.name}!`
                } else {
                    this.message = `${this.missMessages[Math.floor(Math.random() * 5)]}${this.pokemon.name}!`
                }
                this.showMessage = true
            },
            newGame() {
                this.showPokemon = false;
                this.showMessage = false;
                this.pokemon = null;
                this.pokemonArr = [];
                this.mixPokemonArr()
            }
        },
        mounted() {
            this.mixPokemonArr()
            this.pokemonId = Math.ceil(Math.random() * 100)
        }
    }
</script>