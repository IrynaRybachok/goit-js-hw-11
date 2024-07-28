import{i as u,S as h}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/";function p(r){const i=new URLSearchParams({key:"45131353-6378824e083214db07911a1d4",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${g}?${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const c={renderImg:y,onFetchError:w},f=document.querySelector(".loader"),a=document.querySelector(".img-container-list");function y(r){if(f.style.display="none",a.innerHTML="",!r.hits.length){u.show({position:"topRight",maxWidth:"432px",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:" 24px",backgroundColor:"#EF4040"});return}a.innerHTML=L(r.hits),new h(".wrap-img-item a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function L(r){return r.map(({webformatURL:i,largeImageURL:s,tags:n,likes:e,views:t,comments:o,downloads:d})=>`<li class="img-container-item">
        <div class="wrap-img-item">
            <a href="${s}"><img class="img-item" src="${i}" alt="${n}"/></a>
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
                    <p class="img-discr-item-text">${d}</p>
                </li>
            </ul>
        </div>
    </li>`).join("")}function w(r){a.innerHTML="",log(r)}const l=document.querySelector(".search-img-form"),m=document.querySelector(".loader");l.addEventListener("submit",S);m.style.display="none";function S(r){r.preventDefault(),m.style.display="block";const i=r.currentTarget.elements.name.value.trim().toLowerCase();p(i).then(c.renderImg).catch(c.onFetchError).finally(()=>l.reset())}
//# sourceMappingURL=commonHelpers.js.map
