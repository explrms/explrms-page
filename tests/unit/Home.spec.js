import {mount} from '@vue/test-utils'
import Home from '@/views/Home.vue'
import { store } from '../../src/store'

describe('Render Home View', () => {
    it('Render info', () => {
        const text = '👋Hi, Im Daniil Savchenkov!I am a 20-year-old student programmer from Russia.Here are a few of my projects that may be about my activities.'
        const $store = JSON.parse(JSON.stringify(store));
        const wrapper = mount(Home, {
            global: {
                mocks: {
                    $store
                }
            }
        })
        expect(wrapper.text()).toMatch(text)
    });
    it('Render input and change query', () => {
        const text = 'DZ'
        const $store = JSON.parse(JSON.stringify(store));
        const wrapper = mount(Home, {
            global: {
                mocks: {
                    $store
                }
            }
        })
        const input = wrapper.find('input')
        input.setValue(text)
        input.trigger('change')
        expect($store.state.query).toMatch(text)
    })
})