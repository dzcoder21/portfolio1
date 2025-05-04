/* ============================= Typing animation =======================*/
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer","Youtuber"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})
/* ================================ Aside ================================*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let i=0 ; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })   
      }
      function showSection(element) {
        for(let i=0 ; i<totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        const targetSection = document.querySelector("#" + target);
        targetSection.classList.add("active");
        
        // 👇 Smooth scroll to section
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
    
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click",() =>
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
            }    
            window.addEventListener("load", function () {
                document.documentElement.style.overflowY = "auto"; // Enable vertical scroll
                document.documentElement.style.overflowX = "hidden"; // Disable horizontal scroll
                document.body.style.overflowY = "auto"; 
                document.body.style.overflowX = "hidden";
              });
              
              