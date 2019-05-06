let budget = document.querySelector("#budget");

let table = document.querySelector(".transactions tbody")
budget.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputs = {
        desc: document.querySelector("#desc").value,
        price: document.querySelector("#price").value,
        date: document.querySelector("#date").value
    }
    // if(inputs.desc.trim()==""){

    //     alert("aciqlama elave edin")
    //     return false;
    // }
    // if(isNaN(Number(inputs.price)) && inputs.price<=0){
    //     alert("meblegi duzgun yazin")
    //     return false;
    // }
    // if(inputs.date==""){

    //     alert("tarix elave edin")
    //     return false;
    // }

    /* Metod 1*/
    // let tr = document.createElement("tr");
    // tr.innerHTML = `<td>${inputs.desc}</td>`
    // tr.innerHTML += `<td>${inputs.price} azn</td>`
    // tr.innerHTML += `<td>${inputs.date}</td>`
    // tr.innerHTML += `<td><i class="fas fa-times"></i></td>`
    // table.appendChild(tr);

    /* Metod 2*/
    // var tr=document.createElement("tr")

    // var tdDesc=document.createElement("td");
    // tdDesc.innerText=inputs.desc;
    // tr.appendChild(tdDesc);

    // var tdPrice=document.createElement("td");
    // tdPrice.innerText=inputs.price+" azn";
    // tr.appendChild(tdPrice);

    // var tdDate=document.createElement("td");
    // tdDate.innerText=inputs.date;
    // tr.appendChild(tdDate);


    // let tdRemove=document.createElement("td");
    // let removeIcon=document.createElement("i");
    // removeIcon.classList.add("fas");
    // removeIcon.classList.add("fa-times");
    // removeIcon.addEventListener("click",function(){
    //     this.parentNode.parentNode.remove();
    // })

    // tdRemove.appendChild(removeIcon);
    // tr.appendChild(tdRemove);


    // table.appendChild(tr);


    /* Metod 3*/

    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${inputs.desc}</td>`
    tr.innerHTML += `<td>${inputs.price} azn</td>`
    tr.innerHTML += `<td>${inputs.date}</td>`

    let tdRemove = document.createElement("td");
    let removeIcon = document.createElement("i");
    removeIcon.classList.add("fas");
    removeIcon.classList.add("fa-times");
    removeIcon.addEventListener("click", function () {
        this.parentNode.parentNode.remove();
    })

    tdRemove.appendChild(removeIcon);
    tr.appendChild(tdRemove);


    table.appendChild(tr);



})