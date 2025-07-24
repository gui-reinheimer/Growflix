const btnAssistir = document.getElementById("btn-assitir");
const iframeVideo = document.getElementById("iframeVideo");
const modalElement = document.getElementById("modalVideo");
let inEpisodio = document.getElementById("inEpisodios")

const videos = [
    {
    img: "https://img.youtube.com/vi/aJ-HZuLcKeA/mqdefault.jpg",
    titulo: "Growcast #00 | Conheça a Growdev",
    link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
    categoria: "Growcast [episodios]",
  },
  {
    banner:"https://img.youtube.com/vi/7OWT3lfHYvE/maxresdefault.jpg", 
    img: "https://img.youtube.com/vi/7OWT3lfHYvE/mqdefault.jpg",
    titulo: "Growcast #01 | As profissões do futuro",
    link: "https://www.youtube.com/embed/7OWT3lfHYvE",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/ci1eQGPK89o/mqdefault.jpg",
    titulo: "Growcast #02 | Como seguir a carreira internacional?",
    link: "https://www.youtube.com/embed/ci1eQGPK89o",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/WM7pGG7OicQ/mqdefault.jpg",
    titulo: "Growcast #03 | Superando os desafios da carreira de Dev!",
    link: "https://www.youtube.com/embed/WM7pGG7OicQ",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/2c8VOBZ160Y/mqdefault.jpg",
    titulo: "Growcast #04 | Agile Master: tudo sobre a profissão!",
    link: "https://www.youtube.com/embed/2c8VOBZ160Y",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/mxnEm03cYPc/mqdefault.jpg",
    titulo: "Growcast #05 | Como iniciar na carreira em Desenvolvimento de Softwares?",
    link: "https://www.youtube.com/embed/mxnEm03cYPc",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/m7DyR07KrOE/mqdefault.jpg",
    titulo: "Growcast #06 | Mulheres e inclusão na tecnologia",
    link: "https://www.youtube.com/embed/m7DyR07KrOE",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/vW8G9KPwRL0/mqdefault.jpg",
    titulo: "Growcast #07 | Desenvolvendo profissionais na área de TI",
    link: "https://www.youtube.com/embed/vW8G9KPwRL0",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/_Ut2KqAqPyk/mqdefault.jpg",
    titulo: "Growcast #8 | A solução que está transformando o mercado de TI no Brasil",
    link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/dfDgs0Ive2Q/mqdefault.jpg",
    titulo: "Growcast #9 | Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI.",
    link: "https://www.youtube.com/embed/dfDgs0Ive2Q",
    categoria: "Growcast [episodios]",
  },
  {
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/mqdefault.jpg",
    titulo: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "https://www.youtube.com/embed/WKbLXuP9S-c",
    categoria: "Webinar em Flutter",
  },
  {
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/mqdefault.jpg",
    titulo: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
    categoria: "Webinar em Flutter",
  },
  {
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/mqdefault.jpg",
    titulo: "Webinar - Recriando a interface do iFood com Flutter",
    link: "https://www.youtube.com/embed/8rdJsqUjsGg",
    categoria: "Webinar em Flutter",
  },
  {
    img: "https://img.youtube.com/vi/C4p_7qBsECw/mqdefault.jpg",
    titulo: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "https://www.youtube.com/embed/C4p_7qBsECw",
    categoria: "Webinar em Flutter",
  },
  {
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/mqdefault.jpg",
    titulo: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "https://www.youtube.com/embed/L1pKoMC6hWk",
    categoria: "Webinar em Flutter",
  },
  {
    img: "https://img.youtube.com/vi/FiZMowbaiJA/mqdefault.jpg",
    titulo: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    link: "https://www.youtube.com/embed/FiZMowbaiJA",
    categoria: "Jornada UX/UI",
  },
  {
    img: "https://img.youtube.com/vi/cwqDu0ZzbYE/mqdefault.jpg",
    titulo: "Live #4 Jornada UX/UI: Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
    link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
    categoria: "Jornada UX/UI",
  },
  {
    img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/mqdefault.jpg",
    titulo: "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
    link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
    categoria: "Jornada UX/UI",
  },
  {
    img: "https://img.youtube.com/vi/8sd3wuKTZMA/mqdefault.jpg",
    titulo: "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
    link: "https://www.youtube.com/embed/8sd3wuKTZMA",
    categoria: "Jornada UX/UI",
  },
  {
    img: "https://img.youtube.com/vi/-26aqPtgoEY/mqdefault.jpg",
    titulo: "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    link: "https://www.youtube.com/embed/-26aqPtgoEY",
    categoria: "Jornada UX/UI",
  },
  {
    img: "https://img.youtube.com/vi/QsuhYgsSYQo/mqdefault.jpg",
    titulo: "Célula de talentos - Uma solução Growdev",
    link: "https://www.youtube.com/embed/QsuhYgsSYQo",
    categoria: "Diversos",
  },
  {
    img: "https://img.youtube.com/vi/ouDn8z3PSqs/mqdefault.jpg",
    titulo: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    link: "https://www.youtube.com/embed/ouDn8z3PSqs",
    categoria: "Diversos",
  },
  {
    img: "https://img.youtube.com/vi/cQDQNX6NXYo/mqdefault.jpg",
    titulo: "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    link: "https://www.youtube.com/embed/cQDQNX6NXYo",
    categoria: "Diversos",
  },
  {
    img: "https://img.youtube.com/vi/nKGbolkirBM/mqdefault.jpg",
    titulo: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
    link: "https://www.youtube.com/embed/nKGbolkirBM",
    categoria: "Diversos",
  },
  {
    img: "https://img.youtube.com/vi/6sZPsqNjeek/mqdefault.jpg",
    titulo: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
    link: "https://www.youtube.com/embed/6sZPsqNjeek",
    categoria: "Diversos",
  },

];

