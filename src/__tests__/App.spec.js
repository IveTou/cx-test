import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Layout from '@/components/Layout.vue'
import NotFound from '@/components/NotFound.vue'

const factory = () => {
  return shallowMount(App)
}
//If I have time, will change App to change error status by the info state
describe('App', () => {
  it('shows a `not found` page if API`s file has not been fetched', () => {
    const wrapper = factory()
    wrapper.setData({ error: true })
    expect(wrapper.contains(NotFound)).toBeTruthy()
  })

  it('does not show a `not found` page if API`s file has been fetched', () => {
    const wrapper = factory()
    wrapper.setData({ error: false })
    expect(wrapper.contains(NotFound)).toBeFalsy()
  })

  it('shows the main layout page if API`s file has been fetched', () => {
    const wrapper = factory()
    wrapper.setData({ error: false })
    expect(wrapper.contains(Layout)).toBeTruthy()
  })

  it('does not show the main layout page if API`s file has not been fetched', () => {
    const wrapper = factory()
    wrapper.setData({ error: true })
    expect(wrapper.contains(Layout)).toBeFalsy()
  })
});