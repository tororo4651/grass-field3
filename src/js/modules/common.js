// 共通


/* グローバルナビゲーションの開閉 */

const gNavBtn = document.querySelector('.gNavBtn');
const gNav = document.querySelector('.gNav');


gNavBtn.addEventListener('click', function() {
  document.documentElement.classList.toggle('is-gNavOpen');

  if (document.documentElement.classList.contains('is-gNavOpen')) {
    this.setAttribute('aria-label', 'メニューを閉じる');

    this.setAttribute('aria-expanded', 'true');

    gNav.setAttribute('aria-hidden', 'false');
  } else {
    this.setAttribute('aria-label', 'メニューを開く');

    this.setAttribute('aria-expanded', 'false');

    gNav.setAttribute('aria-hidden', 'true');
  }
}, false);



const width992 = window.matchMedia('(min-width: 992px)');
console.log(width992);


const switchMedia = (e) => {
  console.log(e);
  if (e.matches) {
    document.documentElement.classList.remove('is-gNavOpen');

    gNav.setAttribute('aria-hidden', 'false');
  } else {
    gNavBtn.setAttribute('aria-label', 'メニューを開く');

    gNavBtn.setAttribute('aria-expanded', 'false');

    gNav.setAttribute('aria-hidden', 'true');
  }
};


switchMedia(width992);


width992.addEventListener('change', switchMedia, false);








// 練習

// const test = document.querySelector('.test');
// test.style.color = 'plum';
// test.style.fontSize = '50px';




// ES Modules

// 変数（ text1 ）
// const text1 = 'おはよう。';


// 関数（あいさつ）
// const greet = (name) => {
//   console.log(`こんにちは。
// ${name}さん。`);
// };


// normal export
// export { text1, greet };


// default export
// export default text1;
// export default greet;




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
