/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from "@nestjs/common";
const data = [
    { id: 1, title: 'First Post', content: 'Hello World' },
    { id: 2, title: 'Second Post', content: 'NestJS is awesome' },
    { id: 3, title: 'Third Post', content: 'TypeScript rocks' },
];

@Injectable()
export class PostService {
    getAll() {
        throw new BadRequestException('Data not found');
        return data;
    }
}
