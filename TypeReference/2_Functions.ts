// 파라미터 타입 정의
function sum(a: number , b : number){
    return a + b
}
sum(10 , 20)

// 함수 타입 정의
function add(a: number , b: number) : number{
    return a + b
}
add(10 , 20)

// 옵셔널 파라미터
function log(a : string , b?: string){

}
log('hellots')