import type { testTypes, userTypes } from "./type";

const fname:string = 'udith' ;
let lname:string = "jeewapadma";
// let fullname:string = `udith jeewapadma`;


let fullname:string = `
${6+8}
${fname}
${lname}`

// fullname = 5;
console.log(lname,fname,fullname)

//admin,user
let userRole:userTypes;
userRole = 'admin'

console.log(userRole)


let testVar:testTypes
testVar = true;
testVar = 9;
testVar = 'admin'
