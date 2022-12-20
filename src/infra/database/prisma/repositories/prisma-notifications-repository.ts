import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../../src/application/entities/notification';
import { NotificationRepository } from '../../../../../src/application/repositories/notifications-repository';
import { PrismaNotificaitionMapper } from '../../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificaitionMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
