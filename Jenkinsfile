pipeline {
  agent {
    node {
      label 'my-nodejs'
      tool 'Node.js 19.2.0'
    }
  }
  
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/EBFantasy/CI-CD-Project.git'
      }
    }

    stage('Build and Deploy') {
      steps {

        sh 'npm install'

        sh 'npm start'
        
      }
    }
  }
}

