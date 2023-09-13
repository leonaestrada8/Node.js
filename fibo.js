function fibo(num){
    let arr = [0,1];
    if (num <=0){
        let arr = []
    }else if(num ==1){
        let arr = [0]
    }else if (num ==2){
        pass
    } else if(num > 2){
        for (let i=0; i < num-2;i++){
            temp = arr[i] + arr[i+1]
            arr.push(temp)
            }
        }
    console.log(`Sequencia FIBO: ${arr}`)
    if (arr){
        console.log(`Posicao ${num} FIBO: ${arr[arr.length-1]}`);
    }else{
        console.log(`Posicao ${num} FIBO: INVÁLIDA`);
    }
}
        
fibo(8)


