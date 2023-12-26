import {tbody} from "./main.js"
function dateSort() {
    let storage = {...localStorage}
    if (!((Object.keys(storage).length/tbody.children.length) === 3)) {
      alert("Data missing. Fill the boxes");
      return;
    }
    let dates = []
    let dates_sorted = []
    let new_storage = []
    for (let i of Object.keys(storage)) {
      if (i % 10 === 2) {
        dates.push(storage[i])
      }
    }
    let keys = []
    for (let i of Object.keys(storage)) {
      keys.push(i)
    }
    dates_sorted = dates.sort()
    let name_ = ""
    let date = ""
    let salary = ""
    for (let i of dates_sorted) {
      for (let j of Object.keys(storage)) {
        if (i === storage[j]) {
          name_ = storage[Number(j)-1]
          date = storage[Number(j)]
          salary = storage[Number(j)+1]
          new_storage.push(name_)
          new_storage.push(date)
          new_storage.push(salary)
        }
      }
    }
    for (let i = 0, j = 0; i < keys.length, j < new_storage.length; i++, j++) {
    localStorage.setItem(keys[i], new_storage[j])
  }
  dates = []
  dates_sorted = []
  new_storage = []
  keys = []
  location.reload()
  }

  export {dateSort}