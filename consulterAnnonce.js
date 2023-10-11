export default function consulterAnnonce(annonces, content) {
  // create select
  content.innerHTML = "";

  let select = document.createElement("select");

  for (let annonce of annonces) {
    select.innerHTML += `
        <option value='${annonce.id}'>${annonce.texte}</option>
    `;
  }

  content.appendChild(select);

  let div = document.createElement("div");

  select.onchange = function () {
    div.innerHTML = "";

    let selectValue = this.value;

    let ul = document.createElement("ul");

    for (let annonce of annonces) {
      if (annonce.id == selectValue) {
        ul.innerHTML = `
            <li>id: ${annonce.id}</li>
            <li>texte: ${annonce.texte}</li>
            <li>tel: ${annonce.tel}</li>
            `;
      }
    }

    div.append(ul);

    content.appendChild(div);
  };
}
