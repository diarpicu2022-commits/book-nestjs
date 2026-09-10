import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

interface Order {
id: string;
producto: string;
cantidad: number;
precio: number;
Pago: string;
}

@Controller('orders')
export class OrdersController {

    public orders: Order[] = [
    { id: '1', producto: 'Arroz', cantidad: 2, precio: 4500, Pago: 'Efectivo' },
    { id: '2', producto: 'Aceite', cantidad: 1, precio: 8500, Pago: 'Tarjeta' },
    { id: '3', producto: 'Azúcar', cantidad: 3, precio: 4200, Pago: 'Credito' },
    { id: '4', producto: 'Café', cantidad: 2, precio: 12000, Pago: 'Tarjeta' },
    { id: '5', producto: 'Leche', cantidad: 4, precio: 3800, Pago: 'Efectivo' },
    { id: '6', producto: 'Pan', cantidad: 5, precio: 2500, Pago: 'Credito' },
    { id: '7', producto: 'Huevos', cantidad: 12, precio: 600, Pago: 'Efectivo' },
    { id: '8', producto: 'Sal', cantidad: 2, precio: 1800, Pago: 'Tarjeta' },
    { id: '9', producto: 'Pasta', cantidad: 3, precio: 3200, Pago: 'Credito' },
    { id: '10', producto: 'Atún', cantidad: 4, precio: 5500, Pago: 'Tarjeta' },
    { id: '11', producto: 'Frijoles', cantidad: 2, precio: 4800, Pago: 'Efectivo' },
    { id: '12', producto: 'Lentejas', cantidad: 3, precio: 4000, Pago: 'Credito' },
    { id: '13', producto: 'Galletas', cantidad: 5, precio: 2800, Pago: 'Efectivo' },
    { id: '14', producto: 'Chocolate', cantidad: 2, precio: 6500, Pago: 'Tarjeta' },
    { id: '15', producto: 'Jugo', cantidad: 3, precio: 4500, Pago: 'Credito' }
];

// Endpoint para obtener todos los pedidos
@Get()
getorders() {
    return this.orders;
}

// Endpoint para obtener un pedido por su ID
@Get('id/:id')
getOrderById(@Param('id') id: string) {
    console.log('ID recibido:', id);
    const order = this.orders.find(order => order.id === id);
    if (!order) {
        return { message: 'Pedido no encontrado' };
    }
    console.log('Pedido encontrado:', order);
    return order;

}

// Endpoint para obtener un pedido por forma de pago
@Get('pago/:Pago')
getOrderByPago(@Param('Pago') Pago: string) {
    console.log('Pago recibido:', Pago);
    const order = this.orders.filter(order => order.Pago === Pago);
    if (!order.length) {
        return { message: 'Pedidos no encontrado' };
    }
    console.log('Pedidos encontrados:', order);
    return order;


}

// Endpoint para crear un pedido
@Post()
createOrder(@Body() order: Order) {
    console.log('Pedido recibido:', order);
    this.orders.push(order);
    return {
        message: 'Pedido creado correctamente',
        data: order
    };
}

// Endpoint para eliminar un pedido por su ID
@Delete('id/:id')
deleteOrder(@Param('id') id: string) {
    console.log('ID recibido:', id);
    const position = this.orders.findIndex(order => order.id === id);
    if (position === -1) {
        return { message: 'Pedido no encontrado' };
    }
    this.orders.splice(position, 1);
    console.log('Pedido eliminado:', id);
    return { message: 'Pedido eliminado correctamente' };
}
}
