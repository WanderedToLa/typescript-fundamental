"use strict";
function aBind(param) {
    console.log(this.name);
}
const bindObj = { name: 'wooseok' };
const bBind = aBind.bind(bindObj);
bBind(); // 'wooseok'
