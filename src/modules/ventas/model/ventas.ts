import {
  Table,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  Default,
  Model
} from 'sequelize-typescript';

@Table({
  tableName: 'ventas',
  timestamps: true
})
export class VentaModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({ field: 'id', type: DataType.INTEGER })
  declare id: number;

  @AllowNull(false)
  @Column({ field: 'fecha', type: DataType.DATE })
  fecha: Date;

  @AllowNull(false)
  @Column({ field: 'monto', type: DataType.DECIMAL(10, 2) })
  monto: number;

  @Default(DataType.NOW)
  @Column({ field: 'createdAt' })
  declare createdAt: Date;

  @Default(DataType.NOW)
  @Column({ field: 'updatedAt' })
  declare updatedAt: Date;
}
