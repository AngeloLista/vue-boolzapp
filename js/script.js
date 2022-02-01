console.log('JS OK', Vue);

Vue.config.devtools = true;

const root = new Vue ({
    el: '#root',
    data: {
        user: {
            name: 'Franca Rossi',
            avatar: '_io'
          },
          contacts: [
            {
              name: 'Michele',
              avatar: '_1',
            },
            {
              name: 'Angelo',
              avatar: '_2',
            },
            {
              name: 'Samuele',
              avatar: '_3',
            },
            {
              name: 'Giorgio',
              avatar: '_4',
            },
            {
              name: 'Fabio',
              avatar: '_5',
            },
            {
              name: 'Luisa',
              avatar: '_6',
            },
          ]
    }
})