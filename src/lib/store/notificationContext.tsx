'use client';

import React from 'react';
import { Notification, NotificationType } from './types';

type NotificationState = {
  notification?: Notification | null;
  showNotification: (message: string, type: NotificationType) => void;
  hideNotification: () => void;
};

const defaultValues: NotificationState = {
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
};

export const NotificationContext =
  React.createContext<NotificationState>(defaultValues);

NotificationContext.displayName = 'NotificationContext';
