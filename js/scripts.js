const varNavHeight = 100;

//scroller module.  creates scrolling function and initiates all .scroll-link elements
const scroller = (()=>{
    (()=>{
        //Preferred ES6 implementation. Only supported in Chrome at this time 10-7-2018
        
        // const scrollLinks = [...document.getElementsByClassName("scroll-link")];
        // scrollLinks.forEach(function(link){
        //     link.addEventListener("click",function(e){
        //         e.preventDefault();
        //         const targetId = this.getAttribute("href");
        //         scrollTo(targetId);
        //     });
        // });
        
        //Supported implementation:
        const scrollLinks = document.getElementsByClassName("scroll-link");
        for(let i=0;i<scrollLinks.length;i++){
            const link = scrollLinks[i];
            link.addEventListener("click",function(e){    
                e.preventDefault();
                const targetId = this.getAttribute("href");
                scrollTo(targetId);
            });
        };
    })();
    function scrollTo(targetId) {
        const target = document.querySelector(targetId); 
      
        //Preferred ES6 implementation. Only supported in Chrome at this time 10-7-2018
        // window.scrollTo({
        //     'behavior': 'smooth',
        //     'left': 0,
        //     'top': target.offsetTop
        // });

        //This also works but isn't supported cross-browser either >.<
        // target.scrollIntoView({
        //     behavior:"smooth",
        //     block:"start"
        // });

        //Ripped and slightly modified from https://stackoverflow.com/a/44484214/8469201
        
        const initialY = document.documentElement.scrollTop || document.body.scrollTop;
        const targetY = target.offsetTop;
        const baseY = (initialY + targetY) * 0.5;
        const difference = initialY - baseY;
        const startTime = performance.now();
        const duration = 500;
        function step() {
            let normalizedTime = (performance.now() - startTime) / duration;
            if (normalizedTime >= 1){
                window.location.hash = targetId;
                return;
            }
            window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
            window.requestAnimationFrame(step);
        }
        step();
    }

    return scrollTo;
})();
//scroller("#contact");

//parallax images
const parallaxImages = (()=>{
    //Preferred ES6 implementation. Only supported in Chrome at this time 10-7-2018
    
    // const imgs = [...document.getElementsByClassName("img-parallax")];
    // imgs.forEach(function(img){
    //     img.style.backgroundImage = `url(${img.dataset.url})`;
    //     img.style.minHeight = `${img.dataset.height}`;
    // })

    //Supported implementation:
    const imgs = document.getElementsByClassName("img-parallax");
    for(let i=0;i<imgs.length;i++){
        const img = imgs[i];
        img.style.backgroundImage = `url(${img.dataset.url})`;
        img.style.minHeight = `${img.dataset.height}`;
    };
    return imgs;
})();

const header = (()=>{
    const header = document.getElementById("header");
    let bottomX = header.offsetTop+header.offsetHeight-varNavHeight;
    window.onresize = ()=>{
        bottomX = header.offsetTop+window.innerHeight-varNavHeight;
    }
    window.onscroll = ()=>{
        if(window.pageYOffset>bottomX)
            header.classList.add("fixed");
        else
            header.classList.remove("fixed");
    }
    return header;
})();

const burger = (()=>{
    const burger = document.getElementById("burger");
    burger.addEventListener("click", ()=>{
        burger.classList.toggle("animate");
        header.classList.toggle("expanded");
    });
    return burger;
})();



