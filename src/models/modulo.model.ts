import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '11',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'modulos'
})
export class Modulo extends Model<Modulo> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    module_name: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    url: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    icono: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    padre: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    fondo: string;

    @Column({
        type: DataType.TINYINT({length: 1}),
        defaultValue: 1,
    })
    status: number

    @Column({
        type: 'TIMESTAMP NULL',
        defaultValue: null,
    })
    created_at: number

    @Column({
        type: 'TIMESTAMP NULL',
        defaultValue: null
    })
    updated_at: number;
}
