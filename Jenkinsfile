pipeline {
  agent any

  environment {
    PROJECT_ROOT = "${WORKSPACE}"
  }

  stages {

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
