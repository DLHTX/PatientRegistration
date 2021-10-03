/*
 * @Date: 2021-10-02 21:47:58
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
export interface IPatient {
    name: string
    birth: string
    sex: string
    phone: string
    email: string
    address?: string | null
    driver_license: string
    appointment_time: string
}
