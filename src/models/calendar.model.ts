import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Inventory } from './inventory.model';
import { User } from './user.model';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'calendars',
})
export class Calendar extends Model<Calendar> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false
    })
    user_id: bigint;

    @BelongsTo(() => User, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
    })
    user: User

    @ForeignKey(() => Inventory)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false
    })
    inventory_id: bigint;

    @BelongsTo(() => Inventory, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
    })
    inventory: Inventory

    @Column({
        type: 'DATE',
        allowNull: false
    })
    day: Date;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    start: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    end: string;

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