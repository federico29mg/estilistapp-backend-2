import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '5',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'roles'
})
export class Role extends Model<Role> {
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
    name: string;

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

    @HasMany(() => User)
    users: User[]
}
