const tableData = [
  {
    id: 1,
    name: "Чехол OEM 11199 для iPhone 11 черный",
    price: 1200,
    count: 120,
    instalment: true,
  },
  {
    id: 2,
    name: "Чехол Samsung Smart S View Wallet Cover EF-EA562 Зеленый",
    price: 17990,
    count: 33,
    instalment: false,
  },
  {
    id: 3,
    name: "Samsung EF-JS906CTEGRU для Samsung Galaxy S22 Черный",
    price: 13990,
    count: 0,
    instalment: false,
  },
  {
    id: 4,
    name: "Veles для iPhone 13 Pro Max прозрачный",
    price: 790,
    count: 3,
    instalment: true,
  },
  {
    id: 5,
    name: "OEM для Apple iPhone 11 прозрачный",
    price: 790,
    count: 20,
    instalment: true,
  },
  { id: 6, name: "OEM 11199 для iPhone 11 черный", price: 1200, count: 55, instalment: false },
  {
    id: 7,
    name: "Чехол Apple MM2Y3ZM MagSafe для Apple iPhone 12 Pro",
    price: 36060,
    count: 100,
    instalment: false,
  },
];

function drawRow(item, index) {
  return `
  <tr>
  <td><div class="id">${index + 1}</div></td>
  <td><div class="name_col">
  ${item.name}</div>
  <td><div class="price">${item.price}тг</div></td>
   <td><div class="price" id="color">${item.count}</div></td>
  <td><div class="price">${item.instalment ? "ok" : ""}</div></td></tr>
  `;
}
// function drawTable(data) {
//   return `
//   <table class="table">
//   <tbody>
//   <tr>
//       <th>№</th>
//       <th>Название</th>
//       <th id="pri"  type="button" onclick="sort(true)" class="button"><span class="pr">Цена</span><span id="tag">↑</span></th>
//       <th> Количество</th>
//       <th> В рассрочку</th>
//       </tr>
//       ${data.map(drawRow).join("")}
//       </tbody>
//       </table>`;
// }

function drawTable(flag) {
  return `
  <table class="table">
  <thead id="table-head">
    <tr>
        <th>№</th>
        <th>Название</th>
        <th type="button" onclick="sort(${flag})" class="button"><span >Цена</span><span class="tag" id="${flag}">↑</span></th>
        <th> Количество</th>
        <th> В рассрочку</th>
    </tr>
  </thead>
  </table>`;
}
let tags = document.getElementsByName(".tag");
function sort(flag) {
  if (flag) {
    render(
      tableData.sort((a, b) => a.price - b.price),
      false,
    );
    tags.classList.add("tagch");

    flag = false;
  } else if (!flag) {
    render(
      tableData.sort((a, b) => b.price - a.price),
      true,
    );
    flag = true;
    drawTable(tableData);
  }
}

let tableRef = document.getElementById("table");

function render(data, type) {
  tableRef.innerHTML = drawTable(type);
  $("#table-head").append(data.map(drawRow));
}
render(tableData, true);

function handleCheckboxChanged(e) {
  const isChecked = e.target.checked;
  console.log(isChecked);
  if (isChecked) {
    let filter = tableData.filter((item) => item.instalment == true);
    render(filter, true);
  } else {
    render(tableData, true);
  }
}
function checkboxChanged(e) {
  const isChecked = e.target.checked;
  console.log(isChecked);
  if (isChecked) {
    let filter = tableData.filter((item) => item.count > 0);
    render(filter, true);
  } else {
    render(tableData, true);
  }
}

for (i = 0; i < tableData.length; i++) {
  if (tableData[i].count < 5) {
    let map = tableData.map((item) => (item.style.color = "red"));
  }
}
// function price(e) {
//   const order = e.target.checked;
//   if (order) {
//     render(tableData.sort((a, b) => a.price - b.price));
//   } else {
//     render(tableData.sort((a, b) => b.price - a.price));
//   }
//   // if (order) {
//   //   render(tableData.sort((a, b) => a.price - b.price));
//   // }
// }
/////????????
// const button = document.getElementById(pri);
// pri.onclick = function (i) {
//   if (pri) {
//     render(tableData.sort((a, b) => a.price - b.price));
//     // } else {
//     //   render(tableData.sort((a, b) => b.price - a.price));
//   }
// };

// if (order) {
//   render(tableData.sort((a, b) => a.price - b.price));
// }
// ______________________
// const button = document.getElementById(pri);
// pri.onclick = function () {
//   if (pri) {
//     render(tableData.sort((a, b) => a.price - b.price));
//   }

// if (order) {
//   render(tableData.sort((a, b) => a.price - b.price));
// }
// };
// ---------------l
// const pri = document.getElementById("pri");
// let index = 0;
// function ind(i) {
//   index++;
//   console.log(index);
//   function pri(i) {
//     if (i % 2 == 0) {
//       render(tableData.sort((a, b) => a.price - b.price));
//     }
//   }
// }

// function bt() {
//   if (index % 2 != 0) {
//     render(tableData.sort((a, b) => b.price - a.price));
//   }
// }

// pri.addEventListener("click", function (event) {
//   let index = clicks.indexOf(event.target);
//   if (index) {
//     console.log(index);
//   }
// });

// if (index % 2 == 0) {
//   render(tableData.sort((a, b) => a.price - b.price));
// }
// const bt = document.querySelector(".button");
// let i = ``;
// button.addEventListener("click", function (event) {
//   i++;
// });
// if (i % 2 != 0) {
//   render(tableData.sort((a, b) => b.price - a.price));
// }
// const price = document.getElementById("pri");
// const button = document.getElementsByClassName("button");
// const change = document.getElementById("tag");
// let flag = true;

// pri.addEventListener("click", function () {
//   if (flag == true) {
//     render(tableData.sort((a, b) => a.price - b.price));
//     flag = false;
//     console.log(flag);
//   }
// });
// //   if (flag == false) {
// //     render(tableData.sort((a, b) => b.price - a.price));
// //     flag = true;
// //     console.log(flag);
// //   }
// // });

// pri.addEventListener("click", function () {
//   if (flag == false) {
//     render(tableData.sort((a, b) => b.price - a.price));
//     flag = true;
//     console.log(flag);
//   }
// });
// let flag = true;
// price.addEventListener("click", function () {
//   // if (flag) {
//   //   render(tableData.sort((a, b) => a.price - b.price));
//   //   flag = false;
//   //   drawTable(tableData);
//   //   console.log(flag);
//   // } else if (!flag) {
//   //   render(tableData.sort((a, b) => b.price - a.price));
//   //   flag = true;
//   //   drawTable(tableData);
//   //   console.log(flag);
//   // }
//   price.innerHTML = "Hello";
// });
// let th = document.querySelector("#table-head");
// function sort(flag) {
//   if (flag) {
//     render(tableData.sort((a, b) => a.price - b.price));
//     flag = false;
//     drawTable(false);
//     console.log(flag);
//     console.log($("#table-head"));
//   } else if (!flag) {
//     render(tableData.sort((a, b) => b.price - a.price));
//     flag = true;
//     drawTable(tableData);
//     console.log(flag);
//   }
// }

// };

// function change() {
//   // change.classList.add("tagch");
//   change.css({ "transfrom ": "rotate(0.5turn)" });
// }
