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
    }calcularTermos(termos:number[] = [this.primeiro_termo]):number[]{
        // posição 'futura' a ser adicionada
        //caso razão seja = 0 não vai calcular
        if(this.razao === 0){
            return [0];
        }

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










