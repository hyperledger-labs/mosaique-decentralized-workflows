import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UseInstanceDto {
    @IsString()
    @ApiProperty({example: ""})
    instanceId: string;

    @ApiProperty({example: ""})
    actionId: string;

    @ApiProperty({example: ""})
    data: string;

    @ApiProperty({example: ""})
    roleId: string;

}