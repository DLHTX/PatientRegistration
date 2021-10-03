/*
 * @Date: 2021-10-02 20:47:13
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
import { SERVER } from '../constants/server'
import axios, { requestWithoutErrorToast } from '../helpers/axios'
import { ILoginRequest, ILoginResult } from './types/auth'

type LoginFn = (params: ILoginRequest) => Promise<any>

const login: LoginFn = ({ name, password }) => {
  return requestWithoutErrorToast({
    url: '/user/login',
    method: 'post',
    data: {
      name,
      password,
    },
  })
}

const upload: string = SERVER + '/file/upload'


export default {
  login, upload
}
