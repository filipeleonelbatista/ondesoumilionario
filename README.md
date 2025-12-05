# 💰 Onde Sou Milionário?

Uma aplicação web divertida e interativa que converte seu salário mensal para diferentes moedas e mostra em quais países você já é milionário!

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Índice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Configuração](#-configuração)
- [API e Fallback](#-api-e-fallback)
- [Traduções](#-traduções)
- [Dark Mode](#-dark-mode)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

## 🎯 Sobre

**Onde Sou Milionário?** é uma ferramenta divertida que permite descobrir em quais países você já é milionário com base no seu salário mensal. A aplicação converte seu salário para mais de 170 moedas diferentes e identifica automaticamente onde você alcançou o status de milionário!

### Por que usar?

- 🎉 **Divertido**: Descubra sua "riqueza global" de forma descontraída
- 🌍 **Global**: Suporta mais de 170 moedas de diferentes países
- 💡 **Educativo**: Aprenda sobre diferentes moedas e taxas de câmbio
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🌙 **Dark Mode**: Interface adaptável com modo claro e escuro
- 🌐 **Multi-idioma**: Disponível em Português, Inglês e Espanhol

## ✨ Funcionalidades

### Principais

- ✅ **Conversão em Tempo Real**: Converte seu salário para mais de 170 moedas
- ✅ **Identificação de Milionários**: Mostra automaticamente onde você é milionário
- ✅ **Cards Animados**: Visualização em cards dos países onde você é milionário
- ✅ **Estatísticas Detalhadas**: 
  - Quantos países onde você é milionário
  - País onde seu salário vale mais
  - Total de moedas onde você é milionário
- ✅ **Hero Section Animada**: Interface moderna e atrativa
- ✅ **Máscara de Dinheiro**: Input formatado automaticamente com símbolo da moeda
- ✅ **Fallback Completo**: Funciona mesmo sem conexão com a API

### Recursos Adicionais

- 🌙 **Dark/Light Mode**: Toggle para alternar entre temas
- 🌐 **Multi-idioma**: Português (pt-BR), Inglês (en) e Espanhol (es)
- 📱 **Responsivo**: Design adaptável para todos os dispositivos
- 🎨 **Animações**: Elementos animados para melhor experiência
- 📤 **Compartilhamento Social**: Botões para compartilhar no Twitter, Facebook, WhatsApp e LinkedIn
- 🔍 **SEO Otimizado**: Meta tags completas para melhor indexação
- 💾 **LocalStorage**: Salva preferências de idioma e tema

## 🛠️ Tecnologias

A aplicação foi construída usando apenas tecnologias web básicas, sem dependências externas:

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com variáveis CSS, animações e gradientes
- **JavaScript (Vanilla)**: Lógica pura sem frameworks
- **API Externa**: exchangerate.host para taxas de câmbio em tempo real
- **LocalStorage**: Para salvar preferências do usuário

## 🚀 Como Usar

### Uso Local

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Digite seu salário mensal
4. Selecione a moeda base
5. Clique em "Verificar"
6. Veja os resultados em cards animados!

### Uso Online

Basta acessar a URL onde a aplicação está hospedada e seguir os mesmos passos acima.

## 📁 Estrutura do Projeto

```
ondesoumilionario/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e animações CSS
├── script.js           # Lógica JavaScript
├── README.md          # Este arquivo
└── BANNERS.md         # Instruções para criar banners
```

### Arquivos Principais

- **index.html**: Contém toda a estrutura HTML, meta tags para SEO e elementos da interface
- **styles.css**: Todos os estilos, animações, variáveis CSS e responsividade
- **script.js**: Toda a lógica da aplicação, incluindo:
  - Sistema de tradução (i18n)
  - Gerenciamento de tema (dark/light)
  - Integração com API
  - Fallback de dados
  - Máscara de dinheiro
  - Renderização de cards

## ⚙️ Configuração

### API Key

A aplicação usa a API do exchangerate.host. Para configurar sua própria chave:

1. Obtenha uma chave de API em [exchangerate.host](https://exchangerate.host)
2. Edite o arquivo `script.js`
3. Localize a constante `API_KEY` (linha ~84)
4. Substitua pela sua chave:

```javascript
const API_KEY = 'sua-chave-aqui';
```

### Fallback

A aplicação inclui um sistema de fallback completo com dados estáticos de mais de 170 moedas. Se a API falhar, os dados do fallback serão usados automaticamente.

Os dados do fallback são de **5 de dezembro de 2025** e serão exibidos quando a API não estiver disponível.

## 🔌 API e Fallback

### API Principal

- **Serviço**: exchangerate.host
- **Endpoint**: `https://api.exchangerate.host/live`
- **Método**: GET
- **Parâmetros**: `access_key` e `source` (moeda base)

### Fallback

O sistema inclui um fallback robusto com:
- ✅ 172 moedas diferentes
- ✅ Taxas de câmbio estáticas (5 de dezembro de 2025)
- ✅ Mapeamento completo de países e bandeiras
- ✅ Funcionamento offline completo

### Moedas Suportadas

A aplicação suporta moedas de:
- 🌍 Todos os países principais
- 🏝️ Territórios e dependências
- 💰 Moedas especiais (XAF, XOF, XPF, etc.)
- 🥇 Metais preciosos (Ouro, Prata)
- ₿ Criptomoedas (Bitcoin)
- 🌐 Moedas especiais (XDR - Direitos Especiais de Saque)

## 🌐 Traduções

A aplicação está disponível em 3 idiomas:

- 🇧🇷 **Português (pt-BR)** - Idioma padrão
- 🇺🇸 **Inglês (en)**
- 🇪🇸 **Espanhol (es)**

O idioma selecionado é salvo no `localStorage` e mantido entre sessões.

### Adicionar Novo Idioma

Para adicionar um novo idioma:

1. Edite o arquivo `script.js`
2. Localize o objeto `translations`
3. Adicione um novo objeto com o código do idioma:

```javascript
'novo-idioma': {
  title: 'Título no novo idioma',
  subtitle: 'Subtítulo...',
  // ... outras traduções
}
```

4. Adicione a opção no select de idiomas no `index.html`

## 🌙 Dark Mode

A aplicação possui suporte completo a Dark Mode com:

- ✅ Toggle no header
- ✅ Preferência salva no localStorage
- ✅ Transições suaves entre temas
- ✅ Cores adaptadas para ambos os temas
- ✅ Variáveis CSS para fácil customização

### Customizar Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
  --primary: #10b981;
  --primary-dark: #059669;
  --secondary: #3b82f6;
  /* ... outras variáveis */
}
```

## 📊 Estatísticas

A aplicação exibe 3 estatísticas principais:

1. **Milionário em X países**: Quantidade de países onde você é milionário
2. **País onde meu salário vale mais**: País com maior valor convertido (com valor exibido)
3. **Milionário em X moedas**: Total de moedas onde você alcançou o milhão

## 🎨 Personalização

### Cores

As cores podem ser personalizadas editando as variáveis CSS em `styles.css`.

### Animações

As animações podem ser ajustadas ou desabilitadas editando as classes CSS correspondentes.

### Moedas

Para adicionar mais moedas ao mapeamento, edite o objeto `currencyMap` em `script.js`.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- 💻 Desktop (1920px+)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (320px - 767px)

## 🔍 SEO

A aplicação inclui:

- ✅ Meta tags completas (description, keywords, author)
- ✅ Open Graph tags para redes sociais
- ✅ Twitter Card tags
- ✅ Structured Data (JSON-LD)
- ✅ Canonical URL
- ✅ Theme color

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

### Melhorias Futuras

- [ ] Adicionar mais idiomas
- [ ] Gráficos de progresso
- [ ] Histórico de conversões
- [ ] Exportar resultados em PDF
- [ ] Modo offline com Service Workers
- [ ] PWA (Progressive Web App)

## 📝 Licença

Este projeto é de código aberto e está disponível para uso livre.

## 🙏 Agradecimentos

- [exchangerate.host](https://exchangerate.host) pela API de câmbio
- Todos os contribuidores do projeto

## 📞 Contato

Para dúvidas, sugestões ou problemas, abra uma issue no repositório.

---

Desenvolvido com 💚 para tornar a vida financeira mais divertida!

**Versão**: 1.0.0  
**Última atualização**: Dezembro 2024
