document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="container" style="max-width:1080px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:center;height:64px;">
      <a href="index.html" style="font-size:20px;font-weight:700;letter-spacing:0.05em;color:#111;text-decoration:none;">Sakua</a>
      <nav>
        <a href="services.html">Service</a>
        <a href="index.html#cases">Cases</a>
        <a href="index.html#pricing">Pricing</a>
        <a href="vision.html">About</a>
        <a href="index.html#contact">Contact</a>
      </nav>
    </div>
  `;
  header.style.cssText = 'position:fixed;top:0;left:0;right:0;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);border-bottom:1px solid #f3f4f6;z-index:100;';

  const navLinks = header.querySelectorAll('nav a');
  navLinks.forEach(a => {
    a.style.cssText = 'color:#4b5563;text-decoration:none;font-size:14px;font-weight:500;margin-left:32px;transition:color 0.2s;';
    a.addEventListener('mouseenter', () => a.style.color = '#111');
    a.addEventListener('mouseleave', () => a.style.color = '#4b5563');
  });

  // Mobile: hide nav
  if (window.innerWidth <= 768) {
    header.querySelector('nav').style.display = 'none';
  }

  const oldHeader = document.querySelector('header');
  if (oldHeader) oldHeader.remove();
  document.body.prepend(header);
});
