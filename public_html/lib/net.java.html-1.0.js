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

vm.net_java_html_BrwsrCtx$1 = function net_java_html_BrwsrCtx$1() {
  var m;
  var CLS = net_java_html_BrwsrCtx$1;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_context_impl_CtxAccssr(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_context_impl_CtxAccssr(false).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.net_java_html_BrwsrCtx;
vm.net_java_html_BrwsrCtx(false).constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx$1_2.call(stA0, lcA1, null);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.net_java_html_BrwsrCtx(false).access$100__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2(lcA1);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtx$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtx$1fillInstOf });
      net_java_html_BrwsrCtx$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx$1';
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

vm.net_java_html_BrwsrCtx = function net_java_html_BrwsrCtx() {
  var m;
  var CLS = net_java_html_BrwsrCtx;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_LOG = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS.fld_LOG = v; return CLS.fld_LOG; };
  m = c._impl = function (v) {  if (arguments.length == 1) this.fld_net_java_html_BrwsrCtx_impl = v; return this.fld_net_java_html_BrwsrCtx_impl; };
  CLS.fld_EMPTY = null;
  m = c._EMPTY = function (v) {  if (arguments.length == 1) CLS.fld_EMPTY = v; return CLS.fld_EMPTY; };
c['_EMPTY'] = m;

  CLS.fld_CURRENT = null;
  m = c._CURRENT = function (v) {  if (arguments.length == 1) CLS.fld_CURRENT = v; return CLS.fld_CURRENT; };
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.net_java_html_BrwsrCtx(false)._impl.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.get__Ljava_lang_Object_2(vm.net_java_html_BrwsrCtx(false)._CURRENT());
if (stA0 !== null && !stA0['$instOf_net_java_html_BrwsrCtx']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
if ((lcA1) === null) { gt = 16; break IF; }
return lcA1;
    }
    X_16: for (;;) { IF: if (gt <= 16) {
var stA0 = vm.org_netbeans_html_context_spi_Contexts(false).newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2();
var lcA2 = stA0;
var stI0 = vm.org_netbeans_html_context_spi_Contexts(false).fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2(lcA0, lcA2);
var lcI3 = stI0;
if ((lcI3) != 0) { gt = 42; break IF; }
invoker.warning__VLjava_lang_String_2(vm.net_java_html_BrwsrCtx(false)._LOG(),"No browser context found. Returning empty technology!");
return vm.net_java_html_BrwsrCtx(false)._EMPTY();
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stA0 = lcA2.build__Lnet_java_html_BrwsrCtx_2();
return stA0;

    }
}}}
};
c['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.execute__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.net_java_html_BrwsrCtx$1Wrap;
vm.net_java_html_BrwsrCtx$1Wrap(false).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Runnable_2.call(stA0, lcA0, lcA1);
var lcA2 = stA0;
var stA0 = vm.org_netbeans_html_context_spi_Contexts(false).find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2(lcA0, vm.java_util_concurrent_Executor(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_java_util_concurrent_Executor']) throw vm.java_lang_ClassCastException(true);
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 31; break IF; }
invoker.run__V(lcA2);
{ gt = 38; break IF; }
    }
    X_31: for (;;) { IF: if (gt <= 31) {

invoker.execute__VLjava_lang_Runnable_2(lcA3,lcA2);
    }
    X_38: for (;;) { IF: if (gt <= 38) {
return;

    }
}}}
};
c['execute__VLjava_lang_Runnable_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx$1_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.net_java_html_BrwsrCtx(false).constructor.cons__VLorg_netbeans_html_context_impl_CtxImpl_2.call(lcA0, lcA1);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$100__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {
return vm.net_java_html_BrwsrCtx(false)._impl.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Ljava_lang_ThreadLocal_2 = function() {
return vm.net_java_html_BrwsrCtx(false)._CURRENT();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_BrwsrCtx(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
vm.net_java_html_BrwsrCtx(false)._LOG(stA0);
var stA0 = new vm.net_java_html_BrwsrCtx$1;
vm.net_java_html_BrwsrCtx$1(false).constructor.cons__V.call(stA0);
var stA0 = vm.org_netbeans_html_context_spi_Contexts(false).newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2();
var stA0 = stA0.build__Lnet_java_html_BrwsrCtx_2();
vm.net_java_html_BrwsrCtx(false)._EMPTY(stA0);
var stA0 = new vm.java_lang_ThreadLocal;
vm.java_lang_ThreadLocal(false).constructor['cons__V'].call(stA0);
vm.net_java_html_BrwsrCtx(false)._CURRENT(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtxfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx', { value : true });
      vm.java_util_concurrent_Executor(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtxfillInstOf });
      net_java_html_BrwsrCtxfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.net_java_html_BrwsrCtx(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_BrwsrCtx_impl = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['net_java_html_BrwsrCtx'] = vm.net_java_html_BrwsrCtx;

vm.java_lang_ThreadLocal = link('java/lang/ThreadLocal', function(f) { vm.java_lang_ThreadLocal =  f; });
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.java_util_concurrent_Executor = link('java/util/concurrent/Executor', function(f) { vm.java_util_concurrent_Executor =  f; });

vm.net_java_html_BrwsrCtx$1Wrap = function net_java_html_BrwsrCtx$1Wrap() {
  var m;
  var CLS = net_java_html_BrwsrCtx$1Wrap;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$exec = function (v) {  if (arguments.length == 1) this.fld_net_java_html_BrwsrCtx$1Wrap_val$exec = v; return this.fld_net_java_html_BrwsrCtx$1Wrap_val$exec; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_net_java_html_BrwsrCtx$1Wrap_this$0 = v; return this.fld_net_java_html_BrwsrCtx$1Wrap_this$0; };
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Runnable_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.net_java_html_BrwsrCtx$1Wrap(false)._this$0.call(lcA0, lcA1);
vm.net_java_html_BrwsrCtx$1Wrap(false)._val$exec.call(lcA0, lcA2);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = vm.net_java_html_BrwsrCtx(false).access$200__Ljava_lang_ThreadLocal_2();
var stA0 = invoker.get__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_net_java_html_BrwsrCtx']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
try {var stA0 = vm.net_java_html_BrwsrCtx(false).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,vm.net_java_html_BrwsrCtx$1Wrap(false)._this$0.call(lcA0));
invoker.run__V(vm.net_java_html_BrwsrCtx$1Wrap(false)._val$exec.call(lcA0));
} catch (e) {
var stA0 = e;{ gt = 39; break IF; }
}var stA0 = vm.net_java_html_BrwsrCtx(false).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,lcA1);
{ gt = 49; break IF; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {
var lcA2 = stA0;
var stA0 = vm.net_java_html_BrwsrCtx(false).access$200__Ljava_lang_ThreadLocal_2();
invoker.set__VLjava_lang_Object_2(stA0,lcA1);
{ var stA0 = lcA2; throw lcA2; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {
return;

    }
}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_BrwsrCtx$1WrapfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_BrwsrCtx$1Wrap', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_BrwsrCtx$1WrapfillInstOf });
      net_java_html_BrwsrCtx$1WrapfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/BrwsrCtx$1Wrap';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_BrwsrCtx$1Wrap_val$exec = null;
    this.fld_net_java_html_BrwsrCtx$1Wrap_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });

vm.org_netbeans_html_context_spi_Contexts = function org_netbeans_html_context_spi_Contexts() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts;
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
    m = c.newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2 = function() {
var stA0 = new vm.org_netbeans_html_context_spi_Contexts$Builder;
vm.org_netbeans_html_context_spi_Contexts$Builder(false).constructor.cons__V.call(stA0);
return stA0;

};
c['newBuilder__Lorg_netbeans_html_context_spi_Contexts$Builder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0, lcA1) {
var stA0 = vm.org_netbeans_html_context_impl_CtxImpl(false).find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2(lcA0, lcA1);
return stA0;

};
c['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
try {
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA0);
var lcA3 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}{ gt = 14; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA4 = stA0;
var lcA3 = null;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = vm.java_util_ServiceLoader(false)['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2'](vm.org_netbeans_html_context_spi_Contexts$Provider(false).constructor.$class, lcA3);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 61; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA5,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_25; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {
try {
var stA1 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(vm.org_netbeans_html_context_spi_Contexts$Provider(false).constructor.$class);
var stA0 = vm.java_util_ServiceLoader(false)['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2Ljava_lang_ClassLoader_2'](vm.org_netbeans_html_context_spi_Contexts$Provider(false).constructor.$class, stA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 115; break IF; }}
throw e;
}    }
    X_76: for (;;) { IF: if (gt <= 76) {
try {
var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 112; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA5,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_76; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 115; break IF; }}
throw e;
}    }
    X_112: for (;;) { IF: if (gt <= 112) {
{ gt = 124; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {
var lcA4 = stA0;
if ((lcI2) != 0) { gt = 124; break IF; }
{ var stA0 = lcA4; throw lcA4; }
    }
    X_124: for (;;) { IF: if (gt <= 124) {

if ((lcI2) != 0) { gt = 174; break IF; }
var stA0 = vm.java_util_ServiceLoader(false)['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2'](vm.org_netbeans_html_context_spi_Contexts$Provider(false).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 174; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_spi_Contexts$Provider']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2(lcA5,lcA1, lcA0);
var lcI2 = 1;
{ gt = 0; continue X_138; }
    }
    X_174: for (;;) { IF: if (gt <= 174) {

return lcI2;

    }
}}}}}}}}}}}
};
c['fillInByProviders__ZLjava_lang_Class_2Lorg_netbeans_html_context_spi_Contexts$Builder_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_ContextsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_ContextsfillInstOf });
      org_netbeans_html_context_spi_ContextsfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts';
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
exports['org_netbeans_html_context_spi_Contexts'] = vm.org_netbeans_html_context_spi_Contexts;

vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });

