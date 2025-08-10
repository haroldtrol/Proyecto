import { Module } from '@nestjs/common';
import { VENTAS } from './provider/vetas';

@Module({ providers: [VENTAS], exports: [VENTAS] })
export class DatabaseModule {}
