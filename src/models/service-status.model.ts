import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Application } from './application.model';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '5',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'servicestatus'
})
export class ServiceStatus extends Model<ServiceStatus> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    idestadoservicio: bigint;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    estadoservicio: string;

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

    @HasMany(() => Application)
    applications: Application[]
}