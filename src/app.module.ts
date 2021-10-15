import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/users.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
