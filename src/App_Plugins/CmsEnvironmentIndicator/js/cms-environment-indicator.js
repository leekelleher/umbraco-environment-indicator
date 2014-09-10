app.run([function () {
	var config = [
		{ pattern: "^localhost$", color: "991d99" },
		{ pattern: "^dev-.*\.umbraco\.io$", color: "1d1d99" },
		{ pattern: "^stage-.*\.umbraco\.io$", color: "1d991d" },
		{ pattern: "^.*\.umbraco\.io$", color: "991d1d" }
	];

	var id = 'favicon';

	// check if the '#favicon' already exists; if so exit
	if (document.getElementById(id)) { return; }

	// get the HEX colour value
	var color = getColor();

	// create the <link> tag for the favicon
	var link = document.createElement('link');
	link.id = id;
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = '/umbraco/assets/img/application/logo_white.png?tint=' + color;

	// reference the <head>, add the <link>
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(link);

	// create the <style> block for custom CSS rule
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerText = "ul.sections li.avatar, ul.sections li.avatar:hover { border-left: 8px #" + color + " solid; }";
	head.appendChild(style);

	// function to match the domain/hostname and return get the associated HEX colour value
	function getColor() {
		if (config) {
			for (var i in config) {
				if (new RegExp(config[i].pattern, "i").test(document.domain)) {
					return config[i].color;
				}
			}
		}

		// fallback on a random HEX colour value
		// hat-tip: http://www.paulirish.com/2009/random-hex-color-code-snippets/
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}

}]);