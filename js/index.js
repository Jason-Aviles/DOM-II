// Your code goes here
let change = true;

let introImg = document.querySelector('.intro img')
let aHref = document.querySelectorAll('nav a')
let nav= document.querySelector('.logo-heading')
let navCon = document.querySelector('.main-navigation')
console.log(introImg)
console.log(aHref)
console.log(nav)

let aHrefArr= Array.from(aHref)

aHref[1].addEventListener('blur',(e)=>{
    aHref[1].style.background= 'red'
    aHref[3].style.background= 'pink'
    aHref[2].style.color= 'white'
    aHref[0].style.color= 'white'
    e.stopPropagation()
})
aHref[1].addEventListener('focus',(e)=>{
    aHref[1].style.background= 'green'
    aHref[3].style.background= 'orange'
    aHref[2].style.color= 'black'
    aHref[0].style.color= 'black'
    e.stopPropagation()
})
//aHref.addEventListener('blur',()=>{
//    aHref.style.backgroundColor= 'dodger blue'
//})



  introImg.addEventListener('mouseover', (e)=>{
        introImg.src='img/Spring-HD-Pic.jpg'
        console.log(change)
        e.stopPropagation()
    })

    

  introImg.addEventListener('mouseout', (e)=>{
    introImg.src='img/fun-bus.jpg'
    console.log(change)
   
})


let keyBtn = document.querySelectorAll('.text-content p');
console.log(keyBtn)



introImg.addEventListener('click',(e)=>{
keyBtn[0].style.color='blue'
keyBtn[0].textContent='CHAIRSSS'


keyBtn[2].style.color='red'
keyBtn[2].textContent='CHAIRSSS'

 e.stopPropagation()

})

let bodyTag =document.querySelector('body')
console.log(bodyTag)



window.addEventListener('scroll', (e)=>{

    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY;
    
    if(Math.ceil( scrolled) === scrollable){
        alert('you reach the bottom')
        bodyTag.style.background='red';
        e.stopPropagation()
    }
})
let red = false;

nav.addEventListener('click',(e)=>{

if (red === false) {
    nav.textContent='Chairs';
    navCon.style.background='#FFEBCD';
    red = true 
}else{
    nav.textContent='Bus';
    navCon.style.background='white'
    red = false 
}
 

    bodyTag.style.background='white'
   e.stopPropagation()
})



