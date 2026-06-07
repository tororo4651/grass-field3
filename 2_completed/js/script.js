document.addEventListener('DOMContentLoaded', function() {

  // ハンバーガーメニュー
  //--------------------------------------------



  /*
  【ハンバーガーメニューScript の改修について】

  １．メニューの開閉判定に class を使っていたものを、ボタンに設定された aria-expanded の値を使用するように変更しています。.classList.contains() の値は boolean値ですが、getAttribute('aria-expanded') の値は文字列としての 'true', 'false' が入ってくるので、if文の評価式を文字列判定に変更する必要があるところがハマりどころです。

  ２．if文の中では .is-open を付け外ししていたものを、必要な aria の値の付け替えに変更しているだけで、基本的なロジックは対策前と同じです。

  ３．今回のサンプルではグローバルナビのソースを PC / SP で共有しているため、ブレイクポイントをまたいで UI が変化した際に aria-hidden の値を付け替えたり、スマホ用 UIレイアウトの初期化をする処理も加えています。
  */


  const hamburger = document.querySelector('.hamburger');
  const gnav = document.querySelector('.gnav');


  // ハンバーガーメニューボタンがクリックされた時

  hamburger.addEventListener('click', function() {
    // aria-expanded の値を変数expanded に格納
    const expanded = this.getAttribute('aria-expanded');

    // もし expanded が 'false' だったら（メニューが非表示・開く操作）
    // 【重要】 aria の値は boolean ではなく文字列なので評価式の記述が変わります
    if (expanded === 'false') {
      // 対象メニューの展開ステートを true にし、label を「閉じる」に変更
      this.setAttribute('aria-expanded', 'true');
      this.setAttribute('aria-label', 'メニューを閉じる');
      // メニューの hiddenステートを false にしてメニューを表示
      gnav.setAttribute('aria-hidden', 'false');
      gnav.style.display = 'block'; // slideDown() の代わりに表示

    // もし expanded が 'true' だったら（メニューが展開済・閉じる操作）
    } else {
      // 対象メニューの展開ステートを false にし、label を「開く」に変更
      this.setAttribute('aria-expanded', 'false');
      this.setAttribute('aria-label', 'メニューを開く');
      // メニューの hiddenステートを true にしてメニューを閉じる
      gnav.setAttribute('aria-hidden', 'true');
      gnav.style.display = 'none'; // slideUp() の代わりに非表示
    }
  });



  // ブレイクポイントをまたいだときの挙動

  // 今回のグロナビは PC / SPソース共有なので、ブレイクポイントをまたいだ時に aria属性も動的に設定する必要がある。ハンバーガーは SPレイアウト時しか表示されないので 992px以上の場合の処理は不要

  const mediaQuery = window.matchMedia('(min-width: 992px)');

  console.log(mediaQuery);

  function handleBreakpointChange(event) {
    if (event.matches) {
      // PC用の初期表示
      gnav.setAttribute('aria-hidden', 'false');
      gnav.style.display = 'block';
    } else {
      // SP用の初期表示
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'メニューを開く');
      gnav.setAttribute('aria-hidden', 'true');
      gnav.style.display = 'none';
    }
  }

  // 初期状態の表示を設定
  handleBreakpointChange(mediaQuery);

  // メディアクエリの変更を監視
  mediaQuery.addEventListener('change', handleBreakpointChange);

});
