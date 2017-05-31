$('#add').click(function () {
	var data = {
		name: $(this).siblings('.name').val(),
		number: $(this).siblings('.number').val()
	};
	$.ajax({
		type: 'GET', // отправляем в POST формате, можно GET
		url: '/add', // путь до обработчика, у нас он лежит в той же папке
		// dataType: 'json', // ответ ждем в json формате
		data: data, // данные для отправки
		success: function (data) {
			$('.tasks').html(' ');
			for (var i in data) {
				$('.tasks').append('<div>' + JSON.stringify(data[i]) + '</div>')
			}
		}
	});
});

$('#delete').click(function () {
	var data = {
		data: $(this).siblings('input').val()
	};
	$.ajax({
		type: 'GET', // отправляем в POST формате, можно GET
		url: '/delete', // путь до обработчика, у нас он лежит в той же папке
		// dataType: 'json', // ответ ждем в json формате
		data: data, // данные для отправки
		success: function (data) {
			$('.tasks').html(' ');
			for (var i in data) {
				$('.tasks').append('<div>' + JSON.stringify(data[i]) + '</div>')
			}
		}
	});
});
$('#update').click(function () {
	var id = $(this).siblings('#id').val();
	var data = {
		name: $(this).siblings('.name').val(),
		number: $(this).siblings('.number').val(),
		id: id
	};
	$.ajax({
		type: 'GET', // отправляем в POST формате, можно GET
		url: '/update', // путь до обработчика, у нас он лежит в той же папке
		// dataType: 'json', // ответ ждем в json формате
		data: data, // данные для отправки
		success: function (data) {

			$('.tasks').html(' ');
			for (var i in data) {
				$('.tasks').append('<div>' + JSON.stringify(data[i]) + '</div>')
			}
		}
	});
});
$('#search').click(function () {
	var data = {
		data: $(this).siblings('input').val()
	};
	$.ajax({
		type: 'GET', // отправляем в POST формате, можно GET
		url: '/search', // путь до обработчика, у нас он лежит в той же папке
		// dataType: 'json', // ответ ждем в json формате
		data: data, // данные для отправки
		success: function (data) {
			if (data.length !== 0) {
				$('.tasks').html(' ');
				for (var i in data) {
					$('.tasks').append('<div>' + JSON.stringify(data[i]) + '</div>')
				}
			}
		}
	});
});