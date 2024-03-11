import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Roles } from '../roles/roles_entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({ length: 50, nullable: true })
    fullname: string;

    @Column({ length: 30, nullable: false, unique: true })
    username: string;

    @Column({ length: 60, nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;


    @OneToOne(() => Roles, (roleData) => roleData.role_id)
    @JoinColumn({ name: 'role_id' })
    role_id: Roles;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
