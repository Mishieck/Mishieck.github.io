(()=>{"use strict";const e=e=>{let t=document.createElement("li"),n=document.createElement("img"),s=document.createElement("span");return t.className+="item",t.setAttribute("riu-neu","sm"),t.setAttribute("title",e),n.src="/assets/img/check.svg",n.className+="icon",n.setAttribute("alt",e),s.className+="text",s.innerText=e,t.appendChild(n),t.appendChild(s),t},t=e=>{const t=document.createElement("li"),n=document.createElement("div"),s=document.createElement("div"),i=document.createElement("img"),a=document.createElement("h1");return t.className+="item",t.setAttribute("riu-neu","sm"),t.setAttribute("title",e.name),n.className+="square",n.setAttribute("riu-neu","sm radius(2rem) convex"),s.className+="content",i.src=e.logo,i.className+="icon",i.setAttribute("alt",e.name),a.className+="title",a.innerText=e.name,t.appendChild(n),n.appendChild(s),s.appendChild(i),s.appendChild(a),t};window.addEventListener("load",(e=>{n(),s()}));const n=async()=>{const n=document.querySelector("#header .brand .name"),s=document.querySelector("#main-skills .list"),i=document.querySelector("#specific-skills .list");n.innerText="",n.appendChild((()=>{const e=document.createDocumentFragment();for(const t of"Mishieck Mwale"){const n=document.createElement("span");n.className+="wrapper",n.innerText=t,e.appendChild(n)}return e})());const a=(await(await fetch("/assets/json/main-skills.json")).json()).mainSkills,c=(await(await fetch("/assets/json/specific-skills.json")).json()).specificSkills;for(const t of a)s.appendChild(e(t));for(const e of c)i.appendChild(t(e))},s=async()=>{document.querySelectorAll("#header .contacts .square").forEach((e=>{i(e)})),i(document.querySelector("#header .brand .logo"))},i=e=>{e.addEventListener("mouseenter",(function(e){this.setAttribute("riu-neu",this.getAttribute("riu-neu").concat(" colors(255 255 255, 64 255 64) opacities(1, 0.5)"))})),e.addEventListener("mouseleave",(function(e){this.setAttribute("riu-neu",this.getAttribute("riu-neu").replace(" colors(255 255 255, 64 255 64) opacities(1, 0.5)",""))}))}})();