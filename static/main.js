console.log('HELLO WORLD')

fetch("/config/")
    .then((result) => { return result.json() })
    .then((data) => {
        const stripe = Stripe(data.publickey)
    }); 
    
    