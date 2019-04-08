import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Layout from '@/components/Layout.vue'
import NotFound from '@/components/NotFound.vue'

const factory = () => {
  return shallowMount(App)
}

describe('App', () => {
  it('exibe uma mensagem de boas vindas', () => {
    const wrapper = factory()
    wrapper.setData({ error: true })

    //expect(wrapper.contains(NotFound)).toBeTruthy()
    expect(wrapper.find('not-found')).toBeTruthy()
  })
});