/* RADIO REWARDS — short "ON AIR" intro (customer app only). Shown once per browser session, tap to skip,
 * skipped automatically when the phone is set to "reduce motion". To remove it: delete the <script src="rr-intro.js"> line in index.html. */
(() => {
  'use strict';
  const CREDIT = 'Saif Sherief';
  try { if (sessionStorage.getItem('rr_intro')) return; sessionStorage.setItem('rr_intro', '1'); } catch { /* private mode: just show it */ }
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let lang = 'en'; try { lang = localStorage.getItem('rr') || ((navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en'); } catch { /* ignore */ }
  const ar = lang === 'ar';
  const el = document.createElement('div');
  el.id = 'rr-intro'; el.setAttribute('aria-hidden', 'true'); el.dir = ar ? 'rtl' : 'ltr';
  el.innerHTML = '<div class="in"><div class="onair">ON AIR</div><img src="icons/logo.png" alt="" width="132" height="132"><p class="with">' + (ar ? 'على الهواء مع' : 'On air with') + '</p><p class="who">' + CREDIT + '</p></div>';
  document.body.appendChild(el);
  let done = false;
  const close = () => { if (done) return; done = true; el.classList.add('out'); setTimeout(() => el.remove(), 600); };
  el.addEventListener('click', close);
  setTimeout(close, 2400);
})();
