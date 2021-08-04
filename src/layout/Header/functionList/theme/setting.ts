interface Colors {
  menu: {
    textColor: string,
    background: string,
    childrenBackground: string,
    hoverBackground: string,
    submenuActiveColor: string
  }
  logo: {
    color: string,
    background: string
  }
  header: {

  }
  container: {

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

    },
    container: {

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

    },
    container: {

    }
  },
  'dark': {
    menu: {
      textColor: '#28415a',
      background: '#28415a',
      childrenBackground: '#1f2d3d',
      hoverBackground: '#203448'
    },
    logo: {
      color: '#fff',
      background: '#18181c'
    },
    header: {
      
    },
    container: {
      
    }
  }
}