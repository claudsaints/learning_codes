// Uma progressão geométrica é uma sequência numérica onde cada elemento, a par5r do 
// segundo, é ob5do mul5plicando-se o anterior por uma constante. U5lizando uma linguagem de 
// programação que dê suporte a orientação a objetos, defina uma progressão geométrica e dê 
// exemplo de geração de seus primeiros 50 termos.

// contante chamada razão
// a formula é An = A1 * r (n-1)



class ProgressaoGeo{
    primeiro_termo: number;
    razao: number;

    constructor(primeiro:number,constante:number){
        this.primeiro_termo = primeiro;
        this.razao = constante;
    }
    calcularTermoRecursivo(n:number, termos:number[] = []):number[]{
        if(n === 0){
            return termos;
        }
        const proximoTermo = this.primeiro_termo * Math.pow(this.razao,termos.length);

        termos.push(proximoTermo);

        return this.calcularTermoRecursivo(n - 1)
    }
    calcularTermos(termos:number[] = [this.primeiro_termo]):number[]{
        // posição 'futura' a ser adicionada
        let c = 1;
        for(let i = 0; i < 50; i++){
            termos[c] = this.razao * termos[i];
            c++;
        }
        return termos;
    }

}

const nova_prog =  new ProgressaoGeo(1 , 2);


console.log(nova_prog.calcularTermos());










