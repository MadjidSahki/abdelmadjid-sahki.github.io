AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
});

jQuery(document).ready(function($) {



 var siteIstotope = function() {
     /* activate jquery isotope */
     let $competencesContainer = $('#competences').isotope({
       itemSelector : '.item',
       isFitWidth: true
     });

     $(window).resize(function(){
         $competencesContainer.isotope({
         columnWidth: '.col-sm-3'
       });
     });

     let $projectsContainer = $('#projects').isotope({
       itemSelector : '.item',
       isFitWidth: true
     });

     $(window).resize(function(){
         $projectsContainer.isotope({
         columnWidth: '.col-sm-3'
       });
     });

     $projectsContainer.isotope({ filter: '*' });

       // filter items on button click
     $('#competencesFilter').on( 'click', 'button', function(e) {
         e.preventDefault();
       var filterValue = $(this).attr('data-filter');
         $competencesContainer.isotope({ filter: filterValue });
       $('#competencesFilter button').removeClass('active');
       $(this).addClass('active');
     });

     $('#projectFilters').on( 'click', 'button', function(e) {
         e.preventDefault();
       var filterValue = $(this).attr('data-filter');
         $projectsContainer.isotope({ filter: filterValue });
       $('#projectFilters button').removeClass('active');
       $(this).addClass('active');
     });
 }

 siteIstotope();

});
