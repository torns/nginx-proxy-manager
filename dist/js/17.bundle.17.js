(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{172:function(e,n,t){"use strict";const s=t(6),r=t(216),a=t(3);t(197),e.exports=s.View.extend({template:r,className:"modal-dialog",ui:{form:"form",buttons:".modal-footer button",cancel:"button.cancel",save:"button.save"},events:{"click @ui.save":function(e){e.preventDefault(),a.Api.Users.delete(this.model.get("id")).then(()=>{a.Controller.showUsers(),a.UI.closeModal()}).catch(e=>{alert(e.message),this.ui.buttons.prop("disabled",!1).removeClass("btn-disabled")})}}})},197:function(e,n,t){var s,r,a;
/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.9.0 (Jan, 2018)

  Copyright (c) 2012-2018 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/r=[t(4)],void 0===(a="function"==typeof(s=function(e){"use strict";e.fn.serializeJSON=function(n){var t,s,r,a,i,o,l,u,c,p,d,f;return t=e.serializeJSON,s=this,r=t.setupOpts(n),a=s.serializeArray(),t.readCheckboxUncheckedValues(a,r,s),i={},e.each(a,function(e,n){o=n.name,l=n.value,c=t.extractTypeAndNameWithNoType(o),p=c.nameWithNoType,(d=c.type)||(d=t.attrFromInputWithName(s,o,"data-value-type")),t.validateType(o,d,r),"skip"!==d&&(f=t.splitInputNameIntoKeysArray(p),!(u=t.parseValue(l,o,d,r))&&t.shouldSkipFalsy(s,o,p,d,r)||t.deepSet(i,f,u,r))}),i},e.serializeJSON={defaultOptions:{checkboxUncheckedValue:void 0,parseNumbers:!1,parseBooleans:!1,parseNulls:!1,parseAll:!1,parseWithFunction:null,skipFalsyValuesForTypes:[],skipFalsyValuesForFields:[],customTypes:{},defaultTypes:{string:function(e){return String(e)},number:function(e){return Number(e)},boolean:function(e){return-1===["false","null","undefined","","0"].indexOf(e)},null:function(e){return-1===["false","null","undefined","","0"].indexOf(e)?e:null},array:function(e){return JSON.parse(e)},object:function(e){return JSON.parse(e)},auto:function(n){return e.serializeJSON.parseValue(n,null,null,{parseNumbers:!0,parseBooleans:!0,parseNulls:!0})},skip:null},useIntKeysAsArrayIndex:!1},setupOpts:function(n){var t,s,r,a,i,o;for(t in o=e.serializeJSON,null==n&&(n={}),r=o.defaultOptions||{},s=["checkboxUncheckedValue","parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","skipFalsyValuesForTypes","skipFalsyValuesForFields","customTypes","defaultTypes","useIntKeysAsArrayIndex"],n)if(-1===s.indexOf(t))throw new Error("serializeJSON ERROR: invalid option '"+t+"'. Please use one of "+s.join(", "));return i=(a=function(e){return!1!==n[e]&&""!==n[e]&&(n[e]||r[e])})("parseAll"),{checkboxUncheckedValue:a("checkboxUncheckedValue"),parseNumbers:i||a("parseNumbers"),parseBooleans:i||a("parseBooleans"),parseNulls:i||a("parseNulls"),parseWithFunction:a("parseWithFunction"),skipFalsyValuesForTypes:a("skipFalsyValuesForTypes"),skipFalsyValuesForFields:a("skipFalsyValuesForFields"),typeFunctions:e.extend({},a("defaultTypes"),a("customTypes")),useIntKeysAsArrayIndex:a("useIntKeysAsArrayIndex")}},parseValue:function(n,t,s,r){var a,i;return a=e.serializeJSON,i=n,r.typeFunctions&&s&&r.typeFunctions[s]?i=r.typeFunctions[s](n):r.parseNumbers&&a.isNumeric(n)?i=Number(n):!r.parseBooleans||"true"!==n&&"false"!==n?r.parseNulls&&"null"==n?i=null:r.typeFunctions&&r.typeFunctions.string&&(i=r.typeFunctions.string(n)):i="true"===n,r.parseWithFunction&&!s&&(i=r.parseWithFunction(i,t)),i},isObject:function(e){return e===Object(e)},isUndefined:function(e){return void 0===e},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},optionKeys:function(e){if(Object.keys)return Object.keys(e);var n,t=[];for(n in e)t.push(n);return t},readCheckboxUncheckedValues:function(n,t,s){var r,a,i;null==t&&(t={}),e.serializeJSON,r="input[type=checkbox][name]:not(:checked):not([disabled])",s.find(r).add(s.filter(r)).each(function(s,r){if(a=e(r),null==(i=a.attr("data-unchecked-value"))&&(i=t.checkboxUncheckedValue),null!=i){if(r.name&&-1!==r.name.indexOf("[]["))throw new Error("serializeJSON ERROR: checkbox unchecked values are not supported on nested arrays of objects like '"+r.name+"'. See https://github.com/marioizquierdo/jquery.serializeJSON/issues/67");n.push({name:r.name,value:i})}})},extractTypeAndNameWithNoType:function(e){var n;return(n=e.match(/(.*):([^:]+)$/))?{nameWithNoType:n[1],type:n[2]}:{nameWithNoType:e,type:null}},shouldSkipFalsy:function(n,t,s,r,a){var i=e.serializeJSON,o=i.attrFromInputWithName(n,t,"data-skip-falsy");if(null!=o)return"false"!==o;var l=a.skipFalsyValuesForFields;if(l&&(-1!==l.indexOf(s)||-1!==l.indexOf(t)))return!0;var u=a.skipFalsyValuesForTypes;return null==r&&(r="string"),!(!u||-1===u.indexOf(r))},attrFromInputWithName:function(e,n,t){var s,r;return s=n.replace(/(:|\.|\[|\]|\s)/g,"\\$1"),r='[name="'+s+'"]',e.find(r).add(e.filter(r)).attr(t)},validateType:function(n,t,s){var r,a;if(a=e.serializeJSON,r=a.optionKeys(s?s.typeFunctions:a.defaultOptions.defaultTypes),t&&-1===r.indexOf(t))throw new Error("serializeJSON ERROR: Invalid type "+t+" found in input name '"+n+"', please use one of "+r.join(", "));return!0},splitInputNameIntoKeysArray:function(n){var t;return e.serializeJSON,t=n.split("["),""===(t=e.map(t,function(e){return e.replace(/\]/g,"")}))[0]&&t.shift(),t},deepSet:function(n,t,s,r){var a,i,o,l,u,c;if(null==r&&(r={}),(c=e.serializeJSON).isUndefined(n))throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");if(!t||0===t.length)throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");a=t[0],1===t.length?""===a?n.push(s):n[a]=s:(i=t[1],""===a&&(l=n.length-1,u=n[l],a=c.isObject(u)&&(c.isUndefined(u[i])||t.length>2)?l:l+1),""===i?!c.isUndefined(n[a])&&e.isArray(n[a])||(n[a]=[]):r.useIntKeysAsArrayIndex&&c.isValidArrayIndex(i)?!c.isUndefined(n[a])&&e.isArray(n[a])||(n[a]=[]):!c.isUndefined(n[a])&&c.isObject(n[a])||(n[a]={}),o=t.slice(1),c.deepSet(n[a],o,s,r))}}})?s.apply(n,r):s)||(e.exports=a)},216:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+='<div class="modal-content">\n    <div class="modal-header">\n        <h5 class="modal-title">'+__e(i18n("users","delete",{name:name}))+'</h5>\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\n    </div>\n    <div class="modal-body">\n        <form>\n            <div class="row">\n                <div class="col-sm-12 col-md-12">\n                    '+(null==(__t=i18n("users","delete-confirm",{name:name}))?"":__t)+'\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","cancel"))+'</button>\n        <button type="button" class="btn btn-danger save">'+__e(i18n("str","sure"))+"</button>\n    </div>\n</div>\n";return __p}}).call(this,__webpack_require__(0))}}]);