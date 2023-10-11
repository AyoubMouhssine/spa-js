export default function administrerAnnonce() {
  generateTable(content, annonces);

  let links = content.querySelectorAll("a");
  links.forEach((ele) => {
    ele.addEventListener("click", function () {
      let id = this.getAttribute("data-id");
      //
      showDetails(id, content, annonces);

      //
      let modifierBtn = content.querySelector(".modifier-button");
      let retourBtn = content.querySelector(".retour-button");

      //
      modifierBtn.onclick = function () {
        content.innerHTML = "";

        let currentAnnonce = annonces.filter((ele) => {
          return ele.id == id;
        });

        let table = document.createElement("table");
        let form = document.createElement("form");
        for (let ca of currentAnnonce) {
          table.innerHTML = `
          <tr>
            <td>Id de l'annonce :</td>
            <td><input type='text' name='id' disabled value='${ca.id}'></td>
          </tr>
          <tr>
            <td>Texte de l'annonce :</td>
            <td><input type='text' name='texte' value='${ca.texte}'></td>
          </tr>
          <tr>
            <td>N de telephone :</td>
            <td><input type='text' name='tel' value='${ca.tel}'></td>
          </tr>
          <tr>
            <td>Adresse de messagerie: </td>
            <td><input type='text' name='email' value='${ca.email}'></td>
          </tr>
          <tr>
            <td>Ville :</td>
            <td><input type='text' name='ville' value='${ca.ville}'></td>
          </tr>
          <tr>
            <td>Code Postal: </td>
            <td><input type='text' name='codepostal' value='${ca.codepostal}'></td>
          </tr>
          <tr>
            <td>Montant: </td>
            <td><input type='text' name='prix' value='${ca.prix}'></td>
          </tr>
          <tr>
            <td>Region: </td>
            <td><input type='text'  disabled name='regid' value='${ca.regid}'></td>
          </tr>
          <tr>
            <td>Categorie: </td>
            <td><input type='text' name='catid' disabled value='${ca.catid}'></td>
          </tr>
          <tr>
            <td><button class='sauvegarder-button'>Sauvegarder</button></td>
            <td><button class='annuler-button'>Annuler</button></td>
          </tr>
  
        `;
        }
        form.append(table);
        content.append(form);

        // sauvegarder button
        content.querySelector(".sauvegarder-button").onclick = function (
          event
        ) {
          event.preventDefault();
          let form = content.querySelector("form");
          let newItem = {
            id: id,
            texte: form["texte"].value,
            tel: form["tel"].value,
            email: form["email"].value,
            prix: form["prix"].value,
            ville: form["ville"].value,
            codepostal: form["codepostal"].value,
            regid: form["regid"].value,
            catid: form["catid"].value,
          };

          let indexOFThisItem = annonces.indexOf(annonces[id - 1]);

          if (indexOFThisItem !== -1) {
            annonces.splice(indexOFThisItem, 1, newItem);
          }
        };

        // annuler button
        content.querySelector(".annuler-button").onclick = () => {
          alert(1);
        };
      };

      //retour button
      retourBtn.onclick = function () {
        alert("retour");
      };
    });
  });
}

function generateTable(content, annonces) {
  content.innerHTML = "";
  let table = document.createElement("table");
  table.style.width = "100%";
  table.style.textAlign = "center";
  table.style.border = "1px solid black";
  table.style.padding = "10px 12px";

  let thead = document.createElement("thead");

  thead.innerHTML = `
          <tr>
            <th>Email</th>
            <th>Ville</th>
            <th>Code</th>
            <th>Details</th>
          </tr>
    `;

  let tbody = document.createElement("tbody");
  annonces.map((ele) => {
    tbody.innerHTML += `
        <tr>
          <td>${ele.email}</td>
          <td>${ele.ville}</td>
          <td>${ele.codepostal}</td>
          <td><a href='#' data-id='${ele.id}'>Details...</a></td>
        </tr>
      `;
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  content.append(table);
}

function showDetails(id, content, annonces) {
  content.innerHTML = "";
  let table = document.createElement("table");
  for (let annonce of annonces) {
    if (annonce.id == id) {
      table.innerHTML = `
          <tr>
            <td>Id de l'annonce :</td>
            <td>${annonce.id}</td>
          </tr>
          <tr>
            <td>Texte de l'annonce :</td>
            <td>${annonce.texte}</td>
          </tr>
          <tr>
            <td>N de telephone :</td>
            <td>${annonce.tel}</td>
          </tr>
          <tr>
            <td>Adresse de messagerie: </td>
            <td>${annonce.email}</td>
          </tr>
          <tr>
            <td>Ville :</td>
            <td>${annonce.ville}</td>
          </tr>
          <tr>
            <td>Code Postal: </td>
            <td>${annonce.codepostal}</td>
          </tr>
          <tr>
            <td>Montant: </td>
            <td>${annonce.prix}</td>
          </tr>
          <tr>
            <td>Region: </td>
            <td>${annonce.regid}</td>
          </tr>
          <tr>
            <td>Categorie: </td>
            <td>${annonce.catid}</td>
          </tr>
          <tr>
            <td><button class='modifier-button'>Modifier</button></td>
            <td><button class='retour-button'>Retour</button></td>
          </tr>
  
        `;
    }
  }

  content.append(table);
}
