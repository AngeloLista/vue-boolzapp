console.log('JS OK', Vue, dayjs());

Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const root = new Vue ({
    el: '#root',
    data: {
      currentIndex: 0,
      newMessageText: '',
      search: '',
      user: {
          name: 'Franca Rossi',
          avatar: '_io'
        },
      contacts: [{
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          },
          ],
        },
        {
          name: 'Angelo',
          avatar: '_2',
          visible: false,
          messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_6',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
          ],
        },
      ],
    },
    methods: {
      chatSelector(index) {
        this.currentIndex = index;
      },

      sendMessage() {
        if(!this.newMessageText) return;

        // Aggiungo messaggio inviato all'array 'messages'
        this.addMessage(this.newMessageText, 'sent')
        // Aggiungo risposta automatica
        setTimeout(() => {
          this.addMessage('Ok', 'received')
        }, 1000);
        
        this.newMessageText = '';
        
      },

      addMessage(text, status) {
        this.contacts[this.currentIndex].messages.push(
          {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text,
            status,
          }
        );  
      },

      isActive(index) {
        if (this.currentIndex === index) {
          return true;
        } else {
          return false;
        }
      },
      filterItems() {
        return this.contacts[this.currentIndex].name.filter(function(el) {
          return el.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        })
      },
    },
})