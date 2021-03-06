var $ = require('jquery');
window.$ = window.jQuery = $;

var angular = require('angular');
var markalytics = require('markalytics');

var setupHomepage = require('./homepage');
var setupAllArticles = require('./all-articles');
var setupAdmonish = require('./admonish');
//var setupHeaderService = require('./raxheaderservice') commented out line to test deletion of deprecated file

// kick things off

angular.element(function(){

  // FAQs toggle content
  $("div.faq h4").nextUntil("h4, h3, hr, .legal-container").hide();

  $("div.faq h4").click(function() {
    $(this).nextUntil("h4, h3, hr, .legal-container").slideToggle("fast");
    $(this).toggleClass("active", 1000);
  });

  // Tags toggle
  $("#list-tags").click(function() {
    $(".tags-list").toggle();
  });

  // setup the homepage stuff
  if (window.location.pathname.match(/how-to\/$/)) {
    setupHomepage();
  }

  if (window.location.pathname.match(/-all-articles\/$/)) {
    setupAllArticles();
  }

  setupAdmonish();
  //setupHeaderService(); commented out line to test deletion of deprecated file

  //setup the dropdown on the whitepaper site
  $('#topics').change(function() {
    var targetPosition = $($(this).val()).offset().top;
    $('html,body').animate({
      scrollTop: targetPosition
    }, 'slow');
  });


});

angular.module('src', [
  require('angular-cookies'),
  require('angular-sanitize'),
  require('./search')
]);

angular.bootstrap(document, ['src']);
