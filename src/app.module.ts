/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PostModule, MongooseModule.forRoot('mongodb+srv://kskannanwin_db_user:eord1cn0vnpe05g0@postcluster.cpgqqvt.mongodb.net/?retryWrites=true&w=majority&appName=PostCluster')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
