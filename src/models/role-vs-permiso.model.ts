import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Permission } from './permission.model';
import { Role } from './role.model';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '175',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'role_vs_permisos'
})
export class RoleVsPermiso extends Model<RoleVsPermiso> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    idRol: bigint;

    @BelongsTo(() => Role, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    role: Role

    @ForeignKey(() => Permission)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    idPermiso: bigint;

    @BelongsTo(() => Permission, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    permission: Permission

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
