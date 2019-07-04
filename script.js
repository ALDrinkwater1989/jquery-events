$(document).ready(function() {

   $("#html_btn").click(function() {
      $("#html-p").slideToggle(1000);

   });
   $("#mySql_btn").click(function() {
      $("#sql-p").slideToggle(1000);
   });
   $("#python_btn").click(function() {
      $("#python-p").slideToggle(1000);
   });
   $("#jquery_btn").click(function() {
      $("#jq-p").slideToggle(1000);
   });
   $("#django_btn").click(function() {
      $("#dj-p").slideToggle(1000);
   });
   $("#css_btn").click(function() {
      $("#css-p").slideToggle(1000);
   });
   $("#html_btn").mouseenter(function() {
      ("#html_btn").fadeTo(1000, 0.5);
   });
   $("#mySql_btn").mouseleave(function() {
      $("#mySql").fadeTo(1000, 1);
   });
     $("#python_btn").mouseenter(function() {
      ("#python_btn").fadeTo(1000, 0.5);
   });
   $("#jquery_btn").mouseleave(function() {
      $("#jquery_btn").fadeTo(1000, 1);
   });
     $("#django_btn").mouseenter(function() {
      ("#django_btn").fadeTo(1000, 0.5);
   });
   $("#css_btn").mouseleave(function() {
      $("#css_btn").fadeTo(1000, 1);
   });
  

});
