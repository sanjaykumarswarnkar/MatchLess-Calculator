bck2brwsr.register({
  'magic' : 'kafíčko'
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    return function() {
      var cls = n['replace__Ljava_lang_String_2CC']('/', '_').toString();
      var dot = n['replace__Ljava_lang_String_2CC']('/', '.').toString();
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });
vm.org_apidesign_vm4brwsr_VM = link('org/apidesign/vm4brwsr/VM', function(f) { vm.org_apidesign_vm4brwsr_VM =  f; });

vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod = function net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$currentP = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP = v; return this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP; };
  m = c._val$newClazz = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz = v; return this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz; };
  m = c._this$1 = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1 = v; return this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1; };
    m = CLS.cons__VLnet_java_html_boot_BrowserBuilder$1OnPageLoad_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Class_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0, lcA1);
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._val$currentP.call(lcA0, lcA2);
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._val$newClazz.call(lcA0, lcA3);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA1 = null;
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$200__Ljava_lang_Runnable_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
if ((stA0) === null) { gt = 65; break IF; }
try {
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._val$currentP.call(lcA0));
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$200__Ljava_lang_Runnable_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
invoker.run__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 46; break IF; }}
var stA0 = e;{ gt = 57; break IF; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 65; break IF; }
    }
    X_46: for (;;) { IF: if (gt <= 46) {
try {var lcA2 = stA0;
var lcA1 = lcA2;
} catch (e) {
var stA0 = e;{ gt = 57; break IF; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 65; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var lcA3 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ var stA0 = lcA3; throw lcA3; }
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
if ((stA0) === null) { gt = 309; break IF; }
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
if (((stA0).length) != 0) { gt = 163; break IF; }
try {
var stA0 = vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._val$newClazz.call(lcA0);var stA1 = vm.net_java_html_boot_BrowserBuilder(false).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 0);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA2 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._val$currentP.call(lcA0));
var stA0 = lcA2;var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA1 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 142; break IF; }}
var stA0 = e;{ gt = 153; break IF; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 309; break IF; }
    }
    X_142: for (;;) { IF: if (gt <= 142) {
try {var lcA2 = stA0;
var lcA1 = lcA2;
} catch (e) {
var stA0 = e;{ gt = 153; break IF; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 163; break IF; }
    }
    X_153: for (;;) { IF: if (gt <= 153) {
try {var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_153; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ var stA0 = lcA4; throw lcA4; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {
try {
var stA0 = vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._val$newClazz.call(lcA0);var stA1 = vm.net_java_html_boot_BrowserBuilder(false).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 1);
Array.at(stA2, 0, vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2']('[Ljava/lang/String;'));
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA2 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._val$currentP.call(lcA0));
var stA0 = lcA2;var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
var stA3 = stA2;var stI4 = 0;var stA5 = vm.net_java_html_boot_BrowserBuilder(false).access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
Array.at(stA3, stI4, stA5);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA1 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 231; break IF; }}
var stA0 = e;{ gt = 299; break IF; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 309; break IF; }
    }
    X_231: for (;;) { IF: if (gt <= 231) {
try {var lcA2 = stA0;
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$100__Ljava_util_logging_Logger_2();
var stA1 = vm.java_util_logging_Level(false)['_SEVERE']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't call ");
var stA3 = vm.net_java_html_boot_BrowserBuilder(false).access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," with args ");
var stA3 = vm.net_java_html_boot_BrowserBuilder(false).access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false)._this$1.call(lcA0)));
var stA3 = vm.java_util_Arrays(false)['toString__Ljava_lang_String_2_3Ljava_lang_Object_2'](stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA2);
} catch (e) {
var stA0 = e;{ gt = 299; break IF; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ gt = 309; break IF; }
    }
    X_299: for (;;) { IF: if (gt <= 299) {
try {var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_299; }
}
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(null);
{ var stA0 = lcA5; throw lcA5; }
    }
    X_309: for (;;) { IF: if (gt <= 309) {

if ((lcA1) === null) { gt = 325; break IF; }
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$100__Ljava_util_logging_Logger_2();
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,vm.java_util_logging_Level(false)['_SEVERE'](), "Can't initialize the view", lcA1);
    }
    X_325: for (;;) { IF: if (gt <= 325) {
return;

    }
}}}}}}}}}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethodfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethodfillInstOf });
      net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethodfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder$1OnPageLoad$1CallInitMethod';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$currentP = null;
    this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_val$newClazz = null;
    this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod_this$1 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });
vm.java_util_Arrays = link('java/util/Arrays', function(f) { vm.java_util_Arrays =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_util_logging_Level = link('java/util/logging/Level', function(f) { vm.java_util_logging_Level =  f; });
vm.java_lang_Throwable = link('java/lang/Throwable', function(f) { vm.java_lang_Throwable =  f; });

vm.org_netbeans_html_boot_impl_FnContext = function org_netbeans_html_boot_impl_FnContext() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnContext;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_LOG = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS.fld_LOG = v; return CLS.fld_LOG; };
  CLS.fld_DUMMY = null;
  m = c._DUMMY = function (v) {  if (arguments.length == 1) CLS.fld_DUMMY = v; return CLS.fld_DUMMY; };
  m = c._prev = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnContext_prev = v; return this.fld_org_netbeans_html_boot_impl_FnContext_prev; };
  m = c._current = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnContext_current = v; return this.fld_org_netbeans_html_boot_impl_FnContext_current; };
  CLS.fld_CURRENT = null;
  m = c._CURRENT = function (v) {  if (arguments.length == 1) CLS.fld_CURRENT = v; return CLS.fld_CURRENT; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_boot_impl_FnContext(false)._current.call(lcA0, lcA2);
vm.org_netbeans_html_boot_impl_FnContext(false)._prev.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.close__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_boot_impl_FnContext(false)._prev.call(lcA0)) === (lcA0)) { gt = 46; break IF; }
if (vm.org_netbeans_html_boot_impl_FnContext(false)._prev.call(lcA0) !== null && !vm.org_netbeans_html_boot_impl_FnContext(false)._prev.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(vm.org_netbeans_html_boot_impl_FnContext(false)._prev.call(lcA0));
vm.org_netbeans_html_boot_impl_FnContext(false)._prev.call(lcA0, lcA0);
var stI0 = vm.org_netbeans_html_boot_impl_FnContext(false)._current.call(lcA0) != null && vm.org_netbeans_html_boot_impl_FnContext(false)._current.call(lcA0)['$instOf_java_io_Flushable'] ? 1 : 0;
if ((stI0) == 0) { gt = 46; break IF; }
if (vm.org_netbeans_html_boot_impl_FnContext(false)._current.call(lcA0) !== null && !vm.org_netbeans_html_boot_impl_FnContext(false)._current.call(lcA0)['$instOf_java_io_Flushable']) throw vm.java_lang_ClassCastException(true);
invoker.flush__V(vm.org_netbeans_html_boot_impl_FnContext(false)._current.call(lcA0));
    }
    X_46: for (;;) { IF: if (gt <= 46) {
return;

    }
}}
};
c['close__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0);
var lcA1 = stA0;
if ((lcA1) !== (lcA0)) { gt = 14; break IF; }
return vm.org_netbeans_html_boot_impl_FnContext(false)._DUMMY();
    }
    X_14: for (;;) { IF: if (gt <= 14) {
var stA0 = new vm.org_netbeans_html_boot_impl_FnContext;
vm.org_netbeans_html_boot_impl_FnContext(false).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, lcA1, lcA0);
return stA0;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {
var stA0 = invoker.get__Ljava_lang_Object_2(vm.org_netbeans_html_boot_impl_FnContext(false)._CURRENT());
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
invoker.set__VLjava_lang_Object_2(vm.org_netbeans_html_boot_impl_FnContext(false)._CURRENT(),lcA0);
return lcA1;

};
    m.access = 9;
    m.cls = CLS;
    m = c.currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z = function(lcI0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.get__Ljava_lang_Object_2(vm.org_netbeans_html_boot_impl_FnContext(false)._CURRENT());
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 28; break IF; }
if ((lcI0) == 0) { gt = 28; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "No current WebView context around!");
{ var stA0 = stA0; throw stA0; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

return lcA1;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_FnContext(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
vm.org_netbeans_html_boot_impl_FnContext(false)._LOG(stA0);
var stA0 = new vm.org_netbeans_html_boot_impl_FnContext;
vm.org_netbeans_html_boot_impl_FnContext(false).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null, null);
vm.org_netbeans_html_boot_impl_FnContext(false)._DUMMY(stA0);
vm.org_netbeans_html_boot_impl_FnContext(false)._prev.call(vm.org_netbeans_html_boot_impl_FnContext(false)._DUMMY(), vm.org_netbeans_html_boot_impl_FnContext(false)._DUMMY());
var stA0 = new vm.java_lang_ThreadLocal;
vm.java_lang_ThreadLocal(false).constructor['cons__V'].call(stA0);
vm.org_netbeans_html_boot_impl_FnContext(false)._CURRENT(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnContextfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnContext', { value : true });
      vm.java_io_Closeable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnContextfillInstOf });
      org_netbeans_html_boot_impl_FnContextfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnContext';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_boot_impl_FnContext(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnContext_prev = null;
    this.fld_org_netbeans_html_boot_impl_FnContext_current = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_io_Closeable = link('java/io/Closeable', function(f) { vm.java_io_Closeable =  f; });
vm.java_lang_ThreadLocal = link('java/lang/ThreadLocal', function(f) { vm.java_lang_ThreadLocal =  f; });
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });

vm.net_java_html_boot_BrowserBuilder = function net_java_html_boot_BrowserBuilder() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_LOG = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS.fld_LOG = v; return CLS.fld_LOG; };
  m = c._resource = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_resource = v; return this.fld_net_java_html_boot_BrowserBuilder_resource; };
  m = c._clazz = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_clazz = v; return this.fld_net_java_html_boot_BrowserBuilder_clazz; };
  m = c._browserClass = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_browserClass = v; return this.fld_net_java_html_boot_BrowserBuilder_browserClass; };
  m = c._onLoad = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_onLoad = v; return this.fld_net_java_html_boot_BrowserBuilder_onLoad; };
  m = c._methodName = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_methodName = v; return this.fld_net_java_html_boot_BrowserBuilder_methodName; };
  m = c._methodArgs = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_methodArgs = v; return this.fld_net_java_html_boot_BrowserBuilder_methodArgs; };
  m = c._context = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_context = v; return this.fld_net_java_html_boot_BrowserBuilder_context; };
  m = c._loader = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_loader = v; return this.fld_net_java_html_boot_BrowserBuilder_loader; };
  m = c._locale = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder_locale = v; return this.fld_net_java_html_boot_BrowserBuilder_locale; };
    m = CLS.cons__V_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.net_java_html_boot_BrowserBuilder(false)._context.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.newBrowser__Lnet_java_html_boot_BrowserBuilder_2_3Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new vm.net_java_html_boot_BrowserBuilder;
