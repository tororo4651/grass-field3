// Sass

// import '../scss/style.scss';




// 共通

import './modules/common.js';




// お問い合わせフォームのプライバシーポリシーのチェックボックス切り替え

const privacyCheckbox = document.querySelector('.contactForm__privacyCheckbox');
const contactFormBtn = document.querySelector('.contactForm__btn');

privacyCheckbox.addEventListener('click', function(e) {
  contactFormBtn.disabled = !privacyCheckbox.checked;
}, false);




// const test = document.querySelector('.test');
// test.style.color = 'plum';
// test.style.fontSize = '50px';




// ES Modules

// import { text1, greet } from './modules/common.js';

// const test = document.querySelector('.test');
// test.textContent = text1;

// greet('鈴木');



// import text2 from './modules/common.js';

// const test = document.querySelector('.test');
// test.innerText = text2;




// jQuery

// import $ from 'jquery';

// $('.test').css({
//   color: 'blue',
//   backgroundColor: 'gold',
//   'font-size': 50,
//   'margin-block-start': 80,
//   marginInlineStart: '100px'
// });
