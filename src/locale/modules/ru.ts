import ruLocale from 'element-plus/dist/locale/ru.mjs'

const lang = {
  el: ruLocale.el, // настройки i18 элемента плюс
  message: {
    language: 'Русский',
    common: {
      search: 'поиск',
      searchTip: 'введите ключевое слово',
      add: 'добавить',
      update: 'обновить',
      del: 'удалить',
      delBat: 'удалить выбор',
      delTip: 'Вы уверены, что хотите удалить выбранные данные?',
      handle: 'обработка',
      exportExcel: 'экспорт в Excel',
      exportExcelTip: 'введите имя файла'
    },
    menu: {
      dashboard: {
        name: 'панель приборов',
        index: 'индекс'
      },
      system: {
        name: 'система',
        redirect: 'перенаправление',
        '404': '404',
        '401': '401'
      },
      component: {
        name: 'компонент',
        button: 'кнопка',
        wordEditor: 'текстовый редактор',
        mdEditor: 'md редактор',
        codeEditor: 'редактор кода',
        jsonEditor: 'JSON редактор',
        dragPane: 'перетаскиваемая панель',
        map: 'карта',
        cutPhoto: 'обрезка фото',
        rightMenu: 'правое меню',
        exportExcel: 'экспорт в Excel'
      },
      page: {
        name: 'страница',
        crudTable: 'таблица CRUD',
        categoryTable: 'таблица категорий',
        treeTable: 'деревянная таблица',
        card: 'карточка',
        work: 'работа',
        baidu: 'iframe случай',
        jump: 'переход в новое окно'
      },
      menu: {
        name: 'меню',
        menu_1: 'меню-1',
        menu_1_1: 'меню-1-1',
        menu_1_1_1: 'меню-1-1-1',
        menu_1_1_2: 'меню-1-1-2',
        menu_1_2: 'меню-1-2',
        menu_2: 'меню-2',
        menu_3: 'меню-3'
      },
      directive: {
        name: 'директива',
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
        bar: 'столбчатая диаграмма',
        line: 'линейная диаграмма',
        pie: 'круговая диаграмма',
        radar: 'радарная диаграмма',
        map: 'карта'
      },
      systemManage: {
        name: 'управление системой',
        menu: 'меню',
        role: 'роль',
        user: 'пользователь'
      },
      print: {
        name: 'печать',
        jsPrint: 'печать в JS'
      },
      community: {
        name: 'сообщество',
        qq: 'qqGroup',
        site: 'ресурс Vue3'
      },
      document: {
        name: 'документ',
        intro: 'введение',
        function: 'функция',
        menu: 'меню DIY маршрута',
        keepAlive: 'как использовать keepAlive',
        crud: 'таблица и форма CRUD',
        theme: 'как DIY вашу тему',
        systemfont: 'значок в проекте',
        api: 'документ API'
      },
      tab: {
        name: 'вкладка',
      },
    },
    system: {
      title: 'система управления',
      subTitle: 'несколько строк для написания красивого администратора',
      welcome: 'добро пожаловать на страницу входа',
      login: 'вход',
      userName: 'имя пользователя',
      password: 'пароль',
      contentScreen: 'полноэкранный режим контента',
      fullScreen: 'полноэкранный режим',
      fullScreenBack: 'выйти из полноэкранного режима',
      github: 'посетить GitHub',
      changePassword: 'изменить пароль',
      loginOut: 'выйти из системы',
      user: 'администратор',
      size: {
        default: 'по умолчанию',
        large: 'большой',
        small: 'маленький',
      },
      setting: {
        name: 'настройка',
        style: {
          name: 'полный стиль меню',
          default: 'стандартный стиль меню',
          light: 'светлый стиль меню',
          chinese: 'китайский стиль меню',
          dark: 'темный стиль меню'
        },
        primaryColor: {
          name: 'основной цвет',
          blue: 'стандартный синий',
          red: 'розовый',
          violet: 'фиолетовый',
          green: 'зеленый',
          cyan: 'голубой',
          black: 'черный'
        },
        other: {
          name: 'другие настройки',
          showLogo: 'показать логотип',
          showBreadcrumb: 'показать хлебные крошки',
          keepOnlyOneMenu: 'открыть только одно меню',
        }
      },
      tab: {
        reload: 'обновить',
        closeAll: 'закрыть все вкладки',
        closeOther: 'закрыть другие вкладки',
        closeCurrent: 'закрыть текущую вкладку'
      }
    },
  }
}

export default lang
