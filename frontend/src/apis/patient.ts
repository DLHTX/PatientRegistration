import { PAGE_SIZE } from './../constants/pagination';
import { IPatient } from './types/patient';
/*
 * @Date: 2021-10-02 21:47:14
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
import axios, { requestWithoutErrorToast } from '../helpers/axios'
import { IPagenation } from './types/pagenation';

type AddPatientFn = (params: IPatient) => Promise<any>
type ListPatientFn = (params: IPagenation) => Promise<any>

const add: AddPatientFn = (params: IPatient) => {
    return requestWithoutErrorToast({
        url: '/patient/add',
        method: "post",
        params,
    })
}

const list: ListPatientFn = (params: IPagenation) => {
    return requestWithoutErrorToast({
        url: '/patient/list',
        method: "post",
        params,
    })
}

export default {
    add, list
}
