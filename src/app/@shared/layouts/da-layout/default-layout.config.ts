import { DaLayoutConfig } from './da-layout.type';

export const DEFAULT_LAYOUT_CONFIG: DaLayoutConfig = {
  id: 'sidebar',
  mode: 'headerTop',
  header: {
    fixed: true,
    firHeader: {
      height: 60
    },
    secHeader: {
      hidden: true
    },
    hidden: false
  },
  sidebar: {
    fixed: true,
    firSidebar: {
      width: 240,
      hidden: false
    },
    secSidebar: {
      hidden: true
    },
    shrink: false,
    hidden: false
  },
  footer: {
    hidden: false
  },
  hideLogo: false
};
