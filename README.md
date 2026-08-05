# IMUNEFOCUS — Landing page

Landing page responsiva em HTML, CSS e JavaScript puro para uma empresa de controle de pragas, desentupimento e sanitização.

## Como abrir

Abra `index.html` diretamente no navegador. Para testar como site local, execute na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura

```text
index.html                 conteúdo e estrutura da página
css/style.css              identidade visual e responsividade
js/script.js               configurações, conteúdo dinâmico e interações
assets/images/             imagens do site
assets/icons/              favicon e ícones locais
```

## Personalização essencial

No início de `js/script.js`, altere o objeto `siteConfig`. Troque especialmente `whatsappNumber` por país + DDD + número, apenas com algarismos (exemplo: `5511999999999`). No mesmo bloco ficam telefone visível, e-mail, cidade, horário e redes sociais.

Os serviços, estatísticas, depoimentos e perguntas frequentes também estão no início de `js/script.js`, em listas claramente comentadas. Para adicionar um serviço, copie um objeto de `services`, altere os campos e mantenha uma das categorias existentes — ou crie uma nova categoria, que ganhará um filtro automaticamente.

Textos institucionais e títulos ficam em `index.html`. Procure por `EDITE AQUI` e pelos textos desejados. As informações do JSON-LD e metadados sociais no `<head>` também precisam ser atualizadas manualmente.

As cores estão concentradas nas variáveis `:root` no começo de `css/style.css`. Alterar `--primary`, `--secondary`, `--accent`, `--bg` e `--text` atualiza toda a identidade.

Para trocar a imagem principal, substitua `assets/images/hero-tecnico.png` mantendo o nome, ou altere o caminho no hero e no Open Graph de `index.html`. Use imagem otimizada, preferencialmente WebP, e mantenha o texto `alt` descritivo.

## Dados que ainda precisam ser substituídos

- WhatsApp e telefone
- E-mail oficial
- Cidade, endereço e regiões atendidas
- Horário de atendimento
- Links de Instagram e Facebook
- URL canônica e domínio no Open Graph/JSON-LD
- Depoimentos por avaliações reais autorizadas
- Estatísticas por dados reais comprováveis
- Garantias, licenças, certificações e CNPJ, caso aplicáveis
- Links/textos finais de Política de Privacidade e Termos de Uso

O site não afirma licenças, garantias, CNPJ, endereço, número de clientes ou anos de experiência. Esses dados devem ser inseridos somente após confirmação.

## Publicação gratuita

### GitHub Pages

1. Crie um repositório no GitHub e envie todos os arquivos.
2. Em **Settings → Pages**, selecione **Deploy from a branch**.
3. Escolha a branch `main`, pasta `/ (root)`, e salve.
4. Atualize a URL canônica e o JSON-LD com o endereço publicado.

### Netlify

Arraste a pasta do projeto em `app.netlify.com/drop` ou conecte o repositório. Como o site é estático, não há comando de build; o diretório de publicação é a raiz.

### Vercel

Importe o repositório em `vercel.com/new`, escolha **Other** como framework e mantenha a raiz como diretório de saída. Nenhuma configuração de build é necessária.

### Domínio próprio

Compre o domínio em um registrador, adicione-o no painel do GitHub Pages, Netlify ou Vercel e siga as instruções de DNS apresentadas pela plataforma. Depois atualize `canonical`, Open Graph e JSON-LD no `index.html`.

## Formulário

O formulário valida os campos no navegador, cria uma mensagem organizada e abre o WhatsApp. Ele não armazena dados e não possui backend. Enquanto `whatsappNumber` for o placeholder `55SEUNUMERO`, a validação funciona, mas nenhuma conversa é aberta.

