📚 Documentação Técnica
Projeto: Website DS Afwerking
1. Visão Geral da Arquitetura

O website é composto por duas partes principais:

1️⃣ Frontend (site público)
2️⃣ Backend (API de envio de formulário)

Arquitetura simplificada:

Usuário
   │
   ▼
Frontend (HTML / CSS / JS)
   │
   ▼
API Backend (Node.js - Render)
   │
   ▼
Serviço de Email (Resend)
   │
   ▼
Email do cliente (Gmail)
2. Tecnologias Utilizadas
Frontend

Tecnologias usadas no site:

Tecnologia	Função
HTML5	Estrutura da página
CSS3	Estilização
JavaScript	Interações
Bootstrap 5	Layout responsivo
Bootstrap Icons	Ícones
AOS.js	Animações ao scroll
Google Fonts	Tipografia (Poppins)
Estrutura do frontend
/
index.html

/assets
   /css
      main.css
   /js
      main.js
   /img
3. Hospedagem do Frontend

O site é hospedado na Hostinger.

Domínio
dsafwerking.com
Estrutura no servidor

No Hostinger, o site fica em:

public_html

Arquivos enviados:

public_html
│
├── index.html
│
└── assets/
    ├── css/
    ├── js/
    └── img/
Observação

O site não utiliza WordPress.
Ele é um site estático puro.

4. Backend (API do Formulário)

O backend foi criado para processar o formulário de contato.

Ele recebe os dados enviados pelo frontend e envia um email para o cliente.

Tecnologia
Tecnologia	Função
Node.js	Runtime JavaScript
Express.js	Framework API
Render	Hospedagem do backend
5. Estrutura do Backend

Projeto Node:

backend/

server.js
package.json
.env
Dependências

Exemplo:

express
cors
resend
dotenv
6. Endpoint da API

Endpoint principal:

POST /api/contact

Exemplo de request:

{
 "name": "John Doe",
 "email": "john@email.com",
 "subject": "Offerte",
 "message": "Ik wil graag een offerte."
}

Resposta esperada:

{
 "success": true
}
7. Envio de Email (Resend)

O envio de email é feito via Resend API.

Serviço utilizado
https://resend.com

Resend permite enviar emails via API sem configurar SMTP manualmente.

Variáveis de ambiente

No Render:

MAIL_TO=ds.afwerking@gmail.com
RESEND_API_KEY=xxxxxx
8. Fluxo do Formulário

1️⃣ Usuário preenche formulário no site

2️⃣ JavaScript captura os dados

fetch("https://ds-afwerking-backend.onrender.com/api/contact")

3️⃣ API Node recebe os dados

4️⃣ Backend usa Resend API para enviar email

5️⃣ Cliente recebe email no Gmail

9. Hospedagem do Backend

O backend está hospedado no:

Render.com

URL da API:

https://ds-afwerking-backend.onrender.com

Endpoint:

https://ds-afwerking-backend.onrender.com/api/contact
10. Deploy do Backend

Deploy é feito via GitHub.

Fluxo:

Local Development
       │
       ▼
Git Commit
       │
       ▼
GitHub Repository
       │
       ▼
Render Deploy automático

Quando um push é feito no GitHub:

git push

O Render automaticamente faz:

build
deploy
restart da API
11. Deploy do Frontend

O frontend é enviado manualmente via:

Hostinger File Manager

Arquivos enviados:

index.html
assets/
12. Recursos Visuais do Site

O site possui diversos recursos de UX.

Scroll Animations

Biblioteca:

AOS.js

Exemplo:

data-aos="fade-up"
data-aos="zoom-in"
Contadores Animados

JavaScript usado para animação:

data-target="5"

Anima contadores estatísticos.

Botão WhatsApp Flutuante

Botão fixo com:

position: fixed

Possui:

animação de pulso

abertura direta do WhatsApp

13. Formulário de Contato

Campos:

Nome
Email
Subject
Mensagem

Envio via:

fetch()
POST request

Exemplo:

fetch("https://ds-afwerking-backend.onrender.com/api/contact", {
 method:"POST",
 headers:{
  "Content-Type":"application/json"
 },
 body:JSON.stringify(payload)
})
14. Segurança

O backend utiliza:

variáveis de ambiente

API Key protegida

CORS habilitado

15. Melhorias Futuras

Possíveis melhorias:

SEO

Adicionar:

meta tags
OpenGraph
Schema
Performance

Otimizar:

imagens
lazy loading
compressão
Analytics

Adicionar:

Google Analytics
Google Search Console
Deploy Automatizado

Automatizar:

GitHub → Hostinger

para não precisar subir arquivos manualmente.

16. Manutenção do Projeto

Para atualizar o backend:

git add .
git commit -m "update"
git push

Render faz deploy automático.

Para atualizar frontend:

Enviar arquivos via Hostinger File Manager.

17. Responsável Técnico

Projeto desenvolvido utilizando:

HTML

CSS

JavaScript

Node.js

Express

Resend

Render

Hostinger

🚀 Resultado Final

Sistema completo composto por:

Frontend
↓
Hostinger
↓
Backend API
↓
Render
↓
Email Service
↓
Resend
↓
Cliente recebe email
