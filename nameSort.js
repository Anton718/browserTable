import {tbody} from "./main.js"
function nameSort() {
    let storage = {...localStorage}
    if (!((Object.keys(storage).length/tbody.children.length) === 3)) {
      alert("Data missing. Fill the boxes");
      return;
    }
    let names = []
    let names_sorted = []
    let new_storage = []
    for (let i of Object.keys(storage)) {
      if (i % 10 === 1) {
        names.push(storage[i])
      }
    }
    let keys = []
    for (let i of Object.keys(storage)) {
      keys.push(i)
    }
    names_sorted = names.sort()
    let name_ = ""
    let date = ""
    let salary = ""
    for (let i of names_sorted) {
      for (let j of Object.keys(storage)) {
        if (i === storage[j]) {
          name_ = storage[Number(j)]
          date = storage[Number(j)+1]
          salary = storage[Number(j)+2]
          new_storage.push(name_)
          new_storage.push(date)
          new_storage.push(salary)
        }
      }
    }
    for (let i = 0, j = 0; i < keys.length, j < new_storage.length; i++, j++) {
    localStorage.setItem(keys[i], new_storage[j])
  }
  names = []
  names_sorted = []
  new_storage = []
  keys = []
  location.reload()
  }

  export {nameSort}