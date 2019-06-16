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

