import EventNameUtil from '../../util/EventNameUtil';

export const COMPONENT_NAME = 'Confirm';
export const REDUCER_NAME = COMPONENT_NAME + 'Reducer';

const eventNameUtil = new EventNameUtil(COMPONENT_NAME);

export const SHOW = eventNameUtil.event('SHOW');