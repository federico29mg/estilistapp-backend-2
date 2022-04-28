import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'password_resets',
    indexes: [{
        name: 'password_resets_email_index',
        fields: ['email']
    }]
})
export class PasswordReset extends Model<PasswordReset> {
    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    email: string;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    token: string;

    @Column({
        type: 'TIMESTAMP NULL',
        defaultValue: null,
    })
    created_at: number
}
