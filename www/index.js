var datum = JSON.parse(localStorage.getItem('items')) || [];
	
document.getElementById('add').addEventListener('click', function() {
	var name = document.getElementById('name').value;
	var pass = document.getElementById('pass').value;
	if (name=="" || pass==""){
		alert("Fill-up required fields.");
	} else {
	var obj = { dataname: [name],
				datapass: [pass]
			};
	datum.push(obj);
	update(); }
});

refreshList();

function update() {
	localStorage.setItem('items', JSON.stringify(datum));
}

function refreshList() {
	if (!datum.length) return;

	for (var a = 0; a < datum.length; a++) {
		var value = "#" + datum[a].dataname + " - " + datum[a].datapass;
		var li = document.createElement("li");
   		var node = document.createTextNode(value);
   		li.appendChild(node);
   		document.getElementById("list").appendChild(li);
	}
		
}


function removeItem() {
	localStorage.removeItem('items');
}	

