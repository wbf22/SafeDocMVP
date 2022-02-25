
/* global Vue */
/* global axios */

var app = new Vue({
    el: '#app',
    data: {
        cntr: 0,
        title: "Sexual Misconduct",
        questions: [
            "When did the event occur?",
            "Name of offender if known",
            "List witnesses",
            "Description of Event"
        ],
    }, 
    methods: {
        addQuestion() {
            // TODO: input validation
            this.cntr = this.questions.length
            this.questions.push({
                id: this.cntr,
                text: ""
            })
        },
        save() {
            //TODO save the form in database
            // let questionsText = []
            // questionsText.push(document.getElementById("titleBox").value)
            // for(let i=0; i < this.questions.length; i++) questionsText.push(this.questions[i].text)
            window.location.href = '../formManager.html'//?sharedData=' + questionsText;
        }

    },
    created() {
        // TODO: Access back end and populate data
    }
})


