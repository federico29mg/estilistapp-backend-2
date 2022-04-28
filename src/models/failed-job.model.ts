import sequelize from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    engine: 'InnoDB',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    tableName: 'failed_jobs',
    indexes: [{
        name: 'failed_jobs_uuid_unique',
        fields: ['uuid']
    }]
})
export class FailedJob extends Model<FailedJob> {
    @Column({
        type: DataType.BIGINT({ length: 20 }).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id: bigint;

    @Column({
        type: 'VARCHAR(255) COLLATE utf8mb4_unicode_ci',
        allowNull: false,
    })
    uuid: string;

    @Column({
        type: 'TEXT COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    connection: string;

    @Column({
        type: 'TEXT COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    queue: string;

    @Column({
        type: 'LONGTEXT COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    payload: string;

    @Column({
        type: 'LONGTEXT COLLATE utf8mb4_unicode_ci',
        allowNull: false
    })
    exception: string;

    @Column({
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    })
    failed_at: number;
}
