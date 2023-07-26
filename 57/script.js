class validaCpf{
    constructor(cpf){
        Object.defineProperty(this,"cpfLimpo",{
            value: cpf.replace(/\D+/g,""),
            writable: false,
            enumerable: true,
            configurable: false
        })
    }
    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
    geraDigito(cpf_s){
        let total = 0
        let reverso = cpf_s.length + 1

        for( let stringNum of cpf_s ){
            total += Number(stringNum) * reverso
            reverso--
        }
        const digito = 11 - (total%11)
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2)
        const digito1 = this.geraDigito(cpfSemDigitos)
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
    }
    valida(){
        if(!this.cpfLimpo){
            console.log("Valor invalido")
            return false
        }
        if( typeof(this.cpfLimpo) != "string" ){
            console.log("Valor invalido")
            return false
        }
        if( this.cpfLimpo.length !== 11 ){
            console.log("Valor invalido")
            return false
        }
        if(this.sequencia()){
            console.log("valor invalido(sequencia)")
            return false
        }
        if(!this.geraNovoCpf()){
            console.log("Valor invalido")
            return false
        }
        return "!"
    }

}
//070.987.720.03
const cpfValido = new validaCpf("777.777.777.77")
console.log(cpfValido.valida())