vm.org_netbeans_html_context_spi_Contexts$Provider = function org_netbeans_html_context_spi_Contexts$Provider() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Provider;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/context/spi/Contexts$Provider.fillContext';
};
c['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$ProviderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Provider', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$ProviderfillInstOf });
      org_netbeans_html_context_spi_Contexts$ProviderfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Provider';
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
exports['org_netbeans_html_context_spi_Contexts$Provider'] = vm.org_netbeans_html_context_spi_Contexts$Provider;

vm.java_lang_SecurityException = link('java/lang/SecurityException', function(f) { vm.java_lang_SecurityException =  f; });

vm.org_netbeans_html_context_impl_CtxImpl = function org_netbeans_html_context_impl_CtxImpl() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._techs = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl_techs = v; return this.fld_org_netbeans_html_context_impl_CtxImpl_techs; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_context_impl_CtxImpl(false)._techs.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_util_List_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_context_impl_CtxImpl(false)._techs.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = vm.org_netbeans_html_context_impl_CtxAccssr(false).getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2();
var stA0 = stA0.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA2 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(vm.org_netbeans_html_context_impl_CtxImpl(false)._techs.call(lcA2));
var lcA3 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 60; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_context_impl_CtxImpl$Bind']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
var stA0 = lcA1;var stA1 = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false).access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA4);
if ((stA0) !== (stA1)) { gt = 57; break IF; }
var stA0 = lcA1;var stA1 = vm.org_netbeans_html_context_impl_CtxImpl$Bind(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA4);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {
{ gt = 0; continue X_18; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {

return null;

    }
}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.build__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
vm.java_util_Collections(false)['sort__VLjava_util_List_2'](vm.org_netbeans_html_context_impl_CtxImpl(false)._techs.call(lcA0));
var stA0 = vm.java_util_Collections(false)['unmodifiableList__Ljava_util_List_2Ljava_util_List_2'](vm.org_netbeans_html_context_impl_CtxImpl(false)._techs.call(lcA0));
var lcA1 = stA0;
var stA0 = new vm.org_netbeans_html_context_impl_CtxImpl;
vm.org_netbeans_html_context_impl_CtxImpl(false).constructor.cons__VLjava_util_List_2.call(stA0, lcA1);
var lcA2 = stA0;
var stA0 = vm.org_netbeans_html_context_impl_CtxAccssr(false).getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2();
var stA0 = stA0.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2(lcA2);
var lcA3 = stA0;
return lcA3;

};
    m.access = 1;
    m.cls = CLS;
    m = c.register__VLjava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_context_impl_CtxImpl(false)._techs.call(lcA0);var stA1 = new vm.org_netbeans_html_context_impl_CtxImpl$Bind;
