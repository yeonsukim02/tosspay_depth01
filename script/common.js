//main-nav (jquery)
//1. sub, sub_bg 숨기기
//중복되는 대상 있을 때 부모 태그 꼭 쓰기 (클론노드에도 있어서)
$('nav .sub').hide()
$('nav .sub_bg').hide()
//2. nav 마우스오버 시 sub 보이기
$('nav').on('mouseover', function () {
    /* 동적 움직임을 추가 하고 싶다면 */
    $('nav .sub').stop(true).slideDown(300)
    $('nav .sub_bg').stop(true).slideDown(300)
/*
    $('nav .sub').show()
    $('nav .sub_bg').show()
 */
})
$('nav').on('mouseout', function () {
    /* 동적 움직임을 추가 하고 싶다면 */
    $('nav .sub').stop(true).slideUp(300)
    $('nav .sub_bg').stop(true).slideUp(300)
/* 
    $('nav .sub').hide()
    $('nav .sub_bg').hide()
 */
}) 
