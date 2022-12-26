import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../../src/application/entities/notification';
import { NotificationRepository } from '../../../../../src/application/repositories/notifications-repository';
import { PrismaNotificaitionMapper } from '../../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    if (!notification) {
      return null;
    }
    return PrismaNotificaitionMapper.toDomain(notification);
  }
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        recipientId,
      },
    });
    return notifications.map(PrismaNotificaitionMapper.toDomain);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: {
        recipientId,
      },
    });
    return count;
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificaitionMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificaitionMapper.toPrisma(notification);
    await this.prisma.notification.create({
      data: raw,
    });
  }
}