vm.net_java_html_boot_BrowserBuilder(false).constructor.cons__V_3Ljava_lang_Object_2.call(stA0, lcA0);
return stA0;

};
c['newBrowser__Lnet_java_html_boot_BrowserBuilder_2_3Ljava_lang_Object_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2 = function(lcA1) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder(false)._clazz.call(lcA0, lcA1);
return lcA0;

};
c['loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadFinished__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder(false)._onLoad.call(lcA0, lcA1);
return lcA0;

};
c['loadFinished__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder(false)._resource.call(lcA0, lcA1);
return lcA0;

};
c['loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.locale__Lnet_java_html_boot_BrowserBuilder_2Ljava_util_Locale_2 = function(lcA1) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder(false)._locale.call(lcA0, lcA1);
return lcA0;

};
c['locale__Lnet_java_html_boot_BrowserBuilder_2Ljava_util_Locale_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder(false)._methodName.call(lcA0, lcA1);
vm.net_java_html_boot_BrowserBuilder(false)._methodArgs.call(lcA0, lcA2);
return lcA0;

};
c['invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.classloader__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_ClassLoader_2 = function(lcA1) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder(false)._loader.call(lcA0, lcA1);
return lcA0;

};
c['classloader__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_ClassLoader_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.showAndWait__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.net_java_html_boot_BrowserBuilder(false)._resource.call(lcA0)) !== null) { gt = 17; break IF; }
var stA0 = new vm.java_lang_NullPointerException;
vm.java_lang_NullPointerException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "Need to specify resource via loadPage method");
{ var stA0 = stA0; throw stA0; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((vm.net_java_html_boot_BrowserBuilder(false)._clazz.call(lcA0)) === null) { gt = 32; break IF; }
var lcA1 = vm.net_java_html_boot_BrowserBuilder(false)._clazz.call(lcA0);
{ gt = 60; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

if ((vm.net_java_html_boot_BrowserBuilder(false)._onLoad.call(lcA0)) === null) { gt = 50; break IF; }
var stA0 = invoker.getClass__Ljava_lang_Class_2(vm.net_java_html_boot_BrowserBuilder(false)._onLoad.call(lcA0));
var lcA1 = stA0;
{ gt = 60; break IF; }
    }
    X_50: for (;;) { IF: if (gt <= 50) {
var stA0 = new vm.java_lang_NullPointerException;
vm.java_lang_NullPointerException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "loadClass, neither loadFinished was called!");
{ var stA0 = stA0; throw stA0; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/io/IOException;', vm.java_io_IOException, 1);
Array.at(stA0, 0, null);
var lcA2 = stA0;
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).findLocalizedResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_util_Locale_2_3Ljava_io_IOException_2Ljava_lang_Class_2(vm.net_java_html_boot_BrowserBuilder(false)._resource.call(lcA0), vm.net_java_html_boot_BrowserBuilder(false)._locale.call(lcA0), lcA2, lcA1);
var lcA3 = stA0;
var lcA4 = null;
var lcA5 = vm.net_java_html_boot_BrowserBuilder(false)._context.call(lcA0);
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

if ((lcI7) >= (lcI6)) { gt = 138; break IF; }
var lcA8 = Array.at(lcA5, lcI7);
var stI0 = lcA8 != null && lcA8['$instOf_org_netbeans_html_boot_spi_Fn$Presenter'] ? 1 : 0;
if ((stI0) == 0) { gt = 132; break IF; }
if (lcA8 !== null && !lcA8['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) throw vm.java_lang_ClassCastException(true);
var lcA4 = lcA8;
{ gt = 138; break IF; }
    }
    X_132: for (;;) { IF: if (gt <= 132) {
lcI7++;
{ gt = 0; continue X_100; }
    }
    X_138: for (;;) { IF: if (gt <= 138) {

if ((lcA4) !== null) { gt = 193; break IF; }
if ((vm.net_java_html_boot_BrowserBuilder(false)._loader.call(lcA0)) === null) { gt = 193; break IF; }
var stA0 = vm.java_util_ServiceLoader(false)['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2'](vm.org_netbeans_html_boot_spi_Fn$Presenter(false).constructor.$class, vm.net_java_html_boot_BrowserBuilder(false)._loader.call(lcA0));
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 193; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var lcA4 = lcA6;
{ gt = 193; break IF; }
    }
    X_193: for (;;) { IF: if (gt <= 193) {

if ((lcA4) !== null) { gt = 237; break IF; }
var stA0 = vm.java_util_ServiceLoader(false)['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2'](vm.org_netbeans_html_boot_spi_Fn$Presenter(false).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_208: for (;;) { IF: if (gt <= 208) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 237; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_spi_Fn$Presenter']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var lcA4 = lcA6;
{ gt = 237; break IF; }
    }
    X_237: for (;;) { IF: if (gt <= 237) {

if ((lcA4) !== null) { gt = 252; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "Can't find any Fn.Presenter");
{ var stA0 = stA0; throw stA0; }
    }
    X_252: for (;;) { IF: if (gt <= 252) {

if ((vm.net_java_html_boot_BrowserBuilder(false)._loader.call(lcA0)) === null) { gt = 308; break IF; }
var stI0 = vm.org_netbeans_html_boot_impl_FnUtils(false).isJavaScriptCapable__ZLjava_lang_ClassLoader_2(vm.net_java_html_boot_BrowserBuilder(false)._loader.call(lcA0));
if ((stI0) != 0) { gt = 299; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Loader cannot resolve @JavaScriptBody: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,vm.net_java_html_boot_BrowserBuilder(false)._loader.call(lcA0));
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_299: for (;;) { IF: if (gt <= 299) {

var lcA5 = vm.net_java_html_boot_BrowserBuilder(false)._loader.call(lcA0);
{ gt = 356; break IF; }
    }
    X_308: for (;;) { IF: if (gt <= 308) {

var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
var stI0 = vm.org_netbeans_html_boot_impl_FnUtils(false).isJavaScriptCapable__ZLjava_lang_ClassLoader_2(stA0);
if ((stI0) == 0) { gt = 327; break IF; }
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
var lcA5 = stA0;
{ gt = 356; break IF; }
    }
    X_327: for (;;) { IF: if (gt <= 327) {
var stA0 = new vm.net_java_html_boot_BrowserBuilder$FImpl;
var stA2 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
vm.net_java_html_boot_BrowserBuilder$FImpl(false).constructor.cons__VLjava_lang_ClassLoader_2.call(stA0, stA2);
var lcA6 = stA0;
var stA2 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA1);
var stA2 = invoker.getParent__Ljava_lang_ClassLoader_2(stA2);
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils(false).newLoader__Ljava_lang_ClassLoader_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2(lcA6, lcA4, stA2);
var lcA5 = stA0;
    }
    X_356: for (;;) { IF: if (gt <= 356) {

var lcA6 = lcA4;
var stA0 = lcA4;var stA1 = lcA3;var stA2 = new vm.net_java_html_boot_BrowserBuilder$1OnPageLoad;
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false).constructor.cons__VLnet_java_html_boot_BrowserBuilder_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2Ljava_lang_Class_2.call(stA2, lcA0, lcA6, lcA5, lcA1);
invoker.displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2(stA0,stA1, stA2);
return;

    }
}}}}}}}}}}}}}}}}}
};
c['showAndWait__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === null) { gt = 74; break IF; }
var stI0 = invoker.lastIndexOf__II(lcA0,(46));
var lcI4 = stI0;
if ((lcI4) == (-1)) { gt = 55; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA1 = invoker.substring__Ljava_lang_String_2II(lcA0,0, lcI4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA1 = invoker.substring__Ljava_lang_String_2I(lcA0,lcI4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA0 = stA0;
{ gt = 74; break IF; }
    }
    X_55: for (;;) { IF: if (gt <= 55) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA0 = stA0;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var lcA4 = null;
try {
var stA0 = vm.java_lang_System(false)['getProperty__Ljava_lang_String_2Ljava_lang_String_2']("browser.rootdir");
var lcA5 = stA0;
if ((lcA5) === null) { gt = 119; break IF; }
var stA0 = new vm.java_io_File;
vm.java_io_File(false).constructor['cons__VLjava_lang_String_2Ljava_lang_String_2'].call(stA0, lcA5, lcA0);
var stA0 = invoker.toURI__Ljava_net_URI_2(stA0);
var stA0 = invoker.toURL__Ljava_net_URL_2(stA0);
var lcA6 = stA0;
var stI0 = vm.net_java_html_boot_BrowserBuilder(false).isReal__ZLjava_net_URL_2(lcA6);
if ((stI0) == 0) { gt = 119; break IF; }
var lcA4 = lcA6;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_119: for (;;) { IF: if (gt <= 119) {
try {var stA0 = new vm.java_net_URL;
vm.java_net_URL(false).constructor['cons__VLjava_lang_String_2'].call(stA0, lcA0);
var lcA6 = stA0;
if ((lcA1) === null) { gt = 141; break IF; }
var stI0 = vm.net_java_html_boot_BrowserBuilder(false).isReal__ZLjava_net_URL_2(lcA6);
if ((stI0) == 0) { gt = 145; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_141: for (;;) { IF: if (gt <= 141) {
try {
var lcA4 = lcA6;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_145: for (;;) { IF: if (gt <= 145) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}return lcA4;
    }
    X_148: for (;;) { IF: if (gt <= 148) {
var lcA5 = stA0;
Array.at(lcA2, 0, lcA5);
if ((lcA4) !== null) { gt = 167; break IF; }
var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(lcA3,lcA0);
var lcA4 = stA0;
    }
    X_167: for (;;) { IF: if (gt <= 167) {

if ((lcA4) !== null) { gt = 244; break IF; }
var stA0 = invoker.getProtectionDomain__Ljava_security_ProtectionDomain_2(lcA3);
var lcA5 = stA0;
if ((lcA5) === null) { gt = 244; break IF; }
var stA0 = invoker.getCodeSource__Ljava_security_CodeSource_2(lcA5);
if ((stA0) === null) { gt = 244; break IF; }
var stA0 = invoker.getCodeSource__Ljava_security_CodeSource_2(lcA5);
var stA0 = invoker.getLocation__Ljava_net_URL_2(stA0);
var lcA6 = stA0;
try {var stA0 = new vm.java_net_URL;
vm.java_net_URL(false).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA0, lcA6, lcA0);
var lcA7 = stA0;
var stI0 = vm.net_java_html_boot_BrowserBuilder(false).isReal__ZLjava_net_URL_2(lcA7);
if ((stI0) == 0) { gt = 225; break IF; }
var lcA4 = lcA7;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_net_MalformedURLException']) {var stA0 = e;{ gt = 228; break IF; }}
throw e;
}    }
    X_225: for (;;) { IF: if (gt <= 225) {
{ gt = 244; break IF; }
    }
    X_228: for (;;) { IF: if (gt <= 228) {
var lcA7 = stA0;
var stA0 = invoker.initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(lcA7,Array.at(lcA2, 0));
Array.at(lcA2, 0, lcA7);
    }
    X_244: for (;;) { IF: if (gt <= 244) {

if ((lcA4) !== null) { gt = 384; break IF; }
var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(vm.net_java_html_boot_BrowserBuilder(false).constructor.$class,"html4j.txt");
var lcA5 = stA0;
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.net_java_html_boot_BrowserBuilder(false)._LOG(),vm.java_util_logging_Level(false)['_FINE'](), "Found html4j {0}", lcA5);
if ((lcA5) === null) { gt = 384; break IF; }
try {
var stA0 = invoker.openConnection__Ljava_net_URLConnection_2(lcA5);
var lcA6 = stA0;
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.net_java_html_boot_BrowserBuilder(false)._LOG(),vm.java_util_logging_Level(false)['_FINE'](), "testing : {0}", lcA6);
var stI0 = lcA6 != null && lcA6['$instOf_java_net_JarURLConnection'] ? 1 : 0;
if ((stI0) == 0) { gt = 374; break IF; }
if (lcA6 !== null && !lcA6['$instOf_java_net_JarURLConnection']) throw vm.java_lang_ClassCastException(true);
var lcA7 = lcA6;
var stA0 = invoker.getJarFileURL__Ljava_net_URL_2(lcA7);
var lcA8 = stA0;
var lcI9 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 377; break IF; }}
throw e;
}    }
    X_321: for (;;) { IF: if (gt <= 321) {
try {
if ((lcI9) >= ((50))) { gt = 374; break IF; }
var stA0 = new vm.java_net_URL;
vm.java_net_URL(false).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA0, lcA8, lcA0);
var lcA10 = stA0;
var stI0 = vm.net_java_html_boot_BrowserBuilder(false).isReal__ZLjava_net_URL_2(lcA10);
if ((stI0) == 0) { gt = 355; break IF; }
var lcA4 = lcA10;
{ gt = 374; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 377; break IF; }}
throw e;
}    }
    X_355: for (;;) { IF: if (gt <= 355) {
try {var stA0 = new vm.java_net_URL;
vm.java_net_URL(false).constructor['cons__VLjava_net_URL_2Ljava_lang_String_2'].call(stA0, lcA8, "..");
var lcA8 = stA0;
lcI9++;
{ gt = 0; continue X_321; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 377; break IF; }}
throw e;
}    }
    X_374: for (;;) { IF: if (gt <= 374) {
{ gt = 384; break IF; }
    }
    X_377: for (;;) { IF: if (gt <= 377) {
var lcA6 = stA0;
Array.at(lcA2, 0, lcA6);
    }
    X_384: for (;;) { IF: if (gt <= 384) {

return lcA4;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.findLocalizedResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_util_Locale_2_3Ljava_io_IOException_2Ljava_lang_Class_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA4 = null;
if ((lcA1) === null) { gt = 87; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"_");
var stA2 = invoker.getLanguage__Ljava_lang_String_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"_");
var stA2 = invoker.getCountry__Ljava_lang_String_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2(stA0, stA1, lcA2, lcA3);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 57; break IF; }
return lcA4;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"_");
var stA2 = invoker.getLanguage__Ljava_lang_String_2(lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2(stA0, stA1, lcA2, lcA3);
var lcA4 = stA0;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

if ((lcA4) === null) { gt = 95; break IF; }
return lcA4;
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var stA0 = vm.net_java_html_boot_BrowserBuilder(false).findResourceURL__Ljava_net_URL_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_io_IOException_2Ljava_lang_Class_2(lcA0, null, lcA2, lcA3);
return stA0;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.isReal__ZLjava_net_URL_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.openConnection__Ljava_net_URLConnection_2(lcA0);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_java_net_HttpURLConnection'] ? 1 : 0;
if ((stI0) == 0) { gt = 64; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_net_HttpURLConnection']) throw vm.java_lang_ClassCastException(true);
var lcA2 = lcA1;
invoker.setReadTimeout__VI(lcA2,(5000));
var stI0 = invoker.getResponseCode__I(lcA2);
if ((stI0) < ((300))) { gt = 64; break IF; }
var stA0 = new vm.java_io_IOException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong code: ");
var stI3 = invoker.getResponseCode__I(lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,stI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_io_IOException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}    }
    X_64: for (;;) { IF: if (gt <= 64) {
try {
var stA0 = invoker.getInputStream__Ljava_io_InputStream_2(lcA1);
var lcA2 = stA0;
invoker.close__V(lcA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.net_java_html_boot_BrowserBuilder(false)._LOG(),vm.java_util_logging_Level(false)['_FINE'](), "found real url: {0}", lcA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}return 1;
    }
    X_87: for (;;) { IF: if (gt <= 87) {
var lcA1 = stA0;
var stA0 = vm.net_java_html_boot_BrowserBuilder(false)._LOG();var stA1 = vm.java_util_logging_Level(false)['_FINE']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot open ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA0);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA1);
return 0;

    }
}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.access$000___3Ljava_lang_Class_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return vm.net_java_html_boot_BrowserBuilder(false)._browserClass.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_util_logging_Logger_2 = function() {
return vm.net_java_html_boot_BrowserBuilder(false)._LOG();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljava_lang_Runnable_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return vm.net_java_html_boot_BrowserBuilder(false)._onLoad.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return vm.net_java_html_boot_BrowserBuilder(false)._methodName.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$400___3Ljava_lang_String_2Lnet_java_html_boot_BrowserBuilder_2 = function(lcA0) {
return vm.net_java_html_boot_BrowserBuilder(false)._methodArgs.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_boot_BrowserBuilder(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
vm.net_java_html_boot_BrowserBuilder(false)._LOG(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilderfillInstOf });
      net_java_html_boot_BrowserBuilderfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.net_java_html_boot_BrowserBuilder(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_boot_BrowserBuilder_resource = null;
    this.fld_net_java_html_boot_BrowserBuilder_clazz = null;
    this.fld_net_java_html_boot_BrowserBuilder_browserClass = null;
    this.fld_net_java_html_boot_BrowserBuilder_onLoad = null;
    this.fld_net_java_html_boot_BrowserBuilder_methodName = null;
    this.fld_net_java_html_boot_BrowserBuilder_methodArgs = null;
    this.fld_net_java_html_boot_BrowserBuilder_context = null;
    this.fld_net_java_html_boot_BrowserBuilder_loader = null;
    this.fld_net_java_html_boot_BrowserBuilder_locale = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['net_java_html_boot_BrowserBuilder'] = vm.net_java_html_boot_BrowserBuilder;

vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });
vm.java_net_URL = link('java/net/URL', function(f) { vm.java_net_URL =  f; });
vm.java_net_MalformedURLException = link('java/net/MalformedURLException', function(f) { vm.java_net_MalformedURLException =  f; });
vm.java_io_File = link('java/io/File', function(f) { vm.java_io_File =  f; });
vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });

vm.net_java_html_boot_BrowserBuilder$1OnPageLoad = function net_java_html_boot_BrowserBuilder$1OnPageLoad() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder$1OnPageLoad;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$dP = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP = v; return this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP; };
  m = c._val$activeLoader = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader = v; return this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader; };
  m = c._val$myCls = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls = v; return this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0 = v; return this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0; };
    m = CLS.cons__VLnet_java_html_boot_BrowserBuilder_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2Ljava_lang_Class_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(lcA0, lcA1);
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$dP.call(lcA0, lcA2);
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$activeLoader.call(lcA0, lcA3);
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$myCls.call(lcA0, lcA4);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = vm.org_netbeans_html_boot_spi_Fn(false).activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
var lcA1 = stA0;
if ((lcA1) === null) { gt = 12; break IF; }
var stA0 = lcA1;{ gt = 16; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_12: for (;;) { IF: if (gt <= 12) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}var stA0 = vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$dP.call(lcA0);    }
    X_16: for (;;) { IF: if (gt <= 16) {
try {var lcA2 = stA0;
var stA0 = vm.java_lang_Thread(false)['currentThread__Ljava_lang_Thread_2']();
invoker.setContextClassLoader__VLjava_lang_ClassLoader_2(stA0,vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$activeLoader.call(lcA0));
var stA0 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$myCls.call(lcA0));
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 1, vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$activeLoader.call(lcA0));
var lcA3 = stA0;
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$000___3Ljava_lang_Class_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(lcA0));
if ((stA0) === null) { gt = 63; break IF; }
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$000___3Ljava_lang_Class_2Lnet_java_html_boot_BrowserBuilder_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._this$0.call(lcA0));
Array.at(stA0, 0, lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_63: for (;;) { IF: if (gt <= 63) {
try {var stA0 = vm.org_netbeans_html_context_spi_Contexts(false)['newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2']();
var lcA4 = stA0;
var stI0 = vm.org_netbeans_html_context_spi_Contexts(false)['fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2'](lcA3, lcA4);
if ((stI0) != 0) { gt = 89; break IF; }
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$100__Ljava_util_logging_Logger_2();
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,vm.java_util_logging_Level(false)['_WARNING'](), "Using empty technology for {0}", lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_89: for (;;) { IF: if (gt <= 89) {
try {
var stI0 = lcA2 != null && lcA2['$instOf_java_util_concurrent_Executor'] ? 1 : 0;
if ((stI0) == 0) { gt = 111; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_util_concurrent_Executor']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(lcA4,vm.java_util_concurrent_Executor(false).constructor.$class, lcA2, (1000));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}    }
    X_111: for (;;) { IF: if (gt <= 111) {
try {
var stA0 = invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I(lcA4,vm.org_netbeans_html_boot_spi_Fn$Presenter(false).constructor.$class, lcA2, (1000));
var stA0 = invoker.build__Lnet_java_html_BrwsrCtx_2(lcA4);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = new vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod;
vm.net_java_html_boot_BrowserBuilder$1OnPageLoad$1CallInitMethod(false).constructor.cons__VLnet_java_html_boot_BrowserBuilder$1OnPageLoad_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_Class_2.call(stA1, lcA0, lcA2, lcA3);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_ClassNotFoundException']) {var stA0 = e;{ gt = 148; break IF; }}
throw e;
}{ gt = 184; break IF; }
    }
    X_148: for (;;) { IF: if (gt <= 148) {
var lcA1 = stA0;
var stA0 = vm.net_java_html_boot_BrowserBuilder(false).access$100__Ljava_util_logging_Logger_2();
var stA1 = vm.java_util_logging_Level(false)['_SEVERE']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't load ");
var stA3 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_boot_BrowserBuilder$1OnPageLoad(false)._val$myCls.call(lcA0));
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA1);
    }
    X_184: for (;;) { IF: if (gt <= 184) {
return;

    }
}}}}}}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilder$1OnPageLoadfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder$1OnPageLoad', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilder$1OnPageLoadfillInstOf });
      net_java_html_boot_BrowserBuilder$1OnPageLoadfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder$1OnPageLoad';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$dP = null;
    this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$activeLoader = null;
    this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_val$myCls = null;
    this.fld_net_java_html_boot_BrowserBuilder$1OnPageLoad_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_concurrent_Executor = link('java/util/concurrent/Executor', function(f) { vm.java_util_concurrent_Executor =  f; });
vm.org_netbeans_html_context_spi_Contexts = link('org/netbeans/html/context/spi/Contexts', function(f) { vm.org_netbeans_html_context_spi_Contexts =  f; });
vm.java_lang_Thread = link('java/lang/Thread', function(f) { vm.java_lang_Thread =  f; });
vm.java_lang_ClassNotFoundException = link('java/lang/ClassNotFoundException', function(f) { vm.java_lang_ClassNotFoundException =  f; });

vm.org_netbeans_html_boot_spi_Fn = function org_netbeans_html_boot_spi_Fn() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._presenter = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_spi_Fn_presenter = v; return this.fld_org_netbeans_html_boot_spi_Fn_presenter; };
  CLS.fld_LOADED = null;
  m = c._LOADED = function (v) {  if (arguments.length == 1) CLS.fld_LOADED = v; return CLS.fld_LOADED; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_boot_spi_Fn(false).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, null);
return;

};
CLS['cons__V'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 4;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_boot_spi_Fn(false)._presenter.call(lcA0, lcA1);
return;

};
CLS['cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.isValid__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_boot_spi_Fn(false)._presenter.call(lcA0)) === null) { gt = 22; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
if ((stA0) !== (vm.org_netbeans_html_boot_spi_Fn(false)._presenter.call(lcA0))) { gt = 22; break IF; }
var stI0 = 1;{ gt = 23; break IF; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = 0;    }
    X_23: for (;;) { IF: if (gt <= 23) {
return stI0;

    }
}}}
};
c['isValid__Z'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.isValid__ZLorg_netbeans_html_boot_spi_Fn_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) === null) { gt = 15; break IF; }
var stI0 = lcA0.isValid__Z();
if ((stI0) == 0) { gt = 15; break IF; }
var stI0 = 1;{ gt = 16; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = 0;    }
    X_16: for (;;) { IF: if (gt <= 16) {
return stI0;

    }
}}}
};
c['isValid__ZLorg_netbeans_html_boot_spi_Fn_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.define__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 13; break IF; }
var stA0 = null;{ gt = 21; break IF; }
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var stA0 = invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2(lcA3,lcA1, lcA2);
    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stA0;

    }
}}}
};
c['define__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.preload__Lorg_netbeans_html_boot_spi_Fn_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {
var stA0 = new vm.org_netbeans_html_boot_spi_Fn$1;
var stA2 = lcA0.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
vm.org_netbeans_html_boot_spi_Fn$1(false).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2Ljava_lang_Class_2.call(stA0, stA2, lcA0, lcA2, lcA1);
return stA0;

    }
}}
};
c['preload__Lorg_netbeans_html_boot_spi_Fn_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_Class_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function() {
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
return stA0;

};
c['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA0) {
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2(lcA0);
return stA0;

};
c['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/boot/spi/Fn.invoke';
};
c['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1153;
    m.cls = CLS;
    m = c.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(lcA0,lcA0, lcA2);
return;

};
c['invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_boot_spi_Fn(false)._presenter.call(lcA0);

};
c['presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.access$000__Ljava_util_Map_2 = function() {
return vm.org_netbeans_html_boot_spi_Fn(false)._LOADED();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_util_HashMap;
vm.java_util_HashMap(false).constructor['cons__V'].call(stA0);
vm.org_netbeans_html_boot_spi_Fn(false)._LOADED(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_FnfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_FnfillInstOf });
      org_netbeans_html_boot_spi_FnfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_boot_spi_Fn(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_spi_Fn_presenter = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_boot_spi_Fn'] = vm.org_netbeans_html_boot_spi_Fn;

vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });

vm.org_netbeans_html_boot_spi_Fn$1 = function org_netbeans_html_boot_spi_Fn$1() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$1;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_boot_spi_Fn(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$fn = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_spi_Fn$1_val$fn = v; return this.fld_org_netbeans_html_boot_spi_Fn$1_val$fn; };
  m = c._val$resource = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_spi_Fn$1_val$resource = v; return this.fld_org_netbeans_html_boot_spi_Fn$1_val$resource; };
  m = c._val$caller = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_spi_Fn$1_val$caller = v; return this.fld_org_netbeans_html_boot_spi_Fn$1_val$caller; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2Ljava_lang_Class_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_spi_Fn$1(false)._val$fn.call(lcA0, lcA2);
vm.org_netbeans_html_boot_spi_Fn$1(false)._val$resource.call(lcA0, lcA3);
vm.org_netbeans_html_boot_spi_Fn$1(false)._val$caller.call(lcA0, lcA4);
vm.org_netbeans_html_boot_spi_Fn(false).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(lcA0, lcA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_spi_Fn$1(false).loadResource__V.call(lcA0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(vm.org_netbeans_html_boot_spi_Fn$1(false)._val$fn.call(lcA0),lcA1, lcA2);
return stA0;

};
c['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_spi_Fn$1(false).loadResource__V.call(lcA0);
invoker.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2(vm.org_netbeans_html_boot_spi_Fn$1(false)._val$fn.call(lcA0),lcA1, lcA2);
return;

};
c['invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.loadResource__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.presenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2();
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 14; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
var lcA1 = stA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcA1) === null) { gt = 202; break IF; }
var stA0 = vm.org_netbeans_html_boot_spi_Fn(false).access$000__Ljava_util_Map_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,vm.org_netbeans_html_boot_spi_Fn$1(false)._val$resource.call(lcA0));
if (stA0 !== null && !stA0['$instOf_java_util_Set']) throw vm.java_lang_ClassCastException(true);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 60; break IF; }
var stA0 = new vm.java_util_HashSet;
vm.java_util_HashSet(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = vm.org_netbeans_html_boot_spi_Fn(false).access$000__Ljava_util_Map_2();
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,vm.org_netbeans_html_boot_spi_Fn$1(false)._val$resource.call(lcA0), lcA2);
    }
    X_60: for (;;) { IF: if (gt <= 60) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA1);
if ((stI0) == 0) { gt = 202; break IF; }
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(vm.org_netbeans_html_boot_spi_Fn$1(false)._val$caller.call(lcA0));
var lcA3 = stA0;
var stA0 = invoker.getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2(lcA3,vm.org_netbeans_html_boot_spi_Fn$1(false)._val$resource.call(lcA0));
var lcA4 = stA0;
if ((lcA4) !== null) { gt = 119; break IF; }
var stI0 = invoker.startsWith__ZLjava_lang_String_2(vm.org_netbeans_html_boot_spi_Fn$1(false)._val$resource.call(lcA0),"/");
if ((stI0) == 0) { gt = 119; break IF; }
var stA1 = invoker.substring__Ljava_lang_String_2I(vm.org_netbeans_html_boot_spi_Fn$1(false)._val$resource.call(lcA0),1);
var stA0 = invoker.getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2(lcA3,stA1);
var lcA4 = stA0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

if ((lcA4) !== null) { gt = 163; break IF; }
var stA0 = new vm.java_io_IOException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot find ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,vm.org_netbeans_html_boot_spi_Fn$1(false)._val$resource.call(lcA0));
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," in ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_io_IOException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_163: for (;;) { IF: if (gt <= 163) {
try {var stA0 = new vm.java_io_InputStreamReader;
vm.java_io_InputStreamReader(false).constructor['cons__VLjava_io_InputStream_2Ljava_lang_String_2'].call(stA0, lcA4, "UTF-8");
var lcA5 = stA0;
invoker.loadScript__VLjava_io_Reader_2(lcA1,lcA5);
} catch (e) {
var stA0 = e;{ gt = 192; break IF; }
}
invoker.close__V(lcA4);
{ gt = 202; break IF; }
    }
    X_192: for (;;) { IF: if (gt <= 192) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_192; }
}
invoker.close__V(lcA4);
{ var stA0 = lcA6; throw lcA6; }
    }
    X_202: for (;;) { IF: if (gt <= 202) {
return;

    }
}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$1fillInstOf });
      org_netbeans_html_boot_spi_Fn$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_spi_Fn$1_val$fn = null;
    this.fld_org_netbeans_html_boot_spi_Fn$1_val$resource = null;
    this.fld_org_netbeans_html_boot_spi_Fn$1_val$caller = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_io_InputStreamReader = link('java/io/InputStreamReader', function(f) { vm.java_io_InputStreamReader =  f; });
vm.java_util_HashSet = link('java/util/HashSet', function(f) { vm.java_util_HashSet =  f; });
vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });

