// This function shows the answer field if a question is selected
function checkQuestionSelection() {
    let questionSelect = document.getElementById("question");
    let answerContainer = document.getElementById("answerContainer");
    
    // If a valid option is selected, display the answer field
    if (questionSelect.value !== "") {
      answerContainer.classList.remove("hidden");
    } else {
      answerContainer.classList.add("hidden");
    }
  }