/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
    private testRepo: TestRepository = new TestRepository();
    add() {
        return this.testRepo.getNumberInDB() + 1;
    }
}
