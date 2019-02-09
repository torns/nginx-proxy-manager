(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{171:function(e,n,s){"use strict";const r=s(6),t=s(3),a=s(215);s(197),e.exports=r.View.extend({template:a,className:"modal-dialog",ui:{form:"form",buttons:".modal-footer button",cancel:"button.cancel",save:"button.save",error:".secret-error"},events:{"click @ui.save":function(e){e.preventDefault(),this.ui.error.hide();let n=this.ui.form.serializeJSON();if(n.new_password1!==n.new_password2)return void this.ui.error.text("Passwords do not match!").show();let s={type:"password",current:n.current_password,secret:n.new_password1};this.ui.buttons.prop("disabled",!0).addClass("btn-disabled"),t.Api.Users.setPassword(this.model.get("id"),s).then(()=>{t.UI.closeModal(),t.Controller.showUsers()}).catch(e=>{this.ui.error.text(e.message).show(),this.ui.buttons.prop("disabled",!1).removeClass("btn-disabled")})}},isSelf:function(){return t.Cache.User.get("id")===this.model.get("id")},templateContext:function(){return{isSelf:this.isSelf.bind(this)}}})},197:function(e,n,s){var r,t,a;
/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.9.0 (Jan, 2018)

  Copyright (c) 2012-2018 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/t=[s(4)],void 0===(a="function"==typeof(r=function(e){"use strict";e.fn.serializeJSON=function(n){var s,r,t,a,i,o,l,u,p,c,d,f;return s=e.serializeJSON,r=this,t=s.setupOpts(n),a=r.serializeArray(),s.readCheckboxUncheckedValues(a,t,r),i={},e.each(a,function(e,n){o=n.name,l=n.value,p=s.extractTypeAndNameWithNoType(o),c=p.nameWithNoType,(d=p.type)||(d=s.attrFromInputWithName(r,o,"data-value-type")),s.validateType(o,d,t),"skip"!==d&&(f=s.splitInputNameIntoKeysArray(c),!(u=s.parseValue(l,o,d,t))&&s.shouldSkipFalsy(r,o,c,d,t)||s.deepSet(i,f,u,t))}),i},e.serializeJSON={defaultOptions:{checkboxUncheckedValue:void 0,parseNumbers:!1,parseBooleans:!1,parseNulls:!1,parseAll:!1,parseWithFunction:null,skipFalsyValuesForTypes:[],skipFalsyValuesForFields:[],customTypes:{},defaultTypes:{string:function(e){return String(e)},number:function(e){return Number(e)},boolean:function(e){return-1===["false","null","undefined","","0"].indexOf(e)},null:function(e){return-1===["false","null","undefined","","0"].indexOf(e)?e:null},array:function(e){return JSON.parse(e)},object:function(e){return JSON.parse(e)},auto:function(n){return e.serializeJSON.parseValue(n,null,null,{parseNumbers:!0,parseBooleans:!0,parseNulls:!0})},skip:null},useIntKeysAsArrayIndex:!1},setupOpts:function(n){var s,r,t,a,i,o;for(s in o=e.serializeJSON,null==n&&(n={}),t=o.defaultOptions||{},r=["checkboxUncheckedValue","parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","skipFalsyValuesForTypes","skipFalsyValuesForFields","customTypes","defaultTypes","useIntKeysAsArrayIndex"],n)if(-1===r.indexOf(s))throw new Error("serializeJSON ERROR: invalid option '"+s+"'. Please use one of "+r.join(", "));return i=(a=function(e){return!1!==n[e]&&""!==n[e]&&(n[e]||t[e])})("parseAll"),{checkboxUncheckedValue:a("checkboxUncheckedValue"),parseNumbers:i||a("parseNumbers"),parseBooleans:i||a("parseBooleans"),parseNulls:i||a("parseNulls"),parseWithFunction:a("parseWithFunction"),skipFalsyValuesForTypes:a("skipFalsyValuesForTypes"),skipFalsyValuesForFields:a("skipFalsyValuesForFields"),typeFunctions:e.extend({},a("defaultTypes"),a("customTypes")),useIntKeysAsArrayIndex:a("useIntKeysAsArrayIndex")}},parseValue:function(n,s,r,t){var a,i;return a=e.serializeJSON,i=n,t.typeFunctions&&r&&t.typeFunctions[r]?i=t.typeFunctions[r](n):t.parseNumbers&&a.isNumeric(n)?i=Number(n):!t.parseBooleans||"true"!==n&&"false"!==n?t.parseNulls&&"null"==n?i=null:t.typeFunctions&&t.typeFunctions.string&&(i=t.typeFunctions.string(n)):i="true"===n,t.parseWithFunction&&!r&&(i=t.parseWithFunction(i,s)),i},isObject:function(e){return e===Object(e)},isUndefined:function(e){return void 0===e},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},optionKeys:function(e){if(Object.keys)return Object.keys(e);var n,s=[];for(n in e)s.push(n);return s},readCheckboxUncheckedValues:function(n,s,r){var t,a,i;null==s&&(s={}),e.serializeJSON,t="input[type=checkbox][name]:not(:checked):not([disabled])",r.find(t).add(r.filter(t)).each(function(r,t){if(a=e(t),null==(i=a.attr("data-unchecked-value"))&&(i=s.checkboxUncheckedValue),null!=i){if(t.name&&-1!==t.name.indexOf("[]["))throw new Error("serializeJSON ERROR: checkbox unchecked values are not supported on nested arrays of objects like '"+t.name+"'. See https://github.com/marioizquierdo/jquery.serializeJSON/issues/67");n.push({name:t.name,value:i})}})},extractTypeAndNameWithNoType:function(e){var n;return(n=e.match(/(.*):([^:]+)$/))?{nameWithNoType:n[1],type:n[2]}:{nameWithNoType:e,type:null}},shouldSkipFalsy:function(n,s,r,t,a){var i=e.serializeJSON,o=i.attrFromInputWithName(n,s,"data-skip-falsy");if(null!=o)return"false"!==o;var l=a.skipFalsyValuesForFields;if(l&&(-1!==l.indexOf(r)||-1!==l.indexOf(s)))return!0;var u=a.skipFalsyValuesForTypes;return null==t&&(t="string"),!(!u||-1===u.indexOf(t))},attrFromInputWithName:function(e,n,s){var r,t;return r=n.replace(/(:|\.|\[|\]|\s)/g,"\\$1"),t='[name="'+r+'"]',e.find(t).add(e.filter(t)).attr(s)},validateType:function(n,s,r){var t,a;if(a=e.serializeJSON,t=a.optionKeys(r?r.typeFunctions:a.defaultOptions.defaultTypes),s&&-1===t.indexOf(s))throw new Error("serializeJSON ERROR: Invalid type "+s+" found in input name '"+n+"', please use one of "+t.join(", "));return!0},splitInputNameIntoKeysArray:function(n){var s;return e.serializeJSON,s=n.split("["),""===(s=e.map(s,function(e){return e.replace(/\]/g,"")}))[0]&&s.shift(),s},deepSet:function(n,s,r,t){var a,i,o,l,u,p;if(null==t&&(t={}),(p=e.serializeJSON).isUndefined(n))throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");if(!s||0===s.length)throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");a=s[0],1===s.length?""===a?n.push(r):n[a]=r:(i=s[1],""===a&&(l=n.length-1,u=n[l],a=p.isObject(u)&&(p.isUndefined(u[i])||s.length>2)?l:l+1),""===i?!p.isUndefined(n[a])&&e.isArray(n[a])||(n[a]=[]):t.useIntKeysAsArrayIndex&&p.isValidArrayIndex(i)?!p.isUndefined(n[a])&&e.isArray(n[a])||(n[a]=[]):!p.isUndefined(n[a])&&p.isObject(n[a])||(n[a]={}),o=s.slice(1),p.deepSet(n[a],o,r,t))}}})?r.apply(n,t):r)||(e.exports=a)},215:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<div class="modal-content">\n    <div class="modal-header">\n        <h5 class="modal-title">'+__e(i18n("users","password-title",{self:isSelf(),name:name}))+'</h5>\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\n    </div>\n    <div class="modal-body">\n        <form>\n            ',isSelf()&&(__p+='\n            <div class="form-group">\n                <label class="form-label">'+__e(i18n("users","current-password"))+'</label>\n                <input type="password" name="current_password" class="form-control" placeholder="" minlength="8" required>\n            </div>\n            '),__p+='\n\n            <div class="form-group">\n                <label class="form-label">'+__e(i18n("users","new-password"))+'</label>\n                <input type="password" name="new_password1" class="form-control" placeholder="" minlength="8" required>\n                <div class="invalid-feedback secret-error"></div>\n            </div>\n            <div class="form-group">\n                <label class="form-label">'+__e(i18n("users","confirm-password"))+'</label>\n                <input type="password" name="new_password2" class="form-control" placeholder="" minlength="8" required>\n            </div>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","cancel"))+'</button>\n        <button type="button" class="btn btn-teal save">'+__e(i18n("str","save"))+"</button>\n    </div>\n</div>\n";return __p}}).call(this,__webpack_require__(0))}}]);