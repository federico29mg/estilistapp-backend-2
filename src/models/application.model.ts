import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ServiceStatus } from './service-status.model';
import { User } from './user.model';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'applications',
})
export class Application extends Model<Application> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @Column({
        type: DataType.DATE,
        defaultValue: null,
    })
    fechasolicitud: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fechaservicio: Date;

    @Column({
        type: DataType.DECIMAL(9, 0),
        allowNull: false,
    })
    total: number;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    modalidad: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    direccion: string;

    @ForeignKey(() => ServiceStatus)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    idestadoservicio: bigint;

    @BelongsTo(() => ServiceStatus, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
    })
    serviceStatus: ServiceStatus

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    idusuario: bigint;

    @BelongsTo(() => User, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
    })
    user: User

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