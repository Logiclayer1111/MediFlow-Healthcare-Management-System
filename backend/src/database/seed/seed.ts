/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from '../../modules/user/entities/user.entity';
import { UserRole } from '../../shared/enums/roles.enum';
import * as bcrypt from 'bcryptjs';

export async function seed(dataSource: DataSource) {
  const userRepo = dataSource.getRepository(User);

  const admin = userRepo.create({
    email: 'admin@mediflow.com',
    password: await bcrypt.hash('admin123', 10),
    firstName: 'Admin',
    lastName: 'User',
    role: UserRole.ADMIN,
    isActive: true,
  });
  await userRepo.save(admin);

  console.log('Seeded admin user');
}