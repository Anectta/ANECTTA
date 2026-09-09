/**
 * ANECTTA - Calculadora Interativa de TI
 * "QUANTO CUSTARIA TER SUA TI SOB CONTROLE?"
 */

const ANECTTA_CALCULATOR = {
  // Estado da simulação
  state: {
    users: 8,
    computers: 8,
    hasServer: "single", // "none", "single", "multiple"
    hasM365: true,
    hasGWorkspace: false,
    sitesCount: 1,
    needBackup: true,
    needMonitoring: true,
    needSecurity: true,
    needPrioritySla: false
  },

  init() {
    this.bindEvents();
    this.calculate();
  },

  bindEvents() {
    const usersInput = document.getElementById("calc-users");
    const compInput = document.getElementById("calc-computers");
    const serverSelect = document.getElementById("calc-server");
    const m365Checkbox = document.getElementById("calc-m365");
    const gwsCheckbox = document.getElementById("calc-gws");
    const sitesSelect = document.getElementById("calc-sites");
    const backupCheckbox = document.getElementById("calc-backup");
    const monitorCheckbox = document.getElementById("calc-monitor");
    const securityCheckbox = document.getElementById("calc-security");
    const priorityCheckbox = document.getElementById("calc-priority");

    if (usersInput) {
      usersInput.addEventListener("input", (e) => {
        this.state.users = parseInt(e.target.value) || 1;
        const display = document.getElementById("calc-users-val");
        if (display) display.textContent = this.state.users;
        this.calculate();
      });
    }

    if (compInput) {
      compInput.addEventListener("input", (e) => {
        this.state.computers = parseInt(e.target.value) || 1;
        const display = document.getElementById("calc-computers-val");
        if (display) display.textContent = this.state.computers;
        this.calculate();
      });
    }

    if (serverSelect) {
      serverSelect.addEventListener("change", (e) => {
        this.state.hasServer = e.target.value;
        this.calculate();
      });
    }

    if (m365Checkbox) {
      m365Checkbox.addEventListener("change", (e) => {
        this.state.hasM365 = e.target.checked;
        this.calculate();
      });
    }

    if (gwsCheckbox) {
      gwsCheckbox.addEventListener("change", (e) => {
        this.state.hasGWorkspace = e.target.checked;
        this.calculate();
      });
    }

    if (sitesSelect) {
      sitesSelect.addEventListener("change", (e) => {
        this.state.sitesCount = parseInt(e.target.value) || 1;
        this.calculate();
      });
    }

    if (backupCheckbox) {
      backupCheckbox.addEventListener("change", (e) => {
        this.state.needBackup = e.target.checked;
        this.calculate();
      });
    }

    if (monitorCheckbox) {
      monitorCheckbox.addEventListener("change", (e) => {
        this.state.needMonitoring = e.target.checked;
        this.calculate();
      });
    }

    if (securityCheckbox) {
      securityCheckbox.addEventListener("change", (e) => {
        this.state.needSecurity = e.target.checked;
        this.calculate();
      });
    }

    if (priorityCheckbox) {
      priorityCheckbox.addEventListener("change", (e) => {
        this.state.needPrioritySla = e.target.checked;
        this.calculate();
      });
    }
  },

  calculate() {
    let recommendedPlan = "PROFISSIONAL";
    let basePrice = 890;
    let badge = "RECOMENDADO";
    let explanation = "Ideal para empresas que dependem diariamente da infraestrutura e precisam de suporte ágil, prevenção e monitoramento de ativos.";

    const totalEndpoints = Math.max(this.state.users, this.state.computers);

    // Lógica de recomendação de plano
    if (
      totalEndpoints <= 5 &&
      this.state.hasServer === "none" &&
      !this.state.needMonitoring &&
      !this.state.needPrioritySla &&
      this.state.sitesCount === 1
    ) {
      recommendedPlan = "ESSENCIAL";
      basePrice = 390;
      explanation = "Seu cenário atual tem baixo volume de computadores e sem servidores locais, sendo perfeitamente atendido pelo plano sob demanda comercial com suporte ágil.";
    } else if (
      totalEndpoints > 20 ||
      this.state.hasServer === "multiple" ||
      this.state.sitesCount > 2 ||
      (this.state.needPrioritySla && totalEndpoints > 12)
    ) {
      recommendedPlan = "EMPRESA 360";
      basePrice = 1890 + (totalEndpoints - 20) * 45;
      explanation = "Sua operação possui criticidade e múltiplos ativos que demandam a máxima cobertura do plano EMPRESA 360: suporte avançado N1/N2/N3, múltiplos servidores, monitoramento 24/7, gestão contínua de riscos e alinhamento executivo.";
    } else {
      recommendedPlan = "PROFISSIONAL";
      basePrice = 890;
      if (totalEndpoints > 10) {
        basePrice += (totalEndpoints - 10) * 55;
      }
      if (this.state.hasServer === "single") {
        basePrice += 200;
      }
      if (this.state.needBackup) {
        basePrice += 150;
      }
    }

    // Renderiza o resultado na tela
    const planNameElem = document.getElementById("calc-result-plan");
    const planBadgeElem = document.getElementById("calc-result-badge");
    const planPriceElem = document.getElementById("calc-result-price");
    const planDescElem = document.getElementById("calc-result-desc");
    const planSummaryElem = document.getElementById("calc-result-summary");
    const btnCtaElem = document.getElementById("calc-cta-whatsapp");

    if (planNameElem) planNameElem.textContent = recommendedPlan;
    if (planBadgeElem) planBadgeElem.textContent = badge;
    if (planPriceElem) {
      planPriceElem.textContent = `A partir de R$ ${basePrice.toLocaleString("pt-BR")}/mês`;
    }
    if (planDescElem) planDescElem.textContent = explanation;

    if (planSummaryElem) {
      planSummaryElem.innerHTML = `
        <div class="text-xs text-slate-600 space-y-1.5 mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div class="flex justify-between"><span>Usuários / Máquinas:</span> <strong class="text-slate-800">${this.state.users} usuários / ${this.state.computers} PCs</strong></div>
          <div class="flex justify-between"><span>Servidores:</span> <strong class="text-slate-800">${this.state.hasServer === "none" ? "Nenhum" : this.state.hasServer === "single" ? "1 Servidor" : "Múltiplos Servidores"}</strong></div>
          <div class="flex justify-between"><span>Nuvem Corporativa:</span> <strong class="text-slate-800">${[this.state.hasM365 ? "Microsoft 365" : "", this.state.hasGWorkspace ? "Google Workspace" : ""].filter(Boolean).join(" + ") || "Nenhum"}</strong></div>
          <div class="flex justify-between"><span>Backup & Monitoramento:</span> <strong class="text-slate-800">${this.state.needBackup ? "Sim" : "Não"} / ${this.state.needMonitoring ? "Sim" : "Não"}</strong></div>
        </div>
      `;
    }

    if (btnCtaElem) {
      const config = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getConfig() : window.ANECTTA_DATA.config;
      const msg = encodeURIComponent(
        `Olá! Fiz a simulação na Calculadora de TI da ANECTTA.\n\n` +
        `*Cenário:* ${this.state.users} usuários, ${this.state.computers} computadores, Servidor: ${this.state.hasServer}.\n` +
        `*Plano Recomendado:* ${recommendedPlan} (Estimativa: R$ ${basePrice}/mês).\n` +
        `Gostaria de conversar com um especialista sobre o suporte remoto da minha empresa.`
      );
      btnCtaElem.href = `https://wa.me/${config.whatsapp}?text=${msg}`;
    }
  }
};

if (typeof window !== "undefined") {
  window.ANECTTA_CALCULATOR = ANECTTA_CALCULATOR;
}
