export interface IOrder {
  id: number;
  producto: string;
  cantidad: number;
  precio: number;
  Pago: string;
  isActive?: boolean;
}
