
export interface Colors {
  menu: {
    textColor: string
    background: string
    childrenBackground: string
    hoverBackground: string
    submenuActiveColor: string
  }
  logo: {
    color: string
    background: string
  }
  header: {
    background: string
    textColor: string
    itemHoverColor: string
    breadcrumbTextColor: string
    borderColor: string
    tabBackground: string
  }
  container: {
    background: string
    mainBackground: string
  }
  page: {
    background: string
    color: string
    tipColor: string
    borderColor: string
  }
}

export interface Style {
  default: Colors
  light: Colors
  dark: Colors,
  [propName: string]: Colors
}
export const style: Style = {
  'default': {
    menu: {
      textColor: '#bfcbd9',
      background: '#28415a',
      childrenBackground: '#1f2d3d',
      hoverBackground: '#203448',
      submenuActiveColor: '#fff'
    },
    logo: {
      color: '#f1f1f1',
      background: '#263445'
    },
    header: {
      background: '#fff',
      textColor: '#303133',
      itemHoverColor: 'rgba(0,0,0,.025)',
      breadcrumbTextColor: '#606266',
      borderColor: '#d8dce5',
      tabBackground: '#fff'
    },
    container: {
      background: '#f0f2f5',
      mainBackground: '#fff'
    },
    page: {
      background: '#fff',
      color: '#303133',
      tipColor: 'rgba(0, 0, 0, 0.45)',
      borderColor: '#ebeef5'
    }
  },
  'light': {
    menu: {
      textColor: '#272727',
      background: '#fff',
      childrenBackground: '#fff',
      hoverBackground: '#f1f1f1',
      submenuActiveColor: 'var(--system-primary-color)'
    },
    logo: {
      color: '#000',
      background: '#fff'
    },
    header: {
      background: '#fff',
      textColor: '#303133',
      itemHoverColor: 'rgba(0,0,0,.025)',
      breadcrumbTextColor: '#606266',
      borderColor: '#d8dce5',
      tabBackground: '#fff'
    },
    container: {
      background: '#f0f2f5',
      mainBackground: '#fff'
    },
    page: {
      background: '#fff',
      color: '#303133',
      tipColor: 'rgba(0, 0, 0, 0.45)',
      borderColor: '#ebeef5'
    }
  },
  'dark': {
    menu: {
      textColor: '#bbb',
      background: '#18181c',
      childrenBackground: '#18181c',
      hoverBackground: '#000',
      submenuActiveColor: '#fff'
    },
    logo: {
      color: '#fff',
      background: '#18181c'
    },
    header: {
      background: '#18181c',
      textColor: '#e3e3e4',
      itemHoverColor: '#000',
      breadcrumbTextColor: '#fff',
      borderColor: '#3e3e3e',
      tabBackground: '#1b1b1b'
    },
    container: {
      background: '#000',
      mainBackground: '#18181c'
    },
    page: {
      background: '#18181c',
      color: '#c7c7c7',
      tipColor: 'rgba(255, 255, 255, 0.45)',
      borderColor: '#3e3e3e'
    }
  }
}