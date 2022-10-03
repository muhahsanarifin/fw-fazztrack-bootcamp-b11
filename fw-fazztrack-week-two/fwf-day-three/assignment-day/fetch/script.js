
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
    // console.log(error.message);
    model(error.message);
  }
}
getData(API_URL);

function show(data) {
  let insertData = "";
    data.forEach(datas => {
      let insetDatas = `
        <li>${datas.name}</li>
      `;

      insertData += insetDatas;
    });

  const daftarNama = document.getElementById("daftarNama")
    daftarNama.innerHTML = insertData;
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

// Status Request Respond
const model = (status) => {
  const paraf = document.createElement("p");
    paraf.innerHTML = `${status} 😥`;
  const model = document.querySelector(".model");
    model.append(paraf);
    model.style.display = "block";   
}
// model()
