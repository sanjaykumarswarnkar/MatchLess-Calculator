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

vm.net_java_html_json_ComputedProperty = function net_java_html_json_ComputedProperty() {
  var m;
  var CLS = net_java_html_json_ComputedProperty;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_json_ComputedPropertyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_ComputedProperty', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ComputedPropertyfillInstOf });
      net_java_html_json_ComputedPropertyfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/ComputedProperty';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
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
exports['net_java_html_json_ComputedProperty'] = vm.net_java_html_json_ComputedProperty;

vm.java_lang_annotation_ElementType = link('java/lang/annotation/ElementType', function(f) { vm.java_lang_annotation_ElementType =  f; });
vm.java_lang_annotation_Target = link('java/lang/annotation/Target', function(f) { vm.java_lang_annotation_Target =  f; });
vm.java_lang_annotation_RetentionPolicy = link('java/lang/annotation/RetentionPolicy', function(f) { vm.java_lang_annotation_RetentionPolicy =  f; });
vm.java_lang_annotation_Retention = link('java/lang/annotation/Retention', function(f) { vm.java_lang_annotation_Retention =  f; });
vm.java_lang_annotation_Annotation = link('java/lang/annotation/Annotation', function(f) { vm.java_lang_annotation_Annotation =  f; });

vm.net_java_html_json_Function = function net_java_html_json_Function() {
  var m;
  var CLS = net_java_html_json_Function;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_json_FunctionfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Function', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_FunctionfillInstOf });
      net_java_html_json_FunctionfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Function';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}
,"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
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
exports['net_java_html_json_Function'] = vm.net_java_html_json_Function;


vm.net_java_html_json_Model = function net_java_html_json_Model() {
  var m;
  var CLS = net_java_html_json_Model;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.className__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/json/Model.className';
};
c['className__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.properties___3Lnet_java_html_json_Property_2 = function() {
  throw 'no code found for net/java/html/json/Model.properties';
};
c['properties___3Lnet_java_html_json_Property_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_ModelfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Model', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ModelfillInstOf });
      net_java_html_json_ModelfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Model';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
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
exports['net_java_html_json_Model'] = vm.net_java_html_json_Model;


vm.net_java_html_json_ModelOperation = function net_java_html_json_ModelOperation() {
  var m;
  var CLS = net_java_html_json_ModelOperation;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_json_ModelOperationfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_ModelOperation', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ModelOperationfillInstOf });
      net_java_html_json_ModelOperationfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/ModelOperation';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
}
,"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
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
exports['net_java_html_json_ModelOperation'] = vm.net_java_html_json_ModelOperation;


vm.net_java_html_json_Models = function net_java_html_json_Models() {
  var m;
  var CLS = net_java_html_json_Models;
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
    m = c.isModel__ZLjava_lang_Class_2 = function(lcA0) {
var stI0 = vm.org_netbeans_html_json_impl_JSON(false).isModel__ZLjava_lang_Class_2(lcA0);
return stI0;

};
c['isModel__ZLjava_lang_Class_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).bindTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA0, lcA1);
return stA0;

};
c['bind__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.parse__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2 = function(lcA0, lcA1, lcA2) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).readStream__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2(lcA0, lcA1, lcA2, null);
return stA0;

};
c['parse__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.parse__VLnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA3);
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).readStream__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2(lcA0, lcA1, lcA2, lcA3);
return;

};
c['parse__VLnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.fromRaw__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0, lcA1, lcA2);
return stA0;

};
c['fromRaw__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.toRaw__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var lcA1 = stA0;
var stI0 = vm.net_java_html_json_Models(false).isModel__ZLjava_lang_Class_2(lcA1);
if ((stI0) != 0) { gt = 39; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Not a model ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA1);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).find__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0);
return stA0;

    }
}}
};
c['toRaw__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA0) {
vm.org_netbeans_html_json_impl_JSON(false).applyBindings__VLjava_lang_Object_2(lcA0);
return;

};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_ModelsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Models', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_ModelsfillInstOf });
      net_java_html_json_ModelsfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Models';
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
exports['net_java_html_json_Models'] = vm.net_java_html_json_Models;

vm.java_lang_StringBuilder = link('java/lang/StringBuilder', function(f) { vm.java_lang_StringBuilder =  f; });
vm.java_lang_IllegalStateException = link('java/lang/IllegalStateException', function(f) { vm.java_lang_IllegalStateException =  f; });

vm.org_netbeans_html_json_impl_JSON = function org_netbeans_html_json_impl_JSON() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_modelTypes = null;
  m = c._modelTypes = function (v) {  if (arguments.length == 1) CLS.fld_modelTypes = v; return CLS.fld_modelTypes; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.findTechnology__Lorg_netbeans_html_json_spi_Technology_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_context_spi_Contexts(false)['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA0, vm.org_netbeans_html_json_spi_Technology(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Technology']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 20; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON$EmptyTech(false).access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2();
{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stA0;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_context_spi_Contexts(false)['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA0, vm.org_netbeans_html_json_spi_Transfer(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Transfer']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 20; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON$EmptyTech(false).access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2();
{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stA0;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.findWSTransfer__Lorg_netbeans_html_json_spi_WSTransfer_2Lnet_java_html_BrwsrCtx_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_context_spi_Contexts(false)['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA0, vm.org_netbeans_html_json_spi_WSTransfer(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_WSTransfer']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 20; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON$EmptyTech(false).access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2();
{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = lcA1;    }
    X_21: for (;;) { IF: if (gt <= 21) {
return stA0;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.extract__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA4 = stA0;
invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA4,lcA1, lcA2, lcA3);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.getProperty__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA2) !== null) { gt = 6; break IF; }
return lcA1;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 1);
Array.at(stA0, 0, lcA2);
var lcA3 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, null);
var lcA4 = stA0;
vm.org_netbeans_html_json_impl_JSON(false).extract__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(lcA0, lcA1, lcA3, lcA4);
return Array.at(lcA4, 0);

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 7; break IF; }
return "null";
    }
    X_7: for (;;) { IF: if (gt <= 7) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 19; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA0);
var lcA0 = stA0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 199; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA1 = lcA0;
var stI0 = invoker.length__I(lcA1);
var lcI2 = stI0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__VI'].call(stA0, (lcI2).add32((10)));
var lcA3 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(34));
var lcI4 = 0;
    }
    X_58: for (;;) { IF: if (gt <= 58) {

if ((lcI4) >= (lcI2)) { gt = 187; break IF; }
var stI0 = invoker.charAt__CI(lcA1,lcI4);
var lcI5 = stI0;
switch (lcI5) {
  case 9: { gt = 154; break IF; }
  case 10: { gt = 134; break IF; }
  case 13: { gt = 144; break IF; }
  case 34: { gt = 124; break IF; }
  case 92: { gt = 164; break IF; }
  default: { gt = 174; break IF; }
}
    }
    X_124: for (;;) { IF: if (gt <= 124) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\\"");
{ gt = 181; break IF; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\n");
{ gt = 181; break IF; }
    }
    X_144: for (;;) { IF: if (gt <= 144) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\r");
{ gt = 181; break IF; }
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\t");
{ gt = 181; break IF; }
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\\\\");
{ gt = 181; break IF; }
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,lcI5);
    }
    X_181: for (;;) { IF: if (gt <= 181) {
lcI4++;
{ gt = 0; continue X_58; }
    }
    X_187: for (;;) { IF: if (gt <= 187) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(34));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA3);
return stA0;
    }
    X_199: for (;;) { IF: if (gt <= 199) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA0);
return stA0;

    }
}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).getProperty__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, lcA1, lcA2);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 21; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var stA0 = lcA1;{ gt = 22; break IF; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stA0 = null;    }
    X_22: for (;;) { IF: if (gt <= 22) {
return stA0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.toNumber__Ljava_lang_Number_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).getProperty__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(lcA0, lcA1, lcA2);
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) != 0) { gt = 21; break IF; }
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](NaN);
var lcA1 = stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
return lcA1;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findTechnology__Lorg_netbeans_html_json_spi_Technology_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA4 = stA0;
var stA0 = invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA4,lcA1, lcA2);
var lcA5 = stA0;
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA5);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.isSame__ZII = function(lcI0, lcI1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI0) != (lcI1)) { gt = 9; break IF; }
var stI0 = 1;{ gt = 10; break IF; }
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = 0;    }
    X_10: for (;;) { IF: if (gt <= 10) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isSame__ZDD = function(lcD0, lcD2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((lcD0).compare(lcD2)) != 0) { gt = 10; break IF; }
var stI0 = 1;{ gt = 11; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = 0;    }
    X_11: for (;;) { IF: if (gt <= 11) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== (lcA1)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

if ((lcA0) === null) { gt = 15; break IF; }
if ((lcA1) !== null) { gt = 17; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

return 0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,lcA1);
return stI0;

    }
}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.hashPlus__ILjava_lang_Object_2I = function(lcA0, lcI1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 8; break IF; }
var stI0 = lcI1;{ gt = 14; break IF; }
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stI1 = invoker.hashCode__I(lcA0);
var stI0 = (lcI1 ^ stI1);    }
    X_14: for (;;) { IF: if (gt <= 14) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(vm.java_lang_Number(false).constructor.$class,lcA0);
if ((stI0) == 0) { gt = 14; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((vm.java_lang_Boolean(false).constructor.$class) !== (lcA0)) { gt = 25; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

if ((vm.java_lang_String(false).constructor.$class) !== (lcA0)) { gt = 36; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).stringValue__Ljava_lang_String_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

if ((vm.java_lang_Character(false).constructor.$class) !== (lcA0)) { gt = 47; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).charValue__Ljava_lang_Character_2Ljava_lang_Object_2(lcA1);
var lcA1 = stA0;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if ((vm.java_lang_Integer(false).constructor.$class) !== (lcA0)) { gt = 75; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 70; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.intValue__I(lcA1);
{ gt = 71; break IF; }
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stI0 = 0;    }
    X_71: for (;;) { IF: if (gt <= 71) {
var stA0 = vm.java_lang_Integer(false)['valueOf__Ljava_lang_Integer_2I'](stI0);
var lcA1 = stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

if ((vm.java_lang_Long(false).constructor.$class) !== (lcA0)) { gt = 103; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 98; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stL0 = invoker.longValue__J(lcA1);
{ gt = 99; break IF; }
    }
    X_98: for (;;) { IF: if (gt <= 98) {

var stL0 = 0;    }
    X_99: for (;;) { IF: if (gt <= 99) {
var stA0 = vm.java_lang_Long(false)['valueOf__Ljava_lang_Long_2J'](stL0);
var lcA1 = stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

if ((vm.java_lang_Short(false).constructor.$class) !== (lcA0)) { gt = 131; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 126; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.shortValue__S(lcA1);
{ gt = 127; break IF; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stI0 = 0;    }
    X_127: for (;;) { IF: if (gt <= 127) {
var stA0 = vm.java_lang_Short(false)['valueOf__Ljava_lang_Short_2S'](stI0);
var lcA1 = stA0;
    }
    X_131: for (;;) { IF: if (gt <= 131) {

if ((vm.java_lang_Byte(false).constructor.$class) !== (lcA0)) { gt = 159; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 154; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.byteValue__B(lcA1);
{ gt = 155; break IF; }
    }
    X_154: for (;;) { IF: if (gt <= 154) {

var stI0 = 0;    }
    X_155: for (;;) { IF: if (gt <= 155) {
var stA0 = vm.java_lang_Byte(false)['valueOf__Ljava_lang_Byte_2B'](stI0);
var lcA1 = stA0;
    }
    X_159: for (;;) { IF: if (gt <= 159) {

if ((vm.java_lang_Double(false).constructor.$class) !== (lcA0)) { gt = 189; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 182; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stD0 = invoker.doubleValue__D(lcA1);
{ gt = 185; break IF; }
    }
    X_182: for (;;) { IF: if (gt <= 182) {

var stD0 = NaN;    }
    X_185: for (;;) { IF: if (gt <= 185) {
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD0);
var lcA1 = stA0;
    }
    X_189: for (;;) { IF: if (gt <= 189) {

if ((vm.java_lang_Float(false).constructor.$class) !== (lcA0)) { gt = 218; break IF; }
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 212; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stF0 = invoker.floatValue__F(lcA1);
{ gt = 214; break IF; }
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stF0 = NaN;    }
    X_214: for (;;) { IF: if (gt <= 214) {
var stA0 = vm.java_lang_Float(false)['valueOf__Ljava_lang_Float_2F'](stF0);
var lcA1 = stA0;
    }
    X_218: for (;;) { IF: if (gt <= 218) {

var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA0,lcA1);
return stA0;

    }
}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.isNumeric__ZLjava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Integer'] ? 1 : 0;
if ((stI0) != 0) { gt = 28; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Long'] ? 1 : 0;
if ((stI0) != 0) { gt = 28; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Short'] ? 1 : 0;
if ((stI0) != 0) { gt = 28; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Byte'] ? 1 : 0;
if ((stI0) == 0) { gt = 32; break IF; }
    }
    X_28: for (;;) { IF: if (gt <= 28) {

var stI0 = 1;{ gt = 33; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

var stI0 = 0;    }
    X_33: for (;;) { IF: if (gt <= 33) {
return stI0;

    }
}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.stringValue__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) == 0) { gt = 25; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Boolean']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.booleanValue__Z(lcA0);
if ((stI0) == 0) { gt = 22; break IF; }
var stA0 = "true";{ gt = 24; break IF; }
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stA0 = "false";    }
    X_24: for (;;) { IF: if (gt <= 24) {
return stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stI0 = vm.org_netbeans_html_json_impl_JSON(false).isNumeric__ZLjava_lang_Object_2(lcA0);
if ((stI0) == 0) { gt = 43; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stL0 = invoker.longValue__J(lcA0);
var stA0 = vm.java_lang_Long(false)['toString__Ljava_lang_String_2J'](stL0);
return stA0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Float'] ? 1 : 0;
if ((stI0) == 0) { gt = 61; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Float']) throw vm.java_lang_ClassCastException(true);
var stF0 = invoker.floatValue__F(lcA0);
var stA0 = vm.java_lang_Float(false)['toString__Ljava_lang_String_2F'](stF0);
return stA0;
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Double'] ? 1 : 0;
if ((stI0) == 0) { gt = 79; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Double']) throw vm.java_lang_ClassCastException(true);
var stD0 = invoker.doubleValue__D(lcA0);
var stA0 = vm.java_lang_Double(false)['toString__Ljava_lang_String_2D'](stD0);
return stA0;
    }
    X_79: for (;;) { IF: if (gt <= 79) {

if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
return lcA0;

    }
}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 23; break IF; }
try {
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2Ljava_lang_String_2'](lcA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_NumberFormatException']) {var stA0 = e;{ gt = 15; break IF; }}
throw e;
}return stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {
var lcA1 = stA0;
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](NaN);
return stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) == 0) { gt = 49; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Boolean']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.booleanValue__Z(lcA0);
if ((stI0) == 0) { gt = 44; break IF; }
var stI0 = 1;{ gt = 45; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = 0;    }
    X_45: for (;;) { IF: if (gt <= 45) {
var stA0 = vm.java_lang_Integer(false)['valueOf__Ljava_lang_Integer_2I'](stI0);
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

if (lcA0 !== null && !lcA0['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
return lcA0;

    }
}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.charValue__Ljava_lang_Character_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 23; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA0);
var stI0 = invoker.intValue__I(stA0);
var stA0 = vm.java_lang_Character(false)['toChars___3CI'](stI0);
var stA0 = vm.java_lang_Character(false)['valueOf__Ljava_lang_Character_2C'](Array.at(stA0, 0));
return stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) == 0) { gt = 49; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_Boolean']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.booleanValue__Z(lcA0);
if ((stI0) == 0) { gt = 44; break IF; }
var stI0 = 1;{ gt = 45; break IF; }
    }
    X_44: for (;;) { IF: if (gt <= 44) {

var stI0 = 0;    }
    X_45: for (;;) { IF: if (gt <= 45) {
var stA0 = vm.java_lang_Character(false)['valueOf__Ljava_lang_Character_2C'](stI0);
return stA0;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 81; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA1 = lcA0;
var stI0 = invoker.isEmpty__Z(lcA1);
if ((stI0) == 0) { gt = 72; break IF; }
var stI0 = 0;{ gt = 77; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stI0 = invoker.charAt__CI(lcA1,0);
    }
    X_77: for (;;) { IF: if (gt <= 77) {
var stA0 = vm.java_lang_Character(false)['valueOf__Ljava_lang_Character_2C'](stI0);
return stA0;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

if (lcA0 !== null && !lcA0['$instOf_java_lang_Character']) throw vm.java_lang_ClassCastException(true);
return lcA0;

    }
}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 18; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var stI0 = vm.java_lang_Boolean(false)['parseBoolean__ZLjava_lang_String_2'](lcA0);
var stA0 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 46; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA0);
var stD0 = invoker.doubleValue__D(stA0);
if (((stD0).compare(0)) == 0) { gt = 41; break IF; }
var stI0 = 1;{ gt = 42; break IF; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stI0 = 0;    }
    X_42: for (;;) { IF: if (gt <= 42) {
var stA0 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(vm.java_lang_Boolean(false)['_TRUE'](),lcA0);
var stA0 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](stI0);
return stA0;

    }
}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stI0 = lcA0 != null && lcA0['$instOf_org_netbeans_html_json_impl_JSONList'] ? 1 : 0;
if ((stI0) == 0) { gt = 21; break IF; }
if (lcA0 !== null && !lcA0['$instOf_org_netbeans_html_json_impl_JSONList']) throw vm.java_lang_ClassCastException(true);
var stA0 = lcA0.koData__Ljava_lang_Object_2();
return stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = lcA0 != null && lcA0['$instOf_java_util_Collection'] ? 1 : 0;
if ((stI0) == 0) { gt = 37; break IF; }
if (lcA0 !== null && !lcA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.org_netbeans_html_json_impl_JSONList(false).koData__Ljava_lang_Object_2Ljava_util_Collection_2Lorg_netbeans_html_json_impl_Bindings_2(lcA0, lcA1);
return stA0;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stI0 = lcA0 != null && lcA0['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Boolean'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Character'] ? 1 : 0;
if ((stI0) != 0) { gt = 72; break IF; }
var stI0 = lcA0 != null && lcA0['$instOf_java_lang_Enum'] ? 1 : 0;
if ((stI0) == 0) { gt = 74; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

return lcA0;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA0);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 85; break IF; }
return null;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2Z(lcA2, 1);
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 99; break IF; }
var stA0 = null;{ gt = 103; break IF; }
    }
    X_99: for (;;) { IF: if (gt <= 99) {

var stA0 = lcA3.koData__Ljava_lang_Object_2();
    }
    X_103: for (;;) { IF: if (gt <= 103) {
return stA0;

    }
}}}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(stA0);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 14; break IF; }
return null;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).protoFor__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2(lcA1, lcA0);
var lcA2 = stA0;
return lcA2;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.find__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA0) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA0, null);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA0);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 39; break IF; }
var stA0 = new vm.java_lang_IllegalArgumentException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Not a model: ");
var stA3 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalArgumentException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

lcA1.applyBindings__V();
return;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.loadJSON__VLnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3, lcA4, lcA5) {
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA0, lcA1, lcA2, lcA3, lcA4, lcA5);
var lcA6 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA7 = stA0;
invoker.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2(lcA7,lcA6);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.openWS__Lorg_netbeans_html_json_impl_JSON$WS_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findWSTransfer__Lorg_netbeans_html_json_spi_WSTransfer_2Lnet_java_html_BrwsrCtx_2(lcA0);
var stA0 = vm.org_netbeans_html_json_impl_JSON$WSImpl(false).create__Lorg_netbeans_html_json_impl_JSON$WS_2Lorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2(stA0, lcA1);
var lcA4 = stA0;
lcA4.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_Object_2(lcA0, lcA2, lcA3);
return lcA4;

};
    m.access = 9;
    m.cls = CLS;
    m = c.register__VLjava_lang_Class_2Lorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA0, lcA1) {
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_JSON(false)._modelTypes(),lcA0, lcA1);
return;

};
    m.access = 9;
    m.cls = CLS;
    m = c.isModel__ZLjava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(lcA0);
if ((stA0) === null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stI0;

    }
}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI1 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

if ((lcI1) >= (2)) { gt = 39; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_JSON(false)._modelTypes(),lcA0);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Proto$Type']) throw vm.java_lang_ClassCastException(true);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 31; break IF; }
vm.org_netbeans_html_json_impl_JSON(false).initClass__VLjava_lang_Class_2(lcA0);
{ gt = 33; break IF; }
    }
    X_31: for (;;) { IF: if (gt <= 31) {

return lcA2;
    }
    X_33: for (;;) { IF: if (gt <= 33) {
lcI1++;
{ gt = 0; continue X_2; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {

return null;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.bindTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findType__Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Class_2(stA0);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 20; break IF; }
var stA0 = new vm.java_lang_IllegalArgumentException;
vm.java_lang_IllegalArgumentException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).clone__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA2, lcA0, lcA1);
return stA0;

    }
}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.readStream__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_io_InputStream_2Ljava_util_Collection_2 = function(lcA0, lcA1, lcA2, lcA3) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findTransfer__Lorg_netbeans_html_json_spi_Transfer_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA4 = stA0;
var stA0 = invoker.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2(lcA4,lcA2);
var lcA5 = stA0;
var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA5, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 96; break IF; }
if (lcA5 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA5, 1, vm.java_lang_Object)) throw vm.java_lang_ClassCastException(true);
if (lcA5 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA5, 1, vm.java_lang_Object)) throw vm.java_lang_ClassCastException(true);
var lcA6 = lcA5;
if ((lcA3) === null) { gt = 74; break IF; }
var lcI7 = 0;
    }
    X_41: for (;;) { IF: if (gt <= 41) {

if ((lcI7) >= ((lcA6).length)) { gt = 72; break IF; }
var stA0 = lcA3;var stA1 = vm.org_netbeans_html_json_impl_JSON(false).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0, lcA1, Array.at(lcA6, lcI7));
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI7++;
{ gt = 0; continue X_41; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

return null;
    }
    X_74: for (;;) { IF: if (gt <= 74) {

if (((lcA6).length) != 0) { gt = 90; break IF; }
var stA0 = new vm.java_io_EOFException;
vm.java_io_EOFException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "Recieved an empty array");
{ var stA0 = stA0; throw stA0; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

var lcA5 = Array.at(lcA6, 0);
    }
    X_96: for (;;) { IF: if (gt <= 96) {

var stA0 = vm.org_netbeans_html_json_impl_JSON(false).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA0, lcA1, lcA5);
var lcA6 = stA0;
if ((lcA3) === null) { gt = 118; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA3,lcA6);
    }
    X_118: for (;;) { IF: if (gt <= 118) {

return lcA6;

    }
}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA2) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

if ((lcA1) !== (vm.java_lang_String(false).constructor.$class)) { gt = 21; break IF; }
var stA1 = invoker.toString__Ljava_lang_String_2(lcA2);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,stA1);
return stA0;
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var lcI3 = 0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

if ((lcI3) >= (2)) { gt = 72; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_JSON(false)._modelTypes(),lcA1);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Proto$Type']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
if ((lcA4) !== null) { gt = 54; break IF; }
vm.org_netbeans_html_json_impl_JSON(false).initClass__VLjava_lang_Class_2(lcA1);
{ gt = 66; break IF; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stA0 = lcA1;var stA1 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).readFrom__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA4, lcA0, lcA2);
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(stA0,stA1);
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {
lcI3++;
{ gt = 0; continue X_23; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {
var stA0 = new vm.java_lang_NullPointerException;
vm.java_lang_NullPointerException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

    }
}}}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.initClass__VLjava_lang_Class_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.getClassLoader__Ljava_lang_ClassLoader_2(lcA0);
var lcA1 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 8; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}try {{ gt = 11; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}    }
    X_8: for (;;) { IF: if (gt <= 8) {
try {var lcA2 = stA0;
var lcA1 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}    }
    X_11: for (;;) { IF: if (gt <= 11) {
try {
if ((lcA1) === null) { gt = 25; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(lcA0);
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2ZLjava_lang_ClassLoader_2'](stA0, 1, lcA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}    }
    X_25: for (;;) { IF: if (gt <= 25) {
try {
var stA0 = invoker.newInstance__Ljava_lang_Object_2(lcA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 33; break IF; }}
throw e;
}{ gt = 34; break IF; }
    }
    X_33: for (;;) { IF: if (gt <= 33) {
var lcA1 = stA0;
    }
    X_34: for (;;) { IF: if (gt <= 34) {
return;

    }
}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.java_util_HashMap;
vm.java_util_HashMap(false).constructor['cons__V'].call(stA0);
vm.org_netbeans_html_json_impl_JSON(false)._modelTypes(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSONfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSONfillInstOf });
      org_netbeans_html_json_impl_JSONfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_json_impl_JSON(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_HashMap = link('java/util/HashMap', function(f) { vm.java_util_HashMap =  f; });
vm.java_lang_Exception = link('java/lang/Exception', function(f) { vm.java_lang_Exception =  f; });
vm.java_lang_SecurityException = link('java/lang/SecurityException', function(f) { vm.java_lang_SecurityException =  f; });
vm.java_lang_NullPointerException = link('java/lang/NullPointerException', function(f) { vm.java_lang_NullPointerException =  f; });
vm.java_io_EOFException = link('java/io/EOFException', function(f) { vm.java_io_EOFException =  f; });

vm.org_netbeans_html_json_impl_JSON$WSImpl = function org_netbeans_html_json_impl_JSON$WSImpl() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$WSImpl;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_JSON$WS(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._trans = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSON$WSImpl_trans = v; return this.fld_org_netbeans_html_json_impl_JSON$WSImpl_trans; };
  m = c._rcvr = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr = v; return this.fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr; };
  m = c._socket = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSON$WSImpl_socket = v; return this.fld_org_netbeans_html_json_impl_JSON$WSImpl_socket; };
  m = c._prevURL = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL = v; return this.fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_JSON$WS(false).constructor.cons__VLorg_netbeans_html_json_impl_JSON$1_2.call(lcA0, null);
vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._trans.call(lcA0, lcA1);
vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._rcvr.call(lcA0, lcA2);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lorg_netbeans_html_json_impl_JSON$WS_2Lorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA0, lcA1) {
var stA0 = new vm.org_netbeans_html_json_impl_JSON$WSImpl;
vm.org_netbeans_html_json_impl_JSON$WSImpl(false).constructor.cons__VLorg_netbeans_html_json_spi_WSTransfer_2Lorg_netbeans_html_json_impl_RcvrJSON_2.call(stA0, lcA0, lcA1);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA4 = vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._socket.call(lcA0);
if ((lcA4) !== null) { gt = 79; break IF; }
if ((lcA3) === null) { gt = 42; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"WebSocket is not opened yet. Call with null data, was: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_42: for (;;) { IF: if (gt <= 42) {

var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA1, vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._rcvr.call(lcA0), lcA2, null, "WebSocket", null);
var lcA5 = stA0;
var stA1 = invoker.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._trans.call(lcA0),lcA2, lcA5);
vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._socket.call(lcA0, stA1);
vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._prevURL.call(lcA0, lcA2);
return;
    }
    X_79: for (;;) { IF: if (gt <= 79) {

if ((lcA3) !== null) { gt = 100; break IF; }
invoker.close__VLjava_lang_Object_2(vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._trans.call(lcA0),lcA4);
vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._socket.call(lcA0, null);
return;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._prevURL.call(lcA0),lcA2);
if ((stI0) != 0) { gt = 160; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Can't call to different URL ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," was: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._prevURL.call(lcA0));
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"!");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," Close the socket by calling it will null data first!");
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_160: for (;;) { IF: if (gt <= 160) {

var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA1, vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._rcvr.call(lcA0), vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._prevURL.call(lcA0), null, "WebSocket", lcA3);
var lcA5 = stA0;
invoker.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2(vm.org_netbeans_html_json_impl_JSON$WSImpl(false)._trans.call(lcA0),lcA4, lcA5);
return;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$WSImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$WSImpl', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$WSImplfillInstOf });
      org_netbeans_html_json_impl_JSON$WSImplfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$WSImpl';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_JSON$WSImpl_trans = null;
    this.fld_org_netbeans_html_json_impl_JSON$WSImpl_rcvr = null;
    this.fld_org_netbeans_html_json_impl_JSON$WSImpl_socket = null;
    this.fld_org_netbeans_html_json_impl_JSON$WSImpl_prevURL = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_impl_JSON$WS = function org_netbeans_html_json_impl_JSON$WS() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$WS;
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
    m = c.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  throw 'no code found for org/netbeans/html/json/impl/JSON$WS.send';
};
    m.access = 1025;
    m.cls = CLS;
    m = CLS.cons__VLorg_netbeans_html_json_impl_JSON$1_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_JSON$WS(false).constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$WSfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$WS', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$WSfillInstOf });
      org_netbeans_html_json_impl_JSON$WSfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$WS';
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
vm.java_lang_IllegalArgumentException = link('java/lang/IllegalArgumentException', function(f) { vm.java_lang_IllegalArgumentException =  f; });

vm.org_netbeans_html_json_impl_PropertyBindingAccessor = function org_netbeans_html_json_impl_PropertyBindingAccessor() {
  var m;
  var CLS = org_netbeans_html_json_impl_PropertyBindingAccessor;
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
if ((vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT()) === null) { gt = 18; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
vm.java_lang_IllegalStateException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_18: for (;;) { IF: if (gt <= 18) {

vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT(lcA0);
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.newBinding__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2Z = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcI6) {
  throw 'no code found for org/netbeans/html/json/impl/PropertyBindingAccessor.newBinding';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.newCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  throw 'no code found for org/netbeans/html/json/impl/PropertyBindingAccessor.newCall';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.bindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2Z = function(lcA1, lcI2) {
  throw 'no code found for org/netbeans/html/json/impl/PropertyBindingAccessor.bindings';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.notifyChange__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA1, lcI2) {
  throw 'no code found for org/netbeans/html/json/impl/PropertyBindingAccessor.notifyChange';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/impl/PropertyBindingAccessor.findProto';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2, lcA3) {
  throw 'no code found for org/netbeans/html/json/impl/PropertyBindingAccessor.cloneTo';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  throw 'no code found for org/netbeans/html/json/impl/PropertyBindingAccessor.read';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2Z = function(lcA0, lcI1) {
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT().bindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2Z(lcA0, lcI1);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.notifyProtoChange__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA0, lcI1) {
vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT().notifyChange__VLorg_netbeans_html_json_spi_Proto_2I(lcA0, lcI1);
return;

};
    m.access = 8;
    m.cls = CLS;
    m = c.create__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2Z = function(lcA0, lcA1, lcA2, lcI3, lcA4, lcI5) {
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT().newBinding__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2Z(lcA0, lcA1, lcA2, lcI3, lcA4, lcI5);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.createCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2, lcA3, lcA4, lcA5) {
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT().newCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(lcA0, lcA1, lcA2, lcA3, lcA4, lcA5);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2 = function(lcA0, lcA1) {
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT().findProto__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2(lcA0, lcA1);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA0, lcA1, lcA2) {
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT().cloneTo__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA0, lcA1, lcA2);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.readFrom__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA0, lcA1, lcA2) {
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false)._DEFAULT().read__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA0, lcA1, lcA2);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    m = c.class__V = function() {
vm.org_netbeans_html_json_impl_JSON(false).initClass__VLjava_lang_Class_2(vm.org_netbeans_html_json_spi_PropertyBinding(false).constructor.$class);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_PropertyBindingAccessorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_PropertyBindingAccessor', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_PropertyBindingAccessorfillInstOf });
      org_netbeans_html_json_impl_PropertyBindingAccessorfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/PropertyBindingAccessor';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_PropertyBinding = function org_netbeans_html_json_spi_PropertyBinding() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding;
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
    m = c.getPropertyName__Ljava_lang_String_2 = function() {
  throw 'no code found for org/netbeans/html/json/spi/PropertyBinding.getPropertyName';
};
c['getPropertyName__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/PropertyBinding.setValue';
};
c['setValue__VLjava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2 = function() {
  throw 'no code found for org/netbeans/html/json/spi/PropertyBinding.getValue';
};
c['getValue__Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.isReadOnly__Z = function() {
  throw 'no code found for org/netbeans/html/json/spi/PropertyBinding.isReadOnly';
};
c['isReadOnly__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.org_netbeans_html_json_spi_PropertyBinding$1;
vm.org_netbeans_html_json_spi_PropertyBinding$1(false).constructor.cons__V.call(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBindingfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBindingfillInstOf });
      org_netbeans_html_json_spi_PropertyBindingfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_json_spi_PropertyBinding(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_json_spi_PropertyBinding'] = vm.org_netbeans_html_json_spi_PropertyBinding;


vm.org_netbeans_html_json_spi_PropertyBinding$1 = function org_netbeans_html_json_spi_PropertyBinding$1() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding$1;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.newCall__Lorg_netbeans_html_json_spi_JSONCall_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
var stA0 = new vm.org_netbeans_html_json_spi_JSONCall;
vm.org_netbeans_html_json_spi_JSONCall(false).constructor.cons__VLnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2.call(stA0, lcA1, lcA2, lcA3, lcA4, lcA5, lcA6);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.bindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2Z = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI2) == 0) { gt = 11; break IF; }
var stA0 = lcA1.initBindings__Lorg_netbeans_html_json_impl_Bindings_2();
{ gt = 15; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stA0 = lcA1.getBindings__Lorg_netbeans_html_json_impl_Bindings_2();
    }
    X_15: for (;;) { IF: if (gt <= 15) {
return stA0;

    }
}}}
};
    m.access = 4;
    m.cls = CLS;
    m = c.notifyChange__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
lcA1.onChange__VI(lcI2);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.findProto__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(lcA1,lcA2);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = invoker.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA1,lcA2, lcA3);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = invoker.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(lcA1,lcA2, lcA3);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    m = c.newBinding__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2Z = function(lcA1, lcA2, lcA3, lcI4, lcA5, lcI6) {
  var  lcA0 = this;
var stA0 = new vm.org_netbeans_html_json_spi_PropertyBinding$Impl;
vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false).constructor.cons__VLorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Z.call(stA0, lcA2, lcA3, lcI4, lcA5, lcA1, lcI6);
return stA0;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBinding$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBinding$1fillInstOf });
      org_netbeans_html_json_spi_PropertyBinding$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding$1';
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

vm.org_netbeans_html_json_spi_PropertyBinding$Impl = function org_netbeans_html_json_spi_PropertyBinding$Impl() {
  var m;
  var CLS = org_netbeans_html_json_spi_PropertyBinding$Impl;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_PropertyBinding(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_name = v; return this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_name; };
  m = c._readOnly = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_readOnly = v; return this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_readOnly; };
  m = c._model = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model = v; return this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model; };
  m = c._access = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_access = v; return this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_access; };
  m = c._bindings = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_bindings = v; return this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_bindings; };
  m = c._index = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_index = v; return this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_index; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Z = function(lcA1, lcA2, lcI3, lcA4, lcA5, lcI6) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_PropertyBinding(false).constructor.cons__V.call(lcA0);
vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._bindings.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._name.call(lcA0, lcA2);
vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._index.call(lcA0, lcI3);
vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._model.call(lcA0, lcA4);
vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._access.call(lcA0, lcA5);
vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._readOnly.call(lcA0, lcI6);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
invoker.setValue__VLjava_lang_Object_2ILjava_lang_Object_2(vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._access.call(lcA0),vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._model.call(lcA0), vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._index.call(lcA0), lcA1);
return;

};
c['setValue__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I(vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._access.call(lcA0),vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._model.call(lcA0), vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._index.call(lcA0));
var lcA1 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA1, vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._bindings.call(lcA0));
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 33; break IF; }
var stA0 = lcA1;{ gt = 34; break IF; }
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stA0 = lcA2;    }
    X_34: for (;;) { IF: if (gt <= 34) {
return stA0;

    }
}}}
};
c['getValue__Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isReadOnly__Z = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._readOnly.call(lcA0);

};
c['isReadOnly__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getPropertyName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_spi_PropertyBinding$Impl(false)._name.call(lcA0);

};
c['getPropertyName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_PropertyBinding$ImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_PropertyBinding$Impl', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_PropertyBinding$ImplfillInstOf });
      org_netbeans_html_json_spi_PropertyBinding$ImplfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/PropertyBinding$Impl';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_name = null;
    this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_readOnly = 0;
    this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_model = null;
    this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_access = null;
    this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_bindings = null;
    this.fld_org_netbeans_html_json_spi_PropertyBinding$Impl_index = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_JSONCall = function org_netbeans_html_json_spi_JSONCall() {
  var m;
  var CLS = org_netbeans_html_json_spi_JSONCall;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._whenDone = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall_whenDone = v; return this.fld_org_netbeans_html_json_spi_JSONCall_whenDone; };
  m = c._urlBefore = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall_urlBefore = v; return this.fld_org_netbeans_html_json_spi_JSONCall_urlBefore; };
  m = c._urlAfter = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall_urlAfter = v; return this.fld_org_netbeans_html_json_spi_JSONCall_urlAfter; };
  m = c._method = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall_method = v; return this.fld_org_netbeans_html_json_spi_JSONCall_method; };
  m = c._data = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall_data = v; return this.fld_org_netbeans_html_json_spi_JSONCall_data; };
  m = c._ctx = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall_ctx = v; return this.fld_org_netbeans_html_json_spi_JSONCall_ctx; };
    m = CLS.cons__VLnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_json_spi_JSONCall(false)._ctx.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_JSONCall(false)._whenDone.call(lcA0, lcA2);
