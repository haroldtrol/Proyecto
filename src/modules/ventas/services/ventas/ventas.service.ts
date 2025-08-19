import { Injectable } from '@nestjs/common';
import { IVentas } from '../../interfaces/ventas.interfaces';
import { VentasRepository } from '../../repository/ventas.repository';

@Injectable()
export class VentasService {
  // Aquí puedes implementar los métodos del servicio de ventas
  public async CrearVentas(VentasData: IVentas) {
    const ventas = { fecha: VentasData.fecha, monto: VentasData.monto };
    try {
      return await VentasRepository.crearVentas(ventas);
    } catch (error) {
      console.error('Error al crear la venta:', error);
      throw error;
    }
  }
}
