// 百度统计代码，需自行更换
export function baidu() {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.text = `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?bd78bc908e66174e7dde385bf37cb4c1";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  `
  document.getElementsByTagName('head')[0].appendChild(script)
}