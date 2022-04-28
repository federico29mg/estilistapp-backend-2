import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'personal_access_tokens',
    indexes: [{
        name: 'personal_access_tokens_token_unique',
        unique: true,
        fields: ['token']
    }, {
        name: 'personal_access_tokens_tokenable_type_tokenable_id_index',
        fields: ['tokenable_type', 'tokenable_id']
    }]
})
export class PersonalAccessToken extends Model<PersonalAccessToken> {
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
    tokenable_type: string

    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
    })
    tokenable_id: bigint

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    name: string

    @Column({
        type: 'VARCHAR(64) COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    token: string

    @Column({
        type: 'TEXT COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    abilities: string

    @Column({
        type: 'TIMESTAMP NULL',
        defaultValue: null,
    })
    last_used_at: number

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
