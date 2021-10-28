import {mount} from '@vue/test-utils'
import Home from '@/views/Home.vue'
import { store } from '@/store'

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
        });
        expect(wrapper.text()).toMatch(text);
    });
});