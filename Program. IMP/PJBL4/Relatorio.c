#include <stdio.h>
#include "Relatorio.h"

void imprimir_relatorio(const Estudante estudantes[], int total) {
    printf("\n================ RELATORIO DE ESTUDANTES ================\n");
    printf("%-15s %-15s %-15s\n", "Matricula", "Nota", "Situacao");
    printf("---------------------------------------------------------\n");

    for (int i = 0; i < total; i++) {
        printf("%-15d %-15.2f %-15s\n",
               estudantes[i].matricula,
               estudantes[i].nota_semestral,
               estudantes[i].aprovado ? "Aprovado" : "Reprovado");
    }
    printf("=========================================================\n");
}
