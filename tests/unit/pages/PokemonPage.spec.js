import PokemonPage from "@/pages/PokemonPage.vue"
import { shallowMount } from "@vue/test-utils"
import { mount } from "@vue/test-utils"
import { mockPokemons } from "../mocks/pokemons.mock"

describe('PokemonPage', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('It should call mixPokemonArray on mounted', () => {

        const mixPokemonArrSpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArr' )

        shallowMount(PokemonPage)

        expect( mixPokemonArrSpy ).toHaveBeenCalled()

    })

    test('It should match with snapshot when pokemons load', () => {
       const wrapper = shallowMount(PokemonPage, {
            global: {
                mocks: {
                    $t: (msg) => msg
                }
            },
            data() {
                return {
                    pokemon: mockPokemons[0],
                    pokemonArr: mockPokemons,
                    showPokemon: false,
                    showMessage: false,
                    message: '',
                    allTries: 0,
                    points: 0,
                    selectedPokemon: [{ name: 'bulbasaur', id: 1 }],
                    isPokemonCorrect: false,
                    selectLanguage: false
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    // test('It should display PokemonPicture and PokemonOptions components', () => {

    //     const wrapper = mount(PokemonPage, {
    //         global: {
    //             mocks: {
    //                 $t: (msg) => msg
    //             }
    //         },
    //         data() {
    //             return {
    //                 pokemon: mockPokemons[0],
    //                 pokemonArr: mockPokemons,
    //                 showPokemon: false,
    //                 showMessage: false,
    //                 message: '',
    //                 allTries: 0,
    //                 points: 0,
    //                 selectedPokemon: [{ name: 'bulbasaur', id: 1 }],
    //                 isPokemonCorrect: false,
    //                 selectLanguage: false
    //             }
    //         }
    //     })

    //     let pokemonPicture = wrapper.find('.picture-container')
    //     let PokemonOptions = wrapper.find('.options-container')

    //     expect(pokemonPicture.exists()).toBeTruthy()
    //     expect(PokemonOptions.exists()).toBeTruthy()

    //     expect(pokemonPicture.attributes('pokemonname')).toBe('bulbasaur')


    // })

    test('It should display PokemonPicture and PokemonOptions components', () => {

        const wrapper = shallowMount(PokemonPage, {
            global: {
                mocks: {
                    $t: (msg) => msg
                }
            },
            data() {
                return {
                    pokemon: mockPokemons[0],
                    pokemonArr: mockPokemons,
                    showPokemon: false,
                    showMessage: false,
                    message: '',
                    allTries: 0,
                    points: 0,
                    selectedPokemon: [{ name: 'bulbasaur', id: 1 }],
                    isPokemonCorrect: false,
                    selectLanguage: false
                }
            }
        })

        let pokemonPicture = wrapper.find('pokemon-picture-stub')
        let PokemonOptions = wrapper.find('pokemon-options-stub')

        expect(pokemonPicture.exists()).toBeTruthy()
        expect(PokemonOptions.exists()).toBeTruthy()

        expect(pokemonPicture.attributes('pokemonid')).toBe("1")
        expect(PokemonOptions.attributes('pokemonoptions')).toBeTruthy()

    })

    test('Test with handleSelection (correct)', async() => {

        const wrapper = shallowMount(PokemonPage, {
            global: {
                mocks: {
                    $t: (msg) => msg
                }
            },
            data() {
                return {
                    pokemon: mockPokemons[0],
                    pokemonArr: mockPokemons,
                    showPokemon: false,
                    showMessage: false,
                    message: '',
                    allTries: 0,
                    points: 0,
                    selectedPokemon: [{ name: 'bulbasaur', id: 1 }],
                    isPokemonCorrect: false,
                    selectLanguage: false
                }
            }
        })

        await wrapper.vm.handleSelection(1)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.vm.showMessage).toBeTruthy()

        expect(wrapper.vm.allTries).toBe(1)
        expect(wrapper.vm.points).toBe(1)

        expect(wrapper.vm.hitMessages.includes(wrapper.vm.message.slice(0,21))).toBeTruthy()

    })

    test('Test with handleSelection (wrong)', async() => {

        const wrapper = shallowMount(PokemonPage, {
            global: {
                mocks: {
                    $t: (msg) => msg
                }
            },
            data() {
                return {
                    pokemon: mockPokemons[0],
                    pokemonArr: mockPokemons,
                    showPokemon: false,
                    showMessage: false,
                    message: '',
                    allTries: 0,
                    points: 0,
                    selectedPokemon: [{ name: 'bulbasaur', id: 1 }],
                    isPokemonCorrect: false,
                    selectLanguage: false
                }
            }
        })

        await wrapper.vm.handleSelection(20)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.vm.showMessage).toBeTruthy()

        expect(wrapper.vm.allTries).toBe(1)
        expect(wrapper.vm.points).toBe(0)

        expect(wrapper.vm.missMessages.includes(wrapper.vm.message.slice(0,22))).toBeTruthy()

    })

})