cmake_minimum_required(VERSION 3.20)
project(PJBL4 C)

set(CMAKE_C_STANDARD 99)

add_executable(PJBL4
        SistemaAcademico.c
        Estudante.h
        Leitura.c
        Leitura.h
        Classificacao.c
        Classificacao.h
        Relatorio.c
        Relatorio.h
)
