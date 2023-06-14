function fun(){
    let nome = "Bruno";
    if( true ){
      console.log("Dentro do if e do escopo : " + nome);
    }
    console.log("Dentro do mesmo escopo: "+ nome);
    console.log(typeof(nome));
  }
  fun();
  