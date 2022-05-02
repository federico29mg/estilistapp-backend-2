import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Inventory } from './inventory.model';
import { Shopping } from './shopping.model';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'detail_shoppings',
})
export class DetailShopping extends Model<DetailShopping> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @Column({
        type: DataType.BIGINT({ length: 20 }),
        allowNull: false
    })
    cantidad: bigint;

    @Column({
        type: DataType.DECIMAL(9, 0),
        allowNull: false
    })
    precio: number;

    @Column({
        type: DataType.DOUBLE(8, 2).UNSIGNED,
        allowNull: false
    })
    iva: number;
    
    @ForeignKey(() => Shopping)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: null
    })
    compra_id: bigint;

    @BelongsTo(() => Shopping, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    shopping: Shopping

    @ForeignKey(() => Inventory)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: null
    })
    servicioproducto_id: bigint;

    @BelongsTo(() => Inventory, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    inventory: Inventory

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