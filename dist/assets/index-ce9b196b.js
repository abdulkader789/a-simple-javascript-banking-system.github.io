(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}})();const h=document.querySelector("button.mobile-menu-button"),b=document.querySelector(".mobile-menu");let d=!1;const E=document.querySelectorAll(".sign-in"),w=document.querySelectorAll(".banking"),v=document.querySelectorAll(".history"),a=document.getElementById("signin-section"),u=document.getElementById("banking-section"),m=document.getElementById("history-section"),L=document.getElementById("deposit-btn"),I=document.getElementById("withdraw-btn"),B=document.getElementById("d-input"),_=document.getElementById("w-input");h.addEventListener("click",()=>{b.classList.toggle("hidden")});E.forEach(e=>{e.addEventListener("click",()=>{d=!0,u.style.display="block",m.style.display="none",a.style.display="none"})});w.forEach(e=>{e.addEventListener("click",()=>{if(d)u.style.display="block",a.style.display="none",m.style.display="none";else{alert("Plese sign in first");return}})});v.forEach(e=>{e.addEventListener("click",()=>{if(d)u.style.display="none",a.style.display="none",m.style.display="block";else{alert("Plese sign in first");return}})});function k(e){const n=o=>[...o].every(t=>"0123456789".includes(t));let i=document.getElementById(e);if(i.value.length==0)return!1;if(i.value.length>0)return!!n(i.value)}function $(e){let n=document.getElementById(e);return parseFloat(n.value)}function p(e){let n=document.getElementById(e).innerText;return parseFloat(n)}function y(e,n){let i=document.getElementById(e);i.innerText=n}function c(e,n,i){if(k(e)){let t=$(e),l=p(n),r=p(i),s=0;if(t>r&&n=="withdraw"){alert("You don't have enough balance");return}n=="deposit"&&(s=r+t,f("deposit",t,s)),n=="withdraw"&&(s=r-t,f("withdraw",t,s)),y(i,s);let g=l+t;y(n,g)}else alert("Enter integer value")}B.addEventListener("keypress",function(e){e.key==="Enter"&&(e.preventDefault(),c("d-input","deposit","balance"))});_.addEventListener("keypress",function(e){e.key==="Enter"&&(e.preventDefault(),c("w-input","withdraw","balance"))});L.addEventListener("click",()=>{c("d-input","deposit","balance")});I.addEventListener("click",()=>{c("w-input","withdraw","balance")});function f(e,n,i){const o=S(),t=document.createElement("div");e=="deposit"&&t.classList.add("m-1","p-6","bg-green-500"),e=="withdraw"&&t.classList.add("m-1","p-6","bg-red-500"),t.innerHTML=`<p class="text-white">${o}</p>
                    <p class="text-white">Your ${e}: $ ${n}</p>
                    <p class="text-white">Your balance: $ ${i}</p>
`,document.getElementById("statement").appendChild(t)}function S(){const e=new Date;let n=e.getDate(),i=e.getMonth()+1,o=e.getFullYear(),t=`${n}-${i}-${o}`,l=e.toLocaleTimeString();return[t+"    "+l]}
