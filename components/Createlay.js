const Createlay = () => {
	var peek = 1.3;
	var yy = 10;
	var zz = 10;
	var xx = 10;

	var redline = 0.3;
	var startx = 40;
	var starty = 60;
	var ratio = 20;
	var gapgap = 0.1;
	var p = peek * ratio;
	var y = yy * ratio;
	var z = zz * ratio;
	var x = xx * ratio;
	var gap = gapgap * ratio;
	var dieline = redline * ratio;

	var fullcanvasy = z + y + starty + z + p + p + dieline + 20;
	var fullcanvasx = startx + p + 2 * x + 2 * z + 20 + 5 + 20;

	function setupCanvas(canvas) {
		// Get the device pixel ratio, falling back to 1.
		var dpr = window.devicePixelRatio || 0;
		// Get the size of the canvas in CSS pixels.
		//var rect = canvas.getBoundingClientRect();
		// Give the canvas pixel dimensions of their CSS
		// size * the device pixel ratio.

		canvas.width = fullcanvasx * dpr;
		canvas.height = fullcanvasy * dpr;
		// canvas.width = 500 * dpr;
		// canvas.height = 500 * dpr;
		var ctx = canvas.getContext('2d');
		// Scale all drawing operations by the dpr, so you
		// don't have to worry about the difference.
		ctx.scale(dpr, dpr);
		return ctx;
	}

	//alert(fullcanvasx);

	var ctx = setupCanvas(document.getElementById('myCanvas'));
	//ปีกปะกาว1
	ctx.beginPath();
	ctx.moveTo(p + startx, z + starty + p);
	ctx.lineTo(0 + startx, z + p + starty + p - 15);
	ctx.lineTo(0 + startx, z + y - p + starty + p + 15);
	ctx.lineTo(p + startx, z + y + starty + p);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body1

	ctx.beginPath();
	ctx.rect(p + startx, z + starty + p, x, y);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body2
	ctx.beginPath();
	ctx.rect(p + startx + x, z + starty + p, z, y);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body3
	ctx.beginPath();
	ctx.rect(p + startx + x + z, z + starty + p, x, y);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body4
	ctx.beginPath();
	ctx.rect(startx + p + x + z + x, z + starty + p, z, y);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body5
	ctx.beginPath();
	ctx.rect(p + startx, z + starty + y + p, x, z);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//ปีกปะกาว2
	ctx.beginPath();
	ctx.moveTo(startx + p, z + starty + z + y + p);
	//ctx.lineTo(startx+p+p,z+y+z+p+starty+p);

	ctx.arcTo(startx + p, z + y + z + p + starty + p, startx + x, z + y + starty + z + p + p, 20);
	ctx.lineTo(startx + x, z + y + starty + z + p + p);
	ctx.arcTo(startx + x + p, z + y + starty + z + p + p, startx + x + p, z + y + starty + z + p, 20);
	ctx.lineTo(startx + x + 3 * p - 2 * p, z + y + starty + z + p);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body6
	ctx.beginPath();
	ctx.moveTo(startx + p + x, starty + z + y + p);
	ctx.lineTo(startx + p + x + gap * 2, starty + z + y + gap * 2 + p);
	ctx.lineTo(startx + p + x + gap * 2, z + y + starty + z * 0.6 + p);
	//ctx.lineTo(startx+p+x-10*gap+z,z+y+starty+z*0.6+p);
	ctx.arcTo(
		startx + p + x - 10 * gap + z,
		z + y + starty + z * 0.6 + p,
		startx + p + x - 2 * gap + z,
		starty + z + y + gap * 2 + p,
		20
	);
	ctx.lineTo(startx + p + x - 2 * gap + z, starty + z + y + gap * 2 + p);
	ctx.lineTo(startx + p + x + z, z + y + starty + p);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body8
	ctx.beginPath();
	ctx.moveTo(startx + p + x, starty + z + p);
	ctx.lineTo(startx + p + x + gap * 2, starty + z - gap * 2 + p);
	ctx.lineTo(startx + p + x + 5 * gap, starty + z - gap * 2 - 0.3 * z + p);
	//ctx.moveTo(startx+p+x+5*gap,starty+z-gap*2-0.3*z+p);
	ctx.arcTo(
		startx + p + x + 2 * gap + 5 * gap,
		starty + z - gap * 2 - 0.6 * z + p,
		startx + p + x - 2 * gap + z,
		starty + z - gap * 2 - 0.6 * z + p,
		20
	);
	ctx.lineTo(startx + p + x - 2 * gap + z, starty + z - gap * 2 - 0.6 * z + p);
	ctx.lineTo(startx + p + x - 2 * gap + z, starty + z - gap * 2 + p);
	ctx.lineTo(startx + p + x + z, z + starty + p);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body9
	ctx.beginPath();
	ctx.rect(p + startx + x + z, starty + p, x, z);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//p3
	ctx.beginPath();
	ctx.moveTo(startx + p + x + z, starty + p);
	ctx.arcTo(startx + p + x + z, starty, startx + p + x + z + p + x - 2 * p, starty, 20);
	//ctx.lineTo(startx+p+x+z+p, starty);
	ctx.lineTo(startx + p + x + z + p + x - 2 * p, starty);
	ctx.arcTo(startx + p + x + z + x, starty, startx + p + x + z + x, starty + p, 20);
	ctx.lineTo(startx + p + x + z + x, starty + p);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body10
	ctx.beginPath();
	ctx.moveTo(startx + p + x + z + x, starty + z + p);
	ctx.lineTo(startx + p + x + z + x + 2 * gap, starty + z + p - 2 * gap);
	ctx.lineTo(startx + p + x + z + x + 2 * gap, starty + z + p - 2 * gap - 0.6 * z);
	ctx.arcTo(
		startx + p + x + z + x - 2 * gap + z - 10 * gap,
		starty + z + p - 2 * gap - 0.6 * z,
		startx + p + x + z + x + z - 2 * gap,
		starty + p + z - 2 * gap,
		20
	);
	//ctx.lineTo(startx+p+x+z+x-2*gap+z-5*gap,starty+z+p-2*gap-0.6*z);
	ctx.lineTo(startx + p + x + z + x + z - 2 * gap, starty + p + z - 2 * gap);

	ctx.lineTo(startx + p + x + z + x + z, starty + p + z);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//body7
	ctx.beginPath();
	ctx.moveTo(startx + p + x + z + x, starty + p + z + y);
	ctx.lineTo(startx + p + x + z + x + 2 * gap, starty + p + z + y + 2 * gap);
	ctx.arcTo(
		startx + p + x + z + x + 2 * gap + 10 * gap,
		starty + p + z + y + 0.6 * z,
		startx + p + x + z + x - 2 * gap + z,
		starty + p + z + y + 0.6 * z,
		20
	);
	//ctx.lineTo(startx+p+x+z+x+2*gap+10*gap,starty+p+z+y+0.6*z);
	ctx.lineTo(startx + p + x + z + x - 2 * gap + z, starty + p + z + y + 0.6 * z);
	ctx.lineTo(startx + p + x + z + x - 2 * gap + z, starty + p + z + y + 2 * gap);
	ctx.lineTo(startx + p + x + z + x + z, starty + p + z + y);
	ctx.strokeStyle = 'green';
	ctx.stroke();
	//ขอบ
	ctx.beginPath();
	ctx.moveTo(p + startx - dieline, z + starty + p - dieline);
	ctx.lineTo(0 + startx - dieline, z + p + starty + p - 15 - dieline);
	ctx.lineTo(0 + startx - dieline, z + y - p + starty + p + 15 + dieline);
	ctx.lineTo(p + startx - dieline, z + y + starty + p + dieline);
	ctx.lineTo(p + startx - dieline, z + y + starty + p + dieline + z);
	ctx.arcTo(
		startx + p - dieline,
		z + y + z + p + starty + p + dieline,
		startx + x - dieline,
		z + y + starty + z + p + p + dieline,
		20
	);
	//ctx.lineTo(startx+x+dieline,z+y+starty+z+p+p+dieline);
	ctx.arcTo(
		startx + x + p + dieline,
		z + y + starty + z + p + p + dieline,
		startx + x + p + dieline,
		z + y + starty + z + p + dieline,
		20
	);
	ctx.lineTo(startx + x + 3 * p - 2 * p + dieline, z + y + starty + z + p);
	ctx.lineTo(startx + x + 3 * p - 2 * p + dieline, starty + p + z + y + 0.6 * z + dieline);
	ctx.lineTo(startx + x + p + dieline + z - 12 * gap - dieline, starty + p + z + y + 0.6 * z + dieline);
	ctx.arcTo(
		startx + p + x - 10 * gap + z + dieline,
		z + y + starty + z * 0.6 + p + dieline,
		startx + p + x - 2 * gap + z + dieline,
		starty + z + y + gap * 2 + p + dieline,
		20
	);
	ctx.lineTo(startx + p + x - 2 * gap + z + dieline, starty + z + y + gap * 2 + p + dieline);
	ctx.lineTo(startx + p + x + z + dieline, z + y + starty + p + dieline);
	ctx.lineTo(startx + p + x + z + dieline + x - 2 * dieline, z + y + starty + p + dieline);
	ctx.lineTo(startx + p + x + z + x + 2 * gap - dieline, starty + p + z + y + 2 * gap + dieline);
	ctx.arcTo(
		startx + p + x + z + x + 2 * gap + 10 * gap - dieline,
		starty + p + z + y + 0.6 * z + dieline,
		startx + p + x + z + x - 2 * gap + z - dieline,
		starty + p + z + y + 0.6 * z + dieline,
		20
	);
	ctx.lineTo(startx + p + x + z + x - 2 * gap + z + dieline, starty + p + z + y + 0.6 * z + dieline);
	ctx.lineTo(startx + p + x + z + x - 2 * gap + z + dieline, starty + p + z + y + 2 * gap + dieline);
	ctx.lineTo(startx + p + x + z + x + z + dieline, starty + p + z + y + dieline);
	ctx.lineTo(startx + p + x + z + x + z + dieline, starty + p + z + y + dieline - y - 2 * dieline);
	ctx.moveTo(p + startx - dieline, z + starty + p - dieline);
	ctx.lineTo(p + startx - dieline + x, z + starty + p - dieline);
	ctx.lineTo(startx + p + x + gap * 2 - dieline, starty + z - gap * 2 + p - dieline);
	ctx.lineTo(startx + p + x + 5 * gap - dieline, starty + z - gap * 2 - 0.3 * z + p - dieline);
	ctx.arcTo(
		startx + p + x + 2 * gap + 5 * gap - dieline,
		starty + z - gap * 2 - 0.6 * z + p - dieline,
		startx + p + x - 2 * gap + z - dieline,
		starty + z - gap * 2 - 0.6 * z + p - dieline,
		20
	);
	ctx.lineTo(startx + p + x + z - dieline, starty + z - gap * 2 - 0.6 * z + p - dieline);
	ctx.lineTo(startx + p + x + z - dieline, starty + z - gap * 2 - 0.6 * z + p - dieline);
	ctx.lineTo(startx + p + x + z - dieline, starty + p - dieline);
	ctx.arcTo(
		startx + p + x + z - dieline,
		starty - dieline,
		startx + p + x + z + p + x - 2 * p - dieline,
		starty - dieline,
		20
	);
	ctx.lineTo(startx + p + x + z + p + x - 2 * p - dieline, starty - dieline);
	ctx.arcTo(
		startx + p + x + z + x + dieline,
		starty - dieline,
		startx + p + x + z + x + dieline,
		starty + p - dieline,
		20
	);
	ctx.lineTo(startx + p + x + z + x + dieline, starty + p - dieline);
	ctx.lineTo(startx + p + x + z + x + dieline, starty + z + p - 2 * gap - 0.6 * z - dieline);
	ctx.arcTo(
		startx + p + x + z + x - 2 * gap + z - 10 * gap + dieline,
		starty + z + p - 2 * gap - 0.6 * z - dieline,
		startx + p + x + z + x + z - 2 * gap + dieline,
		starty + p + z - 2 * gap - dieline,
		20
	);
	ctx.lineTo(startx + p + x + z + x + z - 2 * gap + dieline, starty + p + z - 2 * gap - dieline);
	ctx.lineTo(startx + p + x + z + x + z + dieline, starty + p + z - dieline);
	ctx.strokeStyle = 'red';
	ctx.stroke();

	//line 1
	ctx.beginPath();
	ctx.moveTo(10, starty);
	ctx.lineTo(20, starty);
	ctx.lineTo(20, starty + p + z + y + z + p);
	ctx.lineTo(10, starty + p + z + y + z + p);
	ctx.stroke();

	ctx.beginPath();
	ctx.save();
	ctx.translate(15, (starty + 20 + 2 * p + 2 * z + y) / 2);
	ctx.rotate(-0.5 * Math.PI);

	var rText = parseFloat((2 * p / ratio + 2 * z / ratio + y / ratio).toFixed(10)) + ' cm.';
	ctx.font = '20px Georgia';
	ctx.fillText(rText, 0, 0);
	ctx.restore();

	//line 2
	ctx.beginPath();
	ctx.moveTo(startx, 10);
	ctx.lineTo(startx, 20);
	ctx.lineTo(startx + p + 2 * x + 2 * z, 20);
	ctx.lineTo(startx + p + 2 * x + 2 * z, 10);
	ctx.stroke();

	ctx.beginPath();
	ctx.save();
	ctx.translate((startx + p + 2 * x + 2 * z) / 2, 15);
	//ctx.rotate(-0.5*Math.PI);

	var rText = parseFloat((p / ratio + 2 * x / ratio + 2 * z / ratio).toFixed(10)) + ' cm.';
	ctx.font = '20px Georgia';
	ctx.fillText(rText, 0, 0);
	ctx.restore();

	//line 3
	ctx.beginPath();
	ctx.moveTo(startx + p, 30);
	ctx.lineTo(startx + p, 40);
	ctx.lineTo(startx + p + x, 40);
	ctx.lineTo(startx + p + x, 30);
	ctx.strokeStyle = 'green';
	ctx.stroke();

	ctx.beginPath();
	ctx.save();
	ctx.translate(startx + p + x / 2, 40);
	//ctx.rotate(-0.5*Math.PI);

	var rText = parseFloat((x / ratio).toFixed(10)) + ' cm.';
	ctx.font = '20px Georgia';
	ctx.fillText(rText, 0, 0);
	ctx.restore();

	//line 4
	ctx.beginPath();
	ctx.moveTo(startx + p + x, 40);
	ctx.lineTo(startx + p + x + z, 40);
	ctx.lineTo(startx + p + x + z, 30);
	ctx.strokeStyle = 'green';
	ctx.stroke();

	ctx.beginPath();
	ctx.save();
	ctx.translate(startx + p + x + z / 2, 40);
	//ctx.rotate(-0.5*Math.PI);

	var rText = parseFloat((z / ratio).toFixed(10)) + ' cm.';
	ctx.font = '20px Georgia';
	ctx.fillText(rText, 0, 0);
	ctx.restore();

	//line 5
	ctx.beginPath();
	ctx.moveTo(startx + p + 2 * x + 2 * z + 20 + 10, starty + p + z);
	ctx.lineTo(startx + p + 2 * x + 2 * z + 20, starty + p + z);
	ctx.lineTo(startx + p + 2 * x + 2 * z + 20, starty + p + z + y);
	ctx.lineTo(startx + p + 2 * x + 2 * z + 20 + 10, starty + p + z + y);
	ctx.strokeStyle = 'red';
	ctx.stroke();

	ctx.beginPath();
	ctx.save();
	ctx.translate(startx + p + 2 * x + 2 * z + 20 + 5, starty + p + z + y / 2);
	ctx.rotate(0.5 * Math.PI);

	var rText = parseFloat((y / ratio).toFixed(10)) + ' cm.';
	ctx.font = '20px Georgia';
	ctx.fillText(rText, 0, 0);
	ctx.restore();

	const image = document.getElementById('source');
	console.log(image);

	image.addEventListener('load', (e) => {
		ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
	});

	return null;
};

export default Createlay;
