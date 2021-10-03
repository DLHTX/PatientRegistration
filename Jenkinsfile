def timeStamp = Calendar.getInstance().getTime().format('YYYYMMdd-hhmmss',TimeZone.getTimeZone('CST'))
pipeline {
    agent any

    stages {
        stage('dev代码打包'){
             when {
                branch pattern: "dev", comparator: "REGEXP"
            }
            steps {
                echo '代码打包......'
                echo 'Pulling...' + currentBuild.projectName + env.BRANCH_NAME
                sh 'cnpm install'
                sh 'cp .env.development .env'
                sh 'cnpm run build'
            }
        }
        stage('test代码打包'){
             when {
                branch pattern: "test", comparator: "REGEXP"
            }
            steps {
                echo '代码打包......'
                echo 'Pulling...' + currentBuild.projectName + env.BRANCH_NAME
                sh 'cnpm install'
                sh 'cp .env.test .env'
                sh 'quasar build'
            }
        }
        stage('master代码打包'){
             when {
                branch pattern: "master", comparator: "REGEXP"
            }
            steps {
                echo '代码打包......'
                echo 'Pulling...' + currentBuild.projectName + env.BRANCH_NAME
                sh 'cnpm install'
                sh 'cp .env.production .env'
                // sh 'quasar ext add @quasar/dotenv'
                sh 'quasar build'
            }
        }
        stage('docker镜像制作和推送'){
            steps {
                echo '推送远程服务器......'
                sh 'docker build -t '+ env.BRANCH_NAME+'-'+currentBuild.projectName+':'+timeStamp+' --build-arg NGINXCONF='+env.BRANCH_NAME+' .'
                sh 'docker tag ' + env.BRANCH_NAME+'-'+currentBuild.projectName+':'+ timeStamp +' 192.168.0.107:5888/patientRegistration/' + env.BRANCH_NAME+'-'+currentBuild.projectName+':'+timeStamp
                sh 'docker push 192.168.0.107:5888/patientRegistration/'+env.BRANCH_NAME+'-'+currentBuild.projectName+':'+timeStamp
                sh 'docker rmi '+env.BRANCH_NAME+'-'+currentBuild.projectName+':'+timeStamp
                sh 'docker rmi 192.168.0.107:5888/patientRegistration/'+env.BRANCH_NAME+'-'+currentBuild.projectName+':'+timeStamp
            }
        }
        stage('dev推送远程服务器'){
            when {
                branch pattern: "dev", comparator: "REGEXP"
            }
            steps {
                echo 'dev推送远程服务器......'+env.WORKSPACE
                sh 'scp -r  '+env.WORKSPACE +'root@ip:/data/wwwroot/patientRegistration'
            }
        }
        stage('test推送远程服务器'){
            when {
                branch pattern: "test", comparator: "REGEXP"
            }
            steps {
                echo 'test推送远程服务器......'+env.WORKSPACE
                sh 'scp -r root@ip:/data/wwwroot/patientRegistration'
            }
        }
        stage('邮件或钉钉推送告知'){
            steps {     
                echo '邮件或钉钉推送告知......'
            }
            post {
                success {
                    dingtalk (
                        robot: '4d14671a-b087-4c46-a623-c52d530e668e',
                        type: 'TEXT',
                        text: [
                            '项目:'+currentBuild.projectName,
                            '分支:'+env.BRANCH_NAME,
                            '构建成功'
                        ]
                    )
                }
                failure {
                    dingtalk (
                        robot:'4d14671a-b087-4c46-a623-c52d530e668e',
                        type:'TEXT',
                        text:[
                             '项目:'+currentBuild.projectName,
                            '分支:'+env.BRANCH_NAME,
                            '构建失败'
                        ]
                    )
                }
                unstable {
                    //当此Pipeline 为不稳定时打印消息
                    dingtalk (
                        robot:'4d14671a-b087-4c46-a623-c52d530e668e',
                        type:'TEXT',
                        text:[
                             '项目:'+currentBuild.projectName,
                            '分支:'+env.BRANCH_NAME,
                            '构建不稳定'
                        ]
                    )   
                }
                aborted {
                    //当此Pipeline 终止时打印消息
                    dingtalk (
                        robot:'4d14671a-b087-4c46-a623-c52d530e668e',
                        type:'TEXT',
                        text:[
                             '项目:'+currentBuild.projectName,
                            '分支:'+env.BRANCH_NAME,
                            '构建中断'
                        ]
                    )
                }
                changed {
                    //当pipeline的状态与上一次build状态不同时打印消息
                    dingtalk (
                        robot:'4d14671a-b087-4c46-a623-c52d530e668e',
                        type:'TEXT',
                        text:[
                             '项目:'+currentBuild.projectName,
                            '分支:'+env.BRANCH_NAME,
                            '构建变更'
                        ]
                    )         
                }     
            }
        }
    }
}