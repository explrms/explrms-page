import {createStore} from "vuex";
import {mount} from "@vue/test-utils";
import CProjects from "../../src/components/CProjects";
import {config} from "@/store"

describe('Project List Tests', () => {
    it('Render input and change query', async () => {
        const title = "DZ";
        const $store = createStore(config);
        const wrapper = mount(CProjects, {
            global: {
                plugins: [
                    $store
                ]
            }
        });
        const input = wrapper.find('input');
        input.element.value = title;
        await input.trigger('input');
        const form = wrapper.find('form');
        await form.trigger('submit');
        expect($store.state.query).toBe(title);
        const projects = wrapper.findAll('.projectItem');
        expect(projects.length).toBe(1);
    });
});