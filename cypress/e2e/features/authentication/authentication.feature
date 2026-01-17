# language: pt

Funcionalidade: Autenticação 
  Sendo um visitante do site
  Posso me autenticar e encerrar sessão
  Para acessar recursos protegidos

Contexto:
    Dado que o usuário acessou o site Commit Quality

  Regra: Impedir o login quando usuário e senha não forem informados
  
  @automatizado_e2e
  @authentication
  @TC_001
  Cenário: Autenticação - Ao tentar realizar login sem informar credenciais o acesso não é concedido
    Quando informa
      | Informação | Valor |
      | Username   |       |
      | Password   |       |
    E clica em "Login"
    Então o usuário visualiza a mensagem "Please enter a username and password" em vermelho

  Regra: Impedir o login quando usuário ou senha não atendem ao tamanho mínimo
  
  @automatizado_e2e
  @authentication
  @TC_002
  Cenário: Autenticação - Ao tentar realizar login com credenciais inválidas o acesso não é concedido
    Quando informa
      | Informação | Valor |
      | Username   | abc   |
      | Password   | 12    |
    E clica em "Login"
    Então o usuário visualiza a mensagem "Invalid username or password" em vermelho

  Regra: Permitir o login quando usuário e senha válidos forem informados
  
  @automatizado_e2e
  @authentication
  @TC_003
  Cenário: Autenticação - Ao autenticar com credenciais válidas o acesso é concedido
    Quando informa
      | Informação | Valor |
      | Username   | test  |
      | Password   | test  |
    E clica em "Login"
    Então o acesso é concedido ao usuário

  Regra: Permitir o encerramento da sessão do usuário autenticado
  
  @automatizado_e2e
  @authentication
  @TC_004
  Cenário: Autenticação - Ao realizar logout a sessão do usuário é encerrada com sucesso
    Dado que o usuário está autenticado
    Quando clica em "Logout"
    Então o usuário é redirecionado para a tela de login
    E a sessão do usuário é encerrada