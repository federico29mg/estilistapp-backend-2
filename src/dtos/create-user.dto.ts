import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    id: bigint;

    @ApiProperty()
    name: string;
    
    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    direction: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    status: number

    @ApiProperty()
    remember_token: string;

    @ApiProperty()
    idRol: bigint;
}


