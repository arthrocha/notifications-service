import { Content } from '../../src/application/entities/content';
import {
  Notification,
  NotificationProps,
} from '../../src/application/entities/notification';

//Partial: todas as propriedades são opcionais
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
