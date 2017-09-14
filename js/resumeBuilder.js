/*
This is empty on purpose! Your code to build the resume will go here.
 */

 (function() {

   var bio    = {

     name         : "Tunde Abolaji",

     role         : "Senior Technical Specialist",

     contacts     : {

       mobile     : "306.999.0195",
       email      : "Tunde.Abolaji@greystone.ca",
       github     : "https://github.com/Talkense",
       twitter    : "https://twitter.com/MostGbadun",
       location   : "4227 Nicurity Drive, Regina SK S4X 0B9"

     },

     welcomeMessage : "An astute developer with keen eyes for beautiful designs, functional application development with usability best practices. Skilled in HTML, CSS, JavaScript, JSP, Python and Java.",

     skills         : ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'React Native'],

     biopic         : "",

     display: function(){

     }

   },


   education  = {

     schools: [

       {
         name     : "Obafemi Awolowo University",
         location : "Ile Ife, Nigeria",
         degree   : "Bachelor of Science",
         majors   : "Computer Engineering",
         dates    : "Aug-15-2006",
         url      : "http://www.oauife.edu.ng/"
       },

       {
         name     : "University of Regina",
         location : "Regina SK",
         degree   : "Master of Science",
         majors   : "Software Engineering",
         dates    : "Aug-20-2014",
         url      : "https://www.uregina.ca/"
       }

     ],

     onlineCourses: [

       {
         title   : "JavaScript Design Patterns",
         school  : "Udacity",
         dates   : "Aug-15-2017 till Date",
         url     : "https://udacity.com"
       },

       {
         title   : "JavaScript Understanding the Weird Parts",
         school  : "Udemy",
         dates   : "Jan-02-2016 till Jan-13-2016",
         url     : "https://udemy.com"
       },

       {
         title   : "Build Cross Platform React Native Apps with Exponent and Redux",
         school  : "PluralSight",
         dates   : "Sep-01-2017 till Date",
         url     : "https://pluralsight.com"
       }

     ],

     display: function(){

     }

   },


   work       = {

     jobs: [

       {
         employer     : "SaskTel",
         title        : "Programmer Analyst",
         location     : "3rd Floor, 2121 Saskatchewan Drive, Regina SK",
         dates        : "Feb-27-2012 till Jun-01-2017",
         description  : "Front-End Developer"
       },

       {
         employer     : "Greystone Managed Investments Inc.",
         title        : "Senior Technical Specialist",
         location     : "1st Floor, 300 Park Centre, 1230 Blackfoot Drive, Regina SK",
         dates        : "(in progress)",
         description  : "Application Developer, Business and Data Analyst"
       }

     ],

     display: function(){

     }

   },


   projects   = {

     projects: [

       {
         title        : "Cat Clicker",
         dates        : "Aug-25-2017",
         description  : "Simple application displaying list of cats and that counts and shows number of time each cat is clicked!",
         images       : [
           "","",""
         ]
       },

       {
         title        : "Internet Speed Comparison Tool",
         dates        : "May-01-2017",
         description  : "",
         images       : [
           "","",""
         ]
       },

       {
         title        : "",
         dates        : "MMM-dd-yyyy",
         description  : "",
         images       : [
           "","",""
         ]
       }

     ],

     display: function(){

     }

   };


   octopus.init();
 }());
