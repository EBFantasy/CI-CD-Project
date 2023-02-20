pipeline {
  agent any

  stages {
    stage('Test') {
      steps {
        sh 'npm install'
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'npm install -g surge'
        sh 'surge ./build yourdomain.surge.sh'
      }
    }
  }
}