import { SallerService } from './saller.service';
import { CreateSallerDto } from './dto/create-saller.dto';
import { UpdateSallerDto } from './dto/update-saller.dto';
export declare class SallerController {
    private readonly sallerService;
    constructor(sallerService: SallerService);
    create(createSallerDto: CreateSallerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSallerDto: UpdateSallerDto): string;
    remove(id: string): string;
}
