import{i as m,S as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/";function f(i){const r=new URLSearchParams({key:"45131353-6378824e083214db07911a1d4",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const l={renderImg:y,onFetchError:x},d=document.querySelector(".img-container-list"),u=document.querySelector(".loader");function y(i){if(u.style.display="none",!i.hits.length){m.show({title:"Error",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"topRight",maxWidth:"432px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#EF4040"});return}d.innerHTML=F(i.hits),new p(".wrap-img-item a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function F(i){return i.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:o,downloads:g})=>`<li class="img-container-item">
        <div class="wrap-img-item">
            <a href="${s}"><img class="img-item" src="${r}" alt="${n}"/></a>
        </div>
        <div class="wrap-img-discr">
            <ul class="img-discr-list">
                <li class="img-discr-item">
                    <h2 class="img-discr-item-header">Likes</h2>
                    <p class="img-discr-item-text">${e}</p>
                </li>
                <li class="img-discr-item">
                    <h2 class="img-discr-item-header">Views</h2>
                    <p class="img-discr-item-text">${t}</p>
                </li>
                <li class="img-discr-item">
                    <h2 class="img-discr-item-header">Comments</h2>
                    <p class="img-discr-item-text">${o}</p>
                </li><li class="img-discr-item">
                    <h2 class="img-discr-item-header">Downloads</h2>
                    <p class="img-discr-item-text">${g}</p>
                </li>
            </ul>
        </div>
    </li>`).join("")}function x(i){d.innerHTML="",u.style.display="none",console.log(i)}const a=document.querySelector(".search-img-form"),c=document.querySelector(".loader"),L=document.querySelector(".img-container-list");a.addEventListener("submit",w);c.style.display="none";function w(i){i.preventDefault(),c.style.display="block",L.innerHTML="";const r=i.currentTarget.elements.name.value.trim().toLowerCase();if(!r){m.show({title:"Caution",titleColor:"#FAFAFB",titleSize:"16px",titleLineHeight:"24px",position:"topRight",maxWidth:"432px",message:"Ops.. You forgot to write the keyword!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#FFA000"}),c.style.display="none",a.reset();return}f(r).then(l.renderImg).catch(l.onFetchError).finally(()=>a.reset())}
//# sourceMappingURL=commonHelpers.js.map
