const themeLoader = `!function(){function e(e){window.__APP_THEME=e,t=e,document.body.className=e,window.__onAfterThemeChange(e)}var t;window.__onAfterThemeChange=function(){};try{t=localStorage.getItem("theme")}catch(e){}window.__setTheme=function(t){e(t);try{localStorage.setItem("theme",t)}catch(e){}};var n=window.matchMedia("(prefers-color-scheme: dark)");n.addEventListener("onload",function(e){window.__setTheme(e.matches?"dark":"light")}),e(t||(n.matches?"dark":"light"))}();`;

export default themeLoader;
