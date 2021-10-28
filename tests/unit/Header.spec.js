import { shallowMount } from '@vue/test-utils'
import Header from '@/components/CHeader.vue'

describe('Render Header', () => {
  it('Render Header successful', () => {
    const msg = 'EXP1RMS'
    const wrapper = shallowMount(Header)
    expect(wrapper.text()).toMatch(msg)
  });
})
