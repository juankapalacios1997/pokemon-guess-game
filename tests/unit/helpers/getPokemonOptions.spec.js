import { getPokemons } from "@/helpers/getPokemonOptions"
import { getPokemonNames } from "@/helpers/getPokemonOptions"
import { getPokemonOptions } from "@/helpers/getPokemonOptions"
import { mockPokemons } from "../mocks/pokemons.mock"

describe('getPokemonOptions', () => {

    test('Should return an array of numbers', () => {

        let pokemons = getPokemons()

        expect(pokemons.length).toBe(100)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[99]).toBe(100)

    })

    test('Should return an array of 4 elements with pokemon names and ids', async() => {
        
        const pokeArr = await getPokemonNames([1, 2, 3, 4])

        expect(pokeArr).toStrictEqual(mockPokemons)

    })

    test('Should return a mixed array', async() => {


        const mixedArr = await getPokemonOptions()

        expect(mixedArr.length).toBe(4)
        expect(mixedArr).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])

    })

})