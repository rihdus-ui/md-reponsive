!function(){"use strict";angular.module("dataVis",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","dataVis.helper","dataVis.dl"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("dataVis").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("dataVis").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,r,i){var a,s=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){s.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(t){s.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}function n(t,e){function n(){return r().then(function(){t.info("Activated Contributors View")})}function r(){return e.getContributors(10).then(function(t){return i.contributors=t,i.contributors})}var i=this;i.contributors=[],n()}n.$inject=["$log","githubContributor"];var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return r}t.$inject=["malarkey"],angular.module("dataVis").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function i(t){return t.data}function a(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(r+"/contributors?per_page="+n).then(i)["catch"](a)}var r="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:r,getContributors:n};return i}t.$inject=["$log","$http"],angular.module("dataVis").factory("githubContributor",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/footer/footer.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("dataVis").directive("visFooter",t)}(),/*!
	Papa Parse
	v4.1.2
	https://github.com/mholt/PapaParse
*/
function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.Papa=e()}(this,function(){"use strict";function t(t,e){if(e=e||{},e.dynamicTyping=e.dynamicTyping||!1,e.worker&&S.WORKERS_SUPPORTED){var n=c();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=m(e.step),e.chunk=m(e.chunk),e.complete=m(e.complete),e.error=m(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var s=null;return"string"==typeof t?s=e.download?new r(e):new a(e):(b.File&&t instanceof File||t instanceof Object)&&(s=new i(e)),s.stream(t)}function e(t,e){function n(){"object"==typeof e&&("string"==typeof e.delimiter&&1===e.delimiter.length&&-1===S.BAD_DELIMITERS.indexOf(e.delimiter)&&(l=e.delimiter),("boolean"==typeof e.quotes||e.quotes instanceof Array)&&(o=e.quotes),"string"==typeof e.newline&&(c=e.newline))}function r(t){if("object"!=typeof t)return[];var e=[];for(var n in t)e.push(n);return e}function i(t,e){var n="";"string"==typeof t&&(t=JSON.parse(t)),"string"==typeof e&&(e=JSON.parse(e));var r=t instanceof Array&&t.length>0,i=!(e[0]instanceof Array);if(r){for(var s=0;s<t.length;s++)s>0&&(n+=l),n+=a(t[s],s);e.length>0&&(n+=c)}for(var o=0;o<e.length;o++){for(var u=r?t.length:e[o].length,d=0;u>d;d++){d>0&&(n+=l);var p=r&&i?t[d]:d;n+=a(e[o][p],d)}o<e.length-1&&(n+=c)}return n}function a(t,e){if("undefined"==typeof t||null===t)return"";t=t.toString().replace(/"/g,'""');var n="boolean"==typeof o&&o||o instanceof Array&&o[e]||s(t,S.BAD_DELIMITERS)||t.indexOf(l)>-1||" "===t.charAt(0)||" "===t.charAt(t.length-1);return n?'"'+t+'"':t}function s(t,e){for(var n=0;n<e.length;n++)if(t.indexOf(e[n])>-1)return!0;return!1}var o=!1,l=",",c="\r\n";if(n(),"string"==typeof t&&(t=JSON.parse(t)),t instanceof Array){if(!t.length||t[0]instanceof Array)return i(null,t);if("object"==typeof t[0])return i(r(t[0]),t)}else if("object"==typeof t)return"string"==typeof t.data&&(t.data=JSON.parse(t.data)),t.data instanceof Array&&(t.fields||(t.fields=t.meta&&t.meta.fields),t.fields||(t.fields=t.data[0]instanceof Array?t.fields:r(t.data[0])),t.data[0]instanceof Array||"object"==typeof t.data[0]||(t.data=[t.data])),i(t.fields||[],t.data||[]);throw"exception: Unable to serialize unrecognized input"}function n(t){function e(t){var e=f(t);e.chunkSize=parseInt(e.chunkSize),t.step||t.chunk||(e.chunkSize=null),this._handle=new s(e),this._handle.streamer=this,this._config=e}this._handle=null,this._paused=!1,this._finished=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},e.call(this,t),this.parseChunk=function(t){if(this.isFirstChunk&&m(this._config.beforeFirstChunk)){var e=this._config.beforeFirstChunk(t);void 0!==e&&(t=e)}this.isFirstChunk=!1;var n=this._partialLine+t;this._partialLine="";var r=this._handle.parse(n,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var i=r.meta.cursor;this._finished||(this._partialLine=n.substring(i-this._baseIndex),this._baseIndex=i),r&&r.data&&(this._rowCount+=r.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(_)b.postMessage({results:r,workerId:S.WORKER_ID,finished:a});else if(m(this._config.chunk)){if(this._config.chunk(r,this._handle),this._paused)return;r=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(r.data),this._completeResults.errors=this._completeResults.errors.concat(r.errors),this._completeResults.meta=r.meta),!a||!m(this._config.complete)||r&&r.meta.aborted||this._config.complete(this._completeResults,this._input),a||r&&r.meta.paused||this._nextChunk(),r}},this._sendError=function(t){m(this._config.error)?this._config.error(t):_&&this._config.error&&b.postMessage({workerId:S.WORKER_ID,error:t,finished:!1})}}function r(t){function e(t){var e=t.getResponseHeader("Content-Range");return parseInt(e.substr(e.lastIndexOf("/")+1))}t=t||{},t.chunkSize||(t.chunkSize=S.RemoteChunkSize),n.call(this,t);var r;y?this._nextChunk=function(){this._readChunk(),this._chunkLoaded()}:this._nextChunk=function(){this._readChunk()},this.stream=function(t){this._input=t,this._nextChunk()},this._readChunk=function(){if(this._finished)return void this._chunkLoaded();if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),y||(r.onload=g(this._chunkLoaded,this),r.onerror=g(this._chunkError,this)),r.open("GET",this._input,!y),this._config.chunkSize){var t=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+t),r.setRequestHeader("If-None-Match","webkit-no-cache")}try{r.send()}catch(e){this._chunkError(e.message)}y&&0===r.status?this._chunkError():this._start+=this._config.chunkSize},this._chunkLoaded=function(){if(4==r.readyState){if(r.status<200||r.status>=400)return void this._chunkError();this._finished=!this._config.chunkSize||this._start>e(r),this.parseChunk(r.responseText)}},this._chunkError=function(t){var e=r.statusText||t;this._sendError(e)}}function i(t){t=t||{},t.chunkSize||(t.chunkSize=S.LocalChunkSize),n.call(this,t);var e,r,i="undefined"!=typeof FileReader;this.stream=function(t){this._input=t,r=t.slice||t.webkitSlice||t.mozSlice,i?(e=new FileReader,e.onload=g(this._chunkLoaded,this),e.onerror=g(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var t=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);t=r.call(t,this._start,n)}var a=e.readAsText(t,this._config.encoding);i||this._chunkLoaded({target:{result:a}})},this._chunkLoaded=function(t){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(t.target.result)},this._chunkError=function(){this._sendError(e.error)}}function a(t){t=t||{},n.call(this,t);var e,r;this.stream=function(t){return e=t,r=t,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var t=this._config.chunkSize,e=t?r.substr(0,t):r;return r=t?r.substr(t):"",this._finished=!r,this.parseChunk(e)}}}function s(t){function e(){if(k&&h&&(u("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+S.DefaultDelimiter+"'"),h=!1),t.skipEmptyLines)for(var e=0;e<k.data.length;e++)1===k.data[e].length&&""===k.data[e][0]&&k.data.splice(e--,1);return n()&&r(),a()}function n(){return t.header&&0===x.length}function r(){if(k){for(var t=0;n()&&t<k.data.length;t++)for(var e=0;e<k.data[t].length;e++)x.push(k.data[t][e]);k.data.splice(0,1)}}function i(e,n){return(t.dynamicTyping[e]||t.dynamicTyping)===!0?"true"===n||"TRUE"===n?!0:"false"===n||"FALSE"===n?!1:c(n):n}function a(){if(!k||!t.header&&!t.dynamicTyping)return k;for(var e=0;e<k.data.length;e++){for(var n=t.header?{}:[],r=0;r<k.data[e].length;r++){var a=r,s=k.data[e][r];t.header&&(a=r>=x.length?"__parsed_extra":x[r]),s=i(a,s),"__parsed_extra"===a?(n[a]=n[a]||[],n[a].push(s)):n[a]=s}k.data[e]=n,t.header&&(r>x.length?u("FieldMismatch","TooManyFields","Too many fields: expected "+x.length+" fields but parsed "+r,e):r<x.length&&u("FieldMismatch","TooFewFields","Too few fields: expected "+x.length+" fields but parsed "+r,e))}return t.header&&k.meta&&(k.meta.fields=x),k}function s(e,n){for(var r,i,a,s=[",","	","|",";",S.RECORD_SEP,S.UNIT_SEP],l=0;l<s.length;l++){var c=s[l],u=0,d=0;a=void 0;for(var p=new o({delimiter:c,newline:n,preview:10}).parse(e),h=0;h<p.data.length;h++){var f=p.data[h].length;d+=f,"undefined"!=typeof a?f>1&&(u+=Math.abs(f-a),a=f):a=f}p.data.length>0&&(d/=p.data.length),("undefined"==typeof i||i>u)&&d>1.99&&(i=u,r=c)}return t.delimiter=r,{successful:!!r,bestDelimiter:r}}function l(t){t=t.substr(0,1048576);var e=t.split("\r"),n=t.split("\n"),r=n.length>1&&n[0].length<e[0].length;if(1===e.length||r)return"\n";for(var i=0,a=0;a<e.length;a++)"\n"===e[a][0]&&i++;return i>=e.length/2?"\r\n":"\r"}function c(t){var e=g.test(t);return e?parseFloat(t):t}function u(t,e,n,r){k.errors.push({type:t,code:e,message:n,row:r})}var d,p,h,g=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,v=this,b=0,y=!1,_=!1,x=[],k={data:[],errors:[],meta:{}};if(m(t.step)){var w=t.step;t.step=function(r){if(k=r,n())e();else{if(e(),0===k.data.length)return;b+=r.data.length,t.preview&&b>t.preview?p.abort():w(k,v)}}}this.parse=function(n,r,i){if(t.newline||(t.newline=l(n)),h=!1,!t.delimiter){var a=s(n,t.newline);a.successful?t.delimiter=a.bestDelimiter:(h=!0,t.delimiter=S.DefaultDelimiter),k.meta.delimiter=t.delimiter}var c=f(t);return t.preview&&t.header&&c.preview++,d=n,p=new o(c),k=p.parse(d,r,i),e(),y?{meta:{paused:!0}}:k||{meta:{paused:!1}}},this.paused=function(){return y},this.pause=function(){y=!0,p.abort(),d=d.substr(p.getCharIndex())},this.resume=function(){y=!1,v.streamer.parseChunk(d)},this.aborted=function(){return _},this.abort=function(){_=!0,p.abort(),k.meta.aborted=!0,m(t.complete)&&t.complete(k),d=""}}function o(t){t=t||{};var e=t.delimiter,n=t.newline,r=t.comments,i=t.step,a=t.preview,s=t.fastMode,o=t.quoteChar||'"';if(("string"!=typeof e||S.BAD_DELIMITERS.indexOf(e)>-1)&&(e=","),r===e)throw"Comment character same as delimiter";r===!0?r="#":("string"!=typeof r||S.BAD_DELIMITERS.indexOf(r)>-1)&&(r=!1),"\n"!=n&&"\r"!=n&&"\r\n"!=n&&(n="\n");var l=0,c=!1;this.parse=function(t,u,d){function p(t){k.push(t),C=l}function h(e){return d?g():("undefined"==typeof e&&(e=t.substr(l)),S.push(e),l=v,p(S),x&&m(),g())}function f(e){l=e,p(S),S=[],T=t.indexOf(n,l)}function g(t){return{data:k,errors:w,meta:{delimiter:e,linebreak:n,aborted:c,truncated:!!t,cursor:C+(u||0)}}}function m(){i(g()),k=[],w=[]}if("string"!=typeof t)throw"Input must be a string";var v=t.length,b=e.length,y=n.length,_=r.length,x="function"==typeof i;l=0;var k=[],w=[],S=[],C=0;if(!t)return g();if(s||s!==!1&&-1===t.indexOf(o)){for(var R=t.split(n),D=0;D<R.length;D++){var S=R[D];if(l+=S.length,D!==R.length-1)l+=n.length;else if(d)return g();if(!r||S.substr(0,_)!==r){if(x){if(k=[],p(S.split(e)),m(),c)return g()}else p(S.split(e));if(a&&D>=a)return k=k.slice(0,a),g(!0)}}return g()}for(var E=t.indexOf(e,l),T=t.indexOf(n,l),I=new RegExp(o+o,"g");;)if(t[l]!==o)if(r&&0===S.length&&t.substr(l,_)===r){if(-1===T)return g();l=T+y,T=t.indexOf(n,l),E=t.indexOf(e,l)}else if(-1!==E&&(T>E||-1===T))S.push(t.substring(l,E)),l=E+b,E=t.indexOf(e,l);else{if(-1===T)break;if(S.push(t.substring(l,T)),f(T+y),x&&(m(),c))return g();if(a&&k.length>=a)return g(!0)}else{var O=l;for(l++;;){var O=t.indexOf(o,O+1);if(-1===O)return d||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:l}),h();if(O===v-1){var $=t.substring(l,O).replace(I,o);return h($)}if(t[O+1]!==o){if(t[O+1]===e){S.push(t.substring(l,O).replace(I,o)),l=O+1+b,E=t.indexOf(e,l),T=t.indexOf(n,l);break}if(t.substr(O+1,y)===n){if(S.push(t.substring(l,O).replace(I,o)),f(O+1+y),E=t.indexOf(e,l),x&&(m(),c))return g();if(a&&k.length>=a)return g(!0);break}}else O++}}return h()},this.abort=function(){c=!0},this.getCharIndex=function(){return l}}function l(){var t=document.getElementsByTagName("script");return t.length?t[t.length-1].src:""}function c(){if(!S.WORKERS_SUPPORTED)return!1;if(!x&&null===S.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var t=S.SCRIPT_PATH||v;t+=(-1!==t.indexOf("?")?"&":"?")+"papaworker";var e=new b.Worker(t);return e.onmessage=u,e.id=w++,k[e.id]=e,e}function u(t){var e=t.data,n=k[e.workerId],r=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var i=function(){r=!0,d(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},a={abort:i,pause:p,resume:p};if(m(n.userStep)){for(var s=0;s<e.results.data.length&&(n.userStep({data:[e.results.data[s]],errors:e.results.errors,meta:e.results.meta},a),!r);s++);delete e.results}else m(n.userChunk)&&(n.userChunk(e.results,a,e.file),delete e.results)}e.finished&&!r&&d(e.workerId,e.results)}function d(t,e){var n=k[t];m(n.userComplete)&&n.userComplete(e),n.terminate(),delete k[t]}function p(){throw"Not implemented."}function h(t){var e=t.data;if("undefined"==typeof S.WORKER_ID&&e&&(S.WORKER_ID=e.workerId),"string"==typeof e.input)b.postMessage({workerId:S.WORKER_ID,results:S.parse(e.input,e.config),finished:!0});else if(b.File&&e.input instanceof File||e.input instanceof Object){var n=S.parse(e.input,e.config);n&&b.postMessage({workerId:S.WORKER_ID,results:n,finished:!0})}}function f(t){if("object"!=typeof t)return t;var e=t instanceof Array?[]:{};for(var n in t)e[n]=f(t[n]);return e}function g(t,e){return function(){t.apply(e,arguments)}}function m(t){return"function"==typeof t}var v,b=Function("return this")(),y=!b.document&&!!b.postMessage,_=y&&/(\?|&)papaworker(=|&|$)/.test(b.location.search),x=!1,k={},w=0,S={};if(S.parse=t,S.unparse=e,S.RECORD_SEP=String.fromCharCode(30),S.UNIT_SEP=String.fromCharCode(31),S.BYTE_ORDER_MARK="\ufeff",S.BAD_DELIMITERS=["\r","\n",'"',S.BYTE_ORDER_MARK],S.WORKERS_SUPPORTED=!y&&!!b.Worker,S.SCRIPT_PATH=null,S.LocalChunkSize=10485760,S.RemoteChunkSize=5242880,S.DefaultDelimiter=",",S.Parser=o,S.ParserHandle=s,S.NetworkStreamer=r,S.FileStreamer=i,S.StringStreamer=a,b.jQuery){var C=b.jQuery;C.fn.parse=function(t){function e(){if(0===a.length)return void(m(t.complete)&&t.complete());var e=a[0];if(m(t.before)){var i=t.before(e.file,e.inputElem);if("object"==typeof i){if("abort"===i.action)return void n("AbortError",e.file,e.inputElem,i.reason);if("skip"===i.action)return void r();"object"==typeof i.config&&(e.instanceConfig=C.extend(e.instanceConfig,i.config))}else if("skip"===i)return void r()}var s=e.instanceConfig.complete;e.instanceConfig.complete=function(t){m(s)&&s(t,e.file,e.inputElem),r()},S.parse(e.file,e.instanceConfig)}function n(e,n,r,i){m(t.error)&&t.error({name:e},n,r,i)}function r(){a.splice(0,1),e()}var i=t.config||{},a=[];return this.each(function(t){var e="INPUT"===C(this).prop("tagName").toUpperCase()&&"file"===C(this).attr("type").toLowerCase()&&b.FileReader;if(!e||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)a.push({file:this.files[n],inputElem:this,instanceConfig:C.extend({},i)})}),e(),this}}return _?b.onmessage=h:S.WORKERS_SUPPORTED&&(v=l(),document.body?document.addEventListener("DOMContentLoaded",function(){x=!0},!0):x=!0),r.prototype=Object.create(n.prototype),r.prototype.constructor=r,i.prototype=Object.create(n.prototype),i.prototype.constructor=i,a.prototype=Object.create(a.prototype),a.prototype.constructor=a,S}),function(){"use strict";function t(t,e){function n(){return e.get("./assets/data/csv/payment_history.csv").then(function(t){return t.data||null})}function r(){return e.get("./assets/data/csv/usage_details.csv").then(function(t){return t.data||null})}return{fetchPaymentHistory:n,fetchPaymentDetails:r}}t.$inject=["$timeout","$http"],angular.module("dataVis.dl",[]).factory("DL",t)}(),angular.module("dataVis").controller("ModalInstanceCtrl",["$uibModalInstance","payment",function(t,e){var n=this;n.paymentDetails=e,n.ok=function(){t.close(n.selected.item)},n.cancel=function(){t.dismiss("cancel")}}]),function(){"use strict";function t(t,e,n,r,i){function a(){t.all([l(),c()]).then(function(t){console.log(t)})["catch"](function(){})}function s(t){var n=e.open({animation:!0,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"./app/paymentDetails/details.modal.html",controller:"ModalInstanceCtrl",controllerAs:"$ctrl",size:"lg",resolve:{payment:function(){return t}}});n.result.then(function(t){$ctrl.selected=t},function(){})}function o(t){return i.compute_paymentRecordRowTotal(t[1],t[2],t[3],t[4])}function l(){return n.fetchPaymentDetails().then(function(t){var e=r.CSVtoJSON(t);return d.store.payment_details=e,e})}function c(){return n.fetchPaymentHistory().then(function(t){var e=r.CSVtoJSON(t);return d.store.history_records=e,e})}function u(){}var d=this;d.store={payment_details:[],history_records:[]},d.showToastr=u,d.getSubTotal=o,d.showDetails=s,a()}t.$inject=["$q","$uibModal","DL","DvSupport","DvBusiness"],angular.module("dataVis").controller("MainController",t)}(),function(){"use strict";function t(){function t(t,e,n,r){return 0}return{compute_paymentRecordRowTotal:t}}function e(){function t(t){var e=Papa.parse(t);return 0==e.errors.length?e.data:null}return{CSVtoJSON:t}}angular.module("dataVis.helper",[]).factory("DvSupport",e).factory("DvBusiness",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("dataVis").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("details",{url:"/details",templateUrl:"app/paymentDetails/details.html"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("dataVis").config(t)}(),function(){"use strict";angular.module("dataVis").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t){t.debugEnabled(!0)}t.$inject=["$logProvider"],angular.module("dataVis").config(t)}(),angular.module("dataVis").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container container-full bg-fill-empty" flex layout=column layout-align=center><!-- Header --><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class=container--body flex><div class="card-group cg-collapse-gt-sm"><div class="card card-hero"><div layout-gt-xs=row layout=column flex><div placement=left uib-tooltip-popup content="lorem ipsum"></div><div class=row flex><div class="col-sm-9 col-xs-8"><h1 class=jumbo><span>This Month\'s Charges</span> <span uib-tooltip="Lorem Ipsum" class="glyphicon glyphicon glyphicon-question-sign txt-color-sec" aria-hidden=true></span></h1><h5 class="txt-color-alt txt-light"><span>Mar 1</span> <span>- yesterday</span></h5><h5 class="txt-color-alt txt-light"><span>Will be charged on</span> <span>1st Apr 2016</span></h5></div><div class="col-sm-3 col-xs-4 text-right"><div class="txt-sub-hero txt-light">USD</div><div class="txt-hero txt-light">$200</div></div></div><div style="height: 45px" class="hide-xs padding padding-left pdl-md"></div><div style="height: 45px" class="hide-xs padding padding-left pdl-lg divider dv-at-left"></div><!--Spacer --><div class="padding-top pdt-lg hide-gt-xs"></div><div><div layout=row layout-gt-xs=column><div layout=row layout-align="start center" flex><span class="glyphicon glyphicon glyphicon-credit-card" aria-hidden=true style="font-size: 25px"></span> <span class=padding-left style="font-size: 16px"><span class="hide-xs txt-color-sec-2">**** **** ****</span> <span class="txt-color-sec hide-gt-xs">ending in </span><span>8888</span></span></div><p class="padding-top txt-color-alt-2"><span class=hide-xs>Change Payment details </span><span class=hide-gt-xs>Switch card</span></p></div></div></div></div><div class="card card-hero"><h1 class=jumbo>Details</h1><table class="table table-dashboard"><thead><tr><th></th><th class=visible-sm-table-cell>Usage</th><th class=visible-sm-table-cell>Free Quota</th><th class=visible-sm-table-cell>Chargable</th><th class=visible-sm-table-cell>$/Unit</th><th class=visible-sm-table-cell>Sub Total</th></tr></thead><tbody><tr ng-repeat="payment in main.store.payment_details"><td class=full-width><span ng-bind=payment[0]></span></td><td class=visible-sm-table-cell><span ng-bind=payment[1]></span></td><td class=visible-sm-table-cell><span ng-bind=payment[2]></span></td><td class=visible-sm-table-cell><span ng-bind="\'x $\'+payment[3]"></span></td><td class=visible-sm-table-cell><span ng-bind=payment[4]></span></td><td><span ng-bind="\'$\'+main.getSubTotal(payment)"></span></td><td class=hide-gt-xs ng-click=main.showDetails(payment)><span class="glyphicon glyphicon-menu-right txt-color-sec" aria-hidden=true></span></td></tr><!-- Total --><tr><td><span class="hide-gt-xs txt-color-sec-2">Total:</span></td><td class=visible-sm-table-cell></td><td class=visible-sm-table-cell></td><td class=visible-sm-table-cell></td><td class=visible-sm-table-cell></td><td class=txt-no-wrap><span class="hide-xs txt-color-sec-2">Total: </span><span>$2.00</span></td></tr></tbody></table><h1 class=jumbo>History</h1><div class=row><div class=col-sm-6><table class="table table-dashboard"><tbody><tr ng-repeat="pHistory in main.store.history_records"><td class="full-width txt-color-alt-2"><span ng-bind="pHistory[1]+\' \'+pHistory[0]"></span></td><td><span ng-bind=pHistory[2]></span></td><td><span ng-bind=pHistory[3]></span></td></tr></tbody></table></div></div></div></div></div><!-- Footer --><div><vis-footer></vis-footer></div></div>'),t.put("app/paymentDetails/details.modal.html",'<div class=modal-header layout=row layout-align="start center"><div class=navbar-brand><div ng-click=$ctrl.cancel() class=txt-color-sec><span class="glyphicon glyphicon-menu-left txt-color-sec" aria-hidden=true></span> <span>Back</span></div></div></div><div class=modal-body id=modal-body><table class="table table-dashboard table-compact"><tbody><tr class=with-border-bottom><td class="full-width txt-color-alt txt-light"><span class="txt-no-wrap txt-color-sec" ng-bind=$ctrl.paymentDetails[0]></span></td><td><span>$2.00</span></td></tr><tr><td class="full-width txt-color-alt"><span>Usage</span></td><td><span class="txt-no-wrap txt-color-sec" ng-bind=$ctrl.paymentDetails[1]></span></td></tr><tr><td class="full-width txt-color-alt"><span>Free Quota</span></td><td><span class="txt-no-wrap txt-color-sec" ng-bind=$ctrl.paymentDetails[2]></span></td></tr><tr><td class="full-width txt-color-alt"><span>Chargable</span></td><td><span class="txt-no-wrap txt-color-sec" ng-bind=$ctrl.paymentDetails[3]></span></td></tr><tr><td class="full-width txt-color-alt"><span>$/Unit</span></td><td><span class="txt-no-wrap txt-color-sec" ng-bind="\'x $\'+$ctrl.paymentDetails[4]"></span></td></tr><tr><td class=full-width><span>Subtotal</span></td><td><span ng-bind="\'$2.00\'"></span></td></tr></tbody></table></div><!--<div class="modal-footer">--> <!--</div>-->'),t.put("app/components/footer/footer.html",'<nav class="navbar navbar-footer bg-fill-shade-1"><div class="container-fluid container--body wrapper"><!-- Privacy/Cookies | Legal Notices & Trademarks | Report Noncompliance | © 2016 Autodesk Inc. All rights reserved --><div layout=row layout-align="center center" layout-wrap class="wrapper txt-no-wrap txt-light"><a class="hide-xs txt-color-alt" href=#>Privacy/Cookies</a> <span class="hide-xs padding-left padding-right txt-color-alt">|</span> <a class="hide-xs txt-color-alt" href=#>Privacy/Cookies</a> <span class="hide-xs padding-left padding-right txt-color-alt">|</span> <a class="hide-xs txt-color-alt" href=#>Legal Notices & Trademarks</a> <span class="hide-xs padding-left padding-right txt-color-alt">|</span> <a class="hide-xs txt-color-alt" href=#>Report Noncompliance</a> <span class="hide-xs padding-left padding-right txt-color-alt">|</span> <a class=txt-color-sec-2 href=#>© 2016 Autodesk Inc. All rights reserved</a></div></div></nav>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-default"><div class="navbar-header container--body"><a class="navbar--item navbar-brand" href=https://github.com/Swiip/generator-gulp-angular><!--<span class="glyphicon glyphicon-home"></span>--> <span class=txt-light>Usage and Billing</span></a></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-2eead7a6c9.js.map