const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", fetchData);

async function getData(text) {
  try {
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );

    const data = await resp.json();

    console.log(data.meals);
    return data.meals;
  } catch (error) {
    console.log(error);
  }

  return null;
}

async function fetchData() {
  const text = search.value;

  // Check if search input is empty
  if (!text) {
    result.innerHTML = "<p>Please enter a meal name to search.</p>";
    return;
  }

  // Clear previous results and show a loading message
  result.innerHTML = "<p>Loading...</p>";

  const data = await getData(text); // Fetch the data

  // Clear the loading message
  result.innerHTML = "";

  // If no data or no meals are found, show a message
  if (!data || data.length === 0) {
    result.innerHTML = "<p>No meals found. Try another search.</p>";
    return;
  }

  data.forEach((meal) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <div class="card-image"><img src="${meal.strMealThumb}"></div>
        <p class="instruction">${meal.strInstructions}</p>

        <button id="readmore" onclick="read(this)">Read More</button>
        `;

    result.appendChild(card);
  });

  //   return;
}

let open = false;

function read(button) {
  if (!open) {
    const para = button.previousElementSibling;
    para.classList.add("expanded");
    open = !open;
  } else {
    const para = button.previousElementSibling;
    para.classList.remove("expanded");
    open = !open;
  }
}
