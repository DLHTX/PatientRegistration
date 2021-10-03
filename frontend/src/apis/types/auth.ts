/*
 * @Date: 2021-10-02 20:47:13
 * @Author: DLHTX
 * @LastEditors: DLHTX
 */
export interface ILoginRequest {
  name: string
  password: string
}

export interface ILoginResult {
  token: string
  userId: number
  profile: {
    userId: number
    vipType: number
    gender: number
    accountStatus: number
    nickname: string
    birthday: number
    city: number
    userType: number
    backgroundImgId: number
    detailDescription: string
    followed: boolean
    backgroundUrl: string
    avatarUrl: string
    province: number
    defaultAvatar: boolean
    authStatus: number
    description: string
    signature: string
    authority: number
    followeds: number
    follows: number
    eventCount: number
    playlistCount: number
    playlistBeSubscribedCount: number
  }
}
