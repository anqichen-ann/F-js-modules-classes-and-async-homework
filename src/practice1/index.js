import getUrl from './utils';
import * as info from './constant'

export const url = getUrl.myURL(info.ADDRESS,info.PORT,info.PATH);

export const region = info.REGION;
