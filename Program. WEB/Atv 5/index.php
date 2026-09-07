<?php
// Se a requisição for POST, processa e salva os dados no JSON
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json; charset=utf-8');

    $input = file_get_contents('php://input');
    $dadosRecebidos = json_decode($input, true);

    if (!$dadosRecebidos) {
        echo json_encode(['sucesso' => false, 'mensagem' => 'Nenhum dado recebido.']);
        exit;
    }

    $arquivo = 'usuarios.json';
    $listaUsuarios = [];

    // Lê os dados anteriores se o arquivo já existir
    if (file_exists($arquivo)) {
        $conteudoAtual = file_get_contents($arquivo);
        $listaUsuarios = json_decode($conteudoAtual, true) ?? [];
    }

    // Salva o novo usuário
    $listaUsuarios[] = $dadosRecebidos;

    if (file_put_contents($arquivo, json_encode($listaUsuarios, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        echo json_encode(['sucesso' => true, 'mensagem' => 'Usuário salvo com sucesso no JSON!']);
    } else {
        echo json_encode(['sucesso' => false, 'mensagem' => 'Erro ao gravar os dados.']);
    }
    exit; // Encerra para não renderizar o HTML na resposta do fetch
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Cadastro de Usuário</title>
</head>
<body>

  <h2>Cadastro de Usuário</h2>

  <form id="formUsuario">
    <div>
      <label>Nome:</label><br>
      <input type="text" id="nome">
    </div><br>

    <div>
      <label>E-mail:</label><br>
      <input type="email" id="email">
    </div><br>

    <div>
      <label>Idade:</label><br>
      <input type="number" id="idade">
    </div><br>

    <div>
      <label>Cidade:</label><br>
      <input type="text" id="cidade">
    </div><br>

    <div>
      <label>Telefone:</label><br>
      <input type="text" id="telefone">
    </div><br>

    <button type="submit">Cadastrar</button>
  </form>

  <p id="mensagem"></p>

  <script>
    const form = document.getElementById('formUsuario');
    const msg = document.getElementById('mensagem');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Coleta dos dados
      const dados = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        idade: document.getElementById('idade').value.trim(),
        cidade: document.getElementById('cidade').value.trim(),
        telefone: document.getElementById('telefone').value.trim()
      };

      // 2. Validação no JS (verifica se todos existem e estão preenchidos)
      if (!dados.nome || !dados.email || !dados.idade || !dados.cidade || !dados.telefone) {
        msg.style.color = 'red';
        msg.textContent = 'Preencha todos os 5 campos!';
        return;
      }

      // 3. Envio para o próprio index.php via fetch POST
      try {
        const resposta = await fetch('index.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();

        if (resultado.sucesso) {
          msg.style.color = 'green';
          msg.textContent = resultado.mensagem;
          form.reset();
        } else {
          msg.style.color = 'red';
          msg.textContent = resultado.mensagem;
        }
      } catch (erro) {
        msg.style.color = 'red';
        msg.textContent = 'Erro de comunicação com o servidor.';
      }
    });
  </script>
</body>
</html>