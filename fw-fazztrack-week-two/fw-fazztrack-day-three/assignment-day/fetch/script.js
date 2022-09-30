
// Fetch Data
const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getData(API) {
  try {
    const res = await fetch(API);
    if (res.status == 200) {
        loader();
        let data = await res.json();
        return show(data);
    } else {
      throw new Error(`HTTP error status: ${res.status}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}
getData(API_URL);

function show(data) {

  let insetData = "";
    data.forEach((datas) => {
      let insetDatas = `
        <li>${datas.name}</li>
      `;

      insetData += insetDatas;
    });

  const daftarNama = document.getElementById("daftarNama")
    daftarNama.innerHTML = insetData;
}

// Loading handle
const loader = () => {
  const loader = document.querySelector(".loader")
  loader.style.display ="none";
}


// Set URL
const fazztrackLink = (url) => {
  const link = document.querySelector(".logo");

  const anchor = document.createElement("a");
  link.append(anchor);

  const fazztrackLogo = document.querySelector(".fazztrack");
  anchor.append(fazztrackLogo);

  anchor.setAttribute("href", `${url}`);
  anchor.setAttribute("target", "_blank");
};
fazztrackLink("https://www.fazztrack.com/");

// Icon Person
const icon = document.querySelector(".icon");
  icon.addEventListener("click", function() {
    alert()
  })

const alert = () => {
  const alert = document.querySelector(".alert");
    alert.classList.toggle("alert-show");
}
