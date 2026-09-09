/**
 * ANECTTA - Portal do Cliente & Painel Administrativo
 * Gerencia chamados, inventário de ativos e customizações do administrador
 * Light Theme (Fundo Branco & Clean Tech)
 */

const ANECTTA_PORTAL = {
  // Inicialização do Portal do Cliente
  initClientPortal() {
    this.renderTicketsList();
    this.bindTicketForm();
  },

  // Renderiza a lista de chamados na Área do Cliente
  renderTicketsList() {
    const listContainer = document.getElementById("client-tickets-table");
    if (!listContainer) return;

    const tickets = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getTickets() : [];

    if (tickets.length === 0) {
      listContainer.innerHTML = `
        <tr>
          <td colspan="6" class="text-center py-8 text-slate-500 text-sm">
            Nenhum chamado aberto no momento.
          </td>
        </tr>
      `;
      return;
    }

    listContainer.innerHTML = tickets.map((t) => {
      const statusBadge = t.status === "Concluído" 
        ? `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Concluído</span>`
        : t.status === "Em Atendimento"
        ? `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>Em Atendimento</span>`
        : `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">Novo</span>`;

      const priorityBadge = t.priority === "Crítico"
        ? `<span class="text-xs font-mono font-bold text-rose-600">● Crítico</span>`
        : t.priority === "Alto"
        ? `<span class="text-xs font-mono font-bold text-amber-600">● Alto</span>`
        : `<span class="text-xs font-mono text-sky-600 font-semibold">● Normal</span>`;

      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
          <td class="py-3 px-4 font-mono text-xs text-sky-600 font-bold">${t.id}</td>
          <td class="py-3 px-4">
            <div class="text-sm font-semibold text-slate-900">${t.subject}</div>
            <div class="text-xs text-slate-500">${t.requester} • ${t.category} • <span class="font-mono text-[11px]">${t.os || "SO Padrão"}</span></div>
          </td>
          <td class="py-3 px-4">${priorityBadge}</td>
          <td class="py-3 px-4 text-xs text-slate-700">${t.specialist}</td>
          <td class="py-3 px-4">${statusBadge}</td>
          <td class="py-3 px-4 text-xs text-slate-500 font-mono">${t.createdAt}</td>
        </tr>
      `;
    }).join("");
  },

  // Submissão de novo ticket pelo cliente
  bindTicketForm() {
    const form = document.getElementById("new-ticket-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const subject = document.getElementById("ticket-subject")?.value || "";
      const requester = document.getElementById("ticket-requester")?.value || "";
      const category = document.getElementById("ticket-category")?.value || "Suporte Geral";
      const priority = document.getElementById("ticket-priority")?.value || "Médio";
      const description = document.getElementById("ticket-desc")?.value || "";

      if (window.ANECTTA_STORAGE) {
        window.ANECTTA_STORAGE.saveTicket({
          client: "Minha Empresa (Sessão)",
          requester,
          subject,
          category,
          priority,
          notes: description
        });
      }

      form.reset();
      this.renderTicketsList();

      const feedback = document.getElementById("ticket-success-msg");
      if (feedback) {
        feedback.classList.remove("hidden");
        setTimeout(() => feedback.classList.add("hidden"), 5000);
      }
    });
  },

  // Inicialização do Painel Administrativo
  initAdmin() {
    this.renderAdminConfig();
    this.renderAdminLeads();
    this.renderAdminTickets();
  },

  renderAdminConfig() {
    const config = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getConfig() : window.ANECTTA_DATA.config;
    const plans = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getPlans() : window.ANECTTA_DATA.plans;

    const whatsappInput = document.getElementById("admin-whatsapp");
    const emailInput = document.getElementById("admin-email");
    const phoneInput = document.getElementById("admin-phone");

    if (whatsappInput) whatsappInput.value = config.whatsapp || "";
    if (emailInput) emailInput.value = config.email || "";
    if (phoneInput) phoneInput.value = config.phone || "";

    // Preços dos Planos
    plans.forEach((p) => {
      const input = document.getElementById(`admin-price-${p.id}`);
      if (input) input.value = p.priceStarting;
    });

    // SLA Inputs
    const sla = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getSla() : window.ANECTTA_DATA.slaTable;
    sla.forEach((s) => {
      const respInput = document.getElementById(`admin-sla-resp-${s.level.toLowerCase()}`);
      const atendInput = document.getElementById(`admin-sla-atend-${s.level.toLowerCase()}`);
      if (respInput) respInput.value = s.tempoResposta;
      if (atendInput) atendInput.value = s.tempoAtendimento;
    });

    const form = document.getElementById("admin-settings-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const updatedConfig = {
          ...config,
          whatsapp: whatsappInput?.value || config.whatsapp,
          email: emailInput?.value || config.email,
          phone: phoneInput?.value || config.phone
        };
        window.ANECTTA_STORAGE.saveConfig(updatedConfig);

        const updatedPlans = plans.map((p) => {
          const priceVal = document.getElementById(`admin-price-${p.id}`)?.value;
          return {
            ...p,
            priceStarting: priceVal || p.priceStarting
          };
        });
        window.ANECTTA_STORAGE.savePlans(updatedPlans);

        const updatedSla = sla.map((s) => {
          const respVal = document.getElementById(`admin-sla-resp-${s.level.toLowerCase()}`)?.value;
          const atendVal = document.getElementById(`admin-sla-atend-${s.level.toLowerCase()}`)?.value;
          return {
            ...s,
            tempoResposta: respVal || s.tempoResposta,
            tempoAtendimento: atendVal || s.tempoAtendimento
          };
        });
        window.ANECTTA_STORAGE.saveSla(updatedSla);

        alert("Configurações salvas com sucesso!");
        location.reload();
      });
    }
  },

  renderAdminLeads() {
    const container = document.getElementById("admin-leads-table");
    if (!container) return;

    const leads = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getLeads() : [];

    if (leads.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="6" class="text-center py-6 text-slate-500 text-xs">
            Nenhum formulário de diagnóstico recebido ainda. Novos envios aparecerão aqui em tempo real.
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = leads.map((lead) => `
      <tr class="border-b border-slate-100 text-xs hover:bg-slate-50 transition">
        <td class="py-2.5 px-3 font-mono text-sky-600 font-bold">${lead.id}</td>
        <td class="py-2.5 px-3 text-slate-900 font-semibold">${lead.name}<br><span class="text-slate-500">${lead.company}</span></td>
        <td class="py-2.5 px-3 text-slate-700">${lead.whatsapp}<br><span class="text-slate-500">${lead.email}</span></td>
        <td class="py-2.5 px-3 text-slate-700">${lead.users} usuários • ${lead.computers} computadores</td>
        <td class="py-2.5 px-3 text-slate-600 max-w-xs truncate">${lead.mainProblem || "Geral"}</td>
        <td class="py-2.5 px-3 font-mono text-slate-400">${lead.createdAt}</td>
      </tr>
    `).join("");
  },

  renderAdminTickets() {
    const container = document.getElementById("admin-tickets-table");
    if (!container) return;

    const tickets = window.ANECTTA_STORAGE ? window.ANECTTA_STORAGE.getTickets() : [];

    container.innerHTML = tickets.map((t) => `
      <tr class="border-b border-slate-100 text-xs hover:bg-slate-50 transition">
        <td class="py-2 px-3 font-mono text-sky-600 font-bold">${t.id}</td>
        <td class="py-2 px-3 text-slate-900 font-medium">${t.client} (${t.requester})</td>
        <td class="py-2 px-3 text-slate-700 font-medium">${t.subject}</td>
        <td class="py-2 px-3"><span class="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">${t.priority}</span></td>
        <td class="py-2 px-3 text-slate-600">${t.specialist}</td>
        <td class="py-2 px-3 text-slate-600">${t.status}</td>
      </tr>
    `).join("");
  }
};

if (typeof window !== "undefined") {
  window.ANECTTA_PORTAL = ANECTTA_PORTAL;
}
