document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", function (e) {
    // event listener code goes here
  });
  // code here will execute after the document is loaded
});
function renderMovies() {
  console.log("This Button is activated");

  //Do the Fetch!!!!
  console.log(movieData);
  console.log(container);
  console.log(containerWithId);

  movieData.map((item) => {
    console.log(item);

    containerWITHID.innerHTML += `
    <div>
    <h2> ${item.Title}</h2>
    <h2> ${item.Year}</h2>
    <img> src=${item.Poster}/>
    <button class= "add-button"data-imdbid=${item.imdbID}>Add</button>
    
    </div>`;
  });
}
