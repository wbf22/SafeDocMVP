/* global Vue */
/* global axios */

var app = new Vue({
    el: '#app',
    data: {
        selectedCase: 0,
        cases: [
            {
                id: 0,
                name: "Case 1",
                docs: [
                    "Bayesian Networks.jpg",
                    "net.txt",
                    "averagejoe.png"
                ]
            },
            {
                id: 1,
                name: "Case 2",
                docs: [
                    "homie.jpg",
                    "walker.txt",
                ]
            }
        ],
        newCase: '',
    }, 
    methods: {
        uploadDocument() {
            let file = document.getElementById('upload-file-form').value
            file = strip_filepath(file)
            
            // TODO: input validation

            this.cases[this.selectedCase].docs.push(file)
        },
        updateForm() {
            let file = strip_filepath(document.getElementById('upload-file-form').value)
            document.getElementById('upload-file-label').innerHTML = file
        },
        addNewCase() {
            console.log("HELLO")
            // TODO: input validation
            let id = this.cases.length
            this.cases.push({
                id: id,
                name: this.newCase,
                docs: []
            })
            
            this.selectedCase = id
            this.newCase = ''
        },
        removeDocs() {
            let newDocs = []
            newDocs.push(this.cases[0].docs[2])
            this.cases[0].docs = newDocs
        }
    },
    created() {
        // TODO: Access back end and populate data
    }
})

function strip_filepath(filepath) {
    return filepath.slice(filepath.lastIndexOf('\\')+1)
}


var loggedInCheck = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query = window.location.search.substring(1);
    console.log(query)
    if (query != "IFj4dkwo820" && query != "8IFj30sJFDD"){
        window.location.href = '../login/login.html?caseManager'//?sharedData=' + questionsText;
    }
    document.getElementById("CM").href = "caseManager.html?" + query
    document.getElementById("FM").href = "../formManager/formManager.html?" + query

    //cheese to make less documents appear for the 'user' login
    if (query == "8IFj30sJFDD") app.removeDocs()

    return query_string;
}();