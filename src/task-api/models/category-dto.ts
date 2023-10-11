import { TaskDto } from "./task-dto";
import { UserDto } from "./user-dto";

export interface CategoryDto {
    id?: number;
    name?: string;
    description?: string;
    user?: UserDto;
    tasks?: Array<TaskDto>;
}