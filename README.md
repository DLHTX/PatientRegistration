<!--
 * @Author: DLHTX
 * @Date: 2021-10-02 19:02:00
 * @LastEditTime: 2021-10-03 12:26:38
 * @LastEditors: DLHTX
 * @Description: In User Settings Edit
 * @FilePath: \chrome extensionf:\Desktop\Patient Registration\README.md
-->
<h1 align="center">Patient Registration ✨</h1>
- Default admin account : admin 123456

[![4q6PeS.png](https://z3.ax1x.com/2021/10/03/4q6PeS.png)](https://imgtu.com/i/4q6PeS)

| website✨     |   Doc📦  |  
| ----------- | ----------- | 
| [website](http://www.dlhtx.top:9090) | [Doc](http://www.dlhtx.top:3002/swagger-ui.html#/file-controller) 

## Project experience address
Because the project is deployed on NAS at home, the address may be unstable. You can deploy it on the server to learn and experience the project

## Author
👤 **DLHTX**

* Website: http://www.dlhtx.top:9090
* Github: [@DLHTX](https://github.com/DLHTX/)


## 功能列表
- [x] Login/Logout (only support admin login)
- [x] Home Page
- [x] Patient Registration Page
  - [x] Basic form management
  - [x] Picture upload 
  - [x] Patient Registration
- [x] Admin Panel Page
  - [x] Registered Patients List
  
## Technology stack
- React
- TypeScript
- Antd
- CSS Modules/postcss-nested/classnames/tailwind css
- api/axios
- react-router-dom

- Java
- Mybatis
- Mysql
- Springboot
- Swagger
## Screenshot
[![4q6PeS.png](https://z3.ax1x.com/2021/10/03/4q6PeS.png)](https://imgtu.com/i/4q6PeS)
[![4q6psf.png](https://z3.ax1x.com/2021/10/03/4q6psf.png)](https://imgtu.com/i/4q6psf)
[![4q6SQP.png](https://z3.ax1x.com/2021/10/03/4q6SQP.png)](https://imgtu.com/i/4q6SQP)

[![4q69L8.png](https://z3.ax1x.com/2021/10/03/4q69L8.png)](https://imgtu.com/i/4q69L8)

## Browser support

Compatible with any mainstream browser except IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IEdge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |


## Project start
Default admin account : admin 123456
The project adopts the front and backend separation mode

## Front end started locally

```
cd frontend
yarn install / npm install
yarn start /npm start
```

## Back end started locally
### Preparation
- Environment:Java SDK version: 1.8.0
- DataBase:Mysql 5.6 (go to backend/src/main/resources/databaseSQL and run this sql to generate databse)
- Maven:Run Maven install to install maven package
- application-dev.properties:change your mysql url and port and password etc in application-dev.properties datasource setting
### start
```
Run backend/src/main/java/Application in your ide
```
## deploy
- If you want to use CI/CD,i perfer to use github workflows and docker.You can run the docker.sh in project,but However, our server ports are different and may need to be changed

- If your do not want to use github workflows,I also use Jenkins in my work to configure the automated deployment and build process,You can refer to jenkinsfile to adapt your project.