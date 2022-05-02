import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Modulo } from './modulo.model';
import { Role } from './role.model';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '30',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'modulo_vs_role'
})
export class ModuloVsRole extends Model<ModuloVsRole> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @ForeignKey(() => Modulo)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    idModulo: bigint;

    @BelongsTo(() => Modulo, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    modulo: Modulo

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
