export class Select{
    
}
let select=function(){
    let selectHeader=document.querySelectorAll
    (selectors:'.select_header');
  
    selectHeader.forEach(callbackfn: item=>{
      item.addEventListener(type:'click',listener:function(){
        this.parentElement.classList.toggle(token:'is-active');
      })
    })
  }