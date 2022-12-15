import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InitialInstanceDto {
    @IsString()
    @ApiProperty({example: "test"})
    name: string;

    @ApiProperty({example: "6386735ed993e93ebfd30940"})
    templateId: string;

    @ApiProperty({example: "1234"})
    userId: string;

    @ApiProperty({example: "1000"})
    roleId: string;

}