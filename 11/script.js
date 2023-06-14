function butaum(){
    //window.alert("IH O XERU")
    const d1 = document.getElementById("d1");
    const d2 = document.getElementById("d2");
    const d3 = document.getElementById("d3");
    const d4 = document.getElementById("d4");
    const d5 = document.getElementById("d5");
    const d6 = document.getElementById("d6");

    const arrayElements = [d1,d2,d3,d4,d5,d6];
    arrayElements.map( (e)=>{
        e.innerHTML = "IH O XERU"
    })
    
}