/**
 * ANECTTA - Central de Operações de TI Remota
 * Script Principal da Aplicação • Light Theme (Fundo Branco & Clean Tech)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa componentes
  ANECTTA_APP.init();
});

const ANECTTA_APP = {
  init() {
    this.setupConfig();
    this.renderProblemCards();
    this.renderServicesGrid("all");
    this.renderPlans();
    this.renderSlaTable();
    this.renderFaqs();
    this.bindDiagnosticForm();
    this.bindMobileNav();
    this.initNocSimulation();
    this.initTapotikEffects();
    this.initRocketVideo();
    this.initSeloTooltip();

    this.initHeroLiveGauge();

    // Inicializa suporte wizard
    if (window.ANECTTA_SUPPORT_FLOW) {
      window.ANECTTA_SUPPORT_FLOW.init();
    }

    // Inicializa calculadora se estiver na página
    if (window.ANECTTA_CALCULATOR) {
      window.ANECTTA_CALCULATOR.init();
    }
  },

  // Efeitos (Spotlight, Scroll Reveal & Cursor Glow)
  initTapotikEffects() {
    // 1. Interactive Spotlight Cards
    document.addEventListener("mousemove", (e) => {
      const cards = document.querySelectorAll(".spotlight-card, .glass-panel, .problem-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });

    // 2. Ambient Cursor Glow suave de fundo
    if (!document.querySelector(".ambient-glow-cursor") && window.innerWidth > 768) {
      const glow = document.createElement("div");
      glow.className = "ambient-glow-cursor";
      document.body.appendChild(glow);
      window.addEventListener("mousemove", (e) => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      });
    }

    // 3. Scroll Reveal com IntersectionObserver suave
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.12 }
      );

      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("revealed");
      });
    }
  },

  setupConfig() {
    const config = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getConfig() : window.ANECTTA_DATA.config;

    // Atualiza links de WhatsApp globais
    const waElements = document.querySelectorAll(".dynamic-whatsapp-link");
    waElements.forEach((el) => {
      const defaultMsg = encodeURIComponent("Olá! Gostaria de saber mais sobre o suporte de TI 100% remoto da ANECTTA.");
      el.href = `https://wa.me/${config.whatsapp}?text=${defaultMsg}`;
    });

    // Atualiza números exibidos
    document.querySelectorAll(".dynamic-phone-text").forEach((el) => {
      el.textContent = config.phone;
    });

    document.querySelectorAll(".dynamic-whatsapp-text").forEach((el) => {
      el.textContent = config.whatsappDisplay;
    });
  },

  // 16 Cards de Problemas Reais
  renderProblemCards() {
    const container = document.getElementById("problem-cards-grid");
    if (!container) return;

    const problems = window.ANECTTA_DATA.problemCards;
    container.innerHTML = problems.map((p) => `
      <div class="problem-card spotlight-card glass-panel p-4 flex items-center gap-3 border border-slate-200" onclick="ANECTTA_APP.selectProblemFromCard('${p.title}')">
        <div class="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
        <span class="text-xs sm:text-sm font-medium text-slate-800">${p.title}</span>
      </div>
    `).join("");
  },

  selectProblemFromCard(problemTitle) {
    const diagInput = document.getElementById("diag-problem");
    if (diagInput) {
      diagInput.value = problemTitle;
      document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
      diagInput.focus();
    } else if (window.ANECTTA_SUPPORT_FLOW) {
      window.ANECTTA_SUPPORT_FLOW.openModal();
    }
  },

  // 18 Serviços Adaptados para Execução 100% Remota
  renderServicesGrid(categoryFilter = "all") {
    const container = document.getElementById("services-grid-container");
    if (!container) return;

    let services = window.ANECTTA_DATA.services;
    if (categoryFilter !== "all") {
      const cleanFilter = categoryFilter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      services = services.filter((s) => {
        const cleanCat = s.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return cleanCat === cleanFilter;
      });
    }

    container.innerHTML = services.map((s) => `
      <div class="glass-panel spotlight-card p-6 flex flex-col justify-between hover:border-sky-500/60 transition group bg-white">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-sky-50 text-sky-700 border border-sky-200">
              ${s.category} • 100% REMOTO
            </span>
            <div class="w-8 h-8 rounded-lg bg-slate-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition">${s.title}</h3>
          <p class="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">${s.shortDesc}</p>
          
          <div class="space-y-1.5 mb-6">
            ${s.deliverables.slice(0, 3).map((d) => `
              <div class="flex items-center gap-2 text-xs text-slate-700">
                <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${d}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          <a href="${s.slug}" class="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1">
            Ver detalhes do serviço →
          </a>
          <button type="button" onclick="ANECTTA_APP.openServiceQuickHelp('${s.title}')" class="text-xs px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium">
            Solicitar
          </button>
        </div>
      </div>
    `).join("");
  },

  filterServices(category) {
    // Atualiza botões ativos
    document.querySelectorAll(".service-filter-btn").forEach((btn) => {
      btn.classList.remove("bg-sky-600", "text-white");
      btn.classList.add("bg-slate-100", "text-slate-700");
    });
    const activeBtn = document.getElementById(`filter-btn-${category}`);
    if (activeBtn) {
      activeBtn.classList.remove("bg-slate-100", "text-slate-700");
      activeBtn.classList.add("bg-sky-600", "text-white");
    }
    this.renderServicesGrid(category);
  },

  openServiceQuickHelp(serviceName) {
    if (window.ANECTTA_SUPPORT_FLOW) {
      window.ANECTTA_SUPPORT_FLOW.openModal();
    }
  },

  // Planos Comerciais
  renderPlans() {
    const container = document.getElementById("plans-cards-grid");
    if (!container) return;

    const plans = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getPlans() : window.ANECTTA_DATA.plans;

    container.innerHTML = plans.map((p) => {
      const isPopular = p.highlight;
      return `
        <div class="relative rounded-2xl flex flex-col justify-between transition spotlight-card overflow-visible ${
          isPopular 
            ? "glass-panel-glow neon-glow-border bg-white border-2 border-sky-500 p-7 shadow-xl z-10" 
            : "glass-panel bg-white p-6 border border-slate-200 hover:border-slate-300"
        }">
          ${p.badge ? `
            <div class="shimmer-badge absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase font-mono z-20 shadow-md ${
              isPopular ? "bg-sky-500 text-white shadow-sky-500/30" : "bg-slate-100 text-sky-700 border border-slate-200"
            }">
              ${p.badge}
            </div>
          ` : ""}

          <div>
            <div class="mb-4">
              <h3 class="text-xl font-bold text-slate-900">${p.name}</h3>
              <p class="text-xs text-slate-500 mt-1 min-h-[36px]">${p.tagline}</p>
            </div>

            <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div class="flex items-baseline gap-1">
                <span class="text-2xl sm:text-3xl font-black text-slate-900 font-mono-tech">${p.priceStarting}</span>
                <span class="text-xs text-slate-500">${p.period}</span>
              </div>
              <div class="text-[11px] text-sky-600 font-mono mt-1 font-semibold">● ${p.billingType}</div>
            </div>

            <div class="space-y-2.5 mb-8">
              <p class="text-xs font-mono uppercase text-slate-500 tracking-wider font-semibold">O que está incluído:</p>
              ${p.features.map((f) => `
                <div class="flex items-start gap-2 text-xs text-slate-700">
                  <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                  <span>${f}</span>
                </div>
              `).join("")}

              ${p.notIncluded && p.notIncluded.length > 0 ? `
                <div class="pt-3 space-y-1.5 opacity-60">
                  ${p.notIncluded.map((nf) => `
                    <div class="flex items-start gap-2 text-xs text-slate-400">
                      <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                      <span class="line-through">${nf}</span>
                    </div>
                  `).join("")}
                </div>
              ` : ""}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100">
            <a href="${p.ctaLink}" class="w-full py-3 px-4 rounded-xl text-center font-bold text-xs sm:text-sm block transition ${
              isPopular 
                ? "btn-emergency text-white" 
                : "btn-secondary-tech text-slate-700 hover:border-sky-500"
            }">
              ${p.ctaText}
            </a>
          </div>
        </div>
      `;
    }).join("");
  },

  // Tabela SLA
  renderSlaTable() {
    const container = document.getElementById("sla-table-body");
    if (!container) return;

    const sla = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getSla() : window.ANECTTA_DATA.slaTable;

    container.innerHTML = sla.map((item) => `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
        <td class="py-4 px-4 font-mono font-bold text-xs">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${item.class}">
            <span class="w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>
            ${item.level}
          </span>
        </td>
        <td class="py-4 px-4 text-xs sm:text-sm text-slate-700">${item.description}</td>
        <td class="py-4 px-4 text-xs font-mono text-emerald-600 font-semibold">${item.tempoResposta}</td>
        <td class="py-4 px-4 text-xs text-slate-500">${item.tempoAtendimento}</td>
      </tr>
    `).join("");
  },

  // 20 FAQs com busca e sanfona
  renderFaqs() {
    const container = document.getElementById("faq-accordion-container");
    if (!container) return;

    const faqs = window.ANECTTA_DATA.faqs;

    container.innerHTML = faqs.map((faq, idx) => `
      <div class="faq-item glass-panel border border-slate-200 mb-3 overflow-hidden bg-white" id="faq-item-${idx}">
        <div class="faq-header p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none" onclick="ANECTTA_APP.toggleFaq(${idx})">
          <h4 class="text-sm sm:text-base font-semibold text-slate-900 flex items-center gap-3">
            <span class="font-mono text-xs text-sky-600 font-bold">Q${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
            ${faq.q}
          </h4>
          <svg class="faq-chevron w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </div>
        <div class="faq-content px-4 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div class="pb-4 pt-1 border-t border-slate-100">
            ${faq.a}
          </div>
        </div>
      </div>
    `).join("");
  },

  toggleFaq(index) {
    const item = document.getElementById(`faq-item-${index}`);
    if (!item) return;

    const isActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  },

  // Formulário Diagnóstico Inicial de TI
  bindDiagnosticForm() {
    const form = document.getElementById("form-diagnostico-ti");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const leadData = {
        name: document.getElementById("diag-name")?.value || "",
        company: document.getElementById("diag-company")?.value || "",
        whatsapp: document.getElementById("diag-whatsapp")?.value || "",
        email: document.getElementById("diag-email")?.value || "",
        users: document.getElementById("diag-users")?.value || "Não informado",
        computers: document.getElementById("diag-computers")?.value || "Não informado",
        server: document.getElementById("diag-server")?.value || "Não",
        m365: document.getElementById("diag-m365")?.checked ? "Sim" : "Não",
        gws: document.getElementById("diag-gws")?.checked ? "Sim" : "Não",
        backup: document.getElementById("diag-backup")?.checked ? "Sim" : "Não",
        antivirus: document.getElementById("diag-antivirus")?.checked ? "Sim" : "Não",
        firewall: document.getElementById("diag-firewall")?.checked ? "Sim" : "Não",
        vpn: document.getElementById("diag-vpn")?.checked ? "Sim" : "Não",
        mainProblem: document.getElementById("diag-problem")?.value || "Não informado"
      };

      if (window.ANECTTA_STORAGE) {
        window.ANECTTA_STORAGE.saveLead(leadData);
      }

      form.reset();

      const feedback = document.getElementById("diag-success-container");
      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.scrollIntoView({ behavior: "smooth" });
      }
    });
  },

  // Mobile Navigation Menu Toggle
  bindMobileNav() {
    const openBtn = document.getElementById("mobile-menu-btn");
    const closeBtn = document.getElementById("mobile-menu-close");
    const navDrawer = document.getElementById("mobile-nav-drawer");

    if (openBtn && navDrawer) {
      openBtn.addEventListener("click", () => {
        navDrawer.classList.remove("translate-x-full");
      });
    }

    if (closeBtn && navDrawer) {
      closeBtn.addEventListener("click", () => {
        navDrawer.classList.add("translate-x-full");
      });
    }

    // Fecha ao clicar em links
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (navDrawer) navDrawer.classList.add("translate-x-full");
      });
    });
  },

  // Simulação Interativa Hero
  initNocSimulation() {
    const statusText = document.getElementById("noc-status-text");
    const pingElem = document.getElementById("noc-ping-text");
    if (!statusText || !pingElem) return;

    const messages = [
      "Túnel Criptografado TLS 256-bit: ATIVO",
      "Telemetria de Endpoints: 100% OPERACIONAL",
      "Central de Operações: MONITORAMENTO CONTÍNUO",
      "SLA Garantido em Todo o Brasil",
      "Zero Deslocamento • Resposta Imediata"
    ];

    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % messages.length;
      statusText.textContent = messages[idx];
      const randomPing = Math.floor(12 + Math.random() * 8);
      pingElem.textContent = `${randomPing} ms (Latência Baixa)`;
    }, 4000);
  },

  // Garante reprodução contínua e autoplay do vídeo do foguete
  initRocketVideo() {
    const video = document.getElementById("hero-foguete-video");
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener("loadeddata", playVideo);
    playVideo();

    document.addEventListener("click", playVideo, { once: true });
    document.addEventListener("touchstart", playVideo, { once: true });
  },

  // Simulação Contínua de Conexão Real no Velocímetro da Hero Principal
  initHeroLiveGauge() {
    const needle = document.getElementById("hero-gauge-needle");
    const arc = document.getElementById("hero-gauge-arc-progress");
    const valElem = document.getElementById("hero-gauge-speed-val");
    if (!needle && !arc && !valElem) return;

    // Converte velocidade Mbps para progresso na escala calibrada (0 a 1250 Mbps / 1.25 Gbps)
    const speedToProgress = (mbps) => {
      if (!mbps || mbps <= 0) return 0;
      if (mbps <= 1) return (mbps / 1) * 0.10;
      if (mbps <= 5) return 0.10 + ((mbps - 1) / 4) * 0.10;
      if (mbps <= 10) return 0.20 + ((mbps - 5) / 5) * 0.10;
      if (mbps <= 25) return 0.30 + ((mbps - 10) / 15) * 0.10;
      if (mbps <= 50) return 0.40 + ((mbps - 25) / 25) * 0.10;
      if (mbps <= 100) return 0.50 + ((mbps - 50) / 50) * 0.10;
      if (mbps <= 250) return 0.60 + ((mbps - 100) / 150) * 0.10;
      if (mbps <= 500) return 0.70 + ((mbps - 250) / 250) * 0.10;
      if (mbps <= 1000) return 0.80 + ((mbps - 500) / 500) * 0.10;
      if (mbps <= 1250) return 0.90 + ((mbps - 1000) / 250) * 0.10;
      return 1.0;
    };

    let currentSpeed = 720.0;
    let targetSpeed = 850.0;
    const arcLength = 626.2;
    const minDeg = -130;
    const maxDeg = 130;
    const sweep = maxDeg - minDeg;

    // Altera alvo de velocidade a cada 1.2s - 2.5s simulando variação real de tráfego de ultra banda larga
    const pickNewTarget = () => {
      // Oscila entre 550 Mbps e 1240 Mbps com picos periódicos
      const r = Math.random();
      if (r < 0.2) {
        targetSpeed = 550 + Math.random() * 150; // ~550-700
      } else if (r < 0.7) {
        targetSpeed = 780 + Math.random() * 260; // ~780-1040
      } else {
        targetSpeed = 1050 + Math.random() * 190; // ~1050-1240 pico ultra veloz
      }
      setTimeout(pickNewTarget, 1200 + Math.random() * 1600);
    };
    pickNewTarget();

    // Cache dos elementos das barras de LED da Hero
    const heroLeftBars = document.querySelectorAll(".hero-gauge-wrapper .cockpit-wing-left .cockpit-led-bar");
    const heroRightBars = document.querySelectorAll(".hero-gauge-wrapper .cockpit-wing-right .cockpit-led-bar");

    // Loop com taxa de atualização de 60fps usando amortecimento de física realista
    let lastRenderVal = "";
    const updateLoop = () => {
      // Micro jitter de ruído de rede
      const jitter = (Math.random() - 0.5) * 1.8;
      const diff = (targetSpeed + jitter) - currentSpeed;
      currentSpeed += diff * 0.045;

      const progress = speedToProgress(currentSpeed);
      const angle = minDeg + (progress * sweep);
      const offset = arcLength * (1 - progress);

      if (needle) {
        needle.style.transform = `rotate(${angle.toFixed(2)}deg)`;
      }
      if (arc) {
        arc.style.strokeDashoffset = offset.toFixed(1);
      }
      if (valElem) {
        const textVal = currentSpeed.toFixed(2);
        if (textVal !== lastRenderVal) {
          valElem.textContent = textVal;
          lastRenderVal = textVal;
        }
      }

      // Atualiza iluminação progressiva das asas de LED da Hero
      const activeBarCount = Math.round(progress * 12);
      if (heroLeftBars.length > 0) {
        heroLeftBars.forEach((bar, idx) => {
          const fromBottom = 11 - idx;
          if (fromBottom < activeBarCount) {
            bar.setAttribute("fill", "#00f0ff");
            bar.setAttribute("opacity", "1");
            bar.style.filter = "drop-shadow(0 0 6px #00d2ff)";
          } else {
            bar.setAttribute("fill", "#00d2ff");
            bar.setAttribute("opacity", (0.35 + (idx % 3) * 0.15).toFixed(2));
            bar.style.filter = "none";
          }
        });
      }
      if (heroRightBars.length > 0) {
        heroRightBars.forEach((bar, idx) => {
          const fromBottom = 11 - idx;
          if (fromBottom < activeBarCount) {
            bar.setAttribute("fill", "#00f0ff");
            bar.setAttribute("opacity", "1");
            bar.style.filter = "drop-shadow(0 0 6px #00d2ff)";
          } else {
            bar.setAttribute("fill", "#00d2ff");
            bar.setAttribute("opacity", (0.35 + (idx % 3) * 0.15).toFixed(2));
            bar.style.filter = "none";
          }
        });
      }

      requestAnimationFrame(updateLoop);
    };

    requestAnimationFrame(updateLoop);
  },

  // Toggle da caixa de diálogo (tooltip) do Selo Guardiões do Asylo no hover ou clique
  initSeloTooltip() {
    const seloTrigger = document.getElementById("selo-trigger");
    if (!seloTrigger) return;

    seloTrigger.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      e.stopPropagation();
      seloTrigger.classList.toggle("tooltip-active");
    });

    document.addEventListener("click", (e) => {
      if (!seloTrigger.contains(e.target)) {
        seloTrigger.classList.remove("tooltip-active");
      }
    });
  }
};

if (typeof window !== "undefined") {
  window.ANECTTA_APP = ANECTTA_APP;
}
