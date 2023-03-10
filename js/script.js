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
