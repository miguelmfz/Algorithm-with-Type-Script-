/**
 * This in a easy implementacion of binary search with recursivity
 * @param array 
 * @param left 
 * @param right 
 * @param item 
 */
const binarySearchRecursive = function(array,left:number,right:number,item:number){
    if(right >= left){
        let mid = left + (right - left)/2
        if(array[mid]==item){
            return mid;
        }
        if(array[mid] > item){
            return this.binarySearch(array,left,mid - 1 , item) 
        }
        return  this.binarySearch(array,left + 1,right , item) 
    }
    return -1  
}
/**
 * This in a easy implementacion of binary search with iteration
 * @param array 
 * @param left 
 * @param right 
 * @param item 
 */
const binarySearchItarative = function(array:number[],left:number,right:number,item:number){
    while(left <= right){
        let mid:number = left + (right - left)/2
        if(array[mid]==item){
            return mid;
        }
        if(array[mid] < item){
            left = mid + 1
        }else{
            right = mid +1
        }
    }
}

const arr = [12,15,23,54,54,68,98,125]
let result = binarySearchItarative(arr,0,arr.length,125)
console.log(result)