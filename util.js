var weekdays = ['日', '一', '二', '三', '四', '五', '六'];
function getInitStyle() {
  var width = window.document.documentElement.clientWidth > 640 ? 640 : window.document.documentElement.clientWidth;
  document.documentElement.style.fontSize = width / 7.5 + "px";
};
getInitStyle();
window.addEventListener('resize', getInitStyle);

function get(path, callback) {
  $.ajax({
    method: 'GET',
    dataType: 'JSONP',
    jsonp: 'callback',
    jsonpCallback: 'cb',
    url: 'http://101.95.97.178:2003' + path,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/com.droi.qy-v1.0-1+json',
    },
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.log('err', err);
    }
  });
}

function getParams(query) {
  var params = {};
  var hash;
  var hashs = query.slice(1).split('&');
  for (var i = 0; i < hashs.length; i++) {
    hash = hashs[i].split('=');
    params[hash[0]] = hash[1];
  }
  return params;
}

Handlebars.registerHelper('getIndex', function(idx) {
  return idx + 1;
})
Handlebars.registerHelper('getDate', function(time) {
  if(time) {
    return time.slice(10);
  }
  return ' ';
})
Handlebars.registerHelper('getRecommentName', function(recommends) {
  if (recommends && recommends.length) {
    return recommends[0].nickname;
  }
  return ' ';
})
Handlebars.registerHelper('getDay', function(time) {
  if(!time) {
    return ' '
  }
  var date = new Date(time);
  return date.getDate();
})
Handlebars.registerHelper('getWeekday', function(time) {
  if (!time) {
    return ' '
  }
  var date = new Date(time);
  return weekdays[date.getDay()];
})
Handlebars.registerHelper('getYM', function(time) {
  if (!time) {
    return ' '
  }
  var date = new Date(time);
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
})