vm.org_netbeans_html_json_spi_JSONCall(false)._urlBefore.call(lcA0, lcA3);
vm.org_netbeans_html_json_spi_JSONCall(false)._urlAfter.call(lcA0, lcA4);
vm.org_netbeans_html_json_spi_JSONCall(false)._method.call(lcA0, lcA5);
vm.org_netbeans_html_json_spi_JSONCall(false)._data.call(lcA0, lcA6);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.isDoOutput__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_JSONCall(false)._data.call(lcA0)) === null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stI0;

    }
}}}
};
c['isDoOutput__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.writeData__VLjava_io_OutputStream_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_JSONCall(false)._data.call(lcA0)) !== null) { gt = 17; break IF; }
var stA0 = new vm.java_io_IOException;
vm.java_io_IOException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "No data!");
{ var stA0 = stA0; throw stA0; }
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stA1 = invoker.toString__Ljava_lang_String_2(vm.org_netbeans_html_json_spi_JSONCall(false)._data.call(lcA0));
var stA1 = invoker.getBytes___3BLjava_lang_String_2(stA1,"UTF-8");
invoker.write__V_3B(lcA1,stA1);
invoker.flush__V(lcA1);
return;

    }
}}
};
c['writeData__VLjava_io_OutputStream_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.getMethod__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_spi_JSONCall(false)._method.call(lcA0);

};
c['getMethod__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isJSONP__Z = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_JSONCall(false)._urlAfter.call(lcA0)) === null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {
return stI0;

    }
}}}
};
c['isJSONP__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.composeURL__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_JSONCall(false)._urlAfter.call(lcA0)) !== null) { gt = 11; break IF; }
var stI0 = 1;{ gt = 12; break IF; }
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = 0;    }
    X_12: for (;;) { IF: if (gt <= 12) {

if ((lcA1) !== null) { gt = 20; break IF; }
var stI1 = 1;{ gt = 21; break IF; }
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI1 = 0;    }
    X_21: for (;;) { IF: if (gt <= 21) {
if ((stI0) == (stI1)) { gt = 32; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
vm.java_lang_IllegalStateException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {

if ((vm.org_netbeans_html_json_spi_JSONCall(false)._urlAfter.call(lcA0)) === null) { gt = 68; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,vm.org_netbeans_html_json_spi_JSONCall(false)._urlBefore.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,vm.org_netbeans_html_json_spi_JSONCall(false)._urlAfter.call(lcA0));
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_68: for (;;) { IF: if (gt <= 68) {

return vm.org_netbeans_html_json_spi_JSONCall(false)._urlBefore.call(lcA0);

    }
}}}}}}}
};
c['composeURL__Ljava_lang_String_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.notifySuccess__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 14; break IF; }
var stA0 = lcA0;var stA1 = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).createOpen__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2();
vm.org_netbeans_html_json_spi_JSONCall(false).dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
{ gt = 22; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = lcA0;var stA1 = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).createMessage__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Object_2(lcA1);
vm.org_netbeans_html_json_spi_JSONCall(false).dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
    }
    X_22: for (;;) { IF: if (gt <= 22) {
return;

    }
}}}
};
c['notifySuccess__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.notifyError__VLjava_lang_Throwable_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 14; break IF; }
var stA0 = lcA0;var stA1 = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).createClose__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2();
vm.org_netbeans_html_json_spi_JSONCall(false).dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
{ gt = 22; break IF; }
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = lcA0;var stA1 = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).createError__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Throwable_2(lcA1);
vm.org_netbeans_html_json_spi_JSONCall(false).dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA0, stA1);
    }
    X_22: for (;;) { IF: if (gt <= 22) {
return;

    }
}}}
};
c['notifyError__VLjava_lang_Throwable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_JSONCall(false)._ctx.call(lcA0);var stA1 = new vm.org_netbeans_html_json_spi_JSONCall$1;
vm.org_netbeans_html_json_spi_JSONCall$1(false).constructor.cons__VLorg_netbeans_html_json_spi_JSONCall_2Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2.call(stA1, lcA0, lcA1);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.getMessage__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.toString__Ljava_lang_String_2(vm.org_netbeans_html_json_spi_JSONCall(false)._data.call(lcA0));
return stA0;

};
c['getMessage__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_impl_RcvrJSON_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_JSONCall(false)._whenDone.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_JSONCallfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_JSONCall', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_JSONCallfillInstOf });
      org_netbeans_html_json_spi_JSONCallfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/JSONCall';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_JSONCall_whenDone = null;
    this.fld_org_netbeans_html_json_spi_JSONCall_urlBefore = null;
    this.fld_org_netbeans_html_json_spi_JSONCall_urlAfter = null;
    this.fld_org_netbeans_html_json_spi_JSONCall_method = null;
    this.fld_org_netbeans_html_json_spi_JSONCall_data = null;
    this.fld_org_netbeans_html_json_spi_JSONCall_ctx = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_json_spi_JSONCall'] = vm.org_netbeans_html_json_spi_JSONCall;


vm.org_netbeans_html_json_spi_JSONCall$1 = function org_netbeans_html_json_spi_JSONCall$1() {
  var m;
  var CLS = org_netbeans_html_json_spi_JSONCall$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$ev = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall$1_val$ev = v; return this.fld_org_netbeans_html_json_spi_JSONCall$1_val$ev; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_JSONCall$1_this$0 = v; return this.fld_org_netbeans_html_json_spi_JSONCall$1_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_JSONCall_2Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_JSONCall$1(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_JSONCall$1(false)._val$ev.call(lcA0, lcA2);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_JSONCall$1(false)._val$ev.call(lcA0);var stA1 = vm.org_netbeans_html_json_spi_JSONCall(false).access$000__Lorg_netbeans_html_json_impl_RcvrJSON_2Lorg_netbeans_html_json_spi_JSONCall_2(vm.org_netbeans_html_json_spi_JSONCall$1(false)._this$0.call(lcA0));
stA0.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2(stA1);
return;

};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_JSONCall$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_JSONCall$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_JSONCall$1fillInstOf });
      org_netbeans_html_json_spi_JSONCall$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/JSONCall$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_JSONCall$1_val$ev = null;
    this.fld_org_netbeans_html_json_spi_JSONCall$1_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Runnable = link('java/lang/Runnable', function(f) { vm.java_lang_Runnable =  f; });

vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt = function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt;
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
    m = c.getError__Ljava_lang_Throwable_2 = function() {
  var  lcA0 = this;
return null;

};
    m.access = 1;
    m.cls = CLS;
    m = c.getException__Ljava_lang_Exception_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.getError__Ljava_lang_Throwable_2();
var lcA1 = stA0;
var stI0 = lcA1 != null && lcA1['$instOf_java_lang_Exception'] ? 1 : 0;
if ((stI0) == 0) { gt = 17; break IF; }
if (lcA1 !== null && !lcA1['$instOf_java_lang_Exception']) throw vm.java_lang_ClassCastException(true);
return lcA1;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

if ((lcA1) !== null) { gt = 23; break IF; }
return null;
    }
    X_23: for (;;) { IF: if (gt <= 23) {
var stA0 = new vm.java_lang_Exception;
vm.java_lang_Exception(false).constructor['cons__VLjava_lang_Throwable_2'].call(stA0, lcA1);
return stA0;

    }
}}}
};
    m.access = 17;
    m.cls = CLS;
    m = c.getValues___3Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return null;

};
    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/impl/RcvrJSON$MsgEvnt.dispatch';
};
    m.access = 1025;
    m.cls = CLS;
    m = c.createError__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Throwable_2 = function(lcA0) {
var stA0 = new vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1(false).constructor.cons__VLjava_lang_Throwable_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.createMessage__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2Ljava_lang_Object_2 = function(lcA0) {
var stA0 = new vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false).constructor.cons__VLjava_lang_Object_2.call(stA0, lcA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.createOpen__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function() {
var stA0 = new vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3(false).constructor.cons__V.call(stA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.createClose__Lorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function() {
var stA0 = new vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4(false).constructor.cons__V.call(stA0);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvntfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvntfillInstOf });
      org_netbeans_html_json_impl_RcvrJSON$MsgEvntfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt';
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

vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4 = function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onClose__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4fillInstOf });
      org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$4fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$4';
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

vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3 = function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).constructor.cons__V.call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onOpen__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3fillInstOf });
      org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$3fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$3';
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

vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2 = function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$value = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value = v; return this.fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value; };
    m = CLS.cons__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0, lcA1);
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).constructor.cons__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getValues___3Ljava_lang_Object_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0), 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 23; break IF; }
if (vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0) !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0), 1, vm.java_lang_Object)) throw vm.java_lang_ClassCastException(true);
if (vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0) !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0), 1, vm.java_lang_Object)) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0);{ gt = 34; break IF; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2(false)._val$value.call(lcA0));
    }
    X_34: for (;;) { IF: if (gt <= 34) {
return stA0;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2fillInstOf });
      org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$2_val$value = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1 = function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$t = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t = v; return this.fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t; };
    m = CLS.cons__VLjava_lang_Throwable_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1(false)._val$t.call(lcA0, lcA1);
vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt(false).constructor.cons__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getError__Ljava_lang_Throwable_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1(false)._val$t.call(lcA0);

};
    m.access = 1;
    m.cls = CLS;
    m = c.dispatch__VLorg_netbeans_html_json_impl_RcvrJSON_2 = function(lcA1) {
  var  lcA0 = this;
lcA1.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2(lcA0);
return;

};
    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1fillInstOf });
      org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON$MsgEvnt$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_RcvrJSON$MsgEvnt$1_val$t = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_io_IOException = link('java/io/IOException', function(f) { vm.java_io_IOException =  f; });

vm.org_netbeans_html_json_impl_JSONList = function org_netbeans_html_json_impl_JSONList() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSONList;
  if (!CLS.$class) {
    var pp = vm.java_util_ArrayList(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._proto = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSONList_proto = v; return this.fld_org_netbeans_html_json_impl_JSONList_proto; };
  m = c._name = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSONList_name = v; return this.fld_org_netbeans_html_json_impl_JSONList_name; };
  m = c._deps = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSONList_deps = v; return this.fld_org_netbeans_html_json_impl_JSONList_deps; };
  m = c._index = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSONList_index = v; return this.fld_org_netbeans_html_json_impl_JSONList_index; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2I_3Ljava_lang_String_2 = function(lcA1, lcA2, lcI3, lcA4) {
  var  lcA0 = this;
vm.java_util_ArrayList(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_json_impl_JSONList(false)._proto.call(lcA0, lcA1);
vm.org_netbeans_html_json_impl_JSONList(false)._name.call(lcA0, lcA2);
vm.org_netbeans_html_json_impl_JSONList(false)._deps.call(lcA0, lcA4);
vm.org_netbeans_html_json_impl_JSONList(false)._index.call(lcA0, lcI3);
return;

};
    m.access = 129;
    m.cls = CLS;
    m = c.init__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === null) { gt = 13; break IF; }
var stI0 = vm.java_lang_reflect_Array(false)['getLength__ILjava_lang_Object_2'](lcA1);
var stI1 = stI0;
var lcI2 = stI1;
if ((stI0) != 0) { gt = 14; break IF; }
    }
    X_13: for (;;) { IF: if (gt <= 13) {
return;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var lcI3 = 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if ((lcI3) >= (lcI2)) { gt = 41; break IF; }
var stA0 = vm.java_lang_reflect_Array(false)['get__Ljava_lang_Object_2Ljava_lang_Object_2I'](lcA1, lcI3);
var lcA4 = stA0;
var stI0 = vm.java_util_ArrayList(false)['add__ZLjava_lang_Object_2'].call(lcA0, lcA4);
lcI3++;
{ gt = 0; continue X_16; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {
return;

    }
}}}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.init__VLjava_util_Collection_2Ljava_lang_Object_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) === null) { gt = 13; break IF; }
var stI0 = vm.java_lang_reflect_Array(false)['getLength__ILjava_lang_Object_2'](lcA1);
var stI1 = stI0;
var lcI2 = stI1;
if ((stI0) != 0) { gt = 14; break IF; }
    }
    X_13: for (;;) { IF: if (gt <= 13) {
return;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var lcI3 = 0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

if ((lcI3) >= (lcI2)) { gt = 43; break IF; }
var stA0 = vm.java_lang_reflect_Array(false)['get__Ljava_lang_Object_2Ljava_lang_Object_2I'](lcA1, lcI3);
var lcA4 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA0,lcA4);
lcI3++;
{ gt = 0; continue X_16; }
    }
    X_43: for (;;) { IF: if (gt <= 43) {
return;

    }
}}}}}
};
    m.access = 9;
    m.cls = CLS;
    m = c.add__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = vm.java_util_ArrayList(false)['add__ZLjava_lang_Object_2'].call(lcA0, lcA1);
var lcI2 = stI0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcI2;

};
c['add__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = vm.java_util_ArrayList(false)['addAll__ZLjava_util_Collection_2'].call(lcA0, lcA1);
var lcI2 = stI0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcI2;

};
c['addAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.addAll__ZILjava_util_Collection_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stI0 = vm.java_util_ArrayList(false)['addAll__ZILjava_util_Collection_2'].call(lcA0, lcI1, lcA2);
var lcI3 = stI0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcI3;

};
c['addAll__ZILjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.remove__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = vm.java_util_ArrayList(false)['remove__ZLjava_lang_Object_2'].call(lcA0, lcA1);
var lcI2 = stI0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcI2;

};
c['remove__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.clear__V = function() {
  var  lcA0 = this;
vm.java_util_ArrayList(false)['clear__V'].call(lcA0);
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return;

};
c['clear__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.removeAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = vm.java_util_ArrayList(false)['removeAll__ZLjava_util_Collection_2'].call(lcA0, lcA1);
var lcI2 = stI0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcI2;

};
c['removeAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.retainAll__ZLjava_util_Collection_2 = function(lcA1) {
  var  lcA0 = this;
var stI0 = vm.java_util_ArrayList(false)['retainAll__ZLjava_util_Collection_2'].call(lcA0, lcA1);
var lcI2 = stI0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcI2;

};
c['retainAll__ZLjava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stA0 = vm.java_util_ArrayList(false)['set__Ljava_lang_Object_2ILjava_lang_Object_2'].call(lcA0, lcI1, lcA2);
var lcA3 = stA0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcA3;

};
c['set__Ljava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.add__VILjava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
vm.java_util_ArrayList(false)['add__VILjava_lang_Object_2'].call(lcA0, lcI1, lcA2);
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return;

};
c['add__VILjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.remove__Ljava_lang_Object_2I = function(lcI1) {
  var  lcA0 = this;
var stA0 = vm.java_util_ArrayList(false)['remove__Ljava_lang_Object_2I'].call(lcA0, lcI1);
var lcA2 = stA0;
vm.org_netbeans_html_json_impl_JSONList(false).notifyChange__V.call(lcA0);
return lcA2;

};
c['remove__Ljava_lang_Object_2I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA0);
var lcA1 = stA0;
var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) != 0) { gt = 17; break IF; }
return "[]";
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var lcA2 = "";
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA3 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(91));
    }
    X_35: for (;;) { IF: if (gt <= 35) {

var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) == 0) { gt = 74; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA1);
var lcA4 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA2);
var stA0 = lcA3;var stA1 = vm.org_netbeans_html_json_impl_JSON(false).toJSON__Ljava_lang_String_2Ljava_lang_Object_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var lcA2 = ",";
{ gt = 0; continue X_35; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA3,(93));
var stA0 = invoker.toString__Ljava_lang_String_2(lcA3);
return stA0;

    }
}}}}
};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.notifyChange__V = function() {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSONList(false)._proto.call(lcA0).getContext__Lnet_java_html_BrwsrCtx_2();
var stA1 = new vm.org_netbeans_html_json_impl_JSONList$1;
vm.org_netbeans_html_json_impl_JSONList$1(false).constructor.cons__VLorg_netbeans_html_json_impl_JSONList_2.call(stA1, lcA0);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.clone__Lorg_netbeans_html_json_impl_JSONList_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_UnsupportedOperationException;
vm.java_lang_UnsupportedOperationException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }

};
    m.access = 1;
    m.cls = CLS;
    m = c.koData__Ljava_lang_Object_2Ljava_util_Collection_2Lorg_netbeans_html_json_impl_Bindings_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI1 = invoker.size__I(lcA0);
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, stI1);
var stA0 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1);
var lcA2 = stA0;
var lcI3 = 0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

if ((lcI3) >= ((lcA2).length)) { gt = 49; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(Array.at(lcA2, lcI3), lcA1);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 43; break IF; }
Array.at(lcA2, lcI3, lcA4);
    }
    X_43: for (;;) { IF: if (gt <= 43) {
lcI3++;
{ gt = 0; continue X_18; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = lcA1.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2(lcA2);
return stA0;

    }
}}}}
};
    m.access = 24;
    m.cls = CLS;
    m = c.koData__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2Z(vm.org_netbeans_html_json_impl_JSONList(false)._proto.call(lcA0), 1);
var stA0 = vm.org_netbeans_html_json_impl_JSONList(false).koData__Ljava_lang_Object_2Ljava_util_Collection_2Lorg_netbeans_html_json_impl_Bindings_2(stA0, stA1);
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.clone__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
var stA0 = lcA0.clone__Lorg_netbeans_html_json_impl_JSONList_2();
return stA0;

};
c['clone__Ljava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return vm.org_netbeans_html_json_impl_JSONList(false)._proto.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return vm.org_netbeans_html_json_impl_JSONList(false)._name.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200___3Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return vm.org_netbeans_html_json_impl_JSONList(false)._deps.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$300__ILorg_netbeans_html_json_impl_JSONList_2 = function(lcA0) {
return vm.org_netbeans_html_json_impl_JSONList(false)._index.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSONListfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSONList', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSONListfillInstOf });
      org_netbeans_html_json_impl_JSONListfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSONList';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_JSONList_proto = null;
    this.fld_org_netbeans_html_json_impl_JSONList_name = null;
    this.fld_org_netbeans_html_json_impl_JSONList_deps = null;
    this.fld_org_netbeans_html_json_impl_JSONList_index = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_UnsupportedOperationException = link('java/lang/UnsupportedOperationException', function(f) { vm.java_lang_UnsupportedOperationException =  f; });

vm.org_netbeans_html_json_impl_JSONList$1 = function org_netbeans_html_json_impl_JSONList$1() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSONList$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_JSONList$1_this$0 = v; return this.fld_org_netbeans_html_json_impl_JSONList$1_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_impl_JSONList_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_JSONList$1(false)._this$0.call(lcA0, lcA1);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_impl_JSONList(false).access$000__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_impl_JSONList_2(vm.org_netbeans_html_json_impl_JSONList$1(false)._this$0.call(lcA0));
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).getBindings__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2Z(stA0, 0);
var lcA1 = stA0;
if ((lcA1) === null) { gt = 96; break IF; }
var stA0 = lcA1;var stA1 = vm.org_netbeans_html_json_impl_JSONList(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2(vm.org_netbeans_html_json_impl_JSONList$1(false)._this$0.call(lcA0));
stA0.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(stA1, null, null);
var stA0 = vm.org_netbeans_html_json_impl_JSONList(false).access$200___3Ljava_lang_String_2Lorg_netbeans_html_json_impl_JSONList_2(vm.org_netbeans_html_json_impl_JSONList$1(false)._this$0.call(lcA0));
var lcA2 = stA0;
var lcI3 = (lcA2).length;
var lcI4 = 0;
    }
    X_43: for (;;) { IF: if (gt <= 43) {

if ((lcI4) >= (lcI3)) { gt = 69; break IF; }
var lcA5 = Array.at(lcA2, lcI4);
lcA1.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5, null, null);
lcI4++;
{ gt = 0; continue X_43; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {

var stI0 = vm.org_netbeans_html_json_impl_JSONList(false).access$300__ILorg_netbeans_html_json_impl_JSONList_2(vm.org_netbeans_html_json_impl_JSONList$1(false)._this$0.call(lcA0));
if ((stI0) < 0) { gt = 96; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_JSONList(false).access$000__Lorg_netbeans_html_json_spi_Proto_2Lorg_netbeans_html_json_impl_JSONList_2(vm.org_netbeans_html_json_impl_JSONList$1(false)._this$0.call(lcA0));
var stI1 = vm.org_netbeans_html_json_impl_JSONList(false).access$300__ILorg_netbeans_html_json_impl_JSONList_2(vm.org_netbeans_html_json_impl_JSONList$1(false)._this$0.call(lcA0));
vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).notifyProtoChange__VLorg_netbeans_html_json_spi_Proto_2I(stA0, stI1);
    }
    X_96: for (;;) { IF: if (gt <= 96) {
return;

    }
}}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSONList$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSONList$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSONList$1fillInstOf });
      org_netbeans_html_json_impl_JSONList$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSONList$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_JSONList$1_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_reflect_Array = link('java/lang/reflect/Array', function(f) { vm.java_lang_reflect_Array =  f; });
vm.java_util_ArrayList = link('java/util/ArrayList', function(f) { vm.java_util_ArrayList =  f; });
vm.java_lang_NumberFormatException = link('java/lang/NumberFormatException', function(f) { vm.java_lang_NumberFormatException =  f; });
vm.java_lang_Float = link('java/lang/Float', function(f) { vm.java_lang_Float =  f; });
vm.java_lang_Byte = link('java/lang/Byte', function(f) { vm.java_lang_Byte =  f; });
vm.java_lang_Short = link('java/lang/Short', function(f) { vm.java_lang_Short =  f; });
vm.java_lang_Long = link('java/lang/Long', function(f) { vm.java_lang_Long =  f; });
vm.java_lang_Integer = link('java/lang/Integer', function(f) { vm.java_lang_Integer =  f; });
vm.java_lang_Character = link('java/lang/Character', function(f) { vm.java_lang_Character =  f; });
vm.java_lang_String = link('java/lang/String', function(f) { vm.java_lang_String =  f; });
vm.java_lang_Boolean = link('java/lang/Boolean', function(f) { vm.java_lang_Boolean =  f; });
vm.java_lang_Number = link('java/lang/Number', function(f) { vm.java_lang_Number =  f; });
vm.java_lang_Double = link('java/lang/Double', function(f) { vm.java_lang_Double =  f; });

vm.org_netbeans_html_json_spi_WSTransfer = function org_netbeans_html_json_spi_WSTransfer() {
  var m;
  var CLS = org_netbeans_html_json_spi_WSTransfer;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/spi/WSTransfer.open';
};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/spi/WSTransfer.send';
};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/WSTransfer.close';
};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_WSTransferfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_WSTransfer', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_WSTransferfillInstOf });
      org_netbeans_html_json_spi_WSTransferfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/WSTransfer';
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
exports['org_netbeans_html_json_spi_WSTransfer'] = vm.org_netbeans_html_json_spi_WSTransfer;


vm.org_netbeans_html_json_spi_Transfer = function org_netbeans_html_json_spi_Transfer() {
  var m;
  var CLS = org_netbeans_html_json_spi_Transfer;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  throw 'no code found for org/netbeans/html/json/spi/Transfer.extract';
};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/Transfer.toJSON';
};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/Transfer.loadJSON';
};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_TransferfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Transfer', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_TransferfillInstOf });
      org_netbeans_html_json_spi_TransferfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Transfer';
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
exports['org_netbeans_html_json_spi_Transfer'] = vm.org_netbeans_html_json_spi_Transfer;


vm.org_netbeans_html_json_impl_JSON$EmptyTech = function org_netbeans_html_json_impl_JSON$EmptyTech() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$EmptyTech;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_EMPTY = null;
  m = c._EMPTY = function (v) {  if (arguments.length == 1) CLS.fld_EMPTY = v; return CLS.fld_EMPTY; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return lcA1;

};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
return;

};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
return;

};
c['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
return;

};
c['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
return lcA1;

};
c['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI4 = 0;
    }
    X_3: for (;;) { IF: if (gt <= 3) {

if ((lcI4) >= ((lcA3).length)) { gt = 21; break IF; }
Array.at(lcA3, lcI4, null);
lcI4++;
{ gt = 0; continue X_3; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {
return;

    }
}}}
};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = lcA1;var stA1 = new vm.java_lang_UnsupportedOperationException;
vm.java_lang_UnsupportedOperationException(false).constructor['cons__V'].call(stA1);
stA0.notifyError__VLjava_lang_Throwable_2(stA1);
return;

};
c['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA2);
return stA0;

};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = new vm.java_io_IOException;
vm.java_io_IOException(false).constructor['cons__VLjava_lang_String_2'].call(stA0, "Not supported");
{ var stA0 = stA0; throw stA0; }

};
c['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runSafe__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
invoker.run__V(lcA1);
return;

};
c['runSafe__VLjava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.open__Ljava_lang_Void_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA2;var stA1 = new vm.java_lang_UnsupportedOperationException;
vm.java_lang_UnsupportedOperationException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, "WebSockets not supported!");
stA0.notifyError__VLjava_lang_Throwable_2(stA1);
return null;

};
    m.access = 1;
    m.cls = CLS;
    m = c.send__VLjava_lang_Void_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLjava_lang_Void_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.close__VLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_java_lang_Void']) throw vm.java_lang_ClassCastException(true);
lcA0.close__VLjava_lang_Void_2(lcA1);
return;

};
c['close__VLjava_lang_Object_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_java_lang_Void']) throw vm.java_lang_ClassCastException(true);
lcA0.send__VLjava_lang_Void_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return;

};
c['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = lcA0.open__Ljava_lang_Void_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2(lcA1, lcA2);
return stA0;

};
c['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'] = m;

    m.access = 4161;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_impl_JSON$EmptyTech_2 = function() {
return vm.org_netbeans_html_json_impl_JSON$EmptyTech(false)._EMPTY();

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.org_netbeans_html_json_impl_JSON$EmptyTech;
vm.org_netbeans_html_json_impl_JSON$EmptyTech(false).constructor.cons__V.call(stA0);
vm.org_netbeans_html_json_impl_JSON$EmptyTech(false)._EMPTY(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$EmptyTechfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$EmptyTech', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_Transfer(false)['fillInstOf'](x);
      vm.org_netbeans_html_json_spi_WSTransfer(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$EmptyTechfillInstOf });
      org_netbeans_html_json_impl_JSON$EmptyTechfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$EmptyTech';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_json_impl_JSON$EmptyTech(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_context_spi_Contexts = link('org/netbeans/html/context/spi/Contexts', function(f) { vm.org_netbeans_html_context_spi_Contexts =  f; });

vm.org_netbeans_html_json_spi_Technology = function org_netbeans_html_json_spi_Technology() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.wrapModel';
};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.toModel';
};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.bind';
};
c['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.valueHasMutated';
};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.expose';
};
c['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.applyBindings__VLjava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.applyBindings';
};
c['applyBindings__VLjava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.wrapArray';
};
c['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.runSafe__VLjava_lang_Runnable_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/Technology.runSafe';
};
c['runSafe__VLjava_lang_Runnable_2'] = m;

    m.anno = {"Ljava/lang/Deprecated;" : {

}

    };
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_TechnologyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_TechnologyfillInstOf });
      org_netbeans_html_json_spi_TechnologyfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology';
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
exports['org_netbeans_html_json_spi_Technology'] = vm.org_netbeans_html_json_spi_Technology;

vm.java_lang_Deprecated = link('java/lang/Deprecated', function(f) { vm.java_lang_Deprecated =  f; });

vm.net_java_html_json_OnPropertyChange = function net_java_html_json_OnPropertyChange() {
  var m;
  var CLS = net_java_html_json_OnPropertyChange;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.value___3Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/json/OnPropertyChange.value';
};
c['value___3Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_OnPropertyChangefillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_OnPropertyChange', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_OnPropertyChangefillInstOf });
      net_java_html_json_OnPropertyChangefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/OnPropertyChange';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
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
exports['net_java_html_json_OnPropertyChange'] = vm.net_java_html_json_OnPropertyChange;


vm.net_java_html_json_OnReceive = function net_java_html_json_OnReceive() {
  var m;
  var CLS = net_java_html_json_OnReceive;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.url__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/json/OnReceive.url';
};
c['url__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.jsonp__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/json/OnReceive.jsonp';
};
c['jsonp__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.data__Ljava_lang_Class_2 = function() {
  throw 'no code found for net/java/html/json/OnReceive.data';
};
c['data__Ljava_lang_Class_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.method__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/json/OnReceive.method';
};
c['method__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.onError__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/json/OnReceive.onError';
};
c['onError__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_OnReceivefillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_OnReceive', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_OnReceivefillInstOf });
      net_java_html_json_OnReceivefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/OnReceive';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
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
exports['net_java_html_json_OnReceive'] = vm.net_java_html_json_OnReceive;


vm.net_java_html_json_Property = function net_java_html_json_Property() {
  var m;
  var CLS = net_java_html_json_Property;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.name__Ljava_lang_String_2 = function() {
  throw 'no code found for net/java/html/json/Property.name';
};
c['name__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.type__Ljava_lang_Class_2 = function() {
  throw 'no code found for net/java/html/json/Property.type';
};
c['type__Ljava_lang_Class_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.array__Z = function() {
  throw 'no code found for net/java/html/json/Property.array';
};
c['array__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_json_PropertyfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_json_Property', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: net_java_html_json_PropertyfillInstOf });
      net_java_html_json_PropertyfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/json/Property';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9729;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : []
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
exports['net_java_html_json_Property'] = vm.net_java_html_json_Property;


vm.org_netbeans_html_json_impl_Bindings = function org_netbeans_html_json_impl_Bindings() {
  var m;
  var CLS = org_netbeans_html_json_impl_Bindings;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._data = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_Bindings_data = v; return this.fld_org_netbeans_html_json_impl_Bindings_data; };
  m = c._bp = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_Bindings_bp = v; return this.fld_org_netbeans_html_json_impl_Bindings_bp; };
  CLS.fld_$assertionsDisabled = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS.fld_$assertionsDisabled = v; return CLS.fld_$assertionsDisabled; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Technology_2 = function(lcA1) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.registerProperty__Lorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Z = function(lcA1, lcI2, lcA3, lcA4, lcI5) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_PropertyBindingAccessor(false).create__Lorg_netbeans_html_json_spi_PropertyBinding_2Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_impl_Bindings_2Ljava_lang_String_2ILjava_lang_Object_2Z(lcA4, lcA0, lcA1, lcI2, lcA3, lcI5);
return stA0;

};
    m.access = 1;
    m.cls = CLS;
    m = c.apply__Lorg_netbeans_html_json_impl_Bindings_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA0, lcA1) {
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).findTechnology__Lorg_netbeans_html_json_spi_Technology_2Lnet_java_html_BrwsrCtx_2(lcA0);
var lcA2 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_Bindings(false).apply__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Technology_2(lcA2);
return stA0;

};
    m.access = 9;
    m.cls = CLS;
    m = c.apply__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Technology_2 = function(lcA0) {
var stA0 = new vm.org_netbeans_html_json_impl_Bindings;
vm.org_netbeans_html_json_impl_Bindings(false).constructor.cons__VLorg_netbeans_html_json_spi_Technology_2.call(stA0, lcA0);
return stA0;

};
    m.access = 10;
    m.cls = CLS;
    m = c.finish__VLjava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_impl_Bindings(false)._$assertionsDisabled()) != 0) { gt = 21; break IF; }
if ((vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0)) === null) { gt = 21; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_21: for (;;) { IF: if (gt <= 21) {

var stI0 = vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0) != null && vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0)['$instOf_org_netbeans_html_json_spi_Technology$BatchInit'] ? 1 : 0;
if ((stI0) == 0) { gt = 57; break IF; }
if (vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0) !== null && !vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0)['$instOf_org_netbeans_html_json_spi_Technology$BatchInit']) throw vm.java_lang_ClassCastException(true);
var lcA4 = vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0);
var stA1 = invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2(lcA4,lcA1, lcA2, lcA3);
vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0, stA1);
{ gt = 165; break IF; }
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stA1 = invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0),lcA1);
vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0, stA1);
var lcA4 = lcA2;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_82: for (;;) { IF: if (gt <= 82) {

if ((lcI6) >= (lcI5)) { gt = 118; break IF; }
var lcA7 = Array.at(lcA4, lcI6);
invoker.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0),lcA7, lcA1, vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0));
lcI6++;
{ gt = 0; continue X_82; }
    }
    X_118: for (;;) { IF: if (gt <= 118) {

var lcA4 = lcA3;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_129: for (;;) { IF: if (gt <= 129) {

if ((lcI6) >= (lcI5)) { gt = 165; break IF; }
var lcA7 = Array.at(lcA4, lcI6);
invoker.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0),lcA7, lcA1, vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0));
lcI6++;
{ gt = 0; continue X_129; }
    }
    X_165: for (;;) { IF: if (gt <= 165) {
return;

    }
}}}}}}}
};
    m.access = 17;
    m.cls = CLS;
    m = c.koData__Ljava_lang_Object_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0);

};
    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0) != null && vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0)['$instOf_org_netbeans_html_json_spi_Technology$ValueMutated'] ? 1 : 0;
if ((stI0) == 0) { gt = 52; break IF; }
if (vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0) !== null && !vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0)['$instOf_org_netbeans_html_json_spi_Technology$ValueMutated']) throw vm.java_lang_ClassCastException(true);
var lcA4 = vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0);
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA2, lcA0);
var lcA5 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).find__Ljava_lang_Object_2Ljava_lang_Object_2Lorg_netbeans_html_json_impl_Bindings_2(lcA3, lcA0);
var lcA6 = stA0;
invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA4,vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0), lcA1, lcA5, lcA6);
{ gt = 66; break IF; }
    }
    X_52: for (;;) { IF: if (gt <= 52) {

invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2(vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0),vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0), lcA1);
    }
    X_66: for (;;) { IF: if (gt <= 66) {
return;

    }
}}}
};
    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__V = function() {
  var  lcA0 = this;
invoker.applyBindings__VLjava_lang_Object_2(vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0),vm.org_netbeans_html_json_impl_Bindings(false)._data.call(lcA0));
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = invoker.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_Bindings(false)._bp.call(lcA0),lcA1);
return stA0;

};
    m.access = 0;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(vm.org_netbeans_html_json_impl_Bindings(false).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
vm.org_netbeans_html_json_impl_Bindings(false)._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_BindingsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_Bindings', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_BindingsfillInstOf });
      org_netbeans_html_json_impl_BindingsfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/Bindings';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_json_impl_Bindings(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_Bindings_data = null;
    this.fld_org_netbeans_html_json_impl_Bindings_bp = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_AssertionError = link('java/lang/AssertionError', function(f) { vm.java_lang_AssertionError =  f; });

vm.org_netbeans_html_json_impl_JSON$1 = function org_netbeans_html_json_impl_JSON$1() {
  var m;
  var CLS = org_netbeans_html_json_impl_JSON$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_JSON$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_JSON$1', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_JSON$1fillInstOf });
      org_netbeans_html_json_impl_JSON$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/JSON$1';
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

vm.org_netbeans_html_json_impl_ModelProcessor$GetSet = function org_netbeans_html_json_impl_ModelProcessor$GetSet() {
  var m;
  var CLS = org_netbeans_html_json_impl_ModelProcessor$GetSet;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name; };
  m = c._getter = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter; };
  m = c._setter = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter; };
  m = c._type = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type; };
  m = c._readOnly = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly; };
    m = CLS.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z = function(lcA1, lcA2, lcA3, lcA4, lcI5) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._name.call(lcA0, lcA1);
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._getter.call(lcA0, lcA2);
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._setter.call(lcA0, lcA3);
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._type.call(lcA0, lcA4);
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._readOnly.call(lcA0, lcI5);
return;

};
    m.access = 0;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_ModelProcessor$GetSetfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ModelProcessor$GetSetfillInstOf });
      org_netbeans_html_json_impl_ModelProcessor$GetSetfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ModelProcessor$GetSet';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_name = null;
    this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_getter = null;
    this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_setter = null;
    this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_type = null;
    this.fld_org_netbeans_html_json_impl_ModelProcessor$GetSet_readOnly = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_impl_ModelProcessor$Prprt = function org_netbeans_html_json_impl_ModelProcessor$Prprt() {
  var m;
  var CLS = org_netbeans_html_json_impl_ModelProcessor$Prprt;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._e = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e; };
  m = c._tm = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm; };
  m = c._p = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p; };
    m = CLS.cons__VLjavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Lnet_java_html_json_Property_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._e.call(lcA0, lcA1);
vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._tm.call(lcA0, lcA2);
vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._p.call(lcA0, lcA3);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.name__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = invoker.name__Ljava_lang_String_2(vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._p.call(lcA0));
return stA0;

};
    m.access = 0;
    m.cls = CLS;
    m = c.array__Z = function() {
  var  lcA0 = this;
var stI0 = invoker.array__Z(vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._p.call(lcA0));
return stI0;

};
    m.access = 0;
    m.cls = CLS;
    m = c.typeName__Ljava_lang_String_2Ljavax_annotation_processing_ProcessingEnvironment_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.type__Ljava_lang_Class_2(vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._p.call(lcA0));
