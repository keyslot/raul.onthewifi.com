/*  Raul Antonio Ortega Vallejo */
/*  Simple codigo               */

function listMenuHtml() {
         let currentPage = window.location.pathname.split('/').pop();	
	 currentPage = currentPage ? currentPage : "index.html";
	 const menu = {
		 'Inicio':'index.html',
	         'Portafolio':'portafolio.html',
	         'Experiencia laboral':'experiencia-laboral.html',
	         'Reconocimientos':'reconocimientos.html',
		 'Extra-Curricular':'extra-curricular.html',
		 'Blog':'https://keyslot.blogspot.com/',
		 };
	 
	 let nodo = document.createElement('ul');
	 for(let[k,v] of Object.entries(menu)) {
	 	let item = document.createElement('li');
		let text = document.createTextNode(k);
		if (v == currentPage) {
		    item.className = "active";
		    item.appendChild(text);
                    item.innerHTML += '<span class="termux">&block;</span>';
		}
		else { 
	 	    let link = document.createElement('a');
		    link.href =  k != 'Blog' ? '/' + v : v;
		    link.appendChild(text);
	 	    item.appendChild(link);
		}
	        nodo.appendChild(item);
	 }
	 
	 const container = document.getElementById('menu');
	 container.append(nodo);
	 // Info. Contacto 
	 container.innerHTML += 
	    '<ul class="lista-contacto">'+
              '<li>Freelance developer.</li>'+
	      '<li>raulantonio[<strong>arroba</strong>]protonmail.com</li>'+
              '<li><strong>WhatsApp-Chat.</strong><a href="https://wa.me/525512180798">+52 55-12180798</a></li>'+
              '<li><strong>Discord:</strong>keyslot#3469</li>'+
	    '</ul>';
}

function includes() {
	listMenuHtml();
}
