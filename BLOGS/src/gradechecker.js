//listen for the event that the dom content has fully loaded
// events load, scroll, click
document.addEventListener("DOMContentLoaded", function () {
  //if the dom content has loaded, I want to listen for the submit actionfrom my form
  console.log("page loaded successfully");
  const myForm = document.getElementById("submission form");
  //getElement by id helps us select elements within the dom
  // whenever yousee document you are pointing to an elenment in the html page

  console.log("my document: ", myForm);
  myForm.addEventListener("submit", submitForm);
});

function submitForm(event) {
  event.preventDefault();
  console.log("The function is listening to the event");
  const name = document.getElementById("name").value;
  const score = document.getElementById("score").value;

  // trim() removes any empty spaces or unnecessary characters
  if (name.trim() === "" && score.trim() === "") {
    alert("name field cannot be empty");
  } else if (name.trim() === "" || score.trim() === "") {
    alert("name or score field cannot be empty");
  } else {
    const newScore = parseInt(score);
    console.log(name, score);
    let grade = "";
    if (newScore >= 90) {
      grade = "A";
    } else if (newScore >= 80) {
      grade = "B";
    } else if (newScore >= 70) {
      grade = "C";
    } else {
      grade = "D";
    }

    console.log("Your grade is: ", grade);

    const result_para = document.getElementById("results");
    result_para.textContent = `${name} you have acquired a grade of ${grade}`;
  }
}