var stA0 = invoker.getName__Ljava_lang_String_2(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_annotation_IncompleteAnnotationException']) {var stA0 = e;{ gt = 13; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_annotation_AnnotationTypeMismatchException']) {var stA0 = e;{ gt = 19; break IF; }}
throw e;
}return stA0;
    }
    X_13: for (;;) { IF: if (gt <= 13) {
var lcA3 = stA0;
var lcA2 = lcA3;
{ gt = 22; break IF; }
    }
    X_19: for (;;) { IF: if (gt <= 19) {
var lcA3 = stA0;
var lcA2 = lcA3;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).getAnnoValues__Ljava_util_List_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2(lcA1, vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._e.call(lcA0), vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false)._tm.call(lcA0));
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 109; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
var lcA4 = stA0;
var stA0 = invoker.toString__Ljava_lang_String_2(lcA4);
var stA0 = invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2(stA0," ", "");
var lcA5 = stA0;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA5,"type=");
if ((stI0) == 0) { gt = 106; break IF; }
var stI0 = invoker.endsWith__ZLjava_lang_String_2(lcA5,".class");
if ((stI0) == 0) { gt = 106; break IF; }
var stI2 = invoker.length__I(lcA5);
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA5,5, (stI2).sub32((6)));
return stA0;
    }
    X_106: for (;;) { IF: if (gt <= 106) {
{ gt = 0; continue X_40; }
    }
    X_109: for (;;) { IF: if (gt <= 109) {

{ var stA0 = lcA2; throw lcA2; }

    }
}}}}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.wrap___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((lcA2).length) != 0) { gt = 10; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/impl/ModelProcessor$Prprt;', vm.org_netbeans_html_json_impl_ModelProcessor$Prprt, 0);
return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_CLASS']())) { gt = 54; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"");
var stA3 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,stA3);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var lcA3 = lcA1;
var lcA4 = null;
var stA0 = invoker.getAnnotationMirrors__Ljava_util_List_2(lcA3);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_75: for (;;) { IF: if (gt <= 75) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 192; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var stA0 = invoker.getElementValues__Ljava_util_Map_2(lcA6);
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA7 = stA0;
    }
    X_116: for (;;) { IF: if (gt <= 116) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 189; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) throw vm.java_lang_ClassCastException(true);
var lcA8 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"properties");
if ((stI0) == 0) { gt = 186; break IF; }
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationValue']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getValue__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_java_util_List']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
{ gt = 189; break IF; }
    }
    X_186: for (;;) { IF: if (gt <= 186) {
{ gt = 0; continue X_116; }
    }
    X_189: for (;;) { IF: if (gt <= 189) {
{ gt = 0; continue X_75; }
    }
    X_192: for (;;) { IF: if (gt <= 192) {

if ((lcA4) === null) { gt = 209; break IF; }
var stI0 = invoker.size__I(lcA4);
if ((stI0) == ((lcA2).length)) { gt = 249; break IF; }
    }
    X_209: for (;;) { IF: if (gt <= 209) {

var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(lcA0);
var stA1 = vm.javax_tools_Diagnostic$Kind(false)['_ERROR']();var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA4);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,stA1, stA2, lcA1);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/impl/ModelProcessor$Prprt;', vm.org_netbeans_html_json_impl_ModelProcessor$Prprt, 0);
return stA0;
    }
    X_249: for (;;) { IF: if (gt <= 249) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/impl/ModelProcessor$Prprt;', vm.org_netbeans_html_json_impl_ModelProcessor$Prprt, (lcA2).length);
var lcA5 = stA0;
var lcI6 = 0;
    }
    X_259: for (;;) { IF: if (gt <= 259) {

if ((lcI6) >= ((lcA5).length)) { gt = 314; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA4,lcI6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationValue']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getValue__Ljava_lang_Object_2(stA0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stA0 = lcA5;var stI1 = lcI6;var stA2 = new vm.org_netbeans_html_json_impl_ModelProcessor$Prprt;
vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false).constructor.cons__VLjavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Lnet_java_html_json_Property_2.call(stA2, lcA1, lcA7, Array.at(lcA2, lcI6));
Array.at(stA0, stI1, stA2);
lcI6++;
{ gt = 0; continue X_259; }
    }
    X_314: for (;;) { IF: if (gt <= 314) {

return lcA5;

    }
}}}}}}}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_ModelProcessor$PrprtfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ModelProcessor$Prprt', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ModelProcessor$PrprtfillInstOf });
      org_netbeans_html_json_impl_ModelProcessor$PrprtfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ModelProcessor$Prprt';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_e = null;
    this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_tm = null;
    this.fld_org_netbeans_html_json_impl_ModelProcessor$Prprt_p = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.javax_tools_Diagnostic$Kind = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_tools_Diagnostic$Kind;
  return link('javax/tools/Diagnostic$Kind', function(f) { vm.javax_tools_Diagnostic$Kind = f;})(instance);
}
vm.javax_lang_model_element_ElementKind = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_element_ElementKind;
  return link('javax/lang/model/element/ElementKind', function(f) { vm.javax_lang_model_element_ElementKind = f;})(instance);
}

