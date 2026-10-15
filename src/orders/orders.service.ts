import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Order } from './order.model';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';

@Injectable()
export class OrdersService {
  constructor() {}

  private orders: Order[] = [
    { id: '1', producto: 'Arroz', cantidad: 2, precio: 4500, Pago: 'Efectivo', isActive: true },
    { id: '2', producto: 'Aceite', cantidad: 1, precio: 8500, Pago: 'Tarjeta', isActive: true },
    { id: '3', producto: 'Azúcar', cantidad: 3, precio: 4200, Pago: 'Credito', isActive: true },
    { id: '4', producto: 'Café', cantidad: 2, precio: 12000, Pago: 'Tarjeta', isActive: true },
    { id: '5', producto: 'Leche', cantidad: 4, precio: 3800, Pago: 'Efectivo', isActive: true },
    { id: '6', producto: 'Pan', cantidad: 5, precio: 2500, Pago: 'Credito', isActive: true },
    { id: '7', producto: 'Huevos', cantidad: 12, precio: 600, Pago: 'Efectivo', isActive: true },
    { id: '8', producto: 'Sal', cantidad: 2, precio: 1800, Pago: 'Tarjeta', isActive: true },
    { id: '9', producto: 'Pasta', cantidad: 3, precio: 3200, Pago: 'Credito', isActive: true },
    { id: '10', producto: 'Atún', cantidad: 4, precio: 5500, Pago: 'Tarjeta', isActive: true },
    { id: '11', producto: 'Frijoles', cantidad: 2, precio: 4800, Pago: 'Efectivo', isActive: true },
    { id: '12', producto: 'Lentejas', cantidad: 3, precio: 4000, Pago: 'Credito', isActive: true },
    { id: '13', producto: 'Galletas', cantidad: 5, precio: 2800, Pago: 'Efectivo', isActive: true },
    { id: '14', producto: 'Chocolate', cantidad: 2, precio: 6500, Pago: 'Tarjeta', isActive: true },
    { id: '15', producto: 'Jugo', cantidad: 3, precio: 4500, Pago: 'Credito', isActive: true },
  ];

  findAll(): Order[] {
    // logica de negocio
    return this.orders.filter((order) => order.isActive);
  }

  findById(id: string): Order | undefined {
    console.log('.:: Order ID: ', id);
    const order = this.orders.find((order) => order.id === id);
    console.log('.:: pedido buscado: ', order);
    if (order === undefined) {
      // Simulación de pedido no encontrado, error 404
      throw new NotFoundException(`Pedido con ID ${id} no existe`);
    }

    // Simulación para error de permisos
    if (order.id === '1') {
      throw new ForbiddenException(
        `No tienes permisos para acceder al pedido con ID ${id}`,
      );
    }
    return order;
  }

  search(pago: string): Order[] {
    const data = this.orders.filter((order) => order.Pago === pago);
    if (data.length === 0) {
      throw new NotFoundException(`Pedidos con forma de pago ${pago} no existen`);
    }
    return data;
  }

  create(orderPayload: CreateOrderDto) {
    const newOrder = {
      ...orderPayload,
      id: `${new Date().getTime()}`,
      isActive: true,
    };
    this.orders.push(newOrder);

    return {
      message: 'Pedido creado correctamente',
      data: orderPayload,
    };
  }

  delete(id: string) {
    const position = this.orders.findIndex((order) => order.id === id);
    if (position === -1) {
      throw new NotFoundException(`Pedido con ID ${id} no existe`);
    }
    this.orders.splice(position, 1);
    return {
      msg: 'Pedido eliminado correctamente',
    };
  }

  update(id: string, changes: UpdateOrderDto) {
    const position = this.orders.findIndex((order) => order.id === id);
    if (position === -1) {
      throw new NotFoundException(`Pedido con ID ${id} no existe`);
    }
    const currentData = this.orders[position];
    const updateOrder = {
      ...currentData,
      ...changes,
    };
    this.orders[position] = updateOrder;

    return {
      msg: 'Pedido actualizado',
      data: updateOrder,
    };
  }
}
