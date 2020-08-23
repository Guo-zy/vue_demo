import { request } from './index';

export function getHomeMulitidata() {
    return request({
        url: '/home/multidata',
    });
}