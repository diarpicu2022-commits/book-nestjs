import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('')
  getAllOrders() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.findById(id);
  }

  @Get('search/:pago')
  getOrdersByPago(@Param('pago') pago: string) {
    return this.ordersService.search(pago);
  }

  @Post()
  createOrder(@Body() orderPayload: CreateOrderDto) {
    return this.ordersService.create(orderPayload);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.delete(id);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() changes: UpdateOrderDto) {
    return this.ordersService.update(id, changes);
  }
}
