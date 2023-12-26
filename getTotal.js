import {total_amount, total_items, tds, total_dates} from "./main.js"

function getTotal() {
    let res = 0
    let res1 = 0
    let res2 = 0
          for (let i of tds) {
            if (i.id % 10 === 1 && i.childNodes[0].value !== "") {
                res += 1
              } else if (i.id % 10 === 3 && i.childNodes[0].value !== "") {
                res2 += Number(i.childNodes[0].value)
              } else if (i.id % 10 === 2 && i.childNodes[0].value !== "") {
                res1 += 1
              }
            }
    total_items.innerHTML = res
    total_amount.innerHTML = res2
    total_dates.innerHTML = res1
  }

  export {getTotal}