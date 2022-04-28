import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Calendar } from './calendar.model';
import { Category } from './category.model';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'inventories',
    indexes: [{
        name: 'inventories_nombre_unique',
        unique: true,
        fields: ['nombre']
    }]
})
export class Inventory extends Model<Inventory> {
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
    nombre: string;

    @Column({
        type: 'TEXT COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    descripcion: string;

    @Column({
        type: DataType.DECIMAL(9, 0),
        allowNull: false
    })
    precio: number;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false,
        defaultValue: '1'
    })
    cantidad: string;

    @Column({
        type: DataType.TINYINT({length: 1}),
        allowNull: false,
        defaultValue: 1,
    })
    status: number

    @ForeignKey(() => Category)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    idcategoria: bigint;

    @BelongsTo(() => Category, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
    })
    category: Category

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

    @HasMany(() => Calendar)
    calendars: Calendar[]
}