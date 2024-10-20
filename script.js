const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

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

  return;
}

function fetchData() {
  const text = search.value;

  const data = getData(text.trim());

  data.map((item, index) => {
    return const card = document.createAttribute("div");
  })

  //   return;
}
