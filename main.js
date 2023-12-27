import { getTotal } from "./getTotal.js"
import { nameSort } from "./nameSort.js"
import { salarySort } from "./salarySort.js"
import { dateSort } from "./dateSort.js"
import { deleteRow } from "./deleteRow.js"
import { createRow, createRows } from "./createRows.js"

const table = document.getElementById("table")
const tbody = document.createElement("tbody")
const total_items = document.getElementById("total_items")
const total_amount = document.getElementById("total_amount")
const total_dates = document.getElementById("total_dates")
const name_sort = document.getElementById("name_sort")
const date_sort = document.getElementById("date_sort")
const salary_sort = document.getElementById("salary_sort")
const btnDiv = document.getElementById("btn")
const btnDel = document.createElement("button")
const btnAdd = document.createElement("button")
const clrCash = document.createElement("button")

name_sort.style.cursor = "pointer"
date_sort.style.cursor = "pointer"
salary_sort.style.cursor = "pointer"
btnDel.style.marginRight = "5px"
btnDel.innerHTML = "delRow"
btnAdd.innerHTML = "addRow"
clrCash.innerHTML = "clearCash"
btnDiv.style.marginTop = "10px"
btnAdd.style.marginRight = "5px"

btnDiv.append(btnDel)
btnDiv.append(btnAdd)
btnDiv.append(clrCash)

clrCash.addEventListener("click", () => {
  localStorage.clear(); location.reload()
})

let tds = []
let trs = []

createRows()

btnAdd.addEventListener("click", () => {
  createRow()
  let row_arr = []
  for (let i of tbody.children) {
    row_arr.push(i)
  }
})

deleteRow()

name_sort.addEventListener("click", () => {nameSort()})
salary_sort.addEventListener("click", () => {salarySort()})
date_sort.addEventListener("click", () => {dateSort()})

getTotal()

table.append(tbody)

export {tds, trs, tbody, getTotal, total_amount, total_items, total_dates, btnDel}