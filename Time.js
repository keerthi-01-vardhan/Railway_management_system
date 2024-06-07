Array.from(document.getElementsByTagName('input')).forEach((l,i)=>{
    l.addEventListener('keyup',(el)=>{
       if(l.value.length>0){
             document.getElementsByClassName('bi bi-caret-down-fill')[i].style.transform= "rotate(180deg)";
         }else{
             document.getElementsByClassName('bi bi-caret-down-fill')[i].style.transform="rotate(0deg)";
            }
        })
     })

         
     let time = document.getElementById("current-time");
     setInterval(()=>{
         let d=new Date();
         time.innerHTML=d.toLocaleTimeString();
     },1000)