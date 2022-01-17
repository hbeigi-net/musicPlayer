import {pipe , compose} from "lodash/fp"
import {produce} from "immer"
export default function Test(){
    
    // const func1 = str => str.trim();
    // const func2 = str => str.toLowerCase();
    // const func3 = str => `<h1>${str}</h1>`;
    // const resault = compose(func3 , func2 , func1);
    // const resault2 = pipe(func1 , func2 , func3);
    // console.log(resault("hello world"));
    // console.log(resault2("hello world"));


    // function helloWorld(name , family , age)
    // {
    //     console.log(name , family  , age); 
    // }
    //  const hwld = (name)=>{
    //         return (family)=>{
    //                 return (age)=>{
    //                     console.log(name,family ,age);
    //                 }
    //         }
    //  }

    // const worldHello = name=> family=> age=>{
    //     console.log(name, family , age);
    // }
    // helloWorld("amir" , "alibeigi" , 23);
    // hwld("amir")("alibeigi")(23);
    // worldHello("amir")("alibeigi")(23);





    // const userOne = {
    //     name : "hamid" , 
    //     family : "alibeigi" 
    //     , 
    //     age : 23 , 
    //     address : {
    //         city : "tehran" , 
    //         str : "fatemi" ,
    //         zip : 33
    //     }
    // }

    // const userTwo ={
    //     ...userOne , 
    //     name : "hassan",
    //     address : {
    //         city : "karaj"
    //     }
    // }

    // const userThree = {
    //     ...userOne , 
        
    //     address : {
    //         ...userOne.address,
    //         city : "karaj"
    //     }
    // }
    // console.log(userOne);
    // console.log(userTwo);
    // console.log(userThree);


    // const state = {
    //     name : "hamid" , 
    //     family : "alibeigi", 
    //     age : 23 
    // }
    // let action = {
    //     payload : {
    //         address : "hello this is our address"
    //     }
    // }
    // const reducer=(state , action)=>{

    //     return produce(state , draftState=>{
            
    //             draftState.age = 25 ; 
    //             draftState.address = action.payload.address; 
            
    //     })
    // }

    // const res = reducer(state , action);
    // console.log(res);


    
}