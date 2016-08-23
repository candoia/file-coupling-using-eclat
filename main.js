'use strict';
$('#content').show();
  let json = api.boa.run('revisions.boa','arff');
  var result = api.spmf.eclat(json, '0.01');
  $('#loading').hide();
  $('#content').show();
  var lines = result.split('\n');
  for(var line of lines){
    line += '<br />';
    $(document.body).append(line);
  }
$('#content').hide();
