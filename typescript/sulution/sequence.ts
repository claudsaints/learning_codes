class Sequence{
    static longestConsecutive(numberList: number[]): number{
        const num_set = new Set(numberList);
        let longest_streak = 0 //inicio da verificacao sequencial
        for (let num in num_set){
            // verifica se é o primeiro da sequencia
            if ( !(num in num_set)){
                let current_num = num;
                let current_streak = 1;
                //enquanto os numeros exitirem no set
                while(current_num + 1 in num_set){
                    current_num += 1;
                    current_streak +=1;
                }

                longest_streak = Math.max(longest_streak, current_streak);

            }
        }
        return longest_streak;
    }
}


const arr = [100,4,200,1,3,2];
const seq = Sequence.longestConsecutive(arr);
console.log(seq)