// for navbar
var section=document.querySelectorAll('section');
var innerDivs=document.getElementsByClassName('inner-divs');
var remTexts=document.getElementsByClassName('remText');
console.log(innerDivs);
function activeMenu()
{
    let len=section.length;

    while(--len && window.scrollY+97<section[len].offsetTop){}
    
    for (let i=0;i<innerDivs.length;i++) {
        innerDivs[i].classList.remove('active');
        remTexts[i].style.display="none";
    }  
    
    remTexts[len].style.display="block";
    innerDivs[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll',activeMenu);




// for image slide
var images=document.querySelectorAll('#screen img');
var index=0;
images[index].style.display="block";
function move(i){ 
    images[index].style.display="none";
    index+=i; 

    slideImage();
}

function slideImage()
{
    if(index<0)
    {
        index=images.length-1;
        
    }if(index>=images.length){
        index=0;
    }
    images[index].style.display="block";

}