vm.org_netbeans_html_json_impl_ModelProcessor = function org_netbeans_html_json_impl_ModelProcessor() {
  var m;
  var CLS = org_netbeans_html_json_impl_ModelProcessor;
  if (!CLS.$class) {
    var pp = vm.javax_annotation_processing_AbstractProcessor(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_LOG = null;
  m = c._LOG = function (v) {  if (arguments.length == 1) CLS.fld_LOG = v; return CLS.fld_LOG; };
  m = c._models = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor_models = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor_models; };
  m = c._verify = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_impl_ModelProcessor_verify = v; return this.fld_org_netbeans_html_json_impl_ModelProcessor_verify; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
vm.javax_annotation_processing_AbstractProcessor(false).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_WeakHashMap;
vm.java_util_WeakHashMap(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false)._models.call(stA0, stA1);
var stA0 = lcA0;var stA1 = new vm.java_util_WeakHashMap;
vm.java_util_WeakHashMap(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false)._verify.call(stA0, stA1);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI3 = 1;
var stA0 = invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2(lcA2,vm.net_java_html_json_Model(false).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 53; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).processModel__ZLjavax_lang_model_element_Element_2.call(lcA0, lcA5);
if ((stI0) != 0) { gt = 50; break IF; }
var lcI3 = 0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {
{ gt = 0; continue X_17; }
    }
    X_53: for (;;) { IF: if (gt <= 53) {

var stI0 = invoker.processingOver__Z(lcA2);
if ((stI0) == 0) { gt = 375; break IF; }
invoker.clear__V(vm.org_netbeans_html_json_impl_ModelProcessor(false)._models.call(lcA0));
var stA0 = invoker.entrySet__Ljava_util_Set_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._verify.call(lcA0));
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 366; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2(stA0,lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA7 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,lcA7);
var lcA8 = stA0;
if ((lcA8) !== null) { gt = 168; break IF; }
{ gt = 0; continue X_87; }
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA8,vm.net_java_html_json_Model(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) throw vm.java_lang_ClassCastException(true);
var lcA10 = stA0;
if ((lcA10) !== null) { gt = 190; break IF; }
{ gt = 0; continue X_87; }
    }
    X_190: for (;;) { IF: if (gt <= 190) {

var stA2 = invoker.properties___3Lnet_java_html_json_Property_2(lcA10);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false).wrap___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0), lcA8, stA2);
var lcA9 = stA0;
var lcA11 = lcA9;
var lcI12 = (lcA11).length;
var lcI13 = 0;
    }
    X_220: for (;;) { IF: if (gt <= 220) {

if ((lcI13) >= (lcI12)) { gt = 363; break IF; }
var lcA14 = Array.at(lcA11, lcI13);
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA15 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA16 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA17 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA14, lcA15, lcA16, lcA17);
var lcA18 = stA0;
if ((Array.at(lcA16, 0)) == 0) { gt = 285; break IF; }
{ gt = 357; break IF; }
    }
    X_285: for (;;) { IF: if (gt <= 285) {

if ((Array.at(lcA17, 0)) == 0) { gt = 295; break IF; }
{ gt = 357; break IF; }
    }
    X_295: for (;;) { IF: if (gt <= 295) {

if ((Array.at(lcA15, 0)) == 0) { gt = 305; break IF; }
{ gt = 357; break IF; }
    }
    X_305: for (;;) { IF: if (gt <= 305) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("java.lang.String",lcA18);
if ((stI0) == 0) { gt = 318; break IF; }
{ gt = 357; break IF; }
    }
    X_318: for (;;) { IF: if (gt <= 318) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"The type ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," should be defined by @Model annotation");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA2 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, stA2);
    }
    X_357: for (;;) { IF: if (gt <= 357) {
lcI13++;
{ gt = 0; continue X_220; }
    }
    X_363: for (;;) { IF: if (gt <= 363) {
{ gt = 0; continue X_87; }
    }
    X_366: for (;;) { IF: if (gt <= 366) {

invoker.clear__V(vm.org_netbeans_html_json_impl_ModelProcessor(false)._verify.call(lcA0));
    }
    X_375: for (;;) { IF: if (gt <= 375) {

return lcI3;

    }
}}}}}}}}}}}}}}}}
};
c['process__ZLjava_util_Set_2Ljavax_annotation_processing_RoundEnvironment_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.getMessager__Ljavax_annotation_processing_Messager_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2(stA0,vm.javax_tools_Diagnostic$Kind(false)['_ERROR'](), lcA1, lcA2);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.processModel__ZLjavax_lang_model_element_Element_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 1;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA1,vm.net_java_html_json_Model(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) throw vm.java_lang_ClassCastException(true);
var lcA3 = stA0;
if ((lcA3) !== null) { gt = 20; break IF; }
return 1;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findPkgName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA1);
var lcA4 = stA0;
var stA0 = invoker.className__Ljava_lang_String_2(lcA3);
var lcA6 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._models.call(lcA0),lcA1, lcA6);
try {var stA0 = new vm.java_io_StringWriter;
vm.java_io_StringWriter(false).constructor['cons__V'].call(stA0);
var lcA7 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA9 = stA0;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
var stA0 = new vm.java_util_HashMap;
vm.java_util_HashMap(false).constructor['cons__V'].call(stA0);
var lcA11 = stA0;
var stA0 = new vm.java_util_HashMap;
vm.java_util_HashMap(false).constructor['cons__V'].call(stA0);
var lcA12 = stA0;
var stA2 = invoker.properties___3Lnet_java_html_json_Property_2(lcA3);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).createProps___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2.call(lcA0, lcA1, stA2);
var lcA13 = stA0;
var stA3 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateComputedProperties__ZLjava_io_Writer_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_Collection_2Ljava_util_Collection_2Ljava_util_Map_2.call(lcA0, lcA7, lcA13, stA3, lcA9, lcA11);
if ((stI0) != 0) { gt = 137; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_137: for (;;) { IF: if (gt <= 137) {
try {
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateOnChange__ZLjavax_lang_model_element_Element_2Ljava_util_Map_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2Ljava_util_Map_2.call(lcA0, lcA1, lcA11, lcA13, lcA6, lcA12);
if ((stI0) != 0) { gt = 155; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_155: for (;;) { IF: if (gt <= 155) {
try {
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateProperties__ZLjavax_lang_model_element_Element_2Ljava_io_Writer_2Ljava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_List_2Ljava_util_Map_2Ljava_util_Map_2.call(lcA0, lcA1, lcA7, lcA6, lcA13, lcA9, lcA11, lcA12);
if ((stI0) != 0) { gt = 177; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_177: for (;;) { IF: if (gt <= 177) {
try {
var stA4 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateFunctions__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2.call(lcA0, lcA1, lcA7, lcA6, stA4, lcA10);
if ((stI0) != 0) { gt = 199; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_199: for (;;) { IF: if (gt <= 199) {
try {
var stI0 = invoker.size__I(lcA10);
var lcI14 = (stI0).div32(2);
var lcI15 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_213: for (;;) { IF: if (gt <= 213) {
try {
var stI1 = invoker.size__I(lcA10);
if ((lcI15) >= (stI1)) { gt = 292; break IF; }
var lcA16 = lcA13;
var lcI17 = (lcA16).length;
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_237: for (;;) { IF: if (gt <= 237) {
try {
if ((lcI18) >= (lcI17)) { gt = 286; break IF; }
var lcA19 = Array.at(lcA16, lcI18);
var stA0 = lcA19.name__Ljava_lang_String_2();
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA10,lcI15);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 280; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Function cannot have the name of an existing property", lcA1);
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_280: for (;;) { IF: if (gt <= 280) {
try {lcI18++;
{ gt = 0; continue X_237; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_286: for (;;) { IF: if (gt <= 286) {
try {lcI15 += 2;
{ gt = 0; continue X_213; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_292: for (;;) { IF: if (gt <= 292) {
try {
var stA4 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateReceive__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_StringBuilder_2.call(lcA0, lcA1, lcA7, lcA6, stA4, lcA8);
if ((stI0) != 0) { gt = 314; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_314: for (;;) { IF: if (gt <= 314) {
try {
var stA4 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateOperation__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2.call(lcA0, lcA1, lcA7, lcA6, stA4, lcA10);
if ((stI0) != 0) { gt = 336; break IF; }
var lcI2 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_336: for (;;) { IF: if (gt <= 336) {
try {
var stA0 = invoker.getFiler__Ljavax_annotation_processing_Filer_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA4);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,(46));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/lang/model/element/Element;', vm.javax_lang_model_element_Element, 1);
Array.at(stA2, 0, lcA1);
var stA0 = invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2(stA0,stA1, stA2);
var lcA15 = stA0;
var stA0 = new vm.java_io_OutputStreamWriter;
var stA2 = invoker.openOutputStream__Ljava_io_OutputStream_2(lcA15);
vm.java_io_OutputStreamWriter(false).constructor['cons__VLjava_io_OutputStream_2'].call(stA0, stA2);
var lcA5 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"package ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA4);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"import net.java.html.json.*;\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"public final class ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," implements Cloneable {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private static final Html4JavaType TYPE = new Html4JavaType();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private final org.netbeans.html.json.spi.Proto proto;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(lcA7);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private static Class<");
var stA2 = vm.org_netbeans_html_json_impl_ModelProcessor(false).inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"> modelFor() { return null; }\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"(net.java.html.BrwsrCtx context) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.proto = TYPE.createProto(this, context);\n");
var lcA16 = lcA13;
var lcI17 = (lcA16).length;
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_557: for (;;) { IF: if (gt <= 557) {
try {
if ((lcI18) >= (lcI17)) { gt = 834; break IF; }
var lcA19 = Array.at(lcA16, lcI18);
var stI0 = lcA19.array__Z();
if ((stI0) == 0) { gt = 828; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).typeName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA1, lcA19);
var lcA20 = stA0;
var stA0 = lcA19.name__Ljava_lang_String_2();
var stI2 = lcA19.array__Z();
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, lcA20, stI2);
var lcA21 = stA0;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    this.prop_");
var stA2 = lcA19.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = proto.createList(\"");
var stA2 = lcA19.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\"");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA1 = lcA19.name__Ljava_lang_String_2();
var stI0 = invoker.containsKey__ZLjava_lang_Object_2(lcA12,stA1);
if ((stI0) == 0) { gt = 721; break IF; }
var stA0 = invoker.keySet__Ljava_util_Set_2(lcA12);
var stA0 = invoker.toArray___3Ljava_lang_Object_2(stA0);
var stA0 = vm.java_util_Arrays(false)['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
var stA1 = lcA19.name__Ljava_lang_String_2();
var stI0 = invoker.indexOf__ILjava_lang_Object_2(stA0,stA1);
var lcI22 = stI0;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI22);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 728; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_721: for (;;) { IF: if (gt <= 721) {
try {
invoker.write__VLjava_lang_String_2(lcA5,", -1");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_728: for (;;) { IF: if (gt <= 728) {
try {
var stA1 = lcA19.name__Ljava_lang_String_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA11,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var lcA22 = stA0;
if ((lcA22) === null) { gt = 814; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA22);
var lcA23 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_759: for (;;) { IF: if (gt <= 759) {
try {
var stI0 = invoker.hasNext__Z(lcA23);
if ((stI0) == 0) { gt = 814; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA23);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) throw vm.java_lang_ClassCastException(true);
var lcA24 = stA0;
invoker.write__VLjava_lang_String_2(lcA5,", ");
invoker.write__VI(lcA5,(34));
invoker.write__VLjava_lang_String_2(lcA5,Array.at(lcA24, 0));
invoker.write__VI(lcA5,(34));
{ gt = 0; continue X_759; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_814: for (;;) { IF: if (gt <= 814) {
try {
invoker.write__VLjava_lang_String_2(lcA5,")");
invoker.write__VLjava_lang_String_2(lcA5,";\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_828: for (;;) { IF: if (gt <= 828) {
try {lcI18++;
{ gt = 0; continue X_557; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_834: for (;;) { IF: if (gt <= 834) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  };\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  public ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"() {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this(net.java.html.BrwsrCtx.findDefault(");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".class));\n");
var lcA16 = lcA13;
var lcI17 = (lcA16).length;
var lcI18 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_890: for (;;) { IF: if (gt <= 890) {
try {
if ((lcI18) >= (lcI17)) { gt = 1009; break IF; }
var lcA19 = Array.at(lcA16, lcI18);
var stI0 = lcA19.array__Z();
if ((stI0) != 0) { gt = 1003; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA20 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA21 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA22 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA19, lcA20, lcA21, lcA22);
var lcA23 = stA0;
if ((Array.at(lcA20, 0)) == 0) { gt = 1003; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    prop_");
var stA2 = lcA19.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA23);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1003: for (;;) { IF: if (gt <= 1003) {
try {lcI18++;
{ gt = 0; continue X_890; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1009: for (;;) { IF: if (gt <= 1009) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  };\n");
if (((lcA13).length) <= 0) { gt = 1417; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  public ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"(");
var lcA16 = null;
var lcA17 = "";
var lcA18 = lcA13;
var lcI19 = (lcA18).length;
var lcI20 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1060: for (;;) { IF: if (gt <= 1060) {
try {
if ((lcI20) >= (lcI19)) { gt = 1155; break IF; }
var lcA21 = Array.at(lcA18, lcI20);
var stI0 = lcA21.array__Z();
if ((stI0) == 0) { gt = 1094; break IF; }
if ((lcA16) !== null) { gt = 1149; break IF; }
var lcA16 = lcA21;
{ gt = 1149; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1094: for (;;) { IF: if (gt <= 1094) {
try {
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).typeName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA1, lcA21);
var lcA22 = stA0;
invoker.write__VLjava_lang_String_2(lcA5,lcA17);
invoker.write__VLjava_lang_String_2(lcA5,lcA22);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA2 = lcA21.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA17 = ", ";
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1149: for (;;) { IF: if (gt <= 1149) {
try {lcI20++;
{ gt = 0; continue X_1060; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1155: for (;;) { IF: if (gt <= 1155) {
try {
if ((lcA16) === null) { gt = 1243; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA19 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA20 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA21 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA16, lcA19, lcA20, lcA21);
var lcA18 = stA0;
invoker.write__VLjava_lang_String_2(lcA5,lcA17);
invoker.write__VLjava_lang_String_2(lcA5,lcA18);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"... ");
var stA2 = lcA16.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1243: for (;;) { IF: if (gt <= 1243) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,") {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this(net.java.html.BrwsrCtx.findDefault(");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".class));\n");
var lcA18 = lcA13;
var lcI19 = (lcA18).length;
var lcI20 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1281: for (;;) { IF: if (gt <= 1281) {
try {
if ((lcI20) >= (lcI19)) { gt = 1358; break IF; }
var lcA21 = Array.at(lcA18, lcI20);
var stI0 = lcA21.array__Z();
if ((stI0) == 0) { gt = 1306; break IF; }
{ gt = 1352; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1306: for (;;) { IF: if (gt <= 1306) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    this.prop_");
var stA2 = lcA21.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stA2 = lcA21.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1352: for (;;) { IF: if (gt <= 1352) {
try {lcI20++;
{ gt = 0; continue X_1281; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1358: for (;;) { IF: if (gt <= 1358) {
try {
if ((lcA16) === null) { gt = 1409; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.initTo(this.prop_");
var stA2 = lcA16.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA2 = lcA16.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1409: for (;;) { IF: if (gt <= 1409) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  };\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1417: for (;;) { IF: if (gt <= 1417) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private static class Html4JavaType extends org.netbeans.html.json.spi.Proto.Type<");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"> {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    private Html4JavaType() {\n      super(");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".class, ");
var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, ");
var stI2 = invoker.size__I(lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,stI2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI14);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var lcI16 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1507: for (;;) { IF: if (gt <= 1507) {
try {
var stI1 = invoker.size__I(lcA9);
if ((lcI16) >= (stI1)) { gt = 1605; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      registerProperty(\"");
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI16);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._name.call(stA1));
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\", ");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI16);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA2 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI16);
if (stA2 !== null && !stA2['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Z(stA1,vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._readOnly.call(stA2));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
lcI16++;
{ gt = 0; continue X_1507; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1605: for (;;) { IF: if (gt <= 1605) {
try {
var lcI16 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1608: for (;;) { IF: if (gt <= 1608) {
try {
if ((lcI16) >= (lcI14)) { gt = 1677; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      registerFunction(\"");
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA10,(lcI16).mul32(2));
if (stA1 !== null && !stA1['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\", ");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI16);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
lcI16++;
{ gt = 0; continue X_1608; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1677: for (;;) { IF: if (gt <= 1677) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public void setValue(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," data, int type, Object value) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var lcI16 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1727: for (;;) { IF: if (gt <= 1727) {
try {
var stI1 = invoker.size__I(lcA9);
if ((lcI16) >= (stI1)) { gt = 1936; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI16);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var lcA17 = stA0;
if ((vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._readOnly.call(lcA17)) == 0) { gt = 1764; break IF; }
{ gt = 1930; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1764: for (;;) { IF: if (gt <= 1764) {
try {
var lcA18 = vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._setter.call(lcA17);
var lcA19 = vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._type.call(lcA17);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA19);
var lcA20 = stA0;
if ((lcA20) === null) { gt = 1794; break IF; }
var lcA19 = lcA20;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1794: for (;;) { IF: if (gt <= 1794) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI16);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
if ((vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._setter.call(lcA17)) === null) { gt = 1883; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"data.");
var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).strip__Ljava_lang_String_2Ljava_lang_String_2(vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._setter.call(lcA17));
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(TYPE.extractValue(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA19);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, value)); return;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 1930; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1883: for (;;) { IF: if (gt <= 1883) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"TYPE.replaceValue(data.");
var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).strip__Ljava_lang_String_2Ljava_lang_String_2(vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._getter.call(lcA17));
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(), ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA19);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, value); return;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1930: for (;;) { IF: if (gt <= 1930) {
try {lcI16++;
{ gt = 0; continue X_1727; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_1936: for (;;) { IF: if (gt <= 1936) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public Object getValue(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," data, int type) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var lcI16 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2002: for (;;) { IF: if (gt <= 2002) {
try {
var stI1 = invoker.size__I(lcA9);
if ((lcI16) >= (stI1)) { gt = 2086; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI16);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var lcA17 = vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._getter.call(stA0);
if ((lcA17) === null) { gt = 2080; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI16);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": return data.");
var stA2 = vm.org_netbeans_html_json_impl_ModelProcessor(false).strip__Ljava_lang_String_2Ljava_lang_String_2(lcA17);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2080: for (;;) { IF: if (gt <= 2080) {
try {lcI16++;
{ gt = 0; continue X_2002; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2086: for (;;) { IF: if (gt <= 2086) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public void call(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," model, int type, Object data, Object ev) throws Exception {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var lcI16 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2152: for (;;) { IF: if (gt <= 2152) {
try {
var stI1 = invoker.size__I(lcA10);
if ((lcI16) >= (stI1)) { gt = 2386; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA10,lcI16);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA17 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA10,(lcI16).add32(1));
var lcA18 = stA0;
var stI0 = lcA18 != null && lcA18['$instOf_javax_lang_model_element_ExecutableElement'] ? 1 : 0;
if ((stI0) == 0) { gt = 2314; break IF; }
if (lcA18 !== null && !lcA18['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA19 = lcA18;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,(lcI16).div32(2));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,":\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          ");
if (lcA1 !== null && !lcA1['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA17);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"(");
var stA0 = lcA5;var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).wrapParams__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2.call(lcA0, lcA19, null, lcA6, "model", "ev", "data");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,");\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          return;\n");
{ gt = 2380; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2314: for (;;) { IF: if (gt <= 2314) {
try {
if (lcA18 !== null && !lcA18['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA19 = lcA18;
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,(lcI16).div32(2));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,":\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA19);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"          return;\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2380: for (;;) { IF: if (gt <= 2380) {
try {lcI16 += 2;
{ gt = 0; continue X_2152; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2386: for (;;) { IF: if (gt <= 2386) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    @Override public org.netbeans.html.json.spi.Proto protoFor(Object obj) {\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      return ((");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")obj).proto;");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public void onChange(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," model, int type) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      switch (type) {\n");
var stA0 = invoker.keySet__Ljava_util_Set_2(lcA12);
var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 0);
var stA0 = invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) throw vm.java_lang_ClassCastException(true);
var lcA16 = stA0;
var lcI17 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2520: for (;;) { IF: if (gt <= 2520) {
try {
if ((lcI17) >= ((lcA16).length)) { gt = 2646; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA12,Array.at(lcA16, lcI17));
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var lcA18 = stA0;
if ((lcA18) === null) { gt = 2640; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI17);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,":\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA18);
var lcA19 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2590: for (;;) { IF: if (gt <= 2590) {
try {
var stI0 = invoker.hasNext__Z(lcA19);
if ((stI0) == 0) { gt = 2633; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA19);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA20 = stA0;
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\n");
{ gt = 0; continue X_2590; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2633: for (;;) { IF: if (gt <= 2633) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"      return;\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2640: for (;;) { IF: if (gt <= 2640) {
try {lcI17++;
{ gt = 0; continue X_2520; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2646: for (;;) { IF: if (gt <= 2646) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      throw new UnsupportedOperationException();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA8);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," read(net.java.html.BrwsrCtx c, Object json) { return new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(c, json); }\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    @Override public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," cloneTo(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," o, net.java.html.BrwsrCtx c) { return o.clone(c); }\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  private ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"(net.java.html.BrwsrCtx c, Object json) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this(c);\n");
var lcI16 = 0;
var lcI17 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2800: for (;;) { IF: if (gt <= 2800) {
try {
var stI1 = invoker.size__I(lcA9);
if ((lcI17) >= (stI1)) { gt = 2851; break IF; }
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI17);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(lcA13, vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._name.call(stA1));
var lcA18 = stA0;
if ((lcA18) !== null) { gt = 2842; break IF; }
{ gt = 2845; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2842: for (;;) { IF: if (gt <= 2842) {
try {lcI16++;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2845: for (;;) { IF: if (gt <= 2845) {
try {lcI17++;
{ gt = 0; continue X_2800; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2851: for (;;) { IF: if (gt <= 2851) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    Object[] ret = new Object[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI16);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    proto.extract(json, new String[] {\n");
var lcI17 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2893: for (;;) { IF: if (gt <= 2893) {
try {
var stI1 = invoker.size__I(lcA9);
if ((lcI17) >= (stI1)) { gt = 2972; break IF; }
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI17);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(lcA13, vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._name.call(stA1));
var lcA18 = stA0;
if ((lcA18) !== null) { gt = 2935; break IF; }
{ gt = 2966; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2935: for (;;) { IF: if (gt <= 2935) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      \"");
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI17);
if (stA1 !== null && !stA1['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._name.call(stA1));
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"\",\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2966: for (;;) { IF: if (gt <= 2966) {
try {lcI17++;
{ gt = 0; continue X_2893; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2972: for (;;) { IF: if (gt <= 2972) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }, ret);\n");
var lcI17 = 0;
var lcI18 = 0;
var lcI19 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_2989: for (;;) { IF: if (gt <= 2989) {
try {
var stI1 = invoker.size__I(lcA9);
if ((lcI17) >= (stI1)) { gt = 3789; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA9,lcI17);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var lcA20 = vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._name.call(stA0);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(lcA13, lcA20);
var lcA21 = stA0;
if ((lcA21) === null) { gt = 3783; break IF; }
if ((lcI19) < ((lcA13).length)) { gt = 3043; break IF; }
{ gt = 3783; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
break;}
    X_3043: for (;;) { IF: if (gt <= 3043) {
try {
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA22 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA23 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA24 = stA0;
var stA0 = lcA0;var stA1 = lcA13;var stI2 = lcI19;lcI19++;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(stA0, Array.at(stA1, stI2), lcA22, lcA23, lcA24);
var lcA25 = stA0;
var stI0 = lcA21.array__Z();
if ((stI0) == 0) { gt = 3356; break IF; }
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"] instanceof Object[]) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      for (Object e : ((Object[])ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"])) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
if ((Array.at(lcA22, 0)) == 0) { gt = 3219; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add(proto.read");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA25);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, e));\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 3337; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3219: for (;;) { IF: if (gt <= 3219) {
try {
if ((Array.at(lcA23, 0)) == 0) { gt = 3263; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,".add(e == null ? null : ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA25);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".valueOf(TYPE.stringValue(e)));\n");
{ gt = 3337; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3263: for (;;) { IF: if (gt <= 3263) {
try {
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).isPrimitive__ZLjava_lang_String_2.call(lcA0, lcA25);
if ((stI0) == 0) { gt = 3306; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add(TYPE.numberValue(e).");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA25);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"Value());\n");
{ gt = 3337; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3306: for (;;) { IF: if (gt <= 3306) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"        this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".add((");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA25);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,")e);\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3337: for (;;) { IF: if (gt <= 3337) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      }\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
{ gt = 3780; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3356: for (;;) { IF: if (gt <= 3356) {
try {
if ((Array.at(lcA23, 0)) == 0) { gt = 3478; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    try {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"] == null ? null : ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA25);
var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".valueOf(TYPE.stringValue(ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"]));\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    } catch (IllegalArgumentException ex) {\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"      ex.printStackTrace();\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    }\n");
{ gt = 3780; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3478: for (;;) { IF: if (gt <= 3478) {
try {
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).isPrimitive__ZLjava_lang_String_2.call(lcA0, lcA25);
if ((stI0) == 0) { gt = 3628; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"] == null ? ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stI0 = invoker.equals__ZLjava_lang_Object_2("char",lcA25);
if ((stI0) == 0) { gt = 3552; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"0 : (TYPE.charValue(");
{ gt = 3581; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3552: for (;;) { IF: if (gt <= 3552) {
try {
var stI0 = invoker.equals__ZLjava_lang_Object_2("boolean",lcA25);
if ((stI0) == 0) { gt = 3573; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"false : (TYPE.boolValue(");
{ gt = 3581; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3573: for (;;) { IF: if (gt <= 3573) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"0 : (TYPE.numberValue(");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3581: for (;;) { IF: if (gt <= 3581) {
try {
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"])).");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,lcA25);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"Value();\n");
{ gt = 3780; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3628: for (;;) { IF: if (gt <= 3628) {
try {
if ((Array.at(lcA22, 0)) == 0) { gt = 3718; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," = proto.read");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA25);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"]);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 3780; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3718: for (;;) { IF: if (gt <= 3718) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"    this.prop_");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA20);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5," = (");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA25);
var stA0 = invoker.append__Ljava_io_Writer_2C(stA0,(41));
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"ret[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3780: for (;;) { IF: if (gt <= 3780) {
try {lcI18++;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3783: for (;;) { IF: if (gt <= 3783) {
try {lcI17++;
{ gt = 2989; continue X_0; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3789: for (;;) { IF: if (gt <= 3789) {
try {
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA5,"  }\n");
vm.org_netbeans_html_json_impl_ModelProcessor(false).writeToString__V_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2.call(lcA0, lcA13, lcA5);
vm.org_netbeans_html_json_impl_ModelProcessor(false).writeClone__VLjava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2.call(lcA0, lcA6, lcA13, lcA5);
invoker.write__VLjava_lang_String_2(lcA5,"  /** Activates this model instance in the current {@link \nnet.java.html.json.Models#bind(java.lang.Object, net.java.html.BrwsrCtx) browser context}. \nIn case of using Knockout technology, this means to \nbind JSON like data in this model instance with Knockout tags in \nthe surrounding HTML page.\n*/\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," applyBindings() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA5,"    proto.applyBindings();\n");
invoker.write__VLjava_lang_String_2(lcA5,"    return this;\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
invoker.write__VLjava_lang_String_2(lcA5,"  public boolean equals(Object o) {\n");
invoker.write__VLjava_lang_String_2(lcA5,"    if (o == this) return true;\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (!(o instanceof ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")) return false;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," p = (");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")o;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA17 = lcA13;
var lcI18 = (lcA17).length;
var lcI19 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_3969: for (;;) { IF: if (gt <= 3969) {
try {
if ((lcI19) >= (lcI18)) { gt = 4035; break IF; }
var lcA20 = Array.at(lcA17, lcI19);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (!TYPE.isSame(prop_");
var stA2 = lcA20.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", p.prop_");
var stA2 = lcA20.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")) return false;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
lcI19++;
{ gt = 0; continue X_3969; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_4035: for (;;) { IF: if (gt <= 4035) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"    return true;\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
invoker.write__VLjava_lang_String_2(lcA5,"  public int hashCode() {\n");
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    int h = ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class.getName().hashCode();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA17 = lcA13;
var lcI18 = (lcA17).length;
var lcI19 = 0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_4098: for (;;) { IF: if (gt <= 4098) {
try {
if ((lcI19) >= (lcI18)) { gt = 4151; break IF; }
var lcA20 = Array.at(lcA17, lcI19);
var stA0 = lcA5;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    h = TYPE.hashPlus(prop_");
var stA2 = lcA20.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", h);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
lcI19++;
{ gt = 0; continue X_4098; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}    }
    X_4151: for (;;) { IF: if (gt <= 4151) {
try {
invoker.write__VLjava_lang_String_2(lcA5,"    return h;\n");
invoker.write__VLjava_lang_String_2(lcA5,"  }\n");
invoker.write__VLjava_lang_String_2(lcA5,"}\n");
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 4180; break IF; }
}try {
invoker.close__V(lcA5);
{ gt = 4190; break IF; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_4180: for (;;) { IF: if (gt <= 4180) {
try {var lcA26 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
var stA0 = e;{ gt = 0; continue X_4180; }
}try {
invoker.close__V(lcA5);
{ var stA0 = lcA26; throw lcA26; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_io_IOException']) {var stA0 = e;{ gt = 4193; break IF; }}
throw e;
}    }
    X_4190: for (;;) { IF: if (gt <= 4190) {
{ gt = 4227; break IF; }
    }
    X_4193: for (;;) { IF: if (gt <= 4193) {
var lcA7 = stA0;
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Can't create ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA6);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".java");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
return 0;
    }
    X_4227: for (;;) { IF: if (gt <= 4227) {

return lcI2;

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateProperties__ZLjavax_lang_model_element_Element_2Ljava_io_Writer_2Ljava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_List_2Ljava_util_Map_2Ljava_util_Map_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI8 = 1;
var lcA9 = lcA4;
var lcI10 = (lcA9).length;
var lcI11 = 0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

if ((lcI11) >= (lcI10)) { gt = 911; break IF; }
var lcA12 = Array.at(lcA9, lcI11);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).typeName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA1, lcA12);
var lcA13 = stA0;
var stA0 = lcA12.name__Ljava_lang_String_2();
var stI2 = lcA12.array__Z();
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(stA0, lcA13, stI2);
var lcA14 = stA0;
var stI0 = lcA12.array__Z();
if ((stI0) == 0) { gt = 226; break IF; }
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private final java.util.List<");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"> prop_");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA15 = "java.util.List";
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public java.util.List<");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"> ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,Array.at(lcA14, 0));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.accessProperty(\"");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    return prop_");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA2,"  }\n");
{ gt = 770; break IF; }
    }
    X_226: for (;;) { IF: if (gt <= 226) {

var lcA15 = lcA13;
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," prop_");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,Array.at(lcA14, 0));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.accessProperty(\"");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    return prop_");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA2,"  }\n");
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public void ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,Array.at(lcA14, 1));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," v) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA2,"    proto.verifyUnlocked();\n");
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    if (TYPE.isSame(prop_");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", v)) return;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    Object o = prop_");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    prop_");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = v;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.valueHasMutated(\"");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\", o, v);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA1 = lcA12.name__Ljava_lang_String_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA6,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var lcA16 = stA0;
if ((lcA16) === null) { gt = 673; break IF; }
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA16);
var lcA17 = stA0;
    }
    X_602: for (;;) { IF: if (gt <= 602) {

var stI0 = invoker.hasNext__Z(lcA17);
if ((stI0) == 0) { gt = 673; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA17);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) throw vm.java_lang_ClassCastException(true);
var lcA18 = stA0;
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.valueHasMutated(\"");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,Array.at(lcA18, 0));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\", null, ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,Array.at(lcA18, 1));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"());\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 0; continue X_602; }
    }
    X_673: for (;;) { IF: if (gt <= 673) {

var stA1 = lcA12.name__Ljava_lang_String_2();
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA7,stA1);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var lcA16 = stA0;
if ((lcA16) === null) { gt = 764; break IF; }
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,lcA3);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0," model = ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,".this;\n");
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA16);
var lcA17 = stA0;
    }
    X_726: for (;;) { IF: if (gt <= 726) {

var stI0 = invoker.hasNext__Z(lcA17);
if ((stI0) == 0) { gt = 764; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA17);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA18 = stA0;
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,"  ");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,lcA18);
{ gt = 0; continue X_726; }
    }
    X_764: for (;;) { IF: if (gt <= 764) {

invoker.write__VLjava_lang_String_2(lcA2,"  }\n");
    }
    X_770: for (;;) { IF: if (gt <= 770) {

var lcI16 = 0;
    }
    X_773: for (;;) { IF: if (gt <= 773) {

var stI1 = invoker.size__I(lcA5);
if ((lcI16) >= (stI1)) { gt = 855; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA5,lcI16);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_ModelProcessor$GetSet']) throw vm.java_lang_ClassCastException(true);
var stA1 = lcA12.name__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false)._name.call(stA0),stA1);
if ((stI0) == 0) { gt = 849; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Cannot have the name ");
var stA2 = lcA12.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," defined twice");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
var lcI8 = 0;
    }
    X_849: for (;;) { IF: if (gt <= 849) {
lcI16++;
{ gt = 0; continue X_773; }
    }
    X_855: for (;;) { IF: if (gt <= 855) {

var stA0 = lcA5;var stA1 = new vm.org_netbeans_html_json_impl_ModelProcessor$GetSet;
var stA3 = lcA12.name__Ljava_lang_String_2();
var stA2 = stA1;var stA4 = Array.at(lcA14, 2);var stA5 = Array.at(lcA14, 3);var stA6 = lcA13;if ((Array.at(lcA14, 3)) !== null) { gt = 895; break IF; }
var stI7 = lcA12.array__Z();
if ((stI7) != 0) { gt = 895; break IF; }
var stI7 = 1;{ gt = 896; break IF; }
    }
    X_895: for (;;) { IF: if (gt <= 895) {

var stI7 = 0;    }
    X_896: for (;;) { IF: if (gt <= 896) {
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z.call(stA2, stA3, stA4, stA5, stA6, stI7);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
lcI11++;
{ gt = 0; continue X_15; }
    }
    X_911: for (;;) { IF: if (gt <= 911) {

return lcI8;

    }
}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateComputedProperties__ZLjava_io_Writer_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_util_Collection_2Ljava_util_Collection_2Ljava_util_Map_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI6 = 1;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA7 = stA0;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 1086; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA8 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA8);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 49; break IF; }
{ gt = 0; continue X_11; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA8,vm.net_java_html_json_ComputedProperty(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_ComputedProperty']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA8,vm.org_netbeans_html_json_impl_Transitive(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_impl_Transitive']) throw vm.java_lang_ClassCastException(true);
var lcA10 = stA0;
if ((lcA9) !== null) { gt = 87; break IF; }
{ gt = 0; continue X_11; }
    }
    X_87: for (;;) { IF: if (gt <= 87) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_STATIC']());
if ((stI0) != 0) { gt = 149; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Method ");
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA8);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," has to be static when annotated by @ComputedProperty");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA8);
var lcI6 = 0;
{ gt = 0; continue X_11; }
    }
    X_149: for (;;) { IF: if (gt <= 149) {

if (lcA8 !== null && !lcA8['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA11 = lcA8;
var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var lcA12 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var lcA13 = stA0;
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA13,lcA12);
var lcA14 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA14, lcA11);
var lcA15 = stA0;
var lcI16 = 0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA15,"java.util.List");
if ((stI0) == 0) { gt = 237; break IF; }
var lcI16 = 1;
if (lcA12 !== null && !lcA12['$instOf_javax_lang_model_type_DeclaredType']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getTypeArguments__Ljava_util_List_2(lcA12);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_TypeMirror']) throw vm.java_lang_ClassCastException(true);
var lcA17 = stA0;
{ gt = 241; break IF; }
    }
    X_237: for (;;) { IF: if (gt <= 237) {

var lcA17 = lcA12;
    }
    X_241: for (;;) { IF: if (gt <= 241) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA18 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA17);
var stI0 = invoker.isPrimitive__Z(stA0);
if ((stI0) == 0) { gt = 269; break IF; }
{ gt = 426; break IF; }
    }
    X_269: for (;;) { IF: if (gt <= 269) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.String");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA19 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.Enum");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA20 = stA0;
var stI0 = invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA13,lcA17, lcA19);
if ((stI0) == 0) { gt = 333; break IF; }
{ gt = 426; break IF; }
    }
    X_333: for (;;) { IF: if (gt <= 333) {

var stA1 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA13,lcA17);
var stA2 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA13,lcA20);
var stI0 = invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA13,stA1, stA2);
if ((stI0) == 0) { gt = 364; break IF; }
{ gt = 426; break IF; }
    }
    X_364: for (;;) { IF: if (gt <= 364) {

var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, lcA17);
if ((stI0) == 0) { gt = 376; break IF; }
{ gt = 426; break IF; }
    }
    X_376: for (;;) { IF: if (gt <= 376) {
try {
var stA0 = invoker.unboxedType__Ljavax_lang_model_type_PrimitiveType_2Ljavax_lang_model_type_TypeMirror_2(lcA13,lcA17);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_IllegalArgumentException']) {var stA0 = e;{ gt = 389; break IF; }}
throw e;
}{ gt = 426; break IF; }
    }
    X_389: for (;;) { IF: if (gt <= 389) {
var lcA21 = stA0;
var lcI6 = 0;
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," cannot return ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA17);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA8);
    }
    X_426: for (;;) { IF: if (gt <= 426) {

var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(lcA18, lcA15, lcI16);
var lcA19 = stA0;
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA15);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
if ((lcI16) == 0) { gt = 497; break IF; }
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"<");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA17);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,">");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_497: for (;;) { IF: if (gt <= 497) {

var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,Array.at(lcA19, 0));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcI20 = 0;
var lcI21 = 0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA11);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA22 = stA0;
    }
    X_548: for (;;) { IF: if (gt <= 548) {

var stI0 = invoker.hasNext__Z(lcA22);
if ((stI0) == 0) { gt = 836; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA22);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA23 = stA0;
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA23);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA24 = stA0;
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).verifyPropName__ZLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2.call(lcA0, lcA23, lcA24, lcA2);
if ((stI0) != 0) { gt = 597; break IF; }
var lcI6 = 0;
    }
    X_597: for (;;) { IF: if (gt <= 597) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA23);
var lcA25 = stA0;
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, lcA25);
if ((stI0) == 0) { gt = 618; break IF; }
var lcI21 = 1;
    }
    X_618: for (;;) { IF: if (gt <= 618) {

var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA25, lcA11);
var lcA26 = stA0;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA26,"java.util.List");
if ((stI0) == 0) { gt = 690; break IF; }
var stI0 = lcA25 != null && lcA25['$instOf_javax_lang_model_type_DeclaredType'] ? 1 : 0;
if ((stI0) == 0) { gt = 690; break IF; }
if (lcA25 !== null && !lcA25['$instOf_javax_lang_model_type_DeclaredType']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getTypeArguments__Ljava_util_List_2(lcA25);
var lcA27 = stA0;
var stI0 = invoker.size__I(lcA27);
if ((stI0) != (1)) { gt = 690; break IF; }
var stA1 = invoker.get__Ljava_lang_Object_2I(lcA27,0);
if (stA1 !== null && !stA1['$instOf_javax_lang_model_type_TypeMirror']) throw vm.java_lang_ClassCastException(true);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, stA1);
if ((stI0) == 0) { gt = 690; break IF; }
var lcI21 = 1;
    }
    X_690: for (;;) { IF: if (gt <= 690) {

var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z(lcA24, lcA26, 0);
var lcA27 = stA0;
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA26);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," arg");
lcI20++;
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI20);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,Array.at(lcA27, 0));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA24);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var lcA28 = stA0;
if ((lcA28) !== null) { gt = 809; break IF; }
var stA0 = new vm.java_util_LinkedHashSet;
vm.java_util_LinkedHashSet(false).constructor['cons__V'].call(stA0);
var lcA28 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA24, lcA28);
    }
    X_809: for (;;) { IF: if (gt <= 809) {

var stA0 = lcA28;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 2);
Array.at(stA1, 0, lcA18);
Array.at(stA1, 1, Array.at(lcA19, 0));
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_548; }
    }
    X_836: for (;;) { IF: if (gt <= 836) {

invoker.write__VLjava_lang_String_2(lcA1,"    try {\n");
if ((lcA10) === null) { gt = 856; break IF; }
var stI0 = lcA10.deep__Z();
var lcI21 = stI0;
    }
    X_856: for (;;) { IF: if (gt <= 856) {

if ((lcI21) == 0) { gt = 895; break IF; }
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      proto.acquireLock(\"");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA18);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 902; break IF; }
    }
    X_895: for (;;) { IF: if (gt <= 895) {

invoker.write__VLjava_lang_String_2(lcA1,"      proto.acquireLock();\n");
    }
    X_902: for (;;) { IF: if (gt <= 902) {

var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      return ");
var stA3 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA11);
var stA3 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA3);
var stA2 = vm.org_netbeans_html_json_impl_ModelProcessor(false).fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, stA3, lcA11);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2C(stA1,(46));
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA8);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA22 = "";
var lcI23 = 1;
    }
    X_970: for (;;) { IF: if (gt <= 970) {

if ((lcI23) > (lcI20)) { gt = 1018; break IF; }
invoker.write__VLjava_lang_String_2(lcA1,lcA22);
var stA0 = lcA1;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"arg");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI23);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA22 = ", ";
lcI23++;
{ gt = 0; continue X_970; }
    }
    X_1018: for (;;) { IF: if (gt <= 1018) {

invoker.write__VLjava_lang_String_2(lcA1,");\n");
invoker.write__VLjava_lang_String_2(lcA1,"    } finally {\n");
invoker.write__VLjava_lang_String_2(lcA1,"      proto.releaseLock();\n");
invoker.write__VLjava_lang_String_2(lcA1,"    }\n");
invoker.write__VLjava_lang_String_2(lcA1,"  }\n");
var stA0 = lcA4;var stA1 = new vm.org_netbeans_html_json_impl_ModelProcessor$GetSet;
var stA3 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA8);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
vm.org_netbeans_html_json_impl_ModelProcessor$GetSet(false).constructor.cons__VLjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z.call(stA1, stA3, Array.at(lcA19, 2), null, lcA15, 1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 0; continue X_11; }
    }
    X_1086: for (;;) { IF: if (gt <= 1086) {

return lcI6;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.toGetSet___3Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Z = function(lcA0, lcA1, lcI2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stI1 = invoker.charAt__CI(lcA0,0);
var stI1 = vm.java_lang_Character(false)['toUpperCase__CC'](stI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,stI1);
var stA1 = invoker.substring__Ljava_lang_String_2I(lcA0,1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA3 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"L");
var stA1 = invoker.replace__Ljava_lang_String_2CC(lcA1,(46), (95));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"_2");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA4 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2("int",lcA1);
if ((stI0) == 0) { gt = 80; break IF; }
var lcA4 = "I";
    }
    X_80: for (;;) { IF: if (gt <= 80) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("double",lcA1);
if ((stI0) == 0) { gt = 95; break IF; }
var lcA4 = "D";
    }
    X_95: for (;;) { IF: if (gt <= 95) {

var lcA5 = "get";
var stI0 = invoker.equals__ZLjava_lang_Object_2("boolean",lcA1);
if ((stI0) == 0) { gt = 119; break IF; }
var lcA5 = "is";
var lcA4 = "Z";
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stA0 = invoker.replace__Ljava_lang_String_2CC(lcA3,(46), (95));
var lcA6 = stA0;
if ((lcI2) == 0) { gt = 199; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 4);
var stA1 = stA0;var stI2 = 0;var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"get");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
Array.at(stA0, 1, null);
var stA1 = stA0;var stI2 = 2;var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"get");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA6);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"__Ljava_util_List_2");
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
Array.at(stA0, 3, null);
return stA0;
    }
    X_199: for (;;) { IF: if (gt <= 199) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, 4);
var stA1 = stA0;var stI2 = 0;var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA5);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 1;var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"set");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA3);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 2;var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA5);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA6);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"__");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA4);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 3;var stA3 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA3);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"set");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA6);
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,"__V");
var stA3 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA3,lcA4);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
Array.at(stA1, stI2, stA3);
return stA0;

    }
}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.typeName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA4 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA5 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA6 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA2, lcA4, lcA5, lcA6);
var lcA3 = stA0;
var stI0 = lcA2.array__Z();
if ((stI0) == 0) { gt = 60; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA3);
var lcA7 = stA0;
if ((lcA7) === null) { gt = 60; break IF; }
return lcA7;
    }
    X_60: for (;;) { IF: if (gt <= 60) {

return lcA3;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findBoxedType__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"boolean");
if ((stI0) == 0) { gt = 16; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Boolean(false).constructor.$class);
return stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"byte");
if ((stI0) == 0) { gt = 33; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Byte(false).constructor.$class);
return stA0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"short");
if ((stI0) == 0) { gt = 50; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Short(false).constructor.$class);
return stA0;
    }
    X_50: for (;;) { IF: if (gt <= 50) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"char");
if ((stI0) == 0) { gt = 66; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Character(false).constructor.$class);
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"int");
if ((stI0) == 0) { gt = 83; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Integer(false).constructor.$class);
return stA0;
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"long");
if ((stI0) == 0) { gt = 100; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Long(false).constructor.$class);
return stA0;
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"float");
if ((stI0) == 0) { gt = 117; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Float(false).constructor.$class);
return stA0;
    }
    X_117: for (;;) { IF: if (gt <= 117) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0,"double");
if ((stI0) == 0) { gt = 134; break IF; }
var stA0 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Double(false).constructor.$class);
return stA0;
    }
    X_134: for (;;) { IF: if (gt <= 134) {

return null;

    }
}}}}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.verifyPropName__ZLjavax_lang_model_element_Element_2Ljava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA4 = stA0;
var lcA5 = "";
var lcA6 = lcA3;
var lcI7 = (lcA6).length;
var lcI8 = 0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

if ((lcI8) >= (lcI7)) { gt = 97; break IF; }
var lcA9 = Array.at(lcA6, lcI8);
var stA0 = lcA9.name__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA2);
if ((stI0) == 0) { gt = 52; break IF; }
return 1;
    }
    X_52: for (;;) { IF: if (gt <= 52) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA4,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA4,(34));
var stA1 = lcA9.name__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA4,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA4,(34));
var lcA5 = ", ";
lcI8++;
{ gt = 0; continue X_24; }
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," is not one of known properties: ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,lcA4);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
return 0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findPkgName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA0);
if ((stA0) !== (vm.javax_lang_model_element_ElementKind(false)['_PACKAGE']())) { gt = 25; break IF; }
if (lcA0 !== null && !lcA0['$instOf_javax_lang_model_element_PackageElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_25: for (;;) { IF: if (gt <= 25) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA0);
var lcA0 = stA0;
{ gt = 0; continue X_0; }

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.generateFunctions__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA6 = stA0;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 199; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA7);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 47; break IF; }
{ gt = 0; continue X_9; }
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA8 = lcA7;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA8,vm.net_java_html_json_Function(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Function']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 77; break IF; }
{ gt = 0; continue X_9; }
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_STATIC']());
if ((stI0) != 0) { gt = 106; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnFunction method needs to be static", lcA8);
return 0;
    }
    X_106: for (;;) { IF: if (gt <= 106) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_PRIVATE']());
if ((stI0) == 0) { gt = 135; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnFunction method cannot be private", lcA8);
return 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA8);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === (vm.javax_lang_model_type_TypeKind(false)['_VOID']())) { gt = 164; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnFunction method should return void", lcA8);
return 0;
    }
    X_164: for (;;) { IF: if (gt <= 164) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA8);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA10 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,lcA10);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,lcA8);
{ gt = 0; continue X_9; }
    }
    X_199: for (;;) { IF: if (gt <= 199) {

return 1;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateOnChange__ZLjavax_lang_model_element_Element_2Ljava_util_Map_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2Ljava_util_Map_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA6 = stA0;
    }
    X_13: for (;;) { IF: if (gt <= 13) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 527; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA7);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 51; break IF; }
{ gt = 0; continue X_13; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {

if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA8 = lcA7;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA8,vm.net_java_html_json_OnPropertyChange(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_OnPropertyChange']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 81; break IF; }
{ gt = 0; continue X_13; }
    }
    X_81: for (;;) { IF: if (gt <= 81) {

var stA0 = invoker.value___3Ljava_lang_String_2(lcA9);
var lcA10 = stA0;
var lcI11 = (lcA10).length;
var lcI12 = 0;
    }
    X_98: for (;;) { IF: if (gt <= 98) {

if ((lcI12) >= (lcI11)) { gt = 175; break IF; }
var lcA13 = Array.at(lcA10, lcI12);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2(lcA3, lcA13);
if ((stA0) !== null) { gt = 169; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findDerivedFrom__Ljava_util_Collection_2Ljava_util_Map_2Ljava_lang_String_2(lcA2, lcA13);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 169; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"No Prprt named '");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA13);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"' in the model");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
return 0;
    }
    X_169: for (;;) { IF: if (gt <= 169) {
lcI12++;
{ gt = 0; continue X_98; }
    }
    X_175: for (;;) { IF: if (gt <= 175) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_STATIC']());
if ((stI0) != 0) { gt = 204; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnPrprtChange method needs to be static", lcA8);
return 0;
    }
    X_204: for (;;) { IF: if (gt <= 204) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_PRIVATE']());
if ((stI0) == 0) { gt = 233; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnPrprtChange method cannot be private", lcA8);
return 0;
    }
    X_233: for (;;) { IF: if (gt <= 233) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA8);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === (vm.javax_lang_model_type_TypeKind(false)['_VOID']())) { gt = 262; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnPrprtChange method should return void", lcA8);
return 0;
    }
    X_262: for (;;) { IF: if (gt <= 262) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA8);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA10 = stA0;
var stA0 = invoker.value___3Ljava_lang_String_2(lcA9);
var lcA11 = stA0;
var lcI12 = (lcA11).length;
var lcI13 = 0;
    }
    X_291: for (;;) { IF: if (gt <= 291) {

if ((lcI13) >= (lcI12)) { gt = 524; break IF; }
var lcA14 = Array.at(lcA11, lcI13);
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA15 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA15,"  ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = lcA15;var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).wrapPropName__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2.call(lcA0, lcA8, lcA4, "name", lcA14);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA15,");\n");
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA14);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var lcA16 = stA0;
if ((lcA16) !== null) { gt = 414; break IF; }
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA16 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA14, lcA16);
    }
    X_414: for (;;) { IF: if (gt <= 414) {

var stA1 = invoker.toString__Ljava_lang_String_2(lcA15);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA16,stA1);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findDerivedFrom__Ljava_util_Collection_2Ljava_util_Map_2Ljava_lang_String_2(lcA2, lcA14);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA17 = stA0;
    }
    X_440: for (;;) { IF: if (gt <= 440) {

var stI0 = invoker.hasNext__Z(lcA17);
if ((stI0) == 0) { gt = 518; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA17);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA18 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA18);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var lcA16 = stA0;
if ((lcA16) !== null) { gt = 502; break IF; }
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA16 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(lcA5,lcA18, lcA16);
    }
    X_502: for (;;) { IF: if (gt <= 502) {

var stA1 = invoker.toString__Ljava_lang_String_2(lcA15);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA16,stA1);
{ gt = 0; continue X_440; }
    }
    X_518: for (;;) { IF: if (gt <= 518) {
lcI13++;
{ gt = 0; continue X_291; }
    }
    X_524: for (;;) { IF: if (gt <= 524) {
{ gt = 0; continue X_13; }
    }
    X_527: for (;;) { IF: if (gt <= 527) {

return 1;

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateOperation__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA6 = stA0;
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 742; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA7);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 47; break IF; }
{ gt = 0; continue X_9; }
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA8 = lcA7;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA8,vm.net_java_html_json_ModelOperation(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_ModelOperation']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
if ((lcA9) !== null) { gt = 77; break IF; }
{ gt = 0; continue X_9; }
    }
    X_77: for (;;) { IF: if (gt <= 77) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_STATIC']());
if ((stI0) != 0) { gt = 106; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@ModelOperation method needs to be static", lcA8);
return 0;
    }
    X_106: for (;;) { IF: if (gt <= 106) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA8);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_PRIVATE']());
if ((stI0) == 0) { gt = 135; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@ModelOperation method cannot be private", lcA8);
return 0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA8);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === (vm.javax_lang_model_type_TypeKind(false)['_VOID']())) { gt = 164; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@ModelOperation method should return void", lcA8);
return 0;
    }
    X_164: for (;;) { IF: if (gt <= 164) {
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA10 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  public void ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA7);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"(");
var lcA11 = "";
var lcI12 = 1;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA8);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA13 = stA0;
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stI0 = invoker.hasNext__Z(lcA13);
if ((stI0) == 0) { gt = 418; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA13);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA14 = stA0;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA14);
var lcA15 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA15);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_DECLARED']())) { gt = 281; break IF; }
if (lcA15 !== null && !lcA15['$instOf_javax_lang_model_type_DeclaredType']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2(lcA15);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var lcA16 = stA0;
{ gt = 290; break IF; }
    }
    X_281: for (;;) { IF: if (gt <= 281) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA15);
var lcA16 = stA0;
    }
    X_290: for (;;) { IF: if (gt <= 290) {

if ((lcI12) == 0) { gt = 315; break IF; }
var stA0 = invoker.toString__Ljava_lang_String_2(lcA16);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA3);
if ((stI0) == 0) { gt = 315; break IF; }
var lcI12 = 0;
{ gt = 415; break IF; }
    }
    X_315: for (;;) { IF: if (gt <= 315) {

if ((lcI12) == 0) { gt = 348; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"First parameter of @ModelOperation method must be ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA7);
return 0;
    }
    X_348: for (;;) { IF: if (gt <= 348) {

var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA14);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA10,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA11);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"final ");
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA14);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," ");
var stA1 = invoker.toString__Ljava_lang_String_2(lcA14);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,stA1);
var lcA11 = ", ";
    }
    X_415: for (;;) { IF: if (gt <= 415) {
{ gt = 0; continue X_217; }
    }
    X_418: for (;;) { IF: if (gt <= 418) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,") {\n");
var stI0 = invoker.size__I(lcA5);
var lcI13 = (stI0).div32(2);
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA7);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.runInBrowser(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI13);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA10);
var lcA14 = stA0;
    }
    X_489: for (;;) { IF: if (gt <= 489) {

var stI0 = invoker.hasNext__Z(lcA14);
if ((stI0) == 0) { gt = 526; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA14);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA15 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA15);
{ gt = 0; continue X_489; }
    }
    X_526: for (;;) { IF: if (gt <= 526) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,");\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  }\n");
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA14 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA14,"{ Object[] arr = (Object[])data; ");
var stA0 = lcA14;var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA7);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcI15 = 0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA8);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA16 = stA0;
    }
    X_606: for (;;) { IF: if (gt <= 606) {

var stI0 = invoker.hasNext__Z(lcA16);
if ((stI0) == 0) { gt = 717; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA16);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA17 = stA0;
var stI0 = lcI15;lcI15++;
if ((stI0) != 0) { gt = 647; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA14,"model");
{ gt = 0; continue X_606; }
    }
    X_647: for (;;) { IF: if (gt <= 647) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA17);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA18 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA18);
var lcA19 = stA0;
if ((lcA19) === null) { gt = 677; break IF; }
var lcA18 = lcA19;
    }
    X_677: for (;;) { IF: if (gt <= 677) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA14,", ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA18);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,")arr[");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2I(stA0,(lcI15).sub32(2));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"]");
{ gt = 0; continue X_606; }
    }
    X_717: for (;;) { IF: if (gt <= 717) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA14,"); }");
var stA1 = invoker.toString__Ljava_lang_String_2(lcA14);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,stA1);
{ gt = 0; continue X_9; }
    }
    X_742: for (;;) { IF: if (gt <= 742) {

return 1;

    }
}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateReceive__ZLjavax_lang_model_element_Element_2Ljava_io_StringWriter_2Ljava_lang_String_2Ljava_util_List_2Ljava_lang_StringBuilder_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"  @Override public void onMessage(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," model, int index, int type, Object data, Object[] params) {\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"    switch (index) {\n");
var lcI6 = 0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA4);
var lcA7 = stA0;
    }
    X_40: for (;;) { IF: if (gt <= 40) {

var stI0 = invoker.hasNext__Z(lcA7);
if ((stI0) == 0) { gt = 1423; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA7);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA8 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA8);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 78; break IF; }
{ gt = 0; continue X_40; }
    }
    X_78: for (;;) { IF: if (gt <= 78) {

if (lcA8 !== null && !lcA8['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA9 = lcA8;
var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA9,vm.net_java_html_json_OnReceive(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_OnReceive']) throw vm.java_lang_ClassCastException(true);
var lcA10 = stA0;
if ((lcA10) !== null) { gt = 108; break IF; }
{ gt = 0; continue X_40; }
    }
    X_108: for (;;) { IF: if (gt <= 108) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA9);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_STATIC']());
if ((stI0) != 0) { gt = 137; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method needs to be static", lcA9);
return 0;
    }
    X_137: for (;;) { IF: if (gt <= 137) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA9);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_PRIVATE']());
if ((stI0) == 0) { gt = 166; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method cannot be private", lcA9);
return 0;
    }
    X_166: for (;;) { IF: if (gt <= 166) {

var stA0 = invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) === (vm.javax_lang_model_type_TypeKind(false)['_VOID']())) { gt = 195; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method should return void", lcA9);
return 0;
    }
    X_195: for (;;) { IF: if (gt <= 195) {

var stA0 = invoker.jsonp__Ljava_lang_String_2(lcA10);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 233; break IF; }
var stA1 = invoker.method__Ljava_lang_String_2(lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2("GET",stA1);
if ((stI0) != 0) { gt = 233; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "JSONP works only with GET transport method", lcA9);
    }
    X_233: for (;;) { IF: if (gt <= 233) {

var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findDataSpecified__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2Lnet_java_html_json_OnReceive_2.call(lcA0, lcA9, lcA10);
var lcA11 = stA0;
var stA1 = invoker.method__Ljava_lang_String_2(lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2("PUT",stA1);
if ((stI0) == 0) { gt = 275; break IF; }
if ((lcA11) !== null) { gt = 275; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "PUT method needs to specify a data() class", lcA9);
return 0;
    }
    X_275: for (;;) { IF: if (gt <= 275) {

var stA1 = invoker.method__Ljava_lang_String_2(lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2("POST",stA1);
if ((stI0) == 0) { gt = 307; break IF; }
if ((lcA11) !== null) { gt = 307; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "POST method needs to specify a data() class", lcA9);
return 0;
    }
    X_307: for (;;) { IF: if (gt <= 307) {

var stA0 = invoker.getParameters__Ljava_util_List_2(lcA9);
var stI0 = invoker.size__I(stA0);
if ((stI0) >= (2)) { gt = 332; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive method needs at least two parameters", lcA9);
    }
    X_332: for (;;) { IF: if (gt <= 332) {

var lcI12 = 0;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA13 = stA0;
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA14 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA9);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA15 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA15);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_DECLARED']())) { gt = 409; break IF; }
if (lcA15 !== null && !lcA15['$instOf_javax_lang_model_type_DeclaredType']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2(lcA15);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(stA0);
var lcA16 = stA0;
{ gt = 418; break IF; }
    }
    X_409: for (;;) { IF: if (gt <= 409) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA15);
var lcA16 = stA0;
    }
    X_418: for (;;) { IF: if (gt <= 418) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA16);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA3);
if ((stI0) == 0) { gt = 445; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA13,"model");
{ gt = 473; break IF; }
    }
    X_445: for (;;) { IF: if (gt <= 445) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"First parameter needs to be ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA9);
return 0;
    }
    X_473: for (;;) { IF: if (gt <= 473) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var lcA16 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA9);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,1);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA17 = stA0;
var lcA18 = null;
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(lcA16,lcA17);
var lcA19 = stA0;
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, lcA17);
if ((stI0) == 0) { gt = 537; break IF; }
var lcA18 = lcA17;
{ gt = 645; break IF; }
    }
    X_537: for (;;) { IF: if (gt <= 537) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA17);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_ARRAY']())) { gt = 568; break IF; }
if (lcA17 !== null && !lcA17['$instOf_javax_lang_model_type_ArrayType']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2(lcA17);
var lcA18 = stA0;
var lcI12 = 1;
{ gt = 645; break IF; }
    }
    X_568: for (;;) { IF: if (gt <= 568) {

var stA0 = "java.util.List";var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA19, lcA9);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 626; break IF; }
if (lcA17 !== null && !lcA17['$instOf_javax_lang_model_type_DeclaredType']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getTypeArguments__Ljava_util_List_2(lcA17);
var lcA20 = stA0;
var stI0 = invoker.size__I(lcA20);
if ((stI0) != (1)) { gt = 623; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(lcA20,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_type_TypeMirror']) throw vm.java_lang_ClassCastException(true);
var lcA18 = stA0;
var lcI12 = 2;
    }
    X_623: for (;;) { IF: if (gt <= 623) {
{ gt = 645; break IF; }
    }
    X_626: for (;;) { IF: if (gt <= 626) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA17);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"java.lang.String");
if ((stI0) == 0) { gt = 645; break IF; }
var lcA18 = lcA17;
    }
    X_645: for (;;) { IF: if (gt <= 645) {

if ((lcA18) !== null) { gt = 661; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Second arguments needs to be a model, String or array or List of models", lcA9);
return 0;
    }
    X_661: for (;;) { IF: if (gt <= 661) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA18);
var lcA15 = stA0;
if ((lcI12) != (1)) { gt = 690; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA13,"arr");
{ gt = 721; break IF; }
    }
    X_690: for (;;) { IF: if (gt <= 690) {

if ((lcI12) != (2)) { gt = 710; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA13,"java.util.Arrays.asList(arr)");
{ gt = 721; break IF; }
    }
    X_710: for (;;) { IF: if (gt <= 710) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA13,"arr[0]");
    }
    X_721: for (;;) { IF: if (gt <= 721) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA16 = stA0;
var stA1 = invoker.method__Ljava_lang_String_2(lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2("WebSocket",stA1);
var lcI17 = stI0;
if ((lcI17) == 0) { gt = 785; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  /** Performs WebSocket communication. Call with <code>null</code> data parameter\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  * to open the connection (even if not required). Call with non-null data to\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  * send messages to server. Call again with <code>null</code> data to close the socket.\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  */\n");
    }
    X_785: for (;;) { IF: if (gt <= 785) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  public void ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA16);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,"(");
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA18 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA19 = stA0;
var lcA20 = null;
var lcA21 = "";
var stA0 = invoker.jsonp__Ljava_lang_String_2(lcA10);
var stI0 = invoker.isEmpty__Z(stA0);
var lcI22 = stI0;
var stA2 = invoker.url__Ljava_lang_String_2(lcA10);
var stA3 = invoker.jsonp__Ljava_lang_String_2(lcA10);
var stA0 = lcA0;var stA1 = lcA9;var stA4 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/StringBuilder;', vm.java_lang_StringBuilder, 2);
Array.at(stA4, 0, lcA18);
Array.at(stA4, 1, lcA19);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findParamNames__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_StringBuilder_2.call(stA0, stA1, stA2, stA3, stA4);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA23 = stA0;
    }
    X_881: for (;;) { IF: if (gt <= 881) {

var stI0 = invoker.hasNext__Z(lcA23);
if ((stI0) == 0) { gt = 960; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA23);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA24 = stA0;
if ((lcI22) != 0) { gt = 933; break IF; }
var stA1 = invoker.jsonp__Ljava_lang_String_2(lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA24,stA1);
if ((stI0) == 0) { gt = 933; break IF; }
var lcI22 = 1;
var lcA20 = lcA24;
{ gt = 0; continue X_881; }
    }
    X_933: for (;;) { IF: if (gt <= 933) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA21);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"String ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA24);
var lcA21 = ", ";
{ gt = 0; continue X_881; }
    }
    X_960: for (;;) { IF: if (gt <= 960) {

if ((lcI22) != 0) { gt = 1019; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Name of jsonp attribute ('");
var stA2 = invoker.jsonp__Ljava_lang_String_2(lcA10);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"') is not used in url attribute '");
var stA2 = invoker.url__Ljava_lang_String_2(lcA10);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"'");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA9);
    }
    X_1019: for (;;) { IF: if (gt <= 1019) {

if ((lcA11) === null) { gt = 1045; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA21);
var stA1 = invoker.toString__Ljava_lang_String_2(lcA11);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," data");
    }
    X_1045: for (;;) { IF: if (gt <= 1045) {

var lcI23 = 2;
    }
    X_1048: for (;;) { IF: if (gt <= 1048) {

var stA1 = invoker.getParameters__Ljava_util_List_2(lcA9);
var stI1 = invoker.size__I(stA1);
if ((lcI23) >= (stI1)) { gt = 1242; break IF; }
if ((lcI17) == 0) { gt = 1081; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "@OnReceive(method=\"WebSocket\") can only have two arguments", lcA9);
return 0;
    }
    X_1081: for (;;) { IF: if (gt <= 1081) {

var stA0 = invoker.getParameters__Ljava_util_List_2(lcA9);
var stA0 = invoker.get__Ljava_lang_Object_2I(stA0,lcI23);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA24 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA21);
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA24);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA24);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA24);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA25 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findBoxedType__Ljava_lang_String_2Ljava_lang_String_2(lcA25);
var lcA26 = stA0;
if ((lcA26) !== null) { gt = 1167; break IF; }
var lcA26 = lcA25;
    }
    X_1167: for (;;) { IF: if (gt <= 1167) {

var stA0 = lcA13;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA26);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,")params[");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,(lcI23).sub32(2));
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"]");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA24);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA14,stA1);
var lcA21 = ", ";
lcI23++;
{ gt = 0; continue X_1048; }
    }
    X_1242: for (;;) { IF: if (gt <= 1242) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,") {\n");
var stA0 = invoker.method__Ljava_lang_String_2(lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,"WebSocket");
var lcI21 = stI0;
if ((lcI21) == 0) { gt = 1364; break IF; }
var stA0 = lcA0;var stI1 = lcI6;lcI6++;
var stA2 = lcA2;var stA3 = lcA5;var stA4 = lcA10;var stA5 = lcA9;var stA6 = lcA1;var stA7 = lcA3;if ((lcI12) == 0) { gt = 1293; break IF; }
var stI8 = 1;{ gt = 1294; break IF; }
    }
    X_1293: for (;;) { IF: if (gt <= 1293) {

var stI8 = 0;    }
    X_1294: for (;;) { IF: if (gt <= 1294) {

var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateWSReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2.call(stA0, stI1, stA2, stA3, stA4, stA5, stA6, stA7, stI8, lcA15, lcA16, lcA13, lcA14, lcA18, lcA20, lcA19, lcA11);
if ((stI0) == 0) { gt = 1318; break IF; }
return 0;
    }
    X_1318: for (;;) { IF: if (gt <= 1318) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  }\n");
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private Object ws_");
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
{ gt = 1420; break IF; }
    }
    X_1364: for (;;) { IF: if (gt <= 1364) {

var stA0 = lcA0;var stI1 = lcI6;lcI6++;
var stA2 = lcA2;var stA3 = lcA5;var stA4 = lcA10;var stA5 = lcA9;var stA6 = lcA1;var stA7 = lcA3;if ((lcI12) == 0) { gt = 1388; break IF; }
var stI8 = 1;{ gt = 1389; break IF; }
    }
    X_1388: for (;;) { IF: if (gt <= 1388) {

var stI8 = 0;    }
    X_1389: for (;;) { IF: if (gt <= 1389) {

var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).generateJSONReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2.call(stA0, stI1, stA2, stA3, stA4, stA5, stA6, stA7, stI8, lcA15, lcA16, lcA13, lcA14, lcA18, lcA20, lcA19, lcA11);
if ((stI0) == 0) { gt = 1413; break IF; }
return 0;
    }
    X_1413: for (;;) { IF: if (gt <= 1413) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"  }\n");
    }
    X_1420: for (;;) { IF: if (gt <= 1420) {
{ gt = 0; continue X_40; }
    }
    X_1423: for (;;) { IF: if (gt <= 1423) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"    }\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"    throw new UnsupportedOperationException(\"index: \" + index + \" type: \" + type);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA5,"  }\n");
return 1;

    }
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateJSONReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcI8, lcA9, lcA10, lcA11, lcA12, lcA13, lcA14, lcA15, lcA16) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": {\n");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      if (type == 2) { /* on error */\n");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        Exception ex = (Exception)data;\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 67; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ex.printStackTrace();\n");
{ gt = 138; break IF; }
    }
    X_67: for (;;) { IF: if (gt <= 67) {

if (lcA6 !== null && !lcA6['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var stA3 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findOnError__ZLjavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2.call(lcA0, lcA5, lcA6, stA3, lcA7);
if ((stI0) != 0) { gt = 92; break IF; }
return 1;
    }
    X_92: for (;;) { IF: if (gt <= 92) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.onError__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"model, ex);\n");
    }
    X_138: for (;;) { IF: if (gt <= 138) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      } else if (type == 1) {\n        Object[] ev = (Object[])data;\n");
if ((lcI8) == 0) { gt = 197; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[ev.length];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
{ gt = 229; break IF; }
    }
    X_197: for (;;) { IF: if (gt <= 197) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = { null };\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
    }
    X_229: for (;;) { IF: if (gt <= 229) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        TYPE.copyJSON(model.proto.getContext(), ev, ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, arr);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA17 = "";
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA11);
var lcA18 = stA0;
    }
    X_307: for (;;) { IF: if (gt <= 307) {

var stI0 = invoker.hasNext__Z(lcA18);
if ((stI0) == 0) { gt = 350; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA18);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA19 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA17);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA19);
var lcA17 = ", ";
{ gt = 0; continue X_307; }
    }
    X_350: for (;;) { IF: if (gt <= 350) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      }\n    }\n");
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.loadJSON(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,",\n        ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", ");
if ((lcA14) === null) { gt = 423; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA15);
{ gt = 431; break IF; }
    }
    X_423: for (;;) { IF: if (gt <= 423) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"null");
    }
    X_431: for (;;) { IF: if (gt <= 431) {

var stA1 = invoker.method__Ljava_lang_String_2(lcA4);
var stI0 = invoker.equals__ZLjava_lang_Object_2("GET",stA1);
if ((stI0) == 0) { gt = 452; break IF; }
if ((lcA16) === null) { gt = 502; break IF; }
    }
    X_452: for (;;) { IF: if (gt <= 452) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", \"");
var stA1 = invoker.method__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2C(stA0,(34));
if ((lcA16) === null) { gt = 491; break IF; }
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", data");
{ gt = 510; break IF; }
    }
    X_491: for (;;) { IF: if (gt <= 491) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", null");
{ gt = 510; break IF; }
    }
    X_502: for (;;) { IF: if (gt <= 502) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", null, null");
    }
    X_510: for (;;) { IF: if (gt <= 510) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA12);
var lcA17 = stA0;
    }
    X_519: for (;;) { IF: if (gt <= 519) {

var stI0 = invoker.hasNext__Z(lcA17);
if ((stI0) == 0) { gt = 556; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA17);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA18 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA18);
{ gt = 0; continue X_519; }
    }
    X_556: for (;;) { IF: if (gt <= 556) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,");\n");
return 0;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.generateWSReceiveBody__ZILjava_io_StringWriter_2Ljava_lang_StringBuilder_2Lnet_java_html_json_OnReceive_2Ljavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2ZLjava_lang_String_2Ljava_lang_String_2Ljava_util_List_2Ljava_util_List_2Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6, lcA7, lcI8, lcA9, lcA10, lcA11, lcA12, lcA13, lcA14, lcA15, lcA16) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    case ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,": {\n");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"      if (type == 0) { /* on open */\n");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA17 = "";
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA11);
var lcA18 = stA0;
    }
    X_81: for (;;) { IF: if (gt <= 81) {

var stI0 = invoker.hasNext__Z(lcA18);
if ((stI0) == 0) { gt = 157; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA18);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA19 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA17);
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA19,"arr");
if ((stI0) != 0) { gt = 132; break IF; }
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA19,"java.util.Array");
if ((stI0) == 0) { gt = 143; break IF; }
    }
    X_132: for (;;) { IF: if (gt <= 132) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"null");
{ gt = 150; break IF; }
    }
    X_143: for (;;) { IF: if (gt <= 143) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA19);
    }
    X_150: for (;;) { IF: if (gt <= 150) {

var lcA17 = ", ";
{ gt = 0; continue X_81; }
    }
    X_157: for (;;) { IF: if (gt <= 157) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      } else if (type == 2) { /* on error */\n        Exception value = (Exception)data;\n");
var stA0 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 196; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        value.printStackTrace();\n");
{ gt = 267; break IF; }
    }
    X_196: for (;;) { IF: if (gt <= 196) {

if (lcA6 !== null && !lcA6['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var stA3 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findOnError__ZLjavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2.call(lcA0, lcA5, lcA6, stA3, lcA7);
if ((stI0) != 0) { gt = 221; break IF; }
return 1;
    }
    X_221: for (;;) { IF: if (gt <= 221) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.onError__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"model, value);\n");
    }
    X_267: for (;;) { IF: if (gt <= 267) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      } else if (type == 1) {\n        Object[] ev = (Object[])data;\n");
if ((lcI8) == 0) { gt = 326; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[ev.length];\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
{ gt = 358; break IF; }
    }
    X_326: for (;;) { IF: if (gt <= 326) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"[] arr = { null };\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
    }
    X_358: for (;;) { IF: if (gt <= 358) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"        TYPE.copyJSON(model.proto.getContext(), ev, ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA9);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".class, arr);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var lcA17 = "";
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA11);
var lcA18 = stA0;
    }
    X_436: for (;;) { IF: if (gt <= 436) {

var stI0 = invoker.hasNext__Z(lcA18);
if ((stI0) == 0) { gt = 479; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA18);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA19 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA17);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,lcA19);
var lcA17 = ", ";
{ gt = 0; continue X_436; }
    }
    X_479: for (;;) { IF: if (gt <= 479) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,");\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;\n      }");
var stA0 = invoker.onError__Ljava_lang_String_2(lcA4);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) != 0) { gt = 569; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3," else if (type == 3) { /* on close */\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        ");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.onError__Ljava_lang_String_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"model, null);\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"        return;      }");
    }
    X_569: for (;;) { IF: if (gt <= 569) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"\n");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA3,"    }\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"    if (this.ws_");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0," == null) {\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"      this.ws_");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"= proto.wsOpen(");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2I(stA1,lcI1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", data);\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"    } else {\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"      proto.wsSend(this.ws_");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA13);
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,", data");
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA12);
var lcA17 = stA0;
    }
    X_719: for (;;) { IF: if (gt <= 719) {

var stI0 = invoker.hasNext__Z(lcA17);
if ((stI0) == 0) { gt = 756; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA17);
if (stA0 !== null && !stA0['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var lcA18 = stA0;
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,", ");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(stA0,lcA18);
{ gt = 0; continue X_719; }
    }
    X_756: for (;;) { IF: if (gt <= 756) {

var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,");\n");
var stA0 = invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2(lcA2,"    }\n");
return 0;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapParams__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.String");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA7 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA8 = stA0;
var lcI9 = 1;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA10 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.hasNext__Z(lcA10);
if ((stI0) == 0) { gt = 612; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA10);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA11 = stA0;
if ((lcI9) != 0) { gt = 83; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,", ");
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var lcI9 = 0;
var lcA12 = null;
var lcA13 = null;
var lcI14 = 1;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
if ((stA0) !== (lcA7)) { gt = 168; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"id");
if ((stI0) == 0) { gt = 145; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA8,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA2);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
{ gt = 0; continue X_48; }
    }
    X_145: for (;;) { IF: if (gt <= 145) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toString(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_DOUBLE']())) { gt = 214; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".doubleValue()";
    }
    X_214: for (;;) { IF: if (gt <= 214) {

var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(stA0);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_INT']())) { gt = 260; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toNumber(");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcA13 = ".intValue()";
    }
    X_260: for (;;) { IF: if (gt <= 260) {

if ((lcA6) === null) { gt = 337; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA6);
if ((stI0) == 0) { gt = 337; break IF; }
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).isModel__ZLjavax_lang_model_type_TypeMirror_2.call(lcA0, stA1);
if ((stI0) == 0) { gt = 337; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".proto.toModel(");
var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".class, ");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var lcI14 = 0;
    }
    X_337: for (;;) { IF: if (gt <= 337) {

if ((lcA12) === null) { gt = 519; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA12);
if ((lcA6) === null) { gt = 397; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA6);
if ((stI0) == 0) { gt = 397; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA6);
if ((lcI14) == 0) { gt = 495; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,", null");
{ gt = 495; break IF; }
    }
    X_397: for (;;) { IF: if (gt <= 397) {

if ((lcA5) !== null) { gt = 454; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA15 = stA0;
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA15,"Unexpected string parameter name.");
if ((lcA6) === null) { gt = 444; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA15," Try \"");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\"");
    }
    X_444: for (;;) { IF: if (gt <= 444) {

var stA1 = invoker.toString__Ljava_lang_String_2(lcA15);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, stA1, lcA1);
    }
    X_454: for (;;) { IF: if (gt <= 454) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA5);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,", \"");
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA11);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,"\"");
    }
    X_495: for (;;) { IF: if (gt <= 495) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,")");
if ((lcA13) === null) { gt = 0; continue X_48; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA13);
{ gt = 0; continue X_48; }
    }
    X_519: for (;;) { IF: if (gt <= 519) {

var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA11);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, stA1, lcA1);
var lcA15 = stA0;
var stI0 = invoker.lastIndexOf__II(lcA15,(46));
var lcI16 = stI0;
if ((lcI16) < 0) { gt = 558; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA15,(lcI16).add32(1));
var lcA15 = stA0;
    }
    X_558: for (;;) { IF: if (gt <= 558) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA15,lcA3);
if ((stI0) == 0) { gt = 578; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA8,lcA4);
{ gt = 0; continue X_48; }
    }
    X_578: for (;;) { IF: if (gt <= 578) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"The annotated method can only accept ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," argument or argument named 'data'");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
{ gt = 0; continue X_48; }
    }
    X_612: for (;;) { IF: if (gt <= 612) {

return lcA8;

    }
}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.wrapPropName__Ljava_lang_CharSequence_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.String");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA5 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA6 = stA0;
var lcI7 = 1;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA8 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.hasNext__Z(lcA8);
if ((stI0) == 0) { gt = 266; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA8);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var lcA9 = stA0;
if ((lcI7) != 0) { gt = 83; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,", ");
    }
    X_83: for (;;) { IF: if (gt <= 83) {

var lcI7 = 0;
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
if ((stA0) !== (lcA5)) { gt = 173; break IF; }
if ((lcA3) === null) { gt = 139; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA9);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA3);
if ((stI0) == 0) { gt = 139; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(lcA6,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
{ gt = 0; continue X_48; }
    }
    X_139: for (;;) { IF: if (gt <= 139) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Unexpected string parameter name. Try \"");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA3);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\".");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
{ gt = 0; continue X_48; }
    }
    X_173: for (;;) { IF: if (gt <= 173) {

var stA1 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA9);
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2.call(lcA0, stA1, lcA1);
var lcA10 = stA0;
var stI0 = invoker.lastIndexOf__II(lcA10,(46));
var lcI11 = stI0;
if ((lcI11) < 0) { gt = 212; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA10,(lcI11).add32(1));
var lcA10 = stA0;
    }
    X_212: for (;;) { IF: if (gt <= 212) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA10,lcA2);
if ((stI0) == 0) { gt = 232; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(lcA6,"model");
{ gt = 0; continue X_48; }
    }
    X_232: for (;;) { IF: if (gt <= 232) {

var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"@OnPrprtChange method can only accept String or ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," arguments");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
{ gt = 0; continue X_48; }
    }
    X_266: for (;;) { IF: if (gt <= 266) {

return lcA6;

    }
}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.isModel__ZLjavax_lang_model_type_TypeMirror_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA1);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_ERROR']())) { gt = 14; break IF; }
return 1;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA1);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 36; break IF; }
return 0;
    }
    X_36: for (;;) { IF: if (gt <= 36) {

var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 126; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA4);
if ((stA0) !== (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 123; break IF; }
if (lcA4 !== null && !lcA4['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA5 = lcA4;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA5);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 123; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA5);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"modelFor");
if ((stI0) == 0) { gt = 123; break IF; }
return 1;
    }
    X_123: for (;;) { IF: if (gt <= 123) {
{ gt = 0; continue X_48; }
    }
    X_126: for (;;) { IF: if (gt <= 126) {

var stA0 = invoker.values__Ljava_util_Collection_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._models.call(lcA0));
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,stA1);
return stI0;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.writeToString__V_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

invoker.write__VLjava_lang_String_2(lcA2,"  public String toString() {\n");
invoker.write__VLjava_lang_String_2(lcA2,"    StringBuilder sb = new StringBuilder();\n");
invoker.write__VLjava_lang_String_2(lcA2,"    sb.append('{');\n");
var lcA3 = "";
var lcA4 = lcA1;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_35: for (;;) { IF: if (gt <= 35) {

if ((lcI6) >= (lcI5)) { gt = 131; break IF; }
var lcA7 = Array.at(lcA4, lcI6);
invoker.write__VLjava_lang_String_2(lcA2,lcA3);
var stA0 = lcA2;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    sb.append('\"').append(\"");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"\")");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,".append('\"').append(\":\");\n");
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,"    sb.append(TYPE.toJSON(prop_");
var stA1 = lcA7.name__Ljava_lang_String_2();
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(lcA2,stA1);
var stA0 = invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2(stA0,"));\n");
var lcA3 = "    sb.append(',');\n";
lcI6++;
{ gt = 0; continue X_35; }
    }
    X_131: for (;;) { IF: if (gt <= 131) {

invoker.write__VLjava_lang_String_2(lcA2,"    sb.append('}');\n");
invoker.write__VLjava_lang_String_2(lcA2,"    return sb.toString();\n");
invoker.write__VLjava_lang_String_2(lcA2,"  }\n");
return;

    }
}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.writeClone__VLjava_lang_String_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_io_Writer_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  public ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," clone() {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
invoker.write__VLjava_lang_String_2(lcA3,"    return clone(proto.getContext());\n");
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  private ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," clone(net.java.html.BrwsrCtx ctx) {\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," ret = new ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"(ctx);\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
var lcA4 = lcA2;
var lcI5 = (lcA4).length;
var lcI6 = 0;
    }
    X_121: for (;;) { IF: if (gt <= 121) {

if ((lcI6) >= (lcI5)) { gt = 358; break IF; }
var lcA7 = Array.at(lcA4, lcI6);
var stI0 = lcA7.array__Z();
if ((stI0) != 0) { gt = 305; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA8 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA9 = stA0;
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, 1);
Array.at(stA0, 0, 0);
var lcA10 = stA0;
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z.call(lcA0, lcA7, lcA8, lcA9, lcA10);
if ((Array.at(lcA8, 0)) != 0) { gt = 240; break IF; }
var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ret.prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," = prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,";\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 352; break IF; }
    }
    X_240: for (;;) { IF: if (gt <= 240) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    ret.prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1," =  prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"  == null ? null : prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,".clone();\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
{ gt = 352; break IF; }
    }
    X_305: for (;;) { IF: if (gt <= 305) {

var stA0 = lcA3;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"    proto.cloneList(ret.prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,", ctx, prop_");
var stA2 = lcA7.name__Ljava_lang_String_2();
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,stA2);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,");\n");
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
invoker.write__VLjava_lang_String_2(stA0,stA1);
    }
    X_352: for (;;) { IF: if (gt <= 352) {
lcI6++;
{ gt = 0; continue X_121; }
    }
    X_358: for (;;) { IF: if (gt <= 358) {

invoker.write__VLjava_lang_String_2(lcA3,"    return ret;\n");
invoker.write__VLjava_lang_String_2(lcA3,"  }\n");
return;

    }
}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.inPckName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA1);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_PACKAGE']())) { gt = 71; break IF; }
var stI0 = invoker.length__I(lcA2);
if ((stI0) != 0) { gt = 41; break IF; }
var stA1 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2(lcA2,stA1);
{ gt = 61; break IF; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {

var stA0 = invoker.insert__Ljava_lang_StringBuilder_2IC(lcA2,0, (46));
var stA2 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA1);
var stA0 = invoker.insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2(lcA2,0, stA2);
    }
    X_61: for (;;) { IF: if (gt <= 61) {

var stA0 = invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2(lcA1);
var lcA1 = stA0;
{ gt = 0; continue X_8; }
    }
    X_71: for (;;) { IF: if (gt <= 71) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA2);
return stA0;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.fqn__Ljava_lang_String_2Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_element_Element_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA1);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_ERROR']())) { gt = 66; break IF; }
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var lcA3 = stA0;
var stA0 = invoker.getPackageOf__Ljavax_lang_model_element_PackageElement_2Ljavax_lang_model_element_Element_2(lcA3,lcA2);
var lcA4 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA1 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,".");
var stA1 = invoker.toString__Ljava_lang_String_2(lcA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_66: for (;;) { IF: if (gt <= 66) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA1);
return stA0;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.checkType__Ljava_lang_String_2Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Z_3Z_3Z = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = lcA1.typeName__Ljava_lang_String_2Ljavax_annotation_processing_ProcessingEnvironment_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var lcA6 = stA0;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,lcA6);
var lcA7 = stA0;
if ((lcA7) !== null) { gt = 49; break IF; }
Array.at(lcA2, 0, 1);
Array.at(lcA3, 0, 0);
Array.at(lcA4, 0, 0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_javax_lang_model_type_MirroredTypeException']) {var stA0 = e;{ gt = 61; break IF; }}
throw e;
}return lcA6;
    }
    X_49: for (;;) { IF: if (gt <= 49) {
try {
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(lcA7);
var lcA5 = stA0;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_javax_lang_model_type_MirroredTypeException']) {var stA0 = e;{ gt = 61; break IF; }}
throw e;
}{ gt = 70; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {
var lcA6 = stA0;
var stA0 = invoker.getTypeMirror__Ljavax_lang_model_type_TypeMirror_2(lcA6);
var lcA5 = stA0;
    }
    X_70: for (;;) { IF: if (gt <= 70) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA5);
var lcA5 = stA0;
var stA2 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
var stI2 = invoker.isPrimitive__Z(stA2);
var stA0 = lcA4;var stI1 = 0;var stI3 = stI2, stI2 = stI1, stA1 = stA0, stI0 = stI3;
Array.at(stA1, stI2, stI3);
if ((stI0) == 0) { gt = 122; break IF; }
Array.at(lcA3, 0, 0);
Array.at(lcA2, 0, 0);
var stA0 = invoker.toString__Ljava_lang_String_2(lcA5);
return stA0;
    }
    X_122: for (;;) { IF: if (gt <= 122) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA5);
var lcA6 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA6);
if ((stA0) !== (vm.javax_lang_model_element_ElementKind(false)['_CLASS']())) { gt = 185; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA5);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_ERROR']())) { gt = 185; break IF; }
Array.at(lcA2, 0, 1);
Array.at(lcA3, 0, 0);
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;
    }
    X_185: for (;;) { IF: if (gt <= 185) {

if ((lcA6) !== null) { gt = 194; break IF; }
var stA0 = null;{ gt = 206; break IF; }
    }
    X_194: for (;;) { IF: if (gt <= 194) {

var stA0 = invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2(lcA6,vm.net_java_html_json_Model(false).constructor.$class);
if (stA0 !== null && !stA0['$instOf_net_java_html_json_Model']) throw vm.java_lang_ClassCastException(true);
    }
    X_206: for (;;) { IF: if (gt <= 206) {
var lcA7 = stA0;
if ((lcA7) === null) { gt = 274; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA1 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findPkgName__Ljava_lang_String_2Ljavax_lang_model_element_Element_2(lcA6);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(46));
var stA1 = invoker.className__Ljava_lang_String_2(lcA7);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA8 = stA0;
Array.at(lcA2, 0, 1);
var stA2 = invoker.className__Ljava_lang_String_2(lcA7);
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._models.call(lcA0),lcA6, stA2);
{ gt = 313; break IF; }
    }
    X_274: for (;;) { IF: if (gt <= 274) {

var stI0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).findModelForMthd__ZLjavax_lang_model_element_Element_2(lcA6);
if ((stI0) == 0) { gt = 304; break IF; }
if (lcA6 !== null && !lcA6['$instOf_javax_lang_model_element_TypeElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.getQualifiedName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA8 = stA0;
Array.at(lcA2, 0, 1);
{ gt = 313; break IF; }
    }
    X_304: for (;;) { IF: if (gt <= 304) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA5);
var lcA8 = stA0;
    }
    X_313: for (;;) { IF: if (gt <= 313) {

var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,"java.lang.Enum");
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA9 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA9);
var lcA9 = stA0;
var stA2 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stI2 = invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA2,lcA5, lcA9);
Array.at(lcA3, 0, stI2);
return lcA8;

    }
}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findModelForMthd__ZLjavax_lang_model_element_Element_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA0) !== null) { gt = 6; break IF; }
return 0;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA1 = stA0;
    }
    X_18: for (;;) { IF: if (gt <= 18) {

var stI0 = invoker.hasNext__Z(lcA1);
if ((stI0) == 0) { gt = 90; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA1);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA2 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA2);
if ((stA0) !== (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 87; break IF; }
if (lcA2 !== null && !lcA2['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA3 = lcA2;
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA3);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"modelFor");
if ((stI0) == 0) { gt = 87; break IF; }
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA3);
var stI0 = invoker.isEmpty__Z(stA0);
if ((stI0) == 0) { gt = 87; break IF; }
return 1;
    }
    X_87: for (;;) { IF: if (gt <= 87) {
{ gt = 0; continue X_18; }
    }
    X_90: for (;;) { IF: if (gt <= 90) {

return 0;

    }
}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.findParamNames__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljava_lang_String_2Ljava_lang_String_2_3Ljava_lang_StringBuilder_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA0);
var lcA5 = stA0;
var lcI6 = 0;
var lcI7 = 0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = invoker.indexOf__III(lcA2,(123), lcI7);
var lcI8 = stI0;
if ((lcI8) != (-1)) { gt = 59; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(Array.at(lcA4, lcI6),(34));
var stA1 = invoker.substring__Ljava_lang_String_2I(lcA2,lcI7);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
return lcA5;
    }
    X_59: for (;;) { IF: if (gt <= 59) {

var stI0 = invoker.indexOf__III(lcA2,(125), lcI8);
var lcI9 = stI0;
if ((lcI9) != (-1)) { gt = 103; break IF; }
var stA0 = lcA0;var stA1 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA1);
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,"Unbalanced '{' and '}' in ");
var stA1 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA1,lcA2);
var stA1 = invoker.toString__Ljava_lang_String_2(stA1);
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(stA0, stA1, lcA1);
return lcA5;
    }
    X_103: for (;;) { IF: if (gt <= 103) {

var stA0 = invoker.substring__Ljava_lang_String_2II(lcA2,(lcI8).add32(1), lcI9);
var lcA10 = stA0;
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA5,lcA10);
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA10,lcA3);
if ((stI0) == 0) { gt = 174; break IF; }
var stI0 = invoker.isEmpty__Z(lcA3);
if ((stI0) != 0) { gt = 174; break IF; }
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(Array.at(lcA4, lcI6),(34));
var stA1 = invoker.substring__Ljava_lang_String_2II(lcA2,lcI7, lcI8);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var lcI6 = 1;
{ gt = 213; break IF; }
    }
    X_174: for (;;) { IF: if (gt <= 174) {

var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(Array.at(lcA4, lcI6),(34));
var stA1 = invoker.substring__Ljava_lang_String_2II(lcA2,lcI7, lcI8);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"\" + ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA10);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," + ");
    }
    X_213: for (;;) { IF: if (gt <= 213) {

var lcI7 = (lcI9).add32(1);
{ gt = 0; continue X_15; }

    }
}}}}}}
};
    m.access = 130;
    m.cls = CLS;
    m = c.findPrprt__Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2_3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA2 = lcA0;
var lcI3 = (lcA2).length;
var lcI4 = 0;
    }
    X_8: for (;;) { IF: if (gt <= 8) {

if ((lcI4) >= (lcI3)) { gt = 41; break IF; }
var lcA5 = Array.at(lcA2, lcI4);
var stA1 = lcA5.name__Ljava_lang_String_2();
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,stA1);
if ((stI0) == 0) { gt = 35; break IF; }
return lcA5;
    }
    X_35: for (;;) { IF: if (gt <= 35) {
lcI4++;
{ gt = 0; continue X_8; }
    }
    X_41: for (;;) { IF: if (gt <= 41) {

return null;

    }
}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.isPrimitive__ZLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("int",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("double",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("long",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("short",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("byte",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("char",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("boolean",lcA1);
if ((stI0) != 0) { gt = 78; break IF; }
var stI0 = invoker.equals__ZLjava_lang_Object_2("float",lcA1);
if ((stI0) == 0) { gt = 82; break IF; }
    }
    X_78: for (;;) { IF: if (gt <= 78) {

var stI0 = 1;{ gt = 83; break IF; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {

var stI0 = 0;    }
    X_83: for (;;) { IF: if (gt <= 83) {
return stI0;

    }
}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.findDerivedFrom__Ljava_util_Collection_2Ljava_util_Map_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_HashSet;
vm.java_util_HashSet(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = invoker.entrySet__Ljava_util_Set_2(lcA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_20: for (;;) { IF: if (gt <= 20) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 113; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Collection']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA5 = stA0;
    }
    X_57: for (;;) { IF: if (gt <= 57) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 110; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.java_lang_String)) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(Array.at(lcA6, 0),lcA1);
if ((stI0) == 0) { gt = 107; break IF; }
var stA1 = invoker.getKey__Ljava_lang_Object_2(lcA4);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,stA1);
{ gt = 110; break IF; }
    }
    X_107: for (;;) { IF: if (gt <= 107) {
{ gt = 0; continue X_57; }
    }
    X_110: for (;;) { IF: if (gt <= 110) {
{ gt = 0; continue X_20; }
    }
    X_113: for (;;) { IF: if (gt <= 113) {

return lcA2;

    }
}}}}}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.createProps___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor$Prprt(false).wrap___3Lorg_netbeans_html_json_impl_ModelProcessor$Prprt_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2_3Lnet_java_html_json_Property_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0), lcA1, lcA2);
var lcA3 = stA0;
var stA0 = invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._verify.call(lcA0),lcA1, lcA3);
if (stA0 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](stA0, 1, vm.org_netbeans_html_json_impl_ModelProcessor$Prprt)) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
if ((lcA4) === null) { gt = 39; break IF; }
vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, "Two sets of properties for ", lcA1);
    }
    X_39: for (;;) { IF: if (gt <= 39) {

return lcA3;

    }
}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.strip__Ljava_lang_String_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.indexOf__ILjava_lang_String_2(lcA0,"__");
var lcI1 = stI0;
if ((lcI1) < 0) { gt = 19; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA0,0, lcI1);
return stA0;
    }
    X_19: for (;;) { IF: if (gt <= 19) {

return lcA0;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = c.findDataSpecified__Ljava_lang_String_2Ljavax_lang_model_element_ExecutableElement_2Lnet_java_html_json_OnReceive_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = invoker.data__Ljava_lang_Class_2(lcA2);
var stA0 = invoker.getName__Ljava_lang_String_2(stA0);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_javax_lang_model_type_MirroredTypeException']) {var stA0 = e;{ gt = 10; break IF; }}
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 103; break IF; }}
throw e;
}return stA0;
    }
    X_10: for (;;) { IF: if (gt <= 10) {
var lcA3 = stA0;
var stA0 = invoker.getTypeMirror__Ljavax_lang_model_type_TypeMirror_2(lcA3);
var lcA4 = stA0;
var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA0 = invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA4);
var lcA6 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA6);
if ((stA0) !== (vm.javax_lang_model_element_ElementKind(false)['_CLASS']())) { gt = 76; break IF; }
var stA0 = invoker.getKind__Ljavax_lang_model_type_TypeKind_2(lcA4);
if ((stA0) !== (vm.javax_lang_model_type_TypeKind(false)['_ERROR']())) { gt = 76; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
{ gt = 85; break IF; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {

var stA0 = invoker.toString__Ljava_lang_String_2(lcA4);
var lcA5 = stA0;
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stI0 = invoker.equals__ZLjava_lang_Object_2("java.lang.Object",lcA5);
if ((stI0) == 0) { gt = 100; break IF; }
var stA0 = null;{ gt = 102; break IF; }
    }
    X_100: for (;;) { IF: if (gt <= 100) {

var stA0 = lcA5;    }
    X_102: for (;;) { IF: if (gt <= 102) {
return stA0;
    }
    X_103: for (;;) { IF: if (gt <= 103) {
var lcA3 = stA0;
var lcA3 = null;
var stA0 = invoker.getAnnotationMirrors__Ljava_util_List_2(lcA1);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_119: for (;;) { IF: if (gt <= 119) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 169; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationMirror']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2(lcA5);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_json_OnReceive(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 166; break IF; }
var lcA3 = lcA5;
    }
    X_166: for (;;) { IF: if (gt <= 166) {
{ gt = 0; continue X_119; }
    }
    X_169: for (;;) { IF: if (gt <= 169) {

if ((lcA3) !== null) { gt = 175; break IF; }
return null;
    }
    X_175: for (;;) { IF: if (gt <= 175) {

var stA0 = invoker.getElementValues__Ljava_util_Map_2(lcA3);
var stA0 = invoker.entrySet__Ljava_util_Set_2(stA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA4 = stA0;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

var stI0 = invoker.hasNext__Z(lcA4);
if ((stI0) == 0) { gt = 350; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_java_util_Map$Entry']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
var stA0 = invoker.getKey__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var stA0 = invoker.getValue__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_AnnotationValue']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA6);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"data");
if ((stI0) == 0) { gt = 347; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_ModelProcessor(false).getAnnoValues__Ljava_util_List_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0), lcA1, lcA3);
var lcA8 = stA0;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA8);
var lcA9 = stA0;
    }
    X_276: for (;;) { IF: if (gt <= 276) {

var stI0 = invoker.hasNext__Z(lcA9);
if ((stI0) == 0) { gt = 343; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA9);
var lcA10 = stA0;
var stA0 = invoker.toString__Ljava_lang_String_2(lcA10);
var lcA11 = stA0;
var stI0 = invoker.startsWith__ZLjava_lang_String_2(lcA11,"data = ");
if ((stI0) == 0) { gt = 340; break IF; }
var stI0 = invoker.endsWith__ZLjava_lang_String_2(lcA11,".class");
if ((stI0) == 0) { gt = 340; break IF; }
var stI2 = invoker.length__I(lcA11);
var stA0 = invoker.substring__Ljava_lang_String_2II(lcA11,(7), (stI2).sub32((6)));
return stA0;
    }
    X_340: for (;;) { IF: if (gt <= 340) {
{ gt = 0; continue X_276; }
    }
    X_343: for (;;) { IF: if (gt <= 343) {

return "error";
    }
    X_347: for (;;) { IF: if (gt <= 347) {
{ gt = 0; continue X_193; }
    }
    X_350: for (;;) { IF: if (gt <= 350) {

return null;

    }
}}}}}}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.getAnnoValues__Ljava_util_List_2Ljavax_annotation_processing_ProcessingEnvironment_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2 = function(lcA0, lcA1, lcA2) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = vm.java_lang_Class(false)['forName__Ljava_lang_Class_2Ljava_lang_String_2']("com.sun.tools.javac.api.JavacTrees");
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = "instance";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 1);
Array.at(stA2, 0, vm.javax_annotation_processing_ProcessingEnvironment(false).constructor.$class);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = null;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA2, 0, lcA0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA5 = stA0;
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA5);
var stA1 = "getPath";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 2);
Array.at(stA2, 0, vm.javax_lang_model_element_Element(false).constructor.$class);
Array.at(stA2, 1, vm.javax_lang_model_element_AnnotationMirror(false).constructor.$class);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = lcA5;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 2);
Array.at(stA2, 0, lcA1);
Array.at(stA2, 1, lcA2);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA6 = stA0;
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA6);
var stA1 = "getLeaf";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 0);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = lcA6;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
var lcA7 = stA0;
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA7);
var stA1 = "getArguments";var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Class;', vm.java_lang_Class, 0);
var stA0 = invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2(stA0,stA1, stA2);
var lcA4 = stA0;
var stA0 = lcA4;var stA1 = lcA7;var stA2 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
var stA0 = invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stA2);
if (stA0 !== null && !stA0['$instOf_java_util_List']) throw vm.java_lang_ClassCastException(true);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 153; break IF; }}
throw e;
}return stA0;
    }
    X_153: for (;;) { IF: if (gt <= 153) {
var lcA3 = stA0;
var stA0 = vm.java_util_Collections(false)['emptyList__Ljava_util_List_2']();
return stA0;

    }
}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA5 = vm.java_util_logging_Level(false)['_FINE']();
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._LOG(),lcA5, " element: {0}", lcA1);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._LOG(),lcA5, " annotation: {0}", lcA2);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._LOG(),lcA5, " member: {0}", lcA3);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._LOG(),lcA5, " userText: {0}", lcA4);
var stA3 = invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2(lcA2);
var stA3 = invoker.toString__Ljava_lang_String_2(stA3);
invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)._LOG(),lcA5, "str: {0}", stA3);
var stA0 = invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2(lcA2);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = invoker.getName__Ljava_lang_String_2(vm.net_java_html_json_OnReceive(false).constructor.$class);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 175; break IF; }
var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA3);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,"method");
if ((stI0) == 0) { gt = 175; break IF; }
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljavax/annotation/processing/Completion;', vm.javax_annotation_processing_Completion, (6));
var stA1 = stA0;var stI2 = 0;var stA3 = vm.org_netbeans_html_json_impl_ModelProcessor(false).methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("GET");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 1;var stA3 = vm.org_netbeans_html_json_impl_ModelProcessor(false).methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("POST");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 2;var stA3 = vm.org_netbeans_html_json_impl_ModelProcessor(false).methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("PUT");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 3;var stA3 = vm.org_netbeans_html_json_impl_ModelProcessor(false).methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("DELETE");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 4;var stA3 = vm.org_netbeans_html_json_impl_ModelProcessor(false).methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("HEAD");
Array.at(stA1, stI2, stA3);
var stA1 = stA0;var stI2 = 5;var stA3 = vm.org_netbeans_html_json_impl_ModelProcessor(false).methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2("WebSocket");
Array.at(stA1, stI2, stA3);
var stA0 = vm.java_util_Arrays(false)['asList__Ljava_util_List_2_3Ljava_lang_Object_2'](stA0);
return stA0;
    }
    X_175: for (;;) { IF: if (gt <= 175) {

var stA0 = vm.javax_annotation_processing_AbstractProcessor(false)['getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2'].call(lcA0, lcA1, lcA2, lcA3, lcA4);
return stA0;

    }
}}
};
c['getCompletions__Ljava_lang_Iterable_2Ljavax_lang_model_element_Element_2Ljavax_lang_model_element_AnnotationMirror_2Ljavax_lang_model_element_ExecutableElement_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.methodOf__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2 = function(lcA0) {
var stA0 = vm.java_util_ResourceBundle(false)['getBundle__Ljava_util_ResourceBundle_2Ljava_lang_String_2']("org.netbeans.html.json.impl.Bundle");
var lcA1 = stA0;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2C(stA0,(34));
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var stA1 = lcA1;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"MSG_Completion_");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,lcA0);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
var stA1 = invoker.getString__Ljava_lang_String_2Ljava_lang_String_2(stA1,stA2);
var stA0 = vm.javax_annotation_processing_Completions(false)['of__Ljavax_annotation_processing_Completion_2Ljava_lang_String_2Ljava_lang_String_2'](stA0, stA1);
return stA0;

};
    m.access = 26;
    m.cls = CLS;
    m = c.findOnError__ZLjavax_lang_model_element_ExecutableElement_2Ljavax_lang_model_element_TypeElement_2Ljava_lang_String_2Ljava_lang_String_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA5 = null;
var stA0 = invoker.getEnclosedElements__Ljava_util_List_2(lcA2);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA6 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA6);
if ((stI0) == 0) { gt = 313; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA6);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_Element']) throw vm.java_lang_ClassCastException(true);
var lcA7 = stA0;
var stA0 = invoker.getKind__Ljavax_lang_model_element_ElementKind_2(lcA7);
if ((stA0) === (vm.javax_lang_model_element_ElementKind(false)['_METHOD']())) { gt = 54; break IF; }
{ gt = 0; continue X_16; }
    }
    X_54: for (;;) { IF: if (gt <= 54) {

var stA0 = invoker.getSimpleName__Ljavax_lang_model_element_Name_2(lcA7);
var stI0 = invoker.contentEquals__ZLjava_lang_CharSequence_2(stA0,lcA3);
if ((stI0) != 0) { gt = 73; break IF; }
{ gt = 0; continue X_16; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

var stA0 = invoker.getModifiers__Ljava_util_Set_2(lcA7);
var stI0 = invoker.contains__ZLjava_lang_Object_2(stA0,vm.javax_lang_model_element_Modifier(false)['_STATIC']());
if ((stI0) != 0) { gt = 105; break IF; }
if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA1 = lcA7;
var lcA5 = "Would have to be static";
{ gt = 0; continue X_16; }
    }
    X_105: for (;;) { IF: if (gt <= 105) {

if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA8 = lcA7;
var stA0 = invoker.getElementUtils__Ljavax_lang_model_util_Elements_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA1 = invoker.getName__Ljava_lang_String_2(vm.java_lang_Exception(false).constructor.$class);
var stA0 = invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2(stA0,stA1);
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var lcA9 = stA0;
var stA0 = invoker.getParameters__Ljava_util_List_2(lcA8);
var lcA10 = stA0;
var lcI11 = 0;
var stI0 = invoker.size__I(lcA10);
if ((stI0) == (2)) { gt = 168; break IF; }
var lcI11 = 1;
{ gt = 268; break IF; }
    }
    X_168: for (;;) { IF: if (gt <= 168) {

var stA0 = invoker.get__Ljava_lang_Object_2I(lcA10,0);
if (stA0 !== null && !stA0['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var stA0 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA0);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA12 = stA0;
var stI0 = invoker.lastIndexOf__II(lcA12,(46));
var lcI13 = stI0;
if ((lcI13) == (-1)) { gt = 217; break IF; }
var stA0 = invoker.substring__Ljava_lang_String_2I(lcA12,(lcI13).add32(1));
var lcA12 = stA0;
    }
    X_217: for (;;) { IF: if (gt <= 217) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA12,lcA4);
if ((stI0) != 0) { gt = 230; break IF; }
var lcI11 = 1;
    }
    X_230: for (;;) { IF: if (gt <= 230) {

var stA0 = invoker.getTypeUtils__Ljavax_lang_model_util_Types_2(vm.org_netbeans_html_json_impl_ModelProcessor(false)['_processingEnv'].call(lcA0));
var stA2 = invoker.get__Ljava_lang_Object_2I(lcA10,1);
if (stA2 !== null && !stA2['$instOf_javax_lang_model_element_VariableElement']) throw vm.java_lang_ClassCastException(true);
var stA2 = invoker.asType__Ljavax_lang_model_type_TypeMirror_2(stA2);
var stI0 = invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2(stA0,lcA9, stA2);
if ((stI0) != 0) { gt = 268; break IF; }
var lcI11 = 1;
    }
    X_268: for (;;) { IF: if (gt <= 268) {

if ((lcI11) == 0) { gt = 311; break IF; }
if (lcA7 !== null && !lcA7['$instOf_javax_lang_model_element_ExecutableElement']) throw vm.java_lang_ClassCastException(true);
var lcA1 = lcA7;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Error method first argument needs to be ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0," and second Exception");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
{ gt = 0; continue X_16; }
    }
    X_311: for (;;) { IF: if (gt <= 311) {

return 1;
    }
    X_313: for (;;) { IF: if (gt <= 313) {

if ((lcA5) !== null) { gt = 356; break IF; }
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Cannot find ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA3);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"(");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,lcA4);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", Exception) method in this class");
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
var lcA5 = stA0;
    }
    X_356: for (;;) { IF: if (gt <= 356) {

vm.org_netbeans_html_json_impl_ModelProcessor(false).error__VLjava_lang_String_2Ljavax_lang_model_element_Element_2.call(lcA0, lcA5, lcA1);
return 0;

    }
}}}}}}}}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = invoker.getName__Ljava_lang_String_2(vm.org_netbeans_html_json_impl_ModelProcessor(false).constructor.$class);
var stA0 = vm.java_util_logging_Logger(false)['getLogger__Ljava_util_logging_Logger_2Ljava_lang_String_2'](stA0);
vm.org_netbeans_html_json_impl_ModelProcessor(false)._LOG(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_ModelProcessorfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_ModelProcessor', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_ModelProcessorfillInstOf });
      org_netbeans_html_json_impl_ModelProcessorfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/ModelProcessor';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljavax/annotation/processing/SupportedSourceVersion;" : {
"value" : vm.javax_lang_model_SourceVersion(false)['valueOf__Ljavax_lang_model_SourceVersion_2Ljava_lang_String_2']('RELEASE_6')
}
,"Ljavax/annotation/processing/SupportedAnnotationTypes;" : {
"value" : ["net.java.html.json.Model",
"net.java.html.json.ModelOperation",
"net.java.html.json.Function",
"net.java.html.json.OnReceive",
"net.java.html.json.OnPropertyChange",
"net.java.html.json.ComputedProperty",
"net.java.html.json.Property"]
}

    };
    vm.org_netbeans_html_json_impl_ModelProcessor(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_impl_ModelProcessor_models = null;
    this.fld_org_netbeans_html_json_impl_ModelProcessor_verify = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_json_impl_ModelProcessor'] = vm.org_netbeans_html_json_impl_ModelProcessor;

vm.javax_annotation_processing_SupportedAnnotationTypes = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_annotation_processing_SupportedAnnotationTypes;
  return link('javax/annotation/processing/SupportedAnnotationTypes', function(f) { vm.javax_annotation_processing_SupportedAnnotationTypes = f;})(instance);
}
vm.javax_lang_model_SourceVersion = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_SourceVersion;
  return link('javax/lang/model/SourceVersion', function(f) { vm.javax_lang_model_SourceVersion = f;})(instance);
}
vm.javax_annotation_processing_SupportedSourceVersion = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_annotation_processing_SupportedSourceVersion;
  return link('javax/annotation/processing/SupportedSourceVersion', function(f) { vm.javax_annotation_processing_SupportedSourceVersion = f;})(instance);
}
vm.java_util_logging_Logger = link('java/util/logging/Logger', function(f) { vm.java_util_logging_Logger =  f; });
vm.javax_annotation_processing_Completions = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_annotation_processing_Completions;
  return link('javax/annotation/processing/Completions', function(f) { vm.javax_annotation_processing_Completions = f;})(instance);
}
vm.java_util_ResourceBundle = link('java/util/ResourceBundle', function(f) { vm.java_util_ResourceBundle =  f; });
vm.java_util_logging_Level = link('java/util/logging/Level', function(f) { vm.java_util_logging_Level =  f; });
vm.java_util_Collections = link('java/util/Collections', function(f) { vm.java_util_Collections =  f; });
vm.javax_lang_model_element_AnnotationMirror = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_element_AnnotationMirror;
  return link('javax/lang/model/element/AnnotationMirror', function(f) { vm.javax_lang_model_element_AnnotationMirror = f;})(instance);
}
vm.javax_lang_model_element_Element = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_element_Element;
  return link('javax/lang/model/element/Element', function(f) { vm.javax_lang_model_element_Element = f;})(instance);
}
vm.javax_annotation_processing_ProcessingEnvironment = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_annotation_processing_ProcessingEnvironment;
  return link('javax/annotation/processing/ProcessingEnvironment', function(f) { vm.javax_annotation_processing_ProcessingEnvironment = f;})(instance);
}
vm.java_util_HashSet = link('java/util/HashSet', function(f) { vm.java_util_HashSet =  f; });
vm.javax_lang_model_type_MirroredTypeException = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_type_MirroredTypeException;
  return link('javax/lang/model/type/MirroredTypeException', function(f) { vm.javax_lang_model_type_MirroredTypeException = f;})(instance);
}
vm.javax_lang_model_type_TypeKind = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_type_TypeKind;
  return link('javax/lang/model/type/TypeKind', function(f) { vm.javax_lang_model_type_TypeKind = f;})(instance);
}
vm.java_util_LinkedHashSet = link('java/util/LinkedHashSet', function(f) { vm.java_util_LinkedHashSet =  f; });
vm.javax_lang_model_element_Modifier = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_lang_model_element_Modifier;
  return link('javax/lang/model/element/Modifier', function(f) { vm.javax_lang_model_element_Modifier = f;})(instance);
}

vm.org_netbeans_html_json_impl_Transitive = function org_netbeans_html_json_impl_Transitive() {
  var m;
  var CLS = org_netbeans_html_json_impl_Transitive;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.deep__Z = function() {
  throw 'no code found for org/netbeans/html/json/impl/Transitive.deep';
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_TransitivefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_Transitive', { value : true });
      vm.java_lang_annotation_Annotation(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_TransitivefillInstOf });
      org_netbeans_html_json_impl_TransitivefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/Transitive';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 9728;
    CLS.$class.cnstr = CLS;
    CLS.$class.anno = {"Ljava/lang/annotation/Retention;" : {
"value" : vm.java_lang_annotation_RetentionPolicy(false)['valueOf__Ljava_lang_annotation_RetentionPolicy_2Ljava_lang_String_2']('SOURCE')
}
,"Ljava/lang/annotation/Target;" : {
"value" : [vm.java_lang_annotation_ElementType(false)['valueOf__Ljava_lang_annotation_ElementType_2Ljava_lang_String_2']('METHOD')]
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
vm.java_util_Arrays = link('java/util/Arrays', function(f) { vm.java_util_Arrays =  f; });
vm.java_io_OutputStreamWriter = link('java/io/OutputStreamWriter', function(f) { vm.java_io_OutputStreamWriter =  f; });
vm.java_io_StringWriter = link('java/io/StringWriter', function(f) { vm.java_io_StringWriter =  f; });
vm.java_util_WeakHashMap = link('java/util/WeakHashMap', function(f) { vm.java_util_WeakHashMap =  f; });
vm.javax_annotation_processing_AbstractProcessor = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.javax_annotation_processing_AbstractProcessor;
  return link('javax/annotation/processing/AbstractProcessor', function(f) { vm.javax_annotation_processing_AbstractProcessor = f;})(instance);
}
vm.java_lang_annotation_AnnotationTypeMismatchException = link('java/lang/annotation/AnnotationTypeMismatchException', function(f) { vm.java_lang_annotation_AnnotationTypeMismatchException =  f; });
vm.java_lang_annotation_IncompleteAnnotationException = link('java/lang/annotation/IncompleteAnnotationException', function(f) { vm.java_lang_annotation_IncompleteAnnotationException =  f; });

vm.org_netbeans_html_json_impl_RcvrJSON = function org_netbeans_html_json_impl_RcvrJSON() {
  var m;
  var CLS = org_netbeans_html_json_impl_RcvrJSON;
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
    m = c.onOpen__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/impl/RcvrJSON.onMessage';
};
    m.access = 1028;
    m.cls = CLS;
    m = c.onClose__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/impl/RcvrJSON.onError';
};
    m.access = 1028;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_impl_RcvrJSONfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_impl_RcvrJSON', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_impl_RcvrJSONfillInstOf });
      org_netbeans_html_json_impl_RcvrJSONfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/impl/RcvrJSON';
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

vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch = function org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$data = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_val$data = v; return this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_val$data; };
  m = c._val$ev = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_val$ev = v; return this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_val$ev; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_this$0 = v; return this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_FunctionBinding$Impl_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._val$data.call(lcA0, lcA2);
vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._val$ev.call(lcA0, lcA3);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_FunctionBinding$Impl_2(vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false).access$000__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_FunctionBinding$Impl_2(vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._this$0.call(lcA0));
var stI2 = vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false).access$100__ILorg_netbeans_html_json_spi_FunctionBinding$Impl_2(vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._this$0.call(lcA0));
invoker.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, stI2, vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._val$data.call(lcA0), vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false)._val$ev.call(lcA0));
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 35; break IF; }}
throw e;
}{ gt = 40; break IF; }
    }
    X_35: for (;;) { IF: if (gt <= 35) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
    }
    X_40: for (;;) { IF: if (gt <= 40) {
return;

    }
}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBinding$Impl$1DispatchfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBinding$Impl$1DispatchfillInstOf });
      org_netbeans_html_json_spi_FunctionBinding$Impl$1DispatchfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding$Impl$1Dispatch';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_val$data = null;
    this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_val$ev = null;
    this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Throwable = link('java/lang/Throwable', function(f) { vm.java_lang_Throwable =  f; });

vm.org_netbeans_html_json_spi_FunctionBinding$Impl = function org_netbeans_html_json_spi_FunctionBinding$Impl() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding$Impl;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_spi_FunctionBinding(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._name = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_name = v; return this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_name; };
  m = c._model = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model = v; return this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model; };
  m = c._access = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_access = v; return this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_access; };
  m = c._index = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_index = v; return this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_index; };
    m = CLS.cons__VLjava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA1, lcI2, lcA3, lcA4) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_FunctionBinding(false).constructor.cons__V.call(lcA0);
vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._name.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._index.call(lcA0, lcI2);
vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._model.call(lcA0, lcA3);
vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._access.call(lcA0, lcA4);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.getFunctionName__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._name.call(lcA0);

};
c['getFunctionName__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = invoker.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._access.call(lcA0),vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._model.call(lcA0));
var stA0 = stA0.getContext__Lnet_java_html_BrwsrCtx_2();
var lcA3 = stA0;
var stA0 = lcA3;var stA1 = new vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch;
vm.org_netbeans_html_json_spi_FunctionBinding$Impl$1Dispatch(false).constructor.cons__VLorg_netbeans_html_json_spi_FunctionBinding$Impl_2Ljava_lang_Object_2Ljava_lang_Object_2.call(stA1, lcA0, lcA1, lcA2);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
c['call__VLjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.access$000__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_FunctionBinding$Impl_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._model.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__ILorg_netbeans_html_json_spi_FunctionBinding$Impl_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._index.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_FunctionBinding$Impl_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false)._access.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBinding$ImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding$Impl', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBinding$ImplfillInstOf });
      org_netbeans_html_json_spi_FunctionBinding$ImplfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding$Impl';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_name = null;
    this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_model = null;
    this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_access = null;
    this.fld_org_netbeans_html_json_spi_FunctionBinding$Impl_index = 0;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_FunctionBinding = function org_netbeans_html_json_spi_FunctionBinding() {
  var m;
  var CLS = org_netbeans_html_json_spi_FunctionBinding;
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
    m = c.getFunctionName__Ljava_lang_String_2 = function() {
  throw 'no code found for org/netbeans/html/json/spi/FunctionBinding.getFunctionName';
};
c['getFunctionName__Ljava_lang_String_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/spi/FunctionBinding.call';
};
c['call__VLjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.registerFunction__Lorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA0, lcI1, lcA2, lcA3) {
var stA0 = new vm.org_netbeans_html_json_spi_FunctionBinding$Impl;
vm.org_netbeans_html_json_spi_FunctionBinding$Impl(false).constructor.cons__VLjava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2.call(stA0, lcA0, lcI1, lcA2, lcA3);
return stA0;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_FunctionBindingfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_FunctionBinding', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_FunctionBindingfillInstOf });
      org_netbeans_html_json_spi_FunctionBindingfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/FunctionBinding';
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
exports['org_netbeans_html_json_spi_FunctionBinding'] = vm.org_netbeans_html_json_spi_FunctionBinding;


vm.org_netbeans_html_json_spi_Observers$Ref = function org_netbeans_html_json_spi_Observers$Ref() {
  var m;
  var CLS = org_netbeans_html_json_spi_Observers$Ref;
  if (!CLS.$class) {
    var pp = vm.java_lang_ref_WeakReference(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._prop = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Observers$Ref_prop = v; return this.fld_org_netbeans_html_json_spi_Observers$Ref_prop; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.java_lang_ref_WeakReference(false).constructor['cons__VLjava_lang_Object_2'].call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Observers$Ref(false)._prop.call(lcA0, lcA2);
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.watcher__Lorg_netbeans_html_json_spi_Observers$Watcher_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.get__Ljava_lang_Object_2(lcA0);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA1 = stA0;
if ((lcA1) !== null) { gt = 14; break IF; }
return null;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

var stA0 = vm.org_netbeans_html_json_spi_Observers$Watcher(false)._proto.call(lcA1).observers__Lorg_netbeans_html_json_spi_Observers_2Z(0);
var lcA2 = stA0;
if ((lcA2) !== null) { gt = 29; break IF; }
return null;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

var stA0 = vm.org_netbeans_html_json_spi_Observers(false).access$000__Lorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers_2Ljava_lang_String_2(lcA2, vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA1));
if ((stA0) !== (lcA1)) { gt = 43; break IF; }
return lcA1;
    }
    X_43: for (;;) { IF: if (gt <= 43) {

return null;

    }
}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_Observers$Ref(false)._prop.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Observers$ReffillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Observers$Ref', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Observers$ReffillInstOf });
      org_netbeans_html_json_spi_Observers$ReffillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Observers$Ref';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Observers$Ref_prop = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_Observers = function org_netbeans_html_json_spi_Observers() {
  var m;
  var CLS = org_netbeans_html_json_spi_Observers;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_GLOBAL = null;
  m = c._GLOBAL = function (v) {  if (arguments.length == 1) CLS.fld_GLOBAL = v; return CLS.fld_GLOBAL; };
  m = c._watchers = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Observers_watchers = v; return this.fld_org_netbeans_html_json_spi_Observers_watchers; };
  m = c._observers = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Observers_observers = v; return this.fld_org_netbeans_html_json_spi_Observers_observers; };
  CLS.fld_$assertionsDisabled = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS.fld_$assertionsDisabled = v; return CLS.fld_$assertionsDisabled; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
var stA0 = lcA0;var stA1 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_json_spi_Observers(false)._watchers.call(stA0, stA1);
var stA0 = lcA0;var stA1 = new vm.java_util_ArrayList;
vm.java_util_ArrayList(false).constructor['cons__V'].call(stA1);
vm.org_netbeans_html_json_spi_Observers(false)._observers.call(stA0, stA1);
if ((vm.org_netbeans_html_json_spi_Observers(false)._$assertionsDisabled()) != 0) { gt = 49; break IF; }
var stI0 = vm.java_lang_Thread(false)['holdsLock__ZLjava_lang_Object_2'](vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL());
if ((stI0) != 0) { gt = 49; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_49: for (;;) { IF: if (gt <= 49) {
return;

    }
}}
};
CLS['cons__V'] = m;

    m.access = 0;
    m.cls = CLS;
    m = c.beginComputing__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL();var stA1 = stA0;
var lcA2 = stA1;
try {
vm.org_netbeans_html_json_spi_Observers(false).verifyUnlocked__VLorg_netbeans_html_json_spi_Proto_2(lcA0);
var stA0 = new vm.org_netbeans_html_json_spi_Observers$Watcher;
vm.org_netbeans_html_json_spi_Observers$Watcher(false).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2.call(stA0, lcA0, lcA1);
var lcA3 = stA0;
invoker.push__VLjava_lang_Object_2(vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL(),lcA3);
} catch (e) {
var stA0 = e;{ gt = 32; break IF; }
}{ gt = 39; break IF; }
    }
    X_32: for (;;) { IF: if (gt <= 32) {
try {var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_32; }
}
{ var stA0 = lcA4; throw lcA4; }
    }
    X_39: for (;;) { IF: if (gt <= 39) {
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.verifyUnlocked__VLorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL();var stA1 = stA0;
var lcA1 = stA1;
try {
var stA0 = invoker.iterator__Ljava_util_Iterator_2(vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL());
var lcA2 = stA0;
} catch (e) {
var stA0 = e;{ gt = 75; break IF; }
}    }
    X_13: for (;;) { IF: if (gt <= 13) {
try {
var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 70; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA3 = stA0;
if ((vm.org_netbeans_html_json_spi_Observers$Watcher(false)._proto.call(lcA3)) !== (lcA0)) { gt = 67; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Re-entrant attempt to access ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA0);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
var stA0 = e;{ gt = 75; break IF; }
}    }
    X_67: for (;;) { IF: if (gt <= 67) {
try {{ gt = 0; continue X_13; }
} catch (e) {
var stA0 = e;{ gt = 75; break IF; }
}    }
    X_70: for (;;) { IF: if (gt <= 70) {
try {
} catch (e) {
var stA0 = e;{ gt = 75; break IF; }
}{ gt = 82; break IF; }
    }
    X_75: for (;;) { IF: if (gt <= 75) {
try {var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_75; }
}
{ var stA0 = lcA4; throw lcA4; }
    }
    X_82: for (;;) { IF: if (gt <= 82) {
return;

    }
}}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.accessingValue__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL();var stA1 = stA0;
var lcA2 = stA1;
try {
vm.org_netbeans_html_json_spi_Observers(false).verifyUnlocked__VLorg_netbeans_html_json_spi_Proto_2(lcA0);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL());
var lcA3 = stA0;
} catch (e) {
var stA0 = e;{ gt = 69; break IF; }
}    }
    X_17: for (;;) { IF: if (gt <= 17) {
try {
var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 64; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
var stA0 = lcA0.observers__Lorg_netbeans_html_json_spi_Observers_2Z(1);
var lcA5 = stA0;
var stA0 = lcA5;var stA1 = lcA4;var stA2 = new vm.org_netbeans_html_json_spi_Observers$Ref;
vm.org_netbeans_html_json_spi_Observers$Ref(false).constructor.cons__VLorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2.call(stA2, lcA4, lcA1);
stA0.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers$Ref_2(stA1, stA2);
{ gt = 0; continue X_17; }
} catch (e) {
var stA0 = e;{ gt = 69; break IF; }
}    }
    X_64: for (;;) { IF: if (gt <= 64) {
try {
} catch (e) {
var stA0 = e;{ gt = 69; break IF; }
}{ gt = 76; break IF; }
    }
    X_69: for (;;) { IF: if (gt <= 69) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_69; }
}
{ var stA0 = lcA6; throw lcA6; }
    }
    X_76: for (;;) { IF: if (gt <= 76) {
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.finishComputing__VLorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL();var stA1 = stA0;
var lcA1 = stA1;
try {
var stA0 = invoker.pop__Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL());
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA2 = stA0;
if ((vm.org_netbeans_html_json_spi_Observers$Watcher(false)._proto.call(lcA2)) === (lcA0)) { gt = 63; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
var stA1 = stA0;var stA2 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA2);
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2,"Inconsistency: ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,vm.org_netbeans_html_json_spi_Observers$Watcher(false)._proto.call(lcA2));
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA2," != ");
var stA2 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA2,lcA0);
var stA2 = invoker.toString__Ljava_lang_String_2(stA2);
vm.java_lang_IllegalStateException(false).constructor['cons__VLjava_lang_String_2'].call(stA1, stA2);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
var stA0 = e;{ gt = 86; break IF; }
}    }
    X_63: for (;;) { IF: if (gt <= 63) {
try {
if ((vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA2)) === null) { gt = 81; break IF; }
var stA0 = lcA0.observers__Lorg_netbeans_html_json_spi_Observers_2Z(1);
var lcA3 = stA0;
lcA3.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2(lcA2);
} catch (e) {
var stA0 = e;{ gt = 86; break IF; }
}    }
    X_81: for (;;) { IF: if (gt <= 81) {
try {
} catch (e) {
var stA0 = e;{ gt = 86; break IF; }
}{ gt = 93; break IF; }
    }
    X_86: for (;;) { IF: if (gt <= 86) {
try {var lcA4 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_86; }
}
{ var stA0 = lcA4; throw lcA4; }
    }
    X_93: for (;;) { IF: if (gt <= 93) {
return;

    }
}}}}}
};
    m.access = 8;
    m.cls = CLS;
    m = c.find__Lorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 6; break IF; }
return null;
    }
    X_6: for (;;) { IF: if (gt <= 6) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(vm.org_netbeans_html_json_spi_Observers(false)._watchers.call(lcA0));
var lcA2 = stA0;
    }
    X_16: for (;;) { IF: if (gt <= 16) {

var stI0 = invoker.hasNext__Z(lcA2);
if ((stI0) == 0) { gt = 51; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA2);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA3 = stA0;
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA3));
if ((stI0) == 0) { gt = 48; break IF; }
return lcA3;
    }
    X_48: for (;;) { IF: if (gt <= 48) {
{ gt = 0; continue X_16; }
    }
    X_51: for (;;) { IF: if (gt <= 51) {

return null;

    }
}}}}}
};
    m.access = 2;
    m.cls = CLS;
    m = c.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI2 = 0;
    }
    X_2: for (;;) { IF: if (gt <= 2) {

var stI1 = invoker.size__I(vm.org_netbeans_html_json_spi_Observers(false)._watchers.call(lcA0));
if ((lcI2) >= (stI1)) { gt = 89; break IF; }
var stA0 = invoker.get__Ljava_lang_Object_2I(vm.org_netbeans_html_json_spi_Observers(false)._watchers.call(lcA0),lcI2);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA3 = stA0;
if ((vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA1)) !== null) { gt = 56; break IF; }
if ((vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA3)) !== null) { gt = 83; break IF; }
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(vm.org_netbeans_html_json_spi_Observers(false)._watchers.call(lcA0),lcI2, lcA1);
return;
    }
    X_56: for (;;) { IF: if (gt <= 56) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA1),vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA3));
if ((stI0) == 0) { gt = 83; break IF; }
var stA0 = invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2(vm.org_netbeans_html_json_spi_Observers(false)._watchers.call(lcA0),lcI2, lcA1);
return;
    }
    X_83: for (;;) { IF: if (gt <= 83) {
lcI2++;
{ gt = 0; continue X_2; }
    }
    X_89: for (;;) { IF: if (gt <= 89) {

var stI0 = invoker.add__ZLjava_lang_Object_2(vm.org_netbeans_html_json_spi_Observers(false)._watchers.call(lcA0),lcA1);
return;

    }
}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.valueHasMutated__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = new vm.java_util_LinkedList;
vm.java_util_LinkedList(false).constructor['cons__V'].call(stA0);
var lcA2 = stA0;
var stA0 = vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL();var stA1 = stA0;
var lcA3 = stA1;
try {
var stA0 = lcA0.observers__Lorg_netbeans_html_json_spi_Observers_2Z(0);
var lcA4 = stA0;
if ((lcA4) !== null) { gt = 29; break IF; }
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}return;
    }
    X_29: for (;;) { IF: if (gt <= 29) {
try {
var stA0 = invoker.iterator__Ljava_util_Iterator_2(vm.org_netbeans_html_json_spi_Observers(false)._observers.call(lcA4));
var lcA5 = stA0;
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_41: for (;;) { IF: if (gt <= 41) {
try {
var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 117; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Ref']) throw vm.java_lang_ClassCastException(true);
var lcA6 = stA0;
var stA0 = invoker.get__Ljava_lang_Object_2(lcA6);
if ((stA0) !== null) { gt = 81; break IF; }
invoker.remove__V(lcA5);
{ gt = 0; continue X_41; }
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_81: for (;;) { IF: if (gt <= 81) {
try {
var stA0 = vm.org_netbeans_html_json_spi_Observers$Ref(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2(lcA6);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,lcA1);
if ((stI0) == 0) { gt = 114; break IF; }
var stA0 = lcA6.watcher__Lorg_netbeans_html_json_spi_Observers$Watcher_2();
var lcA7 = stA0;
if ((lcA7) === null) { gt = 114; break IF; }
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA2,lcA7);
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_114: for (;;) { IF: if (gt <= 114) {
try {{ gt = 0; continue X_41; }
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}    }
    X_117: for (;;) { IF: if (gt <= 117) {
try {
} catch (e) {
var stA0 = e;{ gt = 122; break IF; }
}{ gt = 129; break IF; }
    }
    X_122: for (;;) { IF: if (gt <= 122) {
try {var lcA8 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_122; }
}
{ var stA0 = lcA8; throw lcA8; }
    }
    X_129: for (;;) { IF: if (gt <= 129) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA2);
var lcA3 = stA0;
    }
    X_136: for (;;) { IF: if (gt <= 136) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 172; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
vm.org_netbeans_html_json_spi_Observers$Watcher(false)._proto.call(lcA4).valueHasMutated__VLjava_lang_String_2(vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA4));
{ gt = 0; continue X_136; }
    }
    X_172: for (;;) { IF: if (gt <= 172) {
return;

    }
}}}}}}}}}}
};
    m.access = 24;
    m.cls = CLS;
    m = c.add__VLorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers$Ref_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = vm.java_lang_Thread(false)['holdsLock__ZLjava_lang_Object_2'](vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL());
if ((lcA1) !== null) { gt = 12; break IF; }
return;
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stA0 = invoker.iterator__Ljava_util_Iterator_2(vm.org_netbeans_html_json_spi_Observers(false)._observers.call(lcA0));
var lcA3 = stA0;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 97; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Ref']) throw vm.java_lang_ClassCastException(true);
var lcA4 = stA0;
if ((lcA2) !== (lcA4)) { gt = 49; break IF; }
return;
    }
    X_49: for (;;) { IF: if (gt <= 49) {

var stA0 = invoker.get__Ljava_lang_Object_2(lcA4);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_json_spi_Observers$Watcher']) throw vm.java_lang_ClassCastException(true);
var lcA5 = stA0;
if ((lcA5) !== null) { gt = 73; break IF; }
invoker.remove__V(lcA3);
{ gt = 0; continue X_22; }
    }
    X_73: for (;;) { IF: if (gt <= 73) {

if ((lcA5) !== (lcA1)) { gt = 94; break IF; }
var stA0 = vm.org_netbeans_html_json_spi_Observers$Ref(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2(lcA2);
var stA1 = vm.org_netbeans_html_json_spi_Observers$Ref(false).access$100__Ljava_lang_String_2Lorg_netbeans_html_json_spi_Observers$Ref_2(lcA2);
var stI0 = invoker.equals__ZLjava_lang_Object_2(stA0,stA1);
if ((stI0) == 0) { gt = 94; break IF; }
return;
    }
    X_94: for (;;) { IF: if (gt <= 94) {
{ gt = 0; continue X_22; }
    }
    X_97: for (;;) { IF: if (gt <= 97) {

var stI0 = invoker.add__ZLjava_lang_Object_2(vm.org_netbeans_html_json_spi_Observers(false)._observers.call(lcA0),lcA2);
return;

    }
}}}}}}}
};
    m.access = 0;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_spi_Observers$Watcher_2Lorg_netbeans_html_json_spi_Observers_2Ljava_lang_String_2 = function(lcA0, lcA1) {
var stA0 = vm.org_netbeans_html_json_spi_Observers(false).find__Lorg_netbeans_html_json_spi_Observers$Watcher_2Ljava_lang_String_2.call(lcA0, lcA1);
return stA0;

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(vm.org_netbeans_html_json_spi_Observers(false).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
vm.org_netbeans_html_json_spi_Observers(false)._$assertionsDisabled(stI0);
var stA0 = new vm.java_util_LinkedList;
vm.java_util_LinkedList(false).constructor['cons__V'].call(stA0);
vm.org_netbeans_html_json_spi_Observers(false)._GLOBAL(stA0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_ObserversfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Observers', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_ObserversfillInstOf });
      org_netbeans_html_json_spi_ObserversfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Observers';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_json_spi_Observers(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Observers_watchers = null;
    this.fld_org_netbeans_html_json_spi_Observers_observers = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_util_LinkedList = link('java/util/LinkedList', function(f) { vm.java_util_LinkedList =  f; });

vm.org_netbeans_html_json_spi_Observers$Watcher = function org_netbeans_html_json_spi_Observers$Watcher() {
  var m;
  var CLS = org_netbeans_html_json_spi_Observers$Watcher;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._proto = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Observers$Watcher_proto = v; return this.fld_org_netbeans_html_json_spi_Observers$Watcher_proto; };
  m = c._prop = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Observers$Watcher_prop = v; return this.fld_org_netbeans_html_json_spi_Observers$Watcher_prop; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_json_spi_Observers$Watcher(false)._proto.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA0, lcA2);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Watcher: ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,vm.org_netbeans_html_json_spi_Observers$Watcher(false)._proto.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,", ");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,vm.org_netbeans_html_json_spi_Observers$Watcher(false)._prop.call(lcA0));
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

};
c['toString__Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Observers$WatcherfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Observers$Watcher', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Observers$WatcherfillInstOf });
      org_netbeans_html_json_spi_Observers$WatcherfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Observers$Watcher';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Observers$Watcher_proto = null;
    this.fld_org_netbeans_html_json_spi_Observers$Watcher_prop = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.java_lang_Thread = link('java/lang/Thread', function(f) { vm.java_lang_Thread =  f; });
