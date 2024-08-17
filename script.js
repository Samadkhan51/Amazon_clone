var div = document.getElementById('div');
var select = document.getElementById('select');
var input = document.getElementById('orange');
var button = document.getElementById('button');
var wrapper = document.getElementById('wrapper');
var lan = document.getElementById('language');
var acc = document.getElementById('acc-p');
var all =document.getElementById('All');
var cross = document.getElementById('cross');
var language = document.getElementById('foot-lan');

fBorder = () => {
    div.style.border = "4px solid orange";
    div.style.borderRadius = "8px 9px 9px 8px";
    select.style.border ="4px solid transparent";
    button.style.border = "4px solid transparent";
    wrapper.style.backgroundColor = "rgb(88 84 84)";
    wrapper.style.backgroundBlendMode = "overlay";
}
sBorder = () => {
    select.style.border ="4px solid orange";
    div.style.border = "4px solid transparent"
    button.style.border = "4px solid transparent";
}
bBorder = () =>{
    button.style.border = "4px solid orange";
    div.style.border = "4px solid transparent"
    select.style.border ="4px solid transparent";
}
removeBorder = () =>{
    div.style.border = "4px solid transparent"
    button.style.border = "4px solid transparent";
    select.style.border ="4px solid transparent";
    wrapper.style.backgroundBlendMode = "normal";
}
hoverbody = () => {
    wrapper.style.backgroundColor = "rgb(88 84 84)";
    wrapper.style.backgroundBlendMode = "overlay";
    document.getElementById('test').style.display = "block";
}
acchover = () => {
    wrapper.style.backgroundColor = "rgb(88 84 84)";
    wrapper.style.backgroundBlendMode = "overlay";
    document.getElementById('acc-test').style.display = "block";
}
openSideMenu = ()=>{
    document.getElementById('sidebar').style.transform = "translateX(0%)";
}
closeSideBar = ()=>{
    document.getElementById('sidebar').style.transform = "translateX(-113%)";
}
hoverFoot = () =>{
    document.getElementById('test2').style.display = "block";
}
//when click on input it will show border on parent div and will add opacity on main-area by fBorder function
input.addEventListener('click',fBorder);
//when click on select it will show border on select by sBorder function
select.addEventListener('click',sBorder);
//when click on button it will show border on button by bBorder function
button.addEventListener('click',bBorder);
//when click on wrapper it will remove border on by removeBorder function
wrapper.addEventListener('click',removeBorder);
// when you hover on language it will add filter to wrapper function
lan.addEventListener('mouseover',hoverbody);
// when you hover on language in footer
language.addEventListener('mouseover',hoverFoot);
//uhover language footer
language.addEventListener('mouseout',event =>{
    document.getElementById('test2').style.display = "none";
})
//unhover language nav
lan.addEventListener('mouseout',event => {
    wrapper.style.backgroundBlendMode = "normal";
    document.getElementById('test').style.display = "none";
})
//when you hover on Account it will add filter to wrapper and show you div
acc.addEventListener('mouseover',acchover);

acc.addEventListener('mouseout',event=>{
    wrapper.style.backgroundBlendMode = "normal";
    document.getElementById('acc-test').style.display = "none";
})

//opening sidebar
all.addEventListener('click',openSideMenu);
cross.addEventListener('click',closeSideBar);

//Slider Start
const slide = document.querySelectorAll('.slider');
const slide1 = document.querySelectorAll('.slider1');
let counter1 = 0;
let counter = 0;

slide.forEach(
    (slide,index) =>{
        slide.style.left = `${index*100}%`;
    }
)
slide1.forEach(
    (slide1,index) =>{
        slide1.style.left = `${index*100}%`
    }
)

goPrev =()=>{
    counter--;
    if(counter>-1)
    {
        divSlide();
    }
}
goPrev1 = ()=>{
    counter1--;
    if(counter1 > -1)
    {
        divSlide1();
    }
}
goNext = () =>{
    counter++;
    if(counter < slide.length - 1)
    {
        divSlide();
    }
    else if(counter === slide.length - 1)
    {
        document.getElementById('next').style.opacity = "0.5";
        document.getElementById('next').style.border = "1px solid black";
        divSlide();
    }
}
goNext1 = () => {
    counter1++;
    if (counter1 < slide1.length - 1) {
        divSlide1();
    }   
    else if (counter1 === slide1.length - 1) {
        document.getElementById('next1').style.opacity = "0.5";
        document.getElementById('next1').style.border = "1px solid black";

        divSlide1();
    }
}

divSlide = () =>{
    slide.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`;
        }
    )
}
divSlide1 = () =>{
    slide1.forEach(
        (slide1)=>{
            slide1.style.transform = `translateX(-${counter1*100}%)`
        }
    )
}
// Slider End