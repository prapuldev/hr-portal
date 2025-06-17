pipeline {
  agent any

  environment {
    DOCKER_COMPOSE_PATH = 'hr-portal/docker-compose.yml'
  }

  options {
    timestamps() // Adds timestamps to console output
    ansiColor('xterm') // Enables colored output in terminal
  }

  stages {
    stage('Checkout Source Code') {
      steps {
        echo "📥 Checking out source code..."
        checkout scm // Assumes Jenkins pulls the Git repo
      }
    }



    stage('Build Docker Images') {
      steps {
        echo " Building Docker images for frontend and backend..."
        sh "docker-compose -f $DOCKER_COMPOSE_PATH build"
      }
    }

    stage('Deploy Services') {
      steps {
        echo " Deploying application using Docker Compose..."
        sh "docker-compose -f $DOCKER_COMPOSE_PATH up -d"
      }
    }

    stage('Verify Services') {
      steps {
        echo " Verifying running containers..."
        sh "docker ps"
      }
    }
  }

  post {
    success {
      echo " Deployment successful!"
    }
    failure {
      echo " Deployment failed. Please check the logs."
    }
    always {
      echo " Pipeline execution completed."
    }
  }
}
