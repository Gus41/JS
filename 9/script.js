let elementos = document.getElementsByTagName("p");
elementos = [...elementos];
elementos.map((e,i)=>{
    console.log(e.innerHTML);
    e.innerHTML = "Eita que isso"
})