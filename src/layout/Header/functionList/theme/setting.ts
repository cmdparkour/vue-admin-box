interface Colors {
  menu: {
    textColor: string,
    backgroundColor: string
  }
  logo: {
    color: string,
    backgroundColor: string
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
      backgroundColor: '#28415a'
    },
    logo: {
      color: '#f1f1f1',
      backgroundColor: '#263445'
    },
    header: {

    },
    container: {

    }
  },
  'light': {
    menu: {
      textColor: '#000',
      backgroundColor: '#fff'
    },
    logo: {
      color: '#000',
      backgroundColor: '#fff'
    },
    header: {

    },
    container: {

    }
  },
  'dark': {
    menu: {
      textColor: '#bfcbd9',
      backgroundColor: '#18181c'
    },
    logo: {
      color: '#fff',
      backgroundColor: '#18181c'
    },
    header: {
      color: '#fff',
      backgroundColor: '#18181c'
    },
    container: {
      backgroundColor: '#101014'
    }
  }
}