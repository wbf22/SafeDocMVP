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
        }

    },
    created() {
        // TODO: Access back end and populate data
    }
})

function strip_filepath(filepath) {
    return filepath.slice(filepath.lastIndexOf('\\')+1)
}
