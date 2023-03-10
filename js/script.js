function checkForm(form) {
	re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
	if(form.dob.value != '') {
		if(regs = form.dob.value.match(re)) {
			// day value between 1 and 31
			if(regs[1] < 1 || regs[1] > 31) {
				alert("Invalid value for day, please enter a valid day: " + regs[1]);
				form.dob.focus();
				return false;
			}
    // month value between 1 and 12
			if(regs[2] < 1 || regs[2] > 12) {
				alert("Invalid value for month, please enter a valid month: " + regs[2]);
				form.dob.focus();
				return false;
			}
	// year value between 1902 and 2023
	if(regs[3] > (new Date()).getFullYear()) {
		alert("Invalid value for year, please enter a valid year: " + regs[3] + " - must be less than or equal to  " + (new Date()).getFullYear());
		form.dob.focus();
		return false;
	}
	} else {
		alert("Invalid date format use dd/mm/yyyy: " + form.dob.value);
		form.dob.focus();
		return false;
	}
}
}
					
