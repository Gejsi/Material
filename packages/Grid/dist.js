(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('@slup/theming'),require('@slup/common')):'function'==typeof define&&define.amd?define(['exports','@slup/theming','@slup/common'],b):b((a.Slup=a.Slup||{},a.Slup.Grid={}),a.Slup.Theming,a.Slup.Common)})(this,function(a,b,c){'use strict';b=b&&b.hasOwnProperty('default')?b['default']:b;var d,e,f=(d=['\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: auto;\n  flex: 0 0 100%;\n  height: 100%;\n  justify-content: ',';\n\n  align-items: ',';\n'],d.raw=['\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: auto;\n  flex: 0 0 100%;\n  height: 100%;\n  justify-content: ',';\n\n  align-items: ',';\n'],b.div(d,function(a){return a.center?'center':a.space_around?'space-around':a.space_between?'space-between':a.end?'flex-end':'flex-start'},function(a){return a.middle?'center':a.bottom?'flex-end':'flex-start'})),g=(e=['\n  box-sizing: border-box;\n  height: inherit;\n  overflow: inherit;\n  transition: padding 150ms linear;\n  flex-basis: ','%;\n  order: ',';\n  padding-left: ',';\n  padding-right: ',';\n  display: ',';\n\n  @media only screen and (min-width: 480px) {\n    flex-basis: ','%;\n    padding-left: ',';\n    padding-right: ',';\n    display: ',';\n  }\n\n  @media only screen and (min-width: 960px) {\n    flex-basis: ','%;\n    padding-left: ',';\n    padding-right: ',';\n    display: ',';\n  }\n\n  @media only screen and (min-width: 1280px) {\n    flex-basis: ','%;\n    padding-left: ',';\n    padding-right: ',';\n    display: ',';\n  }\n'],e.raw=['\n  box-sizing: border-box;\n  height: inherit;\n  overflow: inherit;\n  transition: padding 150ms linear;\n  flex-basis: ','%;\n  order: ',';\n  padding-left: ',';\n  padding-right: ',';\n  display: ',';\n\n  @media only screen and (min-width: 480px) {\n    flex-basis: ','%;\n    padding-left: ',';\n    padding-right: ',';\n    display: ',';\n  }\n\n  @media only screen and (min-width: 960px) {\n    flex-basis: ','%;\n    padding-left: ',';\n    padding-right: ',';\n    display: ',';\n  }\n\n  @media only screen and (min-width: 1280px) {\n    flex-basis: ','%;\n    padding-left: ',';\n    padding-right: ',';\n    display: ',';\n  }\n'],b.div(e,function(a){return 100/12*a.sm||0},function(a){return a.order||'unset'},function(a){return c.sanitize(a.offset||0)},function(a){return c.sanitize(a.pull||0)},function(a){return a.hide_sm&&!a.show_sm?'none':'initial'},function(a){return 100/12*(a.md||a.sm||0)},function(a){return c.sanitize(a.offset_md||0)},function(a){return c.sanitize(a.pull_md||0)},function(a){return(a.hide_md||a.hide_sm)&&!a.show_md?'none':'initial'},function(a){return 100/12*(a.lg||a.sm||0)},function(a){return c.sanitize(a.offset_lg||a.offset_md||0)},function(a){return c.sanitize(a.pull_lg||a.pull_md||0)},function(a){return(a.hide_lg||a.hide_md||a.hide_sm)&&!a.show_lg?'none':'initial'},function(a){return 100/12*(a.xl||a.sm||0)},function(a){return c.sanitize(a.offset_xl||a.offset_lg||0)},function(a){return c.sanitize(a.pull_xl||a.pull_lg||0)},function(a){return(a.hide_xl||a.hide_lg||a.hide_md||a.hide_sm)&&!a.show_xl?'none':'initial'}));a.Grid=f,a.Col=g,Object.defineProperty(a,'__esModule',{value:!0})});
