import { CategoryDto } from './category-dto';

export interface TaskDto {
    id?: number;
    title?: string;
    description?: string;
    startTime?: string;
    done?: boolean;
    important?: boolean;
    category?: CategoryDto;
}