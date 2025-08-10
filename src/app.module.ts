import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { VentasModule } from './modules/ventas/ventas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    VentasModule
  ]
})
export class AppModule {}
