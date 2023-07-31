import validaCpf from "./validaCpf";

export default class GeraCpf{
    // rand vai gerar 9 digitos aleatorios
    rand(min = 100000000,max=999999999 ){
        return String(Math.floor(Math.random() * (max-min) + min))
    }
    formatado(cpf){
        return(
            cpf.slice(0,3) + "." + 
            cpf.slice(3,6) + "." + 
            cpf.slice(6,9) + "-" +
            cpf.slice(9,11)

        )
    }
    GeraNovoCpf(){
        const cpfSemDoisDigitos = this.rand()
        const d1 = validaCpf.geraDigito(cpfSemDigito)
        const d2 = validaCpf.geraDigito(cpfSemDigito + d1)
        const novoCpf = cpfSemDoisDigitos + d1 + d2
        return this.formatado(novoCpf)
    }
}