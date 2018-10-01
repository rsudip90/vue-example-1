import Vue from 'vue'

// capitalize: First letter in upper case in entire value (string)
Vue.filter("capitalize", function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
})

// truncate: truncate value upto given max value
Vue.filter("truncate", function(value, max) {
    if (!value) return '';
    value = value.toString();
    return (value.length > max) ? value.substring(0, max) + "..." : value;
})
