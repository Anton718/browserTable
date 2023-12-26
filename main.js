import { createColumns } from "./createColumns.js"
import { getTotal } from "./getTotal.js"
import { nameSort } from "./nameSort.js"
import { salarySort } from "./salarySort.js"
import { dateSort } from "./dateSort.js"
const table = document.getElementById("table")
const tbody = document.createElement("tbody")
const total_items = document.getElementById("total_items")
const total_amount = document.getElementById("total_amount")
const total_dates = document.getElementById("total_dates")
const name_sort = document.getElementById("name_sort")
const date_sort = document.getElementById("date_sort")
const salary_sort = document.getElementById("salary_sort")
name_sort.style.cursor = "pointer"
date_sort.style.cursor = "pointer"
salary_sort.style.cursor = "pointer"
let tds = []
let trs = []
let num = 0
const btnDel = document.createElement("button")
btnDel.style.marginRight = "5px"
const btnAdd = document.createElement("button")
const clrCash = document.createElement("button")

btnDel.innerHTML = "delRow"
btnAdd.innerHTML = "addRow"
clrCash.innerHTML = "clearCash"
const btnDiv = document.getElementById("btn")
btnDiv.style.marginTop = "10px"
btnAdd.style.marginRight = "5px"
btnDiv.append(btnDel)
btnDiv.append(btnAdd)
btnDiv.append(clrCash)
clrCash.addEventListener("click", () => {localStorage.clear(); location.reload()})


let storage = {...localStorage}

function createRows() {
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
createRows()

btnAdd.addEventListener("click", () => {
  createRow()
  // deleteRow()
  let row_arr = []
  for (let i of tbody.children) {
    row_arr.push(i)
  }
})

 function createRow() {
  const tr = document.createElement("tr");
  num += 1
  tr.id = num 
  trs.push(tr)
  tbody.append(tr)
  createColumns(tr)
  deleteRow()
}

function deleteRow() {
  for (let i of tbody.children) {
    i.children[0].addEventListener("click", () => {
      for (let n of i.children) {
      storage = {...localStorage}
      n.style.color = "yellow";
      }
      btnDel.addEventListener("click",() => {
        let point = 0
        for (let n of i.children) {
          point = n.id;
          localStorage.removeItem(`${n.id}`)
          i.remove()
          location.reload()
        }
        for (let i of Object.keys(storage)) {
            if (Number(i) > Number(point)) {
              let value = storage[i]
              let old_index = i
              i -= 10
              let new_index = i
              localStorage.setItem(`${new_index}`, value)
              localStorage.removeItem(`${old_index}`)
            }
        }
      }) 
    })
  }
}
deleteRow()

name_sort.addEventListener("click", () => {nameSort()})
salary_sort.addEventListener("click", () => {salarySort()})
date_sort.addEventListener("click", () => {dateSort()})

getTotal()

table.append(tbody)


export {tds, trs, num, tbody, getTotal, total_amount, total_items, total_dates}