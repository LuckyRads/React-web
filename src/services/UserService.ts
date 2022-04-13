import axios from 'axios';
import { toast } from 'react-toastify';
import UserResource from '../resources/UserResource';
import { StatusResponse } from '../types/ResponseTypes';

export default class UserService {
    public static register = (): void => {
        axios
            .request<StatusResponse>(UserResource.register())
            .then(response => {
                console.log(response);
            })
            .catch(this.#generalError);
    };

    static #generalError = (): void => {
        toast.error('An error has occurred.');
    };
}
