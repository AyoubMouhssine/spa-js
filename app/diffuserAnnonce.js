function generateHtmlForDiffuser(content, regions, categories) {
  content.innerHTML = "";
  let form = document.createElement("form");

  let selectRegion = document.createElement("select");
  selectRegion.name = "regid";
  selectRegion.innerHTML = `
      <option value=''></option>
    `;
  let selectRegionTexte = document.createTextNode("Regions");
  let selectCategorie = document.createElement("select");
  selectCategorie.name = "catid";
  selectCategorie.innerHTML = `
    <option value=''></option>
  `;

  let selectCategorieTexte = document.createTextNode("Categorie");
  let selectDiv = document.createElement("div");

  for (let region of regions) {
    selectRegion.innerHTML += `
          <option value='${region.regid}'>${region.regnom}</option>
      `;
  }
  for (let categorie of categories) {
    selectCategorie.innerHTML += `
          <option value='${categorie.catid}'>${categorie.catnom}</option>
      `;
  }

  selectDiv.append(
    selectCategorieTexte,
    selectCategorie,
    selectRegionTexte,
    selectRegion
  );

  let areaDiv = document.createElement("div");

  areaDiv.innerHTML = `
  Texte de l'annonce (250 characteres max)
    <textarea name="texte" cols="30" rows="10"></textarea>
  `;

  let otherInfos = document.createElement("div");
  otherInfos.innerHTML = `
      <div>
      <label>Prix (propose)</label>
      <input type='text' name='prix'>
      </div>
      <div>
      <label>N de telephone</label>
      <input type='text' name='tel'>
      </div>
      <div>
      <label>Code postal</label>
      <input type='text' name='codepostal'>
      </div>
      <div>
      <label>@</label>
      <input type='email' name='email'>
      </div>
      <div>
      <label>Ville</label>
      <input type='text' name='ville'>
      </div>
  `;

  let buttonDiv = document.createElement("div");
  buttonDiv.style.marginTop = "20px";
  buttonDiv.innerHTML = `
      <button id='valider'>valider</button>
      <button id='annuler'>annuler</button>
  `;

  form.append(areaDiv, selectDiv, otherInfos, buttonDiv);

  content.append(form);

  return true;
}

function handleValiderButton(btn, form) {
  btn.onclick = () => {
    let data = validerForm(form);

    if (data) {
      annonces.push(data);
    }
  };
}

function handleAnnuleButton(btn, form) {
  btn.onclick = () => {
    resetForm(form);
  };
}

// sample validation
function validerForm(form) {
  event.preventDefault();
  let formData = new FormData(form);
  for (let [name, value] of formData.entries()) {
    if (value == "") {
      alert(`${name} obligatoire`);
      form[name].focus();
      return false;
    }
  }

  // return ordered object like in db.js
  return {
    id: annonces.length + 1,
    texte: form["texte"].value,
    tel: form["tel"].value,
    email: form["email"].value,
    prix: form["prix"].value,
    ville: form["ville"].value,
    codepostal: form["codepostal"].value,
    regid: form["regid"].value,
    catid: form["catid"].value,
  };
}

function resetForm(form) {
  event.preventDefault();
  form.reset();
}

export default function diffuserAnnonce() {
  generateHtmlForDiffuser(content, regions, categories);
  let form = content.querySelector("form");
  handleValiderButton(content.querySelector("#valider"), form);
  handleAnnuleButton(content.querySelector("#annuler"), form);
}