vm.java_lang_ref_WeakReference = link('java/lang/ref/WeakReference', function(f) { vm.java_lang_ref_WeakReference =  f; });

vm.org_netbeans_html_json_spi_Proto$1 = function org_netbeans_html_json_spi_Proto$1() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$propName = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$1_val$propName = v; return this.fld_org_netbeans_html_json_spi_Proto$1_val$propName; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$1_this$0 = v; return this.fld_org_netbeans_html_json_spi_Proto$1_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Proto$1(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Proto$1(false)._val$propName.call(lcA0, lcA2);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1(false)._this$0.call(lcA0));
if ((stA0) === null) { gt = 26; break IF; }
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1(false)._this$0.call(lcA0));
stA0.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Proto$1(false)._val$propName.call(lcA0), null, null);
    }
    X_26: for (;;) { IF: if (gt <= 26) {

vm.org_netbeans_html_json_spi_Observers(false).valueHasMutated__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2(vm.org_netbeans_html_json_spi_Proto$1(false)._this$0.call(lcA0), vm.org_netbeans_html_json_spi_Proto$1(false)._val$propName.call(lcA0));
return;

    }
}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$1', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$1fillInstOf });
      org_netbeans_html_json_spi_Proto$1fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Proto$1_val$propName = null;
    this.fld_org_netbeans_html_json_spi_Proto$1_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_Proto = function org_netbeans_html_json_spi_Proto() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._obj = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto_obj = v; return this.fld_org_netbeans_html_json_spi_Proto_obj; };
  m = c._type = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto_type = v; return this.fld_org_netbeans_html_json_spi_Proto_type; };
  m = c._context = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto_context = v; return this.fld_org_netbeans_html_json_spi_Proto_context; };
  m = c._ko = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto_ko = v; return this.fld_org_netbeans_html_json_spi_Proto_ko; };
  m = c._observers = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto_observers = v; return this.fld_org_netbeans_html_json_spi_Proto_observers; };
    m = CLS.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0, lcA2);
vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0, lcA3);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.getContext__Lnet_java_html_BrwsrCtx_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0);

};
c['getContext__Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.acquireLock__V = function() {
  var  lcA0 = this;
lcA0.acquireLock__VLjava_lang_String_2(null);
return;

};
c['acquireLock__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.acquireLock__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Observers(false).beginComputing__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2(lcA0, lcA1);
return;

};
c['acquireLock__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.accessProperty__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Observers(false).accessingValue__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2(lcA0, lcA1);
return;

};
c['accessProperty__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.verifyUnlocked__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Observers(false).verifyUnlocked__VLorg_netbeans_html_json_spi_Proto_2(lcA0);
return;

};
c['verifyUnlocked__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.releaseLock__V = function() {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Observers(false).finishComputing__VLorg_netbeans_html_json_spi_Proto_2(lcA0);
return;

};
c['releaseLock__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_String_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0);var stA1 = new vm.org_netbeans_html_json_spi_Proto$1;
vm.org_netbeans_html_json_spi_Proto$1(false).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2.call(stA1, lcA0, lcA1);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
c['valueHasMutated__VLjava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0);var stA1 = new vm.org_netbeans_html_json_spi_Proto$2;
vm.org_netbeans_html_json_spi_Proto$2(false).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2.call(stA1, lcA0, lcA1, lcA2, lcA3);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
c['valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.applyBindings__V = function() {
  var  lcA0 = this;
var stA0 = lcA0.initBindings__Lorg_netbeans_html_json_impl_Bindings_2();
stA0.applyBindings__V();
return;

};
c['applyBindings__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runInBrowser__VLjava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;
invoker.execute__VLjava_lang_Runnable_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0),lcA1);
return;

};
c['runInBrowser__VLjava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.runInBrowser__VI_3Ljava_lang_Object_2 = function(lcI1, lcA2) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0);var stA1 = new vm.org_netbeans_html_json_spi_Proto$3;
vm.org_netbeans_html_json_spi_Proto$3(false).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2.call(stA1, lcA0, lcI1, lcA2);
invoker.execute__VLjava_lang_Runnable_2(stA0,stA1);
return;

};
c['runInBrowser__VI_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.initTo__VLjava_util_Collection_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_Proto(false)._ko.call(lcA0)) === null) { gt = 15; break IF; }
var stA0 = new vm.java_lang_IllegalStateException;
vm.java_lang_IllegalStateException(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

var stI0 = lcA1 != null && lcA1['$instOf_org_netbeans_html_json_impl_JSONList'] ? 1 : 0;
if ((stI0) == 0) { gt = 33; break IF; }
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_json_impl_JSONList']) throw vm.java_lang_ClassCastException(true);
lcA1.init__VLjava_lang_Object_2(lcA2);
{ gt = 38; break IF; }
    }
    X_33: for (;;) { IF: if (gt <= 33) {

vm.org_netbeans_html_json_impl_JSONList(false).init__VLjava_util_Collection_2Ljava_lang_Object_2(lcA1, lcA2);
    }
    X_38: for (;;) { IF: if (gt <= 38) {
return;

    }
}}}}
};
c['initTo__VLjava_util_Collection_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
vm.org_netbeans_html_json_impl_JSON(false).extract__VLnet_java_html_BrwsrCtx_2Ljava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0), lcA1, lcA2, lcA3);
return;

};
c['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0), lcA1, lcA2);
return stA0;

};
c['read__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5) {
  var  lcA0 = this;
var stA0 = lcA0;var stI1 = lcI1;var stA2 = lcA2;var stA3 = lcA3;var stA4 = lcA4;var stA5 = lcA5;var stA6 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
stA0.loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2(stI1, stA2, stA3, stA4, stA5, stA6);
return;

};
c['loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3, lcA4, lcA5, lcA6) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0);var stA1 = new vm.org_netbeans_html_json_spi_Proto$1Rcvr;
vm.org_netbeans_html_json_spi_Proto$1Rcvr(false).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2.call(stA1, lcA0, lcI1, lcA6);
vm.org_netbeans_html_json_impl_JSON(false).loadJSON__VLnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2(stA0, stA1, lcA2, lcA3, lcA4, lcA5);
return;

};
c['loadJSON__VILjava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.wsOpen__Ljava_lang_Object_2ILjava_lang_String_2Ljava_lang_Object_2 = function(lcI1, lcA2, lcA3) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0);var stA1 = new vm.org_netbeans_html_json_spi_Proto$1WSrcvr;
vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2I.call(stA1, lcA0, lcI1);
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).openWS__Lorg_netbeans_html_json_impl_JSON$WS_2Lnet_java_html_BrwsrCtx_2Lorg_netbeans_html_json_impl_RcvrJSON_2Ljava_lang_String_2Ljava_lang_Object_2(stA0, stA1, lcA2, lcA3);
return stA0;

};
c['wsOpen__Ljava_lang_Object_2ILjava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.wsSend__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
if (lcA1 !== null && !lcA1['$instOf_org_netbeans_html_json_impl_JSON$WS']) throw vm.java_lang_ClassCastException(true);
lcA1.send__VLnet_java_html_BrwsrCtx_2Ljava_lang_String_2Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0), lcA2, lcA3);
return;

};
c['wsSend__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).toString__Ljava_lang_String_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0), lcA1, lcA2);
return stA0;

};
c['toString__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toNumber__Ljava_lang_Number_2Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).toNumber__Ljava_lang_Number_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2Ljava_lang_String_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0), lcA1, lcA2);
return stA0;

};
c['toNumber__Ljava_lang_Number_2Ljava_lang_Object_2Ljava_lang_String_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).toModel__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0), lcA1, lcA2, null);
return stA0;

};
c['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
var stA0 = new vm.org_netbeans_html_json_impl_JSONList;
vm.org_netbeans_html_json_impl_JSONList(false).constructor.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2I_3Ljava_lang_String_2.call(stA0, lcA0, lcA1, lcI2, lcA3);
return stA0;

};
c['createList__Ljava_util_List_2Ljava_lang_String_2I_3Ljava_lang_String_2'] = m;

    m.access = 129;
    m.cls = CLS;
    m = c.cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcA4 = null;
