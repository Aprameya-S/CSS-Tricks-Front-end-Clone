var count=1;
function display_menu(){
    count = count + 1;
    if(count%2==0){
        document.body.style.overflowY="hidden";
        document.getElementById("open_menu_wrapper").style.top="110px";
        document.getElementById("bar_1").style.top="2px";
        document.getElementById("bar_1").style.left="5px";
        document.getElementById("bar_2").style.top="-3px";
        document.getElementById("bar_2").style.left="5px";
    }
    else{
        document.body.style.overflowY="auto";
        document.getElementById("open_menu_wrapper").style.top="calc(-100vh + 105px)";
        document.getElementById("bar_1").style.top="4px";
        document.getElementById("bar_1").style.left="-3px";
        document.getElementById("bar_2").style.top="-1px";
        document.getElementById("bar_2").style.left="12px";
    }
}