vm.net_java_html_boot_BrowserBuilder$FImpl = function net_java_html_boot_BrowserBuilder$FImpl() {
  var m;
  var CLS = net_java_html_boot_BrowserBuilder$FImpl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._l = function (v) {  if (arguments.length == 1) this.fld_net_java_html_boot_BrowserBuilder$FImpl_l = v; return this.fld_net_java_html_boot_BrowserBuilder$FImpl_l; };
    m = CLS.cons__VLjava_lang_ClassLoader_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.net_java_html_boot_BrowserBuilder$FImpl(false)._l.call(lcA0, lcA1);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.findResources__VLjava_lang_String_2Ljava_util_Collection_2Z = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI3) == 0) { gt = 31; break IF; }
var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(vm.net_java_html_boot_BrowserBuilder$FImpl(false)._l.call(lcA0),lcA1);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 28; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA4);
    }
    X_28: for (;;) { IF: if (gt <= 28) {
{ gt = 73; break IF; }
    }
    X_31: for (;;) { IF: if (gt <= 31) {
try {
var stA0 = invoker.getResources__Ljava_util_Enumeration_2Ljava_lang_String_2(vm.net_java_html_boot_BrowserBuilder$FImpl(false)._l.call(lcA0),lcA1);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 71; break IF; }}
throw e;
}    }
    X_41: for (;;) { IF: if (gt <= 41) {
try {
var stI0 = invoker.hasMoreElements__Z(lcA4);
if ((stI0) == 0) { gt = 68; break IF; }
var stA1 = invoker.nextElement__Ljava_lang_Object_2(lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,stA1);
{ gt = 0; continue X_41; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 71; break IF; }}
throw e;
}    }
    X_68: for (;;) { IF: if (gt <= 68) {
{ gt = 73; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {
var lcA4 = stA0;
    }
    X_73: for (;;) { IF: if (gt <= 73) {
return;

    }
}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_boot_BrowserBuilder$FImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_boot_BrowserBuilder$FImpl', { value : true });
      vm.org_netbeans_html_boot_impl_FindResources(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_boot_BrowserBuilder$FImplfillInstOf });
      net_java_html_boot_BrowserBuilder$FImplfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/boot/BrowserBuilder$FImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_boot_BrowserBuilder$FImpl_l = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_boot_impl_FindResources = function org_netbeans_html_boot_impl_FindResources() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FindResources;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.findResources__VLjava_lang_String_2Ljava_util_Collection_2Z = function(lcA1, lcA2, lcI3) {
  throw 'no code found for org/netbeans/html/boot/impl/FindResources.findResources';
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FindResourcesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FindResources', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FindResourcesfillInstOf });
      org_netbeans_html_boot_impl_FindResourcesfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FindResources';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_boot_impl_FnUtils = function org_netbeans_html_boot_impl_FnUtils() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.transform___3B_3BLjava_lang_ClassLoader_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$1;
vm.org_netbeans_html_boot_impl_FnUtils$1(false).constructor.cons__V_3B.call(stA0, lcA0);
var lcA2 = stA0;
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$FindInClass;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).constructor.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassVisitor_2.call(stA0, lcA1, null);
var lcA3 = stA0;
invoker.accept__VLorg_objectweb_asm_ClassVisitor_2I(lcA2,lcA3, 0);
var stI0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(lcA3);
if ((stI0) <= 0) { gt = 69; break IF; }
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$ClassWriterEx;
vm.org_netbeans_html_boot_impl_FnUtils$ClassWriterEx(false).constructor.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassReader_2I.call(stA0, lcA1, lcA2, 3);
var lcA4 = stA0;
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$FindInClass;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).constructor.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassVisitor_2.call(stA0, lcA1, lcA4);
var lcA5 = stA0;
invoker.accept__VLorg_objectweb_asm_ClassVisitor_2I(lcA2,lcA5, 0);
var stA0 = invoker.toByteArray___3B(lcA4);
var lcA0 = stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

return lcA0;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isJavaScriptCapable__ZLjava_lang_ClassLoader_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_boot_impl_JsClassLoader'] ? 1 : 0;
if ((stI0) == 0) { gt = 9; break IF; }
return 1;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stA0 = invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2(lcA0,"META-INF/net.java.html.js.classes");
if ((stA0) === null) { gt = 20; break IF; }
return 0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

return 1;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isValid__ZLorg_netbeans_html_boot_spi_Fn_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) === null) { gt = 15; break IF; }
var stI0 = lcA0.isValid__Z();
if ((stI0) == 0) { gt = 15; break IF; }
var stI0 = 1;{ gt = 16; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = 0;    }
    X_16: for (;;) { IF: if (gt <= 16) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.newLoader__Ljava_lang_ClassLoader_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2Ljava_lang_ClassLoader_2 = function(lcA0, lcA1, lcA2) {
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$2;
vm.org_netbeans_html_boot_impl_FnUtils$2(false).constructor.cons__VLjava_lang_ClassLoader_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, lcA2, lcA0, lcA1);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.callback__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$3;
vm.org_netbeans_html_boot_impl_FnUtils$3(false).constructor.cons__V.call(stA0);
var stA0 = stA0.parse__Ljava_lang_String_2Ljava_lang_String_2(lcA0);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.loadScript__VLjava_lang_ClassLoader_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2(lcA0,lcA1);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 37; break IF; }
var stA0 = new vm.java_lang_NullPointerException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't find ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_NullPointerException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_37: for (;;) { IF: if (gt <= 37) {
try {
var lcA3 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}try {var stA0 = new vm.java_io_InputStreamReader;
vm.java_io_InputStreamReader(false).constructor['cons__VLjava_io_InputStream_2Ljava_lang_String_2'].call(stA0, lcA2, "UTF-8");
var lcA3 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_FnContext(false).currentPresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2Z(0);
invoker.loadScript__VLjava_io_Reader_2(stA0,lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 87; break IF; }}
var stA0 = e;{ gt = 71; break IF; }
}try {
if ((lcA3) === null) { gt = 84; break IF; }
invoker.close__V(lcA3);
{ gt = 84; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}    }
    X_71: for (;;) { IF: if (gt <= 71) {
try {var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 87; break IF; }}
var stA0 = e;{ gt = 0; continue X_71; }
}try {
if ((lcA3) === null) { gt = 81; break IF; }
invoker.close__V(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}    }
    X_81: for (;;) { IF: if (gt <= 81) {
try {
{ var stA0 = lcA4; throw lcA4; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 87; break IF; }}
throw e;
}    }
    X_84: for (;;) { IF: if (gt <= 84) {
{ gt = 116; break IF; }
    }
    X_87: for (;;) { IF: if (gt <= 87) {
var lcA3 = stA0;
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't execute ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA1, stA2, lcA3);
{ var stA0 = stA0; throw stA0; }
    }
    X_116: for (;;) { IF: if (gt <= 116) {
return;

    }
}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtilsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtilsfillInstOf });
      org_netbeans_html_boot_impl_FnUtilsfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$3 = function org_netbeans_html_boot_impl_FnUtils$3() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$3;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_boot_impl_JsCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_JsCallback(false).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"vm.");
var stA1 = vm.org_netbeans_html_boot_impl_FnUtils$3(false).mangle__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(lcA2, lcA3, lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"(");
if ((lcA1) === null) { gt = 46; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,lcA1);
    }
    X_46: for (;;) { IF: if (gt <= 46) {

return lcA5;

    }
}}
};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$3', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$3fillInstOf });
      org_netbeans_html_boot_impl_FnUtils$3fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_boot_impl_JsCallback = function org_netbeans_html_boot_impl_JsCallback() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsCallback;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.parse__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var lcI3 = 0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,".@", lcI3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 43; break IF; }
var stA1 = invoker.substring__Ljava_lang_String_2I(lcA1,lcI3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
var lcA1 = stA0;
{ gt = 296; break IF; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var lcI5 = lcI4;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if ((lcI5) <= 0) { gt = 73; break IF; }
var stA0 = lcA1;lcI5 += -1;
var stI0 = invoker.charAt__CI(stA0,lcI5);
var stI0 = vm.java_lang_Character(false)['isJavaIdentifierPart__ZC'](stI0);
if ((stI0) != 0) { gt = 0; continue X_47; }
lcI5++;
{ gt = 73; break IF; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI5, lcI4);
var lcA6 = stA0;
var stA1 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI3, lcI5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,stA1);
var stI0 = invoker.indexOf__III(lcA1,(40), lcI4);
var lcI7 = stI0;
var stI0 = invoker.indexOf__III(lcA1,(41), lcI7);
var lcI8 = stI0;
var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,"::", lcI4);
var lcI9 = stI0;
if ((lcI7) == (-1)) { gt = 143; break IF; }
if ((lcI8) == (-1)) { gt = 143; break IF; }
if ((lcI9) != (-1)) { gt = 170; break IF; }
    }
    X_143: for (;;) { IF: if (gt <= 143) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong format of instance callback. Should be: 'inst.@pkg.Class::method(Ljava/lang/Object;)(param)':\n");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_170: for (;;) { IF: if (gt <= 170) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(lcI4).add32(2), lcI9);
var lcA10 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(lcI9).add32(2), lcI7);
var lcA11 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI7, (lcI8).add32(1));
var lcA12 = stA0;
var stI0 = invoker.indexOf__III(lcA1,(40), (lcI8).add32(1));
var lcI13 = stI0;
if ((lcI13) != (-1)) { gt = 251; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong format of instance callback. Should be: 'inst.@pkg.Class::method(Ljava/lang/Object;)(param)':\n");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_251: for (;;) { IF: if (gt <= 251) {

var stA1 = lcA0.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(lcA6, lcA10, lcA11, lcA12);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA2,stA1);
var stI0 = invoker.charAt__CI(lcA1,(lcI13).add32(1));
if ((stI0) == ((41))) { gt = 288; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,",");
    }
    X_288: for (;;) { IF: if (gt <= 288) {

var lcI3 = (lcI13).add32(1);
{ gt = 0; continue X_10; }
    }
    X_296: for (;;) { IF: if (gt <= 296) {

var lcI3 = 0;
var lcA2 = null;
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,"@", lcI3);
var lcI4 = stI0;
if ((lcI4) != (-1)) { gt = 336; break IF; }
if ((lcA2) !== null) { gt = 321; break IF; }
return lcA1;
    }
    X_321: for (;;) { IF: if (gt <= 321) {

var stA1 = invoker.substring__Ljava_lang_String_2I(lcA1,lcI3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
return stA0;
    }
    X_336: for (;;) { IF: if (gt <= 336) {

if ((lcA2) !== null) { gt = 348; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
    }
    X_348: for (;;) { IF: if (gt <= 348) {

var stA1 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI3, lcI4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,stA1);
var stI0 = invoker.indexOf__III(lcA1,(40), lcI4);
var lcI5 = stI0;
var stI0 = invoker.indexOf__III(lcA1,(41), lcI5);
var lcI6 = stI0;
var stI0 = invoker.indexOf__ILjava_lang_String_2I(lcA1,"::", lcI4);
var lcI7 = stI0;
var stI0 = invoker.indexOf__III(lcA1,(40), (lcI6).add32(1));
var lcI8 = stI0;
if ((lcI5) == (-1)) { gt = 426; break IF; }
if ((lcI6) == (-1)) { gt = 426; break IF; }
if ((lcI7) == (-1)) { gt = 426; break IF; }
if ((lcI8) != (-1)) { gt = 453; break IF; }
    }
    X_426: for (;;) { IF: if (gt <= 426) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Wrong format of static callback. Should be: '@pkg.Class::staticMethod(Ljava/lang/Object;)(param)':\n");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_453: for (;;) { IF: if (gt <= 453) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(lcI4).add32(1), lcI7);
var lcA9 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,(lcI7).add32(2), lcI5);
var lcA10 = stA0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,lcI5, (lcI6).add32(1));
var lcA11 = stA0;
var stA1 = lcA0.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(null, lcA9, lcA10, lcA11);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA2,stA1);
var lcI3 = (lcI8).add32(1);
{ gt = 0; continue X_300; }

    }
}}}}}}}}}}}}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  throw 'no code found for org/netbeans/html/boot/impl/JsCallback.callMethod';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.mangle__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA2,"(");
if ((stI0) == 0) { gt = 15; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA2,1);
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = invoker.endsWith__ZLjava_lang_String_2(lcA2,")");
if ((stI0) == 0) { gt = 36; break IF; }
var stI2 = invoker.length__I(lcA2);
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA2,0, (stI2).sub32(1));
var lcA2 = stA0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA1 = vm.org_netbeans_html_boot_impl_JsCallback(false).replace__Ljava_lang_String_2Ljava_lang_String_2(lcA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"$");
var stA1 = vm.org_netbeans_html_boot_impl_JsCallback(false).replace__Ljava_lang_String_2Ljava_lang_String_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"$");
var stA1 = vm.org_netbeans_html_boot_impl_JsCallback(false).replace__Ljava_lang_String_2Ljava_lang_String_2(lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.replace__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(lcA0,"_", "_1");
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,";", "_2");
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,"[", "_3");
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(46), (95));
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(47), (95));
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsCallback', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsCallbackfillInstOf });
      org_netbeans_html_boot_impl_JsCallbackfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Character = link('java/lang/Character', function(f) { vm.java_lang_Character =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$2 = function org_netbeans_html_boot_impl_FnUtils$2() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$2;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_boot_impl_JsClassLoader(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$f = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$2_val$f = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$2_val$f; };
  m = c._val$d = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$2_val$d = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$2_val$d; };
    m = CLS.cons__VLjava_lang_ClassLoader_2Lorg_netbeans_html_boot_impl_FindResources_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$2(false)._val$f.call(lcA0, lcA2);
vm.org_netbeans_html_boot_impl_FnUtils$2(false)._val$d.call(lcA0, lcA3);
vm.org_netbeans_html_boot_impl_JsClassLoader(false).constructor.cons__VLjava_lang_ClassLoader_2.call(lcA0, lcA1);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.findResource__Ljava_net_URL_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$2(false).res__Ljava_util_List_2Ljava_lang_String_2Z.call(lcA0, lcA1, 1);
var lcA2 = stA0;
var stI0 = invoker.isEmpty__Z(lcA2);
if ((stI0) == 0) { gt = 20; break IF; }
var stA0 = null;{ gt = 30; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA2,0);
if (stA0 !== null && !stA0['$instOf_java_net_URL']) throw vm.java_lang_ClassCastException(true);
    }
    X_30: for (;;) { IF: if (gt <= 30) {
return stA0;

    }
}}}
};
c['findResource__Ljava_net_URL_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.findResources__Ljava_util_Enumeration_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$2(false).res__Ljava_util_List_2Ljava_lang_String_2Z.call(lcA0, lcA1, 0);
var stA0 = vm.java_util_Collections(false)['enumeration__Ljava_util_Enumeration_2Ljava_util_Collection_2'](stA0);
return stA0;

};
c['findResources__Ljava_util_Enumeration_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.res__Ljava_util_List_2Ljava_lang_String_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
vm.org_netbeans_html_boot_impl_FnUtils$2(false)._val$f.call(lcA0).findResources__VLjava_lang_String_2Ljava_util_Collection_2Z(lcA1, lcA3, lcI2);
return lcA3;

};
    m.access = 2;
    m.cls = CLS;
    m = c.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_FnUtils$2(false)._val$d.call(lcA0),lcA1, lcA2);
return stA0;

};
    m.access = 132;
    m.cls = CLS;
    m = c.loadScript__VLjava_io_Reader_2 = function(lcA1) {
  var  lcA0 = this;
invoker.loadScript__VLjava_io_Reader_2(vm.org_netbeans_html_boot_impl_FnUtils$2(false)._val$d.call(lcA0),lcA1);
return;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$2', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$2fillInstOf });
      org_netbeans_html_boot_impl_FnUtils$2fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$2_val$f = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$2_val$d = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });

