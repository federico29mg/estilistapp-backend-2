import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { ServiceStatus } from 'src/models/service-status.model';
import { User } from './user.model';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'sales',
})
export class Sale extends Model<Sale> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    idventa: bigint;

    @Column({
        type: 'DATE',
        allowNull: false
    })
    fechaservicio: Date;

    @ForeignKey(() => ServiceStatus)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false
    })
    idestadoservicio: bigint;

    @BelongsTo(() => ServiceStatus, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    serviceStatus: ServiceStatus

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false
    })
    idusuario: bigint;

    @BelongsTo(() => User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    user: User

    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        defaultValue: null
    })
    idservicioproducto: bigint;

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
