import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

@Injectable()
export class FileService {
  createFile(type: FileType, file): string {
    try {
      const fileExtension = file.originalname.split('. ').pop();
      const fileName = uuid.v4() + '.' + fileExtension;
      const filetPath = path.resolve(__dirname, '..', 'static', type);
      if (!fs.existsSync(filetPath)) {
        fs.mkdirSync(filetPath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filetPath, fileName), file.buffer);
      return type + '/' + fileName;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(fileName: string) {}
}