vm.org_netbeans_html_boot_impl_JsClassLoader = function org_netbeans_html_boot_impl_JsClassLoader() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsClassLoader;
  if (!CLS.$class) {
    var pp = vm.java_lang_ClassLoader(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__VLjava_lang_ClassLoader_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_ClassLoader(false).constructor['cons__VLjava_lang_ClassLoader_2'].call(lcA0, lcA1);
var stI1 = invoker.desiredAssertionStatus__Z(vm.org_netbeans_html_boot_impl_JsClassLoader(false).constructor.$class);
invoker.setDefaultAssertionStatus__VZ(lcA0,stI1);
return;

};
CLS['cons__VLjava_lang_ClassLoader_2'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.findResource__Ljava_net_URL_2Ljava_lang_String_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/boot/impl/JsClassLoader.findResource';
};
c['findResource__Ljava_net_URL_2Ljava_lang_String_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.findResources__Ljava_util_Enumeration_2Ljava_lang_String_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/boot/impl/JsClassLoader.findResources';
};
c['findResources__Ljava_util_Enumeration_2Ljava_lang_String_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.findClass__Ljava_lang_Class_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"javafx");
if ((stI0) == 0) { gt = 14; break IF; }
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"netscape");
if ((stI0) == 0) { gt = 28; break IF; }
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"com.sun");
if ((stI0) == 0) { gt = 42; break IF; }
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"org.netbeans.html.context.spi");
if ((stI0) == 0) { gt = 56; break IF; }
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA1,"net.java.html.BrwsrCtx");
if ((stI0) == 0) { gt = 70; break IF; }
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA1 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_JsClassLoader(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,stA1);
if ((stI0) == 0) { gt = 85; break IF; }
return vm.org_netbeans_html_boot_impl_JsClassLoader(false).constructor.$class;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA1 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_spi_Fn(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,stA1);
if ((stI0) == 0) { gt = 100; break IF; }
return vm.org_netbeans_html_boot_spi_Fn(false).constructor.$class;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA1 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_spi_Fn$Presenter(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,stA1);
if ((stI0) == 0) { gt = 115; break IF; }
return vm.org_netbeans_html_boot_spi_Fn$Presenter(false).constructor.$class;
    }
    X_115: for (;;) { IF: if (gt <= 115) {

var stA1 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_spi_Fn$ToJavaScript(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,stA1);
if ((stI0) == 0) { gt = 130; break IF; }
return vm.org_netbeans_html_boot_spi_Fn$ToJavaScript(false).constructor.$class;
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stA1 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_spi_Fn$FromJavaScript(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,stA1);
if ((stI0) == 0) { gt = 145; break IF; }
return vm.org_netbeans_html_boot_spi_Fn$FromJavaScript(false).constructor.$class;
    }
    X_145: for (;;) { IF: if (gt <= 145) {

var stA1 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_FnUtils(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,stA1);
if ((stI0) == 0) { gt = 160; break IF; }
return vm.org_netbeans_html_boot_impl_FnUtils(false).constructor.$class;
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.spi.Fn");
if ((stI0) != 0) { gt = 187; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.impl.FnUtils");
if ((stI0) != 0) { gt = 187; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.impl.FnContext");
if ((stI0) == 0) { gt = 192; break IF; }
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2'](lcA1);
return stA0;
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA2 = invoker.replace__Ljava_lang_String_2CC(lcA1,(46), (47));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.findResource__Ljava_net_URL_2Ljava_lang_String_2(stA0,stA1);
var lcA2 = stA0;
if ((lcA2) === null) { gt = 434; break IF; }
var lcA3 = null;
try {
var stA0 = invoker.openStream__Ljava_io_InputStream_2(lcA2);
var lcA3 = stA0;
var stI0 = invoker.available__I(lcA3);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[B', null, stI0);
var lcA4 = stA0;
var lcI5 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_245: for (;;) { IF: if (gt <= 245) {
try {
if ((lcI5) >= ((lcA4).length)) { gt = 312; break IF; }
var stI0 = invoker.read__I_3BII(lcA3,lcA4, lcI5, ((lcA4).length).sub32(lcI5));
var lcI6 = stI0;
if ((lcI6) != (-1)) { gt = 302; break IF; }
var stA0 = new vm.java_io_IOException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't read ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA2);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_io_IOException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_302: for (;;) { IF: if (gt <= 302) {
try {
var lcI5 = (lcI5).add32(lcI6);
{ gt = 0; continue X_245; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_312: for (;;) { IF: if (gt <= 312) {
try {
invoker.close__V(lcA3);
var lcA3 = null;
var stI0 = vm.org_netbeans_html_boot_impl_JsPkgCache(false).process__ZLjava_lang_ClassLoader_2Ljava_lang_String_2(lcA0, lcA1);
if ((stI0) == 0) { gt = 334; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils(false).transform___3B_3BLjava_lang_ClassLoader_2(lcA4, lcA0);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_334: for (;;) { IF: if (gt <= 334) {
try {
var stA0 = invoker.defineClass__Ljava_lang_Class_2Ljava_lang_String_2_3BII(lcA0,lcA1, lcA4, 0, (lcA4).length);
var lcA6 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 374; break IF; }}
var stA0 = e;{ gt = 405; break IF; }
}try {
if ((lcA3) === null) { gt = 355; break IF; }
invoker.close__V(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 358; break IF; }}
throw e;
}    }
    X_355: for (;;) { IF: if (gt <= 355) {
{ gt = 371; break IF; }
    }
    X_358: for (;;) { IF: if (gt <= 358) {
var lcA7 = stA0;
var stA0 = new vm.java_lang_ClassNotFoundException;
vm.java_lang_ClassNotFoundException(false).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA0, null, lcA7);
{ var stA0 = stA0; throw stA0; }
    }
    X_371: for (;;) { IF: if (gt <= 371) {

return lcA6;
    }
    X_374: for (;;) { IF: if (gt <= 374) {
try {var lcA4 = stA0;
var stA0 = new vm.java_lang_ClassNotFoundException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't load ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_ClassNotFoundException(false).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA1, stA2, lcA4);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
var stA0 = e;{ gt = 405; break IF; }
}    }
    X_405: for (;;) { IF: if (gt <= 405) {
try {var lcA8 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_405; }
}try {
if ((lcA3) === null) { gt = 415; break IF; }
invoker.close__V(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 418; break IF; }}
throw e;
}    }
    X_415: for (;;) { IF: if (gt <= 415) {
{ gt = 431; break IF; }
    }
    X_418: for (;;) { IF: if (gt <= 418) {
var lcA9 = stA0;
var stA0 = new vm.java_lang_ClassNotFoundException;
vm.java_lang_ClassNotFoundException(false).constructor['cons__VLjava_lang_String_2Ljava_lang_Throwable_2'].call(stA0, null, lcA9);
{ var stA0 = stA0; throw stA0; }
    }
    X_431: for (;;) { IF: if (gt <= 431) {

{ var stA0 = lcA8; throw lcA8; }
    }
    X_434: for (;;) { IF: if (gt <= 434) {

var stA0 = vm.java_lang_ClassLoader(false)['findClass__Ljava_lang_Class_2Ljava_lang_String_2'].call(lcA0, lcA1);
return stA0;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['findClass__Ljava_lang_Class_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/boot/impl/JsClassLoader.defineFn';
};
    m.access = 1156;
    m.cls = CLS;
    m = c.loadScript__VLjava_io_Reader_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/boot/impl/JsClassLoader.loadScript';
};
    m.access = 1028;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsClassLoaderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsClassLoader', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsClassLoaderfillInstOf });
      org_netbeans_html_boot_impl_JsClassLoaderfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsClassLoader';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1056;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_boot_impl_JsPkgCache = function org_netbeans_html_boot_impl_JsPkgCache() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsPkgCache;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._props = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_JsPkgCache_props = v; return this.fld_org_netbeans_html_boot_impl_JsPkgCache_props; };
  CLS.fld_CACHE = null;
  m = c._CACHE = function (v) {  if (arguments.length == 1) CLS.fld_CACHE = v; return CLS.fld_CACHE; };
  CLS.fld_NONE = null;
  m = c._NONE = function (v) {  if (arguments.length == 1) CLS.fld_NONE = v; return CLS.fld_NONE; };
  CLS.fld_LOG = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS.fld_LOG = v; return CLS.fld_LOG; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_WeakHashMap;
vm.java_util_WeakHashMap(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_boot_impl_JsPkgCache(false)._props.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.process__ZLjava_lang_ClassLoader_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"org.netbeans.html.boot.impl.Test");
if ((stI0) == 0) { gt = 11; break IF; }
return 1;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = vm.org_netbeans_html_boot_impl_JsPkgCache(false)._CACHE();var stA1 = stA0;
var lcA5 = stA1;
try {
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_boot_impl_JsPkgCache(false)._CACHE(),lcA0);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_boot_impl_JsPkgCache']) throw vm.java_lang_ClassCastException(true);
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 54; break IF; }
var stA0 = new vm.org_netbeans_html_boot_impl_JsPkgCache;
vm.org_netbeans_html_boot_impl_JsPkgCache(false).constructor.cons__V.call(stA0);
var lcA3 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_boot_impl_JsPkgCache(false)._CACHE(),lcA0, lcA3);
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}    }
    X_54: for (;;) { IF: if (gt <= 54) {
try {
var stI0 = invoker.lastIndexOf__II(lcA1,(46));
var lcI6 = stI0;
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA1,0, (lcI6).add32(1));
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(46), (47));
var lcA4 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_boot_impl_JsPkgCache(false)._props.call(lcA3),lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Set']) throw vm.java_lang_ClassCastException(true);
var lcA2 = stA0;
if ((lcA2) !== (vm.org_netbeans_html_boot_impl_JsPkgCache(false)._NONE())) { gt = 107; break IF; }
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}return 0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {
try {
if ((lcA2) === null) { gt = 122; break IF; }
var stI0 = invoker.contains__ZLjava_lang_Object_2(lcA2,lcA1);
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}return stI0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {
try {
} catch (e) {
var stA0 = e;{ gt = 128; break IF; }
}{ gt = 136; break IF; }
    }
    X_128: for (;;) { IF: if (gt <= 128) {
try {var lcA7 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_128; }
}
{ var stA0 = lcA7; throw lcA7; }
    }
    X_136: for (;;) { IF: if (gt <= 136) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"net.java.html.js.classes");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
try {
var stA0 = invoker.getResources__Ljava_util_Enumeration_2Ljava_lang_String_2(lcA0,lcA5);
var lcA6 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 169; break IF; }}
throw e;
}{ gt = 174; break IF; }
    }
    X_169: for (;;) { IF: if (gt <= 169) {
var lcA7 = stA0;
var lcA6 = null;
    }
    X_174: for (;;) { IF: if (gt <= 174) {

if ((lcA6) === null) { gt = 189; break IF; }
var stI0 = invoker.hasMoreElements__Z(lcA6);
if ((stI0) != 0) { gt = 224; break IF; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA0 = vm.org_netbeans_html_boot_impl_JsPkgCache(false)._CACHE();var stA1 = stA0;
var lcA7 = stA1;
try {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_boot_impl_JsPkgCache(false)._props.call(lcA3),lcA4, vm.org_netbeans_html_boot_impl_JsPkgCache(false)._NONE());
} catch (e) {
var stA0 = e;{ gt = 216; break IF; }
}return 0;
    }
    X_216: for (;;) { IF: if (gt <= 216) {
try {var lcA8 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_216; }
}
{ var stA0 = lcA8; throw lcA8; }
    }
    X_224: for (;;) { IF: if (gt <= 224) {
try {var stA0 = new vm.java_util_TreeSet;
vm.java_util_TreeSet(false).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_233: for (;;) { IF: if (gt <= 233) {
try {
var stI0 = invoker.hasMoreElements__Z(lcA6);
if ((stI0) == 0) { gt = 314; break IF; }
var stA0 = invoker.nextElement__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_java_net_URL']) throw vm.java_lang_ClassCastException(true);
var lcA8 = stA0;
var stA0 = new vm.java_io_BufferedReader;
var stA1 = stA0;var stA2 = new vm.java_io_InputStreamReader;
var stA4 = invoker.openStream__Ljava_io_InputStream_2(lcA8);
vm.java_io_InputStreamReader(false).constructor['cons__VLjava_io_InputStream_2Ljava_lang_String_2'].call(stA2, stA4, "UTF-8");
vm.java_io_BufferedReader(false).constructor['cons__VLjava_io_Reader_2'].call(stA1, stA2);
var lcA9 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_278: for (;;) { IF: if (gt <= 278) {
try {
var stA0 = invoker.readLine__Ljava_lang_String_2(lcA9);
var lcA10 = stA0;
if ((lcA10) !== null) { gt = 293; break IF; }
{ gt = 306; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_293: for (;;) { IF: if (gt <= 293) {
try {
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA7,lcA10);
{ gt = 0; continue X_278; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_306: for (;;) { IF: if (gt <= 306) {
try {
invoker.close__V(lcA9);
{ gt = 0; continue X_233; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}    }
    X_314: for (;;) { IF: if (gt <= 314) {
try {
var lcA2 = lcA7;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 320; break IF; }}
throw e;
}{ gt = 357; break IF; }
    }
    X_320: for (;;) { IF: if (gt <= 320) {
var lcA7 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_JsPkgCache(false)._LOG();var stA1 = vm.java_util_logging_Level(false)['_WARNING']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't read ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA5);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,stA1, stA2, lcA7);
var lcA2 = vm.org_netbeans_html_boot_impl_JsPkgCache(false)._NONE();
    }
    X_357: for (;;) { IF: if (gt <= 357) {

var stA0 = vm.org_netbeans_html_boot_impl_JsPkgCache(false)._CACHE();var stA1 = stA0;
var lcA7 = stA1;
try {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_boot_impl_JsPkgCache(false)._props.call(lcA3),lcA4, lcA2);
var stI0 = invoker.contains__ZLjava_lang_Object_2(lcA2,lcA1);
} catch (e) {
var stA0 = e;{ gt = 388; break IF; }
}return stI0;
    }
    X_388: for (;;) { IF: if (gt <= 388) {
try {var lcA11 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_388; }
}
{ var stA0 = lcA11; throw lcA11; }

    }
}}}}}}}}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_util_WeakHashMap;
vm.java_util_WeakHashMap(false).constructor['cons__V'].call(stA0);
vm.org_netbeans_html_boot_impl_JsPkgCache(false)._CACHE(stA0);
var stA0 = vm.java_util_Collections(false)['emptySet__Ljava_util_Set_2']();
vm.org_netbeans_html_boot_impl_JsPkgCache(false)._NONE(stA0);
var stA0 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_JsPkgCache(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
vm.org_netbeans_html_boot_impl_JsPkgCache(false)._LOG(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsPkgCachefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsPkgCache', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsPkgCachefillInstOf });
      org_netbeans_html_boot_impl_JsPkgCachefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsPkgCache';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_boot_impl_JsPkgCache(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_JsPkgCache_props = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_io_BufferedReader = link('java/io/BufferedReader', function(f) { vm.java_io_BufferedReader =  f; });
vm.java_util_TreeSet = link('java/util/TreeSet', function(f) { vm.java_util_TreeSet =  f; });
vm.java_util_WeakHashMap = link('java/util/WeakHashMap', function(f) { vm.java_util_WeakHashMap =  f; });

vm.org_netbeans_html_boot_spi_Fn$FromJavaScript = function org_netbeans_html_boot_spi_Fn$FromJavaScript() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$FromJavaScript;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/boot/spi/Fn$FromJavaScript.toJava';
};
c['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$FromJavaScriptfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$FromJavaScriptfillInstOf });
      org_netbeans_html_boot_spi_Fn$FromJavaScriptfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$FromJavaScript';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_boot_spi_Fn$FromJavaScript'] = vm.org_netbeans_html_boot_spi_Fn$FromJavaScript;


vm.org_netbeans_html_boot_spi_Fn$ToJavaScript = function org_netbeans_html_boot_spi_Fn$ToJavaScript() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$ToJavaScript;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/boot/spi/Fn$ToJavaScript.toJavaScript';
};
c['toJavaScript__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$ToJavaScriptfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$ToJavaScript', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$ToJavaScriptfillInstOf });
      org_netbeans_html_boot_spi_Fn$ToJavaScriptfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$ToJavaScript';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_boot_spi_Fn$ToJavaScript'] = vm.org_netbeans_html_boot_spi_Fn$ToJavaScript;

vm.java_lang_ClassLoader = link('java/lang/ClassLoader', function(f) { vm.java_lang_ClassLoader =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$ClassWriterEx = function org_netbeans_html_boot_impl_FnUtils$ClassWriterEx() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$ClassWriterEx;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_ClassWriter(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._loader = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader; };
    m = CLS.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassReader_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
vm.org_objectweb_asm_ClassWriter(false).constructor['cons__VLorg_objectweb_asm_ClassReader_2I'].call(lcA0, lcA2, lcI3);
vm.org_netbeans_html_boot_impl_FnUtils$ClassWriterEx(false)._loader.call(lcA0, lcA1);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.getCommonSuperClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.replace__Ljava_lang_String_2CC(lcA1,(47), (46));
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 0, vm.org_netbeans_html_boot_impl_FnUtils$ClassWriterEx(false)._loader.call(lcA0));
var lcA3 = stA0;
var stA0 = invoker.replace__Ljava_lang_String_2CC(lcA2,(47), (46));
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 0, vm.org_netbeans_html_boot_impl_FnUtils$ClassWriterEx(false)._loader.call(lcA0));
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 38; break IF; }}
throw e;
}{ gt = 53; break IF; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {
var lcA5 = stA0;
var stA0 = new vm.java_lang_RuntimeException;
var stA2 = invoker.toString__Ljava_lang_String_2(lcA5);
vm.java_lang_RuntimeException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(lcA3,lcA4);
if ((stI0) == 0) { gt = 64; break IF; }
return lcA1;
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(lcA4,lcA3);
if ((stI0) == 0) { gt = 75; break IF; }
return lcA2;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = invoker.isInterface__Z(lcA3);
if ((stI0) != 0) { gt = 90; break IF; }
var stI0 = invoker.isInterface__Z(lcA4);
if ((stI0) == 0) { gt = 93; break IF; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

return "java/lang/Object";
    }
    X_93: for (;;) { IF: if (gt <= 93) {

var stA0 = invoker.getSuperclass__Ljava_lang_Class_2(lcA3);
var lcA3 = stA0;
var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(lcA3,lcA4);
if ((stI0) == 0) { gt = 0; continue X_93; }
var stA0 = invoker.getName__Ljava_lang_String_2(lcA3);
var stA0 = invoker.replace__Ljava_lang_String_2CC(stA0,(46), (47));
return stA0;

    }
}}}}}}}
};
c['getCommonSuperClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$ClassWriterExfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$ClassWriterExfillInstOf });
      org_netbeans_html_boot_impl_FnUtils$ClassWriterExfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$ClassWriterEx';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$ClassWriterEx_loader = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_RuntimeException = link('java/lang/RuntimeException', function(f) { vm.java_lang_RuntimeException =  f; });
vm.org_objectweb_asm_ClassWriter = link('org/objectweb/asm/ClassWriter', function(f) { vm.org_objectweb_asm_ClassWriter =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass = function org_netbeans_html_boot_impl_FnUtils$FindInClass() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_ClassVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name; };
  m = c._found = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found; };
  m = c._loader = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_loader = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_loader; };
  m = c._resource = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource; };
    m = CLS.cons__VLjava_lang_ClassLoader_2Lorg_objectweb_asm_ClassVisitor_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_objectweb_asm_ClassVisitor(false).constructor['cons__VILorg_objectweb_asm_ClassVisitor_2'].call(lcA0, 262144, lcA2);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._loader.call(lcA0, lcA1);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visit__VIILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcI1, lcI2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._name.call(lcA0, lcA3);
vm.org_objectweb_asm_ClassVisitor(false)['visit__VIILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'].call(lcA0, lcI1, lcI2, lcA3, lcA4, lcA5, lcA6);
return;

};
c['visit__VIILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_objectweb_asm_ClassVisitor(false)['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'].call(lcA0, lcA1, lcI2);
var lcA3 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2("Lnet/java/html/js/JavaScriptResource;",lcA1);
if ((stI0) == 0) { gt = 26; break IF; }
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource(false).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Lorg_objectweb_asm_AnnotationVisitor_2.call(stA0, lcA0, lcA3);
return stA0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

return lcA3;

    }
}}
};
c['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitMethod__Lorg_objectweb_asm_MethodVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;
var stA1 = stA0;var stA2 = lcA0;var stI3 = lcI1;var stA4 = lcA2;var stA5 = lcA3;var stA6 = vm.org_objectweb_asm_ClassVisitor(false)['visitMethod__Lorg_objectweb_asm_MethodVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'].call(lcA0, (lcI1 & (-257)), lcA2, lcA3, lcA4, lcA5);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2ILjava_lang_String_2Ljava_lang_String_2Lorg_objectweb_asm_MethodVisitor_2.call(stA1, stA2, stI3, stA4, stA5, stA6);
return stA0;

};
c['visitMethod__Lorg_objectweb_asm_MethodVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._found.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$008__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = stA0;
var stI1 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._found.call(stA1);var stI2 = stI1, stA1 = stA0, stI0 = stI2;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._found.call(stA1, (stI2).add32(1));
return stI0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._name.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._resource.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$202__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = lcA0;var stA1 = lcA1;var stA2 = stA1, stA1 = stA0, stA0 = stA2;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false)._resource.call(stA1, stA2);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClassfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClassfillInstOf });
      org_netbeans_html_boot_impl_FnUtils$FindInClassfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_name = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_found = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_loader = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass_resource = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod = function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_MethodVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name; };
  m = c._desc = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc; };
  m = c._access = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access; };
  m = c._fia = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia; };
  m = c._bodyGenerated = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated; };
  CLS.fld_$assertionsDisabled = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS.fld_$assertionsDisabled = v; return CLS.fld_$assertionsDisabled; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0 = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2ILjava_lang_String_2Ljava_lang_String_2Lorg_objectweb_asm_MethodVisitor_2 = function(lcA1, lcI2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0, lcA1);
vm.org_objectweb_asm_MethodVisitor(false).constructor['cons__VILorg_objectweb_asm_MethodVisitor_2'].call(lcA0, 262144, lcA5);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._access.call(lcA0, lcI2);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._name.call(lcA0, lcA3);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._desc.call(lcA0, lcA4);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("Lnet/java/html/js/JavaScriptBody;",lcA1);
if ((stI0) == 0) { gt = 26; break IF; }
var stI0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$008__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2.call(stA0, lcA0);
return stA0;
    }
    X_26: for (;;) { IF: if (gt <= 26) {

var stA0 = vm.org_objectweb_asm_MethodVisitor(false)['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'].call(lcA0, lcA1, lcI2);
return stA0;

    }
}}
};
c['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.generateJSBody__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.visitCode__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0)) !== null) { gt = 8; break IF; }
return;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stI0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).generateBody__ZZ.call(lcA0, 1);
return;

    }
}}
};
c['visitCode__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.generateBody__ZZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._bodyGenerated.call(lcA0)) == 0) { gt = 9; break IF; }
return 0;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._bodyGenerated.call(lcA0, 1);
if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)['_mv'].call(lcA0)) === null) { gt = 119; break IF; }
var stA0 = vm.org_objectweb_asm_MethodVisitor(false)['visitAnnotation__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2Z'].call(lcA0, "Lnet/java/html/js/JavaScriptBody;", 0);
var lcA2 = stA0;
var stA0 = invoker.visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2(lcA2,"args");
var lcA3 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._args.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0)));
var lcA4 = stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 82; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2(lcA3,null, lcA5);
{ gt = 0; continue X_50; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

invoker.visitEnd__V(lcA3);
var stA0 = lcA2;var stA1 = "javacall";var stA2 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._javacall.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0)));
invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2(stA0,stA1, stA2);
invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2(lcA2,"body", vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._body.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0)));
invoker.visitEnd__V(lcA2);
    }
    X_119: for (;;) { IF: if (gt <= 119) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._javacall.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0))) == 0) { gt = 167; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils(false).callback__Ljava_lang_String_2Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._body.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0)));
