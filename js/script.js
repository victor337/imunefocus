'use strict';

// ==========================================================
// EDITE AQUI: dados principais da empresa e links sociais
// Substitua TODOS os placeholders antes de publicar.
// O WhatsApp deve conter apenas números: país + DDD + número.
// ==========================================================
const siteConfig = {
  companyName: 'IMUNEFOCUS',
  whatsappNumber: '5511977738720',
  phoneDisplay: '(11) 97773-8720',
  email: 'contato@imunefocus.com.br',
  city: 'Cidade e região',
  businessHours: 'Segunda a sábado, das 8h às 18h (A CONFIRMAR)',
  instagram: '#',
  facebook: '#'
};

// EDITE AQUI: lista de serviços. Adicione ou remova objetos livremente.
const services = [
  { title:'Dedetização', category:'Controle de pragas', description:'Controle de baratas, formigas, aranhas, escorpiões, pulgas e carrapatos com produtos regulamentados e técnicas seguras.', icon:'◈' },
  { title:'Controle de baratas', category:'Controle de pragas', description:'Inspeção, tratamento dos pontos críticos e orientação preventiva.', icon:'◎' },
  { title:'Controle de formigas', category:'Controle de pragas', description:'Solução adequada à espécie, ao foco e às características do ambiente.', icon:'⌁' },
  { title:'Aranhas e escorpiões', category:'Controle de pragas', description:'Manejo técnico com atenção a abrigos, acessos e fatores de risco.', icon:'✣' },
  { title:'Pulgas e carrapatos', category:'Controle de pragas', description:'Tratamento direcionado do ambiente e orientação para prevenir novos focos.', icon:'◌' },
  { title:'Desratização', category:'Roedores', description:'Inspeção, monitoramento e métodos eficazes contra ratos, camundongos e ratazanas.', icon:'◉' },
  { title:'Ratos de telhado', category:'Roedores', description:'Controle direcionado a roedores que acessam forros, telhados e áreas elevadas.', icon:'⌂' },
  { title:'Camundongos', category:'Roedores', description:'Identificação de acessos e controle de pequenos roedores em áreas internas.', icon:'⌕' },
  { title:'Ratazanas', category:'Roedores', description:'Controle de focos associados a esgoto, terrenos e áreas externas.', icon:'◍' },
  { title:'Descupinização', category:'Cupins', description:'Combate a cupins para proteger móveis, portas, telhados e estruturas.', icon:'▤' },
  { title:'Cupim de madeira seca', category:'Cupins', description:'Tratamento de peças, móveis, batentes e outros elementos de madeira.', icon:'◇' },
  { title:'Cupim subterrâneo', category:'Cupins', description:'Avaliação de colônias e caminhos que podem atingir estruturas e edificações.', icon:'⌇' },
  { title:'Limpeza de caixa d’água', category:'Limpeza e higiene', description:'Higienização completa para remover impurezas, resíduos e microrganismos.', icon:'◒' },
  { title:'Frequência e processo', category:'Limpeza e higiene', description:'A periodicidade e as etapas são orientadas conforme o reservatório, uso e condições encontradas.', icon:'↻' },
  { title:'Certificado de limpeza', category:'Limpeza e higiene', description:'Consulte as condições para emissão do comprovante referente ao serviço executado.', icon:'▧' },
  { title:'Limpeza de forros', category:'Limpeza e higiene', description:'Remoção de fezes, ninhos, resíduos e sujeiras deixadas por pragas em forros e entre-forros.', icon:'⌂' },
  { title:'Sanitização de ambientes', category:'Limpeza e higiene', description:'Redução da carga de microrganismos para melhores condições de higiene.', icon:'✦' },
  { title:'Controle de pombos', category:'Serviços especiais', description:'Soluções seguras para afastar pombos de telhados, fachadas e outras áreas.', icon:'⌁' },
  { title:'Desentupimento', category:'Serviços especiais', description:'Pias, ralos, vasos, esgoto, caixas de gordura, colunas e tubulações. Serviço fechado, sem cobrança por metro.', icon:'≈' }
];

