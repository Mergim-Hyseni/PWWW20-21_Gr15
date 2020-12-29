function Scroll(){
    var FlexBox=document.getElementById("FlexBox");
    var ypos=window.pageYOffset;
    if(ypos>121){
        FlexBox.style.backgroundColor="#FFFFFF";
    }
    else {FlexBox.style.backgroundColor="transparent";

    }
}
addEventListener("scroll", Scroll);