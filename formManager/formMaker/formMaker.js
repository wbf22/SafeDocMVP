function changeTextCss(ID) {
    document.getElementById(ID).className = "h2_nonWhiteSet";
}

function addQuestion() {
    let questions = document.getElementById('questionSection');
    let question = document.createElement('div');
    question.innerHTML = '  ';

}


// Create a new instance of Canvas
var canvas = new fabric.Canvas("canvas");
 
// Create a new Textbox instance
var text = new fabric.Textbox('A Computer Science Portal',
{
    width: 450
});
 
// Render the Textbox on Canvas
canvas.add(text);