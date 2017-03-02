const FollowToggle = require('./follow_toggle.js')

$(function(){
  $('.follow_toggle').each(function() {
    new FollowToggle($(this));
  });
});
