import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imagePath: string;
}
