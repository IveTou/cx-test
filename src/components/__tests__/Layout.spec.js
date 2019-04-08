import { shallowMount } from '@vue/test-utils'
import Layout from '@/components/Layout.vue'
import Description from '@/components/Description.vue'
import Loader from '@/components/Loader.vue'
import Maps from '@/components/Maps.vue'

const factory = () => {
  return shallowMount(Layout)
}

const info = {
  customer: { name: '', id: ''},
  origin: {},
  destination: {},
  trucker: { last_app_position_at: '' },
}

describe('Layout', () => {
  it('shows a `loading` page, if API`s files was not fetched yet', () => {
    const wrapper = factory()
    wrapper.setProps({ info: null, loading: true })
    expect(wrapper.contains(Loader)).toBeTruthy()
  })

  it('does not show a `loading` page if API`s files was fetched', () => {
    const wrapper = factory()
    wrapper.setProps({ info, loading: false })
    expect(wrapper.contains(Loader)).toBeFalsy()
  })

  it('shows a `description` page, if API`s files was fetched', () => {
    const wrapper = factory()
    wrapper.setProps({ info, loading: false })
    expect(wrapper.contains(Description)).toBeTruthy()
  })

  it('does not show a `description` page if API`s files was not fetched yet', () => {
    const wrapper = factory()
    wrapper.setProps({ info: null, loading: true })
    expect(wrapper.contains(Description)).toBeFalsy()
  })

  it('shows a `maps` page, if API`s files was fetched', () => {
    const wrapper = factory()
    wrapper.setProps({ info, loading: false })
    expect(wrapper.contains(Maps)).toBeTruthy()
  })

  it('does not show a `maps` page if API`s files was not fetched yet', () => {
    const wrapper = factory()
    wrapper.setProps({ info: null, loading: true })
    expect(wrapper.contains(Maps)).toBeFalsy()
  })
});