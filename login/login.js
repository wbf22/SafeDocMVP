
/* global Vue */
/* global axios */

var app = new Vue({
    el: '#app',
    data: {
        username: "",
        password: "",
        destination: "",
    }, 
    methods: {
        login() {
            //TODO do all this with the database
            let token = "";
            if (this.username == "admin" && this.password == "boss") token = "IFj4dkwo820"
            if (this.username == "user" && this.password == "password") token = "8IFj30sJFDD"

            window.location.href = '../' + this.destination + '/' + this.destination + '.html?' + token
        },
        setDestination() {
            this.destination = window.location.search.substring(1);
        }

    },
    created() {
        // TODO: Access back end and populate data
    }
})

app.setDestination()