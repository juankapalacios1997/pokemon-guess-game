import pokemonApi from "@/api/pokemonAPI"

describe('pokemonAPI', () => {
    test('Axios must be configured properly with pokemon API', () => {

        expect( pokemonApi.defaults.baseURL ).toBe('https://pokeapi.co/api/v2/pokemon')

    })

})