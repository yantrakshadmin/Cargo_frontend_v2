export const getSwitchOptions=(arr)=>{
  let newArr= [];
  arr.forEach((i)=>{newArr=[...newArr,{ value:i,label:i }]})
  return newArr
}
