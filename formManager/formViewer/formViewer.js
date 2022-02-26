
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



var loggedInCheck = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query = window.location.search.substring(1);
    console.log(query)
    if (query != "IFj4dkwo820" && query != "8IFj30sJFDD"){
        window.location.href = '../login/login.html?formManager'//?sharedData=' + questionsText;
    }
    document.getElementById("CM").href = "../../caseManager/caseManager.html?" + query
    document.getElementById("FM").href = "../../formManager/formManager.html?" + query
    return query_string;
}();