var lcA2 = stA0;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__VLjava_util_Collection_2'].call(stA0, vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._args.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0)));
var lcA3 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,"vm");
{ gt = 183; break IF; }
    }
    X_167: for (;;) { IF: if (gt <= 167) {

var lcA2 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._body.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0));
var lcA3 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._args.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0));
    }
    X_183: for (;;) { IF: if (gt <= 183) {

var stA0 = lcA0;var stI1 = (178);var stA2 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"$$fn$$");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._name.call(lcA0));
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"_");
var stI4 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA3 = invoker.append__Ljava_lang_StringBuilder_2I(stA3,stI4);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
vm.org_objectweb_asm_MethodVisitor(false)['visitFieldInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(stA0, stI1, stA2, stA3, "Lorg/netbeans/html/boot/spi/Fn;");
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (89));
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (184), "org/netbeans/html/boot/spi/Fn", "isValid", "(Lorg/netbeans/html/boot/spi/Fn;)Z");
var stA0 = new vm.org_objectweb_asm_Label;
vm.org_objectweb_asm_Label(false).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
vm.org_objectweb_asm_MethodVisitor(false)['visitJumpInsn__VILorg_objectweb_asm_Label_2'].call(lcA0, (154), lcA4);
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (87));
var stA0 = lcA0;var stA1 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA1 = vm.org_objectweb_asm_Type(false)['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA1);
vm.org_objectweb_asm_MethodVisitor(false)['visitLdcInsn__VLjava_lang_Object_2'].call(stA0, stA1);
vm.org_objectweb_asm_MethodVisitor(false)['visitLdcInsn__VLjava_lang_Object_2'].call(lcA0, lcA2);
var stI2 = invoker.size__I(lcA3);
vm.org_objectweb_asm_MethodVisitor(false)['visitIntInsn__VII'].call(lcA0, (17), stI2);
vm.org_objectweb_asm_MethodVisitor(false)['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (189), "java/lang/String");
var lcI5 = 0;
var lcI6 = 0;
    }
    X_325: for (;;) { IF: if (gt <= 325) {

var stI1 = invoker.size__I(lcA3);
if ((lcI6) >= (stI1)) { gt = 409; break IF; }
if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._$assertionsDisabled()) != 0) { gt = 355; break IF; }
if ((lcI5) == 0) { gt = 355; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_355: for (;;) { IF: if (gt <= 355) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA3,lcI6);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2("vm",lcA7);
var lcI5 = stI0;
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (89));
vm.org_objectweb_asm_MethodVisitor(false)['visitIntInsn__VII'].call(lcA0, (16), lcI6);
vm.org_objectweb_asm_MethodVisitor(false)['visitLdcInsn__VLjava_lang_Object_2'].call(lcA0, lcA7);
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (83));
lcI6++;
{ gt = 0; continue X_325; }
    }
    X_409: for (;;) { IF: if (gt <= 409) {

vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (184), "org/netbeans/html/boot/spi/Fn", "define", "(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/String;)Lorg/netbeans/html/boot/spi/Fn;");
var stA0 = new vm.org_objectweb_asm_Label;
vm.org_objectweb_asm_Label(false).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (89));
vm.org_objectweb_asm_MethodVisitor(false)['visitJumpInsn__VILorg_objectweb_asm_Label_2'].call(lcA0, (198), lcA6);
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$200__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
if ((stA0) === null) { gt = 494; break IF; }
var stA0 = lcA0;var stA1 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA1 = vm.org_objectweb_asm_Type(false)['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA1);
vm.org_objectweb_asm_MethodVisitor(false)['visitLdcInsn__VLjava_lang_Object_2'].call(stA0, stA1);
var stA0 = lcA0;var stA1 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$200__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
vm.org_objectweb_asm_MethodVisitor(false)['visitLdcInsn__VLjava_lang_Object_2'].call(stA0, stA1);
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (184), "org/netbeans/html/boot/spi/Fn", "preload", "(Lorg/netbeans/html/boot/spi/Fn;Ljava/lang/Class;Ljava/lang/String;)Lorg/netbeans/html/boot/spi/Fn;");
    }
    X_494: for (;;) { IF: if (gt <= 494) {

vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (89));
var stA0 = lcA0;var stI1 = (179);var stA2 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"$$fn$$");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._name.call(lcA0));
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"_");
var stI4 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA3 = invoker.append__Ljava_lang_StringBuilder_2I(stA3,stI4);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
vm.org_objectweb_asm_MethodVisitor(false)['visitFieldInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(stA0, stI1, stA2, stA3, "Lorg/netbeans/html/boot/spi/Fn;");
vm.org_objectweb_asm_MethodVisitor(false)['visitLabel__VLorg_objectweb_asm_Label_2'].call(lcA0, lcA4);
if (((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._access.call(lcA0) & (8))) != 0) { gt = 582; break IF; }
var lcI7 = 1;
vm.org_objectweb_asm_MethodVisitor(false)['visitIntInsn__VII'].call(lcA0, (25), 0);
{ gt = 590; break IF; }
    }
    X_582: for (;;) { IF: if (gt <= 582) {

var lcI7 = 0;
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, 1);
    }
    X_590: for (;;) { IF: if (gt <= 590) {

var stI2 = invoker.size__I(lcA3);
vm.org_objectweb_asm_MethodVisitor(false)['visitIntInsn__VII'].call(lcA0, (17), stI2);
vm.org_objectweb_asm_MethodVisitor(false)['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (189), "java/lang/Object");
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I.call(stA0, lcA0, lcI7);
var lcA8 = stA0;
var stA0 = new vm.org_objectweb_asm_signature_SignatureReader;
vm.org_objectweb_asm_signature_SignatureReader(false).constructor['cons__VLjava_lang_String_2'].call(stA0, vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._desc.call(lcA0));
var lcA9 = stA0;
invoker.accept__VLorg_objectweb_asm_signature_SignatureVisitor_2(lcA9,lcA8);
if ((lcI5) == 0) { gt = 792; break IF; }
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0, (89));
var stA0 = lcA0;var stI1 = (17);var stI2 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).access$1400__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stI0 = invoker.lastIndexOf__II(stA0,(47));
var lcI10 = stI0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA1 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,0, (lcI10).add32(1));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"$JsCallbacks$");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA11 = stA0;
var stA0 = lcA0;var stI1 = (178);var stA2 = lcA11;var stA3 = "VM";var stA4 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"L");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,lcA11);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,";");
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stI1, stA2, stA3, stA4);
var stA0 = lcA0;var stI1 = (182);var stA2 = lcA11;var stA3 = "current";var stA4 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"()L");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,lcA11);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,";");
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stI1, stA2, stA3, stA4);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1801__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(lcA0, (83));
    }
    X_792: for (;;) { IF: if (gt <= 792) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._wait4js.call(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0))) == 0) { gt = 1019; break IF; }
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (182), "org/netbeans/html/boot/spi/Fn", "invoke", "(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;");
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stI0 = invoker.getSort__I(stA0);
switch (stI0) {
  case 0: { gt = 864; break IF; }
  case 1: { gt = 899; break IF; }
  case 9: { gt = 874; break IF; }
  case 10: { gt = 874; break IF; }
  default: { gt = 931; break IF; }
}
    }
    X_864: for (;;) { IF: if (gt <= 864) {

vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (177));
{ gt = 1039; break IF; }
    }
    X_874: for (;;) { IF: if (gt <= 874) {

var stA0 = lcA0;var stI1 = (192);var stA2 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stA2 = invoker.getInternalName__Ljava_lang_String_2(stA2);
vm.org_objectweb_asm_MethodVisitor(false)['visitTypeInsn__VILjava_lang_String_2'].call(stA0, stI1, stA2);
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (176));
{ gt = 1039; break IF; }
    }
    X_899: for (;;) { IF: if (gt <= 899) {

vm.org_objectweb_asm_MethodVisitor(false)['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (192), "java/lang/Boolean");
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (182), "java/lang/Boolean", "booleanValue", "()Z");
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (172));
{ gt = 1039; break IF; }
    }
    X_931: for (;;) { IF: if (gt <= 931) {

vm.org_objectweb_asm_MethodVisitor(false)['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (192), "java/lang/Number");
var stA0 = lcA0;var stI1 = (182);var stA2 = "java/lang/Number";var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA4 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stA4 = invoker.getClassName__Ljava_lang_String_2(stA4);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,stA4);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"Value");
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
var stA4 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"()");
var stA5 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stA5 = invoker.getDescriptor__Ljava_lang_String_2(stA5);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,stA5);
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(stA0, stI1, stA2, stA3, stA4);
var stA0 = lcA0;var stA1 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2(lcA8);
var stI1 = invoker.getOpcode__II(stA1,(172));
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(stA0, stI1);
{ gt = 1039; break IF; }
    }
    X_1019: for (;;) { IF: if (gt <= 1019) {

vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (182), "org/netbeans/html/boot/spi/Fn", "invokeLater", "(Ljava/lang/Object;[Ljava/lang/Object;)V");
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (177));
    }
    X_1039: for (;;) { IF: if (gt <= 1039) {

vm.org_objectweb_asm_MethodVisitor(false)['visitLabel__VLorg_objectweb_asm_Label_2'].call(lcA0, lcA6);
if ((lcI1) == 0) { gt = 1056; break IF; }
vm.org_objectweb_asm_MethodVisitor(false)['visitCode__V'].call(lcA0);
{ gt = 1097; break IF; }
    }
    X_1056: for (;;) { IF: if (gt <= 1056) {

vm.org_objectweb_asm_MethodVisitor(false)['visitTypeInsn__VILjava_lang_String_2'].call(lcA0, (187), "java/lang/IllegalStateException");
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, (89));
vm.org_objectweb_asm_MethodVisitor(false)['visitLdcInsn__VLjava_lang_Object_2'].call(lcA0, "No presenter active. Use BrwsrCtx.execute!");
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, (183), "java/lang/IllegalStateException", "<init>", "(Ljava/lang/String;)V");
invoker.visitInsn__VI(lcA0,(191));
    }
    X_1097: for (;;) { IF: if (gt <= 1097) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.visitEnd__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

vm.org_objectweb_asm_MethodVisitor(false)['visitEnd__V'].call(lcA0);
if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._fia.call(lcA0)) === null) { gt = 76; break IF; }
var stI0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).generateBody__ZZ.call(lcA0, 0);
if ((stI0) == 0) { gt = 25; break IF; }
vm.org_objectweb_asm_MethodVisitor(false)['visitMaxs__VII'].call(lcA0, 1, 0);
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0);var stI1 = (10);var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"$$fn$$");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._name.call(lcA0));
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"_");
var stI3 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$000__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._this$0.call(lcA0));
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,stI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA0 = invoker.visitField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(stA0,stI1, stA2, "Lorg/netbeans/html/boot/spi/Fn;", null, null);
    }
    X_76: for (;;) { IF: if (gt <= 76) {
return;

    }
}}}
};
c['visitEnd__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$401__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
vm.org_objectweb_asm_MethodVisitor(false)['visitIntInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
vm.org_objectweb_asm_MethodVisitor(false)['visitVarInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcI1, lcA2, lcA3, lcA4) {
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, lcI1, lcA2, lcA3, lcA4);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$901__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1001__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
vm.org_objectweb_asm_MethodVisitor(false)['visitIntInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1101__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
vm.org_objectweb_asm_MethodVisitor(false)['visitVarInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1201__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II = function(lcA0, lcI1, lcI2) {
vm.org_objectweb_asm_MethodVisitor(false)['visitIntInsn__VII'].call(lcA0, lcI1, lcI2);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcI1, lcA2, lcA3, lcA4) {
vm.org_objectweb_asm_MethodVisitor(false)['visitFieldInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, lcI1, lcA2, lcA3, lcA4);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0, lcI1, lcA2, lcA3, lcA4) {
vm.org_objectweb_asm_MethodVisitor(false)['visitMethodInsn__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2'].call(lcA0, lcI1, lcA2, lcA3, lcA4);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1801__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA0, lcI1) {
vm.org_objectweb_asm_MethodVisitor(false)['visitInsn__VI'].call(lcA0, lcI1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1900__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2 = function(lcA0, lcA1) {
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).generateJSBody__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2.call(lcA0, lcA1);
return;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(vm.org_netbeans_html_boot_impl_FnUtils(false).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false)._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethodfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethodfillInstOf });
      org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethodfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_name = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_desc = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_access = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_fia = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_bodyGenerated = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_objectweb_asm_signature_SignatureReader = link('org/objectweb/asm/signature/SignatureReader', function(f) { vm.org_objectweb_asm_signature_SignatureReader =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV = function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_signature_SignatureVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._nowReturn = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn; };
  m = c._returnType = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType; };
  m = c._index = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index; };
  m = c._loadIndex = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex; };
  m = c._val$offset = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset; };
  m = c._this$1 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1 = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0, lcA1);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._val$offset.call(lcA0, lcI2);
vm.org_objectweb_asm_signature_SignatureVisitor(false).constructor['cons__VI'].call(lcA0, 262144);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(lcA0, vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._val$offset.call(lcA0));
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visitBaseType__VC = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,lcI1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA0 = vm.org_objectweb_asm_Type(false)['getType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA0);
var lcA2 = stA0;
if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._nowReturn.call(lcA0)) == 0) { gt = 36; break IF; }
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._returnType.call(lcA0, lcA2);
return;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$301__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0), (89));
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0);var stI1 = (17);var stA2 = lcA0;var stA3 = stA2;
var stI3 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._index.call(stA3);var stI4 = stI3, stA3 = stA2, stI2 = stI4;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._index.call(stA3, (stI4).add32(1));
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$401__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
var stI1 = invoker.getOpcode__II(lcA2,(21));
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0);var stA2 = lcA0;var stA3 = stA2;
var stI3 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA3);var stI4 = stI3, stA3 = stA2, stI2 = stI4;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA3, (stI4).add32(1));
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$501__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
switch (lcI1) {
  case 66:{ gt = 266; break IF; }
  case 67:{ gt = 260; break IF; }
  case 68:{ gt = 238; break IF; }
  case 69:{ gt = 272; break IF; }
  case 70:{ gt = 232; break IF; }
  case 71:{ gt = 272; break IF; }
  case 72:{ gt = 272; break IF; }
  case 73:{ gt = 204; break IF; }
  case 74:{ gt = 210; break IF; }
  case 75:{ gt = 272; break IF; }
  case 76:{ gt = 272; break IF; }
  case 77:{ gt = 272; break IF; }
  case 78:{ gt = 272; break IF; }
  case 79:{ gt = 272; break IF; }
  case 80:{ gt = 272; break IF; }
  case 81:{ gt = 272; break IF; }
  case 82:{ gt = 272; break IF; }
  case 83:{ gt = 226; break IF; }
  case 84:{ gt = 272; break IF; }
  case 85:{ gt = 272; break IF; }
  case 86:{ gt = 272; break IF; }
  case 87:{ gt = 272; break IF; }
  case 88:{ gt = 272; break IF; }
  case 89:{ gt = 272; break IF; }
  case 90:{ gt = 254; break IF; }
  default: { gt = 272; break IF; }
}
    }
    X_204: for (;;) { IF: if (gt <= 204) {

var lcA3 = "java/lang/Integer";
{ gt = 284; break IF; }
    }
    X_210: for (;;) { IF: if (gt <= 210) {

var lcA3 = "java/lang/Long";
var stA0 = lcA0;var stA1 = stA0;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA0, (vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA1)).add32(1));
{ gt = 284; break IF; }
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var lcA3 = "java/lang/Short";
{ gt = 284; break IF; }
    }
    X_232: for (;;) { IF: if (gt <= 232) {

var lcA3 = "java/lang/Float";
{ gt = 284; break IF; }
    }
    X_238: for (;;) { IF: if (gt <= 238) {

var lcA3 = "java/lang/Double";
var stA0 = lcA0;var stA1 = stA0;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA0, (vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA1)).add32(1));
{ gt = 284; break IF; }
    }
    X_254: for (;;) { IF: if (gt <= 254) {

var lcA3 = "java/lang/Boolean";
{ gt = 284; break IF; }
    }
    X_260: for (;;) { IF: if (gt <= 260) {

var lcA3 = "java/lang/Character";
{ gt = 284; break IF; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var lcA3 = "java/lang/Byte";
{ gt = 284; break IF; }
    }
    X_272: for (;;) { IF: if (gt <= 272) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA2 = invoker.toString__Ljava_lang_String_2(lcA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_284: for (;;) { IF: if (gt <= 284) {

var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0);var stI1 = (184);var stA2 = lcA3;var stA3 = "valueOf";var stA4 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA4);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,"(");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2C(stA4,lcI1);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,")L");
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,lcA3);
var stA4 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA4,";");
var stA4 = invoker.toString__Ljava_lang_String_2(stA4);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$601__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stI1, stA2, stA3, stA4);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$701__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0), (83));
return;

    }
}}}}}}}}}}}}
};
c['visitBaseType__VC'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitArrayType__Lorg_objectweb_asm_signature_SignatureVisitor_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._nowReturn.call(lcA0)) == 0) { gt = 18; break IF; }
var stA0 = new vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1(false).constructor.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2I.call(stA0, lcA0, 262144);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).loadObject__V.call(lcA0);
var stA0 = new vm.org_objectweb_asm_signature_SignatureWriter;
vm.org_objectweb_asm_signature_SignatureWriter(false).constructor['cons__V'].call(stA0);
return stA0;

    }
}}
};
c['visitArrayType__Lorg_objectweb_asm_signature_SignatureVisitor_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitClassType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._nowReturn.call(lcA0)) == 0) { gt = 16; break IF; }
var stA0 = lcA0;var stA1 = vm.org_objectweb_asm_Type(false)['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](lcA1);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._returnType.call(stA0, stA1);
return;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).loadObject__V.call(lcA0);
return;

    }
}}
};
c['visitClassType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitReturnType__Lorg_objectweb_asm_signature_SignatureVisitor_2 = function() {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._nowReturn.call(lcA0, 1);
return lcA0;

};
c['visitReturnType__Lorg_objectweb_asm_signature_SignatureVisitor_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadObject__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$901__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0), (89));
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0);var stI1 = (17);var stA2 = lcA0;var stA3 = stA2;
var stI3 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._index.call(stA3);var stI4 = stI3, stA3 = stA2, stI2 = stI4;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._index.call(stA3, (stI4).add32(1));
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1001__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0);var stI1 = (25);var stA2 = lcA0;var stA3 = stA2;
var stI3 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA3);var stI4 = stI3, stA3 = stA2, stI2 = stI4;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._loadIndex.call(stA3, (stI4).add32(1));
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1101__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2II(stA0, stI1, stI2);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1201__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2I(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._this$1.call(lcA0), (83));
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.access$802__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2Lorg_objectweb_asm_Type_2 = function(lcA0, lcA1) {
var stA0 = lcA0;var stA1 = lcA1;var stA2 = stA1, stA1 = stA0, stA0 = stA2;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._returnType.call(stA1, stA2);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$1400__ILorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._index.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$800__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false)._returnType.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SVfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SVfillInstOf });
      org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SVfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod$1SV';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_nowReturn = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_returnType = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_index = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_loadIndex = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_val$offset = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_this$1 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_objectweb_asm_signature_SignatureWriter = link('org/objectweb/asm/signature/SignatureWriter', function(f) { vm.org_objectweb_asm_signature_SignatureWriter =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1 = function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_signature_SignatureVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$2 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2 = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1(false)._this$2.call(lcA0, lcA1);
