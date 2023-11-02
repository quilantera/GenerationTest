-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "nota_primeiro_semestre" DOUBLE PRECISION NOT NULL,
    "nota_segundo_semestre" DOUBLE PRECISION NOT NULL,
    "nome_professor" TEXT NOT NULL,
    "numero_da_sala" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);
