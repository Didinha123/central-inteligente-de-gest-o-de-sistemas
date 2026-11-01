// SystemHub — todo o JavaScript da aplicação em um único arquivo.

// ===================== icons =====================
// Ícones no estilo Lucide (24x24, traço 2px), embutidos para não depender de CDN.
const P = {
  'layout-dashboard': '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  'layout-grid': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  kanban: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v7M12 7v4M16 7v9"/>',
  contact: '<path d="M16 2v2M8 2v2"/><rect x="3" y="4" width="18" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M7 21v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  'scroll-text': '<path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'search-x': '<path d="m13.5 8.5-5 5M8.5 8.5l5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  'chevrons-left': '<path d="m11 17-5-5 5-5M18 17l-5-5 5-5"/>',
  'chevrons-right': '<path d="m6 17 5-5-5-5M13 17l5-5-5-5"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'arrow-left': '<path d="m12 19-7-7 7-7M19 12H5"/>',
  'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
  'arrow-up-down': '<path d="m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  star: '<path d="M11.5 2.3a.6.6 0 0 1 1 0l2.6 5.3a1 1 0 0 0 .8.6l5.8.8a.6.6 0 0 1 .3 1l-4.2 4.1a1 1 0 0 0-.3.9l1 5.8a.6.6 0 0 1-.9.6l-5.2-2.7a1 1 0 0 0-1 0l-5.2 2.7a.6.6 0 0 1-.9-.6l1-5.8a1 1 0 0 0-.3-.9L1.9 10a.6.6 0 0 1 .3-1l5.8-.8a1 1 0 0 0 .8-.6Z"/>',
  'external-link': '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  pencil: '<path d="M21.2 6.8a2.8 2.8 0 0 0-4-4L3.8 16.2a2 2 0 0 0-.5.8l-1.3 4.4a.5.5 0 0 0 .6.6l4.4-1.3a2 2 0 0 0 .8-.5ZM15 5l4 4"/>',
  trash: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>',
  'refresh-cw': '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'check-check': '<path d="M18 6 7 17l-5-5M22 10l-7.5 7.5L13 16"/>',
  'check-circle': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  'x-circle': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
  'alert-octagon': '<path d="M12 16h.01M12 8v4M15.31 2a2 2 0 0 1 1.42.59l4.68 4.68a2 2 0 0 1 .59 1.42v6.62a2 2 0 0 1-.59 1.42l-4.68 4.68a2 2 0 0 1-1.42.59H8.69a2 2 0 0 1-1.42-.59l-4.68-4.68A2 2 0 0 1 2 15.31V8.69a2 2 0 0 1 .59-1.42L7.27 2.6A2 2 0 0 1 8.69 2Z"/>',
  'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  'calendar-clock': '<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M16 2v4M8 2v4M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2ZM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z"/>',
  'git-branch': '<path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  siren: '<path d="M7 18v-6a5 5 0 1 1 10 0v6M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2ZM21 12h1M18.5 4.5 18 5M2 12h1M12 2v1M4.93 4.93l.71.71M12 12v6"/>',
  send: '<path d="M14.54 21.69a.5.5 0 0 0 .94-.03l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.03.94l7.93 3.18a2 2 0 0 1 1.11 1.11ZM21.85 2.15 10.91 13.09"/>',
  'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  'play-circle': '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4Z"/>',
  radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
  hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
  bug: '<path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3 3 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
  sparkles: '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.13 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0ZM20 3v4M22 5h-4M4 17v2M5 18H3"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"/>',
  save: '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"/>',
  'corner-down-left': '<path d="m9 10-5 5 5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
  'hard-drive': '<path d="M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11ZM6 16h.01M10 16h.01"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  copy: '<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  whatsapp: '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10c0 3 2 5 5 5l1.2-1.2-2-1-1 .7c-1-.5-1.7-1.2-2.2-2.2l.7-1-1-2Z"/>',
  'check-square': '<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  plug: '<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
  // ---- ícones dos sistemas ----
  box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  archive: '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>',
  banknote: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  'chart-pie': '<path d="M21 12c.55 0 1-.45.98-1a10 10 0 0 0-9-9c-.55-.04-1 .41-1 .96V11a1 1 0 0 0 1 1Z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  'file-signature': '<path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"/><path d="M8 18h1M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95Z"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4M21 3l1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/>',
  headset: '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
  'key-round': '<path d="M2.59 18.41A2 2 0 0 0 2 19.83V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.17a2 2 0 0 0 1.42-.59l.81-.81a6.5 6.5 0 1 0-4.24-4.24Z"/><circle cx="16.5" cy="7.5" r=".5"/>',
  'life-buoy': '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/><circle cx="12" cy="12" r="4"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zM12 22V12"/><path d="m3.3 7 7.7 4.4a2 2 0 0 0 2 0L20.7 7M7.5 4.27l9 5.15"/>',
  radar: '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62A10 10 0 1 0 21.31 8.35M16.24 7.76A6 6 0 1 0 8.23 16.67M12 18h.01M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  'shopping-cart': '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  warehouse: '<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12M6 14h12"/><rect x="6" y="10" width="12" height="12"/>',
  workflow: '<rect x="3" y="3" width="8" height="8" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="2" y="6" width="20" height="14" rx="2"/>',
};

/** Ícones disponíveis para escolher no cadastro de sistemas. */
const SYSTEM_ICON_NAMES = [
  'box', 'activity', 'archive', 'banknote', 'book-open', 'briefcase', 'building', 'calculator', 'calendar', 'car', 'chart-pie',
  'cloud', 'cpu', 'database', 'file-signature', 'file-text', 'globe', 'handshake', 'headset', 'key-round', 'layout-dashboard',
  'life-buoy', 'mail', 'megaphone', 'message-square', 'package', 'radar', 'server', 'shield-check', 'shopping-cart', 'truck',
  'user-plus', 'users', 'wallet', 'warehouse', 'workflow', 'wrench', 'rocket',
];

function icon(name, cls = '') {
  return `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[name] ?? P.box}</svg>`;
}

// ===================== constants =====================
const STATUS = {
  operational: { label: 'Operacional', tone: 'ok' },
  degraded: { label: 'Instável', tone: 'warn' },
  maintenance: { label: 'Em manutenção', tone: 'info' },
  down: { label: 'Indisponível', tone: 'bad' },
  unknown: { label: 'Sem dados', tone: 'neutral' },
};

const STATUS_SOURCE = {
  automatic: { label: 'Automático', hint: 'Calculado por verificação técnica real (healthcheck)' },
  manual: { label: 'Manual', hint: 'Informado manualmente por um responsável' },
  simulated: { label: 'Simulado', hint: 'Gerado para dados demonstrativos (fictícios)' },
};

const DATA_ORIGIN = {
  real: { label: 'Real', tone: 'ok', hint: 'Sistema real com integração técnica' },
  manual: { label: 'Manual', tone: 'neutral', hint: 'Informações cadastradas manualmente' },
  demo: { label: 'Fictício', tone: 'demo', hint: 'Dado demonstrativo — não representa um sistema real' },
};

const CRITICALITY = {
  critical: { label: 'Crítica', tone: 'solid-bad' },
  high: { label: 'Alta', tone: 'orange' },
  medium: { label: 'Média', tone: 'yellow' },
  low: { label: 'Baixa', tone: 'neutral' },
};

const PRIORITY = {
  urgent: { label: 'Urgente', tone: 'solid-bad' },
  high: { label: 'Alta', tone: 'orange' },
  medium: { label: 'Média', tone: 'yellow' },
  low: { label: 'Baixa', tone: 'neutral' },
};

const TICKET_STATUS = {
  backlog: { label: 'Backlog' },
  analysis: { label: 'Em análise' },
  development: { label: 'Em desenvolvimento' },
  testing: { label: 'Em testes' },
  done: { label: 'Concluído' },
};
const TICKET_STATUS_ORDER = ['backlog', 'analysis', 'development', 'testing', 'done'];

const TICKET_TYPE = {
  question: { label: 'Dúvida', icon: 'help-circle' },
  bug: { label: 'Bug', icon: 'bug' },
  improvement: { label: 'Melhoria', icon: 'sparkles' },
  feature: { label: 'Nova funcionalidade', icon: 'rocket' },
  update_issue: { label: 'Problema de atualização', icon: 'refresh-cw' },
  incident: { label: 'Incidente operacional', icon: 'siren' },
};

const ROLE = {
  admin: { label: 'Administrador', description: 'Acesso completo à plataforma' },
  manager: { label: 'Gestor', description: 'Acompanha sistemas, indicadores e chamados' },
  developer: { label: 'Desenvolvedor', description: 'Administra informações técnicas e melhorias' },
  user: { label: 'Usuário', description: 'Visualiza e acessa sistemas permitidos' },
};

const BACKUP_HEALTH = {
  ok: { label: 'Em dia', tone: 'ok' },
  late: { label: 'Atrasado', tone: 'warn' },
  failed: { label: 'Falhou', tone: 'bad' },
  never: { label: 'Nunca executado', tone: 'neutral' },
  inactive: { label: 'Inativa', tone: 'neutral' },
};
const BACKUP_TYPE = { full: 'Completo', incremental: 'Incremental', differential: 'Diferencial', snapshot: 'Snapshot' };
const BACKUP_FREQ = { hourly: 'A cada hora', daily: 'Diário', weekly: 'Semanal', monthly: 'Mensal' };
const CLIENT_STATUS = { active: { label: 'Ativo', tone: 'ok' }, inactive: { label: 'Inativo', tone: 'neutral' } };
const UF = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const DEFAULT_CATEGORIES = [
  'Financeiro', 'Recursos Humanos', 'Comercial', 'Operações', 'Logística', 'Atendimento', 'Dados & BI',
  'Infraestrutura', 'Segurança', 'Jurídico', 'Marketing',
];

const COLORS = ['#244487', '#1d4ed8', '#0891b2', '#0f766e', '#16a34a', '#ca8a04', '#ea580c', '#dc2626', '#db2777', '#7c3aed', '#475569', '#0d1b3d'];

// ===================== format =====================
const dateFmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
const dateTimeFmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

function formatDate(v) {
  if (!v) return '—';
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
    const [y, m, d] = v.split('-');
    return `${d}/${m}/${y}`;
  }
  return dateFmt.format(new Date(v));
}

const formatDateTime = (v) => (v ? dateTimeFmt.format(new Date(v)) : '—');

function timeAgo(v) {
  if (!v) return '—';
  const diff = (new Date(v).getTime() - Date.now()) / 1000;
  const a = Math.abs(diff);
  if (a < 60) return 'agora';
  if (a < 3600) return rtf.format(Math.round(diff / 60), 'minute');
  if (a < 86400) return rtf.format(Math.round(diff / 3600), 'hour');
  if (a < 86400 * 30) return rtf.format(Math.round(diff / 86400), 'day');
  if (a < 86400 * 365) return rtf.format(Math.round(diff / (86400 * 30)), 'month');
  return rtf.format(Math.round(diff / (86400 * 365)), 'year');
}

function formatPercent(v, digits = 1) {
  if (v == null) return '—';
  return `${Number(v).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits })}%`;
}

function formatDuration(sec) {
  if (sec == null) return '—';
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 48) return `${h}h ${m % 60}min`;
  return `${Math.floor(h / 24)} dias`;
}

const initials = (name) =>
  String(name).split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('');

const isOverdue = (date, done = false) => !!date && !done && date < new Date().toISOString().slice(0, 10);

const normalize = (t) => String(t ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// ===================== ui =====================
// ---------- templates seguros ----------
class Raw {
  constructor(s) { this.s = s; }
  toString() { return this.s; }
}
const raw = (s) => new Raw(String(s));

function esc(v) {
  return String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

function renderValue(v) {
  if (v === null || v === undefined || v === false) return '';
  if (v instanceof Raw) return v.s;
  if (Array.isArray(v)) return v.map(renderValue).join('');
  return esc(v);
}

/** Template literal que ESCAPA todas as interpolações (proteção contra XSS). Use raw() para HTML confiável. */
function html(strings, ...values) {
  let out = '';
  strings.forEach((s, i) => {
    out += s;
    if (i < values.length) out += renderValue(values[i]);
  });
  return new Raw(out);
}

const ic = (name, cls) => raw(icon(name, cls));
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function debounce(fn, ms = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// ---------- componentes ----------
const badge = (text, tone = 'neutral', title) =>
  html`<span class="badge tone-${tone}" ${title ? raw(`title="${esc(title)}"`) : ''}>${text}</span>`;

function statusBadge(status, source) {
  const s = STATUS[status] ?? STATUS.unknown;
  const title = source ? `Origem: ${STATUS_SOURCE[source].label} — ${STATUS_SOURCE[source].hint}` : '';
  return html`<span class="badge tone-${s.tone}" title="${title}"><span class="bdot ${status === 'down' ? 'pulse' : ''}"></span>${s.label}${
    source ? html`<span class="bsrc">· ${STATUS_SOURCE[source].label}</span>` : ''
  }</span>`;
}
const critBadge = (v) => badge(CRITICALITY[v]?.label ?? v, CRITICALITY[v]?.tone);
const prioBadge = (v) => badge(PRIORITY[v]?.label ?? v, PRIORITY[v]?.tone);
const originBadge = (v) => badge(DATA_ORIGIN[v].label, DATA_ORIGIN[v].tone, DATA_ORIGIN[v].hint);

function sysIcon(name, color, size = '') {
  const c = color || '#244487';
  return html`<span class="sys-icon ${size}" style="background:linear-gradient(135deg, ${c}, ${c}cc)">${ic(name)}</span>`;
}
const avatar = (name, size = '') => html`<span class="avatar ${size}" title="${name}">${initials(name)}</span>`;

const emptyState = (title, desc = '', iconName = 'inbox', action = '') => html`
  <div class="empty">
    <div class="e-icon">${ic(iconName, 'lg')}</div>
    <p class="e-title">${title}</p>
    ${desc ? html`<p class="e-desc">${desc}</p>` : ''}
    ${action ? html`<div class="e-action">${action}</div>` : ''}
  </div>`;

const errorState = (err) => html`
  <div class="error-state">
    ${ic('alert-triangle', 'lg')}
    <p class="strong mt-2" style="color:inherit">Não foi possível carregar os dados</p>
    <p class="small mt-1">${err?.message ?? 'Erro desconhecido'}</p>
    <button class="btn sm mt-4" data-action="retry">${ic('refresh-cw', 'sm')} Tentar novamente</button>
  </div>`;

const skeleton = (h = 64, n = 3) =>
  html`<div class="stack sm" aria-busy="true">${Array.from({ length: n }, () => html`<div class="skeleton" style="height:${h}px"></div>`)}</div>`;

const demoNotice = () => html`
  <div class="notice">${ic('alert-triangle', 'sm')}
    <span>Dados demonstrativos: itens marcados como <strong>Fictício</strong> e status <strong>Simulado</strong> não representam sistemas reais.</span>
  </div>`;

function field(label, control, { hint, error, cls = '' } = {}) {
  return html`<label class="field ${cls}"><span class="label">${label}</span>${control}${
    error ? html`<span class="error">${error}</span>` : hint ? html`<span class="hint">${hint}</span>` : ''
  }</label>`;
}

function options(list, selected, { empty } = {}) {
  return html`${empty !== undefined ? html`<option value="">${empty}</option>` : ''}${list.map(
    ([value, label]) => html`<option value="${value}" ${String(value) === String(selected ?? '') ? raw('selected') : ''}>${label}</option>`,
  )}`;
}

function toggle(name, checked, label, desc = '') {
  return html`<button type="button" class="toggle ${checked ? 'on' : ''}" data-toggle="${name}" aria-pressed="${checked}">
    <span class="track"></span><span><span class="t-label">${label}</span>${desc ? html`<span class="t-desc">${desc}</span>` : ''}</span>
  </button>`;
}

function tabs(list, active) {
  return html`<div class="tabs" role="tablist">${list.map(
    (t) => html`<button role="tab" data-tab="${t.id}" class="${t.id === active ? 'on' : ''}" aria-selected="${t.id === active}">${t.label}${
      t.count != null ? html`<span class="count">${t.count}</span>` : ''
    }</button>`,
  )}</div>`;
}

/** Markdown mínimo e seguro (escapa tudo; suporta títulos, citações, listas, **negrito** e `código`). */
function markdown(src) {
  const inline = (t) => esc(t).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>');
  const out = [];
  let list = [];
  const flush = () => {
    if (list.length) out.push(`<ul>${list.map((l) => `<li>${inline(l)}</li>`).join('')}</ul>`);
    list = [];
  };
  for (const line of String(src).split(/\r?\n/)) {
    const t = line.trim();
    if (/^[-*] /.test(t)) { list.push(t.slice(2)); continue; }
    flush();
    if (!t) continue;
    if (t.startsWith('### ')) out.push(`<h3>${inline(t.slice(4))}</h3>`);
    else if (/^#{1,2} /.test(t)) out.push(`<h2>${inline(t.replace(/^#+ /, ''))}</h2>`);
    else if (t.startsWith('> ')) out.push(`<blockquote>${inline(t.slice(2))}</blockquote>`);
    else out.push(`<p>${inline(t)}</p>`);
  }
  flush();
  return raw(`<div class="doc">${out.join('')}</div>`);
}

// ---------- toasts ----------
function toast(message, kind = 'success') {
  const el = document.createElement('div');
  el.className = `card toast ${kind}`;
  el.innerHTML = `${icon(kind === 'success' ? 'check-circle' : kind === 'error' ? 'x-circle' : 'info')}<p>${esc(message)}</p>`;
  document.getElementById('toasts').append(el);
  setTimeout(() => el.remove(), 4500);
}

// ---------- overlays ----------
const overlays = () => document.getElementById('overlays');

/** Abre um modal. onMount(el, close) recebe o elemento para ligar eventos. */
function openModal({ title, description = '', body, footer = '', size = '', onMount, onClose }) {
  const wrap = document.createElement('div');
  wrap.className = 'modal-wrap';
  wrap.innerHTML = String(html`
    <div class="backdrop" data-close></div>
    <div class="card modal ${size}" role="dialog" aria-modal="true">
      <div class="modal-head">
        <div><h2>${title}</h2>${description ? html`<p class="sub small">${description}</p>` : ''}</div>
        <button class="btn ghost icon" data-close aria-label="Fechar">${ic('x')}</button>
      </div>
      <div class="modal-body">${body}</div>
      ${footer ? html`<div class="modal-foot">${footer}</div>` : ''}
    </div>`);
  const close = () => {
    if (!wrap.isConnected) return;
    wrap.remove();
    document.removeEventListener('keydown', onKey);
    onClose?.();
  };
  const onKey = (e) => e.key === 'Escape' && wrap === overlays().lastElementChild && close();
  document.addEventListener('keydown', onKey);
  wrap.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) close();
  });
  overlays().append(wrap);
  onMount?.(wrap, close);
  wrap.querySelector('[autofocus]')?.focus();
  return close;
}

function confirmDialog({ title, message, confirmLabel = 'Confirmar', danger = false }) {
  return new Promise((resolve) => {
    let ok = false;
    openModal({
      title,
      size: 'sm',
      body: html`<div class="muted">${message}</div>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn ${danger ? 'danger' : 'primary'}" data-ok>${confirmLabel}</button>`,
      onMount: (el, close) => {
        el.querySelector('[data-ok]').addEventListener('click', () => {
          ok = true;
          close();
        });
      },
      onClose: () => resolve(ok),
    });
  });
}

function openDrawer({ head, body, foot = '', onMount }) {
  const wrap = document.createElement('div');
  wrap.className = 'drawer-wrap';
  wrap.innerHTML = String(html`
    <div class="backdrop" data-close></div>
    <aside class="drawer">
      <div class="drawer-head">${head}</div>
      <div class="drawer-body">${body}</div>
      <div class="drawer-foot" ${foot ? '' : raw('hidden')}>${foot}</div>
    </aside>`);
  const close = () => {
    wrap.remove();
    document.removeEventListener('keydown', onKey);
    onClose?.();
  };
  let onClose;
  const onKey = (e) => e.key === 'Escape' && !document.querySelector('.modal-wrap') && close();
  document.addEventListener('keydown', onKey);
  wrap.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) close();
  });
  overlays().append(wrap);
  const api = {
    el: wrap,
    close,
    set: (part, content) => {
      const el = wrap.querySelector(`.drawer-${part}`);
      el.innerHTML = String(content);
      el.hidden = false;
    },
    onClose: (fn) => (onClose = fn),
  };
  onMount?.(api);
  return api;
}

/** Executa uma ação assíncrona mostrando carregamento no botão. */
async function busy(btn, fn) {
  if (!btn) return fn();
  const original = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span>${btn.dataset.busyLabel ?? ''}`;
  try {
    return await fn();
  } finally {
    if (btn.isConnected) {
      btn.disabled = false;
      btn.innerHTML = original;
    }
  }
}

/** Liga os toggles [data-toggle] de um container a um objeto de estado. */
function bindToggles(root, state, onChange) {
  root.addEventListener('click', (e) => {
    const t = e.target.closest('[data-toggle]');
    if (!t || !root.contains(t)) return;
    const k = t.dataset.toggle;
    state[k] = !state[k];
    t.classList.toggle('on', state[k]);
    t.setAttribute('aria-pressed', String(state[k]));
    onChange?.(k, state[k]);
  });
}

// ===================== charts =====================
const NS = 'http://www.w3.org/2000/svg';

function observeWidth(el, draw) {
  let last = 0;
  const ro = new ResizeObserver(() => {
    const w = el.clientWidth;
    if (w && Math.abs(w - last) > 4) {
      last = w;
      draw(w);
    }
  });
  ro.observe(el);
}

/** Disponibilidade diária (%): série única em área + crosshair e tooltip. */
function availabilityChart(el, data, { height = 240 } = {}) {
  el.classList.add('chart');
  const values = data.map((d) => d.uptime).filter((v) => v != null);
  const min = values.length ? Math.min(...values) : 90;
  const floor = Math.max(0, Math.floor(Math.min(min, 99) / 5) * 5 - 5);
  const m = { top: 10, right: 12, bottom: 24, left: 44 };

  observeWidth(el, (width) => {
    const w = width - m.left - m.right;
    const h = height - m.top - m.bottom;
    const x = (i) => m.left + (data.length <= 1 ? w / 2 : (i / (data.length - 1)) * w);
    const y = (v) => m.top + h - ((v - floor) / (100 - floor)) * h;

    const ticks = [];
    for (let t = floor; t <= 100; t += (100 - floor) / 4) ticks.push(Math.round(t));
    const pts = data.map((d, i) => (d.uptime == null ? null : [x(i), y(d.uptime)])).filter(Boolean);
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join('');
    const area = pts.length ? `${line}L${pts.at(-1)[0]},${m.top + h}L${pts[0][0]},${m.top + h}Z` : '';
    const step = Math.max(1, Math.ceil(data.length / Math.max(2, Math.floor(w / 70))));

    el.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" height="${height}" role="img" aria-label="Gráfico de disponibilidade diária">
        ${ticks.map((t) => `<line class="grid-line" x1="${m.left}" x2="${width - m.right}" y1="${y(t)}" y2="${y(t)}"/>
          <text x="${m.left - 8}" y="${y(t) + 4}" text-anchor="end">${t}%</text>`).join('')}
        <line class="axis-line" x1="${m.left}" x2="${width - m.right}" y1="${m.top + h}" y2="${m.top + h}"/>
        ${data.map((d, i) => (i % step === 0 ? `<text x="${x(i)}" y="${height - 6}" text-anchor="middle">${d.day.slice(8, 10)}/${d.day.slice(5, 7)}</text>` : '')).join('')}
        <path class="series-area" d="${area}"/>
        <path class="series-line" d="${line}"/>
        <line class="crosshair" y1="${m.top}" y2="${m.top + h}" style="display:none"/>
        <circle class="marker" r="4" style="display:none"/>
        <rect x="${m.left}" y="${m.top}" width="${w}" height="${h}" fill="transparent" class="hit"/>
      </svg>
      <div class="card chart-tip" style="display:none"></div>`;

    const svg = el.querySelector('svg');
    const cross = el.querySelector('.crosshair');
    const marker = el.querySelector('.marker');
    const tip = el.querySelector('.chart-tip');
    const hide = () => { cross.style.display = marker.style.display = tip.style.display = 'none'; };
    svg.querySelector('.hit').addEventListener('mousemove', (e) => {
      const rect = svg.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * width;
      const i = Math.max(0, Math.min(data.length - 1, Math.round(((px - m.left) / w) * (data.length - 1))));
      const d = data[i];
      cross.setAttribute('x1', x(i));
      cross.setAttribute('x2', x(i));
      cross.style.display = '';
      if (d.uptime != null) {
        marker.setAttribute('cx', x(i));
        marker.setAttribute('cy', y(d.uptime));
        marker.style.display = '';
      } else marker.style.display = 'none';
      tip.innerHTML = `<p class="strong">${esc(formatDate(d.day))}</p>
        <p>Disponibilidade: <strong>${esc(formatPercent(d.uptime, 2))}</strong></p>
        <p class="muted">${d.checks} verificações · ${d.failures} falhas</p>
        ${d.latency != null ? `<p class="muted">Latência média: ${Math.round(d.latency)} ms</p>` : ''}`;
      tip.style.display = '';
      tip.style.left = `${(x(i) / width) * 100}%`;
      tip.style.top = `${d.uptime != null ? y(d.uptime) : m.top + h / 2}px`;
    });
    svg.querySelector('.hit').addEventListener('mouseleave', hide);
  });
}

/** Barras horizontais (série única) com rótulo de valor direto e tooltip. */
function barChart(el, data, { onSelect } = {}) {
  el.classList.add('chart');
  const rowH = 30;
  const labelW = 136;
  const height = data.length * rowH + 8;
  const max = Math.max(1, ...data.map((d) => d.value));

  observeWidth(el, (width) => {
    const w = width - labelW - 36;
    el.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" height="${height}" role="img" aria-label="Distribuição por categoria">
        ${data.map((d, i) => {
          const y = 4 + i * rowH;
          const bw = Math.max(4, (d.value / max) * w);
          return `<g class="bar-row" data-name="${esc(d.name)}">
            <title>${esc(d.name)}: ${d.value} sistema${d.value === 1 ? '' : 's'}</title>
            <rect class="bar-hit" x="0" y="${y}" width="${width}" height="${rowH - 4}" rx="6"/>
            <text class="label" x="${labelW - 10}" y="${y + rowH / 2 + 2}" text-anchor="end">${esc(d.name.length > 18 ? d.name.slice(0, 17) + '…' : d.name)}</text>
            <path class="bar" d="M${labelW},${y + 5}h${bw - 4}a4,4 0 0 1 4,4v${rowH - 18}a4,4 0 0 1 -4,4h-${bw - 4}z"/>
            <text class="label" x="${labelW + bw + 8}" y="${y + rowH / 2 + 2}">${d.value}</text>
          </g>`;
        }).join('')}
      </svg>`;
    if (onSelect) {
      el.querySelectorAll('.bar-row').forEach((g) => g.addEventListener('click', () => onSelect(g.dataset.name)));
    }
  });
}

// ===================== database =====================
// =====================================================================
// Banco de dados do SystemHub
//  • Modo LOCAL: dados salvos neste navegador (localStorage) — ideal para demonstração.
//  • Modo SUPABASE: dados salvos no seu projeto Supabase (PostgreSQL na nuvem), compartilhados
//    por toda a equipe, com login pelo Supabase Auth e regras de acesso (RLS) no banco.
// Convenções de origem dos dados:
//   data_origin   -> 'real' (integração real), 'manual' (cadastro humano), 'demo' (FICTÍCIO)
//   status_source -> 'automatic' (verificação técnica real), 'manual', 'simulated' (gerado p/ demo)
// =====================================================================

// ---------------------------------------------------------------------
// CONEXÃO COM O SUPABASE
// Opção 1 (mais simples): preencha na tela Configurações do sistema.
// Opção 2 (para hospedar e compartilhar com a equipe): preencha aqui.
// A chave "anon public" pode ficar no navegador — a proteção é feita pelo RLS do banco.
// ---------------------------------------------------------------------
const SUPABASE_URL = 'https://ziklieantgvepcipvvkl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nHCDbCwDhvYrhVJfU5f9ew_IyXkVS-V'; // chave pública (Publishable key)

const DB_KEY = 'systemhub-db-v1';
const CONFIG_KEY = 'systemhub-config';
const HOUR = 3600_000;
const DAY = 24 * HOUR;
const nowIso = () => new Date().toISOString();
const agoIso = (ms) => new Date(Date.now() - ms).toISOString();

const TABLES = [
  'users', 'teams', 'people', 'systems', 'system_contacts', 'system_access', 'system_versions', 'health_checks',
  'incidents', 'tickets', 'ticket_events', 'favorites', 'recent_access', 'notifications', 'audit_logs',
  'clients', 'backup_jobs', 'backup_runs', 'settings',
];

let DB = null;
let configOverride = null; // usado pelo link público de chamados

function getConfig() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(CONFIG_KEY) ?? '{}') ?? {};
  } catch {
    saved = {};
  }
  const src = configOverride ?? saved;
  const url = String(SUPABASE_URL || src.supabaseUrl || '').trim().replace(/\/+$/, '');
  const key = String(SUPABASE_ANON_KEY || src.supabaseKey || '').trim();
  return { supabaseUrl: url, supabaseKey: key, remote: !!(url && key), fixed: !!(SUPABASE_URL && SUPABASE_ANON_KEY) };
}
function saveConfig(cfg) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
}
const isRemote = () => getConfig().remote;

function emptyDb() {
  const d = { version: 2, seq: {} };
  for (const t of TABLES) d[t] = [];
  return d;
}

/** Garante que bancos salvos em versões anteriores tenham as tabelas novas. */
function migrateDb(d) {
  d.seq ??= {};
  for (const t of TABLES) d[t] ??= [];
  for (const t of d.tickets) {
    t.source ??= 'internal';
    for (const k of ['client_id', 'requester_name', 'requester_phone', 'requester_email', 'requester_company', 'resolution']) t[k] ??= null;
  }
  return d;
}

function loadDb() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) DB = migrateDb(JSON.parse(raw));
  } catch {
    DB = null;
  }
  return DB;
}

function saveDb() {
  if (isRemote()) return scheduleSync();
  if (!DB) return;
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(DB));
  } catch (err) {
    console.error('Falha ao salvar dados no navegador', err);
  }
}

/** Insere um registro e devolve o objeto com id. */
function insert(table, row) {
  let id;
  if (isRemote()) {
    // ids aleatórios evitam colisão entre usuários gravando ao mesmo tempo
    do id = 10_000_000 + Math.floor(Math.random() * 89_999_999); while (DB[table].some((r) => r.id === id));
  } else {
    DB.seq[table] = (DB.seq[table] ?? DB[table].reduce((m, r) => Math.max(m, r.id), 0)) + 1;
    id = DB.seq[table];
  }
  const rec = { id, ...row };
  DB[table].push(rec);
  return rec;
}
const byId = (table, id) => DB[table].find((r) => r.id === Number(id));
const clone = (v) => JSON.parse(JSON.stringify(v ?? null));

// ---------- senhas (SHA-256 com sal) ----------
async function sha256(text) {
  if (window.crypto?.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  let h = 2166136261; // fallback simples (FNV-1a) quando a API de criptografia não está disponível
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return (h >>> 0).toString(16);
}
async function hashPassword(password) {
  const salt = Math.random().toString(36).slice(2, 12);
  return `sha256$${salt}$${await sha256(salt + password)}`;
}
async function verifyPassword(password, stored) {
  const [, salt, hash] = String(stored).split('$');
  return (await sha256(salt + password)) === hash;
}

// =====================================================================
// DADOS DEMONSTRATIVOS — TODOS FICTÍCIOS
// =====================================================================

/** Senha das contas de demonstração (fictícias). Troque após o primeiro acesso. */
const DEMO_PASSWORD = 'SystemHub@Demo1';

const SEED_USERS = [
  ['Ana Administradora', 'admin@systemhub.local', 'admin'],
  ['Gustavo Gestor', 'gestor@systemhub.local', 'manager'],
  ['Débora Dev', 'dev@systemhub.local', 'developer'],
  ['Davi Dev', 'dev2@systemhub.local', 'developer'],
  ['Ulisses Usuário', 'usuario@systemhub.local', 'user'],
];
const SEED_TEAMS = [
  ['Squad Financeiro', 'Sistemas financeiros, contábeis e orçamento'],
  ['Squad Pessoas', 'RH, folha e experiência do colaborador'],
  ['Squad Comercial', 'Vendas, CRM e e-commerce'],
  ['Squad Logística', 'Armazém, transporte e frota'],
  ['Plataforma & Infra', 'Infraestrutura, service desk e plataforma interna'],
  ['Dados & Analytics', 'Data lake, BI e indicadores'],
  ['Segurança da Informação', 'Identidade, acessos e monitoramento de segurança'],
];
const SEED_PEOPLE = [
  ['Mariana Lopes', 'Tech Lead', 0], ['Rafael Couto', 'Engenheiro de Software', 0], ['Beatriz Nunes', 'Tech Lead', 1],
  ['Thiago Almeida', 'Engenheiro de Software', 2], ['Carla Mendes', 'Product Owner', 2], ['Eduardo Pires', 'Tech Lead', 3],
  ['Fernanda Rocha', 'SRE', 4], ['Lucas Barros', 'Engenheiro de Plataforma', 4], ['Juliana Prado', 'Engenheira de Dados', 5],
  ['Pedro Sales', 'Analista de BI', 5], ['Renata Faria', 'Especialista em Segurança', 6], ['Otávio Lima', 'Analista de Sistemas', 3],
];
// slug, nome, ícone, cor, categoria, criticidade, equipe, responsável, descrição, tecnologias, fontes, integrações, versão, extras
const SEED_SYSTEMS = [
  ['portal-financeiro', 'Portal Financeiro', 'wallet', '#1d4ed8', 'Financeiro', 'critical', 0, 0, 'Contas a pagar e a receber, conciliação bancária e fluxo de caixa.', ['React', 'Java', 'Spring Boot', 'PostgreSQL'], ['ERP Corporativo', 'Extratos bancários (CNAB)'], ['ERP Corporativo', 'Orçamento & Planejamento'], '4.12.0', {}],
  ['erp-corporativo', 'ERP Corporativo', 'building', '#0f766e', 'Operações', 'critical', 4, 7, 'Gestão integrada: compras, estoque, faturamento e fiscal.', ['SAP', 'ABAP', 'Oracle'], ['Cadastro de materiais', 'Notas fiscais'], ['Portal Financeiro', 'WMS Armazém', 'Folha de Pagamento'], '2023.2', {}],
  ['folha-pagamento', 'Folha de Pagamento', 'banknote', '#7c3aed', 'Recursos Humanos', 'critical', 1, 2, 'Cálculo de folha, benefícios, férias e obrigações acessórias.', ['.NET', 'SQL Server'], ['Ponto eletrônico', 'Portal do Colaborador'], ['ERP Corporativo', 'eSocial'], '7.3.1', { pending: true, restricted: true }],
  ['recrutamento-online', 'Recrutamento Online', 'user-plus', '#db2777', 'Recursos Humanos', 'medium', 1, 2, 'Publicação de vagas, triagem de candidatos e entrevistas.', ['Vue.js', 'Node.js', 'MongoDB'], ['Formulários de candidatura'], ['Portal do Colaborador'], '2.8.4', {}],
  ['crm-vendas', 'CRM Vendas', 'handshake', '#ea580c', 'Comercial', 'high', 2, 3, 'Funil de vendas, oportunidades, contas e previsões comerciais.', ['React', 'Python', 'Django', 'PostgreSQL'], ['E-commerce B2B', 'Leads de campanhas'], ['Gestão de Campanhas', 'ERP Corporativo'], '5.1.0', {}],
  ['gestao-contratos', 'Gestão de Contratos', 'file-signature', '#475569', 'Jurídico', 'high', 0, 1, 'Ciclo de vida de contratos, aprovações e alertas de vencimento.', ['Angular', 'Java', 'PostgreSQL'], ['Repositório de documentos'], ['Portal Financeiro'], '3.0.2', { maintenance: true }],
  ['wms-armazem', 'WMS Armazém', 'warehouse', '#b45309', 'Logística', 'high', 3, 5, 'Recebimento, endereçamento, separação e expedição.', ['Java', 'Kotlin', 'Oracle'], ['Coletores de dados', 'ERP Corporativo'], ['ERP Corporativo', 'Roteirizador de Entregas'], '6.4.0', {}],
  ['roteirizador-entregas', 'Roteirizador de Entregas', 'truck', '#ca8a04', 'Logística', 'medium', 3, 11, 'Otimização de rotas e janelas de entrega da frota própria.', ['Python', 'FastAPI', 'Redis'], ['WMS Armazém', 'API de mapas'], ['WMS Armazém', 'Controle de Frota'], '1.9.3', { pending: true }],
  ['central-atendimento', 'Central de Atendimento', 'headset', '#0891b2', 'Atendimento', 'high', 2, 4, 'Atendimento omnichannel: chat, e-mail e telefone.', ['React', 'Node.js', 'Elasticsearch'], ['CRM Vendas', 'Base de Conhecimento'], ['CRM Vendas', 'Base de Conhecimento'], '8.2.0', {}],
  ['base-conhecimento', 'Base de Conhecimento', 'book-open', '#16a34a', 'Atendimento', 'low', 2, 4, 'Artigos, FAQs e procedimentos para atendimento e clientes.', ['Next.js', 'Headless CMS'], ['Conteúdo editorial'], ['Central de Atendimento'], '2.2.0', {}],
  ['data-lake', 'Data Lake Analytics', 'database', '#4f46e5', 'Dados & BI', 'high', 5, 8, 'Ingestão, catálogo e processamento de dados corporativos.', ['Spark', 'Airflow', 'Parquet', 'Python'], ['ERP Corporativo', 'CRM Vendas', 'WMS Armazém'], ['Painéis Executivos'], '3.5.0', {}],
  ['paineis-executivos', 'Painéis Executivos', 'chart-pie', '#9333ea', 'Dados & BI', 'medium', 5, 9, 'Dashboards de indicadores estratégicos para a diretoria.', ['Power BI', 'SQL'], ['Data Lake Analytics'], ['Data Lake Analytics'], '2024.10', { pending: true }],
  ['gestao-acessos-iam', 'Gestão de Acessos (IAM)', 'shield-check', '#dc2626', 'Segurança', 'critical', 6, 10, 'Provisionamento de identidades, SSO e revisão periódica de acessos.', ['Keycloak', 'Java', 'LDAP'], ['Folha de Pagamento (admissões/desligamentos)'], ['Todos os sistemas com SSO'], '22.0.5', { restricted: true }],
  ['monitor-siem', 'Monitor SIEM', 'radar', '#be123c', 'Segurança', 'critical', 6, 10, 'Correlação de eventos de segurança e resposta a incidentes.', ['Elastic Stack', 'Python'], ['Logs de aplicações', 'Firewall'], ['Service Desk TI'], '8.11.0', { restricted: true }],
  ['service-desk-ti', 'Service Desk TI', 'life-buoy', '#0284c7', 'Infraestrutura', 'high', 4, 6, 'Chamados de TI, catálogo de serviços e SLAs.', ['ITSM SaaS', 'JavaScript'], ['Portal do Colaborador', 'E-mail'], ['Inventário de Ativos', 'Gestão de Acessos (IAM)'], '2024.3', {}],
  ['inventario-ativos', 'Inventário de Ativos', 'server', '#64748b', 'Infraestrutura', 'medium', 4, 7, 'CMDB com servidores, estações, licenças e contratos de suporte.', ['Python', 'Django', 'PostgreSQL'], ['Agentes de descoberta', 'Cloud APIs'], ['Service Desk TI'], '1.14.0', { maintenance: true }],
  ['portal-colaborador', 'Portal do Colaborador', 'users', '#2563eb', 'Recursos Humanos', 'medium', 1, 2, 'Autoatendimento: holerites, férias, comunicados e benefícios.', ['React', 'Node.js', 'PostgreSQL'], ['Folha de Pagamento'], ['Folha de Pagamento', 'Service Desk TI'], '3.6.2', {}],
  ['ecommerce-b2b', 'E-commerce B2B', 'shopping-cart', '#f59e0b', 'Comercial', 'critical', 2, 3, 'Loja online para clientes empresariais com tabela de preços dedicada.', ['Next.js', 'Go', 'PostgreSQL', 'Redis'], ['ERP Corporativo (catálogo e estoque)'], ['ERP Corporativo', 'CRM Vendas', 'Gateway de pagamentos'], '10.4.1', {}],
  ['gestao-campanhas', 'Gestão de Campanhas', 'megaphone', '#e11d48', 'Marketing', 'medium', 2, 4, 'Planejamento, orçamento e acompanhamento de campanhas.', ['React', 'Ruby on Rails'], ['CRM Vendas'], ['CRM Vendas', 'E-mail Marketing'], '2.0.0', {}],
  ['email-marketing', 'E-mail Marketing', 'mail', '#14b8a6', 'Marketing', 'low', 2, 4, 'Disparo de newsletters e réguas de relacionamento.', ['SaaS', 'Webhooks'], ['Gestão de Campanhas'], ['Gestão de Campanhas'], '2024.1', {}],
  ['controle-frota', 'Controle de Frota', 'car', '#84cc16', 'Logística', 'low', 3, 11, 'Manutenções, abastecimentos e telemetria dos veículos.', ['PHP', 'Laravel', 'MySQL'], ['Telemetria (rastreadores)'], ['Roteirizador de Entregas'], '4.1.0', {}],
  ['orcamento-planejamento', 'Orçamento & Planejamento', 'calculator', '#0d9488', 'Financeiro', 'high', 0, 0, 'Elaboração orçamentária, forecast e realizado x orçado.', ['Anaplan', 'Python'], ['Portal Financeiro', 'Data Lake Analytics'], ['Portal Financeiro', 'Painéis Executivos'], '2025.1', {}],
  ['legado-contabil', 'Legado Contábil', 'archive', '#78716c', 'Financeiro', 'medium', 0, 1, 'Sistema contábil legado mantido para consultas históricas (pré-2020).', ['Delphi', 'Firebird'], ['Base histórica contábil'], [], '9.7', { pending: true }],
  ['agenda-salas', 'Agenda de Salas', 'calendar', '#a855f7', 'Operações', 'low', 4, 6, 'Reserva de salas de reunião e recursos audiovisuais.', ['Vue.js', 'Firebase'], ['Calendário corporativo'], ['Gestão de Acessos (IAM)'], '1.3.0', {}],
];
// título, tipo, slug, prioridade, status, descrição, responsável (índice SEED_USERS), prazo (dias)
const SEED_TICKETS = [
  ['Erro ao exportar relatório de conciliação em PDF', 'bug', 'portal-financeiro', 'high', 'development', 'Ao exportar conciliações com mais de 500 linhas o PDF é gerado vazio.', 2, 3],
  ['Integração com novo banco parceiro', 'feature', 'portal-financeiro', 'medium', 'analysis', 'Adicionar leitura de extratos no layout CNAB 240 do novo banco.', 3, 20],
  ['Atualizar tabela de cálculo do INSS', 'update_issue', 'folha-pagamento', 'urgent', 'testing', 'Nova tabela progressiva precisa entrar antes do fechamento da folha.', 2, 2],
  ['Filtro por região no funil de vendas', 'improvement', 'crm-vendas', 'low', 'backlog', 'Gestores regionais pediram filtro por região no funil.', null, null],
  ['Lentidão na tela de separação de pedidos', 'bug', 'wms-armazem', 'high', 'analysis', 'Tempo de carregamento acima de 8s nos horários de pico.', 3, 5],
  ['Rotas não consideram restrição de caminhões', 'bug', 'roteirizador-entregas', 'urgent', 'development', 'Rotas incluem vias com restrição de circulação para veículos pesados.', 3, 1],
  ['Migrar Legado Contábil para somente leitura', 'improvement', 'legado-contabil', 'medium', 'backlog', 'Avaliar congelamento da base e exportação para o Data Lake.', null, 45],
  ['Sistema legado fora do ar', 'incident', 'legado-contabil', 'high', 'analysis', 'Serviço não responde desde a última janela de manutenção do servidor.', 3, -1],
  ['Painel de margem por canal', 'feature', 'paineis-executivos', 'medium', 'backlog', 'Novo painel solicitado pela diretoria comercial.', null, 30],
  ['Atualização do conector do Power BI', 'update_issue', 'paineis-executivos', 'medium', 'development', 'Conector atual será descontinuado pelo fornecedor.', 2, 10],
  ['Revisão trimestral de acessos privilegiados', 'improvement', 'gestao-acessos-iam', 'high', 'testing', 'Automatizar o relatório de revisão de acessos.', 2, 7],
  ['Checkout falha com cupom expirado', 'bug', 'ecommerce-b2b', 'urgent', 'done', 'Erro 500 quando o cupom expira durante o checkout.', 3, -5],
  ['Upgrade do Elastic Stack', 'update_issue', 'monitor-siem', 'medium', 'backlog', 'Atualização para correções de segurança.', null, 25],
  ['Notificação de férias aprovadas por e-mail', 'feature', 'portal-colaborador', 'low', 'done', 'Enviar e-mail quando as férias forem aprovadas.', 2, -10],
  ['Agenda duplicando reservas recorrentes', 'bug', 'agenda-salas', 'low', 'analysis', 'Reservas semanais aparecem duplicadas após edição.', null, 15],
];

// nome, tipo (PJ/PF), documento, contato, e-mail, WhatsApp, cidade, UF, status, sistemas usados, observações
const SEED_CLIENTS = [
  ['Atacadão Horizonte Ltda.', 'PJ', '12.345.678/0001-90', 'Paula Ribeiro', 'financeiro@horizonte.exemplo.com', '(11) 98888-1234', 'São Paulo', 'SP', 'active', ['portal-financeiro', 'ecommerce-b2b'], 'Cliente desde 2021 (fictício).'],
  ['Distribuidora Litoral S.A.', 'PJ', '98.765.432/0001-10', 'Marcos Vieira', 'compras@litoral.exemplo.com', '(21) 97777-5678', 'Rio de Janeiro', 'RJ', 'active', ['ecommerce-b2b', 'crm-vendas'], ''],
  ['Mercado Serra Azul ME', 'PJ', '11.222.333/0001-44', 'Renato Dias', 'contato@serraazul.exemplo.com', '(31) 96666-9012', 'Belo Horizonte', 'MG', 'active', ['ecommerce-b2b'], ''],
  ['Construtora Alicerce', 'PJ', '55.666.777/0001-88', 'Lívia Torres', 'ti@alicerce.exemplo.com', '(41) 95555-3456', 'Curitiba', 'PR', 'inactive', ['portal-financeiro'], 'Contrato encerrado em 2025 (fictício).'],
  ['João Pedro Andrade', 'PF', '123.456.789-09', 'João Pedro Andrade', 'joao.andrade@exemplo.com', '(51) 94444-7890', 'Porto Alegre', 'RS', 'active', ['base-conhecimento'], ''],
];

// sistema, nome da rotina, tipo, frequência, destino, retenção (dias), responsável, perfil da simulação
const SEED_BACKUPS = [
  ['erp-corporativo', 'Banco Oracle — completo', 'full', 'daily', 'Storage S3 (região sa-east-1)', 30, 7, 'ok'],
  ['erp-corporativo', 'Logs de transação', 'incremental', 'hourly', 'Storage S3 (região sa-east-1)', 7, 7, 'ok'],
  ['portal-financeiro', 'PostgreSQL — completo', 'full', 'daily', 'Azure Blob (cofre)', 35, 0, 'ok'],
  ['folha-pagamento', 'SQL Server — completo', 'full', 'daily', 'Servidor de backup on-premises', 90, 2, 'fail'],
  ['ecommerce-b2b', 'Snapshot dos volumes', 'snapshot', 'daily', 'Snapshots do provedor de nuvem', 14, 3, 'ok'],
  ['crm-vendas', 'PostgreSQL — completo', 'full', 'weekly', 'Storage S3 (região sa-east-1)', 60, 3, 'ok'],
  ['legado-contabil', 'Firebird — cópia de arquivos', 'full', 'weekly', 'NAS do datacenter', 365, 1, 'late'],
  ['data-lake', 'Catálogo e metadados', 'differential', 'daily', 'Bucket de arquivamento', 30, 8, 'ok'],
  ['gestao-acessos-iam', 'Keycloak — exportação do realm', 'full', 'daily', 'Cofre de segredos + S3', 30, 10, 'ok'],
  ['inventario-ativos', 'PostgreSQL — completo', 'full', 'monthly', 'NAS do datacenter', 180, 7, 'ok'],
];

/** Taxa de falha usada SOMENTE nas verificações simuladas de sistemas fictícios. */
const SIMULATION_FAIL_RATE = { 'legado-contabil': 1, 'roteirizador-entregas': 0.3 };
const simulatedFailRate = (slug) => SIMULATION_FAIL_RATE[slug] ?? 0.008;

/**
 * Cria os dados demonstrativos. Com merge=true (modo Supabase) adiciona aos dados existentes:
 * os usuários fictícios entram inativos e sem login, apenas para dar nome aos registros.
 */
async function seedDemo({ merge = false } = {}) {
  if (!merge) DB = emptyDb();
  const hash = merge ? null : await hashPassword(DEMO_PASSWORD);
  const userIds = SEED_USERS.map(([name, email, role]) =>
    insert('users', {
      name, role, password_hash: hash, active: !merge, is_demo: true, auth_id: null, created_at: nowIso(), last_login_at: null,
      email: merge ? email.replace('@systemhub.local', '.demo@exemplo.com') : email,
    }).id);
  const [adminId, managerId, devId, , userId] = userIds;
  const teamIds = SEED_TEAMS.map(([name, description]) => insert('teams', { name, description, is_demo: true, created_at: nowIso() }).id);
  const personIds = SEED_PEOPLE.map(([name, title, team], i) => insert('people', {
    name, title, team_id: teamIds[team], is_demo: true, created_at: nowIso(),
    email: `${name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(' ', '.')}@exemplo.com`,
    phone: `(11) 9${4000 + i * 137}-${1000 + i * 311}`.slice(0, 15),
  }).id);

  const ids = {};
  for (const [slug, name, icon, color, category, crit, team, owner, desc, tech, sources, integ, version, extra] of SEED_SYSTEMS) {
    const days = 2 + Math.floor(Math.random() * 60);
    const s = insert('systems', {
      slug, name, icon, color, description: desc, category, url: `https://${slug}.exemplo.com`,
      technical_owner_id: personIds[owner], team_id: teamIds[team],
      status: extra.maintenance ? 'maintenance' : 'operational',
      status_source: extra.maintenance ? 'manual' : 'simulated',
      status_note: extra.maintenance ? 'Janela de manutenção programada (fictícia)' : null,
      status_updated_at: agoIso(2 * DAY), version, last_update_at: agoIso(days * DAY), criticality: crit,
      technologies: tech, data_sources: sources, integrations: integ,
      documentation_url: `https://docs.exemplo.com/${slug}`,
      documentation: `## ${name}\n\n> Documento fictício para demonstração.\n\n### Visão geral\n${desc}\n\n### Como acessar\nUse o SSO corporativo. Perfis são concedidos via **Gestão de Acessos (IAM)**.\n\n### Suporte\n- Abra um chamado no SystemHub vinculado a este sistema\n- Em incidentes críticos, acione o responsável técnico`,
      healthcheck_url: null, monitoring_enabled: true, pending_update: !!extra.pending, restricted: !!extra.restricted,
      data_origin: 'demo', last_check_at: null, last_latency_ms: null, created_at: agoIso(400 * DAY), updated_at: agoIso(days * DAY),
    });
    ids[slug] = s.id;
    insert('system_contacts', { system_id: s.id, person_id: personIds[owner], role: 'Responsável técnico' });
    const peer = SEED_PEOPLE.findIndex((p, i) => p[2] === team && i !== owner);
    if (peer >= 0) insert('system_contacts', { system_id: s.id, person_id: personIds[peer], role: 'Suporte' });

    const [maj, min] = version.split('.').map((n) => Number.parseInt(n, 10) || 0);
    for (const [v, notes, ago] of [
      [`${Math.max(1, maj - 1)}.0.0`, 'Versão principal anterior.', days + 160],
      [`${maj}.${Math.max(0, min - 1)}.0`, 'Novas funcionalidades solicitadas pelas áreas de negócio.', days + 45],
      [version, 'Correções de estabilidade e melhorias de desempenho.', days],
    ]) insert('system_versions', { system_id: s.id, version: v, notes: `${notes} (fictício)`, released_at: agoIso(ago * DAY), created_by: devId });

    // 30 dias de verificações simuladas, a cada 4 horas
    const fail = slug === 'legado-contabil' ? 0.04 : simulatedFailRate(slug) * 0.6;
    for (let t = Date.now() - 30 * DAY; t < Date.now() - 10 * 60_000; t += 4 * HOUR) {
      const down = slug === 'legado-contabil' && t > Date.now() - 13 * HOUR;
      const ok = !down && Math.random() >= fail;
      insert('health_checks', {
        system_id: s.id, checked_at: new Date(t).toISOString(), ok, status_code: ok ? 200 : 503,
        latency_ms: ok ? Math.round(80 + Math.random() * 420) : null, error: ok ? null : 'Falha simulada (dado demonstrativo)', source: 'simulated',
      });
    }
    const last = DB.health_checks.filter((h) => h.system_id === s.id).at(-1);
    s.last_check_at = last?.checked_at ?? null;
    s.last_latency_ms = last?.latency_ms ?? null;
  }

  const legacy = byId('systems', ids['legado-contabil']);
  Object.assign(legacy, { status: 'down', status_note: 'Falha simulada (dado demonstrativo)', status_updated_at: agoIso(6 * HOUR) });
  insert('incidents', { system_id: legacy.id, title: 'Legado Contábil indisponível', description: 'Detectado após 3 verificações consecutivas com falha (simulado).', severity: 'medium', status: 'open', source: 'simulated', started_at: agoIso(6 * HOUR), resolved_at: null, created_by: null });
  Object.assign(byId('systems', ids['roteirizador-entregas']), { status: 'degraded', status_note: 'Oscilações intermitentes (simulado)' });

  for (const [slug, title, sev, daysAgo, hours] of [
    ['erp-corporativo', 'Lentidão generalizada no faturamento', 'high', 12, 3],
    ['ecommerce-b2b', 'Checkout indisponível', 'critical', 8, 1],
    ['central-atendimento', 'Fila de e-mails parada', 'medium', 20, 5],
    ['data-lake', 'Atraso na carga diária', 'medium', 4, 9],
    ['roteirizador-entregas', 'Timeout na API de mapas', 'medium', 2, 2],
  ]) {
    const start = Date.now() - daysAgo * DAY;
    insert('incidents', { system_id: ids[slug], title, description: 'Incidente fictício para demonstração.', severity: sev, status: 'resolved', source: 'manual', started_at: new Date(start).toISOString(), resolved_at: new Date(start + hours * HOUR).toISOString(), created_by: devId });
  }

  const pos = { backlog: 0, analysis: 0, development: 0, testing: 0, done: 0 };
  const LABEL = { analysis: 'Em análise', development: 'Em desenvolvimento', testing: 'Em testes', done: 'Concluído' };
  for (const [title, type, slug, priority, status, desc, assignee, due] of SEED_TICKETS) {
    const created = 1 + Math.floor(Math.random() * 25);
    const t = insert('tickets', {
      title, description: `${desc}\n\n(Chamado fictício para demonstração.)`, type, system_id: ids[slug],
      assignee_id: assignee == null ? null : userIds[assignee], reporter_id: pos[status] % 2 === 0 ? managerId : userId,
      priority, status, due_date: due == null ? null : new Date(Date.now() + due * DAY).toISOString().slice(0, 10),
      position: ++pos[status], is_demo: true, created_at: agoIso(created * DAY), updated_at: agoIso(DAY), closed_at: status === 'done' ? agoIso(DAY) : null,
      source: 'internal', client_id: null, requester_name: null, requester_phone: null, requester_email: null, requester_company: null,
      resolution: status === 'done' ? 'Correção aplicada em produção e validada com o solicitante (fictício).' : null,
    });
    insert('ticket_events', { ticket_id: t.id, user_id: managerId, kind: 'created', message: 'Chamado aberto em "Backlog"', created_at: agoIso(created * DAY) });
    if (status !== 'backlog') {
      insert('ticket_events', { ticket_id: t.id, user_id: devId, kind: 'status', message: `Status: Backlog → ${LABEL[status]}`, created_at: agoIso(DAY) });
      insert('ticket_events', { ticket_id: t.id, user_id: devId, kind: 'comment', message: 'Analisando o impacto com a equipe responsável.', created_at: agoIso(20 * HOUR) });
    }
  }

  for (const slug of ['portal-financeiro', 'erp-corporativo', 'service-desk-ti', 'paineis-executivos']) insert('favorites', { user_id: adminId, system_id: ids[slug] });
  for (const slug of ['portal-colaborador', 'base-conhecimento', 'agenda-salas']) insert('favorites', { user_id: userId, system_id: ids[slug] });
  ['erp-corporativo', 'crm-vendas', 'data-lake', 'service-desk-ti', 'portal-financeiro', 'wms-armazem'].forEach((slug, i) =>
    insert('recent_access', { user_id: adminId, system_id: ids[slug], accessed_at: agoIso((i * 5 + 1) * HOUR) }));
  insert('system_access', { system_id: ids['folha-pagamento'], user_id: userId });

  // ---- clientes (fictícios) ----
  const clientIds = SEED_CLIENTS.map(([name, kind, document, contact, email, phone, city, state, status, systems, notes]) => insert('clients', {
    name, kind, document, contact_name: contact, email, phone, city, state, status, notes,
    system_ids: systems.map((s) => ids[s]).filter(Boolean), is_demo: true, created_at: agoIso(200 * DAY), updated_at: agoIso(10 * DAY),
  }).id);

  // ---- chamados abertos pelo link público (fictícios) ----
  for (const [title, type, slug, desc, ci, name, phone, email] of [
    ['Como emitir a segunda via do boleto?', 'question', 'portal-financeiro', 'Não encontro a opção de segunda via no portal.', 0, 'Paula Ribeiro', '(11) 98888-1234', 'paula@exemplo.com'],
    ['Erro ao acessar o pedido 4521', 'bug', 'ecommerce-b2b', 'Ao abrir o pedido aparece "erro inesperado".', 1, 'Marcos Vieira', '(21) 97777-5678', 'marcos@exemplo.com'],
  ]) {
    const t = insert('tickets', {
      title, description: `${desc}\n\n(Chamado fictício para demonstração.)`, type, system_id: ids[slug], assignee_id: null, reporter_id: null,
      priority: 'medium', status: 'backlog', due_date: null, position: 0, is_demo: true, created_at: agoIso(3 * HOUR), updated_at: agoIso(3 * HOUR), closed_at: null,
      source: 'public', client_id: clientIds[ci], requester_name: name, requester_phone: phone, requester_email: email, requester_company: SEED_CLIENTS[ci][0], resolution: null,
    });
    insert('ticket_events', { ticket_id: t.id, user_id: null, kind: 'created', message: `Chamado aberto pelo formulário público por ${name}`, created_at: agoIso(3 * HOUR) });
  }

  // ---- rotinas de backup (fictícias) ----
  const FREQ_HOURS = { hourly: 1, daily: 24, weekly: 168, monthly: 720 };
  for (const [slug, name, type, frequency, destination, retention, owner, profile] of SEED_BACKUPS) {
    const job = insert('backup_jobs', {
      system_id: ids[slug], name, type, frequency, schedule: frequency === 'daily' ? 'Todos os dias às 02:00' : frequency === 'weekly' ? 'Domingos às 03:00' : frequency === 'hourly' ? 'A cada hora' : 'Dia 1 às 04:00',
      destination, retention_days: retention, responsible_id: personIds[owner], active: true, notes: 'Rotina fictícia para demonstração.',
      last_run_at: null, last_status: 'never', last_success_at: null, last_size_mb: null, is_demo: true, created_at: agoIso(120 * DAY), updated_at: agoIso(5 * DAY),
    });
    const step = FREQ_HOURS[frequency] * HOUR;
    const runs = Math.min(14, Math.floor((30 * DAY) / step));
    for (let i = runs; i >= 1; i--) {
      // perfis: 'ok' sempre sucesso; 'fail' última execução falhou; 'late' parou de rodar há dias
      const failed = (profile === 'fail' && i === 1) || (profile === 'ok' && Math.random() < 0.04);
      const start = Date.now() - (i + (profile === 'late' ? 2 : 0)) * step + 2 * HOUR; // 'late': parou de rodar há 2 ciclos
      const size = Math.round((200 + Math.random() * 4000) * 10) / 10;
      insert('backup_runs', {
        job_id: job.id, started_at: new Date(start).toISOString(), finished_at: new Date(start + (5 + Math.random() * 50) * 60_000).toISOString(),
        status: failed ? 'failed' : 'success', size_mb: failed ? null : size, notes: failed ? 'Falha simulada: destino sem espaço (fictício)' : null, source: 'simulated', created_by: null,
      });
    }
    const jr = DB.backup_runs.filter((r) => r.job_id === job.id);
    const last = jr.at(-1);
    const lastOk = jr.filter((r) => r.status === 'success').at(-1);
    Object.assign(job, { last_run_at: last?.finished_at ?? null, last_status: last?.status ?? 'never', last_success_at: lastOk?.finished_at ?? null, last_size_mb: lastOk?.size_mb ?? null });
  }

  if (!DB.settings.some((s) => s.key === 'owner_whatsapp')) insert('settings', { key: 'owner_whatsapp', value: '' });

  insert('notifications', { user_id: adminId, type: 'incident', title: 'Legado Contábil está indisponível [simulado]', message: 'Falha simulada (dado demonstrativo)', link: `/systems/${legacy.id}`, read_at: null, created_at: agoIso(6 * HOUR) });
  insert('notifications', { user_id: adminId, type: 'info', title: 'Bem-vindo ao SystemHub', message: 'Os dados exibidos são fictícios e servem apenas para demonstração.', link: '/', read_at: null, created_at: agoIso(DAY) });
  insert('audit_logs', { user_id: null, user_name: 'Sistema', action: 'seed', entity: 'system', entity_id: null, summary: 'Dados demonstrativos (fictícios) carregados', details: null, ip: null, created_at: nowIso() });
  saveDb();
}

/** Inicializa o banco: Supabase (se configurado e logado) ou dados deste navegador. */
async function initDb() {
  if (isRemote()) {
    DB = emptyDb();
    if (sbSession()) {
      try {
        await sbReload();
      } catch (err) {
        console.error(err);
        sbClearSession();
      }
    }
    return;
  }
  if (!loadDb()) await seedDemo();
}

/** Apaga tudo e recria os dados demonstrativos (modo local). */
async function resetDb() {
  localStorage.removeItem(DB_KEY);
  await seedDemo();
}

// ===================== supabase =====================
// =====================================================================
// Conexão com o Supabase via API REST (sem bibliotecas externas)
//  • Login: Supabase Auth (e-mail e senha)
//  • Dados: tabelas PostgreSQL acessadas pela API REST (PostgREST)
//  • Segurança: Row Level Security (RLS) — script em SUPABASE_SETUP_SQL
// =====================================================================

const SB_SESSION_KEY = 'systemhub-sb-session';

/** Colunas de cada tabela no Supabase (usadas na sincronização). */
const SB_COLUMNS = {
  users: ['id', 'auth_id', 'name', 'email', 'role', 'active', 'is_demo', 'password_hash', 'created_at', 'last_login_at'],
  teams: ['id', 'name', 'description', 'is_demo', 'created_at'],
  people: ['id', 'name', 'email', 'phone', 'title', 'team_id', 'is_demo', 'created_at'],
  systems: ['id', 'slug', 'name', 'icon', 'color', 'description', 'category', 'url', 'technical_owner_id', 'team_id', 'status', 'status_source',
    'status_note', 'status_updated_at', 'version', 'last_update_at', 'criticality', 'technologies', 'data_sources', 'integrations',
    'documentation_url', 'documentation', 'healthcheck_url', 'monitoring_enabled', 'pending_update', 'restricted', 'data_origin',
    'last_check_at', 'last_latency_ms', 'created_at', 'updated_at'],
  system_contacts: ['id', 'system_id', 'person_id', 'role'],
  system_access: ['id', 'system_id', 'user_id'],
  system_versions: ['id', 'system_id', 'version', 'notes', 'released_at', 'created_by'],
  health_checks: ['id', 'system_id', 'checked_at', 'ok', 'status_code', 'latency_ms', 'error', 'source'],
  incidents: ['id', 'system_id', 'title', 'description', 'severity', 'status', 'source', 'started_at', 'resolved_at', 'created_by'],
  tickets: ['id', 'title', 'description', 'type', 'system_id', 'assignee_id', 'reporter_id', 'priority', 'status', 'due_date', 'position',
    'is_demo', 'created_at', 'updated_at', 'closed_at', 'source', 'client_id', 'requester_name', 'requester_phone', 'requester_email',
    'requester_company', 'resolution'],
  ticket_events: ['id', 'ticket_id', 'user_id', 'kind', 'message', 'created_at'],
  favorites: ['id', 'user_id', 'system_id'],
  recent_access: ['id', 'user_id', 'system_id', 'accessed_at'],
  notifications: ['id', 'user_id', 'type', 'title', 'message', 'link', 'read_at', 'created_at'],
  audit_logs: ['id', 'user_id', 'user_name', 'action', 'entity', 'entity_id', 'summary', 'details', 'ip', 'created_at'],
  clients: ['id', 'name', 'kind', 'document', 'contact_name', 'email', 'phone', 'city', 'state', 'status', 'notes', 'system_ids', 'is_demo',
    'created_at', 'updated_at'],
  backup_jobs: ['id', 'system_id', 'name', 'type', 'frequency', 'schedule', 'destination', 'retention_days', 'responsible_id', 'active',
    'notes', 'last_run_at', 'last_status', 'last_success_at', 'last_size_mb', 'is_demo', 'created_at', 'updated_at'],
  backup_runs: ['id', 'job_id', 'started_at', 'finished_at', 'status', 'size_mb', 'notes', 'source', 'created_by'],
  settings: ['id', 'key', 'value'],
};

const SB_TYPES = {
  id: 'bigint primary key', auth_id: 'uuid unique', entity_id: 'text', created_by: 'bigint', technologies: 'jsonb', data_sources: 'jsonb', integrations: 'jsonb', details: 'jsonb',
  system_ids: 'jsonb', active: 'boolean', is_demo: 'boolean', monitoring_enabled: 'boolean', pending_update: 'boolean', restricted: 'boolean',
  ok: 'boolean', position: 'double precision', size_mb: 'double precision', last_size_mb: 'double precision',
};
const sbColType = (c) => SB_TYPES[c] ?? (/_id$|_ms$|_code$|_days$/.test(c) ? 'bigint' : 'text');

/** Script de instalação: tabelas, funções, gatilhos e políticas de segurança (RLS). */
const SUPABASE_SETUP_SQL = `-- =============================================================
-- SystemHub — instalação no Supabase
-- Cole tudo no "SQL Editor" do seu projeto e clique em RUN.
-- Pode ser executado de novo sem perder dados.
-- =============================================================

${Object.entries(SB_COLUMNS).map(([t, cols]) => `create table if not exists public.${t} (\n${cols.map((c) => `  ${c} ${sbColType(c)}`).join(',\n')}\n);\n${cols.filter((c) => c !== 'id').map((c) => `alter table public.${t} add column if not exists ${c} ${sbColType(c).replace(' unique', '')};`).join('\n')}`).join('\n\n')}

create index if not exists idx_checks_system on public.health_checks (system_id, checked_at);
create index if not exists idx_tickets_status on public.tickets (status, position);

-- Papel (perfil) do usuário logado
create or replace function public.sh_role() returns text
language sql stable security definer set search_path = public as $$
  select role from public.users where auth_id = auth.uid() and active is true limit 1
$$;

-- Indica se já existe algum usuário com login (para criar o primeiro administrador)
create or replace function public.sh_has_users() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.users where auth_id is not null)
$$;
grant execute on function public.sh_role() to anon, authenticated;
grant execute on function public.sh_has_users() to anon, authenticated;

-- Somente administradores mudam perfil, e-mail ou status de usuários
create or replace function public.sh_users_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if coalesce(public.sh_role(), '') <> 'admin' then
    new.role := old.role;
    new.active := old.active;
    new.email := old.email;
  end if;
  return new;
end $$;
drop trigger if exists sh_users_guard on public.users;
create trigger sh_users_guard before update on public.users for each row execute function public.sh_users_guard();

-- Chamados do formulário público: registra histórico e notifica a equipe
create or replace function public.sh_public_ticket() returns trigger
language plpgsql security definer set search_path = public as $$
declare v_id bigint;
begin
  if new.source = 'public' then
    v_id := 10000000 + floor(random() * 89999999)::bigint;
    insert into public.ticket_events (id, ticket_id, user_id, kind, message, created_at)
      values (v_id, new.id, null, 'created', 'Chamado aberto pelo formulário público por ' || coalesce(new.requester_name, 'solicitante'), new.created_at);
    insert into public.notifications (id, user_id, type, title, message, link, read_at, created_at)
      select 10000000 + floor(random() * 89999999)::bigint, u.id, 'ticket',
             'Novo chamado pelo link público: ' || new.title, coalesce(new.requester_name, ''), '/tickets?open=' || new.id, null, new.created_at
        from public.users u where u.active and u.role in ('admin', 'manager', 'developer');
  end if;
  return new;
end $$;
drop trigger if exists sh_public_ticket on public.tickets;
create trigger sh_public_ticket after insert on public.tickets for each row execute function public.sh_public_ticket();

-- Lista de sistemas exibida no formulário público (apenas id e nome dos não restritos)
create or replace view public.public_systems as
  select id, name from public.systems where coalesce(restricted, false) = false order by name;
grant select on public.public_systems to anon, authenticated;

-- ---------- Row Level Security ----------
do $$
declare t text;
begin
  foreach t in array array[${Object.keys(SB_COLUMNS).map((t) => `'${t}'`).join(', ')}] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists sh_select on public.%I', t);
    execute format('drop policy if exists sh_insert on public.%I', t);
    execute format('drop policy if exists sh_update on public.%I', t);
    execute format('drop policy if exists sh_delete on public.%I', t);
    execute format('drop policy if exists sh_public_insert on public.%I', t);
  end loop;

  -- Tabelas administradas pela equipe (admin, gestor, desenvolvedor)
  foreach t in array array['teams','people','systems','system_contacts','system_access','system_versions','health_checks','incidents','clients','backup_jobs','backup_runs','settings'] loop
    execute format('create policy sh_select on public.%I for select to authenticated using (public.sh_role() is not null)', t);
    execute format('create policy sh_insert on public.%I for insert to authenticated with check (public.sh_role() in (''admin'',''manager'',''developer''))', t);
    execute format('create policy sh_update on public.%I for update to authenticated using (public.sh_role() in (''admin'',''manager'',''developer''))', t);
    execute format('create policy sh_delete on public.%I for delete to authenticated using (public.sh_role() in (''admin'',''manager'',''developer''))', t);
  end loop;

  -- Tabelas em que qualquer perfil ativo grava (chamados, comentários, favoritos, notificações)
  foreach t in array array['tickets','ticket_events','favorites','recent_access','notifications'] loop
    execute format('create policy sh_select on public.%I for select to authenticated using (public.sh_role() is not null)', t);
    execute format('create policy sh_insert on public.%I for insert to authenticated with check (public.sh_role() is not null)', t);
    execute format('create policy sh_update on public.%I for update to authenticated using (public.sh_role() is not null)', t);
    execute format('create policy sh_delete on public.%I for delete to authenticated using (public.sh_role() in (''admin'',''manager'',''developer''))', t);
  end loop;
end $$;

-- Auditoria: todos registram, ninguém altera ou apaga
create policy sh_select on public.audit_logs for select to authenticated using (public.sh_role() is not null);
create policy sh_insert on public.audit_logs for insert to authenticated with check (public.sh_role() is not null);

-- Usuários: leitura pela equipe; cada pessoa vê o próprio perfil; somente admin cria e exclui
create policy sh_select on public.users for select to authenticated using (
  public.sh_role() is not null or auth_id = auth.uid()
  or (auth_id is null and lower(email) = lower(auth.jwt() ->> 'email')));
create policy sh_insert on public.users for insert to authenticated with check (
  public.sh_role() = 'admin' or (not public.sh_has_users() and auth_id = auth.uid() and role = 'admin'));
create policy sh_update on public.users for update to authenticated using (
  public.sh_role() = 'admin' or auth_id = auth.uid()
  or (auth_id is null and lower(email) = lower(auth.jwt() ->> 'email')));
create policy sh_delete on public.users for delete to authenticated using (public.sh_role() = 'admin');

-- Formulário público: visitantes (sem login) só podem CRIAR chamados novos
create policy sh_public_insert on public.tickets for insert to anon with check (
  source = 'public' and status = 'backlog' and assignee_id is null and reporter_id is null);
`;

// ---------- sessão do Supabase Auth ----------
function sbSession() {
  try {
    return JSON.parse(localStorage.getItem(SB_SESSION_KEY) ?? 'null');
  } catch {
    return null;
  }
}
function sbStoreSession(d) {
  localStorage.setItem(SB_SESSION_KEY, JSON.stringify({
    access_token: d.access_token,
    refresh_token: d.refresh_token,
    expires_at: Date.now() + ((d.expires_in ?? 3600) - 60) * 1000,
    auth_id: d.user?.id,
    email: d.user?.email,
  }));
}
const sbClearSession = () => localStorage.removeItem(SB_SESSION_KEY);

function sbErrorMessage(status, d) {
  const raw = d?.msg || d?.message || d?.error_description || d?.error || `Erro ${status} no Supabase`;
  const code = d?.code ?? '';
  if (/Invalid login credentials/i.test(raw)) return 'E-mail ou senha inválidos';
  if (d?.error_code === 'email_provider_disabled' || /Email logins are disabled|Email signups are disabled/i.test(raw)) {
    return 'O login por e-mail está desligado no Supabase. Ligue em Authentication → Sign In / Providers → Email → "Enable Email provider" (deixe só o "Confirm email" desligado).';
  }
  if (/Email not confirmed/i.test(raw)) return 'E-mail ainda não confirmado. Abra o link enviado por e-mail ou desative "Confirm email" no Supabase (Authentication → Sign In / Providers → Email).';
  if (/already registered|already been registered/i.test(raw)) return 'Este e-mail já tem cadastro no Supabase.';
  if (code === '42P01' || code === 'PGRST205' || /does not exist|Could not find the table/i.test(raw)) return 'As tabelas do SystemHub não existem no Supabase. Execute o script de instalação (Configurações → Script SQL).';
  if (code === '42501' || /row-level security/i.test(raw)) return 'Permissão negada pelo Supabase (regras de segurança/RLS).';
  if (/Invalid API key|No API key/i.test(raw)) return 'Chave do Supabase inválida. Confira a "anon public key" em Configurações.';
  return raw;
}

async function sbFetch(path, { method = 'GET', body, headers = {}, anon = false } = {}) {
  const { supabaseUrl, supabaseKey } = getConfig();
  if (!supabaseUrl) throw new Error('Supabase não configurado');
  const token = anon ? null : await sbAccessToken();
  let res;
  try {
    // Chaves novas (sb_publishable_...) vão só no cabeçalho apikey; as antigas (anon, JWT) também no Authorization.
    const bearer = token ?? (supabaseKey.startsWith('eyJ') ? supabaseKey : null);
    res = await fetch(`${supabaseUrl}${path}`, {
      method,
      headers: { apikey: supabaseKey, ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}), 'Content-Type': 'application/json', ...headers },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new Error('Não foi possível conectar ao Supabase. Verifique a URL do projeto e sua internet.');
  }
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { message: text };
  }
  if (!res.ok) {
    const err = new Error(sbErrorMessage(res.status, data));
    err.status = res.status;
    throw err;
  }
  return data;
}

async function sbAccessToken() {
  const s = sbSession();
  if (!s) return null;
  if (Date.now() < s.expires_at) return s.access_token;
  try {
    const d = await sbFetch('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: s.refresh_token }, anon: true });
    sbStoreSession(d);
    return d.access_token;
  } catch {
    sbClearSession();
    return null;
  }
}

async function sbSignIn(email, password) {
  const d = await sbFetch('/auth/v1/token?grant_type=password', { method: 'POST', body: { email, password }, anon: true });
  sbStoreSession(d);
  return d;
}
async function sbSignUp(email, password) {
  const d = await sbFetch('/auth/v1/signup', { method: 'POST', body: { email, password }, anon: true });
  return d.user ?? d; // com confirmação de e-mail ativa o retorno é o próprio usuário
}
async function sbSignOut() {
  try {
    await sbFetch('/auth/v1/logout', { method: 'POST' });
  } catch {
    /* sessão já expirada */
  }
  sbClearSession();
}
const sbRpc = (fn, body = {}, anon = false) => sbFetch(`/rest/v1/rpc/${fn}`, { method: 'POST', body, anon });

// ---------- leitura e sincronização ----------
let sbSnapshot = {};

async function sbSelectAll(table) {
  const rows = [];
  for (let offset = 0; ; offset += 1000) {
    const page = await sbFetch(`/rest/v1/${table}?select=*&order=id.asc&limit=1000&offset=${offset}`);
    rows.push(...page);
    if (page.length < 1000) break;
  }
  return rows;
}

function sbTakeSnapshot() {
  sbSnapshot = {};
  for (const t of TABLES) sbSnapshot[t] = new Map(DB[t].map((r) => [r.id, JSON.stringify(r)]));
}

/** Recarrega todos os dados do Supabase. */
async function sbReload() {
  const results = await Promise.all(TABLES.map((t) => sbSelectAll(t)));
  const d = emptyDb();
  TABLES.forEach((t, i) => (d[t] = results[i]));
  DB = migrateDb(d);
  sbTakeSnapshot();
}

const sbRow = (table, r) => Object.fromEntries(SB_COLUMNS[table].map((c) => [c, r[c] === undefined ? null : r[c]]));
const chunk = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));

/** Envia ao Supabase o que mudou desde a última sincronização (inclusões, alterações e exclusões). */
async function sbPush() {
  for (const t of TABLES) {
    const prev = sbSnapshot[t] ?? new Map();
    const cur = new Map(DB[t].map((r) => [r.id, JSON.stringify(r)]));
    const upserts = [];
    for (const [id, json] of cur) if (prev.get(id) !== json) upserts.push(sbRow(t, JSON.parse(json)));
    const deletes = [...prev.keys()].filter((id) => !cur.has(id));
    for (const part of chunk(upserts, 500)) {
      await sbFetch(`/rest/v1/${t}?on_conflict=id`, { method: 'POST', body: part, headers: { Prefer: 'resolution=merge-duplicates,return=minimal' } });
    }
    for (const part of chunk(deletes, 150)) {
      await sbFetch(`/rest/v1/${t}?id=in.(${part.join(',')})`, { method: 'DELETE', headers: { Prefer: 'return=minimal' } });
    }
    sbSnapshot[t] = cur;
  }
}

let syncChain = Promise.resolve();
let syncError = null;
function scheduleSync() {
  syncChain = syncChain.then(sbPush).catch((err) => {
    syncError = err;
  });
  return syncChain;
}

/** Aguarda a sincronização; se o Supabase recusar, recarrega os dados e informa o erro. */
async function flushSync() {
  await scheduleSync();
  if (syncError) {
    const err = syncError;
    syncError = null;
    await sbReload().catch(() => undefined);
    throw err;
  }
}

// ===================== api =====================
// =====================================================================
// API local do SystemHub — roda inteiramente no navegador.
// Mantém as mesmas rotas/respostas de uma API REST, aplicando validação,
// permissões por perfil, auditoria, notificações e monitoramento.
// =====================================================================
(function () {
  class ApiError extends Error {
    constructor(status, message, details) {
      super(message);
      this.status = status;
      this.details = details;
    }
  }
  const fail = (status, msg, details) => { throw new ApiError(status, msg, details); };
  const notFound = (what = 'Registro') => fail(404, `${what} não encontrado`);

  // ---------- permissões (fonte única de verdade) ----------
  const ALL = ['admin', 'manager', 'developer', 'user'];
  const PERMISSIONS = {
    'systems:viewAll': ['admin', 'manager', 'developer'],
    'systems:create': ['admin'],
    'systems:update': ['admin', 'developer'],
    'systems:delete': ['admin'],
    'systems:status': ['admin', 'developer'],
    'systems:versions': ['admin', 'developer'],
    'monitoring:view': ['admin', 'manager', 'developer'],
    'monitoring:run': ['admin', 'developer'],
    'incidents:manage': ['admin', 'developer'],
    'tickets:create': ALL,
    'tickets:manage': ['admin', 'manager', 'developer'],
    'tickets:delete': ['admin'],
    'people:manage': ['admin', 'manager'],
    'users:manage': ['admin'],
    'audit:view': ['admin', 'manager'],
    'clients:view': ['admin', 'manager', 'developer'],
    'clients:manage': ['admin', 'manager'],
    'backups:view': ['admin', 'manager', 'developer'],
    'backups:manage': ['admin', 'developer'],
    'settings:manage': ['admin'],
  };
  const allowed = (user, perm) => !!user && PERMISSIONS[perm].includes(user.role);
  const permissionsFor = (role) => Object.keys(PERMISSIONS).filter((p) => PERMISSIONS[p].includes(role));
  const need = (user, perm) => { if (!allowed(user, perm)) fail(403, 'Você não tem permissão para esta ação'); };

  // ---------- sessão ----------
  const SESSION_KEY = 'systemhub-session';
  const publicUser = (u) => ({ id: u.id, name: u.name, email: u.email, role: u.role });
  function sessionUser() {
    if (isRemote()) {
      const s = sbSession();
      if (!s) return null;
      const u = DB.users.find((x) => x.auth_id === s.auth_id && x.active);
      return u ? publicUser(u) : null;
    }
    try {
      const s = JSON.parse(localStorage.getItem(SESSION_KEY) ?? 'null');
      if (!s || s.exp < Date.now()) return null;
      const u = byId('users', s.uid);
      return u && u.active ? { id: u.id, name: u.name, email: u.email, role: u.role } : null;
    } catch {
      return null;
    }
  }

  // ---------- utilitários ----------
  const norm = (t) => String(t ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const tokens = (q, max = 8) => norm(q).split(/\s+/).filter(Boolean).slice(0, max);
  const matches = (text, toks) => { const h = norm(text); return toks.every((t) => h.includes(t)); };
  const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null);
  const intId = (v, name = 'id') => { const n = Number(v); if (!Number.isInteger(n) || n <= 0) fail(400, `Parâmetro ${name} inválido`); return n; };
  const nameOf = (table, id) => (id ? byId(table, id)?.name ?? null : null);

  function audit(user, action, entity, entityId, summary, details) {
    insert('audit_logs', {
      user_id: user?.id ?? null, user_name: user?.name ?? 'Sistema', action, entity,
      entity_id: entityId == null ? null : String(entityId), summary, details: details === undefined ? null : clone(details), ip: 'navegador local', created_at: nowIso(),
    });
  }
  function diff(before, after, fields) {
    const changes = {};
    for (const f of fields) {
      if (after[f] === undefined) continue;
      if (JSON.stringify(before[f] ?? null) !== JSON.stringify(after[f] ?? null)) changes[f] = { from: before[f] ?? null, to: after[f] ?? null };
    }
    return changes;
  }
  function notifyUsers(ids, n) {
    for (const id of new Set(ids.filter(Boolean))) insert('notifications', { user_id: id, type: n.type, title: n.title, message: n.message ?? null, link: n.link ?? null, read_at: null, created_at: nowIso() });
  }
  const notifyRoles = (roles, n, except = 0) => notifyUsers(DB.users.filter((u) => u.active && roles.includes(u.role) && u.id !== except).map((u) => u.id), n);

  // ---------- validação ----------
  function validator(body) {
    const errors = [];
    const err = (field, message) => errors.push({ field, message });
    const v = {
      str(k, { min = 0, max = 500, required = false, label = k, trim = true } = {}) {
        let val = body?.[k];
        if (val === undefined || val === null || (typeof val === 'string' && val.trim() === '')) {
          if (required) err(k, `${label} é obrigatório`);
          return val === undefined ? undefined : null;
        }
        val = String(val);
        if (trim) val = val.trim();
        if (val.length < min) err(k, `${label} deve ter ao menos ${min} caracteres`);
        if (val.length > max) err(k, `${label} deve ter no máximo ${max} caracteres`);
        return val;
      },
      oneOf(k, values, { required = false, label = k } = {}) {
        const val = body?.[k];
        if (val === undefined || val === null || val === '') { if (required) err(k, `${label} é obrigatório`); return undefined; }
        if (!values.includes(val)) err(k, `${label} inválido`);
        return val;
      },
      url(k, opts = {}) {
        const val = v.str(k, { max: 500, ...opts });
        if (val && !/^https?:\/\/\S+$/i.test(val)) err(k, `${opts.label ?? k}: informe uma URL http(s) válida`);
        return val;
      },
      email(k, opts = {}) {
        const val = v.str(k, { max: 160, ...opts });
        if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) err(k, 'E-mail inválido');
        return val ? val.toLowerCase() : val;
      },
      id(k) {
        const val = body?.[k];
        if (val === undefined) return undefined;
        if (val === null || val === '') return null;
        const n = Number(val);
        if (!Number.isInteger(n) || n <= 0) { err(k, `${k} inválido`); return undefined; }
        return n;
      },
      bool: (k) => (body?.[k] === undefined ? undefined : body[k] === true || body[k] === 'true'),
      list(k, { max = 30, itemMax = 160 } = {}) {
        const val = body?.[k];
        if (val === undefined) return undefined;
        if (!Array.isArray(val)) { err(k, `${k} deve ser uma lista`); return undefined; }
        const items = [...new Set(val.map((x) => String(x).trim()).filter(Boolean))];
        if (items.length > max) err(k, `Máximo de ${max} itens`);
        if (items.some((x) => x.length > itemMax)) err(k, `Itens com no máximo ${itemMax} caracteres`);
        return items;
      },
      date(k) {
        const val = body?.[k];
        if (val === undefined) return undefined;
        if (val === null || val === '') return null;
        if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) { err(k, 'Data inválida'); return undefined; }
        return val;
      },
      done() { if (errors.length) fail(400, `Dados inválidos: ${errors[0].message}`, errors); },
    };
    return v;
  }

  // ---------- visibilidade de sistemas ----------
  const canSee = (user, s) => allowed(user, 'systems:viewAll') || !s.restricted || DB.system_access.some((a) => a.system_id === s.id && a.user_id === user.id);
  function visibleSystem(user, id) {
    const s = byId('systems', id);
    if (!s || !canSee(user, s)) notFound('Sistema');
    return s;
  }
  function systemView(s, user) {
    const owner = s.technical_owner_id ? byId('people', s.technical_owner_id) : null;
    return {
      ...s,
      technical_owner_name: owner?.name ?? null,
      technical_owner_email: owner?.email ?? null,
      technical_owner_phone: owner?.phone ?? null,
      team_name: nameOf('teams', s.team_id),
      is_favorite: DB.favorites.some((f) => f.user_id === user.id && f.system_id === s.id),
      open_tickets: DB.tickets.filter((t) => t.system_id === s.id && t.status !== 'done').length,
    };
  }

  function dailyAvailability(days, systemIds) {
    const since = new Date(Date.now() - (days - 1) * DAY);
    since.setUTCHours(0, 0, 0, 0);
    const sinceIso = since.toISOString();
    const groups = new Map();
    for (const h of DB.health_checks) {
      if (h.checked_at < sinceIso || !systemIds.has(h.system_id)) continue;
      const d = h.checked_at.slice(0, 10);
      if (!groups.has(d)) groups.set(d, []);
      groups.get(d).push(h);
    }
    return Array.from({ length: days }, (_, i) => {
      const day = new Date(since.getTime() + i * DAY).toISOString().slice(0, 10);
      const g = groups.get(day) ?? [];
      return {
        day,
        uptime: g.length ? (g.filter((h) => h.ok).length / g.length) * 100 : null,
        latency: avg(g.map((h) => h.latency_ms).filter((x) => x != null)),
        checks: g.length,
        failures: g.filter((h) => !h.ok).length,
      };
    });
  }
  function uptime(systemId, ms) {
    const since = agoIso(ms);
    const g = DB.health_checks.filter((h) => h.system_id === systemId && h.checked_at > since);
    return g.length ? (g.filter((h) => h.ok).length / g.length) * 100 : null;
  }

  // ---------- monitoramento ----------
  const SLOW_MS = 3000;
  const FAILS_FOR_DOWN = 3;

  async function runCheck(systemId) {
    const s = byId('systems', systemId);
    if (!s) return null;
    let r;
    if (s.data_origin === 'demo') {
      const ok = Math.random() >= simulatedFailRate(s.slug);
      r = { ok, statusCode: ok ? 200 : 503, latencyMs: ok ? Math.round(80 + Math.random() * 400) : null, error: ok ? null : 'Falha simulada (dado demonstrativo)', source: 'simulated' };
    } else if (s.healthcheck_url) {
      // Verificação real a partir do navegador: confirma se o endereço responde.
      const t0 = performance.now();
      try {
        await fetch(s.healthcheck_url, { mode: 'no-cors', cache: 'no-store', signal: AbortSignal.timeout(8000) });
        r = { ok: true, statusCode: null, latencyMs: Math.round(performance.now() - t0), error: null, source: 'automatic' };
      } catch (e) {
        r = { ok: false, statusCode: null, latencyMs: null, error: e.name === 'TimeoutError' ? 'Tempo esgotado (8000 ms)' : 'Endereço não respondeu', source: 'automatic' };
      }
    } else return null;

    insert('health_checks', { system_id: s.id, checked_at: nowIso(), ok: r.ok, status_code: r.statusCode, latency_ms: r.latencyMs, error: r.error, source: r.source });
    s.last_check_at = nowIso();
    s.last_latency_ms = r.latencyMs;
    evaluateStatus(s, r);
    saveDb();
    return r;
  }

  function evaluateStatus(s, latest) {
    if (s.status === 'maintenance' && s.status_source === 'manual') return; // manutenção manual prevalece
    const recent = DB.health_checks.filter((h) => h.system_id === s.id).slice(-FAILS_FOR_DOWN);
    let next;
    if (recent.length >= FAILS_FOR_DOWN && recent.every((h) => !h.ok)) next = 'down';
    else if (!latest.ok || (latest.latencyMs ?? 0) > SLOW_MS) next = 'degraded';
    else next = 'operational';
    if (next === s.status && s.status_source === latest.source) return;
    const prev = s.status;
    Object.assign(s, { status: next, status_source: latest.source, status_updated_at: nowIso(), status_note: latest.error });
    const tag = latest.source === 'simulated' ? ' [simulado]' : '';
    if (next === 'down' && prev !== 'down') {
      if (!DB.incidents.some((i) => i.system_id === s.id && i.status === 'open')) {
        const inc = insert('incidents', { system_id: s.id, title: `${s.name} indisponível`, description: `Detectado após ${FAILS_FOR_DOWN} verificações consecutivas com falha. Último erro: ${latest.error ?? 'n/d'}`, severity: s.criticality, status: 'open', source: latest.source, started_at: nowIso(), resolved_at: null, created_by: null });
        audit(null, 'incident.open', 'system', s.id, `Incidente aberto automaticamente: ${s.name}${tag}`, { incidentId: inc.id });
      }
      notifyRoles(['admin', 'manager', 'developer'], { type: 'incident', title: `${s.name} está indisponível${tag}`, message: latest.error, link: `/systems/${s.id}` });
    } else if (prev === 'down' && next !== 'down') {
      for (const i of DB.incidents) if (i.system_id === s.id && i.status === 'open' && i.source !== 'manual') Object.assign(i, { status: 'resolved', resolved_at: nowIso() });
      notifyRoles(['admin', 'manager', 'developer'], { type: 'recovery', title: `${s.name} voltou a responder${tag}`, link: `/systems/${s.id}` });
    }
  }

  let running = false;
  async function runAllChecks() {
    if (running) return;
    const user = sessionUser();
    if (!allowed(user, 'monitoring:run')) return; // apenas admin/dev executam as verificações
    if (isRemote()) {
      // com vários navegadores abertos, evita verificações duplicadas
      const last = DB.systems.map((s) => s.last_check_at).filter(Boolean).sort().at(-1);
      if (last && Date.now() - Date.parse(last) < 4 * 60_000) return;
    }
    running = true;
    try {
      const list = DB.systems.filter((s) => s.monitoring_enabled && (s.data_origin === 'demo' || s.healthcheck_url));
      for (const s of list) await runCheck(s.id);
      const limit = agoIso(35 * DAY); // retenção para não lotar o armazenamento do navegador
      DB.health_checks = DB.health_checks.filter((h) => h.checked_at >= limit);
      saveDb();
    } finally {
      running = false;
    }
  }

  // ---------- sistemas ----------
  const STATUSES = ['operational', 'degraded', 'maintenance', 'down', 'unknown'];
  const CRITS = ['low', 'medium', 'high', 'critical'];
  const ORIGINS = ['real', 'manual', 'demo'];
  const UPDATABLE = ['name', 'icon', 'color', 'description', 'category', 'url', 'technical_owner_id', 'team_id', 'version', 'criticality', 'technologies', 'data_sources', 'integrations', 'documentation_url', 'documentation', 'healthcheck_url', 'monitoring_enabled', 'pending_update', 'restricted', 'data_origin'];
  const ADMIN_ONLY = ['restricted', 'data_origin', 'criticality'];
  const ORDER = {
    status: { down: 0, degraded: 1, maintenance: 2, unknown: 3, operational: 4 },
    criticality: { critical: 0, high: 1, medium: 2, low: 3 },
  };

  function parseSystem(body, creating) {
    const v = validator(body);
    const d = {
      name: v.str('name', { min: 2, max: 120, required: creating, label: 'Nome' }),
      icon: v.str('icon', { max: 40 }),
      color: v.str('color', { max: 7 }),
      description: v.str('description', { max: 2000 }),
      category: v.str('category', { min: 2, max: 60, required: creating, label: 'Categoria' }),
      url: v.url('url', { required: creating, label: 'Link de acesso' }),
      technical_owner_id: v.id('technical_owner_id'),
      team_id: v.id('team_id'),
      version: v.str('version', { min: 1, max: 40, label: 'Versão' }),
      criticality: v.oneOf('criticality', CRITS, { label: 'Criticidade' }),
      technologies: v.list('technologies', { itemMax: 40 }),
      data_sources: v.list('data_sources'),
      integrations: v.list('integrations'),
      documentation_url: v.url('documentation_url', { label: 'URL da documentação' }),
      documentation: v.str('documentation', { max: 20000, trim: false }),
      healthcheck_url: v.url('healthcheck_url', { label: 'URL de healthcheck' }),
      monitoring_enabled: v.bool('monitoring_enabled'),
      pending_update: v.bool('pending_update'),
      restricted: v.bool('restricted'),
      data_origin: v.oneOf('data_origin', ORIGINS),
    };
    v.done();
    if (d.color && !/^#[0-9a-fA-F]{6}$/.test(d.color)) fail(400, 'Cor inválida');
    if (d.description === null) d.description = '';
    for (const k of ['name', 'icon', 'color', 'category', 'url', 'version']) if (d[k] === null) d[k] = undefined;
    for (const k of Object.keys(d)) if (d[k] === undefined) delete d[k];
    let contacts;
    if (body.contacts !== undefined) {
      if (!Array.isArray(body.contacts) || body.contacts.length > 30) fail(400, 'Contatos inválidos');
      contacts = body.contacts.map((c) => ({ person_id: intId(c.person_id, 'contato'), role: String(c.role ?? 'Contato').trim().slice(0, 60) || 'Contato' }));
    }
    return { d, contacts };
  }
  const checkMonitoring = (d) => {
    if (d.monitoring_enabled && !d.healthcheck_url && d.data_origin !== 'demo') fail(400, 'Para ativar o monitoramento automático, informe a URL de verificação (healthcheck).');
  };
  const saveContacts = (systemId, contacts) => {
    DB.system_contacts = DB.system_contacts.filter((c) => c.system_id !== systemId);
    const seen = new Set();
    for (const c of contacts) if (!seen.has(c.person_id) && byId('people', c.person_id)) { seen.add(c.person_id); insert('system_contacts', { system_id: systemId, ...c }); }
  };
  function slugify(name) {
    const base = norm(name).replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60) || 'sistema';
    const taken = new Set(DB.systems.map((s) => s.slug));
    if (!taken.has(base)) return base;
    for (let i = 2; ; i++) if (!taken.has(`${base}-${i}`)) return `${base}-${i}`;
  }
  function deleteSystemCascade(id) {
    DB.systems = DB.systems.filter((s) => s.id !== id);
    for (const t of ['system_contacts', 'system_access', 'system_versions', 'health_checks', 'incidents', 'favorites', 'recent_access']) {
      DB[t] = DB[t].filter((r) => r.system_id !== id);
    }
    for (const t of DB.tickets) if (t.system_id === id) t.system_id = null;
    const jobs = new Set(DB.backup_jobs.filter((j) => j.system_id === id).map((j) => j.id));
    DB.backup_jobs = DB.backup_jobs.filter((j) => !jobs.has(j.id));
    DB.backup_runs = DB.backup_runs.filter((r) => !jobs.has(r.job_id));
    for (const c of DB.clients) if ((c.system_ids ?? []).includes(id)) c.system_ids = c.system_ids.filter((x) => x !== id);
  }

  // ---------- chamados ----------
  const T_STATUSES = ['backlog', 'analysis', 'development', 'testing', 'done'];
  const T_TYPES = ['question', 'bug', 'improvement', 'feature', 'update_issue', 'incident'];
  const T_PRIOS = ['low', 'medium', 'high', 'urgent'];
  const T_LABEL = { backlog: 'Backlog', analysis: 'Em análise', development: 'Em desenvolvimento', testing: 'Em testes', done: 'Concluído' };
  const ticketScope = (user, t) => allowed(user, 'tickets:manage') || t.reporter_id === user.id;
  function ticketView(t) {
    const s = t.system_id ? byId('systems', t.system_id) : null;
    return {
      ...t, system_name: s?.name ?? null, system_icon: s?.icon ?? null, system_color: s?.color ?? null,
      assignee_name: nameOf('users', t.assignee_id), reporter_name: nameOf('users', t.reporter_id) ?? t.requester_name ?? null,
      client_name: nameOf('clients', t.client_id),
      comments: DB.ticket_events.filter((e) => e.ticket_id === t.id && e.kind === 'comment').length,
    };
  }
  const setting = (key) => DB.settings.find((s) => s.key === key)?.value ?? '';
  function setSetting(key, value) {
    const s = DB.settings.find((x) => x.key === key);
    if (s) s.value = value;
    else insert('settings', { key, value });
  }
  /** Tenta vincular um chamado público a um cliente cadastrado (mesmo e-mail ou WhatsApp). */
  function matchClient(email, phone) {
    const digits = (v) => String(v ?? '').replace(/\D/g, '').slice(-9);
    return DB.clients.find((c) => (email && c.email && c.email.toLowerCase() === email.toLowerCase()) || (phone && digits(c.phone) && digits(c.phone) === digits(phone)))?.id ?? null;
  }
  function loadTicket(user, id) {
    const t = byId('tickets', id);
    if (!t || !ticketScope(user, t)) notFound('Chamado');
    return t;
  }
  const event = (ticketId, userId, kind, message) => insert('ticket_events', { ticket_id: ticketId, user_id: userId, kind, message, created_at: nowIso() });
  function parseTicket(body) {
    const v = validator(body);
    const d = {
      title: v.str('title', { min: 3, max: 200, required: true, label: 'Título' }),
      description: v.str('description', { max: 10000, trim: false }) ?? '',
      type: v.oneOf('type', T_TYPES, { required: true, label: 'Tipo' }),
      system_id: v.id('system_id') ?? null,
      assignee_id: v.id('assignee_id') ?? null,
      priority: v.oneOf('priority', T_PRIOS) ?? 'medium',
      status: v.oneOf('status', T_STATUSES) ?? 'backlog',
      due_date: v.date('due_date') ?? null,
      client_id: v.id('client_id') ?? null,
      requester_name: v.str('requester_name', { max: 120 }) ?? null,
      requester_phone: v.str('requester_phone', { max: 30 }) ?? null,
      requester_email: v.email('requester_email') ?? null,
      requester_company: v.str('requester_company', { max: 120 }) ?? null,
      resolution: v.str('resolution', { max: 5000, trim: false }) ?? null,
    };
    v.done();
    return d;
  }

  // =====================================================================
  // ROTAS
  // =====================================================================
  const routes = [];
  const on = (method, pattern, handler, { pub = false } = {}) => {
    const keys = [];
    const re = new RegExp(`^${pattern.replace(/:(\w+)/g, (_, k) => (keys.push(k), '([^/]+)'))}$`);
    routes.push({ method, re, keys, handler, pub });
  };

  // ---- autenticação ----
  const attempts = new Map();
  on('POST', '/auth/login', async ({ body }) => {
    const v = validator(body);
    const email = v.email('email', { required: true, label: 'E-mail' });
    const password = v.str('password', { min: 1, max: 200, required: true, label: 'Senha', trim: false });
    v.done();
    const a = attempts.get(email);
    if (a && a.count >= 8 && a.until > Date.now()) fail(429, 'Muitas tentativas. Tente novamente em alguns minutos.');

    if (isRemote()) {
      // Login pelo Supabase Auth; o perfil (papel) fica na tabela users
      let s;
      try {
        s = await sbSignIn(email, password);
      } catch (err) {
        attempts.set(email, { count: (a?.count ?? 0) + 1, until: Date.now() + 10 * 60_000 });
        fail(err.status === 400 ? 401 : err.status ?? 500, err.message);
      }
      await sbReload();
      let u = DB.users.find((x) => x.auth_id === s.user.id) ?? DB.users.find((x) => !x.auth_id && x.email === email);
      if (!u && !(await sbRpc('sh_has_users'))) {
        // primeiro acesso ao Supabase: esta conta vira o administrador
        u = insert('users', { auth_id: s.user.id, name: email.split('@')[0], email, role: 'admin', active: true, is_demo: false, password_hash: null, created_at: nowIso(), last_login_at: null });
        await flushSync();
      }
      if (!u || !u.active) {
        await sbSignOut();
        fail(403, 'Seu login existe, mas não há um perfil ativo no SystemHub. Peça a um administrador para cadastrar você em Usuários e acessos.');
      }
      u.auth_id = s.user.id; // vincula perfil pré-cadastrado pelo administrador
      u.last_login_at = nowIso();
      attempts.delete(email);
      const user = publicUser(u);
      audit(user, 'auth.login', 'user', u.id, `Login de ${u.email}`);
      return { user, permissions: permissionsFor(u.role) };
    }

    const u = DB.users.find((x) => x.email === email);
    if (!u || !u.active || !(await verifyPassword(password, u.password_hash))) {
      attempts.set(email, { count: (a?.count ?? 0) + 1, until: Date.now() + 10 * 60_000 });
      fail(401, 'E-mail ou senha inválidos');
    }
    attempts.delete(email);
    u.last_login_at = nowIso();
    localStorage.setItem(SESSION_KEY, JSON.stringify({ uid: u.id, exp: Date.now() + 12 * HOUR }));
    const user = { id: u.id, name: u.name, email: u.email, role: u.role };
    audit(user, 'auth.login', 'user', u.id, `Login de ${u.email}`);
    return { user, permissions: permissionsFor(u.role) };
  }, { pub: true });
  on('POST', '/auth/logout', async () => {
    localStorage.removeItem(SESSION_KEY);
    if (isRemote()) {
      await sbSignOut();
      DB = emptyDb();
      sbTakeSnapshot();
    }
    return { ok: true };
  }, { pub: true });

  // ---- configuração e situação da conexão ----
  on('GET', '/config', () => {
    const c = getConfig();
    return { mode: c.remote ? 'supabase' : 'local', supabaseUrl: c.supabaseUrl, hasKey: !!c.supabaseKey, fixed: c.fixed, sql: SUPABASE_SETUP_SQL };
  }, { pub: true });

  /** Salva a URL/chave do Supabase. Só o administrador (ou ninguém logado ainda) pode trocar. */
  on('PUT', '/config', async ({ body }) => {
    const user = sessionUser();
    if (user && !allowed(user, 'settings:manage')) fail(403, 'Somente administradores alteram a conexão.');
    if (getConfig().fixed) fail(400, 'A conexão está fixada no arquivo script.js (SUPABASE_URL / SUPABASE_ANON_KEY).');
    const url = String(body.supabaseUrl ?? '').trim().replace(/\/+$/, '');
    const key = String(body.supabaseKey ?? '').trim();
    if (url && !/^https:\/\/[\w.-]+$/i.test(url)) fail(400, 'URL do projeto inválida. Ex.: https://abcdefgh.supabase.co');
    if (url && !key) fail(400, 'Informe a chave "anon public" do projeto.');
    localStorage.removeItem(SESSION_KEY);
    sbClearSession();
    saveConfig(url ? { supabaseUrl: url, supabaseKey: key } : {});
    ready = null; // recarrega o banco no novo modo
    return { ok: true, mode: url ? 'supabase' : 'local' };
  }, { pub: true });

  /** Testa a conexão e verifica se as tabelas foram instaladas. */
  on('POST', '/config/test', async ({ body }) => {
    const prev = configOverride;
    configOverride = { supabaseUrl: body.supabaseUrl, supabaseKey: body.supabaseKey };
    try {
      await sbFetch('/rest/v1/public_systems?select=id&limit=1', { anon: true });
      const hasUsers = await sbRpc('sh_has_users', {}, true);
      return { ok: true, installed: true, hasUsers };
    } catch (err) {
      fail(400, err.message);
    } finally {
      configOverride = prev;
    }
  }, { pub: true });

  /** Cria a conta de login (Supabase Auth) do primeiro administrador. */
  on('POST', '/config/first-admin', async ({ body }) => {
    if (!isRemote()) fail(400, 'Conecte o Supabase primeiro.');
    const v = validator(body);
    const email = v.email('email', { required: true, label: 'E-mail' });
    const password = v.str('password', { min: 8, max: 200, required: true, label: 'Senha', trim: false });
    v.done();
    if (await sbRpc('sh_has_users', {}, true)) fail(400, 'Já existe administrador. Entre com seu login ou peça acesso a ele.');
    await sbSignUp(email, password);
    return { ok: true };
  }, { pub: true });

  // ---- formulário público de chamados (sem login) ----
  on('GET', '/public/systems', async () => {
    if (isRemote()) return sbFetch('/rest/v1/public_systems?select=id,name', { anon: true });
    return DB.systems.filter((s) => !s.restricted).map((s) => ({ id: s.id, name: s.name })).sort((a, b) => a.name.localeCompare(b.name));
  }, { pub: true });

  on('POST', '/public/tickets', async ({ body }) => {
    const v = validator(body);
    const d = {
      requester_name: v.str('requester_name', { min: 2, max: 120, required: true, label: 'Seu nome' }),
      requester_phone: v.str('requester_phone', { min: 8, max: 30, required: true, label: 'WhatsApp' }),
      requester_email: v.email('requester_email') ?? null,
      requester_company: v.str('requester_company', { max: 120 }) ?? null,
      type: v.oneOf('type', T_TYPES, { required: true, label: 'Tipo' }),
      system_id: v.id('system_id') ?? null,
      title: v.str('title', { min: 3, max: 200, required: true, label: 'Assunto' }),
      description: v.str('description', { min: 5, max: 5000, required: true, label: 'Descrição', trim: false }),
    };
    v.done();
    if (String(d.requester_phone).replace(/\D/g, '').length < 10) fail(400, 'Informe o WhatsApp com DDD.');
    const row = {
      ...d, priority: d.type === 'incident' ? 'high' : 'medium', status: 'backlog', assignee_id: null, reporter_id: null, due_date: null,
      position: 0, is_demo: false, created_at: nowIso(), updated_at: nowIso(), closed_at: null, source: 'public', resolution: null, client_id: null,
    };
    if (isRemote()) {
      // visitante sem login: grava direto no Supabase (o banco só permite criar chamados públicos)
      const id = 10_000_000 + Math.floor(Math.random() * 89_999_999);
      await sbFetch('/rest/v1/tickets', { method: 'POST', body: sbRow('tickets', { id, ...row }), anon: true, headers: { Prefer: 'return=minimal' } });
      return { id };
    }
    row.client_id = matchClient(d.requester_email, d.requester_phone);
    const t = insert('tickets', row);
    event(t.id, null, 'created', `Chamado aberto pelo formulário público por ${d.requester_name}`);
    notifyRoles(['admin', 'manager', 'developer'], { type: 'ticket', title: `Novo chamado pelo link público: ${d.title}`, message: d.requester_name, link: `/tickets?open=${t.id}` });
    return { id: t.id };
  }, { pub: true });

  // ---- configurações gerais (WhatsApp do responsável, endereço público) ----
  on('GET', '/settings', () => ({ owner_whatsapp: setting('owner_whatsapp'), public_url: setting('public_url') }));
  on('PUT', '/settings', ({ user, body }) => {
    need(user, 'settings:manage');
    const v = validator(body);
    const phone = v.str('owner_whatsapp', { max: 30 }) ?? '';
    const url = v.url('public_url', { label: 'Endereço público' }) ?? '';
    v.done();
    if (phone && phone.replace(/\D/g, '').length < 10) fail(400, 'Informe o WhatsApp com DDD.');
    setSetting('owner_whatsapp', phone);
    setSetting('public_url', url);
    audit(user, 'settings.update', 'settings', null, 'Configurações gerais atualizadas', { owner_whatsapp: phone ? '***' : '', public_url: url });
    return { ok: true };
  });

  /** Carrega os dados demonstrativos no banco atual. */
  on('POST', '/settings/demo-data', async ({ user }) => {
    need(user, 'settings:manage');
    if (DB.systems.some((s) => s.is_demo || s.data_origin === 'demo')) fail(400, 'Os dados demonstrativos já foram carregados.');
    await seedDemo({ merge: true });
    audit(user, 'seed', 'system', null, 'Dados demonstrativos (fictícios) carregados');
    return { ok: true };
  });

  /** Modo local: apaga tudo e recria a demonstração. */
  on('POST', '/settings/reset-local', async ({ user }) => {
    need(user, 'settings:manage');
    if (isRemote()) fail(400, 'Disponível apenas no modo local.');
    localStorage.removeItem(SESSION_KEY);
    await resetDb();
    return { ok: true };
  });
  on('GET', '/auth/me', () => { const user = sessionUser(); return { user, permissions: user ? permissionsFor(user.role) : [] }; }, { pub: true });

  // ---- dashboard ----
  on('GET', '/dashboard', ({ user }) => {
    const vis = DB.systems.filter((s) => canSee(user, s));
    const visIds = new Set(vis.map((s) => s.id));
    const count = (fn) => vis.filter(fn).length;
    const tk = DB.tickets.filter((t) => ticketScope(user, t) && t.status !== 'done');
    const today = nowIso().slice(0, 10);
    const groupBy = (key) => [...vis.reduce((m, s) => m.set(s[key], (m.get(s[key]) ?? 0) + 1), new Map())].map(([name, value]) => ({ name, value }));
    const mini = (s) => ({ id: s.id, name: s.name, icon: s.icon, color: s.color, category: s.category, status: s.status, url: s.url });
    return {
      stats: {
        total: vis.length, operational: count((s) => s.status === 'operational'), degraded: count((s) => s.status === 'degraded'),
        maintenance: count((s) => s.status === 'maintenance'), down: count((s) => s.status === 'down'), unknown: count((s) => s.status === 'unknown'),
        pending_updates: count((s) => s.pending_update), critical: count((s) => s.criticality === 'critical'),
      },
      tickets: {
        open: tk.length,
        improvements: tk.filter((t) => ['improvement', 'feature'].includes(t.type)).length,
        problems: tk.filter((t) => ['bug', 'incident', 'update_issue'].includes(t.type)).length,
        overdue: tk.filter((t) => t.due_date && t.due_date < today).length,
        urgent: tk.filter((t) => t.priority === 'urgent').length,
        public_open: tk.filter((t) => t.source === 'public').length,
      },
      backups: allowed(user, 'backups:view')
        ? DB.backup_jobs.reduce((acc, j) => { const h = backupHealth(j); if (h === 'late' || h === 'failed') acc[h]++; return acc; }, { late: 0, failed: 0 })
        : null,
      categories: groupBy('category').sort((a, b) => b.value - a.value || a.name.localeCompare(b.name)),
      origin: groupBy('data_origin'),
      availability: dailyAvailability(30, visIds),
      recent: DB.recent_access.filter((r) => r.user_id === user.id && visIds.has(r.system_id)).sort((a, b) => b.accessed_at.localeCompare(a.accessed_at)).slice(0, 6)
        .map((r) => ({ ...mini(byId('systems', r.system_id)), accessed_at: r.accessed_at })),
      favorites: DB.favorites.filter((f) => f.user_id === user.id && visIds.has(f.system_id)).map((f) => mini(byId('systems', f.system_id))).sort((a, b) => a.name.localeCompare(b.name)).slice(0, 12),
      incidents: DB.incidents.filter((i) => i.status === 'open' && visIds.has(i.system_id)).sort((a, b) => b.started_at.localeCompare(a.started_at)).slice(0, 5)
        .map((i) => ({ ...i, system_name: nameOf('systems', i.system_id) })),
    };
  });

  // ---- sistemas ----
  on('GET', '/systems', ({ user, query }) => {
    let list = DB.systems.filter((s) => canSee(user, s)).map((s) => systemView(s, user));
    if (query.q) {
      const toks = tokens(query.q);
      list = list.filter((s) => matches([s.name, s.slug, s.description, s.category, s.version, s.technical_owner_name, s.team_name, ...s.technologies].join(' '), toks));
    }
    const csv = (k) => String(query[k] ?? '').split(',').filter(Boolean);
    for (const k of ['category', 'status', 'criticality']) { const vals = csv(k); if (vals.length) list = list.filter((s) => vals.includes(s[k])); }
    if (query.owner) list = list.filter((s) => s.technical_owner_id === Number(query.owner));
    if (query.team) list = list.filter((s) => s.team_id === Number(query.team));
    if (query.favorites === '1') list = list.filter((s) => s.is_favorite);
    if (query.pendingUpdate === '1') list = list.filter((s) => s.pending_update);
    if (ORIGINS.includes(query.origin)) list = list.filter((s) => s.data_origin === query.origin);
    const sort = query.sort || 'name';
    const dir = query.dir === 'desc' ? -1 : 1;
    const key = (s) => (sort === 'status' ? ORDER.status[s.status] : sort === 'criticality' ? ORDER.criticality[s.criticality] : sort === 'updated' ? s.last_update_at : sort === 'category' ? norm(s.category) : norm(s.name));
    list.sort((a, b) => { const x = key(a); const y = key(b); return (x < y ? -1 : x > y ? 1 : 0) * dir || norm(a.name).localeCompare(norm(b.name)); });
    const pageSize = Math.min(500, Math.max(1, Number(query.pageSize) || 24));
    const page = Math.max(1, Number(query.page) || 1);
    return { items: list.slice((page - 1) * pageSize, page * pageSize), total: list.length, page, pageSize };
  });

  on('GET', '/systems/meta', ({ user }) => {
    const counts = new Map();
    for (const s of DB.systems) if (canSee(user, s)) counts.set(s.category, (counts.get(s.category) ?? 0) + 1);
    return {
      categories: [...counts].map(([name, count]) => ({ name, count })).sort((a, b) => a.name.localeCompare(b.name)),
      owners: DB.people.map((p) => ({ id: p.id, name: p.name })).sort((a, b) => a.name.localeCompare(b.name)),
      teams: DB.teams.map((t) => ({ id: t.id, name: t.name })).sort((a, b) => a.name.localeCompare(b.name)),
    };
  });

  on('GET', '/systems/:id', ({ user, params }) => {
    const s = visibleSystem(user, intId(params.id));
    const v = systemView(s, user);
    if (!allowed(user, 'monitoring:view')) delete v.healthcheck_url;
    const checks30 = DB.health_checks.filter((h) => h.system_id === s.id && h.checked_at > agoIso(30 * DAY));
    return {
      ...v,
      contacts: DB.system_contacts.filter((c) => c.system_id === s.id).map((c) => {
        const p = byId('people', c.person_id);
        return { id: p.id, name: p.name, email: p.email, phone: p.phone, title: p.title, role: c.role, team_name: nameOf('teams', p.team_id) };
      }).sort((a, b) => a.name.localeCompare(b.name)),
      versions: DB.system_versions.filter((x) => x.system_id === s.id).sort((a, b) => b.released_at.localeCompare(a.released_at) || b.id - a.id)
        .map((x) => ({ ...x, created_by_name: nameOf('users', x.created_by) })),
      incidents: DB.incidents.filter((i) => i.system_id === s.id).sort((a, b) => b.started_at.localeCompare(a.started_at)),
      tickets: DB.tickets.filter((t) => t.system_id === s.id).sort((a, b) => (a.status === 'done') - (b.status === 'done') || b.created_at.localeCompare(a.created_at))
        .map((t) => ({ ...t, assignee_name: nameOf('users', t.assignee_id) })),
      uptime: {
        uptime_24h: uptime(s.id, DAY), uptime_7d: uptime(s.id, 7 * DAY), uptime_30d: uptime(s.id, 30 * DAY),
        avg_latency_24h: avg(DB.health_checks.filter((h) => h.system_id === s.id && h.checked_at > agoIso(DAY) && h.latency_ms != null).map((h) => h.latency_ms)),
        checks_30d: checks30.length,
      },
      checks: DB.health_checks.filter((h) => h.system_id === s.id).slice(-20).reverse(),
      history: DB.audit_logs.filter((a) => a.entity === 'system' && a.entity_id === String(s.id)).slice(-50).reverse(),
      access: allowed(user, 'users:manage')
        ? DB.system_access.filter((a) => a.system_id === s.id).map((a) => byId('users', a.user_id)).filter(Boolean).map((u) => ({ id: u.id, name: u.name, email: u.email }))
        : [],
    };
  });

  on('GET', '/systems/:id/availability', ({ user, params, query }) => {
    const s = visibleSystem(user, intId(params.id));
    return dailyAvailability(Math.min(90, Math.max(1, Number(query.days) || 30)), new Set([s.id]));
  });

  on('POST', '/systems', ({ user, body }) => {
    need(user, 'systems:create');
    const { d, contacts } = parseSystem(body, true);
    const data = { icon: 'box', color: '#244487', description: '', version: '1.0.0', criticality: 'medium', technologies: [], data_sources: [], integrations: [], monitoring_enabled: false, pending_update: false, restricted: false, data_origin: 'manual', documentation_url: null, documentation: null, healthcheck_url: null, technical_owner_id: null, team_id: null, ...d };
    checkMonitoring(data);
    const s = insert('systems', { slug: slugify(data.name), ...data, status: 'unknown', status_source: 'manual', status_note: null, status_updated_at: nowIso(), last_update_at: nowIso(), last_check_at: null, last_latency_ms: null, created_at: nowIso(), updated_at: nowIso() });
    insert('system_versions', { system_id: s.id, version: s.version, notes: 'Versão inicial cadastrada', released_at: nowIso(), created_by: user.id });
    if (contacts) saveContacts(s.id, contacts);
    audit(user, 'system.create', 'system', s.id, `Sistema "${s.name}" cadastrado`, { slug: s.slug });
    notifyRoles(['admin', 'manager'], { type: 'system', title: `Novo sistema cadastrado: ${s.name}`, link: `/systems/${s.id}` }, user.id);
    if (s.monitoring_enabled) setTimeout(() => runCheck(s.id), 50);
    return { id: s.id, slug: s.slug };
  });

  on('PUT', '/systems/:id', ({ user, params, body }) => {
    need(user, 'systems:update');
    const s = byId('systems', intId(params.id)) ?? notFound('Sistema');
    const { d, contacts } = parseSystem(body, false);
    if (user.role !== 'admin') {
      for (const k of ADMIN_ONLY) {
        if (d[k] !== undefined && JSON.stringify(d[k]) !== JSON.stringify(s[k])) fail(403, `Apenas administradores podem alterar o campo "${k}"`);
        delete d[k];
      }
    }
    checkMonitoring({ ...s, ...d });
    const changes = diff(s, d, UPDATABLE);
    Object.assign(s, d, { updated_at: nowIso() });
    if (changes.version) {
      Object.assign(s, { last_update_at: nowIso(), pending_update: false });
      insert('system_versions', { system_id: s.id, version: d.version, notes: 'Versão atualizada via cadastro', released_at: nowIso(), created_by: user.id });
    }
    if (contacts) { saveContacts(s.id, contacts); changes.contacts = { from: '…', to: `${contacts.length} contato(s)` }; }
    if (Object.keys(changes).length) audit(user, 'system.update', 'system', s.id, `Sistema "${s.name}" atualizado (${Object.keys(changes).join(', ')})`, changes);
    return { ok: true, changed: Object.keys(changes) };
  });

  on('DELETE', '/systems/:id', ({ user, params }) => {
    need(user, 'systems:delete');
    const s = byId('systems', intId(params.id)) ?? notFound('Sistema');
    deleteSystemCascade(s.id);
    audit(user, 'system.delete', 'system', s.id, `Sistema "${s.name}" excluído`, { id: s.id, name: s.name, slug: s.slug });
    return { ok: true };
  });

  on('POST', '/systems/:id/favorite', ({ user, params }) => {
    const s = visibleSystem(user, intId(params.id));
    const exists = DB.favorites.some((f) => f.user_id === user.id && f.system_id === s.id);
    if (exists) DB.favorites = DB.favorites.filter((f) => !(f.user_id === user.id && f.system_id === s.id));
    else insert('favorites', { user_id: user.id, system_id: s.id });
    return { favorite: !exists };
  });

  on('POST', '/systems/:id/access', ({ user, params }) => {
    const s = visibleSystem(user, intId(params.id));
    const r = DB.recent_access.find((x) => x.user_id === user.id && x.system_id === s.id);
    if (r) r.accessed_at = nowIso();
    else insert('recent_access', { user_id: user.id, system_id: s.id, accessed_at: nowIso() });
    return { url: s.url };
  });

  on('POST', '/systems/:id/versions', ({ user, params, body }) => {
    need(user, 'systems:versions');
    const s = byId('systems', intId(params.id)) ?? notFound('Sistema');
    const v = validator(body);
    const version = v.str('version', { min: 1, max: 40, required: true, label: 'Versão' });
    const notes = v.str('notes', { max: 4000 }) ?? null;
    v.done();
    insert('system_versions', { system_id: s.id, version, notes, released_at: nowIso(), created_by: user.id });
    Object.assign(s, { version, last_update_at: nowIso(), pending_update: false, updated_at: nowIso() });
    audit(user, 'system.version', 'system', s.id, `Nova versão ${version} registrada em "${s.name}"`, { version, notes });
    return { ok: true };
  });

  on('POST', '/systems/:id/status', ({ user, params, body }) => {
    need(user, 'systems:status');
    const s = byId('systems', intId(params.id)) ?? notFound('Sistema');
    const v = validator(body);
    const status = v.oneOf('status', STATUSES, { required: true, label: 'Status' });
    const note = v.str('note', { max: 500 }) ?? null;
    v.done();
    const prev = s.status;
    Object.assign(s, { status, status_source: 'manual', status_note: note, status_updated_at: nowIso() });
    if (status === 'down' && prev !== 'down') {
      insert('incidents', { system_id: s.id, title: `${s.name} indisponível (informado manualmente)`, description: note, severity: s.criticality, status: 'open', source: 'manual', started_at: nowIso(), resolved_at: null, created_by: user.id });
    }
    if (status === 'operational') for (const i of DB.incidents) if (i.system_id === s.id && i.status === 'open') Object.assign(i, { status: 'resolved', resolved_at: nowIso() });
    audit(user, 'system.status', 'system', s.id, `Status de "${s.name}" alterado manualmente: ${prev} → ${status}`, { from: prev, to: status, note });
    if (status === 'down' || status === 'maintenance') {
      notifyRoles(['admin', 'manager', 'developer'], { type: status === 'down' ? 'incident' : 'system', title: `${s.name}: ${status === 'down' ? 'indisponível' : 'em manutenção'} (manual)`, message: note, link: `/systems/${s.id}` }, user.id);
    }
    return { ok: true };
  });

  on('POST', '/systems/:id/check', async ({ user, params }) => {
    need(user, 'monitoring:run');
    const r = await runCheck(intId(params.id));
    if (!r) fail(400, 'Sistema sem integração técnica de verificação (healthcheck) configurada.');
    return r;
  });

  on('PUT', '/systems/:id/access-list', ({ user, params, body }) => {
    need(user, 'users:manage');
    const s = byId('systems', intId(params.id)) ?? notFound('Sistema');
    const ids = Array.isArray(body.userIds) ? body.userIds.map((x) => intId(x, 'usuário')) : [];
    DB.system_access = DB.system_access.filter((a) => a.system_id !== s.id);
    for (const uid of new Set(ids)) insert('system_access', { system_id: s.id, user_id: uid });
    audit(user, 'system.access', 'system', s.id, `Lista de acesso de "${s.name}" atualizada (${ids.length} usuário(s))`, { userIds: ids });
    return { ok: true };
  });

  // ---- chamados ----
  on('GET', '/tickets', ({ user, query }) => {
    let list = DB.tickets.filter((t) => ticketScope(user, t)).map(ticketView);
    if (query.q) { const toks = tokens(query.q); list = list.filter((t) => matches(`${t.title} ${t.description} ${t.system_name ?? ''} #${t.id}`, toks)); }
    for (const k of ['type', 'priority', 'status']) if (query[k]) list = list.filter((t) => t[k] === query[k]);
    if (query.system) list = list.filter((t) => t.system_id === Number(query.system));
    if (query.client) list = list.filter((t) => t.client_id === Number(query.client));
    if (query.source) list = list.filter((t) => t.source === query.source);
    if (query.assignee) list = list.filter((t) => t.assignee_id === (query.assignee === 'me' ? user.id : Number(query.assignee)));
    return list.sort((a, b) => a.position - b.position || b.id - a.id);
  });

  /** Conclui o chamado com o resumo da solução (usado no resumo enviado pelo WhatsApp). */
  on('POST', '/tickets/:id/conclude', ({ user, params, body }) => {
    need(user, 'tickets:manage');
    const t = loadTicket(user, intId(params.id));
    const v = validator(body);
    const resolution = v.str('resolution', { min: 3, max: 5000, required: true, label: 'Resumo da solução', trim: false });
    v.done();
    const prev = t.status;
    if (prev !== 'done') {
      const pos = Math.min(1000, ...DB.tickets.filter((x) => x.status === 'done').map((x) => x.position));
      Object.assign(t, { status: 'done', position: pos - 1, closed_at: nowIso() });
      event(t.id, user.id, 'status', `Status: ${T_LABEL[prev]} → Concluído`);
    }
    Object.assign(t, { resolution, updated_at: nowIso(), assignee_id: t.assignee_id ?? user.id });
    event(t.id, user.id, 'resolution', `Resumo da solução: ${resolution}`);
    audit(user, 'ticket.conclude', 'ticket', t.id, `Chamado #${t.id} concluído`, { from: prev });
    if (t.reporter_id && t.reporter_id !== user.id) notifyUsers([t.reporter_id], { type: 'ticket', title: `Chamado #${t.id}: Concluído`, message: t.title, link: `/tickets?open=${t.id}` });
    return { ok: true };
  });

  /** Registra no histórico que o resumo foi enviado pelo WhatsApp. */
  on('POST', '/tickets/:id/whatsapp-log', ({ user, params, body }) => {
    const t = loadTicket(user, intId(params.id));
    const to = body.to === 'owner' ? 'responsável (você)' : 'solicitante';
    event(t.id, user.id, 'whatsapp', `Resumo aberto no WhatsApp para envio ao ${to}`);
    return { ok: true, owner_whatsapp: setting('owner_whatsapp') };
  });

  on('GET', '/tickets/:id', ({ user, params }) => {
    const t = loadTicket(user, intId(params.id));
    return {
      ...ticketView(t),
      events: DB.ticket_events.filter((e) => e.ticket_id === t.id).sort((a, b) => a.created_at.localeCompare(b.created_at) || a.id - b.id)
        .map((e) => ({ ...e, user_name: nameOf('users', e.user_id) })),
    };
  });

  on('POST', '/tickets', ({ user, body }) => {
    need(user, 'tickets:create');
    const d = parseTicket(body);
    if (d.system_id) visibleSystem(user, d.system_id);
    if (!allowed(user, 'tickets:manage')) { d.assignee_id = null; d.status = 'backlog'; } // triagem é da equipe
    const minPos = Math.min(1000, ...DB.tickets.filter((t) => t.status === d.status).map((t) => t.position));
    if (!d.client_id && (d.requester_email || d.requester_phone)) d.client_id = matchClient(d.requester_email, d.requester_phone);
    const t = insert('tickets', { ...d, source: 'internal', reporter_id: user.id, position: minPos - 1, is_demo: false, created_at: nowIso(), updated_at: nowIso(), closed_at: d.status === 'done' ? nowIso() : null });
    event(t.id, user.id, 'created', `Chamado aberto em "${T_LABEL[d.status]}"`);
    audit(user, 'ticket.create', 'ticket', t.id, `Chamado #${t.id} aberto: ${d.title}`);
    if (d.assignee_id && d.assignee_id !== user.id) notifyUsers([d.assignee_id], { type: 'ticket', title: `Chamado #${t.id} atribuído a você`, message: d.title, link: `/tickets?open=${t.id}` });
    return { id: t.id };
  });

  on('PUT', '/tickets/:id', ({ user, params, body }) => {
    need(user, 'tickets:manage');
    const t = loadTicket(user, intId(params.id));
    const d = parseTicket(body);
    // campos não enviados pelo formulário de edição são preservados
    for (const k of ['client_id', 'requester_name', 'requester_phone', 'requester_email', 'requester_company', 'resolution']) if (body[k] === undefined) d[k] = t[k] ?? null;
    const labels = { title: 'Título', description: 'Descrição', type: 'Tipo', system_id: 'Sistema', assignee_id: 'Responsável', priority: 'Prioridade', status: 'Status', due_date: 'Prazo', client_id: 'Cliente' };
    const changed = Object.keys(labels).filter((k) => (t[k] ?? null) !== (d[k] ?? null));
    const before = { ...t };
    Object.assign(t, d, { updated_at: nowIso(), closed_at: d.status === 'done' ? t.closed_at ?? nowIso() : null });
    if (changed.length) {
      const others = changed.filter((c) => c !== 'status').map((c) => labels[c]);
      event(t.id, user.id, 'update', changed.includes('status')
        ? `Status: ${T_LABEL[before.status]} → ${T_LABEL[d.status]}${others.length ? `; campos alterados: ${others.join(', ')}` : ''}`
        : `Campos alterados: ${others.join(', ')}`);
      audit(user, 'ticket.update', 'ticket', t.id, `Chamado #${t.id} atualizado`, { changed });
    }
    if (d.assignee_id && d.assignee_id !== before.assignee_id && d.assignee_id !== user.id) notifyUsers([d.assignee_id], { type: 'ticket', title: `Chamado #${t.id} atribuído a você`, message: d.title, link: `/tickets?open=${t.id}` });
    if (before.status !== d.status && before.reporter_id && before.reporter_id !== user.id) notifyUsers([before.reporter_id], { type: 'ticket', title: `Chamado #${t.id}: ${T_LABEL[d.status]}`, message: d.title, link: `/tickets?open=${t.id}` });
    return { ok: true };
  });

  on('PATCH', '/tickets/:id/move', ({ user, params, body }) => {
    need(user, 'tickets:manage');
    const t = loadTicket(user, intId(params.id));
    const v = validator(body);
    const status = v.oneOf('status', T_STATUSES, { required: true });
    v.done();
    const index = Math.max(0, Number.parseInt(body.index ?? 0, 10) || 0);
    const col = DB.tickets.filter((x) => x.status === status && x.id !== t.id).sort((a, b) => a.position - b.position || b.id - a.id);
    col.splice(Math.min(index, col.length), 0, t);
    col.forEach((x, i) => (x.position = i + 1));
    const prev = t.status;
    if (prev !== status) {
      Object.assign(t, { status, updated_at: nowIso(), closed_at: status === 'done' ? nowIso() : null });
      event(t.id, user.id, 'status', `Status: ${T_LABEL[prev]} → ${T_LABEL[status]}`);
      audit(user, 'ticket.move', 'ticket', t.id, `Chamado #${t.id} movido para ${T_LABEL[status]}`, { from: prev, to: status });
      if (t.reporter_id && t.reporter_id !== user.id) notifyUsers([t.reporter_id], { type: 'ticket', title: `Chamado #${t.id}: ${T_LABEL[status]}`, message: t.title, link: `/tickets?open=${t.id}` });
    }
    return { ok: true };
  });

  on('POST', '/tickets/:id/comments', ({ user, params, body }) => {
    const t = loadTicket(user, intId(params.id));
    const v = validator(body);
    const message = v.str('message', { min: 1, max: 5000, required: true, label: 'Comentário' });
    v.done();
    event(t.id, user.id, 'comment', message);
    notifyUsers([t.assignee_id, t.reporter_id].filter((u) => u && u !== user.id), { type: 'ticket', title: `Novo comentário no chamado #${t.id}`, message: message.slice(0, 140), link: `/tickets?open=${t.id}` });
    return { ok: true };
  });

  on('DELETE', '/tickets/:id', ({ user, params }) => {
    need(user, 'tickets:delete');
    const t = loadTicket(user, intId(params.id));
    DB.tickets = DB.tickets.filter((x) => x.id !== t.id);
    DB.ticket_events = DB.ticket_events.filter((e) => e.ticket_id !== t.id);
    audit(user, 'ticket.delete', 'ticket', t.id, `Chamado #${t.id} excluído: ${t.title}`);
    return { ok: true };
  });

  // ---- equipes e responsáveis ----
  on('GET', '/teams', () => DB.teams.map((t) => ({
    ...t, members: DB.people.filter((p) => p.team_id === t.id).length, systems: DB.systems.filter((s) => s.team_id === t.id).length,
  })).sort((a, b) => a.name.localeCompare(b.name)));

  const parseTeam = (body) => {
    const v = validator(body);
    const d = { name: v.str('name', { min: 2, max: 80, required: true, label: 'Nome' }), description: v.str('description', { max: 500 }) ?? null };
    v.done();
    return d;
  };
  const uniqueTeam = (name, id = 0) => { if (DB.teams.some((t) => t.id !== id && norm(t.name) === norm(name))) fail(409, 'Já existe uma equipe com este nome'); };
  on('POST', '/teams', ({ user, body }) => {
    need(user, 'people:manage');
    const d = parseTeam(body);
    uniqueTeam(d.name);
    const t = insert('teams', { ...d, is_demo: false, created_at: nowIso() });
    audit(user, 'team.create', 'team', t.id, `Equipe "${d.name}" criada`);
    return { id: t.id };
  });
  on('PUT', '/teams/:id', ({ user, params, body }) => {
    need(user, 'people:manage');
    const t = byId('teams', intId(params.id)) ?? notFound('Equipe');
    const d = parseTeam(body);
    uniqueTeam(d.name, t.id);
    const changes = diff(t, d, ['name', 'description']);
    Object.assign(t, d);
    audit(user, 'team.update', 'team', t.id, `Equipe "${d.name}" atualizada`, changes);
    return { ok: true };
  });
  on('DELETE', '/teams/:id', ({ user, params }) => {
    need(user, 'people:manage');
    const t = byId('teams', intId(params.id)) ?? notFound('Equipe');
    DB.teams = DB.teams.filter((x) => x.id !== t.id);
    for (const p of DB.people) if (p.team_id === t.id) p.team_id = null;
    for (const s of DB.systems) if (s.team_id === t.id) s.team_id = null;
    audit(user, 'team.delete', 'team', t.id, `Equipe "${t.name}" excluída`);
    return { ok: true };
  });

  on('GET', '/people', () => DB.people.map((p) => ({
    ...p, team_name: nameOf('teams', p.team_id),
    owned_systems: DB.systems.filter((s) => s.technical_owner_id === p.id).length,
    contact_systems: DB.system_contacts.filter((c) => c.person_id === p.id).length,
  })).sort((a, b) => a.name.localeCompare(b.name)));

  const parsePerson = (body) => {
    const v = validator(body);
    const d = {
      name: v.str('name', { min: 2, max: 120, required: true, label: 'Nome' }),
      email: v.email('email') ?? null, phone: v.str('phone', { max: 40 }) ?? null,
      title: v.str('title', { max: 80 }) ?? null, team_id: v.id('team_id') ?? null,
    };
    v.done();
    return d;
  };
  on('POST', '/people', ({ user, body }) => {
    need(user, 'people:manage');
    const d = parsePerson(body);
    const p = insert('people', { ...d, is_demo: false, created_at: nowIso() });
    audit(user, 'person.create', 'person', p.id, `Responsável "${d.name}" cadastrado`);
    return { id: p.id };
  });
  on('PUT', '/people/:id', ({ user, params, body }) => {
    need(user, 'people:manage');
    const p = byId('people', intId(params.id)) ?? notFound('Responsável');
    const d = parsePerson(body);
    const changes = diff(p, d, ['name', 'email', 'phone', 'title', 'team_id']);
    Object.assign(p, d);
    audit(user, 'person.update', 'person', p.id, `Responsável "${d.name}" atualizado`, changes);
    return { ok: true };
  });
  on('DELETE', '/people/:id', ({ user, params }) => {
    need(user, 'people:manage');
    const p = byId('people', intId(params.id)) ?? notFound('Responsável');
    DB.people = DB.people.filter((x) => x.id !== p.id);
    DB.system_contacts = DB.system_contacts.filter((c) => c.person_id !== p.id);
    for (const s of DB.systems) if (s.technical_owner_id === p.id) s.technical_owner_id = null;
    for (const j of DB.backup_jobs) if (j.responsible_id === p.id) j.responsible_id = null;
    audit(user, 'person.delete', 'person', p.id, `Responsável "${p.name}" excluído`);
    return { ok: true };
  });

  // ---- usuários ----
  on('GET', '/users/assignable', ({ user }) => {
    need(user, 'tickets:manage');
    return DB.users.filter((u) => u.active && u.role !== 'user').map((u) => ({ id: u.id, name: u.name, role: u.role })).sort((a, b) => a.name.localeCompare(b.name));
  });
  on('GET', '/users', ({ user }) => {
    need(user, 'users:manage');
    return DB.users.map(({ password_hash, auth_id, ...u }) => ({ ...u, has_login: !isRemote() || !!auth_id, system_ids: DB.system_access.filter((a) => a.user_id === u.id).map((a) => a.system_id) }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });
  const parseUser = (body, creating) => {
    const v = validator(body);
    const d = {
      name: v.str('name', { min: 2, max: 120, required: true, label: 'Nome' }),
      email: v.email('email', { required: true, label: 'E-mail' }),
      role: v.oneOf('role', ALL, { required: true, label: 'Perfil' }),
      active: v.bool('active') ?? true,
      password: v.str('password', { min: 8, max: 200, required: creating, label: 'Senha', trim: false }),
    };
    v.done();
    return { d, systemIds: Array.isArray(body.systemIds) ? body.systemIds.map((x) => intId(x, 'sistema')) : undefined };
  };
  const setAccess = (userId, ids) => {
    if (!ids) return;
    DB.system_access = DB.system_access.filter((a) => a.user_id !== userId);
    for (const sid of new Set(ids)) insert('system_access', { system_id: sid, user_id: userId });
  };
  on('POST', '/users', async ({ user, body }) => {
    need(user, 'users:manage');
    const { d, systemIds } = parseUser(body, !isRemote());
    if (DB.users.some((u) => u.email === d.email)) fail(409, 'Já existe um usuário com este e-mail');
    let authId = null;
    if (isRemote() && d.password) {
      // cria o login no Supabase Auth; se já existir, o perfil é vinculado no primeiro acesso
      try {
        authId = (await sbSignUp(d.email, d.password))?.id ?? null;
      } catch (err) {
        if (!/já tem cadastro/.test(err.message)) fail(400, err.message);
      }
    }
    const u = insert('users', {
      name: d.name, email: d.email, role: d.role, active: d.active, auth_id: authId, is_demo: false, created_at: nowIso(), last_login_at: null,
      password_hash: isRemote() ? null : await hashPassword(d.password),
    });
    setAccess(u.id, systemIds);
    audit(user, 'user.create', 'user', u.id, `Usuário ${d.email} criado com perfil ${d.role}`);
    return { id: u.id };
  });
  on('PUT', '/users/:id', async ({ user, params, body }) => {
    need(user, 'users:manage');
    const u = byId('users', intId(params.id)) ?? notFound('Usuário');
    const { d, systemIds } = parseUser(body, false);
    if (u.id === user.id && (d.role !== 'admin' || !d.active)) fail(400, 'Você não pode remover seu próprio acesso de administrador.');
    if (DB.users.some((x) => x.id !== u.id && x.email === d.email)) fail(409, 'Já existe um usuário com este e-mail');
    const changes = diff(u, d, ['name', 'email', 'role', 'active']);
    Object.assign(u, { name: d.name, email: d.email, role: d.role, active: d.active });
    if (d.password) {
      if (isRemote()) fail(400, 'No modo Supabase a senha é redefinida pela própria pessoa ou no painel do Supabase (Authentication → Users).');
      u.password_hash = await hashPassword(d.password);
      changes.password = { from: '***', to: '***' };
    }
    setAccess(u.id, systemIds);
    audit(user, 'user.update', 'user', u.id, `Usuário ${d.email} atualizado`, changes);
    return { ok: true };
  });
  on('DELETE', '/users/:id', ({ user, params }) => {
    need(user, 'users:manage');
    const u = byId('users', intId(params.id)) ?? notFound('Usuário');
    if (u.id === user.id) fail(400, 'Você não pode excluir a si mesmo.');
    DB.users = DB.users.filter((x) => x.id !== u.id);
    for (const t of ['favorites', 'recent_access', 'notifications', 'system_access']) DB[t] = DB[t].filter((r) => r.user_id !== u.id);
    for (const t of DB.tickets) { if (t.assignee_id === u.id) t.assignee_id = null; if (t.reporter_id === u.id) t.reporter_id = null; }
    audit(user, 'user.delete', 'user', u.id, `Usuário ${u.email} excluído`);
    return { ok: true };
  });

  // ---- monitoramento ----
  on('GET', '/monitoring/overview', ({ user }) => {
    need(user, 'monitoring:view');
    const monitored = (s) => s.monitoring_enabled && (s.data_origin === 'demo' || s.healthcheck_url);
    const systems = DB.systems.map((s) => ({
      ...s, has_healthcheck: !!s.healthcheck_url, uptime_24h: uptime(s.id, DAY), uptime_7d: uptime(s.id, 7 * DAY),
      open_incidents: DB.incidents.filter((i) => i.system_id === s.id && i.status === 'open').length,
      recent: DB.health_checks.filter((h) => h.system_id === s.id).slice(-24).map((h) => h.ok),
    })).sort((a, b) => ORDER.status[a.status] - ORDER.status[b.status] || ORDER.criticality[a.criticality] - ORDER.criticality[b.criticality] || a.name.localeCompare(b.name));
    const lastRun = DB.systems.map((s) => s.last_check_at).filter(Boolean).sort().at(-1) ?? null;
    return {
      systems,
      summary: {
        monitored: DB.systems.filter(monitored).length,
        manual_only: DB.systems.filter((s) => !monitored(s)).length,
        src_automatic: DB.systems.filter((s) => s.status_source === 'automatic').length,
        src_manual: DB.systems.filter((s) => s.status_source === 'manual').length,
        src_simulated: DB.systems.filter((s) => s.status_source === 'simulated').length,
        last_run: lastRun,
        open_incidents: DB.incidents.filter((i) => i.status === 'open').length,
      },
    };
  });
  on('POST', '/monitoring/run', async ({ user }) => {
    need(user, 'monitoring:run');
    await runAllChecks();
    audit(user, 'monitoring.run', 'monitoring', null, 'Verificação manual de todos os sistemas executada');
    return { ok: true };
  });
  on('GET', '/monitoring/incidents', ({ user, query }) => {
    need(user, 'monitoring:view');
    return DB.incidents.filter((i) => !query.status || i.status === query.status)
      .sort((a, b) => (b.status === 'open') - (a.status === 'open') || b.started_at.localeCompare(a.started_at))
      .slice(0, 300)
      .map((i) => {
        const s = byId('systems', i.system_id);
        return { ...i, system_name: s?.name, system_icon: s?.icon, system_color: s?.color, created_by_name: nameOf('users', i.created_by),
          duration_sec: Math.round(((i.resolved_at ? Date.parse(i.resolved_at) : Date.now()) - Date.parse(i.started_at)) / 1000) };
      });
  });
  on('POST', '/monitoring/incidents', ({ user, body }) => {
    need(user, 'incidents:manage');
    const v = validator(body);
    const systemId = v.id('system_id');
    const title = v.str('title', { min: 3, max: 200, required: true, label: 'Título' });
    const description = v.str('description', { max: 4000 }) ?? null;
    const severity = v.oneOf('severity', CRITS, { required: true, label: 'Severidade' });
    v.done();
    const s = byId('systems', systemId) ?? notFound('Sistema');
    const inc = insert('incidents', { system_id: s.id, title, description, severity, status: 'open', source: 'manual', started_at: nowIso(), resolved_at: null, created_by: user.id });
    audit(user, 'incident.open', 'system', s.id, `Incidente registrado manualmente: ${title}`, { incidentId: inc.id });
    notifyRoles(['admin', 'manager', 'developer'], { type: 'incident', title: `Incidente em ${s.name}: ${title}`, link: `/systems/${s.id}` }, user.id);
    return { id: inc.id };
  });
  on('PATCH', '/monitoring/incidents/:id/resolve', ({ user, params }) => {
    need(user, 'incidents:manage');
    const i = byId('incidents', intId(params.id)) ?? notFound('Incidente');
    if (i.status === 'open') Object.assign(i, { status: 'resolved', resolved_at: nowIso() });
    audit(user, 'incident.resolve', 'system', i.system_id, `Incidente resolvido: ${i.title}`, { incidentId: i.id });
    return { ok: true };
  });

  // ---- clientes ----
  const onlyDigits = (v) => String(v ?? '').replace(/\D/g, '');
  function parseClient(body) {
    const v = validator(body);
    const d = {
      name: v.str('name', { min: 2, max: 160, required: true, label: 'Nome / razão social' }),
      kind: v.oneOf('kind', ['PJ', 'PF']) ?? 'PJ',
      document: v.str('document', { max: 20 }) ?? null,
      contact_name: v.str('contact_name', { max: 120 }) ?? null,
      email: v.email('email') ?? null,
      phone: v.str('phone', { max: 30 }) ?? null,
      city: v.str('city', { max: 80 }) ?? null,
      state: v.str('state', { max: 2 }) ?? null,
      status: v.oneOf('status', ['active', 'inactive']) ?? 'active',
      notes: v.str('notes', { max: 4000, trim: false }) ?? null,
      system_ids: Array.isArray(body.system_ids) ? [...new Set(body.system_ids.map((x) => intId(x, 'sistema')))] : [],
    };
    v.done();
    if (d.document) {
      const n = onlyDigits(d.document).length;
      if (d.kind === 'PJ' && n !== 14) fail(400, 'CNPJ deve ter 14 dígitos.');
      if (d.kind === 'PF' && n !== 11) fail(400, 'CPF deve ter 11 dígitos.');
    }
    if (d.phone && onlyDigits(d.phone).length < 10) fail(400, 'Informe o telefone/WhatsApp com DDD.');
    if (d.state) d.state = d.state.toUpperCase();
    return d;
  }
  const clientView = (c) => {
    const tk = DB.tickets.filter((t) => t.client_id === c.id);
    return {
      ...c, systems: (c.system_ids ?? []).map((id) => ({ id, name: nameOf('systems', id) })).filter((s) => s.name),
      tickets_total: tk.length, tickets_open: tk.filter((t) => t.status !== 'done').length,
      last_ticket_at: tk.map((t) => t.created_at).sort().at(-1) ?? null,
    };
  };
  on('GET', '/clients', ({ user, query }) => {
    need(user, 'clients:view');
    let list = DB.clients.map(clientView);
    if (query.q) { const toks = tokens(query.q); list = list.filter((c) => matches(`${c.name} ${c.document ?? ''} ${onlyDigits(c.document)} ${c.contact_name ?? ''} ${c.email ?? ''} ${c.phone ?? ''} ${c.city ?? ''}`, toks)); }
    if (query.status) list = list.filter((c) => c.status === query.status);
    if (query.system) list = list.filter((c) => (c.system_ids ?? []).includes(Number(query.system)));
    return list.sort((a, b) => a.name.localeCompare(b.name));
  });
  on('GET', '/clients/:id', ({ user, params }) => {
    need(user, 'clients:view');
    const c = byId('clients', intId(params.id)) ?? notFound('Cliente');
    return {
      ...clientView(c),
      tickets: DB.tickets.filter((t) => t.client_id === c.id).map(ticketView).sort((a, b) => b.created_at.localeCompare(a.created_at)),
    };
  });
  on('POST', '/clients', ({ user, body }) => {
    need(user, 'clients:manage');
    const d = parseClient(body);
    if (d.document && DB.clients.some((c) => onlyDigits(c.document) === onlyDigits(d.document))) fail(409, 'Já existe um cliente com este CPF/CNPJ.');
    const c = insert('clients', { ...d, is_demo: false, created_at: nowIso(), updated_at: nowIso() });
    audit(user, 'client.create', 'client', c.id, `Cliente "${d.name}" cadastrado`);
    return { id: c.id };
  });
  on('PUT', '/clients/:id', ({ user, params, body }) => {
    need(user, 'clients:manage');
    const c = byId('clients', intId(params.id)) ?? notFound('Cliente');
    const d = parseClient(body);
    if (d.document && DB.clients.some((x) => x.id !== c.id && onlyDigits(x.document) === onlyDigits(d.document))) fail(409, 'Já existe um cliente com este CPF/CNPJ.');
    const changes = diff(c, d, Object.keys(d));
    Object.assign(c, d, { updated_at: nowIso() });
    if (Object.keys(changes).length) audit(user, 'client.update', 'client', c.id, `Cliente "${d.name}" atualizado (${Object.keys(changes).join(', ')})`, changes);
    return { ok: true };
  });
  on('DELETE', '/clients/:id', ({ user, params }) => {
    need(user, 'clients:manage');
    const c = byId('clients', intId(params.id)) ?? notFound('Cliente');
    DB.clients = DB.clients.filter((x) => x.id !== c.id);
    for (const t of DB.tickets) if (t.client_id === c.id) t.client_id = null;
    audit(user, 'client.delete', 'client', c.id, `Cliente "${c.name}" excluído`);
    return { ok: true };
  });

  // ---- backups ----
  const BK_FREQ_HOURS = { hourly: 1, daily: 24, weekly: 168, monthly: 744 };
  const BK_TYPES = ['full', 'incremental', 'differential', 'snapshot'];
  /** Situação da rotina: ok, failed (última execução falhou), late (atrasada), never, inactive. */
  function backupHealth(j) {
    if (!j.active) return 'inactive';
    if (j.last_status === 'failed') return 'failed';
    if (!j.last_success_at) return j.last_run_at ? 'failed' : 'never';
    const limit = BK_FREQ_HOURS[j.frequency] * HOUR * 1.5; // tolerância de 50%
    return Date.now() - Date.parse(j.last_success_at) > limit ? 'late' : 'ok';
  }
  const nextRun = (j) => (j.last_run_at ? new Date(Date.parse(j.last_run_at) + BK_FREQ_HOURS[j.frequency] * HOUR).toISOString() : null);
  const jobView = (j) => {
    const s = byId('systems', j.system_id);
    return {
      ...j, health: backupHealth(j), next_run_at: nextRun(j), system_name: s?.name ?? null, system_icon: s?.icon ?? null, system_color: s?.color ?? null,
      responsible_name: nameOf('people', j.responsible_id),
      runs_30d: DB.backup_runs.filter((r) => r.job_id === j.id && r.started_at > agoIso(30 * DAY)).length,
      failures_30d: DB.backup_runs.filter((r) => r.job_id === j.id && r.status === 'failed' && r.started_at > agoIso(30 * DAY)).length,
    };
  };
  function parseJob(body) {
    const v = validator(body);
    const d = {
      system_id: v.id('system_id'),
      name: v.str('name', { min: 2, max: 120, required: true, label: 'Nome da rotina' }),
      type: v.oneOf('type', BK_TYPES, { required: true, label: 'Tipo' }),
      frequency: v.oneOf('frequency', Object.keys(BK_FREQ_HOURS), { required: true, label: 'Frequência' }),
      schedule: v.str('schedule', { max: 120 }) ?? null,
      destination: v.str('destination', { max: 200 }) ?? null,
      responsible_id: v.id('responsible_id') ?? null,
      active: v.bool('active') ?? true,
      notes: v.str('notes', { max: 2000, trim: false }) ?? null,
    };
    const ret = Number(body.retention_days);
    d.retention_days = body.retention_days === '' || body.retention_days == null ? null : Number.isInteger(ret) && ret > 0 && ret <= 3650 ? ret : fail(400, 'Retenção deve ser um número de dias entre 1 e 3650.');
    v.done();
    if (!d.system_id) fail(400, 'Selecione o sistema.');
    if (!byId('systems', d.system_id)) notFound('Sistema');
    return d;
  }
  on('GET', '/backups', ({ user, query }) => {
    need(user, 'backups:view');
    let list = DB.backup_jobs.map(jobView);
    if (query.system) list = list.filter((j) => j.system_id === Number(query.system));
    if (query.health) list = list.filter((j) => j.health === query.health);
    if (query.q) { const toks = tokens(query.q); list = list.filter((j) => matches(`${j.name} ${j.system_name} ${j.destination ?? ''} ${j.responsible_name ?? ''}`, toks)); }
    const rank = { failed: 0, late: 1, never: 2, ok: 3, inactive: 4 };
    list.sort((a, b) => rank[a.health] - rank[b.health] || (a.system_name ?? '').localeCompare(b.system_name ?? ''));
    const all = DB.backup_jobs.map(jobView);
    const runs30 = DB.backup_runs.filter((r) => r.started_at > agoIso(30 * DAY));
    return {
      items: list,
      summary: {
        active: all.filter((j) => j.active).length, ok: all.filter((j) => j.health === 'ok').length,
        late: all.filter((j) => j.health === 'late').length, failed: all.filter((j) => j.health === 'failed').length,
        never: all.filter((j) => j.health === 'never').length,
        success_rate_30d: runs30.length ? (runs30.filter((r) => r.status === 'success').length / runs30.length) * 100 : null,
        systems_without_backup: DB.systems.filter((s) => !DB.backup_jobs.some((j) => j.system_id === s.id && j.active)).length,
      },
    };
  });
  on('GET', '/backups/:id', ({ user, params }) => {
    need(user, 'backups:view');
    const j = byId('backup_jobs', intId(params.id)) ?? notFound('Rotina de backup');
    return {
      ...jobView(j),
      runs: DB.backup_runs.filter((r) => r.job_id === j.id).sort((a, b) => b.started_at.localeCompare(a.started_at)).slice(0, 100)
        .map((r) => ({ ...r, created_by_name: nameOf('users', r.created_by) })),
    };
  });
  on('POST', '/backups', ({ user, body }) => {
    need(user, 'backups:manage');
    const d = parseJob(body);
    const j = insert('backup_jobs', { ...d, last_run_at: null, last_status: 'never', last_success_at: null, last_size_mb: null, is_demo: false, created_at: nowIso(), updated_at: nowIso() });
    audit(user, 'backup.create', 'system', d.system_id, `Rotina de backup "${d.name}" cadastrada`, { jobId: j.id });
    return { id: j.id };
  });
  on('PUT', '/backups/:id', ({ user, params, body }) => {
    need(user, 'backups:manage');
    const j = byId('backup_jobs', intId(params.id)) ?? notFound('Rotina de backup');
    const d = parseJob(body);
    const changes = diff(j, d, Object.keys(d));
    Object.assign(j, d, { updated_at: nowIso() });
    if (Object.keys(changes).length) audit(user, 'backup.update', 'system', j.system_id, `Rotina de backup "${j.name}" atualizada (${Object.keys(changes).join(', ')})`, changes);
    return { ok: true };
  });
  on('DELETE', '/backups/:id', ({ user, params }) => {
    need(user, 'backups:manage');
    const j = byId('backup_jobs', intId(params.id)) ?? notFound('Rotina de backup');
    DB.backup_jobs = DB.backup_jobs.filter((x) => x.id !== j.id);
    DB.backup_runs = DB.backup_runs.filter((r) => r.job_id !== j.id);
    audit(user, 'backup.delete', 'system', j.system_id, `Rotina de backup "${j.name}" excluída`);
    return { ok: true };
  });
  /** Registra uma execução de backup (informada manualmente pela equipe). */
  on('POST', '/backups/:id/runs', ({ user, params, body }) => {
    need(user, 'backups:manage');
    const j = byId('backup_jobs', intId(params.id)) ?? notFound('Rotina de backup');
    const v = validator(body);
    const status = v.oneOf('status', ['success', 'failed'], { required: true, label: 'Resultado' });
    const notes = v.str('notes', { max: 1000 }) ?? null;
    v.done();
    const finished = body.finished_at ? new Date(body.finished_at) : new Date();
    if (Number.isNaN(finished.getTime()) || finished.getTime() > Date.now() + 60_000) fail(400, 'Data/hora de término inválida.');
    const size = body.size_mb === '' || body.size_mb == null ? null : Number(body.size_mb);
    if (size !== null && (!Number.isFinite(size) || size < 0)) fail(400, 'Tamanho inválido.');
    const r = insert('backup_runs', {
      job_id: j.id, started_at: finished.toISOString(), finished_at: finished.toISOString(), status, size_mb: size, notes, source: 'manual', created_by: user.id,
    });
    const latest = DB.backup_runs.filter((x) => x.job_id === j.id).sort((a, b) => a.finished_at.localeCompare(b.finished_at)).at(-1);
    j.last_run_at = latest.finished_at;
    j.last_status = latest.status;
    if (status === 'success' && (!j.last_success_at || r.finished_at > j.last_success_at)) { j.last_success_at = r.finished_at; j.last_size_mb = size; }
    j.updated_at = nowIso();
    const s = byId('systems', j.system_id);
    audit(user, 'backup.run', 'system', j.system_id, `Backup "${j.name}" registrado: ${status === 'success' ? 'sucesso' : 'falha'}`, { jobId: j.id, size_mb: size, notes });
    if (status === 'failed') {
      notifyRoles(['admin', 'manager', 'developer'], { type: 'incident', title: `Falha no backup "${j.name}" (${s?.name ?? 'sistema'})`, message: notes ?? undefined, link: '/backups' }, user.id);
    }
    return { id: r.id };
  });

  // ---- notificações, auditoria e busca ----
  on('GET', '/notifications', ({ user }) => {
    const mine = DB.notifications.filter((n) => n.user_id === user.id);
    return { items: mine.slice().sort((a, b) => b.created_at.localeCompare(a.created_at) || b.id - a.id).slice(0, 30), unread: mine.filter((n) => !n.read_at).length };
  });
  on('POST', '/notifications/read-all', ({ user }) => {
    for (const n of DB.notifications) if (n.user_id === user.id && !n.read_at) n.read_at = nowIso();
    return { ok: true };
  });
  on('POST', '/notifications/:id/read', ({ user, params }) => {
    const n = byId('notifications', intId(params.id));
    if (n && n.user_id === user.id && !n.read_at) n.read_at = nowIso();
    return { ok: true };
  });

  on('GET', '/audit', ({ user, query }) => {
    need(user, 'audit:view');
    let list = DB.audit_logs.slice().reverse();
    if (query.entity) list = list.filter((a) => a.entity === query.entity);
    if (query.q) { const toks = tokens(query.q); list = list.filter((a) => matches(`${a.summary} ${a.user_name} ${a.action}`, toks)); }
    const pageSize = Math.min(200, Number(query.pageSize) || 50);
    const page = Math.max(1, Number(query.page) || 1);
    return { items: list.slice((page - 1) * pageSize, page * pageSize), total: list.length, page, pageSize };
  });

  on('GET', '/search', ({ user, query }) => {
    const term = String(query.q ?? '').trim();
    if (term.length < 2) return { systems: [], tickets: [], people: [] };
    const toks = tokens(term, 6);
    return {
      systems: DB.systems.filter((s) => canSee(user, s) && matches(`${s.name} ${s.description} ${s.category} ${s.technologies.join(' ')}`, toks))
        .sort((a, b) => a.name.localeCompare(b.name)).slice(0, 8)
        .map((s) => ({ id: s.id, name: s.name, icon: s.icon, color: s.color, category: s.category, status: s.status })),
      tickets: DB.tickets.filter((t) => ticketScope(user, t) && matches(`${t.title} ${t.description} #${t.id}`, toks))
        .sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 6)
        .map((t) => ({ id: t.id, title: t.title, status: t.status, type: t.type })),
      people: DB.people.filter((p) => matches(`${p.name} ${p.email ?? ''} ${p.title ?? ''}`, toks)).slice(0, 5)
        .map((p) => ({ id: p.id, name: p.name, title: p.title, email: p.email })),
      clients: allowed(user, 'clients:view')
        ? DB.clients.filter((c) => matches(`${c.name} ${c.document ?? ''} ${onlyDigits(c.document)} ${c.contact_name ?? ''} ${c.email ?? ''}`, toks)).slice(0, 5)
          .map((c) => ({ id: c.id, name: c.name, document: c.document, contact_name: c.contact_name }))
        : [],
    };
  });

  // =====================================================================
  // Despachante
  // =====================================================================
  let ready = null;
  let onUnauthorized = () => {};
  const WRITE = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

  let inFlight = 0;
  const CONFIG_ROUTES = new Set(['/config', '/config/test', '/config/first-admin']); // nunca gravam dados
  const NO_REMOTE_SYNC = new Set(['/public/tickets', '/auth/logout']); // no Supabase já gravam por conta própria

  async function request(method, path, body, query) {
    ready ??= initDb().catch((err) => {
      ready = null;
      throw err;
    });
    await ready;
    const r = routes.find((x) => x.method === method && x.re.test(path));
    if (!r) throw new ApiError(404, 'Rota não encontrada');
    const m = r.re.exec(path);
    const params = Object.fromEntries(r.keys.map((k, i) => [k, decodeURIComponent(m[i + 1])]));
    const user = r.pub ? null : sessionUser();
    if (!r.pub && !user) {
      onUnauthorized();
      throw new ApiError(401, 'Sessão expirada ou inválida');
    }
    const q = Object.fromEntries(Object.entries(query ?? {}).filter(([, v]) => v !== undefined && v !== null && v !== '').map(([k, v]) => [k, Array.isArray(v) ? v.join(',') : String(v)]));
    inFlight++;
    try {
      const result = await r.handler({ user, params, query: q, body: clone(body ?? {}) });
      if (WRITE.has(method) && !CONFIG_ROUTES.has(path)) {
        if (!isRemote()) saveDb();
        else if (!NO_REMOTE_SYNC.has(path)) await flushSync(); // grava no Supabase; se recusar, o erro aparece na tela
      }
      return clone(result);
    } catch (err) {
      if (err instanceof ApiError) throw err;
      throw new ApiError(err.status ?? 500, err.message ?? 'Erro inesperado');
    } finally {
      inFlight--;
      if (path === '/config' && method === 'PUT') {
        DB = null;
        ready = null;
      }
    }
  }

  /** Busca no Supabase as alterações feitas por outras pessoas (a cada minuto e ao voltar para a aba). */
  async function refreshRemote() {
    if (!isRemote() || !sbSession() || inFlight > 0 || running) return;
    try {
      await sbReload();
    } catch (err) {
      console.warn('Falha ao atualizar dados do Supabase', err);
    }
  }

  window.ApiError = ApiError;
  window.setUnauthorizedHandler = (fn) => (onUnauthorized = fn);
  window.api = {
    get: (path, query) => request('GET', path, undefined, query),
    post: (path, body = {}) => request('POST', path, body),
    put: (path, body = {}) => request('PUT', path, body),
    patch: (path, body = {}) => request('PATCH', path, body),
    del: (path) => request('DELETE', path),
  };

  // Verificações automáticas enquanto o SystemHub estiver aberto (a cada 5 min)
  window.startMonitor = () => {
    if (window.__monitorStarted) return;
    window.__monitorStarted = true;
    setTimeout(runAllChecks, 4000);
    setInterval(runAllChecks, 5 * 60_000);
    setInterval(refreshRemote, 60_000);
    window.addEventListener('focus', refreshRemote);
  };
  window.applyConfigOverride = (cfg) => {
    configOverride = cfg;
    DB = null;
    ready = null;
  };
  window.resetDemoData = resetDb;
})();

// ===================== page-shared =====================
/** Link real para o sistema (abre em nova aba) — o acesso é registrado em "recentes". */
const accessLink = (s, { iconOnly = false, sm = false, cls = '' } = {}) => html`
  <a class="btn primary ${iconOnly || sm ? 'sm' : ''} ${iconOnly ? 'icon' : ''} ${cls}" href="${s.url}" target="_blank" rel="noopener noreferrer"
     data-access="${s.id}" title="Acessar sistema (abre em nova aba)" aria-label="Acessar sistema">
    ${ic('external-link', 'sm')}${iconOnly ? '' : 'Acessar sistema'}
  </a>`;

function bindAccessLinks(root) {
  root.addEventListener('click', (e) => {
    const a = e.target.closest('[data-access]');
    if (!a) return;
    e.stopPropagation();
    api.post(`/systems/${a.dataset.access}/access`).catch(() => undefined);
  });
}

const favButton = (s) => html`
  <button class="fav ${s.is_favorite ? 'on' : ''}" data-fav="${s.id}" aria-pressed="${!!s.is_favorite}"
    title="${s.is_favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}" aria-label="Favorito">${ic('star', 'sm')}</button>`;

function bindFavorites(root, onChange) {
  root.addEventListener('click', async (e) => {
    const b = e.target.closest('[data-fav]');
    if (!b) return;
    e.stopPropagation();
    b.disabled = true;
    try {
      const r = await api.post(`/systems/${b.dataset.fav}/favorite`);
      b.classList.toggle('on', r.favorite);
      b.setAttribute('aria-pressed', String(r.favorite));
      b.title = r.favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
      toast(r.favorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos', 'info');
      onChange?.(Number(b.dataset.fav), r.favorite);
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      b.disabled = false;
    }
  });
}

// ---------- WhatsApp ----------
/** Monta o link do WhatsApp (wa.me) com a mensagem pronta. Números brasileiros recebem o código 55. */
function waLink(phone, text) {
  let d = String(phone ?? '').replace(/\D/g, '');
  if (d.length === 10 || d.length === 11) d = `55${d}`;
  return `https://wa.me/${d}?text=${encodeURIComponent(text)}`;
}

/** Resumo do chamado concluído, no formato de mensagem do WhatsApp. */
function ticketSummary(t) {
  const lines = [
    `*SystemHub — Chamado #${t.id} concluído* ✅`,
    '',
    `*Assunto:* ${t.title}`,
    `*Tipo:* ${TICKET_TYPE[t.type]?.label ?? t.type}`,
    t.system_name ? `*Sistema:* ${t.system_name}` : null,
    t.requester_name || t.reporter_name ? `*Solicitante:* ${t.requester_name ?? t.reporter_name}${t.requester_company ? ` (${t.requester_company})` : ''}` : null,
    `*Aberto em:* ${formatDateTime(t.created_at)}`,
    `*Concluído em:* ${formatDateTime(t.closed_at ?? new Date().toISOString())}`,
    t.assignee_name ? `*Atendido por:* ${t.assignee_name}` : null,
    '',
    '*Resumo da solução:*',
    t.resolution || '—',
    '',
    'Obrigado pelo contato! Se precisar, é só abrir um novo chamado.',
  ];
  return lines.filter((l) => l !== null).join('\n');
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.append(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  toast('Copiado para a área de transferência', 'info');
}

/** Cache simples de listas usadas em selects. */
const cache = {};
async function cached(key, loader, ttl = 30_000) {
  const c = cache[key];
  if (c && Date.now() - c.t < ttl) return c.v;
  const v = await loader();
  cache[key] = { v, t: Date.now() };
  return v;
}
const invalidate = (...keys) => keys.forEach((k) => delete cache[k]);

// ===================== page-login =====================
// Página: login
(function () {
function render(root, { onLogin }) {
  root.innerHTML = String(html`
    <div class="login">
      <div class="login-art">
        <div class="glow1"></div><div class="glow2"></div>
        <div class="row" style="position:relative"><span class="brand-mark">${ic('shield-check')}</span><span class="brand-name" style="font-size:20px">SystemHub</span></div>
        <div style="position:relative;max-width:440px">
          <h1>Todos os seus sistemas em <span>um só lugar</span>.</h1>
          <p class="mt-4" style="color:var(--navy-200)">Catálogo, responsáveis, documentação, disponibilidade e chamados centralizados para a sua equipe.</p>
          <ul>
            <li><span>${ic('layout-grid', 'sm')}</span>Catálogo inteligente com busca e filtros</li>
            <li><span>${ic('activity', 'sm')}</span>Monitoramento real de disponibilidade</li>
            <li><span>${ic('kanban', 'sm')}</span>Gestão de chamados em Kanban</li>
          </ul>
        </div>
        <p class="xs" style="position:relative;color:var(--navy-300)">© ${new Date().getFullYear()} SystemHub</p>
      </div>
      <div class="login-form-wrap">
        <button class="icon-btn" style="position:absolute;top:16px;right:16px" data-theme aria-label="Alternar tema">${ic('moon')}</button>
        <form class="login-form" novalidate>
          <h2>Entrar</h2>
          <p class="muted mt-1">Acesse com suas credenciais.</p>
          <div class="stack mt-6">
            <label class="field"><span class="label">E-mail</span>
              <span class="input-icon">${ic('mail', 'sm')}<input class="input" type="email" name="email" autocomplete="username" required placeholder="voce@empresa.com" autofocus /></span>
            </label>
            <label class="field"><span class="label">Senha</span>
              <span class="input-icon">${ic('lock', 'sm')}<input class="input" type="password" name="password" autocomplete="current-password" required placeholder="••••••••" /></span>
            </label>
            <p class="form-error small" hidden></p>
            <button class="btn primary block" type="submit">Entrar</button>
          </div>
          <div class="row between wrap mt-6 small">
            <a href="/abrir-chamado">${ic('help-circle', 'sm')} Abrir um chamado sem login</a>
            <a href="/configuracao">${ic('settings', 'sm')} Configurar conexão</a>
          </div>
          <p class="muted xs center mt-4">${isRemote()
            ? html`Conectado ao Supabase · entre com sua conta.`
            : html`Modo local (demonstração): contas fictícias como admin@systemhub.local — a senha está em DEMO_PASSWORD, no arquivo script.js.`}</p>
        </form>
      </div>
    </div>`);

  const form = root.querySelector('form');
  const err = root.querySelector('.form-error');
  root.querySelector('[data-theme]').addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('sh-theme', dark ? 'dark' : 'light');
  });
  form.querySelector('[autofocus]').focus();
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    err.hidden = true;
    const fd = new FormData(form);
    await busy(form.querySelector('[type=submit]'), async () => {
      try {
        const r = await api.post('/auth/login', { email: fd.get('email'), password: fd.get('password') });
        onLogin(r);
      } catch (ex) {
        err.textContent = ex.message;
        err.hidden = false;
      }
    });
  });
}

window.Pages = window.Pages || {};
window.Pages['login'] = render;
})();

// ===================== page-dashboard =====================
// Página: dashboard
(function () {
const stat = (label, value, iconName, tone, to, hint) => html`
  <a class="card clickable stat" href="${to}">
    <span class="s-head">${label}<span class="s-icon ic-${tone}">${ic(iconName)}</span></span>
    <span class="s-value">${value}</span>
    <span class="s-hint">${hint}</span>
  </a>`;

async function render(root) {
  const load = async () => {
    root.innerHTML = String(html`${header()}<div class="grid cols-6">${Array.from({ length: 6 }, () => html`<div class="skeleton" style="height:128px"></div>`)}</div><div class="mt-6">${skeleton(260, 1)}</div>`);
    try {
      const d = await api.get('/dashboard');
      draw(d);
    } catch (err) {
      root.innerHTML = String(html`${header()}${errorState(err)}`);
      root.querySelector('[data-action=retry]').addEventListener('click', load);
    }
  };

  const header = () => html`
    <div class="page-header">
      <div><h1>Olá, ${state.user.name.split(' ')[0]}</h1><p class="sub">Visão geral dos sistemas, disponibilidade e chamados.</p></div>
      <div class="row">
        <a class="btn" href="/tickets?new=1">${ic('kanban', 'sm')} Abrir chamado</a>
        ${can('systems:create') ? html`<a class="btn accent" href="/systems/new">${ic('plus', 'sm')} Cadastrar sistema</a>` : ''}
      </div>
    </div>`;

  const draw = (d) => {
    const s = d.stats;
    const t = d.tickets;
    const vals = d.availability.filter((x) => x.uptime != null);
    const avg = vals.length ? vals.reduce((a, x) => a + x.uptime, 0) / vals.length : null;
    const hasDemo = d.origin.some((o) => o.name === 'demo' && o.value > 0);

    root.innerHTML = String(html`
      ${header()}
      <div class="stack" style="gap:24px">
        ${hasDemo ? demoNotice() : ''}
        ${t.public_open || d.backups?.late || d.backups?.failed ? html`<div class="row wrap" style="gap:12px">
          ${t.public_open ? html`<a class="notice" style="border-color:var(--info-ring);background:var(--info-bg);color:var(--info);text-decoration:none" href="/tickets">${ic('link', 'sm')}
            <span><strong>${t.public_open}</strong> chamado(s) aberto(s) pelo link público aguardando atendimento</span></a>` : ''}
          ${d.backups?.failed || d.backups?.late ? html`<a class="notice" style="border-color:var(--bad-ring);background:var(--bad-bg);color:var(--bad);text-decoration:none" href="/backups">${ic('hard-drive', 'sm')}
            <span>Backups: <strong>${d.backups.failed}</strong> com falha · <strong>${d.backups.late}</strong> atrasado(s)</span></a>` : ''}
        </div>` : ''}
        <div class="grid cols-6">
          ${stat('Sistemas cadastrados', s.total, 'layout-grid', 'navy', '/systems', `${s.critical} de criticidade crítica`)}
          ${stat('Ativos', s.operational, 'check-circle', 'ok', '/systems?status=operational', s.degraded ? `+ ${s.degraded} instáve${s.degraded === 1 ? 'l' : 'is'}` : 'Operando normalmente')}
          ${stat('Em manutenção', s.maintenance, 'wrench', 'info', '/systems?status=maintenance', 'Janelas programadas')}
          ${stat('Indisponíveis', s.down, 'alert-octagon', 'bad', '/systems?status=down', `${d.incidents.length} incidente(s) aberto(s)`)}
          ${stat('Atualizações pendentes', s.pending_updates, 'download', 'demo', '/systems?pendingUpdate=1', 'Versões aguardando implantação')}
          ${stat('Chamados em aberto', t.open, 'kanban', 'violet', '/tickets', `${t.problems} problemas · ${t.improvements} melhorias${t.overdue ? ` · ${t.overdue} atrasado(s)` : ''}`)}
        </div>

        <div class="grid cols-3 collapse-lg gap-lg">
          <div class="card span-2">
            <div class="card-header"><div><h3>Histórico de disponibilidade</h3>
              <p class="sub">Média diária de todas as verificações dos últimos 30 dias · média do período: ${formatPercent(avg, 2)}</p></div></div>
            <div class="card-body"><div id="avail-chart">${d.availability.some((x) => x.checks) ? '' : emptyState('Sem verificações ainda', 'Ative o monitoramento nos sistemas para gerar histórico.')}</div></div>
          </div>
          <div class="card">
            <div class="card-header"><div><h3>Distribuição por categoria</h3><p class="sub">Clique em uma barra para filtrar o catálogo</p></div></div>
            <div class="card-body"><div id="cat-chart">${d.categories.length ? '' : emptyState('Nenhum sistema cadastrado')}</div></div>
          </div>
        </div>

        <div class="grid cols-3 gap-lg">
          <div class="card">
            <div class="card-header"><h3><span style="color:var(--accent-500)">${ic('star', 'sm')}</span> Favoritos</h3></div>
            <div class="card-body tight">
              ${d.favorites.length ? d.favorites.map((f) => html`
                <div class="list-item" data-go="/systems/${f.id}">
                  ${sysIcon(f.icon, f.color, 'sm')}
                  <span class="grow truncate strong">${f.name}</span>
                  ${accessLink(f, { iconOnly: true })}
                </div>`) : emptyState('Sem favoritos', 'Marque sistemas com a estrela no catálogo para criar atalhos.', 'star')}
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h3><span class="muted">${ic('clock', 'sm')}</span> Acessados recentemente</h3></div>
            <div class="card-body tight">
              ${d.recent.length ? d.recent.map((r) => html`
                <div class="list-item" data-go="/systems/${r.id}">
                  ${sysIcon(r.icon, r.color, 'sm')}
                  <span class="grow"><span class="strong truncate" style="display:block">${r.name}</span><span class="xs muted">Acessado ${timeAgo(r.accessed_at)}</span></span>
                  ${statusBadge(r.status)}
                </div>`) : emptyState('Nenhum acesso recente', 'Use “Acessar sistema” para abrir uma ferramenta.')}
            </div>
          </div>
          <div class="card">
            <div class="card-header"><h3><span style="color:#f43f5e">${ic('alert-octagon', 'sm')}</span> Incidentes abertos</h3>
              ${can('monitoring:view') ? html`<a class="small" href="/monitoring">Monitoramento →</a>` : ''}</div>
            <div class="card-body tight">
              ${d.incidents.length ? d.incidents.map((i) => html`
                <a class="list-item" href="/systems/${i.system_id}" style="display:block">
                  <p class="strong">${i.title}</p>
                  <p class="xs muted">${i.system_name} · ${CRITICALITY[i.severity].label} · ${STATUS_SOURCE[i.source].label} · ${timeAgo(i.started_at)}</p>
                </a>`) : emptyState('Nenhum incidente aberto', 'Todos os sistemas monitorados estão respondendo.', 'check-circle')}
            </div>
          </div>
        </div>
      </div>`);

    if (d.availability.some((x) => x.checks)) availabilityChart(root.querySelector('#avail-chart'), d.availability, { height: 260 });
    if (d.categories.length) barChart(root.querySelector('#cat-chart'), d.categories, { onSelect: (c) => navigate(`/systems?category=${encodeURIComponent(c)}`) });
    root.querySelectorAll('[data-go]').forEach((el) => el.addEventListener('click', (e) => {
      if (!e.target.closest('a')) navigate(el.dataset.go);
    }));
    bindAccessLinks(root);
  };

  await load();
  const timer = setInterval(() => api.get('/dashboard').then(draw).catch(() => undefined), 60_000);
  return () => clearInterval(timer);
}

window.Pages = window.Pages || {};
window.Pages['dashboard'] = render;
})();

// ===================== page-catalog =====================
// Página: catalog
(function () {
const FILTERS = ['q', 'category', 'status', 'criticality', 'owner', 'team', 'favorites', 'pendingUpdate', 'origin', 'sort', 'dir', 'page'];

async function render(root, { query }) {
  const f = Object.fromEntries(FILTERS.map((k) => [k, query.get(k) ?? '']));
  f.sort ||= 'name';
  f.dir ||= 'asc';
  let view = localStorage.getItem('sh-catalog-view') || 'grid';
  let meta = { categories: [], owners: [], teams: [] };

  root.innerHTML = String(html`
    <div class="page-header">
      <div><h1>Catálogo de sistemas</h1><p class="sub" id="count">Carregando…</p></div>
      ${can('systems:create') ? html`<a class="btn accent" href="/systems/new">${ic('plus', 'sm')} Cadastrar sistema</a>` : ''}
    </div>
    <div class="card filters mb-4">
      <div class="row">
        <div class="input-icon grow">${ic('search', 'sm')}
          <input class="input" id="q" value="${f.q}" placeholder="Pesquisar por nome, descrição, tecnologia, responsável, equipe…" aria-label="Pesquisar sistemas" />
        </div>
        <select class="input" id="sort" style="width:auto" aria-label="Ordenar">
          ${options([
            ['name:asc', 'Nome (A–Z)'], ['name:desc', 'Nome (Z–A)'], ['status:asc', 'Status (problemas primeiro)'],
            ['criticality:asc', 'Criticidade (maior primeiro)'], ['updated:desc', 'Atualizados recentemente'], ['category:asc', 'Categoria'],
          ], `${f.sort}:${f.dir}`)}
        </select>
        <div class="segmented" role="group" aria-label="Visualização">
          <button data-view="grid" class="${view === 'grid' ? 'on' : ''}" aria-label="Grade">${ic('layout-grid', 'sm')}</button>
          <button data-view="table" class="${view === 'table' ? 'on' : ''}" aria-label="Tabela">${ic('list', 'sm')}</button>
        </div>
      </div>
      <div class="filters-grid" id="filters"></div>
      <div class="row wrap mt-3" id="chips"></div>
    </div>
    <div id="results">${skeleton(220, 2)}</div>
    <div id="pager"></div>`);

  const $ = (s) => root.querySelector(s);

  const drawFilters = () => {
    const sel = (k, label, list) => html`<select class="input" data-f="${k}" aria-label="${label}">${options(list, f[k], { empty: label })}</select>`;
    $('#filters').innerHTML = String(html`
      ${sel('category', 'Todas as categorias', meta.categories.map((c) => [c.name, `${c.name} (${c.count})`]))}
      ${sel('status', 'Todos os status', Object.entries(STATUS).map(([k, v]) => [k, v.label]))}
      ${sel('criticality', 'Toda criticidade', Object.entries(CRITICALITY).map(([k, v]) => [k, v.label]))}
      ${sel('owner', 'Todos os responsáveis', meta.owners.map((o) => [o.id, o.name]))}
      ${sel('team', 'Todas as equipes', meta.teams.map((o) => [o.id, o.name]))}
      ${sel('origin', 'Qualquer origem', Object.entries(DATA_ORIGIN).map(([k, v]) => [k, v.label]))}
      <div class="row">
        <button class="btn grow ${f.favorites ? 'accent' : ''}" data-flag="favorites" aria-pressed="${!!f.favorites}" title="Somente favoritos">${ic('star', 'sm')}</button>
        <button class="btn grow ${f.pendingUpdate ? 'accent' : ''}" data-flag="pendingUpdate" aria-pressed="${!!f.pendingUpdate}" title="Com atualização pendente">${ic('download', 'sm')}</button>
      </div>`);
    const labels = {
      category: (v) => `Categoria: ${v}`,
      status: (v) => `Status: ${STATUS[v]?.label ?? v}`,
      criticality: (v) => `Criticidade: ${CRITICALITY[v]?.label ?? v}`,
      owner: (v) => `Responsável: ${meta.owners.find((o) => String(o.id) === v)?.name ?? v}`,
      team: (v) => `Equipe: ${meta.teams.find((o) => String(o.id) === v)?.name ?? v}`,
      origin: (v) => `Origem: ${DATA_ORIGIN[v]?.label ?? v}`,
      favorites: () => 'Somente favoritos',
      pendingUpdate: () => 'Atualização pendente',
    };
    const active = Object.keys(labels).filter((k) => f[k]);
    $('#chips').innerHTML = active.length || f.q
      ? String(html`${active.map((k) => html`<button class="chip" data-clear="${k}">${labels[k](f[k])} ${ic('x', 'sm')}</button>`)}
          <button class="btn ghost sm" data-clear-all>Limpar filtros</button>`)
      : '';
  };

  const load = async () => {
    setQuery({ ...f, sort: f.sort === 'name' ? '' : f.sort, dir: f.dir === 'asc' ? '' : f.dir, page: f.page === '1' ? '' : f.page });
    drawFilters();
    const pageSize = view === 'grid' ? 24 : 50;
    $('#results').style.opacity = '0.6';
    try {
      const d = await api.get('/systems', { ...f, page: f.page || 1, pageSize });
      $('#count').textContent = `${d.total} sistema(s) encontrado(s)`;
      $('#results').style.opacity = '';
      if (!d.items.length) {
        $('#results').innerHTML = String(html`<div class="card">${emptyState('Nenhum sistema encontrado', 'Ajuste a busca ou os filtros para ver outros resultados.', 'search-x', html`<button class="btn sm" data-clear-all>Limpar filtros</button>`)}</div>`);
      } else {
        $('#results').innerHTML = String(view === 'grid' ? grid(d.items) : table(d.items));
      }
      const pages = Math.max(1, Math.ceil(d.total / pageSize));
      const page = d.page;
      $('#pager').innerHTML = d.total > pageSize
        ? String(html`<div class="pager"><p class="muted">Página ${page} de ${pages} · ${d.total} sistemas</p><div class="row">
            <button class="btn sm" data-page="${page - 1}" ${page <= 1 ? raw('disabled') : ''}>${ic('chevron-left', 'sm')} Anterior</button>
            <button class="btn sm" data-page="${page + 1}" ${page >= pages ? raw('disabled') : ''}>Próxima ${ic('chevron-right', 'sm')}</button></div></div>`)
        : '';
    } catch (err) {
      $('#results').style.opacity = '';
      $('#results').innerHTML = String(errorState(err));
    }
  };

  const grid = (items) => html`<div class="grid cols-4">${items.map((s) => html`
    <div class="card clickable sys-card" data-go="/systems/${s.id}">
      <div class="row top">
        ${sysIcon(s.icon, s.color)}
        <div class="grow"><h3 class="truncate" title="${s.name}" style="font-size:15px">${s.name}</h3><p class="xs muted truncate">${s.category} · v${s.version}</p></div>
        ${favButton(s)}
      </div>
      <p class="desc clamp-2">${s.description || html`<span class="muted">Sem descrição</span>`}</p>
      <div class="row wrap mt-3" style="gap:6px">
        ${statusBadge(s.status)} ${critBadge(s.criticality)}
        ${s.data_origin !== 'manual' ? originBadge(s.data_origin) : ''}
        ${s.pending_update ? html`<span class="badge tone-demo">${ic('download', 'sm')}Atualização</span>` : ''}
        ${s.restricted ? html`<span class="badge" title="Visível apenas para usuários autorizados">${ic('lock', 'sm')}Restrito</span>` : ''}
      </div>
      <dl class="meta">
        <dt>Responsável</dt><dd>${s.technical_owner_name ?? '—'}</dd>
        <dt>Equipe</dt><dd>${s.team_name ?? '—'}</dd>
        <dt>Última atualização</dt><dd>${formatDate(s.last_update_at)}</dd>
      </dl>
      <div class="actions">${accessLink(s, { sm: true, cls: 'grow' })}<a class="btn sm" href="/systems/${s.id}">Ver detalhes</a></div>
    </div>`)}</div>`;

  const sortTh = (k, label) => html`<th><button data-sort="${k}">${label} <span style="opacity:${f.sort === k ? 1 : 0.3}">${ic('arrow-up-down', 'sm')}</span></button></th>`;
  const table = (items) => html`<div class="card table-wrap"><table class="table">
    <thead><tr><th></th>${sortTh('name', 'Sistema')}${sortTh('category', 'Categoria')}${sortTh('status', 'Status')}${sortTh('criticality', 'Criticidade')}
      <th>Responsável / Equipe</th><th>Versão</th>${sortTh('updated', 'Atualizado')}<th class="right">Acesso</th></tr></thead>
    <tbody>${items.map((s) => html`
      <tr class="clickable" data-go="/systems/${s.id}">
        <td>${favButton(s)}</td>
        <td><div class="row">${sysIcon(s.icon, s.color, 'sm')}<div><p class="strong">${s.name}</p>${s.data_origin !== 'manual' ? originBadge(s.data_origin) : ''}</div></div></td>
        <td class="nowrap">${s.category}</td>
        <td>${statusBadge(s.status, s.status_source)}</td>
        <td>${critBadge(s.criticality)}</td>
        <td><p class="nowrap">${s.technical_owner_name ?? '—'}</p><p class="xs muted nowrap">${s.team_name ?? ''}</p></td>
        <td class="nowrap">v${s.version} ${s.pending_update ? html`<span title="Atualização pendente" style="color:var(--accent-600)">${ic('download', 'sm')}</span>` : ''}</td>
        <td class="nowrap">${formatDate(s.last_update_at)}</td>
        <td class="right">${accessLink(s, { iconOnly: true })}</td>
      </tr>`)}</tbody></table></div>`;

  // ---------- eventos ----------
  const q = $('#q');
  q.addEventListener('input', debounce(() => { f.q = q.value.trim(); f.page = ''; load(); }, 300));
  $('#sort').addEventListener('change', (e) => { [f.sort, f.dir] = e.target.value.split(':'); load(); });
  root.addEventListener('change', (e) => {
    const s = e.target.closest('[data-f]');
    if (s) { f[s.dataset.f] = s.value; f.page = ''; load(); }
  });
  root.addEventListener('click', (e) => {
    const t = e.target;
    const v = t.closest('[data-view]');
    if (v) {
      view = v.dataset.view;
      localStorage.setItem('sh-catalog-view', view);
      root.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('on', b === v));
      f.page = '';
      return load();
    }
    const flag = t.closest('[data-flag]');
    if (flag) { f[flag.dataset.flag] = f[flag.dataset.flag] ? '' : '1'; f.page = ''; return load(); }
    const clear = t.closest('[data-clear]');
    if (clear) { f[clear.dataset.clear] = ''; f.page = ''; return load(); }
    if (t.closest('[data-clear-all]')) {
      for (const k of FILTERS) f[k] = '';
      f.sort = 'name'; f.dir = 'asc'; q.value = '';
      $('#sort').value = 'name:asc';
      return load();
    }
    const sortBtn = t.closest('[data-sort]');
    if (sortBtn) {
      const k = sortBtn.dataset.sort;
      if (f.sort === k) f.dir = f.dir === 'asc' ? 'desc' : 'asc';
      else { f.sort = k; f.dir = k === 'updated' ? 'desc' : 'asc'; }
      return load();
    }
    const pg = t.closest('[data-page]');
    if (pg) { f.page = pg.dataset.page; return load(); }
    if (t.closest('[data-retry], [data-action=retry]')) return load();
    const go = t.closest('[data-go]');
    if (go && !t.closest('a, button')) navigate(go.dataset.go);
  });
  bindFavorites(root);
  bindAccessLinks(root);

  meta = await cached('systems-meta', () => api.get('/systems/meta')).catch(() => meta);
  await load();
}

window.Pages = window.Pages || {};
window.Pages['catalog'] = render;
})();

// ===================== page-system-detail =====================
// Página: system-detail
(function () {
const chips = (items, empty) => (items?.length ? html`<div class="row wrap" style="gap:6px">${items.map((t) => html`<span class="tag">${t}</span>`)}</div>` : html`<p class="muted">${empty}</p>`);
const info = (label, value) => html`<div class="info"><dt>${label}</dt><dd>${value}</dd></div>`;

async function render(root, { params }) {
  const id = Number(params[0]);
  let s;
  let tab = 'overview';

  const load = async () => {
    root.innerHTML = String(skeleton(120, 3));
    try {
      s = await api.get(`/systems/${id}`);
      draw();
    } catch (err) {
      root.innerHTML = String(html`<a class="back-link" href="/systems">${ic('arrow-left', 'sm')} Catálogo</a>${errorState(err)}`);
      root.querySelector('[data-action=retry]')?.addEventListener('click', load);
    }
  };

  const draw = () => {
    const problems = s.tickets.filter((t) => ['bug', 'incident', 'update_issue'].includes(t.type));
    const improvements = s.tickets.filter((t) => ['improvement', 'feature'].includes(t.type));
    const openInc = s.incidents.filter((i) => i.status === 'open').length;
    root.innerHTML = String(html`
      <a class="back-link" href="/systems">${ic('arrow-left', 'sm')} Catálogo</a>
      <div class="card hero mb-6">
        ${sysIcon(s.icon, s.color, 'lg')}
        <div class="grow" style="min-width:260px">
          <div class="row wrap"><h1>${s.name}</h1>${favButton(s)}
            ${s.restricted ? html`<span class="badge" title="Visível apenas para usuários autorizados">${ic('lock', 'sm')}Restrito</span>` : ''}</div>
          <p class="mt-1" style="max-width:760px">${s.description}</p>
          <div class="row wrap mt-3" style="gap:6px">
            ${statusBadge(s.status, s.status_source)} ${critBadge(s.criticality)} ${originBadge(s.data_origin)}
            ${badge(s.category)} ${badge(`v${s.version}`)}
            ${s.pending_update ? badge('Atualização pendente', 'demo') : ''}
          </div>
          ${s.status_note ? html`<p class="xs muted mt-2">Observação do status (${STATUS_SOURCE[s.status_source].label.toLowerCase()}, ${timeAgo(s.status_updated_at)}): ${s.status_note}</p>` : ''}
        </div>
        <div class="row wrap">
          ${accessLink(s)}
          ${can('systems:update') ? html`<a class="btn" href="/systems/${s.id}/edit">${ic('pencil', 'sm')} Editar</a>` : ''}
          ${can('systems:status') ? html`<button class="btn" data-action="status">${ic('activity', 'sm')} Status manual</button>` : ''}
          ${can('systems:delete') ? html`<button class="btn ghost icon" data-action="delete" title="Excluir sistema" aria-label="Excluir sistema" style="color:#e11d48">${ic('trash', 'sm')}</button>` : ''}
        </div>
      </div>
      ${tabs([
        { id: 'overview', label: 'Visão geral' },
        { id: 'technical', label: 'Técnico & documentação' },
        { id: 'versions', label: 'Versões', count: s.versions.length },
        { id: 'availability', label: 'Disponibilidade' },
        { id: 'incidents', label: 'Problemas & incidentes', count: openInc + problems.filter((p) => p.status !== 'done').length },
        { id: 'improvements', label: 'Melhorias', count: improvements.filter((p) => p.status !== 'done').length },
        { id: 'history', label: 'Histórico de alterações' },
      ], tab)}
      <div class="mt-6" id="tab-body">${body(problems, improvements)}</div>`);
    if (tab === 'availability') loadChart();
  };

  const ticketList = (title, items, type) => html`
    <div class="card">
      <div class="card-header"><h3>${title}</h3>
        ${can('tickets:create') ? html`<a class="btn sm" href="/tickets?new=1&system=${s.id}&type=${type}">${ic('plus', 'sm')} Novo chamado</a>` : ''}</div>
      ${items.length ? html`<div class="divide">${items.map((t) => html`
        <a class="list-item" style="border-radius:0;padding:12px 20px" href="/tickets?open=${t.id}">
          <span class="grow"><span class="strong truncate" style="display:block;${t.status === 'done' ? 'text-decoration:line-through;opacity:.6' : ''}">#${t.id} ${t.title}</span>
          <span class="xs muted">${TICKET_TYPE[t.type].label} · ${TICKET_STATUS[t.status].label} · ${t.assignee_name ?? 'Sem responsável'}${t.due_date ? ` · prazo ${formatDate(t.due_date)}` : ''}</span></span>
          ${prioBadge(t.priority)}
        </a>`)}</div>` : emptyState('Nenhum chamado')}
    </div>`;

  const body = (problems, improvements) => {
    switch (tab) {
      case 'overview':
        return html`<div class="grid cols-3 collapse-lg gap-lg">
          <div class="card span-2"><div class="card-header"><h3>Informações gerais</h3></div>
            <dl class="card-body info-grid" style="margin:0">
              ${info('Link de acesso', html`<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.url} ${ic('external-link', 'sm')}</a>`)}
              ${info('Categoria', s.category)}
              ${info('Versão atual', `v${s.version}`)}
              ${info('Última atualização', html`${formatDate(s.last_update_at)} <span class="xs muted">(${timeAgo(s.last_update_at)})</span>`)}
              ${info('Criticidade', CRITICALITY[s.criticality].label)}
              ${info('Equipe responsável', s.team_name ?? '—')}
              ${info('Status operacional', html`${STATUS[s.status].label} <span class="xs muted">· ${STATUS_SOURCE[s.status_source].label} · ${timeAgo(s.status_updated_at)}</span>`)}
              ${info('Origem dos dados', html`${DATA_ORIGIN[s.data_origin].label} <span class="xs muted">· ${DATA_ORIGIN[s.data_origin].hint}</span>`)}
              ${info('Monitoramento', s.monitoring_enabled ? (s.data_origin === 'demo' ? 'Simulado (demonstração)' : 'Automático (healthcheck)') : 'Manual')}
            </dl></div>
          <div class="stack" style="gap:24px">
            <div class="card"><div class="card-header"><div><h3>Disponibilidade</h3><p class="sub">${s.uptime.checks_30d} verificações em 30 dias</p></div></div>
              <div class="kpis">${[['24h', s.uptime.uptime_24h], ['7 dias', s.uptime.uptime_7d], ['30 dias', s.uptime.uptime_30d]].map(([l, v]) => html`<div><p class="v">${formatPercent(v, 2)}</p><p class="xs muted">${l}</p></div>`)}</div>
              <div class="xs" style="padding:12px 20px;border-top:1px solid var(--border)"><span class="muted">Latência média (24h):</span> <strong>${s.uptime.avg_latency_24h != null ? `${Math.round(s.uptime.avg_latency_24h)} ms` : '—'}</strong>
                <span class="muted"> · Última verificação:</span> <strong>${timeAgo(s.last_check_at)}</strong></div></div>
            <div class="card"><div class="card-header"><h3>Responsáveis e contatos</h3></div>
              ${s.contacts.length ? html`<div class="divide">${s.contacts.map((c) => html`
                <div class="row top" style="padding:12px 20px">${avatar(c.name)}
                  <div class="grow"><p class="strong">${c.name} <span class="xs muted" style="font-weight:400">· ${c.role}</span></p>
                    <p class="xs muted">${[c.title, c.team_name].filter(Boolean).join(' · ')}</p>
                    <div class="row wrap xs mt-1" style="gap:12px">
                      ${c.email ? html`<a href="mailto:${c.email}" class="row" style="gap:4px">${ic('mail', 'sm')}${c.email}</a>` : ''}
                      ${c.phone ? html`<span class="row muted" style="gap:4px">${ic('phone', 'sm')}${c.phone}</span>` : ''}
                    </div></div></div>`)}</div>` : emptyState('Sem contatos', 'Edite o sistema para vincular responsáveis.', 'users')}
              ${can('users:manage') && s.restricted ? html`<div style="padding:12px 20px;border-top:1px solid var(--border)"><button class="btn ghost sm" data-action="access">${ic('lock', 'sm')} Gerenciar usuários com acesso (${s.access.length})</button></div>` : ''}
            </div>
          </div></div>`;
      case 'technical':
        return html`<div class="grid cols-3 collapse-lg gap-lg">
          <div class="stack" style="gap:24px">
            <div class="card"><div class="card-header"><h3>Tecnologias utilizadas</h3></div><div class="card-body">${chips(s.technologies, 'Não informado')}</div></div>
            <div class="card"><div class="card-header"><h3>Fontes de dados</h3></div><div class="card-body">${chips(s.data_sources, 'Não informado')}</div></div>
            <div class="card"><div class="card-header"><h3>Integrações</h3></div><div class="card-body">${chips(s.integrations, 'Nenhuma integração registrada')}</div></div>
            ${'healthcheck_url' in s ? html`<div class="card"><div class="card-header"><h3>Integração de monitoramento</h3></div><div class="card-body stack sm small">
              <p><span class="muted">Healthcheck:</span> ${s.healthcheck_url ? html`<code>${s.healthcheck_url}</code>` : 'não configurado'}</p>
              <p><span class="muted">Monitoramento:</span> ${s.monitoring_enabled ? 'ativo' : 'inativo'}</p></div></div>` : ''}
          </div>
          <div class="card span-2"><div class="card-header"><h3>${ic('book-open', 'sm')} Documentação técnica</h3>
            ${s.documentation_url ? html`<a class="small" href="${s.documentation_url}" target="_blank" rel="noopener noreferrer">Documentação completa ${ic('external-link', 'sm')}</a>` : ''}</div>
            <div class="card-body">${s.documentation ? markdown(s.documentation) : emptyState('Sem documentação', 'Adicione notas técnicas na edição do sistema.', 'book-open')}</div></div>
        </div>`;
      case 'versions':
        return html`<div class="card"><div class="card-header"><h3>Histórico de versões</h3>
          ${can('systems:versions') ? html`<button class="btn primary sm" data-action="version">${ic('plus', 'sm')} Registrar versão</button>` : ''}</div>
          ${s.versions.length ? html`<ol class="timeline">${s.versions.map((v, i) => html`
            <li class="${i === 0 ? 'current' : ''}"><span class="node"></span>
              <p class="strong">v${v.version}${i === 0 ? html`<span class="current-pill">atual</span>` : ''}</p>
              <p class="xs muted">${formatDateTime(v.released_at)}${v.created_by_name ? ` · por ${v.created_by_name}` : ''}</p>
              ${v.notes ? html`<p class="mt-1">${v.notes}</p>` : ''}</li>`)}</ol>` : emptyState('Nenhuma versão registrada')}</div>`;
      case 'availability':
        return html`<div class="stack" style="gap:24px">
          <div class="card"><div class="card-header"><div><h3>Disponibilidade diária — 30 dias</h3>
            <p class="sub">Origem das verificações: ${s.data_origin === 'demo' ? 'simuladas (dados fictícios)' : s.monitoring_enabled ? 'automáticas (healthcheck real)' : 'sem integração técnica'}</p></div>
            ${can('monitoring:run') && s.monitoring_enabled ? html`<button class="btn sm" data-action="check">${ic('refresh-cw', 'sm')} Verificar agora</button>` : ''}</div>
            <div class="card-body"><div id="chart">${skeleton(260, 1)}</div></div></div>
          <div class="card"><div class="card-header"><h3>Últimas verificações</h3></div>
            ${s.checks.length ? html`<div class="table-wrap"><table class="table"><thead><tr><th>Data</th><th>Resultado</th><th>HTTP</th><th>Latência</th><th>Origem</th><th>Erro</th></tr></thead><tbody>
              ${s.checks.map((c) => html`<tr><td class="nowrap">${formatDateTime(c.checked_at)}</td>
                <td>${c.ok ? html`<span class="row text-ok" style="gap:4px">${ic('check', 'sm')}OK</span>` : html`<span class="row text-bad" style="gap:4px">${ic('x', 'sm')}Falha</span>`}</td>
                <td>${c.status_code ?? '—'}</td><td>${c.latency_ms != null ? `${c.latency_ms} ms` : '—'}</td><td>${STATUS_SOURCE[c.source].label}</td>
                <td class="xs muted">${c.error ?? ''}</td></tr>`)}</tbody></table></div>` : emptyState('Nenhuma verificação registrada')}</div></div>`;
      case 'incidents':
        return html`<div class="grid cols-2 gap-lg">
          <div class="card"><div class="card-header"><h3>Registro de incidentes</h3>
            ${can('incidents:manage') ? html`<button class="btn sm" data-action="incident">${ic('siren', 'sm')} Registrar incidente</button>` : ''}</div>
            ${s.incidents.length ? html`<div class="divide">${s.incidents.map((i) => html`
              <div class="row top" style="padding:12px 20px">
                <span class="status-dot ${i.status === 'open' ? 'c-down pulse' : 'c-operational'}" style="margin-top:7px"></span>
                <div class="grow"><p class="strong">${i.title}</p>
                  <p class="xs muted">${i.status === 'open' ? 'Aberto' : 'Resolvido'} · ${CRITICALITY[i.severity].label} · Origem: ${STATUS_SOURCE[i.source].label} · ${formatDateTime(i.started_at)}${i.resolved_at ? ` → ${formatDateTime(i.resolved_at)}` : ''}</p>
                  ${i.description ? html`<p class="small mt-1">${i.description}</p>` : ''}</div>
                ${i.status === 'open' && can('incidents:manage') ? html`<button class="btn sm" data-resolve="${i.id}">Resolver</button>` : ''}
              </div>`)}</div>` : emptyState('Nenhum incidente registrado')}</div>
          ${ticketList('Problemas registrados (chamados)', problems, 'bug')}
        </div>`;
      case 'improvements':
        return ticketList('Solicitações de melhorias e novas funcionalidades', improvements, 'improvement');
      case 'history':
        return html`<div class="card"><div class="card-header"><div><h3>Histórico de alterações</h3><p class="sub">Registros de auditoria deste sistema</p></div></div>
          ${s.history.length ? html`<div class="divide">${s.history.map((h) => {
            const changes = h.details && typeof h.details === 'object' ? Object.entries(h.details).filter(([, v]) => v && typeof v === 'object' && 'from' in v) : [];
            return html`<div style="padding:12px 20px"><p>${h.summary}</p><p class="xs muted">${h.user_name ?? 'Sistema'} · ${formatDateTime(h.created_at)}</p>
              ${changes.length ? html`<ul class="xs muted" style="margin:4px 0 0;padding-left:16px">${changes.map(([k, v]) => html`<li><code>${k}</code>: ${JSON.stringify(v.from)} → ${JSON.stringify(v.to)}</li>`)}</ul>` : ''}</div>`;
          })}</div>` : emptyState('Sem alterações registradas')}</div>`;
    }
    return '';
  };

  const loadChart = async () => {
    const el = root.querySelector('#chart');
    if (!el) return;
    try {
      const data = await api.get(`/systems/${id}/availability`, { days: 30 });
      if (data.some((d) => d.checks)) {
        el.innerHTML = '';
        availabilityChart(el, data, { height: 280 });
      } else {
        el.innerHTML = String(emptyState('Sem histórico de verificações', s.monitoring_enabled
          ? 'Aguardando a primeira verificação.'
          : 'Configure uma URL de healthcheck e ative o monitoramento para medir a disponibilidade automaticamente. Sem integração, o status é mantido manualmente.'));
      }
    } catch (err) {
      el.innerHTML = String(errorState(err));
    }
  };

  const refresh = async () => {
    invalidate('systems-meta');
    s = await api.get(`/systems/${id}`);
    draw();
  };

  // ---------- modais ----------
  const statusModal = () => {
    let chosen = s.status;
    openModal({
      title: 'Atualizar status manualmente',
      description: 'A origem ficará registrada como “Manual”. Use quando não houver integração técnica ou para declarar manutenção.',
      body: html`<div class="stack">
        <div class="grid cols-2" style="gap:8px">${['operational', 'degraded', 'maintenance', 'down'].map((k) => html`
          <button type="button" class="choice ${k === chosen ? 'on' : ''}" data-st="${k}"><span class="status-dot c-${k}"></span>${STATUS[k].label}</button>`)}</div>
        ${field('Observação', html`<textarea class="input" name="note" maxlength="500"></textarea>`, { hint: 'Ex.: janela de manutenção até 18h, falha no fornecedor…' })}
        <p class="xs muted">Indisponível abre um incidente manual; Operacional resolve incidentes abertos. Manutenção manual não é sobrescrita pelo monitoramento automático.</p></div>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Salvar status</button>`,
      onMount: (el, close) => {
        el.addEventListener('click', (e) => {
          const b = e.target.closest('[data-st]');
          if (b) { chosen = b.dataset.st; el.querySelectorAll('[data-st]').forEach((x) => x.classList.toggle('on', x === b)); }
        });
        el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
          try {
            await api.post(`/systems/${id}/status`, { status: chosen, note: el.querySelector('[name=note]').value });
            toast('Status atualizado manualmente');
            close();
            await refresh();
          } catch (err) { toast(err.message, 'error'); }
        }));
      },
    });
  };

  const versionModal = () => openModal({
    title: 'Registrar nova versão',
    description: `Versão atual: v${s.version}. A nova versão passa a ser a atual e a atualização pendente é baixada.`,
    body: html`<div class="stack">${field('Versão', html`<input class="input" name="version" placeholder="ex.: 4.13.0" autofocus />`)}
      ${field('Notas da versão', html`<textarea class="input" name="notes" placeholder="Principais mudanças, correções…"></textarea>`)}</div>`,
    footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Registrar</button>`,
    onMount: (el, close) => el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
      try {
        await api.post(`/systems/${id}/versions`, { version: el.querySelector('[name=version]').value, notes: el.querySelector('[name=notes]').value });
        toast('Versão registrada');
        close();
        await refresh();
      } catch (err) { toast(err.message, 'error'); }
    })),
  });

  const incidentModal = () => openModal({
    title: 'Registrar incidente',
    description: 'Origem: manual. Administradores, gestores e desenvolvedores serão notificados.',
    body: html`<div class="stack">${field('Título', html`<input class="input" name="title" autofocus />`)}
      ${field('Severidade', html`<select class="input" name="severity">${options(Object.entries(CRITICALITY).map(([k, v]) => [k, v.label]), s.criticality)}</select>`)}
      ${field('Descrição', html`<textarea class="input" name="description"></textarea>`)}</div>`,
    footer: html`<button class="btn" data-close>Cancelar</button><button class="btn danger" data-save>Registrar</button>`,
    onMount: (el, close) => el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
      try {
        const v = (n) => el.querySelector(`[name=${n}]`).value;
        await api.post('/monitoring/incidents', { system_id: id, title: v('title'), severity: v('severity'), description: v('description') });
        toast('Incidente registrado e equipe notificada');
        close();
        await refresh();
      } catch (err) { toast(err.message, 'error'); }
    })),
  });

  const accessModal = async () => {
    const users = (await api.get('/users')).filter((u) => u.role === 'user');
    const current = new Set(s.access.map((a) => a.id));
    openModal({
      title: 'Usuários com acesso',
      description: 'Sistemas restritos ficam visíveis ao perfil “Usuário” apenas quando autorizados aqui. Os demais perfis veem todos.',
      body: users.length ? html`${users.map((u) => html`<label class="check"><input type="checkbox" value="${u.id}" ${current.has(u.id) ? raw('checked') : ''} /><span>${u.name} <span class="xs muted">· ${u.email}</span></span></label>`)}`
        : emptyState('Nenhum usuário com perfil “Usuário”'),
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Salvar</button>`,
      onMount: (el, close) => el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
        try {
          const userIds = [...el.querySelectorAll('input:checked')].map((i) => Number(i.value));
          await api.put(`/systems/${id}/access-list`, { userIds });
          toast('Acessos atualizados');
          close();
          await refresh();
        } catch (err) { toast(err.message, 'error'); }
      })),
    });
  };

  // ---------- eventos ----------
  root.addEventListener('click', async (e) => {
    const t = e.target;
    const tb = t.closest('[data-tab]');
    if (tb) { tab = tb.dataset.tab; return draw(); }
    const res = t.closest('[data-resolve]');
    if (res) {
      return busy(res, async () => {
        try { await api.patch(`/monitoring/incidents/${res.dataset.resolve}/resolve`); toast('Incidente resolvido'); await refresh(); } catch (err) { toast(err.message, 'error'); }
      });
    }
    const a = t.closest('[data-action]');
    if (!a) return;
    switch (a.dataset.action) {
      case 'status': return statusModal();
      case 'version': return versionModal();
      case 'incident': return incidentModal();
      case 'access': return accessModal();
      case 'retry': return load();
      case 'check':
        return busy(a, async () => {
          try {
            const r = await api.post(`/systems/${id}/check`);
            toast(r.ok ? `Verificação OK (${r.latencyMs} ms)${r.source === 'simulated' ? ' — simulada' : ''}` : `Falha: ${r.error}`, r.ok ? 'success' : 'error');
            await refresh();
          } catch (err) { toast(err.message, 'error'); }
        });
      case 'delete': {
        const ok = await confirmDialog({
          title: 'Excluir sistema', danger: true, confirmLabel: 'Excluir definitivamente',
          message: html`O sistema <strong>${s.name}</strong> e seu histórico de versões, verificações e incidentes serão removidos. Chamados vinculados são mantidos sem sistema. A exclusão fica registrada na auditoria.`,
        });
        if (!ok) return;
        try {
          await api.del(`/systems/${id}`);
          invalidate('systems-meta');
          toast('Sistema excluído');
          navigate('/systems');
        } catch (err) { toast(err.message, 'error'); }
      }
    }
  });
  bindFavorites(root);
  bindAccessLinks(root);
  await load();
}

window.Pages = window.Pages || {};
window.Pages['system-detail'] = render;
})();

// ===================== page-system-form =====================
// Página: system-form
(function () {
const EMPTY = {
  name: '', icon: 'box', color: '#244487', description: '', category: '', url: 'https://', technical_owner_id: null, team_id: null,
  version: '1.0.0', criticality: 'medium', technologies: [], data_sources: [], integrations: [], documentation_url: '', documentation: '',
  healthcheck_url: '', monitoring_enabled: false, pending_update: false, restricted: false, data_origin: 'manual', contacts: [],
};

/** Campo de tags: Enter ou vírgula adiciona; Backspace remove a última. */
function tagInput(name, values, placeholder) {
  return html`<div class="input tag-input" data-tags="${name}">${values.map((v) => html`<span class="tag">${v}<button type="button" data-remove-tag="${v}" aria-label="Remover ${v}">${ic('x', 'sm')}</button></span>`)}
    <input placeholder="${values.length ? '' : placeholder}" aria-label="${placeholder}" /></div>`;
}

async function render(root, { params }) {
  const id = params[0] ? Number(params[0]) : null;
  const isAdmin = state.user.role === 'admin';
  root.innerHTML = String(skeleton(200, 3));

  let f = structuredClone(EMPTY);
  let people = [];
  let teams = [];
  let categories = [];
  try {
    const [existing, p, t, meta] = await Promise.all([
      id ? api.get(`/systems/${id}`) : null,
      api.get('/people'),
      api.get('/teams'),
      api.get('/systems/meta'),
    ]);
    people = p;
    teams = t;
    categories = [...new Set([...meta.categories.map((c) => c.name), ...DEFAULT_CATEGORIES])].sort();
    if (existing) {
      for (const k of Object.keys(EMPTY)) if (existing[k] !== undefined && existing[k] !== null) f[k] = existing[k];
      f.contacts = existing.contacts.map((c) => ({ person_id: c.id, role: c.role }));
      f._name = existing.name;
    }
  } catch (err) {
    root.innerHTML = String(errorState(err));
    return;
  }

  const lockGov = id && !isAdmin;
  const contactsHtml = () => html`${f.contacts.map((c, i) => html`
    <div class="row" data-contact="${i}">
      <select class="input grow" data-c="person_id">${options(people.map((p) => [p.id, p.name]), c.person_id)}</select>
      <input class="input" style="width:180px" data-c="role" value="${c.role}" placeholder="Papel" />
      <button type="button" class="btn ghost icon" data-remove-contact="${i}" aria-label="Remover contato" style="color:#e11d48">${ic('trash', 'sm')}</button>
    </div>`)}`;

  root.innerHTML = String(html`
    <a class="back-link" href="${id ? `/systems/${id}` : '/systems'}">${ic('arrow-left', 'sm')} Voltar</a>
    <form novalidate>
      <div class="page-header">
        <div class="row" style="gap:12px"><span id="preview-icon">${sysIcon(f.icon, f.color, 'lg')}</span>
          <div><h1>${id ? `Editar ${f._name}` : 'Cadastrar sistema'}</h1><p class="sub">Campos com * são obrigatórios. Todas as alterações são registradas na auditoria.</p></div></div>
        <div class="row"><a class="btn" href="${id ? `/systems/${id}` : '/systems'}">Cancelar</a>
          <button class="btn primary" type="submit">${ic('save', 'sm')} ${id ? 'Salvar alterações' : 'Cadastrar'}</button></div>
      </div>
      <div class="grid cols-3 collapse-lg gap-lg">
        <div class="stack span-2" style="gap:24px">
          <div class="card"><div class="card-header"><h3>Identificação</h3></div>
            <div class="card-body grid cols-2">
              ${field('Nome do sistema *', html`<input class="input" name="name" value="${f.name}" maxlength="120" ${id ? '' : 'autofocus'} />`, { cls: 'span-all' })}
              ${field('Descrição da finalidade', html`<textarea class="input" name="description" maxlength="2000">${f.description}</textarea>`, { cls: 'span-all' })}
              ${field('Categoria *', html`<input class="input" name="category" list="cat-list" value="${f.category}" /><datalist id="cat-list">${categories.map((c) => html`<option value="${c}"></option>`)}</datalist>`)}
              ${field('Link de acesso *', html`<input class="input" type="url" name="url" value="${f.url}" />`)}
              ${field('Versão atual', html`<input class="input" name="version" value="${f.version}" maxlength="40" />`, { hint: id ? 'Alterar a versão registra uma entrada no histórico' : '' })}
              ${field('Nível de criticidade', html`<select class="input" name="criticality" ${lockGov ? 'disabled' : ''}>${options(Object.entries(CRITICALITY).map(([k, v]) => [k, v.label]), f.criticality)}</select>`, { hint: lockGov ? 'Somente administradores alteram' : '' })}
            </div></div>
          <div class="card"><div class="card-header"><h3>Informações técnicas</h3></div>
            <div class="card-body grid cols-2">
              ${field('Tecnologias utilizadas', tagInput('technologies', f.technologies, 'React, Java, PostgreSQL…'), { hint: 'Enter ou vírgula para adicionar', cls: 'span-all' })}
              ${field('Fontes de dados', tagInput('data_sources', f.data_sources, 'ERP, planilhas, APIs…'))}
              ${field('Integrações', tagInput('integrations', f.integrations, 'Sistemas integrados…'))}
              ${field('URL da documentação', html`<input class="input" type="url" name="documentation_url" value="${f.documentation_url}" placeholder="https://" />`, { cls: 'span-all' })}
              ${field('Documentação técnica (Markdown simples)', html`<textarea class="input mono" name="documentation" style="min-height:160px" placeholder="## Visão geral">${f.documentation}</textarea>`, { cls: 'span-all' })}
            </div></div>
          <div class="card"><div class="card-header"><h3>Responsáveis e contatos</h3></div>
            <div class="card-body stack">
              <div class="grid cols-2">
                ${field('Responsável técnico', html`<select class="input" name="technical_owner_id">${options(people.map((p) => [p.id, `${p.name}${p.title ? ` (${p.title})` : ''}`]), f.technical_owner_id, { empty: '— Selecione —' })}</select>`)}
                ${field('Equipe responsável', html`<select class="input" name="team_id">${options(teams.map((t) => [t.id, t.name]), f.team_id, { empty: '— Selecione —' })}</select>`)}
              </div>
              <div><span class="field"><span class="label">Contatos adicionais</span></span>
                <div class="stack sm" id="contacts">${contactsHtml()}</div>
                <button type="button" class="btn sm mt-2" data-add-contact ${people.length ? '' : 'disabled'}>${ic('plus', 'sm')} Adicionar contato</button>
                ${people.length ? '' : html`<p class="xs muted mt-1">Cadastre pessoas em <a href="/people">Responsáveis</a>.</p>`}
              </div>
            </div></div>
        </div>
        <div class="stack" style="gap:24px">
          <div class="card"><div class="card-header"><h3>Aparência</h3></div>
            <div class="card-body stack">
              <div><span class="field"><span class="label">Ícone</span></span>
                <div class="icon-picker">${SYSTEM_ICON_NAMES.map((n) => html`<button type="button" data-icon="${n}" class="${n === f.icon ? 'on' : ''}" title="${n}">${ic(n, 'sm')}</button>`)}</div></div>
              <div><span class="field"><span class="label">Cor</span></span>
                <div class="swatches">${COLORS.map((c) => html`<button type="button" data-color="${c}" class="${c === f.color ? 'on' : ''}" style="background:${c}" aria-label="Cor ${c}"></button>`)}
                  <input type="color" value="${f.color}" data-color-custom aria-label="Cor personalizada" /></div></div>
            </div></div>
          <div class="card"><div class="card-header"><div><h3>Monitoramento</h3><p class="sub">Status calculado por verificações reais quando houver integração</p></div></div>
            <div class="card-body stack">
              ${field('URL de verificação (healthcheck)', html`<input class="input" type="url" name="healthcheck_url" value="${f.healthcheck_url}" placeholder="https://sistema/health" />`,
                { hint: 'Endpoint HTTP(S) que responde 2xx/3xx quando saudável. Verificado pelo servidor, não pelo navegador.' })}
              ${toggle('monitoring_enabled', f.monitoring_enabled, 'Monitoramento automático', 'Sem integração, o status é atualizado manualmente e identificado como “Manual”.')}
              ${toggle('pending_update', f.pending_update, 'Atualização pendente', 'Há uma versão aguardando implantação.')}
            </div></div>
          <div class="card"><div class="card-header"><div><h3>Governança</h3>${lockGov ? html`<p class="sub">Somente administradores alteram estes campos</p>` : ''}</div></div>
            <div class="card-body stack" style="${lockGov ? 'pointer-events:none;opacity:.6' : ''}">
              ${toggle('restricted', f.restricted, 'Acesso restrito', 'Perfil “Usuário” só vê este sistema se autorizado.')}
              ${field('Origem dos dados', html`<select class="input" name="data_origin">${options(Object.entries(DATA_ORIGIN).map(([k, v]) => [k, `${v.label} — ${v.hint}`]), f.data_origin)}</select>`)}
            </div></div>
        </div>
      </div>
    </form>`);

  const form = root.querySelector('form');
  const preview = () => (root.querySelector('#preview-icon').innerHTML = String(sysIcon(f.icon, f.color, 'lg')));
  bindToggles(form, f);

  const readContacts = () => {
    f.contacts = [...root.querySelectorAll('[data-contact]')].map((row) => ({
      person_id: Number(row.querySelector('[data-c=person_id]').value),
      role: row.querySelector('[data-c=role]').value.trim() || 'Contato',
    }));
  };
  const redrawContacts = () => (root.querySelector('#contacts').innerHTML = String(contactsHtml()));

  // tags
  const redrawTags = (box) => {
    const name = box.dataset.tags;
    box.outerHTML = String(tagInput(name, f[name], box.querySelector('input').getAttribute('aria-label')));
    root.querySelector(`[data-tags="${name}"] input`).focus();
  };
  const addTags = (box) => {
    const input = box.querySelector('input');
    const parts = input.value.split(',').map((x) => x.trim()).filter(Boolean);
    if (!parts.length) return false;
    const name = box.dataset.tags;
    f[name] = [...new Set([...f[name], ...parts])];
    redrawTags(box);
    return true;
  };
  form.addEventListener('keydown', (e) => {
    const box = e.target.closest('[data-tags]');
    if (!box) return;
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTags(box); }
    if (e.key === 'Backspace' && !e.target.value && f[box.dataset.tags].length) {
      f[box.dataset.tags].pop();
      redrawTags(box);
    }
  });
  form.addEventListener('focusout', (e) => {
    const box = e.target.closest?.('[data-tags]');
    if (box && e.target.value.trim()) {
      const name = box.dataset.tags;
      f[name] = [...new Set([...f[name], ...e.target.value.split(',').map((x) => x.trim()).filter(Boolean)])];
      const label = e.target.getAttribute('aria-label');
      setTimeout(() => { const b = root.querySelector(`[data-tags="${name}"]`); if (b) b.outerHTML = String(tagInput(name, f[name], label)); });
    }
  });

  form.addEventListener('click', (e) => {
    const t = e.target;
    const tagBox = t.closest('[data-tags]');
    const rm = t.closest('[data-remove-tag]');
    if (rm) {
      const name = tagBox.dataset.tags;
      f[name] = f[name].filter((x) => x !== rm.dataset.removeTag);
      return redrawTags(tagBox);
    }
    if (tagBox && t === tagBox) return tagBox.querySelector('input').focus();
    const icn = t.closest('[data-icon]');
    if (icn) {
      f.icon = icn.dataset.icon;
      root.querySelectorAll('[data-icon]').forEach((b) => b.classList.toggle('on', b === icn));
      return preview();
    }
    const col = t.closest('[data-color]');
    if (col) {
      f.color = col.dataset.color;
      root.querySelectorAll('[data-color]').forEach((b) => b.classList.toggle('on', b === col));
      root.querySelector('[data-color-custom]').value = f.color;
      return preview();
    }
    if (t.closest('[data-add-contact]')) {
      readContacts();
      f.contacts.push({ person_id: people[0].id, role: 'Contato' });
      return redrawContacts();
    }
    const rc = t.closest('[data-remove-contact]');
    if (rc) {
      readContacts();
      f.contacts.splice(Number(rc.dataset.removeContact), 1);
      redrawContacts();
    }
  });
  root.querySelector('[data-color-custom]').addEventListener('input', (e) => {
    f.color = e.target.value;
    root.querySelectorAll('[data-color]').forEach((b) => b.classList.remove('on'));
    preview();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    readContacts();
    const val = (n) => form.querySelector(`[name=${n}]`).value;
    const body = {
      ...f,
      name: val('name').trim(),
      description: val('description'),
      category: val('category').trim(),
      url: val('url').trim(),
      version: val('version').trim(),
      criticality: val('criticality'),
      documentation_url: val('documentation_url').trim(),
      documentation: val('documentation'),
      technical_owner_id: val('technical_owner_id') || null,
      team_id: val('team_id') || null,
      healthcheck_url: val('healthcheck_url').trim(),
      data_origin: val('data_origin'),
    };
    delete body._name;
    if (lockGov) { delete body.restricted; delete body.data_origin; delete body.criticality; }

    // validação no cliente (o servidor valida novamente)
    const errors = {};
    if (body.name.length < 2) errors.name = 'Informe o nome';
    if (body.category.length < 2) errors.category = 'Informe a categoria';
    if (!/^https?:\/\/\S+$/.test(body.url)) errors.url = 'Informe uma URL http(s) válida';
    if (body.monitoring_enabled && !body.healthcheck_url && body.data_origin !== 'demo') errors.healthcheck_url = 'Obrigatório para monitoramento automático';
    form.querySelectorAll('.field .error').forEach((x) => x.remove());
    form.querySelectorAll('.invalid').forEach((x) => x.classList.remove('invalid'));
    for (const [k, msg] of Object.entries(errors)) {
      const input = form.querySelector(`[name=${k}]`);
      input.classList.add('invalid');
      input.closest('.field').insertAdjacentHTML('beforeend', `<span class="error">${msg}</span>`);
    }
    if (Object.keys(errors).length) {
      form.querySelector('.invalid').focus();
      return toast('Revise os campos destacados', 'error');
    }

    await busy(form.querySelector('[type=submit]'), async () => {
      try {
        const r = id ? await api.put(`/systems/${id}`, body) : await api.post('/systems', body);
        invalidate('systems-meta');
        toast(id ? 'Sistema atualizado' : 'Sistema cadastrado');
        navigate(`/systems/${id ?? r.id}`);
      } catch (err) {
        toast(err.message, 'error');
      }
    });
  });
}

window.Pages = window.Pages || {};
window.Pages['system-form'] = render;
})();

// ===================== page-monitoring =====================
// Página: monitoring
(function () {
const sparkbar = (values) =>
  values.length
    ? html`<div class="sparkbar" aria-label="${values.filter(Boolean).length} de ${values.length} verificações OK">${values.map((ok) => html`<span class="${ok ? '' : 'fail'}" title="${ok ? 'OK' : 'Falha'}"></span>`)}</div>`
    : html`<span class="xs muted">sem dados</span>`;

async function render(root) {
  let tab = 'systems';
  let incFilter = '';
  let data = null;

  const draw = async () => {
    if (!data) return;
    const { systems, summary: sum } = data;
    const alerts = systems.filter((r) => r.status === 'down' || r.status === 'degraded');
    root.innerHTML = String(html`
      <div class="page-header">
        <div><h1>Monitoramento</h1><p class="sub">Última verificação ${timeAgo(sum.last_run)} · atualização automática a cada 30s</p></div>
        ${can('monitoring:run') ? html`<button class="btn primary" data-action="run-all">${ic('play-circle', 'sm')} Verificar todos agora</button>` : ''}
      </div>
      <div class="stack" style="gap:24px">
        <div class="grid cols-4">
          <div class="card card-body"><p class="muted row">${ic('radio', 'sm')} Com verificação técnica</p><p class="s-value mt-2" style="font-size:28px;font-weight:700;color:var(--text)">${sum.monitored ?? 0}</p><p class="xs muted">${sum.manual_only ?? 0} somente com status manual</p></div>
          <div class="card card-body"><p class="muted row"><span style="color:#f43f5e">${ic('alert-octagon', 'sm')}</span> Incidentes abertos</p><p class="mt-2" style="font-size:28px;font-weight:700;color:var(--text)">${sum.open_incidents}</p><p class="xs muted">${alerts.length} sistema(s) com falha ou instabilidade</p></div>
          <div class="card card-body span-2"><p class="muted">Origem dos status atuais</p>
            <div class="grid cols-3 mt-3" style="gap:12px">${[['automatic', sum.src_automatic, 'activity'], ['manual', sum.src_manual, 'hand'], ['simulated', sum.src_simulated, 'refresh-cw']].map(([k, n, i]) => html`
              <div title="${STATUS_SOURCE[k].hint}" style="padding:12px;border-radius:8px;background:var(--surface-2)"><p class="xs row strong">${ic(i, 'sm')}${STATUS_SOURCE[k].label}</p><p style="font-size:20px;font-weight:700;color:var(--text)">${n ?? 0}</p></div>`)}</div></div>
        </div>
        ${alerts.length ? html`<div class="alert-box"><p class="strong row" style="color:inherit">${ic('alert-octagon', 'sm')} Alertas ativos</p>
          <ul style="margin:8px 0 0;padding-left:20px">${alerts.map((a) => html`<li><a href="/systems/${a.id}" style="color:inherit;font-weight:600">${a.name}</a> — ${a.status === 'down' ? 'indisponível' : 'instável'} (${STATUS_SOURCE[a.status_source].label.toLowerCase()})${a.status_note ? ` · ${a.status_note}` : ''}</li>`)}</ul></div>` : ''}
        ${tabs([{ id: 'systems', label: 'Sistemas' }, { id: 'incidents', label: 'Histórico de incidentes' }], tab)}
        <div id="tab-body">${tab === 'systems' ? systemsTable(systems) : skeleton(56, 4)}</div>
      </div>`);
    if (tab === 'incidents') loadIncidents();
  };

  const systemsTable = (rows) => html`<div class="card table-wrap"><table class="table">
    <thead><tr><th>Sistema</th><th>Status</th><th>Criticidade</th><th>Últimas 24 verificações</th><th>Uptime 24h</th><th>Uptime 7d</th><th>Latência</th><th>Última verificação</th><th></th></tr></thead>
    <tbody>${rows.map((r) => html`<tr>
      <td><a href="/systems/${r.id}" class="row" style="color:inherit">${sysIcon(r.icon, r.color, 'sm')}<span><span class="strong nowrap" style="display:block">${r.name}</span>${r.data_origin !== 'manual' ? originBadge(r.data_origin) : ''}</span></a></td>
      <td>${statusBadge(r.status, r.status_source)}</td>
      <td>${critBadge(r.criticality)}</td>
      <td>${r.monitoring_enabled ? sparkbar(r.recent) : html`<span class="xs muted">Sem integração (manual)</span>`}</td>
      <td class="${r.uptime_24h != null && r.uptime_24h < 95 ? 'text-bad strong' : 'strong'}">${formatPercent(r.uptime_24h)}</td>
      <td>${formatPercent(r.uptime_7d)}</td>
      <td class="nowrap">${r.last_latency_ms != null ? `${r.last_latency_ms} ms` : '—'}</td>
      <td class="nowrap" title="${formatDateTime(r.last_check_at)}">${timeAgo(r.last_check_at)}</td>
      <td class="right">${can('monitoring:run') && r.monitoring_enabled && (r.has_healthcheck || r.data_origin === 'demo')
        ? html`<button class="btn ghost sm icon" data-check="${r.id}" title="Verificar agora" aria-label="Verificar ${r.name}">${ic('refresh-cw', 'sm')}</button>` : ''}</td>
    </tr>`)}</tbody></table></div>`;

  const loadIncidents = async () => {
    const box = root.querySelector('#tab-body');
    try {
      const list = await api.get('/monitoring/incidents', { status: incFilter });
      box.innerHTML = String(html`<div class="card">
        <div class="card-header" style="align-items:center"><h3>Incidentes</h3>
          <select class="input" style="width:auto" data-inc-filter aria-label="Filtrar incidentes">${options([['open', 'Abertos'], ['resolved', 'Resolvidos']], incFilter, { empty: 'Todos' })}</select></div>
        ${list.length ? html`<div class="table-wrap"><table class="table">
          <thead><tr><th>Incidente</th><th>Sistema</th><th>Severidade</th><th>Origem</th><th>Início</th><th>Duração</th><th>Situação</th><th></th></tr></thead>
          <tbody>${list.map((i) => html`<tr>
            <td><p class="strong">${i.title}</p>${i.description ? html`<p class="xs muted truncate" style="max-width:340px">${i.description}</p>` : ''}</td>
            <td class="nowrap"><a href="/systems/${i.system_id}">${i.system_name}</a></td>
            <td>${CRITICALITY[i.severity].label}</td><td>${STATUS_SOURCE[i.source].label}</td>
            <td class="nowrap">${formatDateTime(i.started_at)}</td><td class="nowrap">${formatDuration(i.duration_sec)}</td>
            <td>${i.status === 'open' ? html`<span class="row text-bad" style="gap:6px"><span class="status-dot c-down pulse"></span>Aberto</span>` : html`<span class="row text-ok" style="gap:4px">${ic('check-circle', 'sm')}Resolvido</span>`}</td>
            <td class="right">${i.status === 'open' && can('incidents:manage') ? html`<button class="btn sm" data-resolve="${i.id}">Resolver</button>` : ''}</td>
          </tr>`)}</tbody></table></div>` : emptyState('Nenhum incidente', '', 'check-circle')}
      </div>`);
    } catch (err) {
      box.innerHTML = String(errorState(err));
    }
  };

  const load = async () => {
    try {
      data = await api.get('/monitoring/overview');
      await draw();
    } catch (err) {
      root.innerHTML = String(html`<div class="page-header"><h1>Monitoramento</h1></div>${errorState(err)}`);
    }
  };

  root.addEventListener('click', async (e) => {
    const t = e.target;
    const tb = t.closest('[data-tab]');
    if (tb) { tab = tb.dataset.tab; return draw(); }
    if (t.closest('[data-action=retry]')) return load();
    const runAll = t.closest('[data-action=run-all]');
    if (runAll) {
      return busy(runAll, async () => {
        try { await api.post('/monitoring/run'); toast('Verificação concluída'); refreshNotifications(); await load(); } catch (err) { toast(err.message, 'error'); }
      });
    }
    const chk = t.closest('[data-check]');
    if (chk) {
      return busy(chk, async () => {
        try {
          const r = await api.post(`/systems/${chk.dataset.check}/check`);
          toast(r.ok ? 'Verificação OK' : `Falha: ${r.error}`, r.ok ? 'success' : 'error');
          refreshNotifications();
          await load();
        } catch (err) { toast(err.message, 'error'); }
      });
    }
    const res = t.closest('[data-resolve]');
    if (res) {
      return busy(res, async () => {
        try { await api.patch(`/monitoring/incidents/${res.dataset.resolve}/resolve`); toast('Incidente resolvido'); await load(); } catch (err) { toast(err.message, 'error'); }
      });
    }
  });
  root.addEventListener('change', (e) => {
    if (e.target.matches('[data-inc-filter]')) { incFilter = e.target.value; loadIncidents(); }
  });

  root.innerHTML = String(skeleton(90, 4));
  await load();
  const timer = setInterval(() => {
    if (tab === 'systems' && !document.querySelector('.modal-wrap')) load();
  }, 30_000);
  return () => clearInterval(timer);
}

window.Pages = window.Pages || {};
window.Pages['monitoring'] = render;
})();

// ===================== page-tickets =====================
// Página: tickets
(function () {
const typeIcon = (type) => html`<span class="t-${type}" title="${TICKET_TYPE[type].label}">${ic(TICKET_TYPE[type].icon, 'sm')}</span>`;

async function render(root, { query }) {
  const manage = can('tickets:manage');
  const f = { q: '', system: query.get('new') ? '' : (query.get('system') ?? ''), type: '', priority: '', assignee: '', source: '', client: query.get('client') ?? '' };
  let view = localStorage.getItem('sh-tickets-view') || 'kanban';
  let tickets = [];
  let drag = null;

  const systems = await cached('systems-options', () => api.get('/systems', { pageSize: 500 }).then((d) => d.items.map((s) => ({ id: s.id, name: s.name })))).catch(() => []);
  const assignable = manage ? await cached('assignable', () => api.get('/users/assignable')).catch(() => []) : [];
  const clients = can('clients:view') ? await cached('clients-options', () => api.get('/clients').then((l) => l.map((c) => ({ id: c.id, name: c.name })))).catch(() => []) : [];
  const clientName = (id) => clients.find((c) => String(c.id) === String(id))?.name ?? `#${id}`;

  root.innerHTML = String(html`
    <div class="page-header">
      <div><h1>Chamados</h1><p class="sub">${manage ? 'Bugs, melhorias, novas funcionalidades, problemas de atualização e incidentes' : 'Acompanhe os chamados que você abriu'}</p></div>
      <div class="row">
        <div class="segmented" role="group" aria-label="Visualização">
          <button data-view="kanban" class="${view === 'kanban' ? 'on' : ''}" aria-label="Quadro Kanban">${ic('kanban', 'sm')}</button>
          <button data-view="list" class="${view === 'list' ? 'on' : ''}" aria-label="Lista">${ic('list', 'sm')}</button>
        </div>
        ${can('tickets:create') ? html`<button class="btn accent" data-action="new">${ic('plus', 'sm')} Novo chamado</button>` : ''}
      </div>
    </div>
    <div class="card filters mb-4"><div class="grid cols-6" style="gap:8px">
      <div class="input-icon span-2">${ic('search', 'sm')}<input class="input" id="tq" placeholder="Buscar por título, descrição ou #número" aria-label="Buscar chamados" /></div>
      <select class="input" data-f="system" aria-label="Sistema">${options(systems.map((s) => [s.id, s.name]), f.system, { empty: 'Todos os sistemas' })}</select>
      <select class="input" data-f="type" aria-label="Tipo">${options(Object.entries(TICKET_TYPE).map(([k, v]) => [k, v.label]), '', { empty: 'Todos os tipos' })}</select>
      <select class="input" data-f="priority" aria-label="Prioridade">${options(Object.entries(PRIORITY).map(([k, v]) => [k, v.label]), '', { empty: 'Todas as prioridades' })}</select>
      ${manage ? html`<select class="input" data-f="assignee" aria-label="Responsável">${options([['me', 'Atribuídos a mim'], ...assignable.map((u) => [u.id, u.name])], '', { empty: 'Todos os responsáveis' })}</select>` : html`<div></div>`}
      ${manage ? html`<select class="input" data-f="source" aria-label="Origem">${options([['public', 'Abertos pelo link público'], ['internal', 'Abertos pela equipe']], '', { empty: 'Qualquer origem' })}</select>` : ''}
      ${clients.length ? html`<select class="input" data-f="client" aria-label="Cliente">${options(clients.map((c) => [c.id, c.name]), f.client, { empty: 'Todos os clientes' })}</select>` : ''}
    </div>
    ${f.client ? html`<div class="row mt-3"><button class="chip" data-clear-client>Cliente: ${clientName(f.client)} ${ic('x', 'sm')}</button></div>` : ''}
    </div>
    <div id="board">${skeleton(300, 1)}</div>`);

  const board = root.querySelector('#board');

  const load = async () => {
    try {
      tickets = await api.get('/tickets', f);
      drawBoard();
    } catch (err) {
      board.innerHTML = String(errorState(err));
    }
  };

  const columns = () => {
    const map = Object.fromEntries(TICKET_STATUS_ORDER.map((s) => [s, []]));
    for (const t of tickets) map[t.status].push(t);
    for (const s of TICKET_STATUS_ORDER) map[s].sort((a, b) => a.position - b.position || b.id - a.id);
    return map;
  };

  const card = (t) => html`
    <article class="card k-card" data-id="${t.id}" ${manage ? raw('draggable="true"') : ''}>
      <div class="row top">${typeIcon(t.type)}<p class="k-title grow clamp-2">${t.title}</p></div>
      ${t.system_name ? html`<p class="xs muted row mt-2" style="gap:6px">${sysIcon(t.system_icon, t.system_color, 'sm')}<span class="truncate">${t.system_name}</span></p>` : ''}
      ${t.source === 'public' ? html`<p class="xs row mt-2" style="gap:6px"><span class="badge tone-info">${ic('link', 'sm')}Link público</span><span class="muted truncate">${t.requester_name ?? ''}</span></p>` : ''}
      <div class="k-foot"><span>#${t.id}</span>${prioBadge(t.priority)}
        ${t.due_date ? html`<span class="row ${isOverdue(t.due_date, t.status === 'done') ? 'text-bad strong' : ''}" style="gap:3px" title="Prazo">${ic('calendar-clock', 'sm')}${formatDate(t.due_date).slice(0, 5)}</span>` : ''}
        ${t.comments ? html`<span class="row" style="gap:3px">${ic('message-square', 'sm')}${t.comments}</span>` : ''}
        <span style="margin-left:auto">${t.assignee_name ? avatar(t.assignee_name, 'sm') : '—'}</span></div>
    </article>`;

  const drawBoard = () => {
    if (view === 'kanban') {
      const cols = columns();
      board.innerHTML = String(html`<div class="kanban-scroll"><div class="kanban">${TICKET_STATUS_ORDER.map((s) => html`
        <section class="k-col" data-col="${s}">
          <div class="k-head"><span class="status-dot acc-${s}"></span><h3>${TICKET_STATUS[s].label}</h3><span class="count">${cols[s].length}</span></div>
          <div class="k-list">${cols[s].length ? cols[s].map(card) : html`<p class="xs muted center" style="padding:24px 8px">Nenhum chamado</p>`}</div>
        </section>`)}</div></div>
        ${manage ? '' : html`<p class="xs muted">A movimentação no quadro é feita pela equipe responsável.</p>`}`);
    } else {
      board.innerHTML = String(tickets.length ? html`<div class="card table-wrap"><table class="table">
        <thead><tr><th>#</th><th>Título</th><th>Tipo</th><th>Sistema</th><th>Prioridade</th><th>Status</th><th>Responsável</th><th>Prazo</th><th>Abertura</th></tr></thead>
        <tbody>${[...tickets].sort((a, b) => b.id - a.id).map((t) => html`<tr class="clickable" data-id="${t.id}">
          <td class="muted">#${t.id}</td><td><p class="strong truncate" style="max-width:340px">${t.title}</p></td>
          <td class="nowrap"><span class="row" style="gap:6px">${typeIcon(t.type)}${TICKET_TYPE[t.type].label}</span></td>
          <td class="nowrap">${t.system_name ?? '—'}</td><td>${prioBadge(t.priority)}</td><td class="nowrap">${TICKET_STATUS[t.status].label}</td>
          <td class="nowrap">${t.assignee_name ?? '—'}</td>
          <td class="nowrap ${isOverdue(t.due_date, t.status === 'done') ? 'text-bad strong' : ''}">${formatDate(t.due_date)}</td>
          <td class="nowrap">${formatDate(t.created_at)}</td></tr>`)}</tbody></table></div>`
        : html`<div class="card">${emptyState('Nenhum chamado encontrado')}</div>`);
    }
  };

  // ---------- drag & drop (HTML5 nativo) ----------
  const clearIndicators = () => {
    board.querySelectorAll('.drop-line').forEach((x) => x.remove());
    board.querySelectorAll('.k-col.over').forEach((x) => x.classList.remove('over'));
  };
  board.addEventListener('dragstart', (e) => {
    const c = e.target.closest('.k-card');
    if (!c) return;
    drag = { id: Number(c.dataset.id), status: null, index: 0 };
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', c.dataset.id);
    requestAnimationFrame(() => c.classList.add('dragging'));
  });
  board.addEventListener('dragend', () => {
    board.querySelectorAll('.dragging').forEach((x) => x.classList.remove('dragging'));
    clearIndicators();
    drag = null;
  });
  board.addEventListener('dragover', (e) => {
    const col = e.target.closest('.k-col');
    if (!drag || !col) return;
    e.preventDefault();
    const list = col.querySelector('.k-list');
    const cards = [...list.querySelectorAll('.k-card')].filter((c) => Number(c.dataset.id) !== drag.id);
    let index = cards.length;
    for (let i = 0; i < cards.length; i++) {
      const r = cards[i].getBoundingClientRect();
      if (e.clientY < r.top + r.height / 2) { index = i; break; }
    }
    if (drag.status === col.dataset.col && drag.index === index) return;
    drag.status = col.dataset.col;
    drag.index = index;
    clearIndicators();
    col.classList.add('over');
    const line = document.createElement('div');
    line.className = 'drop-line';
    if (index < cards.length) list.insertBefore(line, cards[index]);
    else list.append(line);
  });
  board.addEventListener('drop', async (e) => {
    e.preventDefault();
    if (!drag?.status) return;
    const { id, status, index } = drag;
    clearIndicators();
    const t = tickets.find((x) => x.id === id);
    // Concluir pede o resumo da solução (que vai no WhatsApp)
    if (status === 'done' && t.status !== 'done') return concludeModal(id);
    const prev = tickets.map((x) => ({ ...x }));
    // atualização otimista
    const target = columns()[status].filter((x) => x.id !== id);
    target.splice(index, 0, { ...t, status });
    target.forEach((x, i) => { const orig = tickets.find((y) => y.id === x.id); orig.position = i + 1; if (x.id === id) orig.status = status; });
    drawBoard();
    try {
      await api.patch(`/tickets/${id}/move`, { status, index });
      if (prev.find((x) => x.id === id).status !== status) toast(`Chamado #${id} movido para ${TICKET_STATUS[status].label}`, 'info');
    } catch (err) {
      tickets = prev;
      drawBoard();
      toast(err.message, 'error');
    }
  });

  // ---------- formulário ----------
  const ticketForm = (t = null, defaults = {}) => {
    const v = t ?? {
      title: '', description: '', type: defaults.type || 'bug', system_id: defaults.system || '', assignee_id: '', priority: 'medium', status: 'backlog', due_date: '',
      client_id: f.client || '', requester_name: '', requester_phone: '', requester_email: '',
    };
    openModal({
      title: t ? `Editar chamado #${t.id}` : 'Novo chamado',
      size: 'lg',
      body: html`<form class="grid cols-2" novalidate>
        ${field('Título *', html`<input class="input" name="title" value="${v.title}" maxlength="200" autofocus />`, { cls: 'span-all' })}
        ${field('Tipo', html`<select class="input" name="type">${options(Object.entries(TICKET_TYPE).map(([k, x]) => [k, x.label]), v.type)}</select>`)}
        ${field('Sistema relacionado', html`<select class="input" name="system_id">${options(systems.map((s) => [s.id, s.name]), v.system_id, { empty: '— Nenhum —' })}</select>`)}
        ${field('Prioridade', html`<select class="input" name="priority">${options(Object.entries(PRIORITY).map(([k, x]) => [k, x.label]), v.priority)}</select>`)}
        ${field('Prazo', html`<input class="input" type="date" name="due_date" value="${v.due_date ?? ''}" />`)}
        ${manage ? html`
          ${field('Responsável', html`<select class="input" name="assignee_id">${options(assignable.map((u) => [u.id, u.name]), v.assignee_id, { empty: '— Sem responsável —' })}</select>`)}
          ${field('Status', html`<select class="input" name="status">${options(TICKET_STATUS_ORDER.map((s) => [s, TICKET_STATUS[s].label]), v.status)}</select>`)}` : ''}
        ${field('Descrição', html`<textarea class="input" name="description" style="min-height:130px" placeholder="Contexto, passos para reproduzir, impacto…">${v.description}</textarea>`, { cls: 'span-all' })}
        ${manage ? html`
          <p class="span-all strong mt-2" style="font-size:13px">Solicitante (para o resumo pelo WhatsApp)</p>
          ${clients.length ? field('Cliente', html`<select class="input" name="client_id">${options(clients.map((c) => [c.id, c.name]), v.client_id, { empty: '— Nenhum —' })}</select>`) : ''}
          ${field('Nome do solicitante', html`<input class="input" name="requester_name" value="${v.requester_name ?? ''}" maxlength="120" />`)}
          ${field('WhatsApp do solicitante', html`<input class="input" name="requester_phone" value="${v.requester_phone ?? ''}" placeholder="(11) 99999-9999" maxlength="30" />`)}
          ${field('E-mail do solicitante', html`<input class="input" type="email" name="requester_email" value="${v.requester_email ?? ''}" />`)}` : ''}
      </form>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>${t ? 'Salvar' : 'Abrir chamado'}</button>`,
      onMount: (el, close) => el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
        const form = el.querySelector('form');
        const body = Object.fromEntries(new FormData(form));
        if ((body.title ?? '').trim().length < 3) return toast('Informe um título com ao menos 3 caracteres', 'error');
        try {
          if (t) await api.put(`/tickets/${t.id}`, body);
          else await api.post('/tickets', body);
          toast(t ? 'Chamado atualizado' : 'Chamado aberto');
          close();
          await load();
          if (t) openTicket(t.id);
        } catch (err) { toast(err.message, 'error'); }
      })),
    });
  };

  // ---------- detalhe (drawer) ----------
  const openTicket = async (id) => {
    setQuery({ open: id });
    const d = openDrawer({
      head: html`<p class="strong">Chamado #${id}</p><button class="btn ghost icon" data-close aria-label="Fechar">${ic('x')}</button>`,
      body: html`<div class="center"><span class="spinner"></span></div>`,
    });
    d.onClose(() => setQuery({ open: null }));
    const drawDetail = async () => {
      let t;
      try {
        t = await api.get(`/tickets/${id}`);
      } catch (err) {
        return d.set('body', errorState(err));
      }
      d.set('head', html`<p class="strong">Chamado #${id}</p><div class="row">
        ${manage && t.status !== 'done' ? html`<button class="btn primary sm" data-conclude>${ic('check-square', 'sm')} Concluir</button>` : ''}
        ${t.status === 'done' ? html`<button class="btn sm" data-whatsapp style="color:#16a34a">${ic('whatsapp', 'sm')} Resumo no WhatsApp</button>` : ''}
        ${manage ? html`<button class="btn sm" data-edit>${ic('pencil', 'sm')} Editar</button>` : ''}
        ${can('tickets:delete') ? html`<button class="btn ghost sm icon" data-delete aria-label="Excluir chamado" style="color:#e11d48">${ic('trash', 'sm')}</button>` : ''}
        <button class="btn ghost icon" data-close aria-label="Fechar">${ic('x')}</button></div>`);
      d.set('body', html`
        <p class="row small">${typeIcon(t.type)} ${TICKET_TYPE[t.type].label}</p>
        <h2 class="mt-1" style="font-size:20px">${t.title}</h2>
        <dl class="facts">
          <div><dt>Status</dt><dd>${TICKET_STATUS[t.status].label}</dd></div>
          <div><dt>Prioridade</dt><dd>${prioBadge(t.priority)}</dd></div>
          <div><dt>Sistema</dt><dd>${t.system_id ? html`<a href="/systems/${t.system_id}">${t.system_name}</a>` : '—'}</dd></div>
          <div><dt>Responsável</dt><dd>${t.assignee_name ?? '—'}</dd></div>
          <div><dt>Aberto por</dt><dd>${t.reporter_name ?? '—'} <span class="xs muted">· ${formatDate(t.created_at)}</span></dd></div>
          <div><dt>Prazo</dt><dd class="${isOverdue(t.due_date, t.status === 'done') ? 'text-bad' : ''}">${formatDate(t.due_date)}</dd></div>
          <div><dt>Origem</dt><dd>${t.source === 'public' ? html`<span class="badge tone-info">${ic('link', 'sm')}Link público</span>` : 'Equipe'}</dd></div>
          <div><dt>Cliente</dt><dd>${t.client_id && can('clients:view') ? html`<a href="/clients?open=${t.client_id}">${t.client_name}</a>` : (t.client_name ?? '—')}</dd></div>
          ${t.requester_name || t.requester_phone || t.requester_email ? html`
            <div><dt>Solicitante</dt><dd>${t.requester_name ?? '—'}${t.requester_company ? html` <span class="xs muted">· ${t.requester_company}</span>` : ''}</dd></div>
            <div><dt>Contato</dt><dd class="small">${t.requester_phone ? html`<span class="row" style="gap:4px">${ic('whatsapp', 'sm')}${t.requester_phone}</span>` : ''}${t.requester_email ? html`<a href="mailto:${t.requester_email}">${t.requester_email}</a>` : ''}</dd></div>` : ''}
        </dl>
        <div class="pre mt-4">${t.description || html`<span class="muted">Sem descrição</span>`}</div>
        ${t.resolution ? html`<div class="mt-4" style="padding:12px 16px;border-radius:8px;border:1px solid var(--ok-ring);background:var(--ok-bg)">
          <p class="xs strong text-ok">Resumo da solução</p><p class="pre mt-1">${t.resolution}</p></div>` : ''}
        <h3 class="mt-6 mb-4" style="font-size:14px">Histórico</h3>
        <ol class="events">${t.events.map((e) => html`<li>${e.user_name ? avatar(e.user_name, 'sm') : html`<span style="width:24px"></span>`}
          <div class="grow"><p class="xs"><strong>${e.user_name ?? 'Sistema'}</strong> <span class="muted">· ${timeAgo(e.created_at)}</span></p>
            ${e.kind === 'comment' ? html`<p class="bubble">${e.message}</p>` : html`<p class="muted small" title="${formatDateTime(e.created_at)}">${e.message}</p>`}</div></li>`)}</ol>`);
      d.set('foot', html`<form class="row grow" data-comment><input class="input" name="message" placeholder="Adicionar comentário…" maxlength="5000" aria-label="Comentário" />
        <button class="btn primary icon" type="submit" aria-label="Enviar comentário">${ic('send', 'sm')}</button></form>`);
      d.el.querySelector('[data-edit]')?.addEventListener('click', () => { d.close(); ticketForm(t); });
      d.el.querySelector('[data-conclude]')?.addEventListener('click', () => { d.close(); concludeModal(id); });
      d.el.querySelector('[data-whatsapp]')?.addEventListener('click', () => whatsappModal(t));
      d.el.querySelector('[data-delete]')?.addEventListener('click', async () => {
        if (!(await confirmDialog({ title: 'Excluir chamado', danger: true, confirmLabel: 'Excluir', message: 'O chamado e seu histórico serão removidos. A ação é registrada na auditoria.' }))) return;
        try { await api.del(`/tickets/${id}`); toast('Chamado excluído'); d.close(); load(); } catch (err) { toast(err.message, 'error'); }
      });
      d.el.querySelector('[data-comment]').addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector('input');
        if (!input.value.trim()) return;
        await busy(e.currentTarget.querySelector('button'), async () => {
          try { await api.post(`/tickets/${id}/comments`, { message: input.value }); await drawDetail(); load(); } catch (err) { toast(err.message, 'error'); }
        });
      });
    };
    await drawDetail();
  };

  // ---------- concluir + resumo pelo WhatsApp ----------
  const concludeModal = async (id) => {
    let t;
    try {
      t = await api.get(`/tickets/${id}`);
    } catch (err) {
      return toast(err.message, 'error');
    }
    openModal({
      title: `Concluir chamado #${id}`,
      description: 'Descreva a solução. Esse resumo fica no histórico e é enviado pelo WhatsApp ao solicitante e a você.',
      body: html`<div class="stack">
        <p class="strong">${t.title}</p>
        ${field('Resumo da solução *', html`<textarea class="input" name="resolution" style="min-height:140px" placeholder="Ex.: Ajustamos a permissão do seu usuário e o relatório voltou a ser gerado normalmente." autofocus>${t.resolution ?? ''}</textarea>`)}
      </div>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>${ic('check-square', 'sm')} Concluir e preparar resumo</button>`,
      onMount: (el, close) => el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
        const resolution = el.querySelector('[name=resolution]').value;
        if (resolution.trim().length < 3) return toast('Escreva o resumo da solução.', 'error');
        try {
          await api.post(`/tickets/${id}/conclude`, { resolution });
          toast(`Chamado #${id} concluído`);
          close();
          await load();
          whatsappModal(await api.get(`/tickets/${id}`));
        } catch (err) { toast(err.message, 'error'); }
      })),
    });
  };

  const whatsappModal = async (t) => {
    const settings = await api.get('/settings').catch(() => ({ owner_whatsapp: '' }));
    const text = ticketSummary(t);
    const owner = settings.owner_whatsapp;
    const sendBtn = (to, phone, label) => (phone
      ? html`<a class="btn ${to === 'requester' ? 'primary' : ''}" href="${waLink(phone, text)}" target="_blank" rel="noopener noreferrer" data-wa="${to}" style="${to === 'requester' ? 'background:#16a34a' : ''}">${ic('whatsapp', 'sm')} ${label}</a>`
      : html`<button class="btn" disabled title="Número não informado">${ic('whatsapp', 'sm')} ${label}</button>`);
    openModal({
      title: 'Enviar resumo pelo WhatsApp',
      description: 'O WhatsApp abre com a mensagem pronta — é só conferir e tocar em enviar.',
      size: 'lg',
      body: html`<div class="stack">
        <pre class="small" style="margin:0;white-space:pre-wrap;padding:14px 16px;border-radius:10px;background:var(--surface-2);border:1px solid var(--border);font-family:var(--font)">${text}</pre>
        <div class="grid cols-2" style="gap:8px">
          <div><p class="xs muted mb-4" style="margin-bottom:6px">Solicitante: ${t.requester_name ?? t.reporter_name ?? '—'} ${t.requester_phone ? `· ${t.requester_phone}` : '· sem WhatsApp informado'}</p>${sendBtn('requester', t.requester_phone, 'Enviar ao solicitante')}</div>
          <div><p class="xs muted" style="margin-bottom:6px">Você ${owner ? `· ${owner}` : '· configure seu número em Configurações'}</p>${sendBtn('owner', owner, 'Enviar para mim')}</div>
        </div>
        ${!t.requester_phone && manage ? html`<p class="xs muted">Dica: edite o chamado e preencha o WhatsApp do solicitante para habilitar o envio.</p>` : ''}
      </div>`,
      footer: html`<button class="btn" data-copy>${ic('copy', 'sm')} Copiar texto</button><button class="btn primary" data-close>Fechar</button>`,
      onMount: (el) => {
        el.querySelector('[data-copy]').addEventListener('click', () => copyText(text));
        el.querySelectorAll('[data-wa]').forEach((a) => a.addEventListener('click', () => {
          api.post(`/tickets/${t.id}/whatsapp-log`, { to: a.dataset.wa }).catch(() => undefined);
        }));
      },
    });
  };

  // ---------- eventos ----------
  const tq = root.querySelector('#tq');
  tq.addEventListener('input', debounce(() => { f.q = tq.value.trim(); load(); }, 300));
  root.addEventListener('change', (e) => {
    const s = e.target.closest('[data-f]');
    if (s) { f[s.dataset.f] = s.value; load(); }
  });
  root.addEventListener('click', (e) => {
    const t = e.target;
    const v = t.closest('[data-view]');
    if (v) {
      view = v.dataset.view;
      localStorage.setItem('sh-tickets-view', view);
      root.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('on', b === v));
      return drawBoard();
    }
    if (t.closest('[data-action=new]')) return ticketForm();
    if (t.closest('[data-clear-client]')) {
      f.client = '';
      setQuery({ client: null });
      t.closest('[data-clear-client]').remove();
      const sel = root.querySelector('[data-f=client]');
      if (sel) sel.value = '';
      return load();
    }
    if (t.closest('[data-action=retry]')) return load();
    const item = t.closest('[data-id]');
    if (item && !t.closest('a')) openTicket(Number(item.dataset.id));
  });

  await load();
  if (query.get('new')) {
    setQuery({ new: null, system: null, type: null });
    ticketForm(null, { system: query.get('system'), type: query.get('type') });
  } else if (query.get('open')) openTicket(Number(query.get('open')));
}

window.Pages = window.Pages || {};
window.Pages['tickets'] = render;
})();

// ===================== page-people =====================
// Página: people
(function () {
async function render(root, { query }) {
  const manage = can('people:manage');
  const highlight = Number(query.get('highlight') ?? 0);
  let tab = 'people';
  let people = [];
  let teams = [];
  let term = '';
  let teamFilter = '';

  const load = async () => {
    try {
      [people, teams] = await Promise.all([api.get('/people'), api.get('/teams')]);
      draw();
    } catch (err) {
      root.innerHTML = String(errorState(err));
    }
  };

  const draw = () => {
    root.innerHTML = String(html`
      <div class="page-header">
        <div><h1>Responsáveis e equipes</h1><p class="sub">Pessoas de contato técnico e equipes responsáveis pelos sistemas</p></div>
        ${manage ? html`<button class="btn accent" data-action="${tab === 'people' ? 'new-person' : 'new-team'}">${ic('plus', 'sm')} ${tab === 'people' ? 'Novo responsável' : 'Nova equipe'}</button>` : ''}
      </div>
      ${tabs([{ id: 'people', label: 'Responsáveis', count: people.length }, { id: 'teams', label: 'Equipes', count: teams.length }], tab)}
      <div class="mt-6">${tab === 'people' ? peopleView() : teamsView()}</div>`);
    if (tab === 'people') {
      const s = root.querySelector('#pq');
      s.value = term;
      if (term) { s.focus(); s.setSelectionRange(term.length, term.length); }
      if (highlight) root.querySelector(`#person-${highlight}`)?.scrollIntoView({ block: 'center' });
    }
  };

  const peopleView = () => {
    const list = people.filter((p) => (!teamFilter || String(p.team_id) === teamFilter) && (!term || normalize([p.name, p.email, p.title, p.team_name].join(' ')).includes(normalize(term))));
    return html`<div class="card">
      <div class="row" style="padding:16px;border-bottom:1px solid var(--border)">
        <div class="input-icon grow">${ic('search', 'sm')}<input class="input" id="pq" placeholder="Buscar por nome, e-mail, cargo…" aria-label="Buscar responsáveis" /></div>
        <select class="input" style="width:220px" id="pteam" aria-label="Equipe">${options(teams.map((t) => [t.id, t.name]), teamFilter, { empty: 'Todas as equipes' })}</select>
      </div>
      ${list.length ? html`<div class="table-wrap"><table class="table"><thead><tr><th>Nome</th><th>Contato</th><th>Equipe</th><th>Sistemas</th><th></th></tr></thead><tbody>
        ${list.map((p) => html`<tr id="person-${p.id}" class="${highlight === p.id ? 'highlight' : ''}">
          <td><div class="row">${avatar(p.name)}<div><p class="strong">${p.name} ${p.is_demo ? badge('Fictício', 'demo') : ''}</p><p class="xs muted">${p.title ?? '—'}</p></div></div></td>
          <td class="xs">${p.email ? html`<a class="row" style="gap:4px" href="mailto:${p.email}">${ic('mail', 'sm')}${p.email}</a>` : ''}${p.phone ? html`<p class="row muted" style="gap:4px">${ic('phone', 'sm')}${p.phone}</p>` : ''}</td>
          <td class="nowrap">${p.team_name ?? '—'}</td>
          <td class="xs nowrap">${p.owned_systems} como responsável · ${p.contact_systems} como contato</td>
          <td class="right nowrap">${manage ? html`<button class="btn ghost sm icon" data-edit-person="${p.id}" aria-label="Editar ${p.name}">${ic('pencil', 'sm')}</button>
            <button class="btn ghost sm icon" data-del-person="${p.id}" aria-label="Excluir ${p.name}" style="color:#e11d48">${ic('trash', 'sm')}</button>` : ''}</td>
        </tr>`)}</tbody></table></div>` : emptyState('Nenhum responsável encontrado', '', 'users')}
    </div>`;
  };

  const teamsView = () => (teams.length
    ? html`<div class="grid cols-3">${teams.map((t) => html`<div class="card">
        <div class="card-header"><div><h3>${t.name}</h3>${t.description ? html`<p class="sub">${t.description}</p>` : ''}</div>
          ${manage ? html`<div class="row" style="gap:0"><button class="btn ghost sm icon" data-edit-team="${t.id}" aria-label="Editar ${t.name}">${ic('pencil', 'sm')}</button>
            <button class="btn ghost sm icon" data-del-team="${t.id}" aria-label="Excluir ${t.name}" style="color:#e11d48">${ic('trash', 'sm')}</button></div>` : ''}</div>
        <div class="row card-body" style="gap:32px"><div><p style="font-size:24px;font-weight:700;color:var(--text)">${t.members}</p><p class="xs muted">membros</p></div>
          <div><p style="font-size:24px;font-weight:700;color:var(--text)">${t.systems}</p><p class="xs muted">sistemas</p></div></div></div>`)}</div>`
    : html`<div class="card">${emptyState('Nenhuma equipe cadastrada')}</div>`);

  const personModal = (p = {}) => openModal({
    title: p.id ? 'Editar responsável' : 'Novo responsável',
    body: html`<form class="grid cols-2" novalidate>
      ${field('Nome *', html`<input class="input" name="name" value="${p.name ?? ''}" autofocus />`, { cls: 'span-all' })}
      ${field('E-mail', html`<input class="input" type="email" name="email" value="${p.email ?? ''}" />`)}
      ${field('Telefone', html`<input class="input" name="phone" value="${p.phone ?? ''}" />`)}
      ${field('Cargo', html`<input class="input" name="title" value="${p.title ?? ''}" />`)}
      ${field('Equipe', html`<select class="input" name="team_id">${options(teams.map((t) => [t.id, t.name]), p.team_id, { empty: '— Nenhuma —' })}</select>`)}
    </form>`,
    footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Salvar</button>`,
    onMount: (el, close) => el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
      const body = Object.fromEntries(new FormData(el.querySelector('form')));
      try {
        if (p.id) await api.put(`/people/${p.id}`, body);
        else await api.post('/people', body);
        invalidate('systems-meta');
        toast('Responsável salvo');
        close();
        await load();
      } catch (err) { toast(err.message, 'error'); }
    })),
  });

  const teamModal = (t = {}) => openModal({
    title: t.id ? 'Editar equipe' : 'Nova equipe',
    size: 'sm',
    body: html`<form class="stack" novalidate>
      ${field('Nome *', html`<input class="input" name="name" value="${t.name ?? ''}" autofocus />`)}
      ${field('Descrição', html`<textarea class="input" name="description">${t.description ?? ''}</textarea>`)}</form>`,
    footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Salvar</button>`,
    onMount: (el, close) => el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
      const body = Object.fromEntries(new FormData(el.querySelector('form')));
      try {
        if (t.id) await api.put(`/teams/${t.id}`, body);
        else await api.post('/teams', body);
        invalidate('systems-meta');
        toast('Equipe salva');
        close();
        await load();
      } catch (err) { toast(err.message, 'error'); }
    })),
  });

  const remove = async (kind, item) => {
    const ok = await confirmDialog({
      title: kind === 'team' ? 'Excluir equipe' : 'Excluir responsável', danger: true, confirmLabel: 'Excluir',
      message: html`Excluir <strong>${item.name}</strong>? Sistemas vinculados ficarão sem ${kind === 'team' ? 'equipe' : 'este responsável'}.`,
    });
    if (!ok) return;
    try {
      await api.del(kind === 'team' ? `/teams/${item.id}` : `/people/${item.id}`);
      invalidate('systems-meta');
      toast('Registro excluído');
      await load();
    } catch (err) { toast(err.message, 'error'); }
  };

  root.addEventListener('click', (e) => {
    const t = e.target;
    const tb = t.closest('[data-tab]');
    if (tb) { tab = tb.dataset.tab; return draw(); }
    const a = t.closest('[data-action]');
    if (a?.dataset.action === 'new-person') return personModal();
    if (a?.dataset.action === 'new-team') return teamModal();
    if (a?.dataset.action === 'retry') return load();
    const ep = t.closest('[data-edit-person]');
    if (ep) return personModal(people.find((p) => p.id === Number(ep.dataset.editPerson)));
    const dp = t.closest('[data-del-person]');
    if (dp) return remove('person', people.find((p) => p.id === Number(dp.dataset.delPerson)));
    const et = t.closest('[data-edit-team]');
    if (et) return teamModal(teams.find((x) => x.id === Number(et.dataset.editTeam)));
    const dt = t.closest('[data-del-team]');
    if (dt) return remove('team', teams.find((x) => x.id === Number(dt.dataset.delTeam)));
  });
  root.addEventListener('input', (e) => {
    if (e.target.id === 'pq') { term = e.target.value; draw(); }
  });
  root.addEventListener('change', (e) => {
    if (e.target.id === 'pteam') { teamFilter = e.target.value; draw(); }
  });

  root.innerHTML = String(skeleton(64, 4));
  await load();
}

window.Pages = window.Pages || {};
window.Pages['people'] = render;
})();

// ===================== page-users =====================
// Página: users
(function () {
async function render(root) {
  let users = [];
  let restrictedSystems = [];
  let term = '';

  const load = async () => {
    try {
      const [u, s] = await Promise.all([api.get('/users'), api.get('/systems', { pageSize: 500 })]);
      users = u;
      restrictedSystems = s.items.filter((x) => x.restricted);
      draw();
    } catch (err) {
      root.innerHTML = String(errorState(err));
    }
  };

  const rows = () => users.filter((u) => !term || normalize(`${u.name} ${u.email} ${ROLE[u.role].label}`).includes(normalize(term)));

  const tableBody = () => html`${rows().map((u) => html`<tr>
    <td><div class="row">${avatar(u.name)}<div><p class="strong">${u.name} ${u.id === state.user.id ? html`<span class="xs muted">(você)</span>` : ''} ${u.is_demo ? badge('Demo', 'demo') : ''}</p><p class="xs muted">${u.email}</p></div></div></td>
    <td>${ROLE[u.role].label}</td>
    <td><span class="row xs strong ${u.active ? 'text-ok' : 'muted'}" style="gap:6px"><span class="status-dot ${u.active ? 'c-operational' : 'c-unknown'}"></span>${u.active ? 'Ativo' : 'Inativo'}</span></td>
    <td>${u.role === 'user' ? u.system_ids.length : html`<span class="xs muted">Todos (perfil)</span>`}</td>
    <td class="nowrap">${formatDateTime(u.last_login_at)}</td>
    <td class="right nowrap"><button class="btn ghost sm icon" data-edit="${u.id}" aria-label="Editar ${u.name}">${ic('pencil', 'sm')}</button>
      ${u.id !== state.user.id ? html`<button class="btn ghost sm icon" data-del="${u.id}" aria-label="Excluir ${u.name}" style="color:#e11d48">${ic('trash', 'sm')}</button>` : ''}</td>
  </tr>`)}`;

  const draw = () => {
    root.innerHTML = String(html`
      <div class="page-header">
        <div><h1>Usuários e acessos</h1><p class="sub">Perfis de acesso são aplicados no servidor em todas as rotas da API</p></div>
        <button class="btn accent" data-action="new">${ic('plus', 'sm')} Novo usuário</button>
      </div>
      <div class="grid cols-4 mb-6">${Object.entries(ROLE).map(([k, r]) => html`<div class="card card-body">
        <p class="strong row"><span style="color:var(--accent-500)">${ic('shield-check', 'sm')}</span>${r.label}</p>
        <p class="xs muted mt-1">${r.description}</p><p class="mt-2" style="font-size:20px;font-weight:700;color:var(--text)">${users.filter((u) => u.role === k).length}</p></div>`)}</div>
      <div class="card">
        <div style="padding:16px;border-bottom:1px solid var(--border)"><div class="input-icon" style="max-width:420px">${ic('search', 'sm')}<input class="input" id="uq" placeholder="Buscar usuários…" aria-label="Buscar usuários" /></div></div>
        <div class="table-wrap"><table class="table"><thead><tr><th>Usuário</th><th>Perfil</th><th>Situação</th><th>Sistemas restritos liberados</th><th>Último acesso</th><th></th></tr></thead>
          <tbody id="ubody">${tableBody()}</tbody></table></div>
      </div>`);
    root.querySelector('#uq').value = term;
  };

  const userModal = (u = { role: 'user', active: true, system_ids: [] }) => {
    const st = { active: u.active };
    const selected = new Set(u.system_ids);
    openModal({
      title: u.id ? 'Editar usuário' : 'Novo usuário',
      size: 'lg',
      body: html`<form class="grid cols-2" novalidate autocomplete="off">
        ${field('Nome *', html`<input class="input" name="name" value="${u.name ?? ''}" autofocus />`)}
        ${field('E-mail *', html`<input class="input" type="email" name="email" value="${u.email ?? ''}" autocomplete="off" />`)}
        ${field('Perfil', html`<select class="input" name="role">${options(Object.entries(ROLE).map(([k, r]) => [k, `${r.label} — ${r.description}`]), u.role)}</select>`)}
        ${field(u.id ? 'Nova senha' : 'Senha *', html`<input class="input" type="password" name="password" autocomplete="new-password" />`, { hint: u.id ? 'Deixe em branco para manter a atual' : 'Mínimo de 8 caracteres' })}
        <div class="span-all">${toggle('active', st.active, 'Usuário ativo', 'Usuários inativos não conseguem entrar e têm as sessões encerradas.')}</div>
        <div class="span-all" id="access-box" ${u.role === 'user' ? '' : raw('hidden')}>
          <span class="field"><span class="label">Sistemas restritos permitidos</span></span>
          <p class="xs muted mb-4">Sistemas não restritos ficam visíveis para todos. Marque os restritos que este usuário pode ver e acessar.</p>
          <div style="max-height:200px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:6px">
            ${restrictedSystems.length ? restrictedSystems.map((s) => html`<label class="check"><input type="checkbox" value="${s.id}" ${selected.has(s.id) ? raw('checked') : ''} /><span>${s.name} <span class="xs muted">· ${s.category}</span></span></label>`)
              : html`<p class="xs muted" style="padding:8px">Nenhum sistema restrito.</p>`}
          </div>
        </div>
      </form>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Salvar</button>`,
      onMount: (el, close) => {
        bindToggles(el, st);
        el.querySelector('[name=role]').addEventListener('change', (e) => (el.querySelector('#access-box').hidden = e.target.value !== 'user'));
        el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
          const fd = Object.fromEntries(new FormData(el.querySelector('form')));
          const body = {
            name: fd.name, email: fd.email, role: fd.role, active: st.active, password: fd.password || undefined,
            systemIds: [...el.querySelectorAll('#access-box input:checked')].map((i) => Number(i.value)),
          };
          try {
            if (u.id) await api.put(`/users/${u.id}`, body);
            else await api.post('/users', body);
            toast('Usuário salvo');
            close();
            await load();
          } catch (err) { toast(err.message, 'error'); }
        }));
      },
    });
  };

  root.addEventListener('click', async (e) => {
    const t = e.target;
    if (t.closest('[data-action=new]')) return userModal();
    if (t.closest('[data-action=retry]')) return load();
    const ed = t.closest('[data-edit]');
    if (ed) return userModal(users.find((u) => u.id === Number(ed.dataset.edit)));
    const del = t.closest('[data-del]');
    if (del) {
      const u = users.find((x) => x.id === Number(del.dataset.del));
      const ok = await confirmDialog({ title: 'Excluir usuário', danger: true, confirmLabel: 'Excluir', message: html`Excluir <strong>${u.email}</strong>? Para apenas bloquear o acesso, prefira desativar o usuário.` });
      if (!ok) return;
      try { await api.del(`/users/${u.id}`); toast('Usuário excluído'); await load(); } catch (err) { toast(err.message, 'error'); }
    }
  });
  root.addEventListener('input', (e) => {
    if (e.target.id === 'uq') { term = e.target.value; root.querySelector('#ubody').innerHTML = String(tableBody()); }
  });

  root.innerHTML = String(skeleton(64, 4));
  await load();
}

window.Pages = window.Pages || {};
window.Pages['users'] = render;
})();

// ===================== page-audit =====================
// Página: audit
(function () {
const ENTITIES = { system: 'Sistemas', ticket: 'Chamados', user: 'Usuários', person: 'Responsáveis', team: 'Equipes', monitoring: 'Monitoramento' };

async function render(root) {
  const f = { q: '', entity: '', page: 1 };
  let open = null;
  let data = null;

  root.innerHTML = String(html`
    <div class="page-header"><div><h1>Auditoria</h1><p class="sub">Registro de alterações relevantes: quem, o quê, quando e de onde. Clique em uma linha para ver os detalhes.</p></div></div>
    <div class="card">
      <div class="row" style="padding:16px;border-bottom:1px solid var(--border)">
        <div class="input-icon grow">${ic('search', 'sm')}<input class="input" id="aq" placeholder="Buscar por resumo, usuário ou ação…" aria-label="Buscar na auditoria" /></div>
        <select class="input" id="aent" style="width:220px" aria-label="Entidade">${options(Object.entries(ENTITIES), '', { empty: 'Todas as entidades' })}</select>
      </div>
      <div id="alist">${skeleton(48, 5)}</div>
    </div>`);
  const list = root.querySelector('#alist');

  const draw = () => {
    if (!data.items.length) return void (list.innerHTML = String(emptyState('Nenhum registro', '', 'scroll-text')));
    const pages = Math.max(1, Math.ceil(data.total / data.pageSize));
    list.innerHTML = String(html`<div class="table-wrap"><table class="table">
      <thead><tr><th>Data</th><th>Usuário</th><th>Ação</th><th>Resumo</th><th>IP</th></tr></thead>
      <tbody>${data.items.map((a) => html`<tr class="clickable" data-row="${a.id}">
        <td class="nowrap">${formatDateTime(a.created_at)}</td><td class="nowrap">${a.user_name ?? 'Sistema'}</td><td><code>${a.action}</code></td>
        <td><p>${a.summary}</p>${open === a.id && a.details != null ? html`<pre class="xs" style="margin:8px 0 0;padding:12px;border-radius:8px;background:var(--surface-2);overflow-x:auto;max-width:720px">${JSON.stringify(a.details, null, 2)}</pre>` : ''}</td>
        <td class="xs muted nowrap">${a.ip ?? '—'}</td></tr>`)}</tbody></table></div>
      ${data.total > data.pageSize ? html`<div class="pager" style="padding:0 16px 16px"><p class="muted">Página ${f.page} de ${pages} · ${data.total} registros</p><div class="row">
        <button class="btn sm" data-page="${f.page - 1}" ${f.page <= 1 ? raw('disabled') : ''}>${ic('chevron-left', 'sm')} Anterior</button>
        <button class="btn sm" data-page="${f.page + 1}" ${f.page >= pages ? raw('disabled') : ''}>Próxima ${ic('chevron-right', 'sm')}</button></div></div>` : ''}`);
  };

  const load = async () => {
    try {
      data = await api.get('/audit', { ...f, pageSize: 50 });
      draw();
    } catch (err) {
      list.innerHTML = String(errorState(err));
    }
  };

  root.querySelector('#aq').addEventListener('input', debounce((e) => { f.q = e.target.value.trim(); f.page = 1; load(); }, 300));
  root.querySelector('#aent').addEventListener('change', (e) => { f.entity = e.target.value; f.page = 1; load(); });
  root.addEventListener('click', (e) => {
    const p = e.target.closest('[data-page]');
    if (p) { f.page = Number(p.dataset.page); return load(); }
    if (e.target.closest('[data-action=retry]')) return load();
    const r = e.target.closest('[data-row]');
    if (r) { open = open === Number(r.dataset.row) ? null : Number(r.dataset.row); draw(); }
  });
  await load();
}

window.Pages = window.Pages || {};
window.Pages['audit'] = render;
})();

// ===================== page-clients =====================
// Página: clientes
(function () {
/** Máscara simples de CPF/CNPJ e telefone enquanto digita. */
function maskDocument(v, kind) {
  const d = v.replace(/\D/g, '').slice(0, kind === 'PF' ? 11 : 14);
  return kind === 'PF'
    ? d.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    : d.replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d{1,2})$/, '$1-$2');
}
function maskPhone(v) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d{1,4})$/, '$1-$2');
  return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}

async function render(root, { query }) {
  const manage = can('clients:manage');
  const f = { q: '', status: '', system: '' };
  let list = [];
  const systems = await cached('systems-options', () => api.get('/systems', { pageSize: 500 }).then((d) => d.items.map((s) => ({ id: s.id, name: s.name })))).catch(() => []);

  root.innerHTML = String(html`
    <div class="page-header">
      <div><h1>Clientes</h1><p class="sub" id="ccount">Cadastro de clientes atendidos e os sistemas que utilizam</p></div>
      ${manage ? html`<button class="btn accent" data-action="new">${ic('plus', 'sm')} Novo cliente</button>` : ''}
    </div>
    <div class="card filters mb-4"><div class="row wrap">
      <div class="input-icon grow" style="min-width:240px">${ic('search', 'sm')}<input class="input" id="cq" placeholder="Buscar por nome, CPF/CNPJ, contato, e-mail, telefone ou cidade" aria-label="Buscar clientes" /></div>
      <select class="input" style="width:180px" data-f="status" aria-label="Situação">${options(Object.entries(CLIENT_STATUS).map(([k, v]) => [k, v.label]), '', { empty: 'Todas as situações' })}</select>
      <select class="input" style="width:240px" data-f="system" aria-label="Sistema">${options(systems.map((s) => [s.id, s.name]), '', { empty: 'Todos os sistemas' })}</select>
    </div></div>
    <div id="clist">${skeleton(56, 4)}</div>`);

  const box = root.querySelector('#clist');

  const load = async () => {
    try {
      list = await api.get('/clients', f);
      root.querySelector('#ccount').textContent = `${list.length} cliente(s) · cadastro de clientes atendidos e os sistemas que utilizam`;
      draw();
    } catch (err) {
      box.innerHTML = String(errorState(err));
    }
  };

  const draw = () => {
    box.innerHTML = String(list.length ? html`<div class="card table-wrap"><table class="table">
      <thead><tr><th>Cliente</th><th>CPF/CNPJ</th><th>Contato</th><th>Cidade</th><th>Sistemas</th><th>Chamados</th><th>Situação</th><th></th></tr></thead>
      <tbody>${list.map((c) => html`<tr class="clickable" data-open="${c.id}">
        <td style="min-width:240px"><div class="row">${avatar(c.name)}<div><p class="strong">${c.name} ${c.is_demo ? badge('Fictício', 'demo') : ''}</p><p class="xs muted">${c.kind === 'PF' ? 'Pessoa física' : 'Pessoa jurídica'}</p></div></div></td>
        <td class="nowrap">${c.document ?? '—'}</td>
        <td><p class="nowrap">${c.contact_name ?? '—'}</p><p class="xs muted nowrap">${c.phone ?? ''}${c.phone && c.email ? ' · ' : ''}${c.email ?? ''}</p></td>
        <td class="nowrap">${c.city ? `${c.city}${c.state ? `/${c.state}` : ''}` : '—'}</td>
        <td><div class="row wrap" style="gap:4px">${c.systems.slice(0, 3).map((s) => html`<span class="tag">${s.name}</span>`)}${c.systems.length > 3 ? html`<span class="xs muted">+${c.systems.length - 3}</span>` : ''}</div></td>
        <td class="nowrap">${c.tickets_open ? html`<strong>${c.tickets_open}</strong> aberto(s) · ` : ''}<span class="muted">${c.tickets_total} no total</span></td>
        <td>${badge(CLIENT_STATUS[c.status]?.label ?? c.status, CLIENT_STATUS[c.status]?.tone)}</td>
        <td class="right nowrap">
          ${c.phone ? html`<a class="btn ghost sm icon" href="${waLink(c.phone, `Olá, ${c.contact_name ?? c.name}!`)}" target="_blank" rel="noopener noreferrer" title="Conversar no WhatsApp" aria-label="WhatsApp" style="color:#16a34a">${ic('whatsapp', 'sm')}</a>` : ''}
          ${manage ? html`<button class="btn ghost sm icon" data-edit="${c.id}" aria-label="Editar ${c.name}">${ic('pencil', 'sm')}</button>
            <button class="btn ghost sm icon" data-del="${c.id}" aria-label="Excluir ${c.name}" style="color:#e11d48">${ic('trash', 'sm')}</button>` : ''}
        </td></tr>`)}</tbody></table></div>`
      : html`<div class="card">${emptyState('Nenhum cliente encontrado', manage ? 'Cadastre seu primeiro cliente no botão “Novo cliente”.' : '', 'briefcase')}</div>`);
  };

  const clientModal = (c = { kind: 'PJ', status: 'active', system_ids: [] }) => {
    const sel = new Set(c.system_ids ?? []);
    openModal({
      title: c.id ? 'Editar cliente' : 'Novo cliente',
      size: 'lg',
      body: html`<form class="grid cols-2" novalidate>
        ${field('Nome / razão social *', html`<input class="input" name="name" value="${c.name ?? ''}" maxlength="160" autofocus />`, { cls: 'span-all' })}
        ${field('Tipo', html`<select class="input" name="kind">${options([['PJ', 'Pessoa jurídica (CNPJ)'], ['PF', 'Pessoa física (CPF)']], c.kind)}</select>`)}
        ${field('CPF / CNPJ', html`<input class="input" name="document" value="${c.document ?? ''}" inputmode="numeric" />`)}
        ${field('Pessoa de contato', html`<input class="input" name="contact_name" value="${c.contact_name ?? ''}" maxlength="120" />`)}
        ${field('WhatsApp / telefone', html`<input class="input" name="phone" value="${c.phone ?? ''}" inputmode="tel" placeholder="(11) 99999-9999" />`)}
        ${field('E-mail', html`<input class="input" type="email" name="email" value="${c.email ?? ''}" />`)}
        ${field('Situação', html`<select class="input" name="status">${options(Object.entries(CLIENT_STATUS).map(([k, v]) => [k, v.label]), c.status)}</select>`)}
        ${field('Cidade', html`<input class="input" name="city" value="${c.city ?? ''}" maxlength="80" />`)}
        ${field('UF', html`<select class="input" name="state">${options(UF.map((u) => [u, u]), c.state, { empty: '—' })}</select>`)}
        <div class="span-all"><span class="field"><span class="label">Sistemas que utiliza</span></span>
          <div style="max-height:180px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:6px" class="grid cols-2">
            ${systems.map((s) => html`<label class="check"><input type="checkbox" value="${s.id}" ${sel.has(s.id) ? raw('checked') : ''} /><span class="small">${s.name}</span></label>`)}
          </div></div>
        ${field('Observações', html`<textarea class="input" name="notes">${c.notes ?? ''}</textarea>`, { cls: 'span-all' })}
      </form>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Salvar</button>`,
      onMount: (el, close) => {
        const doc = el.querySelector('[name=document]');
        const kind = el.querySelector('[name=kind]');
        doc.addEventListener('input', () => (doc.value = maskDocument(doc.value, kind.value)));
        kind.addEventListener('change', () => (doc.value = maskDocument(doc.value, kind.value)));
        const phone = el.querySelector('[name=phone]');
        phone.addEventListener('input', () => (phone.value = maskPhone(phone.value)));
        el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
          const body = Object.fromEntries(new FormData(el.querySelector('form')));
          body.system_ids = [...el.querySelectorAll('input[type=checkbox]:checked')].map((i) => Number(i.value));
          try {
            if (c.id) await api.put(`/clients/${c.id}`, body);
            else await api.post('/clients', body);
            invalidate('clients-options');
            toast('Cliente salvo');
            close();
            await load();
          } catch (err) { toast(err.message, 'error'); }
        }));
      },
    });
  };

  const openClient = async (id) => {
    setQuery({ open: id });
    const d = openDrawer({
      head: html`<p class="strong">Cliente</p><button class="btn ghost icon" data-close aria-label="Fechar">${ic('x')}</button>`,
      body: html`<div class="center"><span class="spinner"></span></div>`,
    });
    d.onClose(() => setQuery({ open: null }));
    let c;
    try {
      c = await api.get(`/clients/${id}`);
    } catch (err) {
      return d.set('body', errorState(err));
    }
    d.set('head', html`<p class="strong">Cliente</p><div class="row">
      ${manage ? html`<button class="btn sm" data-edit-drawer>${ic('pencil', 'sm')} Editar</button>` : ''}
      <button class="btn ghost icon" data-close aria-label="Fechar">${ic('x')}</button></div>`);
    d.set('body', html`
      <div class="row">${avatar(c.name)}<div><h2 style="font-size:20px">${c.name}</h2><p class="xs muted">${c.kind === 'PF' ? 'Pessoa física' : 'Pessoa jurídica'} · ${c.document ?? 'sem documento'}</p></div></div>
      <div class="row wrap mt-3">${badge(CLIENT_STATUS[c.status]?.label ?? c.status, CLIENT_STATUS[c.status]?.tone)}${c.is_demo ? badge('Fictício', 'demo') : ''}</div>
      <dl class="facts">
        <div><dt>Contato</dt><dd>${c.contact_name ?? '—'}</dd></div>
        <div><dt>WhatsApp / telefone</dt><dd>${c.phone ? html`<a href="${waLink(c.phone, `Olá, ${c.contact_name ?? c.name}!`)}" target="_blank" rel="noopener noreferrer" class="row" style="gap:4px">${ic('whatsapp', 'sm')}${c.phone}</a>` : '—'}</dd></div>
        <div><dt>E-mail</dt><dd>${c.email ? html`<a href="mailto:${c.email}">${c.email}</a>` : '—'}</dd></div>
        <div><dt>Cidade</dt><dd>${c.city ? `${c.city}${c.state ? `/${c.state}` : ''}` : '—'}</dd></div>
      </dl>
      <h3 class="mt-6" style="font-size:14px">Sistemas que utiliza</h3>
      <div class="row wrap mt-2" style="gap:6px">${c.systems.length ? c.systems.map((s) => html`<a class="tag" href="/systems/${s.id}">${s.name}</a>`) : html`<span class="muted small">Nenhum sistema vinculado</span>`}</div>
      ${c.notes ? html`<h3 class="mt-6" style="font-size:14px">Observações</h3><p class="pre mt-2">${c.notes}</p>` : ''}
      <div class="row between mt-6"><h3 style="font-size:14px">Chamados (${c.tickets.length})</h3>
        <a class="btn sm" href="/tickets?new=1&client=${c.id}">${ic('plus', 'sm')} Novo chamado</a></div>
      <div class="stack sm mt-2">${c.tickets.length ? c.tickets.map((t) => html`
        <a class="list-item" href="/tickets?open=${t.id}" style="border:1px solid var(--border)">
          <span class="grow"><span class="strong truncate" style="display:block">#${t.id} ${t.title}</span>
            <span class="xs muted">${TICKET_TYPE[t.type]?.label ?? t.type} · ${TICKET_STATUS[t.status].label} · ${formatDate(t.created_at)}</span></span>
          ${prioBadge(t.priority)}</a>`) : html`<p class="muted small">Nenhum chamado deste cliente.</p>`}</div>`);
    d.el.querySelector('[data-edit-drawer]')?.addEventListener('click', () => { d.close(); clientModal(c); });
  };

  const cq = root.querySelector('#cq');
  cq.addEventListener('input', debounce(() => { f.q = cq.value.trim(); load(); }, 250));
  root.addEventListener('change', (e) => {
    const s = e.target.closest('[data-f]');
    if (s) { f[s.dataset.f] = s.value; load(); }
  });
  root.addEventListener('click', async (e) => {
    const t = e.target;
    if (t.closest('[data-action=new]')) return clientModal();
    if (t.closest('[data-action=retry]')) return load();
    const ed = t.closest('[data-edit]');
    if (ed) return clientModal(list.find((c) => c.id === Number(ed.dataset.edit)));
    const del = t.closest('[data-del]');
    if (del) {
      const c = list.find((x) => x.id === Number(del.dataset.del));
      const ok = await confirmDialog({ title: 'Excluir cliente', danger: true, confirmLabel: 'Excluir', message: html`Excluir <strong>${c.name}</strong>? Os chamados dele são mantidos, sem vínculo com o cliente.` });
      if (!ok) return;
      try { await api.del(`/clients/${c.id}`); invalidate('clients-options'); toast('Cliente excluído'); await load(); } catch (err) { toast(err.message, 'error'); }
      return;
    }
    const row = t.closest('[data-open]');
    if (row && !t.closest('a, button')) openClient(Number(row.dataset.open));
  });

  await load();
  if (query.get('open')) openClient(Number(query.get('open')));
}

window.Pages = window.Pages || {};
window.Pages['clients'] = render;
})();

// ===================== page-backups =====================
// Página: controle de backups dos sistemas
(function () {
const healthBadge = (h) => badge(BACKUP_HEALTH[h]?.label ?? h, BACKUP_HEALTH[h]?.tone);
const fmtSize = (mb) => (mb == null ? '—' : mb >= 1024 ? `${(mb / 1024).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} GB` : `${Math.round(mb).toLocaleString('pt-BR')} MB`);

async function render(root, { query }) {
  const manage = can('backups:manage');
  const f = { q: '', health: '', system: query.get('system') ?? '' };
  let data = null;
  const [systems, people] = await Promise.all([
    cached('systems-options', () => api.get('/systems', { pageSize: 500 }).then((d) => d.items.map((s) => ({ id: s.id, name: s.name })))).catch(() => []),
    api.get('/people').catch(() => []),
  ]);

  root.innerHTML = String(html`
    <div class="page-header">
      <div><h1>Backups</h1><p class="sub">Rotinas de backup de cada sistema, execuções e alertas de atraso ou falha</p></div>
      ${manage ? html`<button class="btn accent" data-action="new">${ic('plus', 'sm')} Nova rotina</button>` : ''}
    </div>
    <div id="bsummary" class="mb-6">${skeleton(110, 1)}</div>
    <div class="card filters mb-4"><div class="row wrap">
      <div class="input-icon grow" style="min-width:240px">${ic('search', 'sm')}<input class="input" id="bq" placeholder="Buscar por rotina, sistema, destino ou responsável" aria-label="Buscar rotinas" /></div>
      <select class="input" style="width:200px" data-f="health" aria-label="Situação">${options(Object.entries(BACKUP_HEALTH).map(([k, v]) => [k, v.label]), '', { empty: 'Todas as situações' })}</select>
      <select class="input" style="width:240px" data-f="system" aria-label="Sistema">${options(systems.map((s) => [s.id, s.name]), f.system, { empty: 'Todos os sistemas' })}</select>
    </div></div>
    <div id="blist">${skeleton(56, 4)}</div>`);

  const load = async () => {
    try {
      data = await api.get('/backups', f);
      drawSummary();
      drawList();
    } catch (err) {
      root.querySelector('#blist').innerHTML = String(errorState(err));
    }
  };

  const drawSummary = () => {
    const s = data.summary;
    const tile = (label, value, iconName, tone, hint, filter) => html`
      <button class="card stat clickable" style="text-align:left;border:1px solid var(--border)" data-quick="${filter ?? ''}">
        <span class="s-head">${label}<span class="s-icon ic-${tone}">${ic(iconName)}</span></span>
        <span class="s-value">${value}</span><span class="s-hint">${hint}</span></button>`;
    root.querySelector('#bsummary').innerHTML = String(html`
      ${s.failed || s.late ? html`<div class="alert-box mb-4"><p class="strong row" style="color:inherit">${ic('alert-octagon', 'sm')} Atenção</p>
        <p class="small mt-1">${s.failed ? `${s.failed} rotina(s) com falha na última execução. ` : ''}${s.late ? `${s.late} rotina(s) atrasada(s) (sem backup bem-sucedido dentro do prazo).` : ''}</p></div>` : ''}
      <div class="grid cols-4">
        ${tile('Rotinas ativas', s.active, 'hard-drive', 'navy', `${s.systems_without_backup} sistema(s) sem rotina de backup`, '')}
        ${tile('Em dia', s.ok, 'check-circle', 'ok', 'Último backup dentro do prazo', 'ok')}
        ${tile('Atrasados ou com falha', s.late + s.failed, 'alert-octagon', 'bad', `${s.failed} falha(s) · ${s.late} atraso(s)`, s.failed ? 'failed' : 'late')}
        ${tile('Sucesso em 30 dias', formatPercent(s.success_rate_30d, 1), 'activity', 'info', 'Execuções bem-sucedidas no período', null)}
      </div>`);
  };

  const drawList = () => {
    const items = data.items;
    root.querySelector('#blist').innerHTML = String(items.length ? html`<div class="card table-wrap"><table class="table">
      <thead><tr><th>Sistema / rotina</th><th>Situação</th><th>Tipo</th><th>Frequência</th><th>Último backup OK</th><th>Próxima execução</th><th>Tamanho</th><th>Destino</th><th></th></tr></thead>
      <tbody>${items.map((j) => html`<tr class="clickable" data-open="${j.id}">
        <td style="min-width:230px"><div class="row">${sysIcon(j.system_icon, j.system_color, 'sm')}<div><p class="strong">${j.system_name ?? '—'}</p><p class="xs muted">${j.name}${j.is_demo ? ' · fictício' : ''}</p></div></div></td>
        <td>${healthBadge(j.health)}${j.failures_30d ? html`<p class="xs muted mt-1">${j.failures_30d} falha(s) em 30 dias</p>` : ''}</td>
        <td class="nowrap">${BACKUP_TYPE[j.type] ?? j.type}</td>
        <td><p class="nowrap">${BACKUP_FREQ[j.frequency] ?? j.frequency}</p>${j.schedule ? html`<p class="xs muted nowrap">${j.schedule}</p>` : ''}</td>
        <td class="nowrap" title="${formatDateTime(j.last_success_at)}">${j.last_success_at ? timeAgo(j.last_success_at) : '—'}</td>
        <td class="nowrap ${j.next_run_at && j.next_run_at < new Date().toISOString() ? 'text-bad' : ''}">${j.next_run_at ? formatDateTime(j.next_run_at) : '—'}</td>
        <td class="nowrap">${fmtSize(j.last_size_mb)}</td>
        <td class="xs muted" style="max-width:200px">${j.destination ?? '—'}</td>
        <td class="right nowrap">${manage ? html`<button class="btn sm" data-run="${j.id}">${ic('plus', 'sm')} Registrar</button>` : ''}</td>
      </tr>`)}</tbody></table></div>`
      : html`<div class="card">${emptyState('Nenhuma rotina de backup', manage ? 'Cadastre as rotinas de backup dos seus sistemas para acompanhar atrasos e falhas.' : '', 'hard-drive')}</div>`);
  };

  const jobModal = (j = { type: 'full', frequency: 'daily', active: true, system_id: f.system || '' }) => {
    const st = { active: j.active !== false };
    openModal({
      title: j.id ? 'Editar rotina de backup' : 'Nova rotina de backup',
      size: 'lg',
      body: html`<form class="grid cols-2" novalidate>
        ${field('Sistema *', html`<select class="input" name="system_id">${options(systems.map((s) => [s.id, s.name]), j.system_id, { empty: '— Selecione —' })}</select>`)}
        ${field('Nome da rotina *', html`<input class="input" name="name" value="${j.name ?? ''}" placeholder="Ex.: Banco de dados — completo" maxlength="120" />`)}
        ${field('Tipo', html`<select class="input" name="type">${options(Object.entries(BACKUP_TYPE), j.type)}</select>`)}
        ${field('Frequência', html`<select class="input" name="frequency">${options(Object.entries(BACKUP_FREQ), j.frequency)}</select>`, { hint: 'Usada para detectar atraso (tolerância de 50%).' })}
        ${field('Agendamento', html`<input class="input" name="schedule" value="${j.schedule ?? ''}" placeholder="Ex.: Todos os dias às 02:00" maxlength="120" />`)}
        ${field('Retenção (dias)', html`<input class="input" type="number" min="1" max="3650" name="retention_days" value="${j.retention_days ?? ''}" />`)}
        ${field('Destino / local', html`<input class="input" name="destination" value="${j.destination ?? ''}" placeholder="Ex.: Storage S3, NAS do datacenter" maxlength="200" />`, { cls: 'span-all' })}
        ${field('Responsável', html`<select class="input" name="responsible_id">${options(people.map((p) => [p.id, p.name]), j.responsible_id, { empty: '— Nenhum —' })}</select>`)}
        <div style="align-self:end">${toggle('active', st.active, 'Rotina ativa', 'Rotinas inativas não geram alertas.')}</div>
        ${field('Observações', html`<textarea class="input" name="notes">${j.notes ?? ''}</textarea>`, { cls: 'span-all' })}
      </form>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Salvar</button>`,
      onMount: (el, close) => {
        bindToggles(el, st);
        el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
          const body = { ...Object.fromEntries(new FormData(el.querySelector('form'))), active: st.active };
          try {
            if (j.id) await api.put(`/backups/${j.id}`, body);
            else await api.post('/backups', body);
            toast('Rotina salva');
            close();
            await load();
          } catch (err) { toast(err.message, 'error'); }
        }));
      },
    });
  };

  const runModal = (j) => {
    const local = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
    let status = 'success';
    openModal({
      title: 'Registrar execução de backup',
      description: `${j.system_name} · ${j.name}`,
      body: html`<div class="stack">
        <div class="grid cols-2" style="gap:8px">
          <button type="button" class="choice on" data-st="success"><span class="status-dot c-operational"></span>Concluído com sucesso</button>
          <button type="button" class="choice" data-st="failed"><span class="status-dot c-down"></span>Falhou</button>
        </div>
        <div class="grid cols-2">
          ${field('Término', html`<input class="input" type="datetime-local" name="finished_at" value="${local}" max="${local}" />`)}
          ${field('Tamanho (MB)', html`<input class="input" type="number" min="0" step="0.1" name="size_mb" placeholder="Opcional" />`)}
        </div>
        ${field('Observação', html`<textarea class="input" name="notes" placeholder="Ex.: erro de espaço em disco, backup validado com restauração de teste…"></textarea>`)}
        <p class="xs muted">Falhas notificam administradores, gestores e desenvolvedores.</p>
      </div>`,
      footer: html`<button class="btn" data-close>Cancelar</button><button class="btn primary" data-save>Registrar</button>`,
      onMount: (el, close) => {
        el.addEventListener('click', (e) => {
          const b = e.target.closest('[data-st]');
          if (b) { status = b.dataset.st; el.querySelectorAll('[data-st]').forEach((x) => x.classList.toggle('on', x === b)); }
        });
        el.querySelector('[data-save]').addEventListener('click', (e) => busy(e.currentTarget, async () => {
          const v = (n) => el.querySelector(`[name=${n}]`).value;
          try {
            await api.post(`/backups/${j.id}/runs`, { status, finished_at: v('finished_at') ? new Date(v('finished_at')).toISOString() : null, size_mb: v('size_mb'), notes: v('notes') });
            toast(status === 'success' ? 'Backup registrado' : 'Falha registrada e equipe notificada', status === 'success' ? 'success' : 'info');
            close();
            refreshNotifications();
            await load();
          } catch (err) { toast(err.message, 'error'); }
        }));
      },
    });
  };

  const openJob = async (id) => {
    const d = openDrawer({
      head: html`<p class="strong">Rotina de backup</p><button class="btn ghost icon" data-close aria-label="Fechar">${ic('x')}</button>`,
      body: html`<div class="center"><span class="spinner"></span></div>`,
    });
    let j;
    try {
      j = await api.get(`/backups/${id}`);
    } catch (err) {
      return d.set('body', errorState(err));
    }
    d.set('head', html`<p class="strong">Rotina de backup</p><div class="row">
      ${manage ? html`<button class="btn primary sm" data-run-d>${ic('plus', 'sm')} Registrar execução</button>
        <button class="btn sm" data-edit-d>${ic('pencil', 'sm')} Editar</button>
        <button class="btn ghost sm icon" data-del-d aria-label="Excluir rotina" style="color:#e11d48">${ic('trash', 'sm')}</button>` : ''}
      <button class="btn ghost icon" data-close aria-label="Fechar">${ic('x')}</button></div>`);
    d.set('body', html`
      <div class="row">${sysIcon(j.system_icon, j.system_color)}<div><h2 style="font-size:20px">${j.name}</h2><p class="xs muted"><a href="/systems/${j.system_id}">${j.system_name}</a></p></div></div>
      <div class="row wrap mt-3">${healthBadge(j.health)}${j.is_demo ? badge('Fictício', 'demo') : ''}</div>
      <dl class="facts">
        <div><dt>Tipo</dt><dd>${BACKUP_TYPE[j.type]}</dd></div>
        <div><dt>Frequência</dt><dd>${BACKUP_FREQ[j.frequency]}${j.schedule ? html` <span class="xs muted">· ${j.schedule}</span>` : ''}</dd></div>
        <div><dt>Último backup OK</dt><dd>${formatDateTime(j.last_success_at)}</dd></div>
        <div><dt>Próxima execução</dt><dd>${formatDateTime(j.next_run_at)}</dd></div>
        <div><dt>Destino</dt><dd>${j.destination ?? '—'}</dd></div>
        <div><dt>Retenção</dt><dd>${j.retention_days ? `${j.retention_days} dias` : '—'}</dd></div>
        <div><dt>Responsável</dt><dd>${j.responsible_name ?? '—'}</dd></div>
        <div><dt>Último tamanho</dt><dd>${fmtSize(j.last_size_mb)}</dd></div>
      </dl>
      ${j.notes ? html`<p class="pre small mt-4">${j.notes}</p>` : ''}
      <h3 class="mt-6 mb-4" style="font-size:14px">Execuções (${j.runs.length})</h3>
      ${j.runs.length ? html`<div class="table-wrap"><table class="table"><thead><tr><th>Término</th><th>Resultado</th><th>Tamanho</th><th>Origem</th></tr></thead><tbody>
        ${j.runs.map((r) => html`<tr><td class="nowrap">${formatDateTime(r.finished_at)}</td>
          <td>${r.status === 'success' ? html`<span class="row text-ok" style="gap:4px">${ic('check', 'sm')}Sucesso</span>` : html`<span class="row text-bad" style="gap:4px">${ic('x', 'sm')}Falha</span>`}${r.notes ? html`<p class="xs muted">${r.notes}</p>` : ''}</td>
          <td class="nowrap">${fmtSize(r.size_mb)}</td>
          <td class="xs">${r.source === 'simulated' ? 'Simulado' : r.source === 'manual' ? `Manual${r.created_by_name ? ` · ${r.created_by_name}` : ''}` : r.source}</td></tr>`)}
      </tbody></table></div>` : emptyState('Nenhuma execução registrada')}`);
    d.el.querySelector('[data-run-d]')?.addEventListener('click', () => { d.close(); runModal(j); });
    d.el.querySelector('[data-edit-d]')?.addEventListener('click', () => { d.close(); jobModal(j); });
    d.el.querySelector('[data-del-d]')?.addEventListener('click', async () => {
      if (!(await confirmDialog({ title: 'Excluir rotina', danger: true, confirmLabel: 'Excluir', message: html`Excluir a rotina <strong>${j.name}</strong> e todo o histórico de execuções?` }))) return;
      try { await api.del(`/backups/${j.id}`); toast('Rotina excluída'); d.close(); await load(); } catch (err) { toast(err.message, 'error'); }
    });
  };

  const bq = root.querySelector('#bq');
  bq.addEventListener('input', debounce(() => { f.q = bq.value.trim(); load(); }, 250));
  root.addEventListener('change', (e) => {
    const s = e.target.closest('[data-f]');
    if (s) { f[s.dataset.f] = s.value; load(); }
  });
  root.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest('[data-action=new]')) return jobModal();
    if (t.closest('[data-action=retry]')) return load();
    const q = t.closest('[data-quick]');
    if (q) {
      f.health = q.dataset.quick;
      root.querySelector('[data-f=health]').value = f.health;
      return load();
    }
    const run = t.closest('[data-run]');
    if (run) return runModal(data.items.find((j) => j.id === Number(run.dataset.run)));
    const row = t.closest('[data-open]');
    if (row && !t.closest('a, button')) openJob(Number(row.dataset.open));
  });

  await load();
}

window.Pages = window.Pages || {};
window.Pages['backups'] = render;
})();

// ===================== page-settings =====================
﻿// Página: configurações (conexão Supabase, instalação, WhatsApp e link público de chamados)
(function () {
/** Link público para abrir chamado. Inclui a conexão quando ela não está fixada no script.js. */
function publicTicketLink(cfg, publicUrl) {
  const base = (publicUrl || `${location.origin === 'null' || location.protocol === 'file:' ? location.href.split('#')[0] : location.origin + location.pathname}`).split('#')[0];
  let link = `${base}#/abrir-chamado`;
  if (cfg.mode === 'supabase' && !cfg.fixed) {
    const c = btoa(JSON.stringify({ u: cfg.supabaseUrl, k: cfg.anonKey }));
    link += `?c=${encodeURIComponent(c)}`;
  }
  return link;
}

async function render(root, { setup = false } = {}) {
  const logged = !!state.user;
  const admin = logged && can('settings:manage');

  const load = async () => {
    const cfg = await api.get('/config');
    const saved = (() => { try { return JSON.parse(localStorage.getItem(CONFIG_KEY) ?? '{}') ?? {}; } catch { return {}; } })();
    cfg.anonKey = cfg.fixed ? SUPABASE_ANON_KEY : saved.supabaseKey ?? '';
    const settings = admin ? await api.get('/settings').catch(() => ({})) : {};
    draw(cfg, settings);
  };

  const step = (n, title, body) => html`<div class="row top" style="gap:14px"><span class="avatar sm" style="flex-shrink:0;background:var(--accent-400);color:var(--navy-950)">${n}</span><div class="grow"><p class="strong">${title}</p><div class="small muted mt-1">${body}</div></div></div>`;

  const draw = (cfg, settings) => {
    const remote = cfg.mode === 'supabase';
    const link = publicTicketLink(cfg, settings.public_url);
    root.innerHTML = String(html`
      ${setup ? html`<a class="back-link" href="/">${ic('arrow-left', 'sm')} Voltar ao login</a>` : ''}
      <div class="page-header"><div><h1>Configurações</h1><p class="sub">Conexão com o banco de dados, atendimento e link público de chamados</p></div></div>
      <div class="stack" style="gap:24px">

        <div class="card">
          <div class="card-header"><div><h3>${ic('plug', 'sm')} Banco de dados</h3><p class="sub">Onde os dados do SystemHub ficam salvos</p></div>
            ${remote ? badge('Conectado ao Supabase', 'ok') : badge('Modo local (este navegador)', 'demo')}</div>
          <div class="card-body stack">
            <p class="small">${remote
              ? html`Os dados ficam no seu projeto Supabase <code>${cfg.supabaseUrl}</code>, compartilhados com toda a equipe, com login pelo Supabase e regras de segurança no banco.`
              : html`Hoje os dados ficam <strong>somente neste navegador</strong>. Conecte ao Supabase para compartilhar com a equipe e receber chamados pelo link público de qualquer lugar.`}</p>
            ${cfg.fixed ? html`<p class="notice">${ic('lock', 'sm')} A conexão está fixada no arquivo script.js (SUPABASE_URL e SUPABASE_ANON_KEY).</p>` : (!logged || admin) ? html`
              <form class="grid cols-2" id="sbform" novalidate>
                ${field('URL do projeto (Project URL)', html`<input class="input" name="supabaseUrl" value="${cfg.supabaseUrl}" placeholder="https://abcdefgh.supabase.co" />`, { hint: 'Supabase → Project Settings → Data API' })}
                ${field('Chave pública (Publishable key ou anon key)', html`<input class="input mono" name="supabaseKey" value="${cfg.anonKey}" placeholder="sb_publishable_… ou eyJhbGciOi…" autocomplete="off" />`, { hint: 'Supabase → Project Settings → API Keys. Nunca use a secret / service_role aqui.' })}
                <div class="span-all row wrap">
                  <button class="btn" type="button" data-test>${ic('activity', 'sm')} Testar conexão</button>
                  <button class="btn primary" type="submit">${ic('save', 'sm')} Salvar e conectar</button>
                  ${remote ? html`<button class="btn ghost" type="button" data-local>Voltar ao modo local</button>` : ''}
                  <span class="small" id="testres"></span>
                </div>
              </form>` : html`<p class="muted small">Somente administradores alteram a conexão.</p>`}
          </div>
        </div>

        ${!logged || admin ? html`<div class="card">
          <div class="card-header"><div><h3>${ic('book-open', 'sm')} Como conectar ao Supabase (passo a passo)</h3><p class="sub">Leva uns 5 minutos e é gratuito</p></div></div>
          <div class="card-body stack">
            ${step(1, 'Crie o projeto', html`Acesse <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer">supabase.com/dashboard</a>, clique em <strong>New project</strong>, escolha nome e senha do banco e a região <em>South America (São Paulo)</em>.`)}
            ${step(2, 'Instale as tabelas', html`No menu <strong>SQL Editor</strong>, cole o script abaixo e clique em <strong>Run</strong>. Ele cria as tabelas e as regras de segurança (pode rodar de novo sem perder dados).`)}
            ${step(3, 'Ajuste o login por e-mail', html`Em <strong>Authentication → Sign In / Providers → Email</strong>, desative <strong>Confirm email</strong> (ou confirme pelo e-mail que chegar). Assim as contas criadas aqui já entram direto.`)}
            ${step(4, 'Copie URL e chave', html`Em <strong>Project Settings</strong>, copie a <strong>Project URL</strong> e a chave <strong>anon public</strong>, cole no formulário acima e clique em <strong>Salvar e conectar</strong>.`)}
            ${step(5, 'Crie o administrador', html`Na primeira conexão, crie a conta do administrador logo abaixo. Depois, cadastre a equipe em <strong>Usuários e acessos</strong>.`)}
            <div>
              <div class="row between mb-4" style="margin-bottom:8px"><span class="label" style="margin:0">Script SQL de instalação</span>
                <button class="btn sm" data-copy-sql>${ic('copy', 'sm')} Copiar script SQL</button></div>
              <textarea class="input mono" readonly style="min-height:220px" id="sqlbox">${cfg.sql}</textarea>
            </div>
          </div>
        </div>` : ''}

        ${remote && !logged ? html`<div class="card" id="firstadmin">
          <div class="card-header"><div><h3>${ic('shield-check', 'sm')} Primeiro administrador</h3><p class="sub">Use somente na primeira vez, com o banco recém-instalado</p></div></div>
          <form class="card-body grid cols-2" id="adminform" novalidate>
            ${field('E-mail', html`<input class="input" type="email" name="email" autocomplete="username" />`)}
            ${field('Senha (mín. 8 caracteres)', html`<input class="input" type="password" name="password" autocomplete="new-password" />`)}
            <div class="span-all row"><button class="btn primary" type="submit">${ic('user-plus', 'sm')} Criar conta de administrador</button><span class="small" id="adminres"></span></div>
          </form>
        </div>` : ''}

        ${admin ? html`<div class="card">
          <div class="card-header"><div><h3>${ic('whatsapp', 'sm')} Atendimento e link público</h3><p class="sub">Quem tiver o link abre chamados sem precisar de login</p></div></div>
          <form class="card-body stack" id="setform" novalidate>
            <div class="grid cols-2">
              ${field('Seu WhatsApp (para receber os resumos)', html`<input class="input" name="owner_whatsapp" value="${settings.owner_whatsapp ?? ''}" placeholder="(11) 99999-9999" inputmode="tel" />`, { hint: 'Usado no botão “Enviar para mim” ao concluir chamados.' })}
              ${field('Endereço onde o SystemHub está publicado (opcional)', html`<input class="input" name="public_url" value="${settings.public_url ?? ''}" placeholder="https://suaempresa.github.io/systemhub/" />`, { hint: 'Necessário para pessoas de fora acessarem o link.' })}
            </div>
            <div><button class="btn primary" type="submit">${ic('save', 'sm')} Salvar</button></div>
            <div>
              <span class="label">Link para abrir chamados</span>
              <div class="row"><input class="input mono" readonly value="${link}" id="plink" />
                <button class="btn" type="button" data-copy-link>${ic('copy', 'sm')} Copiar</button>
                <a class="btn" href="${link}" target="_blank" rel="noopener noreferrer">${ic('external-link', 'sm')} Abrir</a></div>
              <p class="xs muted mt-2">${!settings.public_url
                ? html`⚠️ Este link aponta para o arquivo no seu computador e só funciona aqui. Para clientes abrirem de qualquer lugar, publique a pasta do SystemHub (ex.: GitHub Pages, Netlify ou Vercel — gratuitos), informe o endereço acima${remote ? '' : ' e conecte ao Supabase'}.`
                : remote ? 'Pronto para compartilhar: envie por WhatsApp, e-mail ou coloque no seu site.' : '⚠️ No modo local os chamados ficam só neste navegador. Conecte ao Supabase para receber chamados de outras pessoas.'}</p>
            </div>
          </form>
        </div>

        <div class="card">
          <div class="card-header"><div><h3>${ic('database', 'sm')} Dados demonstrativos</h3><p class="sub">Exemplos fictícios para conhecer o sistema</p></div></div>
          <div class="card-body row wrap">
            ${remote
              ? html`<button class="btn" data-demo>${ic('download', 'sm')} Carregar dados de demonstração no Supabase</button><span class="xs muted">Adiciona sistemas, clientes, chamados e backups fictícios (marcados como “Fictício”).</span>`
              : html`<button class="btn" data-reset style="color:#e11d48">${ic('refresh-cw', 'sm')} Restaurar demonstração (apaga tudo deste navegador)</button>`}
          </div>
        </div>` : ''}
      </div>`);
    bind(cfg);
  };

  const bind = (cfg) => {
    const sb = root.querySelector('#sbform');
    const values = () => Object.fromEntries(new FormData(sb));
    root.querySelector('[data-test]')?.addEventListener('click', (e) => busy(e.currentTarget, async () => {
      const out = root.querySelector('#testres');
      try {
        const r = await api.post('/config/test', values());
        out.innerHTML = String(html`<span class="text-ok strong">✓ Conectado. Tabelas instaladas.${r.hasUsers ? '' : ' Nenhum administrador ainda.'}</span>`);
      } catch (err) {
        out.innerHTML = String(html`<span class="text-bad">${err.message}</span>`);
      }
    }));
    sb?.addEventListener('submit', (e) => {
      e.preventDefault();
      busy(sb.querySelector('[type=submit]'), async () => {
        try {
          const v = values();
          if (!v.supabaseUrl || !v.supabaseKey) return toast('Informe a URL e a chave do projeto.', 'error');
          await api.post('/config/test', v);
          await api.put('/config', v);
          toast('Conectado ao Supabase');
          state.user = null;
          state.permissions = [];
          location.hash = '#/configuracao';
          location.reload();
        } catch (err) { toast(err.message, 'error'); }
      });
    });
    root.querySelector('[data-local]')?.addEventListener('click', async () => {
      if (!(await confirmDialog({ title: 'Voltar ao modo local', confirmLabel: 'Desconectar', message: 'O SystemHub vai usar os dados salvos neste navegador. Os dados no Supabase continuam lá e voltam ao reconectar.' }))) return;
      await api.put('/config', { supabaseUrl: '', supabaseKey: '' });
      location.hash = '#/';
      location.reload();
    });
    root.querySelector('[data-copy-sql]')?.addEventListener('click', () => copyText(cfg.sql));
    root.querySelector('#adminform')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      busy(form.querySelector('[type=submit]'), async () => {
        const out = root.querySelector('#adminres');
        try {
          await api.post('/config/first-admin', Object.fromEntries(new FormData(form)));
          out.innerHTML = String(html`<span class="text-ok strong">✓ Conta criada! Volte ao login e entre com este e-mail e senha.</span>`);
          toast('Administrador criado. Faça login.');
        } catch (err) {
          out.innerHTML = String(html`<span class="text-bad">${err.message}</span>`);
        }
      });
    });
    root.querySelector('#setform')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      busy(form.querySelector('[type=submit]'), async () => {
        try {
          await api.put('/settings', Object.fromEntries(new FormData(form)));
          toast('Configurações salvas');
          await load();
        } catch (err) { toast(err.message, 'error'); }
      });
    });
    root.querySelector('[data-copy-link]')?.addEventListener('click', () => copyText(root.querySelector('#plink').value));
    root.querySelector('[data-demo]')?.addEventListener('click', (e) => busy(e.currentTarget, async () => {
      try {
        await api.post('/settings/demo-data');
        invalidate('systems-meta', 'systems-options', 'clients-options');
        toast('Dados demonstrativos carregados');
      } catch (err) { toast(err.message, 'error'); }
    }));
    root.querySelector('[data-reset]')?.addEventListener('click', async () => {
      if (!(await confirmDialog({ title: 'Restaurar demonstração', danger: true, confirmLabel: 'Apagar e restaurar', message: 'Todos os dados deste navegador serão apagados e substituídos pelos dados fictícios de demonstração.' }))) return;
      await api.post('/settings/reset-local');
      location.hash = '#/';
      location.reload();
    });
  };

  root.innerHTML = String(skeleton(120, 3));
  try {
    await load();
  } catch (err) {
    root.innerHTML = String(errorState(err));
  }
}

window.Pages = window.Pages || {};
window.Pages['settings'] = render;
})();

// ===================== page-public-ticket =====================
// Página: formulário público para abrir chamado (não exige login)
(function () {
async function render(root) {
  const draw = (systems) => {
    root.innerHTML = String(html`
      <div class="public-wrap">
        <div class="public-card card">
          <div class="public-head">
            <span class="brand-mark">${ic('shield-check')}</span>
            <div><h1>Abrir um chamado</h1><p class="muted">Tem uma dúvida, encontrou um problema ou quer sugerir uma melhoria? Conte para a gente.</p></div>
          </div>
          <form class="grid cols-2" novalidate id="pform">
            ${field('Seu nome *', html`<input class="input" name="requester_name" maxlength="120" autocomplete="name" autofocus />`)}
            ${field('Seu WhatsApp (com DDD) *', html`<input class="input" name="requester_phone" maxlength="30" inputmode="tel" placeholder="(11) 99999-9999" autocomplete="tel" />`, { hint: 'Enviaremos o resumo do atendimento por aqui.' })}
            ${field('E-mail', html`<input class="input" type="email" name="requester_email" autocomplete="email" />`)}
            ${field('Empresa', html`<input class="input" name="requester_company" maxlength="120" autocomplete="organization" />`)}
            ${field('Tipo de solicitação *', html`<select class="input" name="type">${options([
              ['question', 'Dúvida'], ['bug', 'Algo não está funcionando'], ['improvement', 'Sugestão de melhoria'], ['feature', 'Nova funcionalidade'], ['incident', 'Sistema fora do ar'],
            ], 'question')}</select>`)}
            ${field('Sistema', html`<select class="input" name="system_id">${options(systems.map((s) => [s.id, s.name]), '', { empty: 'Não sei / outro' })}</select>`)}
            ${field('Assunto *', html`<input class="input" name="title" maxlength="200" placeholder="Resuma em uma frase" />`, { cls: 'span-all' })}
            ${field('Descreva com detalhes *', html`<textarea class="input" name="description" style="min-height:140px" maxlength="5000" placeholder="O que aconteceu? O que você esperava? Se possível, informe o número do pedido, a tela e o horário."></textarea>`, { cls: 'span-all' })}
            <p class="form-error small span-all" hidden></p>
            <div class="span-all row between wrap">
              <p class="xs muted">Seus dados são usados apenas para o atendimento deste chamado.</p>
              <button class="btn primary" type="submit">${ic('send', 'sm')} Enviar chamado</button>
            </div>
          </form>
        </div>
        <p class="xs muted center mt-4">SystemHub · Central de atendimento</p>
      </div>`);

    const form = root.querySelector('#pform');
    const err = root.querySelector('.form-error');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      err.hidden = true;
      const body = Object.fromEntries(new FormData(form));
      const missing = [['requester_name', 'seu nome'], ['requester_phone', 'seu WhatsApp'], ['title', 'o assunto'], ['description', 'a descrição']].find(([k]) => !String(body[k] ?? '').trim());
      if (missing) {
        err.textContent = `Informe ${missing[1]}.`;
        err.hidden = false;
        form.querySelector(`[name=${missing[0]}]`).focus();
        return;
      }
      await busy(form.querySelector('[type=submit]'), async () => {
        try {
          const r = await api.post('/public/tickets', body);
          success(r.id, body);
        } catch (ex) {
          err.textContent = ex.message;
          err.hidden = false;
        }
      });
    });
  };

  const success = (id, body) => {
    root.innerHTML = String(html`
      <div class="public-wrap">
        <div class="public-card card center" style="padding:48px 32px">
          <div class="e-icon" style="margin:0 auto 16px;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:var(--ok-bg);color:var(--ok)">${ic('check-circle', 'lg')}</div>
          <h1 style="font-size:22px">Chamado enviado!</h1>
          <p class="muted mt-2">Seu protocolo é <strong style="color:var(--text)">#${id}</strong>.</p>
          <p class="muted mt-1">Obrigado, ${body.requester_name.split(' ')[0]}. Quando o atendimento for concluído, você receberá o resumo no WhatsApp ${body.requester_phone}.</p>
          <button class="btn mt-6" data-again>${ic('plus', 'sm')} Abrir outro chamado</button>
        </div>
      </div>`);
    root.querySelector('[data-again]').addEventListener('click', () => render(root));
  };

  root.innerHTML = String(html`<div class="public-wrap"><div class="public-card card card-body center"><span class="spinner"></span></div></div>`);
  let systems = [];
  try {
    systems = await api.get('/public/systems');
  } catch (ex) {
    if (/configurado|conectar|tabelas|chave/i.test(ex.message)) {
      root.innerHTML = String(html`<div class="public-wrap"><div class="public-card card">${emptyState('Formulário indisponível', `Não foi possível conectar à central de atendimento. ${ex.message}`, 'alert-triangle')}</div></div>`);
      return;
    }
  }
  draw(systems ?? []);
}

window.Pages = window.Pages || {};
window.Pages['public-ticket'] = render;
})();

// ===================== app =====================
// ---------- estado global ----------
const state = { user: null, permissions: [] };
const can = (p) => state.permissions.includes(p);

const ROUTES = [
  { re: /^\/$/, page: 'dashboard' },
  { re: /^\/systems\/?$/, page: 'catalog' },
  { re: /^\/systems\/new$/, page: 'system-form', perm: 'systems:create' },
  { re: /^\/systems\/(\d+)$/, page: 'system-detail' },
  { re: /^\/systems\/(\d+)\/edit$/, page: 'system-form', perm: 'systems:update' },
  { re: /^\/monitoring$/, page: 'monitoring', perm: 'monitoring:view' },
  { re: /^\/tickets$/, page: 'tickets' },
  { re: /^\/people$/, page: 'people' },
  { re: /^\/clients$/, page: 'clients', perm: 'clients:view' },
  { re: /^\/backups$/, page: 'backups', perm: 'backups:view' },
  { re: /^\/users$/, page: 'users', perm: 'users:manage' },
  { re: /^\/audit$/, page: 'audit', perm: 'audit:view' },
  { re: /^\/configuracao$/, page: 'settings', perm: 'settings:manage' },
];

const NAV = [
  { to: '/', label: 'Dashboard', icon: 'layout-dashboard' },
  { to: '/systems', label: 'Catálogo de sistemas', icon: 'layout-grid' },
  { to: '/monitoring', label: 'Monitoramento', icon: 'activity', perm: 'monitoring:view' },
  { to: '/backups', label: 'Backups', icon: 'hard-drive', perm: 'backups:view' },
  { to: '/tickets', label: 'Chamados', icon: 'kanban' },
  { to: '/clients', label: 'Clientes', icon: 'briefcase', perm: 'clients:view' },
  { to: '/people', label: 'Responsáveis', icon: 'contact' },
  { to: '/users', label: 'Usuários e acessos', icon: 'users', perm: 'users:manage' },
  { to: '/audit', label: 'Auditoria', icon: 'scroll-text', perm: 'audit:view' },
  { to: '/configuracao', label: 'Configurações', icon: 'settings', perm: 'settings:manage' },
];

/** Telas que abrem sem login e sem o menu lateral. */
function renderStandalone(page, opts = {}) {
  document.getElementById('app').innerHTML = '<div class="standalone"><div class="page"></div></div>';
  return window.Pages[page](document.querySelector('#app .page'), opts);
}

// ---------- navegação ----------
let cleanup = null;
let renderToken = 0;

// Rotas ficam após o "#" (ex.: index.html#/systems/3) para funcionar abrindo o arquivo direto.
function currentRoute() {
  const raw = location.hash.slice(1) || '/';
  const [path, search = ''] = raw.split('?');
  return { path: path || '/', query: new URLSearchParams(search) };
}
const hrefFor = (to) => `${location.pathname}${location.search}#${to}`;

function navigate(to, { replace = false } = {}) {
  history[replace ? 'replaceState' : 'pushState'](null, '', hrefFor(to));
  void route();
}

/** Atualiza parâmetros da rota sem recarregar a página atual. */
function setQuery(params, { replace = true } = {}) {
  const { path, query } = currentRoute();
  for (const [k, v] of Object.entries(params)) {
    if (v === null || v === undefined || v === '') query.delete(k);
    else query.set(k, v);
  }
  const qs = query.toString();
  history[replace ? 'replaceState' : 'pushState'](null, '', hrefFor(path + (qs ? `?${qs}` : '')));
}

// Links internos viram "#/rota": funcionam em subpastas (GitHub Pages), em nova aba e abrindo o arquivo direto.
function fixInternalLinks(root) {
  root.querySelectorAll?.('a[href^="/"]:not([href^="//"])').forEach((a) => a.setAttribute('href', `#${a.getAttribute('href')}`));
}
new MutationObserver((list) => {
  for (const m of list) for (const n of m.addedNodes) if (n.nodeType === 1) fixInternalLinks(n.matches?.('a') ? n.parentNode : n);
}).observe(document.documentElement, { childList: true, subtree: true });

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href]');
  if (!a || a.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
  let href = a.getAttribute('href');
  if (href.startsWith('#/')) href = href.slice(1);
  if (!href.startsWith('/') || href.startsWith('//')) return;
  e.preventDefault();
  navigate(href);
});
window.addEventListener('popstate', () => void route());

async function route() {
  const token = ++renderToken;
  cleanup?.();
  cleanup = null;
  document.getElementById('overlays').innerHTML = '';
  const current = currentRoute();
  // Formulário público de chamados: sempre sem login
  if (current.path === '/abrir-chamado') {
    const c = current.query.get('c');
    if (c) {
      try {
        const { u, k } = JSON.parse(atob(c));
        if (!getConfig().fixed) applyConfigOverride({ supabaseUrl: u, supabaseKey: k });
      } catch {
        /* link inválido: segue com a configuração local */
      }
    }
    return renderStandalone('public-ticket');
  }
  if (!state.user && current.path === '/configuracao') return renderStandalone('settings', { setup: true });
  if (!state.user) return renderLogin();
  if (!$('.app')) renderShell();
  highlightNav();
  $('.app')?.classList.remove('mobile-open');

  const root = $('#page');
  const { path, query } = currentRoute();
  const match = ROUTES.map((r) => ({ r, m: r.re.exec(path) })).find((x) => x.m);
  root.scrollTop = 0;
  $('.main').scrollTop = 0;
  if (!match) {
    root.innerHTML = String(emptyState('Página não encontrada', 'O endereço acessado não existe.', 'search-x', html`<a class="btn sm" href="/">Ir para o dashboard</a>`));
    return;
  }
  if (match.r.perm && !can(match.r.perm)) {
    root.innerHTML = String(emptyState('Acesso restrito', 'Seu perfil não tem permissão para acessar esta área.', 'lock', html`<a class="btn sm" href="/">Voltar ao dashboard</a>`));
    return;
  }
  const page = document.createElement('div');
  page.className = 'page';
  root.replaceChildren(page);
  try {
    const render = window.Pages[match.r.page];
    if (token !== renderToken) return;
    const result = await render(page, { params: match.m.slice(1), query });
    if (token === renderToken && typeof result === 'function') cleanup = result;
  } catch (err) {
    console.error(err);
    page.innerHTML = String(emptyState('Erro ao abrir a página', err.message, 'alert-triangle'));
  }
}

// ---------- shell ----------
function renderShell() {
  const collapsed = localStorage.getItem('sh-sidebar') === '1';
  const u = state.user;
  document.getElementById('app').innerHTML = String(html`
    <div class="app ${collapsed ? 'collapsed' : ''}">
      <div class="mobile-backdrop" data-action="close-menu"></div>
      <aside class="sidebar">
        <div class="brand">
          <span class="brand-mark">${ic('shield-check')}</span>
          <div class="brand-text"><p class="brand-name">SystemHub</p><p class="brand-sub">Central de sistemas</p></div>
        </div>
        <nav class="nav">
          ${NAV.filter((n) => !n.perm || can(n.perm)).map((n) => html`<a href="${n.to}" data-nav="${n.to}" title="${n.label}">${ic(n.icon)}<span class="nav-label">${n.label}</span></a>`)}
        </nav>
        <button class="collapse-btn" data-action="collapse" aria-label="Recolher menu">${ic(collapsed ? 'chevrons-right' : 'chevrons-left', 'sm')}<span class="collapse-label">Recolher</span></button>
      </aside>
      <div class="content">
        <header class="topbar">
          <button class="icon-btn menu-btn" data-action="open-menu" aria-label="Abrir menu">${ic('menu')}</button>
          <button class="search-trigger" data-action="palette">${ic('search', 'sm')}<span class="grow st-text">Buscar sistemas, chamados, pessoas…</span><span class="kbd">Ctrl K</span></button>
          <div class="topbar-right">
            <button class="icon-btn" data-action="theme" aria-label="Alternar tema" title="Alternar tema">${ic(document.documentElement.classList.contains('dark') ? 'sun' : 'moon')}</button>
            <div style="position:relative" id="notif-root">
              <button class="icon-btn" data-action="notifications" aria-label="Notificações">${ic('bell')}<span class="dot" id="notif-dot" hidden></span></button>
            </div>
            <div class="user-chip">
              ${avatar(u.name)}
              <div class="who"><p class="name">${u.name}</p><p class="xs muted">${ROLE[u.role].label}</p></div>
              <button class="icon-btn" data-action="logout" aria-label="Sair" title="Sair">${ic('log-out')}</button>
            </div>
          </div>
        </header>
        <main class="main" id="page"></main>
      </div>
    </div>`);

  const app = $('.app');
  app.addEventListener('click', async (e) => {
    const a = e.target.closest('[data-action]');
    if (!a) return;
    switch (a.dataset.action) {
      case 'collapse': {
        const c = app.classList.toggle('collapsed');
        localStorage.setItem('sh-sidebar', c ? '1' : '0');
        a.innerHTML = `${raw(ic(c ? 'chevrons-right' : 'chevrons-left', 'sm'))}<span class="collapse-label">Recolher</span>`;
        break;
      }
      case 'open-menu': app.classList.add('mobile-open'); break;
      case 'close-menu': app.classList.remove('mobile-open'); break;
      case 'theme': {
        const dark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('sh-theme', dark ? 'dark' : 'light');
        a.innerHTML = String(ic(dark ? 'sun' : 'moon'));
        window.dispatchEvent(new Event('themechange'));
        break;
      }
      case 'notifications': toggleNotifications(); break;
      case 'palette': openPalette(); break;
      case 'logout':
        await api.post('/auth/logout').catch(() => undefined);
        state.user = null;
        state.permissions = [];
        navigate('/', { replace: true });
        break;
    }
  });
  refreshNotifications();
}

function highlightNav() {
  const { path } = currentRoute();
  document.querySelectorAll('[data-nav]').forEach((a) => {
    const to = a.dataset.nav;
    a.classList.toggle('active', to === '/' ? path === '/' : path.startsWith(to));
  });
}

// ---------- notificações ----------
let notifTimer;
async function refreshNotifications() {
  clearInterval(notifTimer);
  notifTimer = setInterval(refreshNotifications, 30_000);
  try {
    const d = await api.get('/notifications');
    const dot = $('#notif-dot');
    if (dot) {
      dot.hidden = !d.unread;
      dot.textContent = d.unread > 9 ? '9+' : d.unread;
    }
    return d;
  } catch {
    return null;
  }
}

async function toggleNotifications() {
  const root = $('#notif-root');
  const existing = root.querySelector('.dropdown');
  if (existing) return existing.remove();
  const box = document.createElement('div');
  box.className = 'card dropdown';
  box.innerHTML = '<div class="card-body center"><span class="spinner"></span></div>';
  root.append(box);
  const outside = (e) => {
    if (!root.contains(e.target)) {
      box.remove();
      document.removeEventListener('mousedown', outside);
    }
  };
  document.addEventListener('mousedown', outside);

  const draw = async () => {
    const d = await refreshNotifications();
    if (!d) return void (box.innerHTML = '<div class="card-body muted">Não foi possível carregar.</div>');
    const iconFor = { incident: 'alert-octagon', recovery: 'check-circle', ticket: 'kanban', system: 'layout-grid', info: 'info' };
    box.innerHTML = String(html`
      <div class="card-header" style="align-items:center"><h3>Notificações</h3>
        <button class="btn ghost sm" data-read-all ${d.unread ? '' : raw('disabled')}>${ic('check-check', 'sm')} Marcar todas como lidas</button>
      </div>
      <div style="max-height:380px;overflow-y:auto">
        ${d.items.length ? d.items.map((n) => html`
          <button class="notif ${n.read_at ? '' : 'unread'}" data-id="${n.id}" data-link="${n.link ?? ''}">
            <span style="color:${n.type === 'incident' ? '#f43f5e' : n.type === 'recovery' ? '#10b981' : 'var(--link)'}">${ic(iconFor[n.type] ?? 'info', 'sm')}</span>
            <span class="grow"><span class="${n.read_at ? '' : 'strong'}" style="display:block">${n.title}</span>
              ${n.message ? html`<span class="muted small truncate" style="display:block">${n.message}</span>` : ''}
              <span class="xs muted">${timeAgo(n.created_at)}</span></span>
            ${n.read_at ? '' : html`<span class="ndot"></span>`}
          </button>`) : emptyState('Tudo em dia', 'Você não tem notificações.', 'bell')}
      </div>`);
  };
  await draw();
  box.addEventListener('click', async (e) => {
    if (e.target.closest('[data-read-all]')) {
      await api.post('/notifications/read-all');
      return draw();
    }
    const n = e.target.closest('.notif');
    if (!n) return;
    await api.post(`/notifications/${n.dataset.id}/read`).catch(() => undefined);
    box.remove();
    refreshNotifications();
    if (n.dataset.link) navigate(n.dataset.link);
  });
}

// ---------- busca global (Ctrl+K) ----------
function openPalette() {
  if ($('.palette-wrap')) return;
  const wrap = document.createElement('div');
  wrap.className = 'palette-wrap';
  wrap.innerHTML = String(html`
    <div class="backdrop" data-close></div>
    <div class="card palette">
      <div class="palette-input">${ic('search')}<input placeholder="Busque por nome, tecnologia, categoria, chamado ou pessoa…" aria-label="Busca global" /><span class="spinner sm" hidden></span></div>
      <div class="palette-results"><p class="muted center small" style="padding:24px">Digite ao menos 2 caracteres. A busca ignora acentos e combina palavras.</p></div>
    </div>`);
  document.body.append(wrap);
  const input = wrap.querySelector('input');
  const results = wrap.querySelector('.palette-results');
  const spin = wrap.querySelector('.spinner');
  let items = [];
  let active = 0;
  const close = () => {
    wrap.remove();
    document.removeEventListener('keydown', onKey, true);
  };
  const go = (to) => {
    close();
    navigate(to);
  };
  const paint = () => {
    results.querySelectorAll('.palette-item').forEach((el, i) => el.classList.toggle('on', i === active));
  };
  const search = debounce(async (term) => {
    if (term.trim().length < 2) {
      items = [];
      results.innerHTML = '<p class="muted center small" style="padding:24px">Digite ao menos 2 caracteres. A busca ignora acentos e combina palavras.</p>';
      return;
    }
    spin.hidden = false;
    try {
      const d = await api.get('/search', { q: term });
      items = [
        ...d.systems.map((s) => ({ group: 'Sistemas', to: `/systems/${s.id}`, body: html`${sysIcon(s.icon, s.color, 'sm')}<span class="grow truncate">${s.name} <span class="muted small">· ${s.category}</span></span><span class="status-dot c-${s.status}" title="${STATUS[s.status].label}"></span>` })),
        ...d.tickets.map((t) => ({ group: 'Chamados', to: `/tickets?open=${t.id}`, body: html`${ic('kanban', 'sm')}<span class="grow truncate">#${t.id} ${t.title}</span><span class="muted small">${TICKET_STATUS[t.status].label}</span>` })),
        ...d.people.map((p) => ({ group: 'Responsáveis', to: `/people?highlight=${p.id}`, body: html`${ic('user', 'sm')}<span class="grow truncate">${p.name} <span class="muted small">· ${p.title ?? p.email ?? ''}</span></span>` })),
        ...(d.clients ?? []).map((c) => ({ group: 'Clientes', to: `/clients?open=${c.id}`, body: html`${ic('briefcase', 'sm')}<span class="grow truncate">${c.name} <span class="muted small">· ${c.document ?? c.contact_name ?? ''}</span></span>` })),
      ];
      active = 0;
      results.innerHTML = items.length
        ? items.map((it, i) => `${i === 0 || items[i - 1].group !== it.group ? `<p class="palette-group">${esc(it.group)}</p>` : ''}<button class="palette-item" data-i="${i}">${it.body}</button>`).join('')
        : `<p class="muted center small" style="padding:24px">Nenhum resultado para “${esc(term)}”.</p>`;
      paint();
    } finally {
      spin.hidden = true;
    }
  }, 200);
  const onKey = (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, items.length - 1); paint(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); paint(); }
    else if (e.key === 'Enter') {
      if (items[active]) go(items[active].to);
      else if (input.value.trim()) go(`/systems?q=${encodeURIComponent(input.value.trim())}`);
    }
  };
  document.addEventListener('keydown', onKey, true);
  input.addEventListener('input', () => search(input.value));
  wrap.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return close();
    const b = e.target.closest('.palette-item');
    if (b) go(items[Number(b.dataset.i)].to);
  });
  wrap.addEventListener('mousemove', (e) => {
    const b = e.target.closest('.palette-item');
    if (b && Number(b.dataset.i) !== active) { active = Number(b.dataset.i); paint(); }
  });
  input.focus();
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && state.user) {
    e.preventDefault();
    openPalette();
  }
});

// ---------- login ----------
function renderLogin() {
  window.Pages.login(document.getElementById('app'), {
    onLogin: (r) => {
      state.user = r.user;
      state.permissions = r.permissions;
      startMonitor();
      navigate('/', { replace: true });
    },
  });
}

setUnauthorizedHandler(() => {
  if (!state.user) return;
  state.user = null;
  state.permissions = [];
  route();
});

// ---------- inicialização ----------
(async function boot() {
  try {
    const r = await api.get('/auth/me');
    if (r.user) {
      state.user = r.user;
      state.permissions = r.permissions;
      startMonitor();
    }
  } catch {
    /* não autenticado */
  }
  route();
})();
