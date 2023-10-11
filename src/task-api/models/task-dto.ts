import { CategoryDto } from './category-dto';

export interface TaskDto {
    id?: number;
    title?: string;
    description?: string;
    startTime?: string;
    done?: string;
    favorite?: string;
    category?: CategoryDto;
}