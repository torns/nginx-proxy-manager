(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{186:function(t,n,e){"use strict";const o=e(6),s=e(248);t.exports=o.View.extend({template:s,className:"modal-dialog wide",templateContext:function(){let t=this.getOption("content").split("\n");return{title:this.getOption("title"),content:"<p>"+t.join("</p><p>")+"</p>"}}})},248:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+='<div class="modal-content">\n    <div class="modal-header">\n        <h5 class="modal-title">'+__e(title)+'</h5>\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\n    </div>\n    <div class="modal-body">\n        '+(null==(__t=content)?"":__t)+'\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","close"))+"</button>\n    </div>\n</div>\n";return __p}}).call(this,__webpack_require__(0))}}]);