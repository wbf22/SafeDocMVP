
/* global Vue */
/* global axios */

var app = new Vue({
    el: '#app',
    data: {
        selectedForm: 0,
        forms: [
            {
                id: 0,
                name: "Sexual Misconduct",
                questions: [
                    "When did the event occur?",
                    "Name of offender if known",
                    "List witnesses",
                    "Description of Event"
                ]
            },
            {
                id: 1,
                name: "Workplace Violence",
                questions: [
                    "When did the event occur?",
                    "Name of offender if known",
                    "List witnesses",
                    "Description of Event"
                ]
            }
        ],
        newForm: '',
    }, 
    methods: {
        formSelected(id) {
            console.log(id)
            var query = window.location.search.substring(1);
            window.location.href = 'formViewer/formViewer.html?' + query
        },
        
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
    document.getElementById("CM").href = "../caseManager/caseManager.html?" + query
    document.getElementById("FM").href = "../formManager/formManager.html?" + query
    document.getElementById("FMak").href = "formMaker/formMaker.html?" + query
    return query_string;
}();



// var QueryString = function () {
//     //I copied this off the internet. I might be a way to pass objects between 
//     //views. I was thinking of doing that to show the saved form after you make it 
//     //in the form manager. Not sure how to do that yet
//     var query_string = {};
//     var query = window.location.search.substring(1);
//     console.log(query)
//     var vars = query.split("&");
//     for (var i=0;i<vars.length;i++) {
//       var pair = vars[i].split("=");
//           // If first entry with this name
//       if (typeof query_string[pair[0]] === "undefined") {
//         query_string[pair[0]] = decodeURIComponent(pair[1]);
//           // If second entry with this name
//       } else if (typeof query_string[pair[0]] === "string") {
//         var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
//         query_string[pair[0]] = arr;
//           // If third or later entry with this name
//       } else {
//         query_string[pair[0]].push(decodeURIComponent(pair[1]));
//       }
//     } 
//     return query_string;
// }();
