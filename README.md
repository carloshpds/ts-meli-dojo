# Typescript dojo

Mini batalha naval, a proposta é dispor uma área de 10x10 onde se posiciona 5 navios de tamanhos diferentes:
  * 1 porta-aviões (comprimento 5),
  * 1 encouraçado (comprimento 4),
  * 1 submarino  (comprimento 3)
  * 1 destroyer (comprimento 3),
  * 1 barco de patrulha (comprimento 2).

Os navios não podem se cruzar e devem estar dentro das fronteiras da sua área disponível.

Depois que todas as peças estão posicionadas, o jogador pode para lançar bombas sobre o oceano especificando qual posição ele deseja atacar. Se algum dos navios do jogador que está sendo atacado estiver na posição atacada, considera-se que o navio foi atingido. O ataque falha se o atacante lançar uma bomba em um local onde não existe nenhum navio do oponente.

Você deve desenvolver um programa que jogue uma partida de batalha naval.
Você precisa:

* Definir uma maneira de indicar o estado inicial dos navios;
* Exibir todos os movimentos do jogador, informando se os ataques foram bem sucedidos ou não;
  + Exibir o oceano com:
    - X = ACERTOU
    - A = ÁGUA
    - O = Sem atingir

* Informar quando um navio é atingido e quando ele é afundado;
* Exibir ao final do jogo um mapa final do posicionamento final dos navios.