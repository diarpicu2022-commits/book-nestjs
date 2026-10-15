export interface Order {
  id: string;
  producto: string;
  cantidad: number;
  precio: number;
  Pago: string;
  isActive?: boolean;
}
