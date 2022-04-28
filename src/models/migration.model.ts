import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '21',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'migrations'
})
export class Migration extends Model<Migration> {
    @Column({
        type: DataType.INTEGER({ length: 10 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    migration: string;

    @Column({
        type: DataType.INTEGER({ length: 11 }),
        allowNull: false
    })
    batch: number
}