// EDITE AQUI: estatísticas. Estes textos são exemplos, não dados comprovados.
const statistics = [
  { value: 30, suffix: '+', label: 'anos de tradição familiar' },
  { value: 9, suffix: '', label: 'anos na Grande São Paulo' },
  { value: 4, suffix: '', label: 'segmentos atendidos' }
];

// EDITE AQUI: depoimentos ilustrativos. Substitua por avaliações reais autorizadas.
const testimonials = [
  { name:'Cliente exemplo A', service:'Dedetização residencial', text:'Texto ilustrativo: atendimento organizado, explicações claras e cuidado com o ambiente.', stars:5 },
  { name:'Cliente exemplo B', service:'Desentupimento', text:'Texto ilustrativo: a equipe orientou todas as etapas e conduziu o atendimento com atenção.', stars:5 },
  { name:'Cliente exemplo C', service:'Controle preventivo', text:'Texto ilustrativo: comunicação ágil e solução adaptada às necessidades do espaço.', stars:5 },
  { name:'Cliente exemplo D', service:'Atendimento empresarial', text:'Texto ilustrativo: processo bem explicado e suporte acessível pelo WhatsApp.', stars:5 }
];

// EDITE AQUI: perguntas frequentes e respostas responsáveis.
const faqs = [
  ['O serviço de dedetização é seguro?','Os produtos e procedimentos devem ser definidos após avaliação técnica. A equipe orientará sobre cuidados específicos para pessoas, crianças, animais e alimentos.'],
  ['Preciso sair do imóvel durante o atendimento?','Isso depende do método, produto e características do local. A orientação correta é informada antes da execução.'],
  ['Quanto tempo dura o efeito da dedetização?','A duração varia conforme a praga, o nível de infestação, as condições ambientais e as medidas preventivas adotadas.'],
  ['Vocês atendem empresas e condomínios?','Sim, o atendimento pode ser planejado para residências, empresas, comércios e condomínios, sujeito à cobertura regional.'],
  ['Como funciona o orçamento?','Entre em contato, descreva a necessidade e informe a localização. Dependendo do caso, uma avaliação técnica pode ser necessária.'],
  ['O atendimento é agendado?','Sim. Datas e horários são combinados conforme disponibilidade da equipe e urgência da solicitação.'],
  ['Quais tipos de pragas vocês controlam?','A lista inclui baratas, formigas, cupins, roedores, pulgas, carrapatos, mosquitos e outras pragas urbanas, após identificação.'],
  ['Vocês realizam atendimento emergencial?','A disponibilidade emergencial depende da região, do tipo de ocorrência e da agenda. Consulte pelo WhatsApp.'],
  ['O serviço possui garantia?','Condições de garantia variam por serviço, ambiente e plano de tratamento. Solicite os termos específicos antes da contratação.'],
  ['Como devo preparar o ambiente?','A preparação muda conforme o procedimento. Você receberá orientações sobre alimentos, móveis, circulação e retorno ao ambiente.']
];

const featured = [
  ['Dedetização','Eliminamos e controlamos baratas, formigas, aranhas, pulgas, carrapatos e escorpiões com técnicas seguras.','◈'],
  ['Desratização','Controle de ratos de telhado, camundongos e ratazanas por meio de inspeção e monitoramento.','◉'],
  ['Descupinização','Combate a cupins de madeira seca e subterrâneos para proteger móveis e estruturas.','▤'],
  ['Desentupimento','Pias, ralos, vasos, esgoto, caixas de gordura, colunas e tubulações — sem cobrança por metro.','≈']
];
const differences = [['⚡','Atendimento rápido'],['♙','Equipe capacitada'],['◈','Produtos profissionais'],['✓','Segurança na aplicação'],['◉','Orçamento facilitado'],['⌂','Residencial e empresarial'],['✦','Soluções personalizadas'],['◌','Suporte pelo WhatsApp'],['♧','Compromisso ambiental'],['↗','Orientação pós-serviço']];
const audiences = [['⌂','Casas'],['▤','Apartamentos'],['▦','Condomínios'],['♨','Restaurantes'],['▥','Mercados'],['▣','Escritórios'],['▱','Lojas'],['▰','Galpões'],['⚙','Indústrias'],['✚','Clínicas'],['▧','Escolas'],['◫','Comércios']];

