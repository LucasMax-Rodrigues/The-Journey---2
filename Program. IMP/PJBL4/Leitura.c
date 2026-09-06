#include <stdio.h>
#include "Leitura.h"

void ler_dados_dos_estudantes(Estudante estudantes[], int total) {
    for (int i = 0; i < total; i++) {
        printf("\n--- Estudante %d ---\n", i + 1);
        printf("Numero de matricula: ");
        scanf("%d", &estudantes[i].matricula);

        printf("Nota semestral: ");
        scanf("%f", &estudantes[i].nota_semestral);
    }
}
