(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3niX":function(s,a,e){"use strict";a.__esModule=!0,a.flush=function(){var s=c.cssRules();return c.flush(),s},a.default=void 0;var t,i=e("q1tI");var c=new(((t=e("SevZ"))&&t.__esModule?t:{default:t}).default),l=function(s){var a,e;function t(a){var e;return(e=s.call(this,a)||this).prevProps={},e}e=s,(a=t).prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e,t.dynamic=function(s){return s.map((function(s){var a=s[0],e=s[1];return c.computeId(a,e)})).join(" ")};var i=t.prototype;return i.shouldComponentUpdate=function(s){return this.props.id!==s.id||String(this.props.dynamic)!==String(s.dynamic)},i.componentWillUnmount=function(){c.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&c.remove(this.prevProps),c.add(this.props),this.prevProps=this.props),null},t}(i.Component);a.default=l},"9kyW":function(s,a,e){"use strict";s.exports=function(s){for(var a=5381,e=s.length;e;)a=33*a^s.charCodeAt(--e);return a>>>0}},MX0m:function(s,a,e){s.exports=e("3niX")},RNiq:function(s,a,e){"use strict";e.r(a);var t=e("ln6h"),i=e.n(t),c=e("0iUn"),l=e("sLSF"),p=e("MI3g"),o=e("a7VT"),n=e("Tit0"),r=e("q1tI"),m=e.n(r),h=e("8Kt/"),g=e.n(h),d=e("B1Ei"),u=e("f+GR"),N=m.a.createElement,f=function(s){function a(){return Object(c.a)(this,a),Object(p.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(n.a)(a,s),Object(l.a)(a,[{key:"render",value:function(){var s="A dark theme for Atom, Alfred, Brackets, Emacs, iTerm, Mintty, Notepad++, Slack, Sequel Pro, Sublime Text, Telegram, Textmate, Terminal.app, Ulysses, Vim, Visual Studio Code, Wox, Xcode, and Zsh";return N("div",null,N(g.a,null,N("meta",{charSet:"utf-8"}),N("title",null,"Dracula"," \u2014 ",s),N("meta",{content:"Dracula",property:"og:title"}),N("meta",{content:s,name:"description"}),N("meta",{content:s,property:"og:description"}),N("meta",{content:"Zeno Rocha",name:"author"}),N("meta",{content:"https://draculatheme.com",property:"og:url"}),N("meta",{content:"https://draculatheme.com/static/img/facebook.png",property:"og:image"})),N("main",null,N("div",{className:"row around-xs"},N("h2",{className:"category-title cyan tilt-right"},"Featured")),N("div",{className:"row around-xs"},N("a",{href:"/notepad-plus-plus/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Notepad++")),N("a",{href:"/iterm/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"iTerm")),N("a",{href:"/visual-studio-code/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Visual Studio Code"))),N("div",{style:{backgroundColor:"#2a2c37",marginRight:"-2rem",marginLeft:"-2rem",marginBottom:"80px",padding:"30px 0 60px"}},N(u.a,null)),N("div",{className:"row around-xs"},N("h2",{className:"category-title orange tilt-left"},"Code Editors")),N("div",{className:"row around-xs"},N("a",{href:"/vim/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Vim")),N("a",{href:"/sublime/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"Sublime")),N("a",{href:"/xcode/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Xcode"))),N("div",{className:"row around-xs"},N("a",{href:"/atom/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Atom")),N("a",{href:"/visual-studio-code/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Visual Studio Code")),N("a",{href:"/emacs/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"Emacs"))),N("div",{className:"row around-xs"},N("a",{href:"/notepad-plus-plus/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Notepad++")),N("a",{href:"/jetbrains/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"JetBrains")),N("a",{href:"/visual-studio/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"Visual Studio"))),N("div",{className:"row around-xs"},N("a",{href:"/coda/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Coda")),N("a",{href:"/brackets/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"Brackets")),N("a",{href:"/light-table/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Light Table"))),N("div",{className:"row around-xs"},N("a",{href:"/textmate/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"TextMate")),N("a",{href:"/gedit/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"Gedit")),N("a",{href:"/pythonista/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Pythonista"))),N("div",{className:"row around-xs"},N("a",{href:"/arduino-ide/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Arduino IDE")),N("a",{href:"/coteditor/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"CotEditor")),N("a",{href:"/geany/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Geany"))),N("div",{className:"row around-xs"},N("a",{href:"/lightpaper/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"LightPaper")),N("a",{href:"/monodevelop/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"MonoDevelop")),N("a",{href:"/qtcreator/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Qt Creator"))),N("div",{className:"row around-xs"},N("a",{href:"/bbedit/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"BBEdit")),N("a",{href:"/editplus/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Editplus")),N("a",{href:"/gamemaker-studio/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"GameMaker Studio"))),N("div",{className:"row around-xs"},N("a",{href:"/kate/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Kate")),N("a",{href:"/jupyterlab/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"JupyterLab")),N("a",{href:"/wing/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/coffin.png",width:"200",height:"197",alt:"Broom"})),N("h3",{className:"app-title cyan"},"Wing"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title purple tilt-right"},"Terminal")),N("div",{className:"row around-xs"},N("a",{href:"/iterm/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"iTerm")),N("a",{href:"/hyper/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Hyper")),N("a",{href:"/zsh/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Zsh"))),N("div",{className:"row around-xs"},N("a",{href:"/windows-terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"Windows Terminal")),N("a",{href:"/tilix/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"Tilix")),N("a",{href:"/termux/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Termux"))),N("div",{className:"row around-xs"},N("a",{href:"/terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Terminal.app")),N("a",{href:"/mintty/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/coffin.png",width:"200",height:"197",alt:"Broom"})),N("h3",{className:"app-title cyan"},"Mintty")),N("a",{href:"/mutt/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Mutt"))),N("div",{className:"row around-xs"},N("a",{href:"/kitty/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"Kitty")),N("a",{href:"/gnome-terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title orange"},"Gnome Terminal")),N("a",{href:"/mobaxterm/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"MobaXterm"))),N("div",{className:"row around-xs"},N("a",{href:"/konsole/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Konsole")),N("a",{href:"/conemu/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/hat-magic.png",width:"237",height:"196",alt:"Magic Hat"})),N("h3",{className:"app-title purple"},"ConEmu")),N("a",{href:"/xresources/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Xresources"))),N("div",{className:"row around-xs"},N("a",{href:"/alacritty/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"Alacritty")),N("a",{href:"/cmder/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Cmder")),N("a",{href:"/fish/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Fish"))),N("div",{className:"row around-xs"},N("a",{href:"/powershell/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"PowerShell")),N("a",{href:"/fluent-terminal/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Fluent Terminal")),N("a",{href:"/termite/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Termite"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title cyan tilt-left"},"Syntax Highlight")),N("div",{className:"row around-xs"},N("a",{href:"https://github.com/codemirror/CodeMirror/blob/master/theme/dracula.css",target:"_blank",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"CodeMirror")),N("a",{href:"/highlightjs/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"Highlight.js")),N("a",{href:"/pygments/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"Pygments"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title purple tilt-right"},"Messaging")),N("div",{className:"row around-xs"},N("a",{href:"/slack/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"Slack")),N("a",{href:"/telegram/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Telegram Desktop")),N("a",{href:"/telegram-android/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Telegram Android"))),N("div",{className:"row around-xs"},N("a",{href:"/facebook-messenger/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Facebook Messenger")),N("a",{href:"/limechat/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"LimeChat")),N("a",{href:"/textual/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Textual"))),N("div",{className:"row around-xs"},N("a",{href:"/mattermost/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Mattermost")),N("a",{href:"/quassel/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Quassel")),N("a",{href:"/xchat/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"XChat"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title orange tilt-left"},"Notes")),N("div",{className:"row around-xs"},N("a",{href:"/bear/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"Bear")),N("a",{href:"/ulysses/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/glass.png",width:"174",height:"204",alt:"Glass"})),N("h3",{className:"app-title orange"},"Ulysses")),N("a",{href:"/macdown/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"MacDown"))),N("div",{className:"row around-xs"},N("a",{href:"/typora/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Typora")),N("a",{href:"/quiver/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/moon.png",width:"168",height:"168",alt:"Moon"})),N("h3",{className:"app-title orange"},"Quiver"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title cyan tilt-right"},"Launchers")),N("div",{className:"row around-xs"},N("a",{href:"/alfred/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/hat-magic.png",width:"237",height:"196",alt:"Magic Hat"})),N("h3",{className:"app-title purple"},"Alfred")),N("a",{href:"/ulauncher/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"Ulauncher")),N("a",{href:"/wox/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Wox"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title purple tilt-left"},"Browsers & Extensions")),N("div",{className:"row around-xs"},N("a",{href:"/chrome/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Chrome")),N("a",{href:"/firefox/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/coffin.png",width:"200",height:"197",alt:"Broom"})),N("h3",{className:"app-title cyan"},"Firefox")),N("a",{href:"/duckduckgo/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/broom.png",width:"186",height:"202",alt:"Broom"})),N("h3",{className:"app-title purple"},"DuckDuckGo"))),N("div",{className:"row around-xs"},N("a",{href:"/react-devtools/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"React DevTools")),N("a",{href:"/qutebrowser/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"Qutebrowser")),N("a",{href:"/vimium/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/pumpkin.png",width:"198",height:"182",alt:"Pumpkin"})),N("h3",{className:"app-title orange"},"Vimium"))),N("div",{className:"row around-xs"},N("a",{href:"/vivaldi/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/bat.png",width:"222",height:"158",alt:"Bat"})),N("h3",{className:"app-title cyan"},"Vivaldi"))),N("div",{className:"row around-xs"},N("h2",{className:"category-title orange tilt-right"},"Miscellaneous")),N("div",{className:"row around-xs"},N("a",{href:"/base16/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/skull.png",width:"198",height:"182",alt:"Skull"})),N("h3",{className:"app-title cyan"},"Base16")),N("a",{href:"/blender/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"Blender")),N("a",{href:"/couscous/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/frankenstein.png",width:"175",height:"150",alt:"Frankenstein"})),N("h3",{className:"app-title pink"},"Couscous"))),N("div",{className:"row around-xs"},N("a",{href:"/gitk/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/axe.png",width:"198",height:"174",alt:"Axe"})),N("h3",{className:"app-title cyan"},"Gitk")),N("a",{href:"/gmk/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cauldron.png",width:"198",height:"184",alt:"Cauldron"})),N("h3",{className:"app-title purple"},"GMK")),N("a",{href:"/sequel-pro/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Sequel Pro"))),N("div",{className:"row around-xs"},N("a",{href:"/react-devtools/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/ghost.png",width:"198",height:"181",alt:"Ghost"})),N("h3",{className:"app-title cyan"},"React DevTools")),N("a",{href:"/mindnode/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candle.png",width:"198",height:"184",alt:"Candle"})),N("h3",{className:"app-title purple"},"Mindnode")),N("a",{href:"/nylas-n1/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/coffin.png",width:"200",height:"197",alt:"Broom"})),N("h3",{className:"app-title cyan"},"Nylas N1"))),N("div",{className:"row around-xs"},N("a",{href:"/oracle-sql-developer/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/cone.png",width:"168",height:"189",alt:"Cone"})),N("h3",{className:"app-title orange"},"Oracle SQL Developer")),N("a",{href:"/jgrasp/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/hat-magic.png",width:"237",height:"196",alt:"Magic Hat"})),N("h3",{className:"app-title purple"},"jGrasp")),N("a",{href:"/i3/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"i3"))),N("div",{className:"row around-xs"},N("a",{href:"/steam/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/tombstone.png",width:"238",height:"190",alt:"Tombstone"})),N("h3",{className:"app-title purple"},"Steam")),N("a",{href:"/gh-pages/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/candies.png",width:"198",height:"184",alt:"Candies"})),N("h3",{className:"app-title orange"},"GitHub Pages")),N("a",{href:"/insomnia/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/spider.png",width:"181",height:"175",alt:"Spider"})),N("h3",{className:"app-title cyan"},"Insomnia"))),N("div",{className:"row around-xs"},N("a",{href:"/wordpress/",className:"app col-xs-12 col-sm-2"},N("span",{className:"app-img"},N("img",{src:"/static/img/icons/eye.png",width:"168",height:"170",alt:"Eye"})),N("h3",{className:"app-title purple"},"Wordpress")))),N("script",{src:"https://wzrd.in/standalone/malarkey@1.3.3"}),N("script",{src:"/static/js/main.js"}))}}],[{key:"getInitialProps",value:function(s){var a;return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.query,e.abrupt("return",{query:a});case 2:case"end":return e.stop()}}))}}]),a}(m.a.Component);f.Layout=d.a,a.default=f},SevZ:function(s,a,e){"use strict";a.__esModule=!0,a.default=void 0;var t=c(e("9kyW")),i=c(e("bVZc"));function c(s){return s&&s.__esModule?s:{default:s}}var l=function(){function s(s){var a=void 0===s?{}:s,e=a.styleSheet,t=void 0===e?null:e,c=a.optimizeForSpeed,l=void 0!==c&&c,p=a.isBrowser,o=void 0===p?"undefined"!==typeof window:p;this._sheet=t||new i.default({name:"styled-jsx",optimizeForSpeed:l}),this._sheet.inject(),t&&"boolean"===typeof l&&(this._sheet.setOptimizeForSpeed(l),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=o,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var a=s.prototype;return a.add=function(s){var a=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(s.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(s,a){return s[a]=0,s}),{}));var e=this.getIdAndRules(s),t=e.styleId,i=e.rules;if(t in this._instancesCounts)this._instancesCounts[t]+=1;else{var c=i.map((function(s){return a._sheet.insertRule(s)})).filter((function(s){return-1!==s}));this._indices[t]=c,this._instancesCounts[t]=1}},a.remove=function(s){var a=this,e=this.getIdAndRules(s).styleId;if(function(s,a){if(!s)throw new Error("StyleSheetRegistry: "+a+".")}(e in this._instancesCounts,"styleId: `"+e+"` not found"),this._instancesCounts[e]-=1,this._instancesCounts[e]<1){var t=this._fromServer&&this._fromServer[e];t?(t.parentNode.removeChild(t),delete this._fromServer[e]):(this._indices[e].forEach((function(s){return a._sheet.deleteRule(s)})),delete this._indices[e]),delete this._instancesCounts[e]}},a.update=function(s,a){this.add(a),this.remove(s)},a.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},a.cssRules=function(){var s=this,a=this._fromServer?Object.keys(this._fromServer).map((function(a){return[a,s._fromServer[a]]})):[],e=this._sheet.cssRules();return a.concat(Object.keys(this._indices).map((function(a){return[a,s._indices[a].map((function(s){return e[s].cssText})).join(s._optimizeForSpeed?"":"\n")]})).filter((function(s){return Boolean(s[1])})))},a.createComputeId=function(){var s={};return function(a,e){if(!e)return"jsx-"+a;var i=String(e),c=a+i;return s[c]||(s[c]="jsx-"+(0,t.default)(a+"-"+i)),s[c]}},a.createComputeSelector=function(s){void 0===s&&(s=/__jsx-style-dynamic-selector/g);var a={};return function(e,t){this._isBrowser||(t=t.replace(/\/style/gi,"\\/style"));var i=e+t;return a[i]||(a[i]=t.replace(s,e)),a[i]}},a.getIdAndRules=function(s){var a=this,e=s.children,t=s.dynamic,i=s.id;if(t){var c=this.computeId(i,t);return{styleId:c,rules:Array.isArray(e)?e.map((function(s){return a.computeSelector(c,s)})):[this.computeSelector(c,e)]}}return{styleId:this.computeId(i),rules:Array.isArray(e)?e:[e]}},a.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(s,a){return s[a.id.slice(2)]=a,s}),{})},s}();a.default=l},bVZc:function(s,a,e){"use strict";(function(s){function e(s,a){for(var e=0;e<a.length;e++){var t=a[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}a.__esModule=!0,a.default=void 0;var t="undefined"!==typeof s&&s.env&&!0,i=function(s){return"[object String]"===Object.prototype.toString.call(s)},c=function(){function s(s){var a=void 0===s?{}:s,e=a.name,c=void 0===e?"stylesheet":e,p=a.optimizeForSpeed,o=void 0===p?t:p,n=a.isBrowser,r=void 0===n?"undefined"!==typeof window:n;l(i(c),"`name` must be a string"),this._name=c,this._deletedRulePlaceholder="#"+c+"-deleted-rule____{}",l("boolean"===typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._isBrowser=r,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var m=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=m?m.getAttribute("content"):null}var a,c,p,o=s.prototype;return o.setOptimizeForSpeed=function(s){l("boolean"===typeof s,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=s,this.inject()},o.isOptimizeForSpeed=function(){return this._optimizeForSpeed},o.inject=function(){var s=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(t||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(a,e){return"number"===typeof e?s._serverSheet.cssRules[e]={cssText:a}:s._serverSheet.cssRules.push({cssText:a}),e},deleteRule:function(a){s._serverSheet.cssRules[a]=null}}},o.getSheetForTag=function(s){if(s.sheet)return s.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===s)return document.styleSheets[a]},o.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},o.insertRule=function(s,a){if(l(i(s),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof a&&(a=this._serverSheet.cssRules.length),this._serverSheet.insertRule(s,a),this._rulesCount++;if(this._optimizeForSpeed){var e=this.getSheet();"number"!==typeof a&&(a=e.cssRules.length);try{e.insertRule(s,a)}catch(p){return t||console.warn("StyleSheet: illegal rule: \n\n"+s+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var c=this._tags[a];this._tags.push(this.makeStyleTag(this._name,s,c))}return this._rulesCount++},o.replaceRule=function(s,a){if(this._optimizeForSpeed||!this._isBrowser){var e=this._isBrowser?this.getSheet():this._serverSheet;if(a.trim()||(a=this._deletedRulePlaceholder),!e.cssRules[s])return s;e.deleteRule(s);try{e.insertRule(a,s)}catch(c){t||console.warn("StyleSheet: illegal rule: \n\n"+a+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),e.insertRule(this._deletedRulePlaceholder,s)}}else{var i=this._tags[s];l(i,"old rule at index `"+s+"` not found"),i.textContent=a}return s},o.deleteRule=function(s){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(s,"");else{var a=this._tags[s];l(a,"rule at index `"+s+"` not found"),a.parentNode.removeChild(a),this._tags[s]=null}else this._serverSheet.deleteRule(s)},o.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(s){return s&&s.parentNode.removeChild(s)})),this._tags=[]):this._serverSheet.cssRules=[]},o.cssRules=function(){var s=this;return this._isBrowser?this._tags.reduce((function(a,e){return e?a=a.concat(Array.prototype.map.call(s.getSheetForTag(e).cssRules,(function(a){return a.cssText===s._deletedRulePlaceholder?null:a}))):a.push(null),a}),[]):this._serverSheet.cssRules},o.makeStyleTag=function(s,a,e){a&&l(i(a),"makeStyleTag acceps only strings as second parameter");var t=document.createElement("style");this._nonce&&t.setAttribute("nonce",this._nonce),t.type="text/css",t.setAttribute("data-"+s,""),a&&t.appendChild(document.createTextNode(a));var c=document.head||document.getElementsByTagName("head")[0];return e?c.insertBefore(t,e):c.appendChild(t),t},a=s,(c=[{key:"length",get:function(){return this._rulesCount}}])&&e(a.prototype,c),p&&e(a,p),s}();function l(s,a){if(!s)throw new Error("StyleSheet: "+a+".")}a.default=c}).call(this,e("8oxB"))},"f+GR":function(s,a,e){"use strict";var t=e("0iUn"),i=e("sLSF"),c=e("MI3g"),l=e("a7VT"),p=e("Tit0"),o=e("MX0m"),n=e.n(o),r=e("q1tI"),m=e.n(r).a.createElement,h=function(s){function a(){return Object(t.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(p.a)(a,s),Object(i.a)(a,[{key:"render",value:function(){return m("div",{className:"jsx-810049475 green"},m("h1",{style:{marginBottom:20},className:"jsx-810049475 title"},"Dracula Pro"),m("div",{style:{backgroundColor:"#1d1e26",borderRadius:"10px",margin:"0 auto"},className:"jsx-810049475 box"},m("h2",{style:{textAlign:"center",color:"#fff"},className:"jsx-810049475"},"a new theme is coming."),m("p",{style:{textAlign:"center",color:"rgba(255, 255, 255, .6)"},className:"jsx-810049475"},"Enter your email and we'll put you on the invite list."),m("form",{action:"https://draculatheme.us4.list-manage.com/subscribe/post?u=91b5113403e18d357704e4b08&id=05d188e2db",method:"post",className:"jsx-810049475 form"},m("input",{style:{display:"none"},type:"checkbox",value:"1",name:"group[66939][1]",id:"mce-group[66939]-66939-0",className:"jsx-810049475"}),m("input",{style:{display:"none"},type:"checkbox",value:"2",name:"group[66939][2]",id:"mce-group[66939]-66939-1",defaultChecked:!0,className:"jsx-810049475"}),m("input",{style:{fontSize:"18px",backgroundColor:"#333"},name:"EMAIL",placeholder:"your@email.com",id:"mce-EMAIL",type:"email",required:!0,className:"jsx-810049475"}),m("input",{style:{fontSize:"18px"},type:"submit",value:"Notify me",name:"subscribe",id:"mc-embedded-subscribe",className:"jsx-810049475"}))),m(n.a,{id:"810049475"},["h2.jsx-810049475{font-size:38px;}","p.jsx-810049475{font-size:19px;}",".box.jsx-810049475{padding:45px;max-width:400px;}","@media (max-width:840px){h2.jsx-810049475{font-size:32px;}p.jsx-810049475{font-size:16px;}.box.jsx-810049475{padding:20px;max-width:375px;}}"]))}}]),a}(r.Component);a.a=h},vlRD:function(s,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",0,1]]]);