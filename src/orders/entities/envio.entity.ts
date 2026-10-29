import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity(
    {name: "envios"}
)
export class Envio {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    direccion: string;

    @Column({ type: "varchar", length: 255 })
    ciudad: string;

    @Column({ type: "varchar", length: 255, nullable: true})
    barrio: string;

    @Column({ type: "varchar", length: 255, nullable: true})
    indicaciones: string;

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
}
