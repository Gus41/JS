const objs = document.getElementsByTagName("div");
console.log(...objs);
const objarr = [...document.getElementsByTagName("div")]
console.log(objarr);

objarr.forEach(element =>{
    element.innerHTML = "la ele";
}); 