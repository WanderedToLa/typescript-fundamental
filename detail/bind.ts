function aBind(this : Window | typeof bindObj){
    console.log(this.name);
}

const bindObj = { name : 'wooseok'}
const bBind = aBind.bind(bindObj)
bBind() // 'wooseok'