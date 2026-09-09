const themeToggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('agenthub-theme');
const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('#modal-title');
const modalContent = document.querySelector('#modal-content');
const modalForm = document.querySelector('#modal-form');
const modalPrimary = document.querySelector('#modal-primary');
const modalSecondary = document.querySelector('#modal-secondary');

if (!document.querySelector('link[href="styles.css"]')) {
  const sharedStyles = document.createElement('link');
  sharedStyles.rel = 'stylesheet';
  sharedStyles.href = 'styles.css';
  document.head.appendChild(sharedStyles);
}

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
};

if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}
applyTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('agenthub-theme', nextTheme);
  });
}

const navLinks = document.querySelectorAll('.nav-link');
const updateActiveNav = () => {
  const activePage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === activePage || (activePage === 'index.html' && link.getAttribute('href') === '#home');
    link.toggleAttribute('aria-current', isActive);
    link.classList.toggle('bg-sky-100', isActive);
    link.classList.toggle('text-sky-700', isActive);
    link.classList.toggle('hover:bg-sky-200', isActive);
    link.classList.toggle('hover:text-sky-800', isActive);
    link.classList.toggle('dark:bg-sky-950', isActive);
    link.classList.toggle('dark:text-sky-300', isActive);
    link.classList.toggle('dark:hover:bg-sky-900', isActive);
    link.classList.toggle('dark:hover:text-sky-200', isActive);
    link.classList.toggle('hover:bg-slate-100', !isActive);
    link.classList.toggle('hover:text-sky-600', !isActive);
    link.classList.toggle('dark:hover:bg-neutral-800', !isActive);
    link.classList.toggle('dark:hover:text-sky-400', !isActive);
  });
};

let openMenu = null;

const restoreMenu = (menu) => {
  if (!menu || !menu.dataset.menuParent) return;
  const parent = document.querySelector(`[data-menu-parent="${menu.dataset.menuParent}"]`);
  if (parent) parent.appendChild(menu);
  menu.classList.add('hidden');
  menu.style.cssText = menu.dataset.menuStyle || '';
  delete menu.dataset.menuParent;
  delete menu.dataset.menuStyle;
};

const closeMenus = () => {
  document.querySelectorAll('.overflow-menu').forEach((menu) => restoreMenu(menu));
  openMenu = null;
  document.querySelectorAll('.overflow-toggle').forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
};

const positionMenu = (menu, toggle) => {
  const toggleRect = toggle.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const margin = 8;
  const left = Math.min(
    Math.max(margin, toggleRect.right - menuRect.width),
    window.innerWidth - menuRect.width - margin,
  );
  const top = toggleRect.bottom + margin + menuRect.height <= window.innerHeight
    ? toggleRect.bottom + margin
    : Math.max(margin, toggleRect.top - menuRect.height - margin);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
};

const openOverflowMenu = (menu, toggle) => {
  closeMenus();
  const parent = menu.parentElement;
  const parentId = `menu-parent-${Date.now()}`;
  parent.dataset.menuParent = parentId;
  menu.dataset.menuParent = parentId;
  menu.dataset.menuStyle = menu.getAttribute('style') || '';
  document.body.appendChild(menu);
  menu.classList.remove('hidden');
  menu.style.position = 'fixed';
  menu.style.zIndex = '60';
  menu.style.visibility = 'hidden';
  positionMenu(menu, toggle);
  menu.style.visibility = 'visible';
  openMenu = { menu, toggle };
  toggle.setAttribute('aria-expanded', 'true');
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modalForm.classList.add('hidden');
  modalSecondary.classList.add('hidden');
};

const openModal = (title, content, isConfigure = false) => {
  if (!modal) return;
  modalTitle.textContent = title;
  modalContent.innerHTML = '';
  content.split('|').forEach((item) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = item;
    modalContent.appendChild(paragraph);
  });
  modalForm.classList.toggle('hidden', !isConfigure);
  modalContent.classList.toggle('hidden', isConfigure);
  modalPrimary.textContent = isConfigure ? 'Save changes' : 'Close';
  modalSecondary.classList.toggle('hidden', !isConfigure);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.querySelector('#modal-close').focus();
};

document.querySelectorAll('.overflow-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const menu = toggle.parentElement.querySelector('.overflow-menu');
    const isOpen = openMenu?.menu === menu;
    if (isOpen) closeMenus();
    else openOverflowMenu(menu, toggle);
  });
});

document.querySelectorAll('.menu-action').forEach((action) => {
  action.addEventListener('click', () => {
    const agentName = action.dataset.configureAgent;
    const title = action.dataset.modalTitle;
    closeMenus();
    if (agentName) {
      openModal(`Configure ${agentName}`, '', true);
    } else if (title) {
      openModal(title, action.dataset.modalContent);
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.overflow-menu') && !event.target.closest('.overflow-toggle')) closeMenus();
});

document.querySelector('#modal-close')?.addEventListener('click', closeModal);
modalPrimary?.addEventListener('click', closeModal);
modalSecondary?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenus();
    if (modal && !modal.classList.contains('hidden')) closeModal();
  }
});

window.addEventListener('scroll', () => {
  if (openMenu) positionMenu(openMenu.menu, openMenu.toggle);
}, true);
window.addEventListener('resize', () => {
  if (openMenu) positionMenu(openMenu.menu, openMenu.toggle);
});

updateActiveNav();
