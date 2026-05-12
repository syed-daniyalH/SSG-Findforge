/**
 * Theme utility for managing global light/dark theme
 * Persists theme preference to localStorage
 */
 
const THEME_STORAGE_KEY = 'theme-preference';
 
type Theme = 'light' | 'dark';
 
/**
 * Initialize theme on app load - reads from localStorage and applies setting
 */
export function initializeTheme(): void {
  if (typeof window === 'undefined') return;
 
  // Get saved theme or detect system preference
  const savedTheme = getThemeFromStorage();
  const preferredTheme = savedTheme || 'dark';
 
  applyTheme(preferredTheme);
}
 
/**
 * Set theme to light or dark
 */
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
 
  applyTheme(theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
 
  // Dispatch custom event for other components to listen to
  window.dispatchEvent(
    new CustomEvent('themechange', { detail: { theme } })
  );
}
 
/**
 * Get current theme from HTML element class
 */
export function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
 
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}
 
/**
 * Apply theme by toggling 'dark' class on html element
 */
function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
 
  const html = document.documentElement;
 
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}
 
/**
 * Get theme from localStorage
 */
function getThemeFromStorage(): Theme | null {
  if (typeof window === 'undefined') return null;
 
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return saved === 'dark' || saved === 'light' ? saved : null;
}
 
/**
 * Detect system theme preference
 */
function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
 
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
 
/**
 * Listen for theme changes (useful for other components)
 */
export function onThemeChange(callback: (theme: Theme) => void): () => void {
  if (typeof window === 'undefined') return () => {};
 
  const handleThemeChange = (event: Event) => {
    const customEvent = event as CustomEvent<{ theme: Theme }>;
    callback(customEvent.detail.theme);
  };
 
  window.addEventListener('themechange', handleThemeChange);
 
  // Return unsubscribe function
  return () => {
    window.removeEventListener('themechange', handleThemeChange);
  };
}
 
 