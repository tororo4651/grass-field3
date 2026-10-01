/* 共通 */

import './modules/common.js';




/* お問い合わせフォームのプライバシーポリシーのチェックボックス切り替え */

const privacyCheckbox = document.querySelector('.contactForm__privacyCheckbox');
const contactFormBtn = document.querySelector('.contactForm__btn');

privacyCheckbox.addEventListener('click', function(e) {
  contactFormBtn.disabled = !privacyCheckbox.checked;
}, false);








// 練習

// Sass

// import '../scss/style.scss';




// const test = document.querySelector('.test');
// test.style.color = 'plum';
// test.style.fontSize = '50px';




// ES Modules

// normal import
// import { text1, greet } from './modules/common';


// default import
// import text1 from './modules/common.js';
// import greet from './modules/common.js';


// console.log(text1);
// greet('佐藤');




// jQuery

// import $ from 'jquery';

// $('.test').css({
//   marginBlockStart: '80px',
//   // 不可 80
//   'margin-inline-start': '100px',
//   color: 'blue',
//   backgroundColor: 'gold',
//   'font-size': '50px',
// });