vm.org_objectweb_asm_signature_SignatureVisitor(false).constructor['cons__VI'].call(lcA0, lcI2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.visitClassType__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1(false)._this$2.call(lcA0);var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[");
var stA2 = vm.org_objectweb_asm_Type(false)['getObjectType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](lcA1);
var stA2 = invoker.getDescriptor__Ljava_lang_String_2(stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA1 = vm.org_objectweb_asm_Type(false)['getType__Lorg_objectweb_asm_Type_2Ljava_lang_String_2'](stA1);
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV(false).access$802__Lorg_objectweb_asm_Type_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV_2Lorg_objectweb_asm_Type_2(stA0, stA1);
return;

};
c['visitClassType__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1fillInstOf });
      org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod$1SV$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$1SV$1_this$2 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_objectweb_asm_signature_SignatureVisitor = link('org/objectweb/asm/signature/SignatureVisitor', function(f) { vm.org_objectweb_asm_signature_SignatureVisitor =  f; });
vm.java_lang_AssertionError = link('java/lang/AssertionError', function(f) { vm.java_lang_AssertionError =  f; });
vm.org_objectweb_asm_Type = link('org/objectweb/asm/Type', function(f) { vm.org_objectweb_asm_Type =  f; });
vm.org_objectweb_asm_Label = link('org/objectweb/asm/Label', function(f) { vm.org_objectweb_asm_Label =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno = function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_AnnotationVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._args = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args; };
  m = c._body = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body; };
  m = c._javacall = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall; };
  m = c._wait4js = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js; };
  CLS.fld_$assertionsDisabled = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS.fld_$assertionsDisabled = v; return CLS.fld_$assertionsDisabled; };
  m = c._this$1 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1 = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._this$1.call(lcA0, lcA1);
vm.org_objectweb_asm_AnnotationVisitor(false).constructor['cons__VI'].call(lcA0, 262144);
var stA0 = lcA0;var stA1 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._args.call(stA0, stA1);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._javacall.call(lcA0, 0);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._wait4js.call(lcA0, 1);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visit__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 19; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.add__ZLjava_lang_Object_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._args.call(lcA0),lcA2);
return;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"javacall");
if ((stI0) == 0) { gt = 40; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Boolean']) throw vm.java_lang_ClassCastException(true);
var stI1 = invoker.booleanValue__Z(lcA2);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._javacall.call(lcA0, stI1);
return;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"wait4js");
if ((stI0) == 0) { gt = 61; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Boolean']) throw vm.java_lang_ClassCastException(true);
var stI1 = invoker.booleanValue__Z(lcA2);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._wait4js.call(lcA0, stI1);
return;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._$assertionsDisabled()) != 0) { gt = 84; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,"body");
if ((stI0) != 0) { gt = 84; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {

if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._body.call(lcA0, lcA2);
return;

    }
}}}}}
};
c['visit__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
return lcA0;

};
c['visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.visitEnd__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._body.call(lcA0)) === null) { gt = 15; break IF; }
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod(false).access$1900__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._this$1.call(lcA0), lcA0);
    }
    X_15: for (;;) { IF: if (gt <= 15) {
return;

    }
}}
};
c['visitEnd__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(vm.org_netbeans_html_boot_impl_FnUtils(false).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false)._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnnofillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnnofillInstOf });
      org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnnofillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$FindInMethod$FindInAnno';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_args = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_body = null;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_javacall = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_wait4js = 0;
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$FindInMethod$FindInAnno_this$1 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_objectweb_asm_AnnotationVisitor = link('org/objectweb/asm/AnnotationVisitor', function(f) { vm.org_objectweb_asm_AnnotationVisitor =  f; });
vm.org_objectweb_asm_MethodVisitor = link('org/objectweb/asm/MethodVisitor', function(f) { vm.org_objectweb_asm_MethodVisitor =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource = function org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_AnnotationVisitor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0 = v; return this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Lorg_objectweb_asm_AnnotationVisitor_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource(false)._this$0.call(lcA0, lcA1);
vm.org_objectweb_asm_AnnotationVisitor(false).constructor['cons__VILorg_objectweb_asm_AnnotationVisitor_2'].call(lcA0, 262144, lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.visit__VLjava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

vm.org_objectweb_asm_AnnotationVisitor(false)['visit__VLjava_lang_String_2Ljava_lang_Object_2'].call(lcA0, lcA1, lcA2);
if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA3 = lcA2;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA3,"/");
if ((stI0) == 0) { gt = 32; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$202__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource(false)._this$0.call(lcA0), lcA3);
{ gt = 90; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource(false)._this$0.call(lcA0));
var stI0 = invoker.lastIndexOf__II(stA0,(47));
var lcI4 = stI0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA1 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource(false)._this$0.call(lcA0));
var stA1 = invoker.substring__Ljava_lang_String_2II(stA1,0, (lcI4).add32(1));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils$FindInClass(false).access$202__Ljava_lang_String_2Lorg_netbeans_html_boot_impl_FnUtils$FindInClass_2Ljava_lang_String_2(vm.org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource(false)._this$0.call(lcA0), lcA5);
    }
    X_90: for (;;) { IF: if (gt <= 90) {
return;

    }
}}}
};
c['visit__VLjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResourcefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResourcefillInstOf });
      org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResourcefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$FindInClass$LoadResource';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_FnUtils$FindInClass$LoadResource_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_objectweb_asm_ClassVisitor = link('org/objectweb/asm/ClassVisitor', function(f) { vm.org_objectweb_asm_ClassVisitor =  f; });

vm.org_netbeans_html_boot_impl_FnUtils$1 = function org_netbeans_html_boot_impl_FnUtils$1() {
  var m;
  var CLS = org_netbeans_html_boot_impl_FnUtils$1;
  if (!CLS.$class) {
    var pp = vm.org_objectweb_asm_ClassReader(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V_3B = function(lcA1) {
  var  lcA0 = this;
vm.org_objectweb_asm_ClassReader(false).constructor['cons__V_3B'].call(lcA0, lcA1);
return;

};
CLS['cons__V_3B'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.readShort__SI = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = vm.org_objectweb_asm_ClassReader(false)['readShort__SI'].call(lcA0, lcI1);
var lcI2 = stI0;
if ((lcI1) != ((6))) { gt = 21; break IF; }
if ((lcI2) <= ((51))) { gt = 21; break IF; }
return (51);
    }
    X_21: for (;;) { IF: if (gt <= 21) {

return lcI2;

    }
}}
};
c['readShort__SI'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_FnUtils$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_FnUtils$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_FnUtils$1fillInstOf });
      org_netbeans_html_boot_impl_FnUtils$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/FnUtils$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_objectweb_asm_ClassReader = link('org/objectweb/asm/ClassReader', function(f) { vm.org_objectweb_asm_ClassReader =  f; });
vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });

vm.org_netbeans_html_boot_spi_Fn$Presenter = function org_netbeans_html_boot_spi_Fn$Presenter() {
  var m;
  var CLS = org_netbeans_html_boot_spi_Fn$Presenter;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/boot/spi/Fn$Presenter.defineFn';
};
c['defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2'] = m;

    m.access = 1153;
    m.cls = CLS;
    m = c.displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/boot/spi/Fn$Presenter.displayPage';
};
c['displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.loadScript__VLjava_io_Reader_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/boot/spi/Fn$Presenter.loadScript';
};
c['loadScript__VLjava_io_Reader_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_spi_Fn$PresenterfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_spi_Fn$Presenter', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_spi_Fn$PresenterfillInstOf });
      org_netbeans_html_boot_spi_Fn$PresenterfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/spi/Fn$Presenter';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_boot_spi_Fn$Presenter'] = vm.org_netbeans_html_boot_spi_Fn$Presenter;

vm.java_lang_NullPointerException = link('java/lang/NullPointerException', function(f) { vm.java_lang_NullPointerException =  f; });

vm.net_java_html_js_JavaScriptBody = function net_java_html_js_JavaScriptBody() {
  var m;
  var CLS = net_java_html_js_JavaScriptBody;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.args___3Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/js/JavaScriptBody.args';
};
c['args___3Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.body__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/js/JavaScriptBody.body';
};
c['body__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.javacall__Z = function() {
  throw 'no code found for net/java/html/js/JavaScriptBody.javacall';
};
c['javacall__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.wait4js__Z = function() {
  throw 'no code found for net/java/html/js/JavaScriptBody.wait4js';
};
c['wait4js__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_js_JavaScriptBodyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_js_JavaScriptBody', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_js_JavaScriptBodyfillInstOf });
      net_java_html_js_JavaScriptBodyfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/js/JavaScriptBody';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('CLASS')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD'),
vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('CONSTRUCTOR')]
}

    };
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['net_java_html_js_JavaScriptBody'] = vm.net_java_html_js_JavaScriptBody;

vm.java_lang_annotation_ElementType = link('java/lang/annotation/ElementType', function(f) { vm.java_lang_annotation_ElementType =  f; });
vm.java_lang_annotation_Target = link('java/lang/annotation/Target', function(f) { vm.java_lang_annotation_Target =  f; });
vm.java_lang_annotation_RetentionPolicy = link('java/lang/annotation/RetentionPolicy', function(f) { vm.java_lang_annotation_RetentionPolicy =  f; });
vm.java_lang_annotation_Retention = link('java/lang/annotation/Retention', function(f) { vm.java_lang_annotation_Retention =  f; });
vm.java_lang_annotation_Annotation = link('java/lang/annotation/Annotation', function(f) { vm.java_lang_annotation_Annotation =  f; });

vm.net_java_html_js_JavaScriptResource = function net_java_html_js_JavaScriptResource() {
  var m;
  var CLS = net_java_html_js_JavaScriptResource;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.value__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/js/JavaScriptResource.value';
};
c['value__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_js_JavaScriptResourcefillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_js_JavaScriptResource', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_js_JavaScriptResourcefillInstOf });
      net_java_html_js_JavaScriptResourcefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/js/JavaScriptResource';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('CLASS')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('TYPE')]
}

    };
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['net_java_html_js_JavaScriptResource'] = vm.net_java_html_js_JavaScriptResource;


vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1 = function org_netbeans_html_boot_impl_JavaScriptProcesor$1() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JavaScriptProcesor$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_$SwitchMap$javax$lang$model$type$TypeKind = null;
  m = c._$SwitchMap$javax$lang$model$type$TypeKind = function (v) {  if (arguments.length == 1) CLS.fld_$SwitchMap$javax$lang$model$type$TypeKind = v; return CLS.fld_$SwitchMap$javax$lang$model$type$TypeKind; };
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = vm.javax_lang_model_type_TypeKind(false)['values___3Ljavax_lang_model_type_TypeKind_2']();
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[I', null, (stA0).length);
vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(stA0);
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_INT']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, 1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 23; break IF; }}
throw e;
}{ gt = 24; break IF; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {
var lcA0 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_BOOLEAN']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, 2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 38; break IF; }}
throw e;
}{ gt = 39; break IF; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {
var lcA0 = stA0;
    }
    X_39: for (;;) { IF: if (gt <= 39) {
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_BYTE']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, 3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 53; break IF; }}
throw e;
}{ gt = 54; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {
var lcA0 = stA0;
    }
    X_54: for (;;) { IF: if (gt <= 54) {
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_CHAR']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, 4);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 68; break IF; }}
throw e;
}{ gt = 69; break IF; }
    }
    X_68: for (;;) { IF: if (gt <= 68) {
var lcA0 = stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_SHORT']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, 5);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 83; break IF; }}
throw e;
}{ gt = 84; break IF; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {
var lcA0 = stA0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_DOUBLE']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, (6));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 99; break IF; }}
throw e;
}{ gt = 100; break IF; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {
var lcA0 = stA0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_FLOAT']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, (7));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 115; break IF; }}
throw e;
}{ gt = 116; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {
var lcA0 = stA0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {
try {
var stI1 = invoker.ordinal__I(vm.javax_lang_model_type_TypeKind(false)['_LONG']());
Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1, (8));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchFieldError']) {var stA0 = e;{ gt = 131; break IF; }}
throw e;
}{ gt = 132; break IF; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {
var lcA0 = stA0;
    }
    X_132: for (;;) { IF: if (gt <= 132) {
return;

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JavaScriptProcesor$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JavaScriptProcesor$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JavaScriptProcesor$1fillInstOf });
      org_netbeans_html_boot_impl_JavaScriptProcesor$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JavaScriptProcesor$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 4128;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_NoSuchFieldError = link('java/lang/NoSuchFieldError', function(f) { vm.java_lang_NoSuchFieldError =  f; });
vm.javax_lang_model_type_TypeKind = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_type_TypeKind;
  return link('javax/lang/model/type/TypeKind', function(f) { vm.javax_lang_model_type_TypeKind = f;})(instance);
}

vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback = function org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_boot_impl_JsCallback(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._e = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e = v; return this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0 = v; return this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0; };
    m = CLS.cons__VLorg_netbeans_html_boot_impl_JavaScriptProcesor_2Ljavax_lang_model_element_Element_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_boot_impl_JsCallback(false).constructor.cons__V.call(lcA0);
vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._e.call(lcA0, lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.callMethod__Ljava_lang_CharSequence_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$000__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._this$0.call(lcA0));
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(stA0);
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,lcA2);
var lcA5 = stA0;
if ((lcA5) !== null) { gt = 71; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$100__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._this$0.call(lcA0));
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(stA0);
var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Callback to non-existing class ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._e.call(lcA0));
return "";
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var lcA6 = null;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA5);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 198; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA9);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 135; break IF; }
{ gt = 0; continue X_97; }
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA3);
if ((stI0) == 0) { gt = 195; break IF; }
if (lcA9 !== null && !lcA9['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false).findParamTypes__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2.call(lcA0, lcA9);
var lcA10 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA10,lcA4);
if ((stI0) == 0) { gt = 182; break IF; }
if (lcA9 !== null && !lcA9['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA6 = lcA9;
{ gt = 198; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA7,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\n");
    }
    X_195: for (;;) { IF: if (gt <= 195) {
{ gt = 0; continue X_97; }
    }
    X_198: for (;;) { IF: if (gt <= 198) {

if ((lcA6) !== null) { gt = 341; break IF; }
var stI0 = invoker.length__I(lcA7);
if ((stI0) != 0) { gt = 266; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$200__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._this$0.call(lcA0));
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(stA0);
var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Callback to class ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," with unknown method ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._e.call(lcA0));
{ gt = 426; break IF; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$300__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._this$0.call(lcA0));
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(stA0);
var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Callback to ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,".");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," with wrong parameters: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA4);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,". Only known parameters are ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA7);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._e.call(lcA0));
{ gt = 426; break IF; }
    }
    X_341: for (;;) { IF: if (gt <= 341) {

var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$500__Ljava_util_Map_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$400__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._e.call(lcA0));
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) throw vm.java_lang_ClassCastException(true);
var lcA8 = stA0;
if ((lcA8) !== null) { gt = 401; break IF; }
var stA0 = new vm.java_util_TreeMap;
vm.java_util_TreeMap(false).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$500__Ljava_util_Map_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).access$400__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false)._e.call(lcA0));
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, lcA8);
    }
    X_401: for (;;) { IF: if (gt <= 401) {

var stA0 = lcA2;var stA1 = lcA3;var stA2 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false).findParamTypes__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2.call(lcA0, lcA6);
var stA0 = vm.org_netbeans_html_boot_impl_JsCallback(false).mangle__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(stA0, stA1, stA2);
var lcA9 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA8,lcA9, lcA6);
    }
    X_426: for (;;) { IF: if (gt <= 426) {

return "";

    }
}}}}}}}}}}}
};
    m.access = 4;
    m.cls = CLS;
    m = c.findParamTypes__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA1);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_ExecutableType']) throw vm.java_lang_ClassCastException(true);
var lcA2 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(40));
var stA0 = invoker.getParameterTypes__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_38: for (;;) { IF: if (gt <= 38) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 316; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_TypeMirror']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stI0 = invoker.isPrimitive__Z(stA0);
if ((stI0) == 0) { gt = 245; break IF; }
var stA1 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stI1 = invoker.ordinal__I(stA1);
switch (Array.at(vm.org_netbeans_html_boot_impl_JavaScriptProcesor$1(false)._$SwitchMap$javax$lang$model$type$TypeKind(), stI1)) {
  case 1:{ gt = 132; break IF; }
  case 2:{ gt = 142; break IF; }
  case 3:{ gt = 152; break IF; }
  case 4:{ gt = 162; break IF; }
  case 5:{ gt = 172; break IF; }
  case 6:{ gt = 182; break IF; }
  case 7:{ gt = 192; break IF; }
  case 8:{ gt = 202; break IF; }
  default: { gt = 212; break IF; }
}
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(73));
{ gt = 313; break IF; }
    }
    X_142: for (;;) { IF: if (gt <= 142) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(90));
{ gt = 313; break IF; }
    }
    X_152: for (;;) { IF: if (gt <= 152) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(66));
{ gt = 313; break IF; }
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(67));
{ gt = 313; break IF; }
    }
    X_172: for (;;) { IF: if (gt <= 172) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(83));
{ gt = 313; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(68));
{ gt = 313; break IF; }
    }
    X_192: for (;;) { IF: if (gt <= 192) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(70));
{ gt = 313; break IF; }
    }
    X_202: for (;;) { IF: if (gt <= 202) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(74));
{ gt = 313; break IF; }
    }
    X_212: for (;;) { IF: if (gt <= 212) {
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Uknown ");
var stA3 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_245: for (;;) { IF: if (gt <= 245) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_ARRAY']())) { gt = 280; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(91));
if (lcA5 !== null && !lcA5['$instOf_javax_lang_model_type_ArrayType']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2(lcA5);
var lcA5 = stA0;
{ gt = 0; continue X_245; }
    }
    X_280: for (;;) { IF: if (gt <= 280) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(76));
var stA1 = invoker.toString__Ljava_lang_String_2(lcA5);
var stA1 = invoker.replace__Ljava_lang_String_2CC(stA1,(46), (47));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(59));
    }
    X_313: for (;;) { IF: if (gt <= 313) {
{ gt = 0; continue X_38; }
    }
    X_316: for (;;) { IF: if (gt <= 316) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(41));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA3);
return stA0;

    }
}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallbackfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallbackfillInstOf });
      org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallbackfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JavaScriptProcesor$VerifyCallback';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_e = null;
    this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_TreeMap = link('java/util/TreeMap', function(f) { vm.java_util_TreeMap =  f; });
vm.javax_lang_model_element_ElementKind = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_element_ElementKind;
  return link('javax/lang/model/element/ElementKind', function(f) { vm.javax_lang_model_element_ElementKind = f;})(instance);
}
vm.javax_tools_Diagnostic$Kind = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_tools_Diagnostic$Kind;
  return link('javax/tools/Diagnostic$Kind', function(f) { vm.javax_tools_Diagnostic$Kind = f;})(instance);
}

vm.org_netbeans_html_boot_impl_JavaScriptProcesor = function org_netbeans_html_boot_impl_JavaScriptProcesor() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JavaScriptProcesor;
  if (!CLS.$class) {
    var pp = vm.javax_annotation_processing_AbstractProcessor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._javacalls = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls = v; return this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls; };
  m = c._bodies = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies = v; return this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.javax_annotation_processing_AbstractProcessor(false).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_HashMap;
vm.java_util_HashMap(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._javacalls.call(stA0, stA1);
var stA0 = lcA0;var stA1 = new vm.java_util_HashMap;
vm.java_util_HashMap(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._bodies.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getSupportedAnnotationTypes__Ljava_util_Set_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_util_HashSet;
vm.java_util_HashSet(false).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA1 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_js_JavaScriptBody(false).constructor.$class);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,stA1);
var stA1 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_js_JavaScriptResource(false).constructor.$class);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,stA1);
return lcA1;

};
c['getSupportedAnnotationTypes__Ljava_util_Set_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var lcA3 = stA0;
var stA0 = invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2(lcA2,vm.net_java_html_js_JavaScriptBody(false).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 397; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA5);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 76; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA5);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_CONSTRUCTOR']())) { gt = 76; break IF; }
{ gt = 0; continue X_25; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

if (lcA5 !== null && !lcA5['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA6 = lcA5;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA6);
var lcA7 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA5,vm.net_java_html_js_JavaScriptBody(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_js_JavaScriptBody']) throw vm.java_lang_ClassCastException(true);
var lcA8 = stA0;
if ((lcA8) !== null) { gt = 114; break IF; }
{ gt = 0; continue X_25; }
    }
    X_114: for (;;) { IF: if (gt <= 114) {

var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._bodies.call(lcA0);var stA1 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA5);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Set']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 164; break IF; }
var stA0 = new vm.java_util_HashSet;
vm.java_util_HashSet(false).constructor['cons__V'].call(stA0);
var lcA9 = stA0;
var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._bodies.call(lcA0);var stA1 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA5);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, lcA9);
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA5);
var lcA10 = stA0;
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA10);
var stI0 = invoker.isClass__Z(stA0);
if ((stI0) != 0) { gt = 211; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA10);
var stI0 = invoker.isInterface__Z(stA0);
if ((stI0) != 0) { gt = 211; break IF; }
var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA10);
var lcA10 = stA0;
{ gt = 0; continue X_173; }
    }
    X_211: for (;;) { IF: if (gt <= 211) {

if (lcA10 !== null && !lcA10['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA9,lcA10);
var stA0 = invoker.args___3Ljava_lang_String_2(lcA8);
var lcA9 = stA0;
var stI0 = invoker.size__I(lcA7);
if ((stI0) == ((lcA9).length)) { gt = 259; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,vm.javax_tools_Diagnostic$Kind(false)['_ERROR'](), "Number of args arguments does not match real arguments!", lcA5);
    }
    X_259: for (;;) { IF: if (gt <= 259) {

var stI0 = invoker.wait4js__Z(lcA8);
if ((stI0) != 0) { gt = 300; break IF; }
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA6);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === (vm.javax_lang_model_type_TypeKind(false)['_VOID']())) { gt = 300; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,vm.javax_tools_Diagnostic$Kind(false)['_ERROR'](), "Methods that don't wait for JavaScript to finish must return void!", lcA5);
    }
    X_300: for (;;) { IF: if (gt <= 300) {

var stI0 = invoker.javacall__Z(lcA8);
if ((stI0) != 0) { gt = 338; break IF; }
var stA0 = invoker.body__Ljava_lang_String_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(stA0,".@");
if ((stI0) == 0) { gt = 338; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,vm.javax_tools_Diagnostic$Kind(false)['_WARNING'](), "Usage of .@ usually requires javacall=true", lcA5);
    }
    X_338: for (;;) { IF: if (gt <= 338) {

var stI0 = invoker.javacall__Z(lcA8);
if ((stI0) == 0) { gt = 394; break IF; }
var stA0 = new vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback;
vm.org_netbeans_html_boot_impl_JavaScriptProcesor$VerifyCallback(false).constructor.cons__VLorg_netbeans_html_boot_impl_JavaScriptProcesor_2Ljavax_lang_model_element_Element_2.call(stA0, lcA0, lcA5);
var lcA10 = stA0;
try {
var stA1 = invoker.body__Ljava_lang_String_2(lcA8);
var stA0 = lcA10.parse__Ljava_lang_String_2Ljava_lang_String_2(stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalStateException']) {var stA0 = e;{ gt = 376; break IF; }}
throw e;
}{ gt = 394; break IF; }
    }
    X_376: for (;;) { IF: if (gt <= 376) {
var lcA11 = stA0;
var stA2 = invoker.getLocalizedMessage__Ljava_lang_String_2(lcA11);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,vm.javax_tools_Diagnostic$Kind(false)['_ERROR'](), stA2, lcA5);
    }
    X_394: for (;;) { IF: if (gt <= 394) {
{ gt = 0; continue X_25; }
    }
    X_397: for (;;) { IF: if (gt <= 397) {

var stA0 = invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2(lcA2,vm.net_java_html_js_JavaScriptResource(false).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_412: for (;;) { IF: if (gt <= 412) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 771; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA5,vm.net_java_html_js_JavaScriptResource(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_js_JavaScriptResource']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
if ((lcA6) !== null) { gt = 456; break IF; }
{ gt = 0; continue X_412; }
    }
    X_456: for (;;) { IF: if (gt <= 456) {

var stA0 = invoker.value__Ljava_lang_String_2(lcA6);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(stA0,"/");
if ((stI0) == 0) { gt = 487; break IF; }
var stA0 = invoker.value__Ljava_lang_String_2(lcA6);
var stA0 = invoker.substring__Ljava_lang_String_2I(stA0,1);
var lcA7 = stA0;
{ gt = 529; break IF; }
    }
    X_487: for (;;) { IF: if (gt <= 487) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA1 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA5);
var stA1 = invoker.replace__Ljava_lang_String_2CC(stA1,(46), (47));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"/");
var stA1 = invoker.value__Ljava_lang_String_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA7 = stA0;
    }
    X_529: for (;;) { IF: if (gt <= 529) {
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,vm.javax_tools_StandardLocation(false)['_SOURCE_PATH'](), "", lcA7);
var lcA8 = stA0;
var stA0 = invoker.openInputStream__Ljava_io_InputStream_2(lcA8);
invoker.close__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 565; break IF; }}
throw e;
}{ gt = 674; break IF; }
    }
    X_565: for (;;) { IF: if (gt <= 565) {
var lcA8 = stA0;
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,vm.javax_tools_StandardLocation(false)['_CLASS_OUTPUT'](), "", lcA7);
var lcA9 = stA0;
var stA0 = invoker.openInputStream__Ljava_io_InputStream_2(lcA9);
invoker.close__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 603; break IF; }}
throw e;
}{ gt = 674; break IF; }
    }
    X_603: for (;;) { IF: if (gt <= 603) {
var lcA9 = stA0;
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0,vm.javax_tools_StandardLocation(false)['_CLASS_PATH'](), "", lcA7);
var lcA10 = stA0;
var stA0 = invoker.openInputStream__Ljava_io_InputStream_2(lcA10);
invoker.close__V(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 641; break IF; }}
throw e;
}{ gt = 674; break IF; }
    }
    X_641: for (;;) { IF: if (gt <= 641) {
var lcA10 = stA0;
var stA0 = lcA3;var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Cannot find resource ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA7);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA5);
    }
    X_674: for (;;) { IF: if (gt <= 674) {

var lcI8 = 0;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA5);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA9 = stA0;
    }
    X_691: for (;;) { IF: if (gt <= 691) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 750; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA10 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA10);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 729; break IF; }
{ gt = 0; continue X_691; }
    }
    X_729: for (;;) { IF: if (gt <= 729) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA10,vm.net_java_html_js_JavaScriptBody(false).constructor.$class);