const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
const $ = (selector, context = document) => context.querySelector(selector);
const placeholderNumber = /SEUNUMERO/i.test(siteConfig.whatsappNumber);

function whatsappUrl(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function applyConfig() {
  $$('[data-company]').forEach(el => el.textContent = siteConfig.companyName);
  $$('[data-phone]').forEach(el => el.textContent = siteConfig.phoneDisplay);
  $$('[data-email]').forEach(el => { el.textContent = siteConfig.email; el.href = `mailto:${siteConfig.email}`; });
  $$('[data-city]').forEach(el => el.textContent = siteConfig.city);
  $$('[data-hours]').forEach(el => el.textContent = siteConfig.businessHours);
  $$('[data-instagram]').forEach(el => el.href = siteConfig.instagram);
  $$('[data-facebook]').forEach(el => el.href = siteConfig.facebook);
  $$('[data-whatsapp]').forEach(el => {
    const message = el.dataset.message || `Olá, gostaria de falar com a ${siteConfig.companyName}.`;
    el.href = whatsappUrl(message);
    el.target = '_blank'; el.rel = 'noopener noreferrer';
    if (placeholderNumber) el.title = 'Substitua o número do WhatsApp em js/script.js';
  });
  $('#current-year').textContent = new Date().getFullYear();
}

function renderContent() {
  $('#featured-services').innerHTML = featured.map((item,i) => `<article class="feature-card reveal ${i===0?'featured':''}"><span class="card-icon" aria-hidden="true">${item[2]}</span><h3>${item[0]}</h3><p>${item[1]}</p>${item[0]==='Desentupimento'?'<a class="card-link" href="desentupimento.html">Conhecer o serviço →</a>':`<a class="card-link" href="#" data-whatsapp data-message="Olá, gostaria de um orçamento para ${item[0]}.">Solicitar orçamento →</a>`}</article>`).join('');
  $('#differences-grid').innerHTML = differences.map(i => `<div class="difference-item"><span aria-hidden="true">${i[0]}</span><strong>${i[1]}</strong></div>`).join('');
  $('#audience-grid').innerHTML = audiences.map(i => `<div class="audience-item"><span aria-hidden="true">${i[0]}</span>${i[1]}</div>`).join('');
  $('#stats').innerHTML = statistics.map(s => `<div class="stat"><strong data-count="${s.value}">0</strong><b>${s.suffix}</b><span>${s.label}</span></div>`).join('');
  $('#testimonial-track').innerHTML = testimonials.map(t => `<article class="testimonial-card"><div class="stars" aria-label="${t.stars} de 5 estrelas">${'★'.repeat(t.stars)}</div><blockquote>“${t.text}”</blockquote><div class="person"><span class="avatar">${t.name.split(' ').filter(w=>w.length>1).slice(-2).map(w=>w[0]).join('')}</span><span><strong>${t.name}</strong><small>${t.service}</small></span></div></article>`).join('');
  $('#testimonial-dots').innerHTML = testimonials.map((_,i) => `<button class="${i===0?'active':''}" aria-label="Ir ao depoimento ${i+1}" data-slide="${i}"></button>`).join('');
  $('#faq-list').innerHTML = faqs.map((f,i) => `<div class="faq-item"><button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${i}">${f[0]}<span aria-hidden="true">+</span></button><div class="faq-answer" id="faq-answer-${i}"><div><p>${f[1]}</p></div></div></div>`).join('');
}

let activeCategory = 'Todos'; let expandedServices = false;
function renderServices() {
  const filtered = activeCategory === 'Todos' ? services : services.filter(s => s.category === activeCategory);
  const visible = expandedServices ? filtered : filtered.slice(0, 9);
  $('#services-grid').innerHTML = visible.map(s => `<article class="service-card"><span class="card-icon" aria-hidden="true">${s.icon}</span><div><h3>${s.title}</h3><p>${s.description}</p></div></article>`).join('');
  const toggle = $('#show-all-services');
  toggle.hidden = filtered.length <= 9;
  toggle.innerHTML = expandedServices ? 'Mostrar menos <span>−</span>' : `Ver todos os serviços (${filtered.length}) <span>+</span>`;
}
function setupServices() {
  const categories = ['Todos', ...new Set(services.map(s => s.category))];
  $('#service-filters').innerHTML = categories.map((c,i) => `<button class="filter-button ${i===0?'active':''}" type="button" data-category="${c}" aria-pressed="${i===0}">${c}</button>`).join('');
  $('#service-filters').addEventListener('click', e => { const btn=e.target.closest('button'); if(!btn)return; activeCategory=btn.dataset.category; expandedServices=false; $$('.filter-button').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn)}); renderServices(); });
  $('#show-all-services').addEventListener('click', () => { expandedServices=!expandedServices; renderServices(); });
  renderServices();
}

