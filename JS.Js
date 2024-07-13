let arrow = document.getElementById('arrow');
// عندما ينزل المستخدم بالصفحة 300 بكسل من أعلى الصفحة، أظهر الزر
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
}
/* ----------- التحكم في اظهار اللينكات عند الضغط علي زر -------------- */
let LINKS = document.getElementById('LINKS');
let temp = 'block';
function LINKSS(){
    if(temp==='block'){
        LINKS.style.display='block';
        temp = 'none';
    }
    else if(temp ==='none'){
        LINKS.style.display='none';
        temp = 'block';
    }
}
function LIN(){
    LINKS.style.display='none';
    temp = 'block';
}