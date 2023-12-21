document.addEventListener("click",()=>{
    chats = document.getElementsByClassName("_2Ts6i _2xAQV")[0];
    uE = document.createElement("div");
    uE.classList.add("upperElement");
    
    uE.style.cssText = 'position: absolute;width: 100vw;height: 100vh;z-index: 1;backdrop-filter: blur(12px);';
    
    chats?.insertAdjacentElement("beforeend",uE);
    
    console.log("chalja bhai plz");
},{once:true})