vm.org_netbeans_html_context_impl_CtxImpl$Bind(false).constructor.cons__VLjava_lang_Class_2Ljava_lang_Object_2I.call(stA1, lcA1, lcA2, lcI3);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImplfillInstOf });
      org_netbeans_html_context_impl_CtxImplfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_context_impl_CtxImpl_techs = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });

vm.org_netbeans_html_context_impl_CtxImpl$Bind = function org_netbeans_html_context_impl_CtxImpl$Bind() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxImpl$Bind;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._clazz = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz = v; return this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz; };
  m = c._impl = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl = v; return this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl; };
  m = c._priority = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority = v; return this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority; };
    m = CLS.cons__VLjava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._clazz.call(lcA0, lcA1);
vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._impl.call(lcA0, lcA2);
vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._priority.call(lcA0, lcI3);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.compareTo__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._priority.call(lcA0)) == (vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._priority.call(lcA1))) { gt = 21; break IF; }
return (vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._priority.call(lcA0)).sub32(vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._priority.call(lcA1));
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stA0 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._clazz.call(lcA0));
var stA1 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._clazz.call(lcA1));
var stI0 = invoker.compareTo__ILjava_lang_String_2(stA0,stA1);
return stI0;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Bind{clazz=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._clazz.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"@");
var stA1 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._clazz.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", impl=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._impl.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", priority=");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._priority.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.compareTo__ILjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_context_impl_CtxImpl$Bind']) throw vm.java_lang_ClassCastException(true);
var stI0 = lcA0.compareTo__ILorg_netbeans_html_context_impl_CtxImpl$Bind_2(lcA1);
return stI0;

};
c['compareTo__ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Class_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._clazz.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2Lorg_netbeans_html_context_impl_CtxImpl$Bind_2 = function(lcA0) {
return vm.org_netbeans_html_context_impl_CtxImpl$Bind(false)._impl.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxImpl$BindfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxImpl$Bind', { value : true });
      vm.java_lang_Comparable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxImpl$BindfillInstOf });
      org_netbeans_html_context_impl_CtxImpl$BindfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxImpl$Bind';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_clazz = null;
    this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_impl = null;
    this.fld_org_netbeans_html_context_impl_CtxImpl$Bind_priority = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Comparable = link('java/lang/Comparable', function(f) { vm.java_lang_Comparable =  f; });
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });

