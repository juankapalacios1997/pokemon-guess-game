import { shallowMount } from "@vue/test-utils";
import { mockPokemons } from "../mocks/pokemons.mock";
import PokemonOptions from "@/components/PokemonOptions.vue";

describe('PokemonOptions', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            global: {
                mocks: {
                    $t: (msg) => msg
                }
            },
            props: {
                pokemonOptions: mockPokemons,
                nameSelected: [{ name: 'bulbasaur', id: 1 }],
                isCorrect: true,
            },
        })
    })

    test('It should match with snapshot', () => {

        
        expect( wrapper.html() ).toMatchSnapshot()
        

    })

    // test('Should get the correct style.backgroundColor property when isCorrect is true', () => {

    //     const defineIsCorrect = jest.spyOn( wrapper.vm, 'function' )

    //     let option = wrapper.find('.option-li', {text: 'Bulbasaur'})

    //     wrapper.vm.$options.watch.call(wrapper.vm, 'Bulbasaur')

    //     expect(option.attributes('style').toBe("background-color: rgb(100, 250, 100);"))

    // })

    test('It should display the four options correctly', () => {

        const optionLis = wrapper.findAll(".option-li")
        expect( optionLis.length ).toBe(4)

        const [ li1, li2, li3, li4 ] = optionLis

        expect(li1.text()).toBe('Bulbasaur')
        expect(li2.text()).toBe('Ivysaur')
        expect(li3.text()).toBe('Venusaur')
        expect(li4.text()).toBe('Charmander')

    })

    test('It should emit "selection" with it respective parameters on click', async() => {

        const optionLis = wrapper.findAll(".option-li")
        const handleClick = jest.spyOn(wrapper.vm, 'handleClick')

        const [ li1, li2, li3, li4 ] = optionLis

        await li1.trigger('click')
        await li2.trigger('click')
        await li3.trigger('click')
        await li4.trigger('click')

        expect(handleClick).toHaveBeenCalledWith(1)

        expect(wrapper.emitted("selection").length).toBe(4)
        expect(wrapper.emitted("selection")[0]).toEqual([1])
        expect(wrapper.emitted("selection")[1]).toEqual([2])
        expect(wrapper.emitted("selection")[2]).toEqual([3])
        expect(wrapper.emitted("selection")[3]).toEqual([4])

    })

    test('It should emit "selection" with it respective parameters on click', async() => {

        const newGameBtn = wrapper.find(".button-li")
        const handleNewGame = jest.spyOn(wrapper.vm, 'handleNewGame')

        await newGameBtn.trigger('click')

        expect(handleNewGame).toHaveBeenCalled()

        expect(wrapper.emitted("clickNewGame")).toBeTruthy()

    })

})