function setupNavigation() {
  const toggle=$('.menu-toggle'), nav=$('.main-nav');
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Abrir menu':'Fechar menu');nav.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});
  $$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');nav.classList.remove('open');document.body.classList.remove('menu-open')}));
  const onScroll=()=>{$('#header').classList.toggle('scrolled',scrollY>20);$('#back-to-top').classList.toggle('visible',scrollY>600)};addEventListener('scroll',onScroll,{passive:true});onScroll();
  $('#back-to-top').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
}

function setupFaq() {
  $$('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.parentElement,open=item.classList.contains('open');$$('.faq-item').forEach(i=>{i.classList.remove('open');$('.faq-question',i).setAttribute('aria-expanded','false')});if(!open){item.classList.add('open');btn.setAttribute('aria-expanded','true')}}));
}

function setupCarousel() {
  let index=0; const track=$('#testimonial-track'), dots=$$('#testimonial-dots button');
  const show=i=>{index=(i+testimonials.length)%testimonials.length;const card=$('.testimonial-card');const gap=innerWidth<=720?14:21;track.style.transform=`translateX(-${index*(card.getBoundingClientRect().width+gap)}px)`;dots.forEach((d,n)=>d.classList.toggle('active',n===index))};
  $('#testimonial-prev').addEventListener('click',()=>show(index-1));$('#testimonial-next').addEventListener('click',()=>show(index+1));dots.forEach(d=>d.addEventListener('click',()=>show(Number(d.dataset.slide))));addEventListener('resize',()=>show(index));
}

function setupAnimations() {
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){$$('.reveal').forEach(el=>el.classList.add('visible'));$$('[data-count]').forEach(el=>el.textContent=el.dataset.count);return}
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>revealObserver.observe(el));
  const countObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=Number(el.dataset.count),start=performance.now(),duration=1200;const tick=now=>{el.textContent=Math.round(Math.min((now-start)/duration,1)*target);if(now-start<duration)requestAnimationFrame(tick)};requestAnimationFrame(tick);countObserver.unobserve(el)}),{threshold:.7});$$('[data-count]').forEach(el=>countObserver.observe(el));
}

function setupForm() {
  const form=$('#contact-form'), status=$('#form-status');
  form.addEventListener('submit',e=>{e.preventDefault();let valid=true;$$('.error',form).forEach(x=>x.textContent='');$$('[required]',form).forEach(field=>{field.setAttribute('aria-invalid','false');if(!field.value.trim()){valid=false;field.setAttribute('aria-invalid','true');field.nextElementSibling.textContent='Preencha este campo.'}});const email=form.elements.email;if(email.value&&!/^\S+@\S+\.\S+$/.test(email.value)){valid=false;email.setAttribute('aria-invalid','true');email.nextElementSibling.textContent='Informe um e-mail válido.'}if(!valid){status.textContent='Revise os campos destacados.';const first=$('[aria-invalid=true]',form);first?.focus();return}const data=new FormData(form);const message=`Olá, gostaria de solicitar um orçamento.\n\nNome: ${data.get('name')}\nTelefone: ${data.get('phone')}\nE-mail: ${data.get('email')||'Não informado'}\nServiço: ${data.get('service')}\nCidade/Bairro: ${data.get('location')}\nMensagem: ${data.get('message')}`;status.textContent=placeholderNumber?'Formulário validado. Configure o número do WhatsApp em js/script.js para enviar.':'Tudo certo! Abrindo o WhatsApp…';if(!placeholderNumber)window.open(whatsappUrl(message),'_blank','noopener,noreferrer')});
}

renderContent();
applyConfig();
setupServices();
setupNavigation();
setupFaq();
setupCarousel();
setupAnimations();
setupForm();
