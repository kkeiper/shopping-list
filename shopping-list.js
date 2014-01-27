$(document).ready(function() {

	var newItem

	var clearSelected = function() {
		$(".clicked").remove();
	}

	var reset = function() {
		
		$("#itemField").val("");
		$("#menuList").html("");
		};

		$("#form").submit(function(event) {
		event.preventDefault();
		newItem = $("#itemField").val();
		console.log(newItem);
		$("ul#menuList").append("<li>" + newItem + "</li>");
		$("#itemField").val("");
		});

		$('#menuList').on('click', 'li', function() {
		$(this).toggleClass("clicked")
		});

		$("#clear-all").click(reset);
		$("#clear-selected").click(clearSelected);

reset();

});