if ((stA0) === null) { gt = 747; break IF; }
var lcI8 = 1;
{ gt = 750; break IF; }
    }
    X_747: for (;;) { IF: if (gt <= 747) {
{ gt = 0; continue X_691; }
    }
    X_750: for (;;) { IF: if (gt <= 750) {

if ((lcI8) != 0) { gt = 768; break IF; }
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(lcA3,vm.javax_tools_Diagnostic$Kind(false)['_ERROR'](), "At least one method needs @JavaScriptBody annotation. Otherwise it is not guaranteed the resource will ever be loaded,", lcA5);
    }
    X_768: for (;;) { IF: if (gt <= 768) {
{ gt = 0; continue X_412; }
    }
    X_771: for (;;) { IF: if (gt <= 771) {

var stI0 = invoker.processingOver__Z(lcA2);
if ((stI0) == 0) { gt = 805; break IF; }
vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).generateCallbackClass__VLjava_util_Map_2.call(lcA0, vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._javacalls.call(lcA0));
vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).generateJavaScriptBodyList__VLjava_util_Map_2.call(lcA0, vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._bodies.call(lcA0));
invoker.clear__V(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._javacalls.call(lcA0));
    }
    X_805: for (;;) { IF: if (gt <= 805) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
c['process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) !== (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 147; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA3);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"args");
if ((stI0) == 0) { gt = 147; break IF; }
if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA6 = lcA1;
var lcA7 = "";
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"{ ");
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA6);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 126; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,lcA7);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var lcA7 = ", ";
{ gt = 0; continue X_69; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5," }");
var stA1 = invoker.toString__Ljava_lang_String_2(lcA5);
var stI0 = 1;var stA1 = vm.javax_annotation_processing_Completions(false)['of__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2'](stA1);
var stA0 = vm.java_util_Collections(false)['nCopies__Ljava_util_List_2ILjava_lang_Object_2'](stI0, stA1);
return stA0;
    }
    X_147: for (;;) { IF: if (gt <= 147) {

return null;

    }
}}}}
};
c['getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.generateJavaScriptBodyList__VLjava_util_Map_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) == 0) { gt = 10; break IF; }
return;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA1 = vm.javax_tools_StandardLocation(false)['_CLASS_OUTPUT']();var stA2 = "";var stA3 = "META-INF/net.java.html.js.classes";var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, 0);
var stA0 = invoker.createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, stA3, stA4);
var lcA2 = stA0;
var stA0 = new vm.java_io_PrintWriter;
var stA1 = stA0;var stA2 = new vm.java_io_OutputStreamWriter;
var stA4 = invoker.openOutputStream__Ljava_io_OutputStream_2(lcA2);
vm.java_io_OutputStreamWriter(false).constructor['cons__VLjava_io_OutputStream_2Ljava_lang_String_2'].call(stA2, stA4, "UTF-8");
vm.java_io_PrintWriter(false).constructor['cons__VLjava_io_Writer_2'].call(stA1, stA2);
var lcA3 = stA0;
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_72: for (;;) { IF: if (gt <= 72) {
try {
var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 356; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_java_util_Set']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA1 = vm.javax_tools_StandardLocation(false)['_CLASS_OUTPUT']();var stA2 = lcA6;var stA3 = "net.java.html.js.classes";var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, 1);
var stA7 = invoker.iterator__Ljava_util_Iterator_2(lcA7);
var stA7 = invoker.next__Ljava_lang_Object_2(stA7);
if (stA7 !== null && !stA7['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
Array.at(stA4, 0, stA7);
var stA0 = invoker.createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, stA3, stA4);
var lcA8 = stA0;
var stA0 = invoker.openOutputStream__Ljava_io_OutputStream_2(lcA8);
var lcA9 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}try {var stA0 = new vm.java_io_PrintWriter;
var stA1 = stA0;var stA2 = new vm.java_io_OutputStreamWriter;
vm.java_io_OutputStreamWriter(false).constructor['cons__VLjava_io_OutputStream_2Ljava_lang_String_2'].call(stA2, lcA9, "UTF-8");
vm.java_io_PrintWriter(false).constructor['cons__VLjava_io_Writer_2'].call(stA1, stA2);
var lcA10 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA7);
var lcA11 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 275; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}    }
    X_201: for (;;) { IF: if (gt <= 201) {
try {
var stI0 = invoker.hasNext__Z(lcA11);
if ((stI0) == 0) { gt = 257; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA11);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var lcA12 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2(stA0,lcA12);
var lcA13 = stA0;
invoker.println__VLjava_lang_Object_2(lcA10,lcA13);
invoker.println__VLjava_lang_Object_2(lcA3,lcA13);
{ gt = 0; continue X_201; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 275; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}    }
    X_257: for (;;) { IF: if (gt <= 257) {
try {
invoker.flush__V(lcA10);
invoker.close__V(lcA10);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 275; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}try {
invoker.close__V(lcA9);
{ gt = 353; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_275: for (;;) { IF: if (gt <= 275) {
try {var lcA10 = stA0;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Failed to write to ");
var stA3 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA3 !== null && !stA3['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,": ");
var stA3 = invoker.toString__Ljava_lang_String_2(lcA10);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2(stA0,stA1, stA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
var stA0 = e;{ gt = 343; break IF; }
}try {
invoker.close__V(lcA9);
{ gt = 353; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_343: for (;;) { IF: if (gt <= 343) {
try {var lcA14 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
var stA0 = e;{ gt = 0; continue X_343; }
}try {
invoker.close__V(lcA9);
{ var stA0 = lcA14; throw lcA14; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_353: for (;;) { IF: if (gt <= 353) {
try {{ gt = 0; continue X_72; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}    }
    X_356: for (;;) { IF: if (gt <= 356) {
try {
invoker.close__V(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 363; break IF; }}
throw e;
}{ gt = 403; break IF; }
    }
    X_363: for (;;) { IF: if (gt <= 363) {
var lcA2 = stA0;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Failed to write to META-INF/net.java.html.js.classes: ");
var stA3 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2(stA0,stA1, stA2);
    }
    X_403: for (;;) { IF: if (gt <= 403) {
return;

    }
}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateCallbackClass__VLjava_util_Map_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA2 = stA0;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 992; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) throw vm.java_lang_ClassCastException(true);
var lcA3 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"package ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,";\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"public final class $JsCallbacks$ {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  static final $JsCallbacks$ VM = new $JsCallbacks$(null);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  private final org.netbeans.html.boot.spi.Fn.Presenter p;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  private $JsCallbacks$ last;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  private $JsCallbacks$(org.netbeans.html.boot.spi.Fn.Presenter p) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    this.p = p;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  }\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  final $JsCallbacks$ current() {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    org.netbeans.html.boot.spi.Fn.Presenter now = org.netbeans.html.boot.spi.Fn.activePresenter();\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    if (now == p) return this;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    if (last != null && now == last.p) return last;\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    return last = new $JsCallbacks$(now);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  }\n");
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA5);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_198: for (;;) { IF: if (gt <= 198) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 841; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) throw vm.java_lang_ClassCastException(true);
var lcA8 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA10 = stA0;
var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA10);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_STATIC']());
var lcI11 = stI0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"\n  public java.lang.Object ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA9);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA12 = "";
if ((lcI11) != 0) { gt = 321; break IF; }
var stA1 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA10);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA6,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6," self");
var lcA12 = ", ";
    }
    X_321: for (;;) { IF: if (gt <= 321) {

var lcI13 = 0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA14 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA10);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA15 = stA0;
    }
    X_347: for (;;) { IF: if (gt <= 347) {

var stI0 = invoker.hasNext__Z(lcA15);
if ((stI0) == 0) { gt = 485; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA15);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA16 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,lcA12);
lcI13++;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA16);
var lcA17 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA17);
var stI0 = invoker.isPrimitive__Z(stA0);
if ((stI0) != 0) { gt = 457; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"Object");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA14,"    if (p instanceof org.netbeans.html.boot.spi.Fn.FromJavaScript) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA14,"      arg");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI13);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," = ((org.netbeans.html.boot.spi.Fn.FromJavaScript)p).toJava(arg");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI13);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA14,"    }\n");
{ gt = 465; break IF; }
    }
    X_457: for (;;) { IF: if (gt <= 457) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(lcA6,lcA17);
    }
    X_465: for (;;) { IF: if (gt <= 465) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6," arg");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI13);
var lcA12 = ", ";
{ gt = 0; continue X_347; }
    }
    X_485: for (;;) { IF: if (gt <= 485) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,") throws Throwable {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA6,lcA14);
var stI0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).useTryResources__Z.call(lcA0);
if ((stI0) == 0) { gt = 519; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    try (java.io.Closeable a = org.netbeans.html.boot.spi.Fn.activate(p)) { \n");
{ gt = 527; break IF; }
    }
    X_519: for (;;) { IF: if (gt <= 519) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    java.io.Closeable a = org.netbeans.html.boot.spi.Fn.activate(p); try {\n");
    }
    X_527: for (;;) { IF: if (gt <= 527) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    ");
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA10);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === (vm.javax_lang_model_type_TypeKind(false)['_VOID']())) { gt = 561; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"Object $ret = ");
    }
    X_561: for (;;) { IF: if (gt <= 561) {

if ((lcI11) == 0) { gt = 598; break IF; }
var stA1 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA10);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA6,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA6,(46));
{ gt = 606; break IF; }
    }
    X_598: for (;;) { IF: if (gt <= 598) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"self.");
    }
    X_606: for (;;) { IF: if (gt <= 606) {

var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA6,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"(");
var lcI13 = 0;
var lcA12 = "";
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA10);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA15 = stA0;
    }
    X_648: for (;;) { IF: if (gt <= 648) {

var stI0 = invoker.hasNext__Z(lcA15);
if ((stI0) == 0) { gt = 719; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA15);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA16 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,lcA12);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"(");
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA16);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,")arg");
lcI13++;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,lcI13);
var lcA12 = ", ";
{ gt = 0; continue X_648; }
    }
    X_719: for (;;) { IF: if (gt <= 719) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,");\n");
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA10);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_VOID']())) { gt = 756; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    return null;\n");
{ gt = 788; break IF; }
    }
    X_756: for (;;) { IF: if (gt <= 756) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    if (p instanceof org.netbeans.html.boot.spi.Fn.ToJavaScript) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"      $ret = ((org.netbeans.html.boot.spi.Fn.ToJavaScript)p).toJavaScript($ret);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    }\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    return $ret;\n");
    }
    X_788: for (;;) { IF: if (gt <= 788) {

var stI0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).useTryResources__Z.call(lcA0);
if ((stI0) == 0) { gt = 806; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    }\n");
{ gt = 830; break IF; }
    }
    X_806: for (;;) { IF: if (gt <= 806) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    } finally {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"      a.close();\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"    }\n");
    }
    X_830: for (;;) { IF: if (gt <= 830) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"  }\n");
{ gt = 0; continue X_198; }
    }
    X_841: for (;;) { IF: if (gt <= 841) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"}\n");
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".$JsCallbacks$");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA7 = stA0;
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA2 = invoker.values__Ljava_util_Collection_2(lcA5);
var stI3 = invoker.size__I(lcA5);
var stA1 = lcA7;var stA3 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, stI3);
var stA2 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA2,stA3);
if (stA2 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA2, 1, vm.javax_lang_model_element_Element)) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2);
var stA0 = invoker.openWriter__Ljava_io_Writer_2(stA0);
var lcA8 = stA0;
var stA1 = invoker.toString__Ljava_lang_String_2(lcA6);
invoker.write__VLjava_lang_String_2(lcA8,stA1);
invoker.close__V(lcA8);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 937; break IF; }}
throw e;
}{ gt = 989; break IF; }
    }
    X_937: for (;;) { IF: if (gt <= 937) {
var lcA8 = stA0;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't write ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA7);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,": ");
var stA3 = invoker.getMessage__Ljava_lang_String_2(lcA8);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2(stA0,stA1, stA2);
    }
    X_989: for (;;) { IF: if (gt <= 989) {
{ gt = 0; continue X_12; }
    }
    X_992: for (;;) { IF: if (gt <= 992) {
return;

    }
}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.useTryResources__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.getSourceVersion__Ljavax_lang_model_SourceVersion_2(vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0));
var stI0 = invoker.compareTo__ILjava_lang_Enum_2(stA0,vm.javax_lang_model_SourceVersion(false)['_RELEASE_7']());
if ((stI0) < 0) { gt = 22; break IF; }
var stI0 = 1;{ gt = 23; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_LinkageError']) {var stA0 = e;{ gt = 24; break IF; }}
throw e;
}    }
    X_22: for (;;) { IF: if (gt <= 22) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_LinkageError']) {var stA0 = e;{ gt = 24; break IF; }}
throw e;
}var stI0 = 0;    }
    X_23: for (;;) { IF: if (gt <= 23) {
return stI0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {
var lcA1 = stA0;
return 0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA0);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_PACKAGE']())) { gt = 22; break IF; }
var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA0);
var lcA0 = stA0;
{ gt = 0; continue X_0; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

if (lcA0 !== null && !lcA0['$instOf_javax_lang_model_element_PackageElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.access$000__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__Ljavax_annotation_processing_ProcessingEnvironment_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)['_processingEnv'].call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$400__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0) {
var stA0 = vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false).findPkg__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA0);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$500__Ljava_util_Map_2Lorg_netbeans_html_boot_impl_JavaScriptProcesor_2 = function(lcA0) {
return vm.org_netbeans_html_boot_impl_JavaScriptProcesor(false)._javacalls.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JavaScriptProcesorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JavaScriptProcesor', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JavaScriptProcesorfillInstOf });
      org_netbeans_html_boot_impl_JavaScriptProcesorfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JavaScriptProcesor';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor_javacalls = null;
    this.fld_org_netbeans_html_boot_impl_JavaScriptProcesor_bodies = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_boot_impl_JavaScriptProcesor'] = vm.org_netbeans_html_boot_impl_JavaScriptProcesor;

vm.java_lang_LinkageError = link('java/lang/LinkageError', function(f) { vm.java_lang_LinkageError =  f; });
vm.javax_lang_model_SourceVersion = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_SourceVersion;
  return link('javax/lang/model/SourceVersion', function(f) { vm.javax_lang_model_SourceVersion = f;})(instance);
}
vm.javax_lang_model_element_Modifier = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_element_Modifier;
  return link('javax/lang/model/element/Modifier', function(f) { vm.javax_lang_model_element_Modifier = f;})(instance);
}
vm.java_io_OutputStreamWriter = link('java/io/OutputStreamWriter', function(f) { vm.java_io_OutputStreamWriter =  f; });
vm.java_io_PrintWriter = link('java/io/PrintWriter', function(f) { vm.java_io_PrintWriter =  f; });
vm.javax_annotation_processing_Completions = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_annotation_processing_Completions;
  return link('javax/annotation/processing/Completions', function(f) { vm.javax_annotation_processing_Completions = f;})(instance);
}
vm.javax_tools_StandardLocation = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_tools_StandardLocation;
  return link('javax/tools/StandardLocation', function(f) { vm.javax_tools_StandardLocation = f;})(instance);
}
vm.javax_annotation_processing_AbstractProcessor = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_annotation_processing_AbstractProcessor;
  return link('javax/annotation/processing/AbstractProcessor', function(f) { vm.javax_annotation_processing_AbstractProcessor = f;})(instance);
}

