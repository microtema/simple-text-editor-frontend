import EventNameUtil from '../../util/EventNameUtil';

export const COMPONENT_NAME = 'TextFile';
export const REDUCER_NAME = COMPONENT_NAME + 'Reducer';

const eventNameUtil = new EventNameUtil(COMPONENT_NAME);

export const QUERY = eventNameUtil.query();
export const UPDATE = eventNameUtil.update();
export const REMOVE = eventNameUtil.remove();
