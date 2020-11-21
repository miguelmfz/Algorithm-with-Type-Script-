/*
For this algorithm you given a array of non-negative number and you need to calculate 
how manty elements of array have an odd number of occurrences of the digit 0

*/
let series:number[] = [4,50,100,65,2000,700,1,10]

function calculateOcurrences(array : number[]){
   let count= 0
    for(let n of array){
        if(n>9){
            if( totalOccurrences(n)){
                count++;
            }  
        }
        
    }
    console.log(count)
}

function totalOccurrences(n:number){
    let numberSplited = n.toString().split("")
    let count = numberSplited.filter((onlyZero) =>{return parseInt(onlyZero)  == 0 })
    return count.length > 0 && count.length % 2 !=0
}

calculateOcurrences(series)