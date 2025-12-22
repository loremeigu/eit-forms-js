const a = 5
const b = 7
const c = 10

// const suma1 = a + b
// const suma3 = a + c
// const suma2 = b + c
// 
// console.log(suma1)
// console.log(suma2)
// console.log(suma3) 

function suma (x, y){
    const result = x + y
    console.log(result)
}

suma(a,b)
suma(b,c)
suma(a,c)

const d = 100
const e = 4
const f = 0
const g = 75

function division(param1, param2){
    if (param2 === 0){
        console.error("No se puede divir por cero")
        return
    }
    const result = param1 / param2
    console.log(result)
}

division(d,e)
division(g,d)
division(d,f)

const sumaArrow = (x,y) =>{
    const result = x+y
    console.log(result)
}

sumaArrow(d,e)
sumaArrow(g,d)
sumaArrow(d,f)

const simpleArrowFunc = param => {
    console.log(param)
}

simpleArrowFunc("Hola")

function resta(x, y){
    const result = x-y
    return result
    

}

const resultResta = resta(d,a)
console.log(resultResta)

const resultSuma = suma(g,e)

console.log(resultSuma)

const RestaArrow = (x, y)=> x -y

const resultRestaArrow = RestaArrow(d,a)
console.log(resultRestaArrow)
