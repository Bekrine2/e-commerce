let bigImage = document.querySelectorAll('.imgs img')
let smllImg = document.querySelectorAll('.small img')
let menu = document.querySelector('.menu i')
let num = document.querySelector('.num span')
let rt = document.querySelector('.imgs .rt')
let lf = document.querySelector('.imgs .lf')
let shop = document.querySelector('.shop .add')
let pop =  document.querySelector('.avatar .pop')
let icon =  document.querySelector('.avatar .icon')
let arrimg = Array.from(bigImage)
let check =document.querySelector('.check')
let about = document.querySelector('.check .about')
let h3 = document.querySelector('.check h3')
let h4 = document.querySelector('.check h4')
let yourss = document.querySelector('.yours')
let dollars = document.querySelector('.two')
let count = document.querySelector('.two span')
let pricetotal = document.querySelector('.two .total')
let empty = document.querySelector('.check .empty')
let plus = document.querySelector('.cart .plus')
let minus = document.querySelector('.cart .minus')
let ic = document.querySelector('.about i')
let dllr = document.querySelector('.price .dollar')

let curretnimg = 1
let numbrimg = arrimg.length

rt.onclick = function(){
    if(rt.classList.contains('noclick')){
        return false
    }else{
       curretnimg++
    add() 
    }
    
}
lf.onclick = function(){
    if(lf.classList.contains('nodsbl')){
        return false
    }else{
       curretnimg--
    add()  
    }
   
}




function add(){
    removeactive()

  arrimg[curretnimg - 1].classList.add('active')

  if(curretnimg === numbrimg){
    rt.classList.add('noclick')
  }else{
    rt.classList.remove('noclick')

  }
  if(curretnimg === 1){
    lf.classList.add('nodsbl')
  }else{
    lf.classList.remove('nodsbl')

  }
}






menu.onclick = function(){
     document.querySelector('.small-menu').style.display = "block"
}
document.querySelector('.small-menu i').onclick = function(){
    document.querySelector('.small-menu').style.display = "none"
    
}

console.log(arrimg[1].dataset.index)

smllImg.forEach((smll) =>{
    smll.onclick = function(){
      curretnimg = smll.dataset.index
      bigImage.forEach((arr) =>{
       
        
             
 
        if(smll.dataset.img === arr.dataset.img){
           
            arr.classList.add('active')
            
      }else{
        
        arr.classList.remove('active')
         
      }
            })
        
    }
})


function removeactive(){
    arrimg.forEach((ary) =>{
        ary.classList.remove('active')
    })
}


bigImage.forEach((ar) =>{
  ar.addEventListener('click', (e) =>{
    console.log(ar.src)
    let overlay = document.createElement('div')
  overlay.className = "overlay"
  document.body.appendChild(overlay)



  let maindiv = document.createElement('div')
  maindiv.className = 'maindv'
  let div = document.createElement('div') 
   div.className = "ig"
  let popupimg = document.createElement('img');

 popupimg.src = `images/image-product-${curretnimg}.jpg`
 

  div.appendChild(popupimg)
 
  maindiv.appendChild(div)


 let spani = document.createElement('span')
 spani.appendChild(document.createTextNode('X'))
 spani.className = "spani"
 maindiv.appendChild(spani)

  
 




  document.body.appendChild(maindiv)
  })
})



  document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("spani")){
      e.target.parentElement.remove()
      document.querySelector('.overlay').remove()
    }
  })








  function adding(){
    plus.onclick = function(){
    num.innerHTML++
    minus.onclick = function(){
      if(num.innerHTML === "0"){
        return false
      }else{
         num.innerHTML--
      }
     
    }
  
    
  }
  } 
  adding()
  shoped()
 
  function shoped(){
  shop.addEventListener('click', (e) =>{
  if(num.innerHTML === "0"){
    empty.style.display = "block"

  }else{

    additem()
    num.innerHTML
  }


  })
  } 
  
 

 



  icon.onclick = function(){ 
    
    check.classList.toggle('open')
    
  }



  document.addEventListener('click', (e) =>{
   if(e.target !== icon && e.target !== about && e.target !== h3 && e.target !== h4){
    if(check.classList.contains('open')){
    check.classList.toggle('open')

    }
   }
  })

  check.onclick = function(e){
e.stopPropagation()
  }
 

  






function additem(){


    yourss.style.display = "block"
    empty.style.display = "none"
    pop.style.display = "block"
    
    
    

      pop.innerHTML = num.innerHTML
    count.innerHTML = num.innerHTML

    pricetotal.innerHTML =  125 * (num.innerHTML)


    ic.onclick = function(){
    yourss.style.display = "none"
    empty.style.display = "block"

    num.innerHTML = "0"
    pop.style.display = "none"   
    }
   
  
   
    
  } 
 



 