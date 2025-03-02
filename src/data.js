export const API_KEY="AIzaSyBkSSpNKQKJFHJutDF8-S1XAV9xMgp-8aI";

export const value_converter=(value)=>{
    if(value>1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}