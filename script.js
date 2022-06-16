     
        

         //Gsap

         let t1=gsap.timeline()

         t1.from('.intro-content>h1',{duartion:1,x:-200,opacity:0}).to('.intro-content>h1',{duration:1,x:0,opacity:1}).from('.intro-content>p',{duartion:1,x:-1000},'-=0.5')
         .to('.intro-content>p',{duartion:1,x:0}).from('.intro-content>a',{duration:1,x:-1000},'-=0.8').to('.intro-content>a',{duration:1,x:0})
         
         //Gsap

         let clickcount=0
         
         const body=document.body

         body.style.overflowY='hidden'

         const listitems=document.querySelectorAll('.nav-link')

         const sections=document.querySelectorAll('section')

         const splash=document.querySelector('.splash-screen')

         const navbar=document.querySelector('.navbar')

         const button=document.querySelector('.navbar-toggler')

         const eventcards=document.querySelectorAll('.event-card')

         const navLi=document.querySelectorAll('.nav-link')
         setTimeout(()=>{
           
           splash.classList.add('out')
           body.style.overflowY='scroll'
      
       },1000)

         listitems[0].style.color='#00FFFF'


         button.addEventListener('click',()=>{
             if(clickcount++%2==0)
           navbar.style.background='#00000099'
           else { 
             if(pageYOffset==0)
             navbar.style.background='transparent'
         }
           
         })

         window.addEventListener('scroll',()=>{
             if(pageYOffset>0)
             navbar.style.background='#00000099'
             else  {
               if(clickcount%2==0)
               navbar.style.background='transparent'
       
             }
            
             if(innerHeight>sections[0].getBoundingClientRect().top+sections[0].getBoundingClientRect().height/2+200)
              { navLi[0].style.color="#00ffff"
              DOrestwhite(0)
           }
                if(innerHeight>sections[1].getBoundingClientRect().top+sections[0].getBoundingClientRect().height/2+200)
               {navLi[1].style.color="#00ffff"
               DOrestwhite(1)}
             if(innerHeight>sections[2].getBoundingClientRect().top+sections[0].getBoundingClientRect().height/2+200)
               {navLi[2].style.color="#00ffff"
               DOrestwhite(2)}
           


         })



         for(let i=0;i<listitems.length;i++)
         {
           listitems[i].addEventListener('click',()=>{
               listitems[i].style.color='#00FFFF'
              
               DOrestwhite(i)
               
           })

       }

       function DOrestwhite(i)
       {
           for(let j=0;j<listitems.length;j++)
               {if(j!=i)
               listitems[j].style.color='white'
               }
       }


     