pipeline {
  agent any

  environment {
    PROJECT_ROOT = "${WORKSPACE}"
  }

  stages {
    // stage('Clone Repository') {
    //   steps {
    //     git 'https://github.com/prapuldev/hr-portal.git'
    //   }
    // }

    // stage('Install Frontend Dependencies and Build') {
    //   steps {
    //     dir('front-end') {
    //       sh 'npm install'
    //       sh 'npm run build'
    //     }
    //   }
    // }

    // stage('Install Backend Dependencies') {
    //   steps {
    //     dir('Server Side') {
    //       sh 'npm install'
    //     }
    //   }
    // }

    stage('Build Docker Images') {
      steps {
        sh 'docker-compose build'
      }
    }

    stage('Restart Containers') {
      steps {
        sh 'docker-compose down'
        sh 'docker-compose up -d'
      }
    }
  }
}
