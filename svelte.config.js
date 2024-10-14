import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '',  // Kosongkan karena ini langsung di root
    },
    prerender: {
      handleMissingId: 'warn'
    }
  }
};

export default config;
