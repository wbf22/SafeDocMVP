/* global Vue */
/* global axios */

var app = new Vue({
	el: '#app',
	data: {
		form: {
			fname: '',
			lname: '',
			email: '',
			msg: ''
		},
	},
	methods: {
		async submitContactForm() {
			// Validate first name
			if (this.form.fname == '') {
				this.form.msg = "Please provide first name";
				return;
			}

			// Validate last name
			if (this.form.lname == '') {
				this.form.msg = "Please provide last name";
				return;
			}

			// Validate email
			let at_sym_index = this.form.email.indexOf('@')
			if (at_sym_index <= 0 || at_sym_index == this.form.email.length - 1) {
				this.form.msg = "Please provide valid email";
				return;
			}

			// Process submission
			/*
			let response = await backEndFuncToStoreInfo(json = {
				first: this.form_fname,
				last: this.form_lname,
				email: this.form_email
			});
			*/
			this.form.msg = "Thank you for your submission!"

		},
		clearContactFormMsg() {
			this.form.msg = ''
		}
	}

});