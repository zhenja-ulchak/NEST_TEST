import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
    @IsInt()
    userId: number;

    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    body: string;
}
