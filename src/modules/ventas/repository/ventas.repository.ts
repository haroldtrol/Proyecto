import { Transformador } from 'transformador.util';
import { VentaModel } from '../model/ventas';

export class VentasRepository {
  public static async crearVentas(ventasData: { fecha: Date; monto: number }) {
    try {
      const venta = await VentaModel.create(ventasData);
      return Transformador.extraerDataValues(venta);
    } catch (error) {
      console.error('Error al crear la venta:', error);
      throw error;
    }
  }
}