var stA0 = invoker.iterator__Ljava_util_Iterator_2(lcA3);
var lcA5 = stA0;
    }
    X_11: for (;;) { IF: if (gt <= 11) {

var stI0 = invoker.hasNext__Z(lcA5);
if ((stI0) == 0) { gt = 84; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA5);
var lcA6 = stA0;
if ((lcA4) !== null) { gt = 48; break IF; }
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA6);
var stI0 = vm.org_netbeans_html_json_impl_JSON(false).isModel__ZLjava_lang_Class_2(stA0);
var stA0 = vm.java_lang_Boolean(false)['valueOf__Ljava_lang_Boolean_2Z'](stI0);
var lcA4 = stA0;
    }
    X_48: for (;;) { IF: if (gt <= 48) {

var stI0 = invoker.booleanValue__Z(lcA4);
if ((stI0) == 0) { gt = 72; break IF; }
var stA0 = lcA1;var stA1 = vm.org_netbeans_html_json_impl_JSON(false).bindTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2(lcA6, lcA2);
var stI0 = invoker.add__ZLjava_lang_Object_2(stA0,stA1);
{ gt = 81; break IF; }
    }
    X_72: for (;;) { IF: if (gt <= 72) {

var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,lcA6);
    }
    X_81: for (;;) { IF: if (gt <= 81) {
{ gt = 0; continue X_11; }
    }
    X_84: for (;;) { IF: if (gt <= 84) {
return;

    }
}}}}}}
};
c['cloneList__VLjava_util_Collection_2Lnet_java_html_BrwsrCtx_2Ljava_util_Collection_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.toStr__Ljava_lang_String_2 = function() {
  var  lcA0 = this;
var stA0 = new vm.java_lang_StringBuilder;
vm.java_lang_StringBuilder(false).constructor['cons__V'].call(stA0);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"Proto[");
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2(stA0,vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0));
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,"]@");
var stI1 = vm.java_lang_System(false)['identityHashCode__ILjava_lang_Object_2'](lcA0);
var stA1 = vm.java_lang_Integer(false)['toHexString__Ljava_lang_String_2I'](stI1);
var stA0 = invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2(stA0,stA1);
var stA0 = invoker.toString__Ljava_lang_String_2(stA0);
return stA0;

};
    m.access = 16;
    m.cls = CLS;
    m = c.initBindings__Lorg_netbeans_html_json_impl_Bindings_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_Proto(false)._ko.call(lcA0)) !== null) { gt = 149; break IF; }
var stA0 = vm.org_netbeans_html_json_impl_Bindings(false).apply__Lorg_netbeans_html_json_impl_Bindings_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Proto(false)._context.call(lcA0), vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0));
var lcA1 = stA0;
var stA0 = vm.org_netbeans_html_json_spi_Proto$Type(false).access$300___3Ljava_lang_String_2Lorg_netbeans_html_json_spi_Proto$Type_2(vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0));
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/PropertyBinding;', vm.org_netbeans_html_json_spi_PropertyBinding, (stA0).length);
var lcA2 = stA0;
var lcI3 = 0;
    }
    X_33: for (;;) { IF: if (gt <= 33) {

if ((lcI3) >= ((lcA2).length)) { gt = 79; break IF; }
var stA0 = lcA2;var stI1 = lcI3;var stA2 = lcA1;var stA3 = vm.org_netbeans_html_json_spi_Proto$Type(false).access$300___3Ljava_lang_String_2Lorg_netbeans_html_json_spi_Proto$Type_2(vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0));
var stA3 = Array.at(stA3, lcI3);var stI4 = lcI3;var stA5 = vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0);var stA6 = vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0);var stA7 = vm.org_netbeans_html_json_spi_Proto$Type(false).access$400___3ZLorg_netbeans_html_json_spi_Proto$Type_2(vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0));
var stA2 = stA2.registerProperty__Lorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Z(stA3, stI4, stA5, stA6, Array.at(stA7, lcI3));
Array.at(stA0, stI1, stA2);
lcI3++;
{ gt = 0; continue X_33; }
    }
    X_79: for (;;) { IF: if (gt <= 79) {

var stA0 = vm.org_netbeans_html_json_spi_Proto$Type(false).access$500___3Ljava_lang_String_2Lorg_netbeans_html_json_spi_Proto$Type_2(vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0));
var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Lorg/netbeans/html/json/spi/FunctionBinding;', vm.org_netbeans_html_json_spi_FunctionBinding, (stA0).length);
var lcA3 = stA0;
var lcI4 = 0;
    }
    X_94: for (;;) { IF: if (gt <= 94) {

if ((lcI4) >= ((lcA3).length)) { gt = 134; break IF; }
var stA0 = lcA3;var stI1 = lcI4;var stA2 = vm.org_netbeans_html_json_spi_Proto$Type(false).access$500___3Ljava_lang_String_2Lorg_netbeans_html_json_spi_Proto$Type_2(vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0));
var stA2 = vm.org_netbeans_html_json_spi_FunctionBinding(false).registerFunction__Lorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_String_2ILjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2(Array.at(stA2, lcI4), lcI4, vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0), vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0));
Array.at(stA0, stI1, stA2);
lcI4++;
{ gt = 0; continue X_94; }
    }
    X_134: for (;;) { IF: if (gt <= 134) {

vm.org_netbeans_html_json_spi_Proto(false)._ko.call(lcA0, lcA1);
lcA1.finish__VLjava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2(vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0), lcA2, lcA3);
    }
    X_149: for (;;) { IF: if (gt <= 149) {

return vm.org_netbeans_html_json_spi_Proto(false)._ko.call(lcA0);

    }
}}}}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.getBindings__Lorg_netbeans_html_json_impl_Bindings_2 = function() {
  var  lcA0 = this;
return vm.org_netbeans_html_json_spi_Proto(false)._ko.call(lcA0);

};
    m.access = 16;
    m.cls = CLS;
    m = c.onChange__VI = function(lcI1) {
  var  lcA0 = this;
invoker.onChange__VLjava_lang_Object_2I(vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0),vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0), lcI1);
return;

};
    m.access = 16;
    m.cls = CLS;
    m = c.observers__Lorg_netbeans_html_json_spi_Observers_2Z = function(lcI1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI1) == 0) { gt = 22; break IF; }
if ((vm.org_netbeans_html_json_spi_Proto(false)._observers.call(lcA0)) !== null) { gt = 22; break IF; }
var stA0 = lcA0;var stA1 = new vm.org_netbeans_html_json_spi_Observers;
vm.org_netbeans_html_json_spi_Observers(false).constructor.cons__V.call(stA1);
vm.org_netbeans_html_json_spi_Proto(false)._observers.call(stA0, stA1);
    }
    X_22: for (;;) { IF: if (gt <= 22) {

return vm.org_netbeans_html_json_spi_Proto(false)._observers.call(lcA0);

    }
}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_Proto(false)._ko.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_Proto(false)._obj.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_Proto(false)._type.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_ProtofillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_ProtofillInstOf });
      org_netbeans_html_json_spi_ProtofillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Proto_obj = null;
    this.fld_org_netbeans_html_json_spi_Proto_type = null;
    this.fld_org_netbeans_html_json_spi_Proto_context = null;
    this.fld_org_netbeans_html_json_spi_Proto_ko = null;
    this.fld_org_netbeans_html_json_spi_Proto_observers = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_json_spi_Proto'] = vm.org_netbeans_html_json_spi_Proto;


vm.org_netbeans_html_json_spi_Proto$Type = function org_netbeans_html_json_spi_Proto$Type() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$Type;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._clazz = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$Type_clazz = v; return this.fld_org_netbeans_html_json_spi_Proto$Type_clazz; };
  m = c._propertyNames = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$Type_propertyNames = v; return this.fld_org_netbeans_html_json_spi_Proto$Type_propertyNames; };
  m = c._propertyReadOnly = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$Type_propertyReadOnly = v; return this.fld_org_netbeans_html_json_spi_Proto$Type_propertyReadOnly; };
  m = c._functions = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$Type_functions = v; return this.fld_org_netbeans_html_json_spi_Proto$Type_functions; };
  CLS.fld_$assertionsDisabled = 0;
  m = c._$assertionsDisabled = function (v) {  if (arguments.length == 1) CLS.fld_$assertionsDisabled = v; return CLS.fld_$assertionsDisabled; };
    m = CLS.cons__VLjava_lang_Class_2Ljava_lang_Class_2II = function(lcA1, lcA2, lcI3, lcI4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
if ((vm.org_netbeans_html_json_spi_Proto$Type(false)._$assertionsDisabled()) != 0) { gt = 33; break IF; }
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = invoker.getName__Ljava_lang_String_2(stA0);
var stI0 = invoker.endsWith__ZLjava_lang_String_2(stA0,"$Html4JavaType");
if ((stI0) != 0) { gt = 33; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_33: for (;;) { IF: if (gt <= 33) {
try {
if ((vm.org_netbeans_html_json_spi_Proto$Type(false)._$assertionsDisabled()) != 0) { gt = 58; break IF; }
var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = invoker.getDeclaringClass__Ljava_lang_Class_2(stA0);
if ((stA0) === (lcA1)) { gt = 58; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_SecurityException']) {var stA0 = e;{ gt = 61; break IF; }}
throw e;
}    }
    X_58: for (;;) { IF: if (gt <= 58) {
{ gt = 63; break IF; }
    }
    X_61: for (;;) { IF: if (gt <= 61) {
var lcA5 = stA0;
    }
    X_63: for (;;) { IF: if (gt <= 63) {

vm.org_netbeans_html_json_spi_Proto$Type(false)._clazz.call(lcA0, lcA1);
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, lcI3);
vm.org_netbeans_html_json_spi_Proto$Type(false)._propertyNames.call(stA0, stA1);
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](true, '[Z', null, lcI3);
vm.org_netbeans_html_json_spi_Proto$Type(false)._propertyReadOnly.call(stA0, stA1);
var stA0 = lcA0;var stA1 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/String;', vm.java_lang_String, lcI4);
vm.org_netbeans_html_json_spi_Proto$Type(false)._functions.call(stA0, stA1);
vm.org_netbeans_html_json_impl_JSON(false).register__VLjava_lang_Class_2Lorg_netbeans_html_json_spi_Proto$Type_2(lcA1, lcA0);
return;

    }
}}}}}
};
CLS['cons__VLjava_lang_Class_2Ljava_lang_Class_2II'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.registerProperty__VLjava_lang_String_2IZ = function(lcA1, lcI2, lcI3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_Proto$Type(false)._$assertionsDisabled()) != 0) { gt = 23; break IF; }
if ((Array.at(vm.org_netbeans_html_json_spi_Proto$Type(false)._propertyNames.call(lcA0), lcI2)) === null) { gt = 23; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {

Array.at(vm.org_netbeans_html_json_spi_Proto$Type(false)._propertyNames.call(lcA0), lcI2, lcA1);
Array.at(vm.org_netbeans_html_json_spi_Proto$Type(false)._propertyReadOnly.call(lcA0), lcI2, lcI3);
return;

    }
}}
};
c['registerProperty__VLjava_lang_String_2IZ'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.registerFunction__VLjava_lang_String_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((vm.org_netbeans_html_json_spi_Proto$Type(false)._$assertionsDisabled()) != 0) { gt = 23; break IF; }
if ((Array.at(vm.org_netbeans_html_json_spi_Proto$Type(false)._functions.call(lcA0), lcI2)) === null) { gt = 23; break IF; }
var stA0 = new vm.java_lang_AssertionError;
vm.java_lang_AssertionError(false).constructor['cons__V'].call(stA0);
{ var stA0 = stA0; throw stA0; }
    }
    X_23: for (;;) { IF: if (gt <= 23) {

Array.at(vm.org_netbeans_html_json_spi_Proto$Type(false)._functions.call(lcA0), lcI2, lcA1);
return;

    }
}}
};
c['registerFunction__VLjava_lang_String_2I'] = m;

    m.access = 20;
    m.cls = CLS;
    m = c.createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  var  lcA0 = this;
var stA0 = new vm.org_netbeans_html_json_spi_Proto;
vm.org_netbeans_html_json_spi_Proto(false).constructor.cons__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_Proto$Type_2Lnet_java_html_BrwsrCtx_2.call(stA0, lcA1, lcA0, lcA2);
return stA0;

};
c['createProto__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  throw 'no code found for org/netbeans/html/json/spi/Proto$Type.setValue';
};
c['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function(lcA1, lcI2) {
  throw 'no code found for org/netbeans/html/json/spi/Proto$Type.getValue';
};
c['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3, lcA4) {
  throw 'no code found for org/netbeans/html/json/spi/Proto$Type.call';
};
c['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/spi/Proto$Type.cloneTo';
};
c['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  throw 'no code found for org/netbeans/html/json/spi/Proto$Type.read';
};
c['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.onChange__VLjava_lang_Object_2I = function(lcA1, lcI2) {
  throw 'no code found for org/netbeans/html/json/spi/Proto$Type.onChange';
};
c['onChange__VLjava_lang_Object_2I'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function(lcA1) {
  throw 'no code found for org/netbeans/html/json/spi/Proto$Type.protoFor';
};
c['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'] = m;

    m.access = 1028;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4) {
  var  lcA0 = this;
var stA0 = lcA0;var stA1 = lcA1;var stI2 = lcI2;var stI3 = lcI3;var stA4 = lcA4;var stA5 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 0);
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, stI2, stI3, stA4, stA5);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcI3, lcA4, lcA5) {
  var  lcA0 = this;
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(lcA0,lcA1, lcI2, lcI3, lcA4);
return;

};
c['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'] = m;

    m.access = 4;
    m.cls = CLS;
    m = c.copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var lcI5 = 0;
    }
    X_3: for (;;) { IF: if (gt <= 3) {

if ((lcI5) >= ((lcA2).length)) { gt = 38; break IF; }
if ((lcI5) >= ((lcA4).length)) { gt = 38; break IF; }
var stA0 = lcA4;var stI1 = lcI5;var stA2 = vm.org_netbeans_html_json_impl_JSON(false).read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA1, lcA3, Array.at(lcA2, lcI5));
Array.at(stA0, stI1, stA2);
lcI5++;
{ gt = 0; continue X_3; }
    }
    X_38: for (;;) { IF: if (gt <= 38) {
return;

    }
}}}
};
c['copyJSON__VLnet_java_html_BrwsrCtx_2_3Ljava_lang_Object_2Ljava_lang_Class_2_3Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSame__ZII = function(lcI1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcI1) != (lcI2)) { gt = 9; break IF; }
var stI0 = 1;{ gt = 10; break IF; }
    }
    X_9: for (;;) { IF: if (gt <= 9) {

var stI0 = 0;    }
    X_10: for (;;) { IF: if (gt <= 10) {
return stI0;

    }
}}}
};
c['isSame__ZII'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.isSame__ZDD = function(lcD1, lcD3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if (((lcD1).compare(lcD3)) != 0) { gt = 10; break IF; }
var stI0 = 1;{ gt = 11; break IF; }
    }
    X_10: for (;;) { IF: if (gt <= 10) {

var stI0 = 0;    }
    X_11: for (;;) { IF: if (gt <= 11) {
return stI0;

    }
}}}
};
c['isSame__ZDD'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.isSame__ZLjava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== (lcA2)) { gt = 7; break IF; }
return 1;
    }
    X_7: for (;;) { IF: if (gt <= 7) {

if ((lcA1) === null) { gt = 15; break IF; }
if ((lcA2) !== null) { gt = 17; break IF; }
    }
    X_15: for (;;) { IF: if (gt <= 15) {

return 0;
    }
    X_17: for (;;) { IF: if (gt <= 17) {

var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA1,lcA2);
return stI0;

    }
}}}}
};
c['isSame__ZLjava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.hashPlus__ILjava_lang_Object_2I = function(lcA1, lcI2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

if ((lcA1) !== null) { gt = 8; break IF; }
var stI0 = lcI2;{ gt = 14; break IF; }
    }
    X_8: for (;;) { IF: if (gt <= 8) {

var stI1 = invoker.hashCode__I(lcA1);
var stI0 = (lcI2 ^ stI1);    }
    X_14: for (;;) { IF: if (gt <= 14) {
return stI0;

    }
}}}
};
c['hashPlus__ILjava_lang_Object_2I'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.toJSON__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).toJSON__Ljava_lang_String_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['toJSON__Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.stringValue__Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).stringValue__Ljava_lang_String_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['stringValue__Ljava_lang_String_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['numberValue__Ljava_lang_Number_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.charValue__Ljava_lang_Character_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).charValue__Ljava_lang_Character_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['charValue__Ljava_lang_Character_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_impl_JSON(false).boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(lcA1);
return stA0;

};
c['boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.isAssignableFrom__ZLjava_lang_Class_2(vm.java_lang_Number(false).constructor.$class,lcA1);
if ((stI0) == 0) { gt = 15; break IF; }
var stA0 = lcA0.numberValue__Ljava_lang_Number_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_15: for (;;) { IF: if (gt <= 15) {

if ((vm.java_lang_Boolean(false).constructor.$class) !== (lcA1)) { gt = 27; break IF; }
var stA0 = lcA0.boolValue__Ljava_lang_Boolean_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_27: for (;;) { IF: if (gt <= 27) {

if ((vm.java_lang_String(false).constructor.$class) !== (lcA1)) { gt = 39; break IF; }
var stA0 = lcA0.stringValue__Ljava_lang_String_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_39: for (;;) { IF: if (gt <= 39) {

if ((vm.java_lang_Character(false).constructor.$class) !== (lcA1)) { gt = 51; break IF; }
var stA0 = lcA0.charValue__Ljava_lang_Character_2Ljava_lang_Object_2(lcA2);
var lcA2 = stA0;
    }
    X_51: for (;;) { IF: if (gt <= 51) {

if ((vm.java_lang_Integer(false).constructor.$class) !== (lcA1)) { gt = 79; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 74; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.intValue__I(lcA2);
{ gt = 75; break IF; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {

var stI0 = 0;    }
    X_75: for (;;) { IF: if (gt <= 75) {
var stA0 = vm.java_lang_Integer(false)['valueOf__Ljava_lang_Integer_2I'](stI0);
var lcA2 = stA0;
    }
    X_79: for (;;) { IF: if (gt <= 79) {

if ((vm.java_lang_Long(false).constructor.$class) !== (lcA1)) { gt = 107; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 102; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stL0 = invoker.longValue__J(lcA2);
{ gt = 103; break IF; }
    }
    X_102: for (;;) { IF: if (gt <= 102) {

var stL0 = 0;    }
    X_103: for (;;) { IF: if (gt <= 103) {
var stA0 = vm.java_lang_Long(false)['valueOf__Ljava_lang_Long_2J'](stL0);
var lcA2 = stA0;
    }
    X_107: for (;;) { IF: if (gt <= 107) {

if ((vm.java_lang_Short(false).constructor.$class) !== (lcA1)) { gt = 135; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 130; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.shortValue__S(lcA2);
{ gt = 131; break IF; }
    }
    X_130: for (;;) { IF: if (gt <= 130) {

var stI0 = 0;    }
    X_131: for (;;) { IF: if (gt <= 131) {
var stA0 = vm.java_lang_Short(false)['valueOf__Ljava_lang_Short_2S'](stI0);
var lcA2 = stA0;
    }
    X_135: for (;;) { IF: if (gt <= 135) {

if ((vm.java_lang_Byte(false).constructor.$class) !== (lcA1)) { gt = 163; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 158; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stI0 = invoker.byteValue__B(lcA2);
{ gt = 159; break IF; }
    }
    X_158: for (;;) { IF: if (gt <= 158) {

var stI0 = 0;    }
    X_159: for (;;) { IF: if (gt <= 159) {
var stA0 = vm.java_lang_Byte(false)['valueOf__Ljava_lang_Byte_2B'](stI0);
var lcA2 = stA0;
    }
    X_163: for (;;) { IF: if (gt <= 163) {

if ((vm.java_lang_Double(false).constructor.$class) !== (lcA1)) { gt = 193; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 186; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stD0 = invoker.doubleValue__D(lcA2);
{ gt = 189; break IF; }
    }
    X_186: for (;;) { IF: if (gt <= 186) {

var stD0 = NaN;    }
    X_189: for (;;) { IF: if (gt <= 189) {
var stA0 = vm.java_lang_Double(false)['valueOf__Ljava_lang_Double_2D'](stD0);
var lcA2 = stA0;
    }
    X_193: for (;;) { IF: if (gt <= 193) {

if ((vm.java_lang_Float(false).constructor.$class) !== (lcA1)) { gt = 222; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_Number'] ? 1 : 0;
if ((stI0) == 0) { gt = 216; break IF; }
if (lcA2 !== null && !lcA2['$instOf_java_lang_Number']) throw vm.java_lang_ClassCastException(true);
var stF0 = invoker.floatValue__F(lcA2);
{ gt = 218; break IF; }
    }
    X_216: for (;;) { IF: if (gt <= 216) {

var stF0 = NaN;    }
    X_218: for (;;) { IF: if (gt <= 218) {
var stA0 = vm.java_lang_Float(false)['valueOf__Ljava_lang_Float_2F'](stF0);
var lcA2 = stA0;
    }
    X_222: for (;;) { IF: if (gt <= 222) {

var stI0 = invoker.isEnum__Z(lcA1);
if ((stI0) == 0) { gt = 250; break IF; }
var stI0 = lcA2 != null && lcA2['$instOf_java_lang_String'] ? 1 : 0;
if ((stI0) == 0) { gt = 250; break IF; }
var stA0 = invoker.asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2(lcA1,vm.java_lang_Enum(false).constructor.$class);
if (lcA2 !== null && !lcA2['$instOf_java_lang_String']) throw vm.java_lang_ClassCastException(true);
var stA0 = vm.java_lang_Enum(false)['valueOf__Ljava_lang_Enum_2Ljava_lang_Class_2Ljava_lang_String_2'](stA0, lcA2);
var lcA2 = stA0;
    }
    X_250: for (;;) { IF: if (gt <= 250) {

var stA0 = invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2(lcA1,lcA2);
return stA0;

    }
}}}}}}}}}}}}}}}}}}}}}}}}
};
c['extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object);
if ((stI0) == 0) { gt = 19; break IF; }
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) throw vm.java_lang_ClassCastException(true);
if (lcA3 !== null && !Array.prototype['isInstance__ZLjava_lang_Object_2ILjava_lang_Object_2'](lcA3, 1, vm.java_lang_Object)) throw vm.java_lang_ClassCastException(true);
var lcA4 = lcA3;
{ gt = 29; break IF; }
    }
    X_19: for (;;) { IF: if (gt <= 19) {

var stA0 = Array.prototype['newArray__Ljava_lang_Object_2ZLjava_lang_String_2Ljava_lang_Object_2I'](false, '[Ljava/lang/Object;', vm.java_lang_Object, 1);
Array.at(stA0, 0, lcA3);
var lcA4 = stA0;
    }
    X_29: for (;;) { IF: if (gt <= 29) {

invoker.clear__V(lcA1);
var lcA5 = lcA4;
var lcI6 = (lcA5).length;
var lcI7 = 0;
    }
    X_47: for (;;) { IF: if (gt <= 47) {

if ((lcI7) >= (lcI6)) { gt = 81; break IF; }
var lcA8 = Array.at(lcA5, lcI7);
var stA1 = lcA0.extractValue__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2(lcA2, lcA8);
var stI0 = invoker.add__ZLjava_lang_Object_2(lcA1,stA1);
lcI7++;
{ gt = 0; continue X_47; }
    }
    X_81: for (;;) { IF: if (gt <= 81) {
return;

    }
}}}}}
};
c['replaceValue__VLjava_util_Collection_2Ljava_lang_Class_2Ljava_lang_Object_2'] = m;

    m.access = 17;
    m.cls = CLS;
    m = c.access$300___3Ljava_lang_String_2Lorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_Proto$Type(false)._propertyNames.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$400___3ZLorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_Proto$Type(false)._propertyReadOnly.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.access$500___3Ljava_lang_String_2Lorg_netbeans_html_json_spi_Proto$Type_2 = function(lcA0) {
return vm.org_netbeans_html_json_spi_Proto$Type(false)._functions.call(lcA0);

};
    m.access = 4104;
    m.cls = CLS;
    m = c.class__V = function() {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = invoker.desiredAssertionStatus__Z(vm.org_netbeans_html_json_spi_Proto(false).constructor.$class);
if ((stI0) != 0) { gt = 12; break IF; }
var stI0 = 1;{ gt = 13; break IF; }
    }
    X_12: for (;;) { IF: if (gt <= 12) {

var stI0 = 0;    }
    X_13: for (;;) { IF: if (gt <= 13) {
vm.org_netbeans_html_json_spi_Proto$Type(false)._$assertionsDisabled(stI0);
return;

    }
}}}
};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$TypefillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$Type', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$TypefillInstOf });
      org_netbeans_html_json_spi_Proto$TypefillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$Type';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    vm.org_netbeans_html_json_spi_Proto$Type(false).class__V();
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Proto$Type_clazz = null;
    this.fld_org_netbeans_html_json_spi_Proto$Type_propertyNames = null;
    this.fld_org_netbeans_html_json_spi_Proto$Type_propertyReadOnly = null;
    this.fld_org_netbeans_html_json_spi_Proto$Type_functions = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['org_netbeans_html_json_spi_Proto$Type'] = vm.org_netbeans_html_json_spi_Proto$Type;

vm.java_lang_Enum = link('java/lang/Enum', function(f) { vm.java_lang_Enum =  f; });
vm.java_lang_System = link('java/lang/System', function(f) { vm.java_lang_System =  f; });

vm.org_netbeans_html_json_spi_Proto$1WSrcvr = function org_netbeans_html_json_spi_Proto$1WSrcvr() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$1WSrcvr;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_RcvrJSON(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$index = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index = v; return this.fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0 = v; return this.fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2I = function(lcA1, lcI2) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._val$index.call(lcA0, lcI2);
vm.org_netbeans_html_json_impl_RcvrJSON(false).constructor.cons__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_Proto(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
var stA4 = lcA1.getException__Ljava_lang_Exception_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._val$index.call(lcA0), 2, stA4);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_Proto(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
var stA4 = lcA1.getValues___3Ljava_lang_Object_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._val$index.call(lcA0), 1, stA4);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onClose__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_Proto(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._val$index.call(lcA0), 3, null);
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onOpen__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_Proto(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._this$0.call(lcA0));
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2(stA0,stA1, vm.org_netbeans_html_json_spi_Proto$1WSrcvr(false)._val$index.call(lcA0), 0, null);
return;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$1WSrcvrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$1WSrcvr', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$1WSrcvrfillInstOf });
      org_netbeans_html_json_spi_Proto$1WSrcvrfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$1WSrcvr';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Proto$1WSrcvr_val$index = 0;
    this.fld_org_netbeans_html_json_spi_Proto$1WSrcvr_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_Proto$1Rcvr = function org_netbeans_html_json_spi_Proto$1Rcvr() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$1Rcvr;
  if (!CLS.$class) {
    var pp = vm.org_netbeans_html_json_impl_RcvrJSON(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$index = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index = v; return this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index; };
  m = c._val$params = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params = v; return this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0 = v; return this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._val$index.call(lcA0, lcI2);
vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._val$params.call(lcA0, lcA3);
vm.org_netbeans_html_json_impl_RcvrJSON(false).constructor.cons__V.call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.onMessage__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_Proto(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._this$0.call(lcA0));
var stA4 = lcA1.getValues___3Ljava_lang_Object_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._val$index.call(lcA0), 1, stA4, vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._val$params.call(lcA0));
return;

};
    m.access = 4;
    m.cls = CLS;
    m = c.onError__VLorg_netbeans_html_json_impl_RcvrJSON$MsgEvnt_2 = function(lcA1) {
  var  lcA0 = this;
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_Proto(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._this$0.call(lcA0));
var stA4 = lcA1.getException__Ljava_lang_Exception_2();
invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2(stA0,stA1, vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._val$index.call(lcA0), 2, stA4, vm.org_netbeans_html_json_spi_Proto$1Rcvr(false)._val$params.call(lcA0));
return;

};
    m.access = 4;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$1RcvrfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$1Rcvr', { value : true });
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$1RcvrfillInstOf });
      org_netbeans_html_json_spi_Proto$1RcvrfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$1Rcvr';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$index = 0;
    this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_val$params = null;
    this.fld_org_netbeans_html_json_spi_Proto$1Rcvr_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_Proto$3 = function org_netbeans_html_json_spi_Proto$3() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$3;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$index = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$3_val$index = v; return this.fld_org_netbeans_html_json_spi_Proto$3_val$index; };
  m = c._val$args = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$3_val$args = v; return this.fld_org_netbeans_html_json_spi_Proto$3_val$args; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$3_this$0 = v; return this.fld_org_netbeans_html_json_spi_Proto$3_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2I_3Ljava_lang_Object_2 = function(lcA1, lcI2, lcA3) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Proto$3(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Proto$3(false)._val$index.call(lcA0, lcI2);
vm.org_netbeans_html_json_spi_Proto$3(false)._val$args.call(lcA0, lcA3);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
try {
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$200__Lorg_netbeans_html_json_spi_Proto$Type_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$3(false)._this$0.call(lcA0));
var stA1 = vm.org_netbeans_html_json_spi_Proto(false).access$100__Ljava_lang_Object_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$3(false)._this$0.call(lcA0));
invoker.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(stA0,stA1, vm.org_netbeans_html_json_spi_Proto$3(false)._val$index.call(lcA0), vm.org_netbeans_html_json_spi_Proto$3(false)._val$args.call(lcA0), null);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Exception']) {var stA0 = e;{ gt = 29; break IF; }}
throw e;
}{ gt = 34; break IF; }
    }
    X_29: for (;;) { IF: if (gt <= 29) {
var lcA1 = stA0;
invoker.printStackTrace__V(lcA1);
    }
    X_34: for (;;) { IF: if (gt <= 34) {
return;

    }
}}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$3fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$3', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$3fillInstOf });
      org_netbeans_html_json_spi_Proto$3fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$3';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Proto$3_val$index = 0;
    this.fld_org_netbeans_html_json_spi_Proto$3_val$args = null;
    this.fld_org_netbeans_html_json_spi_Proto$3_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_Proto$2 = function org_netbeans_html_json_spi_Proto$2() {
  var m;
  var CLS = org_netbeans_html_json_spi_Proto$2;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._val$propName = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$2_val$propName = v; return this.fld_org_netbeans_html_json_spi_Proto$2_val$propName; };
  m = c._val$oldValue = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$2_val$oldValue = v; return this.fld_org_netbeans_html_json_spi_Proto$2_val$oldValue; };
  m = c._val$newValue = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$2_val$newValue = v; return this.fld_org_netbeans_html_json_spi_Proto$2_val$newValue; };
  m = c._this$0 = function (v) {  if (arguments.length == 1) this.fld_org_netbeans_html_json_spi_Proto$2_this$0 = v; return this.fld_org_netbeans_html_json_spi_Proto$2_this$0; };
    m = CLS.cons__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  var  lcA0 = this;
vm.org_netbeans_html_json_spi_Proto$2(false)._this$0.call(lcA0, lcA1);
vm.org_netbeans_html_json_spi_Proto$2(false)._val$propName.call(lcA0, lcA2);
vm.org_netbeans_html_json_spi_Proto$2(false)._val$oldValue.call(lcA0, lcA3);
vm.org_netbeans_html_json_spi_Proto$2(false)._val$newValue.call(lcA0, lcA4);
vm.java_lang_Object(false).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 0;
    m.cls = CLS;
    m = c.run__V = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$2(false)._this$0.call(lcA0));
if ((stA0) === null) { gt = 32; break IF; }
var stA0 = vm.org_netbeans_html_json_spi_Proto(false).access$000__Lorg_netbeans_html_json_impl_Bindings_2Lorg_netbeans_html_json_spi_Proto_2(vm.org_netbeans_html_json_spi_Proto$2(false)._this$0.call(lcA0));
stA0.valueHasMutated__VLjava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(vm.org_netbeans_html_json_spi_Proto$2(false)._val$propName.call(lcA0), vm.org_netbeans_html_json_spi_Proto$2(false)._val$oldValue.call(lcA0), vm.org_netbeans_html_json_spi_Proto$2(false)._val$newValue.call(lcA0));
    }
    X_32: for (;;) { IF: if (gt <= 32) {

vm.org_netbeans_html_json_spi_Observers(false).valueHasMutated__VLorg_netbeans_html_json_spi_Proto_2Ljava_lang_String_2(vm.org_netbeans_html_json_spi_Proto$2(false)._this$0.call(lcA0), vm.org_netbeans_html_json_spi_Proto$2(false)._val$propName.call(lcA0));
return;

    }
}}
};
c['run__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Proto$2fillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Proto$2', { value : true });
      vm.java_lang_Runnable(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Proto$2fillInstOf });
      org_netbeans_html_json_spi_Proto$2fillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Proto$2';
    CLS.$class.superclass = sprcls;
    CLS.$class.access = 32;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_org_netbeans_html_json_spi_Proto$2_val$propName = null;
    this.fld_org_netbeans_html_json_spi_Proto$2_val$oldValue = null;
    this.fld_org_netbeans_html_json_spi_Proto$2_val$newValue = null;
    this.fld_org_netbeans_html_json_spi_Proto$2_this$0 = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};

vm.org_netbeans_html_json_spi_Technology$BatchInit = function org_netbeans_html_json_spi_Technology$BatchInit() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology$BatchInit;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function(lcA1, lcA2, lcA3) {
  throw 'no code found for org/netbeans/html/json/spi/Technology$BatchInit.wrapModel';
};
c['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Technology$BatchInitfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology$BatchInit', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Technology$BatchInitfillInstOf });
      org_netbeans_html_json_spi_Technology$BatchInitfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology$BatchInit';
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
exports['org_netbeans_html_json_spi_Technology$BatchInit'] = vm.org_netbeans_html_json_spi_Technology$BatchInit;


