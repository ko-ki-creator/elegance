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


// トリガー取得
const scrollTrigger = document.querySelectorAll('.js-scroll-trigger');

// aimation呼び出し
if (scrollTrigger.length) {
    scrollAnimation(scrollTrigger);
}

// aimation関数
function scrollAnimation(trigger) {
    window.addEventListener('scroll', function () {
        for (var i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll = window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;

            if (scroll > offset - windowHeight + 200) {
                trigger[i].classList.add('is-active');
            }
        }
    });
}