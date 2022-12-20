import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should be able to send a notificatiuon', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
