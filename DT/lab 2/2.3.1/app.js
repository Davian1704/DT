var app = new Vue({
    el: '#app',
    data: {
        message: '',
        message123:'Message is equal to 123',
        messageout:''
    },
    methods: {
        process: function(){
            if(this.message == '123'){
                
                this.messageout=this.message123;
                console.log(this.messageout);
            }
            else{
                this.messageout=this.message;
                console.log(this.messageout);
                
            }
        }
    }
})