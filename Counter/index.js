let count = 0
let saved= document.getElementById("saved")
let increment = document.getElementById("counter")
function counter(){
    count += 1
    increment.textContent = count
}

 function save(){
    let counterData = count + " - "
    saved.textContent +=counterData
    increment.textContent = 0
    count = 0
}
