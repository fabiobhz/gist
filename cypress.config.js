module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      const data = {}
      on('task', {
        save(x) {
          console.log('gist_id', x)
          data['gist_id'] = x
          return null// implement node event listeners here
        },
        load() {
          console.log('returning', data.gist_id)
          return data['gist_id'] || null
        }
      })
    },
    baseUrl: 'https://api.github.com',
    testIsolation: false,
    experimentalRunAllSpecs: true,
  },
};


