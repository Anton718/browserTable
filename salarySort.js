import {tbody} from "./main.js"
function salarySort() {
    let storage = {...localStorage}
    if ((Object.keys(storage).length/tbody.children.length) !== 3) {
      alert("Data missing. Fill the boxes");
      return;
    }
    let salaries = []
    let keys = []
    for (let i of Object.keys(storage)) {
      if (i % 10 === 3) {
        salaries.push(storage[i])
      }
    }
    
    for (let i of Object.keys(storage)) {
      keys.push(i)
    }
    let salaries_sorted = new Set(salaries.sort(function (a,b) {return a - b}))
    let new_storage = []
    for (let i of salaries_sorted) {
      for (let j of Object.keys(storage)) {
        if (i === storage[j]) {
          new_storage.push(storage[Number(j)-2])
          new_storage.push(storage[Number(j)-1])
          new_storage.push(storage[Number(j)])
        }
      }
    }
    for (let i = 0, j = 0; i < keys.length, j < new_storage.length; i++, j++) {
    localStorage.setItem(keys[i], new_storage[j])
  }
  location.reload()
  }

  export {salarySort}