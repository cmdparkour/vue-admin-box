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
      component: {
        name: 'componente',
        button: 'botón',
        wordEditor: 'editor de texto',
        mdEditor: 'editor de markdown',
        codeEditor: 'editor de código',
        jsonEditor: 'editor de JSON',
        dragPane: 'panel arrastrable',
        map: 'mapa',
        cutPhoto: 'recortar foto',
        rightMenu: 'menú derecho',
        exportExcel: 'exportar a Excel'
      },
      page: {
        name: 'página',
        crudTable: 'tabla CRUD',
        categoryTable: 'tabla de categorías',
        treeTable: 'tabla jerárquica',
        card: 'tarjeta',
        work: 'trabajo',
        baidu: 'caso de iframe',
        jump: 'abrir en nueva ventana'
      },
      menu: {
        name: 'menú',
        menu_1: 'menú-1',
        menu_1_1: 'menú-1-1',
        menu_1_1_1: 'menú-1-1-1',
        menu_1_1_2: 'menú-1-1-2',
        menu_1_2: 'menú-1-2',
        menu_2: 'menú-2',
        menu_3: 'menú-3'
      },
      directive: {
        name: 'directiva',
        dragable: 'v-dragable',
        copy: 'v-copy',
        waterMarker: 'v-waterMarker',
        longpress: 'v-longpress',
        debounce: 'v-debounce',
        scroll: 'v-infinite-scroll',
        clickOutside: 'v-click-outside'
      },
      echarts: {
        name: 'echarts',
        bar: 'gráfico de barras',
        line: 'gráfico de líneas',
        pie: 'gráfico circular',
        radar: 'gráfico radar',
        map: 'mapa'
      },
      systemManage: {
        name: 'gestión del sistema',
        menu: 'menú',
        role: 'rol',
        user: 'usuario'
      },
      print: {
        name: 'imprimir',
        jsPrint: 'imprimir en JS'
      },
      community: {
        name: 'comunidad',
        qq: 'grupo de QQ',
        site: 'recursos de Vue 3'
      },
      document: {
        name: 'documento',
        intro: 'introducción',
        function: 'función',
        menu: 'menús de rutas personalizadas',
        keepAlive: 'cómo usar keepAlive',
        crud: 'tabla y formulario CRUD',
        theme: 'cómo personalizar tu tema',
        systemfont: 'icono en el proyecto',
        api: 'documento de API'
      },
      tab: {
        name: 'pestaña'
      }
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
