

$('#add').click(function () {
	var data = {
		name: $(this).siblings('.name').val(),
		grade: $(this).siblings('.grade').val()
	};
	$.ajax({
		type: 'GET', // отправляем в POST формате, можно GET
		url: '/add', // путь до обработчика, у нас он лежит в той же папке
		// dataType: 'json', // ответ ждем в json формате
		data: data, // данные для отправки
		success: function (data) {
			$('.tasks').html(' ');
			for(var i in data){
				$('.tasks').append('<div>'+JSON.stringify(data[i])+'</div>')
			}
		}
	});
});

$('#friends').click(function () {
	var data = {
		id1: $(this).siblings('.id1').val(),
		id2: $(this).siblings('.id2').val()
	};
	$.ajax({
		type: 'GET', // отправляем в POST формате, можно GET
		url: '/friends', // путь до обработчика, у нас он лежит в той же папке
		// dataType: 'json', // ответ ждем в json формате
		data: data, // данные для отправки
		success: function (data) {
			$('.friends').html(' ');
			for(var i in data){
				$('.friends').append('<div>'+JSON.stringify(data[i])+'</div>')
			}
		}
	});
});
$('#likes').click(function () {
	var data = {
		id1: $(this).siblings('.id1').val(),
		id2: $(this).siblings('.id2').val()
	};
	
	$.ajax({
		type: 'GET', // отправляем в POST формате, можно GET
		url: '/likes', // путь до обработчика, у нас он лежит в той же папке
		// dataType: 'json', // ответ ждем в json формате
		data: data, // данные для отправки
		success: function (data) {

			$('.likes').html(' ');
			for(var i in data){
				$('.likes').append('<div>'+JSON.stringify(data[i])+'</div>')
			}
		}
	});
});