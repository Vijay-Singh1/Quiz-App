var url = "https://adminpaneldata-edyoda-sourav.herokuapp.com/admin/data";

var arr1 = [];
var tableRows = document.getElementById("tbody");
var infoBox = document.getElementById("info-content");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.map((items, i) => {
      if (i <= 4) {
        arr1.push(items);

        tableRows.innerHTML += ` <tr class="data-row ${
          i == 0 ? "active" : ""
        }" id="${i}"  onclick="mclick(${items.id},id)" ) >
        
        <td class="column1">${items.id}</td>
        <td class="column2">${items.firstName}</td>
        <td class="column3">${items.lastName}</td>
        <td class="column4">${items.email}</td>
        <td class="column5">${items.phone}</td>
        </tr>`;
      }
    });

    var act = arr1.map((p, i) => {
      if (i == 0) {
        infoBox.innerHTML = `<div><b>User selected:</b>${p.firstName} </div>
              <div>
                  <b>Description: </b>
                  <textarea cols="50" rows="5" readonly>
                     ${p.description}
                  </textarea>
              </div>
              <div><b>Address:</b> ${p.address.streetAddress}</div>
              <div><b>City:</b> ${p.address.city}</div>
              <div><b>State:</b> ${p.address.state}</div>
              <div><b>Zip:</b> ${p.address.zip}</div>`;
        infoBox.style.display = "block";
      }
    });
  })
  .catch((e) => console.log("Booo"));

function classremover() {
  $("tr").removeClass("active");
}

function mclick(x, y) {
  classremover();

  const c = document.getElementById(y);
  c.classList.add("active");

  detail(x);
}

function detail(x) {
  arr1.find((item) => {
    if (item.id == x) {
      infoBox.innerHTML = `<div><b>User selected:</b>${item.firstName} </div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                   ${item.description}
                </textarea>
            </div>
            <div><b>Address:</b> ${item.address.streetAddress}</div>
            <div><b>City:</b> ${item.address.city}</div>
            <div><b>State:</b> ${item.address.state}</div>
            <div><b>Zip:</b> ${item.address.zip}</div>`;
      infoBox.style.display = "block";
    }
  });
}

var searchBox = document.getElementById("search-box");
function inputSearch() {
  var value = searchBox.value;
  var searched = arr1.filter((user, i) => {
    if (
      user.firstName.toLowerCase().includes(value) ||
      user.lastName.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.phone.toLowerCase().includes(value)
    ) {
      return true;
    }
  });

  tableRows.innerHTML = ``;

  searched.map((searchedUsers, i) => {
    tableRows.innerHTML += ` <tr class="data-row ${
      i == 0 ? "active" : ""
    }" id="${i}"  onclick="mclick(${searchedUsers.id},id)" ) >
    
    <td class="column1">${searchedUsers.id}</td>
    <td class="column2">${searchedUsers.firstName}</td>
    <td class="column3">${searchedUsers.lastName}</td>
    <td class="column4">${searchedUsers.email}</td>
    <td class="column5">${searchedUsers.phone}</td>
    </tr>`;
  });
}
