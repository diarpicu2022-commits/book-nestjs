import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IOrder } from './order.model';
import { CreateOrderDto, UpdateOrderDto } from './dtos/order.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<IOrder>,
  ) {}

  async findAll() {
    // logica de negocio
    const orders = await this.orderRepository.find();
    return {
      data: orders,
      count: orders.length,
    };
  }

  async findById(id: number) {
    const order = await this.findOne(id);

    // Simulación para error de permisos
    if (order.id === 1) {
      throw new ForbiddenException(
        `No tienes permisos para acceder al pedido con ID ${id}`,
      );
    }
    return order;
  }

  async search(pago: string) {
    const orders = await this.orderRepository.findBy({ Pago: pago });
    if (orders.length === 0) {
      throw new NotFoundException(`Pedidos con forma de pago ${pago} no existen`);
    }
    return {
      data: orders,
      count: orders.length,
    };
  }

  async create(orderPayload: CreateOrderDto) {
    try {
      const newOrder = await this.orderRepository.save(orderPayload);
      return newOrder;
    } catch {
      throw new BadRequestException('Error al crear el pedido');
    }
  }

  async delete(id: number) {
    const order = await this.findOne(id);
    const result = await this.orderRepository.delete(order.id);
    return {
      message: 'Pedido eliminado correctamente',
      data: result,
    };
  }

  async update(id: number, changes: UpdateOrderDto) {
    const order = await this.findOne(id);
    const updatedOrder = this.orderRepository.merge(order, changes);
    return this.orderRepository.save(updatedOrder);
  }

  private async findOne(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Pedido con ID ${id} no existe`);
    }
    return order;
  }
}
