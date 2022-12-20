import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova Solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    //persistir essa notificação no banco de dados
    expect(notification).toBeTruthy();
  });
});