vm.org_netbeans_html_context_spi_Contexts$Builder = function org_netbeans_html_context_spi_Contexts$Builder() {
  var m;
  var CLS = org_netbeans_html_context_spi_Contexts$Builder;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._impl = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_context_spi_Contexts$Builder_impl = v; return this.fld_org_netbeans_html_context_spi_Contexts$Builder_impl; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.org_netbeans_html_context_impl_CtxImpl;
vm.org_netbeans_html_context_impl_CtxImpl(false).constructor.cons__V.call(stA1);
vm.org_netbeans_html_context_spi_Contexts$Builder(false)._impl.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I = function(lcA1, lcA2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA2) !== null) { gt = 6; break IF; }
return lcA0;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

if ((lcI3) > 0) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
vm.java_lang_IllegalStateException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

vm.org_netbeans_html_context_spi_Contexts$Builder(false)._impl.call(lcA0).register__VLjava_lang_Class_2Ljava_lang_Object_2I(lcA1, lcA2, lcI3);
return lcA0;

    }
}}}
};
c['register__Lorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.build__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_context_spi_Contexts$Builder(false)._impl.call(lcA0).build__Lnet_java_html_BrwsrCtx_2();
return stA0;

};
c['build__Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_spi_Contexts$BuilderfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_spi_Contexts$Builder', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_spi_Contexts$BuilderfillInstOf });
      org_netbeans_html_context_spi_Contexts$BuilderfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/spi/Contexts$Builder';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_context_spi_Contexts$Builder_impl = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_context_spi_Contexts$Builder'] = vm.org_netbeans_html_context_spi_Contexts$Builder;

vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });

