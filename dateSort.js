import {tbody} from "./main.js"
function dateSort() {
    let storage = {...localStorage}
    if (!((Object.keys(storage).length/tbody.children.length) === 3)) {
      alert("Data missing. Fill the boxes");
      return;
    }
    let keys = []
    let dates = []
    for (let i of Object.keys(storage)) {
      if (i % 10 === 2) {
         dates.push(storage[i])
      }
    }
    for (let i of Object.keys(storage)) {
      keys.push(i)
    }
    let dates_sorted = new Set(dates.sort())
    let new_storage = []
    for (let i of dates_sorted) {
      for (let j of Object.keys(storage)) {
        if (i === storage[j]) {
          let date = storage[Number(j)]
          let name_ = storage[Number(j)-1]
          let salary = storage[Number(j)+1]
          new_storage.push(name_)
          new_storage.push(date)
          new_storage.push(salary)
        }
      }
    }
    for (let i = 0, j = 0; i < keys.length, j < new_storage.length; i++, j++) {
    localStorage.setItem(keys[i], new_storage[j])
  }
  location.reload()
  }

  export {dateSort}