console.log('HELLO WORLD')

fetch("/config/")
	.then((result) => { 
		console.log("-- fetch config --");
		console.log(result);
		return result.json(); 
	})
	.then((data) => {
		console.log("-- inside data --");
		console.log(data);
		const stripe = Stripe(data.publicKey)

		document.querySelector("#submitBtn").addEventListener("click", () => {
			fetch("/create-checkout-session/")
				.then((result) => {return result.json(); })
				.then((data) => {
					console.log(data);
					return stripe.redirectToCheckout({sessionId: data.sessionId});
				})
				.then((result) => {
					console.log(result);
				});
		});
	}); 
	
	