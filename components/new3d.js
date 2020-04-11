init();
animate();

function init() {
	let w = 600;
	let h = 600;
	let leng_lr_lib = B * 0.6;

	//camera
	container = document.querySelector('#webgl');
	camera = new THREE.PerspectiveCamera(45, w / h, 1, 5000);
	camera.position.set(10, 20, 50);

	//controls
	controls = new THREE.OrbitControls(camera, container);
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;

	//Scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x8fbcd4);

	// Helpers
	//axes = new THREE.AxisHelper(50);
	//helper = new THREE.GridHelper(1000, 10);
	// helper.setColors(0x0000ff, 0x808080);
	//scene.add(axes);
	//scene.add(helper);

	var A = 60; //กว้าง
	var B = 60; //ยาว
	var C = 60; //ลึก
	var P = 1.5; // ปีก

	// Torus Geometry
	var material = new THREE.MeshStandardMaterial({
		color       : 0xff3333,
		flatShading : true,
		side        : THREE.DoubleSide
	});
	var plane_side = new THREE.PlaneGeometry(120, 120);
	//var little =  new THREE.PlaneGeometry(120, 10);
	var plane_side_A = new THREE.PlaneGeometry(A, C);
	var plane_side_B = new THREE.PlaneGeometry(B, C);
	var plane_top_bottom = new THREE.PlaneGeometry(A, B);

	// set value for draw lid top
	var lid_shape = new THREE.Shape();
	lid_shape.moveTo(0, 0);
	lid_shape.lineTo(A, 0);
	lid_shape.bezierCurveTo(A, 0, A - A / 35, -(P - P / 35), A - A / 10, -P);
	lid_shape.lineTo(A / 10, -P);
	lid_shape.bezierCurveTo(A / 10, -P, A / 35, -(P - P / 35), 0, 0);

	// set value for draw lid beside
	var lr_lid_shape = new THREE.Shape();
	lr_lid_shape.moveTo(0, 0);
	lr_lid_shape.lineTo(0, leng_lr_lib * 0.1);
	lr_lid_shape.lineTo(B * 0.05, leng_lr_lib * 0.15);
	lr_lid_shape.lineTo(B * 0.15, leng_lr_lib * 0.9);
	lr_lid_shape.lineTo(B * 0.2, leng_lr_lib);
	lr_lid_shape.lineTo(B, leng_lr_lib);
	lr_lid_shape.lineTo(B, 0);
	lr_lid_shape.lineTo(0, 0);

	var extrudeSettings = {
		steps          : 2,
		depth          : 0,
		bevelEnabled   : false,
		bevelThickness : 1,
		bevelSize      : 0,
		bevelOffset    : 0,
		bevelSegments  : 1
	};

	var lid_cover = new THREE.ExtrudeGeometry(lid_shape, extrudeSettings);
	var lr_lid = new THREE.ExtrudeGeometry(lr_lid_shape, extrudeSettings);

	plane_side.rotateX(Math.PI / 2);

	side_A_front = new THREE.Mesh(plane_side_A, material);
	side_A_front.position.z = B / 2;
	side_A_back = side_A_front.clone();
	side_A_back.position.z = -B / 2;

	side_B_left = new THREE.Mesh(plane_side_B, material);
	side_B_left.rotation.y = Math.PI / 2;
	side_B_left.position.x = -A / 2;
	side_B_right = side_B_left.clone();
	side_B_right.position.x = A / 2;

	side_top = new THREE.Mesh(plane_top_bottom, material);
	side_top.rotation.x = Math.PI / 2;
	side_top.position.z = C / 2;

	side_bott = new THREE.Mesh(plane_top_bottom, material);
	side_bott.rotation.x = -(Math.PI / 2);
	side_bott.position.z = C / 2;

	side_lid_cover_top = new THREE.Mesh(lid_cover, material);
	side_lid_cover_top.position.x = -A / 2;
	side_lid_cover_top.position.z = C;

	side_lid_cover_down = new THREE.Mesh(lid_cover, material);
	side_lid_cover_down.position.x = -A / 2;
	side_lid_cover_down.position.z = C;
	side_lid_cover_down.rotation.x = Math.PI;
	//side_lid_cover_down.rotation.z= -Math.PI;

	pivot_top = new THREE.Object3D();
	pivot_top.position.set(0, B / 2, -C / 2);
	scene.add(pivot_top);
	pivot_top.add(side_top, side_lid_cover_top);

	pivot_down = new THREE.Object3D();
	pivot_down.position.set(0, -B / 2, -C / 2);
	scene.add(pivot_down);
	pivot_down.add(side_bott, side_lid_cover_down);

	side_pp_right = new THREE.Mesh(lr_lid, material);
	side_pp_right.position.x = 0;
	side_pp_right.position.z = C / 2;
	side_pp_right.rotation.x = -Math.PI / 2;
	side_pp_right.rotation.z = Math.PI / 2;

	side_pp_left = new THREE.Mesh(lr_lid, material);
	side_pp_left.position.x = 0;
	side_pp_left.position.z = C / 2;
	side_pp_left.rotation.x = Math.PI / 2;
	side_pp_left.rotation.z = -(Math.PI / 2);

	side_pp_right_d = new THREE.Mesh(lr_lid, material);
	side_pp_right_d.position.x = 0;
	//side_pp_right_d.position.y = -B;
	side_pp_right_d.position.z = C / 2;
	side_pp_right_d.rotation.x = Math.PI / 2;
	side_pp_right_d.rotation.z = -(Math.PI / 2);

	side_pp_left_d = new THREE.Mesh(lr_lid, material);
	side_pp_left_d.position.x = 0;
	// side_pp_left_d.position.y = -B;
	side_pp_left_d.position.z = C / 2;
	side_pp_left_d.rotation.x = -Math.PI / 2;
	side_pp_left_d.rotation.z = Math.PI / 2;

	pivot_right_top = new THREE.Object3D();
	pivot_right_top.position.set(A / 2, B / 2, 0);
	pivot_right_top.add(side_pp_right);

	pivot_left_top = new THREE.Object3D();
	pivot_left_top.position.set(-A / 2, B / 2, 0);
	pivot_left_top.add(side_pp_left);

	pivot_right_down = new THREE.Object3D();
	pivot_right_down.position.set(-A / 2, -B / 2, 0);
	pivot_right_down.add(side_pp_right_d);
	//pivot_right_down.rotation.y = -(Math.PI)

	pivot_left_down = new THREE.Object3D();
	pivot_left_down.position.set(A / 2, -B / 2, 0);
	pivot_left_down.add(side_pp_left_d);
	//pivot_left_down.rotation.y = -(Math.PI)

	pivot_all = new THREE.Object3D();
	pivot_all.position.set(0, 0, 0);
	scene.add(pivot_all);
	pivot_all.add(
		side_A_front,
		side_A_back,
		side_B_left,
		side_B_right,
		pivot_right_top,
		pivot_left_top,
		pivot_right_down,
		pivot_left_down
	);

	//Hemisphere Light
	light = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 5);
	mainLight = new THREE.DirectionalLight(0xffffff, 5);
	mainLight.position.set(10, 10, 10);
	scene.add(light, mainLight);

	//WebGL Renderer
	renderer = new THREE.WebGLRenderer({
		antialias : true
	});
	//renderer.setClearColor(0xffffff, 1)
	renderer.setSize(w, h);
	$('.webgl').append(renderer.domElement);

	$('.closes').click(function() {
		var tween_top = new TWEEN.Tween(pivot_top.rotation)
			.to(
				{
					x : (pivot_top.rotation.x = 2 * Math.PI)
				},
				1000
			)
			.start();
		tween_top.easing(TWEEN.Easing.Elastic.InOut);

		var tween_R = new TWEEN.Tween(pivot_right_top.rotation)
			.to(
				{
					z : (pivot_right_top.rotation.z = 0)
				},
				1000
			)
			.start();
		tween_R.easing(TWEEN.Easing.Elastic.InOut);

		var tween_L = new TWEEN.Tween(pivot_left_top.rotation)
			.to(
				{
					z : (pivot_left_top.rotation.z = 0)
				},
				1000
			)
			.start();
		tween_L.easing(TWEEN.Easing.Elastic.InOut);

		var tween_down = new TWEEN.Tween(pivot_down.rotation)
			.to(
				{
					x : (pivot_down.rotation.x = -(2 * Math.PI))
				},
				1000
			)
			.start();
		tween_down.easing(TWEEN.Easing.Elastic.InOut);

		var tween_R_down = new TWEEN.Tween(pivot_right_down.rotation)
			.to(
				{
					z : (pivot_right_down.rotation.z = 0)
				},
				1000
			)
			.start();
		tween_R_down.easing(TWEEN.Easing.Elastic.InOut);

		var tween_L_down = new TWEEN.Tween(pivot_left_down.rotation)
			.to(
				{
					z : (pivot_left_down.rotation.z = 0)
				},
				1000
			)
			.start();
		tween_L_down.easing(TWEEN.Easing.Elastic.InOut);

		//tween.repeat(Infinity);
		//tween.yoyo(true);

		//ADD EVENTS TO TWEEN
		tween.onStart(function() {
			console.log('start');
		});
		tween.onComplete(function() {
			console.log('complete');
		});
	});
	$('.open').click(function() {
		var tween_top = new TWEEN.Tween(pivot_top.rotation)
			.to(
				{
					x : (pivot_top.rotation.x = -(Math.PI / 4))
				},
				1000
			)
			.start();
		tween_top.easing(TWEEN.Easing.Elastic.InOut);

		var tween_R = new TWEEN.Tween(pivot_right_top.rotation)
			.to(
				{
					z : (pivot_right_top.rotation.z = -Math.PI / 1.5)
				},
				1000
			)
			.start();
		tween_R.easing(TWEEN.Easing.Elastic.InOut);

		var tween_L = new TWEEN.Tween(pivot_left_top.rotation)
			.to(
				{
					z : (pivot_left_top.rotation.z = Math.PI / 1.5)
				},
				1000
			)
			.start();
		tween_L.easing(TWEEN.Easing.Elastic.InOut);

		var tween_down = new TWEEN.Tween(pivot_down.rotation)
			.to(
				{
					x : (pivot_down.rotation.x = Math.PI / 4)
				},
				1000
			)
			.start();
		tween_down.easing(TWEEN.Easing.Elastic.InOut);

		var tween_R_down = new TWEEN.Tween(pivot_right_down.rotation)
			.to(
				{
					z : (pivot_right_down.rotation.z = Math.PI * 1.25)
				},
				1000
			)
			.start();
		tween_R_down.easing(TWEEN.Easing.Elastic.InOut);

		var tween_L_down = new TWEEN.Tween(pivot_left_down.rotation)
			.to(
				{
					z : (pivot_left_down.rotation.z = -Math.PI * 1.25)
				},
				1000
			)
			.start();
		tween_L_down.easing(TWEEN.Easing.Elastic.InOut);

		//duration = options.duration || 2000;
		//tween.repeat(Infinity);
		// tween.yoyo(true);

		//ADD EVENTS TO TWEEN
		tween.onStart(function() {
			console.log('start');
		});
		tween.onComplete(function() {
			console.log('complete');
		});
	});
	// $('.Right_lid').click(function () {

	//   // var tweenB = new TWEEN.Tween(pivot_right_top.rotation).to({ z: pivot_right_top.rotation.z = -Math.PI/1.5},1000).start();
	//   var tween_R = new TWEEN.Tween(pivot_right_top.rotation).to({ z: pivot_right_top.rotation.z = -Math.PI/1.5},1000).start();
	//          tween_R.easing(TWEEN.Easing.Elastic.InOut);
	//          //tween.repeat(Infinity);
	//          //tween.yoyo(true);

	//      //ADD EVENTS TO TWEEN
	//          tween_R.onStart(function() { console.log("start") });
	//          tween_R.onComplete(function() { console.log("complete") });

	//  });

	//  $('.left_lid').click(function () {

	//   var tween_L = new TWEEN.Tween(pivot_left_top.rotation).to({ z: pivot_left_top.rotation.z = Math.PI/1.5},1000).start();
	//          tween_L.easing(TWEEN.Easing.Elastic.InOut);
	//          //tween.repeat(Infinity);
	//          //tween.yoyo(true);

	//      //ADD EVENTS TO TWEEN
	//          tween_L.onStart(function() { console.log("start") });
	//          tween_L.onComplete(function() { console.log("complete") });

	//  });
}

function animate() {
	TWEEN.update();
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	controls.update();
}

function change_box(x, y, z) {
	var size_x = x / 60;
	var size_y = y / 60;
	var size_z = z / 60;

	pivot_all.scale.set(size_x, size_y, size_z);
	pivot_top.scale.set(size_x, size_y, size_z);
	pivot_top.position.set(0, y / 2, -(z / 2));
	pivot_down.scale.set(size_x, size_y, size_z);
	pivot_down.position.set(0, -(y / 2), -(z / 2));
	camera.position.set(size_x * 60 + 10, size_y * 60 + 10, size_z * 60 + 10);
}
