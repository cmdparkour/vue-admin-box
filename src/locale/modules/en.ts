import locale from 'element-plus/dist/locale/en.mjs'

const lang = {
  el: locale.el, // element-plus i18 setting
  message: {
    language: 'English',
    common: {
      search: 'search',
      searchTip: 'please input keyword',
      add: 'add',
      update: 'update',
      del: 'delete',
      delBat: 'delete choose',
      delTip: 'Are you sure delete the selection data ?',
      handle: 'handle',
      exportExcel:'export excel',
      exportExcelTip:'please input file name'
    },
    menu: {
      dashboard: {
        name: 'dashboard',
        index: 'index'
      },
      system: {
        name: 'system',
        redirect: 'redirect',
        '404': '404',
        '401': '401'
      },
    },
    system: {
      title: 'backendsystem',
      subTitle: 'few lines to write beautiful admin',
      welcome: 'welcome login',
      login: 'login',
      userName: 'userName',
      password: 'password',
      contentScreen: 'content full screen',
      fullScreen: 'fullscreen',
      fullScreenBack: 'back fullscreen',
      github: 'visit github',
      changePassword: 'change password',
      loginOut: 'login out',
      user: 'admin',
      size: {
        default: 'default',
        large: 'large',
        small: 'small',
      },
      setting: {
        name: 'setting',
        style: {
          name: 'full style setting',
          default: 'default menu style',
          light: 'light menu style',
          chinese: 'chinese menu style',
          dark: 'dark menu style'
        },
        primaryColor: {
          name: 'primary color',
          blue: 'default blue',
          red: 'rose red',
          violet: 'grace violet',
          green: 'story green',
          cyan: 'cyan',
          black: 'geek black'
        },
        other: {
          name: 'other setting',
          showLogo: 'show logo',
          showBreadcrumb: 'show breadcrumb',
          keepOnlyOneMenu: 'keep only one menu open',
        }
      },
      tab: {
        reload: 'refresh',
        closeAll: 'close all tags',
        closeOther: 'close other tags',
        closeCurrent: 'close current tag'
      }
    },
  }
}

export default lang