document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("mobile-menu-btn"),e=document.getElementById("mobile-menu"),n=t?.querySelector("span");t&&e&&n&&t.addEventListener("click",()=>{e.classList.toggle("hidden"),n.textContent=e.classList.contains("hidden")?"menu":"close"})});function c(){if(typeof window>"u")return[];try{const t=localStorage.getItem("growtrades_cart");return t?JSON.parse(t):[]}catch{return[]}}function d(t){typeof window>"u"||(localStorage.setItem("growtrades_cart",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("cart-updated",{detail:t})))}function f(t,e=1){const n=c(),a=n.find(r=>r.id===t.id);a?a.quantity+=e:n.push({...t,quantity:e}),d(n)}function w(t,e){let n=c();const a=n.find(r=>r.id===t);a&&(e<=0?n=n.filter(r=>r.id!==t):a.quantity=e,d(n))}function p(t){let e=c();e=e.filter(n=>n.id!==t),d(e)}function g(){return c().reduce((e,n)=>{const a=n.price.replace(",",".").replace(/[^\d.-]/g,""),r=parseFloat(a);return e+r*n.quantity},0)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("cart-drawer-overlay"),e=document.getElementById("cart-drawer"),n=document.getElementById("close-cart"),a=document.getElementById("cart-items-container"),r=document.getElementById("cart-total");window.openCart=()=>{t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0"),e.classList.remove("translate-x-full")},10),l()},window.closeCart=()=>{t.classList.add("opacity-0"),e.classList.add("translate-x-full"),setTimeout(()=>{t.classList.add("hidden")},300)},document.addEventListener("click",i=>{i.target.closest(".open-cart-btn")&&(i.preventDefault(),window.openCart())}),t?.addEventListener("click",window.closeCart),n?.addEventListener("click",window.closeCart);const l=()=>{const i=c();i.length===0?a.innerHTML=`
                    <div class="flex flex-col items-center justify-center h-full text-center text-gray-400 opacity-60">
                        <span class="material-symbols-outlined text-6xl mb-4">production_quantity_limits</span>
                        <p class="uppercase tracking-widest text-sm font-bold">Tu carrito está vacío</p>
                    </div>
                `:a.innerHTML=i.map(o=>`
                    <div class="flex gap-4 bg-white/5 border border-white/10 p-4 rounded-xl relative group">
                        <!-- Img -->
                        <div class="w-16 h-16 bg-white rounded-lg p-2 flex-shrink-0 flex items-center justify-center">
                            <img src="${o.image}" class="max-w-full max-h-full object-contain" alt="">
                        </div>
                        
                        <!-- Info -->
                        <div class="flex-1 flex flex-col justify-center">
                            <h4 class="font-bold text-white text-[13px] leading-tight pr-6">${o.title}</h4>
                            <p class="text-gold font-mono text-sm font-bold mt-1">${o.price}</p>
                            
                            <!-- Controles -->
                            <div class="flex items-center gap-3 mt-3">
                                <div class="flex items-center bg-transparent rounded border border-white/20 h-7 overflow-hidden">
                                    <button onclick="window.updateCartItem('${o.id}', ${o.quantity-1})" class="w-7 h-full flex justify-center items-center hover:bg-white/10 text-white">-</button>
                                    <span class="w-8 text-center font-mono text-xs">${o.quantity}</span>
                                    <button onclick="window.updateCartItem('${o.id}', ${o.quantity+1})" class="w-7 h-full flex justify-center items-center hover:bg-white/10 text-gold">+</button>
                                </div>
                            </div>
                        </div>

                        <!-- Borrar -->
                        <button onclick="window.removeCartItem('${o.id}')" class="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors p-1 flex items-center justify-center">
                            <span class="material-symbols-outlined text-lg">delete</span>
                        </button>
                    </div>
                `).join("");const s=g();r.innerText=s.toLocaleString("es-ES",{minimumFractionDigits:2})+" €"};window.updateCartItem=(i,s)=>{w(i,s)},window.removeCartItem=i=>{p(i)},window.addToCartGlobal=i=>{f(i,i.quantity||1),window.openCart()},window.addEventListener("cart-updated",()=>{l(),u()});const u=()=>{const s=c().reduce((o,m)=>o+m.quantity,0);document.querySelectorAll(".cart-badge").forEach(o=>{o.textContent=s.toString(),s>0?o.classList.remove("hidden"):o.classList.add("hidden")})};u()});
