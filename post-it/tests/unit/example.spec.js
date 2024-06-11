import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders props.totalPosts when passed', () => {
    const postsPerPage = 8;
    const wrapper = shallowMount(App, {
      data: {postsPerPage}
    })
    expect(wrapper.number()).toBe(postsPerPage)
  });
  
});

