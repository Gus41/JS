//---------------------------------------------------inserindo titulos

const tittles = ["Promoção","Coordenação","Público-Alvo","Objetivo","Carga Horária","Palestrantes","Local","Inscrições","Programação"]
const divTittles = document.getElementById("tittles")
const refresh = ()=>{
  divTittles.innerHTML = ''
  tittles.forEach(e=>{
    const div = document.createElement("div")
    div.classList.add("tittle")
    div.innerHTML = e
    divTittles.appendChild(div)
    
  })
}
refresh()
const CreateTittle = (txt)=>{
  tittles.push(txt)
  refresh()
}
const btnAddTitle = document.getElementById("add_tittle")
btnAddTitle.addEventListener("click",()=>{
  const t = document.getElementById("t")
  if(!t.value){
    alert("Insira um tittle")
    return
  }
  CreateTittle(t.value)

})
//----------------------------------------------------
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
  const content_inp = document.getElementById("content")
  if(!content_inp.value){
    alert("Insira o conteudo no input")
  }else{
    const con = new Converter(content_inp.value,tittles)
    const exit = document.getElementById("exit")
    exit.innerHTML = con.contentBack + con.EndContent
  }
})
//----------------------------------------------------
class Converter {
  contentBack = `
  <!-- Event Converter -->
  `
  EventReturned
  tittles
  EndContent
  constructor(StringContent,t){
      this.content = StringContent
      this.tittles = t
      this.init()
  }
  init(){
      let contentslpit = this.content.split('\n')

      //Criar Header
      this.createHeadder(contentslpit[0],contentslpit[1])
      //Criar body
      //descartando da string principal o conteudo que foi usado no header 
      contentslpit = contentslpit.slice(2,contentslpit.length)
      //let content = [];
      let qnt = 0
      //let Contents = []
      let InitContent = `
<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
      `
      //console.log(InitContent)
    this.contentBack += InitContent
      contentslpit.map(e=>{
        //encontrar um titulo e percorrer até o proximo
            let Istittle = 0;
            this.tittles.map(t=>{
              if(t == e){
                qnt++
                Istittle = 1
              }
            })
            //fim do map dos titulos

            if(Istittle){
              //console.log(`        <!-- -->
              //`)
              this.contentBack += `
              
              <!-- -->
              `
              this.contentBack += `<h2>${e}</h2>
              `
              //console.log(`        <h2>${e}</h2>
              //
              //`)
            }else{
              if (e.indexOf("sou.ucs.br/inscricoes") !== -1) {
                let btn = `
                
                <a class="mt-3 btn btn-inscricoes" href="${e}" target="_blank">Inscreva-se</a>`
                this.contentBack += btn
              }else if(e.indexOf("http:") !== -1){
                //separa string por espaços
                let Strings_e = e.split(" ")
                let link
                let name = " "
                let after= " "
                let ReadLink = 0
                Strings_e.map(es=>{
                  //console.log("----------" + es)
                  if(es.indexOf("http:") !== -1){
                    link = `
                <p><a href="${es}" target="_blank">`
                    ReadLink = 1
                  }else if(!ReadLink){
                    name += (es += " ")
                  }else{
                    after += (es += " ")
                  }
                  
                })
                //name.replace("-"," ")
                link += name + '</a></p>' + after
                //console.log(link)
                this.contentBack += link
              }
              else if(e){
                //console.log(`        <p>${e}</p>`)
                this.contentBack += `
              <p>${e}</p>`
              }


            }
          })
          //fim do map do conteudo
    
          this.EndContent = `

          <h2>Informações</h2>
          <p>Central de Atendimento - Telefone: <a href="tel:+555432182145" target="_blank">(54) 3218-2145</a>
          <br/>extensao@ucs.br - <a href="https://ucs.br/site/institucional/" target="_blank">Conheça a UCS</a> - <a href="https://ucs.br/site/institucional/enderecos-das-unidades-universitarias/" target="_blank">Endereço das Unidades Universitárias</a></p>     


          
      </div> <!-- Fechamento col-6 -->
    </div> <!-- Fechamento row -->
  </div> <!-- Fechamento container -->
</section>`
         //this.contentBack += EndContent
      }
      createHeadder(HeaderTittleOne,HeaderTittleTwo){
                //HeaderTittleOne = this.clear(HeaderTittleOne)
                //HeaderTittleTwo = this.clear(HeaderTittleTwo)
              let header = `
<header class="bg-ft">
  <div class="container">
    <p class="evento-acad"><b>Evento Acadêmico</b></p>
    <hr>

    <h3>${HeaderTittleOne}</h3>
    <h4>${HeaderTittleTwo}</h4>

  </div>
</header>
      `;
        this.contentBack +=header
          //console.log(header)
    }


}






//------------------------------------------------------------
