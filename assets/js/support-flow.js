/**
 * ANECTTA - Fluxo Interativo de Suporte Imediato
 * Wizard "PRECISO DE SUPORTE AGORA" em 4 passos com autorização explícita
 * Light Theme (Fundo Branco & Clean Tech)
 */

const ANECTTA_SUPPORT_FLOW = {
  state: {
    currentStep: 1,
    os: "windows",
    contractType: "contrato",
    selectedTool: "anydesk",
    accessCode: "",
    clientName: "",
    companyName: ""
  },

  init() {
    this.bindModalTriggers();
    this.renderStep(1);
  },

  bindModalTriggers() {
    document.querySelectorAll(".btn-open-support").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.openModal();
      });
    });

    const closeBtn = document.getElementById("support-modal-close");
    const overlay = document.getElementById("support-modal-overlay");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
    }

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          this.closeModal();
        }
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });
  },

  openModal() {
    const modal = document.getElementById("support-modal-overlay");
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      this.goToStep(1);
    }
  },

  closeModal() {
    const modal = document.getElementById("support-modal-overlay");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  },

  goToStep(step) {
    this.state.currentStep = step;
    this.renderStep(step);
  },

  selectContract(type) {
    this.state.contractType = type;
    this.goToStep(2);
  },

  renderStep(step) {
    const stepContainer = document.getElementById("support-modal-body");
    const stepIndicator = document.getElementById("support-modal-step-indicator");
    if (!stepContainer) return;

    if (stepIndicator) {
      stepIndicator.innerHTML = `
        <div class="flex items-center justify-between gap-2 text-xs font-mono mb-4 text-slate-500 font-semibold">
          <span class="${step >= 1 ? 'text-sky-600 font-bold' : ''}">01. MODALIDADE</span>
          <span>→</span>
          <span class="${step >= 2 ? 'text-sky-600 font-bold' : ''}">02. FERRAMENTA</span>
          <span>→</span>
          <span class="${step >= 3 ? 'text-sky-600 font-bold' : ''}">03. CONEXÃO</span>
        </div>
      `;
    }

    const config = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getConfig() : window.ANECTTA_DATA.config;
    const tools = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getTools() : window.ANECTTA_DATA.remoteTools;

    if (step === 1) {
      stepContainer.innerHTML = `
        <div class="text-center mb-6">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-50 text-sky-700 border border-sky-200 mb-2 font-semibold">
            <svg class="w-3.5 h-3.5 text-sky-600" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.95-1.801"/></svg>
            PASSO 1 DE 3 • AMBIENTE MICROSOFT WINDOWS
          </div>
          <h3 class="text-xl font-bold text-slate-900">Você já é cliente ANECTTA?</h3>
          <p class="text-sm text-slate-600 mt-1">Atendimento técnico remoto especializado exclusivamente para computadores e servidores Windows.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <button type="button" onclick="ANECTTA_SUPPORT_FLOW.selectContract('contrato')" class="p-5 rounded-xl border border-sky-300 bg-sky-50/60 hover:bg-sky-50 hover:border-sky-500 text-left transition group shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-sky-500 text-white">PRIORITÁRIO</span>
              <span class="text-xs font-mono text-emerald-600 font-semibold">● SLA CONTRATUAL</span>
            </div>
            <h4 class="font-bold text-lg text-slate-900">Cliente com Contrato Mensal</h4>
            <p class="text-xs text-slate-600 mt-2">Sua empresa possui contrato ativo de suporte, SLA prioritário e atendimento ilimitado para suas estações Windows.</p>
          </button>

          <button type="button" onclick="ANECTTA_SUPPORT_FLOW.selectContract('avulso')" class="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-400 text-left transition group shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-200 text-slate-700">SEM MENSALIDADE</span>
              <span class="text-xs font-mono text-sky-600 font-semibold">● SOB DEMANDA</span>
            </div>
            <h4 class="font-bold text-lg text-slate-900">Atendimento Avulso</h4>
            <p class="text-xs text-slate-600 mt-2">Preciso resolver um problema pontual e urgente agora no meu Windows, com pagamento avulso por chamado.</p>
          </button>
        </div>
      `;
    } else if (step === 2) {
      stepContainer.innerHTML = `
        <div class="text-center mb-5">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-50 text-sky-700 border border-sky-200 mb-2 font-semibold">
            PASSO 2 DE 3
          </span>
          <h3 class="text-xl font-bold text-slate-900">Baixe a Ferramenta Homologada (Windows)</h3>
          <p class="text-sm text-slate-600 mt-1">
            Utilizamos ferramentas profissionais e seguras para Windows. <strong class="text-amber-700">Baixe somente a ferramenta indicada pelo nosso suporte.</strong>
          </p>
        </div>

        <div class="space-y-3 my-4">
          ${tools.map((tool) => `
            <div class="p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-sky-500 transition shadow-sm">
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-slate-900">${tool.name}</h4>
                  <span class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 font-semibold">${tool.badge}</span>
                </div>
                <p class="text-xs text-slate-500 mt-1">${tool.desc}</p>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <a href="${tool.directUrlWin}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition flex items-center gap-1.5 shadow-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  Baixar para Windows
                </a>
                <button type="button" onclick="ANECTTA_SUPPORT_FLOW.state.selectedTool='${tool.name}'; ANECTTA_SUPPORT_FLOW.goToStep(3);" class="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition">
                  Já tenho instalado →
                </button>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-start gap-2.5">
          <svg class="w-5 h-5 shrink-0 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <div>
            <strong>Aviso de Segurança:</strong> A ANECTTA nunca solicita senhas pessoais bancárias e nunca inicia conexões sem o seu consentimento ativo. Você pode encerrar o suporte quando quiser.
          </div>
        </div>

        <div class="mt-4 flex justify-between items-center">
          <button type="button" onclick="ANECTTA_SUPPORT_FLOW.goToStep(1)" class="text-xs text-slate-500 hover:text-slate-900 font-medium">
            ← Voltar
          </button>
          <button type="button" onclick="ANECTTA_SUPPORT_FLOW.goToStep(3)" class="text-xs text-sky-600 hover:text-sky-700 hover:underline font-semibold">
            Prosseguir para informar código →
          </button>
        </div>
      `;
    } else if (step === 3) {
      stepContainer.innerHTML = `
        <div class="text-center mb-5">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2 font-semibold">
            PASSO 3 DE 3 — INICIAR CONEXÃO
          </span>
          <h3 class="text-xl font-bold text-slate-900">Forneça os dados para conexão</h3>
          <p class="text-sm text-slate-600 mt-1">Abra o aplicativo no seu computador Windows, localize o código temporário e preencha abaixo para chamar o técnico.</p>
        </div>

        <form id="support-submit-form" onsubmit="ANECTTA_SUPPORT_FLOW.submitSupportRequest(event)" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-mono text-slate-600 font-semibold mb-1">Seu Nome / Colaborador *</label>
              <input type="text" id="sup-name" required placeholder="Ex: Roberto Silva" class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
            </div>
            <div>
              <label class="block text-xs font-mono text-slate-600 font-semibold mb-1">Nome da Empresa *</label>
              <input type="text" id="sup-company" required placeholder="Ex: Alfa Logística Ltda" class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-mono text-slate-600 font-semibold mb-1">Seu WhatsApp de Contato *</label>
              <input type="text" id="sup-whatsapp" required placeholder="(11) 99999-9999" class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
            </div>
            <div>
              <label class="block text-xs font-mono text-slate-600 font-semibold mb-1">Código / ID de Acesso da Ferramenta</label>
              <input type="text" id="sup-code" placeholder="Ex: 948 293 104" class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-mono">
            </div>
          </div>

          <div>
            <label class="block text-xs font-mono text-slate-600 font-semibold mb-1">Descreva brevemente o problema:</label>
            <textarea id="sup-problem" rows="2" placeholder="Ex: Meu computador está travando ao abrir o sistema..." class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"></textarea>
          </div>

          <div class="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div class="flex items-center justify-center gap-2 text-xs text-slate-700">
              <svg class="w-4 h-4 text-sky-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
              <span><strong>Sigilo Garantido:</strong> Controle de acesso</span>
            </div>
            <div class="flex items-center justify-center gap-2 text-xs text-slate-700">
              <svg class="w-4 h-4 text-sky-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <span><strong>Acesso Remoto:</strong> Criptografia de ponta</span>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
            <input type="checkbox" id="sup-consent" required class="w-4 h-4 rounded text-sky-600 border-slate-300">
            <label for="sup-consent" class="cursor-pointer">
              Estou ciente de que o atendimento é 100% remoto em ambiente Windows, acompanharei as ações em tela e posso encerrar a sessão a qualquer momento.
            </label>
          </div>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button type="button" onclick="ANECTTA_SUPPORT_FLOW.goToStep(2)" class="text-xs text-slate-500 hover:text-slate-900 font-medium">
              ← Voltar
            </button>
            <button type="submit" class="w-full sm:w-auto px-6 py-3 rounded-xl btn-emergency text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              CONECTAR COM O TÉCNICO AGORA
            </button>
          </div>
        </form>
      `;
    }
  },

  submitSupportRequest(e) {
    e.preventDefault();
    const name = document.getElementById("sup-name")?.value || "";
    const company = document.getElementById("sup-company")?.value || "";
    const whatsapp = document.getElementById("sup-whatsapp")?.value || "";
    const code = document.getElementById("sup-code")?.value || "Aguardando geração";
    const problem = document.getElementById("sup-problem")?.value || "";

    if (window.ANECTTA_STORAGE) {
      window.ANECTTA_STORAGE.saveTicket({
        client: company,
        requester: name,
        subject: problem || "Suporte Imediato via Central",
        category: "Suporte Técnico Remoto Windows",
        priority: this.state.contractType === "contrato" ? "Alto" : "Médio",
        status: "Em Atendimento",
        os: "Windows",
        notes: `Código de acesso fornecido: ${code}`
      });
    }

    const config = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getConfig() : window.ANECTTA_DATA.config;

    const message = encodeURIComponent(
      `🚨 *SOLICITAÇÃO DE SUPORTE REMOTO IMEDIATO - ANECTTA*\n\n` +
      `*Cliente:* ${name} (${company})\n` +
      `*WhatsApp:* ${whatsapp}\n` +
      `*Sistema:* WINDOWS (10 / 11 / Server)\n` +
      `*Modalidade:* ${this.state.contractType === "contrato" ? "Cliente com Contrato" : "Atendimento Avulso"}\n` +
      `*Ferramenta:* ${this.state.selectedTool}\n` +
      `*Código / ID da Sessão:* ${code}\n` +
      `*Problema:* ${problem}\n\n` +
      `_Aguardando contato e conexão do especialista de TI Windows._`
    );

    const stepContainer = document.getElementById("support-modal-body");
    if (stepContainer) {
      stepContainer.innerHTML = `
        <div class="text-center py-6">
          <div class="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Solicitação Aberta com Sucesso!</h3>
          <p class="text-sm text-slate-600 mt-2 max-w-md mx-auto">
            Seu chamado foi registrado na Central de Operações ANECTTA. Clique no botão abaixo para transmitir os dados ao plantão via WhatsApp:
          </p>
          <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/${config.whatsapp}?text=${message}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.966.582 1.896.887 2.802.887 3.178 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.774-5.773-5.774zm3.432 8.169c-.144.406-.838.749-1.161.797-.323.048-.718.064-2.115-.494-1.696-.677-2.784-2.404-2.868-2.518-.084-.113-.687-.914-.687-1.743 0-.829.434-1.238.588-1.408.154-.17.336-.214.448-.214.112 0 .224.001.322.006.103.006.241-.039.377.29.144.346.49 1.196.533 1.282.043.086.072.186.014.3-.058.114-.087.186-.173.286-.086.101-.182.226-.26.303-.09.088-.184.184-.079.364.105.18.468.772 1.004 1.25.688.613 1.269.803 1.449.893.18.09.286.076.393-.048.106-.124.457-.533.58-.715.123-.182.247-.152.414-.09.168.062 1.066.503 1.25.594.184.092.308.138.353.215.045.077.045.449-.099.855z"/></svg>
              ABRIR CONEXÃO NO WHATSAPP
            </a>
            <button type="button" onclick="ANECTTA_SUPPORT_FLOW.closeModal()" class="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300">
              Fechar Janela
            </button>
          </div>
        </div>
      `;
    }
  }
};

if (typeof window !== "undefined") {
  window.ANECTTA_SUPPORT_FLOW = ANECTTA_SUPPORT_FLOW;
}
