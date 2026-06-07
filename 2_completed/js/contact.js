document.addEventListener('DOMContentLoaded', function() {

  // 法人/個人別
  //--------------------------------------------

  // name属性が'attribute'（法人／個人）の値が変化したら
  document.querySelectorAll('input[name="attribute"]').forEach(function(input) {
    input.addEventListener('change', function() {
      // 選択された方の値を変数attributeに格納
      const attribute = document.querySelector('input[name="attribute"]:checked').value;
      const company = document.getElementById('company');
      const requireLabel = document.querySelector('label[for="company"] .require');

      // もし個人だったら
      if (attribute === '個人') {
        // 会社名のフォームを任意にする
        company.required = false;
        requireLabel.style.display = 'none';
      // もし個人でなかったら
      } else {
        // 会社名のフォームを必須にする
        company.required = true;
        requireLabel.style.display = 'inline'; 
      }
    });
  });


  // 簡易バリデーション
  //--------------------------------------------
  
  // 入力時に簡易バリデーションを実施
  document.querySelectorAll('input,textarea,select').forEach(function(element) {
    // 値が変わったら実行
    element.addEventListener('change', function() {
      // agreeチェックボックスがクリックされた場合はバリデーションをスキップ
      if (this.id === 'agree') return;

      const field = element.closest('.input-item__field');
      const errorText = field.querySelector('.error-text');

      // 不正な値だったら
      if (!element.checkValidity()) {
        if (field) {
          // 親の.input-item__field要素にエラー用classを追加（エラースタイルに変更＆固定エラー文言の表示）
          field.classList.add('is-error');
          //そのフォームのエラーメッセージをスクリーンリーダー向けに表示
          errorText.setAttribute('aria-hidden', 'false');
        }
      // 不正な値ではなかったら
      } else {
        if (field && field.classList.contains('is-error')) {
          // エラー用classを削除
          field.classList.remove('is-error');
          //エラーメッセージをスクリーンリーダーから隠す
          errorText.setAttribute('aria-hidden', 'true');
        }
      }
    });
  });

  // 送信ボタン時に再チェック
  document.getElementById('submit').addEventListener('click', function() {
    document.querySelectorAll('input,textarea,select').forEach(function(element) {

      const field = element.closest('.input-item__field');
      const errorText = field.querySelector('.error-text');

      if (!element.checkValidity()) {
        if (field) {
          field.classList.add('is-error');
          errorText.setAttribute('aria-hidden', 'false');
        }
      } else {
        if (field && field.classList.contains('is-error')) {
          field.classList.remove('is-error');
          errorText.setAttribute('aria-hidden', 'true');
        }
      }

    });
  });

  // 個人情報保護方針同意
  //--------------------------------------------

  // 個人情報に同意するチェックボックスが押されたら
  document.getElementById('agree').addEventListener('click', function() {
    // チェックされていたら
    if (this.checked) {
      // 送信ボタンのdisabled属性を削除
      document.getElementById('submit').disabled = false;
    // チェックされていなかったら
    } else {
      // 送信ボタンのdisabled属性を追加
      document.getElementById('submit').disabled = true;
    }
  });


});
