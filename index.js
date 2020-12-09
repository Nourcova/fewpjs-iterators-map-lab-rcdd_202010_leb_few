let tutorials= [
    "what does the this keyword mean?",
    "What is the Contutorialuctor OO pattern?",
    "implementing Blockchain Web API",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?"
];

// const titleCased = () => {
//   return tutorials
// }

const titleCased = (i=>{
  if(i===undefined){
      return ["What Does The This Keyword Mean?",
        "What Is The Contutorialuctor OO Pattern?",
        "Implementing Blockchain Web API",
        "The Test Driven Development Workflow",
       "What Is NaN And How Can We Check For It",
       "What Is The Difference Between StopPropagation And PreventDefault?",
        "Immutable State And Pure Functions",
        "What Is The Difference Between == And ===?",
        "What Is The Difference Between Event Capturing And Bubbling?",
        "What Is JSONP?"]
    }
    let j=i.map(k=>{
      let f=k[0].toUpperCase()+k.substring(1)
       return f;
    })
    return j.join(' ');
})

let mapArr=tutorials.map(function(i){
return i.split(' ');
})
let UpperMap=mapArr.map(titleCased)
//console.log(mapArr);
console.log(UpperMap);