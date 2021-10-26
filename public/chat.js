var socket = io();

const app = {
    data() {
        return {
            message: '',
            messages: []
        }
    },
    methods: {
        submit() {
            if (this.message) {
                socket.emit('chat message', input.value);
                this.message = '';
            }
        }
    },
    mounted() {

      socket.on('chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      });
    }
}

Vue.createApp(app).mount('.app')