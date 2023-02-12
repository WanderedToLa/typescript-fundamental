function aBind(this : Window | typeof bindObj , param: string){
    console.log(this.name);
}

const bindObj = { name : 'wooseok'}
const bBind = aBind.bind(bindObj)
bBind() // 'wooseok'

// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
type T = ThisParameterType<typeof aBind> // Window | typeof bindObj
type Nothis = OmitThisParameter<typeof aBind> // remove this and param: string