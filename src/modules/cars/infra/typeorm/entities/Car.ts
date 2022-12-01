import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Category } from './Category';
import { Specification } from './Specification';

@Entity('cars')
export class Car {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  dailyRate: number;

  @Column()
  available: boolean;

  @Column()
  licensePlate: string;

  @Column()
  fineAmount: number;

  @Column()
  brand: string;

  @JoinColumn({ name: 'categoryId' })
  @ManyToOne(() => Category)
  category: Category;

  @JoinTable({
    name: 'specificationsCars',
    joinColumns: [{ name: 'carId' }],
    inverseJoinColumns: [{ name: 'specificationId' }],
  })
  @ManyToMany(() => Specification)
  specifications: Specification[];

  @Column()
  categoryId: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}
