console.log("Testing!!!");

function handleSubmit(event) {
  const isValid = event.target.checkValidity();

  if (isValid === false) {
    alert("WTF!!!");
  }
}
document.querySelector("button").addEventListener("click", handleSubmit);
