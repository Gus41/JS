function GetProjetos(){
    const url = 'https://api.github.com/users/Gus41/repos'
    var load = document.getElementById("load")
    fetch(url,{
        method: 'GET'
    })
    .then( (response) => response.json() )
    .then( (response) =>{
        load.style.display = "none"
        show(response)
    })
    .catch( (e)=>{
        console.log(e)
    })
}
function show(data){
    const caixa = document.getElementById("projs")
    for ( let i = 0 ; i < data.length ; i ++ ){
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = "_blank"
        a.title = data[i]['description']
        var linktext = document.createTextNode(data[i]["name"])
        a.appendChild(linktext)
        caixa.appendChild(a)
    }
}
GetProjetos()