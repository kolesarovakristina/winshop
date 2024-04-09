export type NotificationType = 'success' | 'alert' | 'warning';

export type Notification = {
  message: string;
  type: NotificationType;
};
