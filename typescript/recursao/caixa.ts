class CaixaDaAgua{
    conteudo: number;
    constructor(litrosDeagua:number){
        this.conteudo = litrosDeagua;
    }
    esvaziar():void{
        if(this.conteudo <= 0){
            return console.log("Caso Base atingido 0 Litros Restantes ")
        }

        console.log("Esvaziando caixa da agua, litros atuais: ",this.conteudo);
        this.conteudo-= 1;

        return this.esvaziar()
        
    }
}

console.log("1-Caso: Números negativos");
const caixa = new CaixaDaAgua(-12);
caixa.esvaziar();


console.log("2-Caso: Números positivos");
const caixa2 = new CaixaDaAgua(20);
caixa2.esvaziar();
