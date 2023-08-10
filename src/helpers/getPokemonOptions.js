import pokemonApi from "@/api/pokemonAPI"

export const getPokemons = () => {

    const pokemonsArr = Array.from ( Array(100) )
    return pokemonsArr.map((_, index) => index + 1)

}

export const getPokemonNames = async([a, b, c, d] = []) => {
    const arrPromises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    
    const [ p1, p2, p3, p4 ] = await Promise.all( arrPromises )
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]
}

export const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    
    const pokemonOptions = await getPokemonNames(mixedPokemons.splice(0, 4))

    return pokemonOptions
}