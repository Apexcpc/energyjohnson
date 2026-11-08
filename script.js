const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const header=document.querySelector('.site-header');const open=header.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});

