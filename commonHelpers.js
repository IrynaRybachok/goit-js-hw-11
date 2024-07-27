import{i as o,S as d}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/";function g(t){const i=new URLSearchParams({key:"45131353-6378824e083214db07911a1d4",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const n={renderImg:f,onFetchError:y},m=document.querySelector(".img-container-list");function f(t){if(!t.hits.length){o.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}m.innerHTML=p(t.hits),new d(".wrap-img-item a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function p(t){return t.map(({webformatURL:i,largeImageURL:s,tags:c,likes:e,views:r,comments:a,downloads:u})=>`<li class="img-container-item">
        <div class="wrap-img-item">
            <a href="${s}"><img class="img-item" src="${i}" alt="${c}"/></a>
        </div>
        <div class="wrap-img-discr">
            <ul class="img-discr-list">
                <li class="img-discr-item">
                    <h2 class="img-discr-item-header">Likes</h2>
                    <p class="img-discr-item-text">${e}</p>
                </li>
                <li class="img-discr-item">
                    <h2 class="img-discr-item-header">Views</h2>
                    <p class="img-discr-item-text">${r}</p>
                </li>
                <li class="img-discr-item">
                    <h2 class="img-discr-item-header">Comments</h2>
                    <p class="img-discr-item-text">${a}</p>
                </li><li class="img-discr-item">
                    <h2 class="img-discr-item-header">Downloads</h2>
                    <p class="img-discr-item-text">${u}</p>
                </li>
            </ul>
        </div>
    </li>`).join("")}function y(){m.innerHTML="",o.error({message:"Sorry, there are no images matching your search query. Please try again!"})}const l=document.querySelector(".search-img-form");l.addEventListener("submit",L);function L(t){t.preventDefault();const i=t.currentTarget.elements.name.value.trim().toLowerCase();g(i).then(n.renderImg).catch(n.onFetchError).finally(()=>l.reset())}
//# sourceMappingURL=commonHelpers.js.map
