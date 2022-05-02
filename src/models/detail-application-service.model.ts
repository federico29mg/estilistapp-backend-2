import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Application } from './application.model';
import { Inventory } from './inventory.model';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'detail_application_service'
})
export class DetailApplicationService extends Model<DetailApplicationService> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @Column({
        type: DataType.DOUBLE(8, 2),
        allowNull: false
    })
    cantidad: number;

    @ForeignKey(() => Application)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    application_id: bigint;

    @BelongsTo(() => Application, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    application: Application

    @ForeignKey(() => Inventory)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    id_Servicioproducto: bigint;

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
