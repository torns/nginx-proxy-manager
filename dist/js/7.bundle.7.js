(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{174:function(e,t,n){"use strict";const i=n(6),o=n(3),s=n(202),a=n(218),r=n(195),l=n(198),_=n(222);e.exports=i.View.extend({id:"nginx-proxy",template:_,ui:{list_region:".list-region",add:".add-item",help:".help",dimmer:".dimmer"},regions:{list_region:"@ui.list_region"},events:{"click @ui.add":function(e){e.preventDefault(),o.Controller.showNginxProxyForm()},"click @ui.help":function(e){e.preventDefault(),o.Controller.showHelp(o.i18n("proxy-hosts","help-title"),o.i18n("proxy-hosts","help-content"))}},templateContext:{showAddButton:o.Cache.User.canManage("proxy_hosts")},onRender:function(){let e=this;o.Api.Nginx.ProxyHosts.getAll(["owner","access_list","certificate"]).then(t=>{if(!e.isDestroyed())if(t&&t.length)e.showChildView("list_region",new a({collection:new s.Collection(t)}));else{let t=o.Cache.User.canManage("proxy_hosts");e.showChildView("list_region",new l({title:o.i18n("proxy-hosts","empty"),subtitle:o.i18n("all-hosts","empty-subtitle",{manage:t}),link:t?o.i18n("proxy-hosts","add"):null,btn_color:"success",permission:"proxy_hosts",action:function(){o.Controller.showNginxProxyForm()}}))}}).catch(t=>{e.showChildView("list_region",new r({code:t.code,message:t.message,retry:function(){o.Controller.showNginxProxy()}})),console.error(t)}).then(()=>{e.ui.dimmer.removeClass("active")})}})},195:function(e,t,n){"use strict";const i=n(6),o=n(196);e.exports=i.View.extend({template:o,className:"alert alert-icon alert-warning m-5",ui:{retry:"a.retry"},events:{"click @ui.retry":function(e){e.preventDefault(),this.getOption("retry")()}},templateContext:function(){return{message:this.getOption("message"),code:this.getOption("code"),retry:"function"==typeof this.getOption("retry")}}})},196:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>\n'+(null==(__t=code?"<strong>"+code+"</strong> &mdash; ":"")?"":__t)+"\n"+__e(message)+"\n\n",retry&&(__p+='\n    <br><br><a href="#" class="btn btn-sm btn-warning retry">'+__e(i18n("str","try-again"))+"</a>\n"),__p+="\n";return __p}}).call(this,__webpack_require__(0))},198:function(e,t,n){"use strict";const i=n(6),o=n(199);e.exports=i.View.extend({className:"text-center m-7",template:o,options:{btn_color:"teal"},ui:{action:"a"},events:{"click @ui.action":function(e){e.preventDefault(),this.getOption("action")()}},templateContext:function(){return{title:this.getOption("title"),subtitle:this.getOption("subtitle"),link:this.getOption("link"),action:"function"==typeof this.getOption("action"),btn_color:this.getOption("btn_color")}}})},199:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)title&&(__p+='\n    <h1 class="h2 mb-3">'+__e(title)+"</h1>\n"),subtitle&&(__p+='\n    <p class="h4 text-muted font-weight-normal mb-7">'+__e(subtitle)+"</p>\n"),link&&(__p+='\n    <a class="btn btn-'+__e(btn_color)+'" href="#">'+__e(link)+"</a>\n"),__p+="\n";return __p}}).call(this,__webpack_require__(0))},202:function(e,t,n){"use strict";const i=n(2),o=i.Model.extend({idAttribute:"id",defaults:function(){return{id:void 0,created_on:null,modified_on:null,domain_names:[],forward_scheme:"http",forward_host:"",forward_port:null,access_list_id:0,certificate_id:0,ssl_forced:!1,caching_enabled:!1,allow_websocket_upgrade:!1,block_exploits:!1,http2_support:!1,advanced_config:"",enabled:!0,meta:{},owner:null,access_list:null,certificate:null}}});e.exports={Model:o,Collection:i.Collection.extend({model:o})}},218:function(e,t,n){"use strict";const i=n(6),o=n(3),s=n(219),a=n(221),r=i.CollectionView.extend({tagName:"tbody",childView:s});e.exports=i.View.extend({tagName:"table",className:"table table-hover table-outline table-vcenter text-nowrap card-table",template:a,regions:{body:{el:"tbody",replaceElement:!0}},templateContext:{canManage:o.Cache.User.canManage("proxy_hosts")},onRender:function(){this.showChildView("body",new r({collection:this.collection}))}})},219:function(e,t,n){"use strict";(function(t){const i=n(6),o=n(3),s=n(220);e.exports=i.View.extend({template:s,tagName:"tr",ui:{able:"a.able",edit:"a.edit",delete:"a.delete",host_link:".host-link"},events:{"click @ui.able":function(e){e.preventDefault();let t=this.model.get("id");o.Api.Nginx.ProxyHosts[this.model.get("enabled")?"disable":"enable"](t).then(()=>o.Api.Nginx.ProxyHosts.get(t).then(e=>{this.model.set(e)}))},"click @ui.edit":function(e){e.preventDefault(),o.Controller.showNginxProxyForm(this.model)},"click @ui.delete":function(e){e.preventDefault(),o.Controller.showNginxProxyDeleteConfirm(this.model)},"click @ui.host_link":function(e){e.preventDefault(),window.open(t(e.currentTarget).attr("rel"),"_blank").focus()}},templateContext:{canManage:o.Cache.User.canManage("proxy_hosts"),isOnline:function(){return void 0===this.meta.nginx_online?null:this.meta.nginx_online},getOfflineError:function(){return this.meta.nginx_err||""}},initialize:function(){this.listenTo(this.model,"change",this.render)}})}).call(this,n(4))},220:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){__p+='<td class="text-center">\n    <div class="avatar d-block" style="background-image: url('+__e(owner.avatar||"/images/default-avatar.jpg")+')" title="Owned by '+__e(owner.name)+'">\n        <span class="avatar-status '+__e(owner.is_disabled?"bg-red":"bg-green")+'"></span>\n    </div>\n</td>\n<td>\n    <div>\n        ',domain_names.map(function(e){-1===e.indexOf("*")?__p+='\n                <span class="tag host-link hover-green" rel="http'+__e(certificate_id?"s":"")+"://"+__e(e)+'">'+__e(e)+"</span>\n                ":__p+='\n                <span class="tag">'+__e(e)+"</span>\n                "}),__p+='\n    </div>\n    <div class="small text-muted">\n        '+__e(i18n("str","created-on",{date:formatDbDate(created_on,"Do MMMM YYYY")}))+'\n    </div>\n</td>\n<td>\n    <div class="text-monospace">'+__e(forward_scheme)+"://"+__e(forward_host)+":"+__e(forward_port)+"</div>\n</td>\n<td>\n    <div>"+__e(certificate&&certificate_id?i18n("ssl",certificate.provider):i18n("ssl","none"))+"</div>\n</td>\n<td>\n    <div>"+__e(access_list_id?access_list.name:i18n("str","public"))+"</div>\n</td>\n<td>\n    ";var o=isOnline();enabled?__p+=!0===o?'\n        <span class="status-icon bg-success"></span> '+__e(i18n("str","online"))+"\n    ":!1===o?'\n        <span title="'+__e(getOfflineError())+'"><span class="status-icon bg-danger"></span> '+__e(i18n("str","offline"))+"</span>\n    ":'\n        <span class="status-icon bg-warning"></span> '+__e(i18n("str","unknown"))+"\n    ":__p+='\n        <span class="status-icon bg-warning"></span> '+__e(i18n("str","disabled"))+"\n    ",__p+="\n</td>\n",canManage&&(__p+='\n<td class="text-right">\n    <div class="item-action dropdown">\n        <a href="#" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>\n        <div class="dropdown-menu dropdown-menu-right">\n            <a href="#" class="edit dropdown-item"><i class="dropdown-icon fe fe-edit"></i> '+__e(i18n("str","edit"))+'</a>\n            <a href="#" class="able dropdown-item"><i class="dropdown-icon fe fe-power"></i> '+__e(i18n("str",enabled?"disable":"enable"))+'</a>\n            <div class="dropdown-divider"></div>\n            <a href="#" class="delete dropdown-item"><i class="dropdown-icon fe fe-trash-2"></i> '+__e(i18n("str","delete"))+"</a>\n        </div>\n    </div>\n</td>\n")}return __p}}).call(this,__webpack_require__(0))},221:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<thead>\n    <th width="30">&nbsp;</th>\n    <th>'+__e(i18n("str","source"))+"</th>\n    <th>"+__e(i18n("str","destination"))+"</th>\n    <th>"+__e(i18n("str","ssl"))+"</th>\n    <th>"+__e(i18n("str","access"))+"</th>\n    <th>"+__e(i18n("str","status"))+"</th>\n    ",canManage&&(__p+="\n    <th>&nbsp;</th>\n    "),__p+="\n</thead>\n<tbody>\n    \x3c!-- items --\x3e\n</tbody>\n";return __p}}).call(this,__webpack_require__(0))},222:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<div class="card">\n    <div class="card-status bg-success"></div>\n    <div class="card-header">\n        <h3 class="card-title">'+__e(i18n("proxy-hosts","title"))+'</h3>\n        <div class="card-options">\n            <a href="#" class="btn btn-outline-secondary btn-sm ml-2 help"><i class="fe fe-help-circle"></i></a>\n            ',showAddButton&&(__p+='\n            <a href="#" class="btn btn-outline-success btn-sm ml-2 add-item">'+__e(i18n("proxy-hosts","add"))+"</a>\n            "),__p+='\n        </div>\n    </div>\n    <div class="card-body no-padding min-100">\n        <div class="dimmer active">\n            <div class="loader"></div>\n            <div class="dimmer-content list-region">\n                \x3c!-- List Region --\x3e\n            </div>\n        </div>\n    </div>\n</div>\n';return __p}}).call(this,__webpack_require__(0))}}]);