pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
   stages {
      stage('Install Nodemon') {
      steps {
         sh 'npm install -g nodemon'
      }
   }
   stage('Run application') {
      steps {
        sh 'nodemon app.js'
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

