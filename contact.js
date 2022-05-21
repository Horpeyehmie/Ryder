<script type="text/javascript">

	function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var title = document.getElementById("title").value;
	var message = document.getElementById("message").value;

	if(name=='' || email=='' ||  title=='' || message=='')
	{
		document.getElementById("eresult").innerHTML = "All field Required";
		return false;
	}

	else if(name.lenght<4){
		document.getElementById("eresult").innerHTML = "Name Must Be at least 4 character";
		return false;
	}

	else if(email.lenght<4){
		document.getElementById("eresult").innerHTML = "Email Must Be at least 4 character";
		return false;
	}

	else if(title.lenght<2){
		document.getElementById("eresult").innerHTML = "Title Must Be at least 2 character";
		return false;
	}

	else if(message.lenght<20){
		document.getElementById("eresult").innerHTML = "Message Must Be at least 20 character";
		return false;
	}

	else {
		return true;
	}
	}
</script>