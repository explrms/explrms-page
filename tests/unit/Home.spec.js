import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Render Home View', () => {
    it('Render info', () => {
        const text = '👋Hi, Im Daniil Savchenkov!I am a 20-year-old student programmer from Russia.Here are a few of my projects that may be about my activities.'
        const wrapper = shallowMount(Home)
        expect(wrapper.text()).toMatch(text)
    });
    it('Render input and change query', () => {
        const wrapper = shallowMount(Home)
        wrapper.find('input').setValue('')
    })
})