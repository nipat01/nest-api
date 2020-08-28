import { Roles } from './../auth/roles.decorator';
import { Controller, UseGuards, Post, SetMetadata, Body, Get } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { UsersService } from './users.service';



@Controller('user')
// @UseGuards(new RolesGuard())
@UseGuards(RolesGuard)
export class UsersController {
    constructor(
        private usersService: UsersService
    ) { }

    @Post()
    @Roles('admin')
    // @SetMetadata('roles', ['admin'])
    async create(@Body() createCatDto) {
        console.log('111', createCatDto);

        this.usersService.findOne(createCatDto);
    }

    @Get()
    @Roles('admin')
    async test() {
        console.log('111');
        return { id: 111 }
        // this.usersService.findOne('1');
    }
}