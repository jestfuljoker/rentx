import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSpecificationsCars1669298674652
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specificationsCars',
        columns: [
          {
            name: 'carId',
            type: 'uuid',
          },
          {
            name: 'specificationId',
            type: 'uuid',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKSpecificationCar',
            columnNames: ['specificationId'],
            referencedTableName: 'specifications',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKCarSpecification',
            columnNames: ['carId'],
            referencedTableName: 'cars',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'specificationsCars',
      'FKSpecificationCar',
    );

    await queryRunner.dropForeignKey(
      'specificationsCars',
      'FKCarSpecification',
    );

    await queryRunner.dropTable('specificationsCars');
  }
}