//adiciona imagem de fundo
window.addEventListener("load", (e) => {
  const imgFundo = document.getElementById("img-fundo");
  if (imgFundo && videos.length > 0) {
    imgFundo.style.backgroundImage = `url(${videos[1].banner})`;
    imgFundo.style.backgroundSize = "cover";
    imgFundo.style.backgroundPosition = "center";
    imgFundo.style.backgroundRepeat = "no-repeat";
    imgFundo.style.height= "100vh"
  }
});

btnAssistir.addEventListener("click", () => {
  iframeVideo.src = videos[1].link;
});

//ADICIONA CARDS Growcast
videos.forEach(video => {
  const categoria = video.categoria.includes("Growcast [episodios]")
  if(categoria) {
    const col = document.createElement("div")
    col.classList.add("col-12","col-md-6","col-lg-4", "mb-3", "text-center")
    col.innerHTML = `
      <div class="video-card">
        <img src="${video.img}" class="img-fluid border-0" alt="card-video">
          <button class="btn-play text-white text-start border-0 bg-transparent" data-video="${video.link}">
            <p><i class="bi bi-play-circle fs-3 me-2"></i> ${video.titulo}</p>
          </button>
      </div>`;
    inEpisodio.appendChild(col)
  }
})

//ADICIONA webinar
videos.forEach(video => {
  const categoria = video.categoria.includes("Webinar em Flutter")
  if(categoria) {
    const col = document.createElement("div")
    col.classList.add("col-12","col-md-6","col-lg-4", "mb-3", "text-center")
    col.innerHTML = `
      <div class="video-card">
        <img src="${video.img}" class="img-fluid border-0" alt="card-video">
          <button class="btn-play text-white text-start border-0 bg-transparent" data-video="${video.link}">
            <p><i class="bi bi-play-circle fs-3 me-2"></i> ${video.titulo}</p>
          </button>
      </div>`;
    inWebinar.appendChild(col)
  }
})

//ADICIONA UX/UI
videos.forEach(video => {
  const categoria = video.categoria.includes("Jornada UX/UI")
  if(categoria) {
    const col = document.createElement("div")
    col.classList.add("col-12","col-md-6","col-lg-4", "mb-3", "text-center")
    col.innerHTML = `
      <div class="video-card">
        <img src="${video.img}" class="img-fluid border-0" alt="card-video">
          <button class="btn-play text-white text-start border-0 bg-transparent" data-video="${video.link}">
            <p><i class="bi bi-play-circle fs-3 me-2"></i> ${video.titulo}</p>
          </button>
      </div>`;
    inUxUi.appendChild(col)
  }
})

//ADICIONA diversos
videos.forEach(video => {
  const categoria = video.categoria.includes("Diversos")
  if(categoria) {
    const col = document.createElement("div")
    col.classList.add("col-12","col-md-6","col-lg-4", "mb-3", "text-center",)
    col.innerHTML = `
      <div class="video-card-diversos">
        <img src="${video.img}" class="img-fluid border-0" alt="card-video">
          <button class="btn-play text-white text-start border-0 bg-transparent" data-video="${video.link}">
            <p><i class="bi bi-play-circle fs-3 me-2"></i> ${video.titulo}</p>
          </button>
      </div>`;
    inDiversos.appendChild(col)
  }
})


document.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn-play");
  if (btn) {
    const videoURL = btn.getAttribute("data-video");
    const iframe = iframeVideo
    
    iframe.src = videoURL;
    const modal = new bootstrap.Modal(document.getElementById("modalVideo"));
    modal.show();
    
  }
});