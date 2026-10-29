import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from './dtos/order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('')
  getAllOrders() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  getOrderById(@Param('id', ParseIntPipe) id: number) {
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
  deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.delete(id);
  }

  @Put(':id')
  updateOrder(@Param('id', ParseIntPipe) id: number, @Body() changes: UpdateOrderDto) {
    return this.ordersService.update(id, changes);
  }
}
