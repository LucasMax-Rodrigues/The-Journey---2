#include <stdio.h>

int main() {
    int n, m;

    if (scanf("%d %d", &n, &m) != 2) {
        return 0;
    }

    int max_turma[1005] = {0};

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            int valor;
            scanf("%d", &valor);

            if (valor > max_turma[j]) {
                max_turma[j] = valor;
            }
        }
    }


    int total_alunos = 0;

    for (int j = 0; j < m; j++) {

        if (max_turma[j] < 1) {
            max_turma[j] = 1;
        }
        total_alunos += max_turma[j];
    }

    printf("%lld\n", total_alunos);

    return 0;
}