import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { DetailShopping } from './detail-shopping.model';
import { Provider } from './provider.model';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'shoppings',
})
export class Shopping extends Model<Shopping> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @Column({
        type: 'DATE',
        allowNull: false
    })
    fecha: Date;

    @Column({
        type: DataType.DOUBLE(8, 2),
        allowNull: false
    })
    precioTotal: number;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    url: string;

    @Column({
        type: DataType.DECIMAL(8, 2),
        allowNull: false
    })
    numerofactura: number;

    @Column({
        type: DataType.TINYINT({ length: 1 }),
        allowNull: false,
        defaultValue: 1,
    })
    status: number

    @ForeignKey(() => Provider)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        defaultValue: null
    })
    proveedor_id: bigint;

    @BelongsTo(() => Provider, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    provider: Provider

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

    @HasMany(() => DetailShopping)
    detailShoppings: DetailShopping[]
}
