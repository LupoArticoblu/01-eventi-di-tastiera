const{ createApp } = Vue;

createApp({
  data() {
    return {
      msg: 'Hello World!',
      testoShow: true,
      stampaInput: '',
      colori:['green', 'yellow', 'red', 'blue'],
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

