import locale from 'element-plus/dist/locale/ja.mjs'

const lang = {
  el: locale.el, // element-plus i18 setting
  message: {
    language: '日本語',
    common: {
      search: '検索',
      searchTip: 'キーワードを入力してください',
      add: '追加',
      update: '更新',
      del: '削除',
      delBat: '選択した項目を削除',
      delTip: '選択したデータを削除してもよろしいですか？',
      handle: '操作',
      exportExcel: 'Excelにエクスポート',
      exportExcelTip: 'ファイル名を入力してください'
    },
    menu: {
      dashboard: {
        name: 'ダッシュボード',
        index: 'インデックス'
      },
      system: {
        name: 'システム',
        redirect: 'リダイレクト',
        '404': '404エラー',
        '401': '401エラー'
      },
    },
    system: {
      title: 'バックエンドシステム',
      subTitle: '美しい管理画面を書くためのわずかな行数',
      welcome: 'ログインへようこそ',
      login: 'ログイン',
      userName: 'ユーザー名',
      password: 'パスワード',
      contentScreen: 'コンテンツ全画面表示',
      fullScreen: '全画面表示',
      fullScreenBack: '全画面表示を終了',
      github: 'GitHubを訪問',
      changePassword: 'パスワードの変更',
      loginOut: 'ログアウト',
      user: '管理者',
      size: {
        default: 'デフォルト',
        large: 'ラージ',
        small: 'スモール',
      },
      setting: {
        name: '設定',
        style: {
          name: 'フルスタイル設定',
          default: 'デフォルトメニュースタイル',
          light: 'ライトメニュースタイル',
          chinese: '中国風メニュースタイル',
          dark: 'ダークメニュースタイル'
        },
        primaryColor: {
          name: 'プライマリーカラー',
          blue: 'デフォルトの青',
          red: 'ローズレッド',
          violet: 'グレイスバイオレット',
          green: 'ストーリーグリーン',
          cyan: 'シアン',
          black: 'ギークブラック'
        },
        other: {
          name: 'その他の設定',
          showLogo: 'ロゴを表示',
          showBreadcrumb: 'パンくずリストを表示',
          keepOnlyOneMenu: 'メニューを1つだけ開いたままにする',
        }
      },
      tab: {
        reload: 'リロード',
        closeAll: 'すべてのタグを閉じる',
        closeOther: '他のタグを閉じる',
        closeCurrent: '現在のタグを閉じる'
      }
    },
  }
}

export default lang
