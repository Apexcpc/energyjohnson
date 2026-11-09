const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const header=document.querySelector('.site-header');const open=header.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});


const enquiryForm=document.querySelector('.enquiry-form');
enquiryForm?.addEventListener('submit',(event)=>{
  event.preventDefault();
  const values=new FormData(enquiryForm);
  const message=[
    "Hi, I'm interested in Energy Johnson's services.",
    `Name: ${values.get('Name')||''}`,
    `Email: ${values.get('Email')||''}`,
    `Service: ${values.get('Interest')||''}`,
    `Message: ${values.get('Message')||''}`
  ].join('\\n');
  window.location.assign(`https://wa.me/971528818032?text=${encodeURIComponent(message)}`);
});
