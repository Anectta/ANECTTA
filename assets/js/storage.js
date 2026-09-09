/**
 * ANECTTA - Storage & Config Persistence Layer
 * Permite que o administrador altere preços, SLA, ferramentas, leads e configurações sem banco externo
 */

const ANECTTA_STORAGE = {
  KEYS: {
    CONFIG: "anectta_config_v2",
    PLANS: "anectta_plans_v2",
    SLA: "anectta_sla_v1",
    TOOLS: "anectta_tools_v1",
    LEADS: "anectta_leads_v1",
    TICKETS: "anectta_tickets_v2"
  },

  init() {
    if (typeof window === "undefined" || !window.localStorage) return;

    // Inicializa Configuração se não existir
    if (!localStorage.getItem(this.KEYS.CONFIG)) {
      localStorage.setItem(this.KEYS.CONFIG, JSON.stringify(window.ANECTTA_DATA.config));
    }
    // Inicializa Planos se não existir
    if (!localStorage.getItem(this.KEYS.PLANS)) {
      localStorage.setItem(this.KEYS.PLANS, JSON.stringify(window.ANECTTA_DATA.plans));
    }
    // Inicializa SLA se não existir
    if (!localStorage.getItem(this.KEYS.SLA)) {
      localStorage.setItem(this.KEYS.SLA, JSON.stringify(window.ANECTTA_DATA.slaTable));
    }
    // Inicializa Ferramentas se não existir
    if (!localStorage.getItem(this.KEYS.TOOLS)) {
      localStorage.setItem(this.KEYS.TOOLS, JSON.stringify(window.ANECTTA_DATA.remoteTools));
    }
    // Inicializa Chamados Mock se não existir
    if (!localStorage.getItem(this.KEYS.TICKETS)) {
      const mockTickets = [
        {
          id: "TK-8492",
          client: "TechLog Transportes",
          requester: "Carlos Eduardo",
          subject: "Erro de sincronização no Outlook M365",
          category: "Microsoft 365",
          priority: "Alto",
          status: "Em Atendimento",
          specialist: "Guilherme Santos (Nível 2)",
          createdAt: "Hoje às 10:14",
          lastUpdate: "Há 12 minutos",
          os: "Windows 11 Pro"
        },
        {
          id: "TK-8490",
          client: "Studio Alfa Arquitetura",
          requester: "Mariana Costa",
          subject: "Configuração remota de VPN para home office",
          category: "Firewall e VPN",
          priority: "Médio",
          status: "Concluído",
          specialist: "Rafael Morais (Nível 1)",
          createdAt: "Ontem às 16:30",
          lastUpdate: "Ontem às 17:15",
          os: "macOS Sonoma"
        },
        {
          id: "TK-8488",
          client: "Bella Clinic Saúde",
          requester: "Dr. Roberto",
          subject: "Lentidão crítica e alerta de disco em Windows Server",
          category: "Redes e Servidores",
          priority: "Crítico",
          status: "Concluído",
          specialist: "Lucas Ferreira (Nível 3)",
          createdAt: "03/09/2026 às 08:45",
          lastUpdate: "03/09/2026 às 09:20",
          os: "Windows Server 2022"
        }
      ];
      localStorage.setItem(this.KEYS.TICKETS, JSON.stringify(mockTickets));
    }
    // Inicializa Leads vazios se não existir
    if (!localStorage.getItem(this.KEYS.LEADS)) {
      localStorage.setItem(this.KEYS.LEADS, JSON.stringify([]));
    }
  },

  getConfig() {
    try {
      const data = localStorage.getItem(this.KEYS.CONFIG);
      return data ? JSON.parse(data) : window.ANECTTA_DATA.config;
    } catch (e) {
      return window.ANECTTA_DATA.config;
    }
  },

  saveConfig(newConfig) {
    localStorage.setItem(this.KEYS.CONFIG, JSON.stringify(newConfig));
  },

  getPlans() {
    try {
      const data = localStorage.getItem(this.KEYS.PLANS);
      return data ? JSON.parse(data) : window.ANECTTA_DATA.plans;
    } catch (e) {
      return window.ANECTTA_DATA.plans;
    }
  },

  savePlans(newPlans) {
    localStorage.setItem(this.KEYS.PLANS, JSON.stringify(newPlans));
  },

  getSla() {
    try {
      const data = localStorage.getItem(this.KEYS.SLA);
      return data ? JSON.parse(data) : window.ANECTTA_DATA.slaTable;
    } catch (e) {
      return window.ANECTTA_DATA.slaTable;
    }
  },

  saveSla(newSla) {
    localStorage.setItem(this.KEYS.SLA, JSON.stringify(newSla));
  },

  getTools() {
    try {
      const data = localStorage.getItem(this.KEYS.TOOLS);
      return data ? JSON.parse(data) : window.ANECTTA_DATA.remoteTools;
    } catch (e) {
      return window.ANECTTA_DATA.remoteTools;
    }
  },

  saveTools(newTools) {
    localStorage.setItem(this.KEYS.TOOLS, JSON.stringify(newTools));
  },

  getLeads() {
    try {
      const data = localStorage.getItem(this.KEYS.LEADS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveLead(leadData) {
    const leads = this.getLeads();
    const newLead = {
      id: "LEAD-" + Date.now().toString().slice(-5),
      createdAt: new Date().toLocaleString("pt-BR"),
      ...leadData
    };
    leads.unshift(newLead);
    localStorage.setItem(this.KEYS.LEADS, JSON.stringify(leads));
    return newLead;
  },

  getTickets() {
    try {
      const data = localStorage.getItem(this.KEYS.TICKETS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveTicket(ticketData) {
    const tickets = this.getTickets();
    const newTicket = {
      id: "TK-" + Math.floor(1000 + Math.random() * 9000),
      createdAt: "Hoje às " + new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      lastUpdate: "Agora mesmo",
      status: "Novo",
      specialist: "Triagem Central",
      ...ticketData
    };
    tickets.unshift(newTicket);
    localStorage.setItem(this.KEYS.TICKETS, JSON.stringify(tickets));
    return newTicket;
  },

  resetDefaults() {
    localStorage.removeItem(this.KEYS.CONFIG);
    localStorage.removeItem(this.KEYS.PLANS);
    localStorage.removeItem(this.KEYS.SLA);
    localStorage.removeItem(this.KEYS.TOOLS);
    localStorage.removeItem(this.KEYS.TICKETS);
    this.init();
  }
};

// Auto-inicializa
ANECTTA_STORAGE.init();

if (typeof window !== "undefined") {
  window.ANECTTA_STORAGE = ANECTTA_STORAGE;
}