vm.org_netbeans_html_boot_impl_JsAgent = function org_netbeans_html_boot_impl_JsAgent() {
  var m;
  var CLS = org_netbeans_html_boot_impl_JsAgent;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.premain__VLjava_lang_String_2Ljava_lang_instrument_Instrumentation_2 = function(lcA0, lcA1) {
var stA0 = lcA1;var stA1 = new vm.org_netbeans_html_boot_impl_JsAgent;
vm.org_netbeans_html_boot_impl_JsAgent(false).constructor.cons__V.call(stA1);
invoker.addTransformer__VLjava_lang_instrument_ClassFileTransformer_2(stA0,stA1);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.agentmain__VLjava_lang_String_2Ljava_lang_instrument_Instrumentation_2 = function(lcA0, lcA1) {
var stA0 = lcA1;var stA1 = new vm.org_netbeans_html_boot_impl_JsAgent;
vm.org_netbeans_html_boot_impl_JsAgent(false).constructor.cons__V.call(stA1);
invoker.addTransformer__VLjava_lang_instrument_ClassFileTransformer_2(stA0,stA1);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.transform___3BLjava_lang_ClassLoader_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_security_ProtectionDomain_2_3B = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stI0 = vm.org_netbeans_html_boot_impl_JsPkgCache(false).process__ZLjava_lang_ClassLoader_2Ljava_lang_String_2(lcA1, lcA2);
if ((stI0) == 0) { gt = 15; break IF; }
var stA0 = vm.org_netbeans_html_boot_impl_FnUtils(false).transform___3B_3BLjava_lang_ClassLoader_2(lcA5, lcA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 18; break IF; }}
throw e;
}return stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {
try {
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 18; break IF; }}
throw e;
}return lcA5;
    }
    X_18: for (;;) { IF: if (gt <= 18) {
var lcA6 = stA0;
return lcA5;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_boot_impl_JsAgentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_boot_impl_JsAgent', { value : true });
      vm.java_lang_instrument_ClassFileTransformer(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_boot_impl_JsAgentfillInstOf });
      org_netbeans_html_boot_impl_JsAgentfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/boot/impl/JsAgent';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_instrument_ClassFileTransformer = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_instrument_ClassFileTransformer;
  return link('java/lang/instrument/ClassFileTransformer', function(f) { vm.java_lang_instrument_ClassFileTransformer = f;})(instance);
}
  invoker.run__V = function() {
    var target = arguments[0];
    return target['run__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toString__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['toString__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2 = function() {
    var target = arguments[0];
    return target['log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.flush__V = function() {
    var target = arguments[0];
    return target['flush__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.set__VLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['set__VLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getName__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getName__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getClass__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getClass__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.iterator__Ljava_util_Iterator_2 = function() {
    var target = arguments[0];
    return target['iterator__Ljava_util_Iterator_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.hasNext__Z = function() {
    var target = arguments[0];
    return target['hasNext__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.next__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['next__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function() {
    var target = arguments[0];
    return target['getClassLoader__Ljava_lang_ClassLoader_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getParent__Ljava_lang_ClassLoader_2 = function() {
    var target = arguments[0];
    return target['getParent__Ljava_lang_ClassLoader_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2 = function() {
    var target = arguments[0];
    return target['displayPage__VLjava_net_URL_2Ljava_lang_Runnable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.lastIndexOf__II = function() {
    var target = arguments[0];
    return target['lastIndexOf__II'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.substring__Ljava_lang_String_2II = function() {
    var target = arguments[0];
    return target['substring__Ljava_lang_String_2II'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.substring__Ljava_lang_String_2I = function() {
    var target = arguments[0];
    return target['substring__Ljava_lang_String_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toURI__Ljava_net_URI_2 = function() {
    var target = arguments[0];
    return target['toURI__Ljava_net_URI_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toURL__Ljava_net_URL_2 = function() {
    var target = arguments[0];
    return target['toURL__Ljava_net_URL_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getResource__Ljava_net_URL_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getResource__Ljava_net_URL_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getProtectionDomain__Ljava_security_ProtectionDomain_2 = function() {
    var target = arguments[0];
    return target['getProtectionDomain__Ljava_security_ProtectionDomain_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getCodeSource__Ljava_security_CodeSource_2 = function() {
    var target = arguments[0];
    return target['getCodeSource__Ljava_security_CodeSource_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getLocation__Ljava_net_URL_2 = function() {
    var target = arguments[0];
    return target['getLocation__Ljava_net_URL_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2 = function() {
    var target = arguments[0];
    return target['initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.openConnection__Ljava_net_URLConnection_2 = function() {
    var target = arguments[0];
    return target['openConnection__Ljava_net_URLConnection_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getJarFileURL__Ljava_net_URL_2 = function() {
    var target = arguments[0];
    return target['getJarFileURL__Ljava_net_URL_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getLanguage__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getLanguage__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getCountry__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getCountry__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.setReadTimeout__VI = function() {
    var target = arguments[0];
    return target['setReadTimeout__VI'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getResponseCode__I = function() {
    var target = arguments[0];
    return target['getResponseCode__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getInputStream__Ljava_io_InputStream_2 = function() {
    var target = arguments[0];
    return target['getInputStream__Ljava_io_InputStream_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.close__V = function() {
    var target = arguments[0];
    return target['close__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.setContextClassLoader__VLjava_lang_ClassLoader_2 = function() {
    var target = arguments[0];
    return target['setContextClassLoader__VLjava_lang_ClassLoader_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function() {
    var target = arguments[0];
    return target['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.build__Lnet_java_html_BrwsrCtx_2 = function() {
    var target = arguments[0];
    return target['build__Lnet_java_html_BrwsrCtx_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.execute__VLjava_lang_Runnable_2 = function() {
    var target = arguments[0];
    return target['execute__VLjava_lang_Runnable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['defineFn__Lorg_netbeans_html_boot_spi_Fn_2Ljava_lang_String_2_3Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['invokeLater__VLjava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.add__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['add__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getResourceAsStream__Ljava_io_InputStream_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.startsWith__ZLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['startsWith__ZLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.loadScript__VLjava_io_Reader_2 = function() {
    var target = arguments[0];
    return target['loadScript__VLjava_io_Reader_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getResources__Ljava_util_Enumeration_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getResources__Ljava_util_Enumeration_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.hasMoreElements__Z = function() {
    var target = arguments[0];
    return target['hasMoreElements__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.nextElement__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['nextElement__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.accept__VLorg_objectweb_asm_ClassVisitor_2I = function() {
    var target = arguments[0];
    return target['accept__VLorg_objectweb_asm_ClassVisitor_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toByteArray___3B = function() {
    var target = arguments[0];
    return target['toByteArray___3B'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.indexOf__ILjava_lang_String_2I = function() {
    var target = arguments[0];
    return target['indexOf__ILjava_lang_String_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.charAt__CI = function() {
    var target = arguments[0];
    return target['charAt__CI'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.indexOf__III = function() {
    var target = arguments[0];
    return target['indexOf__III'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.endsWith__ZLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['endsWith__ZLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.length__I = function() {
    var target = arguments[0];
    return target['length__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.replace__Ljava_lang_String_2CC = function() {
    var target = arguments[0];
    return target['replace__Ljava_lang_String_2CC'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isEmpty__Z = function() {
    var target = arguments[0];
    return target['isEmpty__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2I = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.desiredAssertionStatus__Z = function() {
    var target = arguments[0];
    return target['desiredAssertionStatus__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.setDefaultAssertionStatus__VZ = function() {
    var target = arguments[0];
    return target['setDefaultAssertionStatus__VZ'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.equals__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['equals__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.findResource__Ljava_net_URL_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['findResource__Ljava_net_URL_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.openStream__Ljava_io_InputStream_2 = function() {
    var target = arguments[0];
    return target['openStream__Ljava_io_InputStream_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.available__I = function() {
    var target = arguments[0];
    return target['available__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.read__I_3BII = function() {
    var target = arguments[0];
    return target['read__I_3BII'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.defineClass__Ljava_lang_Class_2Ljava_lang_String_2_3BII = function() {
    var target = arguments[0];
    return target['defineClass__Ljava_lang_Class_2Ljava_lang_String_2_3BII'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.contains__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['contains__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.readLine__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['readLine__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isAssignableFrom__ZLjava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['isAssignableFrom__ZLjava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isInterface__Z = function() {
    var target = arguments[0];
    return target['isInterface__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getSuperclass__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getSuperclass__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['visitArray__Lorg_objectweb_asm_AnnotationVisitor_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.visit__VLjava_lang_String_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['visit__VLjava_lang_String_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.visitEnd__V = function() {
    var target = arguments[0];
    return target['visitEnd__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.size__I = function() {
    var target = arguments[0];
    return target['size__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.accept__VLorg_objectweb_asm_signature_SignatureVisitor_2 = function() {
    var target = arguments[0];
    return target['accept__VLorg_objectweb_asm_signature_SignatureVisitor_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getSort__I = function() {
    var target = arguments[0];
    return target['getSort__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getInternalName__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getInternalName__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getClassName__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getClassName__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getDescriptor__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getDescriptor__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getOpcode__II = function() {
    var target = arguments[0];
    return target['getOpcode__II'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.visitInsn__VI = function() {
    var target = arguments[0];
    return target['visitInsn__VI'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.visitField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['visitField__Lorg_objectweb_asm_FieldVisitor_2ILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.booleanValue__Z = function() {
    var target = arguments[0];
    return target['booleanValue__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.ordinal__I = function() {
    var target = arguments[0];
    return target['ordinal__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getElementUtils__Ljavax_lang_model_util_Elements_2 = function() {
    var target = arguments[0];
    return target['getElementUtils__Ljavax_lang_model_util_Elements_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getMessager__Ljavax_annotation_processing_Messager_2 = function() {
    var target = arguments[0];
    return target['getMessager__Ljavax_annotation_processing_Messager_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getEnclosedElements__Ljava_util_List_2 = function() {
    var target = arguments[0];
    return target['getEnclosedElements__Ljava_util_List_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getKind__Ljavax_lang_model_element_ElementKind_2 = function() {
    var target = arguments[0];
    return target['getKind__Ljavax_lang_model_element_ElementKind_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getSimpleName__Ljavax_lang_model_element_Name_2 = function() {
    var target = arguments[0];
    return target['getSimpleName__Ljavax_lang_model_element_Name_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.contentEquals__ZLjava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['contentEquals__ZLjava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.asType__Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['asType__Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getParameterTypes__Ljava_util_List_2 = function() {
    var target = arguments[0];
    return target['getParameterTypes__Ljava_util_List_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getKind__Ljavax_lang_model_type_TypeKind_2 = function() {
    var target = arguments[0];
    return target['getKind__Ljavax_lang_model_type_TypeKind_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isPrimitive__Z = function() {
    var target = arguments[0];
    return target['isPrimitive__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['getComponentType__Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getParameters__Ljava_util_List_2 = function() {
    var target = arguments[0];
    return target['getParameters__Ljava_util_List_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['getEnclosingElement__Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isClass__Z = function() {
    var target = arguments[0];
    return target['isClass__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.args___3Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['args___3Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.wait4js__Z = function() {
    var target = arguments[0];
    return target['wait4js__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['getReturnType__Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.javacall__Z = function() {
    var target = arguments[0];
    return target['javacall__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.body__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['body__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.contains__ZLjava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['contains__ZLjava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getLocalizedMessage__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getLocalizedMessage__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.value__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['value__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getFiler__Ljavax_annotation_processing_Filer_2 = function() {
    var target = arguments[0];
    return target['getFiler__Ljavax_annotation_processing_Filer_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['getResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.openInputStream__Ljava_io_InputStream_2 = function() {
    var target = arguments[0];
    return target['openInputStream__Ljava_io_InputStream_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.processingOver__Z = function() {
    var target = arguments[0];
    return target['processingOver__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.clear__V = function() {
    var target = arguments[0];
    return target['clear__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['createResource__Ljavax_tools_FileObject_2Ljavax_tools_JavaFileManager$Location_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.openOutputStream__Ljava_io_OutputStream_2 = function() {
    var target = arguments[0];
    return target['openOutputStream__Ljava_io_OutputStream_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.entrySet__Ljava_util_Set_2 = function() {
    var target = arguments[0];
    return target['entrySet__Ljava_util_Set_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getKey__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['getKey__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getValue__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['getValue__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2 = function() {
    var target = arguments[0];
    return target['getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.println__VLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['println__VLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getModifiers__Ljava_util_Set_2 = function() {
    var target = arguments[0];
    return target['getModifiers__Ljava_util_Set_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getQualifiedName__Ljavax_lang_model_element_Name_2 = function() {
    var target = arguments[0];
    return target['getQualifiedName__Ljavax_lang_model_element_Name_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.values__Ljava_util_Collection_2 = function() {
    var target = arguments[0];
    return target['values__Ljava_util_Collection_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.openWriter__Ljava_io_Writer_2 = function() {
    var target = arguments[0];
    return target['openWriter__Ljava_io_Writer_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.write__VLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['write__VLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getMessage__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getMessage__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getSourceVersion__Ljavax_lang_model_SourceVersion_2 = function() {
    var target = arguments[0];
    return target['getSourceVersion__Ljavax_lang_model_SourceVersion_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.compareTo__ILjava_lang_Enum_2 = function() {
    var target = arguments[0];
    return target['compareTo__ILjava_lang_Enum_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.addTransformer__VLjava_lang_instrument_ClassFileTransformer_2 = function() {
    var target = arguments[0];
    return target['addTransformer__VLjava_lang_instrument_ClassFileTransformer_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpBZ2VudC1DbGFzczogb3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5pbXBsLkpzQWdlbnQNCkJuZC1MYXN0TW9kaWZpZWQ6IDE0MTAxOTAwNTAxMDINCkJ1aWxkLUpkazogMS44LjBfMTENCkJ1aWx0LUJ5OiBqdHVsYWNoDQpCdW5kbGUtRGVzY3JpcHRpb246IEJ1aWxkZXIgdG8gbGF1bmNoIHlvdXIgSmF2YS9IVE1MIGJhc2VkIGFwcGxpY2F0aW9uLg0KQnVuZGxlLURvY1VSTDogaHR0cDovL25ldGJlYW5zLm9yZw0KQnVuZGxlLUxpY2Vuc2U6IGh0dHA6Ly93d3cubmV0YmVhbnMub3JnL2NkZGwtZ3BsdjIuaHRtbA0KQnVuZGxlLU1hbmlmZXN0VmVyc2lvbjogMg0KQnVuZGxlLU5hbWU6IEJyb3dzZXIgQm9vdHN0cmFwDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBuZXQuamF2YS5odG1sLmJvb3QNCkJ1bmRsZS1WZW5kb3I6IE5ldEJlYW5zDQpCdW5kbGUtVmVyc2lvbjogMS4wLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFY2xpcHNlLUJ1ZGR5UG9saWN5OiBkZXBlbmRlbnQNCkV4cG9ydC1QYWNrYWdlOiBuZXQuamF2YS5odG1sLmpzO3ZlcnNpb249IjEuMC4wIixuZXQuamF2YS5odG1sLmJvb3Q7dmVycw0KIGlvbj0iMS4wLjAiLG9yZy5uZXRiZWFucy5odG1sLmJvb3Quc3BpO3ZlcnNpb249IjEuMC4wIg0KSW1wb3J0LVBhY2thZ2U6IGphdmF4LmFubm90YXRpb24ucHJvY2Vzc2luZyxqYXZheC5sYW5nLm1vZGVsLGphdmF4LmxhbmcuDQogbW9kZWwuZWxlbWVudCxqYXZheC5sYW5nLm1vZGVsLnR5cGUsamF2YXgubGFuZy5tb2RlbC51dGlsLGphdmF4LnRvb2xzLG4NCiBldC5qYXZhLmh0bWw7dmVyc2lvbj0iWzEuMCwyKSIsbmV0LmphdmEuaHRtbC5qcyxvcmcubmV0YmVhbnMuaHRtbC5jb250ZQ0KIHh0LnNwaTt2ZXJzaW9uPSJbMS4wLDIpIixvcmcub2JqZWN0d2ViLmFzbTt2ZXJzaW9uPSJbNC4xLDUpIixvcmcub2JqZWN0DQogd2ViLmFzbS5zaWduYXR1cmU7dmVyc2lvbj0iWzQuMSw1KSINClByZW1haW4tQ2xhc3M6IG9yZy5uZXRiZWFucy5odG1sLmJvb3QuaW1wbC5Kc0FnZW50DQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
  exports['registerResource']('META-INF/services/javax.annotation.processing.Processor', 'b3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5pbXBsLkphdmFTY3JpcHRQcm9jZXNvcgo=');
  exports['registerResource']('net/java/html/boot/html4j.txt', 'PT09PQogICAgRE8gTk9UIEFMVEVSIE9SIFJFTU9WRSBDT1BZUklHSFQgTk9USUNFUyBPUiBUSElTIEhFQURFUi4KCiAgICBDb3B5cmlnaHQgMjAxMy0yMDE0IE9yYWNsZSBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuCgogICAgT3JhY2xlIGFuZCBKYXZhIGFyZSByZWdpc3RlcmVkIHRyYWRlbWFya3Mgb2YgT3JhY2xlIGFuZC9vciBpdHMgYWZmaWxpYXRlcy4KICAgIE90aGVyIG5hbWVzIG1heSBiZSB0cmFkZW1hcmtzIG9mIHRoZWlyIHJlc3BlY3RpdmUgb3duZXJzLgoKICAgIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIGVpdGhlciB0aGUgR05VCiAgICBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIFZlcnNpb24gMiBvbmx5ICgiR1BMIikgb3IgdGhlIENvbW1vbgogICAgRGV2ZWxvcG1lbnQgYW5kIERpc3RyaWJ1dGlvbiBMaWNlbnNlKCJDRERMIikgKGNvbGxlY3RpdmVseSwgdGhlCiAgICAiTGljZW5zZSIpLiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlCiAgICBMaWNlbnNlLiBZb3UgY2FuIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKICAgIGh0dHA6Ly93d3cubmV0YmVhbnMub3JnL2NkZGwtZ3BsdjIuaHRtbAogICAgb3IgbmJidWlsZC9saWNlbnNlcy9DRERMLUdQTC0yLUNQLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZQogICAgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUKICAgIExpY2Vuc2UuICBXaGVuIGRpc3RyaWJ1dGluZyB0aGUgc29mdHdhcmUsIGluY2x1ZGUgdGhpcyBMaWNlbnNlIEhlYWRlcgogICAgTm90aWNlIGluIGVhY2ggZmlsZSBhbmQgaW5jbHVkZSB0aGUgTGljZW5zZSBmaWxlIGF0CiAgICBuYmJ1aWxkL2xpY2Vuc2VzL0NEREwtR1BMLTItQ1AuICBPcmFjbGUgZGVzaWduYXRlcyB0aGlzCiAgICBwYXJ0aWN1bGFyIGZpbGUgYXMgc3ViamVjdCB0byB0aGUgIkNsYXNzcGF0aCIgZXhjZXB0aW9uIGFzIHByb3ZpZGVkCiAgICBieSBPcmFjbGUgaW4gdGhlIEdQTCBWZXJzaW9uIDIgc2VjdGlvbiBvZiB0aGUgTGljZW5zZSBmaWxlIHRoYXQKICAgIGFjY29tcGFuaWVkIHRoaXMgY29kZS4gSWYgYXBwbGljYWJsZSwgYWRkIHRoZSBmb2xsb3dpbmcgYmVsb3cgdGhlCiAgICBMaWNlbnNlIEhlYWRlciwgd2l0aCB0aGUgZmllbGRzIGVuY2xvc2VkIGJ5IGJyYWNrZXRzIFtdIHJlcGxhY2VkIGJ5CiAgICB5b3VyIG93biBpZGVudGlmeWluZyBpbmZvcm1hdGlvbjoKICAgICJQb3J0aW9ucyBDb3B5cmlnaHRlZCBbeWVhcl0gW25hbWUgb2YgY29weXJpZ2h0IG93bmVyXSIKCiAgICBDb250cmlidXRvcihzKToKCiAgICBUaGUgT3JpZ2luYWwgU29mdHdhcmUgaXMgTmV0QmVhbnMuIFRoZSBJbml0aWFsIERldmVsb3BlciBvZiB0aGUgT3JpZ2luYWwKICAgIFNvZnR3YXJlIGlzIE9yYWNsZS4gUG9ydGlvbnMgQ29weXJpZ2h0IDIwMTMtMjAxNCBPcmFjbGUuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuCgogICAgSWYgeW91IHdpc2ggeW91ciB2ZXJzaW9uIG9mIHRoaXMgZmlsZSB0byBiZSBnb3Zlcm5lZCBieSBvbmx5IHRoZSBDRERMCiAgICBvciBvbmx5IHRoZSBHUEwgVmVyc2lvbiAyLCBpbmRpY2F0ZSB5b3VyIGRlY2lzaW9uIGJ5IGFkZGluZwogICAgIltDb250cmlidXRvcl0gZWxlY3RzIHRvIGluY2x1ZGUgdGhpcyBzb2Z0d2FyZSBpbiB0aGlzIGRpc3RyaWJ1dGlvbgogICAgdW5kZXIgdGhlIFtDRERMIG9yIEdQTCBWZXJzaW9uIDJdIGxpY2Vuc2UuIiBJZiB5b3UgZG8gbm90IGluZGljYXRlIGEKICAgIHNpbmdsZSBjaG9pY2Ugb2YgbGljZW5zZSwgYSByZWNpcGllbnQgaGFzIHRoZSBvcHRpb24gdG8gZGlzdHJpYnV0ZQogICAgeW91ciB2ZXJzaW9uIG9mIHRoaXMgZmlsZSB1bmRlciBlaXRoZXIgdGhlIENEREwsIHRoZSBHUEwgVmVyc2lvbiAyIG9yCiAgICB0byBleHRlbmQgdGhlIGNob2ljZSBvZiBsaWNlbnNlIHRvIGl0cyBsaWNlbnNlZXMgYXMgcHJvdmlkZWQgYWJvdmUuCiAgICBIb3dldmVyLCBpZiB5b3UgYWRkIEdQTCBWZXJzaW9uIDIgY29kZSBhbmQgdGhlcmVmb3JlLCBlbGVjdGVkIHRoZSBHUEwKICAgIFZlcnNpb24gMiBsaWNlbnNlLCB0aGVuIHRoZSBvcHRpb24gYXBwbGllcyBvbmx5IGlmIHRoZSBuZXcgY29kZSBpcwogICAgbWFkZSBzdWJqZWN0IHRvIHN1Y2ggb3B0aW9uIGJ5IHRoZSBjb3B5cmlnaHQgaG9sZGVyLgo9PT09Cgo=');
});