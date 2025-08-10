import { Module } from '@nestjs/common';
import { VentasController } from './controllers/ventas/ventas.controller';
import { VentasService } from './services/ventas/ventas.service';

@Module({
  controllers: [VentasController],
  providers: [VentasService]
})
export class VentasModule {}
