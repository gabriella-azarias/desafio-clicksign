# language: pt

Funcionalidade: Gerenciar dados da conta
  Sendo um usuário autenticado
  Posso acessar minha conta
  Para consultar ou atualizar minhas informações

  Contexto:
    Dado que o usuário acessou o site Commit Quality
    E acessou o sistema com login válido

  Regra: Permitir a visualização dos dados da conta do usuário autenticado
  
  @automatizado_e2e
  @my_account
  @TC_005
  Cenário: Gerenciar dados da conta - Ao acessar a conta após login os dados do usuário são exibidos corretamente
    Quando acessa a seção "My Account"
    Então os detalhes da conta são exibidos
      | Campo        | Valor Esperado                         |
      | Name         | Commit Quality                         |
      | Youtube Name | CommitQuality                          |
      | YouTube Link | https://www.youtube.com/@commitquality |

  Regra: Permitir a atualização dos dados da conta do usuário autenticado
  
  @automatizado_e2e
  @my_account
  @TC_006
  Cenário: Gerenciar dados da conta - Ao atualizar as informações da conta os dados são salvos com sucesso
    Dado que acessa a seção "My Account"
    Quando preenche os campos "Name" e "Youtube" com novos valores
    E solicita "Save"
    Então visualiza
      | Campo        | Valor Esperado                         |
      | Name         | Teste Quality                          |
      | Youtube Name | Teste Quality                          |
      | YouTube Link | https://www.youtube.com/@commitquality |