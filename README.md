# ANECTTA — Central de Operações de TI Remota

> **Sua TI resolvida. Sem esperar um técnico chegar.**  
> Plataforma web corporativa para suporte técnico especializado 100% remoto para empresas e profissionais de todo o Brasil.

---

## 🚀 Sobre o Projeto

A **ANECTTA** opera uma central técnica com atendimento remoto de alta agilidade, voltada para:
* **Pequenas e Médias Empresas:** Suporte continuado, manutenção preventiva, contratos mensais e gestão de inventário.
* **Escritórios Jurídicos e Contábeis:** Suporte especializado a certificados digitais (A1/A3), sistemas judiciais (PJe, ESAJ, Projudi) e portais fiscais/governamentais (e-CAC, Conectividade Social ICP, eSocial).
* **Infraestrutura Corporativa:** Administração remota de Windows Server, Linux, redes, VPNs matriz/filial, firewall e backup imutável em nuvem.
* **Produtividade em Nuvem:** Implementação e governança de Microsoft 365 e Google Workspace.

---

## 🛠️ Stack Tecnológica

* **Frontend:** HTML5 semântico, JavaScript ES6+ modular, CSS3 moderno (Custom Properties e BEM-like).
* **Estilização & Design:** Tailwind CSS + design corporativo clean tech em tema claro (`styles.css` e `speedtest.css`).
* **Telemetria de Rede:** NetPulse Engine v5.0 (`speedtest.js`), com medição multi-stream concorrente de download/upload, latência, jitter RFC 3550 e perda de pacotes via Edge Anycast Cloudflare e geolocalização.
* **Roteamento & Deploy:** Configurado para URLs amigáveis na Vercel (`vercel.json`) e Apache (`.htaccess`).

---

## 📁 Estrutura de Arquivos

```text
├── index.html                                     # Landing page principal e portal de entrada
├── planos.html                                    # Planos de atendimento e tabela comparativa
├── teste-velocidade.html                          # Console de telemetria e velocímetro de rede
├── iniciar-suporte.html                           # Wizard de solicitação emergencial de suporte
├── area-do-cliente.html                           # Portal de autoatendimento e chamados
├── admin.html                                     # Console de gestão administrativa
├── blog.html                                      # Hub de artigos e boas práticas de TI
├── [18 páginas de serviços específicos]           # Landing pages temáticas de SEO
├── assets/
│   ├── css/                                       # Folhas de estilo do projeto
│   ├── js/                                        # Módulos JavaScript da aplicação
│   ├── images/                                    # Identidade visual, logos e selos
│   └── videos/                                    # Mídias e vídeos
├── vercel.json                                    # Configuração de deploy da Vercel
├── .htaccess                                      # Configuração de reescrita Apache
└── package.json                                   # Manifesto do projeto
```

---

## 💻 Execução Local

Como a aplicação é estática, pode ser executada por qualquer servidor local:

```bash
# Opção 1: Via npx serve
npx serve .

# Opção 2: Via Python
python -m http.server 3000

# Opção 3: Via PHP
php -S localhost:3000
```

Acesse em seu navegador: `http://localhost:3000` (ou na porta informada pelo terminal).

---

## ☁️ Deploy em Produção

### Vercel (Recomendado)
O repositório já inclui o arquivo `vercel.json` com reescrita de URLs limpas (`cleanUrls: true`).  
Basta conectar o repositório GitHub diretamente no painel da Vercel.

### Apache / Nginx
O arquivo `.htaccess` na raiz gerencia as reescritas de URL para Apache com `mod_rewrite` ativo.

---

## 📄 Licença e Propriedade

Copyright © ANECTTA — Central de Operações de TI Remota. Todos os direitos reservados.
