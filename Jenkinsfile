pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
   stages {
      stage('NPM Setup') {
      steps {
         sh 'npm install'
      }
   }

   stages {
      stage('NPM Version') {
      steps {
         sh 'npm -v'
      }
   }
   stages {
      stage('NODE Version') {
      steps {
         sh 'node -v'
      }
   }

}