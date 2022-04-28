import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '3',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'categories'
})
export class Category extends Model<Category> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    idcategoria: bigint;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    nombre: string;

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