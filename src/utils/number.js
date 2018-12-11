export const getNumberOrString = (value) =>{
    if(isNaN(value)){
        return value;
    }
    return parseInt(value, 10);
}