vm.org_netbeans_html_context_impl_CtxAccssr = function org_netbeans_html_context_impl_CtxAccssr() {
  var m;
  var CLS = org_netbeans_html_context_impl_CtxAccssr;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_DEFAULT = null;
  m = c._DEFAULT = function (v) {  if (arguments.length == 1) CLS.fld_DEFAULT = v; return CLS.fld_DEFAULT; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
if ((vm.org_netbeans_html_context_impl_CtxAccssr(false)._DEFAULT()) === null) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
vm.java_lang_IllegalStateException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

vm.org_netbeans_html_context_impl_CtxAccssr(false)._DEFAULT(lcA0);
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.newContext__Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_context_impl_CtxImpl_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/context/impl/CtxAccssr.newContext';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_context_impl_CtxImpl_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/context/impl/CtxAccssr.find';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.getDefault__Lorg_netbeans_html_context_impl_CtxAccssr_2 = function() {
return vm.org_netbeans_html_context_impl_CtxAccssr(false)._DEFAULT();

};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.getClass__Ljava_lang_Class_2(vm.net_java_html_BrwsrCtx(false)._EMPTY());
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NullPointerException']) {var stA0 = e;{ gt = 10; break IF; }}
throw e;
}{ gt = 11; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA0 = stA0;
    }
    X_11: for (;;) { IF: if (gt <= 11) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_context_impl_CtxAccssrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_context_impl_CtxAccssr', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_context_impl_CtxAccssrfillInstOf });
      org_netbeans_html_context_impl_CtxAccssrfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/context/impl/CtxAccssr';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_context_impl_CtxAccssr(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_NullPointerException = link('java/lang/NullPointerException', function(f) { vm.java_lang_NullPointerException =  f; });
  invoker.get__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.warning__VLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['warning__VLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.run__V = function() {
    var target = arguments[0];
    return target['run__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.execute__VLjava_lang_Runnable_2 = function() {
    var target = arguments[0];
    return target['execute__VLjava_lang_Runnable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getName__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getName__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.set__VLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['set__VLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function() {
    var target = arguments[0];
    return target['getClassLoader__Ljava_lang_ClassLoader_2'].apply(target, Array.prototype.slice.call(arguments, 1));
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
  invoker.fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['fillContext__VLorg_netbeans_html_context_spi_Contexts$Builder_2Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.add__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['add__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.compareTo__ILjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['compareTo__ILjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toString__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['toString__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getClass__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getClass__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNDEwMTg5OTcyNjAyDQpCdWlsZC1KZGs6IDEuOC4wXzExDQpCdWlsdC1CeToganR1bGFjaA0KQnVuZGxlLURlc2NyaXB0aW9uOiBSZXByZXNlbnRhdGlvbiBvZiBhbiBIVE1MIHBhZ2UgY29udGV4dCBhIEphdmEgcHJvZ3JhDQogbSBvcGVyYXRlcyBpbi4NCkJ1bmRsZS1Eb2NVUkw6IGh0dHA6Ly9uZXRiZWFucy5vcmcNCkJ1bmRsZS1MaWNlbnNlOiBodHRwOi8vd3d3Lm5ldGJlYW5zLm9yZy9jZGRsLWdwbHYyLmh0bWwNCkJ1bmRsZS1NYW5pZmVzdFZlcnNpb246IDINCkJ1bmRsZS1OYW1lOiBIVE1MIENvbnRleHQNCkJ1bmRsZS1TeW1ib2xpY05hbWU6IG5ldC5qYXZhLmh0bWwNCkJ1bmRsZS1WZW5kb3I6IE5ldEJlYW5zDQpCdW5kbGUtVmVyc2lvbjogMS4wLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFY2xpcHNlLUJ1ZGR5UG9saWN5OiBkZXBlbmRlbnQNCkV4cG9ydC1QYWNrYWdlOiBuZXQuamF2YS5odG1sO3ZlcnNpb249IjEuMC4wIixvcmcubmV0YmVhbnMuaHRtbC5jb250ZXh0Lg0KIHNwaTt1c2VzOj0ibmV0LmphdmEuaHRtbCI7dmVyc2lvbj0iMS4wLjAiDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
});