// ナビゲーション展開
// const ham = document.querySelector('#js-hamburger');
// const nav = document.querySelector('#js-nav');

// ham.addEventListener('click', function() {
//     ham.classList.toggle('active');
//     nav.classList.toggle('active');
// });

// ナビゲーション展開
$(function () {
    // ハンバーガーボタンクリックで実行
        $("#js-hamburger").click(function () {
        $(this).toggleClass("active");
        $("#js-nav").toggleClass("active");

        // ナビゲーション展開時にスクロール制御
        if ($("#js-nav").hasClass("active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").css("overflow", "");
        }
    });

    // メニュー項目のクリック時にメニューを閉じる
    $(".nav-item a").click(function () {
        $("#js-hamburger").removeClass("active");
        $("#js-nav").removeClass("active");
        $("body").css("overflow", "");
    });
});
