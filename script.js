const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const header=document.querySelector('.site-header');const open=header.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});


const enquiryForm=document.querySelector('.enquiry-form');
enquiryForm?.addEventListener('submit',(event)=>{
  event.preventDefault();
  const values=new FormData(enquiryForm);
  const message=[
    "Hi Energy Johnson ✨, I'm interested in your services and would love to hear how you could help make my plans extra special.",
    `Name: ${values.get('Name')||''}`,
    `Email: ${values.get('Email')||''}`,
    `Service: ${values.get('Interest')||''}`,
    `Message: ${values.get('Message')||''}`
  ].join(String.fromCharCode(10));
  window.location.assign(`https://wa.me/971528818032?text=${encodeURIComponent(message)}`);
});
