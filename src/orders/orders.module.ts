import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Envio } from './entities/envio.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Order, Envio])],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
