import{a as b,i as c,S as v}from"./vendor-53a1b719.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const L="https://pixabay.com/api/",F="44698390-237f634988ff1cc21b0da43c0";async function w(e,o,r){e.includes(" ")&&e.replace(/\s+/g,"+");const i={params:{key:F,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}};try{return(await b.get(L,i)).data}catch(t){console.error(t.message)}}function x(e){return e.map(({webformatURL:o,largeImageURL:r,tags:i,likes:t,views:s,comments:a,downloads:y})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="gallery-img-title">
            <div class="box">
              <h2 class="box-title">Likes</h2>
              <p class="box-number">${t}</p>
            </div>
            <div class="box">
              <h2 class="box-title">Views</h2>
              <p class="box-number">${s}</p>
            </div>
            <div class="box">
              <h2 class="box-title">Comments</h2>
              <p class="box-number">${a}</p>
            </div>
            <div class="box">
              <h2 class="box-title">Downloads</h2>
              <p class="box-number">${y}</p>
            </div>
          </div>
        </li>`).join("")}function C(){c.error({position:"topRight",theme:"dark",backgroundColor:"#FF0000",messageSize:"20",messageColor:"#FFFFFF",message:"no connection to the server"})}function S(){c.warning({theme:"dark",backgroundColor:"#CD5C5C",messageSize:"18",messageColor:"#FFFFFF",position:"topRight",message:"Please enter a value in the search field!"})}function k(){c.info({messageSize:"16",position:"topRight",messageColor:"#000000",message:"Sorry, there are no images matching your search query."})}function E(){c.info({backgroundColor:"#8FBC8F",messageSize:"16",position:"bottomRight",messageColor:"#000000",timeout:1e4,message:"We're sorry, but you've reached the end of search results.",closeOnClick:!0})}function O(e,o){c.success({backgroundColor:"#F0FFFF",messageSize:"16",position:"topRight",message:`Loaded: ${o} (${e})`})}const m=document.querySelector(".search-form"),f=document.querySelector(".gallery"),h=document.querySelector(".loader-wrapper"),l=document.querySelector(".load-btn"),n=15;let d=1,u="",p=0;m.addEventListener("submit",e=>{if(e.preventDefault(),l.classList.add("load-hidden"),f.innerHTML="",u=e.target.elements.search.value.trim(),u===""){S();return}d=1,g(d),m.reset()});l.addEventListener("click",()=>{l.classList.add("load-hidden"),d+=1,g(d)});async function g(e){h.classList.remove("loader-wrapper-hidden");const o=await w(u,e,n);if(h.classList.add("loader-wrapper-hidden"),o==null){C();return}if(!o.hits.length){k();return}const r=o.totalHits,i=n*e<=r?n*e:r;O(r,i),f.insertAdjacentHTML("beforeend",x(o.hits)),new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),e===1&&r>n?p=Math.round(document.querySelector(".gallery-item").getBoundingClientRect().height):window.scrollBy({top:p*2,left:0,behavior:"smooth"}),e===Math.ceil(r/n)?(l.classList.add("load-hidden"),E()):l.classList.remove("load-hidden")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("back-to-top");window.addEventListener("scroll",function(){window.scrollY>300?e.style.display="block":e.style.display="none"}),e.addEventListener("click",function(o){o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=main-b51898f2.js.map
