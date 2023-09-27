function getFormvalue() {
	let f_name =  document.getElementsByName("fname")[0].value
	let l_name = document.getElementsByName("lname")[0].value
	alert(f_name+" "+l_name)
	const bt = document.getElementById("btn")
	bt.className="blue_btn"
}
