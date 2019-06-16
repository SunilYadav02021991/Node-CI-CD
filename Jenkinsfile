pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
   stages {
      stage('Install dependencies') {
      steps {
         sh 'npm install'
      }
   }
   stage('Run application') {
      steps {
        sh 'node app.js'
    }
  }

   stage('Running tests') {
      steps {
      echo "/scripts/test"
   }
  }

   stage('Done') {
      steps {
       echo "Build is Done"
    }
   }

}

