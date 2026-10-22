document.getElementById("yr").textContent=new Date().getFullYear();
const links=[...document.querySelectorAll("nav a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));}
}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(s=>io.observe(s));