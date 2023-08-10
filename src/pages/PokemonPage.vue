<template>
    <div class="main-container">
        <selectLanguage v-if="selectLanguage" @language-selected="selectLanguage = false"/>
        <div v-else>
            <h1 v-if="!pokemon">{{$t('please-wait')}}</h1>
            <div v-else>
                <h1>{{$t('main-message')}}</h1>
                <PokemonPicture :pokemonName="pokemon.name" :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
                <h2 v-if="showMessage" class="message">{{  message }}</h2>
                <PokemonOptions :nameSelected="selectedPokemon" :isCorrect="isPokemonCorrect" :pokemonOptions="pokemonArr" @selection="handleSelection" @clickNewGame="newGame"/>
                <div class="counter">
                    <p>{{$t('tries')}}: {{ allTries }}</p>
                    <p>{{$t('points')}}: {{ points }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import selectLanguage from '@/components/SelectLanguage.vue'
import { getPokemonOptions } from '@/helpers/getPokemonOptions';

    export default {
        name: 'PokemonPage',
        components: {
            PokemonOptions, 
            PokemonPicture,
            selectLanguage
        },
        data() {
            return {
                pokemon: null,
                pokemonArr: [],
                showPokemon: false,
                showMessage: false,
                message: '',
                allTries: 0,
                points: 0,
                selectedPokemon: [],
                isPokemonCorrect: false,
                selectLanguage: true
            }
        },
        computed: {
            hitMessages() {
                return [
                this.$t('hit-messages.message1'),
                    this.$t('hit-messages.message2'),
                    this.$t('hit-messages.message3'),
                    this.$t('hit-messages.message4'),
                    this.$t('hit-messages.message5'),
                ]
            },
            missMessages() {
                return [
                    this.$t('miss-messages.message1'),
                    this.$t('miss-messages.message2'),
                    this.$t('miss-messages.message3'),
                    this.$t('miss-messages.message4'),
                    this.$t('miss-messages.message5'),
                ]
            },
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
                    this.isPokemonCorrect = true;
                    this.points += 1
                } else {
                    this.message = `${this.missMessages[Math.floor(Math.random() * 5)]}${this.pokemon.name}!`
                    this.isPokemonCorrect = false;
                }
                this.allTries += 1
                this.selectedPokemon = this.pokemonArr.filter(obj => { return obj.id == id })
                this.showMessage = true
            },
            newGame() {
                this.showPokemon = false;
                this.showMessage = false;
                this.pokemon = null;
                this.pokemonArr = [];
                this.selectedPokemon = [];
                this.isPokemonCorrect = undefined;
                this.mixPokemonArr()
            }
        },
        mounted() {
            this.mixPokemonArr()
        }
    }
</script>