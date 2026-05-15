-- CreateTable
CREATE TABLE "Insumos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "producaoId" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "unidade_medida" TEXT NOT NULL,

    CONSTRAINT "Insumos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoProducao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tempo_medio_safra_dias" TEXT NOT NULL,
    "isumos_recomendados" TEXT NOT NULL,

    CONSTRAINT "TipoProducao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FazendaLocal" (
    "id" TEXT NOT NULL,
    "nome_local" TEXT NOT NULL,
    "area_total" INTEGER NOT NULL,

    CONSTRAINT "FazendaLocal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lote" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fazendaId" TEXT NOT NULL,
    "area_total" INTEGER NOT NULL,

    CONSTRAINT "Lote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sublote" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fazendaId" TEXT NOT NULL,
    "area_total" INTEGER NOT NULL,

    CONSTRAINT "Sublote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Safra" (
    "id" TEXT NOT NULL,
    "producaoId" TEXT NOT NULL,
    "tipos_lotes" TEXT NOT NULL,
    "tipos_sublotes" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_previsao" TIMESTAMP(3) NOT NULL,
    "data_final" TEXT NOT NULL,

    CONSTRAINT "Safra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eventos" (
    "id" TEXT NOT NULL,
    "LoteId" TEXT NOT NULL,
    "subloteId" TEXT NOT NULL,
    "fazendaId" TEXT NOT NULL,
    "insumoId" TEXT NOT NULL,
    "isumo_usado" TEXT NOT NULL,
    "tipo_evento" TEXT NOT NULL,
    "gastos" TEXT NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_sensor" TEXT NOT NULL,

    CONSTRAINT "Sensores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dados" (
    "id" TEXT NOT NULL,
    "SensorId" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jsonValue" JSONB NOT NULL,

    CONSTRAINT "Dados_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Insumos" ADD CONSTRAINT "Insumos_producaoId_fkey" FOREIGN KEY ("producaoId") REFERENCES "TipoProducao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_fazendaId_fkey" FOREIGN KEY ("fazendaId") REFERENCES "FazendaLocal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sublote" ADD CONSTRAINT "Sublote_fazendaId_fkey" FOREIGN KEY ("fazendaId") REFERENCES "FazendaLocal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Safra" ADD CONSTRAINT "Safra_producaoId_fkey" FOREIGN KEY ("producaoId") REFERENCES "TipoProducao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_fazendaId_fkey" FOREIGN KEY ("fazendaId") REFERENCES "FazendaLocal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_LoteId_fkey" FOREIGN KEY ("LoteId") REFERENCES "Lote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_subloteId_fkey" FOREIGN KEY ("subloteId") REFERENCES "Sublote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_insumoId_fkey" FOREIGN KEY ("insumoId") REFERENCES "Insumos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dados" ADD CONSTRAINT "Dados_SensorId_fkey" FOREIGN KEY ("SensorId") REFERENCES "Sensores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
