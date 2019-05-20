
// ===========================================
// ~~~~~~~~ DERPY DOGS & CRUSTY CATS ~~~~~~~~~
// a silly contrived exercise in DOM traversal
// ===========================================

/*
* MamaDerp has lost her kitty. We need to traverse the DOM to create a map of elements from #mamaDerp to #lostKitty.
* However, PapaCrust is an imposing curmudgeon and insists we use a limited set of vanilla JS properties and methods.
* */

const mamaDerp = document.getElementById('mamaDerp');
const lostKitty = document.getElementById('lostKitty');

/*
* Using only:
* - The references to `div#mamaDerp` and `div#lostKitty` provided in this file
* - Node.parentElement - property, direct parent Element (https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
* - Node.children - property, array-like object (https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)
* - Node.prototype.contains - method returning a boolean (https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
*
* write some code to collect an array of all elements between `#mamaDerp` and `#lostKitty`
* (eg. [mamaDerp, parents, theWideWorld, children, littleChildren, dankHideySpot, lostKitty])
*
* Lodash has been included for convenience (https://lodash.com/docs/4.17.11)
* */

console.log(mamaDerp, '#mamaDerp: ', 'Oh my, I\'ve lost my kitty');
console.log(lostKitty, '#lostKitty: ', 'I can has mamaDerp?');
