-- AddForeignKey
ALTER TABLE "Sensores" ADD CONSTRAINT "Sensores_fazendaId_fkey" FOREIGN KEY ("fazendaId") REFERENCES "FazendaLocal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
