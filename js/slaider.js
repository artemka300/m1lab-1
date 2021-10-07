export function slider() {

}    const slaider = document.querySelector('.slaider');
    const slaiders = document.querySelector('.slaiders');
    const slaiderbtnRight = document.querySelector('.arrowsr');
    const slaiderbtnLeft = document.querySelector('.arrowsl');
    const slaiderContent = document.querySelectorAll('.slaider_content');
    slaiders.style.width = `${100*slaiderContent.length}vw`
  
    let count = 0; 
    slaiderbtnRight.addEventListener('click',()=>{
        const slaiderwidth = slaider.offsetWidth;
       (count>=slaiderContent.length-1 ) ? count=0: count++;
        slaiders.style.transform = `translateX(-${slaiderwidth*count}px)`
    })
    slaiderbtnLeft.addEventListener('click',()=>{
        const slaiderwidth = slaider.offsetWidth;
        (count==0 ) ? count=slaiderContent.length-1: count--;
         slaiders.style.transform = `translateX(-${slaiderwidth*count}px)`
     })
     setInterval(()=>{
        const slaiderwidth = slaider.offsetWidth;
        (count==0 ) ? count=slaiderContent.length-1: count--;
        slaiders.style.transform = `translateX(-${slaiderwidth*count}px)`
     },4000)

}  ;
 