import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import NotFound from '@/components/NotFound.vue'

const factory = (values = {}) => {
  return shallowMount(App, {
    data: { ...values  }
  })
}

describe('App', () => {
  it('does not show a not-found page if there is no error', () => {
    const wrapper = factory({ error: false  })

    expect(wrapper.find(NotFound).exists()).toBeFalsy()
  })

  it('shows a not-found page if an error exists', () => {
    const wrapper = factory({ error: true  })

    expect(wrapper.find(NotFound).exists()).toBeTruthy()
  })
})