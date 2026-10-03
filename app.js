(() => {
  const c = window.CHACARA_CONFIG;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const escape = (value = "") => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const hasValue = value => value && !String(value).includes("[");
  const whatsappUrl = context => {
    const message = encodeURIComponent(`Olá! Conheci a ${c.name} pelo site e gostaria de ${context}.`);
    return hasValue(c.contacts.whatsapp) ? `https://wa.me/${c.contacts.whatsapp}?text=${message}` : "#contato";
  };
  const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24"><use href="#i-${name}"></use></svg>`;
  const button = (text, context, variant = "primary") => `<a class="button button--${variant}" href="${whatsappUrl(context)}" ${hasValue(c.contacts.whatsapp) ? 'target="_blank" rel="noopener"' : ""}>${escape(text)} ${icon("arrow")}</a>`;

  const icons = `<svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg">
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
    <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
    <symbol id="i-bed" viewBox="0 0 24 24"><path d="M3 18v-7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7M3 15h18M6 15v3m12-3v3M7 12h3"/></symbol>
    <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6m2 9a5 5 0 0 0-3-4.6"/></symbol>
    <symbol id="i-sleep" viewBox="0 0 24 24"><path d="M4 18V9h16v9M4 14h16M7 9V6h10v3M4 18h16"/></symbol>
    <symbol id="i-pool" viewBox="0 0 24 24"><path d="M3 17c1.5 1.3 3.5 1.3 5 0 1.5 1.3 3.5 1.3 5 0 1.5 1.3 3.5 1.3 5 0M5 13l5-9 5 9M8 9h4"/></symbol>
    <symbol id="i-grill" viewBox="0 0 24 24"><path d="M5 8h14l-1 5a6 6 0 0 1-12 0L5 8Zm7 11v-3M8 22l2-3m6 3-2-3M8 5c0-1 1-1 1-2s-1-1-1-2m4 4c0-1 1-1 1-2s-1-1-1-2m4 4c0-1 1-1 1-2s-1-1-1-2"/></symbol>
    <symbol id="i-car" viewBox="0 0 24 24"><path d="M5 17h14l-1-8H6l-1 8Zm2 0v2m8-2v2M8 13h.01M16 13h.01"/></symbol>
    <symbol id="i-tree" viewBox="0 0 24 24"><path d="m12 3 5 7h-3l4 5h-4l3 4H7l3-4H6l4-5H7l5-7ZM12 19v3"/></symbol>
    <symbol id="i-play" viewBox="0 0 24 24"><path d="m9 6 9 6-9 6V6Z"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
    <symbol id="i-star" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></symbol>
    <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></symbol>
    <symbol id="i-whatsapp" viewBox="0 0 24 24"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.7Z"/><path d="M9 8.5c.3-.7.6-.7.9-.7h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.5.6c.6 1.2 1.5 2 2.7 2.6l.6-.5c.2-.2.4-.2.7-.1l1.8.8c.3.1.4.3.4.5v.5c0 .3 0 .6-.7.9-.4.2-1.4.4-2.7-.2-1-.4-2.4-1.2-3.7-2.6-1.1-1.2-2-2.7-2.3-3.7-.4-1.3-.2-2.2.1-2.6Z"/></symbol>
  </svg>`;

  const galleryMarkup = () => {
    if (!c.gallery.length) return `<div class="gallery-empty" aria-label="Espaço reservado para fotos reais"><span>Fotos reais</span><strong>Este espaço aguarda as imagens fornecidas pelo proprietário.</strong><p>Adicione os arquivos e descrições na galeria da configuração.</p></div>`;
    const categories = ["Todos", ...new Set(c.gallery.map(photo => photo.category))];
    return `<div class="gallery-controls" role="tablist">${categories.map((item, i) => `<button class="filter ${i === 0 ? "is-active" : ""}" data-filter="${escape(item)}">${escape(item)}</button>`).join("")}</div><div class="gallery-grid">${c.gallery.map((photo, i) => `<button class="gallery-item gallery-item--${i % 5}" data-category="${escape(photo.category)}" data-index="${i}" aria-label="Ampliar: ${escape(photo.alt)}"><img src="${escape(photo.src)}" alt="${escape(photo.alt)}" loading="lazy" decoding="async"><span>${escape(photo.category)} ${icon("arrow")}</span></button>`).join("")}</div>`;
  };

  const reviewMarkup = () => {
    if (!c.reviews.items.length) return `<div class="reviews-pending"><div class="google-mark">G</div><h3>Avaliações reais em breve</h3><p>Esta área está preparada para receber avaliações autênticas do perfil da chácara no Google.</p></div>`;
    return `<div class="reviews-summary"><strong>${escape(c.reviews.average)}</strong><span>${Array(5).fill(icon("star")).join("")}</span><p>${escape(c.reviews.count)} avaliações no Google</p></div><div class="review-grid">${c.reviews.items.map(review => `<article class="review-card"><header>${review.avatar ? `<img src="${escape(review.avatar)}" alt="">` : `<span class="avatar">${escape(review.name[0])}</span>`}<div><strong>${escape(review.name)}</strong><span class="stars">${Array(review.rating).fill(icon("star")).join("")}</span></div></header><p>“${escape(review.text)}”</p></article>`).join("")}</div>`;
  };

  const app = $("#app");
  app.innerHTML = `${icons}
    <header class="site-header" id="inicio">
      <nav class="nav shell" aria-label="Navegação principal">
        <a class="brand" href="#inicio"><span class="brand-mark">✦</span><span>${escape(c.name)}</span></a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Abrir menu">${icon("menu")}</button>
        <div class="nav-links" id="nav-links"><a href="#inicio">Início</a><a href="#espaco">O Espaço</a><a href="#estrutura">Estrutura</a><a href="#fotos">Fotos</a><a href="#avaliacoes">Avaliações</a><a href="#localizacao">Localização</a></div>
        <div class="nav-contact">${button("Fale conosco", "saber mais sobre o espaço", "nav")}</div>
      </nav>
    </header>
    <main id="conteudo">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-media">${c.media.heroVideoWebm || c.media.heroVideoMp4 ? `<video autoplay muted loop playsinline preload="metadata" poster="${escape(c.media.heroPoster)}">${c.media.heroVideoWebm ? `<source src="${escape(c.media.heroVideoWebm)}" type="video/webm">` : ""}${c.media.heroVideoMp4 ? `<source src="${escape(c.media.heroVideoMp4)}" type="video/mp4">` : ""}</video>` : ""}<div class="hero-fallback" ${c.media.heroPoster ? `style="background-image:url('${escape(c.media.heroPoster)}')"` : ""}><span>Vídeo e fotografia do local</span></div></div>
        <div class="hero-scrim"></div><div class="hero-content shell"><p class="eyebrow eyebrow--light">${escape(c.type)} em ${escape(c.city)}</p><h1 id="hero-title">${escape(c.name)}</h1><p class="hero-tagline">${escape(c.tagline)}</p><p class="hero-description">${escape(c.heroText)}</p><div class="hero-actions">${button("Consultar disponibilidade", "consultar a disponibilidade e os valores")}<a class="button button--ghost" href="#espaco">Conheça o espaço ${icon("arrow")}</a></div></div>
        <a class="scroll-cue" href="#espaco"><span></span>Descubra</a>
      </section>

      <section class="section about shell" id="espaco" aria-labelledby="about-title"><div class="about-copy reveal"><p class="eyebrow">A sua pausa merece este cenário</p><h2 id="about-title">Conheça o nosso espaço</h2><p>${escape(c.description)}</p><div class="location-pill">${icon("pin")}<span>${escape(c.contacts.publicLocation)}</span></div></div><div class="about-image media-placeholder reveal" ${c.media.heroPoster ? `style="background-image:url('${escape(c.media.heroPoster)}')"` : ""}><span>Foto de destaque do local</span><div class="media-badge"><i></i> Imagens reais valorizam cada detalhe</div></div></section>

      <section class="section structure" id="estrutura" aria-labelledby="structure-title"><div class="shell"><div class="section-heading reveal"><div><p class="eyebrow">O que espera por você</p><h2 id="structure-title">Estrutura pensada para aproveitar</h2></div><p>Itens personalizáveis de acordo com a estrutura real do espaço.</p></div><div class="feature-grid">${c.features.map((item, i) => `<article class="feature-card reveal" style="--delay:${i * 60}ms"><div class="feature-icon">${icon(item.icon)}</div><p>${escape(item.label)}</p><h3>${escape(item.value)}</h3></article>`).join("")}</div></div></section>

      <section class="section highlights shell" aria-labelledby="highlight-title"><div class="highlight-visual reveal"><div class="sun"></div><span>Um refúgio<br>para celebrar</span></div><div class="highlight-copy reveal"><p class="eyebrow">Por que escolher este lugar</p><h2 id="highlight-title">O cenário certo para boas memórias.</h2><div class="highlight-list">${c.highlights.map((item, i) => `<div><span>0${i + 1}</span><p>${escape(item)}</p></div>`).join("")}</div>${button("Tirar uma dúvida", "tirar uma dúvida sobre a chácara", "text")}</div></section>

      <section class="section gallery-section" id="fotos" aria-labelledby="gallery-title"><div class="shell"><div class="section-heading section-heading--center reveal"><p class="eyebrow">Uma prévia do que vai viver</p><h2 id="gallery-title">Conheça cada detalhe</h2><p>Registre a personalidade do espaço através de imagens verdadeiras.</p></div>${galleryMarkup()}</div></section>

      ${c.media.experienceVideo ? `<section class="section experience shell" aria-labelledby="experience-title"><div class="section-heading reveal"><p class="eyebrow">Sinta a atmosfera</p><h2 id="experience-title">Veja a experiência de estar aqui</h2></div><a class="experience-video" href="${escape(c.media.experienceVideo)}" target="_blank" rel="noopener" ${c.media.experienceCover ? `style="background-image:url('${escape(c.media.experienceCover)}')"` : ""}><span class="play">${icon("play")}</span><span>Assistir ao vídeo</span></a></section>` : ""}

      <section class="section reviews" id="avaliacoes" aria-labelledby="reviews-title"><div class="shell"><div class="section-heading section-heading--center reveal"><p class="eyebrow">Experiências compartilhadas</p><h2 id="reviews-title">O que nossos clientes dizem</h2></div>${reviewMarkup()}${hasValue(c.reviews.googleUrl) ? `<div class="align-center"> <a class="text-link" href="${escape(c.reviews.googleUrl)}" target="_blank" rel="noopener">Ver todas as avaliações no Google ${icon("arrow")}</a></div>` : ""}</div></section>

      <section class="section location shell" id="localizacao" aria-labelledby="location-title"><div class="location-copy reveal"><p class="eyebrow">Planeje a sua visita</p><h2 id="location-title">Onde estamos</h2><p>${escape(c.contacts.showExactAddress ? c.contacts.exactAddress : c.contacts.publicLocation)}</p><p class="location-note">${c.contacts.showExactAddress ? "" : "Para preservar a privacidade do espaço, o endereço detalhado pode ser informado no atendimento."}</p>${hasValue(c.contacts.maps) ? `<a class="button button--dark" href="${escape(c.contacts.maps)}" target="_blank" rel="noopener">Como chegar ${icon("arrow")}</a>` : ""}</div><div class="map-area reveal">${c.contacts.mapEmbed ? `<iframe title="Mapa de localização" src="${escape(c.contacts.mapEmbed)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` : `<div class="map-placeholder"><div>${icon("pin")}</div><strong>Mapa do Google Maps</strong><span>Adicione a URL de incorporação na configuração.</span></div>`}</div></section>

      <section class="final-cta"><div class="shell cta-inner"><div><p class="eyebrow eyebrow--sand">Seu próximo momento começa aqui</p><h2>Pronto para viver momentos especiais?</h2><p>Consulte a disponibilidade da chácara e faça seu orçamento.</p></div>${button("Consultar disponibilidade pelo WhatsApp", "consultar a disponibilidade e os valores")}</div></section>
    </main>
    <footer class="footer"><div class="shell footer-grid"><div><a class="brand brand--footer" href="#inicio"><span class="brand-mark">✦</span><span>${escape(c.name)}</span></a><p>Um espaço preparado para transformar momentos especiais em boas lembranças.</p></div><div><h3>Atalhos</h3><a href="#espaco">O espaço</a><a href="#estrutura">Estrutura</a><a href="#fotos">Fotos</a><a href="#localizacao">Localização</a></div><div id="contato"><h3>Contato</h3><a href="${whatsappUrl("saber mais sobre a chácara")}" ${hasValue(c.contacts.whatsapp) ? 'target="_blank" rel="noopener"' : ""}>${icon("whatsapp")} ${escape(c.contacts.whatsapp)}</a>${hasValue(c.contacts.instagram) ? `<a href="${escape(c.contacts.instagram)}" target="_blank" rel="noopener">${icon("instagram")} Instagram</a>` : ""}<span>${icon("pin")} ${escape(c.contacts.publicLocation)}</span></div></div><div class="shell footer-bottom">© <span id="year"></span> ${escape(c.name)}. Todos os direitos reservados.</div></footer>
    <a class="floating-whatsapp" href="${whatsappUrl("saber mais sobre a chácara")}" ${hasValue(c.contacts.whatsapp) ? 'target="_blank" rel="noopener"' : ""} aria-label="Conversar pelo WhatsApp">${icon("whatsapp")}<span>Fale no WhatsApp</span></a>
    <dialog class="lightbox" aria-label="Galeria de fotos"><button class="lightbox-close" aria-label="Fechar galeria">${icon("close")}</button><button class="lightbox-prev" aria-label="Foto anterior">‹</button><img src="" alt=""><button class="lightbox-next" aria-label="Próxima foto">›</button><p></p></dialog>`;

  document.title = `${c.name} | ${c.type} em ${c.city}`;
  $("meta[name=description]").setAttribute("content", c.shortDescription);
  $("meta[property='og:title']").setAttribute("content", c.name);
  $("meta[property='og:description']").setAttribute("content", c.shortDescription);
  if (c.media.heroPoster) $("meta[property='og:image']").setAttribute("content", c.media.heroPoster);
  $("#year").textContent = new Date().getFullYear();
  $("#structured-data").textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "LodgingBusiness", name: c.name, description: c.shortDescription, address: { "@type": "PostalAddress", addressLocality: c.city, addressRegion: c.region, addressCountry: "BR" }, sameAs: hasValue(c.contacts.instagram) ? [c.contacts.instagram] : [], url: location.href });

  const header = $(".site-header"), menu = $(".menu-toggle"), nav = $(".nav-links");
  const toggleMenu = open => { nav.classList.toggle("is-open", open); menu.setAttribute("aria-expanded", open); menu.innerHTML = icon(open ? "close" : "menu"); document.body.classList.toggle("menu-open", open); };
  menu.addEventListener("click", () => toggleMenu(!nav.classList.contains("is-open")));
  $$(".nav-links a").forEach(link => link.addEventListener("click", () => toggleMenu(false)));
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 24), { passive: true });
  function $$(selector, parent = document) { return [...parent.querySelectorAll(selector)]; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
  $$(".reveal").forEach(element => observer.observe(element));

  $$(".filter").forEach(filter => filter.addEventListener("click", () => { $$(".filter").forEach(item => item.classList.toggle("is-active", item === filter)); const selected = filter.dataset.filter; $$(".gallery-item").forEach(item => item.hidden = selected !== "Todos" && item.dataset.category !== selected); }));
  const modal = $(".lightbox"); let currentIndex = 0;
  const displayPhoto = index => { currentIndex = (index + c.gallery.length) % c.gallery.length; const photo = c.gallery[currentIndex]; $("img", modal).src = photo.src; $("img", modal).alt = photo.alt; $("p", modal).textContent = `${photo.category} · ${currentIndex + 1} / ${c.gallery.length}`; };
  $$(".gallery-item").forEach(item => item.addEventListener("click", () => { displayPhoto(Number(item.dataset.index)); modal.showModal(); }));
  $(".lightbox-close").addEventListener("click", () => modal.close()); $(".lightbox-prev").addEventListener("click", () => displayPhoto(currentIndex - 1)); $(".lightbox-next").addEventListener("click", () => displayPhoto(currentIndex + 1));
  modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });
  document.addEventListener("keydown", event => { if (!modal.open) return; if (event.key === "ArrowLeft") displayPhoto(currentIndex - 1); if (event.key === "ArrowRight") displayPhoto(currentIndex + 1); });
})();
