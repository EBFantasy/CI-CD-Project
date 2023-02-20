pipeline {
  agent {
    node {
      label 'my-nodejs'
      tools {nodejs "Node.js 19.2.0"}
    }
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}

