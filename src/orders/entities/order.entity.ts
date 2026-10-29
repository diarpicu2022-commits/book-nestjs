import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Envio } from "./envio.entity";

@Entity({
    name: "orders",
})
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    producto: string;

    @Column({ type: "int" })
    cantidad: number;

    @Column({ type: "float" })
    precio: number;

    @Column({ type: "varchar", length: 50, name: "pago" })
    Pago: string;

    @CreateDateColumn(
        {
            type: "timestamptz",
            default: () => "CURRENT_TIMESTAMP",
            name: "created_at"
        })
    createdAt: Date;

    @UpdateDateColumn(
        {
            type: "timestamptz",
            default: () => "CURRENT_TIMESTAMP",
            name: "updated_at"
        })
    updatedAt: Date;

    @OneToOne(() => Envio, { nullable: false, cascade: true })
    @JoinColumn({ name: "envio_id" })
    envio: Envio
}
