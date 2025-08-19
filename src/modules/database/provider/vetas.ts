import { Config } from 'src/configs/configuracion';
import { Sequelize } from 'sequelize-typescript';
import { VentaModel } from 'src/modules/ventas/model/ventas';

export const models = [VentaModel];

export const VENTAS = {
  provide: 'SEQUELIZE_CITAS',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      dialectOptions: {
        multipleStatements: true,
        useUTC: false,
        dateStrings: true,
        typeCast: true
      },
      timezone: 'America/Bogota',
      host: Config.dbHost,
      port: Config.dbPuerto,
      username: Config.dbUsuario,
      password: Config.dbContrasenna,
      database: Config.dbBaseDatos
    });
    sequelize.addModels(models);
    return sequelize;
  }
};
