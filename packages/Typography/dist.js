(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('@slup/theming'),require('@slup/common')):'function'==typeof define&&define.amd?define(['exports','@slup/theming','@slup/common'],b):b((a.Slup=a.Slup||{},a.Slup.Theming={}),a.Slup.Theming,a.Slup.Common)})(this,function(a,b,c){'use strict';var d,e='default'in b?b['default']:b,f=c.styledMap({display4:112,display3:56,display2:45,display1:34,headline:24,title:20,subheading:15,body2:13,body1:13,caption:12,button:14,default:14}),g=c.styledMap({display4:300,display3:400,display2:400,display1:400,headline:400,title:500,subheading:400,body2:500,body1:400,caption:400,button:500,default:400}),h=c.styledMap({display4:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.54)},display3:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.54)},display2:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.54)},display1:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.54)},headline:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.87)},title:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.87)},subheading:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.87)},body2:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.87)},body1:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.87)},caption:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.54)},button:function(a){return b.rgba(a.theme.text||b.lightTheme.text,.87)},default:function(a){return a.theme.text||b.lightTheme.text}}),i=c.styledMap({display4:112,display3:56,display2:45,display1:34,headline:24,title:20,subheading:16,body2:14,body1:14,caption:12,button:14,default:14}),j=(d=['\n  margin: 0;\n  line-height: 1;\n  text-transform: ',';\n\n  /* Default font size */\n  font-size: ','px;\n\n  /* Default font weight */\n  font-weight: ',';\n\n  /* Default colors */\n  color: ',';\n\n\n  /* Media queries for font size */\n  @media only screen and (max-width: 600px) {\n    font-size: ','px;\n  }\n'],d.raw=['\n  margin: 0;\n  line-height: 1;\n  text-transform: ',';\n\n  /* Default font size */\n  font-size: ','px;\n\n  /* Default font weight */\n  font-weight: ',';\n\n  /* Default colors */\n  color: ',';\n\n\n  /* Media queries for font size */\n  @media only screen and (max-width: 600px) {\n    font-size: ','px;\n  }\n'],e.p(d,function(a){return a.button?'uppercase':'initial'},f,g,h,i));a.Typography=j,Object.defineProperty(a,'__esModule',{value:!0})});
