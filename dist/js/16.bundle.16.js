(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{191:function(e,t,i){"use strict";(function(t){const s=i(0),n=i(6),a=i(3),l=i(207),r=i(263);i(197),i(201),e.exports=n.View.extend({template:r,className:"modal-dialog",max_file_size:102400,ui:{form:"form",domain_names:'input[name="domain_names"]',buttons:".modal-footer button",cancel:"button.cancel",save:"button.save",other_certificate:"#other_certificate",other_certificate_key:"#other_certificate_key",other_intermediate_certificate:"#other_intermediate_certificate"},events:{"click @ui.save":function(e){if(e.preventDefault(),!this.ui.form[0].checkValidity())return void t('<input type="submit">').hide().appendTo(this.ui.form).click().remove();let i=this,n=this.ui.form.serializeJSON();n.provider=this.model.get("provider"),void 0!==n.meta&&void 0!==n.meta.letsencrypt_agree&&(n.meta.letsencrypt_agree=!!n.meta.letsencrypt_agree),"string"==typeof n.domain_names&&n.domain_names&&(n.domain_names=n.domain_names.split(","));let l=[];if("other"===this.model.get("provider")&&!this.model.hasSslFiles()){if(!this.ui.other_certificate[0].files.length||!this.ui.other_certificate[0].files[0].size)return void alert("Certificate file is not attached");if(this.ui.other_certificate[0].files[0].size>this.max_file_size)return void alert("Certificate file is too large (> 100kb)");if(l.push({name:"certificate",file:this.ui.other_certificate[0].files[0]}),!this.ui.other_certificate_key[0].files.length||!this.ui.other_certificate_key[0].files[0].size)return void alert("Certificate key file is not attached");if(this.ui.other_certificate_key[0].files[0].size>this.max_file_size)return void alert("Certificate key file is too large (> 100kb)");if(l.push({name:"certificate_key",file:this.ui.other_certificate_key[0].files[0]}),this.ui.other_intermediate_certificate[0].files.length&&this.ui.other_intermediate_certificate[0].files[0].size){if(this.ui.other_intermediate_certificate[0].files[0].size>this.max_file_size)return void alert("Intermediate Certificate file is too large (> 100kb)");l.push({name:"intermediate_certificate",file:this.ui.other_intermediate_certificate[0].files[0]})}}this.ui.buttons.prop("disabled",!0).addClass("btn-disabled");let r=new FormData;i.model.get("provider")&&l.length&&l.map(function(e){r.append(e.name,e.file)}),new Promise(e=>{"other"===i.model.get("provider")?e(a.Api.Nginx.Certificates.validate(r)):e()}).then(()=>a.Api.Nginx.Certificates.create(n)).then(e=>{if(i.model.set(e),"other"===i.model.get("provider"))return a.Api.Nginx.Certificates.upload(i.model.get("id"),r).then(e=>{i.model.set("meta",s.assign({},i.model.get("meta"),e))})}).then(()=>{a.UI.closeModal(function(){a.Controller.showNginxCertificates()})}).catch(e=>{alert(e.message),this.ui.buttons.prop("disabled",!1).removeClass("btn-disabled")})}},templateContext:{getLetsencryptEmail:function(){return void 0!==this.meta.letsencrypt_email?this.meta.letsencrypt_email:a.Cache.User.get("email")},getLetsencryptAgree:function(){return void 0!==this.meta.letsencrypt_agree&&this.meta.letsencrypt_agree}},onRender:function(){this.ui.domain_names.selectize({delimiter:",",persist:!1,maxOptions:15,create:function(e){return{value:e,text:e}},createFilter:/^(?:[^.*]+\.?)+[^.]$/})},initialize:function(e){void 0!==e.model&&e.model||(this.model=new l.Model({provider:"letsencrypt"}))}})}).call(this,i(4))},207:function(e,t,i){"use strict";const s=i(2),n=s.Model.extend({idAttribute:"id",defaults:function(){return{id:void 0,created_on:null,modified_on:null,provider:"",nice_name:"",domain_names:[],expires_on:null,meta:{},owner:null,proxy_hosts:[],redirection_hosts:[],dead_hosts:[]}},hasSslFiles:function(){let e=this.get("meta");return void 0!==e.certificate&&e.certificate&&void 0!==e.certificate_key&&e.certificate_key}});e.exports={Model:n,Collection:s.Collection.extend({model:n})}},263:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<div class="modal-content">\n    <div class="modal-header">\n        <h5 class="modal-title">'+__e(i18n("certificates","form-title",{provider:provider}))+'</h5>\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\n    </div>\n    <div class="modal-body">\n        <form>\n            <div class="row">\n                ',"letsencrypt"===provider?__p+='\n                    <div class="col-sm-12 col-md-12">\n                        <div class="form-group">\n                            <label class="form-label">'+__e(i18n("all-hosts","domain-names"))+' <span class="form-required">*</span></label>\n                            <input type="text" name="domain_names" class="form-control" id="input-domains" value="'+__e(domain_names.join(","))+'" required>\n                            <div class="text-blue"><i class="fe fe-alert-triangle"></i> '+__e(i18n("ssl","hosts-warning"))+'</div>\n                        </div>\n                    </div>\n                    <div class="col-sm-12 col-md-12">\n                        <div class="form-group">\n                            <label class="form-label">'+__e(i18n("ssl","letsencrypt-email"))+' <span class="form-required">*</span></label>\n                            <input name="meta[letsencrypt_email]" type="email" class="form-control" placeholder="" value="'+__e(getLetsencryptEmail())+'" required>\n                        </div>\n                    </div>\n                    <div class="col-sm-12 col-md-12">\n                        <div class="form-group">\n                            <label class="custom-switch">\n                                <input type="checkbox" class="custom-switch-input" name="meta[letsencrypt_agree]" value="1" required'+__e(getLetsencryptAgree()?" checked":"")+'>\n                                <span class="custom-switch-indicator"></span>\n                                <span class="custom-switch-description">'+(null==(__t=i18n("ssl","letsencrypt-agree",{url:"https://letsencrypt.org/repository/"}))?"":__t)+' <span class="form-required">*</span></span>\n                            </label>\n                        </div>\n                    </div>\n                ':"other"===provider&&(__p+='\n                    \x3c!-- Other --\x3e\n                    <div class="col-sm-12 col-md-12">\n                        <div class="form-group">\n                            <label class="form-label">'+__e(i18n("str","name"))+' <span class="form-required">*</span></label>\n                            <input name="nice_name" type="text" class="form-control" placeholder="" value="'+__e(nice_name)+'" required>\n                        </div>\n                    </div>\n                    <div class="col-sm-12 col-md-12 other-ssl">\n                        <div class="form-group">\n                            <div class="form-label">'+__e(i18n("certificates","other-certificate-key"))+'<span class="form-required">*</span></div>\n                            <div class="custom-file">\n                                <input type="file" class="custom-file-input" name="meta[other_certificate_key]" id="other_certificate_key" required>\n                                <label class="custom-file-label">'+__e(i18n("str","choose-file"))+'</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-sm-12 col-md-12 other-ssl">\n                        <div class="form-group">\n                            <div class="form-label">'+__e(i18n("certificates","other-certificate"))+'<span class="form-required">*</span></div>\n                            <div class="custom-file">\n                                <input type="file" class="custom-file-input" name="meta[other_certificate]" id="other_certificate">\n                                <label class="custom-file-label">'+__e(i18n("str","choose-file"))+'</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-sm-12 col-md-12 other-ssl">\n                        <div class="form-group">\n                            <div class="form-label">'+__e(i18n("certificates","other-intermediate-certificate"))+'</div>\n                            <div class="custom-file">\n                                <input type="file" class="custom-file-input" name="meta[other_intermediate_certificate]" id="other_intermediate_certificate">\n                                <label class="custom-file-label">'+__e(i18n("str","choose-file"))+"</label>\n                            </div>\n                        </div>\n                    </div>\n\n                "),__p+='\n            </div>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","cancel"))+'</button>\n        <button type="button" class="btn btn-teal save">'+__e(i18n("str","save"))+"</button>\n    </div>\n</div>\n";return __p}}).call(this,__webpack_require__(0))}}]);