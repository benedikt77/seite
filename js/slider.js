document.addEventListener("DOMContentLoaded", function() {
    console.log('Dom is ready')
    let slider = document.getElementById('myRange')
    console.log(slider.value)
    let container = document.getElementById('pricecontainer') 
    
    console.log(container)

    container.innerHTML= slider.value;
    slider.oninput = function () {
        container.innerHTML = this.value;
    }
})

document.addEventListener("DOMContentLoaded", function () {    let slider = document.getElementById("myRange");    let container = document.getElementById("pricecontainer");    container.innerHTML = slider.value;    slider.oninput = function () {        container.innerHTML = this.value;    }})