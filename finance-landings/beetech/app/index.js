require('./sass/style.sass');
/*require('./sass/media.sass');*/

var page = document.getElementById('index') || document.getElementById('typography');


if (page) {
	var pageTmp = require("pug-loader!./jade/" + page.id + ".jade");
	page.innerHTML = pageTmp();
}

