$(function() {
	var spreadsheetID = "1nzxu7SPcxzEHfdS5DqgquHouMU5WO_a93RSdKcwKfio";                   
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";
  $.getJSON(url, function(data) {
  	console.log(data.feed.entry);
  	for (var i = 0; i < data.feed.entry.length; i++) {
  		var elem = data.feed.entry[i];
  		var imgUrl = elem.gsx$adimageurl.$t;
  		var adName = elem.gsx$adname.$t;
  		var link = elem.gsx$link.$t;
  		console.log(imgUrl);
  		console.log(adName);
  		var htmlCol = `
	  		<div class="col-sm-6 col-lg-4 col-md-4">
	        <div class="box">
	          <a href="${link}" class="box" style="text-decoration: none;">
	            <center>
	              <img data-original="${imgUrl}" class="album" width="300" src="${imgUrl}" style="">
	              <p style="margin-top:30px;font-size:16px;color:#687d89;margin-left:50px;margin-right:50px;">${adName}</p>
	            </center>
	          </a>
	        </div>
	      </div>`;
	    $('.adspace').append(htmlCol);
  	}
  });
});
