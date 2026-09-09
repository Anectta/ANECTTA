/**
 * ANECTTA - Central de Operações de TI Remota
 * Base de Dados Estruturada do Site
 * 100% Remoto - Sem Deslocamento
 */

const ANECTTA_DATA = {
  config: {
    brandName: "ANECTTA",
    tagline: "Central de Operações de TI Remota",
    slogan: "Sua TI resolvida. Sem esperar um técnico chegar.",
    phone: "(21) 99705-8709",
    whatsapp: "5521997058709", // Editável no Admin
    whatsappDisplay: "(21) 99705-8709",
    email: "anectta@anectta.com.br",
    suporteEmail: "suporte@anectta.com.br",
    comercialEmail: "contato@anectta.com.br",
    address: "Av. Evandro Lins e Silva, 840 Sala 411P - Office Tower, Barra da Tijuca, Rio de Janeiro - RJ, CEP 22631-470",
    horarioAtendimento: "Segunda a Sexta: 08h às 18h | Plantão de Emergência para Contratos",
    cobertura: "Atendimento remoto em todo o Brasil e filiais no exterior",
    experienceYears: "Mais de 10 anos de excelência no mercado de TIC",
  },

  // 18 Serviços Adaptados para Execução 100% Remota
  services: [
    // SUPORTE
    {
      id: "suporte-ti",
      title: "Suporte de TI Remoto",
      category: "Suporte",
      slug: "suporte-ti.html",
      shortDesc: "Atendimento ágil à distância para computadores, sistemas, aplicativos e usuários sem interrupção.",
      fullDesc: "Central de atendimento remoto para solucionar instantaneamente problemas do dia a dia da sua equipe: lentidão, falhas em sistemas de gestão (ERP/CRM), travamentos, impressoras compartilhadas e dificuldades com aplicativos corporativos. Todo o diagnóstico e intervenção são realizados diretamente na tela do usuário, com autorização e transparência.",
      benefits: [
        "Eliminação imediata do tempo de espera por deslocamento",
        "Acesso seguro autorizado pelo colaborador a cada chamado",
        "Atendimento simultâneo a múltiplos colaboradores da empresa",
        "Registro detalhado de histórico e ações executadas"
      ],
      deliverables: [
        "Diagnóstico de desempenho e saúde de estações",
        "Configuração de aplicativos corporativos e e-mails",
        "Resolução de incompatibilidades e travamentos",
        "Suporte a periféricos compartilhados em rede"
      ],
      icon: "laptop"
    },
    {
      id: "suporte-remoto",
      title: "Atendimento Técnico Remoto",
      category: "Suporte",
      slug: "suporte-remoto.html",
      shortDesc: "Diagnóstico e resolução remota imediata de falhas urgentes de hardware lógico e software.",
      fullDesc: "Quando a produtividade do seu colaborador para por erros no sistema operacional ou tela azul, nossa equipe acessa remotamente em minutos. Diagnosticamos integridade de discos, consumo de memória, drivers corrompidos e serviços travados, restabelecendo a operação sem necessidade de abrir chamados com visita presencial.",
      benefits: [
        "Início do diagnóstico em minutos após a solicitação",
        "Sessão encriptada e finalizável pelo cliente a qualquer momento",
        "Sem custos extras de taxa de visita ou transporte",
        "Aplicação de correções homologadas e seguras"
      ],
      deliverables: [
        "Análise de logs de erro do Windows e macOS",
        "Correção de falhas de inicialização e serviços críticos",
        "Atualização remota de drivers e correções de segurança",
        "Otimização e limpeza remota de disco e registro"
      ],
      icon: "terminal"
    },
    {
      id: "contrato-suporte",
      title: "Contrato de Suporte de TI",
      category: "Suporte",
      slug: "planos.html",
      shortDesc: "Planos mensais com franquia de atendimento, prevenção contínua, monitoramento e previsibilidade de custos.",
      fullDesc: "Transforme a TI da sua empresa de um centro de custos emergencial em uma operação gerenciada e estável. Com o Contrato de Suporte Remoto ANECTTA, sua empresa conta com SLA garantido, manutenção preventiva programada, monitoramento proativo de computadores e servidores, além de consultoria contínua para melhoria tecnológica.",
      benefits: [
        "Previsibilidade orçamentária sem surpresas financeiras",
        "SLA prioritário para chamados críticos",
        "Redução de até 85% no tempo de inatividade da equipe",
        "Relatórios executivos mensais com saúde da infraestrutura"
      ],
      deliverables: [
        "Rotinas preventivas periódicas em todas as máquinas",
        "Abertura de chamados por WhatsApp, e-mail ou portal",
        "Gestão de inventário e ciclo de vida dos dispositivos",
        "Reuniões trimestrais de alinhamento estratégico de TI"
      ],
      icon: "shield-check"
    },

    // SEGURANÇA
    {
      id: "seguranca-informacao",
      title: "Segurança da Informação",
      category: "Segurança",
      slug: "seguranca-da-informacao.html",
      shortDesc: "Auditoria remota de vulnerabilidades, aplicação de políticas de acesso e proteção de dados corporativos.",
      fullDesc: "Proteja os dados sensíveis da sua empresa e preserve a conformidade com as boas práticas de segurança e LGPD. Realizamos diagnósticos remotos de vulnerabilidade, auditoria de permissões de pastas, implementação de autenticação multifator (MFA) e políticas de menor privilégio, reduzindo drasticamente os vetores de ataques cibernéticos.",
      benefits: [
        "Mapeamento de riscos e brechas de segurança sem intervenção física",
        "Adesão às diretrizes da LGPD para proteção de dados",
        "Prevenção ativa contra sequestro de dados (Ransomware)",
        "Sensibilização remota e diretrizes de uso seguro para colaboradores"
      ],
      deliverables: [
        "Auditoria remota de compartilhamentos e senhas fracas",
        "Implementação de MFA (Autenticação em 2 Fatores) em contas corporativas",
        "Definição de políticas de controle de acesso por departamento",
        "Plano de resposta rápida a incidentes cibernéticos"
      ],
      icon: "lock"
    },
    {
      id: "antivirus-corporativo",
      title: "Antivírus Corporativo Gerenciado",
      category: "Segurança",
      slug: "seguranca-da-informacao.html#antivirus",
      shortDesc: "Instalação, monitoramento e atualização remota centralizada de proteção endpoint para sua frota.",
      fullDesc: "Elimine a dependência de antivírus gratuitos ou desatualizados. Configuramos e gerenciamos consoles corporativos de segurança em nuvem (EDR/Antivírus) em todos os computadores e servidores da empresa, garantindo proteção contínua contra malware, phishing e comportamentos anômalos, com resposta remota imediata a ameaças.",
      benefits: [
        "Painel centralizado com visibilidade total do status de cada máquina",
        "Atualizações silenciosas sem travar o trabalho do usuário",
        "Isolamento remoto imediato de endpoints infectados",
        "Relatórios de ameaças bloqueadas para a diretoria"
      ],
      deliverables: [
        "Implantação remota e padronização da solução de proteção",
        "Configuração de varreduras agendadas e proteção em tempo real",
        "Remoção e contenção remota de malwares identificados",
        "Políticas de bloqueio de pendrives e sites nocivos"
      ],
      icon: "shield-alert"
    },
    {
      id: "backup-nuvem",
      title: "Backup em Nuvem e Recuperação",
      category: "Segurança",
      slug: "backup-nuvem.html",
      shortDesc: "Configuração, monitoramento diário e testes remotos de restauração para blindar seus arquivos vitais.",
      fullDesc: "Seus dados são o ativo mais valioso da empresa. Estruturamos rotinas automatizadas de backup em nuvem criptografado (regra 3-2-1) para servidores, bancos de dados e estações de trabalho. Nossa Central de Operações monitora a execução diária e realiza testes remotos de restauração periódica para garantir que seus arquivos estarão disponíveis caso ocorra qualquer desastre.",
      benefits: [
        "Proteção contra falhas físicas, exclusões acidentais e ransomware",
        "Criptografia ponta a ponta antes do envio à nuvem",
        "Monitoramento contínuo para evitar backups silenciosamente corrompidos",
        "Recuperação remota rápida de arquivos individuais ou bancos inteiros"
      ],
      deliverables: [
        "Definição de escopo crítico (arquivos, bancos SQL, imagens do SO)",
        "Configuração remota de agentes de backup automatizados",
        "Relatórios semanais de status e integridade das cópias",
        "Simulação semestral remota de Disaster Recovery"
      ],
      icon: "cloud-upload"
    },
    {
      id: "firewall-vpn",
      title: "Firewall e VPN Corporativa",
      category: "Segurança",
      slug: "firewall-vpn.html",
      shortDesc: "Configuração remota de túneis VPN criptografados e regras de firewall para acesso corporativo seguro.",
      fullDesc: "Permita que sua equipe trabalhe em home office ou em trânsito com a mesma segurança da rede interna do escritório. Realizamos a administração e configuração remota de appliances de firewall e servidores VPN (OpenVPN, WireGuard, IPsec), controlando portas expostas, bloqueando tráfego malicioso e viabilizando túneis seguros com autenticação rigorosa.",
      benefits: [
        "Conexão remota segura sem expor serviços diretamente à internet pública",
        "Bloqueio de acessos externos não autorizados à rede interna",
        "Criptografia de alto nível para tráfego corporativo confidencial",
        "Configuração remota dos clientes de VPN nas estações dos usuários"
      ],
      deliverables: [
        "Parametrização remota de regras de entrada e saída no firewall",
        "Criação e gerenciamento de certificados de acesso VPN",
        "Configuração de túneis Site-to-Site entre filiais",
        "Diagnóstico remoto de quedas e gargalos de conexão"
      ],
      icon: "network"
    },

    // PRODUTIVIDADE
    {
      id: "microsoft-365",
      title: "Gestão Microsoft 365",
      category: "Produtividade",
      slug: "suporte-microsoft-365.html",
      shortDesc: "Administração remota completa de usuários, Exchange, Teams, SharePoint, OneDrive e segurança de tenant.",
      fullDesc: "Extraia o potencial máximo do pacote de produtividade mais utilizado no mundo. Nossa equipe assume a gestão remota do seu portal Microsoft 365: criação e desligamento de usuários, configuração do Outlook/Exchange, políticas de compartilhamento do OneDrive e SharePoint, proteção do Teams e configuração de políticas de retenção e segurança.",
      benefits: [
        "Centralização de suporte especializado para toda a equipe",
        "Padronização de permissões e segurança por cargo ou departamento",
        "Otimização de custos evitando licenças ativas sem uso",
        "Resolução ágil de falhas no aplicativo do Outlook e sincronizações"
      ],
      deliverables: [
        "Gerenciamento de contas, senhas e permissões administrativas",
        "Configuração de grupos de distribuição e caixas de correio compartilhadas",
        "Ajuste de políticas de segurança e MFA no Azure AD / Entra ID",
        "Suporte direto ao usuário para ferramentas M365"
      ],
      icon: "microsoft"
    },
    {
      id: "google-workspace",
      title: "Gestão Google Workspace",
      category: "Produtividade",
      slug: "suporte-google-workspace.html",
      shortDesc: "Configuração e administração remota de Gmail corporativo, Google Drive, Meet e políticas de colaboração.",
      fullDesc: "Administração profissional do painel Google Workspace para empresas dinâmicas. Cuidamos remotamente do ciclo de vida dos colaboradores no ecossistema Google, segurança de arquivos confidenciais no Google Drive compartilhado, gerenciamento de aliases de e-mail e políticas de acesso em dispositivos móveis.",
      benefits: [
        "Colaboração fluida com níveis corretos de privacidade e permissão",
        "Ajuste fino de SPF, DKIM e DMARC para garantir entregabilidade de e-mails",
        "Backup e retenção de arquivos mesmo após saída de colaboradores",
        "Suporte técnico remoto aos usuários do ecossistema Google"
      ],
      deliverables: [
        "Administração de unidades organizacionais e permissões de Drive",
        "Configuração de domínios corporativos e roteamento de mensagens",
        "Auditoria remota de compartilhamentos externos indevidos",
        "Recuperação de contas e suporte a incidentes no Workspace"
      ],
      icon: "globe"
    },
    {
      id: "migracao-email",
      title: "Migração de E-mail Corporativo",
      category: "Produtividade",
      slug: "migracao-email.html",
      shortDesc: "Planejamento e migração remota de caixas postais, históricos e DNS sem interrupção nas vendas.",
      fullDesc: "Trocar de provedor de e-mail (por exemplo, de cPanel/Locaweb para Microsoft 365 ou Google Workspace) pode causar perda de mensagens ou paralisação de negócios se mal executada. Conduzimos a migração 100% remota: sincronização prévia de caixas postais, histórico de mensagens, contatos, calendários e transição programada de MX com zero perda de e-mails.",
      benefits: [
        "Zero impacto na rotina comercial da sua empresa",
        "Migração integral de pastas, históricos e mensagens antigas",
        "Transição de DNS com acompanhamento técnico contínuo",
        "Reconfiguração remota dos computadores dos usuários após a virada"
      ],
      deliverables: [
        "Mapeamento e inventário de todas as caixas postais ativas",
        "Sincronização em segundo plano sem travar o uso atual",
        "Ajuste fino de apontamentos de DNS (MX, SPF, DKIM)",
        "Validação de envio e recebimento em todas as contas migradas"
      ],
      icon: "mail-sync"
    },
    {
      id: "gestao-licencas",
      title: "Gerenciamento de Licenças de Software",
      category: "Produtividade",
      slug: "gestao-licencas.html",
      shortDesc: "Controle remoto de inventário, renovações, conformidade e redução de desperdício com assinaturas.",
      fullDesc: "Evite multas por software irregular ou desperdício pagando por licenças de colaboradores que já deixaram a empresa. Auditamos e gerenciamos remotamente todas as assinaturas de software da organização, centralizando datas de renovação, redistribuindo licenças ociosas e garantindo conformidade legal.",
      benefits: [
        "Redução imediata de custos cortando assinaturas duplicadas ou fantasmas",
        "Tranquilidade total contra fiscalizações de conformidade de software",
        "Previsibilidade de fluxo de caixa para renovações anuais",
        "Padronização de versões entre computadores da equipe"
      ],
      deliverables: [
        "Inventário remoto de softwares instalados nas máquinas",
        "Relatório de licenças ativas vs. colaboradores reais",
        "Notificações antecipadas de renovação contratual",
        "Adequação de versões para o plano de menor custo necessário"
      ],
      icon: "file-spreadsheet"
    },

    // INFRAESTRUTURA
    {
      id: "redes-servidores",
      title: "Redes e Servidores Remotos",
      category: "Infraestrutura",
      slug: "suporte-servidores.html",
      shortDesc: "Administração, monitoramento e diagnóstico remoto de Windows Server, Linux, Active Directory e switches.",
      fullDesc: "Mantenha o coração da sua TI operando sem falhas. Administramos e corrigimos remotamente servidores físicos e virtualizados (Hyper-V, VMware, Proxmox), Active Directory, DNS/DHCP corporativo, serviços de arquivo e roteadores/switches gerenciáveis. Diagnosticamos gargalos de rede e corrigimos travamentos de serviços essenciais à distância.",
      benefits: [
        "Administração de alto nível por especialistas seniores sem custo de CLT",
        "Monitoramento remoto de CPU, memória, disco e serviços 24h",
        "Aplicação controlada de atualizações de segurança fora do expediente",
        "Restauração remota emergencial de serviços travados"
      ],
      deliverables: [
        "Gerenciamento de usuários, grupos e GPOs no Active Directory",
        "Manutenção remota de servidores Windows e Linux",
        "Diagnóstico de lentidão e colisão de pacotes na rede local",
        "Rotinas programadas de expurgo e integridade de discos"
      ],
      icon: "server"
    },
    {
      id: "manutencao-computadores",
      title: "Assistência Técnica Remota",
      category: "Infraestrutura",
      slug: "manutencao-computadores.html",
      shortDesc: "Diagnóstico e manutenção remota profunda para computadores e notebooks lentos ou com erros.",
      fullDesc: "Não precisa enviar o computador para uma bancada de assistência ou aguardar a visita de um técnico. Através de ferramentas profissionais de acesso remoto, realizamos limpeza lógica, desinstalação de bloatwares, correção de erros no registro do Windows, calibração de inicialização, atualização de BIOS/firmwares homologados e testes remotos de integridade de hardware (S.M.A.R.T. de SSD e testes de memória).",
      benefits: [
        "Seu equipamento continua na sua mesa durante todo o procedimento",
        "Acompanhamento em tempo real de cada tela operada pelo técnico",
        "Retorno imediato da máquina para o trabalho produtivo",
        "Preservação rigorosa da privacidade e dos arquivos do usuário"
      ],
      deliverables: [
        "Diagnóstico remoto de integridade física de SSDs e HDs via telemetria",
        "Remoção de softwares desnecessários e otimização de inicialização",
        "Ajuste fino de configurações de economia de energia e performance",
        "Laudo técnico remoto detalhado das condições do computador"
      ],
      icon: "cpu"
    },
    {
      id: "cftv-remoto",
      title: "Suporte e Configuração Remota de CFTV",
      category: "Infraestrutura",
      slug: "cftv-remoto.html",
      shortDesc: "Configuração remota de DVR/NVR, liberação de portas, aplicativos móveis e diagnóstico de conectividade.",
      fullDesc: "A ANECTTA é estritamente remota e não realiza fixação física de câmeras ou passagem de fiação. No entanto, resolvemos o que a maioria das empresas de segurança não domina: a parte lógica de rede. Configuramos remotamente DVRs e NVRs (Intelbras, Hikvision e outros), ajustes de IP, redirecionamento seguro, cloud P2P, permissões de usuários e orientação técnica para técnicos locais de campo.",
      benefits: [
        "Acesso às imagens no seu celular ou computador de qualquer lugar",
        "Configuração de segurança contra invasões e acessos indevidos no DVR",
        "Diagnóstico remoto de câmeras offline e problemas de banda",
        "Apoio técnico remoto caso você contrate instaladores terceiros"
      ],
      deliverables: [
        "Parametrização remota de rede e DNS dinâmico (DDNS/P2P) do gravador",
        "Configuração dos aplicativos de visualização nas estações e celulares",
        "Ajuste de resolução, taxa de gravação e políticas de retenção de imagens",
        "Verificação remota de status de gravação do disco interno do DVR"
      ],
      icon: "video"
    },
    {
      id: "projeto-cabeamento",
      title: "Projeto e Consultoria Remota de Cabeamento Estruturado",
      category: "Infraestrutura",
      slug: "projeto-cabeamento.html",
      shortDesc: "Planejamento lógico, mapas de rede, documentação e orientação remota para equipes locais de cabeamento.",
      fullDesc: "Não realizamos a passagem física de cabos nem furação de paredes. Oferecemos o planejamento de engenharia lógica e consultoria técnica remota: especificamos a topologia ideal da sua rede, desenhamos diagramas unifilares, organizamos o endereçamento IP/VLANs, especificamos os equipamentos (racks, patch panels, switches gerenciáveis) e orientamos remotamente o eletricista ou instalador de sua preferência.",
      benefits: [
        "Projeto técnico profissional sem custo de visita de engenheiro de campo",
        "Documentação clara e mapa de rede para evitar dependência de terceiros",
        "Especificação precisa de compras evitando desperdício de material",
        "Validação e certificação lógica remota após a montagem física"
      ],
      deliverables: [
        "Diagrama esquemático lógico de rede (VLANs, IPs, Gateways)",
        "Memorial descritivo de materiais e especificações técnicas",
        "Guia remoto passo a passo de conectorização e identificação de portas",
        "Sessão de videoconferência para validação com o instalador local"
      ],
      icon: "git-merge"
    },

    // DESENVOLVIMENTO
    {
      id: "criacao-sites",
      title: "Criação de Sites e Landing Pages",
      category: "Desenvolvimento",
      slug: "criacao-sites.html",
      shortDesc: "Desenvolvimento de sites corporativos modernos, rápidos, responsivos e focados em alta conversão.",
      fullDesc: "Sua presença digital precisa transmitir a mesma robustez e credibilidade da sua operação. Desenvolvemos sites institucionais, páginas de alta conversão (landing pages) e portais corporativos com design premium, velocidade de carregamento ultrarrápida, SEO técnico avançado e total adaptação a telas de computadores, tablets e smartphones.",
      benefits: [
        "Posicionamento visual de autoridade que atrai e retém clientes",
        "Estrutura otimizada para os mecanismos de busca (Google SEO)",
        "Carregamento em milissegundos e código limpo",
        "Painel intuitivo para você gerenciar seus próprios conteúdos"
      ],
      deliverables: [
        "Design exclusivo adaptado à identidade visual da sua marca",
        "Implementação de formulários de captura e botão flutuante de WhatsApp",
        "Certificado de segurança SSL e otimização Core Web Vitals",
        "Configuração de métricas e rastreamento (Google Analytics / Tag Manager)"
      ],
      icon: "layout"
    },
    {
      id: "criacao-sistemas",
      title: "Desenvolvimento de Sistemas Web",
      category: "Desenvolvimento",
      slug: "criacao-sistemas.html",
      shortDesc: "Criação de sistemas web sob medida para automação de processos internos e ganho de produtividade.",
      fullDesc: "Elimine planilhas manuais e gargalos operacionais. Desenvolvemos sistemas corporativos em nuvem customizados para a realidade do seu fluxo de trabalho: painéis administrativos, controle de OS, gestão de estoque, portais de atendimento e automação de rotinas comerciais com arquitetura segura e escalável.",
      benefits: [
        "Acesso seguro de qualquer computador ou celular com internet",
        "Processos internos padronizados e sem erros manuais",
        "Automação de tarefas repetitivas economizando horas da equipe",
        "Totalmente integrável a outros sistemas via APIs modernas"
      ],
      deliverables: [
        "Levantamento detalhado de requisitos e prototipação de telas",
        "Desenvolvimento ágil com entregas incrementais testadas",
        "Banco de dados seguro com rotinas de backup automáticas",
        "Treinamento remoto da equipe e documentação do sistema"
      ],
      icon: "code"
    },
    {
      id: "portfolio",
      title: "Portfólio de Soluções e Projetos",
      category: "Desenvolvimento",
      slug: "blog.html#portfolio",
      shortDesc: "Estrutura pronta para visualização de arquiteturas, sistemas entregues e projetos de infraestrutura.",
      fullDesc: "Área dedicada a apresentar projetos técnicos realizados em clientes, modelos de infraestrutura remota implementados e sistemas customizados. Acompanhe na prática como ajudamos empresas a transformar desordem em estabilidade operacional.",
      benefits: [
        "Transparência técnica das soluções implementadas",
        "Inspiração para modernização da sua própria TI",
        "Demonstração prática de processos de auditoria e mitigação de riscos"
      ],
      deliverables: [
        "Casos de arquitetura de rede remota",
        "Estruturas de backup e contingência em nuvem",
        "Landing pages e sistemas corporativos em produção"
      ],
      icon: "layers"
    },

    // SUPORTE ESPECIALIZADO TI & JURÍDICO
    {
      id: "certificado-digital",
      title: "Certificado Digital para Advogados (e-CPF e e-CNPJ)",
      category: "Jurídico",
      slug: "suporte-advogados-sistemas-judiciais.html",
      shortDesc: "Instalação, validação, configuração de Token A3, leitoras e certificados em nuvem no Windows e Mac.",
      fullDesc: "Suporte remoto especializado na instalação de certificados digitais (e-CPF, e-CNPJ, Token A3, SmartCard e Certificados em Nuvem / NeoID / SafeID) para advogados e contadores. Configuramos cadeias de certificados da ICP-Brasil, drivers de leitoras e vinculação com os navegadores e assinadores digitais.",
      benefits: [
        "Configuração em minutos sem travar prazos processuais",
        "Compatibilização em sistemas Windows e Apple macOS",
        "Testes de assinatura digital na presença do cliente",
        "Suporte a tokens das principais certificadoras (Certisign, Serasa, OAB)"
      ],
      deliverables: [
        "Instalação e atualização de drivers de Token e leitoras de cartão",
        "Importação de cadeias de certificados e chaves públicas ICP-Brasil",
        "Configuração de assinadores digitais locais e extensões",
        "Validação de assinatura em petições de teste"
      ],
      icon: "key"
    },
    {
      id: "sistemas-judiciais",
      title: "Configuração Mac e Windows para Sistemas Judiciais",
      category: "Jurídico",
      slug: "suporte-advogados-sistemas-judiciais.html#sistemas",
      shortDesc: "Ajuste completo para PJE, ESAJ, PROJUDI, SEEU, EPROC, Shodô e PJeOffice sem erros de Java.",
      fullDesc: "Configuração remota minuciosa de computadores e MacBooks para acesso aos portais de tribunais de todo o Brasil (TRF, TJ, TRT, STJ, STF). Resolvemos incompatibilidades de Java, Shodô, PJeOffice, WebPKI, navegadores homologados e permissões de segurança para você nunca perder um prazo por falha técnica.",
      benefits: [
        "Eliminação de erros de carregamento do assinador nos tribunais",
        "Suporte completo para macOS (Safari, Chrome) e Windows 10/11",
        "Acesso simultâneo aos sistemas PJE, ESAJ, EPROC e PROJUDI",
        "Atendimento emergencial para prazos fatais"
      ],
      deliverables: [
        "Parametrização do PJeOffice, Shodô e certificados associados",
        "Configuração das versões corretas de Java e exceções de segurança",
        "Ajuste fino de navegadores (Chrome, Firefox, Edge, Safari)",
        "Validação de acesso e assinatura nos tribunais do cliente"
      ],
      icon: "scale"
    },
    {
      id: "treinamento-judiciais",
      title: "Treinamento para Uso dos Sistemas Judiciais",
      category: "Jurídico",
      slug: "suporte-advogados-sistemas-judiciais.html#treinamento",
      shortDesc: "Capacitação remota individual para advogados e secretárias no uso do PJE, ESAJ, EPROC e assinadores.",
      fullDesc: "Sessões remotas guiadas para advogados, estagiários e assistentes jurídicos. Ensinamos passo a passo como navegar nos sistemas dos tribunais, peticionar, anexar documentos dentro dos limites permitidos de MB e operar as ferramentas de assinatura digital sem receios.",
      benefits: [
        "Treinamento prático direto na tela do usuário",
        "Redução de dúvidas operacionais e erros de protocolo",
        "Aumento da velocidade de peticionamento da equipe",
        "Material de apoio e roteiro passo a passo fornecido"
      ],
      deliverables: [
        "Sessão remota assistida de peticionamento simulado",
        "Instruções para conferência e divisão de lotes de arquivos",
        "Esclarecimento de dúvidas sobre certificados e perfis",
        "Gravação ou roteiro explicativo das rotinas de acesso"
      ],
      icon: "graduation-cap"
    },
    {
      id: "edicao-midia-processos",
      title: "Edição e Compressão de PDF, Áudio, Vídeo e Imagens",
      category: "Jurídico",
      slug: "suporte-advogados-sistemas-judiciais.html#midia",
      shortDesc: "Compressão de PDFs para o limite dos tribunais, conversão e corte de áudios e vídeos para audiências.",
      fullDesc: "Muitos tribunais exigem arquivos em tamanhos específicos (ex: PDFs de até 10MB ou 30MB, formatos de vídeo MP4 e áudios MP3 específicos). Configuramos e auxiliamos remotamente no tratamento de mídias: redução de peso de PDFs sem perder nitidez, junção e separação de autos processuais e corte de trechos de áudio e vídeo de provas.",
      benefits: [
        "Garantia de que seus arquivos serão aceitos no portal do tribunal",
        "Ferramentas instaladas e parametrizadas na máquina do advogado",
        "Auxílio emergencial para arquivos pesados em dia de prazo",
        "Preservação da legibilidade e fidelidade das provas documentais"
      ],
      deliverables: [
        "Configuração de softwares locais de compressão e divisão de PDF",
        "Conversão e compactação de vídeos e áudios de audiências",
        "Otimização de resolução de imagens escaneadas",
        "Orientação remota imediata para envio de petições volumosas"
      ],
      icon: "file-text"
    },
    {
      id: "sites-governamentais",
      title: "Configurar Sites .gov, e-CAC, Conectividade Social e SEFAZ",
      category: "Governo",
      slug: "sistemas-governamentais-ecac-conectividade.html",
      shortDesc: "Ajuste remoto para e-CAC, Conectividade Social ICP, eSocial, Nota Fiscal, INSS e SEFAZ.",
      fullDesc: "Elimine de vez os erros de carregamento, plugins travados e certificados não reconhecidos nos portais governamentais e da Caixa Econômica Federal. Configuramos remotamente navegadores, emissão de Notas Fiscais eletrônicas, Conectividade Social ICP v2, e-CAC da Receita Federal, eSocial e portais SEFAZ estaduais.",
      benefits: [
        "Fim dos erros de 'perfil não compatível' ou 'certificado não encontrado'",
        "Emissão de Notas Fiscais e guias sem travamentos",
        "Ambiente estável para escritórios contábeis e financeiros",
        "Suporte a procurações eletrônicas e assinaturas digitais"
      ],
      deliverables: [
        "Configuração do Kriptonita e extensões da Conectividade Social",
        "Ajuste de compatibilidade para o portal e-CAC e Receita Federal",
        "Instalação e configuração de emissor de Nota Fiscal eletrônica (NF-e/NFS-e)",
        "Desbloqueio de pop-ups e regras de segurança para sites .gov.br"
      ],
      icon: "building"
    },
    {
      id: "webcam-microfone-audiencias",
      title: "Configuração de Webcam, Microfone e Videoconferência",
      category: "Produtividade",
      slug: "suporte-ti.html#videoconferencia",
      shortDesc: "Calibração remota de áudio e vídeo para audiências e reuniões no Teams, Google Meet, Zoom e LifeSize.",
      fullDesc: "Garantimos que sua voz e imagem estejam perfeitas antes de audiências judiciais, sustentações orais ou reuniões corporativas importantes. Diagnosticamos e ajustamos remotamente drivers de microfones, webcams integradas e USB, iluminação de câmera, cancelamento de ruído e permissões de acesso em aplicativos de videoconferência.",
      benefits: [
        "Áudio nítido e sem eco em audiências virtuais decisivas",
        "Resolução de problemas de 'câmera não encontrada' ou 'microfone mudo'",
        "Configuração homologada para Microsoft Teams, Zoom, Meet e LifeSize",
        "Teste prévio em tempo real com nosso especialista"
      ],
      deliverables: [
        "Ajuste de sensibilidade de microfone e cancelamento de eco",
        "Calibração de foco e resolução da webcam no Windows e macOS",
        "Permissões de privacidade de câmera e microfone no SO e navegador",
        "Sessão de teste e simulação de reunião antes do evento"
      ],
      icon: "mic"
    },
    {
      id: "configuracao-impressoras",
      title: "Configuração Remota de Impressoras e Scanners",
      category: "Infraestrutura",
      slug: "suporte-ti.html#impressoras",
      shortDesc: "Instalação remota de drivers, fila de impressão travada, Wi-Fi e digitalização em rede para PDF.",
      fullDesc: "Não sofra mais com impressoras em estado 'offline', spoolers de impressão corrompidos ou scanners que não digitalizam. Acessamos remotamente para instalar drivers oficiais, configurar impressoras via Wi-Fi ou rede cabeada, habilitar compartilhamento entre várias máquinas e configurar atalhos de digitalização direta para PDF.",
      benefits: [
        "Fim do spooler travado que impede novas impressões",
        "Digitalização rápida em alta qualidade com 1 clique para PDF",
        "Compartilhamento da mesma impressora com toda a equipe do escritório",
        "Compatibilidade com marcas líderes (HP, Epson, Brother, Canon)"
      ],
      deliverables: [
        "Instalação e reinstalação de drivers oficiais do fabricante",
        "Configuração de endereço IP fixo para impressoras em rede",
        "Limpeza de fila de impressão e reinicialização de serviços",
        "Configuração de pastas de destino para digitalização de documentos"
      ],
      icon: "printer"
    },
    {
      id: "instalacao-office",
      title: "Instalação e Configuração do Office em Mac e Windows",
      category: "Produtividade",
      slug: "suporte-microsoft-365.html#office",
      shortDesc: "Instalação, ativação e configuração do pacote Office (Word, Excel, Outlook, PowerPoint) no Windows e Mac.",
      fullDesc: "Instalamos e configuramos remotamente o pacote de aplicativos do Microsoft Office e Microsoft 365. Garantimos a ativação correta de licenças corporativas, configuração de contas de e-mail no Outlook, suplementos e compatibilidade perfeita em estações Windows e computadores Apple Mac.",
      benefits: [
        "Softwares originais e atualizados com segurança",
        "Outlook integrado ao e-mail corporativo e calendários",
        "Configuração de salvamento automático no OneDrive",
        "Resolução de erros de inicialização do Word ou Excel"
      ],
      deliverables: [
        "Download oficial e instalação dos aplicativos do Office",
        "Vinculação e ativação com a conta Microsoft 365 do cliente",
        "Configuração inicial de caixas postais e regras de mensagens",
        "Instalação de fontes corporativas e suplementos de trabalho"
      ],
      icon: "file-spreadsheet"
    },
    {
      id: "ativacao-windows",
      title: "Ativação e Regularização de Licenças Windows",
      category: "Infraestrutura",
      slug: "manutencao-computadores.html#ativacao",
      shortDesc: "Ativação remota oficial do Windows 10 e 11 Pro, remoção de alertas de licença e conformidade.",
      fullDesc: "Elimine avisos incômodos de 'Ativar o Windows' e desbloqueie todos os recursos de personalização e segurança corporativa. Orientamos e executamos remotamente a ativação de licenças genuínas digitais ou chaves de produto no Windows 10 e Windows 11 Pro/Enterprise.",
      benefits: [
        "Sistema operacional regularizado e elegível a todas as atualizações",
        "Eliminação de marcas d'água e mensagens de erro de expiração",
        "Conformidade com a legislação de propriedade intelectual de software",
        "Suporte à migração de Windows Home para Windows Pro"
      ],
      deliverables: [
        "Diagnóstico do status atual da licença via prompt administrativo",
        "Inserção e validação de chaves de produto genuínas",
        "Vinculação da licença digital à conta corporativa",
        "Relatório técnico de ativação para o cliente"
      ],
      icon: "check-circle"
    },
    {
      id: "formatacao-remota",
      title: "Restauração e Formatação Remota do Sistema Operacional",
      category: "Infraestrutura",
      slug: "manutencao-computadores.html#restauracao",
      shortDesc: "Restauração limpa assistida remotamente com backup prévio de dados, sem precisar levar à assistência.",
      fullDesc: "Substitua a tradicional 'formatação presencial' por uma restauração lógica remota assistida. Nossos especialistas realizam o backup seguro de todos os seus arquivos essenciais e conduzem remotamente a restauração de fábrica do Windows ou macOS, reconfigurando os softwares essenciais após a reinicialização.",
      benefits: [
        "Seu computador não sai do seu escritório ou residência",
        "Backup preventivo de documentos, fotos e certificados antes do processo",
        "Computador restaurado com desempenho de recém-saído da caixa",
        "Reinstalação remota de todos os seus navegadores e aplicativos de trabalho"
      ],
      deliverables: [
        "Cópia de segurança de pastas de usuário, certificados e favoritos",
        "Iniciação assistida do processo de restauração limpa do SO",
        "Reconexão pós-restauração para instalação de drivers e antivírus",
        "Devolução de dados restaurados para seus devidos diretórios"
      ],
      icon: "refresh-cw"
    },
    {
      id: "configuracao-roteador-remoto",
      title: "Configuração Remota de Roteador e Wi-Fi Corporativo",
      category: "Infraestrutura",
      slug: "suporte-redes.html#roteador",
      shortDesc: "Ajuste remoto de nome de rede, senha forte, portas de acesso, canal de Wi-Fi e controle parental.",
      fullDesc: "Não precisa pagar visita de técnico apenas para mexer no roteador. Acessamos remotamente o painel de administração do seu modem/roteador para alterar senhas com segurança, separar redes de visitantes (Wi-Fi Guest), fechar portas vulneráveis e ajustar frequências 2.4GHz e 5GHz para acabar com a lentidão.",
      benefits: [
        "Segurança reforçada contra vizinhos ou invasores na sua rede Wi-Fi",
        "Isolamento da rede interna dos clientes e visitantes do escritório",
        "Maior alcance e velocidade de sinal em todos os cômodos",
        "Sem cobrança de taxa de deslocamento técnico"
      ],
      deliverables: [
        "Alteração remota de senhas administrativas e chaves WPA2/WPA3",
        "Criação de rede Wi-Fi separada para visitantes",
        "Ajuste de largura de banda e canais menos congestionados",
        "Backup do arquivo de configuração do roteador para restauração rápida"
      ],
      icon: "wifi"
    },
    {
      id: "compartilhamento-arquivos",
      title: "Compartilhamento Seguro de Arquivos em Rede",
      category: "Infraestrutura",
      slug: "suporte-servidores.html#compartilhamento",
      shortDesc: "Mapeamento de pastas compartilhadas entre computadores, permissões por usuário e acesso em rede local.",
      fullDesc: "Compartilhe pastas e documentos entre computadores do mesmo escritório com agilidade e níveis corretos de permissão. Configuramos remotamente compartilhamentos SMB, unidades de rede mapeadas (ex: disco Z:), pastas públicas e pastas restritas para a diretoria, evitando que dados sigilosos fiquem visíveis a todos.",
      benefits: [
        "Centralização dos documentos de trabalho em um único local",
        "Permissões diferenciadas para financeiro, diretoria e operacional",
        "Fim do envio de planilhas pesadas por e-mail entre colegas",
        "Segurança contra alterações ou exclusões acidentais"
      ],
      deliverables: [
        "Criação e parametrização de compartilhamentos de rede com senha",
        "Mapeamento automático de unidades de rede nos computadores da equipe",
        "Definição de permissões de leitura, gravação e bloqueio por usuário",
        "Testes de acesso e integridade de arquivos em rede local"
      ],
      icon: "share-2"
    },
    {
      id: "cadastramento-sistemas",
      title: "Cadastramento e Gestão de Usuários em Sistemas",
      category: "Produtividade",
      slug: "suporte-ti.html#cadastramento",
      shortDesc: "Criação de novos acessos, permissões em ERP/CRM, desligamento seguro de contas e parametrizações.",
      fullDesc: "Quando um novo funcionário é contratado ou desligado da empresa, realizamos remotamente todo o onboarding e offboarding tecnológico: criação de e-mail corporativo, liberação de senhas no sistema interno (ERP/CRM), configuração do computador e revogação imediata de acessos quando necessário.",
      benefits: [
        "Novo colaborador pronto para trabalhar desde o primeiro dia",
        "Desligamento seguro e bloqueio imediato para proteção de dados",
        "Controle rigoroso de perfis e acessos concedidos",
        "Padronização dos processos internos da empresa"
      ],
      deliverables: [
        "Criação de contas de e-mail e acessos a ferramentas corporativas",
        "Parametrização de níveis de permissão em sistemas internos",
        "Roteiro de boas-vindas com dados de acesso para o colaborador",
        "Revogação e expurgo seguro de credenciais em desligamentos"
      ],
      icon: "user-check"
    }
  ],

  // 4 Planos Estruturados
  plans: [
    {
      id: "essencial",
      name: "ESSENCIAL",
      tagline: "Para pequenos negócios que precisam de suporte rápido quando necessário.",
      badge: null,
      priceStarting: "A partir de R$ 390",
      period: "/mês",
      billingType: "por Empresa / até 5 computadores",
      highlight: false,
      ctaText: "CONTRATAR PLANO ESSENCIAL",
      ctaLink: "#contato",
      features: [
        "Suporte técnico 100% remoto",
        "Atendimento ágil via WhatsApp e chamado",
        "Suporte a Windows, softwares e navegadores",
        "Resolução de erros de e-mail e internet",
        "Configuração de contas de usuários e senhas",
        "Diagnóstico de rede e Wi-Fi",
        "Suporte básico a Microsoft 365 e Google Workspace",
        "Histórico detalhado de atendimentos no portal",
        "Horário comercial (Segunda a Sexta, 08h às 18h)"
      ],
      notIncluded: [
        "Monitoramento proativo 24/7",
        "Gestão de servidores e Active Directory",
        "Rotinas preventivas programadas"
      ]
    },
    {
      id: "profissional",
      name: "PROFISSIONAL",
      tagline: "Para empresas que dependem da tecnologia todos os dias e não podem parar.",
      badge: "MAIS CONTRATADO",
      priceStarting: "A partir de R$ 890",
      period: "/mês",
      billingType: "Empresas com até 15 computadores",
      highlight: true,
      ctaText: "CONTRATAR PLANO PROFISSIONAL",
      ctaLink: "#contato",
      features: [
        "Tudo incluído no Plano ESSENCIAL",
        "Prioridade alta de atendimento com SLA reduzido",
        "Manutenção preventiva periódica remota em todas as máquinas",
        "Monitoramento contínuo de saúde e telemetria de computadores",
        "Suporte e administração de Servidores (Windows / Linux)",
        "Gestão remota de Redes, Roteadores e VPNs corporativas",
        "Gestão de Segurança e Antivírus Corporativo gerenciado",
        "Configuração e validação periódica de Backup em Nuvem",
        "Administração avançada de Microsoft 365 e Google Workspace",
        "Inventário completo de ativos e equipamentos",
        "Relatórios mensais de chamados e saúde da infraestrutura",
        "Documentação técnica da rede corporativa"
      ],
      notIncluded: [
        "Reuniões periódicas estratégicas de TI (exclusivo Empresa 360)",
        "Administração de múltiplos servidores simultâneos (exclusivo Empresa 360)"
      ]
    },
    {
      id: "empresa-360",
      name: "EMPRESA 360",
      tagline: "O plano mais completo e avançado: máxima cobertura, múltiplos servidores, monitoramento 24/7 e gestão executiva contínua.",
      badge: "MAIS COMPLETO",
      priceStarting: "A partir de R$ 1.890",
      period: "/mês",
      billingType: "Operações corporativas robustas / Sem limite de servidores",
      highlight: false,
      ctaText: "CONTRATAR PLANO EMPRESA 360",
      ctaLink: "#contato",
      features: [
        "Tudo incluído no Plano PROFISSIONAL (com prioridade máxima)",
        "SLA Crítico com atendimento prioritário multinível N1, N2 e N3",
        "Canal direto executivo com especialista sênior dedicado",
        "Monitoramento proativo contínuo 24/7 de todos os computadores, rede e servidores",
        "Suporte e administração completa de Múltiplos Servidores (Windows, Linux e Nuvem)",
        "Disaster Recovery com testes periódicos de restauração e integridade de backup",
        "Gestão total de segurança cibernética, firewall corporativo e VPNs matriz/filiais",
        "Auditorias periódicas de segurança, análise de vulnerabilidades e controle de acessos",
        "Gestão centralizada e governança de inventário de licenças e softwares",
        "Administração avançada de tenants corporativos Microsoft 365 e Google Workspace",
        "Documentação técnica completa e diagramas lógicos de rede sempre atualizados",
        "Painel executivo com indicadores de disponibilidade, desempenho e incidentes",
        "Reuniões periódicas estratégicas de planejamento e alinhamento de TI",
        "Consultoria técnica contínua para homologação de novos softwares e links"
      ],
      notIncluded: []
    },
    {
      id: "sob-demanda",
      name: "SOB DEMANDA",
      tagline: "Para quem precisa de solução imediata sem vínculo de mensalidade.",
      badge: "AVULSO",
      priceStarting: "A partir de R$ 150",
      period: "/atendimento",
      billingType: "Por chamado ou pacote de horas",
      highlight: false,
      ctaText: "SOLICITAR SUPORTE AGORA",
      ctaLink: "iniciar-suporte.html",
      features: [
        "Atendimento técnico avulso sem contrato mensal",
        "Diagnóstico imediato do problema na tela",
        "Correção de lentidão, vírus, erros de e-mail ou sistema",
        "Configuração de computadores, periféricos ou VPN",
        "Acesso remoto autorizado e seguro",
        "Você acompanha tudo em tempo real na sua tela",
        "Pagamento por atendimento resolvido ou pacote de horas",
        "Emissão de Nota Fiscal de serviços e relatório de atendimento"
      ],
      notIncluded: [
        "SLA garantido em horários de pico",
        "Manutenção preventiva e monitoramento contínuo",
        "Inventário de computadores"
      ]
    }
  ],

  // Tabela Comparativa de SLA
  slaTable: [
    {
      level: "Crítico",
      class: "badge-critico",
      description: "Servidor inoperante, rede principal fora do ar, interrupção total das atividades da empresa",
      tempoResposta: "Até 30 minutos",
      tempoAtendimento: "Atendimento imediato e contínuo"
    },
    {
      level: "Alto",
      class: "badge-alto",
      description: "Colaborador-chave inoperante, falha generalizada de e-mail, sistema de faturamento com erro",
      tempoResposta: "Até 1 hora",
      tempoAtendimento: "Atendimento prioritário"
    },
    {
      level: "Médio",
      class: "badge-medio",
      description: "Computador lento, problema em impressora, falha pontual de aplicativo com solução alternativa",
      tempoResposta: "Até 2 horas",
      tempoAtendimento: "Atendimento padrão em fila"
    },
    {
      level: "Baixo",
      class: "badge-baixo",
      description: "Criação de novos usuários, instalação de softwares secundários, dúvidas e melhorias",
      tempoResposta: "Até 4 horas",
      tempoAtendimento: "Atendimento agendado/programado"
    }
  ],

  // 20+ Perguntas e Respostas no FAQ
  faqs: [
    {
      q: "O suporte remoto é realmente seguro?",
      a: "Sim, absolutamente. O atendimento é realizado exclusivamente através de softwares profissionais homologados de conexão criptografada (TLS de 256 bits). Nenhuma conexão pode ser iniciada sem que você expressamente forneça o código de acesso e autorize a sessão na sua tela."
    },
    {
      q: "O técnico consegue acessar meu computador sem a minha autorização?",
      a: "Não. Em nosso modelo operacional para suporte, cada sessão exige a geração de um código aleatório e temporário pelo seu programa, além do seu clique de confirmação. Assim que você encerra a chamada, o canal de acesso é completamente fechado."
    },
    {
      q: "Eu consigo acompanhar o que o técnico está fazendo no meu computador?",
      a: "Sim. A sessão é 100% visível: você acompanha a movimentação do mouse, janelas abertas e comandos executados em tempo real na sua própria tela. Não há operações invisíveis ou ocultas."
    },
    {
      q: "Posso encerrar a conexão a qualquer momento?",
      a: "Sim. O controle final é sempre seu. Basta clicar no botão 'Desconectar' ou fechar a janela da ferramenta de acesso remoto para cortar o atendimento imediatamente."
    },
    {
      q: "Preciso instalar algum programa pesado para receber o suporte?",
      a: "Não. As ferramentas homologadas que utilizamos (como AnyDesk ou TeamViewer QuickSupport) funcionam de forma leve e direta, podendo ser executadas em segundos sem necessidade de instalação complexa."
    },
    {
      q: "Quais sistemas operacionais são atendidos pelo suporte da ANECTTA?",
      a: "Somos especialistas 100% dedicados e focados no ecossistema Microsoft Windows (Windows 10, Windows 11 e Windows Server), garantindo máxima proficiência, segurança e agilidade no diagnóstico e resolução remota."
    },
    {
      q: "Vocês atendem empresas de qualquer cidade ou estado?",
      a: "Sim. Como nossa operação é 100% remota, atendemos com a mesma velocidade e qualidade empresas em qualquer cidade do Brasil e filiais no exterior, bastando que o computador tenha conexão com a internet."
    },
    {
      q: "Vocês atendem servidores corporativos à distância?",
      a: "Sim. Realizamos administração remota de servidores Windows Server e Linux, gerenciamento de Active Directory, DNS, DHCP, permissões de pastas, Hyper-V, VMware e serviços de banco de dados."
    },
    {
      q: "Vocês conseguem resolver problemas de internet e Wi-Fi remotamente?",
      a: "Sim. Através de um computador conectado na sua rede (ou via roteamento secundário/4G), acessamos a interface administrativa do seu modem, roteador, switch e firewall para diagnosticar quedas de sinal, lentidão, conflitos de IP e instabilidades no provedor."
    },
    {
      q: "Vocês configuram e administram o Microsoft 365?",
      a: "Sim. Configuramos contas corporativas, caixas compartilhadas, regras de e-mail no Outlook, migração de mensagens, Teams, SharePoint, OneDrive e políticas de segurança no painel administrativo do Microsoft 365."
    },
    {
      q: "Vocês trabalham com Google Workspace corporativo?",
      a: "Sim. Realizamos a gestão de usuários no painel do Google Workspace, configuração de Gmail com domínio próprio, SPF/DKIM/DMARC, permissões no Google Drive e segurança de acesso."
    },
    {
      q: "Vocês realizam backup em nuvem?",
      a: "Sim. Configuramos e monitoramos rotinas de backup criptografado automático de pastas críticas, bancos de dados e imagens de servidores para repositórios em nuvem seguros, realizando testes de restauração periódicos."
    },
    {
      q: "Vocês removem vírus, malwares e spywares?",
      a: "Sim. Realizamos varreduras com ferramentas avançadas, eliminação de malwares, adwares, trojans e sequestradores de navegador, além de restaurar as configurações de segurança do sistema operacional."
    },
    {
      q: "Vocês configuram VPN para trabalho remoto seguro?",
      a: "Sim. Implementamos e configuramos túneis de VPN corporativa criptografada (OpenVPN, WireGuard, IPsec) para que colaboradores em home office acessem os servidores da empresa com total segurança."
    },
    {
      q: "Vocês atendem pequenas e médias empresas?",
      a: "Sim, somos especialistas em atender desde escritórios com 3 a 5 computadores até empresas de médio porte com dezenas de colaboradores e infraestrutura distribuída."
    },
    {
      q: "Como funciona o contrato mensal de suporte?",
      a: "No contrato mensal, sua empresa paga uma mensalidade fixa previsível e conta com franquia ilimitada ou pacote de horas, prioridade no atendimento, manutenção preventiva programada e monitoramento de ativos."
    },
    {
      q: "Posso contratar apenas um atendimento avulso sem mensalidade?",
      a: "Sim! Disponibilizamos a modalidade 'Sob Demanda' para resolução de problemas pontuais e urgentes, com pagamento avulso por chamado ou pacote de horas."
    },
    {
      q: "Existe fidelidade contratual nos planos mensais?",
      a: "Nossos contratos padrão são desenhados com flexibilidade. Acreditamos na fidelização pela qualidade do serviço prestado, com prazos e condições transparentes pactuados previamente."
    },
    {
      q: "Como funciona o SLA (Acordo de Nível de Serviço)?",
      a: "Classificamos cada chamado pelo nível de impacto na sua operação (Crítico, Alto, Médio e Baixo). O tempo máximo para início do diagnóstico é determinado formalmente de acordo com a criticidade contratada."
    },
    {
      q: "O que acontece se a internet do computador tiver caído totalmente?",
      a: "Se uma máquina específica perdeu a conexão com o roteador, nossa equipe orienta o colaborador por telefone ou WhatsApp com procedimentos de teste lógico, ou conectamos temporariamente via roteamento 4G do celular para diagnosticar e restaurar a placa de rede."
    }
  ],

  // Ferramentas Homologadas para Acesso Remoto Oficial
  remoteTools: [
    {
      name: "AnyDesk",
      badge: "Mais Rápido",
      desc: "Ferramenta leve e veloz para suporte imediato em computadores e servidores Windows.",
      instructions: "Baixe o executável, abra o arquivo e informe ao nosso técnico o número de 9 ou 10 dígitos que aparece na tela inicial.",
      downloadUrl: "https://anydesk.com/pt/downloads",
      directUrlWin: "https://anydesk.com/pt/downloads/windows",
      directUrlMac: "https://anydesk.com/pt/downloads/mac-os",
      logo: "anydesk"
    },
    {
      name: "TeamViewer QuickSupport",
      badge: "Corporativo",
      desc: "Módulo leve sem necessidade de instalação para suporte empresarial.",
      instructions: "Baixe o aplicativo TeamViewer QuickSupport, execute-o e envie para o técnico o 'Sua ID' e a 'Senha' temporária exibidos.",
      downloadUrl: "https://www.teamviewer.com/pt-br/download/",
      directUrlWin: "https://www.teamviewer.com/pt-br/download/windows/",
      directUrlMac: "https://www.teamviewer.com/pt-br/download/mac-os/",
      logo: "teamviewer"
    },
    {
      name: "RustDesk",
      badge: "Open Source Seguro",
      desc: "Solução de acesso remoto moderna com criptografia de ponta a ponta.",
      instructions: "Execute a ferramenta e forneça a ID temporária para estabelecimento do túnel encriptado.",
      downloadUrl: "https://rustdesk.com/",
      directUrlWin: "https://github.com/rustdesk/rustdesk/releases",
      directUrlMac: "https://github.com/rustdesk/rustdesk/releases",
      logo: "rustdesk"
    }
  ],

  // Artigos Técnicos do Blog
  blogPosts: [
    {
      id: "por-que-suporte-remoto-supera-tecnico-presencial",
      title: "Por que as empresas estão trocando a visita do técnico pelo Suporte 100% Remoto",
      category: "Suporte de TI",
      date: "02 de Setembro, 2026",
      readTime: "5 min de leitura",
      slug: "blog.html#post-1",
      excerpt: "Entenda como a eliminação do tempo de deslocamento físico reduz o tempo de inatividade da sua equipe em até 85% e corta custos corporativos.",
      content: "No modelo tradicional, quando um computador para, a empresa entra em uma fila: precisa agendar uma visita, esperar o técnico enfrentar o trânsito e pagar uma taxa cara de deslocamento. Enquanto isso, o colaborador fica ocioso. No modelo de Central de Operações Remota, o diagnóstico começa em minutos via acesso autorizado..."
    },
    {
      id: "guia-seguranca-acesso-remoto-lgpd",
      title: "Segurança no Acesso Remoto: Como proteger os dados da sua empresa e cumprir a LGPD",
      category: "Segurança",
      date: "28 de Agosto, 2026",
      readTime: "7 min de leitura",
      slug: "blog.html#post-2",
      excerpt: "Acesso autorizado, criptografia TLS 256 bits e princípio do menor privilégio: saiba como o suporte remoto sério protege sua privacidade.",
      content: "Muitos gestores ainda têm receio de permitir acesso remoto a computadores corporativos por desconhecerem como funcionam as tecnologias homologadas. O acesso profissional nunca é invasivo: depende de token temporário, autorização ativa na tela pelo usuário e encerramento com 1 clique..."
    },
    {
      id: "microsoft-365-erros-comuns-configuracao",
      title: "5 Erros Críticos na Configuração do Microsoft 365 que geram prejuízo para empresas",
      category: "Microsoft 365",
      date: "15 de Agosto, 2026",
      readTime: "6 min de leitura",
      slug: "blog.html#post-3",
      excerpt: "Descubra como licenças ociosas, falta de MFA e má configuração de DNS (SPF/DKIM) derrubam a entregabilidade dos seus e-mails de vendas.",
      content: "O Microsoft 365 é uma suíte poderosa, mas frequentemente subutilizada e mal configurada. Sem apontamentos corretos de autenticação de e-mail, as propostas comerciais da sua empresa caem no SPAM dos clientes. Veja como nossa gestão remota resolve isso..."
    },
    {
      id: "backup-regra-3-2-1-nuvem",
      title: "Ransomware em Servidores: Como a Regra de Backup 3-2-1 salva sua empresa",
      category: "Backup",
      date: "04 de Agosto, 2026",
      readTime: "8 min de leitura",
      slug: "blog.html#post-4",
      excerpt: "Ter apenas um HD externo plugado não é backup seguro. Entenda como implementar cópias imutáveis em nuvem para blindar seus dados.",
      content: "Se o seu backup está conectado permanentemente na mesma rede física em um pen drive ou HD externo, no momento em que um vírus criptografar o servidor, ele também destruirá o backup. A regra 3-2-1 garante que você sempre tenha cópias externas inacessíveis ao invasor..."
    }
  ],

  // Problemas Reais do Bloco Interativo
  problemCards: [
    { title: "Meu computador está lento", icon: "gauge", category: "computador" },
    { title: "Meu sistema não abre", icon: "alert-circle", category: "sistema" },
    { title: "A internet caiu ou oscila", icon: "wifi-off", category: "rede" },
    { title: "O Wi-Fi está instável", icon: "wifi", category: "rede" },
    { title: "Meu e-mail não funciona", icon: "mail", category: "email" },
    { title: "Não consigo acessar arquivos na rede", icon: "folder-x", category: "rede" },
    { title: "Meu Microsoft 365 com erros", icon: "boxes", category: "produtividade" },
    { title: "Vírus ou comportamento estranho", icon: "bug", category: "seguranca" },
    { title: "Meu servidor apresenta falhas", icon: "server", category: "servidor" },
    { title: "Preciso configurar uma VPN", icon: "key", category: "seguranca" },
    { title: "Minha impressora não funciona", icon: "printer", category: "periferico" },
    { title: "Preciso configurar um novo usuário", icon: "user-plus", category: "sistema" },
    { title: "Meu backup não está funcionando", icon: "database", category: "seguranca" },
    { title: "Preciso migrar minhas contas de e-mail", icon: "shuffle", category: "email" },
    { title: "Preciso organizar minha rede corporativa", icon: "git-commit", category: "rede" },
    { title: "Quero monitorar os computadores da equipe", icon: "activity", category: "gestao" }
  ]
};

// Exporta globalmente para os outros scripts
if (typeof window !== "undefined") {
  window.ANECTTA_DATA = ANECTTA_DATA;
}
