bck2brwsr.register({
  'magic' : 'kafíčko',
  'classpath' : [
    'lib/net.java.html-1.0.jar',
    'lib/net.java.html.json-1.0.jar',
    'lib/net.java.html.boot-1.0.jar',
    'lib/net.java.html.sound-1.0.jar',
    'lib/ko4j-1.0.jar',
    'lib/emul-0.11-rt.jar'
  ]
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

vm.MlEval_MlEval_Data$1 = function MlEval_MlEval_Data$1() {
  var m;
  var CLS = MlEval_MlEval_Data$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function MlEval_MlEval_Data$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_Data$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_Data$1fillInstOf });
      MlEval_MlEval_Data$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/Data$1';
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

vm.MlEval_MlEval_Data$Html4JavaType = function MlEval_MlEval_Data$Html4JavaType() {
  var m;
  var CLS = MlEval_MlEval_Data$Html4JavaType;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_Proto$Type(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Proto$Type(false).constructor['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'].call(lcA0, vm.MlEval_MlEval_Data(false).constructor.$class, vm.MlEval_MlEval_DataModel(false).constructor.$class, 4, (6));
invoker.registerProperty__VLjava_lang_String_2IZ(lcA0,"words", 0, 1);
invoker.registerProperty__VLjava_lang_String_2IZ(lcA0,"message", 1, 0);
invoker.registerProperty__VLjava_lang_String_2IZ(lcA0,"rotating", 2, 0);
invoker.registerProperty__VLjava_lang_String_2IZ(lcA0,"steps", 3, 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"turnAnimationOn", 0);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"turnAnimationOff", 1);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"inputrequired", 2);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"rotate5s", 3);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"showScreenSize", 4);
invoker.registerFunction__VLjava_lang_String_2I(lcA0,"callExpEvaluation", 5);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.setValue__VLMlEval_MlEval_Data_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 1:{ gt = 28; break IF; }
  case 2:{ gt = 45; break IF; }
  case 3:{ gt = 65; break IF; }
  default: { gt = 82; break IF; }
}
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = lcA1;var stA1 = vm.MlEval_MlEval_Data(false).access$100__LMlEval_MlEval_Data$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,vm.java_lang_String(false).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
stA0.setMessage__VLjava_lang_String_2(stA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

var stA0 = lcA1;var stA1 = vm.MlEval_MlEval_Data(false).access$100__LMlEval_MlEval_Data$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,vm.java_lang_Boolean(false).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_Boolean']) throw vm.java_lang_ClassCastException(true);
var stI1 = invoker.booleanValue__Z(stA1);
stA0.setRotating__VZ(stI1);
return;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stA0 = lcA1;var stA1 = vm.MlEval_MlEval_Data(false).access$100__LMlEval_MlEval_Data$Html4JavaType_2();
var stA1 = invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(stA1,vm.java_lang_String(false).constructor.$class, lcA3);
if (stA1 !== null && !stA1['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
stA0.setSteps__VLjava_lang_String_2(stA1);
return;
    }
    X_82: for (;;) { IF: if (gt <= 82) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
vm.java_lang_UnsupportedOperationException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2LMlEval_MlEval_Data_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 32; break IF; }
  case 1:{ gt = 37; break IF; }
  case 2:{ gt = 42; break IF; }
  case 3:{ gt = 50; break IF; }
  default: { gt = 55; break IF; }
}
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stA0 = lcA1.getWords__Ljava_lang_String_2();
return stA0;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = lcA1.getMessage__Ljava_lang_String_2();
return stA0;
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stI0 = lcA1.isRotating__Z();
var stA0 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = lcA1.getSteps__Ljava_lang_String_2();
return stA0;
    }
    X_55: for (;;) { IF: if (gt <= 55) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
vm.java_lang_UnsupportedOperationException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.call__VLMlEval_MlEval_Data_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

switch (lcI2) {
  case 0:{ gt = 40; break IF; }
  case 1:{ gt = 45; break IF; }
  case 2:{ gt = 50; break IF; }
  case 3:{ gt = 66; break IF; }
  case 4:{ gt = 71; break IF; }
  case 5:{ gt = 76; break IF; }
  default: { gt = 81; break IF; }
}
    }
    X_40: for (;;) { IF: if (gt <= 40) {

vm.MlEval_MlEval_DataModel(false).turnAnimationOn__VLMlEval_MlEval_Data_2(lcA1);
return;
    }
    X_45: for (;;) { IF: if (gt <= 45) {

vm.MlEval_MlEval_DataModel(false).turnAnimationOff__VLMlEval_MlEval_Data_2(lcA1);
return;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stA0 = lcA1;var stA1 = vm.MlEval_MlEval_Data(false).access$200__Lorg_netbeans_html_json_spi_Proto_2LMlEval_MlEval_Data_2(lcA1);
var stA1 = invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2(stA1,lcA4, "str");
vm.MlEval_MlEval_DataModel(false).inputrequired__VLMlEval_MlEval_Data_2Ljava_lang_String_2(stA0, stA1);
return;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

vm.MlEval_MlEval_DataModel(false).rotate5s__VLMlEval_MlEval_Data_2(lcA1);
return;
    }
    X_71: for (;;) { IF: if (gt <= 71) {

vm.MlEval_MlEval_DataModel(false).showScreenSize__VLMlEval_MlEval_Data_2(lcA1);
return;
    }
    X_76: for (;;) { IF: if (gt <= 76) {

vm.MlEval_MlEval_DataModel(false).callExpEvaluation__VLMlEval_MlEval_Data_2(lcA1);
return;
    }
    X_81: for (;;) { IF: if (gt <= 81) {
var stA0 = new vm.java_lang_UnsupportedOperationException;
vm.java_lang_UnsupportedOperationException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.MlEval_MlEval_Data(false).access$200__Lorg_netbeans_html_json_spi_Proto_2LMlEval_MlEval_Data_2(lcA1);
return stA0;

};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.onChange__VLMlEval_MlEval_Data_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
vm.java_lang_UnsupportedOperationException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLMlEval_MlEval_Data_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"index: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," type: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2I(stA2,lcI3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_UnsupportedOperationException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.read__LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new vm.MlEval_MlEval_Data;
vm.MlEval_MlEval_Data(false).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2LMlEval_MlEval_Data$1_2.call(stA0, lcA1, lcA2, null);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.cloneTo__LMlEval_MlEval_Data_2LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = vm.MlEval_MlEval_Data(false).access$400__LMlEval_MlEval_Data_2LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
lcA0.onMessage__VLMlEval_MlEval_Data_2IILjava_lang_Object_2_3Ljava_lang_Object_2(lcA1, lcI2, lcI3, lcA4, lcA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
lcA0.onChange__VLMlEval_MlEval_Data_2I(lcA1, lcI2);
return;

};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.read__LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
var stA0 = lcA0.cloneTo__LMlEval_MlEval_Data_2LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2(lcA1, lcA2);
return stA0;

};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
lcA0.call__VLMlEval_MlEval_Data_2ILjava_lang_Object_2Ljava_lang_Object_2(lcA1, lcI2, lcA3, lcA4);
return;

};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
var stA0 = lcA0.getValue__Ljava_lang_Object_2LMlEval_MlEval_Data_2I(lcA1, lcI2);
return stA0;

};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
lcA0.setValue__VLMlEval_MlEval_Data_2ILjava_lang_Object_2(lcA1, lcI2, lcA3);
return;

};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = CLS.cons__VLMlEval_MlEval_Data$1_2 = function(lcA1) {
  var  lcA0 = this;
vm.MlEval_MlEval_Data$Html4JavaType(false).constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_Data$Html4JavaTypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_Data$Html4JavaType', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_Data$Html4JavaTypefillInstOf });
      MlEval_MlEval_Data$Html4JavaTypefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/Data$Html4JavaType';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
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
vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.org_netbeans_html_json_spi_Proto$Type = link('org/netbeans/html/json/spi/Proto$Type', function(f) { vm.org_netbeans_html_json_spi_Proto$Type =  f; });

vm.MlEval_MlEval_DataModel = function MlEval_MlEval_DataModel() {
  var m;
  var CLS = MlEval_MlEval_DataModel;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_$$fn$$confirmByUser_1 = null;
  m = c._$$fn$$confirmByUser_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$confirmByUser_1 = v; return CLS.fld_$$fn$$confirmByUser_1; };
  CLS.fld_$$fn$$screenSize_2 = null;
  m = c._$$fn$$screenSize_2 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$screenSize_2 = v; return CLS.fld_$$fn$$screenSize_2; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.words__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {
return lcA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.turnAnimationOn__VLMlEval_MlEval_Data_2 = function(lcA0) {
lcA0.setRotating__VZ(1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.turnAnimationOff__VLMlEval_MlEval_Data_2 = function(lcA0) {
var stA0 = "Really turn off?";var stA1 = new vm.MlEval_MlEval_DataModel$1;
vm.MlEval_MlEval_DataModel$1(false).constructor.cons__VLMlEval_MlEval_Data_2.call(stA1, lcA0);
vm.MlEval_MlEval_DataModel(false).confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2(stA0, stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.inputrequired__VLMlEval_MlEval_Data_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = lcA1;var stA1 = new vm.MlEval_MlEval_DataModel$2;
vm.MlEval_MlEval_DataModel$2(false).constructor.cons__VLMlEval_MlEval_Data_2.call(stA1, lcA0);
vm.MlEval_MlEval_DataModel(false).confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2(stA0, stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.rotate5s__VLMlEval_MlEval_Data_2 = function(lcA0) {
lcA0.setRotating__VZ(1);
var stA0 = new vm.java_util_Timer;
vm.java_util_Timer(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "Rotates a while");
var lcA1 = stA0;
var stA0 = lcA1;var stA1 = new vm.MlEval_MlEval_DataModel$3;
vm.MlEval_MlEval_DataModel$3(false).constructor.cons__VLMlEval_MlEval_Data_2.call(stA1, lcA0);
invoker.schedule__VLjava_util_TimerTask_2J(stA0,stA1, 0x1388);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.showScreenSize__VLMlEval_MlEval_Data_2 = function(lcA0) {
var stA0 = lcA0;var stA1 = vm.MlEval_MlEval_DataModel(false).screenSize__Ljava_lang_String_2();
stA0.setMessage__VLjava_lang_String_2(stA1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.callExpEvaluation__VLMlEval_MlEval_Data_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = lcA0.getMessage__Ljava_lang_String_2();
var stD0 = vm.MlEval_MlEval_ExpEvaluation(false).evaluate__DLjava_lang_String_2(stA0);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD0);
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,"Result= ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(lcA2,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,"\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA2,vm.MlEval_MlEval_StaticVar(false)._interimsteps());
var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
var lcA3 = stA0;
lcA0.setSteps__VLjava_lang_String_2(lcA3);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NoSuchMethodException']) {var stA0 = e;{ gt = 60; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 80; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalAccessException']) {var stA0 = e;{ gt = 100; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalArgumentException']) {var stA0 = e;{ gt = 120; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_reflect_InvocationTargetException']) {var stA0 = e;{ gt = 140; break IF; }}
throw e;
}{ gt = 157; break IF; }
    }
    X_60: for (;;) { IF: if (gt <= 60) {
var lcA2 = stA0;
var stA0 = invoker.getName__Ljava_lang_String_2(vm.MlEval_MlEval_DataModel(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,vm.java_util_logging_Level(false)['_SEVERE'](), null, lcA2);
{ gt = 157; break IF; }
    }
    X_80: for (;;) { IF: if (gt <= 80) {
var lcA2 = stA0;
var stA0 = invoker.getName__Ljava_lang_String_2(vm.MlEval_MlEval_DataModel(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,vm.java_util_logging_Level(false)['_SEVERE'](), null, lcA2);
{ gt = 157; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {
var lcA2 = stA0;
var stA0 = invoker.getName__Ljava_lang_String_2(vm.MlEval_MlEval_DataModel(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,vm.java_util_logging_Level(false)['_SEVERE'](), null, lcA2);
{ gt = 157; break IF; }
    }
    X_120: for (;;) { IF: if (gt <= 120) {
var lcA2 = stA0;
var stA0 = invoker.getName__Ljava_lang_String_2(vm.MlEval_MlEval_DataModel(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,vm.java_util_logging_Level(false)['_SEVERE'](), null, lcA2);
{ gt = 157; break IF; }
    }
    X_140: for (;;) { IF: if (gt <= 140) {
var lcA2 = stA0;
var stA0 = invoker.getName__Ljava_lang_String_2(vm.MlEval_MlEval_DataModel(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2(stA0,vm.java_util_logging_Level(false)['_SEVERE'](), null, lcA2);
    }
    X_157: for (;;) { IF: if (gt <= 157) {
return;

    }
}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2 = function(msg,callback) {

  msg = vm.java_lang_Class(false).toJS(msg);
  callback = vm.java_lang_Class(false).toJS(callback);if (confirm(msg)) {
  vm.MlEval_MlEval_$JsCallbacks$(false)._VM().java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2(callback);
}

}

    m.access = 8;
    m.cls = CLS;
    m = c.screenSize__Ljava_lang_String_2 = function() {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

return 'Screen size is ' + x + ' times ' + y;

}

    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_DataModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_DataModel', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_DataModelfillInstOf });
      MlEval_MlEval_DataModelfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/DataModel';
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

vm.MlEval_MlEval_$JsCallbacks$ = function MlEval_MlEval_$JsCallbacks$() {
  var m;
  var CLS = MlEval_MlEval_$JsCallbacks$;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_VM = null;
  m = c._VM = function (v) {  if (arguments.length == 1) CLS.fld_VM = v; return CLS.fld_VM; };
  m = c._p = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_$JsCallbacks$_p = v; return this.fld_MlEval_MlEval_$JsCallbacks$_p; };
  m = c._last = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_$JsCallbacks$_last = v; return this.fld_MlEval_MlEval_$JsCallbacks$_last; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.MlEval_MlEval_$JsCallbacks$(false)._p.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.current__LMlEval_MlEval_$JsCallbacks$_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = vm.java_lang_Class(false)['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
var lcA1 = stA0;
if ((lcA1) !== (vm.MlEval_MlEval_$JsCallbacks$(false)._p.call(lcA0))) { gt = 14; break IF; }
return lcA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((vm.MlEval_MlEval_$JsCallbacks$(false)._last.call(lcA0)) === null) { gt = 37; break IF; }
if ((lcA1) !== (vm.MlEval_MlEval_$JsCallbacks$(false)._p.call(vm.MlEval_MlEval_$JsCallbacks$(false)._last.call(lcA0)))) { gt = 37; break IF; }
return vm.MlEval_MlEval_$JsCallbacks$(false)._last.call(lcA0);
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = lcA0;var stA1 = new vm.MlEval_MlEval_$JsCallbacks$;
vm.MlEval_MlEval_$JsCallbacks$(false).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA1, lcA1);
var stA2 = stA1, stA1 = stA0, stA0 = stA2;
vm.MlEval_MlEval_$JsCallbacks$(false)._last.call(stA1, stA2);
return stA0;

    }
}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.java_lang_Class(false)['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](vm.MlEval_MlEval_$JsCallbacks$(false)._p.call(lcA0));
var lcA2 = stA0;
var lcA3 = null;
try {
invoker.run__V(lcA1);
var lcA4 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 56; break IF; }}
var stA0 = e;{ gt = 64; break IF; }
}
if ((lcA2) === null) { gt = 53; break IF; }
if ((lcA3) === null) { gt = 47; break IF; }
try {
invoker.close__V(lcA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 36; break IF; }}
throw e;
}{ gt = 53; break IF; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {
var lcA5 = stA0;
invoker.addSuppressed__VLjava_lang_Throwable_2(lcA3,lcA5);
{ gt = 53; break IF; }
    }
    X_47: for (;;) { IF: if (gt <= 47) {

invoker.close__V(lcA2);
    }
    X_53: for (;;) { IF: if (gt <= 53) {

return lcA4;
    }
    X_56: for (;;) { IF: if (gt <= 56) {
try {var lcA4 = stA0;
var lcA3 = lcA4;
{ var stA0 = lcA4; throw lcA4; }
} catch (e) {
var stA0 = e;{ gt = 64; break IF; }
}    }
    X_64: for (;;) { IF: if (gt <= 64) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_64; }
}
if ((lcA2) === null) { gt = 100; break IF; }
if ((lcA3) === null) { gt = 94; break IF; }
try {
invoker.close__V(lcA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 83; break IF; }}
throw e;
}{ gt = 100; break IF; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {
var lcA7 = stA0;
invoker.addSuppressed__VLjava_lang_Throwable_2(lcA3,lcA7);
{ gt = 100; break IF; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

invoker.close__V(lcA2);
    }
    X_100: for (;;) { IF: if (gt <= 100) {

{ var stA0 = lcA6; throw lcA6; }

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.MlEval_MlEval_$JsCallbacks$;
vm.MlEval_MlEval_$JsCallbacks$(false).constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null);
vm.MlEval_MlEval_$JsCallbacks$(false)._VM(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_$JsCallbacks$fillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_$JsCallbacks$', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_$JsCallbacks$fillInstOf });
      MlEval_MlEval_$JsCallbacks$fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/$JsCallbacks$';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.MlEval_MlEval_$JsCallbacks$(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_MlEval_MlEval_$JsCallbacks$_p = null;
    this.fld_MlEval_MlEval_$JsCallbacks$_last = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Throwable = link('java/lang/Throwable', function(f) { vm.java_lang_Throwable =  f; });
vm.org_netbeans_html_boot_spi_Fn = link('org/netbeans/html/boot/spi/Fn', function(f) { vm.org_netbeans_html_boot_spi_Fn =  f; });
vm.java_util_logging_Level = link('java/util/logging/Level', function(f) { vm.java_util_logging_Level =  f; });
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.java_lang_reflect_InvocationTargetException = link('java/lang/reflect/InvocationTargetException', function(f) { vm.java_lang_reflect_InvocationTargetException =  f; });
vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });
vm.java_lang_IllegalAccessException = link('java/lang/IllegalAccessException', function(f) { vm.java_lang_IllegalAccessException =  f; });
vm.java_lang_SecurityException = link('java/lang/SecurityException', function(f) { vm.java_lang_SecurityException =  f; });
vm.java_lang_NoSuchMethodException = link('java/lang/NoSuchMethodException', function(f) { vm.java_lang_NoSuchMethodException =  f; });

vm.MlEval_MlEval_StaticVar = function MlEval_MlEval_StaticVar() {
  var m;
  var CLS = MlEval_MlEval_StaticVar;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_prec = null;
  m = c._prec = function (v) {  if (arguments.length == 1) CLS.fld_prec = v; return CLS.fld_prec; };
  CLS.fld_var = null;
  m = c._var = function (v) {  if (arguments.length == 1) CLS.fld_var = v; return CLS.fld_var; };
  CLS.fld_srcFile = null;
  m = c._srcFile = function (v) {  if (arguments.length == 1) CLS.fld_srcFile = v; return CLS.fld_srcFile; };
  CLS.fld_destFile = null;
  m = c._destFile = function (v) {  if (arguments.length == 1) CLS.fld_destFile = v; return CLS.fld_destFile; };
  CLS.fld_sno = 0;
  m = c._sno = function (v) {  if (arguments.length == 1) CLS.fld_sno = v; return CLS.fld_sno; };
  CLS.fld_interexpb = 0;
  m = c._interexpb = function (v) {  if (arguments.length == 1) CLS.fld_interexpb = v; return CLS.fld_interexpb; };
  CLS.fld_hmap = null;
  m = c._hmap = function (v) {  if (arguments.length == 1) CLS.fld_hmap = v; return CLS.fld_hmap; };
  CLS.fld_append = 0;
  m = c._append = function (v) {  if (arguments.length == 1) CLS.fld_append = v; return CLS.fld_append; };
  CLS.fld_preced = 0;
  m = c._preced = function (v) {  if (arguments.length == 1) CLS.fld_preced = v; return CLS.fld_preced; };
  CLS.fld_interimsteps = null;
  m = c._interimsteps = function (v) {  if (arguments.length == 1) CLS.fld_interimsteps = v; return CLS.fld_interimsteps; };
  CLS.fld_vare = 0;
  m = c._vare = function (v) {  if (arguments.length == 1) CLS.fld_vare = v; return CLS.fld_vare; };
  CLS.fld_stepsList = null;
  m = c._stepsList = function (v) {  if (arguments.length == 1) CLS.fld_stepsList = v; return CLS.fld_stepsList; };
  CLS.fld_randomexp = null;
  m = c._randomexp = function (v) {  if (arguments.length == 1) CLS.fld_randomexp = v; return CLS.fld_randomexp; };
  CLS.fld_divByZeroFlag = 0;
  m = c._divByZeroFlag = function (v) {  if (arguments.length == 1) CLS.fld_divByZeroFlag = v; return CLS.fld_divByZeroFlag; };
  CLS.fld_Var_inputfile = 0;
  m = c._Var_inputfile = function (v) {  if (arguments.length == 1) CLS.fld_Var_inputfile = v; return CLS.fld_Var_inputfile; };
  CLS.fld_Gen_inputfile = 0;
  m = c._Gen_inputfile = function (v) {  if (arguments.length == 1) CLS.fld_Gen_inputfile = v; return CLS.fld_Gen_inputfile; };
  CLS.fld_variable = 0;
  m = c._variable = function (v) {  if (arguments.length == 1) CLS.fld_variable = v; return CLS.fld_variable; };
  CLS.fld_NoSuchMethod = 0;
  m = c._NoSuchMethod = function (v) {  if (arguments.length == 1) CLS.fld_NoSuchMethod = v; return CLS.fld_NoSuchMethod; };
  CLS.fld_values = null;
  m = c._values = function (v) {  if (arguments.length == 1) CLS.fld_values = v; return CLS.fld_values; };
  CLS.fld_ops = null;
  m = c._ops = function (v) {  if (arguments.length == 1) CLS.fld_ops = v; return CLS.fld_ops; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[C', null, 4);
vm.MlEval_MlEval_StaticVar(false)._prec(stA0);
vm.MlEval_MlEval_StaticVar(false)._sno(1);
vm.MlEval_MlEval_StaticVar(false)._interexpb(0);
var stA0 = new vm.java_util_HashMap;
vm.java_util_HashMap(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_StaticVar(false)._hmap(stA0);
vm.MlEval_MlEval_StaticVar(false)._preced(0);
vm.MlEval_MlEval_StaticVar(false)._vare(0);
vm.MlEval_MlEval_StaticVar(false)._stepsList(null);
vm.MlEval_MlEval_StaticVar(false)._randomexp(null);
vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag(0);
vm.MlEval_MlEval_StaticVar(false)._Var_inputfile(0);
vm.MlEval_MlEval_StaticVar(false)._Gen_inputfile(0);
vm.MlEval_MlEval_StaticVar(false)._variable(0);
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(1);
var stA0 = new vm.java_util_Stack;
vm.java_util_Stack(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_StaticVar(false)._values(stA0);
var stA0 = new vm.java_util_Stack;
vm.java_util_Stack(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_StaticVar(false)._ops(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_StaticVarfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_StaticVar', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_StaticVarfillInstOf });
      MlEval_MlEval_StaticVarfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/StaticVar';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    vm.MlEval_MlEval_StaticVar(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_Stack = link('java/util/Stack', function(f) { vm.java_util_Stack =  f; });
vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.java_lang_Double = link('java/lang/Double', function(f) { vm.java_lang_Double =  f; });

vm.MlEval_MlEval_ExpEvaluation = function MlEval_MlEval_ExpEvaluation() {
  var m;
  var CLS = MlEval_MlEval_ExpEvaluation;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_sbufvarexp = null;
  m = c._sbufvarexp = function (v) {  if (arguments.length == 1) CLS.fld_sbufvarexp = v; return CLS.fld_sbufvarexp; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.evaluate__DLjava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.toCharArray___3C(lcA0);
var lcA1 = stA0;
var lcI2 = 0;
var lcI3 = 0;
var lcI4 = 0;
invoker.println__VLjava_lang_String_2(vm.java_lang_System(false)['_out'](),lcA0);
if ((Array.at(lcA1, 0)) == ((45))) { gt = 35; break IF; }
if ((Array.at(lcA1, 0)) != ((43))) { gt = 70; break IF; }
    }
    X_35: for (;;) { IF: if (gt <= 35) {
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuffer_2C(lcA5,(48));
var stA1 = invoker.toString__Ljava_lang_String_2(lcA5);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](stA1);
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD1);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
    }
    X_70: for (;;) { IF: if (gt <= 70) {

if ((Array.at(lcA1, 0)) != ((42))) { gt = 92; break IF; }
vm.MlEval_MlEval_DataModel(false).inputrequired__VLMlEval_MlEval_Data_2Ljava_lang_String_2(null, " Want to insert 1 before '*': ");
invoker.println__VLjava_lang_String_2(vm.java_lang_System(false)['_out'](),"test");
    }
    X_92: for (;;) { IF: if (gt <= 92) {

if ((Array.at(lcA1, 0)) != ((47))) { gt = 100; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var lcI5 = 0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

if ((lcI5) >= ((lcA1).length)) { gt = 1296; break IF; }
if ((Array.at(lcA1, lcI5)) != ((58))) { gt = 128; break IF; }
var lcI5 = ((lcA1).length).sub32(1);
{ gt = 1290; break IF; }
    }
    X_128: for (;;) { IF: if (gt <= 128) {

if ((Array.at(lcA1, lcI5)) != ((32))) { gt = 140; break IF; }
{ gt = 1290; break IF; }
    }
    X_140: for (;;) { IF: if (gt <= 140) {

if ((vm.MlEval_MlEval_StaticVar(false)._interexpb()) == 0) { gt = 251; break IF; }
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
    }
    X_155: for (;;) { IF: if (gt <= 155) {

if ((lcI5) >= ((lcA1).length)) { gt = 205; break IF; }
if ((Array.at(lcA1, lcI5)) < ((48))) { gt = 180; break IF; }
if ((Array.at(lcA1, lcI5)) <= ((57))) { gt = 189; break IF; }
    }
    X_180: for (;;) { IF: if (gt <= 180) {

if ((Array.at(lcA1, lcI5)) != ((46))) { gt = 205; break IF; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {

var stA0 = lcA6;var stA1 = lcA1;var stI2 = lcI5;lcI5++;
var stA0 = invoker.append__Ljava_lang_StringBuffer_2C(stA0,Array.at(stA1, stI2));
{ gt = 0; continue X_155; }
    }
    X_205: for (;;) { IF: if (gt <= 205) {
lcI5 += -1;
var stA2 = invoker.toString__Ljava_lang_String_2(lcA6);
var stA0 = vm.java_lang_System(false)['_out']();var stD1 = 0;var stD2 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](stA2);
invoker.println__VD(stA0,(stD1 - stD2));
var stA2 = invoker.toString__Ljava_lang_String_2(lcA6);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = 0;var stD2 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](stA2);
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D']((stD1 - stD2));
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
vm.MlEval_MlEval_StaticVar(false)._interexpb(0);
{ gt = 1290; break IF; }
    }
    X_251: for (;;) { IF: if (gt <= 251) {

if ((Array.at(lcA1, lcI5)) == ((43))) { gt = 269; break IF; }
if ((Array.at(lcA1, lcI5)) != ((45))) { gt = 291; break IF; }
    }
    X_269: for (;;) { IF: if (gt <= 269) {

if ((Array.at(lcA1, (lcI5).add32(1))) == ((43))) { gt = 451; break IF; }
if ((Array.at(lcA1, (lcI5).add32(1))) == ((45))) { gt = 451; break IF; }
    }
    X_291: for (;;) { IF: if (gt <= 291) {

if ((Array.at(lcA1, lcI5)) == ((42))) { gt = 309; break IF; }
if ((Array.at(lcA1, lcI5)) != ((43))) { gt = 331; break IF; }
    }
    X_309: for (;;) { IF: if (gt <= 309) {

if ((Array.at(lcA1, (lcI5).add32(1))) == ((42))) { gt = 451; break IF; }
if ((Array.at(lcA1, (lcI5).add32(1))) == ((43))) { gt = 451; break IF; }
    }
    X_331: for (;;) { IF: if (gt <= 331) {

if ((Array.at(lcA1, lcI5)) == ((42))) { gt = 349; break IF; }
if ((Array.at(lcA1, lcI5)) != ((45))) { gt = 371; break IF; }
    }
    X_349: for (;;) { IF: if (gt <= 349) {

if ((Array.at(lcA1, (lcI5).add32(1))) == ((42))) { gt = 451; break IF; }
if ((Array.at(lcA1, (lcI5).add32(1))) == ((45))) { gt = 451; break IF; }
    }
    X_371: for (;;) { IF: if (gt <= 371) {

if ((Array.at(lcA1, lcI5)) == ((47))) { gt = 389; break IF; }
if ((Array.at(lcA1, lcI5)) != ((43))) { gt = 411; break IF; }
    }
    X_389: for (;;) { IF: if (gt <= 389) {

if ((Array.at(lcA1, (lcI5).add32(1))) == ((47))) { gt = 451; break IF; }
if ((Array.at(lcA1, (lcI5).add32(1))) == ((43))) { gt = 451; break IF; }
    }
    X_411: for (;;) { IF: if (gt <= 411) {

if ((Array.at(lcA1, lcI5)) == ((47))) { gt = 429; break IF; }
if ((Array.at(lcA1, lcI5)) != ((45))) { gt = 476; break IF; }
    }
    X_429: for (;;) { IF: if (gt <= 429) {

if ((Array.at(lcA1, (lcI5).add32(1))) == ((47))) { gt = 451; break IF; }
if ((Array.at(lcA1, (lcI5).add32(1))) != ((45))) { gt = 476; break IF; }
    }
    X_451: for (;;) { IF: if (gt <= 451) {

var stA0 = lcA1;var stI1 = (lcI5).add32(1);var stI2 = vm.MlEval_MlEval_interexp(false).eval__CCC(Array.at(lcA1, lcI5), Array.at(lcA1, (lcI5).add32(1)));
Array.at(stA0, stI1, stI2);
lcI5++;
{ gt = 1290; break IF; }
    }
    X_476: for (;;) { IF: if (gt <= 476) {

if ((Array.at(lcA1, lcI5)) < ((65))) { gt = 494; break IF; }
if ((Array.at(lcA1, lcI5)) <= ((90))) { gt = 512; break IF; }
    }
    X_494: for (;;) { IF: if (gt <= 494) {

if ((Array.at(lcA1, lcI5)) < ((97))) { gt = 849; break IF; }
if ((Array.at(lcA1, lcI5)) > ((122))) { gt = 849; break IF; }
    }
    X_512: for (;;) { IF: if (gt <= 512) {
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](0);
var lcA10 = stA0;
    }
    X_536: for (;;) { IF: if (gt <= 536) {

if ((lcI5) >= ((lcA1).length)) { gt = 595; break IF; }
if ((Array.at(lcA1, lcI5)) < ((65))) { gt = 561; break IF; }
if ((Array.at(lcA1, lcI5)) <= ((90))) { gt = 579; break IF; }
    }
    X_561: for (;;) { IF: if (gt <= 561) {

if ((Array.at(lcA1, lcI5)) < ((97))) { gt = 595; break IF; }
if ((Array.at(lcA1, lcI5)) > ((122))) { gt = 595; break IF; }
    }
    X_579: for (;;) { IF: if (gt <= 579) {

var stA0 = lcA7;var stA1 = lcA1;var stI2 = lcI5;lcI5++;
var stA0 = invoker.append__Ljava_lang_StringBuffer_2C(stA0,Array.at(stA1, stI2));
{ gt = 0; continue X_536; }
    }
    X_595: for (;;) { IF: if (gt <= 595) {
lcI5 += -1;
var stA0 = invoker.toString__Ljava_lang_String_2(lcA7);
var lcA8 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._hmap(),lcA8);
if ((stA0) === null) { gt = 637; break IF; }
var stA1 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._hmap(),lcA8);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values(),stA1);
var lcI4 = 1;
{ gt = 846; break IF; }
    }
    X_637: for (;;) { IF: if (gt <= 637) {

var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA8,"sin");
if ((stI0) != 0) { gt = 697; break IF; }
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA8,"cos");
if ((stI0) != 0) { gt = 697; break IF; }
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA8,"tan");
if ((stI0) != 0) { gt = 697; break IF; }
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA8,"cot");
if ((stI0) != 0) { gt = 697; break IF; }
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA8,"sec");
if ((stI0) != 0) { gt = 697; break IF; }
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA8,"log");
if ((stI0) == 0) { gt = 846; break IF; }
    }
    X_697: for (;;) { IF: if (gt <= 697) {
lcI5++;
if ((Array.at(lcA1, lcI5)) != ((40))) { gt = 776; break IF; }
lcI5++;
    }
    X_712: for (;;) { IF: if (gt <= 712) {

if ((Array.at(lcA1, lcI5)) == ((41))) { gt = 737; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuffer_2C(lcA6,Array.at(lcA1, lcI5));
lcI5++;
{ gt = 0; continue X_712; }
    }
    X_737: for (;;) { IF: if (gt <= 737) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA6);
var lcA8 = stA0;
if ((vm.MlEval_MlEval_StaticVar(false)._variable()) != 0) { gt = 763; break IF; }
var stD0 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](lcA8);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD0);
var lcA10 = stA0;
{ gt = 776; break IF; }
    }
    X_763: for (;;) { IF: if (gt <= 763) {

var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._hmap(),lcA8);
if (stA0 !== null && !stA0['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var lcA10 = stA0;
    }
    X_776: for (;;) { IF: if (gt <= 776) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA7);
var lcA9 = stA0;
var stA0 = new vm.MlEval_MlEval_unaryopr;
vm.MlEval_MlEval_unaryopr(false).constructor.cons__V.call(stA0);
var lcA12 = stA0;
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA12);
var stA1 = lcA9;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 1);
Array.at(stA2, 0, vm.java_lang_Double(false).constructor.$class);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA11 = stA0;
var stA0 = lcA11;var stA1 = lcA12;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA2, 0, lcA10);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](vm.MlEval_MlEval_StaticVar(false)._var());
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD1);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
    }
    X_846: for (;;) { IF: if (gt <= 846) {
{ gt = 1290; break IF; }
    }
    X_849: for (;;) { IF: if (gt <= 849) {

if ((Array.at(lcA1, lcI5)) < ((48))) { gt = 867; break IF; }
if ((Array.at(lcA1, lcI5)) <= ((57))) { gt = 876; break IF; }
    }
    X_867: for (;;) { IF: if (gt <= 867) {

if ((Array.at(lcA1, lcI5)) != ((46))) { gt = 962; break IF; }
    }
    X_876: for (;;) { IF: if (gt <= 876) {

var lcI4 = 1;
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
    }
    X_888: for (;;) { IF: if (gt <= 888) {

if ((lcI5) >= ((lcA1).length)) { gt = 938; break IF; }
if ((Array.at(lcA1, lcI5)) < ((48))) { gt = 913; break IF; }
if ((Array.at(lcA1, lcI5)) <= ((57))) { gt = 922; break IF; }
    }
    X_913: for (;;) { IF: if (gt <= 913) {

if ((Array.at(lcA1, lcI5)) != ((46))) { gt = 938; break IF; }
    }
    X_922: for (;;) { IF: if (gt <= 922) {

var stA0 = lcA6;var stA1 = lcA1;var stI2 = lcI5;lcI5++;
var stA0 = invoker.append__Ljava_lang_StringBuffer_2C(stA0,Array.at(stA1, stI2));
{ gt = 0; continue X_888; }
    }
    X_938: for (;;) { IF: if (gt <= 938) {
lcI5 += -1;
var stA1 = invoker.toString__Ljava_lang_String_2(lcA6);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](stA1);
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD1);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
{ gt = 1290; break IF; }
    }
    X_962: for (;;) { IF: if (gt <= 962) {

if ((Array.at(lcA1, lcI5)) != ((40))) { gt = 1033; break IF; }
if ((lcI4) == 0) { gt = 1008; break IF; }
var stA0 = vm.MlEval_MlEval_StaticVar(false)._ops();var stA1 = vm.java_lang_Character(false)['valueOf__Ljava_lang_Character_2C']((42));
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._ops();var stA1 = vm.java_lang_Character(false)['valueOf__Ljava_lang_Character_2C'](Array.at(lcA1, lcI5));
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
lcI2++;
{ gt = 1290; break IF; }
    }
    X_1008: for (;;) { IF: if (gt <= 1008) {

if ((lcI4) != 0) { gt = 1290; break IF; }
var stA0 = vm.MlEval_MlEval_StaticVar(false)._ops();var stA1 = vm.java_lang_Character(false)['valueOf__Ljava_lang_Character_2C'](Array.at(lcA1, lcI5));
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
lcI2++;
{ gt = 1290; break IF; }
    }
    X_1033: for (;;) { IF: if (gt <= 1033) {

if ((Array.at(lcA1, lcI5)) != ((41))) { gt = 1136; break IF; }
var lcI4 = 0;
    }
    X_1045: for (;;) { IF: if (gt <= 1045) {

var stA0 = invoker.peek__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._ops());
if (stA0 !== null && !stA0['$instOf_java_lang_Character']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.charValue__C(stA0);
if ((stI0) == ((40))) { gt = 1114; break IF; }
var stA1 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._ops());
if (stA1 !== null && !stA1['$instOf_java_lang_Character']) throw vm.java_lang_ClassCastException(true);
var stI1 = invoker.charValue__C(stA1);
var stA2 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values());
if (stA2 !== null && !stA2['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stA3 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values());
if (stA3 !== null && !stA3['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = vm.MlEval_MlEval_ExpEvaluation(false).applyOp__DCLjava_lang_Double_2Ljava_lang_Double_2(stI1, stA2, stA3);
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD1);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 0; continue X_1045; }
{ gt = 1114; break IF; }
    }
    X_1114: for (;;) { IF: if (gt <= 1114) {

if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 1123; break IF; }
{ gt = 1296; break IF; }
    }
    X_1123: for (;;) { IF: if (gt <= 1123) {
lcI3++;
var stA0 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._ops());
{ gt = 1290; break IF; }
    }
    X_1136: for (;;) { IF: if (gt <= 1136) {

if ((Array.at(lcA1, lcI5)) == ((43))) { gt = 1181; break IF; }
if ((Array.at(lcA1, lcI5)) == ((45))) { gt = 1181; break IF; }
if ((Array.at(lcA1, lcI5)) == ((42))) { gt = 1181; break IF; }
if ((Array.at(lcA1, lcI5)) == ((47))) { gt = 1181; break IF; }
if ((Array.at(lcA1, lcI5)) != ((94))) { gt = 1290; break IF; }
    }
    X_1181: for (;;) { IF: if (gt <= 1181) {

var lcI4 = 0;
    }
    X_1184: for (;;) { IF: if (gt <= 1184) {

var stI0 = invoker.empty__Z(vm.MlEval_MlEval_StaticVar(false)._ops());
if ((stI0) != 0) { gt = 1267; break IF; }
var stA1 = invoker.peek__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._ops());
if (stA1 !== null && !stA1['$instOf_java_lang_Character']) throw vm.java_lang_ClassCastException(true);
var stI1 = invoker.charValue__C(stA1);
var stI0 = vm.MlEval_MlEval_ExpEvaluation(false).hasPrecedence__ZCC(Array.at(lcA1, lcI5), stI1);
if ((stI0) == 0) { gt = 1267; break IF; }
var stA1 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._ops());
if (stA1 !== null && !stA1['$instOf_java_lang_Character']) throw vm.java_lang_ClassCastException(true);
var stI1 = invoker.charValue__C(stA1);
var stA2 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values());
if (stA2 !== null && !stA2['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stA3 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values());
if (stA3 !== null && !stA3['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = vm.MlEval_MlEval_ExpEvaluation(false).applyOp__DCLjava_lang_Double_2Ljava_lang_Double_2(stI1, stA2, stA3);
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD1);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 0; continue X_1184; }
{ gt = 1267; break IF; }
    }
    X_1267: for (;;) { IF: if (gt <= 1267) {

if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 1276; break IF; }
{ gt = 1296; break IF; }
    }
    X_1276: for (;;) { IF: if (gt <= 1276) {

var stA0 = vm.MlEval_MlEval_StaticVar(false)._ops();var stA1 = vm.java_lang_Character(false)['valueOf__Ljava_lang_Character_2C'](Array.at(lcA1, lcI5));
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
    }
    X_1290: for (;;) { IF: if (gt <= 1290) {
lcI5++;
{ gt = 0; continue X_103; }
    }
    X_1296: for (;;) { IF: if (gt <= 1296) {

var stI0 = invoker.empty__Z(vm.MlEval_MlEval_StaticVar(false)._ops());
if ((stI0) != 0) { gt = 1362; break IF; }
if ((lcI2) != (lcI3)) { gt = 0; continue X_1296; }
var stA1 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._ops());
if (stA1 !== null && !stA1['$instOf_java_lang_Character']) throw vm.java_lang_ClassCastException(true);
var stI1 = invoker.charValue__C(stA1);
var stA2 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values());
if (stA2 !== null && !stA2['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stA3 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values());
if (stA3 !== null && !stA3['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = vm.MlEval_MlEval_ExpEvaluation(false).applyOp__DCLjava_lang_Double_2Ljava_lang_Double_2(stI1, stA2, stA3);
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD1);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 0; continue X_1296; }
{ gt = 1362; break IF; }
    }
    X_1362: for (;;) { IF: if (gt <= 1362) {

if ((vm.MlEval_MlEval_StaticVar(false)._vare()) == 0) { gt = 1391; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(vm.MlEval_MlEval_ExpEvaluation(false)._sbufvarexp());
vm.MlEval_MlEval_StaticVar(false)._interimsteps(stA0);
var stI2 = invoker.length__I(vm.MlEval_MlEval_ExpEvaluation(false)._sbufvarexp());
var stA0 = invoker.delete__Ljava_lang_StringBuffer_2II(vm.MlEval_MlEval_ExpEvaluation(false)._sbufvarexp(),0, stI2);
    }
    X_1391: for (;;) { IF: if (gt <= 1391) {

if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 1399; break IF; }
return 0;
    }
    X_1399: for (;;) { IF: if (gt <= 1399) {

var stA0 = invoker.pop__Ljava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._values());
if (stA0 !== null && !stA0['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stD0 = invoker.doubleValue__D(stA0);
var stL0 = vm.java_lang_Math(false)['round__JD']((stD0 * 100.0));
return ((stL0).toFP() / 100.0);

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.hasPrecedence__ZCC = function(lcI0, lcI1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI1) == ((40))) { gt = 12; break IF; }
if ((lcI1) != ((41))) { gt = 14; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

return 0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((lcI0) != ((94))) { gt = 58; break IF; }
if ((lcI1) == (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 0))) { gt = 56; break IF; }
if ((lcI1) == (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 1))) { gt = 56; break IF; }
if ((lcI1) == (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 2))) { gt = 56; break IF; }
if ((lcI1) != (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 3))) { gt = 58; break IF; }
    }
    X_56: for (;;) { IF: if (gt <= 56) {

return 0;
    }
    X_58: for (;;) { IF: if (gt <= 58) {

if ((lcI0) != (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 0))) { gt = 96; break IF; }
if ((lcI1) == (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 1))) { gt = 94; break IF; }
if ((lcI1) == (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 2))) { gt = 94; break IF; }
if ((lcI1) != (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 3))) { gt = 96; break IF; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

return 0;
    }
    X_96: for (;;) { IF: if (gt <= 96) {

if ((lcI0) != (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 1))) { gt = 125; break IF; }
if ((lcI1) == (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 2))) { gt = 123; break IF; }
if ((lcI1) != (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 3))) { gt = 125; break IF; }
    }
    X_123: for (;;) { IF: if (gt <= 123) {

return 0;
    }
    X_125: for (;;) { IF: if (gt <= 125) {

if ((lcI0) != (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 2))) { gt = 151; break IF; }
if ((lcI1) != (Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), 3))) { gt = 151; break IF; }
if ((vm.MlEval_MlEval_StaticVar(false)._preced()) == 0) { gt = 151; break IF; }
return 0;
    }
    X_151: for (;;) { IF: if (gt <= 151) {

return 1;

    }
}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.applyOp__DCLjava_lang_Double_2Ljava_lang_Double_2 = function(lcI0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](0);
var lcA3 = stA0;
switch (lcI0) {
  case 42: { gt = 88; break IF; }
  case 43: { gt = 56; break IF; }
  case 45: { gt = 72; break IF; }
  case 47: { gt = 122; break IF; }
  case 94: { gt = 104; break IF; }
  default: { gt = 153; break IF; }
}
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stD0 = invoker.doubleValue__D(lcA2);
var stD1 = invoker.doubleValue__D(lcA1);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D']((stD0 + stD1));
var lcA3 = stA0;
{ gt = 153; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stD0 = invoker.doubleValue__D(lcA2);
var stD1 = invoker.doubleValue__D(lcA1);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D']((stD0 - stD1));
var lcA3 = stA0;
{ gt = 153; break IF; }
    }
    X_88: for (;;) { IF: if (gt <= 88) {

var stD0 = invoker.doubleValue__D(lcA2);
var stD1 = invoker.doubleValue__D(lcA1);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D']((stD0 * stD1));
var lcA3 = stA0;
{ gt = 153; break IF; }
    }
    X_104: for (;;) { IF: if (gt <= 104) {

var stD0 = invoker.doubleValue__D(lcA2);
var stD1 = invoker.doubleValue__D(lcA1);
var stD0 = vm.MlEval_MlEval_ExpEvaluation(false).pow__DDD(stD0, stD1);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD0);
var lcA3 = stA0;
{ gt = 153; break IF; }
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stD0 = invoker.doubleValue__D(lcA1);
if (((stD0).compare(0)) != 0) { gt = 140; break IF; }
vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag(1);
var stD0 = invoker.doubleValue__D(lcA3);
return stD0;
    }
    X_140: for (;;) { IF: if (gt <= 140) {

var stD0 = invoker.doubleValue__D(lcA2);
var stD1 = invoker.doubleValue__D(lcA1);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D']((stD0 / stD1));
var lcA3 = stA0;
    }
    X_153: for (;;) { IF: if (gt <= 153) {

if ((vm.MlEval_MlEval_StaticVar(false)._vare()) == 0) { gt = 237; break IF; }
var stA0 = vm.MlEval_MlEval_ExpEvaluation(false)._sbufvarexp();var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stD2 = invoker.doubleValue__D(lcA2);
var stA2 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](stD2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,lcI0);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stD2 = invoker.doubleValue__D(lcA1);
var stA2 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](stD2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stD2 = invoker.doubleValue__D(lcA3);
var stA2 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](stD2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuffer_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuffer_2Ljava_lang_String_2(vm.MlEval_MlEval_ExpEvaluation(false)._sbufvarexp(),"\n");
{ gt = 308; break IF; }
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var stA0 = vm.MlEval_MlEval_StaticVar(false)._stepsList();var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\t");
var stD2 = invoker.doubleValue__D(lcA2);
var stA2 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](stD2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,lcI0);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stD2 = invoker.doubleValue__D(lcA1);
var stA2 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](stD2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stD2 = invoker.doubleValue__D(lcA3);
var stA2 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](stD2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
    }
    X_308: for (;;) { IF: if (gt <= 308) {

var stD0 = invoker.doubleValue__D(lcA3);
return stD0;

    }
}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.pow__DDD = function(lcD0, lcD2) {
var stD0 = vm.java_lang_Math(false)['pow__DDD'](lcD0, lcD2);
return stD0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_ExpEvaluation(false)._sbufvarexp(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_ExpEvaluationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_ExpEvaluation', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_ExpEvaluationfillInstOf });
      MlEval_MlEval_ExpEvaluationfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/ExpEvaluation';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    vm.MlEval_MlEval_ExpEvaluation(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Math = link('java/lang/Math', function(f) { vm.java_lang_Math =  f; });
vm.java_lang_Character = link('java/lang/Character', function(f) { vm.java_lang_Character =  f; });

vm.MlEval_MlEval_unaryopr = function MlEval_MlEval_unaryopr() {
  var m;
  var CLS = MlEval_MlEval_unaryopr;
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
    m = c.sin__VLjava_lang_Double_2 = function(lcA0) {
var lcA5 = lcA0;
var stD0 = invoker.doubleValue__D(lcA5);
var lcD3 = ((stD0 * 3.14) / 180.0);
var stD0 = vm.java_lang_Math(false)['sin__DD'](lcD3);
var lcD1 = stD0;
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](lcD1);
vm.MlEval_MlEval_StaticVar(false)._var(stA0);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.cos__VLjava_lang_Double_2 = function(lcA0) {
var lcA5 = lcA0;
var stD0 = invoker.doubleValue__D(lcA5);
var lcD3 = ((stD0 * 3.14) / 180.0);
var stD0 = vm.java_lang_Math(false)['cos__DD'](lcD3);
var lcD1 = stD0;
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](lcD1);
vm.MlEval_MlEval_StaticVar(false)._var(stA0);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.tan__VLjava_lang_Double_2 = function(lcA0) {
var lcA5 = lcA0;
var stD0 = invoker.doubleValue__D(lcA5);
var lcD3 = ((stD0 * 3.14) / 180.0);
var stD0 = vm.java_lang_Math(false)['tan__DD'](lcD3);
var lcD1 = stD0;
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](lcD1);
vm.MlEval_MlEval_StaticVar(false)._var(stA0);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.cosec__VLjava_lang_Double_2 = function(lcA0) {
var lcA5 = lcA0;
var stD0 = invoker.doubleValue__D(lcA5);
var lcD3 = ((stD0 * 3.14) / 180.0);
var stD0 = 1;var stD1 = vm.java_lang_Math(false)['sin__DD'](lcD3);
var lcD1 = (stD0 / stD1);
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](lcD1);
vm.MlEval_MlEval_StaticVar(false)._var(stA0);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.sec__VLjava_lang_Double_2 = function(lcA0) {
var lcA5 = lcA0;
var stD0 = invoker.doubleValue__D(lcA5);
var lcD3 = ((stD0 * 3.14) / 180.0);
var stD0 = 1;var stD1 = vm.java_lang_Math(false)['cos__DD'](lcD3);
var lcD1 = (stD0 / stD1);
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](lcD1);
vm.MlEval_MlEval_StaticVar(false)._var(stA0);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.cot__VLjava_lang_Double_2 = function(lcA0) {
var lcA5 = lcA0;
var stD0 = invoker.doubleValue__D(lcA5);
var lcD3 = ((stD0 * 3.14) / 180.0);
var stD0 = 1;var stD1 = vm.java_lang_Math(false)['tan__DD'](lcD3);
var lcD1 = (stD0 / stD1);
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](lcD1);
vm.MlEval_MlEval_StaticVar(false)._var(stA0);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.log__VLjava_lang_Double_2 = function(lcA0) {
var lcA3 = lcA0;
var stD0 = invoker.doubleValue__D(lcA3);
var stD0 = vm.java_lang_Math(false)['log__DD'](stD0);
var lcD1 = stD0;
vm.MlEval_MlEval_StaticVar(false)._NoSuchMethod(0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](lcD1);
vm.MlEval_MlEval_StaticVar(false)._var(stA0);
return;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_unaryoprfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_unaryopr', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_unaryoprfillInstOf });
      MlEval_MlEval_unaryoprfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/unaryopr';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
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

vm.MlEval_MlEval_interexp = function MlEval_MlEval_interexp() {
  var m;
  var CLS = MlEval_MlEval_interexp;
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
    m = c.eval__CCC = function(lcI0, lcI1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = (43);
if ((lcI0) != ((43))) { gt = 21; break IF; }
if ((lcI1) != ((43))) { gt = 21; break IF; }
var lcI2 = (43);
{ gt = 152; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if ((lcI0) != ((43))) { gt = 39; break IF; }
if ((lcI1) != ((45))) { gt = 39; break IF; }
var lcI2 = (45);
{ gt = 152; break IF; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

if ((lcI0) != ((45))) { gt = 57; break IF; }
if ((lcI1) != ((43))) { gt = 57; break IF; }
var lcI2 = (45);
{ gt = 152; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {

if ((lcI0) != ((45))) { gt = 75; break IF; }
if ((lcI1) != ((45))) { gt = 75; break IF; }
var lcI2 = (43);
{ gt = 152; break IF; }
    }
    X_75: for (;;) { IF: if (gt <= 75) {

if ((lcI0) != ((42))) { gt = 93; break IF; }
if ((lcI1) != ((43))) { gt = 93; break IF; }
var lcI2 = (42);
{ gt = 152; break IF; }
    }
    X_93: for (;;) { IF: if (gt <= 93) {

if ((lcI0) != ((42))) { gt = 115; break IF; }
if ((lcI1) != ((45))) { gt = 115; break IF; }
var lcI2 = (42);
vm.MlEval_MlEval_StaticVar(false)._interexpb(1);
{ gt = 152; break IF; }
    }
    X_115: for (;;) { IF: if (gt <= 115) {

if ((lcI0) != ((47))) { gt = 133; break IF; }
if ((lcI1) != ((43))) { gt = 133; break IF; }
var lcI2 = (47);
{ gt = 152; break IF; }
    }
    X_133: for (;;) { IF: if (gt <= 133) {

if ((lcI0) != ((47))) { gt = 152; break IF; }
if ((lcI1) != ((45))) { gt = 152; break IF; }
var lcI2 = (47);
vm.MlEval_MlEval_StaticVar(false)._interexpb(1);
    }
    X_152: for (;;) { IF: if (gt <= 152) {

return lcI2;

    }
}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_interexpfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_interexp', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_interexpfillInstOf });
      MlEval_MlEval_interexpfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/interexp';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
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
vm.java_lang_StringBuffer = link('java/lang/StringBuffer', function(f) { vm.java_lang_StringBuffer =  f; });
vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });

vm.MlEval_MlEval_DataModel$3 = function MlEval_MlEval_DataModel$3() {
  var m;
  var CLS = MlEval_MlEval_DataModel$3;
  if (!CLS.$class) {
    var pp = vm.java_util_TimerTask(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$model = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_DataModel$3_val$model = v; return this.fld_MlEval_MlEval_DataModel$3_val$model; };
    m = CLS.cons__VLMlEval_MlEval_Data_2 = function(lcA1) {
  var  lcA0 = this;
vm.MlEval_MlEval_DataModel$3(false)._val$model.call(lcA0, lcA1);
vm.java_util_TimerTask(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
vm.MlEval_MlEval_DataModel$3(false)._val$model.call(lcA0).setRotating__VZ(0);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_DataModel$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_DataModel$3', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_DataModel$3fillInstOf });
      MlEval_MlEval_DataModel$3fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/DataModel$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_MlEval_MlEval_DataModel$3_val$model = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_TimerTask = link('java/util/TimerTask', function(f) { vm.java_util_TimerTask =  f; });
vm.java_util_Timer = link('java/util/Timer', function(f) { vm.java_util_Timer =  f; });

vm.MlEval_MlEval_DataModel$2 = function MlEval_MlEval_DataModel$2() {
  var m;
  var CLS = MlEval_MlEval_DataModel$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$model = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_DataModel$2_val$model = v; return this.fld_MlEval_MlEval_DataModel$2_val$model; };
    m = CLS.cons__VLMlEval_MlEval_Data_2 = function(lcA1) {
  var  lcA0 = this;
vm.MlEval_MlEval_DataModel$2(false)._val$model.call(lcA0, lcA1);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuffer_2C(lcA1,(49));
var stA1 = invoker.toString__Ljava_lang_String_2(lcA1);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._values();var stD1 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](stA1);
var stA1 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD1);
var stA0 = invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
vm.MlEval_MlEval_DataModel$2(false)._val$model.call(lcA0).setRotating__VZ(0);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_DataModel$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_DataModel$2', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_DataModel$2fillInstOf });
      MlEval_MlEval_DataModel$2fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/DataModel$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_MlEval_MlEval_DataModel$2_val$model = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });

vm.MlEval_MlEval_DataModel$1 = function MlEval_MlEval_DataModel$1() {
  var m;
  var CLS = MlEval_MlEval_DataModel$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$model = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_DataModel$1_val$model = v; return this.fld_MlEval_MlEval_DataModel$1_val$model; };
    m = CLS.cons__VLMlEval_MlEval_Data_2 = function(lcA1) {
  var  lcA0 = this;
vm.MlEval_MlEval_DataModel$1(false)._val$model.call(lcA0, lcA1);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
vm.MlEval_MlEval_DataModel$1(false)._val$model.call(lcA0).setRotating__VZ(0);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_DataModel$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_DataModel$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_DataModel$1fillInstOf });
      MlEval_MlEval_DataModel$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/DataModel$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_MlEval_MlEval_DataModel$1_val$model = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.MlEval_MlEval_Data = function MlEval_MlEval_Data() {
  var m;
  var CLS = MlEval_MlEval_Data;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_TYPE = null;
  m = c._TYPE = function (v) {  if (arguments.length == 1) CLS.fld_TYPE = v; return CLS.fld_TYPE; };
  m = c._proto = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_Data_proto = v; return this.fld_MlEval_MlEval_Data_proto; };
  m = c._prop_message = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_Data_prop_message = v; return this.fld_MlEval_MlEval_Data_prop_message; };
  m = c._prop_rotating = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_Data_prop_rotating = v; return this.fld_MlEval_MlEval_Data_prop_rotating; };
  m = c._prop_steps = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_Data_prop_steps = v; return this.fld_MlEval_MlEval_Data_prop_steps; };
    m = c.getWords__Ljava_lang_String_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getMessage__Ljava_lang_String_2();
var lcA1 = stA0;
try {
invoker.acquireLock__V(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
var stA0 = vm.MlEval_MlEval_DataModel(false).words__Ljava_lang_String_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
} catch (e) {
var stA0 = e;{ gt = 26; break IF; }
}
invoker.releaseLock__V(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
return lcA2;
    }
    X_26: for (;;) { IF: if (gt <= 26) {
var lcA3 = stA0;
invoker.releaseLock__V(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
{ var stA0 = lcA3; throw lcA3; }

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getMessage__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(vm.MlEval_MlEval_Data(false)._proto.call(lcA0),"message");
return vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0);

};
    m.access = 1;
    m.cls = CLS;
    m = c.setMessage__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0), lcA1);
if ((stI0) == 0) { gt = 22; break IF; }
return;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var lcA2 = vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0);
vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0, lcA1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._proto.call(lcA0),"message", lcA2, lcA1);
var stA3 = lcA0.getWords__Ljava_lang_String_2();
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._proto.call(lcA0),"words", null, stA3);
return;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.isRotating__Z = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(vm.MlEval_MlEval_Data(false)._proto.call(lcA0),"rotating");
return vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0);

};
    m.access = 1;
    m.cls = CLS;
    m = c.setRotating__VZ = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
var stA0 = vm.MlEval_MlEval_Data(false)._TYPE();var stA1 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0));
var stA2 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) == 0) { gt = 28; break IF; }
return;
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stA0 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0));
var lcA2 = stA0;
vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0, lcI1);
var stA0 = vm.MlEval_MlEval_Data(false)._proto.call(lcA0);var stA1 = "rotating";var stA2 = lcA2;var stA3 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](lcI1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2, stA3);
return;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.getSteps__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
invoker.accessProperty__VLjava_lang_String_2(vm.MlEval_MlEval_Data(false)._proto.call(lcA0),"steps");
return vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0);

};
    m.access = 1;
    m.cls = CLS;
    m = c.setSteps__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.verifyUnlocked__V(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0), lcA1);
if ((stI0) == 0) { gt = 22; break IF; }
return;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var lcA2 = vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0);
vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0, lcA1);
invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._proto.call(lcA0),"steps", lcA2, lcA1);
return;

    }
}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.modelFor__Ljava_lang_Class_2 = function() {
return null;

};
    m.access = 10;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
var stA1 = invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(vm.MlEval_MlEval_Data(false)._TYPE(),lcA0, lcA1);
vm.MlEval_MlEval_Data(false)._proto.call(lcA0, stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = vm.net_java_html_BrwsrCtx(false)['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](vm.MlEval_MlEval_Data(false).constructor.$class);
vm.MlEval_MlEval_Data(false).constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLjava_lang_String_2ZLjava_lang_String_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = vm.net_java_html_BrwsrCtx(false)['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](vm.MlEval_MlEval_Data(false).constructor.$class);
vm.MlEval_MlEval_Data(false).constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, stA1);
vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0, lcA1);
vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0, lcI2);
vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0, lcA3);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

vm.MlEval_MlEval_Data(false).constructor.cons__VLnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 3);
var lcA3 = stA0;
var stA0 = vm.MlEval_MlEval_Data(false)._proto.call(lcA0);var stA1 = lcA2;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 3);
Array.at(stA2, 0, "message");
Array.at(stA2, 1, "rotating");
Array.at(stA2, 2, "steps");
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(stA0,stA1, stA2, lcA3);
if (Array.at(lcA3, 0) !== null && !Array.at(lcA3, 0)['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0, Array.at(lcA3, 0));
var stA0 = lcA0;if ((Array.at(lcA3, 1)) !== null) { gt = 59; break IF; }
var stI1 = 0;{ gt = 71; break IF; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stA1 = invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._TYPE(),Array.at(lcA3, 1));
var stI1 = invoker.booleanValue__Z(stA1);
    }
    X_71: for (;;) { IF: if (gt <= 71) {
vm.MlEval_MlEval_Data(false)._prop_rotating.call(stA0, stI1);
if (Array.at(lcA3, 2) !== null && !Array.at(lcA3, 2)['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0, Array.at(lcA3, 2));
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(123));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"message");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA1,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"rotating");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA0 = lcA1;var stA1 = vm.MlEval_MlEval_Data(false)._TYPE();var stA2 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0));
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(stA1,stA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(44));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"steps");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,":");
var stA1 = invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA1,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA1,(125));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__LMlEval_MlEval_Data_2 = function() {
  var  lcA0 = this;
var stA1 = invoker.getContext__Lnet_java_html_BrwsrCtx_2(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
var stA0 = vm.MlEval_MlEval_Data(false).clone__LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2.call(lcA0, stA1);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.clone__LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.MlEval_MlEval_Data;
vm.MlEval_MlEval_Data(false).constructor.cons__VLnet_java_html_BrwsrCtx_2.call(stA0, lcA1);
var lcA2 = stA0;
vm.MlEval_MlEval_Data(false)._prop_message.call(lcA2, vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0));
vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA2, vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0));
vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA2, vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0));
return lcA2;

};
    m.access = 2;
    m.cls = CLS;
    m = c.applyBindings__LMlEval_MlEval_Data_2 = function() {
  var  lcA0 = this;
invoker.applyBindings__V(vm.MlEval_MlEval_Data(false)._proto.call(lcA0));
return lcA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA0)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA1 != null && lcA1['$instOf_MlEval_MlEval_Data'] ? 1 : 0;
if ((stI0) != 0) { gt = 16; break IF; }
return 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if (lcA1 !== null && !lcA1['$instOf_MlEval_MlEval_Data']) throw vm.java_lang_ClassCastException(true);
var lcA2 = lcA1;
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0), vm.MlEval_MlEval_Data(false)._prop_message.call(lcA2));
if ((stI0) != 0) { gt = 40; break IF; }
return 0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stA0 = vm.MlEval_MlEval_Data(false)._TYPE();var stA1 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0));
var stA2 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA2));
var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
if ((stI0) != 0) { gt = 65; break IF; }
return 0;
    }
    X_65: for (;;) { IF: if (gt <= 65) {

var stI0 = invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0), vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA2));
if ((stI0) != 0) { gt = 84; break IF; }
return 0;
    }
    X_84: for (;;) { IF: if (gt <= 84) {

return 1;

    }
}}}}}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stA0 = invoker.getName__Ljava_lang_String_2(vm.MlEval_MlEval_Data(false).constructor.$class);
var stI0 = invoker.hashCode__I(stA0);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_message.call(lcA0), lcI1);
var lcI1 = stI0;
var stA0 = vm.MlEval_MlEval_Data(false)._TYPE();var stA1 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](vm.MlEval_MlEval_Data(false)._prop_rotating.call(lcA0));
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(stA0,stA1, lcI1);
var lcI1 = stI0;
var stI0 = invoker.hashPlus__ILjava_lang_Object_2I(vm.MlEval_MlEval_Data(false)._TYPE(),vm.MlEval_MlEval_Data(false)._prop_steps.call(lcA0), lcI1);
var lcI1 = stI0;
return lcI1;

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__LMlEval_MlEval_Data_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$100__LMlEval_MlEval_Data$Html4JavaType_2 = function() {
return vm.MlEval_MlEval_Data(false)._TYPE();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto_2LMlEval_MlEval_Data_2 = function(lcA0) {
return vm.MlEval_MlEval_Data(false)._proto.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2LMlEval_MlEval_Data$1_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.MlEval_MlEval_Data(false).constructor.cons__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2.call(lcA0, lcA1, lcA2);
return;

};
    m.access = 4096;
    m.cls = CLS;
    m = c.access$400__LMlEval_MlEval_Data_2LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = vm.MlEval_MlEval_Data(false).clone__LMlEval_MlEval_Data_2Lnet_java_html_BrwsrCtx_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.MlEval_MlEval_Data$Html4JavaType;
vm.MlEval_MlEval_Data$Html4JavaType(false).constructor.cons__VLMlEval_MlEval_Data$1_2.call(stA0, null);
vm.MlEval_MlEval_Data(false)._TYPE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_DatafillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_Data', { value : true });
      vm.java_lang_Cloneable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_DatafillInstOf });
      MlEval_MlEval_DatafillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/Data';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.MlEval_MlEval_Data(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_MlEval_MlEval_Data_proto = null;
    this.fld_MlEval_MlEval_Data_prop_message = null;
    this.fld_MlEval_MlEval_Data_prop_rotating = 0;
    this.fld_MlEval_MlEval_Data_prop_steps = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Cloneable = link('java/lang/Cloneable', function(f) { vm.java_lang_Cloneable =  f; });
vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });

vm.MlEval_MlEval_ExpressionGenerator = function MlEval_MlEval_ExpressionGenerator() {
  var m;
  var CLS = MlEval_MlEval_ExpressionGenerator;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._num1 = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_ExpressionGenerator_num1 = v; return this.fld_MlEval_MlEval_ExpressionGenerator_num1; };
  m = c._num2 = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_ExpressionGenerator_num2 = v; return this.fld_MlEval_MlEval_ExpressionGenerator_num2; };
  m = c._chara = function (v) {  if (arguments.length == 1) this.fld_MlEval_MlEval_ExpressionGenerator_chara = v; return this.fld_MlEval_MlEval_ExpressionGenerator_chara; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.RandomExp__V = function() {
  var  lcA0 = this;
vm.MlEval_MlEval_ExpressionGenerator(false)._num1.call(lcA0, 0);
vm.MlEval_MlEval_ExpressionGenerator(false)._num2.call(lcA0, 0);
vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0, (32));
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.GetOper__Ljava_lang_String_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_Random;
vm.java_util_Random(false).constructor['cons__V'].call(stA0);
var lcA1 = stA0;
var stI0 = invoker.nextInt__II(lcA1,4);
var lcI2 = stI0;
switch (lcI2) {
  case 0:{ gt = 44; break IF; }
  case 1:{ gt = 53; break IF; }
  case 2:{ gt = 62; break IF; }
  case 3:{ gt = 71; break IF; }
  default: { gt = 77; break IF; }
}
    }
    X_44: for (;;) { IF: if (gt <= 44) {

vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0, (43));
{ gt = 77; break IF; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0, (45));
{ gt = 77; break IF; }
    }
    X_62: for (;;) { IF: if (gt <= 62) {

vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0, (42));
{ gt = 77; break IF; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {

vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0, (47));
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = vm.java_lang_Character(false)['toString__Ljava_lang_String_2C'](vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0));
return stA0;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.GetInside__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var lcA1 = null;
var stA0 = new vm.java_util_Random;
vm.java_util_Random(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = new vm.java_text_DecimalFormat;
vm.java_text_DecimalFormat(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "##.##");
var lcA3 = stA0;
var stD1 = invoker.nextDouble__D(lcA2);
vm.MlEval_MlEval_ExpressionGenerator(false)._num1.call(lcA0, ((stD1 * 50.0) + 10.0));
var stA1 = invoker.format__Ljava_lang_String_2D(lcA3,vm.MlEval_MlEval_ExpressionGenerator(false)._num1.call(lcA0));
var stA0 = lcA0;var stD1 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](stA1);
vm.MlEval_MlEval_ExpressionGenerator(false)._num1.call(stA0, stD1);
var stD1 = invoker.nextDouble__D(lcA2);
vm.MlEval_MlEval_ExpressionGenerator(false)._num2.call(lcA0, ((stD1 * 50.0) + 10.0));
var stA1 = invoker.format__Ljava_lang_String_2D(lcA3,vm.MlEval_MlEval_ExpressionGenerator(false)._num2.call(lcA0));
var stA0 = lcA0;var stD1 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](stA1);
vm.MlEval_MlEval_ExpressionGenerator(false)._num2.call(stA0, stD1);
var stA0 = lcA0;var stA1 = vm.MlEval_MlEval_ExpressionGenerator(false).GetOper__Ljava_lang_String_2.call(lcA0);
var stI1 = invoker.charAt__CI(stA1,0);
vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(stA0, stI1);
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA1 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](vm.MlEval_MlEval_ExpressionGenerator(false)._num1.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0));
var stA1 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](vm.MlEval_MlEval_ExpressionGenerator(false)._num2.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
return lcA1;

};
    m.access = 2;
    m.cls = CLS;
    m = c.GetEx__Ljava_lang_String_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA1 = "";
var lcA2 = "";
var lcA3 = "";
var stA0 = new vm.java_util_Random;
vm.java_util_Random(false).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var stA0 = new vm.java_text_DecimalFormat;
vm.java_text_DecimalFormat(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "##.##");
var lcA5 = stA0;
var stI0 = invoker.nextInt__II(lcA4,3);
var lcI6 = stI0;
switch (lcI6) {
  case 0:{ gt = 64; break IF; }
  case 1:{ gt = 94; break IF; }
  case 2:{ gt = 102; break IF; }
  default: { gt = 107; break IF; }
}
    }
    X_64: for (;;) { IF: if (gt <= 64) {

var stD1 = invoker.nextDouble__D(lcA4);
vm.MlEval_MlEval_ExpressionGenerator(false)._num1.call(lcA0, ((stD1 * 50.0) + 10.0));
var stA0 = invoker.format__Ljava_lang_String_2D(lcA5,vm.MlEval_MlEval_ExpressionGenerator(false)._num1.call(lcA0));
var lcA2 = stA0;
{ gt = 107; break IF; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

var stA0 = vm.MlEval_MlEval_ExpressionGenerator(false).GetInside__Ljava_lang_String_2.call(lcA0);
var lcA2 = stA0;
{ gt = 107; break IF; }
    }
    X_102: for (;;) { IF: if (gt <= 102) {

var stA0 = lcA0.GetEx__Ljava_lang_String_2();
var lcA2 = stA0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {

var stI0 = invoker.nextInt__II(lcA4,3);
var lcI7 = stI0;
switch (lcI7) {
  case 0:{ gt = 144; break IF; }
  case 1:{ gt = 174; break IF; }
  case 2:{ gt = 182; break IF; }
  default: { gt = 187; break IF; }
}
    }
    X_144: for (;;) { IF: if (gt <= 144) {

var stD1 = invoker.nextDouble__D(lcA4);
vm.MlEval_MlEval_ExpressionGenerator(false)._num2.call(lcA0, ((stD1 * 50.0) + 10.0));
var stA0 = invoker.format__Ljava_lang_String_2D(lcA5,vm.MlEval_MlEval_ExpressionGenerator(false)._num2.call(lcA0));
var lcA3 = stA0;
{ gt = 187; break IF; }
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stA0 = vm.MlEval_MlEval_ExpressionGenerator(false).GetInside__Ljava_lang_String_2.call(lcA0);
var lcA3 = stA0;
{ gt = 187; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stA0 = lcA0.GetEx__Ljava_lang_String_2();
var lcA3 = stA0;
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA0 = lcA0;var stA1 = vm.MlEval_MlEval_ExpressionGenerator(false).GetOper__Ljava_lang_String_2.call(lcA0);
var stI1 = invoker.charAt__CI(stA1,0);
vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(stA0, stI1);
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,vm.MlEval_MlEval_ExpressionGenerator(false)._chara.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,")");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA1 = stA0;
return lcA1;

    }
}}}}}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.NumOfExpr__VD = function(lcD1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 0;
var lcI4 = 0;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_StaticVar(false)._randomexp(stA0);
    }
    X_15: for (;;) { IF: if (gt <= 15) {

if (((lcI4).compare(lcD1)) >= 0) { gt = 44; break IF; }
var stA0 = lcA0.GetEx__Ljava_lang_String_2();
var lcA5 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._randomexp(),lcA5);
lcI4++;
{ gt = 0; continue X_15; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

vm.MlEval_MlEval_ListFileWriter(false).WriteFile__VLjava_util_ArrayList_2ZLjava_lang_String_2(vm.MlEval_MlEval_StaticVar(false)._randomexp(), lcI3, vm.MlEval_MlEval_StaticVar(false)._srcFile());
return;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_ExpressionGeneratorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_ExpressionGenerator', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_ExpressionGeneratorfillInstOf });
      MlEval_MlEval_ExpressionGeneratorfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/ExpressionGenerator';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_MlEval_MlEval_ExpressionGenerator_num1 = 0.0;
    this.fld_MlEval_MlEval_ExpressionGenerator_num2 = 0.0;
    this.fld_MlEval_MlEval_ExpressionGenerator_chara = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.MlEval_MlEval_ListFileWriter = function MlEval_MlEval_ListFileWriter() {
  var m;
  var CLS = MlEval_MlEval_ListFileWriter;
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
    m = c.WriteFile__VLjava_util_ArrayList_2ZLjava_lang_String_2 = function(lcA0, lcI1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_io_File;
vm.java_io_File(false).constructor['cons__VLjava_lang_String_2'].call(stA0, lcA2);
var lcA3 = stA0;
var stI0 = invoker.canWrite__Z(lcA3);
if ((stI0) == 0) { gt = 96; break IF; }
var stA0 = new vm.java_io_FileWriter;
vm.java_io_FileWriter(false).constructor['cons__VLjava_lang_String_2Z'].call(stA0, lcA2, lcI1);
var lcA4 = stA0;
var stA0 = new vm.java_io_BufferedWriter;
vm.java_io_BufferedWriter(false).constructor['cons__VLjava_io_Writer_2'].call(stA0, lcA4);
var lcA5 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0);
var lcA6 = stA0;
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 81; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
invoker.write__VLjava_lang_String_2(lcA5,lcA7);
invoker.newLine__V(lcA5);
{ gt = 0; continue X_44; }
    }
    X_81: for (;;) { IF: if (gt <= 81) {

invoker.flush__V(lcA5);
invoker.close__V(lcA5);
invoker.close__V(lcA4);
    }
    X_96: for (;;) { IF: if (gt <= 96) {
return;

    }
}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.WriteString__VLjava_lang_String_2ZLjava_lang_String_2 = function(lcA0, lcI1, lcA2) {
var stA0 = new vm.java_io_FileWriter;
vm.java_io_FileWriter(false).constructor['cons__VLjava_lang_String_2Z'].call(stA0, lcA2, lcI1);
var lcA3 = stA0;
var stA0 = new vm.java_io_BufferedWriter;
vm.java_io_BufferedWriter(false).constructor['cons__VLjava_io_Writer_2'].call(stA0, lcA3);
var lcA4 = stA0;
invoker.write__VLjava_lang_String_2(lcA4,lcA0);
invoker.newLine__V(lcA4);
invoker.newLine__V(lcA4);
invoker.flush__V(lcA4);
invoker.close__V(lcA4);
invoker.close__V(lcA3);
return;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_ListFileWriterfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_ListFileWriter', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_ListFileWriterfillInstOf });
      MlEval_MlEval_ListFileWriterfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/ListFileWriter';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
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
vm.java_io_BufferedWriter = link('java/io/BufferedWriter', function(f) { vm.java_io_BufferedWriter =  f; });
vm.java_io_FileWriter = link('java/io/FileWriter', function(f) { vm.java_io_FileWriter =  f; });
vm.java_io_File = link('java/io/File', function(f) { vm.java_io_File =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.java_text_DecimalFormat = link('java/text/DecimalFormat', function(f) { vm.java_text_DecimalFormat =  f; });
vm.java_util_Random = link('java/util/Random', function(f) { vm.java_util_Random =  f; });

vm.MlEval_MlEval_ParseString = function MlEval_MlEval_ParseString() {
  var m;
  var CLS = MlEval_MlEval_ParseString;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_num = 0;
  m = c._num = function (v) {  if (arguments.length == 1) CLS.fld_num = v; return CLS.fld_num; };
  CLS.fld_openbrac = 0;
  m = c._openbrac = function (v) {  if (arguments.length == 1) CLS.fld_openbrac = v; return CLS.fld_openbrac; };
  CLS.fld_closebrac = 0;
  m = c._closebrac = function (v) {  if (arguments.length == 1) CLS.fld_closebrac = v; return CLS.fld_closebrac; };
  CLS.fld_sbufvarexp = null;
  m = c._sbufvarexp = function (v) {  if (arguments.length == 1) CLS.fld_sbufvarexp = v; return CLS.fld_sbufvarexp; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.parseStr__VLjava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA0,";");
if ((stI0) == 0) { gt = 44; break IF; }
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA0,";");
var lcA1 = stA0;
var lcI2 = 0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

if ((lcI2) >= (4)) { gt = 41; break IF; }
var stI2 = invoker.charAt__CI(Array.at(lcA1, lcI2),0);
Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), lcI2, stI2);
lcI2++;
{ gt = 0; continue X_18; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {
{ gt = 85; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA0,",");
if ((stI0) == 0) { gt = 85; break IF; }
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA0,",");
var lcA1 = stA0;
var lcI2 = 0;
    }
    X_62: for (;;) { IF: if (gt <= 62) {

if ((lcI2) >= (4)) { gt = 85; break IF; }
var stI2 = invoker.charAt__CI(Array.at(lcA1, lcI2),0);
Array.at(vm.MlEval_MlEval_StaticVar(false)._prec(), lcI2, stI2);
lcI2++;
{ gt = 0; continue X_62; }
    }
    X_85: for (;;) { IF: if (gt <= 85) {
return;

    }
}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.parseExprValues__VLjava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA0,";");
if ((stI0) == 0) { gt = 75; break IF; }
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA0,";");
var lcA1 = stA0;
var lcA2 = lcA1;
var lcI3 = (lcA2).length;
var lcI4 = 0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

if ((lcI4) >= (lcI3)) { gt = 72; break IF; }
var lcA5 = Array.at(lcA2, lcI4);
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA5,"=");
var lcA6 = stA0;
var stA0 = vm.MlEval_MlEval_StaticVar(false)._hmap();var stA1 = Array.at(lcA6, 0);var stD2 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](Array.at(lcA6, 1));
var stA2 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
lcI4++;
{ gt = 0; continue X_24; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {
{ gt = 147; break IF; }
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA0,",");
if ((stI0) == 0) { gt = 147; break IF; }
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA0,",");
var lcA1 = stA0;
var lcA2 = lcA1;
var lcI3 = (lcA2).length;
var lcI4 = 0;
    }
    X_99: for (;;) { IF: if (gt <= 99) {

if ((lcI4) >= (lcI3)) { gt = 147; break IF; }
var lcA5 = Array.at(lcA2, lcI4);
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA5,"=");
var lcA6 = stA0;
var stA0 = vm.MlEval_MlEval_StaticVar(false)._hmap();var stA1 = Array.at(lcA6, 0);var stD2 = vm.java_lang_Double(false)['parseDouble__DLjava_lang_String_2'](Array.at(lcA6, 1));
var stA2 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD2);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stA2);
lcI4++;
{ gt = 0; continue X_99; }
    }
    X_147: for (;;) { IF: if (gt <= 147) {
return;

    }
}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.class__V = function() {
vm.MlEval_MlEval_ParseString(false)._num(0);
vm.MlEval_MlEval_ParseString(false)._openbrac(0);
vm.MlEval_MlEval_ParseString(false)._closebrac(0);
var stA0 = new vm.java_lang_StringBuffer;
vm.java_lang_StringBuffer(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_ParseString(false)._sbufvarexp(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_ParseStringfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_ParseString', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_ParseStringfillInstOf });
      MlEval_MlEval_ParseStringfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/ParseString';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    vm.MlEval_MlEval_ParseString(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.MlEval_MlEval_operateonFile = function MlEval_MlEval_operateonFile() {
  var m;
  var CLS = MlEval_MlEval_operateonFile;
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
    m = c.operate__VLjava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA1 = null;
try {
var stI0 = invoker.isEmpty__Z(lcA0);
if ((stI0) == 0) { gt = 12; break IF; }
{ gt = 21; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_FileNotFoundException']) {var stA0 = e;{ gt = 24; break IF; }}
throw e;
}    }
    X_12: for (;;) { IF: if (gt <= 12) {
try {var stA0 = new vm.java_io_FileInputStream;
vm.java_io_FileInputStream(false).constructor['cons__VLjava_lang_String_2'].call(stA0, lcA0);
var lcA1 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_FileNotFoundException']) {var stA0 = e;{ gt = 24; break IF; }}
throw e;
}    }
    X_21: for (;;) { IF: if (gt <= 21) {
{ gt = 29; break IF; }
    }
    X_24: for (;;) { IF: if (gt <= 24) {
var lcA2 = stA0;
invoker.printStackTrace__V(lcA2);
    }
    X_29: for (;;) { IF: if (gt <= 29) {
var stA0 = new vm.java_io_BufferedReader;
var stA1 = stA0;var stA2 = new vm.java_io_InputStreamReader;
vm.java_io_InputStreamReader(false).constructor['cons__VLjava_io_InputStream_2'].call(stA2, lcA1);
vm.java_io_BufferedReader(false).constructor['cons__VLjava_io_Reader_2'].call(stA1, stA2);
var lcA2 = stA0;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
if ((vm.MlEval_MlEval_StaticVar(false)._Var_inputfile()) == 0) { gt = 360; break IF; }
var stA0 = invoker.readLine__Ljava_lang_String_2(lcA2);
var lcA3 = stA0;
vm.MlEval_MlEval_ParseString(false).parseExprValues__VLjava_lang_String_2(lcA3);
vm.MlEval_MlEval_ListFileWriter(false).WriteString__VLjava_lang_String_2ZLjava_lang_String_2(lcA3, vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
vm.MlEval_MlEval_StaticVar(false)._append(1);
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stA0 = invoker.readLine__Ljava_lang_String_2(lcA2);
var stA1 = stA0;
var lcA3 = stA1;
if ((stA0) === null) { gt = 655; break IF; }
var stI0 = invoker.isEmpty__Z(lcA3);
if ((stI0) == 0) { gt = 102; break IF; }
{ gt = 0; continue X_83; }
    }
    X_102: for (;;) { IF: if (gt <= 102) {
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_StaticVar(false)._stepsList(stA0);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._stepsList();var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")  ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA3,":");
if ((stI0) == 0) { gt = 162; break IF; }
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA3,":");
var lcA3 = Array.at(stA0, 0);
    }
    X_162: for (;;) { IF: if (gt <= 162) {

var stI0 = invoker.add__ZLjava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._stepsList(),"Steps: ");
var stD0 = vm.MlEval_MlEval_ExpEvaluation(false).evaluate__DLjava_lang_String_2(lcA3);
var lcD4 = stD0;
if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 268; break IF; }
vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag(0);
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,")  ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
vm.MlEval_MlEval_ListFileWriter(false).WriteString__VLjava_lang_String_2ZLjava_lang_String_2(stA0, vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
var stA0 = lcA6;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,") ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  How Can you divide by zero!!!");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
vm.MlEval_MlEval_StaticVar(false)._sno((vm.MlEval_MlEval_StaticVar(false)._sno()).add32(1));
{ gt = 0; continue X_83; }
    }
    X_268: for (;;) { IF: if (gt <= 268) {

vm.MlEval_MlEval_ListFileWriter(false).WriteFile__VLjava_util_ArrayList_2ZLjava_lang_String_2(vm.MlEval_MlEval_StaticVar(false)._stepsList(), vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
vm.MlEval_MlEval_StaticVar(false)._append(1);
var stA0 = lcA6;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,") ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2D(stA1,lcD4);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stI1 = invoker.size__I(lcA6);
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA6,(stI1).sub32(1));
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
vm.MlEval_MlEval_ListFileWriter(false).WriteString__VLjava_lang_String_2ZLjava_lang_String_2(stA0, vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
vm.MlEval_MlEval_StaticVar(false)._sno((vm.MlEval_MlEval_StaticVar(false)._sno()).add32(1));
{ gt = 0; continue X_83; }
    }
    X_360: for (;;) { IF: if (gt <= 360) {

if ((vm.MlEval_MlEval_StaticVar(false)._Gen_inputfile()) == 0) { gt = 655; break IF; }
    }
    X_366: for (;;) { IF: if (gt <= 366) {

var stA0 = invoker.readLine__Ljava_lang_String_2(lcA2);
var stA1 = stA0;
var lcA3 = stA1;
if ((stA0) === null) { gt = 655; break IF; }
var stI0 = invoker.isEmpty__Z(vm.MlEval_MlEval_StaticVar(false)._destFile());
if ((stI0) == 0) { gt = 387; break IF; }
{ gt = 655; break IF; }
    }
    X_387: for (;;) { IF: if (gt <= 387) {

var stI0 = invoker.isEmpty__Z(lcA3);
if ((stI0) == 0) { gt = 397; break IF; }
{ gt = 0; continue X_366; }
    }
    X_397: for (;;) { IF: if (gt <= 397) {
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
vm.MlEval_MlEval_StaticVar(false)._stepsList(stA0);
var stA0 = vm.MlEval_MlEval_StaticVar(false)._stepsList();var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")  ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(vm.MlEval_MlEval_StaticVar(false)._stepsList(),"Steps: ");
var stI0 = invoker.contains__ZLjava_lang_CharSequence_2(lcA3,":");
if ((stI0) == 0) { gt = 466; break IF; }
var stA0 = invoker.split___3Ljava_lang_String_2Ljava_lang_String_2(lcA3,":");
var lcA3 = Array.at(stA0, 0);
    }
    X_466: for (;;) { IF: if (gt <= 466) {

var stD0 = vm.MlEval_MlEval_ExpEvaluation(false).evaluate__DLjava_lang_String_2(lcA3);
var lcD4 = stD0;
if ((vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag()) == 0) { gt = 563; break IF; }
vm.MlEval_MlEval_StaticVar(false)._divByZeroFlag(0);
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,")  ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
vm.MlEval_MlEval_ListFileWriter(false).WriteString__VLjava_lang_String_2ZLjava_lang_String_2(stA0, vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
var stA0 = lcA6;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,") ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  How Can you divide by zero!!!");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
vm.MlEval_MlEval_StaticVar(false)._sno((vm.MlEval_MlEval_StaticVar(false)._sno()).add32(1));
{ gt = 0; continue X_366; }
    }
    X_563: for (;;) { IF: if (gt <= 563) {

vm.MlEval_MlEval_ListFileWriter(false).WriteFile__VLjava_util_ArrayList_2ZLjava_lang_String_2(vm.MlEval_MlEval_StaticVar(false)._stepsList(), vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
vm.MlEval_MlEval_StaticVar(false)._append(1);
var stA0 = lcA6;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,vm.MlEval_MlEval_StaticVar(false)._sno());
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,") ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2D(stA1,lcD4);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stI1 = invoker.size__I(lcA6);
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA6,(stI1).sub32(1));
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
vm.MlEval_MlEval_ListFileWriter(false).WriteString__VLjava_lang_String_2ZLjava_lang_String_2(stA0, vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
vm.MlEval_MlEval_StaticVar(false)._sno((vm.MlEval_MlEval_StaticVar(false)._sno()).add32(1));
{ gt = 0; continue X_366; }
    }
    X_655: for (;;) { IF: if (gt <= 655) {

invoker.close__V(lcA2);
var stI0 = invoker.isEmpty__Z(vm.MlEval_MlEval_StaticVar(false)._destFile());
if ((stI0) == 0) { gt = 671; break IF; }
{ gt = 701; break IF; }
    }
    X_671: for (;;) { IF: if (gt <= 671) {

vm.MlEval_MlEval_ListFileWriter(false).WriteString__VLjava_lang_String_2ZLjava_lang_String_2("-------------Final results:-------------", vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
vm.MlEval_MlEval_ListFileWriter(false).WriteFile__VLjava_util_ArrayList_2ZLjava_lang_String_2(lcA6, vm.MlEval_MlEval_StaticVar(false)._append(), vm.MlEval_MlEval_StaticVar(false)._destFile());
vm.MlEval_MlEval_StaticVar(false)._sno(1);
invoker.close__V(lcA1);
    }
    X_701: for (;;) { IF: if (gt <= 701) {
return;

    }
}}}}}}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_operateonFilefillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_operateonFile', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_operateonFilefillInstOf });
      MlEval_MlEval_operateonFilefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/operateonFile';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
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
vm.java_io_InputStreamReader = link('java/io/InputStreamReader', function(f) { vm.java_io_InputStreamReader =  f; });
vm.java_io_BufferedReader = link('java/io/BufferedReader', function(f) { vm.java_io_BufferedReader =  f; });
vm.java_io_FileInputStream = link('java/io/FileInputStream', function(f) { vm.java_io_FileInputStream =  f; });
vm.java_io_FileNotFoundException = link('java/io/FileNotFoundException', function(f) { vm.java_io_FileNotFoundException =  f; });

vm.MlEval_MlEval_PropertyFileOper = function MlEval_MlEval_PropertyFileOper() {
  var m;
  var CLS = MlEval_MlEval_PropertyFileOper;
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
    m = c.PropertyFileWriting__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_Properties;
vm.java_util_Properties(false).constructor['cons__V'].call(stA0);
var lcA0 = stA0;
try {
var stA0 = invoker.setProperty__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_String_2(lcA0,"srcFile", "C:/Users/sswarnkar4/Desktop/input.txt");
var stA0 = invoker.setProperty__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_String_2(lcA0,"destFile", "C:/Users/sswarnkar4/Desktop/output.txt");
var stA0 = new vm.java_io_File;
vm.java_io_File(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "resources/myConfig.properties");
var lcA1 = stA0;
var stA0 = new vm.java_io_FileOutputStream;
vm.java_io_FileOutputStream(false).constructor['cons__VLjava_io_File_2'].call(stA0, lcA1);
var lcA2 = stA0;
invoker.store__VLjava_io_OutputStream_2Ljava_lang_String_2(lcA0,lcA2, "CustomMessages");
invoker.close__V(lcA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_FileNotFoundException']) {var stA0 = e;{ gt = 59; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 67; break IF; }}
throw e;
}{ gt = 72; break IF; }
    }
    X_59: for (;;) { IF: if (gt <= 59) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
{ gt = 72; break IF; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
    }
    X_72: for (;;) { IF: if (gt <= 72) {
return;

    }
}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.PropertyFileReading__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {var stA0 = new vm.java_io_File;
vm.java_io_File(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "resources/myConfig.properties");
var lcA0 = stA0;
var stA0 = new vm.java_io_FileInputStream;
vm.java_io_FileInputStream(false).constructor['cons__VLjava_io_File_2'].call(stA0, lcA0);
var lcA1 = stA0;
var stA0 = new vm.java_util_Properties;
vm.java_util_Properties(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
invoker.load__VLjava_io_InputStream_2(lcA2,lcA1);
var stA0 = invoker.getProperty__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"srcFile");
vm.MlEval_MlEval_StaticVar(false)._srcFile(stA0);
var stA0 = invoker.getProperty__Ljava_lang_String_2Ljava_lang_String_2(lcA2,"destFile");
vm.MlEval_MlEval_StaticVar(false)._destFile(stA0);
invoker.close__V(lcA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 57; break IF; }}
throw e;
}{ gt = 62; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {
var lcA0 = stA0;
invoker.printStackTrace__V(lcA0);
    }
    X_62: for (;;) { IF: if (gt <= 62) {
return;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_PropertyFileOperfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_PropertyFileOper', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_PropertyFileOperfillInstOf });
      MlEval_MlEval_PropertyFileOperfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/PropertyFileOper';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 33;
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
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });
vm.java_io_FileOutputStream = link('java/io/FileOutputStream', function(f) { vm.java_io_FileOutputStream =  f; });
vm.java_util_Properties = link('java/util/Properties', function(f) { vm.java_util_Properties =  f; });

vm.MlEval_MlEval_Main = function MlEval_MlEval_Main() {
  var m;
  var CLS = MlEval_MlEval_Main;
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
    m = c.main__V_3Ljava_lang_String_2 = function(lcA0) {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = vm.net_java_html_boot_BrowserBuilder(false)['newBrowser__Lnet_java_html_boot_BrowserBuilder_2_3Ljava_lang_Object_2'](stA0);
var stA0 = invoker.loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2(stA0,"pages/index.html");
var stA0 = invoker.loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2(stA0,vm.MlEval_MlEval_Main(false).constructor.$class);
var stA0 = invoker.invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2(stA0,"onPageLoad", lcA0);
invoker.showAndWait__V(stA0);
vm.java_lang_System(false)['exit__VI'](0);
return;

};
c['main__V_3Ljava_lang_String_2'] = m;

    m.access = 137;
    m.cls = CLS;
    m = c.onPageLoad__V = function() {
vm.MlEval_MlEval_StaticVar(false)._preced(0);
vm.MlEval_MlEval_ParseString(false).parseStr__VLjava_lang_String_2("/;*;+;-");
vm.MlEval_MlEval_StaticVar(false)._append(1);
vm.MlEval_MlEval_StaticVar(false)._vare(1);
vm.MlEval_MlEval_StaticVar(false)._variable(0);
var stA0 = new vm.MlEval_MlEval_Data;
vm.MlEval_MlEval_Data(false).constructor.cons__V.call(stA0);
var lcA0 = stA0;
lcA0.setMessage__VLjava_lang_String_2("Enter Expression");
var stA0 = lcA0.applyBindings__LMlEval_MlEval_Data_2();
return;

};
c['onPageLoad__V'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function MlEval_MlEval_MainfillInstOf(x) {
        Object.defineProperty(x, '$instOf_MlEval_MlEval_Main', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: MlEval_MlEval_MainfillInstOf });
      MlEval_MlEval_MainfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'MlEval/MlEval/Main';
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
exports['MlEval_MlEval_Main'] = vm.MlEval_MlEval_Main;

vm.net_java_html_boot_BrowserBuilder = link('net/java/html/boot/BrowserBuilder', function(f) { vm.net_java_html_boot_BrowserBuilder =  f; });
  invoker.registerProperty__VLjava_lang_String_2IZ = function() {
    var target = arguments[0];
    return target['registerProperty__VLjava_lang_String_2IZ'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.registerFunction__VLjava_lang_String_2I = function() {
    var target = arguments[0];
    return target['registerFunction__VLjava_lang_String_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.booleanValue__Z = function() {
    var target = arguments[0];
    return target['booleanValue__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toString__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['toString__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.schedule__VLjava_util_TimerTask_2J = function() {
    var target = arguments[0];
    return target['schedule__VLjava_util_TimerTask_2J'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getName__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getName__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2 = function() {
    var target = arguments[0];
    return target['log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.run__V = function() {
    var target = arguments[0];
    return target['run__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.close__V = function() {
    var target = arguments[0];
    return target['close__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.addSuppressed__VLjava_lang_Throwable_2 = function() {
    var target = arguments[0];
    return target['addSuppressed__VLjava_lang_Throwable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toCharArray___3C = function() {
    var target = arguments[0];
    return target['toCharArray___3C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.println__VLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['println__VLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuffer_2C = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuffer_2C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.push__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['push__Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.println__VD = function() {
    var target = arguments[0];
    return target['println__VD'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.contains__ZLjava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['contains__ZLjava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getClass__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getClass__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.peek__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['peek__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.charValue__C = function() {
    var target = arguments[0];
    return target['charValue__C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.pop__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['pop__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.empty__Z = function() {
    var target = arguments[0];
    return target['empty__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.length__I = function() {
    var target = arguments[0];
    return target['length__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.delete__Ljava_lang_StringBuffer_2II = function() {
    var target = arguments[0];
    return target['delete__Ljava_lang_StringBuffer_2II'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.doubleValue__D = function() {
    var target = arguments[0];
    return target['doubleValue__D'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuffer_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuffer_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.add__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['add__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.acquireLock__V = function() {
    var target = arguments[0];
    return target['acquireLock__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.releaseLock__V = function() {
    var target = arguments[0];
    return target['releaseLock__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.accessProperty__VLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['accessProperty__VLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.verifyUnlocked__V = function() {
    var target = arguments[0];
    return target['verifyUnlocked__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['isSame__ZLjava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function() {
    var target = arguments[0];
    return target['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getContext__Lnet_java_html_BrwsrCtx_2 = function() {
    var target = arguments[0];
    return target['getContext__Lnet_java_html_BrwsrCtx_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.applyBindings__V = function() {
    var target = arguments[0];
    return target['applyBindings__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.hashCode__I = function() {
    var target = arguments[0];
    return target['hashCode__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.hashPlus__ILjava_lang_Object_2I = function() {
    var target = arguments[0];
    return target['hashPlus__ILjava_lang_Object_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.nextInt__II = function() {
    var target = arguments[0];
    return target['nextInt__II'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.nextDouble__D = function() {
    var target = arguments[0];
    return target['nextDouble__D'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.format__Ljava_lang_String_2D = function() {
    var target = arguments[0];
    return target['format__Ljava_lang_String_2D'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.charAt__CI = function() {
    var target = arguments[0];
    return target['charAt__CI'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.canWrite__Z = function() {
    var target = arguments[0];
    return target['canWrite__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
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
  invoker.write__VLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['write__VLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.newLine__V = function() {
    var target = arguments[0];
    return target['newLine__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.flush__V = function() {
    var target = arguments[0];
    return target['flush__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.split___3Ljava_lang_String_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['split___3Ljava_lang_String_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isEmpty__Z = function() {
    var target = arguments[0];
    return target['isEmpty__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.printStackTrace__V = function() {
    var target = arguments[0];
    return target['printStackTrace__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.readLine__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['readLine__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2D = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2D'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.size__I = function() {
    var target = arguments[0];
    return target['size__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2I = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.setProperty__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['setProperty__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.store__VLjava_io_OutputStream_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['store__VLjava_io_OutputStream_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.load__VLjava_io_InputStream_2 = function() {
    var target = arguments[0];
    return target['load__VLjava_io_InputStream_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getProperty__Ljava_lang_String_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getProperty__Ljava_lang_String_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['loadPage__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['loadClass__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['invoke__Lnet_java_html_boot_BrowserBuilder_2Ljava_lang_String_2_3Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.showAndWait__V = function() {
    var target = arguments[0];
    return target['showAndWait__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpBcmNoaXZlci1WZXJzaW9uOiBQbGV4dXMgQXJjaGl2ZXINCkJ1aWx0LUJ5OiB1c2VyDQpDbGFzcy1QYXRoOiBsaWIvbmV0LmphdmEuaHRtbC0xLjAuamFyIGxpYi9uZXQuamF2YS5odG1sLmpzb24tMS4wLmphciBsDQogaWIvbmV0LmphdmEuaHRtbC5ib290LTEuMC5qYXIgbGliL25ldC5qYXZhLmh0bWwuc291bmQtMS4wLmphciBsaWIva280DQogai0xLjAuamFyIGxpYi9lbXVsLTAuMTEtcnQuamFyDQpDcmVhdGVkLUJ5OiBBcGFjaGUgTWF2ZW4gMy4wLjUNCkJ1aWxkLUpkazogMS44LjBfMjUNCk1haW4tQ2xhc3M6IE1sRXZhbC5NbEV2YWwuTWFpbg0KDQo=');
});