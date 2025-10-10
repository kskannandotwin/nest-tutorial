/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
@Injectable()
export class TestRepository {
    getNumberInDB() {
        const dataInDb = 1;
        return dataInDb;
    }
}
