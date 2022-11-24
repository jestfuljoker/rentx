import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Category } from './Category';

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
