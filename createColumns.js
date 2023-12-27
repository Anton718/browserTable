import {tds, tbody, getTotal} from "./main.js"
import {num} from "./createRows.js"

function createColumns(tr) {
    for (let i = 0; i < 4; i++) {
      const td = document.createElement("td")
      tds.push(td);
      td.id = `${num}${i}`;
      const input = document.createElement("input")
      input.style.border = "none";
      input.style.textAlign = "center";
      input.type = i === 1? "text" : i === 2? "date" : i === 3? "number" : null
      input.addEventListener("change", () => {
        if (input.value !== "") {
          localStorage.setItem(td.id, input.value);
        } else if (input.value === "") {
           localStorage.removeItem(td.id)
          }
        getTotal()
      });    
      td.append(input);
      tr.append(td);
    }
    let j = 0;
    for (let i of tbody.children) {
      i.firstElementChild.innerHTML = j += 1
      i.firstElementChild.style.cursor = "pointer"
      i.firstElementChild.style.textAlign = "center"
    }
  }
  export {createColumns}