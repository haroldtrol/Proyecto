import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateVentaDto {
  @Expose({ name: 'fecha' })
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @IsDateString(
    {},
    { message: 'La fecha debe estar en formato válido (YYYY-MM-DD o ISO)' }
  )
  fecha: Date;
  @Expose({ name: 'monto' })
  @IsNotEmpty({ message: 'El monto es obligatorio' })
  @IsNumber({}, { message: 'El monto debe ser un número válido' })
  monto: number;
}
