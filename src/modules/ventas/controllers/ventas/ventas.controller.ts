import { Body, Controller, Post } from '@nestjs/common';
import { VentasService } from '../../services/ventas/ventas.service';
import { IVentas } from '../../interfaces/ventas.interfaces';
import { CreateVentaDto } from '../../Dtos/ventas.salida';
import { plainToInstance } from 'class-transformer';
import { RespuestaCreateVentaDto } from '../../Dtos/ventas.entrada';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  public async crearVenta(@Body() ventasData: CreateVentaDto) {
    try {
      const venta = await this.ventasService.CrearVentas(ventasData);

      return plainToInstance(RespuestaCreateVentaDto, venta, {
        excludeExtraneousValues: true
      });
    } catch (error) {
      console.error('Error al crear la venta:', error);
      throw error;
    }
  }
}
