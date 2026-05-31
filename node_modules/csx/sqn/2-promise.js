// function that returns Promise

let array = [1,2,3,4,5,6]

function checkArray(arr, element){
    return new Promise((resolve, reject)=>{
        let found = arr.find(function(value){
            if(value == element){
                return true
            }
        })
        setTimeout(()=>{
            if(found != undefined){
                resolve("Element Found!")
            }else{
                reject("Element Not Found!")
            }
        },2000)
    })
}

checkArray(array, 1)
.then((data) => console.log(data))
.catch((error) => console.log(error))


let string = "aslkdfjlk.jashdf"

function checkString(str){
    return new Promise((resolve, reject)=>{
        if(str.length >= 5 && str.includes(".")){
            resolve("YES")
        }else{
            reject("NO")
        }
    })
}

checkString(string)
.then((data) => console.log(data))
.catch(error => console.log(error))

