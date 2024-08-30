const scriptURL = 'https://script.google.com/macros/s/AKfycbwH8rZeieRV30SB80hi2v6hzbK98WXl-LdrCfVO6-37mj_w_N23VIGs2GA7UtQ-Hu7A/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
