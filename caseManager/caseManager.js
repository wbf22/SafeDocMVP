

/* global Vue */
/* global axios */

let token = ''

var loggedInCheck = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query = window.location.search.substring(1);
    console.log(query)
    if (query != "IFj4dkwo820" && query != "8IFj30sJFDD"){
        window.location.href = '../login/login.html?caseManager'//?sharedData=' + questionsText;
    }
    token = query
    document.getElementById("CM").href = "caseManager.html?" + query
    document.getElementById("FM").href = "../formManager/formManager.html?" + query

    return query;
}();

var app = new Vue({
    el: '#app',
    data: {
        token: token,
        selectedCase: 0,
        cases: [
            {
                id: 0,
                name: "Case 1",
                open: 26,
                expiration: 34,
                docs: [
                    {
                        id: 0,
                        file_name: "1.txt",
                        admin: true
                    },
                    {
                        id: 1,
                        file_name: "2.txt",
                        admin: false
                    },
                    {
                        id: 2,
                        file_name: "3.txt",
                        admin: true
                    },
                    {
                        id: 3,
                        file_name: "4.txt",
                        admin: false
                    },
                    {
                        id: 4,
                        file_name: "5.txt",
                        admin: true
                    },
                    {
                        id: 5,
                        file_name: "6.txt",
                        admin: false
                    },
                    {
                        id: 6,
                        file_name: "7.txt",
                        admin: true
                    },
                    {
                        id: 7,
                        file_name: "8.txt",
                        admin: false
                    },
                ]
            },
            {
                id: 1,
                name: "Case 2",
                open: 56, 
                expiration: 4,
                docs: [
                    {
                        id: 0,
                        file_name: "pic.png",
                        admin: false
                    }
                ]
            }
        ],
        newCase: '',
        newCaseExp: 60,
        newDocAdmin: '',
    }, 
    methods: {
        uploadDocument() {
            let file = document.getElementById('upload-file-form').value
            file = strip_filepath(file)
            
            // TODO: input validation

            this.cases[this.selectedCase].docs.push({
                id: this.cases[this.selectedCase].docs.length,
                file_name: file,
                admin: this.newDocAdmin
            })
        },
        removeDocument(id) {
            console.log(this.token, id)
            let index = -1
            this.cases[this.selectedCase].docs.forEach((item, i) => {
                console.log(item,i)
                if (item.id == id)
                    index = i
            })
            console.log(index)
            this.cases[this.selectedCase].docs.splice(index, 1)
        },
        updateForm() {
            console.log(this.cases)
            console.log(this.selectedCase)
            let file = strip_filepath(document.getElementById('upload-file-form').value)
            document.getElementById('upload-file-label').innerHTML = file
        },
        addCase() {
            // TODO: input validation
            let id = this.cases.length
            this.cases.push({
                id: id,
                open: 0, 
                expiration: this.newCaseExp,
                name: this.newCase,
                docs: []
            })
            
            this.selectedCase = id
            this.newCase = ''
            this.newCaseExp = 60
        },
        closeCase() {
            this.cases.splice(this.selectedCase, 1)
            if (this.cases.length > 0)
                this.selectedCase = 0
            else
                this.selectedCase = -1
        },
        selectCase(id) {
            this.selectedCase = id
        }
    },
    created() {
        let arr = [
            {
                id: 0,
                name: "Case 1",
                expiration: 48,
                docs: [
                    {
                        file_name: "victim.png",
                        admin: false
                    }
                ]
            },
            {
                id: 1,
                name: "Case 2",
                expiration: 60,
                docs: [
                    {
                        file_name: "victim.png",
                        admin: false
                    }
                ]
            }
        ]
    }
})

function strip_filepath(filepath) {
    return filepath.slice(filepath.lastIndexOf('\\')+1)
}
