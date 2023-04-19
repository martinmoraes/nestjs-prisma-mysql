import { BadRequestException, Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class FileService {
  async upload(file: Express.Multer.File, path: string) {
    try {
      await writeFile(path, file.buffer);
    } catch (error) {
      throw new BadRequestException(error);
    }

    return { sucess: true };
  }
}
