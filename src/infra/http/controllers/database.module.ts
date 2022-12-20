import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaNotificationsRepository } from 'src/infra/database/prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
