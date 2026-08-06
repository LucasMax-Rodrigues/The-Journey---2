#include <stdio.h>

int main() {
    char d1 = '0';
    char d2 = '0';
    char d3 = '0';
    char g1 = '0';
    char g2 = '0';
    char g3 = '0';

    printf("Digite o primeiro caractere do 1 numero:");
    scanf(" %c",&d1);
    printf("Digite o segundo caractere do 1 numero:");
    scanf(" %c",&d2);
    printf("Digite o terceiro caractere do 1 numero:");
    scanf(" %c",&d3);

    printf("Digite o primeiro caractere do 2 numero:");
    scanf(" %c",&g1);
    printf("Digite o segundo caractere do 2 numero:");
    scanf(" %c",&g2);
    printf("Digite o terceiro caractere do 2 numero:");
    scanf(" %c",&g3);

    int N1 = ((d1 - '0') * 100) + ((d2 - '0') * 10) + (d3 - '0');
    int N2 = ((g1 - '0') * 100) + ((g2 - '0') * 10) + (g3 - '0');

    double Q = (double)N1 / N2;
    printf("%8.3lf\n", Q);
    return 0;
}
