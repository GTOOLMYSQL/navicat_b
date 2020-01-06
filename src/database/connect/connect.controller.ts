import { Controller, Post, Body, Get } from '@nestjs/common';
import { Connect } from './Connect.entity';
import { ConnectService } from './connect.service';
import { dealResult, dealErrorResult } from 'src/util/response';

@Controller('connect')
export class ConnectController {
  constructor(private connectService: ConnectService) {}
  @Post('/addConnect')
  addConnect(@Body() connect: Connect) {
    try {
      const result = this.connectService.insert(connect);
      console.log(result);
      return dealResult(result);
    } catch (error) {
      return dealErrorResult(error);
    }
  }

  @Get('/findAll')
  async findAllConnect() {
    try {
      const result = await this.connectService.findAll();
      return dealResult(result);
    } catch (error) {
      return dealErrorResult(error);
    }
  }
}
