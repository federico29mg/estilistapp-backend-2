import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Application } from './application.model';
import { Calendar } from './calendar.model';
import { Role } from './role.model'
import { Sale } from './sale.model';

@Table({
    engine: 'InnoDB',
    initialAutoIncrement: '2',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'users',
    indexes: [{
        name: 'users_email_unique',
        unique: true,
        fields: ['email']
    }]
})
export class User extends Model<User> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    @ApiProperty()
    id: bigint;

    @Column({
        type: 'VARCHAR(60) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    @ApiProperty()
    name: string;

    @Column({
        type: 'VARCHAR(60) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    @ApiProperty()
    email: string;

    @Column({
        type: 'VARCHAR(10) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    @ApiProperty()
    phone: string;

    @Column({
        type: 'VARCHAR(80) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    @ApiProperty()
    direction: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    @ApiProperty()
    password: string;

    @Column({
        type: DataType.TINYINT({length: 1}),
        defaultValue: 1,
    })
    @ApiProperty()
    status: number

    @Column({
        type: 'VARCHAR(100) COLLATE utf8mb4_unicode_ci',
        defaultValue: null
    })
    @ApiProperty()
    remember_token: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    @ApiProperty()
    idRol: bigint;

    @BelongsTo(() => Role)
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

    @Column({
        type: 'TIMESTAMP NULL',
        defaultValue: null
    })
    deleted_at: number;

    @HasMany(() => Application)
    applications: Application[]

    @HasMany(() => Calendar)
    calendars: Calendar[]

    @HasMany(() => Sale)
    sales: Sale[]
}