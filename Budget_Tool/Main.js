import {GetBudget} from 'GetBudget.js'
let button = document.getElementById("button")
button.addEventListener("click", function(e){GetBudget(Number(document.getElementById("YourMoneyHere").value))})
