$(document).ready(function(){

	//Slider
	if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200
	  });
	}
	
    if(window.location.href.indexOf('index') > -1){
	//Posts
	var posts = [
            {
            	title: 'Prueba de título 1',
            	date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores illum provident vel incidunt laudantium porro, officia, nisi corrupti adipisci architecto omnis quos debitis voluptatum dolores sequi corporis placeat pariatur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat, expedita accusamus assumenda repudiandae, obcaecati dolorem modi voluptate sequi maiores iure eligendi quas, officiis impedit possimus recusandae inventore provident. Odio!'
            },
            {
            	title: 'Prueba de título 2',
            	date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores illum provident vel incidunt laudantium porro, officia, nisi corrupti adipisci architecto omnis quos debitis voluptatum dolores sequi corporis placeat pariatur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat, expedita accusamus assumenda repudiandae, obcaecati dolorem modi voluptate sequi maiores iure eligendi quas, officiis impedit possimus recusandae inventore provident. Odio!'
            },
            {
            	title: 'Prueba de título 3',
            	date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores illum provident vel incidunt laudantium porro, officia, nisi corrupti adipisci architecto omnis quos debitis voluptatum dolores sequi corporis placeat pariatur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat, expedita accusamus assumenda repudiandae, obcaecati dolorem modi voluptate sequi maiores iure eligendi quas, officiis impedit possimus recusandae inventore provident. Odio!'
            },
            {
            	title: 'Prueba de título 4',
            	date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores illum provident vel incidunt laudantium porro, officia, nisi corrupti adipisci architecto omnis quos debitis voluptatum dolores sequi corporis placeat pariatur neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat, expedita accusamus assumenda repudiandae, obcaecati dolorem modi voluptate sequi maiores iure eligendi quas, officiis impedit possimus recusandae inventore provident. Odio!'
            },
	];

	posts.forEach(function(item,index){
          var post = `
                <article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.content}</p>
				</article>
				<a href="#" class="button-more">Leer mas</a>
          `;
          $("#posts").append(post);
	}); 

    }


	//Selector de temas
    var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href","css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href","css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
	});


	//Scroll para arriba de la web
	$(".subir").click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		},500);

		return false;
	});


	//Login falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();		

		localStorage.setItem("form_name",form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != undefined){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido " + form_name + "</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>")
		$("#login").hide();
		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
    

    //Acordeon con jqueryUI
	if(window.location.href.indexOf('about') > -1){
         $("#acordeon").accordion();
	}

	//Reloj con momentJS
	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
		    $("#reloj").html(reloj);
		},1000);
		
	}


	//Form validator
	if(window.location.href.indexOf('contact') > -1){
          
          $("form input[name='date']").datepicker({
          	   dateFormat:'dd-mm-yy'
          });

		  $.validate({
		  	    lang:'es',
			    modules : 'location, date, security, file',
			    errorMessagePosition: 'top',
			    scrollToTopOnError: true,
			    onModulesLoaded : function() {
			      $('#country').suggestCountry();
			    }
		  });

		  // Restrict presentation length
		  $('#presentation').restrictLength( $('#pres-max-length') );

	    
    }	
});