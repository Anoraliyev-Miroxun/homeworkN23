import { CreateSallerDto } from './dto/create-saller.dto';
import { UpdateSallerDto } from './dto/update-saller.dto';
export declare class SallerService {
    create(createSallerDto: CreateSallerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSallerDto: UpdateSallerDto): string;
    remove(id: number): string;
}
