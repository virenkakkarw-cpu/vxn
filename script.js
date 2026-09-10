const cart = [];
const defaultContent={hero:{eyebrow:'Drop 01 / everyday forms',title:'Built for the<br><em>in-between.</em>',description:"Considered essentials with an easy silhouette, made for the hours that don't fit in a calendar.",button:'Shop the drop',image:'hero-editorial.png'},products:[{name:'Everyday Tee',detail:'Chalk / 240 GSM',price:1890,tone:'sand',shape:'tee cream',tag:'New'},{name:'Studio Overshirt',detail:'Ink / brushed twill',price:3290,tone:'slate',shape:'shirt ink',tag:''},{name:'Easy Trouser',detail:'Olive / soft canvas',price:3590,tone:'clay',shape:'trouser',tag:'Best seller'}]};
const content=JSON.parse(localStorage.getItem('threadline-store-content')||'null')||defaultContent;
document.querySelector('#heroEyebrow').textContent=content.hero.eyebrow;document.querySelector('#heroTitle').innerHTML=content.hero.title;document.querySelector('#heroDescription').textContent=content.hero.description;document.querySelector('#heroButton').innerHTML=`${content.hero.button} <span>→</span>`;document.querySelector('#heroImage').src=content.hero.image||defaultContent.hero.image;
document.querySelector('#products').innerHTML=content.products.map(p=>`<article class="product"><div class="product-photo ${p.tone||'sand'}">${p.tag?`<span class="tag">${p.tag}</span>`:''}<div class="${p.shape||'tee cream'}"></div><button data-product="${p.name}" data-price="${p.price}" class="quick-add">Quick add</button></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.detail}</p></div><strong>${'₹'+Number(p.price).toLocaleString('en-IN')}</strong></div></article>`).join('');
let chosen, selectedSize = 'M';
const money = n => `₹${n.toLocaleString('en-IN')}`;
const cartEl = document.querySelector('#cart'), overlay = document.querySelector('#overlay'), picker = document.querySelector('#picker');
function renderCart(){
  document.querySelector('#bagCount').textContent = cart.length;
  document.querySelector('#cartItems').textContent = cart.length;
  const body = document.querySelector('#cartBody'); const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.querySelector('#total').textContent = money(total);
  body.innerHTML = cart.length ? cart.map((item,i)=>`<div class="cart-row"><div><strong>${item.name}</strong><small>Size ${item.size}</small></div><div><strong>${money(item.price)}</strong><small><button class="remove" data-index="${i}">Remove</button></small></div></div>`).join('') : '<p class="empty">Your bag is waiting for its first good thing.</p>';
  document.querySelectorAll('.remove').forEach(b=>b.onclick=()=>{cart.splice(b.dataset.index,1);renderCart()});
}
function openCart(){cartEl.classList.add('open');overlay.classList.add('open');cartEl.setAttribute('aria-hidden','false')}
function closeCart(){cartEl.classList.remove('open');overlay.classList.remove('open');cartEl.setAttribute('aria-hidden','true')}
document.querySelectorAll('.quick-add').forEach(btn=>btn.onclick=()=>{chosen={name:btn.dataset.product,price:Number(btn.dataset.price)};document.querySelector('#pickerTitle').textContent=chosen.name;picker.showModal()});
document.querySelectorAll('.sizes button').forEach(btn=>btn.onclick=()=>{selectedSize=btn.textContent;document.querySelectorAll('.sizes button').forEach(x=>x.classList.toggle('active',x===btn))});
document.querySelector('.sizes button:nth-child(2)').classList.add('active');
document.querySelector('#confirmAdd').onclick=()=>{cart.push({...chosen,size:selectedSize});renderCart();picker.close();openCart()};
document.querySelector('#bagBtn').onclick=openCart;document.querySelector('#closeCart').onclick=closeCart;overlay.onclick=closeCart;document.querySelector('#closePicker').onclick=()=>picker.close();
document.querySelector('#checkoutBtn').onclick=()=>{if(!cart.length)return;const lines=cart.map(x=>`• ${x.name} (${x.size}) — ${money(x.price)}`).join('%0A');const total=cart.reduce((s,x)=>s+x.price,0);window.open(`https://wa.me/?text=${encodeURIComponent('Hello THREADLINE, I would like to order:%0A')}${lines}${encodeURIComponent(`%0A%0ATotal: ${money(total)}`)}`,'_blank')};
document.querySelector('#newsletterForm').onsubmit=e=>{e.preventDefault();document.querySelector('#formNote').textContent='You’re on the list. See you in the next note.';e.target.reset()};
