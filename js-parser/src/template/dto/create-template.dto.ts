import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTemplateDto {
    @IsString()
    @ApiProperty({example: "test"})
    name: string;

    @ApiProperty({example: ["Admin", "User", "Guest"]})
    roles: string;

    @ApiProperty({example: [{}]})
    machines: string;

}