import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { CreateVentaDto } from './ventas.salida';

export class RespuestaCreateVentaDto {
  @Expose()
  fecha: Date;
  @Expose()
  monto: number;

  @Transform(({ value }) => plainToInstance(CreateVentaDto, value))
  ventas: CreateVentaDto[];
}
