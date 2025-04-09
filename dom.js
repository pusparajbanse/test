// document.querySelector("h1")
// document.querySelector(".btn")
// document.querySelector(".text")
// document.querySelector(".d-none")


const accr = document.querySelector(".btn");
const content = document.querySelector(".text");
console.log(accr);

accr.addEventListener("click", function(){
    const check = content.classList.contains("d-none");
    if(check){
        content.classList.remove("d-none");
        document.querySelector("h1").style.color = "red";
        document.querySelector(".content").style.color= "green"
        document.querySelector(".content").style.marginTop= "10px"
        document.querySelector(".btn").style.fontSize = "20px"

            // alert("hello code");
    }else{
        content.classList.add("d-none");
        document.querySelector("h1").style.color = "black"
    }
});



const Acc = document.querySelector(".hoverbtn");
const contents = document.querySelector(".HoverText");
console.log(Acc);
Acc.addEventListener("mouseover", function(){
    const check = contents.classList.contains("d-none");
    if(check){
        contents.classList.remove("d-none");
    }else{
        contents.classList.add("d-none")
    }
})

