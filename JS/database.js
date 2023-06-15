const scriptURL = 'https://script.google.com/macros/s/AKfycbzS57KCNI8GqXNVaEqQ-7HDSmsLCzQxC3yc56EvtWB-hRRRcJiJAb5nkZJRi3kjQM-5lw/exec'
  const form = document.forms['cart-data']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
