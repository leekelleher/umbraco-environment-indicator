app.run([function () {
	var id = 'favicon';

	// check if the '#favicon' already exists; if so exit
	if (document.getElementById(id)) { return; }

	// create the <link> tag for the favicon
	var link = document.createElement('link');
	link.id = id;
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = '/umbraco/assets/img/application/logo_white.png';

	// reference the <head>, add the <link>
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(link);

	// create a stub <img> to load up the image (from URL/path)
	var img = document.createElement("img");
	img.addEventListener("load", onImageLoaded);
	img.src = link.href;

	// get the HEX colour value
	var color = getColor();

	// create the <style> block for custom CSS rule
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerText = "ul.sections li.avatar, ul.sections li.avatar:hover { border-left: 8px " + color + " solid; }";
	head.appendChild(style);

	// function to add the solid colour layer over the favicon
	// hat-tip: http://blog.roomanna.com/09-24-2011/dynamically-coloring-a-favicon
	function onImageLoaded() {
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;

		var context = canvas.getContext("2d");
		context.drawImage(img, 0, 0);
		context.globalCompositeOperation = "source-in";
		context.fillStyle = color;
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fill();

		link.href = canvas.toDataURL();
	};

	// function to match the domain/hostname and return get the associated HEX colour value
	function getColor() {
		var lookup = [
			{ pattern: "^localhost$", color: "#991d99" },
			{ pattern: "^dev-.*\.umbraco\.io$", color: "#1d1d99" },
			{ pattern: "^stage-.*\.umbraco\.io$", color: "#1d991d" },
			{ pattern: "^.*\.umbraco\.io$", color: "#991d1d" }
		];

		for (var i in lookup) {
			if (new RegExp(lookup[i].pattern, "i").test(document.domain)) {
				return lookup[i].color;
			}
		}

		// fallback on a random HEX colour value
		// hat-tip: http://www.paulirish.com/2009/random-hex-color-code-snippets/
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}

}]);