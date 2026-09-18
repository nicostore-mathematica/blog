/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$2 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$1(val) || isFunction$1(val)) && isFunction$1(val.then) && isFunction$1(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return ((str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  });
};
const camelizeRE = /-\w/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s2 = str ? `on${capitalize(str)}` : ``;
    return s2;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
const toNumber = (val) => {
  const n2 = isString$1(val) ? Number(val) : NaN;
  return isNaN(n2) ? val : n2;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray$2(value)) {
    const res = {};
    for (let i2 = 0; i2 < value.length; i2++) {
      const item = value[i2];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value) || isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray$2(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      const normalized = normalizeClass(value[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString$1(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$2(val) || isObject$1(val) && (val.toString === objectToString || !isFunction$1(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i2) => {
          entries[stringifySymbol(key, i2) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject$1(val) && !isArray$2(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v2, i2 = "") => {
  var _a2;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v2) ? `Symbol(${(_a2 = v2.description) != null ? _a2 : i2})` : v2
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i2, l2;
      if (this.scopes) {
        for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
          this.scopes[i2].pause();
        }
      }
      for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
        this.effects[i2].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i2, l2;
        if (this.scopes) {
          for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
            this.scopes[i2].resume();
          }
        }
        for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
          this.effects[i2].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i2, l2;
      for (i2 = 0, l2 = this.effects.length; i2 < l2; i2++) {
        this.effects[i2].stop();
      }
      this.effects.length = 0;
      for (i2 = 0, l2 = this.cleanups.length; i2 < l2; i2++) {
        this.cleanups[i2]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i2 = 0, l2 = this.scopes.length; i2 < l2; i2++) {
          this.scopes[i2].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err2) {
          if (!error) error = err2;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err2) {
    dep.version++;
    throw err2;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l2 = dep.computed.deps; l2; l2 = l2.nextDep) {
        removeSub(l2, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l2 = computed2.deps; l2; l2 = l2.nextDep) {
        addSub(l2);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  ""
);
const ARRAY_ITERATE_KEY = Symbol(
  ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray$2(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
function toWrapped(target, item) {
  if (isReadonly(target)) {
    return isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
  }
  return toReactive(item);
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x2) => isArray$2(x2) ? reactiveReadArray(x2) : x2)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toWrapped(this, value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(
      this,
      "filter",
      fn,
      thisArg,
      (v2) => v2.map((item) => toWrapped(this, item)),
      arguments
    );
  },
  find(fn, thisArg) {
    return apply(
      this,
      "find",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(
      this,
      "findLast",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator2) {
    return reactiveReadArray(this).join(separator2);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", (item) => toWrapped(this, item));
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (!result.done) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
function hasOwnProperty(key) {
  if (!isSymbol(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$2(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      const value = targetIsArray && isIntegerKey(key) ? res : res.value;
      return isReadonly2 && isObject$1(value) ? readonly(value) : value;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const isArrayWithIntegerKey = isArray$2(target) && isIntegerKey(key);
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArrayWithIntegerKey && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn$1(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn$1(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$2(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn$1(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn$1(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$1(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
function isRef(r2) {
  return r2 ? r2["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return isFunction$1(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this["__v_isRef"] = true;
    this._value = void 0;
    const dep = this.dep = new Dep();
    const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
    this._get = get;
    this._set = set;
  }
  get value() {
    return this._value = this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  const ret = isArray$2(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
    this._raw = toRaw(_object);
    let shallow = true;
    let obj = _object;
    if (!isArray$2(_object) || !isIntegerKey(String(_key))) {
      do {
        shallow = !isProxy(obj) || isShallow(obj);
      } while (shallow && (obj = obj["__v_raw"]));
    }
    this._shallow = shallow;
  }
  get value() {
    let val = this._object[this._key];
    if (this._shallow) {
      val = unref(val);
    }
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    if (this._shallow && isRef(this._raw[this._key])) {
      const nestedRef = this._object[this._key];
      if (isRef(nestedRef)) {
        nestedRef.value = newVal;
        return;
      }
    }
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(this._raw, this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function toRef$1(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction$1(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$1(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  return new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction$1(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call } = options;
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$2(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return reactiveGetter(s2);
      } else if (isFunction$1(s2)) {
        return call ? call(s2, 2) : s2();
      } else ;
    });
  } else if (isFunction$1(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen2) {
  if (depth <= 0 || !isObject$1(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Map();
  if ((seen2.get(value) || 0) >= depth) {
    return value;
  }
  seen2.set(value, depth);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen2);
  } else if (isArray$2(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      traverse(value[i2], depth, seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v2) => {
      traverse(v2, depth, seen2);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen2);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen2);
      }
    }
  }
  return value;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack = [];
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a2) => {
          var _a2, _b2;
          return (_b2 = (_a2 = a2.toString) == null ? void 0 : _a2.call(a2)) != null ? _b2 : JSON.stringify(a2);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i2) => {
    logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$1(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err2) {
    handleError(err2, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$1(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err2) => {
        handleError(err2, instance, type);
      });
    }
    return res;
  }
  if (isArray$2(fn)) {
    const values = [];
    for (let i2 = 0; i2 < fn.length; i2++) {
      values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
    }
    return values;
  }
}
function handleError(err2, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err2, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err2,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err2, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err2, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err2;
  } else {
    console.error(err2);
  }
}
const queue$1 = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex$1(id) {
  let start = flushIndex + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue$1[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue$1[queue$1.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex$1(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$2(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen2, i2 = flushIndex + 1) {
  for (; i2 < queue$1.length; i2++) {
    const cb = queue$1[i2];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue$1.splice(i2, 1);
      i2--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a2, b2) => getId(a2) - getId(b2)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen2) {
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue$1.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue$1.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i2 = 0; i2 < directives.length; i2++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
    if (dir) {
      if (isFunction$1(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString$1(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (parentComponent && parentComponent.isCE) {
            (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        n2.el.__isMounted = false;
        queuePostRenderEffect(() => {
          mountToTarget();
          delete n2.el.__isMounted;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i2 = 0; i2 < children.length; i2++) {
        move(
          children[i2],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  function hydrateDisabledTeleport(node2, vnode2, targetStart, targetAnchor) {
    vnode2.anchor = hydrateChildren(
      nextSibling(node2),
      vnode2,
      parentNode(node2),
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    vnode2.targetStart = targetStart;
    vnode2.targetAnchor = targetAnchor;
  }
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  const disabled = isTeleportDisabled(vnode.props);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        hydrateDisabledTeleport(
          node,
          vnode,
          targetNode,
          targetNode && nextSibling(targetNode)
        );
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  } else if (disabled) {
    if (vnode.shapeFlag & 16) {
      hydrateDisabledTeleport(node, vnode, node, nextSibling(node));
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey$1 = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c of children) {
      if (c.type !== Comment) {
        child = c;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$2(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey$1] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey$1] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey$1]) {
        el[enterCbKey$1](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction$1(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i2 = 0; i2 < children.length; i2++) {
    let child = children[i2];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i2);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i2 = 0; i2 < ret.length; i2++) {
      ret[i2].patchFlag = -2;
    }
  }
  return ret;
}
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction$1(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function useId() {
  const i2 = getCurrentInstance();
  if (i2) {
    return (i2.appContext.config.idPrefix || "v") + "-" + i2.ids[0] + i2.ids[1]++;
  }
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
function useTemplateRef(key) {
  const i2 = getCurrentInstance();
  const r2 = shallowRef(null);
  if (i2) {
    const refs = i2.refs === EMPTY_OBJ ? i2.refs = {} : i2.refs;
    {
      Object.defineProperty(refs, key, {
        enumerable: true,
        get: () => r2.value,
        set: (val) => r2.value = val
      });
    }
  }
  const ret = r2;
  return ret;
}
const pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$2(rawRef)) {
    rawRef.forEach(
      (r2, i2) => setRef(
        r2,
        oldRawRef && (isArray$2(oldRawRef) ? oldRawRef[i2] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
    return hasOwn$1(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref3) {
    invalidatePendingSetRef(oldRawRef);
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      {
        oldRef.value = null;
      }
      const oldRawRefAtom = oldRawRef;
      if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
    }
  }
  if (isFunction$1(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref3);
    const _isRef = isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
          if (isUnmount) {
            isArray$2(existing) && remove(existing, refValue);
          } else {
            if (!isArray$2(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (canSetSetupRef(ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                const newVal = [refValue];
                {
                  ref3.value = newVal;
                }
                if (rawRef.k) refs[rawRef.k] = newVal;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value;
          if (canSetSetupRef(ref3)) {
            setupState[ref3] = value;
          }
        } else if (_isRef) {
          {
            ref3.value = value;
          }
          if (rawRef.k) refs[rawRef.k] = value;
        } else ;
      };
      if (value) {
        const job = () => {
          doSet();
          pendingSetRefMap.delete(rawRef);
        };
        job.id = -1;
        pendingSetRefMap.set(rawRef, job);
        queuePostRenderEffect(job, parentSuspense);
      } else {
        invalidatePendingSetRef(rawRef);
        doSet();
      }
    }
  }
}
function invalidatePendingSetRef(rawRef) {
  const pendingSetRef = pendingSetRefMap.get(rawRef);
  if (pendingSetRef) {
    pendingSetRef.flags |= 8;
    pendingSetRefMap.delete(rawRef);
  }
}
let hasLoggedMismatchError = false;
const logMismatchError = () => {
  if (hasLoggedMismatchError) {
    return;
  }
  console.error("Hydration completed but contains mismatches.");
  hasLoggedMismatchError = true;
};
const isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
const getContainerType = (container) => {
  if (container.nodeType !== 1) return void 0;
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp: patchProp2,
      createText,
      nextSibling,
      parentNode,
      remove: remove2,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type, ref: ref3, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            logMismatchError();
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode(node)) {
          nextNode = nextSibling(node);
          replaceNode(
            vnode.el = node.content.firstChild,
            node,
            parentComponent
          );
        } else if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i2 = 0; i2 < vnode.staticCount; i2++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i2 === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            optimized
          );
          if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            getContainerType(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else ;
    }
    if (ref3 != null) {
      setRef(ref3, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
    const forcePatch = type === "input" || type === "option";
    if (forcePatch || patchFlag !== -1) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      let needCallTransitionHooks = false;
      if (isTemplateNode(el)) {
        needCallTransitionHooks = needTransition(
          null,
          // no need check parentSuspense in hydration
          transition
        ) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        const content = el.content.firstChild;
        if (needCallTransitionHooks) {
          const cls = content.getAttribute("class");
          if (cls) content.$cls = cls;
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        while (next) {
          if (!isMismatchAllowed(
            el,
            1
            /* CHILDREN */
          )) {
            logMismatchError();
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        let clientText = vnode.children;
        if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) {
          clientText = clientText.slice(1);
        }
        const { textContent } = el;
        if (textContent !== clientText && // innerHTML normalize \r\n or \r into a single \n in the DOM
        textContent !== clientText.replace(/\r\n|\r/g, "\n")) {
          if (!isMismatchAllowed(
            el,
            0
            /* TEXT */
          )) {
            logMismatchError();
          }
          el.textContent = vnode.children;
        }
      }
      if (props) {
        if (forcePatch || !optimized || patchFlag & (16 | 32)) {
          const isCustomElement = el.tagName.includes("-");
          for (const key in props) {
            if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || // force hydrate v-bind with .prop modifiers
            key[0] === "." || isCustomElement) {
              patchProp2(el, key, null, props[key], void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(
            el,
            "onClick",
            null,
            props.onClick,
            void 0,
            parentComponent
          );
        } else if (patchFlag & 4 && isReactive(props.style)) {
          for (const key in props.style) props.style[key];
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l2 = children.length;
    for (let i2 = 0; i2 < l2; i2++) {
      const vnode = optimized ? children[i2] : children[i2] = normalizeVNode(children[i2]);
      const isText = vnode.type === Text;
      if (node) {
        if (isText && !optimized) {
          if (i2 + 1 < l2 && normalizeVNode(children[i2 + 1]).type === Text) {
            insert(
              createText(
                node.data.slice(vnode.children.length)
              ),
              container,
              nextSibling(node)
            );
            node.data = vnode.children;
          }
        }
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (isText && !vnode.children) {
        insert(vnode.el = createText(""), container);
      } else {
        if (!isMismatchAllowed(
          container,
          1
          /* CHILDREN */
        )) {
          logMismatchError();
        }
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          getContainerType(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      logMismatchError();
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    if (!isMismatchAllowed(
      node.parentElement,
      1
      /* CHILDREN */
    )) {
      logMismatchError();
    }
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      getContainerType(container),
      slotScopeIds
    );
    if (parentComponent) {
      parentComponent.vnode.el = vnode.el;
      updateHOCHostEl(parentComponent, vnode.el);
    }
    return next;
  };
  const locateClosingAnchor = (node, open = "[", close = "]") => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match++;
        if (node.data === close) {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  const replaceNode = (newNode, oldNode, parentComponent) => {
    const parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    let parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  const isTemplateNode = (node) => {
    return node.nodeType === 1 && node.tagName === "TEMPLATE";
  };
  return [hydrate, hydrateNode];
}
const allowMismatchAttr = "data-allow-mismatch";
const MismatchTypeString = {
  [
    0
    /* TEXT */
  ]: "text",
  [
    1
    /* CHILDREN */
  ]: "children",
  [
    2
    /* CLASS */
  ]: "class",
  [
    3
    /* STYLE */
  ]: "style",
  [
    4
    /* ATTRIBUTE */
  ]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
  if (allowedType === 0 || allowedType === 1) {
    while (el && !el.hasAttribute(allowMismatchAttr)) {
      el = el.parentElement;
    }
  }
  const allowedAttr = el && el.getAttribute(allowMismatchAttr);
  if (allowedAttr == null) {
    return false;
  } else if (allowedAttr === "") {
    return true;
  } else {
    const list = allowedAttr.split(",");
    if (allowedType === 0 && list.includes("children")) {
      return true;
    }
    return list.includes(MismatchTypeString[allowedType]);
  }
}
getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
function forEachElement(node, cb) {
  if (isComment(node) && node.data === "[") {
    let depth = 1;
    let next = node.nextSibling;
    while (next) {
      if (next.nodeType === 1) {
        const result = cb(next);
        if (result === false) {
          break;
        }
      } else if (isComment(next)) {
        if (next.data === "]") {
          if (--depth === 0) break;
        } else if (next.data === "[") {
          depth++;
        }
      }
      next = next.nextSibling;
    }
  } else {
    cb(node);
  }
}
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction$1(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    hydrate: hydrateStrategy,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err2) => {
      err2 = err2 instanceof Error ? err2 : new Error(String(err2));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err2);
          userOnError(err2, userRetry, userFail, retries + 1);
        });
      } else {
        throw err2;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return /* @__PURE__ */ defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    __asyncHydrate(el, instance, hydrate) {
      let patched = false;
      (instance.bu || (instance.bu = [])).push(() => patched = true);
      const performHydrate = () => {
        if (patched) {
          return;
        }
        hydrate();
      };
      const doHydrate = hydrateStrategy ? () => {
        const teardown = hydrateStrategy(
          performHydrate,
          (cb) => forEachElement(el, cb)
        );
        if (teardown) {
          (instance.bum || (instance.bum = [])).push(teardown);
        }
      } : performHydrate;
      if (resolvedComp) {
        doHydrate();
      } else {
        load().then(() => !instance.isUnmounted && doHydrate());
      }
    },
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      markAsyncBoundary(instance);
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err2) => {
        pendingRequest = null;
        handleError(
          err2,
          instance,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err2) => {
          onError(err2);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err2
          }) : null;
        });
      }
      const loaded = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err2 = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err2);
            error.value = err2;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.update();
        }
      }).catch((err2) => {
        onError(err2);
        error.value = err2;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createInnerComp(
            loadingComponent,
            instance
          );
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref22, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref22;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString$1(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache;
  const sourceIsArray = isArray$2(source);
  if (sourceIsArray || isString$1(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      isReadonlySource = isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i2 = 0, l2 = source.length; i2 < l2; i2++) {
      ret[i2] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i2])) : toReactive(source[i2]) : source[i2],
        i2,
        void 0,
        cached
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i2 = 0; i2 < source; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, void 0, cached);
    }
  } else if (isObject$1(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i2) => renderItem(item, i2, void 0, cached)
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i2 = 0, l2 = keys.length; i2 < l2; i2++) {
        const key = keys[i2];
        ret[i2] = renderItem(source[key], key, i2, cached);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    const hasProps = Object.keys(props).length > 0;
    if (name !== "default") props.name = name;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      hasProps ? -2 : 64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  for (const key in obj) {
    ret[/[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = (i2) => {
  if (!i2) return null;
  if (isStatefulComponent(i2)) return getComponentPublicInstance(i2);
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i2) => i2,
    $el: (i2) => i2.vnode.el,
    $data: (i2) => i2.data,
    $props: (i2) => i2.props,
    $attrs: (i2) => i2.attrs,
    $slots: (i2) => i2.slots,
    $refs: (i2) => i2.refs,
    $parent: (i2) => getPublicInstance(i2.parent),
    $root: (i2) => getPublicInstance(i2.root),
    $host: (i2) => i2.ce,
    $emit: (i2) => i2.emit,
    $options: (i2) => resolveMergedOptions(i2),
    $forceUpdate: (i2) => i2.f || (i2.f = () => {
      queueJob(i2.update);
    }),
    $nextTick: (i2) => i2.n || (i2.n = nextTick.bind(i2.proxy)),
    $watch: (i2) => instanceWatch.bind(i2)
  })
);
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$1(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (hasOwn$1(props, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn$1(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, props, type }
  }, key) {
    let cssModules;
    return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn$1(data, key) || hasSetupBinding(setupState, key) || hasOwn$1(props, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn$1(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
function useSlots() {
  return getContext().slots;
}
function getContext(calledFunctionName) {
  const i2 = getCurrentInstance();
  return i2.setupContext || (i2.setupContext = createSetupContext(i2));
}
function normalizePropsOrEmits(props) {
  return isArray$2(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$1(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$1(data)) ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set = !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v2) => c.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction$1(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$2(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$2(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$2(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$1(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v2) => injected.value = v2
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$2(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction$1(handler)) {
      {
        watch(getter, handler);
      }
    }
  } else if (isFunction$1(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject$1(raw)) {
    if (isArray$2(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction$1(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$1(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m2) => mergeOptions$1(resolved, m2, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  if (isObject$1(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m2) => mergeOptions$1(to, m2, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction$1(to) ? to.call(this, this) : to,
      isFunction$1(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$2(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$2(to) && isArray$2(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!isFunction$1(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$1(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) ;
        else if (plugin && isFunction$1(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction$1(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else ;
  }
}
function hasInjectionContext() {
  return !!(getCurrentInstance() || currentApp);
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
function watchPostEffect(effect2, options) {
  return doWatch(
    effect2,
    null,
    { flush: "post" }
  );
}
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  const baseWatchOptions = extend({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$1(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a2) => isString$1(a2) ? a2.trim() : a2);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
const mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$1(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$2(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$1(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render2.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false) ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          false ? shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          false ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err2) {
    blockStack.length = 0;
    handleError(err2, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root, vnode.transition);
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn$1(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn$1(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn$1(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn$1(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn$1(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$1(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$1(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$2(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$2(opt) || isFunction$1(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray$2(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction$1(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction$1(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn$1(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$1(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
const isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
const normalizeSlotValue = (value) => isArray$2(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction$1(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
const queuePostRenderEffect = queueEffectWithSuspense;
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else ;
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref3 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      const customElement = !!(n1.el && n1.el._isVueCE) ? n1.el : null;
      try {
        if (customElement) {
          customElement._beginPatch();
        }
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } finally {
        if (customElement) {
          customElement._endPatch();
        }
      }
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m: m2, parent, root, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && // @ts-expect-error _def is private
          root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m2) {
          queuePostRenderEffect(m2, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u: u2, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u2) {
          queuePostRenderEffect(u2, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(
        c1[i2],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i2 > e1) {
      if (i2 <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e2) {
          patch(
            null,
            c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i2++;
        }
      }
    } else if (i2 > e2) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i2 = s2; i2 <= e2; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j2;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++) newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j2 = s2; j2 <= e2; j2++) {
            if (newIndexToOldIndexMap[j2 - s2] === 0 && isSameVNodeType(prevChild, c2[j2])) {
              newIndex = j2;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j2 = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, fallback to el placeholder for unresolved async component
          anchorVNode.el || anchorVNode.placeholder
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j2 < 0 || i2 !== increasingNewIndexSequence[j2]) {
            move(nextChild, container, anchor, 2);
          } else {
            j2--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          if (el._isLeaving) {
            el[leaveCbKey](
              true
              /* cancelled */
            );
          }
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref3 != null) {
      pauseTracking();
      setRef(ref3, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, job, subTree, um, m: m2, a: a2 } = instance;
    invalidateMount(m2);
    invalidateMount(a2);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render2 = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$2(ch1) && isArray$2(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text && // avoid cached text nodes retaining detached dom nodes
      c2.patchFlag !== -1) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j2, u2, v2, c;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j2 = result[result.length - 1];
      if (arr[j2] < arrI) {
        p2[i2] = j2;
        result.push(i2);
        continue;
      }
      u2 = 0;
      v2 = result.length - 1;
      while (u2 < v2) {
        c = u2 + v2 >> 1;
        if (arr[result[c]] < arrI) {
          u2 = c + 1;
        } else {
          v2 = c;
        }
      }
      if (arrI < arr[result[u2]]) {
        if (u2 > 0) {
          p2[i2] = result[u2 - 1];
        }
        result[u2] = i2;
      }
    }
  }
  u2 = result.length;
  v2 = result[u2 - 1];
  while (u2-- > 0) {
    result[u2] = v2;
    v2 = p2[v2];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i2 = 0; i2 < hooks.length; i2++)
      hooks[i2].flags |= 8;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$2(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString$1(ref3) || isRef(ref3) || isFunction$1(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$1(style)) {
      if (isProxy(style) && !isArray$2(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction$1(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref3, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray$2(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$2(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$2(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$1(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$2(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v2) => {
      if (setters.length > 1) setters.forEach((set) => set(v2));
      else setters[0](v2);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v2) => currentInstance = v2
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v2) => isInSSRComponentSetup = v2
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult);
    }
  } else {
    finishComponentSetup(instance);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$1(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$1(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else ;
  finishComponentSetup(instance);
}
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    instance.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])\w/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction$1(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components) || instance.parent && inferFromRegistry(
      instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction$1(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c;
};
function h$1(type, propsOrChildren, children) {
  try {
    setBlockTracking(-1);
    const l2 = arguments.length;
    if (l2 === 2) {
      if (isObject$1(propsOrChildren) && !isArray$2(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l2 > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l2 === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  } finally {
    setBlockTracking(1);
  }
}
const version = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t2) => {
  t2.displayName = "Transition";
  t2.props = TransitionPropsValidators;
  return t2;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h$1(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray$2(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$2(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow(el);
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow(el);
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$1(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n2 = NumberOf(duration);
    return [n2, n2];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d2, i2) => toMs(d2) + toMs(delays[i2])));
}
function toMs(s2) {
  if (s2 === "auto") return 0;
  return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
  const targetDocument = el ? el.ownerDocument : document;
  return targetDocument.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
const CSS_VAR_TEXT = Symbol("");
const displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString$1(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$2(val)) {
    val.forEach((v2) => setStyle(style, name, v2));
  } else {
    if (val == null) val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    const prefixed = prefixes[i2] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean2 = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean2 ? "" : isSymbol(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m2;
    while (m2 = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m2[0].length);
      options[m2[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p$4 = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p$4.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$2(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString$1(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction$1(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "sandbox" && el.tagName === "IFRAME") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString$1(value)) {
    return false;
  }
  return key in el;
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = (t2) => {
  delete t2.props.mode;
  return t2;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        prevChildren = [];
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow(instance.vnode.el);
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el[moveCbKey] = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || e.propertyName.endsWith("transform")) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
      prevChildren = [];
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = [];
      if (children) {
        for (let i2 = 0; i2 < children.length; i2++) {
          const child = children[i2];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            setTransitionHooks(
              child,
              resolveTransitionHooks(
                child,
                cssTransitionProps,
                state,
                instance
              )
            );
            positionMap.set(child, {
              left: child.el.offsetLeft,
              top: child.el.offsetTop
            });
          }
        }
      }
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        if (child.key != null) {
          setTransitionHooks(
            child,
            resolveTransitionHooks(child, cssTransitionProps, state, instance)
          );
        }
      }
      return createVNode(tag, null, children);
    };
  }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, {
    left: c.el.offsetLeft,
    top: c.el.offsetTop
  });
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s2 = c.el.style;
    s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
    s2.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray$2(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
function castValue(value, trim, number) {
  if (trim) value = value.trim();
  if (number) value = looseToNumber(value);
  return value;
}
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      el[assignKey](castValue(el.value, trim, castToNumber));
    });
    if (trim || castToNumber) {
      addEventListener(el, "change", () => {
        el.value = castValue(el.value, trim, castToNumber);
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m2) => e[`${m2}Key`] && !modifiers.includes(m2))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
    for (let i2 = 0; i2 < modifiers.length; i2++) {
      const guard = modifierGuards[modifiers[i2]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  }));
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = ((event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k2) => k2 === eventKey || keyNames[k2] === eventKey
    )) {
      return fn(event);
    }
  }));
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const createSSRApp = ((...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, resolveRootNamespace(container));
    }
  };
  return app;
});
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
var isLinkWithProtocol = (link) => /^[a-z][a-z0-9+.-]*:/.test(link) || link.startsWith("//");
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => isLinkWithProtocol(link) || // absolute link that does not start with `base` and does not end with `.md`
link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link);
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
var inferRoutePath = (rawPath) => {
  if (!rawPath || rawPath.endsWith("/")) return rawPath;
  let routePath = rawPath.replace(/(^|\/)README.md$/i, "$1index.html");
  if (routePath.endsWith(".md")) {
    routePath = `${routePath.substring(0, routePath.length - 3)}.html`;
  } else if (!routePath.endsWith(".html")) {
    routePath = `${routePath}.html`;
  }
  if (routePath.endsWith("/index.html")) {
    routePath = routePath.substring(0, routePath.length - 10);
  }
  return routePath;
};
var FAKE_HOST = "http://.";
var normalizeRoutePath = (pathname, current) => {
  if (!pathname.startsWith("/") && current) {
    const loc = current.slice(0, current.lastIndexOf("/"));
    return inferRoutePath(new URL(`${loc}/${pathname}`, FAKE_HOST).pathname);
  }
  return inferRoutePath(pathname);
};
var resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a2, b2) => {
    const levelDelta = b2.split("/").length - a2.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b2.length - a2.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
var SPLIT_CHAR_REGEXP = /(#|\?)/;
var splitPath = (path) => {
  const [pathname, ...hashAndQueries] = path.split(SPLIT_CHAR_REGEXP);
  return {
    pathname,
    hashAndQueries: hashAndQueries.join("")
  };
};
var TAGS_ALLOWED = ["link", "meta", "script", "style", "noscript", "template"];
var TAGS_UNIQUE = ["title", "base"];
var resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (TAGS_UNIQUE.includes(tag)) {
    return tag;
  }
  if (!TAGS_ALLOWED.includes(tag)) {
    return null;
  }
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([
    tag,
    Object.entries(attrs).map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? [key, ""] : null;
      }
      return [key, value];
    }).filter((item) => item != null).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
    content
  ]);
};
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (identifier && !identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
var ensureLeadingSlash = (str) => str.startsWith("/") ? str : `/${str}`;
var ensureEndingSlash = (str) => str.endsWith("/") || str.endsWith(".html") ? str : `${str}/`;
var removeEndingSlash = (str) => str.endsWith("/") ? str.slice(0, -1) : str;
var removeLeadingSlash = (str) => str.startsWith("/") ? str.slice(1) : str;
var isFunction = (val) => typeof val === "function";
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var isString = (val) => typeof val === "string";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise2 = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p2) => Promise.resolve(p2).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise2 = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise2.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const redirects$1 = JSON.parse('{"/about.html":"/about/","/links.html":"/links/","/notes.html":"/notes/","/random.html":"/random/","/timeline.html":"/timeline/","/algebra/algebra-1.html":"/algebra/algebra-1/","/algebra/algebra-10.html":"/algebra/algebra-10/","/algebra/algebra-11.html":"/algebra/algebra-11/","/algebra/algebra-2.html":"/algebra/algebra-2/","/algebra/algebra-3.html":"/algebra/algebra-3/","/algebra/algebra-4.html":"/algebra/algebra-4/","/algebra/algebra-5.html":"/algebra/algebra-5/","/algebra/algebra-6.html":"/algebra/algebra-6/","/algebra/algebra-7.html":"/algebra/algebra-7/","/algebra/algebra-8.html":"/algebra/algebra-8/","/algebra/algebra-9.html":"/algebra/algebra-9/","/analytical-mechanics/lesson-1.html":"/analytical-mechanics/lesson-1/","/analytical-mechanics/lesson-2.html":"/analytical-mechanics/lesson-2/","/analytical-mechanics/lesson-3.html":"/analytical-mechanics/lesson-3/","/analytical-mechanics/lesson-4.html":"/analytical-mechanics/lesson-4/","/analytical-mechanics/lesson-7.html":"/analytical-mechanics/lesson-7/","/analytical-mechanics/lesson-8.html":"/analytical-mechanics/lesson-8/","/analytical-mechanics/lesson-9.html":"/analytical-mechanics/lesson-9/","/cybernetics/cybernetics-1.html":"/cybernetics/cybernetics-1/","/cybernetics/cybernetics-2.html":"/cybernetics/cybernetics-2/","/computational-physics/chapter-1.html":"/computational-physics/chapter-1/","/computational-physics/chapter-2.html":"/computational-physics/chapter-2/","/computational-physics/chapter-3.html":"/computational-physics/chapter-3/","/computational-physics/chapter-4.html":"/computational-physics/chapter-4/","/computational-physics/chapter-5.html":"/computational-physics/chapter-5/","/complex/complex-1.html":"/complex/complex-1/","/complex/complex-2.html":"/complex/complex-2/","/complex/complex-3.html":"/complex/complex-3/","/complex/complex-4.html":"/complex/complex-4/","/complex/complex-5.html":"/complex/complex-5/","/complex/complex-6.html":"/complex/complex-6/","/complex/complex-7.html":"/complex/complex-7/","/electrodynamics/electrodynamics-0.html":"/electrodynamics/electrodynamics-0/","/electrodynamics/electrodynamics-1.html":"/electrodynamics/electrodynamics-1/","/electrodynamics/electrodynamics-10.html":"/electrodynamics/electrodynamics-10/","/electrodynamics/electrodynamics-11.html":"/electrodynamics/electrodynamics-11/","/electrodynamics/electrodynamics-12.html":"/electrodynamics/electrodynamics-12/","/electrodynamics/electrodynamics-13.html":"/electrodynamics/electrodynamics-13/","/electrodynamics/electrodynamics-14.html":"/electrodynamics/electrodynamics-14/","/electrodynamics/electrodynamics-15.html":"/electrodynamics/electrodynamics-15/","/electrodynamics/electrodynamics-16.html":"/electrodynamics/electrodynamics-16/","/electrodynamics/electrodynamics-17.html":"/electrodynamics/electrodynamics-17/","/electrodynamics/electrodynamics-2.html":"/electrodynamics/electrodynamics-2/","/electrodynamics/electrodynamics-3.html":"/electrodynamics/electrodynamics-3/","/electrodynamics/electrodynamics-4.html":"/electrodynamics/electrodynamics-4/","/electrodynamics/electrodynamics-5.html":"/electrodynamics/electrodynamics-5/","/electrodynamics/electrodynamics-6.html":"/electrodynamics/electrodynamics-6/","/electrodynamics/electrodynamics-7.html":"/electrodynamics/electrodynamics-7/","/electrodynamics/electrodynamics-8.html":"/electrodynamics/electrodynamics-8/","/electrodynamics/electrodynamics-9.html":"/electrodynamics/electrodynamics-9/","/mathematical-physics/chapter-0.html":"/mathematical-physics/chapter-0/","/optics/optics-1.html":"/optics/optics-1/","/optics/optics-2.html":"/optics/optics-2/","/probstathsy/probstathsy-1.html":"/probstathsy/probstathsy-1/","/probstathsy/probstathsy-2.html":"/probstathsy/probstathsy-2/","/integral/integral-0.html":"/integral/integral-0/","/integral/integral-1.html":"/integral/integral-1/","/integral/integral-10.html":"/integral/integral-10/","/integral/integral-11.html":"/integral/integral-11/","/integral/integral-12.html":"/integral/integral-12/","/integral/integral-13.html":"/integral/integral-13/","/integral/integral-14.html":"/integral/integral-14/","/integral/integral-15.html":"/integral/integral-15/","/integral/integral-16.html":"/integral/integral-16/","/integral/integral-17.html":"/integral/integral-17/","/integral/integral-18.html":"/integral/integral-18/","/integral/integral-19.html":"/integral/integral-19/","/integral/integral-2.html":"/integral/integral-2/","/integral/integral-20.html":"/integral/integral-20/","/integral/integral-21.html":"/integral/integral-21/","/integral/integral-22.html":"/integral/integral-22/","/integral/integral-23.html":"/integral/integral-23/","/integral/integral-24.html":"/integral/integral-24/","/integral/integral-25.html":"/integral/integral-25/","/integral/integral-26.html":"/integral/integral-26/","/integral/integral-27.html":"/integral/integral-27/","/integral/integral-28.html":"/integral/integral-28/","/integral/integral-29.html":"/integral/integral-29/","/integral/integral-3.html":"/integral/integral-3/","/integral/integral-30.html":"/integral/integral-30/","/integral/integral-31.html":"/integral/integral-31/","/integral/integral-32.html":"/integral/integral-32/","/integral/integral-33.html":"/integral/integral-33/","/integral/integral-34.html":"/integral/integral-34/","/integral/integral-35.html":"/integral/integral-35/","/integral/integral-36.html":"/integral/integral-36/","/integral/integral-37.html":"/integral/integral-37/","/integral/integral-38.html":"/integral/integral-38/","/integral/integral-39.html":"/integral/integral-39/","/integral/integral-4.html":"/integral/integral-4/","/integral/integral-40.html":"/integral/integral-40/","/integral/integral-41.html":"/integral/integral-41/","/integral/integral-42.html":"/integral/integral-42/","/integral/integral-43.html":"/integral/integral-43/","/integral/integral-44.html":"/integral/integral-44/","/integral/integral-45.html":"/integral/integral-45/","/integral/integral-46.html":"/integral/integral-46/","/integral/integral-47.html":"/integral/integral-47/","/integral/integral-48.html":"/integral/integral-48/","/integral/integral-49.html":"/integral/integral-49/","/integral/integral-5.html":"/integral/integral-5/","/integral/integral-50.html":"/integral/integral-50/","/integral/integral-6.html":"/integral/integral-6/","/integral/integral-7.html":"/integral/integral-7/","/integral/integral-8.html":"/integral/integral-8/","/integral/integral-9.html":"/integral/integral-9/","/physics/physics-0.html":"/physics/physics-0/","/physics/physics-1.html":"/physics/physics-1/","/physics/physics-10.html":"/physics/physics-10/","/physics/physics-11.html":"/physics/physics-11/","/physics/physics-2.html":"/physics/physics-2/","/physics/physics-3.html":"/physics/physics-3/","/physics/physics-4.html":"/physics/physics-4/","/physics/physics-5.html":"/physics/physics-5/","/physics/physics-6.html":"/physics/physics-6/","/physics/physics-7.html":"/physics/physics-7/","/physics/physics-8.html":"/physics/physics-8/","/physics/physics-9.html":"/physics/physics-9/","/signal-analysis/signal-1.html":"/signal-analysis/signal-1/","/signal-analysis/signal-2.html":"/signal-analysis/signal-2/","/blog/article/article-1.html":"/article/article-1/","/blog/article/article-2.html":"/article/article-2/","/blog/article/article-3.html":"/article/article-3/","/blog/article/article-4.html":"/article/article-4/","/blog/article/article-5.html":"/article/article-5/","/blog/article/article-6.html":"/article/article-6/","/blog/article/article-7.html":"/article/article-7/","/blog/mark/mark-1.html":"/mark/mark-1/","/blog/mark/mark-2.html":"/mark/mark-2/","/blog/mark/mark-3.html":"/mark/mark-3/","/blog/mark/mark-4.html":"/mark/mark-4/","/blog/informal/anniversary-1.html":"/article/anniversary-1/","/blog/informal/resources.html":"/article/resources/","/blog/preview/custom-component.example.html":"/article/pyvvujxp/","/blog/preview/markdown.html":"/article/r1s3vxud/","/blog/travel/travel-1.html":"/travel/travel-1/","/blog/weekly/weekly-1.html":"/weekly/weekly-1/","/blog/weekly/weekly-2.html":"/weekly/weekly-2/","/blog/weekly/weekly-3.html":"/weekly/weekly-3/","/blog/weekly/weekly-4.html":"/weekly/weekly-4/","/blog/weekly/weekly-5.html":"/weekly/weekly-5/","/blog/weekly/weekly-6.html":"/weekly/weekly-6/","/blog/weekly/weekly-7.html":"/weekly/weekly-7/","/blog/weekly/weekly-8.html":"/weekly/weekly-8/","/blog/weekly/weekly-9.html":"/weekly/weekly-9/","/circuit/Digital/Digital-1.html":"/circuit/Digital-1/","/circuit/Digital/Digital-2.html":"/circuit/Digital-2/","/circuit/Digital/Digital-3.html":"/circuit/Digital-3/","/circuit/Digital/Digital-4.html":"/circuit/Digital-4/","/circuit/Digital/Digital-5.html":"/circuit/Digital-5/","/circuit/Digital/Digital-6.html":"/circuit/Digital-6/","/circuit/Digital/Digital-7.html":"/circuit/Digital-7/","/circuit/Digital/Digital-8.html":"/circuit/Digital-8/","/circuit/Digital/Digital-9.html":"/circuit/Digital-9/","/circuit/Digital/Digital.html":"/circuit/Digital/","/circuit/Power-Electronics/power-1.html":"/circuit/power-1/","/circuit/Power-Electronics/power.html":"/circuit/power/","/circuit/circuit/circuit-1.html":"/circuit/circuit-1/","/circuit/circuit/circuit-2.html":"/circuit/circuit-2/","/circuit/circuit/circuit-3.html":"/circuit/circuit-3/","/circuit/circuit/circuit-4.html":"/circuit/circuit-4/","/circuit/electronic/electronic-0.html":"/circuit/electronic-0/","/circuit/electronic/electronic-1.html":"/circuit/electronic-1/"}');
const routes$1 = Object.fromEntries([
  ["/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "index.html" */
    "./index.html-Bry5ySQ_.js"
  ), true ? [] : void 0), meta: { "title": "" } }],
  ["/about/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "about_index.html" */
    "./index.html-YYgbKXob.js"
  ), true ? [] : void 0), meta: { "title": "关于我" } }],
  ["/links/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "links_index.html" */
    "./index.html-DrTJ3Bib.js"
  ), true ? [] : void 0), meta: { "title": "友链" } }],
  ["/notes/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "notes_index.html" */
    "./index.html-Bc4SE570.js"
  ), true ? [] : void 0), meta: { "title": "Notes" } }],
  ["/random/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "random_index.html" */
    "./index.html-Cao7RAbY.js"
  ), true ? [] : void 0), meta: { "title": "随机跳转" } }],
  ["/timeline/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "timeline_index.html" */
    "./index.html-DOCi9Zc4.js"
  ), true ? [] : void 0), meta: { "title": "时间线" } }],
  ["/Microcontroller/lesson-1.html", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "Microcontroller_lesson-1.html" */
    "./lesson-1.html-BRubkuZs.js"
  ), true ? [] : void 0), meta: { "title": "" } }],
  ["/algebra/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_index.html" */
    "./index.html-oZPKC-p8.js"
  ), true ? [] : void 0), meta: { "title": "代数基础" } }],
  ["/algebra/algebra-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-1_index.html" */
    "./index.html-DPfCcUPi.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 行列式" } }],
  ["/algebra/algebra-10/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-10_index.html" */
    "./index.html-DLV1J69X.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 10 一元多项式推广" } }],
  ["/algebra/algebra-11/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-11_index.html" */
    "./index.html-D6wf9tx1.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 11 特征值" } }],
  ["/algebra/algebra-12.html", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-12.html" */
    "./algebra-12.html-DkgA5NQD.js"
  ), true ? [] : void 0), meta: { "title": "algebra-12" } }],
  ["/algebra/algebra-13.html", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-13.html" */
    "./algebra-13.html-blOWfwBb.js"
  ), true ? [] : void 0), meta: { "title": "algebra-13" } }],
  ["/algebra/algebra-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-2_index.html" */
    "./index.html-D3k-UbMR.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2 矩阵" } }],
  ["/algebra/algebra-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-3_index.html" */
    "./index.html-AMAhBSpm.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 3 线性空间" } }],
  ["/algebra/algebra-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-4_index.html" */
    "./index.html-DFuo96J9.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 4 rank" } }],
  ["/algebra/algebra-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-5_index.html" */
    "./index.html-D5uLEsij.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 5 线性方程组" } }],
  ["/algebra/algebra-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-6_index.html" */
    "./index.html-CUsWk-cu.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 6 线性映射基础" } }],
  ["/algebra/algebra-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-7_index.html" */
    "./index.html-vMJURHym.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 7 线性映射结构" } }],
  ["/algebra/algebra-8/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-8_index.html" */
    "./index.html-Bn-Uw6Ea.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 8 一元多项式基础" } }],
  ["/algebra/algebra-9/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "algebra_algebra-9_index.html" */
    "./index.html-C2z80Eev.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 9 特殊数域多项式" } }],
  ["/analytical-mechanics/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_index.html" */
    "./index.html-CxSPHvv8.js"
  ), true ? [] : void 0), meta: { "title": "分析力学" } }],
  ["/analytical-mechanics/lesson-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_lesson-1_index.html" */
    "./index.html-DUAylAeL.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 1 数学基础 I" } }],
  ["/analytical-mechanics/lesson-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_lesson-2_index.html" */
    "./index.html-Cora2dYs.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 2 数学基础 II" } }],
  ["/analytical-mechanics/lesson-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_lesson-3_index.html" */
    "./index.html-I_YOGmzc.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 3 位形空间 I" } }],
  ["/analytical-mechanics/lesson-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_lesson-4_index.html" */
    "./index.html-BE0e5ZRN.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 4 位形空间 I" } }],
  ["/analytical-mechanics/lesson-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_lesson-7_index.html" */
    "./index.html-DlH4IgBF.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 7 最小作用量原理 I" } }],
  ["/analytical-mechanics/lesson-8/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_lesson-8_index.html" */
    "./index.html-woSbw0fg.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 8 最小作用量原理 II" } }],
  ["/analytical-mechanics/lesson-9/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "analytical-mechanics_lesson-9_index.html" */
    "./index.html-DC6OiTFS.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 9 最小作用量原理 II" } }],
  ["/circuit/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_index.html" */
    "./index.html-D6OqCskl.js"
  ), true ? [] : void 0), meta: { "title": "电路" } }],
  ["/cybernetics/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "cybernetics_index.html" */
    "./index.html-Uo9x_rDN.js"
  ), true ? [] : void 0), meta: { "title": "控制理论" } }],
  ["/cybernetics/cybernetics-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "cybernetics_cybernetics-1_index.html" */
    "./index.html-BvrLCIG4.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 绪论" } }],
  ["/cybernetics/cybernetics-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "cybernetics_cybernetics-2_index.html" */
    "./index.html-CcDRK-OD.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2" } }],
  ["/computational-physics/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "computational-physics_index.html" */
    "./index.html-B5ECuxl2.js"
  ), true ? [] : void 0), meta: { "title": "计算物理导论" } }],
  ["/computational-physics/chapter-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "computational-physics_chapter-1_index.html" */
    "./index.html-CgnEMajt.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 数值计算基础" } }],
  ["/computational-physics/chapter-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "computational-physics_chapter-2_index.html" */
    "./index.html-rZHVtDYG.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2 线性方程组直接解法" } }],
  ["/computational-physics/chapter-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "computational-physics_chapter-3_index.html" */
    "./index.html-Bbcn09E0.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 3 插值法" } }],
  ["/computational-physics/chapter-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "computational-physics_chapter-4_index.html" */
    "./index.html-BWQsVmEs.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 4 数值积分" } }],
  ["/computational-physics/chapter-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "computational-physics_chapter-5_index.html" */
    "./index.html-Bigg_m3k.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 5" } }],
  ["/complex/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_index.html" */
    "./index.html-CCkuq8iL.js"
  ), true ? [] : void 0), meta: { "title": "复变函数" } }],
  ["/complex/complex-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_complex-1_index.html" */
    "./index.html-DPPilorm.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 解析函数" } }],
  ["/complex/complex-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_complex-2_index.html" */
    "./index.html-BK2QUixs.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2 解析函数积分" } }],
  ["/complex/complex-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_complex-3_index.html" */
    "./index.html-CdJZc3hV.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 3 无穷级数" } }],
  ["/complex/complex-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_complex-4_index.html" */
    "./index.html-1vbvgnRe.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 4 解析函数领域展开" } }],
  ["/complex/complex-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_complex-5_index.html" */
    "./index.html-BTH6DPqU.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 5 留数定理" } }],
  ["/complex/complex-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_complex-6_index.html" */
    "./index.html-CaKotZve.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 6 解析延拓" } }],
  ["/complex/complex-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "complex_complex-7_index.html" */
    "./index.html-BsjP5Mdc.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 7 共形映射" } }],
  ["/electrodynamics/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_index.html" */
    "./index.html-BiwmZxcq.js"
  ), true ? [] : void 0), meta: { "title": "电动力学" } }],
  ["/electrodynamics/electrodynamics-0/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-0_index.html" */
    "./index.html-zVZjOKLU.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 0 绪论" } }],
  ["/electrodynamics/electrodynamics-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-1_index.html" */
    "./index.html-C7eWFS6Z.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 1 数学基础" } }],
  ["/electrodynamics/electrodynamics-10/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-10_index.html" */
    "./index.html-Bi7O_4h3.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 10 连续介质 Maxwell" } }],
  ["/electrodynamics/electrodynamics-11/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-11_index.html" */
    "./index.html-BTq1tHiH.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 11 静电学 I" } }],
  ["/electrodynamics/electrodynamics-12/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-12_index.html" */
    "./index.html-8xgNO-4w.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 12 静电学 II" } }],
  ["/electrodynamics/electrodynamics-13/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-13_index.html" */
    "./index.html-B4DUlKG7.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 13 静磁学" } }],
  ["/electrodynamics/electrodynamics-14/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-14_index.html" */
    "./index.html-Ce1B0B3Y.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 14 电磁波的传播 I" } }],
  ["/electrodynamics/electrodynamics-15/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-15_index.html" */
    "./index.html-DBJoN3Yb.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 15 电磁波的传播 II" } }],
  ["/electrodynamics/electrodynamics-16/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-16_index.html" */
    "./index.html-qIhowYZw.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 16 电磁波的传播 III" } }],
  ["/electrodynamics/electrodynamics-17/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-17_index.html" */
    "./index.html-CadX_2ml.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 17 电磁波的传播 IV" } }],
  ["/electrodynamics/electrodynamics-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-2_index.html" */
    "./index.html-Bk0rM1yg.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 2 Maxwell方程组 I" } }],
  ["/electrodynamics/electrodynamics-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-3_index.html" */
    "./index.html-DYBoFTLL.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 3 Maxwell 方程组 II" } }],
  ["/electrodynamics/electrodynamics-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-4_index.html" */
    "./index.html-Ubbkp-YM.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 4 Maxwell 方程组 III" } }],
  ["/electrodynamics/electrodynamics-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-5_index.html" */
    "./index.html-DHBjh-Fv.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 5 狭义相对论 I" } }],
  ["/electrodynamics/electrodynamics-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-6_index.html" */
    "./index.html-BllhohQT.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 6 狭义相对论 II" } }],
  ["/electrodynamics/electrodynamics-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-7_index.html" */
    "./index.html-DY8jdK2a.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 7 Lagrange 形式 I" } }],
  ["/electrodynamics/electrodynamics-8/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-8_index.html" */
    "./index.html-B5Wy5Lyi.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 8 Lagrange 形式 II" } }],
  ["/electrodynamics/electrodynamics-9/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "electrodynamics_electrodynamics-9_index.html" */
    "./index.html-DUJsgCL7.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 9 Lagrange 形式 III" } }],
  ["/mathematical-physics/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "mathematical-physics_index.html" */
    "./index.html-BmKvp_fA.js"
  ), true ? [] : void 0), meta: { "title": "数学物理方程" } }],
  ["/mathematical-physics/chapter-0/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "mathematical-physics_chapter-0_index.html" */
    "./index.html-BhAKWAUk.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 0" } }],
  ["/optics/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "optics_index.html" */
    "./index.html-DVTzPOuK.js"
  ), true ? [] : void 0), meta: { "title": "基础光学" } }],
  ["/optics/optics-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "optics_optics-1_index.html" */
    "./index.html-LO28_yXL.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1" } }],
  ["/optics/optics-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "optics_optics-2_index.html" */
    "./index.html-r3RGKCvD.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2" } }],
  ["/probstathsy/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "probstathsy_index.html" */
    "./index.html-B4PGxnYG.js"
  ), true ? [] : void 0), meta: { "title": "概率统计" } }],
  ["/probstathsy/probstathsy-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "probstathsy_probstathsy-1_index.html" */
    "./index.html-BL-ZUhnv.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 概率论" } }],
  ["/probstathsy/probstathsy-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "probstathsy_probstathsy-2_index.html" */
    "./index.html-BrXzQpwi.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2 数理统计" } }],
  ["/integral/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_index.html" */
    "./index.html-ZCj5rTP5.js"
  ), true ? [] : void 0), meta: { "title": "数学分析" } }],
  ["/integral/integral-0/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-0_index.html" */
    "./index.html-CoTFAStH.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 0 绪论" } }],
  ["/integral/integral-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-1_index.html" */
    "./index.html-VVJZd7XS.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 1 函数 I" } }],
  ["/integral/integral-10/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-10_index.html" */
    "./index.html-CbYwXA__.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 10 函数连续性 II" } }],
  ["/integral/integral-11/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-11_index.html" */
    "./index.html-ZWBV66AS.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 11 微分学 I" } }],
  ["/integral/integral-12/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-12_index.html" */
    "./index.html-CxsCNEjx.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 12 微分学 II" } }],
  ["/integral/integral-13/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-13_index.html" */
    "./index.html-7p9pyndl.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 13 微分学 III" } }],
  ["/integral/integral-14/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-14_index.html" */
    "./index.html-CnlS9h3z.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 14 微分学 IV" } }],
  ["/integral/integral-15/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-15_index.html" */
    "./index.html-PgmeTzE2.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 15 不定积分 I" } }],
  ["/integral/integral-16/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-16_index.html" */
    "./index.html-DzYDwPWK.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 16 不定积分 II" } }],
  ["/integral/integral-17/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-17_index.html" */
    "./index.html-Dkh80Zay.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 17 Riemann 积分 I" } }],
  ["/integral/integral-18/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-18_index.html" */
    "./index.html-Bhs_CRPG.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 18 Riemann 积分 II" } }],
  ["/integral/integral-19/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-19_index.html" */
    "./index.html-B-M6-lWU.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 19 积分应用与推广 I" } }],
  ["/integral/integral-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-2_index.html" */
    "./index.html--458_pc0.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 2 函数 II" } }],
  ["/integral/integral-20/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-20_index.html" */
    "./index.html-D5UmSTfl.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 20 积分应用与推广 II" } }],
  ["/integral/integral-21/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-21_index.html" */
    "./index.html-DkqImPq8.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 21 数项级数 I" } }],
  ["/integral/integral-22/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-22_index.html" */
    "./index.html-BRP6zwT6.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 22 数项级数 II" } }],
  ["/integral/integral-23/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-23_index.html" */
    "./index.html-CTIZr2Zv.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 23 函数项级数 I" } }],
  ["/integral/integral-24/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-24_index.html" */
    "./index.html-BYkOichu.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 24 函数项级数 II" } }],
  ["/integral/integral-25/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-25_index.html" */
    "./index.html-CYhehN_1.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 25 Fourier 分析 I" } }],
  ["/integral/integral-26/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-26_index.html" */
    "./index.html-CB5W7UDp.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 26 Fourier 分析 II" } }],
  ["/integral/integral-27/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-27_index.html" */
    "./index.html-85iUsFKB.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 27 连续映射 I" } }],
  ["/integral/integral-28/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-28_index.html" */
    "./index.html-DZaCQImN.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 28 连续映射 II" } }],
  ["/integral/integral-29/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-29_index.html" */
    "./index.html-DMuxcOVH.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 29 连续映射 III" } }],
  ["/integral/integral-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-3_index.html" */
    "./index.html-BLPKSQop.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 3 数列极限 I" } }],
  ["/integral/integral-30/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-30_index.html" */
    "./index.html-Bd8clhs_.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 30 多元函数微分 I" } }],
  ["/integral/integral-31/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-31_index.html" */
    "./index.html-BsKDQWMV.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 31 多元函数微分 II" } }],
  ["/integral/integral-32/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-32_index.html" */
    "./index.html-q_EBo6WB.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 32 多元函数微分 III" } }],
  ["/integral/integral-33/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-33_index.html" */
    "./index.html-CYJUhIS6.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 33 多元函数微分 IV" } }],
  ["/integral/integral-34/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-34_index.html" */
    "./index.html-qRiQ2s-K.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 34 多元函数积分 I" } }],
  ["/integral/integral-35/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-35_index.html" */
    "./index.html-BSs8nTeG.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 35 多元函数积分 II" } }],
  ["/integral/integral-36/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-36_index.html" */
    "./index.html-BKSrPhGf.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 36 多元函数积分 III" } }],
  ["/integral/integral-37/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-37_index.html" */
    "./index.html-6ZtO121Y.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 37 多元函数积分 IV" } }],
  ["/integral/integral-38/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-38_index.html" */
    "./index.html-BcKBOO8-.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 38 曲面曲线积分 I" } }],
  ["/integral/integral-39/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-39_index.html" */
    "./index.html-CXTveYaS.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 39 曲面曲线积分 II" } }],
  ["/integral/integral-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-4_index.html" */
    "./index.html-B-VA4Gz2.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 4 数列极限 II" } }],
  ["/integral/integral-40/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-40_index.html" */
    "./index.html-DtWnQA_4.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 40 曲面曲线积分 III" } }],
  ["/integral/integral-41/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-41_index.html" */
    "./index.html-9IRZ1Hj2.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 41 曲面曲线积分 IV" } }],
  ["/integral/integral-42/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-42_index.html" */
    "./index.html-CE3q5Hos.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 42 曲面曲线积分 V" } }],
  ["/integral/integral-43/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-43_index.html" */
    "./index.html-1f7VtAC7.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 43 微分形式积分 I" } }],
  ["/integral/integral-44/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-44_index.html" */
    "./index.html-KS17WKPd.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 44 微分形式积分 II" } }],
  ["/integral/integral-45/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-45_index.html" */
    "./index.html-BtzJiVbV.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 45 微分形式积分 III" } }],
  ["/integral/integral-46/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-46_index.html" */
    "./index.html-BoWN4lVP.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 46 微分形式积分 IV" } }],
  ["/integral/integral-47/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-47_index.html" */
    "./index.html-BfxwkJ_t.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 47" } }],
  ["/integral/integral-48/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-48_index.html" */
    "./index.html-CaMy0ZHs.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 48" } }],
  ["/integral/integral-49/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-49_index.html" */
    "./index.html-DzrBxdlA.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 49" } }],
  ["/integral/integral-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-5_index.html" */
    "./index.html-Bm1rs5Ab.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 5 实数 I" } }],
  ["/integral/integral-50/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-50_index.html" */
    "./index.html-BDJO2kis.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 50" } }],
  ["/integral/integral-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-6_index.html" */
    "./index.html-DXCFCB1N.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 6 实数 II" } }],
  ["/integral/integral-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-7_index.html" */
    "./index.html-CxDXSs-O.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 7 函数极限 I" } }],
  ["/integral/integral-8/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-8_index.html" */
    "./index.html-Dtj8GcRA.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 8 函数极限 II" } }],
  ["/integral/integral-9/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "integral_integral-9_index.html" */
    "./index.html-CdYYri_g.js"
  ), true ? [] : void 0), meta: { "title": "Lesson 9 函数连续性 I" } }],
  ["/physics/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_index.html" */
    "./index.html-DI8dQr8M.js"
  ), true ? [] : void 0), meta: { "title": "基础物理" } }],
  ["/physics/physics-0/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-0_index.html" */
    "./index.html-CXjErW68.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 0 绪论" } }],
  ["/physics/physics-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-1_index.html" */
    "./index.html-CYXsRt9_.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 质点运动学" } }],
  ["/physics/physics-10/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-10_index.html" */
    "./index.html--C6XRmiD.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 10 电磁感应" } }],
  ["/physics/physics-11/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-11_index.html" */
    "./index.html-vQkOJ16v.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 11 光学" } }],
  ["/physics/physics-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-2_index.html" */
    "./index.html-BkOi0UWV.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2 质点动力学" } }],
  ["/physics/physics-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-3_index.html" */
    "./index.html-Bd-bil5a.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 3 机械能守恒定理" } }],
  ["/physics/physics-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-4_index.html" */
    "./index.html-Dc-Lhm5N.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 4 角动量" } }],
  ["/physics/physics-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-5_index.html" */
    "./index.html-jSaCL94L.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 5 刚体" } }],
  ["/physics/physics-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-6_index.html" */
    "./index.html-CJsbHm8k.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 6 机械振动" } }],
  ["/physics/physics-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-7_index.html" */
    "./index.html-7P9fuoBr.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 7 机械波" } }],
  ["/physics/physics-8/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-8_index.html" */
    "./index.html-DL6G1SYc.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 8 狭义相对论" } }],
  ["/physics/physics-9/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "physics_physics-9_index.html" */
    "./index.html-7bG9aAcZ.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 9 静电场" } }],
  ["/signal-analysis/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "signal-analysis_index.html" */
    "./index.html-CEVFi1kP.js"
  ), true ? [] : void 0), meta: { "title": "信号分析" } }],
  ["/signal-analysis/signal-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "signal-analysis_signal-1_index.html" */
    "./index.html-DJsy7Mqv.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 绪论" } }],
  ["/signal-analysis/signal-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "signal-analysis_signal-2_index.html" */
    "./index.html-B2L2mtVD.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2" } }],
  ["/article/article-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_article-1_index.html" */
    "./index.html-PJABZcKo.js"
  ), true ? [] : void 0), meta: { "title": "随笔之一 水晶" } }],
  ["/article/article-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_article-2_index.html" */
    "./index.html-CV2s6r0r.js"
  ), true ? [] : void 0), meta: { "title": "随笔之二 实践调研" } }],
  ["/article/article-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_article-3_index.html" */
    "./index.html-BD9spqKk.js"
  ), true ? [] : void 0), meta: { "title": "随笔之三 焦虑之外" } }],
  ["/article/article-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_article-4_index.html" */
    "./index.html-MNtjj8R0.js"
  ), true ? [] : void 0), meta: { "title": "随笔之四 暗夜" } }],
  ["/article/article-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_article-5_index.html" */
    "./index.html-DhFKi113.js"
  ), true ? [] : void 0), meta: { "title": "随笔 关于电控" } }],
  ["/article/article-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_article-6_index.html" */
    "./index.html-onZgcNS2.js"
  ), true ? [] : void 0), meta: { "title": "在这世界的某个角落" } }],
  ["/article/article-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_article-7_index.html" */
    "./index.html-BZNE2quv.js"
  ), true ? [] : void 0), meta: { "title": "家乡最棒。" } }],
  ["/mark/mark-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "mark_mark-1_index.html" */
    "./index.html-BzWtG7gz.js"
  ), true ? [] : void 0), meta: { "title": "缝缝补补" } }],
  ["/mark/mark-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "mark_mark-2_index.html" */
    "./index.html-dFzAA6TZ.js"
  ), true ? [] : void 0), meta: { "title": "云台" } }],
  ["/mark/mark-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "mark_mark-3_index.html" */
    "./index.html-DYQhFMaj.js"
  ), true ? [] : void 0), meta: { "title": "mark-3" } }],
  ["/mark/mark-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "mark_mark-4_index.html" */
    "./index.html-Bzfamtg8.js"
  ), true ? [] : void 0), meta: { "title": "讲讲之后博客的定位和规划" } }],
  ["/article/anniversary-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_anniversary-1_index.html" */
    "./index.html-DTW-mrw_.js"
  ), true ? [] : void 0), meta: { "title": "博客建站的第一个地球年" } }],
  ["/article/resources/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_resources_index.html" */
    "./index.html-Cke4U_jx.js"
  ), true ? [] : void 0), meta: { "title": "星河旅馆补给站" } }],
  ["/article/pyvvujxp/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_pyvvujxp_index.html" */
    "./index.html-2X2cE02X.js"
  ), true ? [] : void 0), meta: { "title": "自定义组件" } }],
  ["/article/r1s3vxud/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "article_r1s3vxud_index.html" */
    "./index.html-DzaqE6jt.js"
  ), true ? [] : void 0), meta: { "title": "Markdown" } }],
  ["/travel/travel-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "travel_travel-1_index.html" */
    "./index.html-BTN46Mol.js"
  ), true ? [] : void 0), meta: { "title": "城际漫游 成都篇" } }],
  ["/weekly/weekly-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-1_index.html" */
    "./index.html-Bpeb833v.js"
  ), true ? [] : void 0), meta: { "title": "weekly-摩卡与孤独蓝色星球" } }],
  ["/weekly/weekly-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-2_index.html" */
    "./index.html-zMToQqtl.js"
  ), true ? [] : void 0), meta: { "title": "weekly-海の见える街" } }],
  ["/weekly/weekly-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-3_index.html" */
    "./index.html-D6pg_1Sg.js"
  ), true ? [] : void 0), meta: { "title": "weekly-步履不停，步履不停" } }],
  ["/weekly/weekly-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-4_index.html" */
    "./index.html-C-pEF1RL.js"
  ), true ? [] : void 0), meta: { "title": "weekly-音符" } }],
  ["/weekly/weekly-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-5_index.html" */
    "./index.html-CwsZKVtA.js"
  ), true ? [] : void 0), meta: { "title": "weekly-城际漫游" } }],
  ["/weekly/weekly-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-6_index.html" */
    "./index.html-B_NQuvQ6.js"
  ), true ? [] : void 0), meta: { "title": "weekly-Aoi" } }],
  ["/weekly/weekly-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-7_index.html" */
    "./index.html-C0aDoNyy.js"
  ), true ? [] : void 0), meta: { "title": "weekly-三月如狮而来" } }],
  ["/weekly/weekly-8/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-8_index.html" */
    "./index.html-DyhB4tj7.js"
  ), true ? [] : void 0), meta: { "title": "weekly-期中寄" } }],
  ["/weekly/weekly-9/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "weekly_weekly-9_index.html" */
    "./index.html-Dl3Y2mO8.js"
  ), true ? [] : void 0), meta: { "title": "后日谈" } }],
  ["/circuit/Digital-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-1_index.html" */
    "./index.html-02SNZETy.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 数字逻辑基础" } }],
  ["/circuit/Digital-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-2_index.html" */
    "./index.html-WbMTLx3n.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2 逻辑门电路" } }],
  ["/circuit/Digital-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-3_index.html" */
    "./index.html-qk8YDDlc.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 3 组合逻辑电路" } }],
  ["/circuit/Digital-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-4_index.html" */
    "./index.html-CuwJoz3X.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 4 组合逻辑电路" } }],
  ["/circuit/Digital-5/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-5_index.html" */
    "./index.html-DsO8Cyl1.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 5 触发器" } }],
  ["/circuit/Digital-6/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-6_index.html" */
    "./index.html-BA4W9Wdb.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 6 时序逻辑" } }],
  ["/circuit/Digital-7/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-7_index.html" */
    "./index.html-DgRXEZXi.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 7 半导体储存电路" } }],
  ["/circuit/Digital-8/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-8_index.html" */
    "./index.html-CC5b4rxm.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 8 脉冲波形" } }],
  ["/circuit/Digital-9/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital-9_index.html" */
    "./index.html-CXapaOmH.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 9 数模模数转换" } }],
  ["/circuit/Digital/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_Digital_index.html" */
    "./index.html-DqFWuowW.js"
  ), true ? [] : void 0), meta: { "title": "数字电路" } }],
  ["/circuit/power-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_power-1_index.html" */
    "./index.html-iwu9tAZO.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1" } }],
  ["/circuit/power/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_power_index.html" */
    "./index.html-C0bTHPEy.js"
  ), true ? [] : void 0), meta: { "title": "电力电子电路" } }],
  ["/circuit/circuit-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_circuit-1_index.html" */
    "./index.html-CndmwWVs.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 线性电路分析" } }],
  ["/circuit/circuit-2/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_circuit-2_index.html" */
    "./index.html-B14Y7sBP.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 2 交流电路分析" } }],
  ["/circuit/circuit-3/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_circuit-3_index.html" */
    "./index.html-Cw27NC5e.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 3 时域分析" } }],
  ["/circuit/circuit-4/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_circuit-4_index.html" */
    "./index.html-DFyjjPJz.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 3 频域分析" } }],
  ["/circuit/electronic-0/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_electronic-0_index.html" */
    "./index.html-D9Jpm1VS.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 0 绪论" } }],
  ["/circuit/electronic-1/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "circuit_electronic-1_index.html" */
    "./index.html-CEyTQ8qQ.js"
  ), true ? [] : void 0), meta: { "title": "Chapter 1 BJT" } }],
  ["/404.html", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "404.html" */
    "./404.html-yWGHcAK2.js"
  ), true ? [] : void 0), meta: { "title": "" } }],
  ["/blog/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "blog_index.html" */
    "./index.html-CGxb7wRZ.js"
  ), true ? [] : void 0), meta: { "title": "博客" } }],
  ["/blog/tags/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "blog_tags_index.html" */
    "./index.html-O4mz1i10.js"
  ), true ? [] : void 0), meta: { "title": "标签" } }],
  ["/blog/archives/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "blog_archives_index.html" */
    "./index.html-tUrgc0m4.js"
  ), true ? [] : void 0), meta: { "title": "归档" } }],
  ["/blog/categories/", { loader: () => __vitePreload(() => import(
    /* webpackChunkName: "blog_categories_index.html" */
    "./index.html-C7juyduO.js"
  ), true ? [] : void 0), meta: { "title": "分类" } }]
]);
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray$1 = Array.isArray;
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  return options;
}
const HASH_RE$1 = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE$1, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE$1, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  if (text == null) return null;
  try {
    return decodeURIComponent("" + text);
  } catch (err2) {
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery$1, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
  if (searchPos >= 0) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos, hashPos > 0 ? hashPos : location2.length);
    query = parseQuery$1(searchString.slice(1));
  }
  if (hashPos >= 0) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery$1, location2) {
  const query = location2.query ? stringifyQuery$1(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery$1, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b2.params) && stringifyQuery$1(a2.query) === stringifyQuery$1(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length) return false;
  for (const key in a2) if (!isSameRouteLocationParamsValue(a2[key], b2[key])) return false;
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return isArray$1(a2) ? isEquivalentArray(a2, b2) : isArray$1(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return isArray$1(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/")) return to;
  if (!to) return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".") continue;
    if (segment === "..") {
      if (position > 1) position--;
    } else break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let NavigationType = /* @__PURE__ */ (function(NavigationType$1) {
  NavigationType$1["pop"] = "pop";
  NavigationType$1["push"] = "push";
  return NavigationType$1;
})({});
let NavigationDirection = /* @__PURE__ */ (function(NavigationDirection$1) {
  NavigationDirection$1["back"] = "back";
  NavigationDirection$1["forward"] = "forward";
  NavigationDirection$1["unknown"] = "";
  return NavigationDirection$1;
})({});
function normalizeBase(base) {
  if (!base) if (isBrowser) {
    const baseEl = document.querySelector("base");
    base = baseEl && baseEl.getAttribute("href") || "/";
    base = base.replace(/^\w+:\/\/[^\/]+/, "");
  } else base = "/";
  if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else scrollToOptions = position;
  if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
  else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
  return (history.state ? history.state.position - delta : -1) + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
let ErrorTypes = /* @__PURE__ */ (function(ErrorTypes$1) {
  ErrorTypes$1[ErrorTypes$1["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
  return ErrorTypes$1;
})({});
const NavigationFailureSymbol = Symbol("");
({
  [ErrorTypes.MATCHER_NOT_FOUND]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [ErrorTypes.NAVIGATION_GUARD_REDIRECT]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [ErrorTypes.NAVIGATION_ABORTED]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [ErrorTypes.NAVIGATION_CANCELLED]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [ErrorTypes.NAVIGATION_DUPLICATED]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
});
function createRouterError(type, params) {
  return assign(/* @__PURE__ */ new Error(), {
    type,
    [NavigationFailureSymbol]: true
  }, params);
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = [
  "params",
  "query",
  "hash"
];
function stringifyRoute(to) {
  if (typeof to === "string") return to;
  if (to.path != null) return to.path;
  const location2 = {};
  for (const key of propertiesToLog) if (key in to) location2[key] = to[key];
  return JSON.stringify(location2, null, 2);
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?") return query;
  const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) currentValue = query[key] = [currentValue];
      currentValue.push(value);
    } else query[key] = value;
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) search += (search.length ? "&" : "") + key;
      continue;
    }
    (isArray$1(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
      if (value$1 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value$1 != null) search += "=" + value$1;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) normalizedQuery[key] = isArray$1(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers2 = [];
  function add(handler) {
    handlers2.push(handler);
    return () => {
      const i2 = handlers2.indexOf(handler);
      if (i2 > -1) handlers2.splice(i2, 1);
    };
  }
  function reset() {
    handlers2 = [];
  }
  return {
    add,
    list: () => handlers2.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) reject(createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
        from,
        to
      }));
      else if (valid instanceof Error) reject(valid);
      else if (isRouteLocation(valid)) reject(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
        from: to,
        to: valid
      }));
      else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3) guardCall = guardCall.then(next);
    guardCall.catch((err2) => reject(err2));
  });
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
      if (isRouteComponent(rawComponent)) {
        const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.mods[name] = resolved;
          record.components[name] = resolvedComponent;
          const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
    else leavingRecords.push(recordFrom);
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
    }
  }
  return [
    leavingRecords,
    updatingRecords,
    enteringRecords
  ];
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location$1) {
  const { pathname, search, hash } = location$1;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners2 = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else replace(to);
    listeners2.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners2.push(callback);
    const teardown = () => {
      const index = listeners2.indexOf(callback);
      if (index > -1) listeners2.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    if (document.visibilityState === "hidden") {
      const { history: history$1 } = window;
      if (!history$1.state) return;
      history$1.replaceState(assign({}, history$1.state, { scroll: computeScrollPosition() }), "");
    }
  }
  function destroy() {
    for (const teardown of teardowns) teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("pagehide", beforeUnloadListener);
    document.removeEventListener("visibilitychange", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("pagehide", beforeUnloadListener);
  document.addEventListener("visibilitychange", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history$1, location: location$1 } = window;
  const currentLocation = { value: createCurrentLocation(base, location$1) };
  const historyState = { value: history$1.state };
  if (!historyState.value) changeLocation(currentLocation.value, {
    back: null,
    current: currentLocation.value,
    forward: null,
    position: history$1.length - 1,
    replaced: true,
    scroll: null
  }, true);
  function changeLocation(to, state, replace$1) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location$1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history$1[replace$1 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err2) {
      console.error(err2);
      location$1[replace$1 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    changeLocation(to, assign({}, history$1.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history$1.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    changeLocation(to, assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners) historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
let TokenType = /* @__PURE__ */ (function(TokenType$1) {
  TokenType$1[TokenType$1["Static"] = 0] = "Static";
  TokenType$1[TokenType$1["Param"] = 1] = "Param";
  TokenType$1[TokenType$1["Group"] = 2] = "Group";
  return TokenType$1;
})({});
var TokenizerState = /* @__PURE__ */ (function(TokenizerState$1) {
  TokenizerState$1[TokenizerState$1["Static"] = 0] = "Static";
  TokenizerState$1[TokenizerState$1["Param"] = 1] = "Param";
  TokenizerState$1[TokenizerState$1["ParamRegExp"] = 2] = "ParamRegExp";
  TokenizerState$1[TokenizerState$1["ParamRegExpEnd"] = 3] = "ParamRegExpEnd";
  TokenizerState$1[TokenizerState$1["EscapeNext"] = 4] = "EscapeNext";
  return TokenizerState$1;
})(TokenizerState || {});
const ROOT_TOKEN = {
  type: TokenType.Static,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path) return [[]];
  if (path === "/") return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = TokenizerState.Static;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment) tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer) return;
    if (state === TokenizerState.Static) segment.push({
      type: TokenType.Static,
      value: buffer
    });
    else if (state === TokenizerState.Param || state === TokenizerState.ParamRegExp || state === TokenizerState.ParamRegExpEnd) {
      if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: TokenType.Param,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else crash("Invalid state to consume buffer");
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== TokenizerState.ParamRegExp) {
      previousState = state;
      state = TokenizerState.EscapeNext;
      continue;
    }
    switch (state) {
      case TokenizerState.Static:
        if (char === "/") {
          if (buffer) consumeBuffer();
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = TokenizerState.Param;
        } else addCharToBuffer();
        break;
      case TokenizerState.EscapeNext:
        addCharToBuffer();
        state = previousState;
        break;
      case TokenizerState.Param:
        if (char === "(") state = TokenizerState.ParamRegExp;
        else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
        else {
          consumeBuffer();
          state = TokenizerState.Static;
          if (char !== "*" && char !== "?" && char !== "+") i2--;
        }
        break;
      case TokenizerState.ParamRegExp:
        if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
        else state = TokenizerState.ParamRegExpEnd;
        else customRe += char;
        break;
      case TokenizerState.ParamRegExpEnd:
        consumeBuffer();
        state = TokenizerState.Static;
        if (char !== "*" && char !== "?" && char !== "+") i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === TokenizerState.ParamRegExp) crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
var PathScore = /* @__PURE__ */ (function(PathScore$1) {
  PathScore$1[PathScore$1["_multiplier"] = 10] = "_multiplier";
  PathScore$1[PathScore$1["Root"] = 90] = "Root";
  PathScore$1[PathScore$1["Segment"] = 40] = "Segment";
  PathScore$1[PathScore$1["SubSegment"] = 30] = "SubSegment";
  PathScore$1[PathScore$1["Static"] = 40] = "Static";
  PathScore$1[PathScore$1["Dynamic"] = 20] = "Dynamic";
  PathScore$1[PathScore$1["BonusCustomRegExp"] = 10] = "BonusCustomRegExp";
  PathScore$1[PathScore$1["BonusWildcard"] = -50] = "BonusWildcard";
  PathScore$1[PathScore$1["BonusRepeatable"] = -20] = "BonusRepeatable";
  PathScore$1[PathScore$1["BonusOptional"] = -8] = "BonusOptional";
  PathScore$1[PathScore$1["BonusStrict"] = 0.7000000000000001] = "BonusStrict";
  PathScore$1[PathScore$1["BonusCaseSensitive"] = 0.25] = "BonusCaseSensitive";
  return PathScore$1;
})(PathScore || {});
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [PathScore.Root];
    if (options.strict && !segment.length) pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = PathScore.Segment + (options.sensitive ? PathScore.BonusCaseSensitive : 0);
      if (token.type === TokenType.Static) {
        if (!tokenIndex) pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += PathScore.Static;
      } else if (token.type === TokenType.Param) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re$1 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re$1 !== BASE_PARAM_PATTERN) {
          subSegmentScore += PathScore.BonusCustomRegExp;
          try {
            `${re$1}`;
          } catch (err2) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re$1}): ` + err2.message);
          }
        }
        let subPattern = repeatable ? `((?:${re$1})(?:/(?:${re$1}))*)` : `(${re$1})`;
        if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional) subPattern += "?";
        pattern += subPattern;
        subSegmentScore += PathScore.Dynamic;
        if (optional) subSegmentScore += PathScore.BonusOptional;
        if (repeatable) subSegmentScore += PathScore.BonusRepeatable;
        if (re$1 === ".*") subSegmentScore += PathScore.BonusWildcard;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += PathScore.BonusStrict;
  }
  if (!options.strict) pattern += "/?";
  if (options.end) pattern += "$";
  else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match) return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) if (token.type === TokenType.Static) path += token.value;
      else if (token.type === TokenType.Param) {
        const { value, repeatable, optional } = token;
        const param = value in params ? params[value] : "";
        if (isArray$1(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
        const text = isArray$1(param) ? param.join("/") : param;
        if (!text) if (optional) {
          if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
          else avoidDuplicatedSlash = true;
        } else throw new Error(`Missing required param "${value}"`);
        path += text;
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff) return diff;
    i2++;
  }
  if (a2.length < b2.length) return a2.length === 1 && a2[0] === PathScore.Static + PathScore.Segment ? -1 : 1;
  else if (a2.length > b2.length) return b2.length === 1 && b2[0] === PathScore.Static + PathScore.Segment ? 1 : -1;
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp) return comp;
    i2++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore)) return 1;
    if (isLastScoreNegative(bScore)) return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const PATH_PARSER_OPTIONS_DEFAULTS = {
  strict: false,
  end: true,
  sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [mainNormalizedRecord];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
        components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
        path: alias,
        aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
      })));
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher)) {
          removeRoute(record.name);
        }
      }
      if (isMatchable(matcher)) insertMatcher(matcher);
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
      }
      originalRecord = originalRecord || matcher;
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index = findInsertionIndex(matcher, matchers);
    matchers.splice(index, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location$1, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location$1 && location$1.name) {
      matcher = matcherMap.get(location$1.name);
      if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, { location: location$1 });
      name = matcher.record.name;
      params = assign(pickParams(currentLocation.params, matcher.keys.filter((k2) => !k2.optional).concat(matcher.parent ? matcher.parent.keys.filter((k2) => k2.optional) : []).map((k2) => k2.name)), location$1.params && pickParams(location$1.params, matcher.keys.map((k2) => k2.name)));
      path = matcher.stringify(params);
    } else if (location$1.path != null) {
      path = location$1.path;
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, {
        location: location$1,
        currentLocation
      });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location$1.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve: resolve2,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function pickParams(params, keys) {
  const newParams = {};
  for (const key of keys) if (key in params) newParams[key] = params[key];
  return newParams;
}
function normalizeRouteRecord(record) {
  const normalized = {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: record.aliasOf,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
  Object.defineProperty(normalized, "mods", { value: {} });
  return normalized;
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) propsObject.default = props;
  else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf) return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function findInsertionIndex(matcher, matchers) {
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
    else lower = mid + 1;
  }
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
function isMatchable({ record }) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function useLink$1(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => {
    const to = unref(props.to);
    return router.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1) return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive2 = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent$1(e)) {
      const p2 = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
      if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p2);
      return p2;
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive: isActive2,
    isExactActive,
    navigate
  };
}
function preferSingleVNode(vnodes) {
  return vnodes.length === 1 ? vnodes[0] : vnodes;
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: useLink$1,
  setup(props, { slots }) {
    const link = reactive(useLink$1(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && preferSingleVNode(slots.default(link));
      return props.custom ? children : h$1("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent$1(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
  if (e.defaultPrevented) return;
  if (e.button !== void 0 && e.button !== 0) return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target)) return;
  }
  if (e.preventDefault) e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) return false;
    } else if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2])) return false;
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [
      viewRef.value,
      matchedRouteRef.value,
      props.name
    ], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
          if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) return normalizeSlot(slots.default, {
        Component: ViewComponent,
        route
      });
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
      };
      const component = h$1(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, {
        Component: component,
        route
      }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot) return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else record = parentOrRoute;
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) matcher.removeRoute(recordMatcher);
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute$1 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href$1 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute$1, {
        params: decodeParams(matchedRoute$1.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href$1
      });
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      matcherLocation = assign({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
      matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) return createRouterError(ErrorTypes.NAVIGATION_CANCELLED, {
      from,
      to
    });
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to, from) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace$1 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation, from);
    if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
      state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
      force,
      replace: replace$1
    }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(ErrorTypes.NAVIGATION_DUPLICATED, {
        to: toLocation,
        from
      });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure$1) => {
      if (failure$1) {
        if (isNavigationFailure(failure$1, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
          return pushWithRedirect(assign({ replace: replace$1 }, locationAsObject(failure$1.to), {
            state: typeof failure$1.to === "object" ? assign({}, data, failure$1.to.state) : data,
            force
          }), redirectedFrom || toLocation);
        }
      } else failure$1 = finalizeNavigation(toLocation, from, true, replace$1, data);
      triggerAfterEach(toLocation, from, failure$1);
      return failure$1;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
      guards.push(guardToPromiseFn(guard, to, from));
    });
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) if (record.beforeEnter) if (isArray$1(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
      else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err2) => isNavigationFailure(err2, ErrorTypes.NAVIGATION_CANCELLED) ? err2 : Promise.reject(err2));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace$1, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error) return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) if (replace$1 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
    else routerHistory.push(toLocation.fullPath, data);
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener) return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening) return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, {
          replace: true,
          force: true
        }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED)) return error;
        if (isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
          pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
            if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta) routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta && !isNavigationFailure(failure, ErrorTypes.NAVIGATION_CANCELLED)) routerHistory.go(-info.delta, false);
          else if (info.type === NavigationType.pop && isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED)) routerHistory.go(-1, false);
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) list.forEach((handler) => handler(error, to, from));
    else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
    return new Promise((resolve$1, reject) => {
      readyHandlers.add([resolve$1, reject]);
    });
  }
  function markAsReady(err2) {
    if (!ready) {
      ready = !err2;
      setupListeners();
      readyHandlers.list().forEach(([resolve$1, reject]) => err2 ? reject(err2) : resolve$1());
      readyHandlers.reset();
    }
    return err2;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior) return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err2) => triggerError(err2, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err2) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
        get: () => currentRoute.value[key],
        enumerable: true
      });
      app.provide(routerKey, router);
      app.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise2, guard) => promise2.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router;
}
function useRouter() {
  return inject(routerKey);
}
function useRoute(_name) {
  return inject(routeLocationKey);
}
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutePath = () => useClientData().routePath;
var useRoutes = () => useClientData().routes;
var useSiteLocaleData = () => useClientData().siteLocaleData;
var useData$1 = useClientData;
var useFrontmatter = usePageFrontmatter;
var useLang = usePageLang;
var usePage = usePageData;
var contentUpdatedCallbacks = /* @__PURE__ */ new Set();
var onContentUpdated = (fn) => {
  contentUpdatedCallbacks.add(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks.delete(fn);
  });
};
var updateHeadSymbol = Symbol(
  ""
);
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (pathname, currentPath) => {
  const normalizedRoutePath = normalizeRoutePath(pathname, currentPath);
  if (routes.value[normalizedRoutePath]) return normalizedRoutePath;
  const encodedRoutePath = encodeURI(normalizedRoutePath);
  if (routes.value[encodedRoutePath]) {
    return encodedRoutePath;
  }
  const redirectedRoutePath = redirects.value[normalizedRoutePath] || redirects.value[encodedRoutePath];
  if (redirectedRoutePath) {
    return redirectedRoutePath;
  }
  return normalizedRoutePath;
};
var resolveRoute = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  const routePath = resolveRoutePath(pathname, currentPath);
  const routeFullPath = routePath + hashAndQueries;
  if (!routes.value[routePath]) {
    return {
      ...routes.value["/404.html"],
      path: routeFullPath,
      notFound: true
    };
  }
  return {
    ...routes.value[routePath],
    path: routeFullPath,
    notFound: false
  };
};
var resolveRouteFullPath = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  return resolveRoutePath(pathname, currentPath) + hashAndQueries;
};
var guardEvent = (event) => {
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  if (event.button !== void 0 && event.button !== 0) return;
  if (event.currentTarget) {
    const target = event.currentTarget.getAttribute("target");
    if (target?.match(/\b_blank\b/i)) return;
  }
  event.preventDefault();
  return true;
};
var RouteLink = /* @__PURE__ */ defineComponent({
  name: "RouteLink",
  props: {
    /**
     * The route path to link to
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Whether the link is active to have an active class
     *
     * Notice that the active status is not automatically determined according to the current route.
     */
    active: Boolean,
    /**
     * The class to add when the link is active
     */
    activeClass: {
      type: String,
      default: "route-link-active"
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const route = useRoute();
    const path = computed(
      () => props.to.startsWith("#") || props.to.startsWith("?") ? props.to : `${"/"}${resolveRouteFullPath(props.to, route.path).substring(1)}`
    );
    return () => h$1(
      "a",
      {
        class: ["route-link", { [props.activeClass]: props.active }],
        href: path.value,
        onClick: (event = {}) => {
          if (guardEvent(event)) {
            void router.push(props.to).catch();
          }
        }
      },
      slots.default()
    );
  }
});
var ClientOnly = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => isMounted.value ? ctx.slots.default?.() : null;
  }
});
var runContentUpdatedCallbacks = (reason) => {
  contentUpdatedCallbacks.forEach((fn) => fn(reason));
};
var Content = /* @__PURE__ */ defineComponent({
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path) return pageComponent.value;
      const route = resolveRoute(props.path);
      return /* @__PURE__ */ defineAsyncComponent(
        async () => route.loader().then(({ comp }) => comp)
      );
    });
    const frontmatter = usePageFrontmatter();
    watch(
      frontmatter,
      () => {
        runContentUpdatedCallbacks("updated");
      },
      { deep: true, flush: "post" }
    );
    return () => h$1(ContentComponent.value, {
      onVnodeMounted: () => {
        runContentUpdatedCallbacks("mounted");
      },
      onVnodeUpdated: () => {
        runContentUpdatedCallbacks("updated");
      },
      onVnodeBeforeUnmount: () => {
        runContentUpdatedCallbacks("beforeUnmount");
      }
    });
  }
});
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    if (!layouts[layoutName]) {
      throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, decodeURI(routePath)),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: ({ base, locales: locales2, ...siteData2 }, routeLocale) => ({
    ...siteData2,
    ...locales2[routeLocale],
    head: [
      // when merging head, the locales head should be placed before root head
      // to get higher priority
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- unsafe indexed access
      ...locales2[routeLocale]?.head ?? [],
      ...siteData2.head
    ]
  })
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url)) return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var config_default$2 = {};
const clientConfig0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config_default$2
}, Symbol.toStringTag, { value: "Module" }));
var constants_exports = {};
__export(constants_exports, {
  COMPONENT_STATE_TYPE: () => COMPONENT_STATE_TYPE,
  INSPECTOR_ID: () => INSPECTOR_ID,
  INSPECTOR_LABEL: () => INSPECTOR_LABEL,
  INSPECTOR_NODES: () => INSPECTOR_NODES,
  INSPECTOR_STATE_SECTION_NAME: () => INSPECTOR_STATE_SECTION_NAME,
  PLUGIN_ID: () => PLUGIN_ID,
  PLUGIN_LABEL: () => PLUGIN_LABEL
});
var PLUGIN_ID = "org.vuejs.vuepress";
var PLUGIN_LABEL = "VuePress";
var COMPONENT_STATE_TYPE = PLUGIN_LABEL;
var INSPECTOR_ID = PLUGIN_ID;
var INSPECTOR_LABEL = PLUGIN_LABEL;
var INSPECTOR_NODE_INTERNAL = {
  id: "INTERNAL",
  label: "Internal",
  keys: ["layouts", "routes", "redirects"]
};
var INSPECTOR_NODE_SITE = {
  id: "SITE",
  label: "Site",
  keys: ["siteData", "siteLocaleData"]
};
var INSPECTOR_NODE_ROUTE = {
  id: "ROUTE",
  label: "Route",
  keys: ["routePath", "routeLocale"]
};
var INSPECTOR_NODE_PAGE = {
  id: "PAGE",
  label: "Page",
  keys: [
    "pageData",
    "pageFrontmatter",
    "pageLang",
    "pageHead",
    "pageHeadTitle",
    "pageLayout",
    "pageComponent"
  ]
};
var INSPECTOR_NODES = {
  [INSPECTOR_NODE_INTERNAL.id]: INSPECTOR_NODE_INTERNAL,
  [INSPECTOR_NODE_SITE.id]: INSPECTOR_NODE_SITE,
  [INSPECTOR_NODE_ROUTE.id]: INSPECTOR_NODE_ROUTE,
  [INSPECTOR_NODE_PAGE.id]: INSPECTOR_NODE_PAGE
};
var INSPECTOR_STATE_SECTION_NAME = "State";
const getLength = (size) => typeof size === "number" ? `${size}px` : size;
const LoadingIcon = ({ size = 48, stroke = 4, wrapper = true, height = 2 * size }) => {
  const icon = h$1("span", {
    style: `--loading-icon: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='25 25 50 50'%3E%3CanimateTransform attributeName='transform' type='rotate' dur='2s' keyTimes='0;1' repeatCount='indefinite' values='0;360'%3E%3C/animateTransform%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='currentColor' stroke-width='${stroke}' stroke-linecap='round'%3E%3Canimate attributeName='stroke-dasharray' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='1,200;90,200;1,200'%3E%3C/animate%3E%3Canimate attributeName='stroke-dashoffset' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='0;-35px;-125px'%3E%3C/animate%3E%3C/circle%3E%3C/svg%3E");--icon-size: ${getLength(size)};display: inline-block;width: var(--icon-size);height: var(--icon-size);background-color: currentcolor;-webkit-mask-image: var(--loading-icon);mask-image: var(--loading-icon)`
  });
  return wrapper ? h$1("div", {
    style: `display: flex;align-items: center;justify-content: center;height: ${getLength(height)}`
  }, icon) : icon;
};
LoadingIcon.displayName = "LoadingIcon";
const FadeInExpandTransition = /* @__PURE__ */ defineComponent({
  name: "FadeInExpandTransition",
  props: {
    /* Whether to group transitions */
    group: Boolean,
    appear: Boolean,
    /* Whether to switch to the transition of `width` */
    width: Boolean,
    mode: String,
    onLeave: Function,
    onAfterLeave: Function,
    onAfterEnter: Function
  },
  setup(props, { slots }) {
    const handleBeforeLeave = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = `${el.offsetHeight}px`;
      void el.offsetWidth;
    };
    const handleLeave = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = "0";
      void el.offsetWidth;
      props.onLeave?.();
    };
    const handleAfterLeave = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = "";
      props.onAfterLeave?.();
    };
    const handleEnter = (el) => {
      el.style.transition = "none";
      if (props.width) {
        const memorizedWidth = el.offsetWidth;
        el.style.maxWidth = "0";
        void el.offsetWidth;
        el.style.transition = "";
        el.style.maxWidth = `${memorizedWidth}px`;
      } else {
        const memorizedHeight = el.offsetHeight;
        el.style.maxHeight = "0";
        void el.offsetWidth;
        el.style.transition = "";
        el.style.maxHeight = `${memorizedHeight}px`;
      }
      void el.offsetWidth;
    };
    const handleAfterEnter = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = "";
      props.onAfterEnter?.();
    };
    return () => h$1(props.group ? TransitionGroup : Transition, {
      name: props.width ? "fade-in-width-expand" : "fade-in-height-expand",
      appear: props.appear,
      onEnter: handleEnter,
      onAfterEnter: handleAfterEnter,
      onBeforeLeave: handleBeforeLeave,
      onLeave: handleLeave,
      onAfterLeave: handleAfterLeave,
      ...props.group ? void 0 : { mode: props.mode }
    }, slots);
  }
});
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return { b: b2, r: r2 };
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b;
var rev = new u16(32768);
for (var i$3 = 0; i$3 < 32768; ++i$3) {
  var x$2 = (i$3 & 43690) >> 1 | (i$3 & 21845) << 1;
  x$2 = (x$2 & 52428) >> 2 | (x$2 & 13107) << 2;
  x$2 = (x$2 & 61680) >> 4 | (x$2 & 3855) << 4;
  rev[i$3] = ((x$2 & 65280) >> 8 | (x$2 & 255) << 8) >> 1;
}
var hMap = (function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (var i$3 = 0; i$3 < 144; ++i$3)
  flt[i$3] = 8;
for (var i$3 = 144; i$3 < 256; ++i$3)
  flt[i$3] = 9;
for (var i$3 = 256; i$3 < 280; ++i$3)
  flt[i$3] = 7;
for (var i$3 = 280; i$3 < 288; ++i$3)
  flt[i$3] = 8;
var fdt = new u8(32);
for (var i$3 = 0; i$3 < 32; ++i$3)
  fdt[i$3] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o = p2 / 8 | 0;
  return (d2[o] | d2[o + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o = p2 / 8 | 0;
  return (d2[o] | d2[o + 1] << 8 | d2[o + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e == null || e > v2.length)
    e = v2.length;
  return new u8(v2.subarray(s2, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zls = function(d2, dict) {
  if ((d2[0] & 15) != 8 || d2[0] >> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if ((d2[1] >> 5 & 1) == 1)
    err(6, "invalid zlib data: " + (d2[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d2[1] >> 3 & 4) + 2;
};
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data), -4), { i: 2 }, opts, opts);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c = d2[i2++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i2 + eb > d2.length)
      return { s: r2, r: slc(d2, i2 - 1) };
    if (!eb)
      r2 += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  var l2 = str.length;
  for (var i2 = 0; i2 < l2; ++i2) {
  }
}
function strFromU8(dat, latin1) {
  var r2;
  if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s2 = _a2.s, r2 = _a2.r;
    if (r2.length)
      err(8);
    return s2;
  }
}
const decodeData = (base64) => {
  const binary = atob(base64);
  return strFromU8(unzlibSync(strToU8(binary)));
};
const isDef = (val) => typeof val !== "undefined";
const isBoolean = (val) => typeof val === "boolean";
const { isArray } = Array;
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const isLinkAbsolute = (test) => startsWith(test, "/") && test[1] !== "/";
const getPlatform = () => (
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  navigator.userAgentData?.platform || navigator.platform
);
const getUA = () => navigator.userAgent;
const isiPad = () => /\biPad\b/i.test(getPlatform());
const isMobile = () => {
  const uaDataMobile = navigator.userAgentData?.mobile;
  if (isBoolean(uaDataMobile))
    return uaDataMobile;
  return /\b(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|CriOS|FxiOS)\b/i.test(getUA());
};
const isSafari = () => {
  const ua = getUA();
  return /safari/i.test(ua) && // Safari has 'Safari' but not these chromium/gecko/edge/opera flavors
  !/chrome|crios|fxios|edgios|edg|opr|opera|ucbrowser|qqbrowser|baidubrowser/i.test(ua);
};
const hasGlobalComponent = (name, app) => {
  const globalComponents2 = getCurrentInstance()?.appContext.components;
  if (!globalComponents2)
    return false;
  return name in globalComponents2 || camelize(name) in globalComponents2 || capitalize(camelize(name)) in globalComponents2;
};
const wait = (ms) => new Promise((resolve2) => {
  setTimeout(resolve2, ms);
});
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => toValue(localesConfig)[routeLocale.value] ?? {});
};
const useLocale$1 = useLocaleConfig;
function tryOnScopeDispose(fn, failSilently) {
  if (getCurrentScope()) {
    onScopeDispose(fn, failSilently);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = /* @__NO_SIDE_EFFECTS__ */ (...args) => {
  var _getCurrentInstance;
  const key = args[0];
  const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
  const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
  if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
  if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key];
  return inject(...args);
};
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const hasOwn = (val, key) => Object.hasOwn(val, key);
function toRef(...args) {
  if (args.length !== 1) return toRef$1(...args);
  const r2 = args[0];
  return typeof r2 === "function" ? readonly(customRef(() => ({
    get: r2,
    set: noop
  }))) : ref(r2);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve2, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), {
        fn,
        thisArg: this,
        args
      })).then(resolve2).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer) _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve2, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve2;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
        if (timer) _clearTimeout(timer);
        maxTimer = void 0;
        resolve2(lastInvoker());
      }, maxDuration);
      timer = setTimeout(() => {
        if (maxTimer) _clearTimeout(maxTimer);
        maxTimer = void 0;
        resolve2(invoke());
      }, duration);
    });
  };
  return filter;
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object") ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (leading || !isLeading) invoke();
    } else if (trailing) lastValue = new Promise((resolve2, reject) => {
      lastRejector = rejectOnCancel ? reject : resolve2;
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        resolve2(invoke());
        clear();
      }, Math.max(0, duration - elapsed));
    });
    if (!leading && !timer) timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter, options = {}) {
  const { initialState = "active" } = options;
  const isActive2 = toRef(initialState === "active");
  function pause() {
    isActive2.value = false;
  }
  function resume() {
    isActive2.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive2.value) extendFilter(...args);
  };
  return {
    isActive: shallowReadonly(isActive2),
    pause,
    resume,
    eventFilter
  };
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise) _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev) await _prev;
  };
  return wrapper;
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
// @__NO_SIDE_EFFECTS__
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
// @__NO_SIDE_EFFECTS__
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function watchWithFilter(source, cb, options = {}) {
  const { eventFilter = bypassFilter, ...watchOptions } = options;
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
  const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
  const { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter(filter, { initialState });
  return {
    stop: watchWithFilter(source, cb, {
      ...watchOptions,
      eventFilter
    }),
    pause,
    resume,
    isActive: isActive2
  };
}
function tryOnMounted(fn, sync = true, target) {
  if (getLifeCycleTarget()) onMounted(fn, target);
  else if (sync) fn();
  else nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  const isPending = shallowRef(false);
  let timer;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    if (immediateCallback) cb();
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = void 0;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient) start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: shallowReadonly(isPending),
    start,
    stop
  };
}
// @__NO_SIDE_EFFECTS__
function useToggle(initialValue = false, options = {}) {
  const { truthyValue = true, falsyValue = false } = options;
  const valueIsRef = isRef(initialValue);
  const _value = shallowRef(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = toValue(truthyValue);
      _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef) return toggle;
  else return [_value, toggle];
}
function watchDebounced(source, cb, options = {}) {
  const { debounce = 0, maxWait = void 0, ...watchOptions } = options;
  return watchWithFilter(source, cb, {
    ...watchOptions,
    eventFilter: debounceFilter(debounce, { maxWait })
  });
}
const debouncedWatch = watchDebounced;
function watchImmediate(source, cb, options) {
  return watch(source, cb, {
    ...options,
    immediate: true
  });
}
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  var _globalThis$reportErr;
  let options;
  if (isRef(optionsOrRef)) options = { evaluating: optionsOrRef };
  else options = optionsOrRef || {};
  const { lazy = false, flush = "sync", evaluating = void 0, shallow = true, onError = (_globalThis$reportErr = globalThis.reportError) !== null && _globalThis$reportErr !== void 0 ? _globalThis$reportErr : noop } = options;
  const started = shallowRef(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter2 = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value) return;
    counter2++;
    const counterAtBeginning = counter2;
    let hasFinished = false;
    if (evaluating) Promise.resolve().then(() => {
      evaluating.value = true;
    });
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating) evaluating.value = false;
          if (!hasFinished) cancelCallback();
        });
      });
      if (counterAtBeginning === counter2) current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter2) evaluating.value = false;
      hasFinished = true;
    }
  }, { flush });
  if (lazy) return computed(() => {
    started.value = true;
    return current.value;
  });
  else return current;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
const defaultNavigator = isClient ? window.navigator : void 0;
function unrefElement(elRef) {
  var _$el;
  const plain = toValue(elRef);
  return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray$1(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  return watchImmediate(() => {
    var _firstParamTargets$va, _firstParamTargets$va2;
    return [
      (_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
      toArray$1(toValue(firstParamTargets.value ? args[1] : args[0])),
      toArray$1(unref(firstParamTargets.value ? args[2] : args[1])),
      toValue(firstParamTargets.value ? args[3] : args[2])
    ];
  }, ([raw_targets, raw_events, raw_listeners, raw_options], _2, onCleanup) => {
    if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
    const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
    const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
    onCleanup(() => {
      cleanups.forEach((fn) => fn());
    });
  }, { flush: "post" });
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) return controls ? {
    stop: noop,
    cancel: noop,
    trigger: noop
  } : noop;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children)) return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null) return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
    if (!el || el === event.target || event.composedPath().includes(el)) return;
    if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, {
      passive: true,
      capture
    }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        const el = unrefElement(target);
        let activeEl = window2.document.activeElement;
        while (activeEl === null || activeEl === void 0 ? void 0 : activeEl.shadowRoot) activeEl = activeEl.shadowRoot.activeElement;
        if ((activeEl === null || activeEl === void 0 ? void 0 : activeEl.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window2.document.activeElement))) handler(event);
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) return {
    stop,
    cancel: () => {
      shouldListen = false;
    },
    trigger: (event) => {
      shouldListen = true;
      listener(event);
      shouldListen = false;
    }
  };
  return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
  const isMounted = shallowRef(false);
  const instance = getCurrentInstance();
  if (instance) onMounted(() => {
    isMounted.value = true;
  }, instance);
  return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
  const isMounted = /* @__PURE__ */ useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(computed(() => {
    const items2 = toArray$1(toValue(target)).map(unrefElement).filter(notNullish);
    return new Set(items2);
  }), (newTargets) => {
    cleanup();
    if (isSupported.value && newTargets.size) {
      observer = new MutationObserver(callback);
      newTargets.forEach((el) => observer.observe(el, mutationOptions));
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const takeRecords = () => {
    return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function") return keyFilter;
  else if (typeof keyFilter === "string") return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter)) return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) if (typeof args[1] === "object") {
    key = true;
    handler = args[0];
    options = args[1];
  } else {
    key = args[0];
    handler = args[1];
  }
  else {
    key = true;
    handler = args[0];
  }
  const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe)) return;
    if (predicate(e)) handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? /* @__PURE__ */ injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      matches.value = toValue(query).split(",").some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
        if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value) return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
// @__NO_SIDE_EFFECTS__
function usePermission(permissionDesc, options = {}) {
  const { controls = false, navigator: navigator2 = defaultNavigator } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => navigator2 && "permissions" in navigator2);
  const permissionStatus = shallowRef();
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = shallowRef();
  const update = () => {
    var _permissionStatus$val, _permissionStatus$val2;
    state.value = (_permissionStatus$val = (_permissionStatus$val2 = permissionStatus.value) === null || _permissionStatus$val2 === void 0 ? void 0 : _permissionStatus$val2.state) !== null && _permissionStatus$val !== void 0 ? _permissionStatus$val : "prompt";
  };
  useEventListener(permissionStatus, "change", update, { passive: true });
  const query = createSingletonPromise(async () => {
    if (!isSupported.value) return;
    if (!permissionStatus.value) try {
      permissionStatus.value = await navigator2.permissions.query(desc);
    } catch (_unused) {
      permissionStatus.value = void 0;
    } finally {
      update();
    }
    if (controls) return toRaw(permissionStatus.value);
  });
  query();
  if (controls) return {
    state,
    isSupported,
    query
  };
  else return state;
}
function useClipboard(options = {}) {
  const { navigator: navigator2 = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
  const isClipboardApiSupported = /* @__PURE__ */ useSupported(() => navigator2 && "clipboard" in navigator2);
  const permissionRead = /* @__PURE__ */ usePermission("clipboard-read");
  const permissionWrite = /* @__PURE__ */ usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = shallowRef("");
  const copied = shallowRef(false);
  const copyPending = shallowRef(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring, { immediate: false });
  let lastLegacyId = 0;
  async function updateText() {
    let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionRead.value));
    if (!useLegacy) try {
      text.value = await navigator2.clipboard.readText();
    } catch (_unused) {
      useLegacy = true;
    }
    if (useLegacy) text.value = legacyRead();
  }
  if (isSupported.value && read) useEventListener(["copy", "cut"], updateText, { passive: true });
  async function copy(value) {
    const resolvedValue = value !== null && value !== void 0 ? value : toValue(source);
    if (isSupported.value && resolvedValue != null) {
      copyPending.value = true;
      let useLegacy = !(isClipboardApiSupported.value && isAllowed(permissionWrite.value));
      if (!useLegacy) try {
        const clipboardItem = createClipboardItem(resolvedValue);
        await navigator2.clipboard.write([clipboardItem]);
      } catch (_unused2) {
        useLegacy = true;
      }
      if (useLegacy) if (typeof resolvedValue === "string") {
        text.value = resolvedValue;
        legacyCopy(resolvedValue);
      } else {
        const currentId = ++lastLegacyId;
        const resolvedText = await resolvedValue();
        if (resolvedText != null && currentId === lastLegacyId) {
          text.value = resolvedText;
          legacyCopy(resolvedText);
        }
      }
      copied.value = true;
      timeout.start();
      copyPending.value = false;
    }
  }
  function createClipboardItem(value) {
    if (typeof value === "string") {
      text.value = value;
      return new ClipboardItem({ "text/plain": value });
    } else return new ClipboardItem({ "text/plain": value().then((resolvedText = "") => {
      text.value = resolvedText;
      return new Blob([resolvedText], { type: "text/plain" });
    }) });
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value;
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    ta.setAttribute("readonly", "");
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _document$getSelectio, _document, _document$getSelectio2;
    return (_document$getSelectio = (_document = document) === null || _document === void 0 || (_document$getSelectio2 = _document.getSelection) === null || _document$getSelectio2 === void 0 || (_document$getSelectio2 = _document$getSelectio2.call(_document)) === null || _document$getSelectio2 === void 0 ? void 0 : _document$getSelectio2.toString()) !== null && _document$getSelectio !== void 0 ? _document$getSelectio : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    copyPending: shallowReadonly(copyPending),
    isSupported,
    text: shallowReadonly(text),
    copied: shallowReadonly(copied),
    copy
  };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
// @__NO_SIDE_EFFECTS__
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage2, options = {}) {
  var _options$serializer;
  const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window2 = defaultWindow, eventFilter, onError = (e) => {
    console.error(e);
  }, initOnMounted } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  const keyComputed = computed(() => toValue(key));
  if (!storage2) try {
    storage2 = getSSRHandler("getDefaultStorage", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
  } catch (e) {
    onError(e);
  }
  if (!storage2) return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, (newValue) => write(newValue), {
    flush,
    deep,
    eventFilter
  });
  watch(keyComputed, () => update(), { flush });
  let firstMounted = false;
  const onStorageEvent = (ev) => {
    if (initOnMounted && !firstMounted) return;
    update(ev);
  };
  const onStorageCustomEvent = (ev) => {
    if (initOnMounted && !firstMounted) return;
    updateFromCustomEvent(ev);
  };
  if (window2 && listenToStorageChanges) if (storage2 instanceof Storage) useEventListener(window2, "storage", onStorageEvent, { passive: true });
  else useEventListener(window2, customStorageEventName, onStorageCustomEvent);
  if (initOnMounted) tryOnMounted(() => {
    firstMounted = true;
    update();
  });
  else update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage2
      };
      window2.dispatchEvent(storage2 instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
    }
  }
  function write(v2) {
    try {
      const oldValue = storage2.getItem(keyComputed.value);
      if (v2 == null) {
        dispatchWriteEvent(oldValue, null);
        storage2.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v2);
        if (oldValue !== serialized) {
          storage2.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage2.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null) storage2.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value)) return {
        ...rawInit,
        ...value
      };
      return value;
    } else if (typeof rawValue !== "string") return rawValue;
    else return serializer.read(rawValue);
  }
  function update(event) {
    if (event && event.storageArea !== storage2) return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value) return;
    pauseWatch();
    try {
      const serializedData = serializer.write(data.value);
      if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event) nextTick(resumeWatch);
      else resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
const CSS_DISABLE_TRANS = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function useColorMode(options = {}) {
  const { selector = "html", attribute = "class", initialValue = "auto", window: window2 = defaultWindow, storage: storage2, storageKey = "vueuse-color-scheme", listenToStorageChanges = true, storageRef, emitAuto, disableTransition = true } = options;
  const modes = {
    auto: "",
    light: "light",
    dark: "dark",
    ...options.modes || {}
  };
  const preferredDark = /* @__PURE__ */ usePreferredDark({ window: window2 });
  const system = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? toRef(initialValue) : useStorage(storageKey, initialValue, storage2, {
    window: window2,
    listenToStorageChanges
  }));
  const state = computed(() => store.value === "auto" ? system.value : store.value);
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = typeof selector2 === "string" ? window2 === null || window2 === void 0 ? void 0 : window2.document.querySelector(selector2) : unrefElement(selector2);
    if (!el) return;
    const classesToAdd = /* @__PURE__ */ new Set();
    const classesToRemove = /* @__PURE__ */ new Set();
    let attributeToChange = null;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i2) => (i2 || "").split(/\s/g)).filter(Boolean).forEach((v2) => {
        if (current.includes(v2)) classesToAdd.add(v2);
        else classesToRemove.add(v2);
      });
    } else attributeToChange = {
      key: attribute2,
      value
    };
    if (classesToAdd.size === 0 && classesToRemove.size === 0 && attributeToChange === null) return;
    let style;
    if (disableTransition) {
      style = window2.document.createElement("style");
      style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
      window2.document.head.appendChild(style);
    }
    for (const c of classesToAdd) el.classList.add(c);
    for (const c of classesToRemove) el.classList.remove(c);
    if (attributeToChange) el.setAttribute(attributeToChange.key, attributeToChange.value);
    if (disableTransition) {
      window2.getComputedStyle(style).opacity;
      document.head.removeChild(style);
    }
  });
  function defaultOnChanged(mode) {
    var _modes$mode;
    updateHTMLAttrs(selector, attribute, (_modes$mode = modes[mode]) !== null && _modes$mode !== void 0 ? _modes$mode : mode);
  }
  function onChanged(mode) {
    if (options.onChanged) options.onChanged(mode, defaultOnChanged);
    else defaultOnChanged(mode);
  }
  watch(state, onChanged, {
    flush: "post",
    immediate: true
  });
  tryOnMounted(() => onChanged(state.value));
  const auto = computed({
    get() {
      return emitAuto ? store.value : state.value;
    },
    set(v2) {
      store.value = v2;
    }
  });
  return Object.assign(auto, {
    store,
    system,
    state
  });
}
function useCssVar(prop, target, options = {}) {
  const { window: window2 = defaultWindow, initialValue, observe = false } = options;
  const variable = shallowRef(initialValue);
  const elRef = computed(() => {
    var _window$document;
    return unrefElement(target) || (window2 === null || window2 === void 0 || (_window$document = window2.document) === null || _window$document === void 0 ? void 0 : _window$document.documentElement);
  });
  function updateCssVar() {
    const key = toValue(prop);
    const el = toValue(elRef);
    if (el && window2 && key) {
      var _window$getComputedSt;
      variable.value = ((_window$getComputedSt = window2.getComputedStyle(el).getPropertyValue(key)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.trim()) || variable.value || initialValue;
    }
  }
  if (observe) useMutationObserver(elRef, updateCssVar, {
    attributeFilter: ["style", "class"],
    window: window2
  });
  watch([elRef, () => toValue(prop)], (_2, old) => {
    if (old[0] && old[1]) old[0].style.removeProperty(old[1]);
    updateCssVar();
  }, { immediate: true });
  watch([variable, elRef], ([val, el]) => {
    const raw_prop = toValue(prop);
    if ((el === null || el === void 0 ? void 0 : el.style) && raw_prop) if (val == null) el.style.removeProperty(raw_prop);
    else el.style.setProperty(raw_prop, val);
  }, { immediate: true });
  return variable;
}
function useDark(options = {}) {
  const { valueDark = "dark", valueLight = "" } = options;
  const mode = useColorMode({
    ...options,
    onChanged: (mode2, defaultHandler) => {
      var _options$onChanged;
      if (options.onChanged) (_options$onChanged = options.onChanged) === null || _options$onChanged === void 0 || _options$onChanged.call(options, mode2 === "dark", defaultHandler, mode2);
      else defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });
  const system = computed(() => mode.system.value);
  return computed({
    get() {
      return mode.value === "dark";
    },
    set(v2) {
      const modeVal = v2 ? "dark" : "light";
      if (system.value === modeVal) mode.value = "auto";
      else mode.value = modeVal;
    }
  });
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(computed(() => {
    const _targets = toValue(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
  }), (els) => {
    cleanup();
    if (isSupported.value && window2) {
      observer = new ResizeObserver(callback);
      for (const _el of els) if (_el) observer.observe(_el, observerOptions);
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementSize(target, initialSize = {
  width: 0,
  height: 0
}, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _unrefElement;
    return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
  });
  const width = shallowRef(initialSize.width);
  const height = shallowRef(initialSize.height);
  const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
    const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
    if (window2 && isSVG.value) {
      const $elem = unrefElement(target);
      if ($elem) {
        const rect = $elem.getBoundingClientRect();
        width.value = rect.width;
        height.value = rect.height;
      }
    } else if (boxSize) {
      const formatBoxSize = toArray$1(boxSize);
      width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
      height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
    } else {
      width.value = entry.contentRect.width;
      height.value = entry.contentRect.height;
    }
  }, options);
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
const eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options = {}) {
  const { document: document2 = defaultDocument, autoExit = false } = options;
  const targetRef = computed(() => {
    var _unrefElement;
    return (_unrefElement = unrefElement(target)) !== null && _unrefElement !== void 0 ? _unrefElement : document2 === null || document2 === void 0 ? void 0 : document2.documentElement;
  });
  const isFullscreen = shallowRef(false);
  const requestMethod = computed(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const exitMethod = computed(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const fullscreenEnabled = computed(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m2) => document2 && m2 in document2 || targetRef.value && m2 in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m2) => document2 && m2 in document2);
  const isSupported = /* @__PURE__ */ useSupported(() => targetRef.value && document2 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod) return (document2 === null || document2 === void 0 ? void 0 : document2[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) if (document2 && document2[fullscreenEnabled.value] != null) return document2[fullscreenEnabled.value];
    else {
      const target2 = targetRef.value;
      if ((target2 === null || target2 === void 0 ? void 0 : target2[fullscreenEnabled.value]) != null) return Boolean(target2[fullscreenEnabled.value]);
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value || !isFullscreen.value) return;
    if (exitMethod.value) if ((document2 === null || document2 === void 0 ? void 0 : document2[exitMethod.value]) != null) await document2[exitMethod.value]();
    else {
      const target2 = targetRef.value;
      if ((target2 === null || target2 === void 0 ? void 0 : target2[exitMethod.value]) != null) await target2[exitMethod.value]();
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value || isFullscreen.value) return;
    if (isElementFullScreen()) await exit();
    const target2 = targetRef.value;
    if (requestMethod.value && (target2 === null || target2 === void 0 ? void 0 : target2[requestMethod.value]) != null) {
      await target2[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen()) isFullscreen.value = isElementFullScreenValue;
  };
  const listenerOptions = {
    capture: false,
    passive: true
  };
  useEventListener(document2, eventHandlers, handlerCallback, listenerOptions);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, listenerOptions);
  tryOnMounted(handlerCallback, false);
  if (autoExit) tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
function resolveElement(el) {
  if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
  if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
  return el;
}
const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const { throttle = 0, idle = 200, onStop = noop, onScroll = noop, offset = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }, observe: _observe = { mutation: false }, eventListenerOptions = {
    capture: false,
    passive: true
  }, behavior = "auto", window: window2 = defaultWindow, onError = (e) => {
    console.error(e);
  } } = options;
  const observe = typeof _observe === "boolean" ? { mutation: _observe } : _observe;
  const internalX = shallowRef(0);
  const internalY = shallowRef(0);
  const x2 = computed({
    get() {
      return internalX.value;
    },
    set(x3) {
      scrollTo(x3, void 0);
    }
  });
  const y2 = computed({
    get() {
      return internalY.value;
    },
    set(y3) {
      scrollTo(void 0, y3);
    }
  });
  function scrollTo(_x, _y) {
    var _ref, _toValue, _toValue2, _document;
    if (!window2) return;
    const _element = toValue(element);
    if (!_element) return;
    (_ref = _element instanceof Document ? window2.document.body : _element) === null || _ref === void 0 || _ref.scrollTo({
      top: (_toValue = toValue(_y)) !== null && _toValue !== void 0 ? _toValue : y2.value,
      left: (_toValue2 = toValue(_x)) !== null && _toValue2 !== void 0 ? _toValue2 : x2.value,
      behavior: toValue(behavior)
    });
    const scrollContainer = (_element === null || _element === void 0 || (_document = _element.document) === null || _document === void 0 ? void 0 : _document.documentElement) || (_element === null || _element === void 0 ? void 0 : _element.documentElement) || _element;
    if (x2 != null) internalX.value = scrollContainer.scrollLeft;
    if (y2 != null) internalY.value = scrollContainer.scrollTop;
  }
  const isScrolling = shallowRef(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = (e) => {
    if (!isScrolling.value) return;
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  };
  const onScrollEndDebounced = /* @__PURE__ */ useDebounceFn(onScrollEnd, throttle + idle);
  const setArrivedState = (target) => {
    var _document2;
    if (!window2) return;
    const el = (target === null || target === void 0 || (_document2 = target.document) === null || _document2 === void 0 ? void 0 : _document2.documentElement) || (target === null || target === void 0 ? void 0 : target.documentElement) || unrefElement(target);
    const { display, flexDirection, direction } = window2.getComputedStyle(el);
    const directionMultipler = direction === "rtl" ? -1 : 1;
    const scrollLeft = el.scrollLeft;
    directions.left = scrollLeft < internalX.value;
    directions.right = scrollLeft > internalX.value;
    const left = Math.abs(scrollLeft * directionMultipler) <= (offset.left || 0);
    const right = Math.abs(scrollLeft * directionMultipler) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "row-reverse") {
      arrivedState.left = right;
      arrivedState.right = left;
    } else {
      arrivedState.left = left;
      arrivedState.right = right;
    }
    internalX.value = scrollLeft;
    let scrollTop = el.scrollTop;
    if (target === window2.document && !scrollTop) scrollTop = window2.document.body.scrollTop;
    directions.top = scrollTop < internalY.value;
    directions.bottom = scrollTop > internalY.value;
    const top = Math.abs(scrollTop) <= (offset.top || 0);
    const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    if (display === "flex" && flexDirection === "column-reverse") {
      arrivedState.top = bottom;
      arrivedState.bottom = top;
    } else {
      arrivedState.top = top;
      arrivedState.bottom = bottom;
    }
    internalY.value = scrollTop;
  };
  const onScrollHandler = (e) => {
    var _documentElement;
    if (!window2) return;
    setArrivedState((_documentElement = e.target.documentElement) !== null && _documentElement !== void 0 ? _documentElement : e.target);
    isScrolling.value = true;
    onScrollEndDebounced(e);
    onScroll(e);
  };
  useEventListener(element, "scroll", throttle ? /* @__PURE__ */ useThrottleFn(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
  tryOnMounted(() => {
    try {
      const _element = toValue(element);
      if (!_element) return;
      setArrivedState(_element);
    } catch (e) {
      onError(e);
    }
  });
  if ((observe === null || observe === void 0 ? void 0 : observe.mutation) && element != null && element !== window2 && element !== document) useMutationObserver(element, () => {
    const _element = toValue(element);
    if (!_element) return;
    setArrivedState(_element);
  }, {
    attributes: true,
    childList: true,
    subtree: true
  });
  useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
  return {
    x: x2,
    y: y2,
    isScrolling,
    arrivedState,
    directions,
    measure() {
      const _element = toValue(element);
      if (window2 && _element) setArrivedState(_element);
    }
  };
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 === null || window2 === void 0 ? void 0 : window2.localStorage, options);
}
const elInitialOverflow = /* @__PURE__ */ new WeakMap();
function useScrollLock(element, initialState = false) {
  const isLocked = shallowRef(initialState);
  let initialOverflow = "";
  watch(toRef(element), (el) => {
    const target = resolveElement(toValue(el));
    if (target) {
      const ele = target;
      if (!elInitialOverflow.get(ele)) elInitialOverflow.set(ele, ele.style.overflow);
      if (ele.style.overflow !== "hidden") initialOverflow = ele.style.overflow;
      if (ele.style.overflow === "hidden") return isLocked.value = true;
      if (isLocked.value) return ele.style.overflow = "hidden";
    }
  }, { immediate: true });
  const lock = () => {
    const el = resolveElement(toValue(element));
    if (!el || isLocked.value) return;
    el.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const el = resolveElement(toValue(element));
    if (!el || !isLocked.value) return;
    el.style.overflow = initialOverflow;
    elInitialOverflow.delete(el);
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v2) {
      if (v2) lock();
      else unlock();
    }
  });
}
function useSessionStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 === null || window2 === void 0 ? void 0 : window2.sessionStorage, options);
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow, ...rest } = options;
  return useScroll(window2, rest);
}
// @__NO_SIDE_EFFECTS__
function useWindowSize(options = {}) {
  const { window: window2 = defaultWindow, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true, type = "inner" } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window2) if (type === "outer") {
      width.value = window2.outerWidth;
      height.value = window2.outerHeight;
    } else if (type === "visual" && window2.visualViewport) {
      const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
      width.value = Math.round(visualViewportWidth * scale);
      height.value = Math.round(visualViewportHeight * scale);
    } else if (includeScrollbar) {
      width.value = window2.innerWidth;
      height.value = window2.innerHeight;
    } else {
      width.value = window2.document.documentElement.clientWidth;
      height.value = window2.document.documentElement.clientHeight;
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  if (listenOrientation) watch(useMediaQuery("(orientation: portrait)"), () => update());
  return {
    width,
    height
  };
}
const SHELL_RE = /language-(shellscript|shell|bash|sh|zsh)/;
const useCopyCode = ({ selector, ignoreSelector, inlineSelector, duration = 2e3, locales: locales2, showInMobile, transform }) => {
  const isMobile2 = useMediaQuery("(max-width: 419px)");
  const enabled = computed(() => !isMobile2.value || showInMobile);
  const locale = useLocale$1(locales2);
  const insertCopyButton = (codeBlockElement) => {
    if (codeBlockElement.hasAttribute("copy-code"))
      return;
    const copyElement = document.createElement("button");
    copyElement.type = "button";
    copyElement.classList.add("vp-copy-code-button");
    copyElement.setAttribute("aria-label", locale.value.copy);
    copyElement.setAttribute("data-copied", locale.value.copied);
    codeBlockElement.parentElement?.insertBefore(copyElement, codeBlockElement);
    codeBlockElement.setAttribute("copy-code", "");
  };
  const appendCopyButton = () => {
    document.body.classList.toggle("no-copy-code", !enabled.value);
    if (!enabled.value)
      return;
    document.querySelectorAll(selector).forEach(insertCopyButton);
  };
  watchImmediate(enabled, () => nextTick(appendCopyButton), {
    flush: "post"
  });
  onContentUpdated((reason) => {
    if (reason !== "beforeUnmount")
      appendCopyButton();
  });
  const { copy } = useClipboard({ legacy: true });
  const timeoutIdMap = /* @__PURE__ */ new WeakMap();
  const copyContent = async (codeContainer, codeContent, button) => {
    const clone = codeContent.cloneNode(true);
    {
      clone.querySelectorAll(ignoreSelector).forEach((node) => {
        node.remove();
      });
    }
    if (transform)
      transform(clone);
    let text = clone.textContent || "";
    if (SHELL_RE.test(codeContainer.className))
      text = text.replace(/^ *(\$|>) /gm, "");
    await copy(text);
    if (duration <= 0)
      return;
    button.classList.add("copied");
    clearTimeout(timeoutIdMap.get(button));
    const timeoutId = setTimeout(() => {
      button.classList.remove("copied");
      button.blur();
      timeoutIdMap.delete(button);
    }, duration);
    timeoutIdMap.set(button, timeoutId);
  };
  useEventListener("click", (event) => {
    const el = event.target;
    if (enabled.value && el.matches('div[class*="language-"] > button.vp-copy-code-button')) {
      const codeContainer = el.parentElement;
      const preBlock = el.nextElementSibling;
      if (!codeContainer || !preBlock)
        return;
      void copyContent(codeContainer, preBlock, el);
    }
  }, { passive: true });
};
var define_CC_LOCALES_default = { "/": { copy: "复制代码", copied: "已复制" } };
const config$4 = defineClientConfig({
  setup: () => {
    useCopyCode({
      selector: '[vp-content] div[class*="language-"] pre',
      ignoreSelector: ".vp-copy-ignore,.diff.remove",
      inlineSelector: "",
      locales: define_CC_LOCALES_default,
      duration: 2e3,
      showInMobile: false
    });
  }
});
const clientConfig1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$4
}, Symbol.toStringTag, { value: "Module" }));
const setupCollapsedLines = ({ selector = 'div[class*="language-"].has-collapsed-lines > .collapsed-lines' } = {}) => {
  useEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(selector)) {
      const parent = target.parentElement;
      if (parent?.classList.toggle("collapsed")) {
        parent.scrollIntoView({ block: "center", behavior: "instant" });
      }
    }
  }, { passive: true });
};
const config$3 = {
  setup() {
    setupCollapsedLines();
  }
};
const clientConfig2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$3
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$1g = {
  key: 0,
  class: "vp-tabs"
};
const _hoisted_2$U = {
  class: "vp-tabs-nav",
  role: "tablist"
};
const _hoisted_3$J = ["aria-controls", "aria-selected", "onClick", "onKeydown"];
const _hoisted_4$z = ["id", "aria-expanded"];
const _hoisted_5$r = { class: "vp-tab-title" };
const TAB_STORE_NAME = "VUEPRESS_TAB_STORE";
const _sfc_main$1L = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  props: {
    id: {},
    tabId: { default: "" },
    active: { default: 0 },
    data: {}
  },
  setup(__props) {
    const tabStore = useStorage(TAB_STORE_NAME, {});
    const activeIndex = ref(__props.active);
    const tabRefs = shallowRef([]);
    function updateStore() {
      if (__props.tabId)
        tabStore.value[__props.tabId] = __props.data[activeIndex.value]?.id;
    }
    function activateNext(index = activeIndex.value) {
      activeIndex.value = index < tabRefs.value.length - 1 ? index + 1 : 0;
      tabRefs.value[activeIndex.value].focus();
    }
    function activatePrev(index = activeIndex.value) {
      activeIndex.value = index > 0 ? index - 1 : tabRefs.value.length - 1;
      tabRefs.value[activeIndex.value].focus();
    }
    function keyboardHandler(event, index) {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = index;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev();
      }
      updateStore();
    }
    function getInitialIndex() {
      if (__props.tabId) {
        const valueIndex = __props.data.findIndex(
          ({ id }) => tabStore.value[__props.tabId] === id
        );
        if (valueIndex !== -1)
          return valueIndex;
      }
      return __props.active;
    }
    onMounted(() => {
      activeIndex.value = getInitialIndex();
      watch(
        () => tabStore.value[__props.tabId],
        (newValue, oldValue) => {
          if (__props.tabId && newValue !== oldValue) {
            const index = __props.data.findIndex(({ id }) => id === newValue);
            if (index !== -1)
              activeIndex.value = index;
          }
        }
      );
    });
    function onTabNavClick(index) {
      activeIndex.value = index;
      updateStore();
    }
    return (_ctx, _cache) => {
      return __props.data.length ? (openBlock(), createElementBlock("div", _hoisted_1$1g, [
        createBaseVNode("div", _hoisted_2$U, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (item, index) => {
            return openBlock(), createElementBlock("button", {
              key: index,
              ref_for: true,
              ref: (el) => el && (tabRefs.value[index] = el),
              class: normalizeClass(["vp-tab-nav", { active: index === activeIndex.value }]),
              type: "button",
              role: "tab",
              "aria-controls": `tab-${__props.id}-${index}`,
              "aria-selected": index === activeIndex.value,
              onClick: () => onTabNavClick(index),
              onKeydown: (e) => keyboardHandler(e, index)
            }, [
              renderSlot(_ctx.$slots, `title${index}`, {
                value: item.id,
                isActive: index === activeIndex.value
              })
            ], 42, _hoisted_3$J);
          }), 128))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (item, index) => {
          return openBlock(), createElementBlock("div", {
            id: `tab-${__props.id}-${index}`,
            key: index,
            class: normalizeClass(["vp-tab", { active: index === activeIndex.value }]),
            role: "tabpanel",
            "aria-expanded": index === activeIndex.value
          }, [
            createBaseVNode("div", _hoisted_5$r, [
              renderSlot(_ctx.$slots, `title${index}`, {
                value: item.id,
                isActive: index === activeIndex.value
              })
            ]),
            renderSlot(_ctx.$slots, `tab${index}`, {
              value: item.id,
              isActive: index === activeIndex.value
            })
          ], 10, _hoisted_4$z);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1f = {
  key: 0,
  class: "vp-code-tabs"
};
const _hoisted_2$T = {
  class: "vp-code-tabs-nav",
  role: "tablist"
};
const _hoisted_3$I = ["aria-controls", "aria-selected", "onClick", "onKeydown"];
const _hoisted_4$y = ["id", "aria-expanded"];
const _hoisted_5$q = { class: "vp-code-tab-title" };
const CODE_TAB_STORE_NAME = "VUEPRESS_CODE_TAB_STORE";
const _sfc_main$1K = /* @__PURE__ */ defineComponent({
  __name: "CodeTabs",
  props: {
    id: {},
    tabId: { default: "" },
    active: { default: 0 },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const codeTabStore = useStorage(CODE_TAB_STORE_NAME, {});
    const activeIndex = ref(props.active);
    const tabRefs = shallowRef([]);
    function updateStore() {
      if (props.tabId)
        codeTabStore.value[props.tabId] = props.data[activeIndex.value].id;
    }
    function activateNext(index = activeIndex.value) {
      activeIndex.value = index < tabRefs.value.length - 1 ? index + 1 : 0;
      tabRefs.value[activeIndex.value].focus();
    }
    function activatePrev(index = activeIndex.value) {
      activeIndex.value = index > 0 ? index - 1 : tabRefs.value.length - 1;
      tabRefs.value[activeIndex.value].focus();
    }
    function keyboardHandler(event, index) {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = index;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev();
      }
      if (props.tabId)
        codeTabStore.value[props.tabId] = props.data[activeIndex.value].id;
    }
    function getInitialIndex() {
      if (props.tabId) {
        const valueIndex = props.data.findIndex(
          ({ id }) => codeTabStore.value[props.tabId] === id
        );
        if (valueIndex !== -1)
          return valueIndex;
      }
      return props.active;
    }
    onMounted(() => {
      activeIndex.value = getInitialIndex();
      watch(
        () => codeTabStore.value[props.tabId],
        (newValue, oldValue) => {
          if (props.tabId && newValue !== oldValue) {
            const index = props.data.findIndex(({ id }) => id === newValue);
            if (index !== -1)
              activeIndex.value = index;
          }
        }
      );
    });
    function onTabNavClick(index) {
      activeIndex.value = index;
      updateStore();
    }
    return (_ctx, _cache) => {
      return __props.data.length ? (openBlock(), createElementBlock("div", _hoisted_1$1f, [
        createBaseVNode("div", _hoisted_2$T, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (item, index) => {
            return openBlock(), createElementBlock("button", {
              key: index,
              ref_for: true,
              ref: (el) => el && (tabRefs.value[index] = el),
              class: normalizeClass(["vp-code-tab-nav", { active: index === activeIndex.value }]),
              type: "button",
              role: "tab",
              "aria-controls": `codetab-${__props.id}-${index}`,
              "aria-selected": index === activeIndex.value,
              onClick: () => onTabNavClick(index),
              onKeydown: (e) => keyboardHandler(e, index)
            }, [
              renderSlot(_ctx.$slots, `title${index}`, {
                value: item.id,
                isActive: index === activeIndex.value
              })
            ], 42, _hoisted_3$I);
          }), 128))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (item, index) => {
          return openBlock(), createElementBlock("div", {
            id: `codetab-${__props.id}-${index}`,
            key: index,
            class: normalizeClass(["vp-code-tab", { active: index === activeIndex.value }]),
            role: "tabpanel",
            "aria-expanded": index === activeIndex.value
          }, [
            createBaseVNode("div", _hoisted_5$q, [
              renderSlot(_ctx.$slots, `title${index}`, {
                value: item.id,
                isActive: index === activeIndex.value
              })
            ]),
            renderSlot(_ctx.$slots, `tab${index}`, {
              value: item.id,
              isActive: index === activeIndex.value
            })
          ], 10, _hoisted_4$y);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
function queryStringify(options) {
  const { page, noToolbar, zoom } = options;
  let queryString = [
    `page=${page}`,
    `toolbar=${noToolbar ? 0 : 1}`,
    `zoom=${zoom}`
  ].join("&");
  if (queryString) queryString = `#${queryString}`;
  return queryString;
}
function renderPDF(el, url, embedType, options) {
  url = isLinkHttp(url) ? url : new URL(withBase(url), typeof location !== "undefined" ? location.href : "").toString();
  const pdfOptions = {};
  pdfOptions.pdfjsUrl ??= "https://static.pengzhanbo.cn/pdfjs/";
  const pdfjsUrl = `${ensureEndingSlash(withBase(pdfOptions.pdfjsUrl))}web/viewer.html`;
  const queryString = queryStringify(options);
  const source = embedType === "pdfjs" ? `${pdfjsUrl}?file=${url}${queryString}` : `${url}${queryString}`;
  const tagName = embedType === "pdfjs" || embedType === "iframe" ? "iframe" : "embed";
  el.innerHTML = "";
  const pdf = document.createElement(tagName);
  pdf.className = "pdf-viewer";
  pdf.type = "application/pdf";
  pdf.title = options.title || "PDF Viewer";
  pdf.src = source;
  if (pdf instanceof HTMLIFrameElement) pdf.allow = "fullscreen";
  el.appendChild(pdf);
}
function usePDF(el, url, options) {
  if (typeof window === "undefined" || !window?.navigator?.userAgent) return;
  const { navigator: navigator2 } = window;
  const { userAgent } = navigator2;
  const isModernBrowser = typeof window.Promise === "function";
  const isMobileDevice = isiPad() || isMobile();
  const isSafariDesktop = !isMobileDevice && isSafari();
  const isFirefoxWithPDFJS = !isMobileDevice && /firefox/iu.test(userAgent) && userAgent.split("rv:").length > 1 ? Number.parseInt(userAgent.split("rv:")[1].split(".")[0], 10) > 18 : false;
  const supportsPDFs = !isMobileDevice && (isModernBrowser || isFirefoxWithPDFJS);
  if (!url) return;
  if (supportsPDFs || !isMobileDevice) return renderPDF(el, url, isSafariDesktop ? "iframe" : "embed", options);
  return renderPDF(el, url, "pdfjs", options);
}
function useSize(options, extraHeight = 0) {
  const el = shallowRef();
  const width = computed(() => toValue(options.width) || "100%");
  const height = ref("auto");
  const getHeight = (width$1) => {
    const height$1 = toValue(options.height);
    const ratio = getRadio(toValue(options.ratio));
    return height$1 || `${Number(width$1) / ratio + toValue(extraHeight)}px`;
  };
  const resize = () => {
    if (el.value) height.value = getHeight(el.value.offsetWidth);
  };
  onMounted(() => {
    resize();
    if (isRef(extraHeight)) watch(extraHeight, resize);
    useEventListener("orientationchange", resize);
    useEventListener("resize", resize);
  });
  return {
    el,
    width,
    height,
    resize
  };
}
function getRadio(ratio) {
  if (typeof ratio === "string") {
    const [width, height] = ratio.split(":");
    const parsedRadio = Number(width) / Number(height);
    if (!Number.isNaN(parsedRadio)) return parsedRadio;
  }
  return typeof ratio === "number" ? ratio : 16 / 9;
}
const _sfc_main$1J = /* @__PURE__ */ defineComponent({
  __name: "PDFViewer",
  props: {
    page: {},
    noToolbar: { type: Boolean },
    zoom: {},
    src: {},
    title: {},
    width: {},
    height: {},
    ratio: {}
  },
  setup(__props) {
    const props = __props;
    const options = toRefs(props);
    const { el, width, height, resize } = useSize(options);
    onMounted(() => {
      if (!el.value)
        return;
      usePDF(el.value, props.src, {
        page: props.page,
        zoom: props.zoom,
        noToolbar: props.noToolbar
      });
      resize();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "pdf-viewer-wrapper",
        style: normalizeStyle({ width: unref(width), height: unref(height) })
      }, null, 4);
    };
  }
});
const _sfc_main$1I = /* @__PURE__ */ defineComponent({
  __name: "Plot",
  props: {
    trigger: {},
    effect: {}
  },
  setup(__props) {
    const props = __props;
    const matter = usePageFrontmatter();
    const isMobile2 = useMediaQuery("(max-width: 768px)");
    const plot = computed(() => {
      const global2 = {};
      const current = typeof matter.value.plot === "object" ? matter.value.plot : {};
      return {
        trigger: isMobile2.value ? "click" : props.trigger ?? current.trigger ?? global2.trigger ?? "hover",
        effect: props.effect ?? current.effect ?? global2.effect ?? "mask"
      };
    });
    const active2 = ref(false);
    const el = useTemplateRef("el");
    const classes = ref([]);
    onMounted(() => {
      if (!el.value)
        return;
      const classList = el.value.classList;
      if (!classList.contains("hover") && !classList.contains("click")) {
        classes.value.push(plot.value.trigger);
      }
      if (!classList.contains("mask") && !classList.contains("blur")) {
        classes.value.push(plot.value.effect);
      }
    });
    onClickOutside(el, () => {
      if (plot.value.trigger === "click" || el.value?.classList.contains("click"))
        active2.value = false;
    });
    function onClick() {
      if (plot.value.trigger === "click" || el.value?.classList.contains("click"))
        active2.value = !active2.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "el",
        ref: el,
        class: normalizeClass(["vp-plot", [{ active: active2.value }, ...classes.value]]),
        onClick
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$1e = { class: "vp-file-tree-node" };
const _hoisted_2$S = {
  key: 0,
  class: "comment"
};
const _hoisted_3$H = {
  key: 0,
  class: "group"
};
const _sfc_main$1H = /* @__PURE__ */ defineComponent({
  __name: "FileTreeNode",
  props: {
    type: {},
    filename: {},
    level: {},
    diff: {},
    expanded: { type: Boolean },
    focus: { type: Boolean },
    filepath: {}
  },
  setup(__props) {
    const activeFileTreeNode = inject("active-file-tree-node", ref(""));
    const onNodeClick = inject("on-file-tree-node-click", () => {
    });
    const active2 = ref(__props.expanded);
    function nodeClick() {
      if (__props.filename === "…" || __props.filename === "...")
        return;
      onNodeClick(__props.filepath || __props.filename, __props.type);
    }
    function toggle(ev) {
      if (__props.type === "folder") {
        const el = ev.target;
        if (!el.matches(".comment, .comment *")) {
          active2.value = !active2.value;
          nodeClick();
        }
      } else {
        nodeClick();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1e, [
        createBaseVNode("p", {
          class: normalizeClass(["vp-file-tree-info", {
            [__props.type]: true,
            focus: __props.focus,
            expanded: __props.type === "folder" ? active2.value : false,
            active: __props.type === "file" ? unref(activeFileTreeNode) === __props.filepath : false,
            diff: __props.diff,
            add: __props.diff === "add",
            remove: __props.diff === "remove"
          }]),
          style: normalizeStyle({ "--file-tree-level": -__props.level }),
          onClick: toggle
        }, [
          renderSlot(_ctx.$slots, "icon"),
          createBaseVNode("span", {
            class: normalizeClass(["name", [__props.type]])
          }, toDisplayString(__props.filename), 3),
          _ctx.$slots.comment ? (openBlock(), createElementBlock("span", _hoisted_2$S, [
            renderSlot(_ctx.$slots, "comment")
          ])) : createCommentVNode("", true)
        ], 6),
        __props.type === "folder" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3$H, [
          renderSlot(_ctx.$slots, "default")
        ], 512)), [
          [vShow, active2.value]
        ]) : createCommentVNode("", true)
      ]);
    };
  }
});
function useExpand(defaultExpand = true) {
  const expanded = ref(defaultExpand);
  function toggle() {
    expanded.value = !expanded.value;
  }
  return [expanded, toggle];
}
function useResources(el, config2) {
  const resources = computed(() => {
    const conf = toValue(config2);
    if (!conf) return [];
    return [{
      name: "JavaScript",
      items: conf.jsLib?.map((url) => ({
        name: normalizeName(url),
        url
      }))
    }, {
      name: "CSS",
      items: conf.cssLib?.map((url) => ({
        name: normalizeName(url),
        url
      }))
    }].filter((i2) => i2.items?.length);
  });
  function normalizeName(url) {
    return url.slice(url.lastIndexOf("/") + 1);
  }
  const showResources = ref(false);
  function toggleResources() {
    showResources.value = !showResources.value;
  }
  onClickOutside(el, () => {
    showResources.value = false;
  });
  return {
    resources,
    showResources,
    toggleResources
  };
}
function useFence(fence, config2) {
  const data = ref({
    js: "",
    css: "",
    html: "",
    jsType: "",
    cssType: ""
  });
  onMounted(() => {
    if (!fence.value) return;
    const conf = toValue(config2);
    data.value.html = conf?.html ?? "";
    const els = Array.from(fence.value.querySelectorAll('div[class*="language-"]'));
    for (const el of els) {
      const lang = el.className.match(/language-(\w+)/)?.[1] ?? "";
      const content = el.querySelector("pre")?.textContent ?? "";
      if (lang === "js" || lang === "javascript") {
        data.value.js = content;
        data.value.jsType = "js";
      }
      if (lang === "ts" || lang === "typescript") {
        data.value.js = content;
        data.value.jsType = "ts";
      }
      if (lang === "css" || lang === "scss" || lang === "less" || lang === "stylus" || lang === "styl") {
        data.value.css = content;
        data.value.cssType = lang === "styl" ? "stylus" : lang;
      }
    }
  });
  return data;
}
function useNormalDemo(draw, title, config2) {
  const current = getCurrentInstance();
  const id = useId();
  const isDark = computed(() => current?.appContext.config.globalProperties.$isDark.value);
  const height = ref("100px");
  onMounted(() => {
    if (!draw.value) return;
    const iframeDoc = draw.value.contentDocument || draw.value.contentWindow?.document;
    if (!iframeDoc) return;
    const templateId = `VPDemoNormalDraw${id}`;
    useEventListener("message", (event) => {
      const data = parseData(event.data);
      if (data.type === templateId) height.value = `${data.height + 5}px`;
    });
    watch([config2, title], () => {
      iframeDoc.write(createHTMLTemplate(toValue(title) || "Demo", templateId, toValue(config2)));
    }, { immediate: true });
    watch(isDark, () => {
      iframeDoc.documentElement.dataset.theme = isDark.value ? "dark" : "light";
    }, { immediate: true });
  });
  return {
    id,
    height
  };
}
function createHTMLTemplate(title, id, config2) {
  const { cssLib = [], jsLib = [], html, css, script } = config2 || {};
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${title}</title>
    ${cssLib.map((url) => `<link rel="stylesheet" href="${url}">`).join("")}${jsLib.map((url) => `<script src="${url}"><\/script>`).join("")}
    <style>${css}</style>
  </head>
  <body>
    ${html}
    <script>;(function(){${script}})();<\/script>
    <script>;(function(){
  const height = Math.ceil(document.documentElement.getBoundingClientRect().height)
  window.parent?.postMessage({ type: '${id}', height }, '*')
  if (typeof window.ResizeObserver === 'undefined')
    return
  const resizeObserver = new ResizeObserver(entries => {
    const height = Math.ceil(document.documentElement.getBoundingClientRect().height)
    window.parent?.postMessage({ type: '${id}', height }, '*')
  })
  resizeObserver.observe(document.documentElement)
})();<\/script>
  </body>
</html>`;
}
function parseData(data) {
  try {
    if (typeof data === "string") return JSON.parse(data);
    else if (isPlainObject(data)) return data;
    return {};
  } catch {
    return {};
  }
}
const _hoisted_1$1d = {
  ref: "draw-vue",
  class: "demo-draw-vue"
};
const _hoisted_2$R = {
  key: 0,
  class: "demo-info"
};
const _hoisted_3$G = {
  key: 0,
  class: "title"
};
const _hoisted_4$x = {
  key: 1,
  class: "desc"
};
const _hoisted_5$p = { class: "demo-ctrl" };
const _hoisted_6$h = { class: "demo-code" };
const _sfc_main$1G = /* @__PURE__ */ defineComponent({
  __name: "VPDemoBasic",
  props: {
    type: {},
    title: {},
    desc: {},
    expanded: { type: Boolean }
  },
  setup(__props) {
    const [showCode, toggleCode] = useExpand(__props.expanded);
    const draw = useTemplateRef("draw");
    const vueDraw = useTemplateRef("draw-vue");
    function resizeAndPositionVueDraw() {
      if (!draw.value || !vueDraw.value)
        return;
      const rect = draw.value.getBoundingClientRect();
      const { scrollLeft, scrollTop } = document.documentElement;
      vueDraw.value.style.width = `${draw.value.offsetWidth - 48}px`;
      vueDraw.value.style.top = `${rect.top + scrollTop}px`;
      vueDraw.value.style.left = `${rect.x + scrollLeft}px`;
    }
    if (__props.type === "vue" && true) {
      watch([draw, vueDraw], () => {
        resizeAndPositionVueDraw();
        if (draw.value && vueDraw.value) {
          requestAnimationFrame(() => {
            draw.value.style.height = `${vueDraw.value.offsetHeight}px`;
          });
        }
      }, { immediate: true });
      useResizeObserver(draw, resizeAndPositionVueDraw);
      useResizeObserver(() => document.body, resizeAndPositionVueDraw);
      onContentUpdated(resizeAndPositionVueDraw);
      useResizeObserver(vueDraw, () => {
        if (draw.value && vueDraw.value)
          draw.value.style.height = `${vueDraw.value.offsetHeight}px`;
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-demo-wrapper", { type: __props.type }])
      }, [
        createBaseVNode("div", {
          ref_key: "draw",
          ref: draw,
          class: "demo-draw"
        }, [
          __props.type !== "vue" ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(unref(ClientOnly), { key: 1 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                createBaseVNode("div", _hoisted_1$1d, [
                  renderSlot(_ctx.$slots, "default")
                ], 512)
              ]))
            ]),
            _: 3
          }))
        ], 512),
        __props.title || __props.desc ? (openBlock(), createElementBlock("div", _hoisted_2$R, [
          __props.title ? (openBlock(), createElementBlock("p", _hoisted_3$G, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
          __props.desc ? (openBlock(), createElementBlock("p", _hoisted_4$x, toDisplayString(__props.desc), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_5$p, [
          createBaseVNode("button", {
            type: "button",
            "aria-label": "Toggle Code",
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(toggleCode) && unref(toggleCode)(...args))
          }, [..._cache[1] || (_cache[1] = [
            createBaseVNode("span", { class: "vpi-demo-code" }, null, -1)
          ])])
        ]),
        createVNode(unref(FadeInExpandTransition), null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_6$h, [
              renderSlot(_ctx.$slots, "code")
            ], 512), [
              [vShow, unref(showCode)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
const _hoisted_1$1c = { class: "vp-demo-wrapper normal" };
const _hoisted_2$Q = { class: "demo-draw" };
const _hoisted_3$F = ["id", "title"];
const _hoisted_4$w = {
  key: 0,
  class: "demo-info"
};
const _hoisted_5$o = {
  key: 0,
  class: "title"
};
const _hoisted_6$g = {
  key: 1,
  class: "desc"
};
const _hoisted_7$d = { class: "demo-ctrl" };
const _hoisted_8$b = { class: "extra" };
const _hoisted_9$6 = {
  action: "https://codepen.io/pen/define",
  method: "POST",
  target: "_blank",
  enctype: "application/x-www-form-urlencoded;charset=utf-8"
};
const _hoisted_10$4 = ["value"];
const _hoisted_11$3 = {
  action: "https://jsfiddle.net/api/post/library/pure/",
  method: "POST",
  target: "_blank",
  enctype: "application/x-www-form-urlencoded;charset=UTF-8",
  "accept-charset": "UTF-8"
};
const _hoisted_12$1 = ["value"];
const _hoisted_13$1 = ["value"];
const _hoisted_14$1 = ["value"];
const _hoisted_15$1 = ["value"];
const _hoisted_16$1 = ["value"];
const _hoisted_17$1 = ["value"];
const _hoisted_18$1 = ["value"];
const _hoisted_19 = ["value"];
const _hoisted_20 = {
  key: 0,
  class: "demo-resources"
};
const _hoisted_21 = { class: "demo-resources-container" };
const _hoisted_22 = ["href"];
const _hoisted_23 = {
  ref: "fence",
  class: "demo-code"
};
const _sfc_main$1F = /* @__PURE__ */ defineComponent({
  __name: "VPDemoNormal",
  props: {
    title: {},
    desc: {},
    expanded: { type: Boolean },
    config: {}
  },
  setup(__props) {
    const [showCode, toggleCode] = useExpand(__props.expanded);
    const { resources, showResources, toggleResources } = useResources(
      useTemplateRef("resourcesEl"),
      () => __props.config
    );
    const { id, height } = useNormalDemo(
      useTemplateRef("draw"),
      () => __props.title,
      () => __props.config
    );
    const data = useFence(
      useTemplateRef("fence"),
      () => __props.config
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1c, [
        createBaseVNode("div", _hoisted_2$Q, [
          createBaseVNode("iframe", {
            id: `VPDemoNormalDraw${unref(id)}`,
            ref: "draw",
            title: __props.title || "Demo",
            class: "draw-iframe",
            allow: "accelerometer *; bluetooth *; camera *; encrypted-media *; display-capture *; geolocation *; gyroscope *; microphone *; midi *; clipboard-read *; clipboard-write *; web-share *; serial *; xr-spatial-tracking *",
            allowfullscreen: "true",
            allowpaymentrequest: "true",
            allowtransparency: "true",
            sandbox: "allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation",
            style: normalizeStyle({ height: unref(height) })
          }, null, 12, _hoisted_3$F)
        ]),
        __props.title || __props.desc ? (openBlock(), createElementBlock("div", _hoisted_4$w, [
          __props.title ? (openBlock(), createElementBlock("p", _hoisted_5$o, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
          __props.desc ? (openBlock(), createElementBlock("p", _hoisted_6$g, toDisplayString(__props.desc), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7$d, [
          createBaseVNode("div", _hoisted_8$b, [
            createBaseVNode("form", _hoisted_9$6, [
              createBaseVNode("input", {
                type: "hidden",
                name: "data",
                value: JSON.stringify({
                  title: __props.title || "Demo",
                  description: __props.desc || "",
                  html: unref(data).html,
                  css: unref(data).css,
                  js: unref(data).js,
                  js_pre_processor: unref(data).jsType === "ts" ? "typescript" : "none",
                  css_pre_processor: unref(data).cssType,
                  css_external: __props.config?.cssLib?.join(";"),
                  js_external: __props.config?.jsLib?.join(";")
                })
              }, null, 8, _hoisted_10$4),
              _cache[2] || (_cache[2] = createBaseVNode("button", {
                type: "submit",
                title: "CodePen",
                "aria-label": "CodePen"
              }, [
                createBaseVNode("span", { class: "vpi-demo-codepen" })
              ], -1))
            ]),
            createBaseVNode("form", _hoisted_11$3, [
              _cache[3] || (_cache[3] = createBaseVNode("button", {
                type: "submit",
                title: "jsFiddle",
                "aria-label": "jsFiddle"
              }, [
                createBaseVNode("span", { class: "vpi-demo-jsfiddle bg" })
              ], -1)),
              _cache[4] || (_cache[4] = createBaseVNode("input", {
                type: "hidden",
                name: "wrap",
                value: "b"
              }, null, -1)),
              createBaseVNode("input", {
                type: "hidden",
                name: "html",
                value: unref(data).html
              }, null, 8, _hoisted_12$1),
              createBaseVNode("input", {
                type: "hidden",
                name: "js",
                value: unref(data).js
              }, null, 8, _hoisted_13$1),
              createBaseVNode("input", {
                type: "hidden",
                name: "css",
                value: unref(data).cssType === "scss" || unref(data).cssType === "css" ? unref(data).css : __props.config?.css || ""
              }, null, 8, _hoisted_14$1),
              createBaseVNode("input", {
                type: "hidden",
                name: "panel_css",
                value: unref(data).cssType === "scss" ? 1 : 0
              }, null, 8, _hoisted_15$1),
              createBaseVNode("input", {
                type: "hidden",
                name: "panel_js",
                value: unref(data).jsType === "ts" ? 4 : 0
              }, null, 8, _hoisted_16$1),
              createBaseVNode("input", {
                type: "hidden",
                name: "title",
                value: __props.title || "Demo"
              }, null, 8, _hoisted_17$1),
              createBaseVNode("input", {
                type: "hidden",
                name: "description",
                value: __props.desc || ""
              }, null, 8, _hoisted_18$1),
              createBaseVNode("input", {
                type: "hidden",
                name: "resources",
                value: [...__props.config?.jsLib || [], ...__props.config?.cssLib || []].join(",")
              }, null, 8, _hoisted_19)
            ])
          ]),
          unref(resources).length ? (openBlock(), createElementBlock("div", _hoisted_20, [
            createBaseVNode("span", {
              ref: "resourcesEl",
              class: "vpi-demo-resources",
              title: "Resources",
              "aria-label": "Resources",
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => unref(toggleResources) && unref(toggleResources)(...args))
            }, null, 512),
            createVNode(Transition, { name: "fade-in" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("div", _hoisted_21, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(resources), ({ name, items: items2 }) => {
                    return openBlock(), createElementBlock("div", {
                      key: name,
                      class: "demo-resources-list"
                    }, [
                      createBaseVNode("p", null, toDisplayString(name), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(items2, (item) => {
                        return openBlock(), createElementBlock("ul", {
                          key: item.url
                        }, [
                          createBaseVNode("li", null, [
                            createBaseVNode("a", {
                              href: item.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "no-icon",
                              "aria-label": "{{ item.name }}"
                            }, toDisplayString(item.name), 9, _hoisted_22)
                          ])
                        ]);
                      }), 128))
                    ]);
                  }), 128))
                ], 512), [
                  [vShow, unref(showResources)]
                ])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          createBaseVNode("button", {
            type: "button",
            "aria-label": "Toggle Code",
            onClick: _cache[1] || (_cache[1] = //@ts-ignore
            (...args) => unref(toggleCode) && unref(toggleCode)(...args))
          }, [..._cache[5] || (_cache[5] = [
            createBaseVNode("span", { class: "vpi-demo-code" }, null, -1)
          ])])
        ]),
        createVNode(unref(FadeInExpandTransition), null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_23, [
              renderSlot(_ctx.$slots, "default")
            ], 512), [
              [vShow, unref(showCode)]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
const MARK_MODE_ATTR = "data-mark-mode";
function setupMarkHighlight(mode) {
  if (typeof window === "undefined" || false) return;
  const root = document.documentElement;
  {
    root.removeAttribute(MARK_MODE_ATTR);
    return;
  }
}
const config$2 = defineClientConfig({
  enhance({ router, app }) {
    app.component("Tabs", _sfc_main$1L);
    app.component("CodeTabs", _sfc_main$1K);
    app.component("PDFViewer", _sfc_main$1J);
    app.component("Plot", _sfc_main$1I);
    app.component("FileTreeNode", _sfc_main$1H);
    app.component("VPDemoBasic", _sfc_main$1G);
    app.component("VPDemoNormal", _sfc_main$1F);
  },
  setup() {
    setupMarkHighlight();
  }
});
const clientConfig3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$2
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const addClass = (element, name) => {
  element.classList.add(name);
};
const removeClass = (element, name) => {
  element.classList.remove(name);
};
const removeElement = (element) => {
  element?.parentNode?.removeChild(element);
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPercent = (n2) => (-1 + n2) * 100;
const queue = /* @__PURE__ */ (() => {
  const pending = [];
  const nextStep = () => {
    const fn = pending.shift();
    if (fn) {
      fn(nextStep);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1)
      nextStep();
  };
})();
const camelCase = (content) => content.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (_2, letter) => letter.toUpperCase());
const addStyle = /* @__PURE__ */ (() => {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  const getVendorProp = (name) => {
    const { style } = document.body;
    if (name in style)
      return name;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let index = cssPrefixes.length;
    while (index--) {
      const vendorName = `${cssPrefixes[index]}${capName}`;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  };
  const getStyleProp = (name) => {
    const finalizedName = camelCase(name);
    return cssProps[finalizedName] ??= getVendorProp(finalizedName);
  };
  const applyCss = (element, prop, value) => {
    element.style[getStyleProp(prop)] = value;
  };
  return (element, properties) => {
    for (const prop in properties) {
      const value = properties[prop];
      if (Object.hasOwn(properties, prop) && isDef(value))
        applyCss(element, prop, value);
    }
  };
})();
const SETTINGS = {
  minimum: 0.08,
  easing: "ease",
  speed: 200,
  trickleRate: 0.02,
  trickleSpeed: 800,
  barSelector: '[role="bar"]',
  parent: "body",
  template: '<div class="bar" role="bar"></div>'
};
const nprogress = {
  percent: null,
  isRendered: () => Boolean(document.getElementById("nprogress")),
  set: (progress) => {
    const { speed, easing } = SETTINGS;
    const inProgress = nprogress.isStarted();
    const newPercent = clamp(progress, SETTINGS.minimum, 1);
    nprogress.percent = newPercent === 1 ? null : newPercent;
    const nprogressElement = nprogress.render(!inProgress);
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    nprogressElement.offsetWidth;
    queue((next) => {
      addStyle(barElement, {
        transform: `translate3d(${toBarPercent(newPercent)}%,0,0)`,
        transition: `all ${speed}ms ${easing}`
      });
      if (newPercent === 1) {
        addStyle(nprogressElement, {
          transition: "none",
          opacity: "1"
        });
        nprogressElement.offsetWidth;
        setTimeout(() => {
          addStyle(nprogressElement, {
            transition: `all ${speed}ms linear`,
            opacity: "0"
          });
          setTimeout(() => {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => {
          next();
        }, speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.percent === "number",
  start: () => {
    if (!nprogress.percent)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.percent)
          return;
        nprogress.trickle();
        work();
      }, SETTINGS.trickleSpeed);
    };
    work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.percent)
      return nprogress;
    return nprogress.increase(0.3 + 0.5 * Math.random()).set(1);
  },
  increase: (amount) => {
    let { percent } = nprogress;
    if (!percent) {
      return nprogress.start();
    }
    percent = clamp(percent + (typeof amount === "number" ? amount : (1 - percent) * clamp(Math.random() * percent, 0.1, 0.95)), 0, 0.994);
    return nprogress.set(percent);
  },
  trickle: () => nprogress.increase(Math.random() * SETTINGS.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const nprogressElement = document.createElement("div");
    nprogressElement.id = "nprogress";
    nprogressElement.innerHTML = SETTINGS.template;
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    const parentElement = document.querySelector(SETTINGS.parent);
    const percent = fromStart ? "-100" : toBarPercent(nprogress.percent ?? 0);
    addStyle(barElement, {
      transition: "all 0 linear",
      transform: `translate3d(${percent}%,0,0)`
    });
    if (parentElement) {
      if (parentElement !== document.body) {
        addClass(parentElement, "nprogress-custom-parent");
      }
      parentElement.appendChild(nprogressElement);
    }
    return nprogressElement;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(SETTINGS.parent), "nprogress-custom-parent");
    removeElement(document.getElementById("nprogress"));
  }
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const config$1 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const clientConfig5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$1
}, Symbol.toStringTag, { value: "Module" }));
const p$3 = ref({}), b$1 = Symbol(""), x$1 = () => inject(b$1), U$1 = (e) => {
  e.provide(b$1, p$3);
}, f = (e) => new Promise((o, s2) => {
  e.complete ? o({ type: "image", element: e, src: e.src, width: e.naturalWidth, height: e.naturalHeight, alt: e.alt, msrc: e.src }) : (e.onload = () => {
    o(f(e));
  }, e.onerror = () => {
    s2();
  });
}), T$1 = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>', E$1 = (e, { download: o = true, fullscreen: s2 = true } = {}) => {
  e.on("uiRegister", () => {
    if (e.ui.registerElement({ name: "bulletsIndicator", className: "photo-swipe-bullets-indicator", appendTo: "wrapper", onInit: (t2) => {
      const r2 = [];
      let u2 = -1;
      for (let d2 = 0; d2 < e.getNumItems(); d2++) {
        const i2 = document.createElement("div");
        i2.className = "photo-swipe-bullet", i2.onclick = (c) => {
          e.goTo(r2.indexOf(c.target));
        }, r2.push(i2), t2.appendChild(i2);
      }
      e.on("change", () => {
        u2 >= 0 && r2[u2].classList.remove("active"), r2[e.currIndex].classList.add("active"), u2 = e.currIndex;
      });
    } }), s2) {
      const { isSupported: t2, toggle: r2 } = useFullscreen();
      t2.value && e.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
        r2();
      } });
    }
    o && e.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (t2) => {
      t2.setAttribute("download", ""), t2.setAttribute("target", "_blank"), t2.setAttribute("rel", "noopener"), e.on("change", () => {
        t2.setAttribute("href", e.currSlide.data.src);
      });
    } });
  });
}, Z = ({ selector: e, locales: o, download: s2 = true, fullscreen: t2 = true, scrollToClose: r2 = true }) => {
  const u2 = x$1(), d2 = useLocale$1(o), i2 = useFrontmatter(), c = computed(() => {
    const { photoSwipe: a2 } = i2.value;
    return a2 === false ? null : isString(a2) ? a2 : isArray(e) ? e.join(", ") : e;
  }), g = computed(() => ({ ...u2.value, ...d2.value, download: s2, fullscreen: t2, scrollToClose: r2 }));
  let h2 = null, m2 = 0, n2 = null;
  useEventListener("click", async (a2) => {
    const I = a2.target;
    if (!c.value || !h2 || !I.matches(c.value)) return;
    m2 !== 0 && n2.destroy();
    const S2 = Date.now(), A2 = await h2, v2 = Array.from(document.querySelectorAll(c.value)), y2 = v2.map((l2) => ({ html: T$1, element: l2, msrc: l2.src })), N2 = v2.findIndex((l2) => l2 === I);
    n2 = new A2({ preloaderDelay: 0, showHideAnimationType: "zoom", ...g.value, dataSource: y2, index: N2, ...r2 ? { closeOnVerticalDrag: true, wheelToZoom: false } : {} }), m2 = S2, E$1(n2, { download: s2, fullscreen: t2 }), n2.init(), n2.on("destroy", () => {
      n2 = null, m2 = 0;
    }), v2.map((l2, _2) => f(l2).then((P2) => {
      m2 === S2 && (y2.splice(_2, 1, P2), n2?.refreshSlideContent(_2));
    }));
  }, { passive: true }), useEventListener("wheel", () => {
    g.value.scrollToClose && n2?.close();
  }), onMounted(() => {
    ("requestIdleCallback" in window ? window.requestIdleCallback : setTimeout)(() => {
      h2 = __vitePreload(async () => {
        const { default: a2 } = await import("./photoswipe.esm-BMquKub7.js");
        return { default: a2 };
      }, true ? [] : void 0).then(({ default: a2 }) => a2);
    });
  }), onUnmounted(() => {
    n2?.destroy();
  });
};
var define_PS_LOCALES_default = { "/": { closeTitle: "关闭", downloadTitle: "下载图片", fullscreenTitle: "切换全屏", zoomTitle: "缩放", arrowPrevTitle: "上一个 (左箭头)", arrowNextTitle: "下一个 (右箭头)" } };
const t = ".vp-doc :not(a) > img:not([no-view],.no-view,.ignore)", r = define_PS_LOCALES_default, p$2 = true, S$2 = true, l$2 = true;
var n$2 = defineClientConfig({ enhance: ({ app: _2 }) => {
  U$1(_2);
}, setup: () => {
  Z({ selector: t, locales: r, download: p$2, fullscreen: S$2, scrollToClose: l$2 });
} });
const clientConfig6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n$2
}, Symbol.toStringTag, { value: "Module" }));
var define_COMMENT_OPTIONS_default = { provider: "Twikoo", comment: true, envId: "https://soda-offical.netlify.app/.netlify/functions/twikoo" };
const s = define_COMMENT_OPTIONS_default, n$1 = ref(s), m$1 = Symbol(""), i$2 = () => inject(m$1), k$1 = i$2, S$1 = (e) => {
  e.provide(m$1, readonly(n$1));
};
var h = /* @__PURE__ */ defineComponent({ name: "TwikooComment", props: { identifier: { type: String, required: true } }, setup(i2) {
  const e = k$1(), a2 = useLang(), t2 = ref(false), n2 = computed(() => !!e.value.envId), r2 = async () => {
    const [{ init: m2 }] = await Promise.all([__vitePreload(() => import("./twikoo.all.min-BH-yRehL.js").then((n3) => n3.t), true ? [] : void 0), wait(e.value.delay ?? 800)]);
    t2.value = true, await nextTick(), await m2({ lang: a2.value === "zh-CN" ? "zh-CN" : "en", path: i2.identifier, ...e.value, el: "#twikoo-comment" });
  };
  return onMounted(() => {
    watchImmediate(() => [i2.identifier, e.value], () => r2(), { flush: "post" });
  }), () => n2.value ? h$1("div", { id: "comment", class: "twikoo-wrapper" }, [t2.value ? null : h$1(LoadingIcon), h$1("div", { id: "twikoo-comment" })]) : null;
} });
var l$1 = /* @__PURE__ */ defineComponent({ name: "CommentService", props: { identifier: String, darkmode: Boolean }, setup(e) {
  const { frontmatter: o, page: m2 } = useData$1(), t2 = i$2(), n2 = computed(() => o.value.comment ?? t2.value.comment ?? true);
  return () => h$1(h, { class: "vp-comment", "vp-comment": "", identifier: e.identifier ?? o.value.commentID ?? m2.value.path, darkmode: e.darkmode, style: { display: n2.value ? "block" : "none" } });
} }), u$1 = defineClientConfig({ enhance: ({ app: e }) => {
  S$1(e), e.component("CommentService", l$1);
} });
const clientConfig7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: u$1
}, Symbol.toStringTag, { value: "Module" }));
const searchIndex = { "/": () => __vitePreload(() => import("./searchBox-default-V_8Sm6Sq.js"), true ? [] : void 0) };
const defaultLocales = { "/": {
  placeholder: "Search",
  resetButtonTitle: "Reset search",
  backButtonTitle: "Close search",
  noResultsText: "No results for",
  footer: {
    selectText: "to select",
    selectKeyAriaLabel: "enter",
    navigateText: "to navigate",
    navigateUpKeyAriaLabel: "up arrow",
    navigateDownKeyAriaLabel: "down arrow",
    closeText: "to close",
    closeKeyAriaLabel: "escape"
  }
} };
function useLocale(locales2) {
  const localesRef = toRef$1(locales2);
  const routeLocale = useRouteLocale();
  return computed(() => localesRef.value[routeLocale.value] ?? defaultLocales[routeLocale.value] ?? defaultLocales["/"]);
}
const searchIndexData = shallowRef(searchIndex);
function useSearchIndex() {
  return searchIndexData;
}
const _hoisted_1$1b = ["aria-label"];
const _hoisted_2$P = { class: "mini-search-button-container" };
const _hoisted_3$E = { class: "mini-search-button-placeholder" };
const _sfc_main$1E = /* @__PURE__ */ defineComponent({
  __name: "SearchButton",
  props: {
    locales: {}
  },
  setup(__props) {
    const locale = useLocale(toRef$1(() => __props.locales));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "mini-search mini-search-button",
        "aria-label": unref(locale).placeholder
      }, [
        createBaseVNode("span", _hoisted_2$P, [
          _cache[0] || (_cache[0] = createBaseVNode("span", {
            class: "mini-search-search-icon vpi-mini-search",
            "aria-label": "search icon"
          }, null, -1)),
          createBaseVNode("span", _hoisted_3$E, toDisplayString(unref(locale).placeholder), 1)
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "mini-search-button-keys" }, [
          createBaseVNode("kbd", { class: "mini-search-button-key" }),
          createBaseVNode("kbd", { class: "mini-search-button-key" }, "K")
        ], -1))
      ], 8, _hoisted_1$1b);
    };
  }
});
const _hoisted_1$1a = { class: "search-wrapper" };
const _hoisted_2$O = { id: "local-search" };
const _sfc_main$1D = /* @__PURE__ */ defineComponent({
  __name: "Search",
  props: {
    locales: {},
    options: {}
  },
  setup(__props) {
    const SearchBox = /* @__PURE__ */ defineAsyncComponent(() => __vitePreload(() => import("./SearchBox-7GJYu95U.js"), true ? [] : void 0));
    const showSearch = ref(false);
    onKeyStroke("k", (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        showSearch.value = true;
      }
    });
    onKeyStroke("/", (event) => {
      if (!isEditingContent(event)) {
        event.preventDefault();
        showSearch.value = true;
      }
    });
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1a, [
        showSearch.value ? (openBlock(), createBlock(unref(SearchBox), {
          key: 0,
          locales: __props.locales,
          options: __props.options,
          onClose: _cache[0] || (_cache[0] = ($event) => showSearch.value = false)
        }, null, 8, ["locales", "options"])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2$O, [
          createVNode(_sfc_main$1E, {
            locales: __props.locales,
            onClick: _cache[1] || (_cache[1] = ($event) => showSearch.value = true)
          }, null, 8, ["locales"])
        ])
      ]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main$1D, [["__scopeId", "data-v-97535d1e"]]);
var define_SEARCH_LOCALES_default = { "/": { placeholder: "搜索文档", resetButtonTitle: "重置搜索", backButtonTitle: "关闭", noResultsText: "无搜索结果：", footer: { selectText: "选择", selectKeyAriaLabel: "输入", navigateText: "切换", navigateUpKeyAriaLabel: "向上", navigateDownKeyAriaLabel: "向下", closeText: "关闭", closeKeyAriaLabel: "退出" } } };
var define_SEARCH_OPTIONS_default = {};
const locales$1 = define_SEARCH_LOCALES_default;
const searchOptions = define_SEARCH_OPTIONS_default;
var config_default$1 = defineClientConfig({ enhance({ app }) {
  app.component("SearchBox", (props) => h$1(Search, {
    locales: locales$1,
    options: searchOptions,
    ...props
  }));
} });
const clientConfig8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config_default$1
}, Symbol.toStringTag, { value: "Module" }));
var define_GIT_OPTIONS_default = { provider: "github", pattern: { commit: ":repo/commit/:hash", issue: ":repo/issues/:issue", tag: ":repo/releases/tag/:tag" } };
const gitOptions = typeof define_GIT_OPTIONS_default === "undefined" ? {} : define_GIT_OPTIONS_default;
const resolveRepoLink = (link, provider) => {
  if (!link || isLinkHttp(link))
    return link;
  if (provider === "github")
    return `https://github.com/${link}`;
  if (provider === "gitee")
    return `https://gitee.com/${link}`;
  return link;
};
const RE_ISSUE = /#(\d+)/g;
const useChangelog = (enabled = true) => {
  const { frontmatter, lang, page } = useData$1();
  const { pattern = {}, provider } = gitOptions;
  const repo = resolveRepoLink(gitOptions.repo, provider);
  return computed(() => {
    if (frontmatter.value.changelog === false || !toValue(enabled))
      return [];
    const formatter = new Intl.DateTimeFormat(lang.value, {
      dateStyle: "short"
    });
    return (page.value.git?.changelog ?? []).map((item) => {
      const res = {
        date: formatter.format(item.time),
        ...item
      };
      if (pattern.issue && repo) {
        res.message = res.message.replace(RE_ISSUE, (matched, issue) => {
          const url = pattern.issue.replace(":issue", issue).replace(":repo", repo);
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${matched}</a>`;
        });
      }
      if (pattern.commit && repo) {
        res.commitUrl = pattern.commit.replace(":hash", res.hash).replace(":repo", repo);
      }
      if (pattern.tag && repo && res.tag)
        res.tagUrl = pattern.tag.replace(":tag", res.tag).replace(":repo", repo);
      return res;
    });
  });
};
const useContributors$1 = (enabled = true) => {
  const { frontmatter, page } = useData$1();
  return computed(() => {
    if (frontmatter.value.contributors === false || !toValue(enabled))
      return [];
    return page.value.git.contributors ?? [];
  });
};
var define_GIT_LOCALES_default = { "/": { contributors: "贡献者", changelog: "更新日志", timeOn: "于", viewChangelog: "查看所有更新日志", latestUpdateAt: "最近更新" } };
const locales = typeof define_GIT_LOCALES_default === "undefined" ? {} : define_GIT_LOCALES_default;
const useGitLocale = () => useLocale$1(locales);
const useLastUpdated$1 = (enabled = true) => {
  const { lang, page } = useData$1();
  const locale = useGitLocale();
  return computed(() => {
    if (!toValue(enabled))
      return null;
    const timeStamp = page.value.git?.updatedTime ?? page.value.git?.changelog?.[0].time;
    if (!timeStamp)
      return null;
    const date = new Date(timeStamp);
    const text = new Intl.DateTimeFormat(lang.value, {
      dateStyle: "short",
      timeStyle: "short"
    }).format(timeStamp);
    return {
      date,
      text,
      iso: date.toISOString(),
      locale: locale.value.latestUpdateAt
    };
  });
};
const VPHeader = ({ level = 2, text, anchor }) => h$1(`h${level || 2}`, { id: anchor, tabindex: "-1" }, h$1("a", { href: `#${anchor}`, class: "header-anchor" }, h$1("span", text)));
const GitContributor = ({ name, url, avatar }) => h$1(url ? "a" : "span", {
  href: url,
  target: "_blank",
  rel: "noreferrer",
  class: "vp-contributor"
}, [
  avatar ? h$1("img", { src: avatar, alt: "", class: "vp-contributor-avatar" }) : null,
  h$1("span", { class: "vp-contributor-name" }, name)
]);
const GitContributors = /* @__PURE__ */ defineComponent({
  name: "GitContributors",
  props: {
    /** Contributor title */
    title: String,
    /** header level of contributor title */
    headerLevel: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const contributors = useContributors$1();
    const locale = useGitLocale();
    return () => contributors.value.length ? [
      h$1(VPHeader, {
        level: props.headerLevel,
        anchor: "doc-contributors",
        text: props.title || locale.value.contributors
      }),
      h$1("div", { class: "vp-contributors" }, contributors.value.map((item) => h$1(GitContributor, item)))
    ] : null;
  }
});
const GitChangelog = /* @__PURE__ */ defineComponent({
  name: "GitChangelog",
  props: {
    /** Title of changelog */
    title: String,
    /** header level of changelog */
    headerLevel: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const changelog = useChangelog();
    const locale = useGitLocale();
    const lastUpdated = useLastUpdated$1();
    const [active2, toggleActive] = /* @__PURE__ */ useToggle();
    const ChangelogHeader = () => h$1("div", { class: "vp-changelog-header", onClick: () => toggleActive() }, [
      h$1("div", { class: "vp-latest-updated" }, [
        h$1("span", { class: "vp-changelog-icon" }),
        h$1("span", { "data-allow-mismatch": "" }, lastUpdated.value.text)
      ]),
      h$1("div", [
        h$1("span", { class: "vp-changelog-menu-icon" }),
        h$1("span", locale.value.viewChangelog)
      ])
    ]);
    const ReleaseTag = ({ item }) => h$1("li", { class: "vp-changelog-item-tag" }, h$1("div", [
      h$1("a", { class: "vp-changelog-tag" }, h$1("code", item.tag)),
      h$1("span", { "class": "vp-changelog-date", "data-allow-mismatch": "" }, [
        locale.value.timeOn,
        " ",
        h$1("time", { datetime: new Date(item.time).toISOString() }, item.date)
      ])
    ]));
    const Commit = ({ item }) => h$1("li", { class: "vp-changelog-item-commit" }, [
      h$1(item.commitUrl ? "a" : "span", {
        class: "vp-changelog-hash",
        href: item.commitUrl,
        target: "_blank",
        rel: "noreferrer"
      }, [h$1("code", item.hash.slice(0, 5))]),
      h$1("span", { class: "vp-changelog-divider" }, "-"),
      h$1("span", { class: "vp-changelog-message", innerHTML: item.message }),
      h$1("span", { "class": "vp-changelog-date", "data-allow-mismatch": "" }, [
        locale.value.timeOn || "on",
        " ",
        h$1("time", { datetime: new Date(item.time).toISOString() }, item.date)
      ])
    ]);
    return () => changelog.value.length ? [
      h$1(VPHeader, {
        level: props.headerLevel,
        anchor: "doc-changelog",
        text: props.title || locale.value.changelog
      }),
      h$1("div", { class: ["vp-changelog-wrapper", { active: active2.value }] }, [
        h$1(ChangelogHeader),
        h$1("ul", { class: "vp-changelog-list" }, [
          changelog.value.map((item) => item.tag ? h$1(ReleaseTag, { item, key: item.tag }) : h$1(Commit, { item, key: item.hash }))
        ])
      ])
    ] : null;
  }
});
const config = {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  }
};
const clientConfig9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config
}, Symbol.toStringTag, { value: "Module" }));
function resolveRepoType(repo) {
  if (!isLinkHttp(repo) || /github\.com/.test(repo)) return "GitHub";
  if (/bitbucket\.org/.test(repo)) return "Bitbucket";
  if (/gitlab\.com/.test(repo)) return "GitLab";
  if (/gitee\.com/.test(repo)) return "Gitee";
  return null;
}
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
function resolveEditLinkPatterns({ docsRepo, editLinkPattern }) {
  if (editLinkPattern) return editLinkPattern;
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) return editLinkPatterns[repoType];
  return null;
}
function resolveEditLink({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) {
  if (!filePathRelative) return null;
  const pattern = resolveEditLinkPatterns({
    docsRepo,
    editLinkPattern
  });
  if (!pattern) return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
}
function resolveNavLink(link) {
  const { notFound, meta, path } = resolveRoute(link);
  return notFound ? {
    text: path,
    link: path
  } : {
    text: meta.title || normalizeTitleWithPath(path),
    link: path,
    icon: meta.icon,
    badge: meta.badge
  };
}
function normalizeTitleWithPath(path) {
  path = path.replace(/index\.html?$/i, "").replace(/\.html?$/i, "").replace(/\/$/, "");
  return decodeURIComponent(path.slice(path.lastIndexOf("/") + 1));
}
function normalizeLink(base = "", link = "") {
  return isLinkAbsolute(link) || isLinkWithProtocol(link) ? link : ensureLeadingSlash(`${base}/${link}`.replace(/\/+/g, "/"));
}
function normalizePrefix(base, link = "") {
  return ensureEndingSlash(normalizeLink(base, link));
}
const HASH_RE = /#.*$/;
const EXT_RE = /(index|README)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) return false;
  currentPath = normalize(`/${currentPath.replace(/^\//, "")}`);
  if (asRegex) return new RegExp(matchPath).test(currentPath);
  if (normalize(matchPath) !== currentPath) return false;
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) return (inBrowser ? location.hash : "") === hashMatch[0];
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function numToUnit(value) {
  if (typeof value === "undefined") return "";
  if (String(Number(value)) === String(value)) return `${value}px`;
  return value;
}
const gradient = [
  "linear-gradient",
  "radial-gradient",
  "repeating-linear-gradient",
  "repeating-radial-gradient",
  "conic-gradient"
];
function isGradient(value) {
  return gradient.some((v2) => value.startsWith(v2));
}
const collections = { "/": [{ "type": "post", "dir": "blog", "title": "博客", "postList": true, "tags": true, "archives": true, "categories": true, "postCover": "left", "pagination": 10, "link": "/blog/", "linkPrefix": "/blog/", "tagsLink": "/blog/tags/", "archivesLink": "/blog/archives/", "categoriesLink": "/blog/categories/" }, { "dir": "circuit", "type": "doc", "title": "电路", "linkPrefix": "/circuit/" }, { "dir": "integral", "type": "doc", "title": "数学分析", "linkPrefix": "/integral/" }, { "dir": "algebra", "type": "doc", "title": "代数学基础", "linkPrefix": "/algebra/" }, { "dir": "probstathsy", "type": "doc", "title": "概率统计", "linkPrefix": "/probstathsy/" }, { "dir": "physics", "type": "doc", "title": "基础物理", "linkPrefix": "/physics/" }, { "dir": "CS", "type": "doc", "title": "计算机科学", "linkPrefix": "/CS/" }, { "dir": "complex", "type": "doc", "title": "复变函数", "linkPrefix": "/complex/" }, { "dir": "computational-physics", "type": "doc", "title": "计算物理导论", "linkPrefix": "/computational-physics/" }, { "dir": "cybernetics", "type": "doc", "title": "控制理论", "linkPrefix": "/cybernetics/" }, { "dir": "optics", "type": "doc", "title": "光学", "linkPrefix": "/optics/" }, { "dir": "electrodynamics", "type": "doc", "title": "电动力学", "linkPrefix": "/electrodynamics/" }, { "dir": "analytical-mechanics", "type": "doc", "title": "分析力学", "linkPrefix": "/analytical-mechanics/" }, { "dir": "mathematical-physics", "type": "doc", "title": "数学物理方程", "linkPrefix": "/mathematical-physics/" }, { "dir": "signal-analysis", "type": "doc", "title": "信号分析", "linkPrefix": "/signal-analysis/" }] };
const themeData$1 = { "locales": { "/": { "selectLanguageName": "简体中文", "selectLanguageText": "选择语言", "appearanceText": "外观", "lightModeSwitchTitle": "切换为浅色主题", "darkModeSwitchTitle": "切换为深色主题", "outlineLabel": "此页内容", "returnToTopLabel": "返回顶部", "editLinkText": "编辑此页", "contributorsText": "贡献者", "prevPageLabel": "上一页", "nextPageLabel": "下一页", "lastUpdatedText": "最后更新于", "changelogText": "变更历史", "changelogOnText": "于", "changelogButtonText": "查看全部变更历史", "copyrightText": "版权所有", "copyrightAuthorText": "版权归属：", "copyrightCreationOriginalText": "本文链接：", "copyrightCreationTranslateText": "本文翻译自：", "copyrightCreationReprintText": "本文转载自：", "copyrightLicenseText": "许可证：", "notFound": { "code": "404", "title": "页面未找到", "quote": "但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。", "linkText": "返回首页" }, "homeText": "首页", "postsText": "博客", "tagText": "标签", "archiveText": "归档", "categoryText": "分类", "archiveTotalText": "{count} 篇", "encryptButtonText": "确认", "encryptPlaceholder": "请输入密码", "encryptGlobalText": "本站只允许密码访问", "encryptPageText": "本页面只允许密码访问", "footer": { "message": 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>', "copyright": "Copyright © 2024-11-24 - present by soda-official" }, "copyPageText": "复制页面", "copiedPageText": "复制成功", "copingPageText": "复制中..", "copyTagline": "将页面以 Markdown 格式复制供 LLMs 使用", "viewMarkdown": "以 Markdown 格式查看", "viewMarkdownTagline": "以纯文本查看此页面", "askAIText": "在 {name} 中打开", "askAITagline": "向 {name} 提问有关此页面", "askAIMessage": "阅读 {link} 并回答内容相关的问题。", "copyright": "CC-BY-NC-SA-4.0", "logo": "", "navbarSocialInclude": [""], "aside": true, "outline": [2, 3], "sidebarScrollbar": false, "prevPage": true, "nextPage": true, "createTime": true, "profile": { "avatar": "images/soda.jpg", "name": "猫条", "description": "This is soda's personal <br/> diary & notebook.", "location": "Antarctica", "organization": "七域-假期快乐" }, "social": [{ "icon": "github", "link": "https://github.com/nicostore-mathematica" }], "transition": { "page": true, "postList": true, "appearance": "skew-clip" }, "navbar": [{ "text": "首页", "link": "/" }, { "text": "博客", "link": "/blog/" }, { "text": "笔记", "items": [{ "text": "数学分析", "link": "/integral/README.md" }, { "text": "代数学基础", "link": "/algebra/" }, { "text": "概率统计", "link": "/probstathsy/README.md" }, { "text": "基础物理", "link": "/physics/README.md" }, { "text": "光学", "link": "/optics/README.md" }, { "text": "复变函数", "link": "/complex/README.md" }, { "text": "数学物理方程", "link": "/mathematical-physics/README.md" }, { "text": "计算物理导论", "link": "/computational-physics/README.md" }, { "text": "分析力学", "link": "/analytical-mechanics/README.md" }, { "text": "电动力学", "link": "/electrodynamics/README.md" }, { "text": "电子电路", "link": "/circuit/" }, { "text": "信号分析", "link": "/signal-analysis/README.md" }, { "text": "控制理论", "link": "/cybernetics/README.md" }] }, { "text": "关于", "items": [{ "text": "关于我", "link": "/about/" }, { "text": "时间线", "link": "/timeline/" }, { "text": "⌈ 开往 ⌋", "link": "https://www.travellings.cn/go.html" }] }, { "text": "友链", "link": "/links/" }] } }, "appearance": true, "navbarSocialInclude": [""], "aside": true, "outline": [2, 3], "externalLinkIcon": true, "editLink": true, "prevPage": true, "nextPage": true, "footer": { "message": 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>', "copyright": "Copyright © 2024-11-24 - present by soda-official" }, "copyright": "CC-BY-NC-SA-4.0", "logo": "", "sidebarScrollbar": false, "createTime": true, "profile": { "avatar": "images/soda.jpg", "name": "猫条", "description": "This is soda's personal <br/> diary & notebook.", "location": "Antarctica", "organization": "七域-假期快乐" }, "social": [{ "icon": "github", "link": "https://github.com/nicostore-mathematica" }], "transition": { "page": true, "postList": true, "appearance": "skew-clip" }, "contributors": true, "changelog": true };
const E = setTimeout, m = 16, $ = 10, v = 16, B = 100, y = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), p$1 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, -1, -1, -1, -1, -1, -1, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, -1, -1, -1, -1, -1, -1, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, -1, -1, -1, -1, -1], N = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], U = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946, 1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055, 3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504, 976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462], S = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892], b = (e, n2) => {
  if (n2 <= 0 || n2 > e.length) throw Error(`Illegal length: ${n2}`);
  let o = 0, r2, t2;
  const s2 = [];
  for (; o < n2; ) {
    if (r2 = e[o++] & 255, s2.push(y[r2 >> 2 & 63]), r2 = (r2 & 3) << 4, o >= n2) {
      s2.push(y[r2 & 63]);
      break;
    }
    if (t2 = e[o++] & 255, r2 |= t2 >> 4 & 15, s2.push(y[r2 & 63]), r2 = (t2 & 15) << 2, o >= n2) {
      s2.push(y[r2 & 63]);
      break;
    }
    t2 = e[o++] & 255, r2 |= t2 >> 6 & 3, s2.push(y[r2 & 63]), s2.push(y[t2 & 63]);
  }
  return s2.join("");
}, x = (e, n2) => {
  const o = e.length;
  let r2 = 0, t2 = 0, s2, l2, h2, a2, c, i2;
  const u2 = [];
  for (; r2 < o - 1 && t2 < n2 && (i2 = e.charCodeAt(r2++), s2 = i2 < p$1.length ? p$1[i2] : -1, i2 = e.charCodeAt(r2++), l2 = i2 < p$1.length ? p$1[i2] : -1, !(s2 === -1 || l2 === -1 || (c = s2 << 2 >>> 0, c |= (l2 & 48) >> 4, u2.push(String.fromCharCode(c)), ++t2 >= n2 || r2 >= o) || (i2 = e.charCodeAt(r2++), h2 = i2 < p$1.length ? p$1[i2] : -1, h2 === -1) || (c = (l2 & 15) << 4 >>> 0, c |= (h2 & 60) >> 2, u2.push(String.fromCharCode(c)), ++t2 >= n2 || r2 >= o))); ) i2 = e.charCodeAt(r2++), a2 = i2 < p$1.length ? p$1[i2] : -1, c = (h2 & 3) << 6 >>> 0, c |= a2, u2.push(String.fromCharCode(c)), ++t2;
  return u2.map((f2) => f2.charCodeAt(0));
}, A = (e, n2, o, r2) => {
  let t2, s2 = e[n2], l2 = e[n2 + 1];
  return s2 ^= o[0], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[1], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[2], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[3], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[4], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[5], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[6], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[7], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[8], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[9], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[10], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[11], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[12], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[13], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[14], t2 = r2[s2 >>> 24], t2 += r2[256 | s2 >> 16 & 255], t2 ^= r2[512 | s2 >> 8 & 255], t2 += r2[768 | s2 & 255], l2 ^= t2 ^ o[15], t2 = r2[l2 >>> 24], t2 += r2[256 | l2 >> 16 & 255], t2 ^= r2[512 | l2 >> 8 & 255], t2 += r2[768 | l2 & 255], s2 ^= t2 ^ o[16], e[n2] = l2 ^ o[v + 1], e[n2 + 1] = s2, e;
}, w = (e, n2) => {
  let o = 0;
  for (let r2 = 0; r2 < 4; ++r2) o = o << 8 | e[n2] & 255, n2 = (n2 + 1) % e.length;
  return { key: o, offp: n2 };
}, T = (e, n2, o) => {
  const r2 = n2.length, t2 = o.length;
  let s2 = 0, l2 = new Int32Array([0, 0]), h2;
  for (let a2 = 0; a2 < r2; a2++) h2 = w(e, s2), s2 = h2.offp, n2[a2] ^= h2.key;
  for (let a2 = 0; a2 < r2; a2 += 2) l2 = A(l2, 0, n2, o), n2[a2] = l2[0], n2[a2 + 1] = l2[1];
  for (let a2 = 0; a2 < t2; a2 += 2) l2 = A(l2, 0, n2, o), o[a2] = l2[0], o[a2 + 1] = l2[1];
}, D = (e, n2, o, r2) => {
  const t2 = o.length, s2 = r2.length;
  let l2 = 0, h2 = new Int32Array([0, 0]), a2;
  for (let c = 0; c < t2; c++) a2 = w(n2, l2), l2 = a2.offp, o[c] ^= a2.key;
  l2 = 0;
  for (let c = 0; c < t2; c += 2) a2 = w(e, l2), l2 = a2.offp, h2[0] ^= a2.key, a2 = w(e, l2), l2 = a2.offp, h2[1] ^= a2.key, h2 = A(h2, 0, o, r2), o[c] = h2[0], o[c + 1] = h2[1];
  for (let c = 0; c < s2; c += 2) a2 = w(e, l2), l2 = a2.offp, h2[0] ^= a2.key, a2 = w(e, l2), l2 = a2.offp, h2[1] ^= a2.key, h2 = A(h2, 0, o, r2), r2[c] = h2[0], r2[c + 1] = h2[1];
}, _ = (e, n2, o, r2, t2) => {
  const s2 = new Int32Array(S), l2 = s2.length;
  o = 1 << o >>> 0;
  const h2 = new Int32Array(N), a2 = new Int32Array(U);
  D(n2, e, h2, a2);
  let c = 0;
  const i2 = () => {
    if (c < o) {
      const f2 = Date.now();
      for (; c < o && (c += 1, T(e, h2, a2), T(n2, h2, a2), !(Date.now() - f2 > B)); ) ;
    } else {
      for (let g = 0; g < 64; g++) for (let I = 0; I < l2 >> 1; I++) A(s2, I << 1, h2, a2);
      const f2 = [];
      for (let g = 0; g < l2; g++) f2.push(s2[g] >> 24 & 255), f2.push(s2[g] >> 16 & 255), f2.push(s2[g] >> 8 & 255), f2.push(s2[g] & 255);
      return r2 ? f2 : Promise.resolve(f2);
    }
    if (!r2) return new Promise((f2) => E(() => {
      i2().then(f2);
    }));
  };
  if (!r2) return i2();
  let u2;
  do
    u2 = i2();
  while (!u2);
  return u2;
}, L = (e) => {
  try {
    const n2 = new Uint32Array(e);
    return globalThis.crypto.getRandomValues(n2), Array.from(n2);
  } catch {
    throw Error("WebCryptoAPI / globalThis is not available");
  }
}, d = (...e) => new Error(`Illegal arguments: ${e.map((n2) => typeof n2).join(", ")}`), C = (e = $) => {
  if (typeof e != "number") throw d(e);
  return e = e < 4 ? 4 : e > 31 ? 31 : e, `$2b$${e < 10 ? "0" : ""}${e}$${b(L(m), m)}`;
}, P = (e = $) => new Promise((n2, o) => E(() => {
  try {
    n2(C(e));
  } catch (r2) {
    o(r2);
  }
})), k = (e) => {
  let n2 = 0, o = 0;
  for (let r2 = 0; r2 < e.length; ++r2) o = e.charCodeAt(r2), o < 128 ? n2 += 1 : o < 2048 ? n2 += 2 : (o & 64512) === 55296 && (e.charCodeAt(r2 + 1) & 64512) === 56320 ? (r2++, n2 += 4) : n2 += 3;
  return n2;
}, G = (e) => {
  let n2 = 0, o, r2;
  const t2 = new Array(k(e));
  for (let s2 = 0, l2 = e.length; s2 < l2; ++s2) o = e.charCodeAt(s2), o < 128 ? t2[n2++] = o : o < 2048 ? (t2[n2++] = o >> 6 | 192, t2[n2++] = o & 63 | 128) : (o & 64512) === 55296 && ((r2 = e.charCodeAt(s2 + 1)) & 64512) === 56320 ? (o = 65536 + ((o & 1023) << 10) + (r2 & 1023), ++s2, t2[n2++] = o >> 18 | 240, t2[n2++] = o >> 12 & 63 | 128, t2[n2++] = o >> 6 & 63 | 128, t2[n2++] = o & 63 | 128) : (t2[n2++] = o >> 12 | 224, t2[n2++] = o >> 6 & 63 | 128, t2[n2++] = o & 63 | 128);
  return t2;
}, O = (e, n2, o, r2) => {
  if (typeof e != "string" || typeof n2 != "string") {
    const f2 = new Error("Invalid content / salt: not a string");
    return Promise.reject(f2);
  }
  let t2, s2;
  if (n2.charAt(0) !== "$" || n2.charAt(1) !== "2") {
    const f2 = new Error("Invalid salt version: " + n2.substring(0, 2));
    return Promise.reject(f2);
  }
  if (n2.charAt(2) === "$") t2 = "\0", s2 = 3;
  else {
    if (t2 = n2.charAt(2), t2 !== "a" && t2 !== "b" && t2 !== "y" || n2.charAt(3) !== "$") {
      const f2 = Error("Invalid salt revision: " + n2.substring(2, 4));
      return Promise.reject(f2);
    }
    s2 = 4;
  }
  const l2 = n2.substring(s2, s2 + 2), h2 = /\d\d/.test(l2) ? Number(l2) : null;
  if (h2 === null) {
    const f2 = new Error("Missing salt rounds");
    return Promise.reject(f2);
  }
  if (h2 < 4 || h2 > 31) {
    const f2 = new Error(`Illegal number of rounds (4-31): ${h2}`);
    return Promise.reject(f2);
  }
  const a2 = n2.substring(s2 + 3, s2 + 25);
  e += t2 >= "a" ? "\0" : "";
  const c = G(e), i2 = x(a2, m);
  if (i2.length !== m) {
    const f2 = new Error(`Illegal salt: ${a2}`);
    return Promise.reject(f2);
  }
  const u2 = (f2) => `$2${t2 >= "a" ? t2 : ""}$${h2 < 10 ? "0" : ""}${h2}$${b(i2, m)}${b(f2, S.length * 4 - 1)}`;
  return o ? u2(_(c, i2, h2, true)) : _(c, i2, h2, false).then((f2) => u2(f2));
}, j = async (e, n2, o) => O(e, typeof n2 == "number" ? await P(n2) : n2, false), M = (e, n2, o) => new Promise((r2, t2) => {
  if (typeof e != "string" || typeof n2 != "string") {
    E(() => t2(new Error(`Illegal arguments: ${typeof e}, ${typeof n2}`)));
    return;
  }
  if (n2.length !== 60) {
    E(() => r2(false));
    return;
  }
  j(e, n2.substring(0, 29)).then((s2) => r2(s2 === n2)).catch((s2) => t2(s2));
});
const encrypt$1 = [false, ":", "", [], {}];
const sidebar = { "/": { "/circuit/": { "items": [{ "text": "电路理论", "collapsed": true, "items": ["/circuit/circuit/circuit-1", "/circuit/circuit/circuit-2", "/circuit/circuit/circuit-3", "/circuit/circuit/circuit-4"] }, { "text": "模拟电路", "collapsed": true, "items": ["/circuit/electronic/electronic-0", "/circuit/electronic/electronic-1"] }, { "text": "数字电路", "collapsed": true, "items": ["/circuit/Digital/Digital-1", "/circuit/Digital/Digital-2", "/circuit/Digital/Digital-3", "/circuit/Digital/Digital-4", "/circuit/Digital/Digital-5", "/circuit/Digital/Digital-6", "/circuit/Digital/Digital-7", "/circuit/Digital/Digital-8", "/circuit/Digital/Digital-9"] }, { "text": "电力电子电路", "collapsed": true, "items": ["/circuit/Power-Electronics/power-1"] }], "prefix": "/circuit/" }, "/integral/": { "items": [{ "text": "数学分析", "collapsed": false, "link": "/integral/", "items": ["integral-0", "integral-1", "integral-2", "integral-3", "integral-4", "integral-5", "integral-6", "integral-7", "integral-8", "integral-9", "integral-10", "integral-11", "integral-12", "integral-13", "integral-14", "integral-15", "integral-16", "integral-17", "integral-18", "integral-19", "integral-20", "integral-21", "integral-22", "integral-23", "integral-24", "integral-25", "integral-26", "integral-27", "integral-28", "integral-29", "integral-30", "integral-31", "integral-32", "integral-33", "integral-34", "integral-35", "integral-36", "integral-37", "integral-38", "integral-39", "integral-40", "integral-41", "integral-42", "integral-43", "integral-44", "integral-45", "integral-46"] }], "prefix": "/integral/" }, "/algebra/": { "items": [{ "text": "代数基础", "collapsed": false, "items": ["algebra-1", "algebra-2", "algebra-3", "algebra-4", "algebra-5", "algebra-6", "algebra-7", "algebra-8", "algebra-9", "algebra-10", "algebra-11"] }], "prefix": "/algebra/" }, "/probstathsy/": { "items": [{ "text": "概率统计基础", "collapsed": false, "link": "/probstathsy/", "items": ["probstathsy-1", "probstathsy-2"] }], "prefix": "/probstathsy/" }, "/physics/": { "items": [{ "text": "基础物理", "collapsed": false, "link": "/physics/", "items": ["physics-0", "physics-1", "physics-2", "physics-3", "physics-4", "physics-5", "physics-6", "physics-7", "physics-8", "physics-9", "physics-10"] }], "prefix": "/physics/" }, "/CS/": { "items": [{ "text": "C++", "collapsed": false, "items": ["/CS/C-primer-plus/lesson-1"] }, { "text": "Python", "collapsed": false, "items": ["/CS/Python/python-1"] }, { "text": "数据结构", "collapsed": false, "items": ["/CS/Data-Structures/lesson-1"] }], "prefix": "/CS/" }, "/complex/": { "items": [{ "text": "复变函数", "collapsed": false, "link": "/complex/", "items": ["complex-1", "complex-2", "complex-3", "complex-4", "complex-5", "complex-6", "complex-7"] }], "prefix": "/complex/" }, "/computational-physics/": { "items": [{ "text": "计算物理导论", "collapsed": false, "link": "/computational-physics/", "items": ["chapter-1", "chapter-2", "chapter-3", "chapter-4", "chapter-5"] }], "prefix": "/computational-physics/" }, "/cybernetics/": { "items": [{ "text": "控制理论", "collapsed": false, "link": "/cybernetics/", "items": ["cybernetics-1", "cybernetics-2"] }], "prefix": "/cybernetics/" }, "/optics/": { "items": [{ "text": "光学", "collapsed": false, "link": "/optics/", "items": ["optics-1", "optics-2"] }], "prefix": "/optics/" }, "/electrodynamics/": { "items": [{ "text": "电动力学", "collapsed": false, "link": "/electrodynamics/", "items": ["electrodynamics-0", "electrodynamics-1", "electrodynamics-2", "electrodynamics-3", "electrodynamics-4", "electrodynamics-5", "electrodynamics-6", "electrodynamics-7", "electrodynamics-8", "electrodynamics-9", "electrodynamics-10", "electrodynamics-11", "electrodynamics-12", "electrodynamics-13"] }], "prefix": "/electrodynamics/" }, "/analytical-mechanics/": { "items": [{ "text": "分析力学", "collapsed": false, "link": "/analytical-mechanics/", "items": ["lesson-1", "lesson-2", "lesson-3", "lesson-4", "lesson-7", "lesson-8", "lesson-9"] }], "prefix": "/analytical-mechanics/" }, "/mathematical-physics/": { "items": [{ "text": "数学物理方程", "collapsed": false, "link": "/mathematical-physics/", "items": ["chapter-0"] }], "prefix": "/mathematical-physics/" }, "/signal-analysis/": { "items": [{ "text": "信号分析", "collapsed": false, "link": "/signal-analysis/", "items": ["signal-1", "signal-2"] }], "prefix": "/signal-analysis/" } }, "__auto__": {}, "__home__": {} };
const icons = "{}";
const postsData$1 = { "/blog/": [{ "path": "/article/article-7/", "title": "家乡最棒。", "categoryList": [{ "id": "92a2b5", "sort": 10005, "name": "article" }], "createTime": "2026/08/31 22:34:55", "lang": "zh-CN", "excerpt": "" }, { "path": "/mark/mark-4/", "title": "讲讲之后博客的定位和规划", "categoryList": [{ "id": "ea8241", "sort": 10004, "name": "mark" }], "createTime": "2026/08/18 15:18:37", "lang": "zh-CN", "excerpt": "" }, { "path": "/travel/travel-1/", "title": "城际漫游 成都篇", "categoryList": [{ "id": "69266c", "sort": 10002, "name": "travel" }], "createTime": "2026/07/13 02:24:51", "lang": "zh-CN", "excerpt": "" }, { "path": "/mark/mark-3/", "title": "mark-3", "categoryList": [{ "id": "ea8241", "sort": 10004, "name": "mark" }], "createTime": "2026/07/07 19:53:21", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-9/", "title": "后日谈", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "createTime": "2026/06/12 13:29:18", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/article-6/", "title": "在这世界的某个角落", "categoryList": [{ "id": "92a2b5", "sort": 10005, "name": "article" }], "createTime": "2026/04/06 23:25:06", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/article-5/", "title": "随笔 关于电控", "categoryList": [{ "id": "92a2b5", "sort": 10005, "name": "article" }], "createTime": "2026/01/12 22:23:36", "lang": "zh-CN", "excerpt": "" }, { "path": "/mark/mark-2/", "title": "云台", "categoryList": [{ "id": "ea8241", "sort": 10004, "name": "mark" }], "createTime": "2025/12/23 22:16:40", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/anniversary-1/", "title": "博客建站的第一个地球年", "categoryList": [{ "id": "3cb1a6", "sort": 10003, "name": "informal" }], "createTime": "2025/12/01 05:44:46", "lang": "zh-CN", "excerpt": "" }, { "path": "/mark/mark-1/", "title": "缝缝补补", "categoryList": [{ "id": "ea8241", "sort": 10004, "name": "mark" }], "createTime": "2025/10/13 10:19:46", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/article-4/", "title": "随笔之四 暗夜", "categoryList": [{ "id": "92a2b5", "sort": 10005, "name": "article" }], "createTime": "2025/10/08 13:17:00", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/r1s3vxud/", "title": "Markdown", "categoryList": [{ "id": "5ebeb6", "sort": 10001, "name": "preview" }], "tags": ["markdown"], "createTime": "2025/09/17 19:03:35", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/pyvvujxp/", "title": "自定义组件", "categoryList": [{ "id": "5ebeb6", "sort": 10001, "name": "preview" }], "tags": ["预览", "组件"], "createTime": "2025/09/17 19:03:35", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/article-3/", "title": "随笔之三 焦虑之外", "categoryList": [{ "id": "92a2b5", "sort": 10005, "name": "article" }], "createTime": "2025/08/19 13:17:00", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/article-2/", "title": "随笔之二 实践调研", "categoryList": [{ "id": "92a2b5", "sort": 10005, "name": "article" }], "createTime": "2025/08/08 13:17:00", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/article-1/", "title": "随笔之一 水晶", "categoryList": [{ "id": "92a2b5", "sort": 10005, "name": "article" }], "createTime": "2025/07/19 13:17:00", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-8/", "title": "weekly-期中寄", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2025/04/14 21:20:08", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-7/", "title": "weekly-三月如狮而来", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2025/02/28 21:20:08", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-6/", "title": "weekly-Aoi", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2025/02/17 21:20:08", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-5/", "title": "weekly-城际漫游", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2025/01/27 21:20:08", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-4/", "title": "weekly-音符", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2024/12/31 21:20:08", "lang": "zh-CN", "excerpt": "" }, { "path": "/article/resources/", "title": "星河旅馆补给站", "categoryList": [{ "id": "3cb1a6", "sort": 10003, "name": "informal" }], "sticky": 100, "createTime": "2024/12/27 23:19:46", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-3/", "title": "weekly-步履不停，步履不停", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2024/12/21 19:12:13", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-2/", "title": "weekly-海の见える街", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2024/12/15 21:20:08", "lang": "zh-CN", "excerpt": "" }, { "path": "/weekly/weekly-1/", "title": "weekly-摩卡与孤独蓝色星球", "categoryList": [{ "id": "4a11fc", "sort": 1e4, "name": "weekly" }], "tags": ["Nichijou"], "createTime": "2024/12/08 21:20:08", "lang": "zh-CN", "excerpt": "" }] };
const articleTagColors = { "预览": "gu24", "组件": "xmxx", "markdown": "1z1u", "Nichijou": "1lpw" };
const i$1 = ref({}), W = (e) => {
  isRef(e) ? watchImmediate(e, (t2) => {
    i$1.value = t2;
  }) : isFunction(e) ? watchImmediate(computed(e), (t2) => {
    i$1.value = t2;
  }) : i$1.value = e;
};
var define_PLUME_PRESET_LOCALE_default = { "/": { CC0: "CC0 1.0 通用", "CC-BY-4.0": "署名 4.0 国际", "CC-BY-NC-4.0": "署名-非商业性 4.0 国际", "CC-BY-NC-SA-4.0": "署名-非商业性-相同方式共享 4.0 国际", "CC-BY-NC-ND-4.0": "署名-非商业性-禁止演绎 4.0 国际", "CC-BY-ND-4.0": "署名-禁止演绎 4.0 国际", "CC-BY-SA-4.0": "署名-相同方式共享 4.0 国际" } };
const collectionsRef = ref(collections);
const collectionItemRef = ref();
const forceCollection = ref();
const useCollection = () => collectionItemRef;
function forceUpdateCollection(dir) {
  forceCollection.value = dir;
}
function setupCollection() {
  const routeLocale = useRouteLocale();
  const { page } = useData();
  const startWith = (link) => link ? page.value.path.startsWith(normalizeLink(routeLocale.value, removeLeadingSlash(link))) : false;
  watchEffect(() => {
    collectionItemRef.value = collectionsRef.value[routeLocale.value]?.find((item) => {
      if (forceCollection.value) {
        if (forceCollection.value === true) return item.type === "post";
        return item.dir === forceCollection.value;
      }
      if (page.value.filePathRelative) return page.value.filePathRelative?.startsWith(normalizeLink(routeLocale.value, item.dir).slice(1));
      else {
        const { link, linkPrefix, dir, tagsLink, categoriesLink, archivesLink } = item;
        return startWith(link) || startWith(linkPrefix) || startWith(dir) || startWith(tagsLink) || startWith(categoriesLink) || startWith(archivesLink);
      }
    });
  });
}
const themeLocaleDataSymbol = Symbol("");
const themeData = ref(themeData$1);
function useThemeData() {
  return themeData;
}
function useThemeLocaleData() {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) throw new Error("useThemeLocaleData() is called without provider.");
  return themeLocaleData;
}
function resolveThemeLocaleData(theme, routeLocale) {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2?.[routeLocale]
  };
}
function setupThemeData(app) {
  const themeData$2 = useThemeData();
  const clientData = app._context.provides[clientDataSymbol];
  const themeLocaleData = computed(() => resolveThemeLocaleData(themeData$2.value, clientData.routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: { get() {
      return themeData$2.value;
    } },
    $themeLocale: { get() {
      return themeLocaleData.value;
    } }
  });
}
const darkModeSymbol = Symbol("");
function enableTransitions() {
  if (typeof document === "undefined") return false;
  return "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
}
function setupDarkMode(app) {
  const theme = useThemeData();
  const transition = theme.value.transition;
  const disableTransition = enableTransitions() || (typeof transition === "object" ? transition.appearance === false : transition === false);
  const appearance = theme.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: "vuepress-theme-appearance",
    attribute: "data-theme",
    valueLight: "light",
    valueDark: "dark",
    disableTransition,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  app.provide(darkModeSymbol, isDark);
  Object.defineProperty(app.config.globalProperties, "$isDark", { get: () => isDark });
  useEventListener("beforeprint", () => {
    if (isDark.value) document.documentElement.dataset.theme = "light";
  });
  useEventListener("afterprint", () => {
    if (isDark.value) document.documentElement.dataset.theme = "dark";
  });
}
function useDarkMode() {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) throw new Error("useDarkMode() is called without provider.");
  return isDarkMode;
}
function useData() {
  const theme = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  const site = useSiteLocaleData();
  const isDark = useDarkMode();
  return {
    theme,
    page,
    frontmatter,
    lang: usePageLang(),
    site,
    isDark,
    collection: useCollection()
  };
}
const encrypt = ref(resolveEncryptData(encrypt$1));
function useEncryptData() {
  return encrypt;
}
function resolveEncryptData([global2, separator2, admin, matches, rules]) {
  const keys = matches.map((match) => decodeData(match));
  return {
    global: global2,
    separator: separator2,
    matches: keys,
    admins: admin.split(separator2),
    ruleList: Object.keys(rules).map((key) => ({
      key,
      match: keys[key],
      rules: rules[key].split(separator2)
    }))
  };
}
const EncryptSymbol = Symbol("");
const storage$2 = useSessionStorage("2a0a3d6afb2fdf1f", () => {
  return {
    s: [C(10), C(10)],
    g: "",
    p: {}
  };
});
function mergeHash(hash) {
  const [left, right] = storage$2.value.s;
  return left + hash + right;
}
function splitHash(hash) {
  const [left, right] = storage$2.value.s;
  if (!hash.startsWith(left) || !hash.endsWith(right)) return "";
  return hash.slice(left.length, hash.length - right.length);
}
const compareCache = /* @__PURE__ */ new Map();
async function compareDecrypt(content, hash, separator2 = ":") {
  const key = [content, hash].join(separator2);
  if (compareCache.has(key)) return compareCache.get(key);
  try {
    const result = await M(content, hash);
    compareCache.set(key, result);
    return result;
  } catch {
    compareCache.set(key, false);
    return false;
  }
}
const matchCache = /* @__PURE__ */ new Map();
function createMatchRegex(match) {
  if (matchCache.has(match)) return matchCache.get(match);
  const regex2 = new RegExp(match);
  matchCache.set(match, regex2);
  return regex2;
}
function toMatch(match, pagePath, filePathRelative) {
  const relativePath = filePathRelative || "";
  if (match[0] === "^") {
    const regex2 = createMatchRegex(match);
    return regex2.test(pagePath) || regex2.test(relativePath);
  }
  if (match.endsWith(".md")) return relativePath && relativePath.endsWith(match);
  return pagePath.startsWith(match) || relativePath.startsWith(removeLeadingSlash(match));
}
function setupEncrypt() {
  const { page } = useData();
  const route = useRoute();
  const encrypt$2 = useEncryptData();
  const hasPageEncrypt = computed(() => {
    const pagePath = route.path;
    const filePathRelative = page.value.filePathRelative;
    if (page.value._e) return true;
    return encrypt$2.value.ruleList.length ? encrypt$2.value.matches.some((match) => toMatch(match, pagePath, filePathRelative)) : false;
  });
  const isGlobalDecrypted = computed(() => {
    if (!encrypt$2.value.global) return true;
    const hash = splitHash(storage$2.value.g);
    return !!hash && encrypt$2.value.admins.includes(hash);
  });
  const hashList = computed(() => {
    const pagePath = route.path;
    const filePathRelative = page.value.filePathRelative;
    const passwords = typeof page.value._e === "string" ? page.value._e.split(":") : [];
    return [passwords.length ? {
      key: pagePath.replace(/\//g, "").replace(/\.html$/, ""),
      match: pagePath,
      rules: passwords
    } : void 0, ...encrypt$2.value.ruleList.length ? encrypt$2.value.ruleList.filter((item) => toMatch(item.match, pagePath, filePathRelative)) : []].filter(Boolean);
  });
  provide(EncryptSymbol, {
    hasPageEncrypt,
    isGlobalDecrypted,
    isPageDecrypted: computed(() => {
      if (!hasPageEncrypt.value) return true;
      const hash = splitHash(storage$2.value.g || "");
      if (hash && encrypt$2.value.admins.includes(hash)) return true;
      for (const { key, rules } of hashList.value) if (hasOwn(storage$2.value.p, key)) {
        const hash$1 = splitHash(storage$2.value.p[key]);
        if (hash$1 && rules.includes(hash$1)) return true;
      }
      return false;
    }),
    hashList
  });
}
function useEncrypt() {
  const result = inject(EncryptSymbol);
  if (!result) throw new Error("useEncrypt() is called without setup");
  return result;
}
function useEncryptCompare() {
  const encrypt$2 = useEncryptData();
  const { page } = useData();
  const route = useRoute();
  const { hashList } = useEncrypt();
  async function compareGlobal(password) {
    if (!password) return false;
    for (const admin of encrypt$2.value.admins) if (await compareDecrypt(password, admin, encrypt$2.value.separator)) {
      storage$2.value.g = mergeHash(admin);
      return true;
    }
    return false;
  }
  async function comparePage(password) {
    if (!password) return false;
    const pagePath = route.path;
    const filePathRelative = page.value.filePathRelative;
    let decrypted = false;
    for (const { match, key, rules } of hashList.value) if (toMatch(match, pagePath, filePathRelative)) {
      for (const rule of rules) if (await compareDecrypt(password, rule, encrypt$2.value.separator)) {
        decrypted = true;
        storage$2.value.p = {
          ...storage$2.value.p,
          [key]: mergeHash(rule)
        };
        break;
      }
      if (decrypted) break;
    }
    if (!decrypted) decrypted = await compareGlobal(password);
    return decrypted;
  }
  return {
    compareGlobal,
    comparePage
  };
}
const { __auto__, __home__, ...items } = sidebar;
const sidebarData = ref(items);
const autoDirSidebar = ref(__auto__);
const autoHomeData = ref(__home__);
const sidebarSymbol = Symbol("");
function setupSidebar() {
  const { page, frontmatter } = useData();
  const routeLocale = useRouteLocale();
  const hasSidebar = computed(() => {
    return frontmatter.value.pageLayout !== "home" && frontmatter.value.pageLayout !== "friends" && frontmatter.value.sidebar !== false && frontmatter.value.layout !== "NotFound";
  });
  provide(sidebarSymbol, computed(() => {
    return hasSidebar.value ? getSidebar(typeof frontmatter.value.sidebar === "string" ? frontmatter.value.sidebar : page.value.path, routeLocale.value) : [];
  }));
}
function useSidebarData() {
  const sidebarData$1 = inject(sidebarSymbol);
  if (!sidebarData$1) throw new Error("useSidebarData() is called without provider.");
  return sidebarData$1;
}
function getSidebar(routePath, routeLocal) {
  const _sidebar = sidebarData.value[routeLocal];
  if (_sidebar === "auto") return resolveSidebarItems(autoDirSidebar.value[routeLocal]);
  else if (isArray(_sidebar)) return resolveSidebarItems(_sidebar, routeLocal);
  else if (isPlainObject(_sidebar)) {
    routePath = decodeURIComponent(routePath);
    const dir = Object.keys(_sidebar).sort((a2, b2) => b2.split("/").length - a2.split("/").length).find((dir$1) => {
      return routePath.startsWith(`${routeLocal}${removeLeadingSlash(dir$1)}`);
    }) || "";
    const sidebar$1 = dir ? _sidebar[dir] : void 0;
    if (sidebar$1 === "auto") return resolveSidebarItems(dir ? autoDirSidebar.value[dir] : [], routeLocal);
    else if (isArray(sidebar$1)) return resolveSidebarItems(sidebar$1, dir);
    else if (isPlainObject(sidebar$1)) {
      const prefix = normalizePrefix(routeLocal, sidebar$1.prefix);
      return resolveSidebarItems(sidebar$1.items === "auto" ? autoDirSidebar.value[prefix] : sidebar$1.items, prefix);
    }
  }
  return [];
}
function resolveSidebarItems(sidebarItems, _prefix = "") {
  const resolved = [];
  sidebarItems.forEach((item) => {
    if (isString(item)) resolved.push(resolveNavLink(normalizeLink(_prefix, item)));
    else {
      const { link, items: items$1, prefix, dir, ...args } = item;
      const navLink = { ...args };
      if (link) {
        navLink.link = link.startsWith("---") ? link : normalizeLink(_prefix, link);
        const nav = resolveNavLink(navLink.link);
        navLink.icon = nav.icon || navLink.icon;
        navLink.badge = nav.badge || navLink.badge;
      }
      const nextPrefix = normalizePrefix(_prefix, prefix || dir);
      if (items$1 === "auto") {
        navLink.items = resolveSidebarItems(autoDirSidebar.value[nextPrefix], nextPrefix);
        if (!navLink.link && autoHomeData.value[nextPrefix]) {
          navLink.link = normalizeLink(autoHomeData.value[nextPrefix]);
          const nav = resolveNavLink(navLink.link);
          navLink.icon = nav.icon || navLink.icon;
          navLink.badge = nav.badge || navLink.badge;
        }
      } else navLink.items = items$1?.length ? resolveSidebarItems(items$1, nextPrefix) : void 0;
      resolved.push(navLink);
    }
  });
  return resolved;
}
function getSidebarGroups(sidebar$1) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar$1) {
    const item = sidebar$1[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) groups.push({ items: [] });
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function hasActiveLink(path, items$1) {
  if (Array.isArray(items$1)) return items$1.some((item) => hasActiveLink(path, item));
  return isActive(path, items$1.link ? resolveRouteFullPath(items$1.link) : void 0) ? true : items$1.items ? hasActiveLink(path, items$1.items) : false;
}
const containsActiveLink = hasActiveLink;
function useSidebar() {
  const { theme, frontmatter, page } = useData();
  const routeLocal = useRouteLocale();
  const is960 = useMediaQuery("(min-width: 960px)");
  const { isPageDecrypted } = useEncrypt();
  const isOpen = ref(false);
  const sidebarKey = computed(() => {
    const _sidebar = sidebarData.value[routeLocal.value];
    if (!_sidebar || _sidebar === "auto" || isArray(_sidebar)) return routeLocal.value;
    return Object.keys(_sidebar).sort((a2, b2) => b2.split("/").length - a2.split("/").length).find((dir) => {
      return page.value.path.startsWith(ensureLeadingSlash(dir));
    }) || "";
  });
  const sidebar$1 = useSidebarData();
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar$1.value.length > 0 && frontmatter.value.pageLayout !== "home";
  });
  const hasAside = computed(() => {
    if (frontmatter.value.pageLayout === "home" || frontmatter.value.home) return false;
    if (frontmatter.value.pageLayout === "friends" || frontmatter.value.friends) return false;
    if (!isPageDecrypted.value) return false;
    if (frontmatter.value.aside != null) return !!frontmatter.value.aside;
    return theme.value.aside !== false;
  });
  const leftAside = computed(() => {
    if (hasAside.value) return frontmatter.value.aside == null ? theme.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar$1.value) : [];
  });
  const open = () => {
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  const toggle = () => {
    if (isOpen.value) close();
    else open();
  };
  return {
    isOpen,
    sidebar: sidebar$1,
    sidebarKey,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement?.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const route = useRoute();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.path, item.value.link ? resolveRouteFullPath(item.value.link) : void 0);
  };
  watch([
    () => page.value.path,
    item,
    () => route.hash
  ], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) return true;
    return item.value.items ? containsActiveLink(page.value.path, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watch(() => [collapsible.value, item.value.collapsed], (n2, o) => {
    if (n2[0] !== o?.[0] || n2[1] !== o?.[1]) collapsed.value = !!(collapsible.value && item.value.collapsed);
  }, { immediate: true });
  watch(() => [
    page.value.path,
    isActiveLink.value,
    hasActiveLink$1.value
  ], () => {
    if (isActiveLink.value || hasActiveLink$1.value) collapsed.value = false;
  }, {
    immediate: true,
    flush: "post"
  });
  const toggle = () => {
    if (collapsible.value) collapsed.value = !collapsed.value;
  };
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  return { isAsideEnabled: computed(() => {
    if (!is1280.value && !is960.value) return false;
    return hasSidebar.value ? is1280.value : is960.value;
  }) };
}
const showBulletin = ref(false);
function useBulletin() {
  const { theme } = useData();
  return computed(() => theme.value.bulletin === true ? {} : theme.value.bulletin);
}
function useBulletinControl() {
  const session = useSessionStorage("plume:bulletin", "");
  const local = useLocalStorage("plume:bulletin", "");
  const { page } = useData();
  const bulletin = useBulletin();
  const enableBulletin = computed(() => page.value.bulletin ?? true);
  watch(() => bulletin.value?.lifetime, (lifetime) => {
    const id = bulletin.value?.id;
    if (lifetime === "session") showBulletin.value = session.value !== id;
    else if (lifetime === "once") showBulletin.value = local.value !== id;
    else showBulletin.value = true;
  }, { immediate: true });
  function close() {
    showBulletin.value = false;
    const lifetime = bulletin.value?.lifetime;
    const id = bulletin.value?.id;
    if (lifetime === "session") session.value = id;
    else if (lifetime === "once") local.value = id;
  }
  return {
    bulletin,
    enableBulletin,
    showBulletin,
    close
  };
}
function useContributors() {
  const { frontmatter } = useData();
  const list = useContributors$1();
  const theme = useThemeData();
  const mode = computed(() => {
    const config2 = theme.value.contributors;
    if (isPlainObject(config2)) return config2.mode || "inline";
    return "inline";
  });
  const contributors = computed(() => {
    if ((frontmatter.value.contributors ?? !!theme.value.contributors) === false) return [];
    return list.value;
  });
  return {
    mode,
    contributors,
    hasContributors: computed(() => contributors.value.length > 0)
  };
}
const presetLocales = define_PLUME_PRESET_LOCALE_default;
function getPresetLocaleData(locale, name) {
  return presetLocales[locale]?.[name] || presetLocales["/"][name];
}
const LICENSE_URL = {
  "CC0": {
    url: "https://creativecommons.org/publicdomain/zero/1.0/",
    icons: ["zero"]
  },
  "CC-BY-4.0": {
    url: "https://creativecommons.org/licenses/by/4.0/",
    icons: ["cc", "by"]
  },
  "CC-BY-NC-4.0": {
    url: "https://creativecommons.org/licenses/by-nc/4.0/",
    icons: [
      "cc",
      "by",
      "nc"
    ]
  },
  "CC-BY-NC-SA-4.0": {
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    icons: [
      "cc",
      "by",
      "nc",
      "sa"
    ]
  },
  "CC-BY-NC-ND-4.0": {
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    icons: [
      "cc",
      "by",
      "nc",
      "nd"
    ]
  },
  "CC-BY-ND-4.0": {
    url: "https://creativecommons.org/licenses/by-nd/4.0/",
    icons: [
      "cc",
      "by",
      "nd"
    ]
  },
  "CC-BY-SA-4.0": {
    url: "https://creativecommons.org/licenses/by-sa/4.0/",
    icons: [
      "cc",
      "by",
      "sa"
    ]
  }
};
function useCopyright(copyright) {
  const { theme } = useData();
  const routeLocale = useRouteLocale();
  const { contributors } = useContributors();
  const hasCopyright = computed(() => Boolean(copyright.value));
  const creation = computed(() => copyright.value.creation || "original");
  const license = computed(() => resolveLicense(copyright.value.license, routeLocale.value));
  const author = computed(() => resolveAuthor(copyright.value.author, creation.value, contributors.value));
  const sourceUrl = computed(() => {
    if (creation.value === "original") {
      const url = new URL(location.href.split("#")[0]);
      url.searchParams.delete("giscus");
      return url.toString();
    }
    return copyright.value.source;
  });
  return {
    license,
    author,
    hasCopyright,
    creation,
    creationText: computed(() => {
      const creation$1 = copyright.value.creation;
      if (creation$1 === "translate") return theme.value.copyrightCreationTranslateText || "This article is translated from";
      else if (creation$1 === "reprint") return theme.value.copyrightCreationReprintText || "This article is reprint from";
      return theme.value.copyrightCreationOriginalText || "This article link: ";
    }),
    sourceUrl
  };
}
function resolveLicense(license = "CC-BY-4.0", locale) {
  const result = typeof license === "string" ? { name: license } : { ...license };
  const fallback = LICENSE_URL[result.name];
  const name = getPresetLocaleData(locale, result.name);
  if (name) result.name = `${name} (${result.name})`;
  result.url ||= fallback?.url;
  result.icons = fallback?.icons;
  return result;
}
function resolveAuthor(author, creation, contributors) {
  const contributor = contributors[0];
  if (!author && contributor && creation === "original") return contributor;
  const options = typeof author === "string" ? { name: author } : author;
  if (options && !options.url) {
    const contributor$1 = contributors.find((c) => c.name === options.name);
    if (contributor$1) options.url = contributor$1.url;
  }
  return options;
}
function useEditLink() {
  const { theme, page, frontmatter } = useData();
  const themeData$2 = useThemeData();
  return computed(() => {
    if (!(frontmatter.value.editLink ?? themeData$2.value.editLink ?? true)) return null;
    const { docsRepo, docsBranch = "main", docsDir = "" } = themeData$2.value;
    const { editLinkText } = theme.value;
    if (!docsRepo) return null;
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: frontmatter.value.editLinkPattern ?? theme.value.editLinkPattern
    });
    if (!editLink) return null;
    return {
      text: editLinkText ?? "Edit this page",
      link: editLink
    };
  });
}
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    if (!active) activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      if (el === options.el.value || options.el.value?.contains(el)) {
        focus.value = true;
        options.onFocus?.();
      } else {
        focus.value = false;
        options.onBlur?.();
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) deactivateFocusTracking();
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const iconsData = ref(icons);
const useIconsData = () => iconsData;
function normalizeLink$1(base = "", link = "") {
  return isLinkAbsolute(link) || isLinkWithProtocol(link) ? link : ensureLeadingSlash(`${base}/${link}`.replace(/\/+/g, "/"));
}
function useInternalLink() {
  const { collection, theme } = useData();
  const themeData$2 = useThemeData();
  const routeLocale = useRouteLocale();
  function resolveLink(link, fallback) {
    link = link ? removeLeadingSlash(link) : "";
    return ensureEndingSlash(normalizeLink$1(routeLocale.value, link || fallback));
  }
  const postCollection = computed(() => collection.value?.type === "post" ? collection.value : void 0);
  const home = computed(() => ({
    link: normalizeLink$1(routeLocale.value),
    text: theme.value.homeText || themeData$2.value.homeText || "Home"
  }));
  const postsLink = computed(() => normalizeLink$1(routeLocale.value, resolveLink(postCollection.value?.link || postCollection.value?.dir, "posts/")));
  return {
    home,
    posts: computed(() => postCollection.value?.postList !== false ? {
      text: postCollection.value?.title || removeEndingSlash(postCollection.value?.dir || "").split("/").pop() || theme.value.postsText,
      link: postsLink.value
    } : void 0),
    tags: computed(() => postCollection.value?.tags !== false ? {
      text: postCollection.value?.tagsText || theme.value.tagText || themeData$2.value.tagText || "Tags",
      link: resolveLink(postCollection.value?.tagsLink, "tags/")
    } : void 0),
    archive: computed(() => postCollection.value?.archives !== false ? {
      text: postCollection.value?.archivesText || theme.value.archiveText || themeData$2.value.archiveText || "Archives",
      link: resolveLink(postCollection.value?.archivesLink, "archives/")
    } : void 0),
    categories: computed(() => postCollection.value?.categories !== false ? {
      text: postCollection.value?.categoriesText || theme.value.categoryText || themeData$2.value.categoryText || "Categories",
      link: resolveLink(postCollection.value?.categoriesLink, "categories/")
    } : void 0)
  };
}
function usePostsPageData() {
  const { collection, page } = useData();
  return {
    isPosts: computed(() => collection.value?.type === "post"),
    isPostsLayout: computed(() => {
      const type = page.value.type;
      return type === "posts" || type === "posts-archives" || type === "posts-tags" || type === "posts-categories";
    })
  };
}
function useLangs({ removeCurrent = true } = {}) {
  const theme = useThemeData();
  const { page, collection } = useData();
  const routeLocale = useRouteLocale();
  const { isPosts } = usePostsPageData();
  const currentLang = computed(() => {
    const link = routeLocale.value;
    return {
      text: theme.value.locales?.[link]?.selectLanguageName,
      link
    };
  });
  const resolvePath = (locale, url) => {
    const { notFound, path } = resolveRoute(normalizeLink(locale, url.slice(routeLocale.value.length)));
    return notFound ? void 0 : path;
  };
  const getPageLink = (locale) => {
    let path;
    if (page.value.filePathRelative) path = resolvePath(locale, `/${page.value.filePathRelative}`);
    path ??= resolvePath(locale, page.value.path);
    if (path) return path;
    if (isPosts.value && collection.value) {
      const col = collection.value;
      return normalizeLink(locale, removeLeadingSlash(col.link || col.dir));
    }
    const home = theme.value.home || "/";
    const fallbackResolve = resolveRoute(locale);
    return fallbackResolve.notFound ? home : fallbackResolve.path;
  };
  return {
    localeLinks: computed(() => Object.entries(theme.value.locales || {}).flatMap(([key, locale]) => removeCurrent && currentLang.value.text === locale.selectLanguageName ? [] : {
      text: locale.selectLanguageName,
      link: getPageLink(key)
    })),
    currentLang
  };
}
function useLastUpdated() {
  const { theme, page, frontmatter } = useData();
  const themeData$2 = useThemeData();
  const lang = usePageLang();
  const date = computed(() => page.value.git?.updatedTime ? new Date(page.value.git.updatedTime) : null);
  const isoDatetime = computed(() => date.value?.toISOString());
  const datetime = ref("");
  const lastUpdatedText = computed(() => {
    if (themeData$2.value.lastUpdated === false) return "";
    return theme.value.lastUpdatedText || "Last updated";
  });
  onMounted(() => {
    watchEffect(() => {
      if (frontmatter.value.lastUpdated === false || themeData$2.value.lastUpdated === false) return;
      datetime.value = date.value ? new Intl.DateTimeFormat(themeData$2.value.lastUpdated?.formatOptions?.forceLocale ? lang.value : void 0, themeData$2.value.lastUpdated?.formatOptions ?? {
        dateStyle: "short",
        timeStyle: "short"
      }).format(date.value) : "";
    });
  });
  return {
    datetime,
    isoDatetime,
    lastUpdatedText
  };
}
function useLink(href, target) {
  const route = useRoute();
  const { page } = useData();
  const maybeIsExternal = computed(() => {
    const link$1 = toValue(href);
    const rawTarget = toValue(target);
    if (!link$1) return false;
    if (rawTarget === "_blank" || isLinkExternal(link$1)) return true;
    return false;
  });
  const preProcessLink = computed(() => {
    const link$1 = toValue(href);
    if (!link$1 || maybeIsExternal.value) return link$1;
    const path = resolveRouteFullPath(link$1, page.value.filePathRelative ? `/${page.value.filePathRelative}` : void 0);
    if (path.includes("#")) {
      if (path.slice(0, path.indexOf("#")) === route.path) return path.slice(path.indexOf("#"));
    }
    return path;
  });
  const isExternal = computed(() => {
    const link$1 = preProcessLink.value;
    if (maybeIsExternal.value) return true;
    if (!link$1 || link$1[0] === "#") return false;
    const routePath = link$1.split(/[?#]/)[0];
    const { notFound } = resolveRoute(routePath);
    return notFound;
  });
  const link = computed(() => {
    if (isExternal.value) return toValue(href);
    return preProcessLink.value;
  });
  return {
    isExternal,
    isExternalProtocol: computed(() => {
      if (!link.value || link.value[0] === "#") return false;
      return isLinkWithProtocol(link.value);
    }),
    link
  };
}
function useNavbarData() {
  const { theme } = useData();
  return computed(() => resolveNavbar(theme.value.navbar || []));
}
function resolveNavbar(navbar, _prefix = "") {
  const resolved = [];
  navbar.forEach((item) => {
    if (typeof item === "string") resolved.push(resolveNavLink(normalizeLink(_prefix, item)));
    else {
      const { items: items$1, prefix, ...args } = item;
      const res = { ...args };
      if ("link" in res) res.link = normalizeLink(_prefix, res.link);
      if (items$1?.length) res.items = resolveNavbar(items$1, normalizeLink(_prefix, prefix));
      resolved.push(res);
    }
  });
  return resolved;
}
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    if (isScreenOpen.value) closeScreen();
    else openScreen();
  }
  function closeScreenOnTabletWindow() {
    if (window.outerWidth >= 768) closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const resolvedHeaders = [];
const headersSymbol = Symbol("");
function setupHeaders() {
  const { frontmatter, theme } = useData();
  const headers = ref([]);
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
  });
  provide(headersSymbol, headers);
  return headers;
}
function useHeaders() {
  const headers = inject(headersSymbol);
  if (!headers) throw new Error("useHeaders() is called without provider.");
  return headers;
}
function getHeaders(range) {
  const heading = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ];
  const ignores = Array.from(document.querySelectorAll(heading.map((h2) => `.vp-demo-wrapper ${h2}`).join(",")));
  const headers = Array.from(document.querySelectorAll(heading.map((h2) => `.vp-doc ${h2}`).join(","))).filter((el) => !ignores.includes(el) && el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: `#${el.id}`,
      level,
      lowLevel: getLowLevel(el, level)
    };
  });
  if (range === false) return [];
  const [high, low] = getRange(range);
  return resolveSubRangeHeader(resolveHeaders(headers, high), low);
}
function getRange(range) {
  const levelsRange = range || 2;
  return typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
}
function getLowLevel(el, level) {
  if (!el.hasAttribute("data-outline") && !el.hasAttribute("outline")) return;
  const str = (el.getAttribute("data-outline") || el.getAttribute("outline"))?.trim();
  if (!str) return;
  const num = Number(str);
  if (!Number.isNaN(num) && num >= level) return num;
}
function serializeHeader(h2) {
  const anchor = h2.firstChild;
  const el = anchor?.firstChild;
  let ret = "";
  for (const node of Array.from(el?.childNodes ?? [])) if (node.nodeType === 1) {
    if (node.classList.contains("vp-badge") || node.classList.contains("ignore-header")) continue;
    const clone = node.cloneNode(true);
    clearHeaderNodeList(Array.from(clone.childNodes));
    ret += clone.textContent;
  } else if (node.nodeType === 3) ret += node.textContent;
  let next = anchor?.nextSibling;
  while (next) {
    if (next.nodeType === 1 || next.nodeType === 3) ret += next.textContent;
    next = next.nextSibling;
  }
  return ret.trim();
}
function clearHeaderNodeList(list) {
  if (list?.length) {
    for (const node of list) if (node.nodeType === 1) if (node.classList.contains("ignore-header")) node.remove();
    else clearHeaderNodeList(Array.from(node.childNodes));
  }
}
function resolveHeaders(headers, high) {
  headers = headers.filter((h2) => h2.level >= high);
  resolvedHeaders.length = 0;
  for (const { element, link } of headers) resolvedHeaders.push({
    element,
    link
  });
  const ret = [];
  outer: for (let i2 = 0; i2 < headers.length; i2++) {
    const cur = headers[i2];
    if (i2 === 0) ret.push(cur);
    else {
      for (let j2 = i2 - 1; j2 >= 0; j2--) {
        const prev = headers[j2];
        if (prev.level < cur.level) {
          (prev.children || (prev.children = [])).push(cur);
          continue outer;
        }
      }
      ret.push(cur);
    }
  }
  return ret;
}
function resolveSubRangeHeader(headers, low) {
  return headers.map((header) => {
    if (header.children?.length) {
      const current = header.lowLevel ? Math.max(header.lowLevel, low) : low;
      header.children = resolveSubRangeHeader(header.children.filter(({ level }) => level <= current), header.lowLevel || low);
    }
    return header;
  });
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const router = useRouter();
  const routeHash = ref(router.currentRoute.value.hash);
  let prevActiveLink = null;
  const setActiveLink = () => {
    if (!isAsideEnabled.value) return;
    const scrollY = Math.round(window.scrollY);
    const innerHeight$1 = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight$1 - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a2, b2) => a2.top - b2.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + 80) break;
      activeLink = link;
    }
    activateLink(activeLink);
  };
  function activateLink(hash) {
    routeHash.value = hash || "";
    if (prevActiveLink) prevActiveLink.classList.remove("active");
    if (hash == null) prevActiveLink = null;
    else prevActiveLink = container.value?.querySelector(`a[href="${decodeURIComponent(hash)}"]`) ?? null;
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      if (marker.value) {
        marker.value.style.top = `${activeLink.offsetTop + 39}px`;
        marker.value.style.opacity = "1";
      }
    } else if (marker.value) {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
  const onScroll = /* @__PURE__ */ useThrottleFn(setActiveLink, 100);
  watchDebounced(routeHash, () => {
    updateHash(router, routeHash.value);
  }, { debounce: 500 });
  onMounted(() => {
    setTimeout(() => {
      setActiveLink();
      window.addEventListener("scroll", onScroll);
    }, 1e3);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element && element !== document.body) {
    if (window.getComputedStyle(element).position === "fixed") return element.offsetTop;
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return element ? offsetTop : NaN;
}
async function updateHash(router, hash) {
  const { path, query } = router.currentRoute.value;
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace({
    path,
    query,
    hash
  });
  router.options.scrollBehavior = scrollBehavior;
}
const postsData = ref(postsData$1);
function useLocalePostList() {
  const collection = useCollection();
  const routeLocale = useRouteLocale();
  return computed(() => {
    if (collection.value) return postsData.value[normalizeLink$1(routeLocale.value, ensureEndingSlash(removeLeadingSlash(collection.value.dir)))] || [];
    return [];
  });
}
function useArchives() {
  const themeData$2 = useThemeData();
  const list = useLocalePostList();
  const { theme } = useData();
  return { archives: computed(() => {
    const archives = [];
    const countLocale = theme.value.archiveTotalText || themeData$2.value.archiveTotalText;
    list.value.forEach((item) => {
      const createTime = item.createTime?.split(/\s|T/)[0] || "";
      const year = createTime.split("/")[0];
      let current = archives.find((archive) => archive.title === year);
      if (!current) {
        current = {
          title: year,
          list: [],
          label: ""
        };
        archives.push(current);
      }
      current.list.push({
        title: item.title,
        path: item.path,
        createTime: createTime.slice(year.length + 1).replace(/\//g, "-")
      });
    });
    archives.forEach((item) => {
      item.label = countLocale?.replace("{count}", item.list.length.toString()) || "";
    });
    return archives;
  }) };
}
function usePostsCategory() {
  const postList = useLocalePostList();
  return { categories: computed(() => {
    const list = [];
    postList.value.forEach((item) => {
      const categoryList = item.categoryList;
      if (!categoryList || categoryList.length === 0) list.push({
        type: "post",
        title: item.title,
        path: item.path
      });
      else {
        let cate = list;
        let i2 = 0;
        while (i2 < categoryList.length) {
          const { id, name, sort } = categoryList[i2];
          const current = cate.find((item$1) => item$1.type === "category" && item$1.id === id);
          if (!current) {
            const items$1 = [];
            cate.push({
              type: "category",
              title: name,
              id,
              sort,
              items: items$1
            });
            cate = items$1;
          } else cate = current.items;
          i2++;
        }
        cate.push({
          type: "post",
          title: item.title,
          path: item.path
        });
      }
    });
    return sortCategory(list);
  }) };
}
function sortCategory(items$1) {
  for (const item of items$1) if (item.type === "category" && item.items.length) item.items = sortCategory(item.items);
  return items$1.sort((a2, b2) => {
    if (a2.type === "category" && b2.type === "category") return a2.sort < b2.sort ? -1 : 1;
    if (a2.type === "category" && b2.type === "post") return -1;
    if (a2.type === "post" && b2.type === "category") return 1;
    return 0;
  });
}
const _queue = /* @__PURE__ */ new WeakMap();
function useRouteQuery(name, defaultValue, options = {}) {
  const { mode = "replace", route = useRoute(), router = useRouter(), transform = (value) => value } = options;
  if (!_queue.has(router)) _queue.set(router, /* @__PURE__ */ new Map());
  const _queriesQueue = _queue.get(router);
  let query = route.query[name];
  tryOnScopeDispose(() => {
    query = void 0;
  });
  let _trigger;
  const proxy = customRef((track2, trigger2) => {
    _trigger = trigger2;
    return {
      get() {
        track2();
        return transform(query !== void 0 ? query : toValue(defaultValue));
      },
      set(v2) {
        if (query === v2) return;
        query = v2;
        _queriesQueue.set(name, v2);
        trigger2();
        nextTick(() => {
          if (_queriesQueue.size === 0) return;
          const newQueries = Object.fromEntries(_queriesQueue.entries());
          _queriesQueue.clear();
          const { query: query$1, hash, path } = route;
          router[toValue(mode)]({
            path,
            query: {
              ...query$1,
              ...newQueries
            },
            hash
          });
        });
      }
    };
  });
  watch(() => route.query[name], (v2) => {
    query = v2;
    _trigger();
  }, { flush: "sync" });
  return proxy;
}
const tagColorsRef = ref(articleTagColors);
const useTagColors = () => tagColorsRef;
function useTags() {
  const { collection } = useData();
  const list = useLocalePostList();
  const colors = useTagColors();
  const postCollection = computed(() => {
    if (collection.value?.type === "post") return collection.value;
  });
  const tags = computed(() => {
    const tagTheme = postCollection.value?.tagsTheme ?? "colored";
    const tagMap = {};
    list.value.forEach((item) => {
      if (item.tags) toArray(item.tags).forEach((tag) => {
        if (tagMap[tag]) tagMap[tag] += 1;
        else tagMap[tag] = 1;
      });
    });
    return Object.keys(tagMap).map((tag) => ({
      name: tag,
      count: tagMap[tag] > 99 ? "99+" : tagMap[tag],
      className: colors.value[tag] ? `vp-tag-${colors.value[tag]}` : `tag-${tagTheme}`
    }));
  });
  const currentTag = useRouteQuery("tag");
  const postList = computed(() => {
    if (!currentTag.value) return [];
    return list.value.filter((item) => {
      if (item.tags) return toArray(item.tags).includes(currentTag.value);
      return false;
    }).map((item) => ({
      title: item.title,
      path: item.path,
      createTime: item.createTime.split(" ")[0].replace(/\//g, "-")
    }));
  });
  const handleTagClick = (tag) => {
    currentTag.value = tag;
  };
  return {
    tags,
    currentTag,
    postList,
    handleTagClick
  };
}
function usePostsExtract() {
  const { collection } = useData();
  const postList = useLocalePostList();
  const { tags: tagsList } = useTags();
  const { categories: categoryList } = usePostsCategory();
  const links = useInternalLink();
  return {
    hasPostsExtract: computed(() => collection.value?.type === "post" && (collection.value.archives !== false || collection.value.tags !== false || collection.value.categories !== false)),
    tags: computed(() => ({
      link: links.tags.value?.link,
      text: links.tags.value?.text,
      total: tagsList.value.length
    })),
    archives: computed(() => ({
      link: links.archive.value?.link,
      text: links.archive.value?.text,
      total: postList.value.length
    })),
    categories: computed(() => ({
      link: links.categories.value?.link,
      text: links.categories.value?.text,
      total: getCategoriesTotal(categoryList.value)
    }))
  };
}
function getCategoriesTotal(categories) {
  let total = 0;
  for (const category of categories) if (category.type === "category") {
    total += 1;
    if (category.items.length) total += getCategoriesTotal(category.items);
  }
  return total;
}
const DEFAULT_PER_PAGE = 15;
function usePostListControl(homePage) {
  const { collection } = useData();
  const list = useLocalePostList();
  const is960 = useMediaQuery("(max-width: 960px)");
  const postCollection = computed(() => {
    if (collection.value?.type === "post") return collection.value;
  });
  const postList = computed(() => {
    const stickyList = list.value.filter((item) => item.sticky === true || typeof item.sticky === "number");
    const otherList = list.value.filter((item) => item.sticky === void 0 || item.sticky === false);
    return [...stickyList.sort((prev, next) => {
      if (next.sticky === true && prev.sticky === true) return 0;
      return next.sticky > prev.sticky ? 1 : -1;
    }), ...otherList];
  });
  const page = useRouteQuery("p", 1, {
    mode: "push",
    transform(val) {
      const page$1 = Number(val);
      if (!Number.isNaN(page$1) && page$1 > 0) return page$1;
      return 1;
    }
  });
  const perPage = computed(() => {
    if (postCollection.value?.pagination === false) return 0;
    if (typeof postCollection.value?.pagination === "number") return postCollection.value.pagination;
    return postCollection.value?.pagination?.perPage || DEFAULT_PER_PAGE;
  });
  const totalPage = computed(() => {
    if (postCollection.value?.pagination === false) return 0;
    return Math.ceil(postList.value.length / perPage.value);
  });
  const isLastPage = computed(() => page.value >= totalPage.value);
  const isFirstPage = computed(() => page.value <= 1);
  const isPaginationEnabled = computed(() => postCollection.value?.pagination !== false && totalPage.value > 1);
  const finalList = computed(() => {
    if (postCollection.value?.pagination === false) return postList.value;
    if (postList.value.length <= perPage.value) return postList.value;
    return postList.value.slice((page.value - 1) * perPage.value, page.value * perPage.value);
  });
  const pageRange = computed(() => {
    let range = [];
    const total = totalPage.value;
    const _page = page.value;
    const per = is960.value ? 4 : 5;
    if (total <= 0) return range;
    if (total <= 10) range = Array.from({ length: total }, (_2, i2) => ({ value: i2 + 1 }));
    else {
      let i2 = 1;
      let hasMore = false;
      while (i2 <= total) {
        if (_page <= per && i2 <= per || _page >= total - (per - 1) && i2 >= total - (per - 1)) {
          hasMore = false;
          range.push({ value: i2 });
        } else if (i2 <= 2 || i2 >= total - 1) {
          hasMore = false;
          range.push({ value: i2 });
        } else if ((_page > per + 1 || _page < total - (per + 1)) && _page - i2 < per - 2 && i2 - _page < per - 2) {
          hasMore = false;
          range.push({ value: i2 });
        } else if (!hasMore) {
          hasMore = true;
          range.push({
            value: i2,
            more: true
          });
        }
        i2++;
      }
    }
    return range;
  });
  const changePage = (current) => {
    if (page.value === current) return;
    page.value = current;
    setTimeout(() => {
      let top = 0;
      if (homePage.value) {
        top = document.querySelector(".vp-posts")?.getBoundingClientRect().top || 0;
        top += window.scrollY - 64;
      }
      window.scrollTo({
        top,
        behavior: "instant"
      });
    }, 0);
  };
  return {
    postList: finalList,
    page,
    totalPage,
    pageRange,
    isLastPage,
    isFirstPage,
    isPaginationEnabled,
    changePage
  };
}
function usePrevNext() {
  const route = useRoute();
  const { frontmatter, theme } = useData();
  const { sidebar: sidebar$1 } = useSidebar();
  const postList = useLocalePostList();
  const locale = usePageLang();
  const { isPosts } = usePostsPageData();
  return {
    prev: computed(() => {
      if (theme.value.prevPage === false) return null;
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) return prevConfig;
      if (isPosts.value) return resolveFromPostsData(postList.value.filter((item) => item.lang === locale.value), route.path, -1);
      else return resolveFromSidebarItems(flatSidebar(sidebar$1.value), route.path, -1);
    }),
    next: computed(() => {
      if (theme.value.nextPage === false) return null;
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) return nextConfig;
      if (isPosts.value) return resolveFromPostsData(postList.value.filter((item) => item.lang === locale.value), route.path, 1);
      else return resolveFromSidebarItems(flatSidebar(sidebar$1.value), route.path, 1);
    })
  };
}
function resolveFromFrontmatterConfig(conf) {
  if (conf === false) return null;
  if (isString(conf)) return resolveNavLink(conf);
  if (isPlainObject(conf)) return conf;
  return false;
}
function flatSidebar(sidebar$1, res = []) {
  for (const item of sidebar$1) {
    if (item.link) res.push({
      link: item.link,
      text: item.text || "",
      icon: item.icon
    });
    if (Array.isArray(item.items) && item.items.length) flatSidebar(item.items, res);
  }
  return res;
}
function resolveFromSidebarItems(sidebarItems, currentPath, offset) {
  const index = sidebarItems.findIndex((item) => resolveRouteFullPath(item.link) === currentPath);
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset];
    if (targetItem?.link) return targetItem;
  }
  return null;
}
function resolveFromPostsData(postList, currentPath, offset) {
  const index = postList.findIndex((item) => item.path === currentPath);
  if (index !== -1) {
    const targetItem = postList[index + offset];
    if (!targetItem?.path) return null;
    return {
      link: targetItem.path,
      text: targetItem.title
    };
  }
  return null;
}
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve2) => promiseResolve = resolve2);
  },
  resolve: () => {
    promiseResolve?.();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
function enhanceScrollBehavior(router) {
  router.options.scrollBehavior = async (to, from, savedPosition) => {
    await useScrollPromise().wait();
    if (savedPosition) return savedPosition;
    if (to.hash) return {
      el: to.hash,
      top: 64
    };
    return { top: 0 };
  };
  router.beforeEach((to, from) => {
    if (inBrowser) {
      if (from.path !== to.path) document.documentElement.classList.remove("smooth");
    }
  });
  router.afterEach(() => nextTick(() => {
    if (inBrowser) setTimeout(() => {
      document.documentElement.classList.add("smooth");
    }, 1e3);
  }));
}
const strategy = {
  "fade": (reverse) => ({
    opacity: reverse(["0", "1"]),
    duration: 300
  }),
  "circle-clip": (reverse, { x: x2, y: y2 }) => ({
    clipPath: reverse([`circle(0px at ${x2}px ${y2}px)`, `circle(${Math.hypot(Math.max(x2, innerWidth - x2), Math.max(y2, innerHeight - y2))}px at ${x2}px ${y2}px)`]),
    duration: 650
  }),
  "horizontal-clip": (reverse) => ({ clipPath: reverse([`inset(0px ${innerWidth}px 0px 0px)`, `inset(0px 0px 0px 0px)`]) }),
  "vertical-clip": (reverse) => ({ clipPath: reverse([`inset(0px 0px ${innerHeight}px 0px)`, `inset(0px 0px 0px 0px)`]) }),
  "skew-clip": (reverse) => ({ clipPath: reverse(["polygon(0px 0px, 0px 0px, 0px 0px)", `polygon(0px 0px, ${innerWidth * 2}px 0px, 0px ${innerHeight * 2}px)`]) }),
  "blinds-vertical": (reverse) => ({ clipPath: reverse(["inset(50% 0% 50% 0%)", "inset(0 0 0 0)"]) }),
  "blinds-horizontal": (reverse) => ({ clipPath: reverse(["polygon(50% 0, 50% 100%, 50% 100%, 50% 0)", "polygon(0 0, 0 100%, 100% 100%, 100% 0)"]) }),
  "soft-blur-fade": (reverse) => ({
    opacity: reverse(["0", "1"]),
    filter: reverse(["blur(10px)", "blur(0px)"]),
    duration: 380
  }),
  "diamond-reveal": (reverse) => ({
    clipPath: reverse([`polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)`, `polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)`]),
    duration: 500
  })
};
function resolveTransitionKeyframes(x2, y2, mode, isDark) {
  if (!mode || !strategy[mode]) mode = "fade";
  const reverse = (effect) => {
    return isDark ? effect.reverse() : effect;
  };
  const { duration = 400, ...keyframes } = strategy[mode](reverse, {
    x: x2,
    y: y2,
    isDark
  });
  return {
    keyframes,
    duration
  };
}
function setupWatermark() {
  const { frontmatter } = useData();
  W(computed(() => {
    const disableFullPage = typeof frontmatter.value.watermark === "object" && frontmatter.value.watermark.fullPage === false;
    return { parent: disableFullPage ? ".vp-doc" : "body" };
  }));
}
const _sfc_main$1C = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  props: {
    text: {},
    type: { default: "tip" },
    color: {},
    bgColor: {},
    borderColor: { default: "transparent" }
  },
  setup(__props) {
    const customStyle = computed(() => {
      if (__props.color || __props.bgColor) {
        return {
          color: __props.color,
          backgroundColor: __props.bgColor,
          borderColor: __props.borderColor
        };
      }
      return {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["vp-badge", __props.type]),
        style: normalizeStyle(customStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(__props.text), 1)
        ], true)
      ], 6);
    };
  }
});
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["__scopeId", "data-v-863826d1"]]);
const _sfc_main$1B = /* @__PURE__ */ defineComponent({
  __name: "VPIconFa",
  props: {
    name: {},
    size: {},
    color: {},
    prefix: {},
    extra: {}
  },
  setup(__props) {
    const configs = {
      "solid": ["fas", "s"],
      "regular": ["far", "r"],
      "light": ["fal", "l"],
      "thin": ["fat", "t"],
      "duotone solid": ["fads", "ds"],
      "sharp solid": ["fass", "ss"],
      "sharp regular": ["fasr", "sr"],
      "sharp light": ["fasl", "sl"],
      "sharp thin": ["fast", "st"],
      "sharp-duotone solid": ["fasds", "sds"],
      "brands": ["fab", "b"]
    };
    const iconName = computed(() => {
      const icon = __props.name.includes(":") ? __props.name : `${__props.prefix || "fas"}:${__props.name}`;
      const [type, iconName2] = icon.split(":");
      let _prefix = "solid";
      for (const [key, alias] of Object.entries(configs)) {
        if (alias.includes(type)) {
          _prefix = key;
          break;
        }
      }
      return `${_prefix.split(" ").map((v2) => `fa-${v2.trim()}`).join(" ")} fa-${iconName2}`;
    });
    const extraClasses = computed(() => {
      if (!__props.extra)
        return [];
      return __props.extra.split(" ").map((v2) => v2.trim().startsWith("fa-") ? v2 : `fa-${v2}`);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["vp-icon fontawesome", [iconName.value, ...extraClasses.value]]),
        "data-provider": "fontawesome",
        "aria-hidden": "",
        style: normalizeStyle({ color: __props.color, ...__props.size })
      }, null, 6);
    };
  }
});
const _sfc_main$1A = /* @__PURE__ */ defineComponent({
  __name: "VPIconfont",
  props: {
    name: {},
    size: {},
    color: {},
    prefix: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["vp-icon", `${__props.prefix || "iconfont icon-"}${__props.name}`]),
        style: normalizeStyle({ color: __props.color, "font-size": __props.size?.height || "1em" }),
        "data-provider": "iconfont",
        "aria-hidden": ""
      }, null, 6);
    };
  }
});
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
  // Check name: cannot be empty
  ((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
const defaultIconDimensions$1 = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations$1 = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps$1 = Object.freeze({
  ...defaultIconDimensions$1,
  ...defaultIconTransformations$1
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps$1,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations$1) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations$1[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons2 = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve2(name) {
    if (icons2[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve2(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons2).concat(Object.keys(aliases)).forEach(resolve2);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons2 = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons2[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions$1
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons2 = data.icons;
  for (const name in icons2) {
    const icon = icons2[name];
    if (
      // Name cannot be empty
      !name || // Must have body
      typeof icon.body !== "string" || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (
      // Name cannot be empty
      !name || // Parent must be set and point to existing icon
      typeof parent !== "string" || !icons2[parent] && !aliases[parent] || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err2) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  if (data) {
    return addIconToStorage(storage2, icon.name, data);
  } else {
    storage2.missing.add(icon.name);
    return true;
  }
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
const defaultIconSizeCustomisations$1 = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations$1 = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations$1,
  // Transformations
  ...defaultIconTransformations$1
});
"IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
const storage$1 = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage$1[provider] = item;
}
function getAPIModule(provider) {
  return storage$1[provider] || storage$1[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config2 = createAPIConfig(customConfig);
  if (config2 === null) {
    return false;
  }
  configStorage[provider] = config2;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err2) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config2 = getAPIConfig(provider);
  if (!config2) {
    return 0;
  }
  let result;
  if (!config2.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config2.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config2.maxURL - maxHostLength - config2.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons2) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons2.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config2 = getAPIConfig(provider);
    if (config2) {
      return config2.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons2 = params.icons;
      const iconsList = icons2.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons2) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons2.sort((a2, b2) => {
    if (a2.provider !== b2.provider) {
      return a2.provider.localeCompare(b2.provider);
    }
    if (a2.prefix !== b2.prefix) {
      return a2.prefix.localeCompare(b2.prefix);
    }
    return a2.name.localeCompare(b2.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons2.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach((storage2) => {
    const items2 = storage2.loaderCallbacks;
    if (items2) {
      storage2.loaderCallbacks = items2.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage2) {
  if (!storage2.pendingCallbacksFlag) {
    storage2.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage2.pendingCallbacksFlag = false;
      const items2 = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
      if (!items2.length) {
        return;
      }
      let hasPending = false;
      const provider = storage2.provider;
      const prefix = storage2.prefix;
      items2.forEach((item) => {
        const icons2 = item.icons;
        const oldLength = icons2.pending.length;
        icons2.pending = icons2.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name]) {
            icons2.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing.has(name)) {
            icons2.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons2.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage2], item.id);
          }
          item.callback(
            icons2.loaded.slice(0),
            icons2.missing.slice(0),
            icons2.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
let idCounter = 0;
function storeCallback(callback, icons2, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons2.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons: icons2,
    callback,
    abort
  };
  pendingSources.forEach((storage2) => {
    (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config2, payload, query, done) {
  const resourcesCount = config2.resources.length;
  const startIndex = config2.random ? Math.floor(Math.random() * resourcesCount) : config2.index;
  let resources;
  if (config2.random) {
    let list = config2.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config2.resources.slice(startIndex).concat(config2.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue2 = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue2.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue2 = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue2.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue2.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue2 = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue2 = queue2.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config2.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue2.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config2.random) {
      const index = config2.resources.indexOf(item.resource);
      if (index !== -1 && index !== config2.index) {
        config2.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue2.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config2.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue2.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config2.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy(cfg) {
  const config2 = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config2,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config2.index = index;
    },
    getIndex: () => config2.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {
}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config2 = getAPIConfig(provider);
    if (!config2) {
      return;
    }
    const redundancy = initRedundancy(config2);
    const cachedReundancy = {
      config: config2,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config2 = createAPIConfig(target);
    if (config2) {
      redundancy = initRedundancy(config2);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send2 = api.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback)().abort;
}
function emptyCallback() {
}
function loadedNewIcons(storage2) {
  if (!storage2.iconsLoaderFlag) {
    storage2.iconsLoaderFlag = true;
    setTimeout(() => {
      storage2.iconsLoaderFlag = false;
      updateCallbacks(storage2);
    });
  }
}
function checkIconNamesForAPI(icons2) {
  const valid = [];
  const invalid = [];
  icons2.forEach((name) => {
    (name.match(matchIconName) ? valid : invalid).push(name);
  });
  return {
    valid,
    invalid
  };
}
function parseLoaderResponse(storage2, icons2, data) {
  function checkMissing() {
    const pending = storage2.pendingIcons;
    icons2.forEach((name) => {
      if (pending) {
        pending.delete(name);
      }
      if (!storage2.icons[name]) {
        storage2.missing.add(name);
      }
    });
  }
  if (data && typeof data === "object") {
    try {
      const parsed = addIconSet(storage2, data);
      if (!parsed.length) {
        checkMissing();
        return;
      }
    } catch (err2) {
      console.error(err2);
    }
  }
  checkMissing();
  loadedNewIcons(storage2);
}
function parsePossiblyAsyncResponse(response, callback) {
  if (response instanceof Promise) {
    response.then((data) => {
      callback(data);
    }).catch(() => {
      callback(null);
    });
  } else {
    callback(response);
  }
}
function loadNewIcons(storage2, icons2) {
  if (!storage2.iconsToLoad) {
    storage2.iconsToLoad = icons2;
  } else {
    storage2.iconsToLoad = storage2.iconsToLoad.concat(icons2).sort();
  }
  if (!storage2.iconsQueueFlag) {
    storage2.iconsQueueFlag = true;
    setTimeout(() => {
      storage2.iconsQueueFlag = false;
      const { provider, prefix } = storage2;
      const icons22 = storage2.iconsToLoad;
      delete storage2.iconsToLoad;
      if (!icons22 || !icons22.length) {
        return;
      }
      const customIconLoader = storage2.loadIcon;
      if (storage2.loadIcons && (icons22.length > 1 || !customIconLoader)) {
        parsePossiblyAsyncResponse(
          storage2.loadIcons(icons22, prefix, provider),
          (data) => {
            parseLoaderResponse(storage2, icons22, data);
          }
        );
        return;
      }
      if (customIconLoader) {
        icons22.forEach((name) => {
          const response = customIconLoader(name, prefix, provider);
          parsePossiblyAsyncResponse(response, (data) => {
            const iconSet = data ? {
              prefix,
              icons: {
                [name]: data
              }
            } : null;
            parseLoaderResponse(storage2, [name], iconSet);
          });
        });
        return;
      }
      const { valid, invalid } = checkIconNamesForAPI(icons22);
      if (invalid.length) {
        parseLoaderResponse(storage2, invalid, null);
      }
      if (!valid.length) {
        return;
      }
      const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
      if (!api) {
        parseLoaderResponse(storage2, valid, null);
        return;
      }
      const params = api.prepare(provider, prefix, valid);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data) => {
          parseLoaderResponse(storage2, item.icons, data);
        });
      });
    });
  }
}
const loadIcons = (icons2, callback) => {
  const cleanedIcons = listToIcons(icons2, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage2 = getStorage(provider, prefix);
    const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage2) => {
    const list = newIcons[storage2.provider][storage2.prefix];
    if (list.length) {
      loadNewIcons(storage2, list);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
const loadIcon = (icon) => {
  return new Promise((fulfill, reject) => {
    const iconObj = typeof icon === "string" ? stringToIcon(icon, true) : icon;
    if (!iconObj) {
      reject(icon);
      return;
    }
    loadIcons([iconObj || icon], (loaded) => {
      if (loaded.length && iconObj) {
        const data = getIconData(iconObj);
        if (data) {
          fulfill({
            ...defaultIconProps$1,
            ...data
          });
          return;
        }
      }
      reject(icon);
    });
  });
};
({
  ...defaultIconCustomisations$1
});
const monotoneProps$1 = {
  backgroundColor: "currentColor"
};
const coloredProps$1 = {
  backgroundColor: "transparent"
};
const propsToAdd$1 = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
};
const propsToAddTo$1 = {
  webkitMask: monotoneProps$1,
  mask: monotoneProps$1,
  background: coloredProps$1
};
for (const prefix in propsToAddTo$1) {
  const list = propsToAddTo$1[prefix];
  for (const prop in propsToAdd$1) {
    list[prefix + prop] = propsToAdd$1[prop];
  }
}
const customisationAliases$1 = {};
["horizontal", "vertical"].forEach((prefix) => {
  const attr = prefix.slice(0, 1) + "Flip";
  customisationAliases$1[prefix + "-flip"] = attr;
  customisationAliases$1[prefix.slice(0, 1) + "-flip"] = attr;
  customisationAliases$1[prefix + "Flip"] = attr;
});
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  const _window = window;
  if (_window.IconifyPreload !== void 0) {
    const preload2 = _window.IconifyPreload;
    const err2 = "Invalid IconifyPreload syntax.";
    if (typeof preload2 === "object" && preload2 !== null) {
      (preload2 instanceof Array ? preload2 : [preload2]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err2);
          }
        } catch (e) {
          console.error(err2);
        }
      });
    }
  }
  if (_window.IconifyProviders !== void 0) {
    const providers = _window.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err2 = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err2);
          }
        } catch (e) {
          console.error(err2);
        }
      }
    }
  }
}
({
  ...defaultIconProps$1
});
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
({
  ...defaultIconDimensions
});
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  backgroundColor: "currentColor"
};
const coloredProps = {
  backgroundColor: "transparent"
};
const propsToAdd = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
};
const propsToAddTo = {
  webkitMask: monotoneProps,
  mask: monotoneProps,
  background: coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + prop] = propsToAdd[prop];
  }
}
const customisationAliases = {};
["horizontal", "vertical"].forEach((prefix) => {
  const attr = prefix.slice(0, 1) + "Flip";
  customisationAliases[prefix + "-flip"] = attr;
  customisationAliases[prefix.slice(0, 1) + "-flip"] = attr;
  customisationAliases[prefix + "Flip"] = attr;
});
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
const render = (icon, props) => {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const componentProps = { ...svgDefaults };
  const mode = props.mode || "svg";
  const style = {};
  const propsStyle = props.style;
  const customStyle = typeof propsStyle === "object" && !(propsStyle instanceof Array) ? propsStyle : {};
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      // Properties to ignore
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
      case "ssr":
        break;
      // Boolean attributes
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      // Flip as string: 'horizontal,vertical'
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      // Color: override style
      case "color":
        style.color = value;
        break;
      // Rotation as string
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      // Remove aria-hidden
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default: {
        const alias = customisationAliases[key];
        if (alias) {
          if (value === true || value === "true" || value === 1) {
            customisations[alias] = true;
          }
        } else if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
      }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style.verticalAlign = "-0.125em";
  }
  if (mode === "svg") {
    componentProps.style = {
      ...style,
      ...customStyle
    };
    Object.assign(componentProps, renderAttribs);
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    componentProps["innerHTML"] = replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifyVue");
    return h$1("svg", componentProps);
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  componentProps.style = {
    ...style,
    "--svg": svgToURL(html),
    "width": fixSize(renderAttribs.width),
    "height": fixSize(renderAttribs.height),
    ...commonProps,
    ...useMask ? monotoneProps : coloredProps,
    ...customStyle
  };
  return h$1("span", componentProps);
};
const storage = /* @__PURE__ */ Object.create(null);
const Icon = /* @__PURE__ */ defineComponent((props, ctx) => {
  return () => {
    const propsIcon = props.icon;
    const icon = typeof propsIcon === "string" ? storage[propsIcon] : typeof propsIcon === "object" ? propsIcon : null;
    if (icon === null || typeof icon !== "object" || typeof icon.body !== "string") {
      return renderSlot(ctx.slots, "default");
    }
    return render({
      ...defaultIconProps,
      ...icon
    }, props);
  };
}, {
  props: [
    // Icon and render mode
    "icon",
    "mode",
    "ssr",
    // Layout and style
    "width",
    "height",
    "style",
    "color",
    "inline",
    // Transformations
    "rotate",
    "hFlip",
    "horizontalFlip",
    "vFlip",
    "verticalFlip",
    "flip",
    // Misc
    "id",
    "ariaHidden",
    "customise",
    "title"
  ]
});
const _sfc_main$1z = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "VPIconify",
  props: {
    name: {},
    size: {},
    color: {},
    prefix: {},
    extra: {}
  },
  setup(__props) {
    const icon = ref(null);
    const loaded = ref(false);
    const iconsData2 = useIconsData();
    const iconName = computed(() => {
      if (__props.name.includes(":"))
        return __props.name;
      return __props.prefix ? `${__props.prefix}:${__props.name}` : __props.name;
    });
    const localIconName = computed(() => iconsData2.value[iconName.value]);
    async function loadRemoteIcon() {
      if (icon.value)
        return;
      if (!localIconName.value) {
        loaded.value = false;
        icon.value = await loadIcon(__props.name);
      }
      loaded.value = true;
    }
    watch(() => __props.name, loadRemoteIcon, { immediate: true });
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return localIconName.value ? (openBlock(), createElementBlock("span", mergeProps({
        key: 0,
        class: ["vp-icon", [localIconName.value, __props.extra]],
        style: { color: __props.color, ...__props.size },
        "aria-hidden": "",
        "data-provider": "iconify"
      }, _ctx.$attrs), null, 16)) : (openBlock(), createBlock(_component_ClientOnly, { key: 1 }, {
        default: withCtx(() => [
          !loaded.value ? (openBlock(), createElementBlock("span", mergeProps({
            key: 0,
            class: "vp-icon iconify",
            style: { color: __props.color, ...__props.size }
          }, _ctx.$attrs), null, 16)) : icon.value ? (openBlock(), createBlock(unref(Icon), {
            key: 1,
            class: normalizeClass(["vp-icon iconify", [__props.extra]]),
            icon: icon.value,
            style: normalizeStyle({ color: __props.color, ...__props.size }),
            "aria-hidden": "",
            "data-provider": "iconify"
          }, null, 8, ["class", "icon", "style"])) : createCommentVNode("", true)
        ]),
        _: 1
      }));
    };
  }
});
const _hoisted_1$19 = {
  key: 0,
  class: "vp-icon-img",
  "aria-hidden": ""
};
const _hoisted_2$N = ["src"];
const _hoisted_3$D = ["innerHTML"];
const _sfc_main$1y = /* @__PURE__ */ defineComponent({
  __name: "VPIconImage",
  props: {
    type: {},
    name: {},
    color: {},
    size: {}
  },
  setup(__props) {
    const svg = computed(() => {
      if (__props.type === "svg" && typeof __props.name === "object" && "svg" in __props.name) {
        return __props.name.svg;
      }
      return "";
    });
    const link = computed(() => {
      if (__props.type === "link") {
        const link2 = __props.name;
        return isLinkHttp(link2) ? link2 : withBase(link2);
      }
      return "";
    });
    return (_ctx, _cache) => {
      return __props.type === "link" ? (openBlock(), createElementBlock("span", _hoisted_1$19, [
        createBaseVNode("img", {
          src: link.value,
          alt: "",
          style: normalizeStyle({ height: __props.size?.height })
        }, null, 12, _hoisted_2$N)
      ])) : __props.type === "svg" ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: "vp-icon",
        style: normalizeStyle({ color: __props.color, ...__props.size }),
        "aria-hidden": "",
        innerHTML: svg.value
      }, null, 12, _hoisted_3$D)) : createCommentVNode("", true);
    };
  }
});
const VPIconImage = /* @__PURE__ */ _export_sfc(_sfc_main$1y, [["__scopeId", "data-v-bcce622c"]]);
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  __name: "VPIcon",
  props: {
    provider: {},
    name: {},
    size: {},
    color: {},
    extra: {}
  },
  setup(__props) {
    const type = computed(() => {
      if (typeof __props.name === "string" && (isLinkHttp(__props.name) || __props.name[0] === "/")) {
        return "link";
      }
      if (typeof __props.name === "object" && !!__props.name.svg) {
        return "svg";
      }
      const _provider = __props.provider || "iconify";
      if (_provider === "iconfont" || _provider === "fontawesome") {
        return _provider;
      }
      return "iconify";
    });
    function parseSize(size) {
      if (String(Number(size)) === String(size))
        return `${size}px`;
      return String(size);
    }
    const rect = computed(() => {
      if (!__props.size)
        return void 0;
      const [width, height] = String(__props.size).replaceAll("px", "[UNIT]").split("x").map((s2) => parseSize(s2.replaceAll("[UNIT]", "px").trim()));
      return { width, height: height || width };
    });
    const binding = computed(() => ({
      name: __props.name,
      color: __props.color,
      size: rect.value,
      prefix: ""
    }));
    return (_ctx, _cache) => {
      return type.value === "link" || type.value === "svg" ? (openBlock(), createBlock(VPIconImage, {
        key: 0,
        type: type.value,
        name: __props.name,
        color: __props.color,
        size: rect.value
      }, null, 8, ["type", "name", "color", "size"])) : type.value === "iconfont" ? (openBlock(), createBlock(_sfc_main$1A, normalizeProps(mergeProps({ key: 1 }, binding.value)), null, 16)) : type.value === "fontawesome" ? (openBlock(), createBlock(_sfc_main$1B, mergeProps({
        key: 2,
        extra: __props.extra
      }, { ...binding.value, ..._ctx.$attrs }), null, 16, ["extra"])) : type.value === "iconify" ? (openBlock(), createBlock(_sfc_main$1z, mergeProps({
        key: 3,
        extra: __props.extra
      }, binding.value), null, 16, ["extra"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$18 = { class: "vp-card-wrapper" };
const _hoisted_2$M = {
  key: 0,
  class: "title"
};
const _hoisted_3$C = ["innerHTML"];
const _hoisted_4$v = { class: "body" };
const _sfc_main$1w = /* @__PURE__ */ defineComponent({
  __name: "VPCard",
  props: {
    title: {},
    icon: { default: "" }
  },
  setup(__props) {
    const iconName = computed(() => {
      if (typeof __props.icon === "string" && __props.icon?.[0] === "{") {
        try {
          return JSON.parse(__props.icon);
        } catch {
        }
      }
      return __props.icon;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", _hoisted_1$18, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          __props.title || __props.icon ? (openBlock(), createElementBlock("p", _hoisted_2$M, [
            __props.icon ? (openBlock(), createBlock(_sfc_main$1x, {
              key: 0,
              name: iconName.value
            }, null, 8, ["name"])) : createCommentVNode("", true),
            __props.title ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: "text",
              innerHTML: __props.title
            }, null, 8, _hoisted_3$C)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], true),
        createBaseVNode("div", _hoisted_4$v, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
const VPCard = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["__scopeId", "data-v-b6e0f1e4"]]);
const _sfc_main$1v = /* @__PURE__ */ defineComponent({
  __name: "VPCardGrid",
  props: {
    cols: {}
  },
  setup(__props) {
    const md = useMediaQuery("(min-width: 768px)");
    const lg = useMediaQuery("(min-width: 960px)");
    const repeat = ref(1);
    function resolveCols() {
      const reset = { sm: 1, md: 2, lg: 2 };
      if (!__props.cols)
        return reset;
      if (typeof __props.cols === "number" || typeof __props.cols === "string") {
        const res = Number(__props.cols);
        return { sm: res, md: res, lg: res };
      }
      return { ...reset, ...toValue(__props.cols) };
    }
    function getRepeat() {
      const cols = resolveCols();
      if (lg.value)
        return cols.lg;
      if (md.value)
        return cols.md;
      return cols.sm;
    }
    watch([md, lg, () => __props.cols], () => {
      repeat.value = getRepeat();
    });
    onMounted(() => {
      repeat.value = getRepeat();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-card-grid", [`cols-${repeat.value}`]]),
        style: normalizeStyle({ gridTemplateColumns: `repeat(${repeat.value}, 1fr)` })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6);
    };
  }
});
const VPCardGrid = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["__scopeId", "data-v-1b5d47b6"]]);
const _sfc_main$1u = /* @__PURE__ */ defineComponent({
  __name: "VPCardMasonry",
  props: {
    cols: { default: () => ({ sm: 2, md: 2, lg: 3 }) },
    gap: { default: 16 }
  },
  setup(__props) {
    const slots = useSlots();
    const uuid = useId();
    const columnsLength = ref(3);
    const isMd = useMediaQuery("(min-width: 640px)");
    const isLg = useMediaQuery("(min-width: 960px)");
    const rawList = computed(() => {
      const res = slots.default?.();
      return (Array.isArray(res) ? res : [res]).map(
        (item, index) => markRaw(cloneVNode(item, mergeProps(item.props ?? {}, { class: `masonry-${uuid}-${index}` })))
      );
    });
    function resolveColumnsLength() {
      let length = 1;
      if (typeof __props.cols === "number") {
        length = __props.cols;
      } else if (typeof __props.cols === "object") {
        if (isLg.value)
          length = __props.cols.lg || 3;
        else if (isMd.value)
          length = __props.cols.md || 2;
        else
          length = __props.cols.sm || 2;
      }
      columnsLength.value = Number(length);
    }
    const columnsList = shallowRef([]);
    const masonry = shallowRef();
    async function drawColumns() {
      await nextTick();
      if (!masonry.value)
        return;
      const columns = Array.from({ length: columnsLength.value }, () => []);
      const heights = Array.from({ length: columnsLength.value }, () => 0);
      for (let i2 = 0; i2 < rawList.value.length; i2++) {
        const item = rawList.value[i2];
        const el = masonry.value.querySelector(`.masonry-${uuid}-${i2}`);
        const height = el?.offsetHeight ?? 0;
        const index = heights.indexOf(Math.min(...heights));
        columns[index].push(item);
        heights[index] += height + __props.gap;
      }
      columnsList.value = columns;
    }
    onMounted(() => {
      watch([isMd, isLg, () => __props.cols], resolveColumnsLength, { immediate: true });
      drawColumns();
      const debounceDraw = /* @__PURE__ */ useDebounceFn(drawColumns);
      watch([rawList, columnsLength], debounceDraw, { flush: "post" });
      useResizeObserver(masonry, debounceDraw);
    });
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", {
        ref_key: "masonry",
        ref: masonry,
        class: normalizeClass(["vp-card-masonry", [`cols-${columnsLength.value}`]]),
        style: normalizeStyle({ "grid-gap": `${__props.gap}px`, "--card-masonry-cols": columnsLength.value }),
        "data-allow-mismatch": ""
      }, [
        createVNode(_component_ClientOnly, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(columnsList.value, (column, index) => {
              return openBlock(), createElementBlock("div", {
                key: `${unref(uuid)}-${index}`,
                class: "card-masonry-item",
                style: normalizeStyle({ gap: `${__props.gap}px` })
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(column, (item) => {
                  return openBlock(), createBlock(resolveDynamicComponent(item), {
                    key: item.props.class
                  });
                }), 128))
              ], 4);
            }), 128))
          ]),
          _: 1
        })
      ], 6);
    };
  }
});
const _hoisted_1$17 = { class: "image-container" };
const _hoisted_2$L = ["src", "alt"];
const _hoisted_3$B = {
  key: 0,
  class: "image-info"
};
const _hoisted_4$u = {
  key: 0,
  class: "title"
};
const _hoisted_5$n = ["href"];
const _hoisted_6$f = { key: 1 };
const _hoisted_7$c = {
  key: 1,
  class: "copyright"
};
const _hoisted_8$a = { key: 0 };
const _hoisted_9$5 = { key: 1 };
const _hoisted_10$3 = { key: 2 };
const _hoisted_11$2 = {
  key: 2,
  class: "description"
};
const _sfc_main$1t = /* @__PURE__ */ defineComponent({
  __name: "VPImageCard",
  props: {
    image: {},
    title: {},
    description: {},
    href: {},
    author: {},
    date: {},
    width: {},
    center: { type: Boolean }
  },
  setup(__props) {
    const lang = usePageLang();
    const dateStr = computed(() => {
      if (!__props.date)
        return "";
      const instance = __props.date instanceof Date ? __props.date : new Date(__props.date);
      const intl = new Intl.DateTimeFormat(
        lang.value,
        { year: "numeric", month: "short", day: "numeric" }
      );
      return intl.format(instance);
    });
    const styles = computed(() => ({
      width: __props.width ? String(Number(__props.width)) === String(__props.width) ? `${__props.width}px` : __props.width : void 0
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-image-card", { center: __props.center }]),
        style: normalizeStyle(styles.value)
      }, [
        createBaseVNode("div", _hoisted_1$17, [
          createBaseVNode("img", {
            src: unref(withBase)(__props.image),
            alt: __props.title,
            loading: "lazy"
          }, null, 8, _hoisted_2$L),
          __props.title || __props.author || dateStr.value || __props.description ? (openBlock(), createElementBlock("div", _hoisted_3$B, [
            __props.title ? (openBlock(), createElementBlock("h3", _hoisted_4$u, [
              __props.href ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: __props.href,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "no-icon"
              }, toDisplayString(__props.title), 9, _hoisted_5$n)) : (openBlock(), createElementBlock("span", _hoisted_6$f, toDisplayString(__props.title), 1))
            ])) : createCommentVNode("", true),
            __props.author || __props.date ? (openBlock(), createElementBlock("p", _hoisted_7$c, [
              __props.author ? (openBlock(), createElementBlock("span", _hoisted_8$a, toDisplayString(__props.author), 1)) : createCommentVNode("", true),
              __props.author && dateStr.value ? (openBlock(), createElementBlock("span", _hoisted_9$5, " | ")) : createCommentVNode("", true),
              dateStr.value ? (openBlock(), createElementBlock("span", _hoisted_10$3, toDisplayString(dateStr.value), 1)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            __props.description ? (openBlock(), createElementBlock("p", _hoisted_11$2, toDisplayString(__props.description), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])
      ], 6);
    };
  }
});
const VPImageCard = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["__scopeId", "data-v-70f418f0"]]);
const _sfc_main$1s = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    text: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const { link, isExternal, isExternalProtocol } = useLink(toRef$1(props, "href"), toRef$1(props, "target"));
    function linkTo(e) {
      if (!isExternal.value && link.value) {
        e.preventDefault();
        router.push(link.value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(tag.value), {
        class: normalizeClass(["vp-link", { link: unref(link), "no-icon": __props.noIcon, "vp-external-link-icon": unref(isExternal) }]),
        href: unref(link) ? unref(isExternalProtocol) ? unref(link) : unref(isExternal) ? unref(link) : unref(withBase)(unref(link)) : void 0,
        target: __props.target ?? (unref(isExternal) ? "_blank" : void 0),
        rel: __props.rel ?? (unref(isExternal) ? "noreferrer" : void 0),
        onClick: _cache[0] || (_cache[0] = ($event) => linkTo($event))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.text || __props.href), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _hoisted_1$16 = { class: "vp-link-card" };
const _hoisted_2$K = { class: "body" };
const _hoisted_3$A = ["innerHTML"];
const _hoisted_4$t = ["innerHTML"];
const _sfc_main$1r = /* @__PURE__ */ defineComponent({
  __name: "VPLinkCard",
  props: {
    href: {},
    title: {},
    icon: {},
    description: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$16, [
        createBaseVNode("span", _hoisted_2$K, [
          createVNode(_sfc_main$1s, mergeProps({
            href: __props.href,
            "no-icon": "",
            class: "link no-icon"
          }, { target: __props.target, rel: __props.rel }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "title", {}, () => [
                __props.icon ? (openBlock(), createBlock(_sfc_main$1x, {
                  key: 0,
                  name: __props.icon
                }, null, 8, ["name"])) : createCommentVNode("", true),
                __props.title ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "text",
                  innerHTML: __props.title
                }, null, 8, _hoisted_3$A)) : createCommentVNode("", true)
              ], true)
            ]),
            _: 3
          }, 16, ["href"]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            __props.description ? (openBlock(), createElementBlock("p", {
              key: 0,
              innerHTML: __props.description
            }, null, 8, _hoisted_4$t)) : createCommentVNode("", true)
          ], true)
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-arrow-right" }, null, -1))
      ]);
    };
  }
});
const VPLinkCard = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["__scopeId", "data-v-55000d98"]]);
const _sfc_main$1q = /* @__PURE__ */ defineComponent({
  __name: "VPHomeBox",
  props: {
    type: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {},
    containerClass: {}
  },
  setup(__props) {
    const isDark = useDarkMode();
    const styles = computed(() => {
      if (!__props.backgroundImage)
        return null;
      const image = typeof __props.backgroundImage === "string" ? __props.backgroundImage : __props.backgroundImage[isDark.value ? "dark" : "light"] ?? __props.backgroundImage.light;
      if (!image)
        return null;
      const link = isLinkHttp(image) ? __props.backgroundImage : withBase(image);
      return {
        "background-image": `url(${link})`,
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-attachment": __props.backgroundAttachment || ""
      };
    });
    const containerClasses = computed(() => normalizeClass(__props.containerClass || ""));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-home-box", { full: __props.full }]),
        style: normalizeStyle(styles.value)
      }, [
        renderSlot(_ctx.$slots, "before"),
        createBaseVNode("div", {
          class: normalizeClass(["container", containerClasses.value])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        renderSlot(_ctx.$slots, "after")
      ], 6);
    };
  }
});
const _hoisted_1$15 = { class: "button-content" };
const _sfc_main$1p = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: { default: "" },
    href: {},
    target: {},
    rel: {},
    icon: {},
    suffixIcon: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const component = computed(() => {
      return props.tag || props.href ? "a" : "button";
    });
    const { link, isExternal, isExternalProtocol } = useLink(toRef$1(props, "href"), toRef$1(props, "target"));
    function linkTo(e) {
      if (!isExternal.value && link.value?.[0] !== "#") {
        e.preventDefault();
        if (link.value)
          router.push(link.value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(component.value), {
        class: normalizeClass(["vp-button", [__props.size, __props.theme]]),
        href: unref(link) ? unref(link)[0] === "#" || unref(isExternalProtocol) ? unref(link) : unref(withBase)(unref(link)) : void 0,
        target: __props.target ?? (unref(isExternal) ? "_blank" : void 0),
        rel: __props.rel ?? (unref(isExternal) ? "noreferrer" : void 0),
        onClick: _cache[0] || (_cache[0] = ($event) => linkTo($event))
      }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$15, [
            __props.icon ? (openBlock(), createBlock(_sfc_main$1x, {
              key: 0,
              name: __props.icon
            }, null, 8, ["name"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              createBaseVNode("span", null, toDisplayString(__props.text), 1)
            ], true),
            __props.suffixIcon ? (openBlock(), createBlock(_sfc_main$1x, {
              key: 1,
              name: __props.suffixIcon
            }, null, 8, ["name"])) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["__scopeId", "data-v-7fe383a1"]]);
const _sfc_main$1o = {};
const _hoisted_1$14 = {
  class: "vp-switch",
  type: "button",
  role: "switch"
};
const _hoisted_2$J = { class: "check" };
const _hoisted_3$z = {
  key: 0,
  class: "icon"
};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$14, [
    createBaseVNode("span", _hoisted_2$J, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$z, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["render", _sfc_render$2], ["__scopeId", "data-v-7eb32327"]]);
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props) {
    const checked = ref(false);
    const { theme, isDark } = useData();
    const transitionMode = computed(() => {
      const transition = theme.value.transition;
      const options = typeof transition === "object" ? transition : {};
      if (transition === false || options.appearance === false)
        return false;
      return typeof options.appearance === "string" ? options.appearance : "fade";
    });
    const toggleAppearance = inject("toggle-appearance", async ({ clientX, clientY }) => {
      if (!enableTransitions() || transitionMode.value === false) {
        isDark.value = !isDark.value;
        return;
      }
      await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
      }).ready;
      const { keyframes, duration } = resolveTransitionKeyframes(
        clientX,
        clientY,
        transitionMode.value,
        isDark.value
      );
      document.documentElement.animate(
        keyframes,
        {
          duration,
          easing: "ease-in",
          fill: "forwards",
          pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`
        }
      );
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme.value.lightModeSwitchTitle || "Switch to light theme" : theme.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPSwitch, {
        class: "vp-switch-appearance",
        title: switchTitle.value,
        "aria-checked": checked.value,
        onClick: unref(toggleAppearance)
      }, {
        default: withCtx(() => [..._cache[0] || (_cache[0] = [
          createBaseVNode("span", { class: "vpi-sun sun" }, null, -1),
          createBaseVNode("span", { class: "vpi-moon moon" }, null, -1)
        ])]),
        _: 1
      }, 8, ["title", "aria-checked", "onClick"]);
    };
  }
});
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["__scopeId", "data-v-936ae0f2"]]);
const _hoisted_1$13 = {
  key: 0,
  class: "vp-navbar-appearance"
};
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      return unref(theme).appearance && unref(theme).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_1$13, [
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["__scopeId", "data-v-a295abf6"]]);
const _hoisted_1$12 = { class: "vp-menu-link" };
const _sfc_main$1l = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$12, [
        createVNode(_sfc_main$1s, {
          class: normalizeClass({
            active: unref(isActive)(
              unref(page).path,
              __props.item.activeMatch || unref(resolveRouteFullPath)(__props.item.link),
              !!__props.item.activeMatch
            )
          }),
          href: __props.item.link
        }, {
          default: withCtx(() => [
            __props.item.icon ? (openBlock(), createBlock(_sfc_main$1x, {
              key: 0,
              name: __props.item.icon
            }, null, 8, ["name"])) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(__props.item.text) + " ", 1),
            __props.item.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
              key: 1,
              class: "vp-menu-badge"
            }, typeof __props.item.badge === "string" ? { text: __props.item.badge } : __props.item.badge), null, 16)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class", "href"])
      ]);
    };
  }
});
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["__scopeId", "data-v-4cd00159"]]);
const _hoisted_1$11 = { class: "vp-menu-group" };
const _hoisted_2$I = {
  key: 0,
  class: "title"
};
const _hoisted_3$y = ["textContent"];
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    icon: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$11, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$I, [
          __props.icon ? (openBlock(), createBlock(_sfc_main$1x, {
            key: 0,
            name: __props.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createBaseVNode("span", {
            textContent: toDisplayString(__props.text)
          }, null, 8, _hoisted_3$y)
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(VPMenuLink, {
              key: item?.link,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["__scopeId", "data-v-73b9b017"]]);
const _hoisted_1$10 = { class: "vp-menu" };
const _hoisted_2$H = {
  key: 0,
  class: "items"
};
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$10, [
        __props.items ? (openBlock(), createElementBlock("div", _hoisted_2$H, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createBlock(VPMenuLink, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createBlock(VPMenuGroup, {
                key: 1,
                text: item.text,
                items: item.items,
                icon: item.icon
              }, null, 8, ["text", "items", "icon"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-ce500c40"]]);
const _hoisted_1$$ = ["aria-expanded", "aria-label"];
const _hoisted_2$G = {
  key: 0,
  class: "text"
};
const _hoisted_3$x = ["innerHTML"];
const _hoisted_4$s = {
  key: 1,
  class: "vpi-more-horizontal icon"
};
const _hoisted_5$m = { class: "menu" };
const _sfc_main$1i = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  props: {
    prefixIcon: {},
    icon: {},
    button: {},
    label: {},
    items: {},
    badge: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "vp-flyout",
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false),
        onFocus: _cache[3] || (_cache[3] = ($event) => open.value = true),
        onBlur: _cache[4] || (_cache[4] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": __props.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          __props.button || __props.icon ? (openBlock(), createElementBlock("span", _hoisted_2$G, [
            __props.prefixIcon ? (openBlock(), createBlock(_sfc_main$1x, {
              key: 0,
              name: __props.prefixIcon
            }, null, 8, ["name"])) : createCommentVNode("", true),
            __props.icon ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(["option-icon", [__props.icon]])
            }, null, 2)) : createCommentVNode("", true),
            __props.button ? (openBlock(), createElementBlock("span", {
              key: 2,
              innerHTML: __props.button
            }, null, 8, _hoisted_3$x)) : createCommentVNode("", true),
            __props.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
              key: 3,
              class: "vp-menu-badge"
            }, typeof __props.badge === "string" ? { text: __props.badge } : __props.badge), null, 16)) : createCommentVNode("", true),
            _cache[5] || (_cache[5] = createBaseVNode("span", { class: "vpi-chevron-down text-icon" }, null, -1))
          ])) : (openBlock(), createElementBlock("span", _hoisted_4$s))
        ], 8, _hoisted_1$$),
        createBaseVNode("div", _hoisted_5$m, [
          createVNode(VPMenu, { items: __props.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["__scopeId", "data-v-df44e5e2"]]);
const _hoisted_1$_ = ["href", "aria-label", "innerHTML"];
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const svg = computed(() => {
      if (typeof __props.icon === "object")
        return __props.icon.svg;
      return `<span class="vpi-social-${__props.icon}" />`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: "vp-social-link no-icon",
        href: __props.link,
        "aria-label": __props.ariaLabel ?? (typeof __props.icon === "string" ? __props.icon : ""),
        target: "_blank",
        rel: "noopener",
        innerHTML: svg.value
      }, null, 8, _hoisted_1$_);
    };
  }
});
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["__scopeId", "data-v-69b76a62"]]);
const _hoisted_1$Z = { class: "vp-social-links" };
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$Z, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, ({ link, icon }) => {
          return openBlock(), createBlock(VPSocialLink, {
            key: link,
            icon,
            link
          }, null, 8, ["icon", "link"]);
        }), 128))
      ]);
    };
  }
});
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["__scopeId", "data-v-adbced0f"]]);
const _hoisted_1$Y = {
  key: 0,
  class: "group translations"
};
const _hoisted_2$F = { class: "trans-title" };
const _hoisted_3$w = {
  key: 1,
  class: "group"
};
const _hoisted_4$r = { class: "item appearance" };
const _hoisted_5$l = { class: "label" };
const _hoisted_6$e = { class: "appearance-action" };
const _hoisted_7$b = {
  key: 2,
  class: "group"
};
const _hoisted_8$9 = { class: "item social-links" };
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { theme } = useData();
    const { localeLinks, currentLang } = useLangs();
    const social = computed(() => {
      const includes = theme.value.navbarSocialInclude ?? [];
      if (!includes.length)
        return theme.value.social;
      return theme.value.social?.filter(({ icon }) => {
        if (typeof icon === "string")
          return includes.includes(icon);
        if (icon.name)
          return includes.includes(icon.name);
        return false;
      });
    });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.text || theme.value.appearance || social.value?.length
    );
    return (_ctx, _cache) => {
      return hasExtraContent.value ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "vp-navbar-extra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(localeLinks).length && unref(currentLang).text ? (openBlock(), createElementBlock("div", _hoisted_1$Y, [
            createBaseVNode("p", _hoisted_2$F, toDisplayString(unref(currentLang).text), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])) : createCommentVNode("", true),
          unref(theme).appearance && unref(theme).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_3$w, [
            createBaseVNode("div", _hoisted_4$r, [
              createBaseVNode("p", _hoisted_5$l, toDisplayString(unref(theme).appearanceText || "Appearance"), 1),
              createBaseVNode("div", _hoisted_6$e, [
                createVNode(VPSwitchAppearance)
              ])
            ])
          ])) : createCommentVNode("", true),
          social.value ? (openBlock(), createElementBlock("div", _hoisted_7$b, [
            createBaseVNode("div", _hoisted_8$9, [
              createVNode(VPSocialLinks, {
                class: "social-links-list",
                links: social.value
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-4632e16b"]]);
const _hoisted_1$X = ["aria-expanded"];
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["vp-navbar-hamburger", { active: __props.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "nav-screen",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, [..._cache[1] || (_cache[1] = [
        createBaseVNode("span", { class: "container" }, [
          createBaseVNode("span", { class: "top" }),
          createBaseVNode("span", { class: "middle" }),
          createBaseVNode("span", { class: "bottom" })
        ], -1)
      ])], 10, _hoisted_1$X);
    };
  }
});
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-f00b45b2"]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    function isChildActive(navItem) {
      if ("link" in navItem) {
        return isActive(
          page.value.path,
          resolveRouteFullPath(navItem.link),
          !!__props.item.activeMatch
        );
      } else {
        return navItem.items.some(isChildActive);
      }
    }
    const childrenActive = computed(() => isChildActive(__props.item));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPFlyout, {
        class: normalizeClass(["vp-navbar-menu-group", {
          active: unref(isActive)(
            unref(page).path,
            __props.item.activeMatch,
            !!__props.item.activeMatch
          ) || childrenActive.value
        }]),
        button: __props.item.text,
        items: __props.item.items,
        "prefix-icon": __props.item.icon,
        badge: __props.item.badge
      }, null, 8, ["class", "button", "items", "prefix-icon", "badge"]);
    };
  }
});
const _hoisted_1$W = ["innerHTML"];
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1s, {
        class: normalizeClass(["navbar-menu-link", {
          active: unref(isActive)(
            unref(page).path,
            __props.item.activeMatch || unref(resolveRouteFullPath)(__props.item.link),
            !!__props.item.activeMatch
          )
        }]),
        href: __props.item.link,
        "no-icon": __props.item.noIcon,
        target: __props.item.target,
        rel: __props.item.rel,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          __props.item.icon ? (openBlock(), createBlock(_sfc_main$1x, {
            key: 0,
            name: __props.item.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$W),
          __props.item.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
            key: 1,
            class: "vp-menu-badge"
          }, typeof __props.item.badge === "string" ? { text: __props.item.badge } : __props.item.badge), null, 16)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class", "href", "no-icon", "target", "rel"]);
    };
  }
});
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-d1bfac4a"]]);
const _hoisted_1$V = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "vp-navbar-menu"
};
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const navbar = useNavbarData();
    return (_ctx, _cache) => {
      return unref(navbar).length ? (openBlock(), createElementBlock("nav", _hoisted_1$V, [
        _cache[0] || (_cache[0] = createBaseVNode("span", {
          id: "main-nav-aria-label",
          class: "visually-hidden"
        }, "Main Navigation", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbar), (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(_sfc_main$1d, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-d43c1732"]]);
const _sfc_main$1a = {};
const _hoisted_1$U = { class: "vp-navbar-search" };
function _sfc_render$1(_ctx, _cache) {
  const _component_SearchBox = resolveComponent("SearchBox");
  return openBlock(), createElementBlock("div", _hoisted_1$U, [
    createVNode(_component_SearchBox)
  ]);
}
const VPNavBarSearch = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$1]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { theme } = useData();
    const social = computed(() => {
      const includes = theme.value.navbarSocialInclude ?? [];
      if (!includes.length)
        return theme.value.social;
      return theme.value.social?.filter(({ icon }) => {
        if (typeof icon === "string")
          return includes.includes(icon);
        if (icon.name)
          return includes.includes(icon.name);
        return false;
      });
    });
    return (_ctx, _cache) => {
      return social.value ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "vp-navbar-social-links",
        links: social.value
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-ad52545c"]]);
const _hoisted_1$T = ["src", "alt"];
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    const styles = computed(() => {
      if (!__props.image || typeof __props.image === "string")
        return "";
      if (!__props.image.width || !__props.image.height)
        return "";
      return {
        width: numToUnit(__props.image.width),
        height: numToUnit(__props.image.height)
      };
    });
    return (_ctx, _cache) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      return __props.image ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof __props.image === "string" || "src" in __props.image ? (openBlock(), createElementBlock("img", mergeProps({
          key: 0,
          class: "vp-image",
          style: styles.value
        }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
          src: unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src),
          alt: __props.alt ?? (typeof __props.image === "string" ? "" : __props.image.alt || "")
        }), null, 16, _hoisted_1$T)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"]),
          createVNode(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-b173f822"]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { theme, site } = useData();
    const { hasSidebar } = useSidebar();
    const routeLocale = useRouteLocale();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-navbar-title", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createVNode(_sfc_main$1s, {
          class: "title",
          href: unref(theme).home ?? unref(routeLocale),
          "no-icon": ""
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true),
            unref(theme).logo ? (openBlock(), createBlock(VPImage, {
              key: 0,
              class: "logo",
              image: { light: unref(theme).logo, dark: unref(theme).logoDark || unref(theme).logo }
            }, null, 8, ["image"])) : createCommentVNode("", true),
            createBaseVNode("span", null, toDisplayString(unref(site).title), 1),
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["href"])
      ], 2);
    };
  }
});
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-1a4f50af"]]);
const _hoisted_1$S = { class: "items" };
const _hoisted_2$E = { class: "title" };
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { theme } = useData();
    const { currentLang, localeLinks } = useLangs();
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).text ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "vp-navbar-translations",
        icon: "vpi-languages",
        label: unref(theme).selectLanguageText || "Change Language"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$S, [
            createBaseVNode("p", _hoisted_2$E, toDisplayString(unref(currentLang).text), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["label"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-0d45479b"]]);
const _hoisted_1$R = { class: "wrapper" };
const _hoisted_2$D = { class: "container" };
const _hoisted_3$v = { class: "title" };
const _hoisted_4$q = { class: "content" };
const _hoisted_5$k = { class: "content-body" };
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggleScreen"],
  setup(__props) {
    const { frontmatter } = useData();
    const { y: y2 } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.pageLayout === "home",
        "top": y2.value === 0,
        "screen-open": __props.isScreenOpen
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-navbar", classes.value]),
        "vp-navbar": ""
      }, [
        createBaseVNode("div", _hoisted_1$R, [
          createBaseVNode("div", _hoisted_2$D, [
            createBaseVNode("div", _hoisted_3$v, [
              createVNode(VPNavBarTitle, null, {
                "nav-bar-title-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
                ]),
                "nav-bar-title-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
                ]),
                _: 3
              })
            ]),
            createBaseVNode("div", _hoisted_4$q, [
              createBaseVNode("div", _hoisted_5$k, [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true),
                createVNode(VPNavBarSearch, { class: "search" }),
                renderSlot(_ctx.$slots, "nav-bar-menu-before", {}, void 0, true),
                createVNode(VPNavBarMenu, { class: "menu" }),
                renderSlot(_ctx.$slots, "nav-bar-menu-after", {}, void 0, true),
                createVNode(VPNavBarTranslations, { class: "translations" }),
                createVNode(VPNavBarAppearance, { class: "appearance" }),
                createVNode(VPNavBarSocialLinks, { class: "social-links" }),
                createVNode(VPNavBarExtra, { class: "extra" }),
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true),
                createVNode(VPNavBarHamburger, {
                  class: "hamburger",
                  active: __props.isScreenOpen,
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggleScreen"))
                }, null, 8, ["active"])
              ])
            ])
          ])
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "divider" }, [
          createBaseVNode("div", { class: "divider-line" })
        ], -1))
      ], 2);
    };
  }
});
const VPNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-25617862"]]);
const _hoisted_1$Q = {
  key: 0,
  class: "vp-nav-screen-appearance"
};
const _hoisted_2$C = { class: "text" };
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      return unref(theme).appearance && unref(theme).appearance !== "force-dark" ? (openBlock(), createElementBlock("div", _hoisted_1$Q, [
        createBaseVNode("p", _hoisted_2$C, toDisplayString(unref(theme).appearanceText ?? "Appearance"), 1),
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-4be3fcac"]]);
const _hoisted_1$P = ["innerHTML"];
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1s, {
        class: "vp-nav-screen-menu-group-link",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          __props.item.icon ? (openBlock(), createBlock(_sfc_main$1x, {
            key: 0,
            name: __props.item.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$P),
          __props.item.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
            key: 1,
            class: "vp-menu-badge"
          }, typeof __props.item.badge === "string" ? { text: __props.item.badge } : __props.item.badge), null, 16)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "no-icon", "onClick"]);
    };
  }
});
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-8f2bcf5f"]]);
const _hoisted_1$O = { class: "vp-nav-screen-menu-group-section" };
const _hoisted_2$B = {
  key: 0,
  class: "title"
};
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    icon: {},
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$O, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$B, [
          __props.icon ? (openBlock(), createBlock(_sfc_main$1x, {
            key: 0,
            name: __props.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(__props.text), 1)
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-2da8e129"]]);
const _hoisted_1$N = ["aria-controls", "aria-expanded"];
const _hoisted_2$A = { class: "button-text" };
const _hoisted_3$u = ["innerHTML"];
const _hoisted_4$p = ["id"];
const _hoisted_5$j = { class: "items" };
const _hoisted_6$d = {
  key: 1,
  class: "group"
};
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    icon: {},
    badge: {},
    items: {}
  },
  setup(__props) {
    const isOpen = ref(false);
    const groupId = computed(
      () => `nav-screen-menu-group-${__props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-nav-screen-menu-group", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": groupId.value,
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", _hoisted_2$A, [
            __props.icon ? (openBlock(), createBlock(_sfc_main$1x, {
              key: 0,
              name: __props.icon
            }, null, 8, ["name"])) : createCommentVNode("", true),
            createBaseVNode("span", { innerHTML: __props.text }, null, 8, _hoisted_3$u),
            __props.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
              key: 1,
              class: "vp-menu-badge"
            }, typeof __props.badge === "string" ? { text: __props.badge } : __props.badge), null, 16)) : createCommentVNode("", true)
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-plus button-icon" }, null, -1))
        ], 8, _hoisted_1$N),
        createVNode(unref(FadeInExpandTransition), null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              id: groupId.value,
              class: "vp-nav-screen-menu-group-container"
            }, [
              createBaseVNode("div", _hoisted_5$j, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: item.text
                  }, [
                    "link" in item ? (openBlock(), createElementBlock("div", {
                      key: item.text,
                      class: "item"
                    }, [
                      createVNode(VPNavScreenMenuGroupLink, { item }, null, 8, ["item"])
                    ])) : (openBlock(), createElementBlock("div", _hoisted_6$d, [
                      createVNode(VPNavScreenMenuGroupSection, {
                        text: item.text,
                        items: item.items,
                        icon: item.icon
                      }, null, 8, ["text", "items", "icon"])
                    ]))
                  ], 64);
                }), 128))
              ])
            ], 8, _hoisted_4$p), [
              [vShow, isOpen.value]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-845b5a88"]]);
const _hoisted_1$M = ["innerHTML"];
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1s, {
        class: "vp-nav-screen-menu-link",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          __props.item.icon ? (openBlock(), createBlock(_sfc_main$1x, {
            key: 0,
            name: __props.item.icon
          }, null, 8, ["name"])) : createCommentVNode("", true),
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$M),
          __props.item.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
            key: 1,
            class: "vp-menu-badge"
          }, typeof __props.item.badge === "string" ? { text: __props.item.badge } : __props.item.badge), null, 16)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "no-icon", "onClick"]);
    };
  }
});
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-fcdcea0a"]]);
const _hoisted_1$L = {
  key: 0,
  class: "vp-nav-screen-menu"
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const navbar = useNavbarData();
    return (_ctx, _cache) => {
      return unref(navbar).length ? (openBlock(), createElementBlock("nav", _hoisted_1$L, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbar), (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: item.text
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
              key: 1,
              text: item.text || "",
              items: item.items,
              icon: item.icon,
              badge: item.badge
            }, null, 8, ["text", "items", "icon", "badge"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      return unref(theme).social ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "vp-nav-screen-social-links",
        links: unref(theme).social
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$K = { class: "vp-nav-screen-translations-container" };
const _hoisted_2$z = { class: "list" };
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  setup(__props) {
    const { localeLinks, currentLang } = useLangs();
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).text ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["vp-nav-screen-translations", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "title",
          onClick: toggle
        }, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-languages icon lang" }, null, -1)),
          createTextVNode(" " + toDisplayString(unref(currentLang).text) + " ", 1),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-chevron-down icon chevron" }, null, -1))
        ]),
        createVNode(unref(FadeInExpandTransition), null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", _hoisted_1$K, [
              createBaseVNode("ul", _hoisted_2$z, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                  return openBlock(), createElementBlock("li", {
                    key: locale.link,
                    class: "item"
                  }, [
                    createVNode(_sfc_main$1s, {
                      class: "link",
                      href: locale.link
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(locale.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 128))
              ])
            ], 512), [
              [vShow, isOpen.value]
            ])
          ]),
          _: 1
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenTranslates = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-55d55931"]]);
const _hoisted_1$J = {
  key: 0,
  id: "navScreen",
  class: "vp-nav-screen"
};
const _hoisted_2$y = { class: "container" };
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade-in",
        onEnter: _cache[0] || (_cache[0] = ($event) => isLocked.value = true),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => isLocked.value = false)
      }, {
        default: withCtx(() => [
          __props.open ? (openBlock(), createElementBlock("div", _hoisted_1$J, [
            createBaseVNode("div", _hoisted_2$y, [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true),
              renderSlot(_ctx.$slots, "nav-screen-menu-before", {}, void 0, true),
              createVNode(_sfc_main$$, { class: "menu" }),
              renderSlot(_ctx.$slots, "nav-screen-menu-after", {}, void 0, true),
              createVNode(VPNavScreenTranslates, { class: "translations" }),
              createVNode(VPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$_, { class: "social-links" }),
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-d6e30149"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { page, frontmatter } = useData();
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const fixedInclude = ["posts", "friends", "posts-archives", "posts-tags", "posts-categories"];
    const fixed = computed(() => {
      return fixedInclude.includes(page.value.type);
    });
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _cache) => {
      return hasNavbar.value ? (openBlock(), createElementBlock("header", {
        key: 0,
        class: normalizeClass(["vp-nav", { fixed: fixed.value }])
      }, [
        createVNode(VPNavbar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ]),
          "nav-bar-menu-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-menu-before", {}, void 0, true)
          ]),
          "nav-bar-menu-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-menu-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ]),
          "nav-screen-menu-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-menu-before", {}, void 0, true)
          ]),
          "nav-screen-menu-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-menu-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-c78b6b77"]]);
const _hoisted_1$I = {
  key: 0,
  class: "vp-backdrop"
};
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade-in" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$I)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-995e2b1d"]]);
const _hoisted_1$H = { "aria-hidden": "true" };
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPBackToTop",
  setup(__props) {
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = /* @__PURE__ */ useWindowSize();
    onMounted(() => {
      body.value = document.body;
    });
    const { page } = useData();
    const { y: y2 } = useWindowScroll();
    const isScrolling = ref(false);
    const progress = computed(
      () => y2.value / (bodyHeight.value - windowHeight.value) * 100
    );
    const percent = computed(() => `${Math.min(Math.round(progress.value), 100) || 0}%`);
    const stroke = computed(
      () => `calc(${Math.PI * progress.value}% - ${4 * Math.PI}px) calc(${Math.PI * 100}% - ${4 * Math.PI}px)`
    );
    const mustHidden = computed(() => {
      return page.value.frontmatter.backToTop === false || page.value.frontmatter.pageLayout === "home" && page.value.frontmatter.config && page.value.frontmatter.config.length <= 1;
    });
    const show = computed(() => {
      if (bodyHeight.value < windowHeight.value)
        return false;
      else
        return y2.value > windowHeight.value / 2;
    });
    let timer = null;
    function resetScrolling() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        isScrolling.value = false;
      }, 1e3);
    }
    watch(y2, () => {
      isScrolling.value = true;
      resetScrolling();
    });
    function handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade-in" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("button", {
            type: "button",
            class: "vp-back-to-top",
            "aria-label": "back to top",
            onClick: handleClick
          }, [
            createBaseVNode("span", {
              class: normalizeClass(["percent", { show: isScrolling.value }]),
              "data-allow-mismatch": ""
            }, toDisplayString(percent.value), 3),
            createBaseVNode("span", {
              class: normalizeClass(["icon vpi-back-to-top", { show: !isScrolling.value }])
            }, null, 2),
            (openBlock(), createElementBlock("svg", _hoisted_1$H, [
              createBaseVNode("circle", {
                cx: "50%",
                cy: "50%",
                "data-allow-mismatch": "",
                style: normalizeStyle({ "stroke-dasharray": stroke.value })
              }, null, 4)
            ]))
          ], 512), [
            [vShow, !mustHidden.value && (show.value || isScrolling.value)]
          ])
        ]),
        _: 1
      });
    };
  }
});
const VPBackToTop = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-bcf8d9a6"]]);
const _hoisted_1$G = ["innerHTML"];
const _hoisted_2$x = { class: "container" };
const _hoisted_3$t = ["innerHTML"];
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPBulletin",
  setup(__props) {
    const UserBulletin = hasGlobalComponent("Bulletin") ? resolveComponent("Bulletin") : null;
    const UserBulletinContent = hasGlobalComponent("BulletinContent") ? resolveComponent("BulletinContent") : null;
    const { bulletin, showBulletin: showBulletin2, enableBulletin, close } = useBulletinControl();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade-in-scale-up" }, {
        default: withCtx(() => [
          unref(UserBulletin) && unref(enableBulletin) && unref(showBulletin2) ? (openBlock(), createBlock(resolveDynamicComponent(unref(UserBulletin)), {
            key: 0,
            class: "vp-bulletin"
          })) : unref(bulletin) && unref(enableBulletin) && unref(showBulletin2) ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["vp-bulletin preset", {
              border: unref(bulletin).border ?? true,
              [unref(bulletin).layout ?? "top-right"]: true
            }])
          }, [
            createBaseVNode("button", {
              type: "button",
              class: "close",
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => unref(close) && unref(close)(...args))
            }, [..._cache[1] || (_cache[1] = [
              createBaseVNode("span", { class: "vpi-close" }, null, -1)
            ])]),
            renderSlot(_ctx.$slots, "bulletin-content", {}, () => [
              unref(bulletin).title ? (openBlock(), createElementBlock("h2", {
                key: 0,
                innerHTML: unref(bulletin).title
              }, null, 8, _hoisted_1$G)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_2$x, [
                unref(UserBulletinContent) ? (openBlock(), createBlock(resolveDynamicComponent(unref(UserBulletinContent)), {
                  key: 0,
                  class: "content vp-doc"
                })) : unref(bulletin).content ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "content vp-doc",
                  innerHTML: unref(bulletin).content
                }, null, 8, _hoisted_3$t)) : createCommentVNode("", true)
              ])
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const _hoisted_1$F = { class: "container" };
const _hoisted_2$w = { class: "content" };
const _hoisted_3$s = {
  key: 0,
  class: "hero-name"
};
const _hoisted_4$o = {
  key: 1,
  class: "hero-tagline"
};
const _hoisted_5$i = {
  key: 2,
  class: "hero-text"
};
const _hoisted_6$c = {
  key: 3,
  class: "actions"
};
const DEFAULT_BANNER = "https://api.pengzhanbo.cn/wallpaper/bing";
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPHomeBanner",
  props: {
    type: {},
    banner: {},
    bannerMask: {},
    hero: {},
    onlyOnce: { type: Boolean },
    full: { type: Boolean }
  },
  setup(__props) {
    const { isDark, frontmatter: matter } = useData();
    const mask = computed(() => {
      const mask2 = __props.bannerMask ?? matter.value.bannerMask;
      if (typeof mask2 !== "object")
        return mask2 || 0;
      return (isDark.value ? mask2.dark : mask2.light) || 0;
    });
    const bannerStyle = computed(() => {
      const _banner = __props.banner ?? matter.value.banner;
      const link = _banner ? isLinkHttp(_banner) ? _banner : withBase(_banner) : DEFAULT_BANNER;
      return {
        "background-image": `url(${link})`
      };
    });
    const name = computed(() => __props.hero?.name ?? matter.value.hero?.name ?? "Plume");
    const tagline = computed(() => __props.hero?.tagline ?? matter.value.hero?.tagline ?? "A VuePress Theme");
    const text = computed(() => __props.hero?.text ?? matter.value.hero?.text);
    const actions = computed(() => __props.hero?.actions ?? matter.value.hero?.actions ?? []);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vp-home-banner",
        style: normalizeStyle(bannerStyle.value)
      }, [
        createBaseVNode("div", {
          class: "banner-mask",
          style: normalizeStyle({ opacity: mask.value })
        }, null, 4),
        createBaseVNode("div", _hoisted_1$F, [
          createBaseVNode("div", _hoisted_2$w, [
            name.value ? (openBlock(), createElementBlock("h2", _hoisted_3$s, toDisplayString(name.value), 1)) : createCommentVNode("", true),
            tagline.value ? (openBlock(), createElementBlock("p", _hoisted_4$o, [
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "line" }, null, -1)),
              _cache[1] || (_cache[1] = createTextVNode()),
              createBaseVNode("span", null, toDisplayString(tagline.value), 1)
            ])) : createCommentVNode("", true),
            text.value ? (openBlock(), createElementBlock("p", _hoisted_5$i, toDisplayString(text.value), 1)) : createCommentVNode("", true),
            actions.value.length ? (openBlock(), createElementBlock("div", _hoisted_6$c, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(actions.value, (action) => {
                return openBlock(), createElementBlock("div", {
                  key: action.link,
                  class: "action"
                }, [
                  createVNode(VPButton, {
                    tag: "a",
                    size: "medium",
                    theme: action.theme,
                    text: action.text,
                    href: action.link
                  }, null, 8, ["theme", "text", "href"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 4);
    };
  }
});
const VPHomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-2c523912"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPHomeCustom",
  props: {
    type: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1q, mergeProps({ class: "vp-home-custom" }, props), {
        default: withCtx(() => [
          createVNode(unref(Content), {
            class: "vp-doc",
            "vp-content": ""
          })
        ]),
        _: 1
      }, 16);
    };
  }
});
const _hoisted_1$E = { class: "doc-hero-container" };
const _hoisted_2$v = { class: "doc-hero-main" };
const _hoisted_3$r = { class: "heading" };
const _hoisted_4$n = ["innerHTML"];
const _hoisted_5$h = ["innerHTML"];
const _hoisted_6$b = ["innerHTML"];
const _hoisted_7$a = {
  key: 1,
  class: "actions"
};
const _hoisted_8$8 = { class: "action" };
const _hoisted_9$4 = {
  key: 0,
  class: "image"
};
const _hoisted_10$2 = { class: "image-container" };
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPHomeDocHero",
  props: {
    type: {},
    hero: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {}
  },
  setup(__props) {
    const props = __props;
    const hero = computed(() => props.hero ?? {});
    const actions = computed(() => hero.value.actions ?? []);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-home-doc-hero", { "has-image": hero.value.image }])
      }, [
        createBaseVNode("div", _hoisted_1$E, [
          createBaseVNode("div", _hoisted_2$v, [
            createBaseVNode("h1", _hoisted_3$r, [
              hero.value.name ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "name clip",
                innerHTML: hero.value.name
              }, null, 8, _hoisted_4$n)) : createCommentVNode("", true),
              hero.value.text ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: "text",
                innerHTML: hero.value.text
              }, null, 8, _hoisted_5$h)) : createCommentVNode("", true)
            ]),
            hero.value.tagline ? (openBlock(), createElementBlock("p", {
              key: 0,
              class: "tagline",
              innerHTML: hero.value.tagline
            }, null, 8, _hoisted_6$b)) : createCommentVNode("", true),
            actions.value.length ? (openBlock(), createElementBlock("div", _hoisted_7$a, [
              createBaseVNode("div", _hoisted_8$8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(actions.value, (action) => {
                  return openBlock(), createBlock(VPButton, {
                    key: action.link,
                    tag: "a",
                    size: "medium",
                    theme: action.theme,
                    text: action.text,
                    href: action.link,
                    target: action.target,
                    rel: action.rel,
                    icon: action.icon,
                    "suffix-icon": action.suffixIcon
                  }, null, 8, ["theme", "text", "href", "target", "rel", "icon", "suffix-icon"]);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ]),
          hero.value.image ? (openBlock(), createElementBlock("div", _hoisted_9$4, [
            createBaseVNode("div", _hoisted_10$2, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "image-bg" }, null, -1)),
              renderSlot(_ctx.$slots, "home-doc-hero-image", {}, () => [
                hero.value.image ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  class: "image-src",
                  image: hero.value.image
                }, null, 8, ["image"])) : createCommentVNode("", true)
              ], true)
            ])
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const VPHomeDocHero = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-3110162e"]]);
const _hoisted_1$D = { class: "box" };
const _hoisted_2$u = {
  key: 0,
  class: "icon"
};
const _hoisted_3$q = {
  key: 2,
  class: "icon"
};
const _hoisted_4$m = ["innerHTML"];
const _hoisted_5$g = ["innerHTML"];
const _hoisted_6$a = ["innerHTML"];
const _hoisted_7$9 = {
  key: 5,
  class: "link-text"
};
const _hoisted_8$7 = { class: "link-text-value" };
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeature",
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    const ICONIFY_NAME = /^[\w-]+:[\w-]+$/;
    const isIconify = computed(() => {
      if (typeof __props.icon !== "string" || isLinkAbsolute(__props.icon) || isLinkHttp(__props.icon)) {
        return false;
      }
      return ICONIFY_NAME.test(__props.icon);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1s, {
        class: "vp-home-feature",
        href: __props.link,
        rel: __props.rel,
        target: __props.target,
        "no-icon": "",
        tag: __props.link ? "a" : "div"
      }, {
        default: withCtx(() => [
          createBaseVNode("article", _hoisted_1$D, [
            typeof __props.icon === "object" && __props.icon.wrap ? (openBlock(), createElementBlock("div", _hoisted_2$u, [
              createVNode(VPImage, {
                image: __props.icon,
                alt: __props.icon.alt,
                height: __props.icon.height || 48,
                width: __props.icon.width || 48
              }, null, 8, ["image", "alt", "height", "width"])
            ])) : typeof __props.icon === "object" ? (openBlock(), createBlock(VPImage, {
              key: 1,
              image: __props.icon,
              alt: __props.icon.alt,
              height: __props.icon.height || 48,
              width: __props.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : __props.icon && isIconify.value ? (openBlock(), createElementBlock("div", _hoisted_3$q, [
              createVNode(_sfc_main$1x, { name: __props.icon }, null, 8, ["name"])
            ])) : __props.icon ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: "icon",
              innerHTML: __props.icon
            }, null, 8, _hoisted_4$m)) : createCommentVNode("", true),
            createBaseVNode("h2", {
              class: "title",
              innerHTML: __props.title
            }, null, 8, _hoisted_5$g),
            __props.details ? (openBlock(), createElementBlock("p", {
              key: 4,
              class: "details",
              innerHTML: __props.details
            }, null, 8, _hoisted_6$a)) : createCommentVNode("", true),
            __props.linkText ? (openBlock(), createElementBlock("div", _hoisted_7$9, [
              createBaseVNode("p", _hoisted_8$7, [
                createTextVNode(toDisplayString(__props.linkText) + " ", 1),
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-arrow-right link-text-icon" }, null, -1))
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["href", "rel", "target", "tag"]);
    };
  }
});
const VPHomeFeature = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-8a2d528a"]]);
const _hoisted_1$C = ["innerHTML"];
const _hoisted_2$t = ["innerHTML"];
const _hoisted_3$p = { class: "items" };
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  props: {
    type: {},
    title: {},
    description: {},
    features: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {}
  },
  setup(__props) {
    const grid = computed(() => {
      const length = __props.features?.length;
      if (!length)
        return void 0;
      else if (length === 2)
        return "grid-2";
      else if (length === 3)
        return "grid-3";
      else if (length % 3 === 0)
        return "grid-6";
      else if (length > 3)
        return "grid-4";
      return void 0;
    });
    return (_ctx, _cache) => {
      return __props.features ? (openBlock(), createBlock(_sfc_main$1q, mergeProps({
        key: 0,
        class: "vp-home-features"
      }, {
        type: __props.type,
        backgroundAttachment: __props.backgroundAttachment,
        backgroundImage: __props.backgroundImage,
        full: __props.full,
        index: __props.index
      }), {
        default: withCtx(() => [
          __props.title ? (openBlock(), createElementBlock("h2", {
            key: 0,
            class: "title",
            innerHTML: __props.title
          }, null, 8, _hoisted_1$C)) : createCommentVNode("", true),
          __props.description ? (openBlock(), createElementBlock("p", {
            key: 1,
            class: "description",
            innerHTML: __props.description
          }, null, 8, _hoisted_2$t)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3$p, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.features, (feature) => {
              return openBlock(), createElementBlock("div", {
                key: feature.title,
                class: normalizeClass(["item", [grid.value]])
              }, [
                createVNode(VPHomeFeature, mergeProps({ ref_for: true }, feature), null, 16)
              ], 2);
            }), 128))
          ])
        ]),
        _: 1
      }, 16)) : createCommentVNode("", true);
    };
  }
});
const VPHomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-6df02338"]]);
const effectComponents = {};
const effects = Object.keys(effectComponents);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "ImageBg",
  props: {
    type: {},
    hero: {},
    full: { type: Boolean },
    background: {},
    tintPlate: {},
    effect: {},
    effectConfig: {},
    filter: {},
    forceDark: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {}
  },
  setup(__props) {
    const props = __props;
    const { isDark } = useData();
    const heroBackground = computed(() => {
      const image = props.backgroundImage ? typeof props.backgroundImage === "string" ? props.backgroundImage : props.backgroundImage[isDark.value ? "dark" : "light"] ?? props.backgroundImage.light : "";
      const background = (image || props.background)?.trim();
      if (!background)
        return null;
      const gradient2 = isGradient(background);
      const link = isLinkHttp(background) || gradient2 ? background : withBase(background);
      return {
        "background-image": gradient2 ? background : `url(${link})`,
        "background-attachment": props.backgroundAttachment,
        "--vp-hero-bg-filter": props.filter
      };
    });
    return (_ctx, _cache) => {
      return heroBackground.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "home-hero-bg",
        style: normalizeStyle(heroBackground.value)
      }, null, 4)) : createCommentVNode("", true);
    };
  }
});
const ImageBg = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-866e4b52"]]);
const _hoisted_1$B = { class: "hero-container" };
const _hoisted_2$s = { class: "hero-content" };
const _hoisted_3$o = ["innerHTML"];
const _hoisted_4$l = ["innerHTML"];
const _hoisted_5$f = ["innerHTML"];
const _hoisted_6$9 = {
  key: 3,
  class: "actions"
};
const _hoisted_7$8 = { class: "action" };
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  props: {
    type: {},
    hero: {},
    full: { type: Boolean },
    background: {},
    tintPlate: {},
    effect: {},
    effectConfig: {},
    filter: {},
    forceDark: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {}
  },
  setup(__props) {
    const props = __props;
    const { frontmatter, isDark } = useData();
    const hero = computed(() => props.hero ?? frontmatter.value.hero ?? {});
    const actions = computed(() => hero.value.actions ?? []);
    const effect = computed(() => {
      if (props.effect)
        return props.effect;
      if (props.background && effects.includes(props.background))
        return props.background;
      return null;
    });
    const effectConfig = computed(() => {
      if (effect.value === "tint-plate") {
        const plate = props.tintPlate ?? props.effectConfig;
        if (typeof plate === "number" || typeof plate === "string") {
          return { rgb: plate };
        }
        return plate;
      }
      if (!isPlainObject(props.effectConfig))
        return null;
      return props.effectConfig;
    });
    const realEffectComponent = computed(() => {
      if (!effect.value)
        return null;
      if (effectComponents[effect.value])
        return markRaw(effectComponents[effect.value]);
      if (hasGlobalComponent(effect.value))
        return resolveComponent(effect.value);
      return null;
    });
    function noTransition() {
      document.documentElement.classList.add("no-transition");
      setTimeout(() => {
        document.documentElement.classList.remove("no-transition");
      }, 300);
    }
    let defaultTheme;
    watch(() => props.forceDark, () => {
      if (!inBrowser || false)
        return;
      if (props.forceDark) {
        defaultTheme ??= document.documentElement.dataset.theme;
        document.documentElement.dataset.theme = "dark";
        document.documentElement.classList.add("force-dark");
        nextTick(() => isDark.value = true);
        noTransition();
      }
      document.documentElement.classList.add(`effect-${effect.value}`);
    }, { immediate: true });
    onMounted(() => {
      if (props.forceDark) {
        window.addEventListener("unload", () => {
          isDark.value = defaultTheme === "dark";
        });
      }
    });
    onUnmounted(() => {
      if (props.forceDark) {
        isDark.value = defaultTheme === "dark";
        document.documentElement.classList.remove("force-dark", `effect-${effect.value}`);
        noTransition();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-home-hero", {
          full: __props.full,
          once: __props.onlyOnce,
          first: props.index === 0,
          [effect.value ?? ""]: !!effect.value
        }])
      }, [
        realEffectComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(realEffectComponent.value), normalizeProps(mergeProps({ key: 0 }, effectConfig.value)), null, 16)) : (openBlock(), createBlock(ImageBg, normalizeProps(mergeProps({ key: 1 }, props)), null, 16)),
        createBaseVNode("div", _hoisted_1$B, [
          createBaseVNode("div", _hoisted_2$s, [
            hero.value.name ? (openBlock(), createElementBlock("h1", {
              key: 0,
              class: "hero-name",
              innerHTML: hero.value.name
            }, null, 8, _hoisted_3$o)) : createCommentVNode("", true),
            hero.value.tagline ? (openBlock(), createElementBlock("p", {
              key: 1,
              class: "hero-tagline",
              innerHTML: hero.value.tagline
            }, null, 8, _hoisted_4$l)) : createCommentVNode("", true),
            hero.value.text ? (openBlock(), createElementBlock("p", {
              key: 2,
              class: "hero-text",
              innerHTML: hero.value.text
            }, null, 8, _hoisted_5$f)) : createCommentVNode("", true),
            actions.value.length ? (openBlock(), createElementBlock("div", _hoisted_6$9, [
              createBaseVNode("div", _hoisted_7$8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(actions.value, (action) => {
                  return openBlock(), createBlock(VPButton, {
                    key: action.link,
                    tag: "a",
                    size: "medium",
                    theme: action.theme,
                    text: action.text,
                    href: action.link,
                    target: action.target,
                    rel: action.rel,
                    icon: action.icon,
                    "suffix-icon": action.suffixIcon
                  }, null, 8, ["theme", "text", "href", "target", "rel", "icon", "suffix-icon"]);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 2);
    };
  }
});
const VPHomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-a2b7eeb0"]]);
const _hoisted_1$A = ["innerHTML"];
const _hoisted_2$r = ["innerHTML"];
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPHomeProfile",
  props: {
    type: {},
    name: {},
    description: {},
    avatar: {},
    circle: { type: Boolean },
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {}
  },
  setup(__props) {
    const { theme } = useData();
    const rawProfile = computed(() => theme.value.profile);
    const profile = computed(() => {
      return {
        name: __props.name || rawProfile.value?.name,
        description: __props.description || rawProfile.value?.description,
        avatar: __props.avatar || rawProfile.value?.avatar || rawProfile.value?.url,
        circle: __props.circle || rawProfile.value?.circle
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1q, mergeProps({ class: "vp-home-profile" }, { type: __props.type, backgroundAttachment: __props.backgroundAttachment, backgroundImage: __props.backgroundImage, full: __props.full, index: __props.index }), {
        default: withCtx(() => [
          profile.value.avatar ? (openBlock(), createBlock(VPImage, {
            key: 0,
            image: profile.value.avatar,
            class: normalizeClass({ circle: profile.value.circle })
          }, null, 8, ["image", "class"])) : createCommentVNode("", true),
          profile.value.name ? (openBlock(), createElementBlock("h3", {
            key: 1,
            innerHTML: profile.value.name
          }, null, 8, _hoisted_1$A)) : createCommentVNode("", true),
          profile.value.description ? (openBlock(), createElementBlock("p", {
            key: 2,
            innerHTML: profile.value.description
          }, null, 8, _hoisted_2$r)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 16);
    };
  }
});
const VPHomeProfile = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-dc30cc5f"]]);
const _hoisted_1$z = { class: "content-image" };
const _hoisted_2$q = { class: "content-text vp-doc" };
const _hoisted_3$n = {
  key: 0,
  class: "title"
};
const _hoisted_4$k = ["innerHTML"];
const _hoisted_5$e = {
  key: 2,
  class: "list"
};
const _hoisted_6$8 = ["innerHTML"];
const _hoisted_7$7 = ["innerHTML"];
const _hoisted_8$6 = ["innerHTML"];
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPHomeTextImage",
  props: {
    type: {},
    image: {},
    width: {},
    title: {},
    description: {},
    list: {},
    full: { type: Boolean },
    backgroundImage: {},
    backgroundAttachment: {},
    onlyOnce: { type: Boolean },
    index: {}
  },
  setup(__props) {
    const maxWidth = computed(() => {
      if (typeof __props.width === "number")
        return `${__props.width}px`;
      return __props.width;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1q, mergeProps({
        class: "vp-home-text-image",
        "container-class": { reverse: __props.type === "text-image" }
      }, { type: __props.type, backgroundAttachment: __props.backgroundAttachment, backgroundImage: __props.backgroundImage, full: __props.full, index: __props.index }), {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$z, [
            createVNode(VPImage, {
              image: __props.image,
              style: normalizeStyle({ maxWidth: maxWidth.value })
            }, null, 8, ["image", "style"])
          ]),
          createBaseVNode("div", _hoisted_2$q, [
            createBaseVNode("section", null, [
              __props.title ? (openBlock(), createElementBlock("h2", _hoisted_3$n, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
              __props.description ? (openBlock(), createElementBlock("p", {
                key: 1,
                class: "description",
                innerHTML: __props.description
              }, null, 8, _hoisted_4$k)) : createCommentVNode("", true),
              __props.list && __props.list.length ? (openBlock(), createElementBlock("ul", _hoisted_5$e, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item, i2) => {
                  return openBlock(), createElementBlock("li", { key: i2 }, [
                    typeof item === "object" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      item.title ? (openBlock(), createElementBlock("h3", {
                        key: 0,
                        innerHTML: item.title
                      }, null, 8, _hoisted_6$8)) : createCommentVNode("", true),
                      item.description ? (openBlock(), createElementBlock("p", {
                        key: 1,
                        innerHTML: item.description
                      }, null, 8, _hoisted_7$7)) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createElementBlock("p", {
                      key: 1,
                      innerHTML: item
                    }, null, 8, _hoisted_8$6))
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      }, 16, ["container-class"]);
    };
  }
});
const VPHomeTextImage = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-8af81943"]]);
const _hoisted_1$y = { class: "vp-pagination" };
const _hoisted_2$p = ["disabled"];
const _hoisted_3$m = { class: "page-range" };
const _hoisted_4$j = ["disabled", "onClick"];
const _hoisted_5$d = ["disabled"];
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPPagination",
  props: {
    page: {},
    totalPage: {},
    isFirstPage: { type: Boolean },
    isLastPage: { type: Boolean },
    pageRange: {}
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    const { theme } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$y, [
        createBaseVNode("button", {
          type: "button",
          class: "btn prev",
          disabled: __props.isFirstPage,
          onClick: _cache[0] || (_cache[0] = () => emit2("change", __props.page - 1))
        }, toDisplayString(unref(theme).prevPageLabel || "Prev"), 9, _hoisted_2$p),
        createBaseVNode("div", _hoisted_3$m, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.pageRange, ({ value, more }) => {
            return openBlock(), createElementBlock("button", {
              key: value,
              class: normalizeClass(["btn", { more, active: value === __props.page }]),
              disabled: more,
              type: "button",
              onClick: () => !more && emit2("change", value)
            }, toDisplayString(more ? "..." : value), 11, _hoisted_4$j);
          }), 128))
        ]),
        createBaseVNode("button", {
          type: "button",
          class: "btn next",
          disabled: __props.isLastPage,
          onClick: _cache[1] || (_cache[1] = () => emit2("change", __props.page + 1))
        }, toDisplayString(unref(theme).nextPageLabel || "Next"), 9, _hoisted_5$d)
      ]);
    };
  }
});
const VPPagination = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-07e4f344"]]);
const _hoisted_1$x = ["src", "alt"];
const _hoisted_2$o = { class: "post-item-content" };
const _hoisted_3$l = {
  key: 0,
  class: "sticky"
};
const _hoisted_4$i = {
  key: 1,
  class: "draft"
};
const _hoisted_5$c = {
  key: 2,
  class: "icon-lock vpi-lock"
};
const _hoisted_6$7 = { class: "post-meta" };
const _hoisted_7$6 = {
  key: 0,
  class: "category-list"
};
const _hoisted_8$5 = { key: 0 };
const _hoisted_9$3 = {
  key: 1,
  class: "tag-list"
};
const _hoisted_10$1 = {
  key: 2,
  class: "create-time"
};
const _hoisted_11$1 = ["innerHTML"];
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPPostItem",
  props: {
    post: {},
    index: {}
  },
  setup(__props) {
    const isMobile$1 = ref(false);
    onMounted(() => {
      isMobile$1.value = isMobile();
      window.addEventListener("resize", () => {
        isMobile$1.value = isMobile();
      });
    });
    const { collection } = useData();
    const colors = useTagColors();
    const { categories: categoriesLink, tags: tagsLink } = useInternalLink();
    const createTime = computed(() => __props.post.createTime?.split(/\s|T/)[0].replace(/\//g, "-"));
    const categoryList = computed(() => __props.post.categoryList ?? []);
    const sticky = computed(() => {
      if (typeof __props.post.sticky === "boolean") {
        return __props.post.sticky;
      } else if (typeof __props.post.sticky === "number") {
        return __props.post.sticky >= 0;
      }
      return false;
    });
    const tags = computed(() => {
      const tagTheme = collection.value?.tagsTheme ?? "colored";
      return (__props.post.tags ?? []).slice(0, 4).map((tag) => ({
        name: tag,
        className: colors.value[tag] ? `vp-tag-${colors.value[tag]}` : `tag-${tagTheme}`
      }));
    });
    const cover = computed(() => {
      if (!__props.post.cover)
        return null;
      const opt = collection.value?.postCover ?? "right";
      const options = typeof opt === "string" ? { layout: opt } : opt;
      return { layout: "right", ratio: "4:3", ...options, ...__props.post.coverStyle };
    });
    const coverLayout = computed(() => {
      if (isMobile$1.value)
        return "top";
      const layout = cover.value?.layout ?? "right";
      const odd = (__props.index + 1) % 2 === 1;
      if (layout === "odd-left")
        return odd ? "left" : "right";
      if (layout === "odd-right")
        return odd ? "right" : "left";
      return layout;
    });
    const coverCompact = computed(() => {
      if (__props.post.excerpt || coverLayout.value === "top")
        return false;
      return cover.value?.compact ?? false;
    });
    const coverStyles = computed(() => {
      if (!cover.value)
        return null;
      let ratio;
      if (typeof cover.value.ratio === "number") {
        ratio = cover.value.ratio;
      } else {
        const [w2, h2] = cover.value.ratio.split(/[:/]/).map(Number);
        ratio = h2 / w2;
      }
      if (coverLayout.value === "left" || coverLayout.value === "right") {
        const w2 = cover.value.width ?? 240;
        return { width: `${w2}px`, height: `${w2 * ratio}px` };
      }
      return { height: 0, paddingBottom: `${ratio * 100}%` };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-post-item", { "has-cover": __props.post.cover, [coverLayout.value]: cover.value, "draft": __props.post.draft }]),
        "data-allow-mismatch": ""
      }, [
        __props.post.cover ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["post-cover", { compact: coverCompact.value }]),
          "data-allow-mismatch": "",
          style: normalizeStyle(coverStyles.value)
        }, [
          createBaseVNode("img", {
            src: unref(withBase)(__props.post.cover),
            alt: __props.post.title,
            loading: "lazy"
          }, null, 8, _hoisted_1$x)
        ], 6)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2$o, [
          createBaseVNode("h3", null, [
            sticky.value ? (openBlock(), createElementBlock("span", _hoisted_3$l, "TOP")) : createCommentVNode("", true),
            __props.post.draft ? (openBlock(), createElementBlock("span", _hoisted_4$i, "DRAFT")) : createCommentVNode("", true),
            __props.post.encrypt ? (openBlock(), createElementBlock("span", _hoisted_5$c)) : createCommentVNode("", true),
            createVNode(_sfc_main$1s, {
              href: __props.post.path,
              text: __props.post.title
            }, null, 8, ["href", "text"])
          ]),
          createBaseVNode("div", _hoisted_6$7, [
            categoryList.value.length ? (openBlock(), createElementBlock("div", _hoisted_7$6, [
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "icon vpi-folder" }, null, -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(categoryList.value, (cate, i2) => {
                return openBlock(), createElementBlock(Fragment, { key: i2 }, [
                  createVNode(_sfc_main$1s, {
                    href: unref(categoriesLink) ? `${unref(categoriesLink).link}?id=${cate.id}` : void 0,
                    "no-icon": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(cate.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"]),
                  i2 !== categoryList.value.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_8$5, "/")) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])) : createCommentVNode("", true),
            tags.value.length ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
              _cache[1] || (_cache[1] = createBaseVNode("span", { class: "icon vpi-tag" }, null, -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
                return openBlock(), createBlock(_sfc_main$1s, {
                  key: tag.name,
                  class: normalizeClass(["tag", tag.className]),
                  href: unref(tagsLink) ? `${unref(tagsLink).link}?tag=${tag.name}` : void 0
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tag.name), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "href"]);
              }), 128))
            ])) : createCommentVNode("", true),
            createTime.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
              _cache[2] || (_cache[2] = createBaseVNode("span", { class: "icon vpi-clock" }, null, -1)),
              createBaseVNode("span", null, toDisplayString(createTime.value), 1)
            ])) : createCommentVNode("", true)
          ]),
          __props.post.excerpt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "vp-doc excerpt",
            innerHTML: __props.post.excerpt
          }, null, 8, _hoisted_11$1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const VPPostItem = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-4e7b4dbf"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPTransitionDrop",
  props: {
    delay: { default: 0 },
    duration: { default: 0.25 },
    appear: { type: Boolean }
  },
  setup(__props) {
    const { theme } = useData();
    const enabledTransition = computed(() => {
      const transition = theme.value.transition;
      return typeof transition === "object" ? transition.postList !== false : transition !== false;
    });
    let _transition = "";
    function beforeAppear(item) {
      const el = item;
      el.style.transform = "translateY(-20px)";
      el.style.opacity = "0";
    }
    function setStyle2(item) {
      const el = item;
      if (!_transition) {
        const value = typeof window !== "undefined" ? window.getComputedStyle?.(el).transition : "";
        _transition = value && !value.includes("all") ? `${value || ""}, ` : " ";
      }
      el.style.transition = `${_transition}transform ${__props.duration}s ease-in-out ${__props.delay}s, opacity ${__props.duration}s ease-in-out ${__props.delay}s`;
    }
    function unsetStyle(item) {
      const el = item;
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
      el.style.transition = _transition;
    }
    return (_ctx, _cache) => {
      return enabledTransition.value ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: "drop",
        mode: "out-in",
        appear: __props.appear,
        onAppear: setStyle2,
        onBeforeAppear: beforeAppear,
        onAfterAppear: unsetStyle,
        onEnter: setStyle2,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle2
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["appear"])) : renderSlot(_ctx.$slots, "default", { key: 1 });
    };
  }
});
const _hoisted_1$w = { class: "vp-post-list" };
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPPostList",
  props: {
    homePosts: { type: Boolean }
  },
  setup(__props) {
    const {
      postList,
      page,
      totalPage,
      pageRange,
      isLastPage,
      isFirstPage,
      isPaginationEnabled,
      changePage
    } = usePostListControl(computed(() => !!__props.homePosts));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$w, [
        renderSlot(_ctx.$slots, "posts-post-list-before", {}, void 0, true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(postList), (post, index) => {
          return openBlock(), createBlock(_sfc_main$I, {
            key: post.path,
            appear: "",
            delay: index * 0.025
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(VPPostItem, {
                key: post.path,
                post,
                index
              }, null, 8, ["post", "index"]))
            ]),
            _: 2
          }, 1032, ["delay"]);
        }), 128)),
        renderSlot(_ctx.$slots, "posts-post-list-after", {}, void 0, true),
        unref(isPaginationEnabled) ? (openBlock(), createBlock(VPPagination, {
          key: 0,
          page: unref(page),
          "total-page": unref(totalPage),
          "page-range": unref(pageRange),
          "is-last-page": unref(isLastPage),
          "is-first-page": unref(isFirstPage),
          onChange: unref(changePage)
        }, null, 8, ["page", "total-page", "page-range", "is-last-page", "is-first-page", "onChange"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "posts-post-list-pagination-after", {}, void 0, true)
      ]);
    };
  }
});
const VPPostList = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-ea564199"]]);
const _hoisted_1$v = { class: "vp-short-post-list" };
const _hoisted_2$n = { class: "post-title" };
const _hoisted_3$k = { class: "post-time" };
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPShortPostList",
  props: {
    postList: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$v, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.postList, (post) => {
          return openBlock(), createElementBlock("li", {
            key: post.path
          }, [
            createBaseVNode("p", _hoisted_2$n, [
              createVNode(_sfc_main$1s, {
                class: "post-link",
                href: post.path
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(post.title), 1)
                ]),
                _: 2
              }, 1032, ["href"])
            ]),
            createBaseVNode("span", _hoisted_3$k, toDisplayString(post.createTime), 1)
          ]);
        }), 128))
      ]);
    };
  }
});
const VPShortPostList = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-ef757b1d"]]);
const _hoisted_1$u = { class: "vp-archives" };
const _hoisted_2$m = { class: "archives-title" };
const _hoisted_3$j = {
  key: 0,
  class: "archives"
};
const _hoisted_4$h = { class: "archive-title" };
const _hoisted_5$b = { class: "total" };
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPPostsArchives",
  setup(__props) {
    const { archive: archiveLink } = useInternalLink();
    const { archives } = useArchives();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        renderSlot(_ctx.$slots, "posts-archives-before", {}, void 0, true),
        createBaseVNode("h2", _hoisted_2$m, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-archive icon" }, null, -1)),
          createBaseVNode("span", null, toDisplayString(unref(archiveLink)?.text ?? "Archives"), 1)
        ]),
        unref(archives).length ? (openBlock(), createElementBlock("div", _hoisted_3$j, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(archives), (archive) => {
            return openBlock(), createElementBlock("div", {
              key: archive.label,
              class: "archive"
            }, [
              createBaseVNode("h3", _hoisted_4$h, [
                createTextVNode(toDisplayString(archive.title) + " ", 1),
                createBaseVNode("span", _hoisted_5$b, toDisplayString(archive.label), 1)
              ]),
              createVNode(VPShortPostList, {
                "post-list": archive.list
              }, null, 8, ["post-list"])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "posts-archives-after", {}, void 0, true)
      ]);
    };
  }
});
const VPPostsArchives = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-da31a853"]]);
const _hoisted_1$t = { class: "text" };
const _hoisted_2$l = { class: "total" };
const _hoisted_3$i = { class: "text" };
const _hoisted_4$g = { class: "total" };
const _hoisted_5$a = { class: "text" };
const _hoisted_6$6 = { class: "total" };
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPPostsNav",
  props: {
    isLocal: { type: Boolean }
  },
  setup(__props) {
    const route = useRoute();
    const { hasPostsExtract, tags, archives, categories } = usePostsExtract();
    return (_ctx, _cache) => {
      return unref(hasPostsExtract) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["vp-posts-nav", { local: __props.isLocal }])
      }, [
        unref(tags).link ? (openBlock(), createBlock(_sfc_main$1s, {
          key: 0,
          class: normalizeClass(["nav-link", { active: unref(route).path === unref(tags).link }]),
          href: unref(tags).link
        }, {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "icon icon-logo vpi-tag" }, null, -1)),
            createBaseVNode("span", _hoisted_1$t, toDisplayString(unref(tags).text), 1),
            createBaseVNode("span", _hoisted_2$l, toDisplayString(unref(tags).total), 1),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "icon vpi-chevron-right" }, null, -1))
          ]),
          _: 1
        }, 8, ["class", "href"])) : createCommentVNode("", true),
        unref(categories).link ? (openBlock(), createBlock(_sfc_main$1s, {
          key: 1,
          class: normalizeClass(["nav-link", { active: unref(route).path === unref(categories).link }]),
          href: unref(categories).link
        }, {
          default: withCtx(() => [
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "icon icon-logo vpi-category" }, null, -1)),
            createBaseVNode("span", _hoisted_3$i, toDisplayString(unref(categories).text), 1),
            createBaseVNode("span", _hoisted_4$g, toDisplayString(unref(categories).total), 1),
            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "icon vpi-chevron-right" }, null, -1))
          ]),
          _: 1
        }, 8, ["class", "href"])) : createCommentVNode("", true),
        unref(archives).link ? (openBlock(), createBlock(_sfc_main$1s, {
          key: 2,
          class: normalizeClass(["nav-link", { active: unref(route).path === unref(archives).link }]),
          href: unref(archives).link
        }, {
          default: withCtx(() => [
            _cache[4] || (_cache[4] = createBaseVNode("span", { class: "icon icon-logo vpi-archive" }, null, -1)),
            createBaseVNode("span", _hoisted_5$a, toDisplayString(unref(archives).text), 1),
            createBaseVNode("span", _hoisted_6$6, toDisplayString(unref(archives).total), 1),
            _cache[5] || (_cache[5] = createBaseVNode("span", { class: "icon vpi-chevron-right" }, null, -1))
          ]),
          _: 1
        }, 8, ["class", "href"])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPPostsNav = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-73b0f6db"]]);
const _hoisted_1$s = {
  key: 0,
  class: "vp-profile"
};
const _hoisted_2$k = ["src", "alt", "width", "height"];
const _hoisted_3$h = { class: "profile-info" };
const _hoisted_4$f = ["innerHTML"];
const _hoisted_5$9 = {
  key: 1,
  class: "profile-location"
};
const _hoisted_6$5 = ["innerHTML"];
const _hoisted_7$5 = {
  key: 2,
  class: "profile-organization"
};
const _hoisted_8$4 = ["innerHTML"];
const _hoisted_9$2 = {
  key: 1,
  class: "profile-social"
};
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPPostsProfile",
  setup(__props) {
    const { theme, collection } = useData();
    const profile = computed(() => {
      const profile2 = collection.value?.type === "post" ? collection.value.profile : void 0;
      return profile2 ?? theme.value.profile;
    });
    const imageUrl = computed(() => {
      if (!profile.value)
        return "";
      const url = profile.value?.avatar ?? profile.value?.url;
      if (!url)
        return "";
      if (isLinkHttp(url))
        return url;
      return withBase(url);
    });
    const social = computed(() => {
      const social2 = collection.value?.type === "post" ? collection.value.social : void 0;
      return social2 ?? theme.value.social;
    });
    return (_ctx, _cache) => {
      return profile.value ? (openBlock(), createElementBlock("div", _hoisted_1$s, [
        imageUrl.value ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: normalizeClass({ circle: !!profile.value.circle })
        }, [
          createBaseVNode("img", {
            src: imageUrl.value,
            alt: profile.value.name,
            width: profile.value.originalWidth,
            height: profile.value.originalHeight
          }, null, 8, _hoisted_2$k)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$h, [
          createBaseVNode("h3", null, toDisplayString(profile.value.name), 1),
          profile.value.description ? (openBlock(), createElementBlock("p", {
            key: 0,
            innerHTML: profile.value.description
          }, null, 8, _hoisted_4$f)) : createCommentVNode("", true),
          profile.value.location ? (openBlock(), createElementBlock("div", _hoisted_5$9, [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-location" }, null, -1)),
            profile.value.location ? (openBlock(), createElementBlock("p", {
              key: 0,
              innerHTML: profile.value.location
            }, null, 8, _hoisted_6$5)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          profile.value.organization ? (openBlock(), createElementBlock("div", _hoisted_7$5, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-organization" }, null, -1)),
            profile.value.organization ? (openBlock(), createElementBlock("p", {
              key: 0,
              innerHTML: profile.value.organization
            }, null, 8, _hoisted_8$4)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        social.value ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
          createVNode(VPSocialLinks, { links: social.value }, null, 8, ["links"])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPPostsProfile = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-700376a4"]]);
const _hoisted_1$r = {
  key: 0,
  class: "vp-posts-aside"
};
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPPostsAside",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      return unref(theme).profile ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
        renderSlot(_ctx.$slots, "posts-aside-top", {}, void 0, true),
        createVNode(VPPostsProfile),
        createVNode(VPPostsNav),
        renderSlot(_ctx.$slots, "posts-aside-bottom", {}, void 0, true)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPPostsAside = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-29db040d"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPCategoriesGroup",
  props: {
    item: {},
    depth: { default: 0 }
  },
  setup(__props) {
    const { collection } = useData();
    const route = useRoute();
    const el = ref(null);
    const expand = ref(true);
    const isExpand = ref(false);
    const expandDepth = computed(() => {
      const depth = collection.value?.categoriesExpand ?? "deep";
      if (depth === "deep")
        return Infinity;
      const d2 = Number(depth);
      if (Number.isNaN(d2))
        return Infinity;
      return d2;
    });
    watch(
      () => [route.query, __props.item, expandDepth.value],
      () => {
        const id = route.query.id;
        if (!id) {
          expand.value = __props.depth <= expandDepth.value;
        } else {
          expand.value = hasExpand(__props.item, id);
        }
        isExpand.value = id ? __props.item.id === id : false;
      },
      { immediate: true }
    );
    function hasExpand(item, id) {
      return item.id === id || item.items.filter((item2) => item2.type === "category").some((item2) => hasExpand(item2, id));
    }
    function toggle() {
      expand.value = !expand.value;
    }
    onMounted(() => {
      if (el.value && isExpand.value) {
        el.value.scrollIntoView({ block: "center" });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: normalizeClass(["vp-category-group", { expand: expand.value }])
      }, [
        createBaseVNode("p", {
          class: "folder",
          onClick: toggle
        }, [
          createBaseVNode("span", {
            class: normalizeClass(["icon", [expand.value ? "vpi-folder-open" : "vpi-folder"]])
          }, null, 2),
          createBaseVNode("span", null, toDisplayString(__props.item.title), 1)
        ]),
        __props.item.items.length ? (openBlock(), createBlock(VPCategories, {
          key: 0,
          class: "group",
          items: __props.item.items,
          depth: __props.depth
        }, null, 8, ["items", "depth"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const VPCategoriesGroup = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-6ab3eef7"]]);
const _hoisted_1$q = { class: "vp-categories" };
const _hoisted_2$j = {
  key: 0,
  class: "post"
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPCategories",
  props: {
    items: {},
    depth: { default: 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$q, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createElementBlock("li", {
            key: item.path || item.id,
            class: "vp-categories-item"
          }, [
            item.type === "post" ? (openBlock(), createElementBlock("p", _hoisted_2$j, [
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-post" }, null, -1)),
              createVNode(_sfc_main$1s, {
                href: item.path,
                text: item.title
              }, null, 8, ["href", "text"])
            ])) : (openBlock(), createBlock(VPCategoriesGroup, {
              key: 1,
              item,
              depth: __props.depth + 1
            }, null, 8, ["item", "depth"]))
          ]);
        }), 128))
      ]);
    };
  }
});
const VPCategories = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-2e32890e"]]);
const _hoisted_1$p = { class: "vp-post-categories" };
const _hoisted_2$i = { class: "categories-title" };
const _hoisted_3$g = { class: "content" };
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPPostsCategories",
  setup(__props) {
    const { categories: categoriesLink } = useInternalLink();
    const { categories } = usePostsCategory();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$p, [
        renderSlot(_ctx.$slots, "posts-categories-before", {}, void 0, true),
        createBaseVNode("h2", _hoisted_2$i, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-category icon" }, null, -1)),
          createBaseVNode("span", null, toDisplayString(unref(categoriesLink)?.text ?? "Categories"), 1)
        ]),
        renderSlot(_ctx.$slots, "posts-categories-content-before", {}, void 0, true),
        createBaseVNode("div", _hoisted_3$g, [
          createVNode(VPCategories, {
            items: unref(categories),
            depth: 0
          }, null, 8, ["items"])
        ]),
        renderSlot(_ctx.$slots, "posts-categories-after", {}, void 0, true)
      ]);
    };
  }
});
const VPPostsCategories = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-3cb3dadb"]]);
const _hoisted_1$o = {
  key: 0,
  class: "profile"
};
const _hoisted_2$h = {
  key: 0,
  class: "avatar"
};
const _hoisted_3$f = ["src", "alt"];
const _hoisted_4$e = { class: "desc" };
const _hoisted_5$8 = { class: "profile-info" };
const _hoisted_6$4 = {
  key: 0,
  class: "profile-location"
};
const _hoisted_7$4 = ["innerHTML"];
const _hoisted_8$3 = {
  key: 1,
  class: "profile-organization"
};
const _hoisted_9$1 = ["innerHTML"];
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPPostsExtract",
  setup(__props) {
    const { theme, collection } = useData();
    const route = useRoute();
    const profile = computed(() => {
      const profile2 = collection.value?.type === "post" ? collection.value.profile : void 0;
      return profile2 ?? theme.value.profile;
    });
    const imageUrl = computed(() => {
      if (!profile.value)
        return "";
      const url = profile.value?.avatar ?? profile.value?.url;
      if (!url)
        return "";
      if (isLinkHttp(url))
        return url;
      return withBase(url);
    });
    const { hasPostsExtract, tags, archives, categories } = usePostsExtract();
    const open = ref(false);
    const lazyOpen = ref(false);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(() => route.path, () => {
      open.value = false;
    });
    watch(open, async () => {
      if (open.value) {
        setTimeout(() => {
          lazyOpen.value = true;
        }, 200);
      } else {
        lazyOpen.value = false;
      }
    });
    watch(
      [() => open.value],
      () => {
        if (open.value)
          isLocked.value = true;
        else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const showPostsExtract = computed(() => {
      return profile.value || hasPostsExtract.value;
    });
    return (_ctx, _cache) => {
      return showPostsExtract.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("div", {
          class: "vp-posts-extract",
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [..._cache[2] || (_cache[2] = [
          createBaseVNode("span", { class: "vpi-posts-ext icon" }, null, -1)
        ])]),
        createVNode(Transition, { name: "fade-in" }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: "posts-modal",
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => open.value = false, ["self"]))
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["posts-modal-container", { open: lazyOpen.value }])
              }, [
                renderSlot(_ctx.$slots, "posts-extract-before", {}, void 0, true),
                profile.value ? (openBlock(), createElementBlock("div", _hoisted_1$o, [
                  imageUrl.value ? (openBlock(), createElementBlock("p", _hoisted_2$h, [
                    createBaseVNode("img", {
                      src: imageUrl.value,
                      alt: profile.value.name
                    }, null, 8, _hoisted_3$f)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", null, toDisplayString(profile.value.name), 1),
                    createBaseVNode("p", _hoisted_4$e, toDisplayString(profile.value.description), 1),
                    createBaseVNode("div", _hoisted_5$8, [
                      profile.value.location ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
                        _cache[3] || (_cache[3] = createBaseVNode("span", { class: "vpi-location" }, null, -1)),
                        profile.value.location ? (openBlock(), createElementBlock("p", {
                          key: 0,
                          innerHTML: profile.value.location
                        }, null, 8, _hoisted_7$4)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      profile.value.organization ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
                        _cache[4] || (_cache[4] = createBaseVNode("span", { class: "vpi-organization" }, null, -1)),
                        profile.value.organization ? (openBlock(), createElementBlock("p", {
                          key: 0,
                          innerHTML: profile.value.organization
                        }, null, 8, _hoisted_9$1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                showPostsExtract.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(["posts-nav", { "no-profile": !profile.value }])
                }, [
                  unref(tags).link ? (openBlock(), createBlock(_sfc_main$1s, {
                    key: 0,
                    class: "nav-link",
                    href: unref(tags).link,
                    "no-icon": ""
                  }, {
                    default: withCtx(() => [
                      _cache[5] || (_cache[5] = createBaseVNode("span", { class: "vpi-tag icon" }, null, -1)),
                      createBaseVNode("span", null, toDisplayString(unref(tags).text), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  unref(categories).link ? (openBlock(), createBlock(_sfc_main$1s, {
                    key: 1,
                    class: "nav-link",
                    href: unref(categories).link,
                    "no-icon": ""
                  }, {
                    default: withCtx(() => [
                      _cache[6] || (_cache[6] = createBaseVNode("span", { class: "vpi-category icon" }, null, -1)),
                      createBaseVNode("span", null, toDisplayString(unref(categories).text), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  unref(archives).link ? (openBlock(), createBlock(_sfc_main$1s, {
                    key: 2,
                    class: "nav-link",
                    href: unref(archives).link,
                    "no-icon": ""
                  }, {
                    default: withCtx(() => [
                      _cache[7] || (_cache[7] = createBaseVNode("span", { class: "vpi-archive icon" }, null, -1)),
                      createBaseVNode("span", null, toDisplayString(unref(archives).text), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "posts-extract-after", {}, void 0, true)
              ], 2)
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 3
        })
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const VPPostsExtract = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-9d76dce7"]]);
const _hoisted_1$n = { class: "tags-nav" };
const _hoisted_2$g = { class: "tags-title" };
const _hoisted_3$e = { class: "tags" };
const _hoisted_4$d = ["onClick"];
const _hoisted_5$7 = { class: "tag-name" };
const _hoisted_6$3 = { class: "tag-count" };
const _hoisted_7$3 = {
  key: 0,
  class: "tags-container"
};
const _hoisted_8$2 = { class: "tag-title" };
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPPostsTags",
  setup(__props) {
    const { tags: tagsLink } = useInternalLink();
    const { tags, currentTag, postList, handleTagClick } = useTags();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-tags", { "has-list": unref(postList).length > 0 }])
      }, [
        renderSlot(_ctx.$slots, "posts-tags-before", {}, void 0, true),
        createBaseVNode("div", _hoisted_1$n, [
          createBaseVNode("h2", _hoisted_2$g, [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-tag icon" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(unref(tagsLink)?.text ?? "Tags"), 1)
          ]),
          renderSlot(_ctx.$slots, "posts-tags-title-after", {}, void 0, true),
          createBaseVNode("div", _hoisted_3$e, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tags), (tag) => {
              return openBlock(), createElementBlock("p", {
                key: tag.name,
                class: normalizeClass(["tag", { active: tag.name === unref(currentTag), [tag.className]: true }]),
                onClick: ($event) => unref(handleTagClick)(tag.name)
              }, [
                createBaseVNode("span", _hoisted_5$7, toDisplayString(tag.name), 1),
                createBaseVNode("span", _hoisted_6$3, toDisplayString(tag.count), 1)
              ], 10, _hoisted_4$d);
            }), 128))
          ])
        ]),
        renderSlot(_ctx.$slots, "posts-tags-content-before", {}, void 0, true),
        unref(currentTag) ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
          createBaseVNode("h3", _hoisted_8$2, toDisplayString(unref(currentTag)), 1),
          unref(postList).length ? (openBlock(), createBlock(VPShortPostList, {
            key: 0,
            "post-list": unref(postList)
          }, null, 8, ["post-list"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "posts-tags-after", {}, void 0, true)
      ], 2);
    };
  }
});
const VPPostsTags = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-6b44efcf"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPTransitionFadeSlideY",
  setup(__props) {
    const { theme } = useData();
    const { resolve: onBeforeEnter, pending: onBeforeLeave } = useScrollPromise();
    const enabledTransition = computed(() => {
      const transition = theme.value.transition;
      return typeof transition === "object" ? transition.page !== false : transition !== false;
    });
    return (_ctx, _cache) => {
      return enabledTransition.value ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: "fade-slide-y",
        mode: "out-in",
        onAfterEnter: unref(onBeforeEnter),
        onBeforeLeave: unref(onBeforeLeave)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onBeforeLeave"])) : renderSlot(_ctx.$slots, "default", { key: 1 });
    };
  }
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPPosts",
  props: {
    homePosts: { type: Boolean },
    type: {},
    onlyOnce: { type: Boolean },
    collection: {}
  },
  setup(__props) {
    const { theme, page } = useData();
    watch(
      () => [__props.homePosts, __props.collection],
      () => forceUpdateCollection(__props.homePosts ? __props.collection || true : void 0),
      { immediate: true }
    );
    onBeforeUnmount(() => forceUpdateCollection(void 0));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-posts", { "home-posts": __props.homePosts }]),
        "vp-posts": ""
      }, [
        renderSlot(_ctx.$slots, "posts-top", {}, void 0, true),
        createBaseVNode("div", {
          class: normalizeClass(["posts-container", { "no-profile": !unref(theme).profile, "left": unref(theme).profile?.layout === "left" }])
        }, [
          !unref(theme).profile ? (openBlock(), createBlock(VPPostsNav, {
            key: 0,
            "is-local": ""
          })) : createCommentVNode("", true),
          createVNode(_sfc_main$w, null, {
            default: withCtx(() => [
              unref(page).type === "posts-archives" ? (openBlock(), createBlock(VPPostsArchives, { key: 0 }, {
                "posts-archives-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-archives-before", {}, void 0, true)
                ]),
                "posts-archives-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-archives-after", {}, void 0, true)
                ]),
                _: 3
              })) : unref(page).type === "posts-tags" ? (openBlock(), createBlock(VPPostsTags, { key: 1 }, {
                "posts-tags-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-before", {}, void 0, true)
                ]),
                "posts-tags-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-after", {}, void 0, true)
                ]),
                "posts-tags-title-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-title-after", {}, void 0, true)
                ]),
                "posts-tags-content-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-content-before", {}, void 0, true)
                ]),
                _: 3
              })) : unref(page).type === "posts-categories" ? (openBlock(), createBlock(VPPostsCategories, { key: 2 }, {
                "posts-categories-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-categories-before", {}, void 0, true)
                ]),
                "posts-categories-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-categories-after", {}, void 0, true)
                ]),
                "posts-categories-content-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-categories-content-before", {}, void 0, true)
                ]),
                _: 3
              })) : (openBlock(), createBlock(VPPostList, {
                key: 3,
                "home-posts": __props.homePosts
              }, {
                "posts-post-list-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-post-list-before", {}, void 0, true)
                ]),
                "posts-post-list-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-post-list-after", {}, void 0, true)
                ]),
                "posts-post-list-pagination-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-post-list-pagination-after", {}, void 0, true)
                ]),
                _: 3
              }, 8, ["home-posts"]))
            ]),
            _: 3
          }),
          createVNode(VPPostsAside, null, {
            "posts-aside-top": withCtx(() => [
              renderSlot(_ctx.$slots, "posts-aside-top", {}, void 0, true)
            ]),
            "posts-aside-bottom": withCtx(() => [
              renderSlot(_ctx.$slots, "posts-aside-bottom", {}, void 0, true)
            ]),
            _: 3
          }),
          createVNode(VPPostsExtract, null, {
            "posts-extract-before": withCtx(() => [
              renderSlot(_ctx.$slots, "posts-extract-before", {}, void 0, true)
            ]),
            "posts-extract-after": withCtx(() => [
              renderSlot(_ctx.$slots, "posts-extract-after", {}, void 0, true)
            ]),
            _: 3
          })
        ], 2),
        renderSlot(_ctx.$slots, "posts-bottom", {}, void 0, true)
      ], 2);
    };
  }
});
const VPPosts = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-eb06acb4"]]);
const _hoisted_1$m = { class: "vp-home" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props) {
    const slots = useSlots();
    function VPHomePosts() {
      return h$1(VPPosts, { homePosts: true }, {
        "posts-top": () => slots["posts-top"]?.(),
        "posts-bottom": () => slots["posts-bottom"]?.(),
        "posts-post-list-before": () => slots["posts-post-list-before"]?.(),
        "posts-post-list-after": () => slots["posts-post-list-after"]?.(),
        "posts-post-list-pagination-after": () => slots["posts-post-list-pagination-after"]?.()
      });
    }
    const components = {
      "banner": VPHomeBanner,
      "hero": VPHomeHero,
      "doc-hero": VPHomeDocHero,
      "features": VPHomeFeatures,
      "text-image": VPHomeTextImage,
      "image-text": VPHomeTextImage,
      "profile": VPHomeProfile,
      "blog": VPHomePosts,
      "posts": VPHomePosts,
      "custom": _sfc_main$S
    };
    const DEFAULT_HERO = {
      name: "Theme Plume",
      tagline: "VuePress Next Theme",
      text: "一个简约的，功能丰富的 vuepress 文档&博客 主题"
    };
    const { frontmatter: matter } = useData();
    const config2 = computed(() => {
      const config22 = matter.value.config;
      if (config22 && config22.length)
        return config22;
      if (matter.value.banner) {
        return [{
          type: "banner",
          banner: matter.value.banner,
          bannerMask: matter.value.bannerMask,
          hero: matter.value.hero ?? DEFAULT_HERO
        }];
      }
      return [{
        type: "hero",
        full: true,
        background: "tint-plate",
        hero: matter.value.hero ?? DEFAULT_HERO
      }];
    });
    const onlyOnce = computed(() => config2.value.length === 1);
    function resolveComponentName(type) {
      return components[type] ?? resolveComponent(type);
    }
    let el = null;
    watch(() => onlyOnce.value, (value) => nextTick(() => {
      if (typeof document !== "undefined") {
        el ??= document.querySelector(".vp-layout");
        el?.classList.toggle("footer-no-border", value);
      }
    }), { immediate: true });
    onUnmounted(() => {
      el?.classList.remove("footer-no-border");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$m, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(config2.value, (item, index) => {
          return openBlock(), createElementBlock("div", {
            key: item.type + index,
            class: normalizeClass({ layout: index > 0 && item.type !== "features" && item.type !== "custom" })
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(resolveComponentName(item.type)), mergeProps({ ref_for: true }, item, {
              index,
              "only-once": onlyOnce.value
            }), null, 16, ["index", "only-once"]))
          ], 2);
        }), 128))
      ]);
    };
  }
});
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-7a0ba991"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPComment",
  setup(__props) {
    const { frontmatter, isDark } = useData();
    const { isPageDecrypted } = useEncrypt();
    const hasComment = computed(
      () => frontmatter.value.comments !== false && isPageDecrypted.value
    );
    return (_ctx, _cache) => {
      const _component_DocComment = resolveComponent("DocComment");
      return hasComment.value ? (openBlock(), createBlock(_component_DocComment, {
        key: 0,
        darkmode: unref(isDark),
        "vp-comment": ""
      }, null, 8, ["darkmode"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$l = ["href"];
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    function handleClick({ target: el }) {
      const id = `#${el.href.split("#")[1]}`;
      const heading = document.querySelector(
        decodeURIComponent(id)
      );
      heading?.focus({ preventScroll: true });
    }
    return (_ctx, _cache) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(__props.root ? "root" : "nested")
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, ({ children, link, title }) => {
          return openBlock(), createElementBlock("li", { key: link }, [
            createBaseVNode("a", {
              class: "outline-link",
              href: link,
              onClick: handleClick
            }, toDisplayString(title), 9, _hoisted_1$l),
            children?.length ? (openBlock(), createBlock(_component_VPDocOutlineItem, {
              key: 0,
              headers: children
            }, null, 8, ["headers"])) : createCommentVNode("", true)
          ]);
        }), 128))
      ], 2);
    };
  }
});
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-4e762ff7"]]);
const _hoisted_1$k = { class: "content" };
const _hoisted_2$f = {
  id: "doc-outline-aria-label",
  "aria-level": "2",
  class: "outline-title",
  role: "heading"
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props) {
    const { theme } = useData();
    const headers = useHeaders();
    const hasOutline = computed(() => headers.value.length > 0);
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    function handlePrint() {
      window.print();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        ref_key: "container",
        ref: container,
        "aria-labelledby": "doc-outline-aria-label",
        class: normalizeClass(["vp-doc-aside-outline", { "has-outline": hasOutline.value }]),
        role: "navigation"
      }, [
        createBaseVNode("div", _hoisted_1$k, [
          createBaseVNode("div", {
            ref_key: "marker",
            ref: marker,
            class: "outline-marker"
          }, null, 512),
          createBaseVNode("div", _hoisted_2$f, [
            createBaseVNode("span", null, toDisplayString(unref(theme).outlineLabel || "On this page"), 1),
            createBaseVNode("span", {
              class: "vpi-print icon",
              onClick: handlePrint
            })
          ]),
          createVNode(VPDocOutlineItem, {
            headers: unref(headers),
            root: true
          }, null, 8, ["headers"])
        ])
      ], 2);
    };
  }
});
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-aa56eba0"]]);
const _hoisted_1$j = { class: "vp-doc-aside" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true),
        createVNode(VPDocAsideOutline),
        renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "spacer" }, null, -1)),
        renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
      ]);
    };
  }
});
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-5976474c"]]);
const _hoisted_1$i = {
  key: 0,
  class: "vp-breadcrumb"
};
const _hoisted_2$e = {
  vocab: "https://schema.org/",
  typeof: "BreadcrumbList"
};
const _hoisted_3$d = {
  key: 0,
  class: "vpi-chevron-right"
};
const _hoisted_4$c = ["content"];
const _hoisted_5$6 = ["content"];
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPDocBreadcrumbs",
  setup(__props) {
    const { page, collection } = useData();
    const { isPosts } = usePostsPageData();
    const { home, posts, categories } = useInternalLink();
    const sidebar2 = useSidebarData();
    const routeLocale = useRouteLocale();
    const hasBreadcrumb = computed(() => {
      if (isPosts.value && page.value.categoryList)
        return page.value.categoryList.length > 0;
      return sidebar2.value.length > 0;
    });
    const breadcrumbList = computed(() => {
      if (!hasBreadcrumb.value)
        return [];
      const list = [{ text: home.value.text, link: home.value.link }];
      if (isPosts.value) {
        if ((collection.value?.postList ?? true) && posts.value)
          list.push({ text: posts.value.text, link: posts.value.link });
        const categoryList = page.value.categoryList ?? [];
        for (const category of categoryList) {
          list.push({
            text: category.name,
            link: categories.value ? `${categories.value.link}?id=${category.id}` : void 0
          });
        }
      } else {
        if (collection.value) {
          const link = normalizeLink(routeLocale.value, collection.value.linkPrefix || collection.value.dir);
          const { notFound, meta, path } = resolveRoute(link);
          path !== page.value.path && list.push({
            link: !notFound ? path : void 0,
            text: meta.title || collection.value.title || removeEndingSlash(collection.value.dir).split("/").pop() || ""
          });
        }
        if (sidebar2.value.length > 0) {
          list.push(...resolveSidebar(sidebar2.value) || []);
        }
      }
      list.push({ text: page.value.title, link: page.value.path, current: true });
      return list.reduce((acc, item, index) => {
        const prev = acc[index - 1];
        if (prev && (prev.link === item.link || prev.text === item.text))
          return acc;
        return [...acc, item];
      }, []);
    });
    function resolveSidebar(sidebar22, result = []) {
      for (const item of sidebar22) {
        const link = item.link ? resolveRouteFullPath(item.link) : void 0;
        if (link === page.value.path) {
          return result;
        } else if (item.items) {
          const res = resolveSidebar(
            item.items,
            [...result, { text: item.text, link: item.link }]
          );
          if (res)
            return res;
        }
      }
      return null;
    }
    return (_ctx, _cache) => {
      return hasBreadcrumb.value ? (openBlock(), createElementBlock("nav", _hoisted_1$i, [
        createBaseVNode("ol", _hoisted_2$e, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(breadcrumbList.value, ({ text, link, current }, index) => {
            return openBlock(), createElementBlock("li", {
              key: link,
              property: "itemListElement",
              typeof: "ListItem"
            }, [
              createVNode(_sfc_main$1s, {
                href: link,
                class: normalizeClass(["breadcrumb", { current }]),
                property: "item",
                typeof: "WebPage",
                text,
                "no-icon": ""
              }, null, 8, ["href", "class", "text"]),
              index !== breadcrumbList.value.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_3$d)) : createCommentVNode("", true),
              createBaseVNode("meta", {
                property: "name",
                content: text
              }, null, 8, _hoisted_4$c),
              createBaseVNode("meta", {
                property: "position",
                content: `${index + 1}`
              }, null, 8, _hoisted_5$6)
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const VPDocBreadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-50d2ef24"]]);
const _hoisted_1$h = { class: "hint-container tip copyright-container" };
const _hoisted_2$d = { key: 0 };
const _hoisted_3$c = {
  key: 1,
  "data-allow-mismatch": ""
};
const _hoisted_4$b = { key: 2 };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPCopyright",
  props: {
    author: {},
    creation: {},
    source: {},
    license: {}
  },
  setup(__props) {
    const props = __props;
    const { theme } = useData();
    const {
      author,
      creation,
      creationText,
      license,
      sourceUrl
    } = useCopyright(computed(() => props));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$h, [
        unref(author) ? (openBlock(), createElementBlock("p", _hoisted_2$d, [
          createBaseVNode("span", null, toDisplayString(unref(theme).copyrightAuthorText || "Copyright Ownership:"), 1),
          createVNode(_sfc_main$1s, {
            href: unref(author).url,
            "no-icon": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(author).name), 1)
            ]),
            _: 1
          }, 8, ["href"])
        ])) : createCommentVNode("", true),
        unref(sourceUrl) ? (openBlock(), createElementBlock("p", _hoisted_3$c, [
          createBaseVNode("span", null, toDisplayString(unref(creationText)), 1),
          createVNode(_sfc_main$1s, {
            href: unref(sourceUrl),
            class: "source",
            "no-icon": unref(creation) === "original",
            "data-allow-mismatch": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(decodeURIComponent(unref(sourceUrl))), 1)
            ]),
            _: 1
          }, 8, ["href", "no-icon"])
        ])) : createCommentVNode("", true),
        unref(license) ? (openBlock(), createElementBlock("p", _hoisted_4$b, [
          createBaseVNode("span", null, toDisplayString(unref(theme).copyrightLicenseText || "License under"), 1),
          createVNode(_sfc_main$1s, {
            href: unref(license).url,
            "no-icon": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(license).name), 1)
            ]),
            _: 1
          }, 8, ["href"]),
          unref(license).icons ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(license).icons, (icon) => {
            return openBlock(), createElementBlock("span", {
              key: icon,
              class: normalizeClass(`vpi-license-${icon}`)
            }, null, 2);
          }), 128)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const VPCopyright = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-22c67d2a"]]);
const _hoisted_1$g = ["href"];
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPDocHeader",
  props: {
    title: {},
    anchor: {}
  },
  setup(__props) {
    const { theme, frontmatter } = useData();
    const header = computed(() => {
      const outline = frontmatter.value.outline ?? theme.value.outline;
      const level = Array.isArray(outline) ? outline[0] : outline === "deep" ? 2 : outline || 2;
      return `h${level}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(header.value), {
        id: __props.anchor,
        tabindex: "-1",
        class: "vp-doc-header"
      }, {
        default: withCtx(() => [
          createBaseVNode("a", {
            href: `#${__props.anchor}`,
            class: "header-anchor"
          }, [
            createBaseVNode("span", null, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(__props.title), 1)
              ], true)
            ])
          ], 8, _hoisted_1$g)
        ]),
        _: 3
      }, 8, ["id"]);
    };
  }
});
const VPDocHeader = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-c0ea4d83"]]);
const _hoisted_1$f = {
  key: 0,
  class: "vp-doc-copyright"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPDocCopyright",
  setup(__props) {
    const { theme, frontmatter } = useData();
    const copyright = computed(() => {
      if ((frontmatter.value.copyright ?? theme.value.copyright ?? false) === false) {
        return null;
      }
      const docCopyright = isPlainObject(frontmatter.value.copyright) ? frontmatter.value.copyright : { license: frontmatter.value.copyright === true ? "" : frontmatter.value.copyright };
      if (!theme.value.copyright)
        return docCopyright;
      const themeCopyright = isPlainObject(theme.value.copyright) ? theme.value.copyright : { license: theme.value.copyright === true ? void 0 : theme.value.copyright };
      docCopyright.license ??= themeCopyright.license;
      docCopyright.author ??= themeCopyright.author;
      docCopyright.creation ??= themeCopyright.creation;
      return docCopyright;
    });
    return (_ctx, _cache) => {
      return copyright.value ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(VPDocHeader, { anchor: "doc-copyright" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(theme).copyrightText || "Copyright"), 1)
          ]),
          _: 1
        }),
        createVNode(VPCopyright, normalizeProps(guardReactiveProps(copyright.value)), null, 16)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$e = {
  key: 0,
  class: "vp-doc-footer"
};
const _hoisted_2$c = {
  key: 0,
  class: "edit-info"
};
const _hoisted_3$b = {
  key: 0,
  class: "edit-link"
};
const _hoisted_4$a = {
  key: 1,
  class: "last-updated",
  "aria-label": "Last updated"
};
const _hoisted_5$5 = { class: "last-updated-text" };
const _hoisted_6$2 = ["datetime"];
const _hoisted_7$2 = { class: "contributors-label" };
const _hoisted_8$1 = { class: "contributors-info" };
const _hoisted_9 = { class: "contributor" };
const _hoisted_10 = {
  key: 2,
  class: "prev-next"
};
const _hoisted_11 = { class: "pager" };
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = { class: "title" };
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = { class: "pager" };
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = { class: "title" };
const _hoisted_18 = ["innerHTML"];
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme, frontmatter, page } = useData();
    const themeData2 = useThemeData();
    const editLink = useEditLink();
    const { datetime: lastUpdated, isoDatetime, lastUpdatedText } = useLastUpdated();
    const { contributors, mode } = useContributors();
    const { prev, next } = usePrevNext();
    const hasChangelog = computed(
      () => page.value.git?.changelog?.length && (frontmatter.value.changelog ?? !!themeData2.value.changelog)
    );
    const hasEditLink = computed(
      () => Boolean(themeData2.value.editLink && frontmatter.value.editLink !== false && editLink.value)
    );
    const hasLastUpdated = computed(
      () => Boolean(themeData2.value.lastUpdated !== false && frontmatter.value.lastUpdated !== false && lastUpdated.value) && !hasChangelog.value
    );
    const hasContributors = computed(() => Boolean(contributors.value.length) && mode.value === "inline");
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || hasContributors.value || prev.value?.link || next.value?.link;
    });
    return (_ctx, _cache) => {
      const _component_VPIcon = resolveComponent("VPIcon");
      return showFooter.value ? (openBlock(), createElementBlock("footer", _hoisted_1$e, [
        renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true),
        hasEditLink.value || hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_2$c, [
          hasEditLink.value && unref(editLink) ? (openBlock(), createElementBlock("div", _hoisted_3$b, [
            createVNode(_sfc_main$1s, {
              class: "edit-link-button",
              href: unref(editLink).link,
              "no-icon": ""
            }, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("span", {
                  class: "vpi-square-pen edit-link-icon",
                  "aria-label": "edit icon"
                }, null, -1)),
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", true),
          hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_4$a, [
            createBaseVNode("p", _hoisted_5$5, [
              createTextVNode(toDisplayString(unref(lastUpdatedText)) + ": ", 1),
              createBaseVNode("time", {
                datetime: unref(isoDatetime),
                class: "last-updated-time"
              }, toDisplayString(unref(lastUpdated)), 9, _hoisted_6$2)
            ])
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        hasContributors.value && unref(contributors)?.length ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["contributors", { right: hasLastUpdated.value }]),
          "aria-label": "Contributors"
        }, [
          createBaseVNode("span", _hoisted_7$2, toDisplayString(unref(theme).contributorsText || "Contributors") + ": ", 1),
          createBaseVNode("span", _hoisted_8$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contributors), (contributor, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: contributor.name + index
              }, [
                createBaseVNode("span", _hoisted_9, toDisplayString(contributor.name), 1),
                index !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(", ")
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ], 2)) : createCommentVNode("", true),
        unref(prev)?.link || unref(next)?.link ? (openBlock(), createElementBlock("nav", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            unref(prev)?.link ? (openBlock(), createBlock(_sfc_main$1s, {
              key: 0,
              class: "pager-link prev",
              href: unref(prev).link
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: "desc",
                  innerHTML: unref(theme).prevPageLabel || "Previous page"
                }, null, 8, _hoisted_12),
                createBaseVNode("span", _hoisted_13, [
                  unref(prev).icon ? (openBlock(), createBlock(_component_VPIcon, {
                    key: 0,
                    name: unref(prev).icon
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createBaseVNode("span", {
                    innerHTML: unref(prev).text
                  }, null, 8, _hoisted_14)
                ])
              ]),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_15, [
            unref(next)?.link ? (openBlock(), createBlock(_sfc_main$1s, {
              key: 0,
              class: "pager-link next",
              href: unref(next).link
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: "desc",
                  innerHTML: unref(theme).nextPageLabel || "Next page"
                }, null, 8, _hoisted_16),
                createBaseVNode("span", _hoisted_17, [
                  unref(next).icon ? (openBlock(), createBlock(_component_VPIcon, {
                    key: 0,
                    name: unref(next).icon
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createBaseVNode("span", {
                    innerHTML: unref(next).text
                  }, null, 8, _hoisted_18)
                ])
              ]),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-3eaf7867"]]);
var define_READING_TIME_LOCALES_default = { "/": { word: "约 $word 字", less1Minute: "小于 1 分钟", time: "大约 $time 分钟" } };
const i = () => {
  const e = usePage();
  return computed(() => e.value.readingTime ?? null);
}, u = (e, o) => {
  const { minutes: r2, words: s2 } = e, { less1Minute: m2, word: c, time: d2 } = o;
  return { time: r2 < 1 ? m2 : d2.replace("$time", Math.round(r2).toString()), words: c.replace("$word", s2.toString()) };
}, a = { words: "", time: "" }, n = typeof define_READING_TIME_LOCALES_default > "u" ? null : define_READING_TIME_LOCALES_default, l = () => n ? useLocale$1(n) : computed(() => null), p = () => {
  if (n === null) return computed(() => a);
  const e = i(), o = l();
  return computed(() => e.value && o.value ? u(e.value, o.value) : a);
};
const _hoisted_1$d = { class: "vp-doc-title" };
const _hoisted_2$b = {
  key: 0,
  class: "vp-doc-meta"
};
const _hoisted_3$a = {
  key: 0,
  class: "reading-time"
};
const _hoisted_4$9 = { key: 1 };
const _hoisted_5$4 = {
  key: 2,
  class: "create-time"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPDocMeta",
  setup(__props) {
    const { page, frontmatter: matter, theme, collection } = useData();
    const colors = useTagColors();
    const readingTime = p();
    const { tags: tagsLink } = useInternalLink();
    const { isPosts } = usePostsPageData();
    const createTime = computed(() => {
      const show = theme.value.createTime ?? true;
      if (!show || show === "only-posts" && !isPosts.value)
        return "";
      if (matter.value.createTime)
        return matter.value.createTime.split(/\s|T/)[0].replace(/\//g, "-");
      return "";
    });
    const tags = computed(() => {
      const tagTheme = collection.value?.tagsTheme ?? "colored";
      if (matter.value.tags) {
        return matter.value.tags.slice(0, 4).map((tag) => ({
          name: tag,
          className: colors.value[tag] ? `vp-tag-${colors.value[tag]}` : `tag-${tagTheme}`
        }));
      }
      return [];
    });
    const badge = computed(() => {
      if (matter.value.badge) {
        return typeof matter.value.badge === "string" ? { text: matter.value.badge } : matter.value.badge;
      }
      return false;
    });
    const hasDocMetaSlot = inject("doc-meta-slot-exists", ref(false));
    const hasMeta = computed(
      () => readingTime.value.time || tags.value.length || createTime.value || hasDocMetaSlot.value
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$d, [
          renderSlot(_ctx.$slots, "doc-title-before", {}, void 0, true),
          createBaseVNode("h1", {
            class: normalizeClass(["page-title", { padding: !hasMeta.value }])
          }, [
            unref(page).frontmatter.draft ? (openBlock(), createBlock(VPBadge, {
              key: 0,
              type: "warning",
              text: "DRAFT"
            })) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(unref(page).title) + " ", 1),
            badge.value ? (openBlock(), createBlock(VPBadge, {
              key: 1,
              type: badge.value.type || "tip",
              text: badge.value.text
            }, null, 8, ["type", "text"])) : createCommentVNode("", true)
          ], 2),
          renderSlot(_ctx.$slots, "doc-title-after", {}, void 0, true)
        ]),
        hasMeta.value ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
          renderSlot(_ctx.$slots, "doc-meta-before", {}, void 0, true),
          unref(readingTime).time && unref(matter).readingTime !== false ? (openBlock(), createElementBlock("p", _hoisted_3$a, [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-books icon" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(unref(readingTime).words), 1),
            createBaseVNode("span", null, toDisplayString(unref(readingTime).time), 1)
          ])) : createCommentVNode("", true),
          tags.value.length > 0 ? (openBlock(), createElementBlock("p", _hoisted_4$9, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-tag icon" }, null, -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
              return openBlock(), createBlock(_sfc_main$1s, {
                key: tag.name,
                class: normalizeClass(["tag", tag.className]),
                href: unref(tagsLink)?.link && unref(isPosts) ? `${unref(tagsLink).link}?tag=${tag.name}` : void 0
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(tag.name), 1)
                ]),
                _: 2
              }, 1032, ["class", "href"]);
            }), 128))
          ])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "doc-meta-after", {}, void 0, true),
          createTime.value ? (openBlock(), createElementBlock("p", _hoisted_5$4, [
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "vpi-clock icon" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(createTime.value), 1)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const VPDocMeta = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-f689caf4"]]);
const _hoisted_1$c = { class: "vp-encrypt-form" };
const _hoisted_2$a = ["innerHTML"];
const _hoisted_3$9 = { class: "encrypt-input-wrapper" };
const _hoisted_4$8 = { for: "encrypt-input" };
const _hoisted_5$3 = ["placeholder"];
const _hoisted_6$1 = { key: 0 };
const _hoisted_7$1 = {
  key: 1,
  class: "vpi-loading"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPEncryptForm",
  props: {
    global: { type: Boolean },
    info: {}
  },
  emits: ["validate"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    const { theme } = useData();
    const { compareGlobal, comparePage } = useEncryptCompare();
    const password = ref("");
    const errorCode = ref(0);
    const unlocking = ref(false);
    async function onSubmit() {
      if (unlocking.value)
        return;
      const compare = __props.global ? compareGlobal : comparePage;
      unlocking.value = true;
      const result = await compare(password.value);
      unlocking.value = false;
      if (!result) {
        errorCode.value = 1;
      } else {
        errorCode.value = 0;
        password.value = "";
      }
      emit2("validate", errorCode.value === 0);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createBaseVNode("p", {
          class: "encrypt-text",
          innerHTML: __props.info ?? "Only Password can access this site"
        }, null, 8, _hoisted_2$a),
        createBaseVNode("p", _hoisted_3$9, [
          createBaseVNode("label", _hoisted_4$8, [
            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "vpi-lock icon-lock" }, null, -1)),
            withDirectives(createBaseVNode("input", {
              id: "encrypt-input",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => password.value = $event),
              class: normalizeClass(["encrypt-input", { error: errorCode.value === 1 }]),
              type: "password",
              autocomplete: "off",
              placeholder: unref(theme).encryptPlaceholder ?? "Enter Password",
              onKeyup: withKeys(onSubmit, ["enter"]),
              onFocus: _cache[1] || (_cache[1] = ($event) => !password.value && (errorCode.value = 0)),
              onInput: _cache[2] || (_cache[2] = ($event) => password.value && (errorCode.value = 0))
            }, null, 42, _hoisted_5$3), [
              [vModelText, password.value]
            ])
          ])
        ]),
        createBaseVNode("button", {
          class: normalizeClass(["encrypt-button", { unlocking: unlocking.value }]),
          onClick: onSubmit
        }, [
          !unlocking.value ? (openBlock(), createElementBlock("span", _hoisted_6$1, toDisplayString(unref(theme).encryptButtonText ?? "Confirm"), 1)) : (openBlock(), createElementBlock("span", _hoisted_7$1))
        ], 2)
      ]);
    };
  }
});
const VPEncryptForm = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-fa8d6c8b"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "VPEncryptPage",
  setup(__props) {
    const { theme, frontmatter } = useData();
    const el = useTemplateRef("el");
    function onValidate(isValidate) {
      if (!isValidate) {
        el.value?.classList.add("animation");
        setTimeout(() => {
          el.value?.classList.remove("animation");
        }, 800);
      }
    }
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createBlock(_component_ClientOnly, null, {
        default: withCtx(() => [
          createBaseVNode("div", mergeProps({
            ref_key: "el",
            ref: el,
            class: "vp-page-encrypt"
          }, _ctx.$attrs), [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "logo" }, [
              createBaseVNode("span", { class: "vpi-lock icon-lock-head" })
            ], -1)),
            createVNode(VPEncryptForm, {
              info: unref(frontmatter).passwordHint || unref(theme).encryptPageText,
              onValidate
            }, null, 8, ["info"])
          ], 16)
        ]),
        _: 1
      });
    };
  }
});
const VPEncryptPage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-a6dfc959"]]);
const _hoisted_1$b = { class: "container" };
const _hoisted_2$9 = { class: "aside-content" };
const _hoisted_3$8 = { class: "content-container" };
const _hoisted_4$7 = { class: "main" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props) {
    const { page, theme, frontmatter } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const { isPosts } = usePostsPageData();
    const headers = useHeaders();
    const { isPageDecrypted } = useEncrypt();
    const { mode: contributorsMode } = useContributors();
    const enableAside = computed(() => {
      if (!hasAside.value)
        return false;
      if (isPosts.value)
        return headers.value.length > 0;
      return true;
    });
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    const enabledExternalLinkIcon = computed(
      () => theme.value.externalLinkIcon && frontmatter.value.externalLinkIcon !== false
    );
    const asideEl = ref();
    watch(
      () => route.hash,
      (hash) => nextTick(() => {
        if (!asideEl.value)
          return;
        const activeItem = asideEl.value.querySelector(
          `.outline-link[href="${hash}"]`
        );
        if (!activeItem || !hash) {
          asideEl.value.scrollTop = 0;
          return;
        }
        const { top: navTop, height: navHeight } = asideEl.value.getBoundingClientRect();
        const { top: activeTop, height: activeHeight } = activeItem.getBoundingClientRect();
        if (activeTop < navTop || activeTop + activeHeight > navTop + navHeight)
          activeItem.scrollIntoView({ block: "center" });
      }),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      const _component_DocGitContributors = resolveComponent("DocGitContributors");
      const _component_DocGitChangelog = resolveComponent("DocGitChangelog");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-doc-container", {
          "has-sidebar": unref(hasSidebar),
          "has-aside": enableAside.value,
          "is-posts": unref(isPosts),
          "with-encrypt": !unref(isPageDecrypted)
        }])
      }, [
        renderSlot(_ctx.$slots, "doc-top", {}, void 0, true),
        createBaseVNode("div", _hoisted_1$b, [
          enableAside.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["aside", { "left-aside": unref(leftAside) }]),
            "vp-outline": ""
          }, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "aside-curtain" }, null, -1)),
            createVNode(_sfc_main$w, null, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("div", {
                  ref_key: "asideEl",
                  ref: asideEl,
                  key: unref(page).path,
                  class: "aside-container"
                }, [
                  createBaseVNode("div", _hoisted_2$9, [
                    createVNode(VPDocAside, null, {
                      "aside-top": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                      ]),
                      "aside-bottom": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                      ]),
                      "aside-outline-before": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                      ]),
                      "aside-outline-after": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                      ]),
                      "aside-ads-before": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
                      ]),
                      "aside-ads-after": withCtx(() => [
                        renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ])
                ]))
              ]),
              _: 3
            })
          ], 2)) : createCommentVNode("", true),
          createVNode(_sfc_main$w, null, {
            default: withCtx(() => [
              (openBlock(), createElementBlock("div", {
                key: unref(page).path,
                class: "content"
              }, [
                createBaseVNode("div", _hoisted_3$8, [
                  renderSlot(_ctx.$slots, "doc-before", {}, void 0, true),
                  createBaseVNode("main", _hoisted_4$7, [
                    createVNode(VPDocBreadcrumbs),
                    renderSlot(_ctx.$slots, "doc-meta-top", {}, void 0, true),
                    createVNode(VPDocMeta, null, {
                      "doc-title-before": withCtx(() => [
                        renderSlot(_ctx.$slots, "doc-title-before", {}, void 0, true)
                      ]),
                      "doc-title-after": withCtx(() => [
                        renderSlot(_ctx.$slots, "doc-title-after", {}, void 0, true)
                      ]),
                      "doc-meta-before": withCtx(() => [
                        renderSlot(_ctx.$slots, "doc-meta-before", {}, void 0, true)
                      ]),
                      "doc-meta-after": withCtx(() => [
                        renderSlot(_ctx.$slots, "doc-meta-after", {}, void 0, true)
                      ]),
                      _: 3
                    }),
                    renderSlot(_ctx.$slots, "doc-meta-bottom", {}, void 0, true),
                    !unref(isPageDecrypted) ? (openBlock(), createBlock(VPEncryptPage, { key: 0 })) : (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass(["vp-doc plume-content", [pageName.value, enabledExternalLinkIcon.value && "external-link-icon-enabled"]]),
                      "vp-content": ""
                    }, [
                      renderSlot(_ctx.$slots, "doc-content-before", {}, void 0, true),
                      createVNode(_component_Content),
                      unref(contributorsMode) === "block" ? (openBlock(), createBlock(_component_DocGitContributors, { key: 0 })) : createCommentVNode("", true),
                      createVNode(_component_DocGitChangelog),
                      createVNode(_sfc_main$m)
                    ], 2))
                  ]),
                  unref(isPageDecrypted) ? (openBlock(), createBlock(VPDocFooter, { key: 0 }, {
                    "doc-footer-before": withCtx(() => [
                      renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                    ]),
                    _: 3
                  })) : createCommentVNode("", true),
                  createVNode(_sfc_main$t),
                  renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
                ])
              ]))
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
      ], 2);
    };
  }
});
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-7f95359a"]]);
const _hoisted_1$a = { class: "avatar" };
const _hoisted_2$8 = ["src", "alt"];
const _hoisted_3$7 = { class: "content" };
const _hoisted_4$6 = {
  key: 0,
  class: "location"
};
const _hoisted_5$2 = {
  key: 1,
  class: "organization"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPFriendsItem",
  props: {
    friend: {}
  },
  setup(__props) {
    const isDark = useDarkMode();
    function getStyle(name, color) {
      if (!color)
        return {};
      const value = isPlainObject(color) ? isDark.value ? color.dark : color.light : color;
      return value ? { [name]: value } : {};
    }
    const friendStyle = computed(() => {
      return {
        ...getStyle("--vp-friends-text-color", __props.friend.color),
        ...getStyle("--vp-friends-bg-color", __props.friend.backgroundColor),
        ...getStyle("--vp-friends-name-color", __props.friend.nameColor)
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vp-friend", {
          "only-title": !__props.friend.desc && !__props.friend.socials?.length && !__props.friend.location && !__props.friend.organization,
          "no-desc": !__props.friend.desc
        }]),
        style: normalizeStyle(friendStyle.value)
      }, [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("img", {
            src: __props.friend.avatar,
            alt: __props.friend.name
          }, null, 8, _hoisted_2$8)
        ]),
        createBaseVNode("div", _hoisted_3$7, [
          createVNode(_sfc_main$1s, {
            class: "title",
            href: __props.friend.link,
            "no-icon": "",
            text: __props.friend.name
          }, null, 8, ["href", "text"]),
          __props.friend.location ? (openBlock(), createElementBlock("p", _hoisted_4$6, [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-location" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(__props.friend.location), 1)
          ])) : createCommentVNode("", true),
          __props.friend.organization ? (openBlock(), createElementBlock("p", _hoisted_5$2, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-organization" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(__props.friend.organization), 1)
          ])) : createCommentVNode("", true),
          __props.friend.desc ? (openBlock(), createElementBlock("p", {
            key: 2,
            class: normalizeClass(["desc", { offset: __props.friend.location && __props.friend.organization }])
          }, toDisplayString(__props.friend.desc), 3)) : createCommentVNode("", true),
          __props.friend.socials ? (openBlock(), createBlock(VPSocialLinks, {
            key: 3,
            links: __props.friend.socials
          }, null, 8, ["links"])) : createCommentVNode("", true)
        ])
      ], 6);
    };
  }
});
const VPFriendsItem = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-6a26d27f"]]);
const _hoisted_1$9 = { class: "vp-friends-group" };
const _hoisted_2$7 = { class: "title" };
const _hoisted_3$6 = {
  key: 0,
  class: "description"
};
const _hoisted_4$5 = {
  key: 1,
  class: "friends-list"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPFriendsGroup",
  props: {
    group: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("h3", _hoisted_2$7, toDisplayString(__props.group.title || "My Friends"), 1),
        __props.group.desc ? (openBlock(), createElementBlock("p", _hoisted_3$6, toDisplayString(__props.group.desc), 1)) : createCommentVNode("", true),
        __props.group.list?.length ? (openBlock(), createElementBlock("section", _hoisted_4$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.group.list, (friend, index) => {
            return openBlock(), createBlock(VPFriendsItem, {
              key: friend.name + index,
              friend
            }, null, 8, ["friend"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const VPFriendsGroup = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-e24184b2"]]);
const _hoisted_1$8 = { class: "vp-friends" };
const _hoisted_2$6 = { class: "title" };
const _hoisted_3$5 = {
  key: 1,
  class: "description"
};
const _hoisted_4$4 = {
  key: 2,
  class: "friends-list"
};
const _hoisted_5$1 = {
  key: 4,
  class: "edit-link"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPFriends",
  setup(__props) {
    const editLink = useEditLink();
    const { frontmatter: matter, page } = useData();
    const list = computed(() => matter.value.list || []);
    const groups = computed(() => matter.value.groups || []);
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        unref(matter).contentPosition === "before" ? (openBlock(), createBlock(_component_Content, {
          key: 0,
          class: "vp-doc plume-content before",
          "vp-content": ""
        })) : createCommentVNode("", true),
        createBaseVNode("h2", _hoisted_2$6, toDisplayString(unref(matter).title || "My Friends"), 1),
        unref(matter).description && !unref(page).autoDesc ? (openBlock(), createElementBlock("p", _hoisted_3$5, toDisplayString(unref(matter).description), 1)) : createCommentVNode("", true),
        list.value.length ? (openBlock(), createElementBlock("section", _hoisted_4$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (friend, index) => {
            return openBlock(), createBlock(VPFriendsItem, {
              key: friend.name + index,
              friend
            }, null, 8, ["friend"]);
          }), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group, index) => {
          return openBlock(), createBlock(VPFriendsGroup, {
            key: index,
            group
          }, null, 8, ["group"]);
        }), 128)),
        unref(matter).contentPosition !== "before" ? (openBlock(), createBlock(_component_Content, {
          key: 3,
          class: "vp-doc plume-content after",
          "vp-content": ""
        })) : createCommentVNode("", true),
        unref(editLink) ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          createVNode(_sfc_main$1s, {
            class: "edit-link-button",
            href: unref(editLink).link,
            "no-icon": ""
          }, {
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("span", {
                class: "vpi-square-pen edit-link-icon",
                "aria-label": "edit icon"
              }, null, -1)),
              createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
            ]),
            _: 1
          }, 8, ["href"])
        ])) : createCommentVNode("", true),
        createVNode(_sfc_main$t)
      ]);
    };
  }
});
const VPFriends = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-d6f35202"]]);
const _hoisted_1$7 = { class: "vp-page" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPPage",
  setup(__props) {
    const { isPageDecrypted } = useEncrypt();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        !unref(isPageDecrypted) ? (openBlock(), createBlock(VPEncryptPage, { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          renderSlot(_ctx.$slots, "page-top"),
          createVNode(_component_Content, {
            class: "vp-doc plume-content",
            "vp-content": ""
          }),
          renderSlot(_ctx.$slots, "page-bottom")
        ], 64))
      ]);
    };
  }
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  props: {
    isNotFound: { type: Boolean }
  },
  setup(__props) {
    const { hasSidebar } = useSidebar();
    const { frontmatter, collection } = useData();
    const { isPostsLayout } = usePostsPageData();
    const route = useRoute();
    watch(
      [isPostsLayout, () => frontmatter.value.pageLayout, () => route.path],
      () => nextTick(() => {
        if (inBrowser) {
          document.documentElement.classList.toggle("bg-gray", isPostsLayout.value);
          const layout = document.documentElement.className.match(/(?:^|\s)(layout-\S+)(?:$|\s)/)?.[1];
          if (layout)
            document.documentElement.classList.remove(layout);
          document.documentElement.classList.add(`layout-${isPostsLayout.value ? "posts" : frontmatter.value.pageLayout || "doc"}`);
          if (collection.value) {
            const collectionCls = document.documentElement.className.match(/(?:^|\s)(collection-\S+)(?:$|\s)/)?.[1];
            if (collectionCls)
              document.documentElement.classList.remove(collectionCls);
            document.documentElement.classList.add(`collection-${collection.value.type}-${collection.value.linkPrefix?.replace(/^\/|\/$/g, "").replace(/\//g, "_") || "default"}`);
          }
        }
      }),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "VPContent",
        "vp-content": "",
        class: normalizeClass(["vp-content", {
          "has-sidebar": unref(hasSidebar) && !__props.isNotFound,
          "is-home": unref(frontmatter).pageLayout === "home"
        }])
      }, [
        unref(isPostsLayout) || unref(frontmatter).pageLayout === "posts" ? (openBlock(), createBlock(VPPosts, {
          key: 0,
          "home-posts": unref(frontmatter).pageLayout === "posts",
          collection: unref(frontmatter).collection
        }, {
          "posts-top": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-top", {}, void 0, true)
          ]),
          "posts-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-bottom", {}, void 0, true)
          ]),
          "posts-archives-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-archives-before", {}, void 0, true)
          ]),
          "posts-archives-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-archives-after", {}, void 0, true)
          ]),
          "posts-tags-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-tags-before", {}, void 0, true)
          ]),
          "posts-tags-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-tags-after", {}, void 0, true)
          ]),
          "posts-tags-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-tags-title-after", {}, void 0, true)
          ]),
          "posts-tags-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-tags-content-before", {}, void 0, true)
          ]),
          "posts-categories-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-categories-before", {}, void 0, true)
          ]),
          "posts-categories-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-categories-after", {}, void 0, true)
          ]),
          "posts-categories-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-categories-content-before", {}, void 0, true)
          ]),
          "posts-post-list-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-post-list-before", {}, void 0, true)
          ]),
          "posts-post-list-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-post-list-after", {}, void 0, true)
          ]),
          "posts-post-list-pagination-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-post-list-pagination-after", {}, void 0, true)
          ]),
          "posts-aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-aside-top", {}, void 0, true)
          ]),
          "posts-aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-aside-bottom", {}, void 0, true)
          ]),
          "posts-extract-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-extract-before", {}, void 0, true)
          ]),
          "posts-extract-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-extract-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["home-posts", "collection"])) : unref(frontmatter).pageLayout === "page" ? (openBlock(), createBlock(_sfc_main$d, { key: 1 }, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).pageLayout === "friends" ? (openBlock(), createBlock(VPFriends, { key: 2 })) : unref(frontmatter).pageLayout === "home" ? (openBlock(), createBlock(VPHome, { key: 3 }, {
          "posts-top": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-top", {}, void 0, true)
          ]),
          "posts-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-bottom", {}, void 0, true)
          ]),
          "posts-post-list-before": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-post-list-before", {}, void 0, true)
          ]),
          "posts-post-list-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-post-list-after", {}, void 0, true)
          ]),
          "posts-post-list-pagination-after": withCtx(() => [
            renderSlot(_ctx.$slots, "posts-post-list-pagination-after", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).pageLayout && unref(frontmatter).pageLayout !== "doc" ? (openBlock(), createBlock(resolveDynamicComponent(unref(frontmatter).pageLayout), { key: 4 })) : (openBlock(), createBlock(VPDoc, { key: 5 }, {
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "doc-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-title-before", {}, void 0, true)
          ]),
          "doc-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-title-after", {}, void 0, true)
          ]),
          "doc-meta-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-meta-before", {}, void 0, true)
          ]),
          "doc-meta-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-meta-after", {}, void 0, true)
          ]),
          "doc-meta-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-meta-top", {}, void 0, true)
          ]),
          "doc-meta-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-meta-bottom", {}, void 0, true)
          ]),
          "doc-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-content-before", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          _: 3
        }))
      ], 2);
    };
  }
});
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-b7a5cb01"]]);
const _hoisted_1$6 = { class: "container" };
const _hoisted_2$5 = ["innerHTML"];
const _hoisted_3$4 = ["innerHTML"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const footerHeight = useCssVar("--vp-footer-height", inBrowser ? document.body : null);
    const footer = ref(null);
    onMounted(() => {
      if (theme.value.footer && frontmatter.value.footer !== false && footer.value)
        footerHeight.value = `${footer.value.offsetHeight}px`;
    });
    return (_ctx, _cache) => {
      return unref(theme).footer && unref(frontmatter).footer !== false ? (openBlock(), createElementBlock("footer", {
        key: 0,
        ref_key: "footer",
        ref: footer,
        class: normalizeClass(["vp-footer", { "has-sidebar": unref(hasSidebar) }]),
        "vp-footer": ""
      }, [
        renderSlot(_ctx.$slots, "footer-content", {}, () => [
          createBaseVNode("div", _hoisted_1$6, [
            unref(theme).footer.message ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "message",
              innerHTML: unref(theme).footer.message
            }, null, 8, _hoisted_2$5)) : createCommentVNode("", true),
            unref(theme).footer.copyright ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "copyright",
              innerHTML: unref(theme).footer.copyright
            }, null, 8, _hoisted_3$4)) : createCommentVNode("", true)
          ])
        ], true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-62c49f51"]]);
const _hoisted_1$5 = { class: "global-encrypt-container" };
const _hoisted_2$4 = {
  key: 0,
  class: "profile"
};
const _hoisted_3$3 = ["src", "alt"];
const _hoisted_4$3 = { key: 1 };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "VPEncryptGlobal",
  setup(__props) {
    const { theme, site } = useData();
    const profile = computed(() => theme.value.profile);
    const title = computed(() => profile.value?.name || site.value.title);
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ClientOnly, null, {
          default: withCtx(() => [
            createBaseVNode("div", mergeProps({ class: "vp-global-encrypt" }, _ctx.$attrs), [
              createBaseVNode("div", _hoisted_1$5, [
                profile.value || title.value ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
                  profile.value ? (openBlock(), createElementBlock("p", {
                    key: 0,
                    class: normalizeClass(["avatar", { circle: profile.value.circle }])
                  }, [
                    createBaseVNode("img", {
                      src: profile.value.avatar ?? profile.value.url,
                      alt: profile.value.name
                    }, null, 8, _hoisted_3$3)
                  ], 2)) : createCommentVNode("", true),
                  title.value ? (openBlock(), createElementBlock("h3", _hoisted_4$3, toDisplayString(title.value), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createVNode(VPEncryptForm, {
                  global: "",
                  info: unref(theme).encryptGlobalText
                }, null, 8, ["info"])
              ])
            ], 16)
          ]),
          _: 1
        }),
        createVNode(VPFooter)
      ], 64);
    };
  }
});
const VPEncryptGlobal = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-f4027c4b"]]);
const _hoisted_1$4 = { class: "outline" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme } = useData();
    const open = ref(false);
    const vh = ref(0);
    const items2 = ref();
    const btn = ref();
    watch(() => __props.headers, () => {
      open.value = false;
    });
    onClickOutside(items2, () => {
      open.value = false;
    }, { ignore: [btn] });
    function toggle() {
      open.value = !open.value;
      vh.value = window.innerHeight + Math.min(window.scrollY - __props.navHeight, 0);
    }
    function onItemClick(e) {
      if (e.target.classList.contains("outline-link")) {
        if (items2.value)
          items2.value.style.transition = "none";
        nextTick(() => {
          open.value = false;
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vp-local-nav-outline-dropdown",
        style: normalizeStyle({ "--vp-vh": `${vh.value}px` })
      }, [
        __props.headers.length > 0 ? (openBlock(), createElementBlock("button", {
          key: 0,
          ref_key: "btn",
          ref: btn,
          class: normalizeClass({ open: open.value }),
          onClick: toggle
        }, [
          createTextVNode(toDisplayString(unref(theme).outlineLabel || "On this page") + " ", 1),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-chevron-right icon" }, null, -1))
        ], 2)) : createCommentVNode("", true),
        createVNode(Transition, { name: "fade-in-scale-up" }, {
          default: withCtx(() => [
            open.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "items",
              ref: items2,
              class: "items",
              onClick: onItemClick
            }, [
              createBaseVNode("div", _hoisted_1$4, [
                createVNode(VPDocOutlineItem, { headers: __props.headers }, null, 8, ["headers"])
              ])
            ], 512)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3ef393bb"]]);
const _hoisted_1$3 = ["disabled", "aria-expanded"];
const _hoisted_2$3 = { class: "menu-text" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean },
    showOutline: { type: Boolean }
  },
  emits: ["openMenu"],
  setup(__props) {
    const { theme } = useData();
    const { isPosts, isPostsLayout } = usePostsPageData();
    const { hasSidebar } = useSidebar();
    const { y: y2 } = useWindowScroll();
    const navHeight = ref(0);
    const headers = useHeaders();
    const empty = computed(() => {
      return headers.value.length === 0 && !hasSidebar.value;
    });
    onMounted(() => {
      navHeight.value = Number.parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    const classes = computed(() => {
      return {
        "vp-local-nav": true,
        "fixed": empty.value,
        "reached-top": y2.value >= navHeight.value,
        "is-posts": isPosts.value && !isPostsLayout.value,
        "with-outline": !__props.showOutline
      };
    });
    const showLocalNav = computed(() => {
      return (hasSidebar.value || isPosts.value && !isPostsLayout.value) && !empty.value;
    });
    return (_ctx, _cache) => {
      return showLocalNav.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("button", {
          class: normalizeClass(["menu", { hidden: unref(isPosts) }]),
          disabled: unref(isPosts),
          "aria-expanded": __props.open,
          "aria-controls": "SidebarNav",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("openMenu"))
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-align-left menu-icon" }, null, -1)),
          createBaseVNode("span", _hoisted_2$3, toDisplayString(unref(theme).sidebarMenuLabel || "Menu"), 1)
        ], 10, _hoisted_1$3),
        __props.showOutline ? (openBlock(), createBlock(VPLocalNavOutlineDropdown, {
          key: 0,
          headers: unref(headers),
          "nav-height": navHeight.value
        }, null, 8, ["headers", "nav-height"])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1ae3b739"]]);
const _hoisted_1$2 = ["role", "tabindex"];
const _hoisted_2$2 = ["innerHTML"];
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$2 = { class: "items" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => __props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : __props.depth + 2 === 7 ? "p" : `h${__props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const isSeparator = computed(() => __props.item.link?.startsWith("---"));
    const classes = computed(() => [
      [`level-${__props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter")
        return;
      if (!__props.item.link) {
        toggle();
      }
    }
    function onCaretClick() {
      if (__props.item.link) {
        toggle();
      }
    }
    return (_ctx, _cache) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      return openBlock(), createBlock(resolveDynamicComponent(sectionTag.value), {
        class: normalizeClass(["vp-sidebar-item sidebar-item", classes.value])
      }, {
        default: withCtx(() => [
          __props.item.text ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "item",
            role: itemRole.value,
            tabindex: __props.item.items && 0
          }, toHandlers(
            __props.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
            true
          )), [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "indicator" }, null, -1)),
            __props.item.icon ? (openBlock(), createBlock(_sfc_main$1x, {
              key: 0,
              name: __props.item.icon,
              class: normalizeClass({ separator: isSeparator.value })
            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
            __props.item.link && !isSeparator.value ? (openBlock(), createBlock(_sfc_main$1s, {
              key: 1,
              tag: linkTag.value,
              class: "link",
              href: __props.item.link
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(textTag.value), { class: "text" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      innerHTML: __props.item.text
                    }, null, 8, _hoisted_2$2),
                    __props.item.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
                      key: 0,
                      class: "vp-menu-badge"
                    }, typeof __props.item.badge === "string" ? { text: __props.item.badge } : __props.item.badge), null, 16)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["tag", "href"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
              key: 2,
              class: normalizeClass(["text", { separator: isSeparator.value }])
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  innerHTML: __props.item.text
                }, null, 8, _hoisted_3$2),
                __props.item.badge ? (openBlock(), createBlock(VPBadge, mergeProps({
                  key: 0,
                  class: "vp-menu-badge"
                }, typeof __props.item.badge === "string" ? { text: __props.item.badge } : __props.item.badge), null, 16)) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["class"])),
            __props.item.collapsed != null ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              tabindex: "0",
              onClick: onCaretClick,
              onKeydown: withKeys(onCaretClick, ["enter"])
            }, [..._cache[0] || (_cache[0] = [
              createBaseVNode("span", { class: "vpi-chevron-right caret-icon" }, null, -1)
            ])], 32)) : createCommentVNode("", true)
          ], 16, _hoisted_1$2)) : createCommentVNode("", true),
          __props.item.items && __props.item.items.length && __props.depth < 5 ? (openBlock(), createBlock(unref(FadeInExpandTransition), { key: 1 }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_4$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.items, (i2) => {
                    return openBlock(), createBlock(_component_VPSidebarItem, {
                      key: i2.text,
                      item: i2,
                      depth: __props.depth + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ])
              ], 512), [
                [vShow, !unref(collapsed)]
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-78b02f59"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.text,
          class: normalizeClass(["group", { "no-transition": disableTransition.value }])
        }, [
          createVNode(VPSidebarItem, {
            item,
            depth: 0
          }, null, 8, ["item"])
        ], 2);
      }), 128);
    };
  }
});
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6279c2df"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { theme } = useData();
    const { sidebarGroups, hasSidebar, sidebarKey } = useSidebar();
    const routePath = useRoutePath();
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [() => __props.open, navEl],
      () => {
        if (__props.open) {
          isLocked.value = true;
          navEl.value?.focus();
        } else {
          isLocked.value = false;
        }
      },
      { immediate: true, flush: "post" }
    );
    onMounted(() => {
      watch(sidebarKey, async () => {
        await nextTick();
        const activeItem = document.querySelector(
          `.vp-sidebar .vp-link[href*="${routePath.value}"]`
        );
        if (!navEl.value)
          return;
        if (!activeItem) {
          setTimeout(() => navEl.value?.scrollTo(0, 0), 200);
          return;
        }
        const { top: navTop, height: navHeight } = navEl.value.getBoundingClientRect();
        const { top: activeTop, height: activeHeight } = activeItem.getBoundingClientRect();
        if (activeTop < navTop || activeTop + activeHeight > navTop + navHeight)
          activeItem.scrollIntoView({ block: "center" });
      }, { immediate: true, flush: "post" });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade-slide-x",
        mode: "out-in"
      }, {
        default: withCtx(() => [
          unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
            key: 0,
            ref_key: "navEl",
            ref: navEl,
            class: normalizeClass(["vp-sidebar", { open: __props.open, "hide-scrollbar": !(unref(theme).sidebarScrollbar ?? true) }]),
            "vp-sidebar": "",
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "curtain" }, null, -1)),
            createVNode(_sfc_main$w, null, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("nav", {
                  id: "SidebarNav",
                  key: unref(sidebarKey),
                  class: "nav",
                  "aria-labelledby": "sidebar-aria-label",
                  tabindex: "-1"
                }, [
                  _cache[1] || (_cache[1] = createBaseVNode("span", {
                    id: "sidebar-aria-label",
                    class: "visually-hidden"
                  }, " Sidebar Navigation ", -1)),
                  renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true),
                  createVNode(VPSidebarGroup, { items: unref(sidebarGroups) }, null, 8, ["items"]),
                  renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
                ]))
              ]),
              _: 3
            })
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5c0e1c3a"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VPSignDown",
  setup(__props) {
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = /* @__PURE__ */ useWindowSize();
    onMounted(() => {
      body.value = document.body;
    });
    const { page } = useData();
    const mustHidden = computed(() => {
      if (page.value.frontmatter.signDown !== true || page.value.frontmatter.pageLayout !== "home" || !page.value.frontmatter.config) {
        return true;
      }
      const homeConfig = page.value.frontmatter.config;
      if (homeConfig.length <= 1 || homeConfig[0].full !== true) {
        return true;
      }
      return false;
    });
    const show = computed(() => {
      if (bodyHeight.value < windowHeight.value)
        return false;
      else
        return true;
    });
    const is960 = useMediaQuery("(min-width: 960px)");
    function onClick() {
      document.documentElement.scrollTo({
        top: document.documentElement.clientHeight - (is960.value ? 64 : 0),
        behavior: "smooth"
      });
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "aria-label": "sign down",
        class: "vp-sign-down",
        "aria-hidden": "true",
        onClick
      }, [..._cache[0] || (_cache[0] = [
        createBaseVNode("g", {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2.5"
        }, [
          createBaseVNode("path", { d: "m19 11l-7 6l-7-6" }),
          createBaseVNode("path", {
            d: "m19 5l-7 6l-7-6",
            opacity: "0.6"
          })
        ], -1)
      ])], 512)), [
        [vShow, !mustHidden.value && show.value]
      ]);
    };
  }
});
const VPSignDown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-900978de"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(
      () => route.path,
      () => backToTop.value.focus()
    );
    function focusOnTargetAnchor({ target }) {
      const el = document.getElementById(
        decodeURIComponent(target.hash).slice(1)
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        createBaseVNode("a", {
          href: "#VPContent",
          class: "vp-skip-link visually-hidden",
          onClick: focusOnTargetAnchor
        }, " Skip to content ")
      ], 64);
    };
  }
});
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-17e3d305"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const { frontmatter } = useData();
    const { isGlobalDecrypted, isPageDecrypted } = useEncrypt();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock(Fragment, null, [
        unref(frontmatter).pageLayout !== false && unref(frontmatter).pageLayout !== "custom" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["theme-plume vp-layout", unref(frontmatter).pageClass]),
          "vp-container": ""
        }, [
          !unref(isGlobalDecrypted) ? (openBlock(), createBlock(VPEncryptGlobal, { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            renderSlot(_ctx.$slots, "layout-top", {}, void 0, true),
            createVNode(VPSkipLink),
            createVNode(VPBackdrop, {
              show: unref(isSidebarOpen),
              onClick: unref(closeSidebar)
            }, null, 8, ["show", "onClick"]),
            createVNode(VPNav, null, {
              "nav-bar-title-before": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ]),
              "nav-bar-title-after": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ]),
              "nav-bar-content-before": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ]),
              "nav-bar-content-after": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ]),
              "nav-bar-menu-before": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-menu-before", {}, void 0, true)
              ]),
              "nav-bar-menu-after": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-bar-menu-after", {}, void 0, true)
              ]),
              "nav-screen-content-before": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ]),
              "nav-screen-content-after": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ]),
              "nav-screen-menu-before": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-screen-menu-before", {}, void 0, true)
              ]),
              "nav-screen-menu-after": withCtx(() => [
                renderSlot(_ctx.$slots, "nav-screen-menu-after", {}, void 0, true)
              ]),
              _: 3
            }),
            createVNode(VPLocalNav, {
              open: unref(isSidebarOpen),
              "show-outline": unref(isPageDecrypted),
              onOpenMenu: unref(openSidebar)
            }, null, 8, ["open", "show-outline", "onOpenMenu"]),
            createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
              "sidebar-nav-before": withCtx(() => [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ]),
              "sidebar-nav-after": withCtx(() => [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ]),
              _: 3
            }, 8, ["open"]),
            renderSlot(_ctx.$slots, "custom-content", {}, () => [
              createVNode(VPContent, null, {
                "page-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
                ]),
                "page-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
                ]),
                "doc-title-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-title-before", {}, void 0, true)
                ]),
                "doc-title-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-title-after", {}, void 0, true)
                ]),
                "doc-meta-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-meta-before", {}, void 0, true)
                ]),
                "doc-meta-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-meta-after", {}, void 0, true)
                ]),
                "doc-meta-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-meta-top", {}, void 0, true)
                ]),
                "doc-meta-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-meta-bottom", {}, void 0, true)
                ]),
                "doc-content-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-content-before", {}, void 0, true)
                ]),
                "doc-footer-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                ]),
                "doc-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
                ]),
                "doc-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
                ]),
                "doc-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
                ]),
                "doc-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
                ]),
                "aside-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                ]),
                "aside-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                ]),
                "aside-outline-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                ]),
                "aside-outline-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                ]),
                "posts-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-top", {}, void 0, true)
                ]),
                "posts-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-bottom", {}, void 0, true)
                ]),
                "posts-archives-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-archives-before", {}, void 0, true)
                ]),
                "posts-archives-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-archives-after", {}, void 0, true)
                ]),
                "posts-tags-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-before", {}, void 0, true)
                ]),
                "posts-tags-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-after", {}, void 0, true)
                ]),
                "posts-tags-title-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-title-after", {}, void 0, true)
                ]),
                "posts-tags-content-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-tags-content-before", {}, void 0, true)
                ]),
                "posts-categories-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-categories-before", {}, void 0, true)
                ]),
                "posts-categories-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-categories-after", {}, void 0, true)
                ]),
                "posts-categories-content-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-categories-content-before", {}, void 0, true)
                ]),
                "posts-post-list-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-post-list-before", {}, void 0, true)
                ]),
                "posts-post-list-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-post-list-after", {}, void 0, true)
                ]),
                "posts-post-list-pagination-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-post-list-pagination-after", {}, void 0, true)
                ]),
                "posts-aside-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-aside-top", {}, void 0, true)
                ]),
                "posts-aside-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-aside-bottom", {}, void 0, true)
                ]),
                "posts-extract-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-extract-before", {}, void 0, true)
                ]),
                "posts-extract-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "posts-extract-after", {}, void 0, true)
                ]),
                _: 3
              })
            ], true),
            createVNode(VPBackToTop),
            createVNode(VPSignDown),
            createVNode(VPFooter, null, {
              "footer-content": withCtx(() => [
                renderSlot(_ctx.$slots, "footer-content", {}, void 0, true)
              ]),
              _: 3
            }),
            renderSlot(_ctx.$slots, "layout-bottom", {}, void 0, true)
          ], 64))
        ], 2)) : (openBlock(), createBlock(_component_Content, {
          key: 1,
          "vp-container": "",
          "vp-content": ""
        })),
        createVNode(_sfc_main$U, null, {
          "bulletin-content": withCtx(() => [
            renderSlot(_ctx.$slots, "bulletin-content", {}, void 0, true)
          ]),
          _: 3
        })
      ], 64);
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ea6c3a80"]]);
const _hoisted_1$1 = {
  "vp-not-found": "",
  class: "theme-plume vp-layout"
};
const _hoisted_2$1 = {
  id: "VPContent",
  class: "vp-content"
};
const _hoisted_3$1 = { class: "vp-not-found" };
const _hoisted_4$1 = { class: "code" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "quote" };
const _hoisted_7 = { class: "action" };
const _hoisted_8 = ["href", "aria-label"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const root = useRouteLocale();
    const { theme } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "layout-top", {}, void 0, true),
          createVNode(VPSkipLink),
          createVNode(VPNav, null, {
            "nav-bar-title-before": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ]),
            "nav-bar-title-after": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ]),
            "nav-bar-content-before": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ]),
            "nav-bar-content-after": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ]),
            "nav-bar-menu-before": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-bar-menu-before", {}, void 0, true)
            ]),
            "nav-bar-menu-after": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-bar-menu-after", {}, void 0, true)
            ]),
            "nav-screen-content-before": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ]),
            "nav-screen-content-after": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ]),
            "nav-screen-menu-before": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-screen-menu-before", {}, void 0, true)
            ]),
            "nav-screen-menu-after": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-screen-menu-after", {}, void 0, true)
            ]),
            _: 3
          }),
          createBaseVNode("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "not-found", {}, () => [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("p", _hoisted_4$1, toDisplayString(unref(theme).notFound?.code ?? "404"), 1),
                createBaseVNode("h1", _hoisted_5, toDisplayString(unref(theme).notFound?.title ?? "PAGE NOT FOUND"), 1),
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "divider" }, null, -1)),
                createBaseVNode("blockquote", _hoisted_6, toDisplayString(unref(theme).notFound?.quote ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("a", {
                    class: "link",
                    href: unref(withBase)(unref(root)),
                    "aria-label": unref(theme).notFound?.linkLabel ?? "go to home"
                  }, toDisplayString(unref(theme).notFound?.linkText ?? "Take me home"), 9, _hoisted_8)
                ])
              ])
            ], true)
          ]),
          createVNode(VPFooter, null, {
            "footer-content": withCtx(() => [
              renderSlot(_ctx.$slots, "footer-content", {}, void 0, true)
            ]),
            _: 3
          }),
          renderSlot(_ctx.$slots, "layout-bottom", {}, void 0, true)
        ]),
        createVNode(_sfc_main$U, null, {
          "bulletin-content": withCtx(() => [
            renderSlot(_ctx.$slots, "bulletin-content", {}, void 0, true)
          ]),
          _: 3
        })
      ], 64);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-adb3a381"]]);
function globalComponents(app) {
  app.component("Badge", VPBadge);
  app.component("VPBadge", VPBadge);
  app.component("VPCard", VPCard);
  app.component("Card", VPCard);
  app.component("VPCardGrid", VPCardGrid);
  app.component("CardGrid", VPCardGrid);
  app.component("VPLinkCard", VPLinkCard);
  app.component("LinkCard", VPLinkCard);
  app.component("VPImageCard", VPImageCard);
  app.component("ImageCard", VPImageCard);
  app.component("VPCardMasonry", _sfc_main$1u);
  app.component("CardMasonry", _sfc_main$1u);
  app.component("VPLink", _sfc_main$1s);
  app.component("Icon", _sfc_main$1x);
  app.component("VPIcon", _sfc_main$1x);
  app.component("VPButton", VPButton);
  app.component("HomeBox", _sfc_main$1q);
  app.component("VPHomeBox", _sfc_main$1q);
  app.component("DocComment", (props) => {
    if (hasGlobalComponent("CommentService")) return h$1(resolveComponent("CommentService"), props);
    return null;
  });
  app.component("DocGitContributors", () => {
    if (hasGlobalComponent("GitContributors")) return h$1(resolveComponent("GitContributors"));
    return null;
  });
  app.component("DocGitChangelog", () => {
    if (hasGlobalComponent("GitChangelog")) return h$1(resolveComponent("GitChangelog"));
    return null;
  });
}
var config_default = defineClientConfig({
  enhance({ app, router }) {
    setupThemeData(app);
    setupDarkMode(app);
    enhanceScrollBehavior(router);
    globalComponents(app);
  },
  setup() {
    setupCollection();
    setupSidebar();
    setupHeaders();
    setupEncrypt();
    setupWatermark();
  },
  layouts: {
    Layout,
    NotFound
  }
});
const clientConfig10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config_default
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  name: "WordCount",
  props: {
    type: {
      type: String,
      required: true,
      default: "total"
    }
  },
  data() {
    return {
      loading: true,
      error: false,
      wordCountData: null
    };
  },
  computed: {
    displayText() {
      if (!this.wordCountData) return "";
      try {
        if (this.type.includes(",")) {
          const keys = this.type.split(",").map((key) => key.trim());
          let total = 0;
          for (const key of keys) {
            total += this.getValueByPath(key);
          }
          return `${total.toLocaleString()}`;
        }
        if (this.type.includes("/")) {
          const value2 = this.getValueByPath(this.type);
          return `${value2.toLocaleString()}`;
        }
        if (this.type === "total") {
          return `${this.wordCountData.total.toLocaleString()}`;
        }
        const value = this.getValueByPath(this.type);
        return `${value.toLocaleString()}`;
      } catch (error) {
        console.error("计算字数时出错:", error);
        return "统计计算错误";
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch("/wordcount.json");
      if (!response.ok) throw new Error("Network response was not ok");
      this.wordCountData = await response.json();
      this.loading = false;
    } catch (error) {
      console.error("获取字数统计数据失败:", error);
      this.error = true;
      this.loading = false;
    }
  },
  methods: {
    // 根据路径获取值，支持嵌套结构
    getValueByPath(path) {
      const keys = path.split("/").filter((key) => key !== "");
      let current = this.wordCountData;
      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          throw new Error(`路径 ${path} 不存在于统计数据中`);
        }
      }
      if (typeof current === "number") {
        return current;
      } else if (typeof current === "object") {
        return this.calculateNestedTotal(current);
      } else {
        throw new Error(`路径 ${path} 的值不是数字或对象`);
      }
    },
    // 计算嵌套对象中所有数字值的总和
    calculateNestedTotal(data) {
      let total = 0;
      for (const key in data) {
        if (typeof data[key] === "number") {
          total += data[key];
        } else if (typeof data[key] === "object") {
          total += this.calculateNestedTotal(data[key]);
        }
      }
      return total;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "word-count-loading"
};
const _hoisted_2 = {
  key: 1,
  class: "word-count-error"
};
const _hoisted_3 = {
  key: 2,
  class: "word-count-value"
};
const _hoisted_4 = { class: "word-count-text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["word-count-display", { loading: $data.loading, error: $data.error }])
  }, [
    $data.loading ? (openBlock(), createElementBlock("span", _hoisted_1, "📊 统计加载中...")) : $data.error ? (openBlock(), createElementBlock("span", _hoisted_2, "❌ 统计加载失败")) : (openBlock(), createElementBlock("span", _hoisted_3, [
      _cache[0] || (_cache[0] = createBaseVNode("span", { class: "word-count-icon" }, "📝 ", -1)),
      createBaseVNode("span", _hoisted_4, toDisplayString($options.displayText), 1)
    ]))
  ], 2);
}
const WordCount = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a9e5647"]]);
const client = defineClientConfig({
  enhance({ app }) {
    app.component("WordCount", WordCount);
  }
});
const clientConfig11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: client
}, Symbol.toStringTag, { value: "Module" }));
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10,
  clientConfig11
].map((m2) => m2.default).filter(Boolean);
const siteData$1 = JSON.parse(`{"base":"/","lang":"zh-CN","title":"soda-official","description":"This is soda's personal blog & notebook.","head":[["link",{"rel":"icon","type":"image/png","href":"/images/soda.jpg"}]],"locales":{}}`);
var siteData = shallowRef(siteData$1);
var historyCreator = createWebHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      const route = resolveRoute(to.fullPath);
      if (route.path !== to.fullPath) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    } else if (to.path === from.path) {
      to.meta = from.meta;
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = customRef((track2, trigger2) => ({
    get() {
      track2();
      return router.currentRoute.value.meta._pageChunk;
    },
    set(value) {
      router.currentRoute.value.meta._pageChunk = value;
      trigger2();
    }
  }));
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData,
    /* Aliases */
    frontmatter: pageFrontmatter,
    head: pageHead,
    headTitle: pageHeadTitle,
    lang: pageLang,
    page: pageData,
    site: siteData,
    siteLocale: siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $pageFrontmatter: { get: () => pageFrontmatter.value },
    $pageHead: { get: () => pageHead.value },
    $pageHeadTitle: { get: () => pageHeadTitle.value },
    $pageLang: { get: () => pageLang.value },
    $pageData: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $withBase: { get: () => withBase },
    /* Aliases */
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value }
  });
  return clientData;
};
var queryHeadElement = ([
  tagName,
  attrs,
  content = ""
]) => {
  const attrsSelector = Object.entries(attrs).map(([key, value]) => {
    if (isString(value)) {
      return `[${key}=${JSON.stringify(value)}]`;
    }
    if (value) {
      return `[${key}]`;
    }
    return "";
  }).join("");
  const selector = `head > ${tagName}${attrsSelector}`;
  const headElements = Array.from(
    document.querySelectorAll(selector)
  );
  const matchedHeadElement = headElements.find(
    (item) => item.innerText === content
  );
  return matchedHeadElement ?? null;
};
var createHeadElement = ([
  tagName,
  attrs,
  content
]) => {
  if (!isString(tagName)) {
    return null;
  }
  const headElement = document.createElement(tagName);
  if (isPlainObject(attrs)) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (isString(value)) {
        headElement.setAttribute(key, value);
      } else if (value) {
        headElement.setAttribute(key, "");
      }
    });
  }
  if (isString(content)) {
    headElement.appendChild(document.createTextNode(content));
  }
  return headElement;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  let managedHeadElements = [];
  const takeOverHeadElements = () => {
    head.value.forEach((item) => {
      const headElement = queryHeadElement(item);
      if (headElement) {
        managedHeadElements.push(headElement);
      }
    });
  };
  const generateHeadElements = () => {
    const result = [];
    head.value.forEach((item) => {
      const headElement = createHeadElement(item);
      if (headElement) {
        result.push(headElement);
      }
    });
    return result;
  };
  const updateHead = () => {
    document.documentElement.lang = lang.value;
    const newHeadElements = generateHeadElements();
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newHeadElements.findIndex(
        (newEl) => oldEl.isEqualNode(newEl)
      );
      if (matchedIndex === -1) {
        oldEl.remove();
        delete managedHeadElements[oldIndex];
      } else {
        newHeadElements.splice(matchedIndex, 1);
      }
    });
    newHeadElements.forEach((el) => document.head.appendChild(el));
    managedHeadElements = [
      // filter out empty deleted items
      ...managedHeadElements.filter((item) => !!item),
      ...newHeadElements
    ];
  };
  provide(updateHeadSymbol, updateHead);
  onMounted(() => {
    {
      takeOverHeadElements();
    }
    watch(head, updateHead, { immediate: false });
  });
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  const app = appCreator({
    name: "Vuepress",
    setup() {
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        clientConfig.setup?.();
      }
      const clientRootComponents = clientConfigs.flatMap(
        ({ rootComponents = [] }) => rootComponents.map((component) => h$1(component))
      );
      const pageLayout = usePageLayout();
      return () => [h$1(pageLayout.value), clientRootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await clientConfig.enhance?.({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
{
  void createVueApp().then(({ app, router }) => {
    void router.isReady().then(() => {
      app.mount("#app");
    });
  });
}
export {
  onMounted as A,
  onKeyStroke as B,
  useEventListener as C,
  useScrollLock as D,
  onBeforeUnmount as E,
  createBlock as F,
  withModifiers as G,
  withDirectives as H,
  vModelText as I,
  isRef as J,
  createCommentVNode as K,
  renderList as L,
  normalizeClass as M,
  withBase as N,
  Fragment as O,
  toDisplayString as P,
  markRaw as Q,
  useSearchIndex as R,
  Teleport as T,
  _export_sfc as _,
  createBaseVNode as a,
  createTextVNode as b,
  createElementBlock as c,
  createVueApp,
  createVNode as d,
  createStaticVNode as e,
  useRouter as f,
  ref as g,
  unref as h,
  getCurrentScope as i,
  onScopeDispose as j,
  watch as k,
  computed as l,
  defineComponent as m,
  useRouteLocale as n,
  openBlock as o,
  useLocale as p,
  toRef$1 as q,
  resolveComponent as r,
  shallowRef as s,
  toValue as t,
  useRoutes as u,
  computedAsync as v,
  withCtx as w,
  useSessionStorage as x,
  debouncedWatch as y,
  nextTick as z
};