vm.org_netbeans_html_json_spi_Technology$ValueMutated = function org_netbeans_html_json_spi_Technology$ValueMutated() {
  var m;
  var CLS = org_netbeans_html_json_spi_Technology$ValueMutated;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3, lcA4) {
  throw 'no code found for org/netbeans/html/json/spi/Technology$ValueMutated.valueHasMutated';
};
c['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_json_spi_Technology$ValueMutatedfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_json_spi_Technology$ValueMutated', { value : true });
      vm.org_netbeans_html_json_spi_Technology(false)['fillInstOf'](x);
    }
    try {
      Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_json_spi_Technology$ValueMutatedfillInstOf });
      org_netbeans_html_json_spi_Technology$ValueMutatedfillInstOf(c);
    } catch (ignore) {
    }
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/json/spi/Technology$ValueMutated';
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
exports['org_netbeans_html_json_spi_Technology$ValueMutated'] = vm.org_netbeans_html_json_spi_Technology$ValueMutated;

  invoker.getClass__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getClass__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toString__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['toString__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['extract__VLjava_lang_Object_2_3Ljava_lang_String_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.length__I = function() {
    var target = arguments[0];
    return target['length__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2C = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.charAt__CI = function() {
    var target = arguments[0];
    return target['charAt__CI'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['toModel__Ljava_lang_Object_2Ljava_lang_Class_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.cast__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['cast__Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.equals__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['equals__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.hashCode__I = function() {
    var target = arguments[0];
    return target['hashCode__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isAssignableFrom__ZLjava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['isAssignableFrom__ZLjava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.intValue__I = function() {
    var target = arguments[0];
    return target['intValue__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.longValue__J = function() {
    var target = arguments[0];
    return target['longValue__J'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.shortValue__S = function() {
    var target = arguments[0];
    return target['shortValue__S'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.byteValue__B = function() {
    var target = arguments[0];
    return target['byteValue__B'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.doubleValue__D = function() {
    var target = arguments[0];
    return target['doubleValue__D'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.floatValue__F = function() {
    var target = arguments[0];
    return target['floatValue__F'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.booleanValue__Z = function() {
    var target = arguments[0];
    return target['booleanValue__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isEmpty__Z = function() {
    var target = arguments[0];
    return target['isEmpty__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2 = function() {
    var target = arguments[0];
    return target['loadJSON__VLorg_netbeans_html_json_spi_JSONCall_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2 = function() {
    var target = arguments[0];
    return target['toJSON__Ljava_lang_Object_2Ljava_io_InputStream_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.add__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['add__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getClassLoader__Ljava_lang_ClassLoader_2 = function() {
    var target = arguments[0];
    return target['getClassLoader__Ljava_lang_ClassLoader_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getName__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getName__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.newInstance__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['newInstance__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2 = function() {
    var target = arguments[0];
    return target['open__Ljava_lang_Object_2Ljava_lang_String_2Lorg_netbeans_html_json_spi_JSONCall_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.close__VLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['close__VLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2 = function() {
    var target = arguments[0];
    return target['send__VLjava_lang_Object_2Lorg_netbeans_html_json_spi_JSONCall_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['protoFor__Lorg_netbeans_html_json_spi_Proto_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2 = function() {
    var target = arguments[0];
    return target['cloneTo__Ljava_lang_Object_2Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['read__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.setValue__VLjava_lang_Object_2ILjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['setValue__VLjava_lang_Object_2ILjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getValue__Ljava_lang_Object_2Ljava_lang_Object_2I = function() {
    var target = arguments[0];
    return target['getValue__Ljava_lang_Object_2Ljava_lang_Object_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getBytes___3BLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getBytes___3BLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.write__V_3B = function() {
    var target = arguments[0];
    return target['write__V_3B'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.flush__V = function() {
    var target = arguments[0];
    return target['flush__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.execute__VLjava_lang_Runnable_2 = function() {
    var target = arguments[0];
    return target['execute__VLjava_lang_Runnable_2'].apply(target, Array.prototype.slice.call(arguments, 1));
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
  invoker.size__I = function() {
    var target = arguments[0];
    return target['size__I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.run__V = function() {
    var target = arguments[0];
    return target['run__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2 = function() {
    var target = arguments[0];
    return target['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2_3Lorg_netbeans_html_json_spi_PropertyBinding_2_3Lorg_netbeans_html_json_spi_FunctionBinding_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['wrapModel__Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['bind__VLorg_netbeans_html_json_spi_PropertyBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['expose__VLorg_netbeans_html_json_spi_FunctionBinding_2Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['valueHasMutated__VLjava_lang_Object_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.applyBindings__VLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['applyBindings__VLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['wrapArray__Ljava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.desiredAssertionStatus__Z = function() {
    var target = arguments[0];
    return target['desiredAssertionStatus__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.name__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['name__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.array__Z = function() {
    var target = arguments[0];
    return target['array__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.type__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['type__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.startsWith__ZLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['startsWith__ZLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.endsWith__ZLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['endsWith__ZLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.substring__Ljava_lang_String_2II = function() {
    var target = arguments[0];
    return target['substring__Ljava_lang_String_2II'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getKind__Ljavax_lang_model_element_ElementKind_2 = function() {
    var target = arguments[0];
    return target['getKind__Ljavax_lang_model_element_ElementKind_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getAnnotationMirrors__Ljava_util_List_2 = function() {
    var target = arguments[0];
    return target['getAnnotationMirrors__Ljava_util_List_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getElementValues__Ljava_util_Map_2 = function() {
    var target = arguments[0];
    return target['getElementValues__Ljava_util_Map_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.entrySet__Ljava_util_Set_2 = function() {
    var target = arguments[0];
    return target['entrySet__Ljava_util_Set_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getKey__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['getKey__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getSimpleName__Ljavax_lang_model_element_Name_2 = function() {
    var target = arguments[0];
    return target['getSimpleName__Ljavax_lang_model_element_Name_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.contentEquals__ZLjava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['contentEquals__ZLjava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getValue__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['getValue__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getMessager__Ljavax_annotation_processing_Messager_2 = function() {
    var target = arguments[0];
    return target['getMessager__Ljavax_annotation_processing_Messager_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['printMessage__VLjavax_tools_Diagnostic$Kind_2Ljava_lang_CharSequence_2Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2I = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getElementsAnnotatedWith__Ljava_util_Set_2Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.processingOver__Z = function() {
    var target = arguments[0];
    return target['processingOver__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.clear__V = function() {
    var target = arguments[0];
    return target['clear__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getElementUtils__Ljavax_lang_model_util_Elements_2 = function() {
    var target = arguments[0];
    return target['getElementUtils__Ljavax_lang_model_util_Elements_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2 = function() {
    var target = arguments[0];
    return target['getBinaryName__Ljavax_lang_model_element_Name_2Ljavax_lang_model_element_TypeElement_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['getTypeElement__Ljavax_lang_model_element_TypeElement_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getAnnotation__Ljava_lang_annotation_Annotation_2Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.properties___3Lnet_java_html_json_Property_2 = function() {
    var target = arguments[0];
    return target['properties___3Lnet_java_html_json_Property_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.className__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['className__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getEnclosedElements__Ljava_util_List_2 = function() {
    var target = arguments[0];
    return target['getEnclosedElements__Ljava_util_List_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getFiler__Ljavax_annotation_processing_Filer_2 = function() {
    var target = arguments[0];
    return target['getFiler__Ljavax_annotation_processing_Filer_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['createSourceFile__Ljavax_tools_JavaFileObject_2Ljava_lang_CharSequence_2_3Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.openOutputStream__Ljava_io_OutputStream_2 = function() {
    var target = arguments[0];
    return target['openOutputStream__Ljava_io_OutputStream_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_io_Writer_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_io_Writer_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.write__VLjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['write__VLjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.containsKey__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['containsKey__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.keySet__Ljava_util_Set_2 = function() {
    var target = arguments[0];
    return target['keySet__Ljava_util_Set_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.toArray___3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['toArray___3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.indexOf__ILjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['indexOf__ILjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2I = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.write__VI = function() {
    var target = arguments[0];
    return target['write__VI'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Z = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getQualifiedName__Ljavax_lang_model_element_Name_2 = function() {
    var target = arguments[0];
    return target['getQualifiedName__Ljavax_lang_model_element_Name_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_io_Writer_2C = function() {
    var target = arguments[0];
    return target['append__Ljava_io_Writer_2C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.close__V = function() {
    var target = arguments[0];
    return target['close__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getModifiers__Ljava_util_Set_2 = function() {
    var target = arguments[0];
    return target['getModifiers__Ljava_util_Set_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.contains__ZLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['contains__ZLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getReturnType__Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['getReturnType__Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getTypeUtils__Ljavax_lang_model_util_Types_2 = function() {
    var target = arguments[0];
    return target['getTypeUtils__Ljavax_lang_model_util_Types_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['erasure__Ljavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getTypeArguments__Ljava_util_List_2 = function() {
    var target = arguments[0];
    return target['getTypeArguments__Ljava_util_List_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getKind__Ljavax_lang_model_type_TypeKind_2 = function() {
    var target = arguments[0];
    return target['getKind__Ljavax_lang_model_type_TypeKind_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isPrimitive__Z = function() {
    var target = arguments[0];
    return target['isPrimitive__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.asType__Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['asType__Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['isSubtype__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.unboxedType__Ljavax_lang_model_type_PrimitiveType_2Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['unboxedType__Ljavax_lang_model_type_PrimitiveType_2Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getParameters__Ljava_util_List_2 = function() {
    var target = arguments[0];
    return target['getParameters__Ljava_util_List_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getEnclosingElement__Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['getEnclosingElement__Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.substring__Ljava_lang_String_2I = function() {
    var target = arguments[0];
    return target['substring__Ljava_lang_String_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.replace__Ljava_lang_String_2CC = function() {
    var target = arguments[0];
    return target['replace__Ljava_lang_String_2CC'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.value___3Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['value___3Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['append__Ljava_io_StringWriter_2Ljava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.asElement__Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['asElement__Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.jsonp__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['jsonp__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.method__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['method__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getComponentType__Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['getComponentType__Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.url__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['url__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.onError__Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['onError__Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.append__Ljava_io_StringWriter_2C = function() {
    var target = arguments[0];
    return target['append__Ljava_io_StringWriter_2C'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.lastIndexOf__II = function() {
    var target = arguments[0];
    return target['lastIndexOf__II'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['asElement__Ljavax_lang_model_element_Element_2Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.values__Ljava_util_Collection_2 = function() {
    var target = arguments[0];
    return target['values__Ljava_util_Collection_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.insert__Ljava_lang_StringBuilder_2IC = function() {
    var target = arguments[0];
    return target['insert__Ljava_lang_StringBuilder_2IC'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2 = function() {
    var target = arguments[0];
    return target['insert__Ljava_lang_StringBuilder_2ILjava_lang_CharSequence_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getPackageOf__Ljavax_lang_model_element_PackageElement_2Ljavax_lang_model_element_Element_2 = function() {
    var target = arguments[0];
    return target['getPackageOf__Ljavax_lang_model_element_PackageElement_2Ljavax_lang_model_element_Element_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getTypeMirror__Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['getTypeMirror__Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.indexOf__III = function() {
    var target = arguments[0];
    return target['indexOf__III'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.indexOf__ILjava_lang_String_2 = function() {
    var target = arguments[0];
    return target['indexOf__ILjava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.data__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['data__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getAnnotationType__Ljavax_lang_model_type_DeclaredType_2 = function() {
    var target = arguments[0];
    return target['getAnnotationType__Ljavax_lang_model_type_DeclaredType_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getMethod__Ljava_lang_reflect_Method_2Ljava_lang_String_2_3Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['invoke__Ljava_lang_Object_2Ljava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['log__VLjava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getString__Ljava_lang_String_2Ljava_lang_String_2 = function() {
    var target = arguments[0];
    return target['getString__Ljava_lang_String_2Ljava_lang_String_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2 = function() {
    var target = arguments[0];
    return target['isAssignable__ZLjavax_lang_model_type_TypeMirror_2Ljavax_lang_model_type_TypeMirror_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['call__VLjava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.printStackTrace__V = function() {
    var target = arguments[0];
    return target['printStackTrace__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.get__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['get__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.push__VLjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['push__VLjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.pop__Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['pop__Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.set__Ljava_lang_Object_2ILjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['set__Ljava_lang_Object_2ILjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.remove__V = function() {
    var target = arguments[0];
    return target['remove__V'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.onChange__VLjava_lang_Object_2I = function() {
    var target = arguments[0];
    return target['onChange__VLjava_lang_Object_2I'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.getDeclaringClass__Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['getDeclaringClass__Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2_3Ljava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.onMessage__VLjava_lang_Object_2IILjava_lang_Object_2 = function() {
    var target = arguments[0];
    return target['onMessage__VLjava_lang_Object_2IILjava_lang_Object_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.isEnum__Z = function() {
    var target = arguments[0];
    return target['isEnum__Z'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  invoker.asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2 = function() {
    var target = arguments[0];
    return target['asSubclass__Ljava_lang_Class_2Ljava_lang_Class_2'].apply(target, Array.prototype.slice.call(arguments, 1));
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNDEwMTkwMDA4MjU1DQpCdWlsZC1KZGs6IDEuOC4wXzExDQpCdWlsdC1CeToganR1bGFjaA0KQnVuZGxlLURlc2NyaXB0aW9uOiBBUEkgZm9yIHNtb290aCByZXByZXNlbnRhdGlvbiBvZiBKU09OIG9iamVjdHMgaW4gSmF2DQogYS4gV3JpdGUgeW91cmFwcGxpY2F0aW9uIGluIEphdmEgYW5kcHJlc2VudCBpdCB1c2luZyBtb2Rlcm4gSFRNTCByZW5kZXINCiBpbmcgdGVjaG5vbG9naWVzIGxpa2UgS25vY2tvdXQuDQpCdW5kbGUtRG9jVVJMOiBodHRwOi8vbmV0YmVhbnMub3JnDQpCdW5kbGUtTGljZW5zZTogaHR0cDovL3d3dy5uZXRiZWFucy5vcmcvY2RkbC1ncGx2Mi5odG1sDQpCdW5kbGUtTWFuaWZlc3RWZXJzaW9uOiAyDQpCdW5kbGUtTmFtZTogSlNPTiBNb2RlbCBpbiBKYXZhDQpCdW5kbGUtU3ltYm9saWNOYW1lOiBuZXQuamF2YS5odG1sLmpzb24NCkJ1bmRsZS1WZW5kb3I6IE5ldEJlYW5zDQpCdW5kbGUtVmVyc2lvbjogMS4wLjANCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogbmV0LmphdmEuaHRtbC5qc29uO3VzZXM6PSJuZXQuamF2YS5odG1sIjt2ZXJzaW9uPSIxLjAuMCINCiAsb3JnLm5ldGJlYW5zLmh0bWwuanNvbi5zcGk7dXNlczo9Im5ldC5qYXZhLmh0bWwiO3ZlcnNpb249IjEuMC4wIg0KSW1wb3J0LVBhY2thZ2U6IGphdmF4LmFubm90YXRpb24ucHJvY2Vzc2luZyxqYXZheC5sYW5nLm1vZGVsLGphdmF4LmxhbmcuDQogbW9kZWwuZWxlbWVudCxqYXZheC5sYW5nLm1vZGVsLnR5cGUsamF2YXgubGFuZy5tb2RlbC51dGlsLGphdmF4LnRvb2xzLG4NCiBldC5qYXZhLmh0bWw7dmVyc2lvbj0iWzEuMCwyKSIsb3JnLm5ldGJlYW5zLmh0bWwuY29udGV4dC5zcGk7dmVyc2lvbj0iWw0KIDEuMCwyKSINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
  exports['registerResource']('META-INF/services/javax.annotation.processing.Processor', 'b3JnLm5ldGJlYW5zLmh0bWwuanNvbi5pbXBsLk1vZGVsUHJvY2Vzc29yCg==');
  exports['registerResource']('org/netbeans/html/json/impl/Bundle.properties', 'IwojIERPIE5PVCBBTFRFUiBPUiBSRU1PVkUgQ09QWVJJR0hUIE5PVElDRVMgT1IgVEhJUyBIRUFERVIuCiMKIyBDb3B5cmlnaHQgMjAxMy0yMDE0IE9yYWNsZSBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuCiMKIyBPcmFjbGUgYW5kIEphdmEgYXJlIHJlZ2lzdGVyZWQgdHJhZGVtYXJrcyBvZiBPcmFjbGUgYW5kL29yIGl0cyBhZmZpbGlhdGVzLgojIE90aGVyIG5hbWVzIG1heSBiZSB0cmFkZW1hcmtzIG9mIHRoZWlyIHJlc3BlY3RpdmUgb3duZXJzLgojCiMgVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgZWl0aGVyIHRoZSBHTlUKIyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIFZlcnNpb24gMiBvbmx5ICgiR1BMIikgb3IgdGhlIENvbW1vbgojIERldmVsb3BtZW50IGFuZCBEaXN0cmlidXRpb24gTGljZW5zZSgiQ0RETCIpIChjb2xsZWN0aXZlbHksIHRoZQojICJMaWNlbnNlIikuIFlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUKIyBMaWNlbnNlLiBZb3UgY2FuIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQKIyBodHRwOi8vd3d3Lm5ldGJlYW5zLm9yZy9jZGRsLWdwbHYyLmh0bWwKIyBvciBuYmJ1aWxkL2xpY2Vuc2VzL0NEREwtR1BMLTItQ1AuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlCiMgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUKIyBMaWNlbnNlLiAgV2hlbiBkaXN0cmlidXRpbmcgdGhlIHNvZnR3YXJlLCBpbmNsdWRlIHRoaXMgTGljZW5zZSBIZWFkZXIKIyBOb3RpY2UgaW4gZWFjaCBmaWxlIGFuZCBpbmNsdWRlIHRoZSBMaWNlbnNlIGZpbGUgYXQKIyBuYmJ1aWxkL2xpY2Vuc2VzL0NEREwtR1BMLTItQ1AuICBPcmFjbGUgZGVzaWduYXRlcyB0aGlzCiMgcGFydGljdWxhciBmaWxlIGFzIHN1YmplY3QgdG8gdGhlICJDbGFzc3BhdGgiIGV4Y2VwdGlvbiBhcyBwcm92aWRlZAojIGJ5IE9yYWNsZSBpbiB0aGUgR1BMIFZlcnNpb24gMiBzZWN0aW9uIG9mIHRoZSBMaWNlbnNlIGZpbGUgdGhhdAojIGFjY29tcGFuaWVkIHRoaXMgY29kZS4gSWYgYXBwbGljYWJsZSwgYWRkIHRoZSBmb2xsb3dpbmcgYmVsb3cgdGhlCiMgTGljZW5zZSBIZWFkZXIsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyBbXSByZXBsYWNlZCBieQojIHlvdXIgb3duIGlkZW50aWZ5aW5nIGluZm9ybWF0aW9uOgojICJQb3J0aW9ucyBDb3B5cmlnaHRlZCBbeWVhcl0gW25hbWUgb2YgY29weXJpZ2h0IG93bmVyXSIKIwojIENvbnRyaWJ1dG9yKHMpOgojCiMgVGhlIE9yaWdpbmFsIFNvZnR3YXJlIGlzIE5ldEJlYW5zLiBUaGUgSW5pdGlhbCBEZXZlbG9wZXIgb2YgdGhlIE9yaWdpbmFsCiMgU29mdHdhcmUgaXMgT3JhY2xlLiBQb3J0aW9ucyBDb3B5cmlnaHQgMjAxMy0yMDE0IE9yYWNsZS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4KIwojIElmIHlvdSB3aXNoIHlvdXIgdmVyc2lvbiBvZiB0aGlzIGZpbGUgdG8gYmUgZ292ZXJuZWQgYnkgb25seSB0aGUgQ0RETAojIG9yIG9ubHkgdGhlIEdQTCBWZXJzaW9uIDIsIGluZGljYXRlIHlvdXIgZGVjaXNpb24gYnkgYWRkaW5nCiMgIltDb250cmlidXRvcl0gZWxlY3RzIHRvIGluY2x1ZGUgdGhpcyBzb2Z0d2FyZSBpbiB0aGlzIGRpc3RyaWJ1dGlvbgojIHVuZGVyIHRoZSBbQ0RETCBvciBHUEwgVmVyc2lvbiAyXSBsaWNlbnNlLiIgSWYgeW91IGRvIG5vdCBpbmRpY2F0ZSBhCiMgc2luZ2xlIGNob2ljZSBvZiBsaWNlbnNlLCBhIHJlY2lwaWVudCBoYXMgdGhlIG9wdGlvbiB0byBkaXN0cmlidXRlCiMgeW91ciB2ZXJzaW9uIG9mIHRoaXMgZmlsZSB1bmRlciBlaXRoZXIgdGhlIENEREwsIHRoZSBHUEwgVmVyc2lvbiAyIG9yCiMgdG8gZXh0ZW5kIHRoZSBjaG9pY2Ugb2YgbGljZW5zZSB0byBpdHMgbGljZW5zZWVzIGFzIHByb3ZpZGVkIGFib3ZlLgojIEhvd2V2ZXIsIGlmIHlvdSBhZGQgR1BMIFZlcnNpb24gMiBjb2RlIGFuZCB0aGVyZWZvcmUsIGVsZWN0ZWQgdGhlIEdQTAojIFZlcnNpb24gMiBsaWNlbnNlLCB0aGVuIHRoZSBvcHRpb24gYXBwbGllcyBvbmx5IGlmIHRoZSBuZXcgY29kZSBpcwojIG1hZGUgc3ViamVjdCB0byBzdWNoIG9wdGlvbiBieSB0aGUgY29weXJpZ2h0IGhvbGRlci4KIwoKTVNHX0NvbXBsZXRpb25fR0VUPVRoZSBHRVQgbWV0aG9kIG1lYW5zIHJldHJpZXZlIHdoYXRldmVyIGluZm9ybWF0aW9uIFwKIChpbiB0aGUgZm9ybSBvZiBhbiBlbnRpdHkpIGlzIGlkZW50aWZpZWQgYnkgdGhlIFJlcXVlc3QtVVJJLiBcCiBJZiB0aGUgUmVxdWVzdC1VUkkgcmVmZXJzIHRvIGEgZGF0YS1wcm9kdWNpbmcgcHJvY2VzcywgXAogaXQgaXMgdGhlIHByb2R1Y2VkIGRhdGEgd2hpY2ggc2hhbGwgYmUgcmV0dXJuZWQgYXMgdGhlIGVudGl0eSBpbiBcCiB0aGUgcmVzcG9uc2UgYW5kIG5vdCB0aGUgc291cmNlIHRleHQgb2YgdGhlIHByb2Nlc3MsIFwKIHVubGVzcyB0aGF0IHRleHQgaGFwcGVucyB0byBiZSB0aGUgb3V0cHV0IG9mIHRoZSBwcm9jZXNzLgoKTVNHX0NvbXBsZXRpb25fSEVBRD1UaGUgSEVBRCBtZXRob2QgaXMgaWRlbnRpY2FsIHRvIEdFVCBleGNlcHQgdGhhdCB0aGUgc2VydmVyIFwKIE1VU1QgTk9UIHJldHVybiBhIG1lc3NhZ2UtYm9keSBpbiB0aGUgcmVzcG9uc2UuIFRoZSBtZXRhaW5mb3JtYXRpb24gXAogY29udGFpbmVkIGluIHRoZSBIVFRQIGhlYWRlcnMgaW4gcmVzcG9uc2UgdG8gYSBIRUFEIHJlcXVlc3QgU0hPVUxEIGJlIFwKIGlkZW50aWNhbCB0byB0aGUgaW5mb3JtYXRpb24gc2VudCBpbiByZXNwb25zZSB0byBhIEdFVCByZXF1ZXN0LiBcCiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBmb3Igb2J0YWluaW5nIG1ldGFpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW50aXR5IGltcGxpZWQgXAogYnkgdGhlIHJlcXVlc3Qgd2l0aG91dCB0cmFuc2ZlcnJpbmcgdGhlIGVudGl0eS1ib2R5IGl0c2VsZi4gXAogVGhpcyBtZXRob2QgaXMgb2Z0ZW4gdXNlZCBmb3IgdGVzdGluZyBoeXBlcnRleHQgbGlua3MgZm9yIHZhbGlkaXR5LCBcCiBhY2Nlc3NpYmlsaXR5LCBhbmQgcmVjZW50IG1vZGlmaWNhdGlvbi4KCk1TR19Db21wbGV0aW9uX1BPU1Q9VGhlIFBPU1QgbWV0aG9kIGlzIHVzZWQgdG8gcmVxdWVzdCB0aGF0IHRoZSBvcmlnaW4gc2VydmVyIFwKIGFjY2VwdCB0aGUgZW50aXR5IGVuY2xvc2VkIGluIHRoZSByZXF1ZXN0IGFzIGEgbmV3IHN1Ym9yZGluYXRlIG9mIHRoZSByZXNvdXJjZSBcCiBpZGVudGlmaWVkIGJ5IHRoZSBSZXF1ZXN0LVVSSSBpbiB0aGUgUmVxdWVzdC1MaW5lLiBQT1NUIGlzIGRlc2lnbmVkIHRvIGFsbG93IFwKIGEgdW5pZm9ybSBtZXRob2QgdG8gY292ZXIgYW5ub3RhdGlvbiBvZiBleGlzdGluZyByZXNvdXJjZXMsXCAKIHBvc3RpbmcgYSBtZXNzYWdlIHRvIGEgYnVsbGV0aW4gYm9hcmQsIG5ld3Nncm91cCwgbWFpbGluZyBsaXN0LCBvciBzaW1pbGFyIFwKIGdyb3VwIG9mIGFydGljbGVzLCBwcm92aWRpbmcgYSBibG9jayBvZiBkYXRhLCBzdWNoIGFzIHRoZSByZXN1bHQgb2Ygc3VibWl0dGluZyBhIFwKIGZvcm0sIHRvIGEgZGF0YS1oYW5kbGluZyBwcm9jZXNzIG9yIGV4dGVuZGluZyBhIGRhdGFiYXNlIHRocm91Z2ggYW4gYXBwZW5kIG9wZXJhdGlvbi4gXAogVGhlIGFjdHVhbCBmdW5jdGlvbiBwZXJmb3JtZWQgYnkgdGhlIFBPU1QgbWV0aG9kIGlzIGRldGVybWluZWQgYnkgdGhlIHNlcnZlciBcCiBhbmQgaXMgdXN1YWxseSBkZXBlbmRlbnQgb24gdGhlIFJlcXVlc3QtVVJJLiBUaGUgcG9zdGVkIGVudGl0eSBpcyBzdWJvcmRpbmF0ZSBcCiB0byB0aGF0IFVSSSBpbiB0aGUgc2FtZSB3YXkgdGhhdCBhIGZpbGUgaXMgc3Vib3JkaW5hdGUgdG8gYSBkaXJlY3RvcnkgY29udGFpbmluZyBpdCwgXAogYSBuZXdzIGFydGljbGUgaXMgc3Vib3JkaW5hdGUgdG8gYSBuZXdzZ3JvdXAgdG8gd2hpY2ggaXQgaXMgcG9zdGVkLCBcCiBvciBhIHJlY29yZCBpcyBzdWJvcmRpbmF0ZSB0byBhIGRhdGFiYXNlLgoKTVNHX0NvbXBsZXRpb25fUFVUPVRoZSBQVVQgbWV0aG9kIHJlcXVlc3RzIHRoYXQgdGhlIGVuY2xvc2VkIGVudGl0eSBiZSBzdG9yZWQgXAogdW5kZXIgdGhlIHN1cHBsaWVkIFJlcXVlc3QtVVJJLiBJZiB0aGUgUmVxdWVzdC1VUkkgcmVmZXJzIHRvIGFuIGFscmVhZHkgXAogZXhpc3RpbmcgcmVzb3VyY2UsIHRoZSBlbmNsb3NlZCBlbnRpdHkgU0hPVUxEIGJlIGNvbnNpZGVyZWQgYXMgYSBtb2RpZmllZCBcCiB2ZXJzaW9uIG9mIHRoZSBvbmUgcmVzaWRpbmcgb24gdGhlIG9yaWdpbiBzZXJ2ZXIuIElmIHRoZSBSZXF1ZXN0LVVSSSBkb2VzIFwKIG5vdCBwb2ludCB0byBhbiBleGlzdGluZyByZXNvdXJjZSwgYW5kIHRoYXQgVVJJIGlzIGNhcGFibGUgb2YgYmVpbmcgZGVmaW5lZCBcCiBhcyBhIG5ldyByZXNvdXJjZSBieSB0aGUgcmVxdWVzdGluZyB1c2VyIGFnZW50LCB0aGUgb3JpZ2luIHNlcnZlciBjYW4gXAogY3JlYXRlIHRoZSByZXNvdXJjZSB3aXRoIHRoYXQgVVJJLiBJZiBhIG5ldyByZXNvdXJjZSBpcyBjcmVhdGVkLCB0aGUgb3JpZ2luIFwKIHNlcnZlciBNVVNUIGluZm9ybSB0aGUgdXNlciBhZ2VudCB2aWEgdGhlIDIwMSAoQ3JlYXRlZCkgcmVzcG9uc2UuIFwKIElmIGFuIGV4aXN0aW5nIHJlc291cmNlIGlzIG1vZGlmaWVkLCBlaXRoZXIgdGhlIDIwMCAoT0spIG9yIDIwNCAoTm8gQ29udGVudCkgXAogcmVzcG9uc2UgY29kZXMgU0hPVUxEIGJlIHNlbnQgdG8gaW5kaWNhdGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIHRoZSByZXF1ZXN0LiBcCiBJZiB0aGUgcmVzb3VyY2UgY291bGQgbm90IGJlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgd2l0aCB0aGUgUmVxdWVzdC1VUkksIGFuIFwKIGFwcHJvcHJpYXRlIGVycm9yIHJlc3BvbnNlIFNIT1VMRCBiZSBnaXZlbiB0aGF0IHJlZmxlY3RzIHRoZSBuYXR1cmUgb2YgdGhlIHByb2JsZW0uIFwKIFRoZSByZWNpcGllbnQgb2YgdGhlIGVudGl0eSBNVVNUIE5PVCBpZ25vcmUgYW55IENvbnRlbnQtKiAoZS5nLiBDb250ZW50LVJhbmdlKSBcCiBoZWFkZXJzIHRoYXQgaXQgZG9lcyBub3QgdW5kZXJzdGFuZCBvciBpbXBsZW1lbnQgYW5kIE1VU1QgcmV0dXJuIFwKIGEgNTAxIChOb3QgSW1wbGVtZW50ZWQpIHJlc3BvbnNlIGluIHN1Y2ggY2FzZXMuCgpNU0dfQ29tcGxldGlvbl9ERUxFVEU9VGhlIERFTEVURSBtZXRob2QgcmVxdWVzdHMgdGhhdCB0aGUgb3JpZ2luIHNlcnZlciBkZWxldGUgXAogdGhlIHJlc291cmNlIGlkZW50aWZpZWQgYnkgdGhlIFJlcXVlc3QtVVJJLiBUaGlzIG1ldGhvZCBNQVkgYmUgb3ZlcnJpZGRlbiBcCiBieSBodW1hbiBpbnRlcnZlbnRpb24gKG9yIG90aGVyIG1lYW5zKSBvbiB0aGUgb3JpZ2luIHNlcnZlci4gVGhlIGNsaWVudCBcCiBjYW5ub3QgYmUgZ3VhcmFudGVlZCB0aGF0IHRoZSBvcGVyYXRpb24gaGFzIGJlZW4gY2FycmllZCBvdXQsIGV2ZW4gaWYgXAogdGhlIHN0YXR1cyBjb2RlIHJldHVybmVkIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIgaW5kaWNhdGVzIHRoYXQgdGhlIGFjdGlvbiBcCiBoYXMgYmVlbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LiBIb3dldmVyLCB0aGUgc2VydmVyIFNIT1VMRCBOT1QgaW5kaWNhdGUgXAogc3VjY2VzcyB1bmxlc3MsIGF0IHRoZSB0aW1lIHRoZSByZXNwb25zZSBpcyBnaXZlbiwgaXQgaW50ZW5kcyB0byBkZWxldGUgXAogdGhlIHJlc291cmNlIG9yIG1vdmUgaXQgdG8gYW4gaW5hY2Nlc3NpYmxlIGxvY2F0aW9uLgoK');
  exports['registerResource']('org/netbeans/html/json/spi/package.html', 'PCEtLQoKICAgIERPIE5PVCBBTFRFUiBPUiBSRU1PVkUgQ09QWVJJR0hUIE5PVElDRVMgT1IgVEhJUyBIRUFERVIuCgogICAgQ29weXJpZ2h0IDIwMTMtMjAxNCBPcmFjbGUgYW5kL29yIGl0cyBhZmZpbGlhdGVzLiBBbGwgcmlnaHRzIHJlc2VydmVkLgoKICAgIE9yYWNsZSBhbmQgSmF2YSBhcmUgcmVnaXN0ZXJlZCB0cmFkZW1hcmtzIG9mIE9yYWNsZSBhbmQvb3IgaXRzIGFmZmlsaWF0ZXMuCiAgICBPdGhlciBuYW1lcyBtYXkgYmUgdHJhZGVtYXJrcyBvZiB0aGVpciByZXNwZWN0aXZlIG93bmVycy4KCiAgICBUaGUgY29udGVudHMgb2YgdGhpcyBmaWxlIGFyZSBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiBlaXRoZXIgdGhlIEdOVQogICAgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBWZXJzaW9uIDIgb25seSAoIkdQTCIpIG9yIHRoZSBDb21tb24KICAgIERldmVsb3BtZW50IGFuZCBEaXN0cmlidXRpb24gTGljZW5zZSgiQ0RETCIpIChjb2xsZWN0aXZlbHksIHRoZQogICAgIkxpY2Vuc2UiKS4gWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZQogICAgTGljZW5zZS4gWW91IGNhbiBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAgICBodHRwOi8vd3d3Lm5ldGJlYW5zLm9yZy9jZGRsLWdwbHYyLmh0bWwKICAgIG9yIG5iYnVpbGQvbGljZW5zZXMvQ0RETC1HUEwtMi1DUC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUKICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlCiAgICBMaWNlbnNlLiAgV2hlbiBkaXN0cmlidXRpbmcgdGhlIHNvZnR3YXJlLCBpbmNsdWRlIHRoaXMgTGljZW5zZSBIZWFkZXIKICAgIE5vdGljZSBpbiBlYWNoIGZpbGUgYW5kIGluY2x1ZGUgdGhlIExpY2Vuc2UgZmlsZSBhdAogICAgbmJidWlsZC9saWNlbnNlcy9DRERMLUdQTC0yLUNQLiAgT3JhY2xlIGRlc2lnbmF0ZXMgdGhpcwogICAgcGFydGljdWxhciBmaWxlIGFzIHN1YmplY3QgdG8gdGhlICJDbGFzc3BhdGgiIGV4Y2VwdGlvbiBhcyBwcm92aWRlZAogICAgYnkgT3JhY2xlIGluIHRoZSBHUEwgVmVyc2lvbiAyIHNlY3Rpb24gb2YgdGhlIExpY2Vuc2UgZmlsZSB0aGF0CiAgICBhY2NvbXBhbmllZCB0aGlzIGNvZGUuIElmIGFwcGxpY2FibGUsIGFkZCB0aGUgZm9sbG93aW5nIGJlbG93IHRoZQogICAgTGljZW5zZSBIZWFkZXIsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyBbXSByZXBsYWNlZCBieQogICAgeW91ciBvd24gaWRlbnRpZnlpbmcgaW5mb3JtYXRpb246CiAgICAiUG9ydGlvbnMgQ29weXJpZ2h0ZWQgW3llYXJdIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0iCgogICAgQ29udHJpYnV0b3Iocyk6CgogICAgVGhlIE9yaWdpbmFsIFNvZnR3YXJlIGlzIE5ldEJlYW5zLiBUaGUgSW5pdGlhbCBEZXZlbG9wZXIgb2YgdGhlIE9yaWdpbmFsCiAgICBTb2Z0d2FyZSBpcyBPcmFjbGUuIFBvcnRpb25zIENvcHlyaWdodCAyMDEzLTIwMTQgT3JhY2xlLiBBbGwgUmlnaHRzIFJlc2VydmVkLgoKICAgIElmIHlvdSB3aXNoIHlvdXIgdmVyc2lvbiBvZiB0aGlzIGZpbGUgdG8gYmUgZ292ZXJuZWQgYnkgb25seSB0aGUgQ0RETAogICAgb3Igb25seSB0aGUgR1BMIFZlcnNpb24gMiwgaW5kaWNhdGUgeW91ciBkZWNpc2lvbiBieSBhZGRpbmcKICAgICJbQ29udHJpYnV0b3JdIGVsZWN0cyB0byBpbmNsdWRlIHRoaXMgc29mdHdhcmUgaW4gdGhpcyBkaXN0cmlidXRpb24KICAgIHVuZGVyIHRoZSBbQ0RETCBvciBHUEwgVmVyc2lvbiAyXSBsaWNlbnNlLiIgSWYgeW91IGRvIG5vdCBpbmRpY2F0ZSBhCiAgICBzaW5nbGUgY2hvaWNlIG9mIGxpY2Vuc2UsIGEgcmVjaXBpZW50IGhhcyB0aGUgb3B0aW9uIHRvIGRpc3RyaWJ1dGUKICAgIHlvdXIgdmVyc2lvbiBvZiB0aGlzIGZpbGUgdW5kZXIgZWl0aGVyIHRoZSBDRERMLCB0aGUgR1BMIFZlcnNpb24gMiBvcgogICAgdG8gZXh0ZW5kIHRoZSBjaG9pY2Ugb2YgbGljZW5zZSB0byBpdHMgbGljZW5zZWVzIGFzIHByb3ZpZGVkIGFib3ZlLgogICAgSG93ZXZlciwgaWYgeW91IGFkZCBHUEwgVmVyc2lvbiAyIGNvZGUgYW5kIHRoZXJlZm9yZSwgZWxlY3RlZCB0aGUgR1BMCiAgICBWZXJzaW9uIDIgbGljZW5zZSwgdGhlbiB0aGUgb3B0aW9uIGFwcGxpZXMgb25seSBpZiB0aGUgbmV3IGNvZGUgaXMKICAgIG1hZGUgc3ViamVjdCB0byBzdWNoIG9wdGlvbiBieSB0aGUgY29weXJpZ2h0IGhvbGRlci4KCi0tPgo8IURPQ1RZUEUgaHRtbD4KPGh0bWw+CiAgICA8aGVhZD4KICAgICAgICA8dGl0bGU+PC90aXRsZT4KICAgICAgICA8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LVR5cGUiIGNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD1VVEYtOCI+CiAgICA8L2hlYWQ+CiAgICA8Ym9keT4KICAgICAgICA8ZGl2PkltcGxlbWVudCAKICAgICAgICAgICAgPGEgaHJlZj0iVGVjaG5vbG9neS5odG1sIj5UZWNobm9sb2d5PC9hPiBhbmQKICAgICAgICAgICAgPGEgaHJlZj0iVHJhbnNmZXIuaHRtbCI+VHJhbnNmZXI8L2E+IGFuZCB1c2UgCiAgICAgICAgICAgIDxhIGhyZWY9IkNvbnRleHRCdWlsZGVyLmh0bWwiPkNvbnRleHRCdWlsZGVyPC9hPiB0byBjcmVhdGUgYW4gaW5zdGFuY2UKICAgICAgICAgICAgb2YgPGNvZGU+Q29udGV4dDwvY29kZT4gcmVwcmVzZW50aW5nIHlvdXIgdGVjaG5vbG9neS4KICAgICAgICA8L2Rpdj4KICAgIDwvYm9keT4KPC9odG1sPgo=');
});