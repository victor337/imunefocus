'use strict';

// EDITE AQUI: mantenha estes dados iguais aos de js/script.js.
const pageConfig={whatsappNumber:'5511977738720',phoneDisplay:'(11) 97773-8720',email:'contato@imunefocus.com.br',city:'Cidade e região'};
const $$=s=>[...document.querySelectorAll(s)],$=s=>document.querySelector(s),placeholder=/SEUNUMERO/i.test(pageConfig.whatsappNumber);
const whatsappUrl=message=>`https://wa.me/${pageConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
$$('[data-whatsapp]').forEach(el=>{el.href=whatsappUrl(el.dataset.message||'Olá, preciso de desentupimento.');el.target='_blank';el.rel='noopener noreferrer';if(placeholder)el.title='Configure o número em js/desentupimento.js'});
$$('[data-phone]').forEach(el=>el.textContent=pageConfig.phoneDisplay);$$('[data-email]').forEach(el=>{el.textContent=pageConfig.email;el.href=`mailto:${pageConfig.email}`});$$('[data-city]').forEach(el=>el.textContent=pageConfig.city);$('#current-year').textContent=new Date().getFullYear();
const toggle=$('.menu-toggle'),nav=$('.main-nav');toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});$$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.classList.remove('menu-open')}));
const topButton=$('#back-to-top');addEventListener('scroll',()=>topButton.classList.toggle('visible',scrollY>500),{passive:true});topButton.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
if(matchMedia('(prefers-reduced-motion: reduce)').matches){$$('.reveal').forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});$$('.reveal').forEach(el=>observer.observe(el))}
