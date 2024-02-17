# Comandos para utilizar o Screen no linux:

1. Criar uma nova sessão no Screen:
   screen

2. Criar uma sessão nomeada no Screen:
   screen -S nome_da_sessao

3. Desanexar uma sessão do Screen:
   screen -d -r nome_da_sessao

4. Listar todas as sessões do Screen:
   screen -ls

5. Encerrar uma sessão específica do Screen:
   screen -X -S ID_da_sessao quit

6. Encerrar todas as sessões "Detached" do Screen:
   screen -ls | grep Detached | cut -d. -f1 | awk '{print $1}' | xargs kill

7. Criar duas abas no Screen ao mesmo tempo:
   screen
   Ctrl + A, C (para criar a segunda aba)

8. Voltar para a aba principal no Screen:
   Ctrl + A, n (para a aba anterior)
   Ctrl + A, 0 (para a primeira aba)

9. Listar as abas de uma sessão no Screen:
   screen -r nome_da_sessao
   Ctrl + A, " (aspas duplas)

10. Criar uma nova sessão no Screen:
   Comando: screen
   Descrição: Inicia uma nova sessão no Screen.

11. Criar uma sessão nomeada no Screen:
   Comando: screen -S nome_da_sessao
   Descrição: Cria uma nova sessão no Screen com um nome específico para facilitar o acesso posterior.

12. Desanexar uma sessão do Screen:
   Comando: screen -d -r nome_da_sessao
   Descrição: Desanexa uma sessão do Screen para retomá-la mais tarde.