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
