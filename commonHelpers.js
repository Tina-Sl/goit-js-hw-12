import{a as v,i as c,S as L}from"./assets/vendor-53a1b719.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const F="https://pixabay.com/api/",w="44698390-237f634988ff1cc21b0da43c0";async function C(e,o,r){e.includes(" ")&&e.replace(/\s+/g,"+");const i={params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}};try{return(await v.get(F,i)).data}catch(t){console.error(t.message)}}function S(e){return e.map(({webformatURL:o,largeImageURL:r,tags:i,likes:t,views:s,comments:a,downloads:b})=>`<li class="gallery-item">
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
              <p class="box-number">${b}</p>
            </div>
          </div>
        </li>`).join("")}function x(){c.error({position:"topRight",theme:"dark",backgroundColor:"#FF0000",messageSize:"20",messageColor:"#FFFFFF",message:"no connection to the server"})}function k(){c.warning({theme:"dark",backgroundColor:"#CD5C5C",messageSize:"18",messageColor:"#FFFFFF",position:"topRight",message:"Please enter a value in the search field!"})}function E(){c.info({messageSize:"16",position:"topRight",messageColor:"#000000",message:"Sorry, there are no images matching your search query."})}function O(){c.info({backgroundColor:"#8FBC8F",messageSize:"16",position:"bottomRight",messageColor:"#000000",timeout:1e4,message:"We're sorry, but you've reached the end of search results.",closeOnClick:!0})}function $(e,o){c.success({backgroundColor:"#F0FFFF",messageSize:"16",position:"topRight",message:`Loaded: ${o} (${e})`})}const p=document.querySelector(".search-form"),g=document.querySelector(".gallery"),h=document.querySelector(".loader-wrapper"),l=document.querySelector(".load-btn"),n=15;let d=1,m="",f=0,u;p.addEventListener("submit",e=>{if(e.preventDefault(),l.classList.add("load-hidden"),g.innerHTML="",m=e.target.elements.search.value.trim(),m===""){k();return}d=1,y(d),p.reset()});l.addEventListener("click",()=>{l.classList.add("load-hidden"),d+=1,y(d)});async function y(e){h.classList.remove("loader-wrapper-hidden");const o=await C(m,e,n);if(h.classList.add("loader-wrapper-hidden"),o==null){x();return}if(!o.hits.length){E();return}const r=o.totalHits,i=n*e<=r?n*e:r;$(r,i),g.insertAdjacentHTML("beforeend",S(o.hits)),u?u.refresh():u=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),e===1&&r>n?f=Math.round(document.querySelector(".gallery-item").getBoundingClientRect().height):window.scrollBy({top:f*2,left:0,behavior:"smooth"}),e===Math.ceil(r/n)?(l.classList.add("load-hidden"),O()):l.classList.remove("load-hidden")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("back-to-top");window.addEventListener("scroll",function(){window.scrollY>300?e.style.display="block":e.style.display="none"}),e.addEventListener("click",function(o){o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map
