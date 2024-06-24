const{ createApp } = Vue;

createApp({
  data() {
    return {
      msg: 'Hello World!',
      testoShow: true,
      stampaInput: '',
      colori:['verde', 'giallo', 'rosso', 'blu'],
    }
  },
  methods: {
    keyUp() {
      console.log(this.msg);
    },
    showTesto() {
      this.testoShow = !this.testoShow;
    }
  }
}).mount('#app')