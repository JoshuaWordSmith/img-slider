function renderArr(a,b){a.forEach(function(a){var c=showRepos(a);b.prepend(c)})}function renderObj(a,b){var c=showInfo(a);b.prepend(c)}function render(a){var b=imgList[a];$(".slider").html("<img src="+b+" class=img-top>")}var showInfo=_.template($(".info-master").text());$.getJSON("http://gateway.marvel.com:80/v1/public/characters?name=Gambit&apikey=ecbc9156149622b1e7ffc3da73eea458").done(function(a){renderObj(a,$(".info-list"))});var imgList=["https://s3.amazonaws.com/ooomf-com-files/ikZyw45kT4m16vHkHe7u_9647713235_29ce0305d2_o.jpg","https://s3.amazonaws.com/ooomf-com-files/BIR62RGGjGxN5nrbnzwu_3.jpg","https://s3.amazonaws.com/ooomf-com-files/YOfYx7zhTvYBGYs6g83s_IMG_8643.jpg"];$(".start").click(function(){var a=0;setInterval(function(){a>imgList.length-1&&(a=0),render(a),a++},2e3)});