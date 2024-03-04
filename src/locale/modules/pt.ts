import locale from 'element-plus/dist/locale/pt.mjs'

const lang = {
  el: locale.el, // Configuração de i18n do Element Plus
  message: {
    language: 'Português',
    common: {
      search: 'pesquisar',
      searchTip: 'por favor, insira uma palavra-chave',
      add: 'adicionar',
      update: 'atualizar',
      del: 'apagar',
      delBat: 'apagar escolhidos',
      delTip: 'Tem certeza de que deseja apagar os dados selecionados?',
      handle: 'manipular',
      exportExcel: 'exportar Excel',
      exportExcelTip: 'por favor, insira o nome do arquivo'
    },
    menu: {
      dashboard: {
        name: 'painel',
        index: 'índice'
      },
      system: {
        name: 'sistema',
        redirect: 'redirecionar',
        '404': '404',
        '401': '401'
      },
      component: {
        name: 'componente',
        button: 'botão',
        wordEditor: 'editor de texto',
        mdEditor: 'editor de Markdown',
        codeEditor: 'editor de código',
        jsonEditor: 'editor JSON',
        dragPane: 'painel arrastável',
        map: 'mapa',
        cutPhoto: 'recortar foto',
        rightMenu: 'menu de contexto',
        exportExcel: 'exportar Excel'
      },
      page: {
        name: 'página',
        crudTable: 'tabela CRUD',
        categoryTable: 'tabela de categorias',
        treeTable: 'tabela de árvore',
        card: 'cartão',
        work: 'trabalho',
        baidu: 'caso iframe',
        jump: 'abrir em nova janela'
      },
      menu: {
        name: 'menu',
        menu_1: 'menu 1',
        menu_1_1: 'menu 1.1',
        menu_1_1_1: 'menu 1.1.1',
        menu_1_1_2: 'menu 1.1.2',
        menu_1_2: 'menu 1.2',
        menu_2: 'menu 2',
        menu_3: 'menu 3'
      },
      directive: {
        name: 'diretiva',
        dragable: 'v-dragable',
        copy: 'v-copy',
        waterMarker: 'v-waterMarker',
        longpress: 'v-longpress',
        debounce: 'v-debounce',
        scroll: 'v-infinite-scroll',
        clickOutside: 'v-click-outside',
      },
      echarts: {
        name: 'echarts',
        bar: 'gráfico de barras',
        line: 'gráfico de linhas',
        pie: 'gráfico de pizza',
        radar: 'gráfico radar',
        map: 'mapa',
      },
      systemManage: {
        name: 'gerenciamento do sistema',
        menu: 'menu',
        role: 'função',
        user: 'usuário'
      },
      print: {
        name: 'imprimir',
        jsPrint: 'imprimir em JavaScript'
      },
      community: {
        name: 'comunidade',
        qq: 'grupo do QQ',
        site: 'recursos Vue3'
      },
      document: {
        name: 'documento',
        intro: 'introdução',
        function: 'função',
        menu: 'menus de rota personalizada',
        keepAlive: 'como usar keepAlive',
        crud: 'tabela e formulário CRUD',
        theme: 'como personalizar seu tema',
        systemfont: 'ícone no projeto',
        api: 'documento de API'
      },
      tab: {
        name: 'abas',
      },
    },
    system: {
      title: 'sistema backend',
      subTitle: 'algumas linhas para criar um painel bonito',
      welcome: 'bem-vindo ao login',
      login: 'login',
      userName: 'nome de usuário',
      password: 'senha',
      contentScreen: 'tela cheia de conteúdo',
      fullScreen: 'tela cheia',
      fullScreenBack: 'voltar à tela cheia',
      github: 'visitar GitHub',
      changePassword: 'mudar senha',
      loginOut: 'sair do login',
      user: 'admin',
      size: {
        default: 'padrão',
        large: 'grande',
        small: 'pequeno',
      },
      setting: {
        name: 'configuração',
        style: {
          name: 'configuração de estilo completa',
          default: 'estilo de menu padrão',
          light: 'estilo de menu claro',
          chinese: 'estilo de menu chinês',
          dark: 'estilo de menu escuro'
        },
        primaryColor: {
          name: 'cor primária',
          blue: 'azul padrão',
          red: 'vermelho rosa',
          violet: 'violeta graciosa',
          green: 'verde história',
          cyan: 'ciano',
          black: 'preto geek'
        },
        other: {
          name: 'outras configurações',
          showLogo: 'mostrar logotipo',
          showBreadcrumb: 'mostrar trilha de navegação',
          keepOnlyOneMenu: 'manter apenas um menu aberto',
        }
      },
      tab: {
        reload: 'atualizar',
        closeAll: 'fechar todas as abas',
        closeOther: 'fechar outras abas',
        closeCurrent: 'fechar aba atual'
      }
    },
  }
}

export default lang
