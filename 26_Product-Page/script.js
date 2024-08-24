let ProductImg = document.getElementById("product-img")
let btn = document.getElementsByClassName("btn")

btn[0].onclick = function(){
    ProductImg.src = `images/image1.png`
   
    // Remove active class from all buttons
    for(bt of btn) {
       bt.classList.remove("active")
   }
   this.classList.add("active")
}

btn[1].onclick = function(){
    ProductImg.src = `images/image2.png`

    // Remove active class from all buttons
    for(bt of btn) {
        bt.classList.remove("active")
    }
    this.classList.add("active")
}

btn[2].onclick = function(){
    ProductImg.src = `images/image3.png`

    // Remove active class from all buttons
    for(bt of btn) {
        bt.classList.remove("active")
    }
    this.classList.add("active")   
}








