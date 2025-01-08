import React from 'react'

function ArrayLogicAndSortings() {

  //1) Bubble sort
  const bubbleSort = (array = []) => {
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  //2) selection sort
  const selectionSort = (array = []) => {
    let min;
    for (let i = 0; i < array.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
    return array;
  }

  //3) insertion sort
  const insertionSort = (array=[]) => {
    let temp;
    for(let i=1;i<array.length;i++){
      let temp=array[i];
      let j;
      for(j=i-1;(j>=0)&&(array[j]>temp);j++){
        array[j+1]=array[j];
      }
      array[j+1]=temp;
    }
    return array;
  }

  // 4) merge sort
  const mergeSort = (array=[]) => {
    const merge=(array1=[],array2=[])=>{
      let combined=[];
      let i=0;
      let j=0;
      while((i<array1.length)&&(j<array2.length)){
        if(array1[i]<array2[j]){
          combined.push(array1[i]);
          i++;
        }else{
          combined.push(array2[j]);
          j++;
        }
      }

      while(i<array1.length){
        combined.push(array1[i]);
        i++;
      }

      while(j<array1.length){
        combined.push(array2[j]);
        j++;
      }
      return [...combined];
    }
    if(array.length===1) return array;
    let midIndex=Math.floor(array.length/2);
    let left=mergeSort(array.slice(0,midIndex));
    let right=mergeSort(array.slice(midIndex));
    return mergeSort(left,right);
  }

  // 5) quick sort
  const quickSort = (array=[],left=0,right=array.length-1) => {

    const swap=(swappingArray=[],firstIndex,secondIndex)=>{
      let temp=swappingArray[firstIndex];
      swappingArray[firstIndex]=swappingArray[secondIndex];
      swappingArray[secondIndex]=swappingArray[firstIndex];
    }

    const pivot=(pivotArray=[],pivotIndex=0,endPivotIndex=pivotArray.length-1)=>{
      let swapIndex=pivotIndex;
      for(let i=pivotIndex+1;i<=endPivotIndex;i++){
        if(array[i]<array[pivotIndex]){
          swapIndex++;
          swap(array,swapIndex,i);
        }
      }
      swap(array,pivotIndex,swapIndex);
      return swapIndex;
    }
    
    if(left<right){
      let pivoTIndex=pivot(array,left,right);
      quickSort(array,left,pivoTIndex-1);
      quickSort(array,pivoTIndex+1,right);
    }
    return array;
  }
  return (
    <div>ArrayLogicAndSortings</div>
  )
}

export default ArrayLogicAndSortings