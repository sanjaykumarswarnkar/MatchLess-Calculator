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

vm.net_java_html_sound_AudioClip$1 = function net_java_html_sound_AudioClip$1() {
  var m;
  var CLS = net_java_html_sound_AudioClip$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$1fillInstOf });
      net_java_html_sound_AudioClip$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 4128;
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

vm.net_java_html_sound_AudioClip$DummyClip = function net_java_html_sound_AudioClip$DummyClip() {
  var m;
  var CLS = net_java_html_sound_AudioClip$DummyClip;
  if (!CLS.$class) {
    var pp = vm.net_java_html_sound_AudioClip(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_INSTANCE = null;
  m = c._INSTANCE = function (v) {  if (arguments.length == 1) CLS.fld_INSTANCE = v; return CLS.fld_INSTANCE; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.net_java_html_sound_AudioClip(false).constructor.cons__VLnet_java_html_sound_AudioClip$1_2.call(lcA0, null);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.play__V = function() {
  var  lcA0 = this;
return;

};
c['play__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.pause__V = function() {
  var  lcA0 = this;
return;

};
c['pause__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  var  lcA0 = this;
return;

};
c['setVolume__VD'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  var  lcA0 = this;
return 0;

};
c['isSupported__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.net_java_html_sound_AudioClip$DummyClip;
vm.net_java_html_sound_AudioClip$DummyClip(false).constructor.cons__V.call(stA0);
vm.net_java_html_sound_AudioClip$DummyClip(false)._INSTANCE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$DummyClipfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$DummyClip', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$DummyClipfillInstOf });
      net_java_html_sound_AudioClip$DummyClipfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$DummyClip';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    vm.net_java_html_sound_AudioClip$DummyClip(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.net_java_html_sound_AudioClip = function net_java_html_sound_AudioClip() {
  var m;
  var CLS = net_java_html_sound_AudioClip;
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
    m = c.create__Lnet_java_html_sound_AudioClip_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = vm.net_java_html_BrwsrCtx(false)['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](vm.net_java_html_sound_AudioClip(false).constructor.$class);
var lcA1 = stA0;
var stA0 = vm.org_netbeans_html_context_spi_Contexts(false)['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA1, vm.org_netbeans_html_sound_spi_AudioEnvironment(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_sound_spi_AudioEnvironment']) throw vm.java_lang_ClassCastException(true);
var lcA2 = stA0;
if ((lcA2) === null) { gt = 37; break IF; }
var stA0 = vm.net_java_html_sound_AudioClip(false).create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2(lcA2, lcA0);
var lcA3 = stA0;
if ((lcA3) === null) { gt = 37; break IF; }
return lcA3;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = vm.java_util_ServiceLoader(false)['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2'](vm.org_netbeans_html_sound_spi_AudioEnvironment(false).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 85; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_sound_spi_AudioEnvironment']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
var stA0 = vm.net_java_html_sound_AudioClip(false).create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2(lcA4, lcA0);
var lcA5 = stA0;
if ((lcA5) === null) { gt = 82; break IF; }
return lcA5;
    }
    X_82: for (;;) { IF: if (gt <= 82) {
{ gt = 0; continue X_46; }
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = vm.net_java_html_sound_AudioClip(false).create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2(vm.org_netbeans_html_sound_impl_BrowserAudioEnv(false)._DEFAULT(), lcA0);
var lcA3 = stA0;
if ((lcA3) === null) { gt = 101; break IF; }
var stA0 = lcA3;{ gt = 104; break IF; }
    }
    X_101: for (;;) { IF: if (gt <= 101) {

var stA0 = vm.net_java_html_sound_AudioClip$DummyClip(false)._INSTANCE();    }
    X_104: for (;;) { IF: if (gt <= 104) {
return stA0;

    }
}}}}}}}
};
c['create__Lnet_java_html_sound_AudioClip_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.play__V = function() {
  throw 'no code found for net/java/html/sound/AudioClip.play';
};
c['play__V'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.pause__V = function() {
  throw 'no code found for net/java/html/sound/AudioClip.pause';
};
c['pause__V'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  throw 'no code found for net/java/html/sound/AudioClip.setVolume';
};
c['setVolume__VD'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  throw 'no code found for net/java/html/sound/AudioClip.isSupported';
};
c['isSupported__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.create__Ljava_lang_Object_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
if ((lcA2) === null) { gt = 23; break IF; }
var stA0 = new vm.net_java_html_sound_AudioClip$Impl;
vm.net_java_html_sound_AudioClip$Impl(false).constructor.cons__VLorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2Ljava_lang_Object_2.call(stA0, lcA0, lcA1, lcA2);
return stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

return null;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_sound_AudioClip$1_2 = function(lcA1) {
  var  lcA0 = this;
vm.net_java_html_sound_AudioClip(false).constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClipfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClipfillInstOf });
      net_java_html_sound_AudioClipfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1057;
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
exports['net_java_html_sound_AudioClip'] = vm.net_java_html_sound_AudioClip;


vm.net_java_html_sound_AudioClip$Impl = function net_java_html_sound_AudioClip$Impl() {
  var m;
  var CLS = net_java_html_sound_AudioClip$Impl;
  if (!CLS.$class) {
    var pp = vm.net_java_html_sound_AudioClip(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._src = function (v) {  if (arguments.length == 1) this.fld_net_java_html_sound_AudioClip$Impl_src = v; return this.fld_net_java_html_sound_AudioClip$Impl_src; };
  m = c._clip = function (v) {  if (arguments.length == 1) this.fld_net_java_html_sound_AudioClip$Impl_clip = v; return this.fld_net_java_html_sound_AudioClip$Impl_clip; };
  m = c._env = function (v) {  if (arguments.length == 1) this.fld_net_java_html_sound_AudioClip$Impl_env = v; return this.fld_net_java_html_sound_AudioClip$Impl_env; };
    m = CLS.cons__VLorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.net_java_html_sound_AudioClip(false).constructor.cons__VLnet_java_html_sound_AudioClip$1_2.call(lcA0, null);
vm.net_java_html_sound_AudioClip$Impl(false)._clip.call(lcA0, lcA3);
vm.net_java_html_sound_AudioClip$Impl(false)._env.call(lcA0, lcA1);
vm.net_java_html_sound_AudioClip$Impl(false)._src.call(lcA0, lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.play__V = function() {
  var  lcA0 = this;
vm.net_java_html_sound_AudioClip$Impl(false)._env.call(lcA0).play__VLjava_lang_Object_2(vm.net_java_html_sound_AudioClip$Impl(false)._clip.call(lcA0));
return;

};
c['play__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.pause__V = function() {
  var  lcA0 = this;
vm.net_java_html_sound_AudioClip$Impl(false)._env.call(lcA0).pause__VLjava_lang_Object_2(vm.net_java_html_sound_AudioClip$Impl(false)._clip.call(lcA0));
return;

};
c['pause__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  var  lcA0 = this;
vm.net_java_html_sound_AudioClip$Impl(false)._env.call(lcA0).setVolume__VLjava_lang_Object_2D(vm.net_java_html_sound_AudioClip$Impl(false)._clip.call(lcA0), lcD1);
return;

};
c['setVolume__VD'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  var  lcA0 = this;
var stI0 = vm.net_java_html_sound_AudioClip$Impl(false)._env.call(lcA0).isSupported__ZLjava_lang_Object_2(vm.net_java_html_sound_AudioClip$Impl(false)._clip.call(lcA0));
return stI0;

};
c['isSupported__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stI1 = invoker.hashCode__I(vm.net_java_html_sound_AudioClip$Impl(false)._src.call(lcA0));
return ((59)).mul32(stI1);

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA1 != null && lcA1['$instOf_net_java_html_sound_AudioClip$Impl'] ? 1 : 0;
if ((stI0) == 0) { gt = 22; break IF; }
if (lcA1 !== null && !lcA1['$instOf_net_java_html_sound_AudioClip$Impl']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.equals__ZLjava_lang_Object_2(vm.net_java_html_sound_AudioClip$Impl(false)._src.call(lcA0),vm.net_java_html_sound_AudioClip$Impl(false)._src.call(lcA1));
return stI0;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

return 0;

    }
}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$ImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$Impl', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$ImplfillInstOf });
      net_java_html_sound_AudioClip$ImplfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$Impl';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_net_java_html_sound_AudioClip$Impl_src = null;
    this.fld_net_java_html_sound_AudioClip$Impl_clip = null;
    this.fld_net_java_html_sound_AudioClip$Impl_env = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_sound_impl_BrowserAudioEnv = function org_netbeans_html_sound_impl_BrowserAudioEnv() {
  var m;
  var CLS = org_netbeans_html_sound_impl_BrowserAudioEnv;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_DEFAULT = null;
  m = c._DEFAULT = function (v) {  if (arguments.length == 1) CLS.fld_DEFAULT = v; return CLS.fld_DEFAULT; };
  CLS.fld_$$fn$$create_1 = null;
  m = c._$$fn$$create_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$create_1 = v; return CLS.fld_$$fn$$create_1; };
  CLS.fld_$$fn$$play_2 = null;
  m = c._$$fn$$play_2 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$play_2 = v; return CLS.fld_$$fn$$play_2; };
  CLS.fld_$$fn$$pause_3 = null;
  m = c._$$fn$$pause_3 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$pause_3 = v; return CLS.fld_$$fn$$pause_3; };
  CLS.fld_$$fn$$setVolume_4 = null;
  m = c._$$fn$$setVolume_4 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$setVolume_4 = v; return CLS.fld_$$fn$$setVolume_4; };
  CLS.fld_$$fn$$isSupported_5 = null;
  m = c._$$fn$$isSupported_5 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$isSupported_5 = v; return CLS.fld_$$fn$$isSupported_5; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Ljava_lang_Object_2Ljava_lang_String_2 = function(src) {

  src = vm.java_lang_Class(false).toJS(src);if (!Audio) return null;return new Audio(src);
}

    m.access = 1;
    m.cls = CLS;
    m = c.play__VLjava_lang_Object_2 = function(a) {

  a = vm.java_lang_Class(false).toJS(a);a.play();
}

    m.access = 1;
    m.cls = CLS;
    m = c.pause__VLjava_lang_Object_2 = function(a) {

  a = vm.java_lang_Class(false).toJS(a);a.pause();
}

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VLjava_lang_Object_2D = function(a,volume) {

  a = vm.java_lang_Class(false).toJS(a);
  volume = vm.java_lang_Class(false).toJS(volume);a.setVolume(volume);
}

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__ZLjava_lang_Object_2 = function(a) {

  a = vm.java_lang_Class(false).toJS(a);return true;
}

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.org_netbeans_html_sound_impl_BrowserAudioEnv;
vm.org_netbeans_html_sound_impl_BrowserAudioEnv(false).constructor.cons__V.call(stA0);
vm.org_netbeans_html_sound_impl_BrowserAudioEnv(false)._DEFAULT(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_sound_impl_BrowserAudioEnv', { value : true });
      vm.org_netbeans_html_sound_spi_AudioEnvironment(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf });
      org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/sound/impl/BrowserAudioEnv';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_sound_impl_BrowserAudioEnv(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });
vm.org_netbeans_html_context_spi_Contexts = link('org/netbeans/html/context/spi/Contexts', function(f) { vm.org_netbeans_html_context_spi_Contexts =  f; });

vm.org_netbeans_html_sound_spi_AudioEnvironment = function org_netbeans_html_sound_spi_AudioEnvironment() {
  var m;
  var CLS = org_netbeans_html_sound_spi_AudioEnvironment;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.create__Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.create';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.play__VLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.play';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.pause__VLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.pause';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.setVolume__VLjava_lang_Object_2D = function(lcA1, lcD2) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.setVolume';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.isSupported__ZLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/sound/spi/AudioEnvironment.isSupported';
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_sound_spi_AudioEnvironment', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf });
      org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/sound/spi/AudioEnvironment';
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
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
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
  invoker.hashCode__I = function() {
    var target = arguments[0];
    return target['hashCode__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.equals__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['equals__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNDEwMTkwMjA1OTE0DQpCdWlsZC1KZGs6IDEuOC4wXzExDQpCdWlsdC1CeToganR1bGFjaA0KQnVuZGxlLURlc2NyaXB0aW9uOiBKYXZhLm5ldCAtIFRoZSBTb3VyY2UgZm9yIEphdmEgVGVjaG5vbG9neSBDb2xsYWJvcmF0DQogaW9uDQpCdW5kbGUtRG9jVVJMOiBodHRwOi8vbmV0YmVhbnMub3JnDQpCdW5kbGUtTGljZW5zZTogaHR0cDovL3d3dy5uZXRiZWFucy5vcmcvY2RkbC1ncGx2Mi5odG1sDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogU291bmQgQVBJIHZpYSBIVE1MDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBuZXQuamF2YS5odG1sLnNvdW5kDQpCdW5kbGUtVmVuZG9yOiBOZXRCZWFucw0KQnVuZGxlLVZlcnNpb246IDEuMC4wDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gQnVuZGxlIFBsdWdpbg0KRXhwb3J0LVBhY2thZ2U6IG5ldC5qYXZhLmh0bWwuc291bmQ7dmVyc2lvbj0iMS4wLjAiDQpJbXBvcnQtUGFja2FnZTogbmV0LmphdmEuaHRtbDt2ZXJzaW9uPSJbMS4wLDIpIixvcmcubmV0YmVhbnMuaHRtbC5ib290LnMNCiBwaTt2ZXJzaW9uPSJbMS4wLDIpIixvcmcubmV0YmVhbnMuaHRtbC5jb250ZXh0LnNwaTt2ZXJzaW9uPSJbMS4wLDIpIg0KVG9vbDogQm5kLTIuMS4wLjIwMTMwNDI2LTEyMjIxMw0K');
  exports['registerResource']('META-INF/services/javax.annotation.processing.Processor', 'b3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5pbXBsLkphdmFTY3JpcHRQcm9jZXNvcgo=');
});