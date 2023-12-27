import {tbody, btnDel} from "./main.js"

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

  export {deleteRow}