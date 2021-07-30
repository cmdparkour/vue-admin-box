interface Colors {
  menuTextColor: string
  menuBackgroundColor: string
  logoBackGroundColor: string
  logoColor: string
}

export interface Style {
  default: Colors
  light: Colors
  dark: Colors,
  [propName: string]: Colors
}
export const style: Style = {
  'default': {
    menuTextColor: '#bfcbd9',
    menuBackgroundColor: '#28415a',
    logoBackGroundColor: '#263445',
    logoColor: '#f1f1f1'
  },
  'light': {
    menuTextColor: '#bfcbd9',
    menuBackgroundColor: '#28415a',
    logoBackGroundColor: '#fff',
    logoColor: '#000'
  },
  'dark': {
    menuTextColor: '#bfcbd9',
    menuBackgroundColor: '#28415a',
    logoBackGroundColor: '#fff',
    logoColor: '#000'
  }
}