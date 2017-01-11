// Array.prototype.back
let backTest1 = [ undefined ];
let backTest2 = [ undefined, 'XD' ];
let backTest3 = [ 12 ];
let backTest4 = [ null ];
let backTest5 = [ ];

// Check Type
let valTest  = [ 'val', -123];
let operTest = [ 'oper', 'mod'];
let nilTest  = [ undefined, undefined ];

// Check function evaluate
let addTest = { in : [['val', 1], ['oper', 'add'], ['val', 2]], out : 3 }; // 1 + 2 = 3
let subTest = { in : [['val', 3], ['oper', 'sub'], ['val', 2]], out : 1 }; // 3 - 2 = 1
let mulTest = { in : [['val', 1], ['oper', 'mul'], ['val', 2]], out : 2 }; // 1 * 2 = 2
let divTest = { in : [['val', 4], ['oper', 'div'], ['val', 2]], out : 2 }; // 4 / 2 = 2
let modTest = { in : [['val', 4], ['oper', 'mod'], ['val', 3]], out : 1 }; // 4 % 2 = 2

// 1 + 2 * 3 = 7
let ad1Test = { in : [['val', 1], ['oper', 'add'], ['val', 2], ['oper', 'mul'], ['val', 3]], out : 7 };
// 4 / 2 - 2 = 0
let ad2Test = { in : [['val', 4], ['oper', 'div'], ['val', 2], ['oper', 'sub'], ['val', 2]], out : 0 };
// 2 * 3 + 12 / 2 = 12
let ad3Test = { in : [['val', 2], ['oper', 'mul'], ['val', 3], ['oper', 'add'], ['val', 12], ['oper', 'div'], ['val', 2]], out : 12 };
// 5 + 10 - 12 * 3 % 4 - 36 / 9 = 11
let ad4Test = { in : [['val', 5], ['oper', 'add'], ['val', 10], ['oper', 'sub'], ['val', 12], ['oper', 'mul'], ['val', 3], ['oper', 'mod'], ['val', 4], ['oper', 'sub'], ['val', 36], ['oper', 'div'], ['val', 9]], out : 11 };

let naddTest = { in : [['val', -1], ['oper', 'add'], ['val', -2]], out : -3 }; // -1 + -2 = -3
let nsubTest = { in : [['val', -3], ['oper', 'sub'], ['val', -2]], out : -1 }; // -3 - -2 = -1
let nmulTest = { in : [['val', -1], ['oper', 'mul'], ['val', -2]], out : 2 }; // -1 * -2 = 2
let ndivTest = { in : [['val', -4], ['oper', 'div'], ['val', -2]], out : 2 }; // -4 / -2 = 2
let nmodTest = { in : [['val', -4], ['oper', 'mod'], ['val', -3]], out : -1 }; // -4 % -2 = -2

// 1 + -2 * 3 = 7
let nad1Test = { in : [['val', 1], ['oper', 'add'], ['val', -2], ['oper', 'mul'], ['val', 3]], out : -5 };
// 4 / -2 - 2 = 0
let nad2Test = { in : [['val', 4], ['oper', 'div'], ['val', -2], ['oper', 'sub'], ['val', 2]], out : -4 };
// 2 * -3 + 12 / -2 = 12
let nad3Test = { in : [['val', 2], ['oper', 'mul'], ['val', -3], ['oper', 'add'], ['val', 12], ['oper', 'div'], ['val', -2]], out : -12 };
// 5 + -10 - -12 * -3 % -4 - -36 / 9 = 11
let nad4Test = { in : [['val', 5], ['oper', 'add'], ['val', -10], ['oper', 'sub'], ['val', 12], ['oper', 'mul'], ['val', -3], ['oper', 'mod'], ['val', -4], ['oper', 'sub'], ['val', -36], ['oper', 'div'], ['val', 9]], out : -1 };
