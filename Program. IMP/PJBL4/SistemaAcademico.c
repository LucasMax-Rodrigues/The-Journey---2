#include "Estudante.h"
#include "Leitura.h"
#include "Classificacao.h"
#include "Relatorio.h"

int main(void) {
    Estudante turma[CAPACIDADE];

    // a) Leitura dos dados
    ler_dados_dos_estudantes(turma, CAPACIDADE);

    // b) Classificacao de cada estudante individualmente
    for (int i = 0; i < CAPACIDADE; i++) {
        classificar(&turma[i]);
    }

    // c) Impressao do relatorio
    imprimir_relatorio(turma, CAPACIDADE);

    return 0;
}
