(function VM(global) {var fillInVMSkeleton = function(vm) {
  var invoker = {};
vm.java_lang_Object = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Object;
  var c = vm.loadClass('java.lang.Object');
  return vm.java_lang_Object(instance);
}
vm.java_lang_Class = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Class;
  var c = vm.loadClass('java.lang.Class');
  return vm.java_lang_Class(instance);
}
vm.java_lang_ArithmeticException = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_ArithmeticException;
  var c = vm.loadClass('java.lang.ArithmeticException');
  return vm.java_lang_ArithmeticException(instance);
}
  return vm;
  };
  var extensions = [];
  function replaceAll(s, target, replacement) {
    var pos = 0;
    for (;;) {
      var indx = s.indexOf(target, pos);
      if (indx === -1) {
        return s;
      }
      pos = indx + replacement.length;
      s = s.substring(0, indx) + replacement + s.substring(indx + target.length);
    }
  }
  function mangleClass(name) {
    name = replaceAll(name, '_', '_1');
    name = replaceAll(name, '.', '_');
    return name;
  };
  var pending = [];
  var pendingClasses = [];
  function extensionLoaded(ev) {
    var at = pending.indexOf(ev.target);
    pending.splice(at, 1);
    if (pending.length === 0) {
      for (var i = 0; i < pendingClasses.length; i += 3) {
        invokeMethod(pendingClasses[i], pendingClasses[i + 1], pendingClasses[i + 2]);
      }
      pendingClasses = [];
    }
  }
  function invokeMethod(vm, n, args) {
    var clazz = vm.loadClass(n);
    if (args) {
      var seek = args[0];
      var prefix = seek.indexOf('__') == -1 ? seek + '__' : seek;
      args = Array.prototype.slice.call(args, 1);
      var found = '';
      for (var m in clazz) {
        if (m.indexOf(prefix) === 0) {
          return clazz[m].apply(null, args);
        }
        found += m.toString() + '\n'
      }
      throw 'Cannot find ' + seek + ' in ' + n + ' found:\n' + found;
    }
  }
  function extensionError(ev) {
    console.log('error loading ' + ev.target.src);
    extensionLoaded(ev);
  }
  function loadExtension(url) {
      if (url.substring(url.length - 4) == '.jar')
        url = url.substring(0, url.length - 4) + '.js';
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onload = extensionLoaded;
      script.onerror = extensionError;
      document.getElementsByTagName('head')[0].appendChild(script);
      pending.push(script);
  }
  global.bck2brwsr = function() {
    var args = Array.prototype.slice.apply(arguments);
    var resources = {};
    function registerResource(n, a64) {
      var str = atob(a64);
      var arr = [];
      for (var i = 0; i < str.length; i++) {
        var ch = str.charCodeAt(i) & 0xff;
        if (ch > 127) ch -= 256;
        arr.push(ch);
      }
      if (!resources[n]) resources[n] = [arr];
      else resources[n].push(arr);
    }
    var vm = fillInVMSkeleton({ 'registerResource' : registerResource });
    function initVM() {
      var clsArray = vm['java_lang_reflect_Array'];
      if (clsArray) clsArray(false);
    }
    for (var i = 0; i < extensions.length; ++i) {
      extensions[i](vm);
    }
    vm['registerResource'] = null;
    var knownExtensions = extensions.length;
    var loader = {};
    var loadBytes = function(name, skip) {
      skip = typeof skip == 'number' ? skip : 0;
      var arr = resources[name];
      if (arr) {
        var arrSize = arr.length;
        if (skip < arrSize) return arr[skip];
        skip -= arrSize;
      } else {
        var arrSize = 0;
      };
      for (var i = 0; i < args.length; i++) {
        var at = args[i];
        if(!at) continue;
        var ret;
        if (typeof at === 'string' && at.substring(at.length - 3) === '.js') {
          loadExtension(at);
          args[i] = null;
        } else if (typeof at === 'function') ret = at(name, skip);
        else {
          var cp = vm['org_apidesign_vm4brwsr_ClassPath'];
          if (!cp) throw 'Core Java library not registered. Cannot load from ' + at;
          ret = cp(false).
            loadBytes___3BLjava_lang_String_2Ljava_lang_Object_2II(name, args, i, skip);
        }
        if (ret) return ret;
      }
      while (knownExtensions < extensions.length) {
        vm['registerResource'] = registerResource;
        extensions[knownExtensions++](vm);
        vm['registerResource'] = null;
        initVM();
      }
      var arr = resources[name];
      return (arr && arr.length > arrSize) ? arr[arrSize] : null;
    }
    var reload = function(name, arr, keep) {
      if (!arr) throw 'Cannot find ' + name;
      var lazy = vm['org_apidesign_vm4brwsr_VMLazy'];
      if (!lazy) throw 'No bck2brwsr VM module to compile ' + name;
      if (!keep) {
        var attr = mangleClass(name);
        delete vm[attr];
      }
      return lazy(false)
        ['load__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_String_2_3Ljava_lang_Object_2_3B']
        (vm, name, args, arr);
    };
    var loadClass = function(name) {
      var attr = mangleClass(name);
      var fn = vm[attr];
      if (fn) return fn(false);
      try {
        var arr = loadBytes(replaceAll(name, '.', '/') + '.class');
        return reload(name, arr, true);
      } catch (err) {
        fn = vm[attr];
        if (fn) return fn(false);
        throw err;
      }
    }
    if (vm['loadClass']) {
      throw 'Cannot initialize the bck2brwsr VM twice!';
    }
    vm['loadClass'] = loadClass;
    vm['_reload'] = reload;
    vm['loadBytes'] = loadBytes;
    initVM();
    loader.loadClass = function(name) {
      if (pending.length === 0) {
        try {
          var c = loadClass(name);
          c['invoke'] = function() {
            return invokeMethod(vm, name, arguments);
          };
          return c;
        } catch (err) {
          if (pending.length === 0) throw err;
        }
      }
      pendingClasses.push(vm);
      pendingClasses.push(name);
      pendingClasses.push(null);
      return {
        'invoke' : function() {
          if (pending.length === 0) {
            invokeMethod(vm, name, arguments);
            return;
          }
          pendingClasses.push(vm);
          pendingClasses.push(name);
          pendingClasses.push(arguments);
        }
      };
    }
    return loader;
  };
  global.bck2brwsr.register = function(config, extension) {
    if (!config || config['magic'] !== 'kafíčko') {
      console.log('Will not register: ' + extension);
      return false;
    }
    extensions.push(extension);
    var cp = config['classpath'];
    if (cp) for (var i = 0; i < cp.length; i++) {
      loadExtension(cp[i]);
    }
    return null;
  };
}(this));