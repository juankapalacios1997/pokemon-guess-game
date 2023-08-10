import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture.vue";

describe('PokemonPicture', () => {

    test('It must match with snapshot', () => {
        
        const wrapper = shallowMount(PokemonPicture, {

            props: {
                pokemonId: 1,
                showPokemon: false
            }

        });

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('It must display hidden img and pokemon 100', () => {

        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const img1 = wrapper.find('img')

        expect( img1.exists() ).toBeTruthy()
        // expect( img2 ).toBe(undefined)

        expect( img1.classes('hidden-pokemon') ).toBeFalsy()
        expect( img1.classes('fade-in') ).toBeTruthy()

        expect( img1.attributes('src') ).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg`)

    })

    test('It must match with snapshot', () => {

    })

})