import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Modulo } from './modulo.model';
import { RoleVsPermiso } from './role-vs-permiso.model';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '72',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'roles'
})
export class Permission extends Model<Permission> {
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
    description: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    url: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    metodo: string;

    @Column({
        type: DataType.TINYINT({ length: 1 }),
        defaultValue: null,
    })
    identico: number

    @ForeignKey(() => Modulo)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false
    })
    idModulo: bigint;

    @BelongsTo(() => Modulo, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    modulo: Modulo

    @Column({
        type: DataType.TINYINT({ length: 1 }),
        defaultValue: 1,
    })
    status: number

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

    @HasMany(() => RoleVsPermiso)
    roleVsPermiso: RoleVsPermiso
}
