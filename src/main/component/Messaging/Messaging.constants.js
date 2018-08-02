import EventNameUtil from '../../util/EventNameUtil';

export const LONG_NOTIFICATION_TIMEOUT = 10000; // timeout to the notification message, set to 10 seconds
export const SHORT_NOTIFICATION_TIMEOUT = 5000; // timeout to the notification message, set to 5 seconds

export const COMPONENT_NAME = 'Messaging';
export const REDUCER_NAME = COMPONENT_NAME + 'Reducer';

const eventNameUtil = new EventNameUtil(COMPONENT_NAME);

export const SELECT = eventNameUtil.select();
export const DISMISS = eventNameUtil.event('DISMISS');