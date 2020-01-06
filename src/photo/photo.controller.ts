import { Controller, Get, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('/findAll')
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.photoService.findOne(id);
  }
}
