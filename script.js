const x = document.getElementsByClassName("question");
const y = document.getElementsByClassName("anwser");
const z = document.querySelector(".container")

const accordion = document.getElementsByClassName("container-question-anwser");






//x.classList.contains() it returns a boolean value and it tell you wether this element have this value or not
//my mistake is clear ===>>> knowledge gap of the css selector ge3ed n


for (let i=0 ; i<x.length ; i++){
  x[i].addEventListener("click",function(){
    // let j = i ;
    // let u = i ;
    // let p =i
    // do{
      // u--
      // if (accordion[u].classList.contains("active") == true && z.classList.contains("activist") ){
        // accordion[u].classList.toggle('active') ;
        // z.classList.toggle("container");
        // z.classList.toggle("activist");
      // }
    // }while(u>=0);
    // do{
      // p++
      // if (accordion[p].classList.contains("active") == true && z.classList.contains("activist") ){
        // accordion[p].classList.toggle('active') ;
        // z.classList.toggle("container");
        // z.classList.toggle("activist");
      // }
    // }while(p<x.length);
    //let w = document.querySelector(".active");

   
    accordion[i].classList.toggle('active') ;
    z.classList.toggle("container");
    z.classList.toggle("activist");
    const p = accordion[i].closest("active");
    if (p!==accordion[i]){
      p.classList.remove("active");
    }

  })
};

//const questions = document.querySelectorAll(".question");

// questions.forEach((q) => {
  //q.addEventListener("click", () => {
    //const section = q.closest(".container-question-anwser");

    // Close any open section
    //document.querySelectorAll(".container-question-anwser.active").forEach((s) => {
      //if (s !== section) s.classList.remove("active");
    //});

    // Toggle the clicked section
    //section.classList.toggle("active");
  //});
// });



//foreach =======>>>> is a different way for tracking all the elements of an array or an array like collection like html collection or nodelist 
//but for each is more effective because it is more clean . by the way it is a method 



accordion.forEach( i => {
  i.addEventListener("click",() =>{
    i.classList.toggle("active");
    const p = i.closet("active");
    if (i !== p){
      p.classList.remove("active");
    }

  })
  
});