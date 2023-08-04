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
