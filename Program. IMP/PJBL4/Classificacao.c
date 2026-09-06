#include "Classificacao.h"

void classificar(Estudante *e) {
    if (e->nota_semestral >= 7.0f) {
        e->aprovado = true;
    } else {
        e->aprovado = false;
    }
}
