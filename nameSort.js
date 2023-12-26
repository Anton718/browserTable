import {tbody} from "./main.js"
function nameSort() {
    let storage = {...localStorage}
    if (!((Object.keys(storage).length/tbody.children.length) === 3)) {
      alert("Data missing. Fill the boxes");
      return;
    }
    let names = []
    let keys = []
    for (let i of Object.keys(storage)) {
      if (i % 10 === 1) {
        names.push(storage[i])
      }
    }
    for (let i of Object.keys(storage)) {
      keys.push(i)
    }
    let names_sorted = new Set(names.sort())
    let new_storage = []
    for (let i of names_sorted) {
      for (let j of Object.keys(storage)) {
        if (i === storage[j]) {
          let name_ = storage[Number(j)]
          let date = storage[Number(j)+1]
          let salary = storage[Number(j)+2]
          new_storage.push(name_)
          new_storage.push(date)
          new_storage.push(salary)
        }
      }
    }
    console.log(keys, new_storage);
    for (let i = 0, j = 0; i < keys.length, j < new_storage.length; i++, j++) {
    localStorage.setItem(keys[i], new_storage[j])
  }
  location.reload()
  }

  export {nameSort}