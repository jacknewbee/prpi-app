(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5941,3277],{25965:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return r}});var a=function(){return(a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=function(){function t(t,e,n){var r=this;this.endVal=e,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var n=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=n?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(t){var e,n,a,i=(Math.abs(t).toFixed(r.options.decimalPlaces)+"").split(".");if(e=i[0],n=i.length>1?r.options.decimal+i[1]:"",r.options.useGrouping){a="";for(var o=0,s=e.length;o<s;++o)0!==o&&o%3==0&&(a=r.options.separator+a),a=e[s-o-1]+a;e=a}return r.options.numerals&&r.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return r.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return r.options.numerals[+t]})),(t<0?"-":"")+r.options.prefix+e+n+r.options.suffix},this.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},this.options=a(a({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return r.handleScroll(r)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),a=n.top+n.height+window.pageYOffset;a<e&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>a&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},15344:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var a,r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var o={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(u,function(t){return t.test(s)}):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(u,function(t){return t.test(s)});return n=t.valueCallback?t.valueCallback(l):l,{value:n=a.valueCallback?a.valueCallback(n):n,rest:e.slice(s.length)}}}var c={code:"en-US",formatDistance:function(t,e,n){var a,i=r[t];return(a="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:o,formatRelative:function(t,e,n,a){return s[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(a={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(a.matchPattern);if(!n)return null;var r=n[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}},18667:function(t,e,n){"use strict";n.d(e,{j:function(){return r}});var a={};function r(){return a}},42765:function(t,e,n){"use strict";function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,{Z:function(){return a}})},91310:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(42765),r=n(66700),i=n(19785);function o(t,e){(0,i.Z)(2,arguments);var n=(0,r.Z)(t).getTime(),o=(0,a.Z)(e);return new Date(n+o)}},30927:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var a=n(42765),r=n(91310),i=n(19785);function o(t,e){(0,i.Z)(2,arguments);var n=(0,a.Z)(e);return(0,r.Z)(t,1e3*n)}},67320:function(t,e,n){var a=n(37772),r=n(38101),i=n(7642),o=n(66188),s=a.isFinite,u=Math.min;t.exports=function(t){var e=Math[t];return function(t,n){if(t=i(t),(n=null==n?0:u(r(n),292))&&s(t)){var a=(o(t)+"e").split("e");return+((a=(o(e(a[0]+"e"+(+a[1]+n)))+"e").split("e"))[0]+"e"+(+a[1]-n))}return e(t)}}},16951:function(t,e,n){var a=n(80537);t.exports=function(t){return a(t)&&t!=+t}},80537:function(t,e,n){var a=n(53366),r=n(15125);t.exports=function(t){return"number"==typeof t||r(t)&&"[object Number]"==a(t)}},19759:function(t,e,n){var a=n(66188);t.exports=function(){var t=arguments,e=a(t[0]);return t.length<3?e:e.replace(t[1],t[2])}},68015:function(t,e,n){var a=n(67320)("round");t.exports=a},74930:function(t,e,n){var a=n(66188),r=0;t.exports=function(t){var e=++r;return a(t)+e}},76597:function(t,e,n){"use strict";var a=n(2784),r=n(25965);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){var a,r;a=t,r=n[e],e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function c(t){var e=a.useRef(t);return l(function(){e.current=t}),a.useCallback(function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.current.apply(void 0,n)},[])}var d=function(t,e){var n=e.decimal,a=e.decimals,i=e.duration,o=e.easingFn,s=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,d=e.separator,f=e.start,h=e.suffix,m=e.useEasing,p=e.enableScrollSpy,g=e.scrollSpyDelay,y=e.scrollSpyOnce;return new r.CountUp(t,s,{startVal:f,duration:i,decimal:n,decimalPlaces:a,easingFn:o,formattingFn:u,numerals:l,separator:d,prefix:c,suffix:h,useEasing:m,useGrouping:!!d,enableScrollSpy:p,scrollSpyDelay:g,scrollSpyOnce:y})},f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},m=function(t){var e=a.useMemo(function(){return o(o({},h),t)},[t]),n=e.ref,r=e.startOnMount,i=e.enableReinitialize,s=e.delay,l=e.onEnd,m=e.onStart,p=e.onPauseResume,g=e.onReset,y=e.onUpdate,v=u(e,f),b=a.useRef(),w=a.useRef(),V=a.useRef(!1),E=c(function(){return d("string"==typeof n?n:n.current,v)}),P=c(function(t){var e=b.current;if(e&&!t)return e;var n=E();return b.current=n,n}),S=c(function(){var t=function(){return P(!0).start(function(){null==l||l({pauseResume:M,reset:O,start:x,update:F})})};s&&s>0?w.current=setTimeout(t,1e3*s):t(),null==m||m({pauseResume:M,reset:O,update:F})}),M=c(function(){P().pauseResume(),null==p||p({reset:O,start:x,update:F})}),O=c(function(){P().el&&(w.current&&clearTimeout(w.current),P().reset(),null==g||g({pauseResume:M,start:x,update:F}))}),F=c(function(t){P().update(t),null==y||y({pauseResume:M,reset:O,start:x})}),x=c(function(){O(),S()}),j=c(function(t){r&&(t&&O(),S())});return a.useEffect(function(){V.current?i&&j(!0):(V.current=!0,j())},[i,V,j,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),a.useEffect(function(){return function(){O()}},[O]),{start:x,pauseResume:M,reset:O,update:F,getCountUp:P}},p=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,r=t.containerProps,i=t.children,l=t.style,d=u(t,p),f=a.useRef(null),h=a.useRef(!1),g=m(o(o({},d),{},{ref:f,startOnMount:"function"!=typeof i||0===t.delay,enableReinitialize:!1})),y=g.start,v=g.reset,b=g.update,w=g.pauseResume,V=g.getCountUp,E=c(function(){y()}),P=c(function(e){t.preserveValue||v(),b(e)}),S=c(function(){if("function"==typeof t.children&&!(f.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}V()});return(a.useEffect(function(){S()},[S]),a.useEffect(function(){h.current&&P(t.end)},[t.end,P]),a.useEffect(function(){n&&h.current&&E()},[E,n,n&&t]),a.useEffect(function(){!n&&h.current&&E()},[E,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),a.useEffect(function(){h.current=!0},[]),"function"==typeof i)?i({countUpRef:f,start:y,reset:v,update:b,pauseResume:w,getCountUp:V}):a.createElement("span",s({className:e,ref:f,style:l},r),void 0!==t.start?V().formattingFn(t.start):"")}}}]);