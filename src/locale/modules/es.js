import locale from 'element-plus/dist/locale/es.mjs';

const lang = {
  el: locale.es, // Configuración de i18n de element-plus
  message: {
    language: 'español',
    common: {
      search: 'buscar',
      searchTip: 'por favor, ingrese una palabra clave',
      add: 'agregar',
      update: 'actualizar',
      del: 'eliminar',
      delBat: 'eliminar seleccionados',
      delTip: '¿Está seguro de eliminar los datos seleccionados?',
      handle: 'manejar',
      exportExcel: 'exportar a Excel',
      exportExcelTip: 'por favor, ingrese el nombre del archivo'
    },
    menu: {
      dashboard: {
        name: 'panel de control',
        index: 'índice'
      },
      system: {
        name: 'sistema',
        redirect: 'redireccionar',
        '404': '404',
        '401': '401'
      },
    },
    system: {
      title: 'sistema de administración',
      subTitle: 'unas pocas líneas para crear un hermoso administrador',
      welcome: 'bienvenido al inicio de sesión',
      login: 'iniciar sesión',
      userName: 'nombre de usuario',
      password: 'contraseña',
      contentScreen: 'pantalla completa de contenido',
      fullScreen: 'pantalla completa',
      fullScreenBack: 'volver a pantalla completa',
      github: 'visitar GitHub',
      changePassword: 'cambiar contraseña',
      loginOut: 'cerrar sesión',
      user: 'administrador',
      size: {
        default: 'predeterminado',
        large: 'grande',
        small: 'pequeño'
      },
      setting: {
        name: 'configuración',
        style: {
          name: 'ajuste de estilo completo',
          default: 'estilo de menú predeterminado',
          light: 'estilo de menú claro',
          chinese: 'estilo de menú chino',
          dark: 'estilo de menú oscuro'
        },
        primaryColor: {
          name: 'color principal',
          blue: 'azul predeterminado',
          red: 'rojo rosado',
          violet: 'violeta graciosa',
          green: 'verde de la historia',
          cyan: 'cian',
          black: 'negro para geeks'
        },
        other: {
          name: 'otra configuración',
          showLogo: 'mostrar logotipo',
          showBreadcrumb: 'mostrar ruta de navegación',
          keepOnlyOneMenu: 'mantener solo un menú abierto'
        }
      },
      tab: {
        reload: 'actualizar',
        closeAll: 'cerrar todas las etiquetas',
        closeOther: 'cerrar otras etiquetas',
        closeCurrent: 'cerrar etiqueta actual'
      }
    }
  }
};

export default lang;
