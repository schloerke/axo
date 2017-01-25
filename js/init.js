$(function(){
  
  for(var i = 1; i <= 25; i++) {
    $("#quantity_stars").append("<option>" + i + "</option>");
  }
  for(var i = 2011; i >= 1950; i--) {
    $("#init").append("<option>" + i + "</option>");
  }
  $("#init").val(2011-50);
  var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PW", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
  for(var i = 0; i < states.length; i++) {
    $("#state").append("<option>" + states[i] + "</option>")
  }
  $("#state").val("IA");
  
  is_blank = function(sel) {
    return $(sel).val() === ""
  }
  alert_if_blank = function(sel, field, formName) {
    if (is_blank(sel)) {
      alert("Please include the field '" + field + ": ' when submitting the " + formName + " form.")
      return false;
    }
    return true;
  }
  $("#donate_form").submit(function() {
    if (is_blank("#donate_from")) {
      $("#donate_from").val("Anonymous")
    }
    return true
  });
  $("#stars_form").submit(function() {
    if (is_blank("#stars_from")) {
      $("#stars_from").val("Anonymous")
    }
    return alert_if_blank("#stars_to", "To", "Stars");
  });
  
  guest_is_valid = function() {
    if ($("#guest_drop").attr("selectedIndex") === 0 || ($("#guest_drop").attr("selectedIndex") === $("#registration_guests").val().split(",").length && $("#registration_guests").val() !== "None")) {
      return true;
    } else {
      alert("Guest count does not match guests entered.  Please have names be comma separated.");
      return false;
    }
    
  }
  
  $("#registration_form").submit(function() {
    if (is_blank("#registration_guests")) {
      $("#registration_guests").val("(none)");
    }
    
    if (!guest_is_valid()) {
      return false;
    }
    
    return alert_if_blank("#registration_name", "Name", "Registration") && alert_if_blank("#registration_address", "Address", "Registration") && alert_if_blank("#registration_city", "City", "Registration") && alert_if_blank("#registration_email", "Email", "Registration");
  });
  
  
  $("a#star_help").fancybox();
  
  
  var show = false;
  $("#guest_drop").change(function() {
    if($("#guest_drop").attr("selectedIndex") !== 0) {
      if (show != true) {
        $("#registration_guests_title").removeAttr('disabled');
        $("#registration_guests").removeAttr('disabled');
      }
      show = true;
    } else {
      $("#registration_guests_title").attr('disabled', 'disabled');
      $("#registration_guests").attr('disabled', 'disabled').val("None");
      show = false;
    }
  });
  $("#registration_guests_title").attr('disabled', 'disabled');
  $("#registration_guests").attr('disabled', 'disabled').val("None");
  
  
  
  
  // $(document).ready(function() {
  // 
  //  /* This is basic - uses default settings */
  // 
  //  $("a#single_image").fancybox();
  // 
  //  /* Using custom settings */
  // 
  //  $("a#inline").fancybox({
  //    'hideOnContentClick': true
  //  });
  // 
  //  /* Apply fancybox to multiple items */
  // 
  //  $("a.group").fancybox({
  //    'transitionIn'  : 'elastic',
  //    'transitionOut' : 'elastic',
  //    'speedIn'   : 600, 
  //    'speedOut'    : 200, 
  //    'overlayShow' : false
  //  });
  // 
  // });
  
});




