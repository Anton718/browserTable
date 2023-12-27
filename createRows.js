import {trs, tds, tbody} from "./main.js"
import { createColumns } from "./createColumns.js"
import { deleteRow } from "./deleteRow.js"

let num = 0;

function createRows() {
    let storage = {...localStorage}
    if (Object.keys(storage)[0]) {
      for (let i = 0; i < Math.ceil(Object.keys(storage)[Object.keys(storage).length-1]/10) - 1; i++) {
        const tr = document.createElement("tr");
        num += 1
        tr.id = num 
        trs.push(tr)
        tbody.append(tr) 
        createColumns(tr)
        for (let i of Object.keys(storage)) {
          for (let j of tds) {
            if (i === j.id) {
                j.children[0].value = storage[i]
            }
          }
        }
      }
    }
  }

  function createRow() {
    const tr = document.createElement("tr");
    num += 1
    tr.id = num 
    trs.push(tr)
    tbody.append(tr)
    createColumns(tr)
    deleteRow()
  }

  export {createRows, createRow, num}