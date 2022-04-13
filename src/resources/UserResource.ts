import { AxiosRequestConfig } from 'axios';
import ResourceConfig from '../configs/ResourceConfig';

export default class UserResource {
    static register = (): AxiosRequestConfig => ({
        method: 'POST',
        url: `${ResourceConfig.API_URL}/api/users/register`,
    });
}
