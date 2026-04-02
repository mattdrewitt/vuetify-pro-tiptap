import { VCard as Qn, VCardText as jr, VToolbar as er, VDivider as Wr, VSpacer as Ur, VThemeProvider as bu, VInput as Mm, VCardTitle as Am, VBtn as Kr, VIcon as Mn, VTooltip as Tm, VMenu as No, VList as Bl, VSheet as Em, VTextField as qr, VCheckbox as Fl, VCardSubtitle as Om, VListItem as wu, VListItemTitle as vu, VForm as ku, VFileInput as Lm, VDialog as $l, VTabs as Hm, VTab as Vm, VWindow as Nm, VWindowItem as Rm, VCardActions as jl } from "vuetify/components";
import { defineComponent as F, shallowRef as Wl, onMounted as Jr, onBeforeUnmount as Ro, h as An, ref as ee, getCurrentInstance as Gr, watchEffect as Tn, nextTick as Ul, unref as M, markRaw as xu, customRef as Im, provide as Ni, reactive as Or, render as Xa, computed as U, watch as Ot, getCurrentScope as Kl, hasInjectionContext as Dm, inject as Su, onScopeDispose as _m, toValue as Ci, createBlock as _, openBlock as E, withCtx as L, createVNode as H, createElementBlock as le, Fragment as be, renderList as Ne, resolveDynamicComponent as Lr, mergeProps as Dn, createSlots as ql, createCommentVNode as Xe, useAttrs as Pm, toRef as zm, Teleport as Bm, normalizeClass as Jt, renderSlot as Lt, createTextVNode as Ht, toDisplayString as Te, normalizeProps as Ya, guardReactiveProps as Qa, normalizeStyle as _n, createElementVNode as Vt, withDirectives as Fm, vShow as $m } from "vue";
import { useTheme as Jl } from "vuetify";
function Ce(t) {
  this.content = t;
}
Ce.prototype = {
  constructor: Ce,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, i = r.find(t), o = r.content.slice();
    return i == -1 ? o.push(n || t, e) : (o[i + 1] = e, n && (o[i] = n)), new Ce(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Ce(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Ce([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Ce(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(t);
    return i.splice(o == -1 ? i.length : o, 0, e, n), new Ce(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = Ce.from(t), t.size ? new Ce(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Ce.from(t), t.size ? new Ce(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Ce.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
Ce.from = function(t) {
  if (t instanceof Ce) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new Ce(e);
};
function Cu(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let i = t.child(r), o = e.child(r);
    if (i == o) {
      n += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return n;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        n++;
      return n;
    }
    if (i.content.size || o.content.size) {
      let s = Cu(i.content, o.content, n + 1);
      if (s != null)
        return s;
    }
    n += i.nodeSize;
  }
}
function Mu(t, e, n, r) {
  for (let i = t.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: n, b: r };
    let s = t.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      n -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: n, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, d = Math.min(s.text.length, l.text.length);
      for (; c < d && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, n--, r--;
      return { a: n, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = Mu(s.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
class C {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, i = 0, o) {
    for (let s = 0, l = 0; l < n; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, n - d), r, i + d);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, n, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, n - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new C(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], i = 0;
    if (n > e)
      for (let o = 0, s = 0; s < n; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, n - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, n - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new C(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? C.empty : e == 0 && n == this.content.length ? this : new C(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let i = this.content.slice(), o = this.size + n.nodeSize - r.nodeSize;
    return i[e] = n, new C(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new C([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new C(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let i = this.content[n];
      e(i, r, n), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return Cu(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Mu(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return ri(0, e);
    if (e == this.size)
      return ri(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let i = this.child(n), o = r + i.nodeSize;
      if (o >= e)
        return o == e ? ri(n + 1, o) : ri(n, r);
      r = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return C.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new C(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return C.empty;
    let n, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (n || (n = e.slice(0, i)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new C(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return C.empty;
    if (e instanceof C)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new C([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
C.empty = new C([], 0);
const ds = { index: 0, offset: 0 };
function ri(t, e) {
  return ds.index = t, ds.offset = e, ds;
}
function Ri(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!Ri(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !Ri(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let re = class Us {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (n || (n = e.slice(0, i)), n.push(this), r = !0), n && n.push(o);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Ri(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let i = r.create(n.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Us.none;
    if (e instanceof Us)
      return [e];
    let n = e.slice();
    return n.sort((r, i) => r.type.rank - i.type.rank), n;
  }
};
re.none = [];
class Ii extends Error {
}
class O {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = Tu(this.content, e + this.openStart, n);
    return r && new O(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new O(Au(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return O.empty;
    let r = n.openStart || 0, i = n.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new O(C.fromJSON(e, n.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new O(e, r, i);
  }
}
O.empty = new O(C.empty, 0, 0);
function Au(t, e, n) {
  let { index: r, offset: i } = t.findIndex(e), o = t.maybeChild(r), { index: s, offset: l } = t.findIndex(n);
  if (i == e || o.isText) {
    if (l != n && !t.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(Au(o.content, e - i - 1, n - i - 1)));
}
function Tu(t, e, n, r) {
  let { index: i, offset: o } = t.findIndex(e), s = t.maybeChild(i);
  if (o == e || s.isText)
    return r && !r.canReplace(i, i, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = Tu(s.content, e - o - 1, n, s);
  return l && t.replaceChild(i, s.copy(l));
}
function jm(t, e, n) {
  if (n.openStart > t.depth)
    throw new Ii("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new Ii("Inconsistent open depths");
  return Eu(t, e, n, 0);
}
function Eu(t, e, n, r) {
  let i = t.index(r), o = t.node(r);
  if (i == e.index(r) && r < t.depth - n.openStart) {
    let s = Eu(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let s = t.parent, l = s.content;
      return mn(s, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = Wm(n, t);
      return mn(o, Lu(t, s, l, e, r));
    }
  else return mn(o, Di(t, e, r));
}
function Ou(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new Ii("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Ks(t, e, n) {
  let r = t.node(n);
  return Ou(r, e.node(n)), r;
}
function hn(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function hr(t, e, n, r) {
  let i = (e || t).node(n), o = 0, s = e ? e.index(n) : i.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (hn(t.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    hn(i.child(l), r);
  e && e.depth == n && e.textOffset && hn(e.nodeBefore, r);
}
function mn(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Lu(t, e, n, r, i) {
  let o = t.depth > i && Ks(t, e, i + 1), s = r.depth > i && Ks(n, r, i + 1), l = [];
  return hr(null, t, i, l), o && s && e.index(i) == n.index(i) ? (Ou(o, s), hn(mn(o, Lu(t, e, n, r, i + 1)), l)) : (o && hn(mn(o, Di(t, e, i + 1)), l), hr(e, n, i, l), s && hn(mn(s, Di(n, r, i + 1)), l)), hr(r, null, i, l), new C(l);
}
function Di(t, e, n) {
  let r = [];
  if (hr(null, t, n, r), t.depth > n) {
    let i = Ks(t, e, n + 1);
    hn(mn(i, Di(t, e, n + 1)), r);
  }
  return hr(e, null, n, r), new C(r);
}
function Wm(t, e) {
  let n = e.depth - t.openStart, i = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    i = e.node(o).copy(C.from(i));
  return {
    start: i.resolveNoCache(t.openStart + n),
    end: i.resolveNoCache(i.content.size - t.openEnd - n)
  };
}
class Hr {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(n);
    return r ? e.child(n).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], i = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return re.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), i = e.maybeChild(n);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new _i(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], i = 0, o = n;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new Hr(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = ec.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == n)
          return s;
      }
    else
      ec.set(e, r = new Um());
    let i = r.elts[r.i] = Hr.resolve(e, n);
    return r.i = (r.i + 1) % Km, i;
  }
}
class Um {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Km = 12, ec = /* @__PURE__ */ new WeakMap();
class _i {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const qm = /* @__PURE__ */ Object.create(null);
let At = class qs {
  /**
  @internal
  */
  constructor(e, n, r, i = re.none) {
    this.type = e, this.attrs = n, this.marks = i, this.content = r || C.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, i = 0) {
    this.content.nodesBetween(e, n, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, n, r, i) {
    return this.content.textBetween(e, n, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && Ri(this.attrs, n || e.defaultAttrs || qm) && re.sameSet(this.marks, r || re.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new qs(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new qs(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return O.empty;
    let i = this.resolve(e), o = this.resolve(n), s = r ? 0 : i.sharedDepth(n), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new O(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return jm(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: i } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (i == e || n.isText)
        return n;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let i = this.content.child(n - 1);
    return { node: i, index: n - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Hr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Hr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let i = !1;
    return n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Hu(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = C.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, n);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, n);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = re.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!re.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let i = C.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
At.prototype.text = void 0;
class Pi extends At {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    if (super(e, n, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Hu(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Pi(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Pi(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Hu(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class wn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new Jm(e, n);
    if (r.next == null)
      return wn.empty;
    let i = Vu(r);
    r.next && r.err("Unexpected trailing text");
    let o = tg(eg(i));
    return ng(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let i = this;
    for (let o = n; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!n || a.validEnd))
        return C.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: d, next: u } = s.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let f = o(u, l.concat(d));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in n) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), n[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && n(r.next[i].next);
    }
    return n(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
wn.empty = new wn(!0);
class Jm {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Vu(t) {
  let e = [];
  do
    e.push(Gm(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Gm(t) {
  let e = [];
  do
    e.push(Zm(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Zm(t) {
  let e = Qm(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = Xm(t, e);
    else
      break;
  return e;
}
function tc(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function Xm(t, e) {
  let n = tc(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = tc(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function Ym(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let i = [];
  for (let o in n) {
    let s = n[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && t.err("No node type or group '" + e + "' found"), i;
}
function Qm(t) {
  if (t.eat("(")) {
    let e = Vu(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = Ym(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function eg(t) {
  let e = [[]];
  return i(o(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = n());
      }
    else if (s.type == "star") {
      let a = n();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = n();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let d = n();
          i(o(s.expr, a), d), a = d;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let d = n();
            r(a, d), i(o(s.expr, a), d), a = d;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Nu(t, e) {
  return e - t;
}
function nc(t, e) {
  let n = [];
  return r(e), n.sort(Nu);
  function r(i) {
    let o = t[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    n.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && n.indexOf(a) == -1 && r(a);
    }
  }
}
function tg(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(nc(t, 0));
  function n(r) {
    let i = [];
    r.forEach((s) => {
      t[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let d = 0; d < i.length; d++)
          i[d][0] == l && (c = i[d][1]);
        nc(t, a).forEach((d) => {
          c || i.push([l, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let o = e[r.join(",")] = new wn(r.indexOf(t.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(Nu);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || n(l) });
    }
    return o;
  }
}
function ng(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let i = r[n], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Ru(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function Iu(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let i = e && e[r];
    if (i === void 0) {
      let o = t[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = i;
  }
  return n;
}
function Du(t, e, n, r) {
  for (let i in e)
    if (!(i in t))
      throw new RangeError(`Unsupported attribute ${i} for ${n} of type ${i}`);
  for (let i in t) {
    let o = t[i];
    o.validate && o.validate(e[i]);
  }
}
function _u(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new ig(t, r, e[r]);
  return n;
}
let rc = class Pu {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = _u(e, r.attrs), this.defaultAttrs = Ru(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == wn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Iu(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new At(this, this.computeAttrs(e), C.from(n), re.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = C.from(n), this.checkContent(n), new At(this, this.computeAttrs(e), n, re.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = C.from(n), n.size) {
      let s = this.contentMatch.fillBefore(n);
      if (!s)
        return null;
      n = s.append(n);
    }
    let i = this.contentMatch.matchFragment(n), o = i && i.fillBefore(C.empty, !0);
    return o ? new At(this, e, n.append(o), re.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Du(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : re.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new Pu(o, n, s));
    let i = n.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function rg(t, e, n) {
  let r = n.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class ig {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? rg(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Io {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    this.name = e, this.rank = n, this.schema = r, this.spec = i, this.attrs = _u(e, i.attrs), this.excluded = null;
    let o = Ru(this.attrs);
    this.instance = o ? new re(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new re(this, Iu(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new Io(o, i++, n, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Du(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class zu {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let i in e)
      n[i] = e[i];
    n.nodes = Ce.from(e.nodes), n.marks = Ce.from(e.marks || {}), this.nodes = rc.compile(this.spec.nodes, this), this.marks = Io.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = wn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? ic(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : ic(this, s.split(" "));
    }
    this.nodeFromJSON = (i) => At.fromJSON(this, i), this.markFromJSON = (i) => re.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof rc) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new Pi(r, r.defaultAttrs, e, re.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function ic(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = t.marks[i], s = o;
    if (o)
      n.push(o);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && n.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function og(t) {
  return t.tag != null;
}
function sg(t) {
  return t.style != null;
}
class Gt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((i) => {
      if (og(i))
        this.tags.push(i);
      else if (sg(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new sc(this, n, !1);
    return r.addAll(e, re.none, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new sc(this, n, !0);
    return r.addAll(e, re.none, n.from, n.to), O.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (cg(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
        if (s.getAttrs) {
          let a = s.getAttrs(n);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < n.length; s++) {
        let l = n[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      n.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = lc(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = lc(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Gt(e, Gt.schemaRules(e)));
  }
}
const Bu = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, lg = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Fu = { ol: !0, ul: !0 }, Vr = 1, Js = 2, mr = 4;
function oc(t, e, n) {
  return e != null ? (e ? Vr : 0) | (e === "full" ? Js : 0) : t && t.whitespace == "pre" ? Vr | Js : n & ~mr;
}
class ii {
  constructor(e, n, r, i, o, s) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = re.none, this.match = o || (s & mr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(C.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Vr)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let n = C.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(C.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Bu.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class sc {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = n.topNode, o, s = oc(null, n.preserveWhitespace, 0) | (r ? mr : 0);
    i ? o = new ii(i.type, i.attrs, re.none, !0, n.topMatch || i.type.contentMatch, s) : r ? o = new ii(null, null, re.none, !0, null, s) : o = new ii(e.schema.topNodeType, null, re.none, !0, null, s), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, n) {
    e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue, i = this.top, o = i.options & Js ? "full" : this.localPreserveWS || (i.options & Vr) > 0, { schema: s } = this.parser;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        if (o === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (s.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(s.linebreakReplacement.create())) {
          let l = r.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(s.linebreakReplacement.create(), n, !0), l[a] && this.insertNode(s.text(l[a]), n, !/\S/.test(l[a]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let l = i.content[i.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (r = r.slice(1));
      }
      r && this.insertNode(s.text(r), n, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), l;
    Fu.hasOwnProperty(s) && this.parser.normalizeLists && ag(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : lg.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, d = this.needsBlock;
      if (Bu.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), c = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let u = a && a.skip ? n : this.readStyles(e, n);
      u && this.addAll(e, u), c && this.sync(o), this.needsBlock = d;
    } else {
      let c = this.readStyles(e, n);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? n = n.filter((c) => !a.clearMark(c)) : n = n.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r, i) {
    let o, s;
    if (n.node)
      if (s = this.parser.schema.nodes[n.node], s.isLeaf)
        this.insertNode(s.create(n.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(s, n.attrs || null, r, n.preserveWhitespace);
        a && (o = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[n.mark];
      r = r.concat(a.create(n.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof n.contentElement == "string" ? a = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? a = n.contentElement(e) : n.contentElement && (a = n.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; s != l; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, n);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, r) {
    let i, o;
    for (let s = this.open, l = 0; s >= 0; s--) {
      let a = this.nodes[s], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, o = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(o);
    for (let s = 0; s < i.length; s++)
      n = this.enterInner(i[s], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (n = this.enterInner(o, null, n));
    }
    let i = this.findPlace(e, n, r);
    if (i) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = re.none;
      for (let l of i.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : ac(l.type, e.type)) && (s = l.addToSet(s));
      return o.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, i) {
    let o = this.findPlace(e.create(n), r, !1);
    return o && (o = this.enterInner(e, n, r, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, n, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = oc(e, o, s.options);
    s.options & mr && s.content.length == 0 && (l |= mr);
    let a = re.none;
    return r = r.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : ac(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new ii(e, n, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e)
        return this.open = n, !0;
      this.localPreserveWS && (this.nodes[n].options |= Vr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && n.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = n[l];
        if (c == "") {
          if (l == n.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!d || d.name != c && !d.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function ag(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Fu.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function cg(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function lc(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function ac(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(t))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: d } = l.edge(a);
        if (c == e || o.indexOf(d) < 0 && s(d))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class rn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = us(n).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], d = this.serializeMark(c, s.isInline, n);
          d && (o.push([c, i]), i.appendChild(d.dom), i = d.contentDOM || d.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: i } = Mi(us(n), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, n);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let i = this.marks[e.type.name];
    return i && Mi(us(r), i(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, i) {
    return Mi(e, n, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new rn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = cc(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return cc(e.marks);
  }
}
function cc(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function us(t) {
  return t.document || window.document;
}
const dc = /* @__PURE__ */ new WeakMap();
function dg(t) {
  let e = dc.get(t);
  return e === void 0 && dc.set(t, e = ug(t)), e;
}
function ug(t) {
  let e = null;
  function n(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            n(r[i]);
      else
        for (let i in r)
          n(r[i]);
  }
  return n(t), e;
}
function Mi(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = dg(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
  let l, a = n ? t.createElementNS(n, i) : t.createElement(i), c = e[1], d = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    d = 2;
    for (let u in c)
      if (c[u] != null) {
        let f = u.indexOf(" ");
        f > 0 ? a.setAttributeNS(u.slice(0, f), u.slice(f + 1), c[u]) : u == "style" && a.style ? a.style.cssText = c[u] : a.setAttribute(u, c[u]);
      }
  }
  for (let u = d; u < e.length; u++) {
    let f = e[u];
    if (f === 0) {
      if (u < e.length - 1 || u > d)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: p, contentDOM: h } = Mi(t, f, n, r);
      if (a.appendChild(p), h) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = h;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const $u = 65535, ju = Math.pow(2, 16);
function fg(t, e) {
  return t + e * ju;
}
function uc(t) {
  return t & $u;
}
function pg(t) {
  return (t - (t & $u)) / ju;
}
const Wu = 1, Uu = 2, Ai = 4, Ku = 8;
class Gs {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Ku) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Wu | Ai)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Uu | Ai)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ai) > 0;
  }
}
class Be {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && Be.empty)
      return Be.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = uc(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        n += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + n + pg(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = this.ranges[l + s], u = a + c;
      if (e <= u) {
        let f = c ? e == a ? -1 : e == u ? 1 : n : n, p = a + i + (f < 0 ? 0 : d);
        if (r)
          return p;
        let h = e == (n < 0 ? a : u) ? null : fg(l / 3, e - a), m = e == a ? Uu : e == u ? Wu : Ai;
        return (n < 0 ? e != a : e != u) && (m |= Ku), new Gs(p, m, h);
      }
      i += d - c;
    }
    return r ? e + i : new Gs(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, i = uc(n), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = a + c;
      if (e <= d && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + n], d = this.ranges[i + r];
      e(l, l + c, a, a + d), o += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Be(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Be.empty : new Be(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Be.empty = new Be([]);
class Nr {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, n, r = 0, i = e ? e.length : 0) {
    this.mirror = n, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || n);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new Nr(this._maps, this.mirror, e, n);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), n != null && this.setMirror(this._maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this._maps.length; n < e._maps.length; n++) {
      let i = e.getMirror(n);
      this.appendMap(e._maps[n], i != null && i < n ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this._maps.length + e._maps.length; n >= 0; n--) {
      let i = e.getMirror(n);
      this.appendMap(e._maps[n].invert(), i != null && i > n ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Nr();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this._maps[o], l = s.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Gs(e, i, null);
  }
}
const fs = /* @__PURE__ */ Object.create(null);
class He {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Be.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = fs[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in fs)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return fs[e] = n, n.prototype.jsonID = e, n;
  }
}
class me {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new me(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new me(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, i) {
    try {
      return me.ok(e.replace(n, r, i));
    } catch (o) {
      if (o instanceof Ii)
        return me.fail(o.message);
      throw o;
    }
  }
}
function Gl(t, e, n) {
  let r = [];
  for (let i = 0; i < t.childCount; i++) {
    let o = t.child(i);
    o.content.size && (o = o.copy(Gl(o.content, e, o))), o.isInline && (o = e(o, n, i)), r.push(o);
  }
  return C.fromArray(r);
}
class Ut extends He {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new O(Gl(n.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), n.openStart, n.openEnd);
    return me.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Qe(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Ut(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ut && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ut(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Ut(n.from, n.to, e.markFromJSON(n.mark));
  }
}
He.jsonID("addMark", Ut);
class Qe extends He {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new O(Gl(n.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), n.openStart, n.openEnd);
    return me.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Ut(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Qe(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Qe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Qe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Qe(n.from, n.to, e.markFromJSON(n.mark));
  }
}
He.jsonID("removeMark", Qe);
class Kt extends He {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return me.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return me.fromReplace(e, this.pos, this.pos + 1, new O(C.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let i = 0; i < n.marks.length; i++)
          if (!n.marks[i].isInSet(r))
            return new Kt(this.pos, n.marks[i]);
        return new Kt(this.pos, this.mark);
      }
    }
    return new vn(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Kt(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Kt(n.pos, e.markFromJSON(n.mark));
  }
}
He.jsonID("addNodeMark", Kt);
class vn extends He {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return me.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return me.fromReplace(e, this.pos, this.pos + 1, new O(C.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new Kt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new vn(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new vn(n.pos, e.markFromJSON(n.mark));
  }
}
He.jsonID("removeNodeMark", vn);
class we extends He {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, i = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Zs(e, this.from, this.to) ? me.fail("Structure replace would overwrite content") : me.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Be([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new we(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new we(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof we) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new we(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new we(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new we(n.from, n.to, O.fromJSON(e, n.slice), !!n.structure);
  }
}
He.jsonID("replace", we);
class xe extends He {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Zs(e, this.from, this.gapFrom) || Zs(e, this.gapTo, this.to)))
      return me.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return me.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? me.fromReplace(e, this.from, this.to, r) : me.fail("Content does not fit in gap");
  }
  getMap() {
    return new Be([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new xe(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || i < n.pos || o > r.pos ? null : new xe(n.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new xe(n.from, n.to, n.gapFrom, n.gapTo, O.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
He.jsonID("replaceAround", xe);
function Zs(t, e, n) {
  let r = t.resolve(e), i = n - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function hg(t, e, n, r) {
  let i = [], o = [], s, l;
  t.doc.nodesBetween(e, n, (a, c, d) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && d.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), p = Math.min(c + a.nodeSize, n), h = r.addToSet(u);
      for (let m = 0; m < u.length; m++)
        u[m].isInSet(h) || (s && s.to == f && s.mark.eq(u[m]) ? s.to = p : i.push(s = new Qe(f, p, u[m])));
      l && l.to == f ? l.to = p : o.push(l = new Ut(f, p, r));
    }
  }), i.forEach((a) => t.step(a)), o.forEach((a) => t.step(a));
}
function mg(t, e, n, r) {
  let i = [], o = 0;
  t.doc.nodesBetween(e, n, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof Io) {
      let c = s.marks, d;
      for (; d = r.isInSet(c); )
        (a || (a = [])).push(d), c = d.removeFromSet(c);
    } else r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, n);
      for (let d = 0; d < a.length; d++) {
        let u = a[d], f;
        for (let p = 0; p < i.length; p++) {
          let h = i[p];
          h.step == o - 1 && u.eq(i[p].style) && (f = h);
        }
        f ? (f.to = c, f.step = o) : i.push({ style: u, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => t.step(new Qe(s.from, s.to, s.style)));
}
function Zl(t, e, n, r = n.contentMatch, i = !0) {
  let o = t.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), d = l + c.nodeSize, u = r.matchType(c.type);
    if (!u)
      s.push(new we(l, d, O.empty));
    else {
      r = u;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new Qe(l, d, c.marks[f]));
      if (i && c.isText && n.whitespace != "pre") {
        let f, p = /\r?\n|\r/g, h;
        for (; f = p.exec(c.text); )
          h || (h = new O(C.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), s.push(new we(l + f.index, l + f.index + f[0].length, h));
      }
    }
    l = d;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(C.empty, !0);
    t.replace(l, l, new O(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    t.step(s[a]);
}
function gg(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function tr(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, i = 0, o = 0; ; --r) {
    let s = t.$from.node(r), l = t.$from.index(r) + i, a = t.$to.indexAfter(r) - o;
    if (r < t.depth && s.canReplace(l, a, n))
      return r;
    if (r == 0 || s.type.spec.isolating || !gg(s, l, a))
      break;
    l && (i = 1), a < s.childCount && (o = 1);
  }
  return null;
}
function yg(t, e, n) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, d = C.empty, u = 0;
  for (let h = o, m = !1; h > n; h--)
    m || r.index(h) > 0 ? (m = !0, d = C.from(r.node(h).copy(d)), u++) : a--;
  let f = C.empty, p = 0;
  for (let h = o, m = !1; h > n; h--)
    m || i.after(h + 1) < i.end(h) ? (m = !0, f = C.from(i.node(h).copy(f)), p++) : c++;
  t.step(new xe(a, c, s, l, new O(d.append(f), u, p), d.size - u, !0));
}
function Xl(t, e, n = null, r = t) {
  let i = bg(t, e), o = i && wg(r, e);
  return o ? i.map(fc).concat({ type: e, attrs: n }).concat(o.map(fc)) : null;
}
function fc(t) {
  return { type: t, attrs: null };
}
function bg(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return n.canReplaceWith(r, i, s) ? o : null;
}
function wg(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, o = n.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function vg(t, e, n) {
  let r = C.empty;
  for (let s = n.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = n[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = C.from(n[s].type.create(n[s].attrs, r));
  }
  let i = e.start, o = e.end;
  t.step(new xe(i, o, i, o, new O(r, 0, 0), n.length, !0));
}
function kg(t, e, n, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t.steps.length;
  t.doc.nodesBetween(e, n, (s, l) => {
    let a = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, a) && xg(t.doc, t.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let p = r.whitespace == "pre", h = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        p && !h ? c = !1 : !p && h && (c = !0);
      }
      c === !1 && Ju(t, s, l, o), Zl(t, t.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let d = t.mapping.slice(o), u = d.map(l, 1), f = d.map(l + s.nodeSize, 1);
      return t.step(new xe(u, f, u + 1, f - 1, new O(C.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && qu(t, s, l, o), !1;
    }
  });
}
function qu(t, e, n, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(i.text); ) {
        let a = t.mapping.slice(r).map(n + 1 + o + s.index);
        t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Ju(t, e, n, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = t.mapping.slice(r).map(n + 1 + o);
      t.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function xg(t, e, n) {
  let r = t.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function Sg(t, e, n, r, i) {
  let o = t.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let s = n.create(r, null, i || o.marks);
  if (o.isLeaf)
    return t.replaceWith(e, e + o.nodeSize, s);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new xe(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new O(C.from(s), 0, 0), 1, !0));
}
function Tt(t, e, n = 1, r) {
  let i = t.resolve(e), o = i.depth - n, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, d = n - 2; c > o; c--, d--) {
    let u = i.node(c), f = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let p = u.content.cutByIndex(f, u.childCount), h = r && r[d + 1];
    h && (p = p.replaceChild(0, h.type.create(h.attrs)));
    let m = r && r[d] || u;
    if (!u.canReplace(f + 1, u.childCount) || !m.type.validContent(p))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function Cg(t, e, n = 1, r) {
  let i = t.doc.resolve(e), o = C.empty, s = C.empty;
  for (let l = i.depth, a = i.depth - n, c = n - 1; l > a; l--, c--) {
    o = C.from(i.node(l).copy(o));
    let d = r && r[c];
    s = C.from(d ? d.type.create(d.attrs, s) : i.node(l).copy(s));
  }
  t.step(new we(e, e, new O(o.append(s), n, n), !0));
}
function on(t, e) {
  let n = t.resolve(e), r = n.index();
  return Gu(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Mg(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(s), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function Gu(t, e) {
  return !!(t && e && !t.isLeaf && Mg(t, e));
}
function Do(t, e, n = -1) {
  let r = t.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : n > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && Gu(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = n < 0 ? r.before(i) : r.after(i);
  }
}
function Ag(t, e, n) {
  let r = null, { linebreakReplacement: i } = t.doc.type.schema, o = t.doc.resolve(e - n), s = o.node().type;
  if (i && s.inlineContent) {
    let d = s.whitespace == "pre", u = !!s.contentMatch.matchType(i);
    d && !u ? r = !1 : !d && u && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let d = t.doc.resolve(e + n);
    Ju(t, d.node(), d.before(), l);
  }
  s.inlineContent && Zl(t, e + n - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new we(c, a.map(e + n, -1), O.empty, !0)), r === !0) {
    let d = t.doc.resolve(c);
    qu(t, d.node(), d.before(), t.steps.length);
  }
  return t;
}
function Tg(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function Zu(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let i = n.content;
  for (let o = 0; o < n.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), d = !1;
      if (o == 1)
        d = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        d = u && c.canReplaceWith(a, a, u[0]);
      }
      if (d)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function _o(t, e, n = e, r = O.empty) {
  if (e == n && !r.size)
    return null;
  let i = t.resolve(e), o = t.resolve(n);
  return Xu(i, o, r) ? new we(e, n, r) : new Eg(i, o, r).fit();
}
function Xu(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class Eg {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = C.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = C.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new O(o, s, l);
    return e > -1 ? new xe(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new we(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = ps(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], d, u = null;
          if (n == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(C.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: u };
          if (n == 2 && s && (d = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: d };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = ps(e, n);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new O(e, n + 1, Math.max(r, i.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = ps(e, n);
    if (i.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + i.size;
      this.unplaced = new O(ar(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new O(ar(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: i, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, d = [], { match: u, type: f } = this.frontier[n];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        d.push(i.child(m));
      u = u.matchFragment(i);
    }
    let p = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = g, d.push(Yu(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? p : -1)));
    }
    let h = c == l.childCount;
    h || (p = -1), this.placed = cr(this.placed, n, C.from(d)), this.frontier[n].match = u, h && p < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < p; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = h ? e == 0 ? O.empty : new O(ar(s.content, e - 1, 1), e - 1, p < 0 ? s.openEnd : e - 1) : new O(ar(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !hs(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: i } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), s = hs(e, n, i, r, o);
      if (s) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], d = hs(e, l, c, a, !0);
          if (!d || d.childCount)
            continue e;
        }
        return { depth: n, fit: s, move: o ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = cr(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = cr(this.placed, this.depth, C.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(C.empty, !0);
    n.childCount && (this.placed = cr(this.placed, this.frontier.length, n));
  }
}
function ar(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(ar(t.firstChild.content, e - 1, n)));
}
function cr(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(cr(t.lastChild.content, e - 1, n)));
}
function ps(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Yu(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Yu(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(C.empty, !0)))), t.copy(r);
}
function hs(t, e, n, r, i) {
  let o = t.node(e), s = i ? t.indexAfter(e) : t.index(e);
  if (s == o.childCount && !n.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !Og(n, o.content, s) ? l : null;
}
function Og(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Lg(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function Hg(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let i = t.doc.resolve(e), o = t.doc.resolve(n);
  if (Xu(i, o, r))
    return t.step(new we(e, n, r));
  let s = ef(i, o);
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let f = i.depth, p = i.pos - 1; f > 0; f--, p--) {
    let h = i.node(f).type.spec;
    if (h.defining || h.definingAsContext || h.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : i.before(f) == p && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], d = r.openStart;
  for (let f = r.content, p = 0; ; p++) {
    let h = f.firstChild;
    if (c.push(h), p == r.openStart)
      break;
    f = h.content;
  }
  for (let f = d - 1; f >= 0; f--) {
    let p = c[f], h = Lg(p.type);
    if (h && !p.sameMarkup(i.node(Math.abs(l) - 1)))
      d = f;
    else if (h || !p.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let p = (f + d + 1) % (r.openStart + 1), h = c[p];
    if (h)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + a) % s.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let b = i.node(g - 1), w = i.index(g - 1);
        if (b.canReplaceWith(w, w, h.type, h.marks))
          return t.replace(i.before(g), y ? o.after(g) : n, new O(Qu(r.content, 0, r.openStart, p), p, r.openEnd));
      }
  }
  let u = t.steps.length;
  for (let f = s.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > u)); f--) {
    let p = s[f];
    p < 0 || (e = i.before(p), n = o.after(p));
  }
}
function Qu(t, e, n, r, i) {
  if (e < n) {
    let o = t.firstChild;
    t = t.replaceChild(0, o.copy(Qu(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(t).append(t);
    t = s.append(o.matchFragment(s).fillBefore(C.empty, !0));
  }
  return t;
}
function Vg(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let i = Tg(t.doc, e, r.type);
    i != null && (e = n = i);
  }
  t.replaceRange(e, n, new O(C.from(r), 0, 0));
}
function Ng(t, e, n) {
  let r = t.doc.resolve(e), i = t.doc.resolve(n), o = ef(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return t.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return t.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && n > r.end(s) && i.end(s) - n != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return t.delete(r.before(s), n);
  t.delete(e, n);
}
function ef(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = t.start(i);
    if (o < t.pos - (t.depth - i) || e.end(i) > e.pos + (e.depth - i) || t.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == t.depth && i == e.depth && t.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && n.push(i);
  }
  return n;
}
class Pn extends He {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return me.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let i = n.type.create(r, null, n.marks);
    return me.fromReplace(e, this.pos, this.pos + 1, new O(C.from(i), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return Be.empty;
  }
  invert(e) {
    return new Pn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Pn(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Pn(n.pos, n.attr, n.value);
  }
}
He.jsonID("attr", Pn);
class Rr extends He {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      n[i] = e.attrs[i];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return me.ok(r);
  }
  getMap() {
    return Be.empty;
  }
  invert(e) {
    return new Rr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Rr(n.attr, n.value);
  }
}
He.jsonID("docAttr", Rr);
let $n = class extends Error {
};
$n = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
$n.prototype = Object.create(Error.prototype);
$n.prototype.constructor = $n;
$n.prototype.name = "TransformError";
class Yl {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Nr();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new $n(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = O.empty) {
    let i = _o(this.doc, e, n, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new O(C.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, O.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return Hg(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return Vg(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return Ng(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return yg(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return Ag(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return vg(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, i = null) {
    return kg(this, e, n, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, i) {
    return Sg(this, e, n, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new Pn(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new Rr(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new Kt(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof re)
      n.isInSet(r.marks) && this.step(new vn(e, n));
    else {
      let i = r.marks, o, s = [];
      for (; o = n.isInSet(i); )
        s.push(new vn(e, o)), i = o.removeFromSet(i);
      for (let l = s.length - 1; l >= 0; l--)
        this.step(s[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, n = 1, r) {
    return Cg(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return hg(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return mg(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Zl(this, e, n, r), this;
  }
}
const ms = /* @__PURE__ */ Object.create(null);
class $ {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new tf(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = O.empty) {
    let r = n.content.lastChild, i = null;
    for (let l = 0; l < n.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], d = e.mapping.slice(o);
      e.replaceRange(d.map(a.pos), d.map(c.pos), l ? O.empty : n), l == 0 && mc(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), d = a.map(l.pos);
      o ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, n), mc(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let i = e.parent.inlineContent ? new B(e) : Hn(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = n < 0 ? Hn(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : Hn(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new $e(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Hn(e, e, 0, 0, 1) || new $e(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Hn(e, e, e.content.size, e.childCount, -1) || new $e(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = ms[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in ms)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return ms[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return B.between(this.$anchor, this.$head).getBookmark();
  }
}
$.prototype.visible = !0;
class tf {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let pc = !1;
function hc(t) {
  !pc && !t.parent.inlineContent && (pc = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class B extends $ {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    hc(e), hc(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return $.near(r);
    let i = e.resolve(n.map(this.anchor));
    return new B(i.parent.inlineContent ? i : r, r);
  }
  replace(e, n = O.empty) {
    if (super.replace(e, n), n == O.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof B && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Po(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new B(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let i = e.resolve(n);
    return new this(i, r == n ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let i = e.pos - n.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = $.findFrom(n, r, !0) || $.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return $.near(n, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = n : (e = ($.findFrom(e, -r, !0) || $.findFrom(e, r, !0)).$anchor, e.pos < n.pos != i < 0 && (e = n))), new B(e, n);
  }
}
$.jsonID("text", B);
class Po {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Po(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return B.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class P extends $ {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: i } = n.mapResult(this.anchor), o = e.resolve(i);
    return r ? $.near(o) : new P(o);
  }
  content() {
    return new O(C.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof P && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ql(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new P(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new P(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
P.prototype.visible = !1;
$.jsonID("node", P);
class Ql {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Po(r, r) : new Ql(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && P.isSelectable(r) ? new P(n) : $.near(n);
  }
}
class $e extends $ {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = O.empty) {
    if (n == O.empty) {
      e.delete(0, e.doc.content.size);
      let r = $.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new $e(e);
  }
  map(e) {
    return new $e(e);
  }
  eq(e) {
    return e instanceof $e;
  }
  getBookmark() {
    return Rg;
  }
}
$.jsonID("all", $e);
const Rg = {
  map() {
    return this;
  },
  resolve(t) {
    return new $e(t);
  }
};
function Hn(t, e, n, r, i, o = !1) {
  if (e.inlineContent)
    return B.create(t, n);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && P.isSelectable(l))
        return P.create(t, n - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = Hn(t, l, n + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    n += l.nodeSize * i;
  }
  return null;
}
function mc(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let i = t.steps[r];
  if (!(i instanceof we || i instanceof xe))
    return;
  let o = t.mapping.maps[r], s;
  o.forEach((l, a, c, d) => {
    s == null && (s = d);
  }), t.setSelection($.near(t.doc.resolve(s), n));
}
const gc = 1, oi = 2, yc = 4;
class Ig extends Yl {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | gc) & ~oi, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & gc) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= oi, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return re.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & oi) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & ~oi, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, n = !0) {
    let r = this.selection;
    return n && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || re.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, n, r) {
    let i = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = n), !e)
        return this.deleteRange(n, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(n);
        o = r == n ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(n, r, i.text(e, o)), !this.selection.empty && this.selection.to == n + e.length && this.setSelection($.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, n) {
    return this.meta[typeof e == "string" ? e : e.key] = n, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= yc, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & yc) > 0;
  }
}
function bc(t, e) {
  return !e || !t ? t : t.bind(e);
}
class dr {
  constructor(e, n, r) {
    this.name = e, this.init = bc(n.init, r), this.apply = bc(n.apply, r);
  }
}
const Dg = [
  new dr("doc", {
    init(t) {
      return t.doc || t.schema.topNodeType.createAndFill();
    },
    apply(t) {
      return t.doc;
    }
  }),
  new dr("selection", {
    init(t, e) {
      return t.selection || $.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    }
  }),
  new dr("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, r) {
      return r.selection.$cursor ? t.storedMarks : null;
    }
  }),
  new dr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    }
  })
];
class gs {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = Dg.slice(), n && n.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new dr(r.key, r.spec.state, r));
    });
  }
}
class In {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, n = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != n) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let n = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, d = a < n.length && l.spec.appendTransaction.call(l, a ? n.slice(a) : n, c, r);
          if (d && r.filterTransaction(d, s)) {
            if (d.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < s ? { state: r, n: n.length } : { state: this, n: 0 });
            }
            n.push(d), r = r.applyInner(d), o = !0;
          }
          i && (i[s] = { state: r, n: n.length });
        }
      }
      if (!o)
        return { state: r, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new In(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      n[o.name] = o.apply(e, this[o.name], this, n);
    }
    return n;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Ig(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new gs(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new In(n);
    for (let i = 0; i < n.fields.length; i++)
      r[n.fields[i].name] = n.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let n = new gs(this.schema, e.plugins), r = n.fields, i = new In(n);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (n[r] = o.toJSON.call(i, this[i.key]));
      }
    return n;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, n, r) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new gs(e.schema, e.plugins), o = new In(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = At.fromJSON(e.schema, n.doc);
      else if (s.name == "selection")
        o.selection = $.fromJSON(o.doc, n.selection);
      else if (s.name == "storedMarks")
        n.storedMarks && (o.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(n, l)) {
              o[s.name] = c.fromJSON.call(a, e, n[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function nf(t, e, n) {
  for (let r in t) {
    let i = t[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = nf(i, e, {})), n[r] = i;
  }
  return n;
}
class ne {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && nf(e.props, this, this.props), this.key = e.key ? e.key.key : rf("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ys = /* @__PURE__ */ Object.create(null);
function rf(t) {
  return t in ys ? t + "$" + ++ys[t] : (ys[t] = 0, t + "$");
}
class ce {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = rf(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const zo = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function of(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const sf = (t, e, n) => {
  let r = of(t, n);
  if (!r)
    return !1;
  let i = ea(r);
  if (!i) {
    let s = r.blockRange(), l = s && tr(s);
    return l == null ? !1 : (e && e(t.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (mf(t, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (jn(o, "end") || P.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let l = _o(t.doc, r.before(s), r.after(s), O.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(jn(o, "end") ? $.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : P.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, _g = (t, e, n) => {
  let r = of(t, n);
  if (!r)
    return !1;
  let i = ea(r);
  return i ? lf(t, i, e) : !1;
}, Pg = (t, e, n) => {
  let r = cf(t, n);
  if (!r)
    return !1;
  let i = ta(r);
  return i ? lf(t, i, e) : !1;
};
function lf(t, e, n) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let d = i.lastChild;
    if (!d)
      return !1;
    i = d;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let d = l.firstChild;
    if (!d)
      return !1;
    l = d;
  }
  let c = _o(t.doc, o, a, O.empty);
  if (!c || c.from != o || c instanceof we && c.slice.size >= a - o)
    return !1;
  if (n) {
    let d = t.tr.step(c);
    d.setSelection(B.create(d.doc, o)), n(d.scrollIntoView());
  }
  return !0;
}
function jn(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const af = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = ea(r);
  }
  let s = o && o.nodeBefore;
  return !s || !P.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(P.create(t.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function ea(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function cf(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const df = (t, e, n) => {
  let r = cf(t, n);
  if (!r)
    return !1;
  let i = ta(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (mf(t, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (jn(o, "start") || P.isSelectable(o))) {
    let s = _o(t.doc, r.before(), r.after(), O.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = t.tr.step(s);
        l.setSelection(jn(o, "start") ? $.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : P.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, uf = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = ta(r);
  }
  let s = o && o.nodeAfter;
  return !s || !P.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(P.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function ta(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const zg = (t, e) => {
  let n = t.selection, r = n instanceof P, i;
  if (r) {
    if (n.node.isTextblock || !on(t.doc, n.from))
      return !1;
    i = n.from;
  } else if (i = Do(t.doc, n.from, -1), i == null)
    return !1;
  if (e) {
    let o = t.tr.join(i);
    r && o.setSelection(P.create(o.doc, i - t.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, Bg = (t, e) => {
  let n = t.selection, r;
  if (n instanceof P) {
    if (n.node.isTextblock || !on(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Do(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, Fg = (t, e) => {
  let { $from: n, $to: r } = t.selection, i = n.blockRange(r), o = i && tr(i);
  return o == null ? !1 : (e && e(t.tr.lift(i, o).scrollIntoView()), !0);
}, ff = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function na(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const $g = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let i = n.node(-1), o = n.indexAfter(-1), s = na(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection($.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, pf = (t, e) => {
  let n = t.selection, { $from: r, $to: i } = n;
  if (n instanceof $e || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = na(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = t.tr.insert(s, o.createAndFill());
    l.setSelection(B.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, hf = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Tt(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), i = r && tr(r);
  return i == null ? !1 : (e && e(t.tr.lift(r, i).scrollIntoView()), !0);
};
function jg(t) {
  return (e, n) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof P && e.selection.node.isBlock)
      return !r.parentOffset || !Tt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], s, l, a = !1, c = !1;
    for (let p = r.depth; ; p--)
      if (r.node(p).isBlock) {
        a = r.end(p) == r.pos + (r.depth - p), c = r.start(p) == r.pos - (r.depth - p), l = na(r.node(p - 1).contentMatchAt(r.indexAfter(p - 1))), o.unshift(a && l ? { type: l } : null), s = p;
        break;
      } else {
        if (p == 1)
          return !1;
        o.unshift(null);
      }
    let d = e.tr;
    (e.selection instanceof B || e.selection instanceof $e) && d.deleteSelection();
    let u = d.mapping.map(r.pos), f = Tt(d.doc, u, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = Tt(d.doc, u, o.length, o)), !f)
      return !1;
    if (d.split(u, o.length, o), !a && c && r.node(s).type != l) {
      let p = d.mapping.map(r.before(s)), h = d.doc.resolve(p);
      l && r.node(s - 1).canReplaceWith(h.index(), h.index() + 1, l) && d.setNodeMarkup(d.mapping.map(r.before(s)), l);
    }
    return n && n(d.scrollIntoView()), !0;
  };
}
const Wg = jg(), Ug = (t, e) => {
  let { $from: n, to: r } = t.selection, i, o = n.sharedDepth(r);
  return o == 0 ? !1 : (i = n.before(o), e && e(t.tr.setSelection(P.create(t.doc, i))), !0);
};
function Kg(t, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || on(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function mf(t, e, n, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
  if (!a && Kg(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (n) {
      let p = e.pos + o.nodeSize, h = C.empty;
      for (let y = s.length - 1; y >= 0; y--)
        h = C.from(s[y].create(null, h));
      h = C.from(i.copy(h));
      let m = t.tr.step(new xe(e.pos - 1, p, e.pos, p, new O(h, 1, 0), s.length, !0)), g = m.doc.resolve(p + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == i.type && on(m.doc, g.pos) && m.join(g.pos), n(m.scrollIntoView());
    }
    return !0;
  }
  let d = o.type.spec.isolating || r > 0 && a ? null : $.findFrom(e, 1), u = d && d.$from.blockRange(d.$to), f = u && tr(u);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(u, f).scrollIntoView()), !0;
  if (c && jn(o, "start", !0) && jn(i, "end")) {
    let p = i, h = [];
    for (; h.push(p), !p.isTextblock; )
      p = p.lastChild;
    let m = o, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (p.canReplace(p.childCount, p.childCount, m.content)) {
      if (n) {
        let y = C.empty;
        for (let w = h.length - 1; w >= 0; w--)
          y = C.from(h[w].copy(y));
        let b = t.tr.step(new xe(e.pos - h.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new O(y, h.length, 0), 0, !0));
        n(b.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function gf(t) {
  return function(e, n) {
    let r = e.selection, i = t < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (n && n(e.tr.setSelection(B.create(e.doc, t < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const qg = gf(-1), Jg = gf(1);
function Gg(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o), l = s && Xl(s, t, e);
    return l ? (r && r(n.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function wc(t, e = null) {
  return function(n, r) {
    let i = !1;
    for (let o = 0; o < n.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = n.selection.ranges[o];
      n.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(t, e)))
          if (a.type == t)
            i = !0;
          else {
            let d = n.doc.resolve(c), u = d.index();
            i = d.parent.canReplaceWith(u, u + 1, t);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = n.tr;
      for (let s = 0; s < n.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = n.selection.ranges[s];
        o.setBlockType(l, a, t, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
function ra(...t) {
  return function(e, n, r) {
    for (let i = 0; i < t.length; i++)
      if (t[i](e, n, r))
        return !0;
    return !1;
  };
}
ra(zo, sf, af);
ra(zo, df, uf);
ra(ff, pf, hf, Wg);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Zg(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let l = r ? n.tr : null;
    return Xg(l, s, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Xg(t, e, n, r = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = s.resolve(e.start - 2);
    o = new _i(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new _i(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = Xl(o, n, r, e);
  return l ? (t && Yg(t, e, l, i, n), !0) : !1;
}
function Yg(t, e, n, r, i) {
  let o = C.empty;
  for (let d = n.length - 1; d >= 0; d--)
    o = C.from(n[d].type.create(n[d].attrs, o));
  t.step(new xe(e.start - (r ? 2 : 0), e.end, e.start, e.end, new O(o, 0, 0), n.length, !0));
  let s = 0;
  for (let d = 0; d < n.length; d++)
    n[d].type == i && (s = d + 1);
  let l = n.length - s, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, f = !0; d < u; d++, f = !1)
    !f && Tt(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(d).nodeSize;
  return t;
}
function Qg(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? e1(e, n, t, o) : t1(e, n, o) : !0 : !1;
  };
}
function e1(t, e, n, r) {
  let i = t.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new xe(o - 1, s, o, s, new O(C.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new _i(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = tr(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.doc.resolve(i.mapping.map(o, -1) - 1);
  return on(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function t1(t, e, n) {
  let r = t.tr, i = n.parent;
  for (let p = n.end, h = n.endIndex - 1, m = n.startIndex; h > m; h--)
    p -= i.child(h).nodeSize, r.delete(p - 1, p + 1);
  let o = r.doc.resolve(n.start), s = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == i.childCount, c = o.node(-1), d = o.index(-1);
  if (!c.canReplace(d + (l ? 0 : 1), d + 1, s.content.append(a ? C.empty : C.from(i))))
    return !1;
  let u = o.pos, f = u + s.nodeSize;
  return r.step(new xe(u - (l ? 1 : 0), f + (a ? 1 : 0), u + 1, f - 1, new O((l ? C.empty : C.from(i.copy(C.empty))).append(a ? C.empty : C.from(i.copy(C.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function n1(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != t)
      return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type, d = C.from(c ? t.create() : null), u = new O(C.from(t.create(null, C.from(l.type.create(null, d)))), c ? 3 : 1, 0), f = o.start, p = o.end;
      n(e.tr.step(new xe(f - (c ? 3 : 1), p, f, p, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
const Me = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Wn = function(t) {
  let e = t.assignedSlot || t.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Xs = null;
const St = function(t, e, n) {
  let r = Xs || (Xs = document.createRange());
  return r.setEnd(t, n ?? t.nodeValue.length), r.setStart(t, e || 0), r;
}, r1 = function() {
  Xs = null;
}, kn = function(t, e, n, r) {
  return n && (vc(t, e, n, r, -1) || vc(t, e, n, r, 1));
}, i1 = /^(img|br|input|textarea|hr)$/i;
function vc(t, e, n, r, i) {
  for (var o; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : qe(t))) {
      let s = t.parentNode;
      if (!s || s.nodeType != 1 || Zr(t) || i1.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Me(t) + (i < 0 ? 0 : 1), t = s;
    } else if (t.nodeType == 1) {
      let s = t.childNodes[e + (i < 0 ? -1 : 0)];
      if (s.nodeType == 1 && s.contentEditable == "false")
        if (!((o = s.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        t = s, e = i < 0 ? qe(t) : 0;
    } else
      return !1;
  }
}
function qe(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function o1(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e)
      return t;
    if (t.nodeType == 1 && e > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e - 1], e = qe(t);
    } else if (t.parentNode && !Zr(t))
      e = Me(t), t = t.parentNode;
    else
      return null;
  }
}
function s1(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e < t.nodeValue.length)
      return t;
    if (t.nodeType == 1 && e < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e], e = 0;
    } else if (t.parentNode && !Zr(t))
      e = Me(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
function l1(t, e, n) {
  for (let r = e == 0, i = e == qe(t); r || i; ) {
    if (t == n)
      return !0;
    let o = Me(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && o == 0, i = i && o == qe(t);
  }
}
function Zr(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const Bo = function(t) {
  return t.focusNode && kn(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function cn(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
function a1(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function c1(t, e, n) {
  if (t.caretPositionFromPoint)
    try {
      let r = t.caretPositionFromPoint(e, n);
      if (r)
        return { node: r.offsetNode, offset: Math.min(qe(r.offsetNode), r.offset) };
    } catch {
    }
  if (t.caretRangeFromPoint) {
    let r = t.caretRangeFromPoint(e, n);
    if (r)
      return { node: r.startContainer, offset: Math.min(qe(r.startContainer), r.startOffset) };
  }
}
const ut = typeof navigator < "u" ? navigator : null, kc = typeof document < "u" ? document : null, sn = ut && ut.userAgent || "", Ys = /Edge\/(\d+)/.exec(sn), yf = /MSIE \d/.exec(sn), Qs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(sn), Pe = !!(yf || Qs || Ys), Zt = yf ? document.documentMode : Qs ? +Qs[1] : Ys ? +Ys[1] : 0, Je = !Pe && /gecko\/(\d+)/i.test(sn);
Je && +(/Firefox\/(\d+)/.exec(sn) || [0, 0])[1];
const el = !Pe && /Chrome\/(\d+)/.exec(sn), ve = !!el, bf = el ? +el[1] : 0, Oe = !Pe && !!ut && /Apple Computer/.test(ut.vendor), Un = Oe && (/Mobile\/\w+/.test(sn) || !!ut && ut.maxTouchPoints > 2), Ke = Un || (ut ? /Mac/.test(ut.platform) : !1), wf = ut ? /Win/.test(ut.platform) : !1, Ct = /Android \d/.test(sn), Xr = !!kc && "webkitFontSmoothing" in kc.documentElement.style, d1 = Xr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function u1(t) {
  let e = t.defaultView && t.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: t.documentElement.clientWidth,
    top: 0,
    bottom: t.documentElement.clientHeight
  };
}
function bt(t, e) {
  return typeof t == "number" ? t : t[e];
}
function f1(t) {
  let e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, r = e.height / t.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t.clientWidth * n,
    top: e.top,
    bottom: e.top + t.clientHeight * r
  };
}
function xc(t, e, n) {
  let r = t.someProp("scrollThreshold") || 0, i = t.someProp("scrollMargin") || 5, o = t.dom.ownerDocument;
  for (let s = n || t.dom; s; ) {
    if (s.nodeType != 1) {
      s = Wn(s);
      continue;
    }
    let l = s, a = l == o.body, c = a ? u1(o) : f1(l), d = 0, u = 0;
    if (e.top < c.top + bt(r, "top") ? u = -(c.top - e.top + bt(i, "top")) : e.bottom > c.bottom - bt(r, "bottom") && (u = e.bottom - e.top > c.bottom - c.top ? e.top + bt(i, "top") - c.top : e.bottom - c.bottom + bt(i, "bottom")), e.left < c.left + bt(r, "left") ? d = -(c.left - e.left + bt(i, "left")) : e.right > c.right - bt(r, "right") && (d = e.right - c.right + bt(i, "right")), d || u)
      if (a)
        o.defaultView.scrollBy(d, u);
      else {
        let p = l.scrollLeft, h = l.scrollTop;
        u && (l.scrollTop += u), d && (l.scrollLeft += d);
        let m = l.scrollLeft - p, g = l.scrollTop - h;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let f = a ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(f))
      break;
    s = f == "absolute" ? s.offsetParent : Wn(s);
  }
}
function p1(t) {
  let e = t.dom.getBoundingClientRect(), n = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = n + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = t.root.elementFromPoint(o, s);
    if (!l || l == t.dom || !t.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= n - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: vf(t.dom) };
}
function vf(t) {
  let e = [], n = t.ownerDocument;
  for (let r = t; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n); r = Wn(r))
    ;
  return e;
}
function h1({ refDOM: t, refTop: e, stack: n }) {
  let r = t ? t.getBoundingClientRect().top : 0;
  kf(n, r == 0 ? 0 : r - e);
}
function kf(t, e) {
  for (let n = 0; n < t.length; n++) {
    let { dom: r, top: i, left: o } = t[n];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let En = null;
function m1(t) {
  if (t.setActive)
    return t.setActive();
  if (En)
    return t.focus(En);
  let e = vf(t);
  t.focus(En == null ? {
    get preventScroll() {
      return En = { preventScroll: !0 }, !0;
    }
  } : void 0), En || (En = !1, kf(e, 0));
}
function xf(t, e) {
  let n, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let d = t.firstChild, u = 0; d; d = d.nextSibling, u++) {
    let f;
    if (d.nodeType == 1)
      f = d.getClientRects();
    else if (d.nodeType == 3)
      f = St(d).getClientRects();
    else
      continue;
    for (let p = 0; p < f.length; p++) {
      let h = f[p];
      if (h.top <= s && h.bottom >= l) {
        s = Math.max(h.bottom, s), l = Math.min(h.top, l);
        let m = h.left > e.left ? h.left - e.left : h.right < e.left ? e.left - h.right : 0;
        if (m < r) {
          n = d, r = m, i = m && n.nodeType == 3 ? {
            left: h.right < e.left ? h.right : h.left,
            top: e.top
          } : e, d.nodeType == 1 && m && (o = u + (e.left >= (h.left + h.right) / 2 ? 1 : 0));
          continue;
        }
      } else h.top > e.top && !a && h.left <= e.left && h.right >= e.left && (a = d, c = { left: Math.max(h.left, Math.min(h.right, e.left)), top: h.top });
      !n && (e.left >= h.right && e.top >= h.top || e.left >= h.left && e.top >= h.bottom) && (o = u + 1);
    }
  }
  return !n && a && (n = a, i = c, r = 0), n && n.nodeType == 3 ? g1(n, i) : !n || r && n.nodeType == 1 ? { node: t, offset: o } : xf(n, i);
}
function g1(t, e) {
  let n = t.nodeValue.length, r = document.createRange(), i;
  for (let o = 0; o < n; o++) {
    r.setEnd(t, o + 1), r.setStart(t, o);
    let s = Pt(r, 1);
    if (s.top != s.bottom && ia(e, s)) {
      i = { node: t, offset: o + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
      break;
    }
  }
  return r.detach(), i || { node: t, offset: 0 };
}
function ia(t, e) {
  return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
}
function y1(t, e) {
  let n = t.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function b1(t, e, n) {
  let { node: r, offset: i } = xf(e, n), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return t.docView.posFromDOM(r, i, o);
}
function w1(t, e, n, r) {
  let i = -1;
  for (let o = e, s = !1; o != t.dom; ) {
    let l = t.docView.nearestDesc(o, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    o = l.dom.parentNode;
  }
  return i > -1 ? i : t.docView.posFromDOM(e, n, -1);
}
function Sf(t, e, n) {
  let r = t.childNodes.length;
  if (r && n.top < n.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), o = i; ; ) {
      let s = t.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (ia(e, c))
            return Sf(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return t;
}
function v1(t, e) {
  let n = t.dom.ownerDocument, r, i = 0, o = c1(n, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top), l;
  if (!s || !t.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = t.dom.getBoundingClientRect();
    if (!ia(e, c) || (s = Sf(t.dom, e, c), !s))
      return null;
  }
  if (Oe)
    for (let c = s; r && c; c = Wn(c))
      c.draggable && (r = void 0);
  if (s = y1(s, e), r) {
    if (Je && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let d = r.childNodes[i], u;
      d.nodeName == "IMG" && (u = d.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++;
    }
    let c;
    Xr && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == t.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = t.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = w1(t, r, i, e));
  }
  l == null && (l = b1(t, s, e));
  let a = t.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Sc(t) {
  return t.top < t.bottom || t.left < t.right;
}
function Pt(t, e) {
  let n = t.getClientRects();
  if (n.length) {
    let r = n[e < 0 ? 0 : n.length - 1];
    if (Sc(r))
      return r;
  }
  return Array.prototype.find.call(n, Sc) || t.getBoundingClientRect();
}
const k1 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Cf(t, e, n) {
  let { node: r, offset: i, atom: o } = t.docView.domFromPos(e, n < 0 ? -1 : 1), s = Xr || Je;
  if (r.nodeType == 3)
    if (s && (k1.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let a = Pt(St(r, i, i), n);
      if (Je && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = Pt(St(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let d = Pt(St(r, i, i + 1), -1);
          if (d.top != a.top)
            return sr(d, d.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, d = n < 0 ? 1 : -1;
      return n < 0 && !i ? (c++, d = -1) : n >= 0 && i == r.nodeValue.length ? (a--, d = 1) : n < 0 ? a-- : c++, sr(Pt(St(r, a, c), d), d < 0);
    }
  if (!t.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (n < 0 || i == qe(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return bs(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < qe(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return bs(a.getBoundingClientRect(), !0);
    }
    return bs(r.getBoundingClientRect(), n >= 0);
  }
  if (o == null && i && (n < 0 || i == qe(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? St(a, qe(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return sr(Pt(c, 1), !1);
  }
  if (o == null && i < qe(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? St(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return sr(Pt(c, -1), !0);
  }
  return sr(Pt(r.nodeType == 3 ? St(r) : r, -n), n >= 0);
}
function sr(t, e) {
  if (t.width == 0)
    return t;
  let n = e ? t.left : t.right;
  return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function bs(t, e) {
  if (t.height == 0)
    return t;
  let n = e ? t.top : t.bottom;
  return { top: n, bottom: n, left: t.left, right: t.right };
}
function Mf(t, e, n) {
  let r = t.state, i = t.root.activeElement;
  r != e && t.updateState(e), i != t.dom && t.focus();
  try {
    return n();
  } finally {
    r != e && t.updateState(r), i != t.dom && i && i.focus();
  }
}
function x1(t, e, n) {
  let r = e.selection, i = n == "up" ? r.$from : r.$to;
  return Mf(t, e, () => {
    let { node: o } = t.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let l = t.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = Cf(t, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = St(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d.bottom > d.top + 1 && (n == "up" ? s.top - d.top > (d.bottom - s.top) * 2 : d.bottom - s.bottom > (s.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const S1 = /[\u0590-\u08ac]/;
function C1(t, e, n) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = t.domSelection();
  return l ? !S1.test(r.parent.textContent) || !l.modify ? n == "left" || n == "backward" ? o : s : Mf(t, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: d, anchorOffset: u } = t.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", n, "character");
    let p = r.depth ? t.docView.domAfterPos(r.before()) : t.dom, { focusNode: h, focusOffset: m } = t.domSelectionRange(), g = h && !p.contains(h.nodeType == 1 ? h : h.parentNode) || a == h && c == m;
    try {
      l.collapse(d, u), a && (a != d || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let Cc = null, Mc = null, Ac = !1;
function M1(t, e, n) {
  return Cc == e && Mc == n ? Ac : (Cc = e, Mc = n, Ac = n == "up" || n == "down" ? x1(t, e, n) : C1(t, e, n));
}
const Ge = 0, Tc = 1, dn = 2, ft = 3;
class Yr {
  constructor(e, n, r, i) {
    this.parent = e, this.children = n, this.dom = r, this.contentDOM = i, this.dirty = Ge, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, n, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let n = 0; n < this.children.length; n++)
      e += this.children[n].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let n = 0, r = this.posAtStart; ; n++) {
      let i = this.children[n];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, n, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = n > Me(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (n == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && n == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!n || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let r = n; r; r = r.parent)
      if (r == this)
        return n;
  }
  posFromDOM(e, n, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, n, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, r = 0; n < this.children.length; n++) {
      let i = this.children[n], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          for (let s = 0; s < i.children.length; s++) {
            let l = i.children[s];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof Tf) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, n);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Af && o.side >= 0; r--)
      ;
    if (n <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && n && s && !o.border && !o.domAtom ? o.domFromPos(o.size, n) : { node: this.contentDOM, offset: o ? Me(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, n) : { node: this.contentDOM, offset: o ? Me(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let d = s + a.border;
        if (e >= d && n <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, n, d);
        e = s;
        for (let u = l; u > 0; u--) {
          let f = this.children[u - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = Me(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > n || l == this.children.length - 1)) {
        n = c;
        for (let d = l + 1; d < this.children.length; d++) {
          let u = this.children[d];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            o = Me(u.dom);
            break;
          }
          n += u.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: r } = this.domFromPos(e, 0);
    if (n.nodeType != 1 || r == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, r, i = !1) {
    let o = Math.min(e, n), s = Math.max(e, n);
    for (let p = 0, h = 0; p < this.children.length; p++) {
      let m = this.children[p], g = h + m.size;
      if (o > h && s < g)
        return m.setSelection(e - h - m.border, n - h - m.border, r, i);
      h = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = n == e ? l : this.domFromPos(n, n ? -1 : 1), c = r.root.getSelection(), d = r.domSelectionRange(), u = !1;
    if ((Je || Oe) && e == n) {
      let { node: p, offset: h } = l;
      if (p.nodeType == 3) {
        if (u = !!(h && p.nodeValue[h - 1] == `
`), u && h == p.nodeValue.length)
          for (let m = p, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: Me(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = p.childNodes[h - 1];
        u = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (Je && d.focusNode && d.focusNode != a.node && d.focusNode.nodeType == 1) {
      let p = d.focusNode.childNodes[d.focusOffset];
      p && p.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && Oe) && kn(l.node, l.offset, d.anchorNode, d.anchorOffset) && kn(a.node, a.offset, d.focusNode, d.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == n) && !(u && Je)) {
      c.collapse(l.node, l.offset);
      try {
        e != n && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > n) {
        let h = l;
        l = a, a = h;
      }
      let p = document.createRange();
      p.setEnd(a.node, a.offset), p.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(p);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, n) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && n >= r : e < s && n > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && n <= a) {
          this.dirty = e == r || n == s ? dn : Tc, e == l && n == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = ft : o.markDirty(e - l, n - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? dn : ft;
      }
      r = s;
    }
    this.dirty = dn;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let r = e == 1 ? dn : Tc;
      n.dirty < r && (n.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Af extends Yr {
  constructor(e, n, r, i) {
    let o, s = n.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !n.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = n, this.widget = n, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Ge && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let n = this.widget.spec.stopEvent;
    return n ? n(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class A1 extends Yr {
  constructor(e, n, r, i) {
    super(e, [], n, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, n) {
    return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class xn extends Yr {
  constructor(e, n, r, i, o) {
    super(e, [], r, i), this.mark = n, this.spec = o;
  }
  static create(e, n, r, i) {
    let o = i.nodeViews[n.type.name], s = o && o(n, i, r);
    return (!s || !s.dom) && (s = rn.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new xn(e, n, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & ft || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != ft && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != Ge) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Ge;
    }
  }
  slice(e, n, r) {
    let i = xn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    n < s && (o = nl(o, n, s, r)), e > 0 && (o = nl(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class Xt extends Yr {
  constructor(e, n, r, i, o, s, l, a, c) {
    super(e, [], o, s), this.node = n, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, n, r, i, o, s) {
    let l = o.nodeViews[n.type.name], a, c = l && l(n, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), d = c && c.dom, u = c && c.contentDOM;
    if (n.isText) {
      if (!d)
        d = document.createTextNode(n.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else d || ({ dom: d, contentDOM: u } = rn.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
    !u && !n.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), n.type.spec.draggable && (d.draggable = !0));
    let f = d;
    return d = Lf(d, r, n), c ? a = new T1(e, n, r, i, d, u || null, f, c, o, s + 1) : n.isText ? new Fo(e, n, r, i, d, f, o) : new Xt(e, n, r, i, d, u || null, f, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let n = this.children.length - 1; n >= 0; n--) {
        let r = this.children[n];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => C.empty);
    }
    return e;
  }
  matchesNode(e, n, r) {
    return this.dirty == Ge && e.eq(this.node) && zi(n, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, n) {
    let r = this.node.inlineContent, i = n, o = e.composing ? this.localCompositionInfo(e, n) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new O1(this, s && s.node, e);
    V1(this.node, this.innerDeco, (c, d, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(d == this.node.childCount ? re.none : this.node.child(d).marks, r, e), a.placeWidget(c, e, i);
    }, (c, d, u, f) => {
      a.syncToMarks(c.marks, r, e);
      let p;
      a.findNodeMatch(c, d, u, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (p = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, d, u, p, e) || a.updateNextNode(c, d, u, e, f, i) || a.addNode(c, d, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == dn) && (s && this.protectLocalComposition(e, s), Ef(this.contentDOM, this.children, e), Un && N1(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof B) || r < n || i > n + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = R1(this.node.content, s, r - n, i - n);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: r, text: i }) {
    if (this.getDesc(n))
      return;
    let o = n;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new A1(this, o, n, i);
    e.input.compositionNodes.push(s), this.children = nl(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, r, i) {
    return this.dirty == ft || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, i), !0);
  }
  updateInner(e, n, r, i) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Ge;
  }
  updateOuterDeco(e) {
    if (zi(e, this.outerDeco))
      return;
    let n = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Of(this.dom, this.nodeDOM, tl(this.outerDeco, this.node, n), tl(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Ec(t, e, n, r, i) {
  Lf(r, e, t);
  let o = new Xt(void 0, t, e, n, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class Fo extends Xt {
  constructor(e, n, r, i, o, s, l) {
    super(e, n, r, i, o, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, n, r, i) {
    return this.dirty == ft || this.dirty != Ge && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != Ge || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Ge, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, n, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, r) {
    let i = this.node.cut(e, n), o = document.createTextNode(i.text);
    return new Fo(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = ft);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Tf extends Yr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Ge && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class T1 extends Xt {
  constructor(e, n, r, i, o, s, l, a, c, d) {
    super(e, n, r, i, o, s, l, c, d), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, r, i) {
    if (this.dirty == ft)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, n, r);
      return o && this.updateInner(e, n, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, n, r.root) : super.setSelection(e, n, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Ef(t, e, n) {
  let r = t.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == t) {
      for (; l != r; )
        r = Oc(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, t.insertBefore(l, r);
    if (s instanceof xn) {
      let a = r ? r.previousSibling : t.lastChild;
      Ef(s.contentDOM, s.children, n), r = a ? a.nextSibling : t.firstChild;
    }
  }
  for (; r; )
    r = Oc(r), i = !0;
  i && n.trackWrites == t && (n.trackWrites = null);
}
const gr = function(t) {
  t && (this.nodeName = t);
};
gr.prototype = /* @__PURE__ */ Object.create(null);
const un = [new gr()];
function tl(t, e, n) {
  if (t.length == 0)
    return un;
  let r = n ? un[0] : new gr(), i = [r];
  for (let o = 0; o < t.length; o++) {
    let s = t[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new gr(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (n && i.length == 1 && i.push(r = new gr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Of(t, e, n, r) {
  if (n == un && r == un)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = n[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != t && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = un[0]), i = a;
    }
    E1(i, l || un[0], s);
  }
  return i;
}
function E1(t, e, n) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in n) && t.removeAttribute(r);
  for (let r in n)
    r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && t.setAttribute(r, n[r]);
  if (e.class != n.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && t.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && t.classList.add(i[o]);
    t.classList.length == 0 && t.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        t.style.removeProperty(i[1]);
    }
    n.style && (t.style.cssText += n.style);
  }
}
function Lf(t, e, n) {
  return Of(t, t, un, tl(e, n, t.nodeType != 1));
}
function zi(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].type.eq(e[n].type))
      return !1;
  return !0;
}
function Oc(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class O1 {
  constructor(e, n, r) {
    this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = L1(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let r = e; r < n; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, n - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = Ge, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = xn.create(this.top, e[o], n, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, n, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, n, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, n, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == ft && s.dom == s.contentDOM && (s.dirty = dn), s.update(e, n, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof Xt) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let d = a.dom, u, f = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != ft && zi(n, a.outerDeco));
        if (!f && a.update(e, n, r, i))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!f && (u = this.recreateWrapper(a, e, n, r, i, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = u, u.contentDOM && (u.dirty = dn, u.updateChildren(i, s + 1), u.dirty = Ge), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, r, i, o, s) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content) || !zi(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = Xt.create(this.top, n, r, i, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, r, i, o) {
    let s = Xt.create(this.top, e, n, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, n, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Af(this.top, e, n, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof xn; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Fo) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Oe || ve) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Tf(this.top, [], r, null);
      n != this.top ? n.children.push(i) : n.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function L1(t, e) {
  let n = e, r = n.children.length, i = t.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = n.children[r - 1];
        if (c instanceof xn)
          n = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (n == e)
          break e;
        r = n.parent.children.indexOf(n), n = n.parent;
      }
    let a = l.node;
    if (a) {
      if (a != t.child(i - 1))
        break;
      --i, o.set(l, i), s.push(l);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function H1(t, e) {
  return t.type.side - e.type.side;
}
function V1(t, e, n, r) {
  let i = e.locals(t), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < t.childCount; c++) {
      let d = t.child(c);
      r(d, i, e.forChild(o, d), c), o += d.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let d, u;
    for (; s < i.length && i[s].to == o; ) {
      let g = i[s++];
      g.widget && (d ? (u || (u = [d])).push(g) : d = g);
    }
    if (d)
      if (u) {
        u.sort(H1);
        for (let g = 0; g < u.length; g++)
          n(u[g], c, !!a);
      } else
        n(d, c, !!a);
    let f, p;
    if (a)
      p = -1, f = a, a = null;
    else if (c < t.childCount)
      p = c, f = t.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= o && l.splice(g--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let h = o + f.nodeSize;
    if (f.isText) {
      let g = h;
      s < i.length && i[s].from < g && (g = i[s].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < h && (a = f.cut(g - o), f = f.cut(0, g - o), h = g, p = -1);
    } else
      for (; s < i.length && i[s].to < h; )
        s++;
    let m = f.isInline && !f.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(f, m, e.forChild(o, f), p), o = h;
  }
}
function N1(t) {
  if (t.nodeName == "UL" || t.nodeName == "OL") {
    let e = t.style.cssText;
    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
  }
}
function R1(t, e, n, r) {
  for (let i = 0, o = 0; i < t.childCount && o <= r; ) {
    let s = t.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < t.childCount; ) {
      let c = t.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= n) {
      if (o >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= n)
        return l + c;
      if (n == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function nl(t, e, n, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < t.length; s++) {
    let a = t[s], c = l, d = l += a.size;
    c >= n || d <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), d > n && o.push(a.slice(n - c, a.size, r)));
  }
  return o;
}
function oa(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let i = t.docView.nearestDesc(n.focusNode), o = i && i.size == 0, s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (Bo(n)) {
    for (a = s; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && P.isSelectable(u) && i.parent && !(u.isInline && l1(n.focusNode, n.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new P(s == f ? l : r.resolve(f));
    }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let u = s, f = s;
      for (let p = 0; p < n.rangeCount; p++) {
        let h = n.getRangeAt(p);
        u = Math.min(u, t.docView.posFromDOM(h.startContainer, h.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(h.endContainer, h.endOffset, -1));
      }
      if (u < 0)
        return null;
      [a, s] = f == t.state.selection.anchor ? [f, u] : [u, f], l = r.resolve(s);
    } else
      a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let d = r.resolve(a);
  if (!c) {
    let u = e == "pointer" || t.state.selection.head < l.pos && !o ? 1 : -1;
    c = sa(t, d, l, u);
  }
  return c;
}
function Hf(t) {
  return t.editable ? t.hasFocus() : Nf(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Et(t, e = !1) {
  let n = t.state.selection;
  if (Vf(t, n), !!Hf(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && ve) {
      let r = t.domSelectionRange(), i = t.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && kn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      D1(t);
    else {
      let { anchor: r, head: i } = n, o, s;
      Lc && !(n instanceof B) && (n.$from.parent.inlineContent || (o = Hc(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (s = Hc(t, n.to))), t.docView.setSelection(r, i, t, e), Lc && (o && Vc(o), s && Vc(s)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && I1(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const Lc = Oe || ve && bf < 63;
function Hc(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (Oe && i && i.contentEditable == "false")
    return ws(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return ws(i);
    if (o)
      return ws(o);
  }
}
function ws(t) {
  return t.contentEditable = "true", Oe && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function Vc(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function I1(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != i) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!Hf(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function D1(t) {
  let e = t.domSelection();
  if (!e)
    return;
  let n = t.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, Me(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && Pe && Zt <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Vf(t, e) {
  if (e instanceof P) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (Nc(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    Nc(t);
}
function Nc(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function sa(t, e, n, r) {
  return t.someProp("createSelectionBetween", (i) => i(t, e, n)) || B.between(e, n, r);
}
function Rc(t) {
  return t.editable && !t.hasFocus() ? !1 : Nf(t);
}
function Nf(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function _1(t) {
  let e = t.docView.domFromPos(t.state.selection.anchor, 0), n = t.domSelectionRange();
  return kn(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function rl(t, e) {
  let { $anchor: n, $head: r } = t.selection, i = e > 0 ? n.max(r) : n.min(r), o = i.parent.inlineContent ? i.depth ? t.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && $.findFrom(o, e);
}
function zt(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Ic(t, e, n) {
  let r = t.state.selection;
  if (r instanceof B)
    if (n.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = t.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return zt(t, new B(r.$anchor, s));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = rl(t.state, e);
        return i && i instanceof P ? zt(t, i) : !1;
      } else if (!(Ke && n.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = t.docView.descAt(l)) && !s.contentDOM ? P.isSelectable(o) ? zt(t, new P(e < 0 ? t.state.doc.resolve(i.pos - o.nodeSize) : i)) : Xr ? zt(t, new B(t.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof P && r.node.isInline)
      return zt(t, new B(e > 0 ? r.$to : r.$from));
    {
      let i = rl(t.state, e);
      return i ? zt(t, i) : !1;
    }
  }
}
function Bi(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function yr(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function On(t, e) {
  return e < 0 ? P1(t) : z1(t);
}
function P1(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i, o, s = !1;
  for (Je && n.nodeType == 1 && r < Bi(n) && yr(n.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (yr(l, -1))
          i = n, o = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (Rf(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && yr(l, -1); )
          i = n.parentNode, o = Me(l), l = l.previousSibling;
        if (l)
          n = l, r = Bi(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  s ? il(t, n, r) : i && il(t, i, o);
}
function z1(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i = Bi(n), o, s;
  for (; ; )
    if (r < i) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (yr(l, 1))
        o = n, s = ++r;
      else
        break;
    } else {
      if (Rf(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && yr(l, 1); )
          o = l.parentNode, s = Me(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, i = Bi(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && il(t, o, s);
}
function Rf(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function B1(t, e) {
  for (; t && e == t.childNodes.length && !Zr(t); )
    e = Me(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function F1(t, e) {
  for (; t && !e && !Zr(t); )
    e = Me(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function il(t, e, n) {
  if (e.nodeType != 3) {
    let o, s;
    (s = B1(e, n)) ? (e = s, n = 0) : (o = F1(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (Bo(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: i } = t;
  setTimeout(() => {
    t.state == i && Et(t);
  }, 50);
}
function Dc(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(ve || wf) && n.parent.inlineContent) {
    let i = t.coordsAtPos(e);
    if (e > n.start()) {
      let o = t.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let o = t.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function _c(t, e, n) {
  let r = t.state.selection;
  if (r instanceof B && !r.empty || n.indexOf("s") > -1 || Ke && n.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = rl(t.state, e);
    if (s && s instanceof P)
      return zt(t, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof $e ? $.near(s, e) : $.findFrom(s, e);
    return l ? zt(t, l) : !1;
  }
  return !1;
}
function Pc(t, e) {
  if (!(t.state.selection instanceof B))
    return !0;
  let { $head: n, $anchor: r, empty: i } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (o && !o.isText) {
    let s = t.state.tr;
    return e < 0 ? s.delete(n.pos - o.nodeSize, n.pos) : s.delete(n.pos, n.pos + o.nodeSize), t.dispatch(s), !0;
  }
  return !1;
}
function zc(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function $1(t) {
  if (!Oe || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    zc(t, r, "true"), setTimeout(() => zc(t, r, "false"), 20);
  }
  return !1;
}
function j1(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function W1(t, e) {
  let n = e.keyCode, r = j1(e);
  if (n == 8 || Ke && n == 72 && r == "c")
    return Pc(t, -1) || On(t, -1);
  if (n == 46 && !e.shiftKey || Ke && n == 68 && r == "c")
    return Pc(t, 1) || On(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Ke && n == 66 && r == "c") {
    let i = n == 37 ? Dc(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Ic(t, i, r) || On(t, i);
  } else if (n == 39 || Ke && n == 70 && r == "c") {
    let i = n == 39 ? Dc(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Ic(t, i, r) || On(t, i);
  } else {
    if (n == 38 || Ke && n == 80 && r == "c")
      return _c(t, -1, r) || On(t, -1);
    if (n == 40 || Ke && n == 78 && r == "c")
      return $1(t) || _c(t, 1, r) || On(t, 1);
    if (r == (Ke ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function la(t, e) {
  t.someProp("transformCopied", (p) => {
    e = p(e, t);
  });
  let n = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let p = r.firstChild;
    n.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), r = p.content;
  }
  let s = t.someProp("clipboardSerializer") || rn.fromSchema(t.state.schema), l = Bf(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, d, u = 0;
  for (; c && c.nodeType == 1 && (d = zf[c.nodeName.toLowerCase()]); ) {
    for (let p = d.length - 1; p >= 0; p--) {
      let h = l.createElement(d[p]);
      for (; a.firstChild; )
        h.appendChild(a.firstChild);
      a.appendChild(h), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (p) => p(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function If(t, e, n, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!n && !e)
    return null;
  let a = !!e && (r || o || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, o || r, t);
    }), o)
      return l = new O(C.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t.someProp("transformPasted", (f) => {
        l = f(l, t, !0);
      }), l;
    let u = t.someProp("clipboardTextParser", (f) => f(e, i, r, t));
    if (u)
      l = u;
    else {
      let f = i.marks(), { schema: p } = t.state, h = rn.fromSchema(p);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(h.serializeNode(p.text(m, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (u) => {
      n = u(n, t);
    }), s = J1(n), Xr && G1(s);
  let c = s && s.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || Gt.fromSchema(t.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || d),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !U1.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = Z1(Bc(l, +d[1], +d[2]), d[4]);
  else if (l = O.maxOpen(K1(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, f = 0;
    for (let p = l.content.firstChild; u < l.openStart && !p.type.spec.isolating; u++, p = p.firstChild)
      ;
    for (let p = l.content.lastChild; f < l.openEnd && !p.type.spec.isolating; f++, p = p.lastChild)
      ;
    l = Bc(l, u, f);
  }
  return t.someProp("transformPasted", (u) => {
    l = u(l, t, a);
  }), l;
}
const U1 = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function K1(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let i = e.node(n).contentMatchAt(e.index(n)), o, s = [];
    if (t.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && _f(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Pf(s[s.length - 1], o.length));
        let d = Df(l, a);
        s.push(d), i = i.matchType(d.type), o = a;
      }
    }), s)
      return C.from(s);
  }
  return t;
}
function Df(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, C.from(t));
  return t;
}
function _f(t, e, n, r, i) {
  if (i < t.length && i < e.length && t[i] == e[i]) {
    let o = _f(t, e, n, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? n.type : t[i + 1]))
      return r.copy(r.content.append(C.from(Df(n, t, i + 1))));
  }
}
function Pf(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, Pf(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(C.empty, !0);
  return t.copy(n.append(r));
}
function ol(t, e, n, r, i, o) {
  let s = e < 0 ? t.firstChild : t.lastChild, l = s.content;
  return t.childCount > 1 && (o = 0), i < r - 1 && (l = ol(l, e, n, r, i + 1, o)), i >= n && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(C.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(l));
}
function Bc(t, e, n) {
  return e < t.openStart && (t = new O(ol(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new O(ol(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const zf = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Fc = null;
function Bf() {
  return Fc || (Fc = document.implementation.createHTMLDocument("title"));
}
let vs = null;
function q1(t) {
  let e = window.trustedTypes;
  return e ? (vs || (vs = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), vs.createHTML(t)) : t;
}
function J1(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = Bf().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), i;
  if ((i = r && zf[r[1].toLowerCase()]) && (t = i.map((o) => "<" + o + ">").join("") + t + i.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = q1(t), i)
    for (let o = 0; o < i.length; o++)
      n = n.querySelector(i[o]) || n;
  return n;
}
function G1(t) {
  let e = t.querySelectorAll(ve ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function Z1(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: i, openStart: o, openEnd: s } = t;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = C.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new O(i, o, s);
}
const Re = {}, Ie = {}, X1 = { touchstart: !0, touchmove: !0 };
class Y1 {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Q1(t) {
  for (let e in Re) {
    let n = Re[e];
    t.dom.addEventListener(e, t.input.eventHandlers[e] = (r) => {
      ty(t, r) && !aa(t, r) && (t.editable || !(r.type in Ie)) && n(t, r);
    }, X1[e] ? { passive: !0 } : void 0);
  }
  Oe && t.dom.addEventListener("input", () => null), sl(t);
}
function qt(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
function ey(t) {
  t.domObserver.stop();
  for (let e in t.input.eventHandlers)
    t.dom.removeEventListener(e, t.input.eventHandlers[e]);
  clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
}
function sl(t) {
  t.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = (r) => aa(t, r));
  });
}
function aa(t, e) {
  return t.someProp("handleDOMEvents", (n) => {
    let r = n[e.type];
    return r ? r(t, e) || e.defaultPrevented : !1;
  });
}
function ty(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target; n != t.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function ny(t, e) {
  !aa(t, e) && Re[e.type] && (t.editable || !(e.type in Ie)) && Re[e.type](t, e);
}
Ie.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !$f(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Ct && ve && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Un && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (i) => i(t, cn(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || W1(t, n) ? n.preventDefault() : qt(t, "key");
};
Ie.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
Ie.keypress = (t, e) => {
  let n = e;
  if ($f(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Ke && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (i) => i(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof B) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(n.charCode), o = () => t.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !t.someProp("handleTextInput", (s) => s(t, r.$from.pos, r.$to.pos, i, o)) && t.dispatch(o()), n.preventDefault();
  }
};
function $o(t) {
  return { left: t.clientX, top: t.clientY };
}
function ry(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function ca(t, e, n, r, i) {
  if (r == -1)
    return !1;
  let o = t.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (t.someProp(e, (l) => s > o.depth ? l(t, n, o.nodeAfter, o.before(s), i, !0) : l(t, n, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function zn(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function iy(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && P.isSelectable(r) ? (zn(t, new P(n)), !0) : !1;
}
function oy(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, i;
  n instanceof P && (r = n.node);
  let o = t.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (P.isSelectable(l)) {
      r && n.$from.depth > 0 && s >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? i = o.before(n.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (zn(t, P.create(t.state.doc, i)), !0) : !1;
}
function sy(t, e, n, r, i) {
  return ca(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (o) => o(t, e, r)) || (i ? oy(t, n) : iy(t, n));
}
function ly(t, e, n, r) {
  return ca(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (i) => i(t, e, r));
}
function ay(t, e, n, r) {
  return ca(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (i) => i(t, e, r)) || cy(t, n, r);
}
function cy(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (zn(t, B.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      zn(t, B.create(r, l + 1, l + 1 + s.content.size));
    else if (P.isSelectable(s))
      zn(t, P.create(r, l));
    else
      continue;
    return !0;
  }
}
function da(t) {
  return Fi(t);
}
const Ff = Ke ? "metaKey" : "ctrlKey";
Re.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = da(t), i = Date.now(), o = "singleClick";
  i - t.input.lastClick.time < 500 && ry(n, t.input.lastClick) && !n[Ff] && t.input.lastClick.button == n.button && (t.input.lastClick.type == "singleClick" ? o = "doubleClick" : t.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: o, button: n.button };
  let s = t.posAtCoords($o(n));
  s && (o == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new dy(t, s, n, !!r)) : (o == "doubleClick" ? ly : ay)(t, s.pos, s.inside, n) ? n.preventDefault() : qt(t, "pointer"));
};
class dy {
  constructor(e, n, r, i) {
    this.view = e, this.pos = n, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Ff], this.allowDefault = r.shiftKey;
    let o, s;
    if (n.inside > -1)
      o = e.state.doc.nodeAt(n.inside), s = n.inside;
    else {
      let d = e.state.doc.resolve(n.pos);
      o = d.parent, s = d.depth ? d.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof P && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Je && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), qt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Et(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords($o(e))), this.updateAllowDefault(e), this.allowDefault || !n ? qt(this.view, "pointer") : sy(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Oe && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    ve && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (zn(this.view, $.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : qt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), qt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Re.touchstart = (t) => {
  t.input.lastTouch = Date.now(), da(t), qt(t, "pointer");
};
Re.touchmove = (t) => {
  t.input.lastTouch = Date.now(), qt(t, "pointer");
};
Re.contextmenu = (t) => da(t);
function $f(t, e) {
  return t.composing ? !0 : Oe && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const uy = Ct ? 5e3 : -1;
Ie.compositionstart = Ie.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof B && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || ve && wf && fy(t)))
      t.markCursor = t.state.storedMarks || n.marks(), Fi(t, !0), t.markCursor = null;
    else if (Fi(t, !e.selection.empty), Je && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let l = t.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    t.input.composing = !0;
  }
  jf(t, uy);
};
function fy(t) {
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (!e || e.nodeType != 1 || n >= e.childNodes.length)
    return !1;
  let r = e.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == "false";
}
Ie.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, jf(t, 20));
};
function jf(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Fi(t), e));
}
function Wf(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = hy()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function py(t) {
  let e = t.domSelectionRange();
  if (!e.focusNode)
    return null;
  let n = o1(e.focusNode, e.focusOffset), r = s1(e.focusNode, e.focusOffset);
  if (n && r && n != r) {
    let i = r.pmViewDesc, o = t.domObserver.lastChangedTextNode;
    if (n == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (t.input.compositionNode == r) {
      let s = n.pmViewDesc;
      if (!(!s || !s.isText(n.nodeValue)))
        return r;
    }
  }
  return n || r;
}
function hy() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Fi(t, e = !1) {
  if (!(Ct && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), Wf(t), e || t.docView && t.docView.dirty) {
      let n = oa(t), r = t.state.selection;
      return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function my(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Ir = Pe && Zt < 15 || Un && d1 < 604;
Re.copy = Ie.cut = (t, e) => {
  let n = e, r = t.state.selection, i = n.type == "cut";
  if (r.empty)
    return;
  let o = Ir ? null : n.clipboardData, s = r.content(), { dom: l, text: a } = la(t, s);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : my(t, l), i && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function gy(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function yy(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Dr(t, r.value, null, i, e) : Dr(t, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Dr(t, e, n, r, i) {
  let o = If(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, i, o || O.empty)))
    return !0;
  if (!o)
    return !1;
  let s = gy(o), l = s ? t.state.tr.replaceSelectionWith(s, r) : t.state.tr.replaceSelection(o);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Uf(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
Ie.paste = (t, e) => {
  let n = e;
  if (t.composing && !Ct)
    return;
  let r = Ir ? null : n.clipboardData, i = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Dr(t, Uf(r), r.getData("text/html"), i, n) ? n.preventDefault() : yy(t, n);
};
class Kf {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const by = Ke ? "altKey" : "ctrlKey";
function qf(t, e) {
  let n = t.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[by];
}
Re.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let i = t.state.selection, o = i.empty ? null : t.posAtCoords($o(n)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof P ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = P.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let u = t.docView.nearestDesc(n.target, !0);
      u && u.node.type.spec.draggable && u != t.docView && (s = P.create(t.state.doc, u.posBefore));
    }
  }
  let l = (s || t.state.selection).content(), { dom: a, text: c, slice: d } = la(t, l);
  (!n.dataTransfer.files.length || !ve || bf > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Ir ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Ir || n.dataTransfer.setData("text/plain", c), t.dragging = new Kf(d, qf(t, n), s);
};
Re.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
Ie.dragover = Ie.dragenter = (t, e) => e.preventDefault();
Ie.drop = (t, e) => {
  try {
    wy(t, e, t.dragging);
  } finally {
    t.dragging = null;
  }
};
function wy(t, e, n) {
  if (!e.dataTransfer)
    return;
  let r = t.posAtCoords($o(e));
  if (!r)
    return;
  let i = t.state.doc.resolve(r.pos), o = n && n.slice;
  o ? t.someProp("transformPasted", (p) => {
    o = p(o, t, !1);
  }) : o = If(t, Uf(e.dataTransfer), Ir ? null : e.dataTransfer.getData("text/html"), !1, i);
  let s = !!(n && qf(t, e));
  if (t.someProp("handleDrop", (p) => p(t, e, o || O.empty, s))) {
    e.preventDefault();
    return;
  }
  if (!o)
    return;
  e.preventDefault();
  let l = o ? Zu(t.state.doc, i.pos, o) : i.pos;
  l == null && (l = i.pos);
  let a = t.state.tr;
  if (s) {
    let { node: p } = n;
    p ? p.replace(a) : a.deleteSelection();
  }
  let c = a.mapping.map(l), d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, u = a.doc;
  if (d ? a.replaceRangeWith(c, c, o.content.firstChild) : a.replaceRange(c, c, o), a.doc.eq(u))
    return;
  let f = a.doc.resolve(c);
  if (d && P.isSelectable(o.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(o.content.firstChild))
    a.setSelection(new P(f));
  else {
    let p = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((h, m, g, y) => p = y), a.setSelection(sa(t, f, a.doc.resolve(p)));
  }
  t.focus(), t.dispatch(a.setMeta("uiEvent", "drop"));
}
Re.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Et(t);
  }, 20));
};
Re.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Re.beforeinput = (t, e) => {
  if (ve && Ct && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (o) => o(t, cn(8, "Backspace")))))
        return;
      let { $cursor: i } = t.state.selection;
      i && i.pos > 0 && t.dispatch(t.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in Ie)
  Re[t] = Ie[t];
function _r(t, e) {
  if (t == e)
    return !0;
  for (let n in t)
    if (t[n] !== e[n])
      return !1;
  for (let n in e)
    if (!(n in t))
      return !1;
  return !0;
}
class $i {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || gn, this.side = this.spec.side || 0;
  }
  map(e, n, r, i) {
    let { pos: o, deleted: s } = e.mapResult(n.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new ke(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof $i && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && _r(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Yt {
  constructor(e, n) {
    this.attrs = e, this.spec = n || gn;
  }
  map(e, n, r, i) {
    let o = e.map(n.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(n.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new ke(o, s, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof Yt && _r(this.attrs, e.attrs) && _r(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Yt;
  }
  destroy() {
  }
}
class ua {
  constructor(e, n) {
    this.attrs = e, this.spec = n || gn;
  }
  map(e, n, r, i) {
    let o = e.mapResult(n.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(n.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new ke(o.pos - r, s.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: i } = e.content.findIndex(n.from), o;
    return i == n.from && !(o = e.child(r)).isText && i + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof ua && _r(this.attrs, e.attrs) && _r(this.spec, e.spec);
  }
  destroy() {
  }
}
class ke {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new ke(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new ke(e, e, new $i(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, i) {
    return new ke(e, n, new Yt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, i) {
    return new ke(e, n, new ua(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Yt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof $i;
  }
}
const Vn = [], gn = {};
class oe {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Vn, this.children = n.length ? n : Vn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? ji(n, e, 0, gn) : Ee;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let i = [];
    return this.findInner(e ?? 0, n ?? 1e9, i, 0, r), i;
  }
  findInner(e, n, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= n && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < n && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, n - l, r, i + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == Ee || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || gn);
  }
  /**
  @internal
  */
  mapInner(e, n, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(n, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? vy(this.children, s || [], e, n, r, i, o) : s ? new oe(s.sort(yn), Vn) : Ee;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Ee ? oe.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, d;
      if (d = Gf(n, l, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, d, c + 1) : i.splice(o, 0, a, a + l.nodeSize, ji(d, l, c + 1, gn)), o += 3;
      }
    });
    let s = Jf(o ? Zf(n) : n, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new oe(s.length ? this.local.concat(s).sort(yn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Ee ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + n, a = r[o + 1] + n;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > l && u.to < a && (e[d] = null, (s || (s = [])).push(u));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != Ee ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, n) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new oe(i, r) : Ee;
  }
  forChild(e, n) {
    if (this == Ee)
      return this;
    if (n.isLeaf)
      return oe.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof Yt) {
        let c = Math.max(o, a.from) - o, d = Math.min(s, a.to) - o;
        c < d && (i || (i = [])).push(a.copy(c, d));
      }
    }
    if (i) {
      let l = new oe(i.sort(yn), Vn);
      return r ? new $t([l, r]) : l;
    }
    return r || Ee;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof oe) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return fa(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Ee)
      return Vn;
    if (e.inlineContent || !this.local.some(Yt.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Yt || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
oe.empty = new oe([], []);
oe.removeOverlap = fa;
const Ee = oe.empty;
class $t {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((i) => i.map(e, n, gn));
    return $t.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return oe.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, n);
      o != Ee && (o instanceof $t ? r = r.concat(o.members) : r.push(o));
    }
    return $t.from(r);
  }
  eq(e) {
    if (!(e instanceof $t) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!n)
          n = o;
        else {
          r && (n = n.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            n.push(o[s]);
        }
    }
    return n ? fa(r ? n : n.sort(yn)) : Vn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Ee;
      case 1:
        return e[0];
      default:
        return new $t(e.every((n) => n instanceof oe) ? e : e.reduce((n, r) => n.concat(r instanceof oe ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function vy(t, e, n, r, i, o, s) {
  let l = t.slice();
  for (let c = 0, d = o; c < n.maps.length; c++) {
    let u = 0;
    n.maps[c].forEach((f, p, h, m) => {
      let g = m - h - (p - f);
      for (let y = 0; y < l.length; y += 3) {
        let b = l[y + 1];
        if (b < 0 || f > b + d - u)
          continue;
        let w = l[y] + d - u;
        p >= w ? l[y + 1] = f <= w ? -2 : -1 : f >= d && g && (l[y] += g, l[y + 1] += g);
      }
      u += g;
    }), d = n.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = n.map(t[c] + o), u = d - i;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + o, -1), p = f - i, { index: h, offset: m } = r.content.findIndex(u), g = r.maybeChild(h);
      if (g && m == u && m + g.nodeSize == p) {
        let y = l[c + 2].mapInner(n, g, d + 1, t[c] + o + 1, s);
        y != Ee ? (l[c] = u, l[c + 1] = p, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = ky(l, t, e, n, i, o, s), d = ji(c, r, 0, s);
    e = d.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, f = 0; u < d.children.length; u += 3) {
      let p = d.children[u];
      for (; f < l.length && l[f] < p; )
        f += 3;
      l.splice(f, 0, d.children[u], d.children[u + 1], d.children[u + 2]);
    }
  }
  return new oe(e.sort(yn), l);
}
function Jf(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    n.push(new ke(i.from + e, i.to + e, i.type));
  }
  return n;
}
function ky(t, e, n, r, i, o, s) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let u = a.local[d].map(r, i, c);
      u ? n.push(u) : s.onRemove && s.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + o + 1);
  return n;
}
function Gf(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, i = null;
  for (let o = 0, s; o < t.length; o++)
    (s = t[o]) && s.from > n && s.to < r && ((i || (i = [])).push(s), t[o] = null);
  return i;
}
function Zf(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function ji(t, e, n, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = Gf(t, l, a + n);
    if (c) {
      o = !0;
      let d = ji(c, l, n + a + 1, r);
      d != Ee && i.push(a, a + l.nodeSize, d);
    }
  });
  let s = Jf(o ? Zf(t) : t, -n).sort(yn);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new oe(s, i) : Ee;
}
function yn(t, e) {
  return t.from - e.from || t.to - e.to;
}
function fa(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let i = n + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == t && (e = t.slice()), e[i] = o.copy(o.from, r.to), $c(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, o.from), $c(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function $c(t, e, n) {
  for (; e < t.length && yn(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
function ks(t) {
  let e = [];
  return t.someProp("decorations", (n) => {
    let r = n(t.state);
    r && r != Ee && e.push(r);
  }), t.cursorWrapper && e.push(oe.create(t.state.doc, [t.cursorWrapper.deco])), $t.from(e);
}
const xy = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Sy = Pe && Zt <= 11;
class Cy {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class My {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Cy(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Pe && Zt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Sy && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, xy)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let n = 0; n < e.length; n++)
          this.queue.push(e[n]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Rc(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Et(this.view);
      if (Pe && Zt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && kn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let n = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Wn(o))
      n.add(o);
    for (let o = e.anchorNode; o; o = Wn(o))
      if (n.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let n = this.pendingRecords();
    n.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Rc(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < n.length; d++) {
        let u = this.registerMutation(n[d], a);
        u && (o = o < 0 ? u.from : Math.min(u.from, o), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
      }
    if (Je && a.length) {
      let d = a.filter((u) => u.nodeName == "BR");
      if (d.length == 2) {
        let [u, f] = d;
        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove();
      } else {
        let { focusNode: u } = this.currentSelection;
        for (let f of d) {
          let p = f.parentNode;
          p && p.nodeName == "LI" && (!u || Ey(e, u) != p) && f.remove();
        }
      }
    } else if ((ve || Oe) && a.some((d) => d.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46)) {
      for (let d of a)
        if (d.nodeName == "BR" && d.parentNode) {
          let u = d.nextSibling;
          u && u.nodeType == 1 && u.contentEditable == "false" && d.parentNode.removeChild(d);
        }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Bo(r) && (c = oa(e)) && c.eq($.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Et(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), Ay(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Et(e), this.currentSelection.set(r));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++) {
        let u = e.addedNodes[d];
        n.push(u), u.nodeType == 3 && (this.lastChangedTextNode = u);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (Pe && Zt <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: u, nextSibling: f } = e.addedNodes[d];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = i && i.parentNode == e.target ? Me(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? Me(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let jc = /* @__PURE__ */ new WeakMap(), Wc = !1;
function Ay(t) {
  if (!jc.has(t) && (jc.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
    if (t.requiresGeckoHackNode = Je, Wc)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Wc = !0;
  }
}
function Uc(t, e) {
  let n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = t.domAtPos(t.state.selection.anchor);
  return kn(s.node, s.offset, i, o) && ([n, r, i, o] = [i, o, n, r]), { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: o };
}
function Ty(t, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(t.root)[0];
    if (i)
      return Uc(t, i);
  }
  let n;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), n = i.getTargetRanges()[0];
  }
  return t.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", r, !0), n ? Uc(t, n) : null;
}
function Ey(t, e) {
  for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
    let r = t.docView.nearestDesc(n, !0);
    if (r && r.node.isBlock)
      return n;
  }
  return null;
}
function Oy(t, e, n) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = t.docView.parseRange(e, n), a = t.domSelectionRange(), c, d = a.anchorNode;
  if (d && t.dom.contains(d.nodeType == 1 ? d : d.parentNode) && (c = [{ node: d, offset: a.anchorOffset }], Bo(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), ve && t.input.lastKeyCode === 8)
    for (let g = o; g > i; g--) {
      let y = r.childNodes[g - 1], b = y.pmViewDesc;
      if (y.nodeName == "BR" && !b) {
        o = g;
        break;
      }
      if (!b || b.size)
        break;
    }
  let u = t.state.doc, f = t.someProp("domParser") || Gt.fromSchema(t.state.schema), p = u.resolve(s), h = null, m = f.parse(r, {
    topNode: p.parent,
    topMatch: p.parent.contentMatchAt(p.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Ly,
    context: p
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = g), h = { anchor: g + s, head: y + s };
  }
  return { doc: m, sel: h, from: s, to: l };
}
function Ly(t) {
  let e = t.pmViewDesc;
  if (e)
    return e.parseRule();
  if (t.nodeName == "BR" && t.parentNode) {
    if (Oe && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
      let n = document.createElement("div");
      return n.appendChild(document.createElement("li")), { skip: n };
    } else if (t.parentNode.lastChild == t || Oe && /^(tr|table)$/i.test(t.parentNode.nodeName))
      return { ignore: !0 };
  } else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Hy = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Vy(t, e, n, r, i) {
  let o = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
  if (t.input.compositionPendingChanges = 0, e < 0) {
    let S = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null, A = oa(t, S);
    if (A && !t.state.selection.eq(A)) {
      if (ve && Ct && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", (R) => R(t, cn(13, "Enter"))))
        return;
      let V = t.state.tr.setSelection(A);
      S == "pointer" ? V.setMeta("pointer", !0) : S == "key" && V.scrollIntoView(), o && V.setMeta("composition", o), t.dispatch(V);
    }
    return;
  }
  let s = t.state.doc.resolve(e), l = s.sharedDepth(n);
  e = s.before(l + 1), n = t.state.doc.resolve(n).after(l + 1);
  let a = t.state.selection, c = Oy(t, e, n), d = t.state.doc, u = d.slice(c.from, c.to), f, p;
  t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (f = t.state.selection.to, p = "end") : (f = t.state.selection.from, p = "start"), t.input.lastKeyCode = null;
  let h = Iy(u.content, c.doc.content, c.from, f, p);
  if (h && t.input.domChangeCount++, (Un && t.input.lastIOSEnter > Date.now() - 225 || Ct) && i.some((S) => S.nodeType == 1 && !Hy.test(S.nodeName)) && (!h || h.endA >= h.endB) && t.someProp("handleKeyDown", (S) => S(t, cn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && a instanceof B && !a.empty && a.$head.sameParent(a.$anchor) && !t.composing && !(c.sel && c.sel.anchor != c.sel.head))
      h = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let S = Kc(t, t.state.doc, c.sel);
        if (S && !S.eq(t.state.selection)) {
          let A = t.state.tr.setSelection(S);
          o && A.setMeta("composition", o), t.dispatch(A);
        }
      }
      return;
    }
  t.state.selection.from < t.state.selection.to && h.start == h.endB && t.state.selection instanceof B && (h.start > t.state.selection.from && h.start <= t.state.selection.from + 2 && t.state.selection.from >= c.from ? h.start = t.state.selection.from : h.endA < t.state.selection.to && h.endA >= t.state.selection.to - 2 && t.state.selection.to <= c.to && (h.endB += t.state.selection.to - h.endA, h.endA = t.state.selection.to)), Pe && Zt <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > c.from && c.doc.textBetween(h.start - c.from - 1, h.start - c.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let m = c.doc.resolveNoCache(h.start - c.from), g = c.doc.resolveNoCache(h.endB - c.from), y = d.resolve(h.start), b = m.sameParent(g) && m.parent.inlineContent && y.end() >= h.endA;
  if ((Un && t.input.lastIOSEnter > Date.now() - 225 && (!b || i.some((S) => S.nodeName == "DIV" || S.nodeName == "P")) || !b && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", ""))) && t.someProp("handleKeyDown", (S) => S(t, cn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (t.state.selection.anchor > h.start && Ry(d, h.start, h.endA, m, g) && t.someProp("handleKeyDown", (S) => S(t, cn(8, "Backspace")))) {
    Ct && ve && t.domObserver.suppressSelectionUpdates();
    return;
  }
  ve && h.endB == h.start && (t.input.lastChromeDelete = Date.now()), Ct && !b && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == h.endA && (h.endB -= 2, g = c.doc.resolveNoCache(h.endB - c.from), setTimeout(() => {
    t.someProp("handleKeyDown", function(S) {
      return S(t, cn(13, "Enter"));
    });
  }, 20));
  let w = h.start, k = h.endA, v = (S) => {
    let A = S || t.state.tr.replace(w, k, c.doc.slice(h.start - c.from, h.endB - c.from));
    if (c.sel) {
      let V = Kc(t, A.doc, c.sel);
      V && !(ve && t.composing && V.empty && (h.start != h.endB || t.input.lastChromeDelete < Date.now() - 100) && (V.head == w || V.head == A.mapping.map(k) - 1) || Pe && V.empty && V.head == w) && A.setSelection(V);
    }
    return o && A.setMeta("composition", o), A.scrollIntoView();
  }, x;
  if (b)
    if (m.pos == g.pos) {
      Pe && Zt <= 11 && m.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => Et(t), 20));
      let S = v(t.state.tr.delete(w, k)), A = d.resolve(h.start).marksAcross(d.resolve(h.endA));
      A && S.ensureMarks(A), t.dispatch(S);
    } else if (
      // Adding or removing a mark
      h.endA == h.endB && (x = Ny(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, h.endA - y.start())))
    ) {
      let S = v(t.state.tr);
      x.type == "add" ? S.addMark(w, k, x.mark) : S.removeMark(w, k, x.mark), t.dispatch(S);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let S = m.parent.textBetween(m.parentOffset, g.parentOffset), A = () => v(t.state.tr.insertText(S, w, k));
      t.someProp("handleTextInput", (V) => V(t, w, k, S, A)) || t.dispatch(A());
    } else
      t.dispatch(v());
  else
    t.dispatch(v());
}
function Kc(t, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : sa(t, e.resolve(n.anchor), e.resolve(n.head));
}
function Ny(t, e) {
  let n = t.firstChild.marks, r = e.firstChild.marks, i = n, o = r, s, l, a;
  for (let d = 0; d < r.length; d++)
    i = r[d].removeFromSet(i);
  for (let d = 0; d < n.length; d++)
    o = n[d].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let c = [];
  for (let d = 0; d < e.childCount; d++)
    c.push(a(e.child(d)));
  if (C.from(c).eq(t))
    return { mark: l, type: s };
}
function Ry(t, e, n, r, i) {
  if (
    // The content must have shrunk
    n - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    xs(r, !0, !1) < i.pos
  )
    return !1;
  let o = t.resolve(e);
  if (!r.parent.isTextblock) {
    let l = o.nodeAfter;
    return l != null && n == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = t.resolve(xs(o, !0, !0));
  return !s.parent.isTextblock || s.pos > n || xs(s, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function xs(t, e, n) {
  let r = t.depth, i = e ? t.end() : t.pos;
  for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); )
    r--, i++, e = !1;
  if (n) {
    let o = t.node(r).maybeChild(t.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function Iy(t, e, n, r, i) {
  let o = t.findDiffStart(e, n);
  if (o == null)
    return null;
  let { a: s, b: l } = t.findDiffEnd(e, n + t.size, n + e.size);
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    r -= s + a - o;
  }
  if (s < o && t.size < e.size) {
    let a = r <= o && r >= s ? o - r : 0;
    o -= a, o && o < e.size && qc(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), l = o + (l - s), s = o;
  } else if (l < o) {
    let a = r <= o && r >= l ? o - r : 0;
    o -= a, o && o < t.size && qc(t.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), s = o + (s - l), l = o;
  }
  return { start: o, endA: s, endB: l };
}
function qc(t) {
  if (t.length != 2)
    return !1;
  let e = t.charCodeAt(0), n = t.charCodeAt(1);
  return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
}
class Xf {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Y1(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(Yc), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Zc(this), Gc(this), this.nodeViews = Xc(this), this.docView = Ec(this.state.doc, Jc(this), ks(this), this.dom, this), this.domObserver = new My(this, (r, i, o, s) => Vy(this, r, i, o, s)), this.domObserver.start(), Q1(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let n in e)
        this._props[n] = e[n];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && sl(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Yc), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let r in this._props)
      n[r] = this._props[r];
    n.state = this.state;
    for (let r in e)
      n[r] = e[r];
    this.update(n);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, n) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (Wf(this), s = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != n.plugins;
    if (l || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let p = Xc(this);
      _y(p, this.nodeViews) && (this.nodeViews = p, o = !0);
    }
    (l || n.handleDOMEvents != this._props.handleDOMEvents) && sl(this), this.editable = Zc(this), Gc(this);
    let a = ks(this), c = Jc(this), d = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", u = o || !this.docView.matchesNode(e.doc, c, a);
    (u || !e.selection.eq(i.selection)) && (s = !0);
    let f = d == "preserve" && s && this.dom.style.overflowAnchor == null && p1(this);
    if (s) {
      this.domObserver.stop();
      let p = u && (Pe || ve) && !this.composing && !i.selection.empty && !e.selection.empty && Dy(i.selection, e.selection);
      if (u) {
        let h = ve ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = py(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Ec(e.doc, c, a, this.dom, this)), h && !this.trackWrites && (p = !0);
      }
      p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && _1(this)) ? Et(this, p) : (Vf(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : f && h1(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (n) => n(this))) if (this.state.selection instanceof P) {
        let n = this.docView.domAfterPos(this.state.selection.from);
        n.nodeType == 1 && xc(this, n.getBoundingClientRect(), e);
      } else
        xc(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let n = 0; n < this.directPlugins.length; n++) {
        let r = this.directPlugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let r = this.state.plugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let r = this.pluginViews[n];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, n) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - n.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new Kf(e.slice, e.move, i < 0 ? void 0 : P.create(this.state.doc, i));
  }
  someProp(e, n) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = n ? n(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = n ? n(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = n ? n(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Pe) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && m1(this.dom), Et(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let n = this.dom.parentNode; n; n = n.parentNode)
        if (n.nodeType == 9 || n.nodeType == 11 && n.host)
          return n.getSelection || (Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()), this._root = n;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return v1(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, n = 1) {
    return Cf(this, e, n);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, n = 0) {
    return this.docView.domFromPos(e, n);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let n = this.docView.descAt(e);
    return n ? n.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, n, r = -1) {
    let i = this.docView.posFromDOM(e, n, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, n) {
    return M1(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return Dr(this, "", e, !1, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return Dr(this, e, null, !0, n || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return la(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (ey(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], ks(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, r1());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return ny(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Oe && this.root.nodeType === 11 && a1(this.dom.ownerDocument) == this.dom && Ty(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
Xf.prototype.dispatch = function(t) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, t) : this.updateState(this.state.apply(t));
};
function Jc(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t.state)), n)
      for (let r in n)
        r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]));
  }), e.translate || (e.translate = "no"), [ke.node(0, t.state.doc.content.size, e)];
}
function Gc(t) {
  if (t.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = { dom: e, deco: ke.widget(t.state.selection.from, e, { raw: !0, marks: t.markCursor }) };
  } else
    t.cursorWrapper = null;
}
function Zc(t) {
  return !t.someProp("editable", (e) => e(t.state) === !1);
}
function Dy(t, e) {
  let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
  return t.$anchor.start(n) != e.$anchor.start(n);
}
function Xc(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
}
function _y(t, e) {
  let n = 0, r = 0;
  for (let i in t) {
    if (t[i] != e[i])
      return !0;
    n++;
  }
  for (let i in e)
    r++;
  return n != r;
}
function Yc(t) {
  if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Qt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Wi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Py = typeof navigator < "u" && /Mac/.test(navigator.platform), zy = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ae = 0; Ae < 10; Ae++) Qt[48 + Ae] = Qt[96 + Ae] = String(Ae);
for (var Ae = 1; Ae <= 24; Ae++) Qt[Ae + 111] = "F" + Ae;
for (var Ae = 65; Ae <= 90; Ae++)
  Qt[Ae] = String.fromCharCode(Ae + 32), Wi[Ae] = String.fromCharCode(Ae);
for (var Ss in Qt) Wi.hasOwnProperty(Ss) || (Wi[Ss] = Qt[Ss]);
function By(t) {
  var e = Py && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || zy && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? Wi : Qt)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const Fy = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), $y = typeof navigator < "u" && /Win/.test(navigator.platform);
function jy(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Fy ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), s && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Wy(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[jy(n)] = t[n];
  return e;
}
function Cs(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function Uy(t) {
  return new ne({ props: { handleKeyDown: pa(t) } });
}
function pa(t) {
  let e = Wy(t);
  return function(n, r) {
    let i = By(r), o, s = e[Cs(i, r)];
    if (s && s(n.state, n.dispatch, n))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[Cs(i, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !($y && r.ctrlKey && r.altKey) && (o = Qt[r.keyCode]) && o != i) {
        let l = e[Cs(o, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
var Ky = Object.defineProperty, ha = (t, e) => {
  for (var n in e)
    Ky(t, n, { get: e[n], enumerable: !0 });
};
function jo(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: i } = n, { storedMarks: o } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = n.selection, i = n.doc, o = n.storedMarks, n;
    }
  };
}
var Wo = class {
  constructor(t) {
    this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: t, editor: e, state: n } = this, { view: r } = e, { tr: i } = n, o = this.buildProps(i);
    return Object.fromEntries(
      Object.entries(t).map(([s, l]) => [s, (...c) => {
        const d = l(...c)(o);
        return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), d;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(t, e = !0) {
    const { rawCommands: n, editor: r, state: i } = this, { view: o } = r, s = [], l = !!t, a = t || i.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(a), s.every((u) => u === !0)), d = {
      ...Object.fromEntries(
        Object.entries(n).map(([u, f]) => [u, (...h) => {
          const m = this.buildProps(a, e), g = f(...h)(m);
          return s.push(g), d;
        }])
      ),
      run: c
    };
    return d;
  }
  createCan(t) {
    const { rawCommands: e, state: n } = this, r = !1, i = t || n.tr, o = this.buildProps(i, r);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...o, dispatch: void 0 })])
      ),
      chain: () => this.createChain(i, r)
    };
  }
  buildProps(t, e = !0) {
    const { rawCommands: n, editor: r, state: i } = this, { view: o } = r, s = {
      tr: t,
      editor: r,
      view: o,
      state: jo({
        state: i,
        transaction: t
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(t, e),
      can: () => this.createCan(t),
      get commands() {
        return Object.fromEntries(
          Object.entries(n).map(([l, a]) => [l, (...c) => a(...c)(s)])
        );
      }
    };
    return s;
  }
}, Yf = {};
ha(Yf, {
  blur: () => qy,
  clearContent: () => Jy,
  clearNodes: () => Gy,
  command: () => Zy,
  createParagraphNear: () => Xy,
  cut: () => Yy,
  deleteCurrentNode: () => Qy,
  deleteNode: () => eb,
  deleteRange: () => tb,
  deleteSelection: () => nb,
  enter: () => rb,
  exitCode: () => ib,
  extendMarkRange: () => ob,
  first: () => sb,
  focus: () => lb,
  forEach: () => ab,
  insertContent: () => cb,
  insertContentAt: () => fb,
  joinBackward: () => mb,
  joinDown: () => hb,
  joinForward: () => gb,
  joinItemBackward: () => yb,
  joinItemForward: () => bb,
  joinTextblockBackward: () => wb,
  joinTextblockForward: () => vb,
  joinUp: () => pb,
  keyboardShortcut: () => xb,
  lift: () => Sb,
  liftEmptyBlock: () => Cb,
  liftListItem: () => Mb,
  newlineInCode: () => Ab,
  resetAttributes: () => Tb,
  scrollIntoView: () => Eb,
  selectAll: () => Ob,
  selectNodeBackward: () => Lb,
  selectNodeForward: () => Hb,
  selectParentNode: () => Vb,
  selectTextblockEnd: () => Nb,
  selectTextblockStart: () => Rb,
  setContent: () => Ib,
  setMark: () => Qb,
  setMeta: () => e0,
  setNode: () => t0,
  setNodeSelection: () => n0,
  setTextDirection: () => r0,
  setTextSelection: () => i0,
  sinkListItem: () => o0,
  splitBlock: () => s0,
  splitListItem: () => l0,
  toggleList: () => a0,
  toggleMark: () => c0,
  toggleNode: () => d0,
  toggleWrap: () => u0,
  undoInputRule: () => f0,
  unsetAllMarks: () => p0,
  unsetMark: () => h0,
  unsetTextDirection: () => m0,
  updateAttributes: () => g0,
  wrapIn: () => y0,
  wrapInList: () => b0
});
var qy = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), !0), Jy = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), Gy = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: i } = r;
  return n && i.forEach(({ $from: o, $to: s }) => {
    t.doc.nodesBetween(o.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: d } = e, u = c.resolve(d.map(a)), f = c.resolve(d.map(a + l.nodeSize)), p = u.blockRange(f);
      if (!p)
        return;
      const h = tr(p);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(p.start, m);
      }
      (h || h === 0) && e.lift(p, h);
    });
  }), !0;
}, Zy = (t) => (e) => t(e), Xy = () => ({ state: t, dispatch: e }) => pf(t, e), Yy = (t, e) => ({ editor: n, tr: r }) => {
  const { state: i } = n, o = i.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new B(r.doc.resolve(Math.max(s - 1, 0)))), !0;
}, Qy = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = t.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const l = i.before(o), a = i.after(o);
        t.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
};
function ge(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
var eb = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const i = ge(t, n.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const a = o.before(s), c = o.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, tb = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: i } = t;
  return n && e.delete(r, i), !0;
}, nb = () => ({ state: t, dispatch: e }) => zo(t, e), rb = () => ({ commands: t }) => t.keyboardShortcut("Enter"), ib = () => ({ state: t, dispatch: e }) => $g(t, e);
function ma(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function Ui(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => n.strict ? e[i] === t[i] : ma(e[i]) ? e[i].test(t[i]) : e[i] === t[i]) : !0;
}
function Qf(t, e, n = {}) {
  return t.find((r) => r.type === e && Ui(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((i) => [i, r.attrs[i]])),
    n
  ));
}
function Qc(t, e, n = {}) {
  return !!Qf(t, e, n);
}
function Uo(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let i = t.parent.childAfter(t.parentOffset);
  if ((!i.node || !i.node.marks.some((d) => d.type === e)) && (i = t.parent.childBefore(t.parentOffset)), !i.node || !i.node.marks.some((d) => d.type === e) || (n = n || ((r = i.node.marks[0]) == null ? void 0 : r.attrs), !Qf([...i.node.marks], e, n)))
    return;
  let s = i.index, l = t.start() + i.offset, a = s + 1, c = l + i.node.nodeSize;
  for (; s > 0 && Qc([...t.parent.child(s - 1).marks], e, n); )
    s -= 1, l -= t.parent.child(s).nodeSize;
  for (; a < t.parent.childCount && Qc([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function Nt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
var ob = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const o = Nt(t, r.schema), { doc: s, selection: l } = n, { $from: a, from: c, to: d } = l;
  if (i) {
    const u = Uo(a, o, e);
    if (u && u.from <= c && u.to >= d) {
      const f = B.create(s, u.from, u.to);
      n.setSelection(f);
    }
  }
  return !0;
}, sb = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function ga(t) {
  return t instanceof B;
}
function Mt(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function ep(t, e = null) {
  if (!e)
    return null;
  const n = $.atStart(t), r = $.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const i = n.from, o = r.to;
  return e === "all" ? B.create(t, Mt(0, i, o), Mt(t.content.size, i, o)) : B.create(t, Mt(e, i, o), Mt(e, i, o));
}
function tp() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Ko() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var lb = (t = null, e = {}) => ({ editor: n, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (Ko() || tp()) && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (o && t === null && !ga(n.state.selection))
    return s(), !0;
  const l = ep(i.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return o && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, ab = (t, e) => (n) => t.every((r, i) => e(r, { ...n, index: i })), cb = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), np = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && np(r);
  }
  return t;
};
function si(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return np(n);
}
function Pr(t, e, n) {
  if (t instanceof At || t instanceof C)
    return t;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof t == "object" && t !== null, i = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return C.fromArray(t.map((l) => e.nodeFromJSON(l)));
      const s = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), Pr("", e, n);
    }
  if (i) {
    if (n.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new zu({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? Gt.fromSchema(a).parseSlice(si(t), n.parseOptions) : Gt.fromSchema(a).parse(si(t), n.parseOptions), n.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const o = Gt.fromSchema(e);
    return n.slice ? o.parseSlice(si(t), n.parseOptions).content : o.parse(si(t), n.parseOptions);
  }
  return Pr("", e, n);
}
function db(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const i = t.steps[r];
  if (!(i instanceof we || i instanceof xe))
    return;
  const o = t.mapping.maps[r];
  let s = 0;
  o.forEach((l, a, c, d) => {
    s === 0 && (s = d);
  }), t.setSelection($.near(t.doc.resolve(s), n));
}
var ub = (t) => !("type" in t), fb = (t, e, n) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let l;
    const a = (g) => {
      o.emit("contentError", {
        editor: o,
        error: g,
        disableCollaboration: () => {
          "collaboration" in o.storage && typeof o.storage.collaboration == "object" && o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        Pr(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        a(g);
      }
    try {
      l = Pr(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (s = n.errorOnInvalidContent) != null ? s : o.options.enableContentCheck
      });
    } catch (g) {
      return a(g), !1;
    }
    let { from: d, to: u } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, p = !0;
    if ((ub(l) ? l : [l]).forEach((g) => {
      g.check(), f = f ? g.isText && g.marks.length === 0 : !1, p = p ? g.isBlock : !1;
    }), d === u && p) {
      const { parent: g } = r.doc.resolve(d);
      g.isTextblock && !g.type.spec.code && !g.childCount && (d -= 1, u += 1);
    }
    let m;
    if (f) {
      if (Array.isArray(e))
        m = e.map((g) => g.text || "").join("");
      else if (e instanceof C) {
        let g = "";
        e.forEach((y) => {
          y.text && (g += y.text);
        }), m = g;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      r.insertText(m, d, u);
    } else {
      m = l;
      const g = r.doc.resolve(d), y = g.node(), b = g.parentOffset === 0, w = y.isText || y.isTextblock, k = y.content.size > 0;
      b && w && k && (d = Math.max(0, d - 1)), r.replaceWith(d, u, m);
    }
    n.updateSelection && db(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: d, text: m }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: d, text: m });
  }
  return !0;
}, pb = () => ({ state: t, dispatch: e }) => zg(t, e), hb = () => ({ state: t, dispatch: e }) => Bg(t, e), mb = () => ({ state: t, dispatch: e }) => sf(t, e), gb = () => ({ state: t, dispatch: e }) => df(t, e), yb = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Do(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, bb = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Do(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, wb = () => ({ state: t, dispatch: e }) => _g(t, e), vb = () => ({ state: t, dispatch: e }) => Pg(t, e);
function rp() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function kb(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Ko() || rp() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var xb = (t) => ({ editor: e, view: n, tr: r, dispatch: i }) => {
  const o = kb(t).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (c) => c(n, l));
  });
  return a?.steps.forEach((c) => {
    const d = c.map(r.mapping);
    d && i && r.maybeStep(d);
  }), !0;
};
function en(t, e, n = {}) {
  const { from: r, to: i, empty: o } = t.selection, s = e ? ge(e, t.schema) : null, l = [];
  t.doc.nodesBetween(r, i, (u, f) => {
    if (u.isText)
      return;
    const p = Math.max(r, f), h = Math.min(i, f + u.nodeSize);
    l.push({
      node: u,
      from: p,
      to: h
    });
  });
  const a = i - r, c = l.filter((u) => s ? s.name === u.node.type.name : !0).filter((u) => Ui(u.node.attrs, n, { strict: !1 }));
  return o ? !!c.length : c.reduce((u, f) => u + f.to - f.from, 0) >= a;
}
var Sb = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = ge(t, n.schema);
  return en(n, i, e) ? Fg(n, r) : !1;
}, Cb = () => ({ state: t, dispatch: e }) => hf(t, e), Mb = (t) => ({ state: e, dispatch: n }) => {
  const r = ge(t, e.schema);
  return Qg(r)(e, n);
}, Ab = () => ({ state: t, dispatch: e }) => ff(t, e);
function qo(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function ed(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, i) => (n.includes(i) || (r[i] = t[i]), r), {});
}
var Tb = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = qo(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ge(t, r.schema)), l === "mark" && (s = Nt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (d, u) => {
      o && o === d.type && (a = !0, i && n.setNodeMarkup(u, void 0, ed(d.attrs, e))), s && d.marks.length && d.marks.forEach((f) => {
        s === f.type && (a = !0, i && n.addMark(u, u + d.nodeSize, s.create(ed(f.attrs, e))));
      });
    });
  }), a;
}, Eb = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), Ob = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new $e(t.doc);
    t.setSelection(n);
  }
  return !0;
}, Lb = () => ({ state: t, dispatch: e }) => af(t, e), Hb = () => ({ state: t, dispatch: e }) => uf(t, e), Vb = () => ({ state: t, dispatch: e }) => Ug(t, e), Nb = () => ({ state: t, dispatch: e }) => Jg(t, e), Rb = () => ({ state: t, dispatch: e }) => qg(t, e);
function ll(t, e, n = {}, r = {}) {
  return Pr(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var Ib = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: o, dispatch: s, commands: l }) => {
  const { doc: a } = o;
  if (r.preserveWhitespace !== "full") {
    const c = ll(t, i.schema, r, {
      errorOnInvalidContent: e ?? i.options.enableContentCheck
    });
    return s && o.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return s && o.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? i.options.enableContentCheck
  });
};
function ip(t, e) {
  const n = Nt(e, t.schema), { from: r, to: i, empty: o } = t.selection, s = [];
  o ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, i, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function op(t, e) {
  const n = new Yl(t);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      n.step(i);
    });
  }), n;
}
function Db(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function _b(t, e, n) {
  const r = [];
  return t.nodesBetween(e.from, e.to, (i, o) => {
    n(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function sp(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function Jo(t) {
  return (e) => sp(e.$from, t);
}
function z(t, e, n) {
  return t.config[e] === void 0 && t.parent ? z(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? z(t.parent, e, n) : null
  }) : t.config[e];
}
function ya(t) {
  return t.map((e) => {
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    }, r = z(e, "addExtensions", n);
    return r ? [e, ...ya(r())] : e;
  }).flat(10);
}
function ba(t, e) {
  const n = rn.fromSchema(e).serializeFragment(t), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(n), i.innerHTML;
}
function lp(t) {
  return typeof t == "function";
}
function Q(t, e = void 0, ...n) {
  return lp(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Pb(t = {}) {
  return Object.keys(t).length === 0 && t.constructor === Object;
}
function Kn(t) {
  const e = t.filter((i) => i.type === "extension"), n = t.filter((i) => i.type === "node"), r = t.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function ap(t) {
  const e = [], { nodeExtensions: n, markExtensions: r } = Kn(t), i = [...n, ...r], o = {
    default: null,
    validate: void 0,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return t.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, a = z(
      s,
      "addGlobalAttributes",
      l
    );
    if (!a)
      return;
    a().forEach((d) => {
      d.types.forEach((u) => {
        Object.entries(d.attributes).forEach(([f, p]) => {
          e.push({
            type: u,
            name: f,
            attribute: {
              ...o,
              ...p
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = z(
      s,
      "addAttributes",
      l
    );
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([d, u]) => {
      const f = {
        ...o,
        ...u
      };
      typeof f?.default == "function" && (f.default = f.default()), f?.isRequired && f?.default === void 0 && delete f.default, e.push({
        type: s.name,
        name: d,
        attribute: f
      });
    });
  }), e;
}
function te(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const l = o ? String(o).split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((d) => !a.includes(d));
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = o ? o.split(";").map((d) => d.trim()).filter(Boolean) : [], a = r[i] ? r[i].split(";").map((d) => d.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((d) => {
          const [u, f] = d.split(":").map((p) => p.trim());
          c.set(u, f);
        }), l.forEach((d) => {
          const [u, f] = d.split(":").map((p) => p.trim());
          c.set(u, f);
        }), r[i] = Array.from(c.entries()).map(([d, u]) => `${d}: ${u}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function Ki(t, e) {
  return e.filter((n) => n.type === t.type.name).filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : {
    [n.name]: t.attrs[n.name]
  }).reduce((n, r) => te(n, r), {});
}
function zb(t) {
  return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t;
}
function td(t, e) {
  return "style" in t ? t : {
    ...t,
    getAttrs: (n) => {
      const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(n) : zb(n.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function nd(t) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(t).filter(([e, n]) => e === "attrs" && Pb(n) ? !1 : n != null)
  );
}
function rd(t) {
  var e, n;
  const r = {};
  return !((e = t?.attribute) != null && e.isRequired) && "default" in (t?.attribute || {}) && (r.default = t.attribute.default), ((n = t?.attribute) == null ? void 0 : n.validate) !== void 0 && (r.validate = t.attribute.validate), [t.name, r];
}
function cp(t, e) {
  var n;
  const r = ap(t), { nodeExtensions: i, markExtensions: o } = Kn(t), s = (n = i.find((c) => z(c, "topNode"))) == null ? void 0 : n.name, l = Object.fromEntries(
    i.map((c) => {
      const d = r.filter((y) => y.type === c.name), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = t.reduce((y, b) => {
        const w = z(b, "extendNodeSchema", u);
        return {
          ...y,
          ...w ? w(c) : {}
        };
      }, {}), p = nd({
        ...f,
        content: Q(z(c, "content", u)),
        marks: Q(z(c, "marks", u)),
        group: Q(z(c, "group", u)),
        inline: Q(z(c, "inline", u)),
        atom: Q(z(c, "atom", u)),
        selectable: Q(z(c, "selectable", u)),
        draggable: Q(z(c, "draggable", u)),
        code: Q(z(c, "code", u)),
        whitespace: Q(z(c, "whitespace", u)),
        linebreakReplacement: Q(
          z(c, "linebreakReplacement", u)
        ),
        defining: Q(z(c, "defining", u)),
        isolating: Q(z(c, "isolating", u)),
        attrs: Object.fromEntries(d.map(rd))
      }), h = Q(z(c, "parseHTML", u));
      h && (p.parseDOM = h.map(
        (y) => td(y, d)
      ));
      const m = z(c, "renderHTML", u);
      m && (p.toDOM = (y) => m({
        node: y,
        HTMLAttributes: Ki(y, d)
      }));
      const g = z(c, "renderText", u);
      return g && (p.toText = g), [c.name, p];
    })
  ), a = Object.fromEntries(
    o.map((c) => {
      const d = r.filter((g) => g.type === c.name), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = t.reduce((g, y) => {
        const b = z(y, "extendMarkSchema", u);
        return {
          ...g,
          ...b ? b(c) : {}
        };
      }, {}), p = nd({
        ...f,
        inclusive: Q(z(c, "inclusive", u)),
        excludes: Q(z(c, "excludes", u)),
        group: Q(z(c, "group", u)),
        spanning: Q(z(c, "spanning", u)),
        code: Q(z(c, "code", u)),
        attrs: Object.fromEntries(d.map(rd))
      }), h = Q(z(c, "parseHTML", u));
      h && (p.parseDOM = h.map(
        (g) => td(g, d)
      ));
      const m = z(c, "renderHTML", u);
      return m && (p.toDOM = (g) => m({
        mark: g,
        HTMLAttributes: Ki(g, d)
      })), [c.name, p];
    })
  );
  return new zu({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function Bb(t) {
  const e = t.filter((n, r) => t.indexOf(n) !== r);
  return Array.from(new Set(e));
}
function wa(t) {
  return t.sort((n, r) => {
    const i = z(n, "priority") || 100, o = z(r, "priority") || 100;
    return i > o ? -1 : i < o ? 1 : 0;
  });
}
function va(t) {
  const e = wa(ya(t)), n = Bb(e.map((r) => r.name));
  return n.length && console.warn(
    `[tiptap warn]: Duplicate extension names found: [${n.map((r) => `'${r}'`).join(", ")}]. This can lead to issues.`
  ), e;
}
function Fb(t, e) {
  const n = va(t);
  return cp(n, e);
}
function dp(t, e, n) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = n || {};
  let l = "";
  return t.nodesBetween(r, i, (a, c, d, u) => {
    var f;
    a.isBlock && c > r && (l += o);
    const p = s?.[a.type.name];
    if (p)
      return d && (l += p({
        node: a,
        pos: c,
        parent: d,
        index: u,
        range: e
      })), !1;
    a.isText && (l += (f = a?.text) == null ? void 0 : f.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function up(t, e) {
  const n = {
    from: 0,
    to: t.content.size
  };
  return dp(t, n, e);
}
function ka(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function $b(t, e) {
  const n = ge(e, t.schema), { from: r, to: i } = t.selection, o = [];
  t.doc.nodesBetween(r, i, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function fp(t, e) {
  const n = qo(
    typeof e == "string" ? e : e.name,
    t.schema
  );
  return n === "node" ? $b(t, e) : n === "mark" ? ip(t, e) : {};
}
function jb(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(n, i) ? !1 : n[i] = !0;
  });
}
function Wb(t) {
  const e = jb(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, s) => s !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function pp(t) {
  const { mapping: e, steps: n } = t, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = n[o];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), d = e.slice(o).map(a), u = e.invert().map(c, -1), f = e.invert().map(d);
      r.push({
        oldRange: {
          from: u,
          to: f
        },
        newRange: {
          from: c,
          to: d
        }
      });
    });
  }), Wb(r);
}
function xa(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((i) => {
    const o = n.resolve(t), s = Uo(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : n.nodesBetween(t, e, (i, o) => {
    !i || i?.nodeSize === void 0 || r.push(
      ...i.marks.map((s) => ({
        from: o,
        to: o + i.nodeSize,
        mark: s
      }))
    );
  }), r;
}
var Ub = (t, e, n, r = 20) => {
  const i = t.doc.resolve(n);
  let o = r, s = null;
  for (; o > 0 && s === null; ) {
    const l = i.node(o);
    l?.type.name === e ? s = l : o -= 1;
  }
  return [s, o];
};
function Ms(t, e) {
  return e.nodes[t] || e.marks[t] || null;
}
function Ti(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const i = t.find((o) => o.type === e && o.name === r);
      return i ? i.attribute.keepOnSplit : !1;
    })
  );
}
var Kb = (t, e = 500) => {
  let n = "";
  const r = t.parentOffset;
  return t.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, l) => {
    var a, c;
    const d = ((c = (a = i.type.spec).toText) == null ? void 0 : c.call(a, {
      node: i,
      pos: o,
      parent: s,
      index: l
    })) || i.textContent || "%leaf%";
    n += i.isAtom && !i.isText ? d : d.slice(0, Math.max(0, r - o));
  }), n;
};
function al(t, e, n = {}) {
  const { empty: r, ranges: i } = t.selection, o = e ? Nt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((u) => o ? o.name === u.type.name : !0).find((u) => Ui(u.attrs, n, { strict: !1 }));
  let s = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: f }) => {
    const p = u.pos, h = f.pos;
    t.doc.nodesBetween(p, h, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(p, g), b = Math.min(h, g + m.nodeSize), w = b - y;
      s += w, l.push(
        ...m.marks.map((k) => ({
          mark: k,
          from: y,
          to: b
        }))
      );
    });
  }), s === 0)
    return !1;
  const a = l.filter((u) => o ? o.name === u.mark.type.name : !0).filter((u) => Ui(u.mark.attrs, n, { strict: !1 })).reduce((u, f) => u + f.to - f.from, 0), c = l.filter((u) => o ? u.mark.type !== o && u.mark.type.excludes(o) : !0).reduce((u, f) => u + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function qb(t, e, n = {}) {
  if (!e)
    return en(t, null, n) || al(t, null, n);
  const r = qo(e, t.schema);
  return r === "node" ? en(t, e, n) : r === "mark" ? al(t, e, n) : !1;
}
var Jb = (t, e) => {
  const { $from: n, $to: r, $anchor: i } = t.selection;
  if (e) {
    const o = Jo((l) => l.type.name === e)(t.selection);
    if (!o)
      return !1;
    const s = t.doc.resolve(o.pos + 1);
    return i.pos + 1 === s.end();
  }
  return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
}, Gb = (t) => {
  const { $from: e, $to: n } = t.selection;
  return !(e.parentOffset > 0 || e.pos !== n.pos);
};
function id(t, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t.name) : e;
}
function od(t, e) {
  const { nodeExtensions: n } = Kn(e), r = n.find((s) => s.name === t);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = Q(z(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Go(t, {
  checkChildren: e = !0,
  ignoreWhitespace: n = !1
} = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return /^\s*$/m.test((r = t.text) != null ? r : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return t.content.forEach((o) => {
      i !== !1 && (Go(o, { ignoreWhitespace: n, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function hp(t) {
  return t instanceof P;
}
var mp = class gp {
  constructor(e) {
    this.position = e;
  }
  /**
   * Creates a MappablePosition from a JSON object.
   */
  static fromJSON(e) {
    return new gp(e.position);
  }
  /**
   * Converts the MappablePosition to a JSON object.
   */
  toJSON() {
    return {
      position: this.position
    };
  }
};
function Zb(t, e) {
  const n = e.mapping.mapResult(t.position);
  return {
    position: new mp(n.pos),
    mapResult: n
  };
}
function Xb(t) {
  return new mp(t);
}
function yp(t, e, n) {
  const i = t.state.doc.content.size, o = Mt(e, 0, i), s = Mt(n, 0, i), l = t.coordsAtPos(o), a = t.coordsAtPos(s, -1), c = Math.min(l.top, a.top), d = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), f = Math.max(l.right, a.right), p = f - u, h = d - c, y = {
    top: c,
    bottom: d,
    left: u,
    right: f,
    width: p,
    height: h,
    x: u,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function Yb(t, e, n) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (ga(i) && (o = i.$cursor), o) {
    const l = (r = t.storedMarks) != null ? r : o.marks();
    return o.parent.type.allowsMarkType(n) && (!!n.isInSet(l) || !l.some((c) => c.type.excludes(n)));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(l.pos, a.pos, (d, u, f) => {
      if (c)
        return !1;
      if (d.isInline) {
        const p = !f || f.type.allowsMarkType(n), h = !!n.isInSet(d.marks) || !d.marks.some((m) => m.type.excludes(n));
        c = p && h;
      }
      return !c;
    }), c;
  });
}
var Qb = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: o } = n, { empty: s, ranges: l } = o, a = Nt(t, r.schema);
  if (i)
    if (s) {
      const c = ip(r, a);
      n.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const d = c.$from.pos, u = c.$to.pos;
        r.doc.nodesBetween(d, u, (f, p) => {
          const h = Math.max(p, d), m = Math.min(p + f.nodeSize, u);
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && n.addMark(
              h,
              m,
              a.create({
                ...y.attrs,
                ...e
              })
            );
          }) : n.addMark(h, m, a.create(e));
        });
      });
  return Yb(r, n, a);
}, e0 = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), t0 = (t, e = {}) => ({ state: n, dispatch: r, chain: i }) => {
  const o = ge(t, n.schema);
  let s;
  return n.selection.$anchor.sameParent(n.selection.$head) && (s = n.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: l }) => wc(o, { ...s, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => wc(o, { ...s, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, n0 = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, i = Mt(t, 0, r.content.size), o = P.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, r0 = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: o } = r;
  let s, l;
  return typeof e == "number" ? (s = e, l = e) : e && "from" in e && "to" in e ? (s = e.from, l = e.to) : (s = o.from, l = o.to), i && n.doc.nodesBetween(s, l, (a, c) => {
    a.isText || n.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: t
    });
  }), !0;
}, i0 = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: i, to: o } = typeof t == "number" ? { from: t, to: t } : t, s = B.atStart(r).from, l = B.atEnd(r).to, a = Mt(i, s, l), c = Mt(o, s, l), d = B.create(r, a, c);
    e.setSelection(d);
  }
  return !0;
}, o0 = (t) => ({ state: e, dispatch: n }) => {
  const r = ge(t, e.schema);
  return n1(r)(e, n);
};
function sd(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((i) => e?.includes(i.type.name));
    t.tr.ensureMarks(r);
  }
}
var s0 = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = i.extensionManager.attributes, d = Ti(c, l.node().type.name, l.node().attrs);
  if (o instanceof P && o.node.isBlock)
    return !l.parentOffset || !Tt(s, l.pos) ? !1 : (r && (t && sd(n, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const u = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : Db(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let p = u && f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0, h = Tt(e.doc, e.mapping.map(l.pos), 1, p);
  if (!p && !h && Tt(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (h = !0, p = f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0), r) {
    if (h && (o instanceof B && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, p), f && !u && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && sd(n, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return h;
}, l0 = (t, e = {}) => ({ tr: n, state: r, dispatch: i, editor: o }) => {
  var s;
  const l = ge(t, r.schema), { $from: a, $to: c } = r.selection, d = r.selection.node;
  if (d && d.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const u = a.node(-1);
  if (u.type !== l)
    return !1;
  const f = o.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = C.empty;
      const b = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let A = a.depth - b; A >= a.depth - 3; A -= 1)
        y = C.from(a.node(A).copy(y));
      const w = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), k = {
        ...Ti(f, a.node().type.name, a.node().attrs),
        ...e
      }, v = ((s = l.contentMatch.defaultType) == null ? void 0 : s.createAndFill(k)) || void 0;
      y = y.append(C.from(l.createAndFill(null, v) || void 0));
      const x = a.before(a.depth - (b - 1));
      n.replace(x, a.after(-w), new O(y, 4 - b, 0));
      let S = -1;
      n.doc.nodesBetween(x, n.doc.content.size, (A, V) => {
        if (S > -1)
          return !1;
        A.isTextblock && A.content.size === 0 && (S = V + 1);
      }), S > -1 && n.setSelection(B.near(n.doc.resolve(S))), n.scrollIntoView();
    }
    return !0;
  }
  const p = c.pos === a.end() ? u.contentMatchAt(0).defaultType : null, h = {
    ...Ti(f, u.type.name, u.attrs),
    ...e
  }, m = {
    ...Ti(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const g = p ? [
    { type: l, attrs: h },
    { type: p, attrs: m }
  ] : [{ type: l, attrs: h }];
  if (!Tt(n.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: b } = r, { splittableMarks: w } = o.extensionManager, k = b || y.$to.parentOffset && y.$from.marks();
    if (n.split(a.pos, 2, g).scrollIntoView(), !k || !i)
      return !0;
    const v = k.filter((x) => w.includes(x.type.name));
    n.ensureMarks(v);
  }
  return !0;
}, As = (t, e) => {
  const n = Jo((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === i?.type && on(t.doc, n.pos) && t.join(n.pos), !0;
}, Ts = (t, e) => {
  const n = Jo((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === i?.type && on(t.doc, r) && t.join(r), !0;
}, a0 = (t, e, n, r = {}) => ({ editor: i, tr: o, state: s, dispatch: l, chain: a, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: f } = i.extensionManager, p = ge(t, s.schema), h = ge(e, s.schema), { selection: m, storedMarks: g } = s, { $from: y, $to: b } = m, w = y.blockRange(b), k = g || m.$to.parentOffset && m.$from.marks();
  if (!w)
    return !1;
  const v = Jo((x) => od(x.type.name, u))(m);
  if (w.depth >= 1 && v && w.depth - v.depth <= 1) {
    if (v.node.type === p)
      return c.liftListItem(h);
    if (od(v.node.type.name, u) && p.validContent(v.node.content) && l)
      return a().command(() => (o.setNodeMarkup(v.pos, p), !0)).command(() => As(o, p)).command(() => Ts(o, p)).run();
  }
  return !n || !k || !l ? a().command(() => d().wrapInList(p, r) ? !0 : c.clearNodes()).wrapInList(p, r).command(() => As(o, p)).command(() => Ts(o, p)).run() : a().command(() => {
    const x = d().wrapInList(p, r), S = k.filter((A) => f.includes(A.type.name));
    return o.ensureMarks(S), x ? !0 : c.clearNodes();
  }).wrapInList(p, r).command(() => As(o, p)).command(() => Ts(o, p)).run();
}, c0 = (t, e = {}, n = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = n, s = Nt(t, r.schema);
  return al(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, d0 = (t, e, n = {}) => ({ state: r, commands: i }) => {
  const o = ge(t, r.schema), s = ge(e, r.schema), l = en(r, o, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(s, a) : i.setNode(o, { ...a, ...n });
}, u0 = (t, e = {}) => ({ state: n, commands: r }) => {
  const i = ge(t, n.schema);
  return en(n, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, f0 = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(t))) {
      if (e) {
        const s = t.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, t.schema.text(o.text, a));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, p0 = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: i } = n;
  return r || e && i.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, h0 = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = n, a = Nt(t, r.schema), { $from: c, empty: d, ranges: u } = l;
  if (!i)
    return !0;
  if (d && s) {
    let { from: f, to: p } = l;
    const h = (o = c.marks().find((g) => g.type === a)) == null ? void 0 : o.attrs, m = Uo(c, a, h);
    m && (f = m.from, p = m.to), n.removeMark(f, p, a);
  } else
    u.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, m0 = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const { selection: i } = n;
  let o, s;
  return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = i.from, s = i.to), r && e.doc.nodesBetween(o, s, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, g0 = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = qo(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  if (!l)
    return !1;
  l === "node" && (o = ge(t, r.schema)), l === "mark" && (s = Nt(t, r.schema));
  let a = !1;
  return n.selection.ranges.forEach((c) => {
    const d = c.$from.pos, u = c.$to.pos;
    let f, p, h, m;
    n.selection.empty ? r.doc.nodesBetween(d, u, (g, y) => {
      o && o === g.type && (a = !0, h = Math.max(y, d), m = Math.min(y + g.nodeSize, u), f = y, p = g);
    }) : r.doc.nodesBetween(d, u, (g, y) => {
      y < d && o && o === g.type && (a = !0, h = Math.max(y, d), m = Math.min(y + g.nodeSize, u), f = y, p = g), y >= d && y <= u && (o && o === g.type && (a = !0, i && n.setNodeMarkup(y, void 0, {
        ...g.attrs,
        ...e
      })), s && g.marks.length && g.marks.forEach((b) => {
        if (s === b.type && (a = !0, i)) {
          const w = Math.max(y, d), k = Math.min(y + g.nodeSize, u);
          n.addMark(
            w,
            k,
            s.create({
              ...b.attrs,
              ...e
            })
          );
        }
      }));
    }), p && (f !== void 0 && i && n.setNodeMarkup(f, void 0, {
      ...p.attrs,
      ...e
    }), s && p.marks.length && p.marks.forEach((g) => {
      s === g.type && i && n.addMark(
        h,
        m,
        s.create({
          ...g.attrs,
          ...e
        })
      );
    }));
  }), a;
}, y0 = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = ge(t, n.schema);
  return Gg(i, e)(n, r);
}, b0 = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = ge(t, n.schema);
  return Zg(i, e)(n, r);
}, w0 = class {
  constructor() {
    this.callbacks = {};
  }
  on(t, e) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this;
  }
  emit(t, ...e) {
    const n = this.callbacks[t];
    return n && n.forEach((r) => r.apply(this, e)), this;
  }
  off(t, e) {
    const n = this.callbacks[t];
    return n && (e ? this.callbacks[t] = n.filter((r) => r !== e) : delete this.callbacks[t]), this;
  }
  once(t, e) {
    const n = (...r) => {
      this.off(t, n), e.apply(this, r);
    };
    return this.on(t, n);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}, Zo = class {
  constructor(t) {
    var e;
    this.find = t.find, this.handler = t.handler, this.undoable = (e = t.undoable) != null ? e : !0;
  }
}, v0 = (t, e) => {
  if (ma(e))
    return e.exec(t);
  const n = e(t);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function li(t) {
  var e;
  const { editor: n, from: r, to: i, text: o, rules: s, plugin: l } = t, { view: a } = n;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || (e = c.nodeBefore || c.nodeAfter) != null && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let d = !1;
  const u = Kb(c) + o;
  return s.forEach((f) => {
    if (d)
      return;
    const p = v0(u, f.find);
    if (!p)
      return;
    const h = a.state.tr, m = jo({
      state: a.state,
      transaction: h
    }), g = {
      from: r - (p[0].length - o.length),
      to: i
    }, { commands: y, chain: b, can: w } = new Wo({
      editor: n,
      state: m
    });
    f.handler({
      state: m,
      range: g,
      match: p,
      commands: y,
      chain: b,
      can: w
    }) === null || !h.steps.length || (f.undoable && h.setMeta(l, {
      transform: h,
      from: r,
      to: i,
      text: o
    }), a.dispatch(h), d = !0);
  }), d;
}
function k0(t) {
  const { editor: e, rules: n } = t, r = new ne({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return a && setTimeout(() => {
          let { text: d } = a;
          typeof d == "string" ? d = d : d = ba(C.from(d), s.schema);
          const { from: u } = a, f = u + d.length;
          li({
            editor: e,
            from: u,
            to: f,
            text: d,
            rules: n,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, l) {
        return li({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && li({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? li({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function x0(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function ai(t) {
  return x0(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function bp(t, e) {
  const n = { ...t };
  return ai(t) && ai(e) && Object.keys(e).forEach((r) => {
    ai(e[r]) && ai(t[r]) ? n[r] = bp(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var Sa = class {
  constructor(t = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...Q(
        z(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...Q(
        z(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => bp(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, rt = class wp extends Sa {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new wp(n);
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => c?.type.name === n.name))
        return !1;
      const a = s.find((c) => c?.type.name === n.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
};
function S0(t) {
  return typeof t == "number";
}
var C0 = class {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}, M0 = (t, e, n) => {
  if (ma(e))
    return [...t.matchAll(e)];
  const r = e(t, n);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = t, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function A0(t) {
  const { editor: e, state: n, from: r, to: i, rule: o, pasteEvent: s, dropEvent: l } = t, { commands: a, chain: c, can: d } = new Wo({
    editor: e,
    state: n
  }), u = [];
  return n.doc.nodesBetween(r, i, (p, h) => {
    var m, g, y, b, w;
    if ((g = (m = p.type) == null ? void 0 : m.spec) != null && g.code || !(p.isText || p.isTextblock || p.isInline))
      return;
    const k = (w = (b = (y = p.content) == null ? void 0 : y.size) != null ? b : p.nodeSize) != null ? w : 0, v = Math.max(r, h), x = Math.min(i, h + k);
    if (v >= x)
      return;
    const S = p.isText ? p.text || "" : p.textBetween(v - h, x - h, void 0, "￼");
    M0(S, o.find, s).forEach((V) => {
      if (V.index === void 0)
        return;
      const R = v + V.index + 1, I = R + V[0].length, j = {
        from: n.tr.mapping.map(R),
        to: n.tr.mapping.map(I)
      }, Z = o.handler({
        state: n,
        range: j,
        match: V,
        commands: a,
        chain: c,
        can: d,
        pasteEvent: s,
        dropEvent: l
      });
      u.push(Z);
    });
  }), u.every((p) => p !== null);
}
var ci = null, T0 = (t) => {
  var e;
  const n = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = n.clipboardData) == null || e.setData("text/html", t), n;
};
function E0(t) {
  const { editor: e, rules: n } = t;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({
    state: d,
    from: u,
    to: f,
    rule: p,
    pasteEvt: h
  }) => {
    const m = d.tr, g = jo({
      state: d,
      transaction: m
    });
    if (!(!A0({
      editor: e,
      state: g,
      from: Math.max(u - 1, 0),
      to: f.b - 1,
      rule: p,
      pasteEvent: h,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return n.map((d) => new ne({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const f = (h) => {
        var m;
        r = (m = u.dom.parentElement) != null && m.contains(h.target) ? u.dom.parentElement : null, r && (ci = e);
      }, p = () => {
        ci && (ci = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", p), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", p);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, f) => {
          if (o = r === u.dom.parentElement, l = f, !o) {
            const p = ci;
            p?.isEditable && setTimeout(() => {
              const h = p.state.selection;
              h && p.commands.deleteRange({ from: h.from, to: h.to });
            }, 10);
          }
          return !1;
        },
        paste: (u, f) => {
          var p;
          const h = (p = f.clipboardData) == null ? void 0 : p.getData("text/html");
          return s = f, i = !!h?.includes("data-pm-slice"), !1;
        }
      }
    },
    appendTransaction: (u, f, p) => {
      const h = u[0], m = h.getMeta("uiEvent") === "paste" && !i, g = h.getMeta("uiEvent") === "drop" && !o, y = h.getMeta("applyPasteRules"), b = !!y;
      if (!m && !g && !b)
        return;
      if (b) {
        let { text: v } = y;
        typeof v == "string" ? v = v : v = ba(C.from(v), p.schema);
        const { from: x } = y, S = x + v.length, A = T0(v);
        return a({
          rule: d,
          state: p,
          from: x,
          to: { b: S },
          pasteEvt: A
        });
      }
      const w = f.doc.content.findDiffStart(p.doc.content), k = f.doc.content.findDiffEnd(p.doc.content);
      if (!(!S0(w) || !k || w === k.b))
        return a({
          rule: d,
          state: p,
          from: w,
          to: k,
          pasteEvt: s
        });
    }
  }));
}
var Xo = class {
  constructor(t, e) {
    this.splittableMarks = [], this.editor = e, this.baseExtensions = t, this.extensions = va(t), this.schema = cp(this.extensions, e), this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((t, e) => {
      const n = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Ms(e.name, this.schema)
      }, r = z(e, "addCommands", n);
      return r ? {
        ...t,
        ...r()
      } : t;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: t } = this;
    return wa([...this.extensions].reverse()).flatMap((r) => {
      const i = {
        name: r.name,
        options: r.options,
        storage: this.editor.extensionStorage[r.name],
        editor: t,
        type: Ms(r.name, this.schema)
      }, o = [], s = z(
        r,
        "addKeyboardShortcuts",
        i
      );
      let l = {};
      if (r.type === "mark" && z(r, "exitable", i) && (l.ArrowRight = () => rt.handleExit({ editor: t, mark: r })), s) {
        const f = Object.fromEntries(
          Object.entries(s()).map(([p, h]) => [p, () => h({ editor: t })])
        );
        l = { ...l, ...f };
      }
      const a = Uy(l);
      o.push(a);
      const c = z(r, "addInputRules", i);
      if (id(r, t.options.enableInputRules) && c) {
        const f = c();
        if (f && f.length) {
          const p = k0({
            editor: t,
            rules: f
          }), h = Array.isArray(p) ? p : [p];
          o.push(...h);
        }
      }
      const d = z(r, "addPasteRules", i);
      if (id(r, t.options.enablePasteRules) && d) {
        const f = d();
        if (f && f.length) {
          const p = E0({ editor: t, rules: f });
          o.push(...p);
        }
      }
      const u = z(
        r,
        "addProseMirrorPlugins",
        i
      );
      if (u) {
        const f = u();
        o.push(...f);
      }
      return o;
    });
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return ap(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: t } = this, { nodeExtensions: e } = Kn(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!z(n, "addNodeView")).map((n) => {
        const r = this.attributes.filter((a) => a.type === n.name), i = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t,
          type: ge(n.name, this.schema)
        }, o = z(n, "addNodeView", i);
        if (!o)
          return [];
        const s = o();
        if (!s)
          return [];
        const l = (a, c, d, u, f) => {
          const p = Ki(a, r);
          return s({
            // pass-through
            node: a,
            view: c,
            getPos: d,
            decorations: u,
            innerDecorations: f,
            // tiptap-specific
            editor: t,
            extension: n,
            HTMLAttributes: p
          });
        };
        return [n.name, l];
      })
    );
  }
  get markViews() {
    const { editor: t } = this, { markExtensions: e } = Kn(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!z(n, "addMarkView")).map((n) => {
        const r = this.attributes.filter((l) => l.type === n.name), i = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t,
          type: Nt(n.name, this.schema)
        }, o = z(n, "addMarkView", i);
        if (!o)
          return [];
        const s = (l, a, c) => {
          const d = Ki(l, r);
          return o()({
            // pass-through
            mark: l,
            view: a,
            inline: c,
            // tiptap-specific
            editor: t,
            extension: n,
            HTMLAttributes: d,
            updateAttributes: (u) => {
              j0(l, t, u);
            }
          });
        };
        return [n.name, s];
      })
    );
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const t = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      t.map((e) => [e.name, e.storage])
    ), t.forEach((e) => {
      var n;
      const r = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Ms(e.name, this.schema)
      };
      e.type === "mark" && ((n = Q(z(e, "keepOnSplit", r))) == null || n) && this.splittableMarks.push(e.name);
      const i = z(e, "onBeforeCreate", r), o = z(e, "onCreate", r), s = z(e, "onUpdate", r), l = z(
        e,
        "onSelectionUpdate",
        r
      ), a = z(e, "onTransaction", r), c = z(e, "onFocus", r), d = z(e, "onBlur", r), u = z(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), d && this.editor.on("blur", d), u && this.editor.on("destroy", u);
    });
  }
};
Xo.resolve = va;
Xo.sort = wa;
Xo.flatten = ya;
var O0 = {};
ha(O0, {
  ClipboardTextSerializer: () => kp,
  Commands: () => xp,
  Delete: () => Sp,
  Drop: () => Cp,
  Editable: () => Mp,
  FocusEvents: () => Tp,
  Keymap: () => Ep,
  Paste: () => Op,
  Tabindex: () => Lp,
  TextDirection: () => Hp,
  focusEventsPluginKey: () => Ap
});
var Y = class vp extends Sa {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new vp(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, kp = Y.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((d) => d.$from.pos)), l = Math.max(...o.map((d) => d.$to.pos)), a = ka(n);
            return dp(r, { from: s, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), xp = Y.create({
  name: "commands",
  addCommands() {
    return {
      ...Yf
    };
  }
}), Sp = Y.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, i;
    const o = () => {
      var s, l, a, c;
      if ((c = (a = (l = (s = this.editor.options.coreExtensionOptions) == null ? void 0 : s.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const d = op(t.before, [t, ...e]);
      pp(d).forEach((p) => {
        d.mapping.mapResult(p.oldRange.from).deletedAfter && d.mapping.mapResult(p.oldRange.to).deletedBefore && d.before.nodesBetween(p.oldRange.from, p.oldRange.to, (h, m) => {
          const g = m + h.nodeSize - 2, y = p.oldRange.from <= m && g <= p.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: h,
            from: m,
            to: g,
            newFrom: d.mapping.map(m),
            newTo: d.mapping.map(g),
            deletedRange: p.oldRange,
            newRange: p.newRange,
            partial: !y,
            editor: this.editor,
            transaction: t,
            combinedTransform: d
          });
        });
      });
      const f = d.mapping;
      d.steps.forEach((p, h) => {
        var m, g;
        if (p instanceof Qe) {
          const y = f.slice(h).map(p.from, -1), b = f.slice(h).map(p.to), w = f.invert().map(y, -1), k = f.invert().map(b), v = (m = d.doc.nodeAt(y - 1)) == null ? void 0 : m.marks.some((S) => S.eq(p.mark)), x = (g = d.doc.nodeAt(b)) == null ? void 0 : g.marks.some((S) => S.eq(p.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: p.mark,
            from: p.from,
            to: p.to,
            deletedRange: {
              from: w,
              to: k
            },
            newRange: {
              from: y,
              to: b
            },
            partial: !!(x || v),
            editor: this.editor,
            transaction: t,
            combinedTransform: d
          });
        }
      });
    };
    (i = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || i ? setTimeout(o, 0) : o();
  }
}), Cp = Y.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("tiptapDrop"),
        props: {
          handleDrop: (t, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
}), Mp = Y.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Ap = new ce("focusEvents"), Tp = Y.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new ne({
        key: Ap,
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Ep = Y.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: d, $anchor: u } = a, { pos: f, parent: p } = u, h = u.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : u, m = h.parent.type.spec.isolating, g = u.pos - u.parentOffset, y = m && h.parent.childCount === 1 ? g === u.pos : $.atStart(c).from === f;
        return !d || !p.type.isTextblock || p.textContent.length || !y || y && u.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ko() || rp() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ne({
        key: new ce("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((m) => m.getMeta("composition")))
            return;
          const r = t.some((m) => m.docChanged) && !e.doc.eq(n.doc), i = t.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: o, from: s, to: l } = e.selection, a = $.atStart(e.doc).from, c = $.atEnd(e.doc).to;
          if (o || !(s === a && l === c) || !Go(n.doc))
            return;
          const f = n.tr, p = jo({
            state: n,
            transaction: f
          }), { commands: h } = new Wo({
            editor: this.editor,
            state: p
          });
          if (h.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Op = Y.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("tiptapPaste"),
        props: {
          handlePaste: (t, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n
            });
          }
        }
      })
    ];
  }
}), Lp = Y.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), Hp = Y.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: t } = Kn(this.extensions);
    return [
      {
        types: t.filter((e) => e.name !== "text").map((e) => e.name),
        attributes: {
          dir: {
            default: this.options.direction,
            parseHTML: (e) => {
              const n = e.getAttribute("dir");
              return n && (n === "ltr" || n === "rtl" || n === "auto") ? n : this.options.direction;
            },
            renderHTML: (e) => e.dir ? {
              dir: e.dir
            } : {}
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("textDirection"),
        props: {
          attributes: () => {
            const t = this.options.direction;
            return t ? {
              dir: t
            } : {};
          }
        }
      })
    ];
  }
}), L0 = class Nn {
  constructor(e, n, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = n, this.currentNode = i;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) != null ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let n = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      n = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: n, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(e);
    return new Nn(n, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Nn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Nn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((n, r) => {
      const i = n.isBlock && !n.isTextblock, o = n.isAtom && !n.isText, s = this.pos + r + (o ? 0 : 1);
      if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(s);
      if (!i && l.depth <= this.depth)
        return;
      const a = new Nn(l, this.editor, i, i ? n : null);
      i && (a.actualDepth = this.depth + 1), e.push(new Nn(l, this.editor, i, i ? n : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, n = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(n).length > 0) {
          const o = i.node.attrs, s = Object.keys(n);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (o[a] !== n[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, n = {}) {
    return this.querySelectorAll(e, n, !0)[0] || null;
  }
  querySelectorAll(e, n = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(n);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((a) => n[a] === s.node.attrs[a]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, n, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: n } = this.editor.state;
    n.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(n);
  }
}, H0 = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function V0(t, e, n) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(i), i;
}
var N0 = class extends w0 {
  constructor(e = {}) {
    super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
      element: typeof document < "u" ? document.createElement("div") : null,
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      textDirection: void 0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: i }) => {
        throw i;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
      getUpdatedPosition: Zb,
      createMappablePosition: Xb
    }, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: i, slice: o, moved: s }) => this.options.onDrop(i, o, s)), this.on("paste", ({ event: i, slice: o }) => this.options.onPaste(i, o)), this.on("delete", this.options.onDelete);
    const n = this.createDoc(), r = ep(n, this.options.autofocus);
    this.editorState = In.create({
      doc: n,
      schema: this.schema,
      selection: r || void 0
    }), this.options.element && this.mount(this.options.element);
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(e) {
    if (typeof document > "u")
      throw new Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
      );
    this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
      this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      const e = this.editorView.dom;
      e?.editor && delete e.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length)
      try {
        typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
      } catch (e) {
        console.warn("Failed to remove CSS element:", e);
      }
    this.css = null, this.emit("unmount", { editor: this });
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && typeof document < "u" && (this.css = V0(H0, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, n = !0) {
    this.setOptions({ editable: e }), n && this.emit("update", { editor: this, transaction: this.state.tr, appendedTransactions: [] });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get view() {
    return this.editorView ? this.editorView : new Proxy(
      {
        state: this.editorState,
        updateState: (e) => {
          this.editorState = e;
        },
        dispatch: (e) => {
          this.dispatchTransaction(e);
        },
        // Stub some commonly accessed properties to prevent errors
        composing: !1,
        dragging: null,
        editable: !0,
        isDestroyed: !1
      },
      {
        get: (e, n) => {
          if (this.editorView)
            return this.editorView[n];
          if (n === "state")
            return this.editorState;
          if (n in e)
            return Reflect.get(e, n);
          throw new Error(
            `[tiptap error]: The editor view is not available. Cannot access view['${n}']. The editor may not be mounted yet.`
          );
        }
      }
    );
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.editorView && (this.editorState = this.view.state), this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, n) {
    const r = lp(n) ? n(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const n = this.state.plugins;
    let r = n;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      r = r.filter((l) => !l.key.startsWith(s));
    }), n.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, n;
    const i = [...this.options.enableCoreExtensions ? [
      Mp,
      kp.configure({
        blockSeparator: (n = (e = this.options.coreExtensionOptions) == null ? void 0 : e.clipboardTextSerializer) == null ? void 0 : n.blockSeparator
      }),
      xp,
      Tp,
      Ep,
      Lp,
      Cp,
      Op,
      Sp,
      Hp.configure({
        direction: this.options.textDirection
      })
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o?.type));
    this.extensionManager = new Xo(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Wo({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
  createDoc() {
    let e;
    try {
      e = ll(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (n) {
      if (!(n instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(n.message))
        throw n;
      this.emit("contentError", {
        editor: this,
        error: n,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((r) => r.name !== "collaboration"), this.createExtensionManager();
        }
      }), e = ll(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: !1
      });
    }
    return e;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(e) {
    var n;
    this.editorView = new Xf(e, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(n = this.options.editorProps) == null ? void 0 : n.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.prependClass(), this.injectCSS();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `${this.className} ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const n = this.capturedTransaction;
    return this.capturedTransaction = null, n;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((d) => {
        var u;
        return (u = this.capturedTransaction) == null ? void 0 : u.step(d);
      });
      return;
    }
    const { state: n, transactions: r } = this.state.applyTransaction(e), i = !this.state.selection.eq(n.selection), o = r.includes(e), s = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: n
    }), !o)
      return;
    this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    }), i && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const l = r.findLast((d) => d.getMeta("focus") || d.getMeta("blur")), a = l?.getMeta("focus"), c = l?.getMeta("blur");
    a && this.emit("focus", {
      editor: this,
      event: a.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: l
    }), c && this.emit("blur", {
      editor: this,
      event: c.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: l
    }), !(e.getMeta("preventUpdate") || !r.some((d) => d.docChanged) || s.doc.eq(n.doc)) && this.emit("update", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return fp(this.state, e);
  }
  isActive(e, n) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? n : e;
    return qb(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return ba(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: n = `

`, textSerializers: r = {} } = e || {};
    return up(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...ka(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Go(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.unmount(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e, n;
    return (n = (e = this.editorView) == null ? void 0 : e.isDestroyed) != null ? n : !0;
  }
  $node(e, n) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelector(e, n)) || null;
  }
  $nodes(e, n) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelectorAll(e, n)) || null;
  }
  $pos(e) {
    const n = this.state.doc.resolve(e);
    return new L0(n, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function Sn(t) {
  return new Zo({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = Q(t.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      if (s) {
        const a = l.search(/\S/), c = n.from + l.indexOf(s), d = c + s.length;
        if (xa(n.from, n.to, e.doc).filter((p) => p.mark.type.excluded.find((m) => m === t.type && m !== p.mark.type)).filter((p) => p.to > c).length)
          return null;
        d < n.to && o.delete(d, n.to), c > n.from && o.delete(n.from + a, c);
        const f = n.from + a + s.length;
        o.addMark(n.from + a, f, t.type.create(i || {})), o.removeStoredMark(t.type);
      }
    },
    undoable: t.undoable
  });
}
function Vp(t) {
  return new Zo({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = Q(t.getAttributes, void 0, r) || {}, { tr: o } = e, s = n.from;
      let l = n.to;
      const a = t.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let d = s + c;
        d > l ? d = l : l = d + r[1].length;
        const u = r[0][r[0].length - 1];
        o.insertText(u, s + r[0].length - 1), o.replaceWith(d, l, a);
      } else if (r[0]) {
        const c = t.type.isInline ? s : s - 1;
        o.insert(c, t.type.create(i)).delete(o.mapping.map(s), o.mapping.map(l));
      }
      o.scrollIntoView();
    },
    undoable: t.undoable
  });
}
function cl(t) {
  return new Zo({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = e.doc.resolve(n.from), o = Q(t.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), t.type))
        return null;
      e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, o);
    },
    undoable: t.undoable
  });
}
function qn(t) {
  return new Zo({
    find: t.find,
    handler: ({ state: e, range: n, match: r, chain: i }) => {
      const o = Q(t.getAttributes, void 0, r) || {}, s = e.tr.delete(n.from, n.to), a = s.doc.resolve(n.from).blockRange(), c = a && Xl(a, t.type, o);
      if (!c)
        return null;
      if (s.wrap(a, c), t.keepMarks && t.editor) {
        const { selection: u, storedMarks: f } = e, { splittableMarks: p } = t.editor.extensionManager, h = f || u.$to.parentOffset && u.$from.marks();
        if (h) {
          const m = h.filter((g) => p.includes(g.type.name));
          s.ensureMarks(m);
        }
      }
      if (t.keepAttributes) {
        const u = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(u, o).run();
      }
      const d = s.doc.resolve(n.from - 1).nodeBefore;
      d && d.type === t.type && on(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, d)) && s.join(n.from - 1);
    },
    undoable: t.undoable
  });
}
var R0 = (t) => "touches" in t, I0 = class {
  /**
   * Creates a new ResizableNodeView instance.
   *
   * The constructor sets up the resize handles, applies initial sizing from
   * node attributes, and configures all resize behavior options.
   *
   * @param options - Configuration options for the resizable node view
   */
  constructor(t) {
    this.directions = ["bottom-left", "bottom-right", "top-left", "top-right"], this.minSize = {
      height: 8,
      width: 8
    }, this.preserveAspectRatio = !1, this.classNames = {
      container: "",
      wrapper: "",
      handle: "",
      resizing: ""
    }, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.lastEditableState = void 0, this.handleMap = /* @__PURE__ */ new Map(), this.handleMouseMove = (l) => {
      if (!this.isResizing || !this.activeHandle)
        return;
      const a = l.clientX - this.startX, c = l.clientY - this.startY;
      this.handleResize(a, c);
    }, this.handleTouchMove = (l) => {
      if (!this.isResizing || !this.activeHandle)
        return;
      const a = l.touches[0];
      if (!a)
        return;
      const c = a.clientX - this.startX, d = a.clientY - this.startY;
      this.handleResize(c, d);
    }, this.handleMouseUp = () => {
      if (!this.isResizing)
        return;
      const l = this.element.offsetWidth, a = this.element.offsetHeight;
      this.onCommit(l, a), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
    }, this.handleKeyDown = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !0);
    }, this.handleKeyUp = (l) => {
      l.key === "Shift" && (this.isShiftKeyPressed = !1);
    };
    var e, n, r, i, o, s;
    this.node = t.node, this.editor = t.editor, this.element = t.element, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, (e = t.options) != null && e.min && (this.minSize = {
      ...this.minSize,
      ...t.options.min
    }), (n = t.options) != null && n.max && (this.maxSize = t.options.max), (r = t?.options) != null && r.directions && (this.directions = t.options.directions), (i = t.options) != null && i.preserveAspectRatio && (this.preserveAspectRatio = t.options.preserveAspectRatio), (o = t.options) != null && o.className && (this.classNames = {
      container: t.options.className.container || "",
      wrapper: t.options.className.wrapper || "",
      handle: t.options.className.handle || "",
      resizing: t.options.className.resizing || ""
    }), (s = t.options) != null && s.createCustomHandle && (this.createCustomHandle = t.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate.bind(this));
  }
  /**
   * Returns the top-level DOM node that should be placed in the editor.
   *
   * This is required by the ProseMirror NodeView interface. The container
   * includes the wrapper, handles, and the actual content element.
   *
   * @returns The container element to be inserted into the editor
   */
  get dom() {
    return this.container;
  }
  get contentDOM() {
    return this.contentElement;
  }
  handleEditorUpdate() {
    const t = this.editor.isEditable;
    t !== this.lastEditableState && (this.lastEditableState = t, t ? t && this.handleMap.size === 0 && this.attachHandles() : this.removeHandles());
  }
  /**
   * Called when the node's content or attributes change.
   *
   * Updates the internal node reference. If a custom `onUpdate` callback
   * was provided, it will be called to handle additional update logic.
   *
   * @param node - The new/updated node
   * @param decorations - Node decorations
   * @param innerDecorations - Inner decorations
   * @returns `false` if the node type has changed (requires full rebuild), otherwise the result of `onUpdate` or `true`
   */
  update(t, e, n) {
    return t.type !== this.node.type ? !1 : (this.node = t, this.onUpdate ? this.onUpdate(t, e, n) : !0);
  }
  /**
   * Cleanup method called when the node view is being removed.
   *
   * Removes all event listeners to prevent memory leaks. This is required
   * by the ProseMirror NodeView interface. If a resize is active when
   * destroy is called, it will be properly cancelled.
   */
  destroy() {
    this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.editor.off("update", this.handleEditorUpdate.bind(this)), this.container.remove();
  }
  /**
   * Creates the outer container element.
   *
   * The container is the top-level element returned by the NodeView and
   * wraps the entire resizable node. It's set up with flexbox to handle
   * alignment and includes data attributes for styling and identification.
   *
   * @returns The container element
   */
  createContainer() {
    const t = document.createElement("div");
    return t.dataset.resizeContainer = "", t.dataset.node = this.node.type.name, t.style.display = "flex", this.classNames.container && (t.className = this.classNames.container), t.appendChild(this.wrapper), t;
  }
  /**
   * Creates the wrapper element that contains the content and handles.
   *
   * The wrapper uses relative positioning so that resize handles can be
   * positioned absolutely within it. This is the direct parent of the
   * content element being made resizable.
   *
   * @returns The wrapper element
   */
  createWrapper() {
    const t = document.createElement("div");
    return t.style.position = "relative", t.style.display = "block", t.dataset.resizeWrapper = "", this.classNames.wrapper && (t.className = this.classNames.wrapper), t.appendChild(this.element), t;
  }
  /**
   * Creates a resize handle element for a specific direction.
   *
   * Each handle is absolutely positioned and includes a data attribute
   * identifying its direction for styling purposes.
   *
   * @param direction - The resize direction for this handle
   * @returns The handle element
   */
  createHandle(t) {
    const e = document.createElement("div");
    return e.dataset.resizeHandle = t, e.style.position = "absolute", this.classNames.handle && (e.className = this.classNames.handle), e;
  }
  /**
   * Positions a handle element according to its direction.
   *
   * Corner handles (e.g., 'top-left') are positioned at the intersection
   * of two edges. Edge handles (e.g., 'top') span the full width or height.
   *
   * @param handle - The handle element to position
   * @param direction - The direction determining the position
   */
  positionHandle(t, e) {
    const n = e.includes("top"), r = e.includes("bottom"), i = e.includes("left"), o = e.includes("right");
    n && (t.style.top = "0"), r && (t.style.bottom = "0"), i && (t.style.left = "0"), o && (t.style.right = "0"), (e === "top" || e === "bottom") && (t.style.left = "0", t.style.right = "0"), (e === "left" || e === "right") && (t.style.top = "0", t.style.bottom = "0");
  }
  /**
   * Creates and attaches all resize handles to the wrapper.
   *
   * Iterates through the configured directions, creates a handle for each,
   * positions it, attaches the mousedown listener, and appends it to the DOM.
   */
  attachHandles() {
    this.directions.forEach((t) => {
      let e;
      this.createCustomHandle ? e = this.createCustomHandle(t) : e = this.createHandle(t), e instanceof HTMLElement || (console.warn(
        `[ResizableNodeView] createCustomHandle("${t}") did not return an HTMLElement. Falling back to default handle.`
      ), e = this.createHandle(t)), this.createCustomHandle || this.positionHandle(e, t), e.addEventListener("mousedown", (n) => this.handleResizeStart(n, t)), e.addEventListener("touchstart", (n) => this.handleResizeStart(n, t)), this.handleMap.set(t, e), this.wrapper.appendChild(e);
    });
  }
  /**
   * Removes all resize handles from the wrapper.
   *
   * Cleans up the handle map and removes each handle element from the DOM.
   */
  removeHandles() {
    this.handleMap.forEach((t) => t.remove()), this.handleMap.clear();
  }
  /**
   * Applies initial sizing from node attributes to the element.
   *
   * If width/height attributes exist on the node, they're applied to the element.
   * Otherwise, the element's natural/current dimensions are measured. The aspect
   * ratio is calculated for later use in aspect-ratio-preserving resizes.
   */
  applyInitialSize() {
    const t = this.node.attrs.width, e = this.node.attrs.height;
    t ? (this.element.style.width = `${t}px`, this.initialWidth = t) : this.initialWidth = this.element.offsetWidth, e ? (this.element.style.height = `${e}px`, this.initialHeight = e) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight);
  }
  /**
   * Initiates a resize operation when a handle is clicked.
   *
   * Captures the starting mouse position and element dimensions, sets up
   * the resize state, adds the resizing class and state attribute, and
   * attaches document-level listeners for mouse movement and keyboard input.
   *
   * @param event - The mouse down event
   * @param direction - The direction of the handle being dragged
   */
  handleResizeStart(t, e) {
    t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, R0(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  handleResize(t, e) {
    if (!this.activeHandle)
      return;
    const n = this.preserveAspectRatio || this.isShiftKeyPressed, { width: r, height: i } = this.calculateNewDimensions(this.activeHandle, t, e), o = this.applyConstraints(r, i, n);
    this.element.style.width = `${o.width}px`, this.element.style.height = `${o.height}px`, this.onResize && this.onResize(o.width, o.height);
  }
  /**
   * Calculates new dimensions based on mouse delta and resize direction.
   *
   * Takes the starting dimensions and applies the mouse movement delta
   * according to the handle direction. For corner handles, both dimensions
   * are affected. For edge handles, only one dimension changes. If aspect
   * ratio should be preserved, delegates to applyAspectRatio.
   *
   * @param direction - The active resize handle direction
   * @param deltaX - Horizontal mouse movement since resize start
   * @param deltaY - Vertical mouse movement since resize start
   * @returns The calculated width and height
   */
  calculateNewDimensions(t, e, n) {
    let r = this.startWidth, i = this.startHeight;
    const o = t.includes("right"), s = t.includes("left"), l = t.includes("bottom"), a = t.includes("top");
    return o ? r = this.startWidth + e : s && (r = this.startWidth - e), l ? i = this.startHeight + n : a && (i = this.startHeight - n), (t === "right" || t === "left") && (r = this.startWidth + (o ? e : -e)), (t === "top" || t === "bottom") && (i = this.startHeight + (l ? n : -n)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(r, i, t) : { width: r, height: i };
  }
  /**
   * Applies min/max constraints to dimensions.
   *
   * When aspect ratio is NOT preserved, constraints are applied independently
   * to width and height. When aspect ratio IS preserved, constraints are
   * applied while maintaining the aspect ratio—if one dimension hits a limit,
   * the other is recalculated proportionally.
   *
   * This ensures that aspect ratio is never broken when constrained.
   *
   * @param width - The unconstrained width
   * @param height - The unconstrained height
   * @param preserveAspectRatio - Whether to maintain aspect ratio while constraining
   * @returns The constrained dimensions
   */
  applyConstraints(t, e, n) {
    var r, i, o, s;
    if (!n) {
      let c = Math.max(this.minSize.width, t), d = Math.max(this.minSize.height, e);
      return (r = this.maxSize) != null && r.width && (c = Math.min(this.maxSize.width, c)), (i = this.maxSize) != null && i.height && (d = Math.min(this.maxSize.height, d)), { width: c, height: d };
    }
    let l = t, a = e;
    return l < this.minSize.width && (l = this.minSize.width, a = l / this.aspectRatio), a < this.minSize.height && (a = this.minSize.height, l = a * this.aspectRatio), (o = this.maxSize) != null && o.width && l > this.maxSize.width && (l = this.maxSize.width, a = l / this.aspectRatio), (s = this.maxSize) != null && s.height && a > this.maxSize.height && (a = this.maxSize.height, l = a * this.aspectRatio), { width: l, height: a };
  }
  /**
   * Adjusts dimensions to maintain the original aspect ratio.
   *
   * For horizontal handles (left/right), uses width as the primary dimension
   * and calculates height from it. For vertical handles (top/bottom), uses
   * height as primary and calculates width. For corner handles, uses width
   * as the primary dimension.
   *
   * @param width - The new width
   * @param height - The new height
   * @param direction - The active resize direction
   * @returns Dimensions adjusted to preserve aspect ratio
   */
  applyAspectRatio(t, e, n) {
    const r = n === "left" || n === "right", i = n === "top" || n === "bottom";
    return r ? {
      width: t,
      height: t / this.aspectRatio
    } : i ? {
      width: e * this.aspectRatio,
      height: e
    } : {
      width: t,
      height: t / this.aspectRatio
    };
  }
};
function D0(t, e) {
  const { selection: n } = t, { $from: r } = n;
  if (n instanceof P) {
    const o = r.index();
    return r.parent.canReplaceWith(o, o + 1, e);
  }
  let i = r.depth;
  for (; i >= 0; ) {
    const o = r.index(i);
    if (r.node(i).contentMatchAt(o).matchType(e))
      return !0;
    i -= 1;
  }
  return !1;
}
var _0 = {};
ha(_0, {
  createAtomBlockMarkdownSpec: () => P0,
  createBlockMarkdownSpec: () => z0,
  createInlineMarkdownSpec: () => $0,
  parseAttributes: () => Ca,
  parseIndentedBlocks: () => dl,
  renderNestedMarkdownContent: () => Aa,
  serializeAttributes: () => Ma
});
function Ca(t) {
  if (!t?.trim())
    return {};
  const e = {}, n = [], r = t.replace(/["']([^"']*)["']/g, (c) => (n.push(c), `__QUOTED_${n.length - 1}__`)), i = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (i) {
    const c = i.map((d) => d.trim().slice(1));
    e.class = c.join(" ");
  }
  const o = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  o && (e.id = o[1]);
  const s = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(r.matchAll(s)).forEach(([, c, d]) => {
    var u;
    const f = parseInt(((u = d.match(/__QUOTED_(\d+)__/)) == null ? void 0 : u[1]) || "0", 10), p = n[f];
    p && (e[c] = p.slice(1, -1));
  });
  const a = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return a && a.split(/\s+/).filter(Boolean).forEach((d) => {
    d.match(/^[a-zA-Z][\w-]*$/) && (e[d] = !0);
  }), e;
}
function Ma(t) {
  if (!t || Object.keys(t).length === 0)
    return "";
  const e = [];
  return t.class && String(t.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t.id && e.push(`#${t.id}`), Object.entries(t).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === !0 ? e.push(n) : r !== !1 && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function P0(t) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = Ca,
    serializeAttributes: i = Ma,
    defaultAttributes: o = {},
    requiredAttributes: s = [],
    allowedAttributes: l
  } = t, a = n || e, c = (d) => {
    if (!l)
      return d;
    const u = {};
    return l.forEach((f) => {
      f in d && (u[f] = d[f]);
    }), u;
  };
  return {
    parseMarkdown: (d, u) => {
      const f = { ...o, ...d.attributes };
      return u.createNode(e, f, []);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(d) {
        var u;
        const f = new RegExp(`^:::${a}(?:\\s|$)`, "m"), p = (u = d.match(f)) == null ? void 0 : u.index;
        return p !== void 0 ? p : -1;
      },
      tokenize(d, u, f) {
        const p = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), h = d.match(p);
        if (!h)
          return;
        const m = h[1] || "", g = r(m);
        if (!s.find((b) => !(b in g)))
          return {
            type: e,
            raw: h[0],
            attributes: g
          };
      }
    },
    renderMarkdown: (d) => {
      const u = c(d.attrs || {}), f = i(u), p = f ? ` {${f}}` : "";
      return `:::${a}${p} :::`;
    }
  };
}
function z0(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: i = Ca,
    serializeAttributes: o = Ma,
    defaultAttributes: s = {},
    content: l = "block",
    allowedAttributes: a
  } = t, c = n || e, d = (u) => {
    if (!a)
      return u;
    const f = {};
    return a.forEach((p) => {
      p in u && (f[p] = u[p]);
    }), f;
  };
  return {
    parseMarkdown: (u, f) => {
      let p;
      if (r) {
        const m = r(u);
        p = typeof m == "string" ? [{ type: "text", text: m }] : m;
      } else l === "block" ? p = f.parseChildren(u.tokens || []) : p = f.parseInline(u.tokens || []);
      const h = { ...s, ...u.attributes };
      return f.createNode(e, h, p);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(u) {
        var f;
        const p = new RegExp(`^:::${c}`, "m"), h = (f = u.match(p)) == null ? void 0 : f.index;
        return h !== void 0 ? h : -1;
      },
      tokenize(u, f, p) {
        var h;
        const m = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), g = u.match(m);
        if (!g)
          return;
        const [y, b = ""] = g, w = i(b);
        let k = 1;
        const v = y.length;
        let x = "";
        const S = /^:::([\w-]*)(\s.*)?/gm, A = u.slice(v);
        for (S.lastIndex = 0; ; ) {
          const V = S.exec(A);
          if (V === null)
            break;
          const R = V.index, I = V[1];
          if (!((h = V[2]) != null && h.endsWith(":::"))) {
            if (I)
              k += 1;
            else if (k -= 1, k === 0) {
              const j = A.slice(0, R);
              x = j.trim();
              const Z = u.slice(0, v + R + V[0].length);
              let K = [];
              if (x)
                if (l === "block")
                  for (K = p.blockTokens(j), K.forEach((X) => {
                    X.text && (!X.tokens || X.tokens.length === 0) && (X.tokens = p.inlineTokens(X.text));
                  }); K.length > 0; ) {
                    const X = K[K.length - 1];
                    if (X.type === "paragraph" && (!X.text || X.text.trim() === ""))
                      K.pop();
                    else
                      break;
                  }
                else
                  K = p.inlineTokens(x);
              return {
                type: e,
                raw: Z,
                attributes: w,
                content: x,
                tokens: K
              };
            }
          }
        }
      }
    },
    renderMarkdown: (u, f) => {
      const p = d(u.attrs || {}), h = o(p), m = h ? ` {${h}}` : "", g = f.renderChildren(u.content || [], `

`);
      return `:::${c}${m}

${g}

:::`;
    }
  };
}
function B0(t) {
  if (!t.trim())
    return {};
  const e = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let r = n.exec(t);
  for (; r !== null; ) {
    const [, i, o, s] = r;
    e[i] = o || s, r = n.exec(t);
  }
  return e;
}
function F0(t) {
  return Object.entries(t).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function $0(t) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: i = B0,
    serializeAttributes: o = F0,
    defaultAttributes: s = {},
    selfClosing: l = !1,
    allowedAttributes: a
  } = t, c = n || e, d = (f) => {
    if (!a)
      return f;
    const p = {};
    return a.forEach((h) => {
      const m = typeof h == "string" ? h : h.name, g = typeof h == "string" ? void 0 : h.skipIfDefault;
      if (m in f) {
        const y = f[m];
        if (g !== void 0 && y === g)
          return;
        p[m] = y;
      }
    }), p;
  }, u = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (f, p) => {
      const h = { ...s, ...f.attributes };
      if (l)
        return p.createNode(e, h);
      const m = r ? r(f) : f.content || "";
      return m ? p.createNode(e, h, [p.createTextNode(m)]) : p.createNode(e, h, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(f) {
        const p = l ? new RegExp(`\\[${u}\\s*[^\\]]*\\]`) : new RegExp(`\\[${u}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${u}\\]`), h = f.match(p), m = h?.index;
        return m !== void 0 ? m : -1;
      },
      tokenize(f, p, h) {
        const m = l ? new RegExp(`^\\[${u}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${u}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${u}\\]`), g = f.match(m);
        if (!g)
          return;
        let y = "", b = "";
        if (l) {
          const [, k] = g;
          b = k;
        } else {
          const [, k, v] = g;
          b = k, y = v || "";
        }
        const w = i(b.trim());
        return {
          type: e,
          raw: g[0],
          content: y.trim(),
          attributes: w
        };
      }
    },
    renderMarkdown: (f) => {
      let p = "";
      r ? p = r(f) : f.content && f.content.length > 0 && (p = f.content.filter((y) => y.type === "text").map((y) => y.text).join(""));
      const h = d(f.attrs || {}), m = o(h), g = m ? ` ${m}` : "";
      return l ? `[${c}${g}]` : `[${c}${g}]${p}[/${c}]`;
    }
  };
}
function dl(t, e, n) {
  var r, i, o, s;
  const l = t.split(`
`), a = [];
  let c = "", d = 0;
  const u = e.baseIndentSize || 2;
  for (; d < l.length; ) {
    const f = l[d], p = f.match(e.itemPattern);
    if (!p) {
      if (a.length > 0)
        break;
      if (f.trim() === "") {
        d += 1, c = `${c}${f}
`;
        continue;
      } else
        return;
    }
    const h = e.extractItemData(p), { indentLevel: m, mainContent: g } = h;
    c = `${c}${f}
`;
    const y = [g];
    for (d += 1; d < l.length; ) {
      const v = l[d];
      if (v.trim() === "") {
        const S = l.slice(d + 1).findIndex((R) => R.trim() !== "");
        if (S === -1)
          break;
        if ((((i = (r = l[d + 1 + S].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : i.length) || 0) > m) {
          y.push(v), c = `${c}${v}
`, d += 1;
          continue;
        } else
          break;
      }
      if ((((s = (o = v.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : s.length) || 0) > m)
        y.push(v), c = `${c}${v}
`, d += 1;
      else
        break;
    }
    let b;
    const w = y.slice(1);
    if (w.length > 0) {
      const v = w.map((x) => x.slice(m + u)).join(`
`);
      v.trim() && (e.customNestedParser ? b = e.customNestedParser(v) : b = n.blockTokens(v));
    }
    const k = e.createToken(h, b);
    a.push(k);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function Aa(t, e, n, r) {
  if (!t || !Array.isArray(t.content))
    return "";
  const i = typeof n == "function" ? n(r) : n, [o, ...s] = t.content, l = e.renderChildren([o]), a = [`${i}${l}`];
  return s && s.length > 0 && s.forEach((c) => {
    const d = e.renderChildren([c]);
    if (d) {
      const u = d.split(`
`).map((f) => f ? e.indent(f) : "").join(`
`);
      a.push(u);
    }
  }), a.join(`
`);
}
function j0(t, e, n = {}) {
  const { state: r } = e, { doc: i, tr: o } = r, s = t;
  i.descendants((l, a) => {
    const c = o.mapping.map(a), d = o.mapping.map(a) + l.nodeSize;
    let u = null;
    if (l.marks.forEach((p) => {
      if (p !== s)
        return !1;
      u = p;
    }), !u)
      return;
    let f = !1;
    if (Object.keys(n).forEach((p) => {
      n[p] !== u.attrs[p] && (f = !0);
    }), f) {
      const p = t.type.create({
        ...t.attrs,
        ...n
      });
      o.removeMark(c, d, t.type), o.addMark(c, d, p);
    }
  }), o.docChanged && e.view.dispatch(o);
}
var ye = class Np extends Sa {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Np(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, W0 = class {
  constructor(t, e, n) {
    this.isDragging = !1, this.component = t, this.editor = e.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...n
    }, this.extension = e.extension, this.node = e.node, this.decorations = e.decorations, this.innerDecorations = e.innerDecorations, this.view = e.view, this.HTMLAttributes = e.HTMLAttributes, this.getPos = e.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(t) {
    var e, n, r, i, o, s, l;
    const { view: a } = this.editor, c = t.target, d = c.nodeType === 3 ? (e = c.parentElement) == null ? void 0 : e.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
    if (!this.dom || (n = this.contentDOM) != null && n.contains(c) || !d)
      return;
    let u = 0, f = 0;
    if (this.dom !== d) {
      const b = this.dom.getBoundingClientRect(), w = d.getBoundingClientRect(), k = (i = t.offsetX) != null ? i : (r = t.nativeEvent) == null ? void 0 : r.offsetX, v = (s = t.offsetY) != null ? s : (o = t.nativeEvent) == null ? void 0 : o.offsetY;
      u = w.x - b.x + k, f = w.y - b.y + v;
    }
    const p = this.dom.cloneNode(!0);
    try {
      const b = this.dom.getBoundingClientRect();
      p.style.width = `${Math.round(b.width)}px`, p.style.height = `${Math.round(b.height)}px`, p.style.boxSizing = "border-box", p.style.pointerEvents = "none";
    } catch {
    }
    let h = null;
    try {
      h = document.createElement("div"), h.style.position = "absolute", h.style.top = "-9999px", h.style.left = "-9999px", h.style.pointerEvents = "none", h.appendChild(p), document.body.appendChild(h), (l = t.dataTransfer) == null || l.setDragImage(p, u, f);
    } finally {
      h && setTimeout(() => {
        try {
          h?.remove();
        } catch {
        }
      }, 0);
    }
    const m = this.getPos();
    if (typeof m != "number")
      return;
    const g = P.create(a.state.doc, m), y = a.state.tr.setSelection(g);
    a.dispatch(y);
  }
  stopEvent(t) {
    var e;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: t });
    const n = t.target;
    if (!(this.dom.contains(n) && !((e = this.contentDOM) != null && e.contains(n))))
      return !1;
    const i = t.type.startsWith("drag"), o = t.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !o && !i)
      return !0;
    const { isEditable: l } = this.editor, { isDragging: a } = this, c = !!this.node.type.spec.draggable, d = P.isSelectable(this.node), u = t.type === "copy", f = t.type === "paste", p = t.type === "cut", h = t.type === "mousedown";
    if (!c && d && i && t.target === this.dom && t.preventDefault(), c && i && !a && t.target === this.dom)
      return t.preventDefault(), !1;
    if (c && l && !a && h) {
      const m = n.closest("[data-drag-handle]");
      m && (this.dom === m || this.dom.contains(m)) && (this.isDragging = !0, document.addEventListener(
        "dragend",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "drop",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "mouseup",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ));
    }
    return !(a || o || u || f || p || h && d);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(t) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: t }) : this.node.isLeaf || this.node.isAtom ? !0 : t.type === "selection" || this.dom.contains(t.target) && t.type === "childList" && (Ko() || tp()) && this.editor.isFocused && [...Array.from(t.addedNodes), ...Array.from(t.removedNodes)].every((n) => n.isContentEditable) ? !1 : this.contentDOM === t.target && t.type === "attributes" ? !0 : !this.contentDOM.contains(t.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(t) {
    this.editor.commands.command(({ tr: e }) => {
      const n = this.getPos();
      return typeof n != "number" ? !1 : (e.setNodeMarkup(n, void 0, {
        ...this.node.attrs,
        ...t
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const t = this.getPos();
    if (typeof t != "number")
      return;
    const e = t + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: t, to: e });
  }
};
function tn(t) {
  return new C0({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: i }) => {
      const o = Q(t.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, l = r[r.length - 1], a = r[0];
      let c = n.to;
      if (l) {
        const d = a.search(/\S/), u = n.from + a.indexOf(l), f = u + l.length;
        if (xa(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === t.type && g !== h.mark.type)).filter((h) => h.to > u).length)
          return null;
        f < n.to && s.delete(f, n.to), u > n.from && s.delete(n.from + d, u), c = n.from + d + l.length, s.addMark(n.from + d, c, t.type.create(o || {})), s.removeStoredMark(t.type);
      }
    }
  });
}
function ld(t) {
  return Im((e, n) => ({
    get() {
      return e(), t;
    },
    set(r) {
      t = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
var U0 = class extends N0 {
  constructor(t = {}) {
    return super(t), this.contentComponent = null, this.appContext = null, this.reactiveState = ld(this.view.state), this.reactiveExtensionStorage = ld(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
      this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), xu(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(t, e) {
    const n = super.registerPlugin(t, e);
    return this.reactiveState && (this.reactiveState.value = n), n;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(t) {
    const e = super.unregisterPlugin(t);
    return this.reactiveState && e && (this.reactiveState.value = e), e;
  }
}, K0 = F({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(t) {
    const e = ee(), n = Gr();
    return Tn(() => {
      const r = t.editor;
      r && r.options.element && e.value && Ul(() => {
        var i;
        if (!e.value || !((i = r.view.dom) != null && i.parentNode))
          return;
        const o = M(e.value);
        e.value.append(...r.view.dom.parentNode.childNodes), r.contentComponent = n.ctx._, n && (r.appContext = {
          ...n.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: n.provides
        }), r.setOptions({
          element: o
        }), r.createNodeViews();
      });
    }), Ro(() => {
      const r = t.editor;
      r && (r.contentComponent = null, r.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return An("div", {
      ref: (t) => {
        this.rootEl = t;
      }
    });
  }
});
F({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return An(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
var q0 = F({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var t, e;
    return An(
      this.as,
      {
        // @ts-ignore
        class: this.decorationClasses,
        style: {
          whiteSpace: "normal"
        },
        "data-node-view-wrapper": "",
        // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
        onDragstart: this.onDragStart
      },
      (e = (t = this.$slots).default) == null ? void 0 : e.call(t)
    );
  }
}), J0 = (t = {}) => {
  const e = Wl();
  return Jr(() => {
    e.value = new U0(t);
  }), Ro(() => {
    var n, r, i, o;
    const s = (r = (n = e.value) == null ? void 0 : n.view.dom) == null ? void 0 : r.parentNode, l = s?.cloneNode(!0);
    (i = s?.parentNode) == null || i.replaceChild(l, s), (o = e.value) == null || o.destroy();
  }), e;
}, G0 = class {
  constructor(t, { props: e = {}, editor: n }) {
    this.editor = n, this.component = xu(t), this.el = document.createElement("div"), this.props = Or(e), this.renderedComponent = this.renderComponent();
  }
  get element() {
    return this.renderedComponent.el;
  }
  get ref() {
    var t, e, n, r;
    return (e = (t = this.renderedComponent.vNode) == null ? void 0 : t.component) != null && e.exposed ? this.renderedComponent.vNode.component.exposed : (r = (n = this.renderedComponent.vNode) == null ? void 0 : n.component) == null ? void 0 : r.proxy;
  }
  renderComponent() {
    let t = An(this.component, this.props);
    return this.editor.appContext && (t.appContext = this.editor.appContext), typeof document < "u" && this.el && Xa(t, this.el), { vNode: t, destroy: () => {
      this.el && Xa(null, this.el), this.el = null, t = null;
    }, el: this.el ? this.el.firstElementChild : null };
  }
  updateProps(t = {}) {
    Object.entries(t).forEach(([e, n]) => {
      this.props[e] = n;
    }), this.renderComponent();
  }
  destroy() {
    this.renderedComponent.destroy();
  }
};
F({
  name: "MarkViewContent",
  props: {
    as: {
      type: String,
      default: "span"
    }
  },
  render() {
    return An(this.as, {
      style: {
        whiteSpace: "inherit"
      },
      "data-mark-view-content": ""
    });
  }
});
var Z0 = {
  editor: {
    type: Object,
    required: !0
  },
  node: {
    type: Object,
    required: !0
  },
  decorations: {
    type: Object,
    required: !0
  },
  selected: {
    type: Boolean,
    required: !0
  },
  extension: {
    type: Object,
    required: !0
  },
  getPos: {
    type: Function,
    required: !0
  },
  updateAttributes: {
    type: Function,
    required: !0
  },
  deleteNode: {
    type: Function,
    required: !0
  },
  view: {
    type: Object,
    required: !0
  },
  innerDecorations: {
    type: Object,
    required: !0
  },
  HTMLAttributes: {
    type: Object,
    required: !0
  }
}, X0 = class extends W0 {
  mount() {
    const t = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (r = {}) => this.updateAttributes(r),
      deleteNode: () => this.deleteNode()
    }, e = this.onDragStart.bind(this);
    this.decorationClasses = ee(this.getDecorationClasses());
    const n = F({
      extends: { ...this.component },
      props: Object.keys(t),
      template: this.component.template,
      setup: (r) => {
        var i, o;
        return Ni("onDragStart", e), Ni("decorationClasses", this.decorationClasses), (o = (i = this.component).setup) == null ? void 0 : o.call(i, r, {
          expose: () => {
          }
        });
      },
      // add support for scoped styles
      // @ts-ignore
      // eslint-disable-next-line
      __scopeId: this.component.__scopeId,
      // add support for CSS Modules
      // @ts-ignore
      // eslint-disable-next-line
      __cssModules: this.component.__cssModules,
      // add support for vue devtools
      // @ts-ignore
      // eslint-disable-next-line
      __name: this.component.__name,
      // @ts-ignore
      // eslint-disable-next-line
      __file: this.component.__file
    });
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.renderer = new G0(n, {
      editor: this.editor,
      props: t
    });
  }
  /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */
  get dom() {
    if (!this.renderer.element || !this.renderer.element.hasAttribute("data-node-view-wrapper"))
      throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */
  get contentDOM() {
    return this.node.isLeaf ? null : this.dom.querySelector("[data-node-view-content]");
  }
  /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */
  handleSelectionUpdate() {
    const { from: t, to: e } = this.editor.state.selection, n = this.getPos();
    if (typeof n == "number")
      if (t <= n && e >= n + this.node.nodeSize) {
        if (this.renderer.props.selected)
          return;
        this.selectNode();
      } else {
        if (!this.renderer.props.selected)
          return;
        this.deselectNode();
      }
  }
  /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */
  update(t, e, n) {
    const r = (i) => {
      this.decorationClasses.value = this.getDecorationClasses(), this.renderer.updateProps(i);
    };
    if (typeof this.options.update == "function") {
      const i = this.node, o = this.decorations, s = this.innerDecorations;
      return this.node = t, this.decorations = e, this.innerDecorations = n, this.options.update({
        oldNode: i,
        oldDecorations: o,
        newNode: t,
        newDecorations: e,
        oldInnerDecorations: s,
        innerDecorations: n,
        updateProps: () => r({ node: t, decorations: e, innerDecorations: n })
      });
    }
    return t.type !== this.node.type ? !1 : (t === this.node && this.decorations === e && this.innerDecorations === n || (this.node = t, this.decorations = e, this.innerDecorations = n, r({ node: t, decorations: e, innerDecorations: n })), !0);
  }
  /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */
  selectNode() {
    this.renderer.updateProps({
      selected: !0
    }), this.renderer.element && this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */
  deselectNode() {
    this.renderer.updateProps({
      selected: !1
    }), this.renderer.element && this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  getDecorationClasses() {
    return this.decorations.flatMap((t) => t.type.attrs.class).join(" ");
  }
  destroy() {
    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate);
  }
};
function Y0(t, e) {
  return (n) => {
    if (!n.editor.contentComponent)
      return {};
    const r = typeof t == "function" && "__vccOpts" in t ? t.__vccOpts : t;
    return new X0(r, n, e);
  };
}
const ul = "en", fl = 200, Q0 = fl - 80, ad = 20, cd = 1e5, dd = 16, di = 6, ui = 10, fi = 2, ew = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#D5D5D4",
  "#E8E8E8",
  "#EEEEEE"
], pl = "Roboto", tw = [
  { title: "editor.default", value: pl, divider: !0, default: !0 },
  { title: "Arial", value: "Arial" },
  { title: "Arial Black", value: "Arial Black" },
  { title: "Georgia", value: "Georgia" },
  { title: "Impact", value: "Impact" },
  { title: "Helvetica", value: "Helvetica" },
  { title: "Tahoma", value: "Tahoma" },
  { title: "Times New Roman", value: "Times New Roman" },
  { title: "Verdana", value: "Verdana" },
  { title: "Courier New", value: "Courier New", divider: !0 },
  { title: "Monaco", value: "Monaco" },
  { title: "Monospace", value: "monospace" }
], qi = "default", Rp = [
  { title: "editor.default", value: qi, default: !0 }
], nw = [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72], Ln = "default";
var Ji = /* @__PURE__ */ ((t) => (t[t["size-small"] = 200] = "size-small", t[t["size-medium"] = 500] = "size-medium", t["size-large"] = "100%", t))(Ji || {}), Gi = /* @__PURE__ */ ((t) => (t[t["size-small"] = 480] = "size-small", t[t["size-medium"] = 640] = "size-medium", t["size-large"] = "100%", t))(Gi || {});
const rw = {
  image: [
    "float-left",
    "float-none",
    "float-right",
    "divider",
    "image-size-small",
    "image-size-medium",
    "image-size-large",
    "divider",
    "textAlign",
    "divider",
    "image",
    "image-aspect-ratio",
    "remove"
  ],
  text: ["bold", "italic", "underline", "strike", "divider", "color", "highlight", "textAlign", "divider", "link"],
  link: [
    "bold",
    "italic",
    "underline",
    "strike",
    "divider",
    "color",
    "highlight",
    "textAlign",
    "divider",
    "link",
    "unlink",
    "link-open"
  ],
  video: ["video-size-small", "video-size-medium", "video-size-large", "divider", "video", "remove"],
  table: ["table-add-column-before", "table-add-column-after", "table-delete-column", "divider", "table-add-row-before", "table-add-row-after", "table-delete-row", "divider", "table-merge-or-split-cells", "divider", "table-delete-table", "divider"]
}, ur = Or({
  extensions: []
});
function iw(t) {
  ur.defaultLang = t.defaultLang, ur.defaultFallbackLang = t.defaultFallbackLang, ur.defaultMarkdownTheme = t.defaultMarkdownTheme, ur.extensions = t.extensions ?? [];
}
function Yo() {
  return {
    state: ur
  };
}
function ow(t) {
  return Array.isArray(t) ? t : Array.from(t);
}
function sw(t) {
  return Number.isSafeInteger(t) && t >= 0;
}
function Qo(t) {
  return t != null && typeof t != "function" && sw(t.length);
}
function lw(t) {
  return t;
}
function Jn(t) {
  return t === "__proto__";
}
function es(t) {
  switch (typeof t) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return t.includes(".") || t.includes("[") || t.includes("]");
  }
}
function ts(t) {
  return typeof t == "string" || typeof t == "symbol" ? t : Object.is(t?.valueOf?.(), -0) ? "-0" : String(t);
}
function Ip(t) {
  if (t == null)
    return "";
  if (typeof t == "string")
    return t;
  if (Array.isArray(t))
    return t.map(Ip).join(",");
  const e = String(t);
  return e === "0" && Object.is(Number(t), -0) ? "-0" : e;
}
function Ta(t) {
  if (Array.isArray(t))
    return t.map(ts);
  if (typeof t == "symbol")
    return [t];
  t = Ip(t);
  const e = [], n = t.length;
  if (n === 0)
    return e;
  let r = 0, i = "", o = "", s = !1;
  for (t.charCodeAt(0) === 46 && (e.push(""), r++); r < n; ) {
    const l = t[r];
    o ? l === "\\" && r + 1 < n ? (r++, i += t[r]) : l === o ? o = "" : i += l : s ? l === '"' || l === "'" ? o = l : l === "]" ? (s = !1, e.push(i), i = "") : i += l : l === "[" ? (s = !0, i && (e.push(i), i = "")) : l === "." ? i && (e.push(i), i = "") : i += l, r++;
  }
  return i && e.push(i), e;
}
function ns(t, e, n) {
  if (t == null)
    return n;
  switch (typeof e) {
    case "string": {
      if (Jn(e))
        return n;
      const r = t[e];
      return r === void 0 ? es(e) ? ns(t, Ta(e), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof e == "number" && (e = ts(e));
      const r = t[e];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(e))
        return aw(t, e, n);
      if (Object.is(e?.valueOf(), -0) ? e = "-0" : e = String(e), Jn(e))
        return n;
      const r = t[e];
      return r === void 0 ? n : r;
    }
  }
}
function aw(t, e, n) {
  if (e.length === 0)
    return n;
  let r = t;
  for (let i = 0; i < e.length; i++) {
    if (r == null || Jn(e[i]))
      return n;
    r = r[e[i]];
  }
  return r === void 0 ? n : r;
}
function cw(t) {
  return function(e) {
    return ns(e, t);
  };
}
function dw(t) {
  return t !== null && (typeof t == "object" || typeof t == "function");
}
function hl(t) {
  return t == null || typeof t != "object" && typeof t != "function";
}
function ml(t, e) {
  return t === e || Number.isNaN(t) && Number.isNaN(e);
}
function Dp(t, e, n) {
  return typeof n != "function" ? Dp(t, e, () => {
  }) : gl(t, e, function r(i, o, s, l, a, c) {
    const d = n(i, o, s, l, a, c);
    return d !== void 0 ? !!d : gl(i, o, r, c);
  }, /* @__PURE__ */ new Map());
}
function gl(t, e, n, r) {
  if (e === t)
    return !0;
  switch (typeof e) {
    case "object":
      return uw(t, e, n, r);
    case "function":
      return Object.keys(e).length > 0 ? gl(t, { ...e }, n, r) : ml(t, e);
    default:
      return dw(t) ? typeof e == "string" ? e === "" : !0 : ml(t, e);
  }
}
function uw(t, e, n, r) {
  if (e == null)
    return !0;
  if (Array.isArray(e))
    return _p(t, e, n, r);
  if (e instanceof Map)
    return fw(t, e, n, r);
  if (e instanceof Set)
    return pw(t, e, n, r);
  const i = Object.keys(e);
  if (t == null || hl(t))
    return i.length === 0;
  if (i.length === 0)
    return !0;
  if (r?.has(e))
    return r.get(e) === t;
  r?.set(e, t);
  try {
    for (let o = 0; o < i.length; o++) {
      const s = i[o];
      if (!hl(t) && !(s in t) || e[s] === void 0 && t[s] !== void 0 || e[s] === null && t[s] !== null || !n(t[s], e[s], s, t, e, r))
        return !1;
    }
    return !0;
  } finally {
    r?.delete(e);
  }
}
function fw(t, e, n, r) {
  if (e.size === 0)
    return !0;
  if (!(t instanceof Map))
    return !1;
  for (const [i, o] of e.entries()) {
    const s = t.get(i);
    if (n(s, o, i, t, e, r) === !1)
      return !1;
  }
  return !0;
}
function _p(t, e, n, r) {
  if (e.length === 0)
    return !0;
  if (!Array.isArray(t))
    return !1;
  const i = /* @__PURE__ */ new Set();
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    let l = !1;
    for (let a = 0; a < t.length; a++) {
      if (i.has(a))
        continue;
      const c = t[a];
      let d = !1;
      if (n(c, s, o, t, e, r) && (d = !0), d) {
        i.add(a), l = !0;
        break;
      }
    }
    if (!l)
      return !1;
  }
  return !0;
}
function pw(t, e, n, r) {
  return e.size === 0 ? !0 : t instanceof Set ? _p([...t], [...e], n, r) : !1;
}
function Pp(t, e) {
  return Dp(t, e, () => {
  });
}
function Zi(t) {
  return Object.getOwnPropertySymbols(t).filter((e) => Object.prototype.propertyIsEnumerable.call(t, e));
}
function Xi(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const zp = "[object RegExp]", Ea = "[object String]", Oa = "[object Number]", La = "[object Boolean]", Yi = "[object Arguments]", Bp = "[object Symbol]", Fp = "[object Date]", $p = "[object Map]", jp = "[object Set]", Wp = "[object Array]", hw = "[object Function]", Up = "[object ArrayBuffer]", Ei = "[object Object]", mw = "[object Error]", Kp = "[object DataView]", qp = "[object Uint8Array]", Jp = "[object Uint8ClampedArray]", Gp = "[object Uint16Array]", Zp = "[object Uint32Array]", gw = "[object BigUint64Array]", Xp = "[object Int8Array]", Yp = "[object Int16Array]", Qp = "[object Int32Array]", yw = "[object BigInt64Array]", eh = "[object Float32Array]", th = "[object Float64Array]";
function nh(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function bw(t, e) {
  return fn(t, void 0, t, /* @__PURE__ */ new Map(), e);
}
function fn(t, e, n, r = /* @__PURE__ */ new Map(), i = void 0) {
  const o = i?.(t, e, n, r);
  if (o !== void 0)
    return o;
  if (hl(t))
    return t;
  if (r.has(t))
    return r.get(t);
  if (Array.isArray(t)) {
    const s = new Array(t.length);
    r.set(t, s);
    for (let l = 0; l < t.length; l++)
      s[l] = fn(t[l], l, n, r, i);
    return Object.hasOwn(t, "index") && (s.index = t.index), Object.hasOwn(t, "input") && (s.input = t.input), s;
  }
  if (t instanceof Date)
    return new Date(t.getTime());
  if (t instanceof RegExp) {
    const s = new RegExp(t.source, t.flags);
    return s.lastIndex = t.lastIndex, s;
  }
  if (t instanceof Map) {
    const s = /* @__PURE__ */ new Map();
    r.set(t, s);
    for (const [l, a] of t)
      s.set(l, fn(a, l, n, r, i));
    return s;
  }
  if (t instanceof Set) {
    const s = /* @__PURE__ */ new Set();
    r.set(t, s);
    for (const l of t)
      s.add(fn(l, void 0, n, r, i));
    return s;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(t))
    return t.subarray();
  if (nh(t)) {
    const s = new (Object.getPrototypeOf(t)).constructor(t.length);
    r.set(t, s);
    for (let l = 0; l < t.length; l++)
      s[l] = fn(t[l], l, n, r, i);
    return s;
  }
  if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer)
    return t.slice(0);
  if (t instanceof DataView) {
    const s = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
    return r.set(t, s), ot(s, t, n, r, i), s;
  }
  if (typeof File < "u" && t instanceof File) {
    const s = new File([t], t.name, {
      type: t.type
    });
    return r.set(t, s), ot(s, t, n, r, i), s;
  }
  if (typeof Blob < "u" && t instanceof Blob) {
    const s = new Blob([t], { type: t.type });
    return r.set(t, s), ot(s, t, n, r, i), s;
  }
  if (t instanceof Error) {
    const s = new t.constructor();
    return r.set(t, s), s.message = t.message, s.name = t.name, s.stack = t.stack, s.cause = t.cause, ot(s, t, n, r, i), s;
  }
  if (t instanceof Boolean) {
    const s = new Boolean(t.valueOf());
    return r.set(t, s), ot(s, t, n, r, i), s;
  }
  if (t instanceof Number) {
    const s = new Number(t.valueOf());
    return r.set(t, s), ot(s, t, n, r, i), s;
  }
  if (t instanceof String) {
    const s = new String(t.valueOf());
    return r.set(t, s), ot(s, t, n, r, i), s;
  }
  if (typeof t == "object" && ww(t)) {
    const s = Object.create(Object.getPrototypeOf(t));
    return r.set(t, s), ot(s, t, n, r, i), s;
  }
  return t;
}
function ot(t, e, n = t, r, i) {
  const o = [...Object.keys(e), ...Zi(e)];
  for (let s = 0; s < o.length; s++) {
    const l = o[s], a = Object.getOwnPropertyDescriptor(t, l);
    (a == null || a.writable) && (t[l] = fn(e[l], l, n, r, i));
  }
}
function ww(t) {
  switch (Xi(t)) {
    case Yi:
    case Wp:
    case Up:
    case Kp:
    case La:
    case Fp:
    case eh:
    case th:
    case Xp:
    case Yp:
    case Qp:
    case $p:
    case Oa:
    case Ei:
    case zp:
    case jp:
    case Ea:
    case Bp:
    case qp:
    case Jp:
    case Gp:
    case Zp:
      return !0;
    default:
      return !1;
  }
}
function vw(t) {
  return fn(t, void 0, t, /* @__PURE__ */ new Map(), void 0);
}
function kw(t) {
  return t = vw(t), (e) => Pp(e, t);
}
function rh(t, e) {
  return bw(t, (n, r, i, o) => {
    const s = e?.(n, r, i, o);
    if (s !== void 0)
      return s;
    if (typeof t == "object")
      switch (Object.prototype.toString.call(t)) {
        case Oa:
        case Ea:
        case La: {
          const l = new t.constructor(t?.valueOf());
          return ot(l, t), l;
        }
        case Yi: {
          const l = {};
          return ot(l, t), l.length = t.length, l[Symbol.iterator] = t[Symbol.iterator], l;
        }
        default:
          return;
      }
  });
}
function xw(t) {
  return rh(t);
}
const Sw = /^(?:0|[1-9]\d*)$/;
function Cw(t, e = Number.MAX_SAFE_INTEGER) {
  switch (typeof t) {
    case "number":
      return Number.isInteger(t) && t >= 0 && t < e;
    case "symbol":
      return !1;
    case "string":
      return Sw.test(t);
  }
}
function Mw(t) {
  return t !== null && typeof t == "object" && Xi(t) === "[object Arguments]";
}
function Aw(t, e) {
  let n;
  if (Array.isArray(e) ? n = e : typeof e == "string" && es(e) && t?.[e] == null ? n = Ta(e) : n = [e], n.length === 0)
    return !1;
  let r = t;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if ((r == null || !Object.hasOwn(r, o)) && !((Array.isArray(r) || Mw(r)) && Cw(o) && o < r.length))
      return !1;
    r = r[o];
  }
  return !0;
}
function Tw(t, e) {
  switch (typeof t) {
    case "object": {
      Object.is(t?.valueOf(), -0) && (t = "-0");
      break;
    }
    case "number": {
      t = ts(t);
      break;
    }
  }
  return e = xw(e), function(n) {
    const r = ns(n, t);
    return r === void 0 ? Aw(n, t) : e === void 0 ? r === void 0 : Pp(r, e);
  };
}
function Ew(t) {
  if (t == null)
    return lw;
  switch (typeof t) {
    case "function":
      return t;
    case "object":
      return Array.isArray(t) && t.length === 2 ? Tw(t[0], t[1]) : kw(t);
    case "string":
    case "symbol":
    case "number":
      return cw(t);
  }
}
function Ow(t, e) {
  const n = new Set(e);
  return t.filter((r) => !n.has(r));
}
function Lw(t) {
  return typeof t == "object" && t !== null;
}
function yl(t) {
  return Lw(t) && Qo(t);
}
function Hw(t) {
  return t[t.length - 1];
}
function Vw(t) {
  if (Qo(t))
    return Hw(ow(t));
}
function Nw(t, e, n) {
  const r = new Set(e.map((i) => n(i)));
  return t.filter((i) => !r.has(n(i)));
}
function Rw(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (yl(r))
      for (let i = 0; i < r.length; i++)
        e.push(r[i]);
  }
  return e;
}
function Iw(t, ...e) {
  if (!yl(t))
    return [];
  const n = Vw(e), r = Rw(e);
  return yl(n) ? Ow(Array.from(t), r) : Nw(Array.from(t), r, Ew(n));
}
function Dw(t) {
  return typeof t == "symbol" || t instanceof Symbol;
}
function _w(t) {
  return Dw(t) ? NaN : Number(t);
}
function Pw(t) {
  return t ? (t = _w(t), t === 1 / 0 || t === -1 / 0 ? (t < 0 ? -1 : 1) * Number.MAX_VALUE : t === t ? t : 0) : t === 0 ? t : 0;
}
function zw(t) {
  const e = Pw(t), n = e % 1;
  return n ? e - n : e;
}
function Bw(t, e = 1) {
  const n = [], r = Math.floor(e);
  if (!Qo(t))
    return n;
  const i = (o, s) => {
    for (let l = 0; l < o.length; l++) {
      const a = o[l];
      s < r && (Array.isArray(a) || a?.[Symbol.isConcatSpreadable] || a !== null && typeof a == "object" && Object.prototype.toString.call(a) === "[object Arguments]") ? Array.isArray(a) ? i(a, s + 1) : i(Array.from(a), s + 1) : n.push(a);
    }
  };
  return i(Array.from(t), 0), n;
}
function ud(t, e) {
  if (t == null)
    return !0;
  switch (typeof e) {
    case "symbol":
    case "number":
    case "object": {
      if (Array.isArray(e))
        return fd(t, e);
      if (typeof e == "number" ? e = ts(e) : typeof e == "object" && (Object.is(e?.valueOf(), -0) ? e = "-0" : e = String(e)), Jn(e))
        return !1;
      if (t?.[e] === void 0)
        return !0;
      try {
        return delete t[e], !0;
      } catch {
        return !1;
      }
    }
    case "string": {
      if (t?.[e] === void 0 && es(e))
        return fd(t, Ta(e));
      if (Jn(e))
        return !1;
      try {
        return delete t[e], !0;
      } catch {
        return !1;
      }
    }
  }
}
function fd(t, e) {
  const n = e.length === 1 ? t : ns(t, e.slice(0, -1)), r = e[e.length - 1];
  if (n?.[r] === void 0)
    return !0;
  if (Jn(r))
    return !1;
  try {
    return delete n[r], !0;
  } catch {
    return !1;
  }
}
function Fw(t, e, { signal: n, edges: r } = {}) {
  let i, o = null;
  const s = r != null && r.includes("leading"), l = r == null || r.includes("trailing"), a = () => {
    o !== null && (t.apply(i, o), i = void 0, o = null);
  }, c = () => {
    l && a(), p();
  };
  let d = null;
  const u = () => {
    d != null && clearTimeout(d), d = setTimeout(() => {
      d = null, c();
    }, e);
  }, f = () => {
    d !== null && (clearTimeout(d), d = null);
  }, p = () => {
    f(), i = void 0, o = null;
  }, h = () => {
    a();
  }, m = function(...g) {
    if (n?.aborted)
      return;
    i = this, o = g;
    const y = d == null;
    u(), s && y && a();
  };
  return m.schedule = u, m.cancel = p, m.flush = h, n?.addEventListener("abort", p, { once: !0 }), m;
}
function $w(t, e = 0, n = {}) {
  typeof n != "object" && (n = {});
  const { leading: r = !1, trailing: i = !0, maxWait: o } = n, s = Array(2);
  r && (s[0] = "leading"), i && (s[1] = "trailing");
  let l, a = null;
  const c = Fw(function(...f) {
    l = t.apply(this, f), a = null;
  }, e, { edges: s }), d = function(...f) {
    return o != null && (a === null && (a = Date.now()), Date.now() - a >= o) ? (l = t.apply(this, f), a = Date.now(), c.cancel(), c.schedule(), l) : (c.apply(this, f), l);
  }, u = () => (c.flush(), l);
  return d.cancel = c.cancel, d.flush = u, d;
}
function br(t, e = 0, n = {}) {
  const { leading: r = !0, trailing: i = !0 } = n;
  return $w(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
function pd(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(t) === "[object Object]" : !1;
}
function jw(t, e, n) {
  return fr(t, e, void 0, void 0, void 0, void 0, n);
}
function fr(t, e, n, r, i, o, s) {
  const l = s(t, e, n, r, i, o);
  if (l !== void 0)
    return l;
  if (typeof t == typeof e)
    switch (typeof t) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return t === e;
      case "number":
        return t === e || Object.is(t, e);
      case "function":
        return t === e;
      case "object":
        return wr(t, e, o, s);
    }
  return wr(t, e, o, s);
}
function wr(t, e, n, r) {
  if (Object.is(t, e))
    return !0;
  let i = Xi(t), o = Xi(e);
  if (i === Yi && (i = Ei), o === Yi && (o = Ei), i !== o)
    return !1;
  switch (i) {
    case Ea:
      return t.toString() === e.toString();
    case Oa: {
      const a = t.valueOf(), c = e.valueOf();
      return ml(a, c);
    }
    case La:
    case Fp:
    case Bp:
      return Object.is(t.valueOf(), e.valueOf());
    case zp:
      return t.source === e.source && t.flags === e.flags;
    case hw:
      return t === e;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const s = n.get(t), l = n.get(e);
  if (s != null && l != null)
    return s === e;
  n.set(t, e), n.set(e, t);
  try {
    switch (i) {
      case $p: {
        if (t.size !== e.size)
          return !1;
        for (const [a, c] of t.entries())
          if (!e.has(a) || !fr(c, e.get(a), a, t, e, n, r))
            return !1;
        return !0;
      }
      case jp: {
        if (t.size !== e.size)
          return !1;
        const a = Array.from(t.values()), c = Array.from(e.values());
        for (let d = 0; d < a.length; d++) {
          const u = a[d], f = c.findIndex((p) => fr(u, p, void 0, t, e, n, r));
          if (f === -1)
            return !1;
          c.splice(f, 1);
        }
        return !0;
      }
      case Wp:
      case qp:
      case Jp:
      case Gp:
      case Zp:
      case gw:
      case Xp:
      case Yp:
      case Qp:
      case yw:
      case eh:
      case th: {
        if (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e) || t.length !== e.length)
          return !1;
        for (let a = 0; a < t.length; a++)
          if (!fr(t[a], e[a], a, t, e, n, r))
            return !1;
        return !0;
      }
      case Up:
        return t.byteLength !== e.byteLength ? !1 : wr(new Uint8Array(t), new Uint8Array(e), n, r);
      case Kp:
        return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset ? !1 : wr(new Uint8Array(t), new Uint8Array(e), n, r);
      case mw:
        return t.name === e.name && t.message === e.message;
      case Ei: {
        if (!(wr(t.constructor, e.constructor, n, r) || pd(t) && pd(e)))
          return !1;
        const c = [...Object.keys(t), ...Zi(t)], d = [...Object.keys(e), ...Zi(e)];
        if (c.length !== d.length)
          return !1;
        for (let u = 0; u < c.length; u++) {
          const f = c[u], p = t[f];
          if (!Object.hasOwn(e, f))
            return !1;
          const h = e[f];
          if (!fr(p, h, f, t, e, n, r))
            return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    n.delete(t), n.delete(e);
  }
}
function Ww() {
}
function hd(t, e) {
  return jw(t, e, Ww);
}
function Uw(t) {
  return typeof Buffer < "u" && Buffer.isBuffer(t);
}
function Kw(t) {
  const e = t?.constructor, n = typeof e == "function" ? e.prototype : Object.prototype;
  return t === n;
}
function qw(t) {
  return nh(t);
}
function Jw(t, e) {
  if (t = zw(t), t < 1 || !Number.isSafeInteger(t))
    return [];
  const n = new Array(t);
  for (let r = 0; r < t; r++)
    n[r] = typeof e == "function" ? e(r) : r;
  return n;
}
function ih(t) {
  if (t == null)
    return [];
  switch (typeof t) {
    case "object":
    case "function":
      return Qo(t) ? Zw(t) : Kw(t) ? Gw(t) : Qi(t);
    default:
      return Qi(Object(t));
  }
}
function Qi(t) {
  const e = [];
  for (const n in t)
    e.push(n);
  return e;
}
function Gw(t) {
  return Qi(t).filter((n) => n !== "constructor");
}
function Zw(t) {
  const e = Jw(t.length, (i) => `${i}`), n = new Set(e);
  Uw(t) && (n.add("offset"), n.add("parent")), qw(t) && (n.add("buffer"), n.add("byteLength"), n.add("byteOffset"));
  const r = Qi(t).filter((i) => !n.has(i));
  return Array.isArray(t) ? [...e, ...r] : [...e.filter((i) => Object.hasOwn(t, i)), ...r];
}
function Xw(t) {
  if (typeof t != "object" || t == null)
    return !1;
  if (Object.getPrototypeOf(t) === null)
    return !0;
  if (Object.prototype.toString.call(t) !== "[object Object]") {
    const n = t[Symbol.toStringTag];
    return n == null || !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable ? !1 : t.toString() === `[object ${n}]`;
  }
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function oh(t) {
  const e = [];
  for (; t; )
    e.push(...Zi(t)), t = Object.getPrototypeOf(t);
  return e;
}
function Yw(t, ...e) {
  if (t == null)
    return {};
  e = Bw(e);
  const n = Qw(t, e);
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    switch (typeof i) {
      case "object": {
        Array.isArray(i) || (i = Array.from(i));
        for (let o = 0; o < i.length; o++) {
          const s = i[o];
          ud(n, s);
        }
        break;
      }
      case "string":
      case "symbol":
      case "number": {
        ud(n, i);
        break;
      }
    }
  }
  return n;
}
function Qw(t, e) {
  return e.some((r) => Array.isArray(r) || es(r)) ? tv(t) : ev(t);
}
function ev(t) {
  const e = {}, n = [...ih(t), ...oh(t)];
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    e[i] = t[i];
  }
  return e;
}
function tv(t) {
  const e = {}, n = [...ih(t), ...oh(t)];
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    e[i] = rh(t[i], (o) => {
      if (!Xw(o))
        return o;
    });
  }
  return e;
}
function nv(t, e, n) {
  return t < e ? e : t > n ? n : t;
}
const bl = (t) => typeof t == "number", vr = (t) => typeof t == "string", Gn = (t) => typeof t == "boolean";
function rv(t) {
  return typeof t == "function";
}
function kr(t, e = "px") {
  if (!t)
    return t;
  const n = bl(t) ? String(t) : t, r = Number.parseFloat(n), i = n.match(/[a-zA-Z%]+$/), o = i ? i[0] : e;
  return Number.isNaN(r) ? t : r + o;
}
function iv(t, e) {
  const { extensions: n = [] } = t.extensionManager ?? {};
  return !!n.find((i) => i.name === e);
}
function md(t, e) {
  const { schema: n } = t, r = n.marks[e], i = n.nodes[e];
  return r ? t.isActive(r.name) : i ? t.isActive(i.name) : !1;
}
function sh(t, e) {
  const { state: n } = Yo(), r = U(() => Gn(M(t)) ? qi : vr(n.defaultMarkdownTheme) && n.defaultMarkdownTheme ? n.defaultMarkdownTheme : qi), i = U(() => ({
    [`markdown-theme-${M(r)}`]: !!vr(M(r))
  }));
  function o(l) {
    !Gn(M(t)) && M(t) !== l && e?.(l);
  }
  return Ot(r, (l) => o(l)), Ot(t, (l) => {
    l && vr(l) && n.defaultMarkdownTheme !== l && (n.defaultMarkdownTheme = l);
  }), n.defaultMarkdownTheme && o(n.defaultMarkdownTheme), {
    markdownThemeStyle: i
  };
}
function ov(t, e) {
  return Kl() ? (_m(t, e), !0) : !1;
}
const Bn = /* @__PURE__ */ new WeakMap(), sv = /* @__NO_SIDE_EFFECTS__ */ (...t) => {
  var e;
  const n = t[0], r = (e = Gr()) === null || e === void 0 ? void 0 : e.proxy, i = r ?? Kl();
  if (i == null && !Dm()) throw new Error("injectLocal must be called in setup");
  return i && Bn.has(i) && n in Bn.get(i) ? Bn.get(i)[n] : Su(...t);
};
function lv(t, e) {
  var n;
  const r = (n = Gr()) === null || n === void 0 ? void 0 : n.proxy, i = r ?? Kl();
  if (i == null) throw new Error("provideLocal must be called in setup");
  Bn.has(i) || Bn.set(i, /* @__PURE__ */ Object.create(null));
  const o = Bn.get(i);
  return o[t] = e, Ni(t, e);
}
// @__NO_SIDE_EFFECTS__
function av(t, e) {
  const n = Symbol(t.name || "InjectionState"), r = void 0;
  return [(...s) => {
    const l = t(...s);
    return lv(n, l), l;
  }, () => /* @__PURE__ */ sv(n, r)];
}
const lh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cv = Object.prototype.toString, dv = (t) => cv.call(t) === "[object Object]";
function Es(t) {
  return Array.isArray(t) ? t : [t];
}
function uv(t) {
  return Gr();
}
function fv(t, e = !0, n) {
  uv() ? Jr(t, n) : e ? t() : Ul(t);
}
function pv(t, e, n) {
  return Ot(t, e, {
    ...n,
    immediate: !0
  });
}
const hv = lh ? window : void 0, mv = lh ? window.document : void 0;
function wl(t) {
  var e;
  const n = Ci(t);
  return (e = n?.$el) !== null && e !== void 0 ? e : n;
}
function gd(...t) {
  const e = (r, i, o, s) => (r.addEventListener(i, o, s), () => r.removeEventListener(i, o, s)), n = U(() => {
    const r = Es(Ci(t[0])).filter((i) => i != null);
    return r.every((i) => typeof i != "string") ? r : void 0;
  });
  return pv(() => {
    var r, i;
    return [
      (r = (i = n.value) === null || i === void 0 ? void 0 : i.map((o) => wl(o))) !== null && r !== void 0 ? r : [hv].filter((o) => o != null),
      Es(Ci(n.value ? t[1] : t[0])),
      Es(M(n.value ? t[2] : t[1])),
      Ci(n.value ? t[3] : t[2])
    ];
  }, ([r, i, o, s], l, a) => {
    if (!r?.length || !i?.length || !o?.length) return;
    const c = dv(s) ? { ...s } : s, d = r.flatMap((u) => i.flatMap((f) => o.map((p) => e(u, f, p, c))));
    a(() => {
      d.forEach((u) => u());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function gv() {
  const t = Wl(!1), e = Gr();
  return e && Jr(() => {
    t.value = !0;
  }, e), t;
}
// @__NO_SIDE_EFFECTS__
function yv(t) {
  const e = /* @__PURE__ */ gv();
  return U(() => (e.value, !!t()));
}
const yd = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function bv(t, e = {}) {
  const { document: n = mv, autoExit: r = !1 } = e, i = U(() => {
    var b;
    return (b = wl(t)) !== null && b !== void 0 ? b : n?.documentElement;
  }), o = Wl(!1), s = U(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((b) => n && b in n || i.value && b in i.value)), l = U(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((b) => n && b in n || i.value && b in i.value)), a = U(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((b) => n && b in n || i.value && b in i.value)), c = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((b) => n && b in n), d = /* @__PURE__ */ yv(() => i.value && n && s.value !== void 0 && l.value !== void 0 && a.value !== void 0), u = () => c ? n?.[c] === i.value : !1, f = () => {
    if (a.value) {
      if (n && n[a.value] != null) return n[a.value];
      {
        const b = i.value;
        if (b?.[a.value] != null) return !!b[a.value];
      }
    }
    return !1;
  };
  async function p() {
    if (!(!d.value || !o.value)) {
      if (l.value) if (n?.[l.value] != null) await n[l.value]();
      else {
        const b = i.value;
        b?.[l.value] != null && await b[l.value]();
      }
      o.value = !1;
    }
  }
  async function h() {
    if (!d.value || o.value) return;
    f() && await p();
    const b = i.value;
    s.value && b?.[s.value] != null && (await b[s.value](), o.value = !0);
  }
  async function m() {
    await (o.value ? p() : h());
  }
  const g = () => {
    const b = f();
    (!b || b && u()) && (o.value = b);
  }, y = {
    capture: !1,
    passive: !0
  };
  return gd(n, yd, g, y), gd(() => wl(i), yd, g, y), fv(g, !1), r && ov(p), {
    isSupported: d,
    isFullscreen: o,
    enter: h,
    exit: p,
    toggle: m
  };
}
const [wv, Ha] = /* @__PURE__ */ av(() => {
  const { state: t } = Yo(), e = Or({
    extensions: t.extensions ?? [],
    defaultLang: ul,
    defaultMarkdownTheme: qi,
    isFullscreen: !1,
    color: void 0,
    highlight: void 0
  }), n = U(() => e.isFullscreen);
  function r() {
    e.isFullscreen = !e.isFullscreen;
  }
  return Tn(() => {
    e.extensions = t.extensions, e.defaultLang = t.defaultLang, e.defaultMarkdownTheme = t.defaultMarkdownTheme;
  }), {
    state: e,
    isFullscreen: n,
    toggleFullscreen: r
  };
}), bd = "[vuetify-pro-tiptap]";
class vl {
  static warn(e) {
    console.warn(`${bd}: ${e}`);
  }
  static error(e) {
    console.error(`${bd}: ${e}`);
  }
}
function vv(t) {
  return t = t || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: t,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(e, n) {
      const r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(e, n) {
      const r = t.get(e);
      r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : t.set(e, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(e, n) {
      let r = t.get(e);
      r && r.slice().map((i) => {
        i(n);
      }), r = t.get("*"), r && r.slice().map((i) => {
        i(e, n);
      });
    }
  };
}
const kv = {
  "editor.remove": "Entfernen",
  "editor.words": "WÖRTER",
  "editor.characters": "ZEICHEN",
  "editor.default": "Standard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Mittel",
  "editor.size.large.tooltip": "Groß",
  "editor.bold.tooltip": "Fett",
  "editor.italic.tooltip": "Kursiv",
  "editor.underline.tooltip": "Unterstrichen",
  "editor.strike.tooltip": "Durchgestrichen",
  "editor.color.tooltip": "Farbe",
  "editor.highlight.tooltip": "Hervorheben",
  "editor.heading.tooltip": "Überschriften",
  "editor.heading.h1.tooltip": "Überschrift 1",
  "editor.heading.h2.tooltip": "Überschrift 2",
  "editor.heading.h3.tooltip": "Überschrift 3",
  "editor.heading.h4.tooltip": "Überschrift 4",
  "editor.heading.h5.tooltip": "Überschrift 5",
  "editor.heading.h6.tooltip": "Überschrift 6",
  "editor.paragraph.tooltip": "Absatz",
  "editor.textalign.tooltip": "Ausrichten",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Zentriert",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Blocksatz",
  "editor.fontFamily.tooltip": "Schriftart",
  "editor.fontSize.tooltip": "Schriftgröße",
  "editor.superscript.tooltip": "Hochgestellt",
  "editor.subscript.tooltip": "Tiefgestellt",
  "editor.bulletlist.tooltip": "Aufzählungsliste",
  "editor.orderedlist.tooltip": "Nummerierte Liste",
  "editor.tasklist.tooltip": "Aufgabenliste",
  "editor.indent.tooltip": "Einzug",
  "editor.outdent.tooltip": "Ausrücken",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link entfernen",
  "editor.link.open": "Link öffnen",
  "editor.link.dialog.title": "Link einfügen",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.openInNewTab": "In neuem Tab öffnen",
  "editor.link.dialog.button.apply": "Anwenden",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Bild",
  "editor.image.float.left.tooltip": "Links ausrichten",
  "editor.image.float.none.tooltip": "Keine Ausrichtung",
  "editor.image.float.right.tooltip": "Rechts ausrichten",
  "editor.image.dialog.title": "Bild einfügen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Hochladen",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Original-Seitenverhältnis beibehalten",
  "editor.image.dialog.form.file": "Datei",
  "editor.image.dialog.button.apply": "Anwenden",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video einfügen",
  "editor.video.dialog.link": "Link",
  "editor.video.dialog.button.apply": "Anwenden",
  "editor.table.tooltip": "Tabelle",
  "editor.table.menu.insert_table": "Tabelle einfügen",
  "editor.table.menu.insert_table.with_header_row": "Mit Kopfzeile",
  "editor.table.menu.add_column_before": "Spalte davor einfügen",
  "editor.table.menu.add_column_after": "Spalte danach einfügen",
  "editor.table.menu.delete_column": "Spalte löschen",
  "editor.table.menu.add_row_before": "Zeile davor einfügen",
  "editor.table.menu.add_row_after": "Zeile danach einfügen",
  "editor.table.menu.delete_row": "Zeile löschen",
  "editor.table.menu.merge_or_split_cells": "Zellen zusammenführen oder teilen",
  "editor.table.menu.delete_table": "Tabelle löschen",
  "editor.blockquote.tooltip": "Zitat",
  "editor.horizontalrule.tooltip": "Horizontale Linie",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Codeblock",
  "editor.clear.tooltip": "Formatierung löschen",
  "editor.undo.tooltip": "Rückgängig",
  "editor.redo.tooltip": "Wiederholen",
  "editor.fullscreen.tooltip.fullscreen": "Vollbild",
  "editor.fullscreen.tooltip.exit": "Vollbild beenden"
}, xv = {
  "editor.remove": "Remove",
  "editor.words": "WORDS",
  "editor.characters": "CHARACTERS",
  "editor.default": "default",
  "editor.size.small.tooltip": "Small",
  "editor.size.medium.tooltip": "Medium",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Bold",
  "editor.italic.tooltip": "Italic",
  "editor.underline.tooltip": "Underline",
  "editor.strike.tooltip": "Strike",
  "editor.color.tooltip": "Color",
  "editor.highlight.tooltip": "Highlight",
  "editor.heading.tooltip": "Headings",
  "editor.heading.h1.tooltip": "Heading 1",
  "editor.heading.h2.tooltip": "Heading 2",
  "editor.heading.h3.tooltip": "Heading 3",
  "editor.heading.h4.tooltip": "Heading 4",
  "editor.heading.h5.tooltip": "Heading 5",
  "editor.heading.h6.tooltip": "Heading 6",
  "editor.paragraph.tooltip": "Paragraph",
  "editor.textalign.tooltip": "Align",
  "editor.textalign.left.tooltip": "Left",
  "editor.textalign.center.tooltip": "Center",
  "editor.textalign.right.tooltip": "Right",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font family",
  "editor.fontSize.tooltip": "Font size",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Bullet List",
  "editor.orderedlist.tooltip": "Ordered List",
  "editor.tasklist.tooltip": "Task List",
  "editor.indent.tooltip": "Indent",
  "editor.outdent.tooltip": "Outdent",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Unlink",
  "editor.link.open": "Open link",
  "editor.link.dialog.title": "Insert link",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.openInNewTab": "Open in new tab",
  "editor.link.dialog.button.apply": "apply",
  "editor.markdownTheme.tooltip": "Theme",
  "editor.image.tooltip": "Image",
  "editor.image.float.left.tooltip": "Float left",
  "editor.image.float.none.tooltip": "Float none",
  "editor.image.float.right.tooltip": "Float right",
  "editor.image.dialog.title": "Insert image",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Lock original aspect ratio",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "apply",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Insert video",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "apply",
  "editor.table.tooltip": "Table",
  "editor.table.menu.insert_table": "Insert Table",
  "editor.table.menu.insert_table.with_header_row": "With header row",
  "editor.table.menu.add_column_before": "Add Column Before",
  "editor.table.menu.add_column_after": "Add Column After",
  "editor.table.menu.delete_column": "Delete Column",
  "editor.table.menu.add_row_before": "Add Row Before",
  "editor.table.menu.add_row_after": "Add Row After",
  "editor.table.menu.delete_row": "Delete Row",
  "editor.table.menu.merge_or_split_cells": "Merge Or Split Cells",
  "editor.table.menu.delete_table": "Delete Table",
  "editor.blockquote.tooltip": "Blockquote",
  "editor.horizontalrule.tooltip": "Horizontal Rule",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code Block",
  "editor.clear.tooltip": "Clear Format",
  "editor.undo.tooltip": "Undo",
  "editor.redo.tooltip": "Redo",
  "editor.fullscreen.tooltip.fullscreen": "Fullscreen",
  "editor.fullscreen.tooltip.exit": "Fullscreen Exit"
}, Sv = {
  "editor.remove": "Supprimer",
  "editor.words": "MOTS",
  "editor.characters": "CARACTÈRES",
  "editor.default": "par défaut",
  "editor.size.small.tooltip": "Petit",
  "editor.size.medium.tooltip": "Moyen",
  "editor.size.large.tooltip": "Couverture",
  "editor.bold.tooltip": "Gras",
  "editor.italic.tooltip": "Italique",
  "editor.underline.tooltip": "Souligné",
  "editor.strike.tooltip": "Barré",
  "editor.color.tooltip": "Couleur",
  "editor.highlight.tooltip": "Surligner",
  "editor.heading.tooltip": "Titres",
  "editor.heading.h1.tooltip": "Titre 1",
  "editor.heading.h2.tooltip": "Titre 2",
  "editor.heading.h3.tooltip": "Titre 3",
  "editor.heading.h4.tooltip": "Titre 4",
  "editor.heading.h5.tooltip": "Titre 5",
  "editor.heading.h6.tooltip": "Titre 6",
  "editor.paragraph.tooltip": "Paragraphe",
  "editor.textalign.tooltip": "Aligner",
  "editor.textalign.left.tooltip": "Gauche",
  "editor.textalign.center.tooltip": "Centre",
  "editor.textalign.right.tooltip": "Droite",
  "editor.textalign.justify.tooltip": "Justifier",
  "editor.fontFamily.tooltip": "Police",
  "editor.fontSize.tooltip": "Taille de police",
  "editor.superscript.tooltip": "Exposant",
  "editor.subscript.tooltip": "Indice",
  "editor.bulletlist.tooltip": "Liste à puces",
  "editor.orderedlist.tooltip": "Liste numérotée",
  "editor.tasklist.tooltip": "Liste de tâches",
  "editor.indent.tooltip": "Indenter",
  "editor.outdent.tooltip": "Désindenter",
  "editor.link.tooltip": "Lien",
  "editor.link.unlink.tooltip": "Supprimer le lien",
  "editor.link.open": "Ouvrir le lien",
  "editor.link.dialog.title": "Insérer un lien",
  "editor.link.dialog.link": "lien",
  "editor.link.dialog.openInNewTab": "Ouvrir dans un nouvel onglet",
  "editor.link.dialog.button.apply": "appliquer",
  "editor.markdownTheme.tooltip": "Thème",
  "editor.image.tooltip": "Image",
  "editor.image.float.left.tooltip": "Aligner à gauche",
  "editor.image.float.none.tooltip": "Sans alignement",
  "editor.image.float.right.tooltip": "Aligner à droite",
  "editor.image.dialog.title": "Insérer une image",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "téléverser",
  "editor.image.dialog.form.link": "Lien",
  "editor.image.dialog.form.alt": "Texte alternatif",
  "editor.image.dialog.form.aspectRatio": "Conserver les proportions",
  "editor.image.dialog.form.file": "Fichier",
  "editor.image.dialog.button.apply": "appliquer",
  "editor.video.tooltip": "Vidéo",
  "editor.video.dialog.title": "Insérer une vidéo",
  "editor.video.dialog.link": "lien",
  "editor.video.dialog.button.apply": "appliquer",
  "editor.table.tooltip": "Tableau",
  "editor.table.menu.insert_table": "Insérer un tableau",
  "editor.table.menu.insert_table.with_header_row": "Avec ligne d’en-tête",
  "editor.table.menu.add_column_before": "Ajouter une colonne avant",
  "editor.table.menu.add_column_after": "Ajouter une colonne après",
  "editor.table.menu.delete_column": "Supprimer la colonne",
  "editor.table.menu.add_row_before": "Ajouter une ligne avant",
  "editor.table.menu.add_row_after": "Ajouter une ligne après",
  "editor.table.menu.delete_row": "Supprimer la ligne",
  "editor.table.menu.merge_or_split_cells": "Fusionner ou diviser les cellules",
  "editor.table.menu.delete_table": "Supprimer le tableau",
  "editor.blockquote.tooltip": "Citation",
  "editor.horizontalrule.tooltip": "Ligne horizontale",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Bloc de code",
  "editor.clear.tooltip": "Effacer le formatage",
  "editor.undo.tooltip": "Annuler",
  "editor.redo.tooltip": "Rétablir",
  "editor.fullscreen.tooltip.fullscreen": "Plein écran",
  "editor.fullscreen.tooltip.exit": "Quitter le plein écran"
}, Cv = {
  "editor.remove": "Eltávolít",
  "editor.words": "SZAVAK",
  "editor.characters": "KARAKTEREK",
  "editor.default": "alapértelmezett",
  "editor.size.small.tooltip": "Kicsi",
  "editor.size.medium.tooltip": "Közepes",
  "editor.size.large.tooltip": "Nagy",
  "editor.bold.tooltip": "Félkövér",
  "editor.italic.tooltip": "Dőlt",
  "editor.underline.tooltip": "Aláhúzott",
  "editor.strike.tooltip": "Áthúzott",
  "editor.color.tooltip": "Szín",
  "editor.highlight.tooltip": "Kiemelés",
  "editor.heading.tooltip": "Címsorok",
  "editor.heading.h1.tooltip": "Címsor 1",
  "editor.heading.h2.tooltip": "Címsor 2",
  "editor.heading.h3.tooltip": "Címsor 3",
  "editor.heading.h4.tooltip": "Címsor 4",
  "editor.heading.h5.tooltip": "Címsor 5",
  "editor.heading.h6.tooltip": "Címsor 6",
  "editor.paragraph.tooltip": "Bekezdés",
  "editor.textalign.tooltip": "Igazítás",
  "editor.textalign.left.tooltip": "Balra",
  "editor.textalign.center.tooltip": "Középre",
  "editor.textalign.right.tooltip": "Jobbra",
  "editor.textalign.justify.tooltip": "Sorkizárt",
  "editor.fontFamily.tooltip": "Betűtípus",
  "editor.fontSize.tooltip": "Betűméret",
  "editor.superscript.tooltip": "Felső index",
  "editor.subscript.tooltip": "Alsó index",
  "editor.bulletlist.tooltip": "Felsorolás",
  "editor.orderedlist.tooltip": "Számozott lista",
  "editor.tasklist.tooltip": "Pipálható lista",
  "editor.indent.tooltip": "Behúzás növelése",
  "editor.outdent.tooltip": "Behúzás csökkentése",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link eltávolítása",
  "editor.link.open": "Link megnyitása",
  "editor.link.dialog.title": "Link beszúrása",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.openInNewTab": "Megnyitás új lapon",
  "editor.link.dialog.button.apply": "alkalmaz",
  "editor.markdownTheme.tooltip": "Téma",
  "editor.image.tooltip": "Kép",
  "editor.image.float.left.tooltip": "Belra lebegés",
  "editor.image.float.none.tooltip": "Nincs lebegés",
  "editor.image.float.right.tooltip": "Jobbra lebegés",
  "editor.image.dialog.title": "Kép beszúrása",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "feltöltés",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt szöveg",
  "editor.image.dialog.form.aspectRatio": "Eredeti képarány megtartása",
  "editor.image.dialog.form.file": "Fájl",
  "editor.image.dialog.button.apply": "alkalmaz",
  "editor.video.tooltip": "Videó",
  "editor.video.dialog.title": "Videó beszúrása",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "alkalmaz",
  "editor.table.tooltip": "Táblázat",
  "editor.table.menu.insert_table": "Táblázás beszúrása",
  "editor.table.menu.insert_table.with_header_row": "Címsorral",
  "editor.table.menu.add_column_before": "Oszlop beszúrása előtte",
  "editor.table.menu.add_column_after": "Oszlop beszúrása utána",
  "editor.table.menu.delete_column": "Oszlop törlése",
  "editor.table.menu.add_row_before": "Sor beszúrása előtte",
  "editor.table.menu.add_row_after": "Sor beszúrása utána",
  "editor.table.menu.delete_row": "Sor törlése",
  "editor.table.menu.merge_or_split_cells": "Cellák egyesítése vagy felosztása",
  "editor.table.menu.delete_table": "Táblázat törlése",
  "editor.blockquote.tooltip": "Idézet",
  "editor.horizontalrule.tooltip": "Vízszintes vonal",
  "editor.code.tooltip": "Kód",
  "editor.codeblock.tooltip": "Kód blokk",
  "editor.clear.tooltip": "Formázás törlése",
  "editor.undo.tooltip": "Visszavonás",
  "editor.redo.tooltip": "Ismét",
  "editor.fullscreen.tooltip.fullscreen": "Teljes képernyő",
  "editor.fullscreen.tooltip.exit": "Kilépés a teljes képernyőből"
}, Mv = {
  "editor.remove": "Rimuovi",
  "editor.words": "Parole",
  "editor.characters": "Caratteri",
  "editor.default": "Predefinito",
  "editor.size.small.tooltip": "Piccolo",
  "editor.size.medium.tooltip": "Medio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Grassetto",
  "editor.italic.tooltip": "Corsivo",
  "editor.underline.tooltip": "Sottolineato",
  "editor.strike.tooltip": "Barrato",
  "editor.color.tooltip": "Colore",
  "editor.highlight.tooltip": "Evidenzia",
  "editor.heading.tooltip": "Intestazioni",
  "editor.heading.h1.tooltip": "Intestzione 1",
  "editor.heading.h2.tooltip": "Intestzione 2",
  "editor.heading.h3.tooltip": "Intestzione 3",
  "editor.heading.h4.tooltip": "Intestazione 4",
  "editor.heading.h5.tooltip": "Intestazione 5",
  "editor.heading.h6.tooltip": "Intestazione 6",
  "editor.paragraph.tooltip": "Paragrafo",
  "editor.textalign.tooltip": "Allineamento",
  "editor.textalign.left.tooltip": "Sinistra",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Destra",
  "editor.textalign.justify.tooltip": "Giustificato",
  "editor.fontFamily.tooltip": "Tipo carattere",
  "editor.fontSize.tooltip": "Dimensione carattere",
  "editor.superscript.tooltip": "Apice",
  "editor.subscript.tooltip": "Pedice",
  "editor.bulletlist.tooltip": "Elenco puntato",
  "editor.orderedlist.tooltip": "Elenco numerato",
  "editor.tasklist.tooltip": "Elenco attività",
  "editor.indent.tooltip": "Aumenta rientro",
  "editor.outdent.tooltip": "Riduci rientro",
  "editor.link.tooltip": "Aggiungi collegamento",
  "editor.link.unlink.tooltip": "Rimuovi collegamento",
  "editor.link.open": "Apri collegamento",
  "editor.link.dialog.title": "Inserisci collegamento",
  "editor.link.dialog.link": "Collegamento",
  "editor.link.dialog.openInNewTab": "Apri in una nuova finestra",
  "editor.link.dialog.button.apply": "Applica",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Immagine",
  "editor.image.float.left.tooltip": "Allinea a sinistra",
  "editor.image.float.none.tooltip": "Nessun allineamento",
  "editor.image.float.right.tooltip": "Allinea a destra",
  "editor.image.dialog.title": "Inserisci immagine",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carica",
  "editor.image.dialog.form.link": "Collegamento",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Blocca le proporzioni originali",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "Applica",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Inserisci video",
  "editor.video.dialog.link": "Collegamento",
  "editor.video.dialog.button.apply": "Applica",
  "editor.table.tooltip": "Tabella",
  "editor.table.menu.insert_table": "Inserisci tabella",
  "editor.table.menu.insert_table.with_header_row": "Con riga intestazione",
  "editor.table.menu.add_column_before": "Aggiungi colonna prima",
  "editor.table.menu.add_column_after": "Aggiungi colonna dopo",
  "editor.table.menu.delete_column": "Elimina colonna",
  "editor.table.menu.add_row_before": "Aggiungi riga prima",
  "editor.table.menu.add_row_after": "Aggiungi riga dopo",
  "editor.table.menu.delete_row": "Elimina riga",
  "editor.table.menu.merge_or_split_cells": "Unisci o dividi celle",
  "editor.table.menu.delete_table": "Elimina tabella",
  "editor.blockquote.tooltip": "Citazione",
  "editor.horizontalrule.tooltip": "Linea orizzontale",
  "editor.code.tooltip": "Codice",
  "editor.codeblock.tooltip": "Blocco di codice",
  "editor.clear.tooltip": "Rimuovi formattazione",
  "editor.undo.tooltip": "Annulla",
  "editor.redo.tooltip": "Ripristina",
  "editor.fullscreen.tooltip.fullscreen": "Schermo intero",
  "editor.fullscreen.tooltip.exit": "Esci da schermo intero"
}, Av = {
  "editor.remove": "Verwijderen",
  "editor.words": "WOORDEN",
  "editor.characters": "KARAKTERS",
  "editor.default": "standaard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Middelmatig",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Dikgedrukt",
  "editor.italic.tooltip": "Cursief",
  "editor.underline.tooltip": "Onderstreept",
  "editor.strike.tooltip": "Doorgetrokken",
  "editor.color.tooltip": "Kleur",
  "editor.highlight.tooltip": "Markeren",
  "editor.heading.tooltip": "Koppen",
  "editor.heading.h1.tooltip": "Kop 1",
  "editor.heading.h2.tooltip": "Kop 2",
  "editor.heading.h3.tooltip": "Kop 3",
  "editor.heading.h4.tooltip": "Kop 4",
  "editor.heading.h5.tooltip": "Kop 5",
  "editor.heading.h6.tooltip": "Kop 6",
  "editor.paragraph.tooltip": "Paragraaf",
  "editor.textalign.tooltip": "Uitlijnen",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Midden",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font familie",
  "editor.fontSize.tooltip": "Font grootte",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Ongenummerde lijst",
  "editor.orderedlist.tooltip": "Genummerde lijst",
  "editor.tasklist.tooltip": "Takenlijst",
  "editor.indent.tooltip": "Inspringing vergroten",
  "editor.outdent.tooltip": "Inspringing verkleinen",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link verwijderen",
  "editor.link.open": "Link openen",
  "editor.link.dialog.title": "Link invoegen",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.openInNewTab": "Openen in nieuw tabblad",
  "editor.link.dialog.button.apply": "Toepassen",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Afbeelding",
  "editor.image.float.left.tooltip": "Zweef links",
  "editor.image.float.none.tooltip": "Niet zweven",
  "editor.image.float.right.tooltip": "Zweef rechts",
  "editor.image.dialog.title": "Afbeelding invoegen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Originele aspect ratio vastzetten",
  "editor.image.dialog.form.file": "Bestand",
  "editor.image.dialog.button.apply": "Toepassen",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video invoegen",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "Toepassen",
  "editor.table.tooltip": "Tabel",
  "editor.table.menu.insert_table": "Tabel invoegen",
  "editor.table.menu.insert_table.with_header_row": "Met kop rij",
  "editor.table.menu.add_column_before": "Kolom ervoor invoegen",
  "editor.table.menu.add_column_after": "Kolom erna invoegen",
  "editor.table.menu.delete_column": "Kolom verwijderen",
  "editor.table.menu.add_row_before": "Rij ervoor invoegen",
  "editor.table.menu.add_row_after": "Rij erna invoegen",
  "editor.table.menu.delete_row": "Rij verwijderen",
  "editor.table.menu.merge_or_split_cells": "Cellen samenvoegen/splitsen",
  "editor.table.menu.delete_table": "Tabel verwijderen",
  "editor.blockquote.tooltip": "Citaatblok",
  "editor.horizontalrule.tooltip": "Horizontale lijn",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code blok",
  "editor.clear.tooltip": "Formattering verwijderen",
  "editor.undo.tooltip": "Stap terug",
  "editor.redo.tooltip": "Stap verder",
  "editor.fullscreen.tooltip.fullscreen": "Volledig scherm",
  "editor.fullscreen.tooltip.exit": "Volledig scherm verlaten"
}, Tv = {
  "editor.remove": "Remover",
  "editor.words": "Palavras",
  "editor.characters": "Caracteres",
  "editor.default": "Padrão",
  "editor.size.small.tooltip": "Pequeno",
  "editor.size.medium.tooltip": "Médio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Negrito",
  "editor.italic.tooltip": "Itálico",
  "editor.underline.tooltip": "Sublinhado",
  "editor.strike.tooltip": "Tachado",
  "editor.color.tooltip": "Cor",
  "editor.highlight.tooltip": "Destacar",
  "editor.heading.tooltip": "Cabeçalhos",
  "editor.heading.h1.tooltip": "Cabeçalho 1",
  "editor.heading.h2.tooltip": "Cabeçalho 2",
  "editor.heading.h3.tooltip": "Cabeçalho 3",
  "editor.heading.h4.tooltip": "Cabeçalho 4",
  "editor.heading.h5.tooltip": "Cabeçalho 5",
  "editor.heading.h6.tooltip": "Cabeçalho 6",
  "editor.paragraph.tooltip": "Parágrafo",
  "editor.textalign.tooltip": "Alinhamento",
  "editor.textalign.left.tooltip": "Esquerda",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Direita",
  "editor.textalign.justify.tooltip": "Justificado",
  "editor.fontFamily.tooltip": "Fonte",
  "editor.fontSize.tooltip": "Tamanho da fonte",
  "editor.superscript.tooltip": "Sobrescrito",
  "editor.subscript.tooltip": "Subscrito",
  "editor.bulletlist.tooltip": "Lista com marcadores",
  "editor.orderedlist.tooltip": "Lista numerada",
  "editor.tasklist.tooltip": "Lista de tarefas",
  "editor.indent.tooltip": "Aumentar recuo",
  "editor.outdent.tooltip": "Diminuir recuo",
  "editor.link.tooltip": "Adicionar link",
  "editor.link.unlink.tooltip": "Remover link",
  "editor.link.open": "Abrir link",
  "editor.link.dialog.title": "Inserir link",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.openInNewTab": "Abrir em nova aba",
  "editor.link.dialog.button.apply": "Aplicar",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Imagem",
  "editor.image.float.left.tooltip": "Alinhar à esquerda",
  "editor.image.float.none.tooltip": "Sem alinhamento",
  "editor.image.float.right.tooltip": "Alinhar à direita",
  "editor.image.dialog.title": "Inserir imagem",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carregar",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Texto alternativo",
  "editor.image.dialog.form.aspectRatio": "Bloquear proporção original",
  "editor.image.dialog.form.file": "Arquivo",
  "editor.image.dialog.button.apply": "Aplicar",
  "editor.video.tooltip": "Vídeo",
  "editor.video.dialog.title": "Inserir vídeo",
  "editor.video.dialog.link": "Link",
  "editor.video.dialog.button.apply": "Aplicar",
  "editor.table.tooltip": "Tabela",
  "editor.table.menu.insert_table": "Inserir tabela",
  "editor.table.menu.insert_table.with_header_row": "Com linha de cabeçalho",
  "editor.table.menu.add_column_before": "Adicionar coluna antes",
  "editor.table.menu.add_column_after": "Adicionar coluna depois",
  "editor.table.menu.delete_column": "Excluir coluna",
  "editor.table.menu.add_row_before": "Adicionar linha antes",
  "editor.table.menu.add_row_after": "Adicionar linha depois",
  "editor.table.menu.delete_row": "Excluir linha",
  "editor.table.menu.merge_or_split_cells": "Mesclar ou dividir células",
  "editor.table.menu.delete_table": "Excluir tabela",
  "editor.blockquote.tooltip": "Citação",
  "editor.horizontalrule.tooltip": "Linha horizontal",
  "editor.code.tooltip": "Código",
  "editor.codeblock.tooltip": "Bloco de código",
  "editor.clear.tooltip": "Remover formatação",
  "editor.undo.tooltip": "Desfazer",
  "editor.redo.tooltip": "Refazer",
  "editor.fullscreen.tooltip.fullscreen": "Tela cheia",
  "editor.fullscreen.tooltip.exit": "Sair da tela cheia"
}, Ev = {
  "editor.remove": "Kaldır",
  "editor.words": "Kelime",
  "editor.characters": "Karakter",
  "editor.default": "varsayılan",
  "editor.size.small.tooltip": "Küçük",
  "editor.size.medium.tooltip": "Orta",
  "editor.size.large.tooltip": "Kapak",
  "editor.bold.tooltip": "Kalın",
  "editor.italic.tooltip": "İtalik",
  "editor.underline.tooltip": "Altı Çizili",
  "editor.strike.tooltip": "Üstü Çizili",
  "editor.color.tooltip": "Renk",
  "editor.highlight.tooltip": "Vurgula",
  "editor.heading.tooltip": "Başlıklar",
  "editor.heading.h1.tooltip": "Başlık 1",
  "editor.heading.h2.tooltip": "Başlık 2",
  "editor.heading.h3.tooltip": "Başlık 3",
  "editor.heading.h4.tooltip": "Başlık 4",
  "editor.heading.h5.tooltip": "Başlık 5",
  "editor.heading.h6.tooltip": "Başlık 6",
  "editor.paragraph.tooltip": "Paragraf",
  "editor.textalign.tooltip": "Hizala",
  "editor.textalign.left.tooltip": "Sola",
  "editor.textalign.center.tooltip": "Ortala",
  "editor.textalign.right.tooltip": "Sağa",
  "editor.textalign.justify.tooltip": "İki Yana Yasla",
  "editor.fontFamily.tooltip": "Yazı Tipi",
  "editor.fontSize.tooltip": "Yazı Boyutu",
  "editor.superscript.tooltip": "Üst Simge",
  "editor.subscript.tooltip": "Alt Simge",
  "editor.bulletlist.tooltip": "Noktalı Liste",
  "editor.orderedlist.tooltip": "Numaralı Liste",
  "editor.tasklist.tooltip": "Görev Listesi",
  "editor.indent.tooltip": "Girinti",
  "editor.outdent.tooltip": "Çıkıntı",
  "editor.link.tooltip": "Bağlantı",
  "editor.link.unlink.tooltip": "Bağlantıyı Kaldır",
  "editor.link.open": "Bağlantıyı Aç",
  "editor.link.dialog.title": "Bağlantı Ekle",
  "editor.link.dialog.link": "bağlantı",
  "editor.link.dialog.openInNewTab": "Yeni sekmede aç",
  "editor.link.dialog.button.apply": "Uygula",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Resim",
  "editor.image.float.left.tooltip": "Sola Yasla",
  "editor.image.float.none.tooltip": "Hizalamayı Kaldır",
  "editor.image.float.right.tooltip": "Sağa Yasla",
  "editor.image.dialog.title": "Resim Ekle",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Yükle",
  "editor.image.dialog.form.link": "Bağlantı",
  "editor.image.dialog.form.alt": "Alternatif Metin",
  "editor.image.dialog.form.aspectRatio": "Orijinal En/Boy Oranını Koru",
  "editor.image.dialog.form.file": "Dosya",
  "editor.image.dialog.button.apply": "Uygula",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video Ekle",
  "editor.video.dialog.link": "bağlantı",
  "editor.video.dialog.button.apply": "Uygula",
  "editor.table.tooltip": "Tablo",
  "editor.table.menu.insert_table": "Tablo Ekle",
  "editor.table.menu.insert_table.with_header_row": "Başlık Satırıyla",
  "editor.table.menu.add_column_before": "Önce Sütun Ekle",
  "editor.table.menu.add_column_after": "Sonra Sütun Ekle",
  "editor.table.menu.delete_column": "Sütunu Sil",
  "editor.table.menu.add_row_before": "Önce Satır Ekle",
  "editor.table.menu.add_row_after": "Sonra Satır Ekle",
  "editor.table.menu.delete_row": "Satırı Sil",
  "editor.table.menu.merge_or_split_cells": "Hücreleri Birleştir veya Ayır",
  "editor.table.menu.delete_table": "Tabloyu Sil",
  "editor.blockquote.tooltip": "Alıntı",
  "editor.horizontalrule.tooltip": "Yatay Çizgi",
  "editor.code.tooltip": "Kod",
  "editor.codeblock.tooltip": "Kod Bloğu",
  "editor.clear.tooltip": "Biçimlendirmeyi Temizle",
  "editor.undo.tooltip": "Geri Al",
  "editor.redo.tooltip": "İleri Al",
  "editor.fullscreen.tooltip.fullscreen": "Tam Ekran",
  "editor.fullscreen.tooltip.exit": "Tam Ekrandan Çık"
}, Ov = {
  "editor.remove": "删除",
  "editor.words": "单词",
  "editor.characters": "字符",
  "editor.default": "默认",
  "editor.size.small.tooltip": "小尺寸",
  "editor.size.medium.tooltip": "中等尺寸",
  "editor.size.large.tooltip": "铺满",
  "editor.bold.tooltip": "粗体",
  "editor.italic.tooltip": "斜体",
  "editor.underline.tooltip": "下划线",
  "editor.strike.tooltip": "中划线",
  "editor.color.tooltip": "文本颜色",
  "editor.highlight.tooltip": "文本高亮",
  "editor.heading.tooltip": "标题",
  "editor.heading.h1.tooltip": "标题 1",
  "editor.heading.h2.tooltip": "标题 2",
  "editor.heading.h3.tooltip": "标题 3",
  "editor.heading.h4.tooltip": "标题 4",
  "editor.heading.h5.tooltip": "标题 5",
  "editor.heading.h6.tooltip": "标题 6",
  "editor.paragraph.tooltip": "正文",
  "editor.textalign.tooltip": "对齐方式",
  "editor.textalign.left.tooltip": "左对齐",
  "editor.textalign.center.tooltip": "居中对齐",
  "editor.textalign.right.tooltip": "右对齐",
  "editor.textalign.justify.tooltip": "两端对齐",
  "editor.fontFamily.tooltip": "字体",
  "editor.fontSize.tooltip": "字体大小",
  "editor.superscript.tooltip": "上标",
  "editor.subscript.tooltip": "下标",
  "editor.bulletlist.tooltip": "无序列表",
  "editor.orderedlist.tooltip": "有序列表",
  "editor.tasklist.tooltip": "任务列表",
  "editor.indent.tooltip": "增加缩进",
  "editor.outdent.tooltip": "减少缩进",
  "editor.link.tooltip": "网络链接",
  "editor.link.unlink.tooltip": "取消链接",
  "editor.link.open": "打开链接",
  "editor.link.dialog.title": "插入链接",
  "editor.link.dialog.link": "链接",
  "editor.link.dialog.openInNewTab": "在新标签页中打开",
  "editor.link.dialog.button.apply": "应用",
  "editor.markdownTheme.tooltip": "主题",
  "editor.image.tooltip": "图片",
  "editor.image.float.left.tooltip": "左浮动",
  "editor.image.float.none.tooltip": "无浮动",
  "editor.image.float.right.tooltip": "右浮动",
  "editor.image.dialog.title": "插入图片",
  "editor.image.dialog.tab.url": "网络图片",
  "editor.image.dialog.tab.upload": "本地图片",
  "editor.image.dialog.form.link": "链接",
  "editor.image.dialog.form.alt": "说明",
  "editor.image.dialog.form.aspectRatio": "锁定原有长宽比",
  "editor.image.dialog.form.file": "文件",
  "editor.image.dialog.button.apply": "应用",
  "editor.video.tooltip": "视频",
  "editor.video.dialog.title": "插入视频",
  "editor.video.dialog.link": "网络链接",
  "editor.video.dialog.button.apply": "应用",
  "editor.table.tooltip": "表格",
  "editor.table.menu.insert_table": "插入表格",
  "editor.table.menu.insert_table.with_header_row": "带标题行",
  "editor.table.menu.add_column_before": "向左插入一列",
  "editor.table.menu.add_column_after": "向右插入一列",
  "editor.table.menu.delete_column": "删除列",
  "editor.table.menu.add_row_before": "向上插入一行",
  "editor.table.menu.add_row_after": "向下插入一行",
  "editor.table.menu.delete_row": "删除行",
  "editor.table.menu.merge_or_split_cells": "合并或拆分单元格",
  "editor.table.menu.delete_table": "删除表格",
  "editor.blockquote.tooltip": "引用",
  "editor.horizontalrule.tooltip": "分隔线",
  "editor.code.tooltip": "代码",
  "editor.codeblock.tooltip": "代码块",
  "editor.clear.tooltip": "清除格式",
  "editor.undo.tooltip": "撤销",
  "editor.redo.tooltip": "重做",
  "editor.fullscreen.tooltip.fullscreen": "全屏",
  "editor.fullscreen.tooltip.exit": "退出全屏"
}, Lv = {
  nl: Av,
  tr: Ev,
  zhHans: Ov,
  en: xv,
  de: kv,
  fr: Sv,
  it: Mv,
  pt: Tv,
  hu: Cv
}, Hv = {
  lang: ul,
  fallbackLang: ul,
  message: Lv
};
class Vv {
  /**
   * Mitt event emitter for handling language change events.
   */
  emitter = vv();
  /**
   * Private property to store the current locale settings.
   */
  _locale = Hv;
  /**
   * Get the current language code.
   * @returns The current language code.
   */
  get lang() {
    return this._locale.lang;
  }
  /**
   * Set the current language code.
   * If the provided language is not supported, it sets the language to the fallback language.
   * @param lang - The new language code to set.
   */
  set lang(e) {
    this.isLangSupported(e) ? this._locale.lang = e : (vl.warn(`Can't find the current language "${e}", Using fallback language "${this._locale.fallbackLang}" instead.`), this._locale.lang = this._locale.fallbackLang), this.emitter.emit("lang", this._locale.lang);
  }
  /**
   * Get the fallback language code.
   * @returns The fallback language code.
   */
  get fallbackLang() {
    return this._locale.fallbackLang;
  }
  /**
   * Set the fallback language code.
   * If the provided language is not supported, it logs a warning and keeps the current fallback language.
   * @param lang - The new fallback language code to set.
   */
  set fallbackLang(e) {
    if (!this.isLangSupported(e)) {
      vl.warn(`Can't find the fallback language "${e}", Using language "${this._locale.fallbackLang}" by default`);
      return;
    }
    this._locale.fallbackLang = e;
  }
  /**
   * Get the language message records.
   * @returns The language message records.
   */
  get message() {
    return this._locale.message;
  }
  /**
   * Set the language message records.
   * @param message - The new language message records to set.
   */
  set message(e) {
    this._locale.message = e;
  }
  /**
   * Load the message records for a specific language.
   * @param lang - The language code to load messages for.
   * @returns The message records for the specified language.
   */
  loadLangMessage(e) {
    return this.message[e] || {};
  }
  /**
   * Check if a given language is supported.
   * @param lang - The language code to check.
   * @returns True if the language is supported, false otherwise.
   */
  isLangSupported(e) {
    return Object.keys(this.message).includes(e);
  }
  /**
   * Public method to set the current language.
   * @param lang - The new language code to set.
   */
  setLang(e) {
    this.lang = e;
  }
  /**
   * Public method to set the fallback language.
   * @param lang - The new fallback language code to set.
   */
  setFallbackLang(e) {
    this.fallbackLang = e;
  }
  /**
   * Public method to register a callback for language change events.
   * @param hook - The callback function to be called when the language changes.
   * @returns An object with an unsubscribe method to stop listening to the event.
   */
  registerWatchLang(e) {
    return this.emitter.on("lang", e), {
      unsubscribe: () => this.emitter.off("lang", e)
    };
  }
  /**
   * Public method to set the message records for a specific language.
   * @param lang - The language code to set messages for.
   * @param message - The message records to set for the specified language.
   */
  setMessage(e, n) {
    this.message[e] = n;
  }
  /**
   * Build an internationalization handler function.
   * @param lang - Optional language code. If not provided, the current language will be used.
   * @returns A function that takes a message path and returns the translated message.
   */
  buildI18nHandler(e) {
    const n = e || this.lang, r = this.loadLangMessage(n), i = this.loadLangMessage(this.fallbackLang);
    return (o) => r[o] || i[o] || o;
  }
}
const xr = new Vv();
function Rt() {
  const t = ee(xr.lang), e = U(() => xr.buildI18nHandler(M(t)));
  return Tn((n) => {
    const r = xr.registerWatchLang((i) => {
      t.value = i;
    });
    n(() => r.unsubscribe());
  }), {
    lang: t,
    t: e
  };
}
const ah = ["top", "right", "bottom", "left"], wd = ["start", "end"], vd = /* @__PURE__ */ ah.reduce((t, e) => t.concat(e, e + "-" + wd[0], e + "-" + wd[1]), []), pt = Math.min, Ve = Math.max, eo = Math.round, dt = (t) => ({
  x: t,
  y: t
}), Nv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rv = {
  start: "end",
  end: "start"
};
function kl(t, e, n) {
  return Ve(t, pt(e, n));
}
function It(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ze(t) {
  return t.split("-")[0];
}
function et(t) {
  return t.split("-")[1];
}
function ch(t) {
  return t === "x" ? "y" : "x";
}
function Va(t) {
  return t === "y" ? "height" : "width";
}
const Iv = /* @__PURE__ */ new Set(["top", "bottom"]);
function ct(t) {
  return Iv.has(Ze(t)) ? "y" : "x";
}
function Na(t) {
  return ch(ct(t));
}
function dh(t, e, n) {
  n === void 0 && (n = !1);
  const r = et(t), i = Na(t), o = Va(i);
  let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (s = no(s)), [s, no(s)];
}
function Dv(t) {
  const e = no(t);
  return [to(t), e, to(e)];
}
function to(t) {
  return t.replace(/start|end/g, (e) => Rv[e]);
}
const kd = ["left", "right"], xd = ["right", "left"], _v = ["top", "bottom"], Pv = ["bottom", "top"];
function zv(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? xd : kd : e ? kd : xd;
    case "left":
    case "right":
      return e ? _v : Pv;
    default:
      return [];
  }
}
function Bv(t, e, n, r) {
  const i = et(t);
  let o = zv(Ze(t), n === "start", r);
  return i && (o = o.map((s) => s + "-" + i), e && (o = o.concat(o.map(to)))), o;
}
function no(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Nv[e]);
}
function Fv(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ra(t) {
  return typeof t != "number" ? Fv(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Zn(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: i
  } = t;
  return {
    width: r,
    height: i,
    top: n,
    left: e,
    right: e + r,
    bottom: n + i,
    x: e,
    y: n
  };
}
function Sd(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = ct(e), s = Na(e), l = Va(s), a = Ze(e), c = o === "y", d = r.x + r.width / 2 - i.width / 2, u = r.y + r.height / 2 - i.height / 2, f = r[l] / 2 - i[l] / 2;
  let p;
  switch (a) {
    case "top":
      p = {
        x: d,
        y: r.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - i.width,
        y: u
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (et(e)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const $v = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = n, l = o.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: u
  } = Sd(c, r, a), f = r, p = {}, h = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: g,
      fn: y
    } = l[m], {
      x: b,
      y: w,
      data: k,
      reset: v
    } = await y({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = b ?? d, u = w ?? u, p = {
      ...p,
      [g]: {
        ...p[g],
        ...k
      }
    }, v && h <= 50 && (h++, typeof v == "object" && (v.placement && (f = v.placement), v.rects && (c = v.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : v.rects), {
      x: d,
      y: u
    } = Sd(c, f, a)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: i,
    middlewareData: p
  };
};
async function Xn(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: s,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = It(e, t), h = Ra(p), g = l[f ? u === "floating" ? "reference" : "floating" : u], y = Zn(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), b = u === "floating" ? {
    x: r,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), k = await (o.isElement == null ? void 0 : o.isElement(w)) ? await (o.getScale == null ? void 0 : o.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = Zn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: b,
    offsetParent: w,
    strategy: a
  }) : b);
  return {
    top: (y.top - v.top + h.top) / k.y,
    bottom: (v.bottom - y.bottom + h.bottom) / k.y,
    left: (y.left - v.left + h.left) / k.x,
    right: (v.right - y.right + h.right) / k.x
  };
}
const jv = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: o,
      platform: s,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: d = 0
    } = It(t, e) || {};
    if (c == null)
      return {};
    const u = Ra(d), f = {
      x: n,
      y: r
    }, p = Na(i), h = Va(p), m = await s.getDimensions(c), g = p === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", k = o.reference[h] + o.reference[p] - f[p] - o.floating[h], v = f[p] - o.reference[p], x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let S = x ? x[w] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(x))) && (S = l.floating[w] || o.floating[h]);
    const A = k / 2 - v / 2, V = S / 2 - m[h] / 2 - 1, R = pt(u[y], V), I = pt(u[b], V), j = R, Z = S - m[h] - I, K = S / 2 - m[h] / 2 + A, X = kl(j, K, Z), N = !a.arrow && et(i) != null && K !== X && o.reference[h] / 2 - (K < j ? R : I) - m[h] / 2 < 0, W = N ? K < j ? K - j : K - Z : 0;
    return {
      [p]: f[p] + W,
      data: {
        [p]: X,
        centerOffset: K - X - W,
        ...N && {
          alignmentOffset: W
        }
      },
      reset: N
    };
  }
});
function Wv(t, e, n) {
  return (t ? [...n.filter((i) => et(i) === t), ...n.filter((i) => et(i) !== t)] : n.filter((i) => Ze(i) === i)).filter((i) => t ? et(i) === t || (e ? to(i) !== i : !1) : !0);
}
const Uv = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, i;
      const {
        rects: o,
        middlewareData: s,
        placement: l,
        platform: a,
        elements: c
      } = e, {
        crossAxis: d = !1,
        alignment: u,
        allowedPlacements: f = vd,
        autoAlignment: p = !0,
        ...h
      } = It(t, e), m = u !== void 0 || f === vd ? Wv(u || null, p, f) : f, g = await Xn(e, h), y = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, b = m[y];
      if (b == null)
        return {};
      const w = dh(b, o, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (l !== b)
        return {
          reset: {
            placement: m[0]
          }
        };
      const k = [g[Ze(b)], g[w[0]], g[w[1]]], v = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: b,
        overflows: k
      }], x = m[y + 1];
      if (x)
        return {
          data: {
            index: y + 1,
            overflows: v
          },
          reset: {
            placement: x
          }
        };
      const S = v.map((R) => {
        const I = et(R.placement);
        return [R.placement, I && d ? (
          // Check along the mainAxis and main crossAxis side.
          R.overflows.slice(0, 2).reduce((j, Z) => j + Z, 0)
        ) : (
          // Check only the mainAxis.
          R.overflows[0]
        ), R.overflows];
      }).sort((R, I) => R[1] - I[1]), V = ((i = S.filter((R) => R[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        et(R[0]) ? 2 : 3
      ).every((I) => I <= 0))[0]) == null ? void 0 : i[0]) || S[0][0];
      return V !== l ? {
        data: {
          index: y + 1,
          overflows: v
        },
        reset: {
          placement: V
        }
      } : {};
    }
  };
}, Kv = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...g
      } = It(t, e);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const y = Ze(i), b = ct(l), w = Ze(l) === l, k = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), v = f || (w || !m ? [no(l)] : Dv(l)), x = h !== "none";
      !f && x && v.push(...Bv(l, m, h, k));
      const S = [l, ...v], A = await Xn(e, g), V = [];
      let R = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (d && V.push(A[y]), u) {
        const K = dh(i, s, k);
        V.push(A[K[0]], A[K[1]]);
      }
      if (R = [...R, {
        placement: i,
        overflows: V
      }], !V.every((K) => K <= 0)) {
        var I, j;
        const K = (((I = o.flip) == null ? void 0 : I.index) || 0) + 1, X = S[K];
        if (X && (!(u === "alignment" ? b !== ct(X) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((D) => ct(D.placement) === b ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: R
            },
            reset: {
              placement: X
            }
          };
        let N = (j = R.filter((W) => W.overflows[0] <= 0).sort((W, D) => W.overflows[1] - D.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!N)
          switch (p) {
            case "bestFit": {
              var Z;
              const W = (Z = R.filter((D) => {
                if (x) {
                  const J = ct(D.placement);
                  return J === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((J) => J > 0).reduce((J, De) => J + De, 0)]).sort((D, J) => D[1] - J[1])[0]) == null ? void 0 : Z[0];
              W && (N = W);
              break;
            }
            case "initialPlacement":
              N = l;
              break;
          }
        if (i !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function Cd(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Md(t) {
  return ah.some((e) => t[e] >= 0);
}
const qv = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...i
      } = It(t, e);
      switch (r) {
        case "referenceHidden": {
          const o = await Xn(e, {
            ...i,
            elementContext: "reference"
          }), s = Cd(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Md(s)
            }
          };
        }
        case "escaped": {
          const o = await Xn(e, {
            ...i,
            altBoundary: !0
          }), s = Cd(o, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Md(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function uh(t) {
  const e = pt(...t.map((o) => o.left)), n = pt(...t.map((o) => o.top)), r = Ve(...t.map((o) => o.right)), i = Ve(...t.map((o) => o.bottom));
  return {
    x: e,
    y: n,
    width: r - e,
    height: i - n
  };
}
function Jv(t) {
  const e = t.slice().sort((i, o) => i.y - o.y), n = [];
  let r = null;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    !r || o.y - r.y > r.height / 2 ? n.push([o]) : n[n.length - 1].push(o), r = o;
  }
  return n.map((i) => Zn(uh(i)));
}
const Gv = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      const {
        placement: n,
        elements: r,
        rects: i,
        platform: o,
        strategy: s
      } = e, {
        padding: l = 2,
        x: a,
        y: c
      } = It(t, e), d = Array.from(await (o.getClientRects == null ? void 0 : o.getClientRects(r.reference)) || []), u = Jv(d), f = Zn(uh(d)), p = Ra(l);
      function h() {
        if (u.length === 2 && u[0].left > u[1].right && a != null && c != null)
          return u.find((g) => a > g.left - p.left && a < g.right + p.right && c > g.top - p.top && c < g.bottom + p.bottom) || f;
        if (u.length >= 2) {
          if (ct(n) === "y") {
            const R = u[0], I = u[u.length - 1], j = Ze(n) === "top", Z = R.top, K = I.bottom, X = j ? R.left : I.left, N = j ? R.right : I.right, W = N - X, D = K - Z;
            return {
              top: Z,
              bottom: K,
              left: X,
              right: N,
              width: W,
              height: D,
              x: X,
              y: Z
            };
          }
          const g = Ze(n) === "left", y = Ve(...u.map((R) => R.right)), b = pt(...u.map((R) => R.left)), w = u.filter((R) => g ? R.left === b : R.right === y), k = w[0].top, v = w[w.length - 1].bottom, x = b, S = y, A = S - x, V = v - k;
          return {
            top: k,
            bottom: v,
            left: x,
            right: S,
            width: A,
            height: V,
            x,
            y: k
          };
        }
        return f;
      }
      const m = await o.getElementRects({
        reference: {
          getBoundingClientRect: h
        },
        floating: r.floating,
        strategy: s
      });
      return i.reference.x !== m.reference.x || i.reference.y !== m.reference.y || i.reference.width !== m.reference.width || i.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
}, Zv = /* @__PURE__ */ new Set(["left", "top"]);
async function Xv(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = Ze(n), l = et(n), a = ct(n) === "y", c = Zv.has(s) ? -1 : 1, d = o && a ? -1 : 1, u = It(e, t);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return l && typeof h == "number" && (p = l === "end" ? h * -1 : h), a ? {
    x: p * d,
    y: f * c
  } : {
    x: f * c,
    y: p * d
  };
}
const Yv = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: s,
        middlewareData: l
      } = e, a = await Xv(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: i + a.x,
        y: o + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, Qv = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: i
      } = e, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (g) => {
            let {
              x: y,
              y: b
            } = g;
            return {
              x: y,
              y: b
            };
          }
        },
        ...a
      } = It(t, e), c = {
        x: n,
        y: r
      }, d = await Xn(e, a), u = ct(Ze(i)), f = ch(u);
      let p = c[f], h = c[u];
      if (o) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = p + d[g], w = p - d[y];
        p = kl(b, p, w);
      }
      if (s) {
        const g = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", b = h + d[g], w = h - d[y];
        h = kl(b, h, w);
      }
      const m = l.fn({
        ...e,
        [f]: p,
        [u]: h
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [f]: o,
            [u]: s
          }
        }
      };
    }
  };
}, ek = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: i,
        rects: o,
        platform: s,
        elements: l
      } = e, {
        apply: a = () => {
        },
        ...c
      } = It(t, e), d = await Xn(e, c), u = Ze(i), f = et(i), p = ct(i) === "y", {
        width: h,
        height: m
      } = o.floating;
      let g, y;
      u === "top" || u === "bottom" ? (g = u, y = f === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = u, g = f === "end" ? "top" : "bottom");
      const b = m - d.top - d.bottom, w = h - d.left - d.right, k = pt(m - d[g], b), v = pt(h - d[y], w), x = !e.middlewareData.shift;
      let S = k, A = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (A = w), (r = e.middlewareData.shift) != null && r.enabled.y && (S = b), x && !f) {
        const R = Ve(d.left, 0), I = Ve(d.right, 0), j = Ve(d.top, 0), Z = Ve(d.bottom, 0);
        p ? A = h - 2 * (R !== 0 || I !== 0 ? R + I : Ve(d.left, d.right)) : S = m - 2 * (j !== 0 || Z !== 0 ? j + Z : Ve(d.top, d.bottom));
      }
      await a({
        ...e,
        availableWidth: A,
        availableHeight: S
      });
      const V = await s.getDimensions(l.floating);
      return h !== V.width || m !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function rs() {
  return typeof window < "u";
}
function nr(t) {
  return fh(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function je(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Dt(t) {
  var e;
  return (e = (fh(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function fh(t) {
  return rs() ? t instanceof Node || t instanceof je(t).Node : !1;
}
function tt(t) {
  return rs() ? t instanceof Element || t instanceof je(t).Element : !1;
}
function ht(t) {
  return rs() ? t instanceof HTMLElement || t instanceof je(t).HTMLElement : !1;
}
function Ad(t) {
  return !rs() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof je(t).ShadowRoot;
}
const tk = /* @__PURE__ */ new Set(["inline", "contents"]);
function Qr(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = nt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !tk.has(i);
}
const nk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function rk(t) {
  return nk.has(nr(t));
}
const ik = [":popover-open", ":modal"];
function is(t) {
  return ik.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const ok = ["transform", "translate", "scale", "rotate", "perspective"], sk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], lk = ["paint", "layout", "strict", "content"];
function Ia(t) {
  const e = Da(), n = tt(t) ? nt(t) : t;
  return ok.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || sk.some((r) => (n.willChange || "").includes(r)) || lk.some((r) => (n.contain || "").includes(r));
}
function ak(t) {
  let e = nn(t);
  for (; ht(e) && !Yn(e); ) {
    if (Ia(e))
      return e;
    if (is(e))
      return null;
    e = nn(e);
  }
  return null;
}
function Da() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ck = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Yn(t) {
  return ck.has(nr(t));
}
function nt(t) {
  return je(t).getComputedStyle(t);
}
function ss(t) {
  return tt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function nn(t) {
  if (nr(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Ad(t) && t.host || // Fallback.
    Dt(t)
  );
  return Ad(e) ? e.host : e;
}
function ph(t) {
  const e = nn(t);
  return Yn(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ht(e) && Qr(e) ? e : ph(e);
}
function hh(t, e, n) {
  var r;
  e === void 0 && (e = []);
  const i = ph(t), o = i === ((r = t.ownerDocument) == null ? void 0 : r.body), s = je(i);
  return o ? (xl(s), e.concat(s, s.visualViewport || [], Qr(i) ? i : [], [])) : e.concat(i, hh(i, []));
}
function xl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function mh(t) {
  const e = nt(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const i = ht(t), o = i ? t.offsetWidth : n, s = i ? t.offsetHeight : r, l = eo(n) !== o || eo(r) !== s;
  return l && (n = o, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function gh(t) {
  return tt(t) ? t : t.contextElement;
}
function Fn(t) {
  const e = gh(t);
  if (!ht(e))
    return dt(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = mh(e);
  let s = (o ? eo(n.width) : n.width) / r, l = (o ? eo(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const dk = /* @__PURE__ */ dt(0);
function yh(t) {
  const e = je(t);
  return !Da() || !e.visualViewport ? dk : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function uk(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== je(t) ? !1 : e;
}
function zr(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), o = gh(t);
  let s = dt(1);
  e && (r ? tt(r) && (s = Fn(r)) : s = Fn(t));
  const l = uk(o, n, r) ? yh(o) : dt(0);
  let a = (i.left + l.x) / s.x, c = (i.top + l.y) / s.y, d = i.width / s.x, u = i.height / s.y;
  if (o) {
    const f = je(o), p = r && tt(r) ? je(r) : r;
    let h = f, m = xl(h);
    for (; m && r && p !== h; ) {
      const g = Fn(m), y = m.getBoundingClientRect(), b = nt(m), w = y.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x, k = y.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      a *= g.x, c *= g.y, d *= g.x, u *= g.y, a += w, c += k, h = je(m), m = xl(h);
    }
  }
  return Zn({
    width: d,
    height: u,
    x: a,
    y: c
  });
}
function ls(t, e) {
  const n = ss(t).scrollLeft;
  return e ? e.left + n : zr(Dt(t)).left + n;
}
function bh(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - ls(t, n), i = n.top + e.scrollTop;
  return {
    x: r,
    y: i
  };
}
function fk(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: i
  } = t;
  const o = i === "fixed", s = Dt(r), l = e ? is(e.floating) : !1;
  if (r === s || l && o)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = dt(1);
  const d = dt(0), u = ht(r);
  if ((u || !u && !o) && ((nr(r) !== "body" || Qr(s)) && (a = ss(r)), ht(r))) {
    const p = zr(r);
    c = Fn(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  const f = s && !u && !o ? bh(s, a) : dt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + f.y
  };
}
function pk(t) {
  return Array.from(t.getClientRects());
}
function hk(t) {
  const e = Dt(t), n = ss(t), r = t.ownerDocument.body, i = Ve(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), o = Ve(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ls(t);
  const l = -n.scrollTop;
  return nt(r).direction === "rtl" && (s += Ve(e.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: s,
    y: l
  };
}
const Td = 25;
function mk(t, e) {
  const n = je(t), r = Dt(t), i = n.visualViewport;
  let o = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (i) {
    o = i.width, s = i.height;
    const d = Da();
    (!d || d && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  const c = ls(r);
  if (c <= 0) {
    const d = r.ownerDocument, u = d.body, f = getComputedStyle(u), p = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, h = Math.abs(r.clientWidth - u.clientWidth - p);
    h <= Td && (o -= h);
  } else c <= Td && (o += c);
  return {
    width: o,
    height: s,
    x: l,
    y: a
  };
}
const gk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function yk(t, e) {
  const n = zr(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = ht(t) ? Fn(t) : dt(1), s = t.clientWidth * o.x, l = t.clientHeight * o.y, a = i * o.x, c = r * o.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Ed(t, e, n) {
  let r;
  if (e === "viewport")
    r = mk(t, n);
  else if (e === "document")
    r = hk(Dt(t));
  else if (tt(e))
    r = yk(e, n);
  else {
    const i = yh(t);
    r = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return Zn(r);
}
function wh(t, e) {
  const n = nn(t);
  return n === e || !tt(n) || Yn(n) ? !1 : nt(n).position === "fixed" || wh(n, e);
}
function bk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = hh(t, []).filter((l) => tt(l) && nr(l) !== "body"), i = null;
  const o = nt(t).position === "fixed";
  let s = o ? nn(t) : t;
  for (; tt(s) && !Yn(s); ) {
    const l = nt(s), a = Ia(s);
    !a && l.position === "fixed" && (i = null), (o ? !a && !i : !a && l.position === "static" && !!i && gk.has(i.position) || Qr(s) && !a && wh(t, s)) ? r = r.filter((d) => d !== s) : i = l, s = nn(s);
  }
  return e.set(t, r), r;
}
function wk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? is(e) ? [] : bk(e, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, d) => {
    const u = Ed(e, d, i);
    return c.top = Ve(u.top, c.top), c.right = pt(u.right, c.right), c.bottom = pt(u.bottom, c.bottom), c.left = Ve(u.left, c.left), c;
  }, Ed(e, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function vk(t) {
  const {
    width: e,
    height: n
  } = mh(t);
  return {
    width: e,
    height: n
  };
}
function kk(t, e, n) {
  const r = ht(e), i = Dt(e), o = n === "fixed", s = zr(t, !0, o, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = dt(0);
  function c() {
    a.x = ls(i);
  }
  if (r || !r && !o)
    if ((nr(e) !== "body" || Qr(i)) && (l = ss(e)), r) {
      const p = zr(e, !0, o, e);
      a.x = p.x + e.clientLeft, a.y = p.y + e.clientTop;
    } else i && c();
  o && !r && i && c();
  const d = i && !r && !o ? bh(i, l) : dt(0), u = s.left + l.scrollLeft - a.x - d.x, f = s.top + l.scrollTop - a.y - d.y;
  return {
    x: u,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Os(t) {
  return nt(t).position === "static";
}
function Od(t, e) {
  if (!ht(t) || nt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Dt(t) === n && (n = n.ownerDocument.body), n;
}
function vh(t, e) {
  const n = je(t);
  if (is(t))
    return n;
  if (!ht(t)) {
    let i = nn(t);
    for (; i && !Yn(i); ) {
      if (tt(i) && !Os(i))
        return i;
      i = nn(i);
    }
    return n;
  }
  let r = Od(t, e);
  for (; r && rk(r) && Os(r); )
    r = Od(r, e);
  return r && Yn(r) && Os(r) && !Ia(r) ? n : r || ak(t) || n;
}
const xk = async function(t) {
  const e = this.getOffsetParent || vh, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: kk(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Sk(t) {
  return nt(t).direction === "rtl";
}
const Ck = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fk,
  getDocumentElement: Dt,
  getClippingRect: wk,
  getOffsetParent: vh,
  getElementRects: xk,
  getClientRects: pk,
  getDimensions: vk,
  getScale: Fn,
  isElement: tt,
  isRTL: Sk
}, kh = Yv, xh = Uv, Sh = Qv, Ch = Kv, Mh = ek, Ah = qv, Th = jv, Eh = Gv, Oh = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: Ck,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return $v(t, e, {
    ...i,
    platform: o
  });
};
let Sl, Cl;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  Sl = (e) => t.get(e), Cl = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  Sl = (r) => {
    for (let i = 0; i < t.length; i += 2) if (t[i] == r) return t[i + 1];
  }, Cl = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var he = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let l = 1; o < this.width && this.map[e + l] == n; l++) o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == n; l++) s++;
      return {
        left: r,
        top: i,
        right: o,
        bottom: s
      };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, n) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (n < 0 ? o - 1 : s)];
  }
  rectBetween(t, e) {
    const { left: n, right: r, top: i, bottom: o } = this.findCell(t), { left: s, right: l, top: a, bottom: c } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++) for (let i = t.left; i < t.right; i++) {
      const o = r * this.width + i, s = this.map[o];
      n[s] || (n[s] = !0, !(i == t.left && i && this.map[o - 1] == s || r == t.top && r && this.map[o - this.width] == s) && e.push(s));
    }
    return e;
  }
  positionAt(t, e, n) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + n.child(r).nodeSize;
      if (r == t) {
        let s = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; s < l && this.map[s] < i; ) s++;
        return s == l ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  static get(t) {
    return Sl(t) || Cl(t, Mk(t));
  }
};
function Mk(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  const e = Ak(t), n = t.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let c = 0, d = e * n; c < d; c++) r[c] = 0;
  for (let c = 0, d = 0; c < n; c++) {
    const u = t.child(c);
    d++;
    for (let h = 0; ; h++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (h == u.childCount) break;
      const m = u.child(h), { colspan: g, rowspan: y, colwidth: b } = m.attrs;
      for (let w = 0; w < y; w++) {
        if (w + c >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: y - w
          });
          break;
        }
        const k = i + w * e;
        for (let v = 0; v < g; v++) {
          r[k + v] == 0 ? r[k + v] = d : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: g - v
          });
          const x = b && b[v];
          if (x) {
            const S = (k + v) % e * 2, A = s[S];
            A == null || A != x && s[S + 1] == 1 ? (s[S] = x, s[S + 1] = 1) : A == x && s[S + 1]++;
          }
        }
      }
      i += g, d += m.nodeSize;
    }
    const f = (c + 1) * e;
    let p = 0;
    for (; i < f; ) r[i++] == 0 && p++;
    p && (o || (o = [])).push({
      type: "missing",
      row: c,
      n: p
    }), d++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const l = new he(e, n, r, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2) s[c] != null && s[c + 1] < n && (a = !0);
  return a && Tk(l, s, t), l;
}
function Ak(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const i = t.child(r);
    let o = 0;
    if (n) for (let s = 0; s < r; s++) {
      const l = t.child(s);
      for (let a = 0; a < l.childCount; a++) {
        const c = l.child(a);
        s + c.attrs.rowspan > r && (o += c.attrs.colspan);
      }
    }
    for (let s = 0; s < i.childCount; s++) {
      const l = i.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function Tk(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let i = 0; i < t.map.length; i++) {
    const o = t.map[i];
    if (r[o]) continue;
    r[o] = !0;
    const s = n.nodeAt(o);
    if (!s) throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const d = e[(i + c) % t.width * 2];
      d != null && (!a.colwidth || a.colwidth[c] != d) && ((l || (l = Ek(a)))[c] = d);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function Ek(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function Le(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
const jt = new ce("selectingCells");
function rr(t) {
  for (let e = t.depth - 1; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function Ok(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function it(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--) if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function as(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const n = rr(e.$head) || Lk(e.$head);
  if (n) return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function Lk(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n - e.nodeSize);
  }
}
function Ml(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function Hk(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function _a(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Lh(t, e, n) {
  const r = t.node(-1), i = he.get(r), o = t.start(-1), s = i.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function Cn(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan - n
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Hh(t, e, n = 1) {
  const r = {
    ...t,
    colspan: t.colspan + n
  };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function Vk(t, e, n) {
  const r = Le(e.type.schema).header_cell;
  for (let i = 0; i < t.height; i++) if (e.nodeAt(t.map[n + i * t.width]).type != r) return !1;
  return !0;
}
var ie = class kt extends $ {
  constructor(e, n = e) {
    const r = e.node(-1), i = he.get(r), o = e.start(-1), s = i.rectBetween(e.pos - o, n.pos - o), l = e.node(0), a = i.cellsInRect(s).filter((d) => d != n.pos - o);
    a.unshift(n.pos - o);
    const c = a.map((d) => {
      const u = r.nodeAt(d);
      if (!u) throw new RangeError(`No cell with offset ${d} found`);
      const f = o + d + 1;
      return new tf(l.resolve(f), l.resolve(f + u.content.size));
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (Ml(r) && Ml(i) && _a(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? kt.rowSelection(r, i) : o && this.isColSelection() ? kt.colSelection(r, i) : new kt(r, i);
    }
    return B.between(r, i);
  }
  content() {
    const e = this.$anchorCell.node(-1), n = he.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, s = [];
    for (let a = i.top; a < i.bottom; a++) {
      const c = [];
      for (let d = a * n.width + i.left, u = i.left; u < i.right; u++, d++) {
        const f = n.map[d];
        if (o[f]) continue;
        o[f] = !0;
        const p = n.findCell(f);
        let h = e.nodeAt(f);
        if (!h) throw new RangeError(`No cell with offset ${f} found`);
        const m = i.left - p.left, g = p.right - i.right;
        if (m > 0 || g > 0) {
          let y = h.attrs;
          if (m > 0 && (y = Cn(y, 0, m)), g > 0 && (y = Cn(y, y.colspan - g, g)), p.left < i.left) {
            if (h = h.type.createAndFill(y), !h) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(y)}`);
          } else h = h.type.create(y, h.content);
        }
        if (p.top < i.top || p.bottom > i.bottom) {
          const y = {
            ...h.attrs,
            rowspan: Math.min(p.bottom, i.bottom) - Math.max(p.top, i.top)
          };
          p.top < i.top ? h = h.type.createAndFill(y) : h = h.type.create(y, h.content);
        }
        c.push(h);
      }
      s.push(e.child(a).copy(C.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new O(C.from(l), 1, 1);
  }
  replace(e, n = O.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: l, $to: a } = i[s], c = e.mapping.slice(r);
      e.replace(c.map(l.pos), c.map(a.pos), s ? O.empty : n);
    }
    const o = $.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new O(C.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = he.get(n), i = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i));
    for (let s = 0; s < o.length; s++) e(n.nodeAt(o[s]), i + o[s]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, n = e) {
    const r = e.node(-1), i = he.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(n.pos - o), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + i.map[s.left])), l.bottom < i.height && (n = a.resolve(o + i.map[i.width * (i.height - 1) + l.right - 1]))) : (l.top > 0 && (n = a.resolve(o + i.map[l.left])), s.bottom < i.height && (e = a.resolve(o + i.map[i.width * (i.height - 1) + s.right - 1]))), new kt(e, n);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = he.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0) return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == n.width;
  }
  eq(e) {
    return e instanceof kt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, n = e) {
    const r = e.node(-1), i = he.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(n.pos - o), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(o + i.map[s.top * i.width])), l.right < i.width && (n = a.resolve(o + i.map[i.width * (l.top + 1) - 1]))) : (l.left > 0 && (n = a.resolve(o + i.map[l.top * i.width])), s.right < i.width && (e = a.resolve(o + i.map[i.width * (s.top + 1) - 1]))), new kt(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new kt(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new kt(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new Nk(this.$anchorCell.pos, this.$headCell.pos);
  }
};
ie.prototype.visible = !1;
$.jsonID("cell", ie);
var Nk = class Vh {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Vh(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && _a(n, r) ? new ie(n, r) : $.near(r, 1);
  }
};
function Rk(t) {
  if (!(t.selection instanceof ie)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(ke.node(r, r + n.nodeSize, { class: "selectedCell" }));
  }), oe.create(t.doc, e);
}
function Ik({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++) ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--) ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function Dk({ $from: t, $to: e }) {
  let n, r;
  for (let i = t.depth; i > 0; i--) {
    const o = t.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      n = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function _k(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let o, s;
  if (r instanceof P && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell") o = ie.create(i, r.from);
    else if (s == "row") {
      const l = i.resolve(r.from + 1);
      o = ie.rowSelection(l, l);
    } else if (!n) {
      const l = he.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = ie.create(i, a + 1, c);
    }
  } else r instanceof B && Ik(r) ? o = B.create(i, r.from) : r instanceof B && Dk(r) && (o = B.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
const Pk = new ce("fix-tables");
function Nh(t, e, n, r) {
  const i = t.childCount, o = e.childCount;
  e: for (let s = 0, l = 0; s < o; s++) {
    const a = e.child(s);
    for (let c = l, d = Math.min(i, s + 3); c < d; c++) if (t.child(c) == a) {
      l = c + 1, n += a.nodeSize;
      continue e;
    }
    r(a, n), l < i && t.child(l).sameMarkup(a) ? Nh(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function Rh(t, e) {
  let n;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (n = zk(t, i, o, n));
  };
  return e ? e.doc != t.doc && Nh(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function zk(t, e, n, r) {
  const i = he.get(e);
  if (!i.problems) return r;
  r || (r = t.tr);
  const o = [];
  for (let a = 0; a < i.height; a++) o.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      const u = d.attrs;
      for (let f = 0; f < u.rowspan; f++) o[c.row + f] += c.n;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, Cn(u, u.colspan - c.n, c.n));
    } else if (c.type == "missing") o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        colwidth: c.colwidth
      });
    } else if (c.type == "zero_sized") {
      const d = r.mapping.map(n);
      r.delete(d, d + e.nodeSize);
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++) o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = n + 1; a < i.height; a++) {
    const d = e.child(a), u = c + d.nodeSize, f = o[a];
    if (f > 0) {
      let p = "cell";
      d.firstChild && (p = d.firstChild.type.spec.tableRole);
      const h = [];
      for (let g = 0; g < f; g++) {
        const y = Le(t.schema)[p].createAndFill();
        y && h.push(y);
      }
      const m = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
      r.insert(r.mapping.map(m), h);
    }
    c = u;
  }
  return r.setMeta(Pk, { fixTables: !0 });
}
function mt(t) {
  const e = t.selection, n = as(t), r = n.node(-1), i = n.start(-1), o = he.get(r);
  return {
    ...e instanceof ie ? o.rectBetween(e.$anchorCell.pos - i, e.$headCell.pos - i) : o.findCell(n.pos - i),
    tableStart: i,
    map: o,
    table: r
  };
}
function Ih(t, { map: e, tableStart: n, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  Vk(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(t.mapping.map(n + a), null, Hh(c.attrs, i - e.colCount(a))), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? Le(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function Bk(t, e) {
  if (!it(t)) return !1;
  if (e) {
    const n = mt(t);
    e(Ih(t.tr, n, n.left));
  }
  return !0;
}
function Fk(t, e) {
  if (!it(t)) return !1;
  if (e) {
    const n = mt(t);
    e(Ih(t.tr, n, n.right));
  }
  return !0;
}
function $k(t, { map: e, table: n, tableStart: r }, i) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + i, a = e.map[l], c = n.nodeAt(a), d = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a) t.setNodeMarkup(t.mapping.slice(o).map(r + a), null, Cn(d, i - e.colCount(a)));
    else {
      const u = t.mapping.slice(o).map(r + a);
      t.delete(u, u + c.nodeSize);
    }
    s += d.rowspan;
  }
}
function jk(t, e) {
  if (!it(t)) return !1;
  if (e) {
    const n = mt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let i = n.right - 1; $k(r, n, i), i != n.left; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = he.get(o);
    }
    e(r);
  }
  return !0;
}
function Wk(t, e, n) {
  var r;
  const i = Le(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++) if (((r = e.nodeAt(t.map[o + n * t.width])) === null || r === void 0 ? void 0 : r.type) != i) return !1;
  return !0;
}
function Dh(t, { map: e, tableStart: n, table: r }, i) {
  let o = n;
  for (let c = 0; c < i; c++) o += r.child(c).nodeSize;
  const s = [];
  let l = i > 0 ? -1 : 0;
  Wk(e, r, i + l) && (l = i == 0 || i == e.height ? null : 0);
  for (let c = 0, d = e.width * i; c < e.width; c++, d++) if (i > 0 && i < e.height && e.map[d] == e.map[d - e.width]) {
    const u = e.map[d], f = r.nodeAt(u).attrs;
    t.setNodeMarkup(n + u, null, {
      ...f,
      rowspan: f.rowspan + 1
    }), c += f.colspan - 1;
  } else {
    var a;
    const u = l == null ? Le(r.type.schema).cell : (a = r.nodeAt(e.map[d + l * e.width])) === null || a === void 0 ? void 0 : a.type, f = u?.createAndFill();
    f && s.push(f);
  }
  return t.insert(o, Le(r.type.schema).row.create(null, s)), t;
}
function Uk(t, e) {
  if (!it(t)) return !1;
  if (e) {
    const n = mt(t);
    e(Dh(t.tr, n, n.top));
  }
  return !0;
}
function Kk(t, e) {
  if (!it(t)) return !1;
  if (e) {
    const n = mt(t);
    e(Dh(t.tr, n, n.bottom));
  }
  return !0;
}
function qk(t, { map: e, table: n, tableStart: r }, i) {
  let o = 0;
  for (let c = 0; c < i; c++) o += n.child(c).nodeSize;
  const s = o + n.child(i).nodeSize, l = t.mapping.maps.length;
  t.delete(o + r, s + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, d = i * e.width; c < e.width; c++, d++) {
    const u = e.map[d];
    if (!a.has(u)) {
      if (a.add(u), i > 0 && u == e.map[d - e.width]) {
        const f = n.nodeAt(u).attrs;
        t.setNodeMarkup(t.mapping.slice(l).map(u + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (i < e.height && u == e.map[d + e.width]) {
        const f = n.nodeAt(u), p = f.attrs, h = f.type.create({
          ...p,
          rowspan: f.attrs.rowspan - 1
        }, f.content), m = e.positionAt(i + 1, c, n);
        t.insert(t.mapping.slice(l).map(r + m), h), c += p.colspan - 1;
      }
    }
  }
}
function Jk(t, e) {
  if (!it(t)) return !1;
  if (e) {
    const n = mt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let i = n.bottom - 1; qk(r, n, i), i != n.top; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o) throw new RangeError("No table found");
      n.table = o, n.map = he.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Ld(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function Gk({ width: t, height: e, map: n }, r) {
  let i = r.top * t + r.left, o = i, s = (r.bottom - 1) * t + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && n[o] == n[o - 1] || r.right < t && n[l] == n[l + 1]) return !0;
    o += t, l += t;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && n[i] == n[i - t] || r.bottom < e && n[s] == n[s + t]) return !0;
    i++, s++;
  }
  return !1;
}
function Hd(t, e) {
  const n = t.selection;
  if (!(n instanceof ie) || n.$anchorCell.pos == n.$headCell.pos) return !1;
  const r = mt(t), { map: i } = r;
  if (Gk(i, r)) return !1;
  if (e) {
    const o = t.tr, s = {};
    let l = C.empty, a, c;
    for (let d = r.top; d < r.bottom; d++) for (let u = r.left; u < r.right; u++) {
      const f = i.map[d * i.width + u], p = r.table.nodeAt(f);
      if (!(s[f] || !p))
        if (s[f] = !0, a == null)
          a = f, c = p;
        else {
          Ld(p) || (l = l.append(p.content));
          const h = o.mapping.map(f + r.tableStart);
          o.delete(h, h + p.nodeSize);
        }
    }
    if (a == null || c == null) return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Hh(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const d = a + 1 + c.content.size, u = Ld(c) ? a + 1 : d;
      o.replaceWith(u + r.tableStart, d + r.tableStart, l);
    }
    o.setSelection(new ie(o.doc.resolve(a + r.tableStart))), e(o);
  }
  return !0;
}
function Vd(t, e) {
  const n = Le(t.schema);
  return Zk(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function Zk(t) {
  return (e, n) => {
    const r = e.selection;
    let i, o;
    if (r instanceof ie) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      i = r.$anchorCell.nodeAfter, o = r.$anchorCell.pos;
    } else {
      var s;
      if (i = Ok(r.$from), !i) return !1;
      o = (s = rr(r.$from)) === null || s === void 0 ? void 0 : s.pos;
    }
    if (i == null || o == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1) return !1;
    if (n) {
      let l = i.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = {
        ...l,
        rowspan: 1
      }), l.colspan > 1 && (l = {
        ...l,
        colspan: 1
      });
      const d = mt(e), u = e.tr;
      for (let p = 0; p < d.right - d.left; p++) a.push(c ? {
        ...l,
        colwidth: c && c[p] ? [c[p]] : null
      } : l);
      let f;
      for (let p = d.top; p < d.bottom; p++) {
        let h = d.map.positionAt(p, d.left, d.table);
        p == d.top && (h += i.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          m == d.left && p == d.top || u.insert(f = u.mapping.map(h + d.tableStart, 1), t({
            node: i,
            row: p,
            col: m
          }).createAndFill(a[g]));
      }
      u.setNodeMarkup(o, t({
        node: i,
        row: d.top,
        col: d.left
      }), a[0]), r instanceof ie && u.setSelection(new ie(u.doc.resolve(r.$anchorCell.pos), f ? u.doc.resolve(f) : void 0)), n(u);
    }
    return !0;
  };
}
function Xk(t, e) {
  return function(n, r) {
    if (!it(n)) return !1;
    const i = as(n);
    if (i.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof ie ? n.selection.forEachCell((s, l) => {
        s.attrs[t] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [t]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [t]: e
      }), r(o);
    }
    return !0;
  };
}
function Yk(t) {
  return function(e, n) {
    if (!it(e)) return !1;
    if (n) {
      const r = Le(e.schema), i = mt(e), o = e.tr, s = i.map.cellsInRect(t == "column" ? {
        left: i.left,
        top: 0,
        right: i.right,
        bottom: i.map.height
      } : t == "row" ? {
        left: 0,
        top: i.top,
        right: i.map.width,
        bottom: i.bottom
      } : i), l = s.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < s.length; a++) l[a].type == r.header_cell && o.setNodeMarkup(i.tableStart + s[a], r.cell, l[a].attrs);
      if (o.steps.length === 0) for (let a = 0; a < s.length; a++) o.setNodeMarkup(i.tableStart + s[a], r.header_cell, l[a].attrs);
      n(o);
    }
    return !0;
  };
}
function Nd(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== n.header_cell) return !1;
  }
  return !0;
}
function Br(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? Yk(t) : function(n, r) {
    if (!it(n)) return !1;
    if (r) {
      const i = Le(n.schema), o = mt(n), s = n.tr, l = Nd("row", o, i), a = Nd("column", o, i), c = (t === "column" ? l : t === "row" && a) ? 1 : 0, d = t == "column" ? {
        left: 0,
        top: c,
        right: 1,
        bottom: o.map.height
      } : t == "row" ? {
        left: c,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, u = t == "column" ? a ? i.cell : i.header_cell : t == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(d).forEach((f) => {
        const p = f + o.tableStart, h = s.doc.nodeAt(p);
        h && s.setNodeMarkup(p, u, h.attrs);
      }), r(s);
    }
    return !0;
  };
}
Br("row", { useDeprecatedLogic: !0 });
Br("column", { useDeprecatedLogic: !0 });
const Qk = Br("cell", { useDeprecatedLogic: !0 });
function ex(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, i = t.before(); r >= 0; r--) {
      const o = t.node(-1).child(r), s = o.lastChild;
      if (s) return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), i = t.after(); r < n.childCount; r++) {
      const o = n.child(r);
      if (o.childCount) return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function Rd(t) {
  return function(e, n) {
    if (!it(e)) return !1;
    const r = ex(as(e), t);
    if (r == null) return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(e.tr.setSelection(B.between(i, Hk(i))).scrollIntoView());
    }
    return !0;
  };
}
function tx(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table")
    return e && e(t.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
  return !1;
}
function pi(t, e) {
  const n = t.selection;
  if (!(n instanceof ie)) return !1;
  if (e) {
    const r = t.tr, i = Le(t.schema).cell.createAndFill().content;
    n.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(r.mapping.map(s + 1), r.mapping.map(s + o.nodeSize - 1), new O(i, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function nx(t) {
  if (t.size === 0) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
  if (o == "row") for (let a = 0; a < e.childCount; a++) {
    let c = e.child(a).content;
    const d = a ? 0 : Math.max(0, n - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (d || u) && (c = Al(Le(s).row, new O(c, d, u)).content), l.push(c);
  }
  else if (o == "cell" || o == "header_cell") l.push(n || r ? Al(Le(s).row, new O(e, n, r)).content : e);
  else return null;
  return rx(s, l);
}
function rx(t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = i; c < i + l; c++) n[c] = (n[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < n.length; i++) r = Math.max(r, n[i]);
  for (let i = 0; i < n.length; i++)
    if (i >= e.length && e.push(C.empty), n[i] < r) {
      const o = Le(t).cell.createAndFill(), s = [];
      for (let l = n[i]; l < r; l++) s.push(o);
      e[i] = e[i].append(C.from(s));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function Al(t, e) {
  const n = t.createAndFill();
  return new Yl(n).replace(0, n.content.size, e).doc;
}
function ix({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const o = [], s = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let d = o[l] || 0, u = 0; d < r; u++) {
        let f = a.child(u % a.childCount);
        d + f.attrs.colspan > r && (f = f.type.createChecked(Cn(f.attrs, f.attrs.colspan, d + f.attrs.colspan - r), f.content)), c.push(f), d += f.attrs.colspan;
        for (let p = 1; p < f.attrs.rowspan; p++) o[l + p] = (o[l + p] || 0) + f.attrs.colspan;
      }
      s.push(C.from(c));
    }
    n = s, t = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, l = 0; s < i; s++, l++) {
      const a = [], c = n[l % e];
      for (let d = 0; d < c.childCount; d++) {
        let u = c.child(d);
        s + u.attrs.rowspan > i && (u = u.type.create({
          ...u.attrs,
          rowspan: Math.max(1, i - u.attrs.rowspan)
        }, u.content)), a.push(u);
      }
      o.push(C.from(a));
    }
    n = o, e = i;
  }
  return {
    width: t,
    height: e,
    rows: n
  };
}
function ox(t, e, n, r, i, o, s) {
  const l = t.doc.type.schema, a = Le(l);
  let c, d;
  if (i > e.width) for (let u = 0, f = 0; u < e.height; u++) {
    const p = n.child(u);
    f += p.nodeSize;
    const h = [];
    let m;
    p.lastChild == null || p.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = d || (d = a.header_cell.createAndFill());
    for (let g = e.width; g < i; g++) h.push(m);
    t.insert(t.mapping.slice(s).map(f - 1 + r), h);
  }
  if (o > e.height) {
    const u = [];
    for (let h = 0, m = (e.height - 1) * e.width; h < Math.max(e.width, i); h++) {
      const g = h >= e.width ? !1 : n.nodeAt(e.map[m + h]).type == a.header_cell;
      u.push(g ? d || (d = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
    }
    const f = a.row.create(null, C.from(u)), p = [];
    for (let h = e.height; h < o; h++) p.push(f);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), p);
  }
  return !!(c || d);
}
function Id(t, e, n, r, i, o, s, l) {
  if (s == 0 || s == e.height) return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = s * e.width + c, u = e.map[d];
    if (e.map[d - e.width] == u) {
      a = !0;
      const f = n.nodeAt(u), { top: p, left: h } = e.findCell(u);
      t.setNodeMarkup(t.mapping.slice(l).map(u + r), null, {
        ...f.attrs,
        rowspan: s - p
      }), t.insert(t.mapping.slice(l).map(e.positionAt(s, h, n)), f.type.createAndFill({
        ...f.attrs,
        rowspan: p + f.attrs.rowspan - s
      })), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function Dd(t, e, n, r, i, o, s, l) {
  if (s == 0 || s == e.width) return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = c * e.width + s, u = e.map[d];
    if (e.map[d - 1] == u) {
      a = !0;
      const f = n.nodeAt(u), p = e.colCount(u), h = t.mapping.slice(l).map(u + r);
      t.setNodeMarkup(h, null, Cn(f.attrs, s - p, f.attrs.colspan - (s - p))), t.insert(h + f.nodeSize, f.type.createAndFill(Cn(f.attrs, 0, s - p))), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function _d(t, e, n, r, i) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o) throw new Error("No table found");
  let s = he.get(o);
  const { top: l, left: a } = r, c = a + i.width, d = l + i.height, u = t.tr;
  let f = 0;
  function p() {
    if (o = n ? u.doc.nodeAt(n - 1) : u.doc, !o) throw new Error("No table found");
    s = he.get(o), f = u.mapping.maps.length;
  }
  ox(u, s, o, n, c, d, f) && p(), Id(u, s, o, n, a, c, l, f) && p(), Id(u, s, o, n, a, c, d, f) && p(), Dd(u, s, o, n, l, d, a, f) && p(), Dd(u, s, o, n, l, d, c, f) && p();
  for (let h = l; h < d; h++) {
    const m = s.positionAt(h, a, o), g = s.positionAt(h, c, o);
    u.replace(u.mapping.slice(f).map(m + n), u.mapping.slice(f).map(g + n), new O(i.rows[h - l], 0, 0));
  }
  p(), u.setSelection(new ie(u.doc.resolve(n + s.positionAt(l, a, o)), u.doc.resolve(n + s.positionAt(d - 1, c - 1, o)))), e(u);
}
const sx = pa({
  ArrowLeft: hi("horiz", -1),
  ArrowRight: hi("horiz", 1),
  ArrowUp: hi("vert", -1),
  ArrowDown: hi("vert", 1),
  "Shift-ArrowLeft": mi("horiz", -1),
  "Shift-ArrowRight": mi("horiz", 1),
  "Shift-ArrowUp": mi("vert", -1),
  "Shift-ArrowDown": mi("vert", 1),
  Backspace: pi,
  "Mod-Backspace": pi,
  Delete: pi,
  "Mod-Delete": pi
});
function Oi(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function hi(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    if (o instanceof ie) return Oi(n, r, $.near(o.$headCell, e));
    if (t != "horiz" && !o.empty) return !1;
    const s = _h(i, t, e);
    if (s == null) return !1;
    if (t == "horiz") return Oi(n, r, $.near(n.doc.resolve(o.head + e), e));
    {
      const l = n.doc.resolve(s), a = Lh(l, t, e);
      let c;
      return a ? c = $.near(a, 1) : e < 0 ? c = $.near(n.doc.resolve(l.before(-1)), -1) : c = $.near(n.doc.resolve(l.after(-1)), 1), Oi(n, r, c);
    }
  };
}
function mi(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    let s;
    if (o instanceof ie) s = o;
    else {
      const a = _h(i, t, e);
      if (a == null) return !1;
      s = new ie(n.doc.resolve(a));
    }
    const l = Lh(s.$headCell, t, e);
    return l ? Oi(n, r, new ie(s.$anchorCell, l)) : !1;
  };
}
function lx(t, e) {
  const n = t.state.doc, r = rr(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new ie(r))), !0) : !1;
}
function ax(t, e, n) {
  if (!it(t.state)) return !1;
  let r = nx(n);
  const i = t.state.selection;
  if (i instanceof ie) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [C.from(Al(Le(t.state.schema).cell, n))]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = he.get(o).rectBetween(i.$anchorCell.pos - s, i.$headCell.pos - s);
    return r = ix(r, l.right - l.left, l.bottom - l.top), _d(t.state, t.dispatch, s, l, r), !0;
  } else if (r) {
    const o = as(t.state), s = o.start(-1);
    return _d(t.state, t.dispatch, s, he.get(o.node(-1)).findCell(o.pos - s), r), !0;
  } else return !1;
}
function cx(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = Pd(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof ie)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = rr(t.state.selection.$anchor)) != null && ((n = Ls(t, e)) === null || n === void 0 ? void 0 : n.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r) return;
  function o(a, c) {
    let d = Ls(t, c);
    const u = jt.getState(t.state) == null;
    if (!d || !_a(a, d)) if (u) d = a;
    else return;
    const f = new ie(a, d);
    if (u || !t.state.selection.eq(f)) {
      const p = t.state.tr.setSelection(f);
      u && p.setMeta(jt, a.pos), t.dispatch(p);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", l), jt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(jt, -1));
  }
  function l(a) {
    const c = a, d = jt.getState(t.state);
    let u;
    if (d != null) u = t.state.doc.resolve(d);
    else if (Pd(t, c.target) != r && (u = Ls(t, e), !u))
      return s();
    u && o(u, c);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", l);
}
function _h(t, e, n) {
  if (!(t.state.selection instanceof B)) return null;
  const { $head: r } = t.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const s = r.before(i), l = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(l) ? s : null;
    }
  }
  return null;
}
function Pd(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function Ls(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!n) return null;
  const r = n.inside >= 0 ? n.inside : n.pos;
  return rr(t.state.doc.resolve(r));
}
var dx = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${n}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Tl(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Tl(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Tl(t, e, n, r, i, o) {
  let s = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  if (c) {
    for (let u = 0, f = 0; u < c.childCount; u++) {
      const { colspan: p, colwidth: h } = c.child(u).attrs;
      for (let m = 0; m < p; m++, f++) {
        const g = i == f ? o : h && h[m], y = g ? g + "px" : "";
        if (s += g || r, g || (l = !1), a)
          a.style.width != y && (a.style.width = y), a = a.nextSibling;
        else {
          const b = document.createElement("col");
          b.style.width = y, e.appendChild(b);
        }
      }
    }
    for (; a; ) {
      var d;
      const u = a.nextSibling;
      (d = a.parentNode) === null || d === void 0 || d.removeChild(a), a = u;
    }
    l ? (n.style.width = s + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = s + "px");
  }
}
const Fe = new ce("tableColumnResizing");
function ux({ handleWidth: t = 5, cellMinWidth: e = 25, defaultCellMinWidth: n = 100, View: r = dx, lastColumnResizable: i = !0 } = {}) {
  const o = new ne({
    key: Fe,
    state: {
      init(s, l) {
        var a;
        const c = (a = o.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, d = Le(l.schema).table.name;
        return r && c && (c[d] = (u, f) => new r(u, n, f)), new fx(-1, !1);
      },
      apply(s, l) {
        return l.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const l = Fe.getState(s);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, l) => {
          px(s, l, t, i);
        },
        mouseleave: (s) => {
          hx(s);
        },
        mousedown: (s, l) => {
          mx(s, l, e, n);
        }
      },
      decorations: (s) => {
        const l = Fe.getState(s);
        if (l && l.activeHandle > -1) return vx(s, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var fx = class Li {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Fe);
    if (r && r.setHandle != null) return new Li(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new Li(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return Ml(e.doc.resolve(i)) || (i = -1), new Li(i, n.dragging);
    }
    return n;
  }
};
function px(t, e, n, r) {
  if (!t.editable) return;
  const i = Fe.getState(t.state);
  if (i && !i.dragging) {
    const o = yx(e.target);
    let s = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= n ? s = zd(t, e, "left", n) : a - e.clientX <= n && (s = zd(t, e, "right", n));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const l = t.state.doc.resolve(s), a = l.node(-1), c = he.get(a), d = l.start(-1);
        if (c.colCount(l.pos - d) + l.nodeAfter.attrs.colspan - 1 == c.width - 1) return;
      }
      Ph(t, s);
    }
  }
}
function hx(t) {
  if (!t.editable) return;
  const e = Fe.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && Ph(t, -1);
}
function mx(t, e, n, r) {
  var i;
  if (!t.editable) return !1;
  const o = (i = t.dom.ownerDocument.defaultView) !== null && i !== void 0 ? i : window, s = Fe.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging) return !1;
  const l = t.state.doc.nodeAt(s.activeHandle), a = gx(t, s.activeHandle, l.attrs);
  t.dispatch(t.state.tr.setMeta(Fe, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function c(u) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", d);
    const f = Fe.getState(t.state);
    f?.dragging && (bx(t, f.activeHandle, Bd(f.dragging, u, n)), t.dispatch(t.state.tr.setMeta(Fe, { setDragging: null })));
  }
  function d(u) {
    if (!u.which) return c(u);
    const f = Fe.getState(t.state);
    if (f && f.dragging) {
      const p = Bd(f.dragging, u, n);
      Fd(t, f.activeHandle, p, r);
    }
  }
  return Fd(t, s.activeHandle, a, r), o.addEventListener("mouseup", c), o.addEventListener("mousemove", d), e.preventDefault(), !0;
}
function gx(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const o = t.domAtPos(e);
  let s = o.node.childNodes[o.offset].offsetWidth, l = n;
  if (r)
    for (let a = 0; a < n; a++) r[a] && (s -= r[a], l--);
  return s / l;
}
function yx(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; ) t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function zd(t, e, n, r) {
  const i = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, l = rr(t.state.doc.resolve(s));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = he.get(l.node(-1)), c = l.start(-1), d = a.map.indexOf(l.pos - c);
  return d % a.width == 0 ? -1 : c + a.map[d - 1];
}
function Bd(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function Ph(t, e) {
  t.dispatch(t.state.tr.setMeta(Fe, { setHandle: e }));
}
function bx(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), o = he.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < o.height; c++) {
    const d = c * o.width + l;
    if (c && o.map[d] == o.map[d - o.width]) continue;
    const u = o.map[d], f = i.nodeAt(u).attrs, p = f.colspan == 1 ? 0 : l - o.colCount(u);
    if (f.colwidth && f.colwidth[p] == n) continue;
    const h = f.colwidth ? f.colwidth.slice() : wx(f.colspan);
    h[p] = n, a.setNodeMarkup(s + u, null, {
      ...f,
      colwidth: h
    });
  }
  a.docChanged && t.dispatch(a);
}
function Fd(t, e, n, r) {
  const i = t.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = he.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && Tl(o, a.firstChild, a, r, l, n);
}
function wx(t) {
  return Array(t).fill(0);
}
function vx(t, e) {
  const n = [], r = t.doc.resolve(e), i = r.node(-1);
  if (!i) return oe.empty;
  const o = he.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < o.height; c++) {
    const d = l + c * o.width;
    if ((l == o.width - 1 || o.map[d] != o.map[d + 1]) && (c == 0 || o.map[d] != o.map[d - o.width])) {
      var a;
      const u = o.map[d], f = s + u + i.nodeAt(u).nodeSize - 1, p = document.createElement("div");
      p.className = "column-resize-handle", !((a = Fe.getState(t)) === null || a === void 0) && a.dragging && n.push(ke.node(s + u, s + u + i.nodeAt(u).nodeSize, { class: "column-resize-dragging" })), n.push(ke.widget(f, p));
    }
  }
  return oe.create(t.doc, n);
}
function kx({ allowTableNodeSelection: t = !1 } = {}) {
  return new ne({
    key: jt,
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(jt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: i, pos: o } = e.mapping.mapResult(n);
        return i ? null : o;
      }
    },
    props: {
      decorations: Rk,
      handleDOMEvents: { mousedown: cx },
      createSelectionBetween(e) {
        return jt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: lx,
      handleKeyDown: sx,
      handlePaste: ax
    },
    appendTransaction(e, n, r) {
      return _k(r, Rh(r, n), t);
    }
  });
}
function xx(t, e) {
  const n = Math.min(t.top, e.top), r = Math.max(t.bottom, e.bottom), i = Math.min(t.left, e.left), s = Math.max(t.right, e.right) - i, l = r - n, a = i, c = n;
  return new DOMRect(a, c, s, l);
}
var Sx = class {
  constructor({
    editor: t,
    element: e,
    view: n,
    updateDelay: r = 250,
    resizeDelay: i = 60,
    shouldShow: o,
    appendTo: s,
    getReferencedVirtualElement: l,
    options: a
  }) {
    this.preventHide = !1, this.isVisible = !1, this.scrollTarget = window, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "top",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1,
      onShow: void 0,
      onHide: void 0,
      onUpdate: void 0,
      onDestroy: void 0
    }, this.shouldShow = ({ view: d, state: u, from: f, to: p }) => {
      const { doc: h, selection: m } = u, { empty: g } = m, y = !h.textBetween(f, p).length && ga(u.selection), b = this.element.contains(document.activeElement);
      return !(!(d.hasFocus() || b) || g || y || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: d }) => {
      var u;
      if (this.editor.isDestroyed) {
        this.destroy();
        return;
      }
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      d?.relatedTarget && ((u = this.element.parentNode) != null && u.contains(d.relatedTarget)) || d?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.handleDebouncedUpdate = (d, u) => {
      const f = !u?.selection.eq(d.state.selection), p = !u?.doc.eq(d.state.doc);
      !f && !p || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(d, f, p, u);
      }, this.updateDelay));
    }, this.updateHandler = (d, u, f, p) => {
      const { composing: h } = d;
      if (h || !u && !f)
        return;
      if (!this.getShouldShow(p)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.transactionHandler = ({ transaction: d }) => {
      d.getMeta("bubbleMenu") === "updatePosition" && this.updatePosition();
    };
    var c;
    this.editor = t, this.element = e, this.view = n, this.updateDelay = r, this.resizeDelay = i, this.appendTo = s, this.scrollTarget = (c = a?.scrollTarget) != null ? c : window, this.getReferencedVirtualElement = l, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...a
    }, this.element.tabIndex = 0, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.editor.on("transaction", this.transactionHandler), window.addEventListener("resize", this.resizeHandler), this.scrollTarget.addEventListener("scroll", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  get middlewares() {
    const t = [];
    return this.floatingUIOptions.flip && t.push(Ch(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && t.push(
      Sh(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && t.push(
      kh(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && t.push(Th(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(Mh(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && t.push(
      xh(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && t.push(Ah(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && t.push(
      Eh(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), t;
  }
  get virtualElement() {
    var t;
    const { selection: e } = this.editor.state, n = (t = this.getReferencedVirtualElement) == null ? void 0 : t.call(this);
    if (n)
      return n;
    const r = yp(this.view, e.from, e.to);
    let i = {
      getBoundingClientRect: () => r,
      getClientRects: () => [r]
    };
    if (e instanceof P) {
      let o = this.view.nodeDOM(e.from);
      const s = o.dataset.nodeViewWrapper ? o : o.querySelector("[data-node-view-wrapper]");
      s && (o = s), o && (i = {
        getBoundingClientRect: () => o.getBoundingClientRect(),
        getClientRects: () => [o.getBoundingClientRect()]
      });
    }
    if (e instanceof ie) {
      const { $anchorCell: o, $headCell: s } = e, l = o ? o.pos : s.pos, a = s ? s.pos : o.pos, c = this.view.nodeDOM(l), d = this.view.nodeDOM(a);
      if (!c || !d)
        return;
      const u = c === d ? c.getBoundingClientRect() : xx(
        c.getBoundingClientRect(),
        d.getBoundingClientRect()
      );
      i = {
        getBoundingClientRect: () => u,
        getClientRects: () => [u]
      };
    }
    return i;
  }
  updatePosition() {
    const t = this.virtualElement;
    t && Oh(t, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: e, y: n, strategy: r }) => {
      this.element.style.width = "max-content", this.element.style.position = r, this.element.style.left = `${e}px`, this.element.style.top = `${n}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(t, e) {
    const { state: n } = t, r = n.selection.from !== n.selection.to;
    if (this.updateDelay > 0 && r) {
      this.handleDebouncedUpdate(t, e);
      return;
    }
    const i = !e?.selection.eq(t.state.selection), o = !e?.doc.eq(t.state.doc);
    this.updateHandler(t, i, o, e);
  }
  getShouldShow(t) {
    var e;
    const { state: n } = this.view, { selection: r } = n, { ranges: i } = r, o = Math.min(...i.map((a) => a.$from.pos)), s = Math.max(...i.map((a) => a.$to.pos));
    return ((e = this.shouldShow) == null ? void 0 : e.call(this, {
      editor: this.editor,
      element: this.element,
      view: this.view,
      state: n,
      oldState: t,
      from: o,
      to: s
    })) || !1;
  }
  show() {
    var t;
    if (this.isVisible)
      return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const e = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (t = e ?? this.view.dom.parentElement) == null || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.scrollTarget.removeEventListener("scroll", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.editor.off("transaction", this.transactionHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, Cx = (t) => new ne({
  key: typeof t.pluginKey == "string" ? new ce(t.pluginKey) : t.pluginKey,
  view: (e) => new Sx({ view: e, ...t })
}), Mx = F({
  name: "BubbleMenu",
  inheritAttrs: !1,
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    resizeDelay: {
      type: Number,
      default: void 0
    },
    options: {
      type: Object,
      default: () => ({})
    },
    appendTo: {
      type: Object,
      default: void 0
    },
    shouldShow: {
      type: Function,
      default: null
    },
    getReferencedVirtualElement: {
      type: Function,
      default: void 0
    }
  },
  setup(t, { slots: e, attrs: n }) {
    const r = ee(null);
    return Jr(() => {
      const {
        editor: i,
        options: o,
        pluginKey: s,
        resizeDelay: l,
        appendTo: a,
        shouldShow: c,
        getReferencedVirtualElement: d,
        updateDelay: u
      } = t, f = r.value;
      f && (f.style.visibility = "hidden", f.style.position = "absolute", f.remove(), Ul(() => {
        i.registerPlugin(
          Cx({
            editor: i,
            element: f,
            options: o,
            pluginKey: s,
            resizeDelay: l,
            appendTo: a,
            shouldShow: c,
            getReferencedVirtualElement: d,
            updateDelay: u
          })
        );
      }));
    }), Ro(() => {
      const { pluginKey: i, editor: o } = t;
      o.unregisterPlugin(i);
    }), () => {
      var i;
      return An("div", { ref: r, ...n }, (i = e.default) == null ? void 0 : i.call(e));
    };
  }
}), Ax = class {
  constructor({ editor: t, element: e, view: n, options: r, appendTo: i, shouldShow: o }) {
    this.preventHide = !1, this.isVisible = !1, this.shouldShow = ({ view: s, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: d } = a, u = c.depth === 1, f = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent && c.parent.childCount === 0 && !this.getTextContent(c.parent);
      return !(!s.hasFocus() || !d || !u || !f || !this.editor.isEditable);
    }, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "right",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1
    }, this.updateHandler = (s, l, a, c) => {
      const { composing: d } = s;
      if (d || !l && !a)
        return;
      if (!this.getShouldShow(c)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s?.relatedTarget && ((l = this.element.parentNode) != null && l.contains(s.relatedTarget)) || s?.relatedTarget !== this.editor.view.dom && this.hide();
    }, this.editor = t, this.element = e, this.view = n, this.appendTo = i, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...r
    }, this.element.tabIndex = 0, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.update(n, n.state), this.getShouldShow() && (this.show(), this.updatePosition());
  }
  getTextContent(t) {
    return up(t, { textSerializers: ka(this.editor.schema) });
  }
  get middlewares() {
    const t = [];
    return this.floatingUIOptions.flip && t.push(Ch(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && t.push(
      Sh(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && t.push(
      kh(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && t.push(Th(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(Mh(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && t.push(
      xh(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && t.push(Ah(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && t.push(
      Eh(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), t;
  }
  getShouldShow(t) {
    var e;
    const { state: n } = this.view, { selection: r } = n, { ranges: i } = r, o = Math.min(...i.map((a) => a.$from.pos)), s = Math.max(...i.map((a) => a.$to.pos));
    return (e = this.shouldShow) == null ? void 0 : e.call(this, {
      editor: this.editor,
      view: this.view,
      state: n,
      oldState: t,
      from: o,
      to: s
    });
  }
  updatePosition() {
    const { selection: t } = this.editor.state, e = yp(this.view, t.from, t.to);
    Oh({
      getBoundingClientRect: () => e,
      getClientRects: () => [e]
    }, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: r, y: i, strategy: o }) => {
      this.element.style.width = "max-content", this.element.style.position = o, this.element.style.left = `${r}px`, this.element.style.top = `${i}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(t, e) {
    const n = !e?.selection.eq(t.state.selection), r = !e?.doc.eq(t.state.doc);
    this.updateHandler(t, n, r, e);
  }
  show() {
    var t;
    if (this.isVisible)
      return;
    this.element.style.visibility = "visible", this.element.style.opacity = "1";
    const e = typeof this.appendTo == "function" ? this.appendTo() : this.appendTo;
    (t = e ?? this.view.dom.parentElement) == null || t.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0;
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, Tx = (t) => new ne({
  key: typeof t.pluginKey == "string" ? new ce(t.pluginKey) : t.pluginKey,
  view: (e) => new Ax({ view: e, ...t })
});
F({
  name: "FloatingMenu",
  inheritAttrs: !1,
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    options: {
      type: Object,
      default: () => ({})
    },
    appendTo: {
      type: Object,
      default: void 0
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(t, { slots: e, attrs: n }) {
    const r = ee(null);
    return Jr(() => {
      const { pluginKey: i, editor: o, options: s, appendTo: l, shouldShow: a } = t, c = r.value;
      c && (c.style.visibility = "hidden", c.style.position = "absolute", c.remove(), o.registerPlugin(
        Tx({
          pluginKey: i,
          editor: o,
          element: c,
          options: s,
          appendTo: l,
          shouldShow: a
        })
      ));
    }), Ro(() => {
      const { pluginKey: i, editor: o } = t;
      o.unregisterPlugin(i);
    }), () => {
      var i;
      return An("div", { ref: r, ...n }, (i = e.default) == null ? void 0 : i.call(e));
    };
  }
});
const Ex = /* @__PURE__ */ F({
  __name: "BubbleMenu",
  props: {
    editor: {}
  },
  setup(t) {
    const e = t, { t: n } = Rt(), r = U(() => {
      const o = e.editor.state.selection;
      if (o.to === o.from || o.empty)
        return;
      const s = md(e.editor, "link"), l = md(e.editor, "table"), a = o.node?.type.name === "image", c = o.node?.type.name === "video", d = o instanceof B;
      if (l)
        return "table";
      if (s)
        return "link";
      if (a)
        return "image";
      if (c)
        return "video";
      if (d)
        return "text";
    });
    function i(o) {
      if (!o)
        return [];
      const { extensions: s = [] } = e.editor.extensionManager, l = s.find((d) => d.name === "base-kit");
      if (!l)
        return [];
      const { button: a } = l.options?.bubble ?? {};
      if (!a)
        return [];
      const c = a({
        editor: e.editor,
        extension: l,
        t: M(n)
      });
      return o ? M(c)?.[o] ?? [] : [];
    }
    return (o, s) => {
      const l = Wr, a = er, c = jr, d = Qn;
      return E(), _(M(Mx), { editor: t.editor }, {
        default: L(() => [
          H(d, { class: "vuetify-pro-tiptap-editor__menu-bubble" }, {
            default: L(() => [
              H(c, { class: "d-flex pa-0" }, {
                default: L(() => [
                  H(a, {
                    density: "compact",
                    flat: "",
                    height: "auto",
                    class: "py-1 ps-1"
                  }, {
                    default: L(() => [
                      (E(!0), le(be, null, Ne(i(r.value), (u, f) => (E(), le(be, { key: f }, [
                        u.type === "divider" ? (E(), _(l, {
                          key: 0,
                          vertical: "",
                          class: "mx-1 me-2"
                        })) : (E(), _(Lr(u.component), Dn({
                          key: 1,
                          ref_for: !0
                        }, u.componentProps, { editor: t.editor }), ql({ _: 2 }, [
                          Ne(u.componentSlots, (p, h, m) => ({
                            name: `${h}`,
                            fn: L((g) => [
                              (E(), _(Lr(p), Dn({ ref_for: !0 }, g?.props), null, 16))
                            ])
                          }))
                        ]), 1040, ["editor"]))
                      ], 64))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["editor"]);
    };
  }
}), Ox = /* @__PURE__ */ F({
  __name: "TiptapToolbar",
  props: {
    editor: {}
  },
  setup(t) {
    const e = t, { t: n } = Rt();
    function r() {
      return [...e.editor.extensionManager.extensions].sort((s, l) => {
        const a = s.options.sort ?? -1, c = l.options.sort ?? -1;
        return a - c;
      }).reduce((s, l) => {
        const { button: a, divider: c = !1, spacer: d = !1 } = l.options;
        if (!a || !rv(a))
          return s;
        const u = a({
          editor: e.editor,
          extension: l,
          t: M(n)
        });
        if (Array.isArray(u)) {
          const f = u.map((p, h) => ({
            button: p,
            divider: h === u.length - 1 ? c : !1,
            spacer: h === 0 ? d : !1
          }));
          return [...s, ...f];
        }
        return [...s, { button: u, divider: c, spacer: d }];
      }, []);
    }
    return (i, o) => {
      const s = Ur, l = Wr, a = er;
      return E(), _(a, Dn(i.$attrs, {
        density: "compact",
        flat: "",
        height: "auto",
        class: "py-1 ps-1"
      }), {
        default: L(() => [
          (E(!0), le(be, null, Ne(r(), (c, d) => (E(), le(be, { key: d }, [
            c.spacer ? (E(), _(s, { key: 0 })) : Xe("", !0),
            (E(), _(Lr(c.button.component), Dn({ ref_for: !0 }, c.button.componentProps, { editor: t.editor }), ql({ _: 2 }, [
              Ne(c.button.componentSlots, (u, f, p) => ({
                name: `${f}`,
                fn: L((h) => [
                  (E(), _(Lr(u), Dn({ ref_for: !0 }, h?.props), null, 16))
                ])
              }))
            ]), 1040, ["editor"])),
            c.divider ? (E(), _(l, {
              key: 1,
              vertical: "",
              class: "mx-1 me-2"
            })) : Xe("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 16);
    };
  }
}), Lx = { class: "text-overline me-4" }, Hx = { class: "text-overline" }, oT = /* @__PURE__ */ F({
  inheritAttrs: !1,
  __name: "VuetifyTiptap",
  props: {
    modelValue: { default: "" },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    output: { default: "html" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !0 },
    flat: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    label: { default: void 0 },
    hideToolbar: { type: Boolean, default: !1 },
    disableToolbar: { type: Boolean, default: !1 },
    hideBubble: { type: Boolean, default: !1 },
    removeDefaultWrapper: { type: Boolean, default: !1 },
    maxWidth: { default: void 0 },
    minHeight: { default: void 0 },
    maxHeight: { default: void 0 },
    extensions: { default: () => [] },
    editorClass: { default: void 0 },
    errorMessages: { default: () => [] }
  },
  emits: ["enter", "change", "update:modelValue", "update:markdownTheme"],
  setup(t, { expose: e, emit: n }) {
    const r = t, i = n, o = Pm(), s = ee(r.modelValue), l = Jl(), { state: a, isFullscreen: c } = wv(), { markdownThemeStyle: d } = sh(
      U(() => r.markdownTheme),
      (k) => {
        i("update:markdownTheme", k);
      }
    ), u = U(() => {
      const k = Iw(r.extensions, a.extensions, "name");
      return [...a.extensions.map((x, S) => {
        const A = r.extensions.find((V) => V.name === x.name);
        return A ? x.configure(A.options) : x;
      }), ...k].map((x, S) => x.configure({ sort: S }));
    }), f = J0({
      content: r.modelValue,
      editorProps: {
        handleKeyDown: br((k, v) => v.key === "Enter" && o.enter && !v.shiftKey ? (i("enter"), !0) : !1, fl)
      },
      onUpdate: br(({ editor: k }) => {
        const v = y(k, r.output);
        s.value = v, i("update:modelValue", v), i("change", { editor: k, output: v });
      }, fl),
      extensions: M(u),
      autofocus: !1,
      editable: !r.disabled,
      injectCSS: !0
    }), { t: p } = Rt(), h = U(() => Gn(r.dark) ? r.dark : Gn(l.current.value.dark) ? l.current.value.dark : !1), m = U(() => [{
      __dark: M(h),
      ...M(d)
    }, r.editorClass]), g = U(() => {
      const k = kr(r.maxWidth), v = {
        maxWidth: k,
        width: k ? "100%" : void 0,
        margin: k ? "0 auto" : void 0,
        backgroundColor: M(h) ? "#121212" : "#FFFFFF"
      };
      if (M(c))
        return { height: "100%", overflowY: "auto", ...v };
      const x = kr(r.minHeight), S = kr(r.maxHeight);
      return {
        minHeight: x,
        maxHeight: S,
        overflowY: "auto",
        ...v
      };
    });
    function y(k, v) {
      return r.removeDefaultWrapper ? v === "html" ? k.isEmpty ? "" : k.getHTML() : v === "json" ? k.isEmpty ? {} : k.getJSON() : v === "text" ? k.isEmpty ? "" : k.getText() : "" : v === "html" ? k.getHTML() : v === "json" ? k.getJSON() : v === "text" ? k.getText() : "";
    }
    const b = br((k) => {
      if (!f.value)
        return;
      const v = y(f.value, r.output);
      if (hd(v, k) || hd(s.value, k))
        return;
      const { from: x, to: S } = f.value.state.selection;
      f.value.commands.setContent(k, { emitUpdate: !1 }), f.value.commands.setTextSelection({ from: x, to: S });
    }, Q0), w = (k) => f.value?.setEditable(!k);
    return Ot(() => r.modelValue, b), Ot(() => r.disabled, w), Ni("disableToolbar", zm(() => r.disableToolbar)), e({ editor: f }), (k, v) => {
      const x = Am, S = Wr, A = Ur, V = er, R = Qn, I = Mm, j = bu;
      return E(), _(Bm, {
        to: "body",
        disabled: !M(c)
      }, [
        M(f) ? (E(), le("div", {
          key: 0,
          class: Jt(["vuetify-pro-tiptap", { dense: t.dense }])
        }, [
          H(j, {
            theme: h.value ? "dark" : "light"
          }, {
            default: L(() => [
              H(I, {
                class: "pt-0",
                "hide-details": "auto",
                "error-messages": t.errorMessages
              }, {
                default: L(() => [
                  H(R, Dn({
                    flat: t.flat,
                    outlined: t.outlined,
                    color: h.value ? "grey-darken-4" : "grey-lighten-4"
                  }, k.$attrs, {
                    style: {
                      borderColor: t.errorMessages ? "#ff5252" : void 0,
                      width: "100%"
                    },
                    class: ["vuetify-pro-tiptap-editor", { "vuetify-pro-tiptap-editor--fullscreen": M(c) }]
                  }), {
                    default: L(() => [
                      t.label && !M(c) ? (E(), le(be, { key: 0 }, [
                        H(x, {
                          class: Jt(h.value ? "bg-grey-darken-3" : "bg-grey-lighten-3")
                        }, {
                          default: L(() => [
                            Ht(Te(t.label), 1)
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        H(S)
                      ], 64)) : Xe("", !0),
                      t.hideToolbar ? Xe("", !0) : (E(), _(Ox, {
                        key: 1,
                        class: "vuetify-pro-tiptap-editor__toolbar",
                        editor: M(f)
                      }, null, 8, ["editor"])),
                      t.hideBubble ? Xe("", !0) : (E(), _(Ex, {
                        key: 2,
                        editor: M(f)
                      }, null, 8, ["editor"])),
                      Lt(k.$slots, "editor", Ya(Qa({ editor: M(f), props: { class: "vuetify-pro-tiptap-editor__content", "data-testid": "value" } })), () => [
                        H(M(K0), {
                          class: Jt(["vuetify-pro-tiptap-editor__content", m.value]),
                          style: _n(g.value),
                          editor: M(f),
                          "data-testid": "value"
                        }, null, 8, ["class", "style", "editor"])
                      ]),
                      Lt(k.$slots, "bottom", Ya(Qa({ editor: M(f) })), () => [
                        H(V, {
                          class: "px-4",
                          density: "compact",
                          flat: ""
                        }, {
                          default: L(() => [
                            H(A),
                            M(iv)(M(f), "characterCount") ? (E(), le(be, { key: 0 }, [
                              Vt("span", Lx, Te(M(f).storage.characterCount.words()) + " " + Te(M(p)("editor.words")), 1),
                              Vt("span", Hx, Te(M(f).storage.characterCount.characters()) + " " + Te(M(p)("editor.characters")), 1)
                            ], 64)) : Xe("", !0)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 3
                  }, 16, ["flat", "outlined", "color", "style", "class"])
                ]),
                _: 3
              }, 8, ["error-messages"])
            ]),
            _: 3
          }, 8, ["theme"])
        ], 2)) : Xe("", !0)
      ], 8, ["disabled"]);
    };
  }
});
function Vx(t, e, n) {
  if (typeof window > "u")
    throw new Error(
      "getHTMLFromFragment can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead."
    );
  const r = rn.fromSchema(e).serializeFragment(t.content, {
    document: window.document
  });
  return new XMLSerializer().serializeToString(r);
}
function Nx(t, e) {
  if (typeof window > "u")
    throw new Error(
      "generateHTML can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead."
    );
  const n = Fb(e), r = At.fromJSON(n, t);
  return Vx(r, n);
}
function Rx(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var gi = { exports: {} }, ae = {}, yi = { exports: {} }, ln = {}, $d;
function zh() {
  if ($d) return ln;
  $d = 1;
  function t() {
    var o = {};
    return o["align-content"] = !1, o["align-items"] = !1, o["align-self"] = !1, o["alignment-adjust"] = !1, o["alignment-baseline"] = !1, o.all = !1, o["anchor-point"] = !1, o.animation = !1, o["animation-delay"] = !1, o["animation-direction"] = !1, o["animation-duration"] = !1, o["animation-fill-mode"] = !1, o["animation-iteration-count"] = !1, o["animation-name"] = !1, o["animation-play-state"] = !1, o["animation-timing-function"] = !1, o.azimuth = !1, o["backface-visibility"] = !1, o.background = !0, o["background-attachment"] = !0, o["background-clip"] = !0, o["background-color"] = !0, o["background-image"] = !0, o["background-origin"] = !0, o["background-position"] = !0, o["background-repeat"] = !0, o["background-size"] = !0, o["baseline-shift"] = !1, o.binding = !1, o.bleed = !1, o["bookmark-label"] = !1, o["bookmark-level"] = !1, o["bookmark-state"] = !1, o.border = !0, o["border-bottom"] = !0, o["border-bottom-color"] = !0, o["border-bottom-left-radius"] = !0, o["border-bottom-right-radius"] = !0, o["border-bottom-style"] = !0, o["border-bottom-width"] = !0, o["border-collapse"] = !0, o["border-color"] = !0, o["border-image"] = !0, o["border-image-outset"] = !0, o["border-image-repeat"] = !0, o["border-image-slice"] = !0, o["border-image-source"] = !0, o["border-image-width"] = !0, o["border-left"] = !0, o["border-left-color"] = !0, o["border-left-style"] = !0, o["border-left-width"] = !0, o["border-radius"] = !0, o["border-right"] = !0, o["border-right-color"] = !0, o["border-right-style"] = !0, o["border-right-width"] = !0, o["border-spacing"] = !0, o["border-style"] = !0, o["border-top"] = !0, o["border-top-color"] = !0, o["border-top-left-radius"] = !0, o["border-top-right-radius"] = !0, o["border-top-style"] = !0, o["border-top-width"] = !0, o["border-width"] = !0, o.bottom = !1, o["box-decoration-break"] = !0, o["box-shadow"] = !0, o["box-sizing"] = !0, o["box-snap"] = !0, o["box-suppress"] = !0, o["break-after"] = !0, o["break-before"] = !0, o["break-inside"] = !0, o["caption-side"] = !1, o.chains = !1, o.clear = !0, o.clip = !1, o["clip-path"] = !1, o["clip-rule"] = !1, o.color = !0, o["color-interpolation-filters"] = !0, o["column-count"] = !1, o["column-fill"] = !1, o["column-gap"] = !1, o["column-rule"] = !1, o["column-rule-color"] = !1, o["column-rule-style"] = !1, o["column-rule-width"] = !1, o["column-span"] = !1, o["column-width"] = !1, o.columns = !1, o.contain = !1, o.content = !1, o["counter-increment"] = !1, o["counter-reset"] = !1, o["counter-set"] = !1, o.crop = !1, o.cue = !1, o["cue-after"] = !1, o["cue-before"] = !1, o.cursor = !1, o.direction = !1, o.display = !0, o["display-inside"] = !0, o["display-list"] = !0, o["display-outside"] = !0, o["dominant-baseline"] = !1, o.elevation = !1, o["empty-cells"] = !1, o.filter = !1, o.flex = !1, o["flex-basis"] = !1, o["flex-direction"] = !1, o["flex-flow"] = !1, o["flex-grow"] = !1, o["flex-shrink"] = !1, o["flex-wrap"] = !1, o.float = !1, o["float-offset"] = !1, o["flood-color"] = !1, o["flood-opacity"] = !1, o["flow-from"] = !1, o["flow-into"] = !1, o.font = !0, o["font-family"] = !0, o["font-feature-settings"] = !0, o["font-kerning"] = !0, o["font-language-override"] = !0, o["font-size"] = !0, o["font-size-adjust"] = !0, o["font-stretch"] = !0, o["font-style"] = !0, o["font-synthesis"] = !0, o["font-variant"] = !0, o["font-variant-alternates"] = !0, o["font-variant-caps"] = !0, o["font-variant-east-asian"] = !0, o["font-variant-ligatures"] = !0, o["font-variant-numeric"] = !0, o["font-variant-position"] = !0, o["font-weight"] = !0, o.grid = !1, o["grid-area"] = !1, o["grid-auto-columns"] = !1, o["grid-auto-flow"] = !1, o["grid-auto-rows"] = !1, o["grid-column"] = !1, o["grid-column-end"] = !1, o["grid-column-start"] = !1, o["grid-row"] = !1, o["grid-row-end"] = !1, o["grid-row-start"] = !1, o["grid-template"] = !1, o["grid-template-areas"] = !1, o["grid-template-columns"] = !1, o["grid-template-rows"] = !1, o["hanging-punctuation"] = !1, o.height = !0, o.hyphens = !1, o.icon = !1, o["image-orientation"] = !1, o["image-resolution"] = !1, o["ime-mode"] = !1, o["initial-letters"] = !1, o["inline-box-align"] = !1, o["justify-content"] = !1, o["justify-items"] = !1, o["justify-self"] = !1, o.left = !1, o["letter-spacing"] = !0, o["lighting-color"] = !0, o["line-box-contain"] = !1, o["line-break"] = !1, o["line-grid"] = !1, o["line-height"] = !1, o["line-snap"] = !1, o["line-stacking"] = !1, o["line-stacking-ruby"] = !1, o["line-stacking-shift"] = !1, o["line-stacking-strategy"] = !1, o["list-style"] = !0, o["list-style-image"] = !0, o["list-style-position"] = !0, o["list-style-type"] = !0, o.margin = !0, o["margin-bottom"] = !0, o["margin-left"] = !0, o["margin-right"] = !0, o["margin-top"] = !0, o["marker-offset"] = !1, o["marker-side"] = !1, o.marks = !1, o.mask = !1, o["mask-box"] = !1, o["mask-box-outset"] = !1, o["mask-box-repeat"] = !1, o["mask-box-slice"] = !1, o["mask-box-source"] = !1, o["mask-box-width"] = !1, o["mask-clip"] = !1, o["mask-image"] = !1, o["mask-origin"] = !1, o["mask-position"] = !1, o["mask-repeat"] = !1, o["mask-size"] = !1, o["mask-source-type"] = !1, o["mask-type"] = !1, o["max-height"] = !0, o["max-lines"] = !1, o["max-width"] = !0, o["min-height"] = !0, o["min-width"] = !0, o["move-to"] = !1, o["nav-down"] = !1, o["nav-index"] = !1, o["nav-left"] = !1, o["nav-right"] = !1, o["nav-up"] = !1, o["object-fit"] = !1, o["object-position"] = !1, o.opacity = !1, o.order = !1, o.orphans = !1, o.outline = !1, o["outline-color"] = !1, o["outline-offset"] = !1, o["outline-style"] = !1, o["outline-width"] = !1, o.overflow = !1, o["overflow-wrap"] = !1, o["overflow-x"] = !1, o["overflow-y"] = !1, o.padding = !0, o["padding-bottom"] = !0, o["padding-left"] = !0, o["padding-right"] = !0, o["padding-top"] = !0, o.page = !1, o["page-break-after"] = !1, o["page-break-before"] = !1, o["page-break-inside"] = !1, o["page-policy"] = !1, o.pause = !1, o["pause-after"] = !1, o["pause-before"] = !1, o.perspective = !1, o["perspective-origin"] = !1, o.pitch = !1, o["pitch-range"] = !1, o["play-during"] = !1, o.position = !1, o["presentation-level"] = !1, o.quotes = !1, o["region-fragment"] = !1, o.resize = !1, o.rest = !1, o["rest-after"] = !1, o["rest-before"] = !1, o.richness = !1, o.right = !1, o.rotation = !1, o["rotation-point"] = !1, o["ruby-align"] = !1, o["ruby-merge"] = !1, o["ruby-position"] = !1, o["shape-image-threshold"] = !1, o["shape-outside"] = !1, o["shape-margin"] = !1, o.size = !1, o.speak = !1, o["speak-as"] = !1, o["speak-header"] = !1, o["speak-numeral"] = !1, o["speak-punctuation"] = !1, o["speech-rate"] = !1, o.stress = !1, o["string-set"] = !1, o["tab-size"] = !1, o["table-layout"] = !1, o["text-align"] = !0, o["text-align-last"] = !0, o["text-combine-upright"] = !0, o["text-decoration"] = !0, o["text-decoration-color"] = !0, o["text-decoration-line"] = !0, o["text-decoration-skip"] = !0, o["text-decoration-style"] = !0, o["text-emphasis"] = !0, o["text-emphasis-color"] = !0, o["text-emphasis-position"] = !0, o["text-emphasis-style"] = !0, o["text-height"] = !0, o["text-indent"] = !0, o["text-justify"] = !0, o["text-orientation"] = !0, o["text-overflow"] = !0, o["text-shadow"] = !0, o["text-space-collapse"] = !0, o["text-transform"] = !0, o["text-underline-position"] = !0, o["text-wrap"] = !0, o.top = !1, o.transform = !1, o["transform-origin"] = !1, o["transform-style"] = !1, o.transition = !1, o["transition-delay"] = !1, o["transition-duration"] = !1, o["transition-property"] = !1, o["transition-timing-function"] = !1, o["unicode-bidi"] = !1, o["vertical-align"] = !1, o.visibility = !1, o["voice-balance"] = !1, o["voice-duration"] = !1, o["voice-family"] = !1, o["voice-pitch"] = !1, o["voice-range"] = !1, o["voice-rate"] = !1, o["voice-stress"] = !1, o["voice-volume"] = !1, o.volume = !1, o["white-space"] = !1, o.widows = !1, o.width = !0, o["will-change"] = !1, o["word-break"] = !0, o["word-spacing"] = !0, o["word-wrap"] = !0, o["wrap-flow"] = !1, o["wrap-through"] = !1, o["writing-mode"] = !1, o["z-index"] = !1, o;
  }
  function e(o, s, l) {
  }
  function n(o, s, l) {
  }
  var r = /javascript\s*\:/img;
  function i(o, s) {
    return r.test(s) ? "" : s;
  }
  return ln.whiteList = t(), ln.getDefaultWhiteList = t, ln.onAttr = e, ln.onIgnoreAttr = n, ln.safeAttrValue = i, ln;
}
var Hs, jd;
function Bh() {
  return jd || (jd = 1, Hs = {
    indexOf: function(t, e) {
      var n, r;
      if (Array.prototype.indexOf)
        return t.indexOf(e);
      for (n = 0, r = t.length; n < r; n++)
        if (t[n] === e)
          return n;
      return -1;
    },
    forEach: function(t, e, n) {
      var r, i;
      if (Array.prototype.forEach)
        return t.forEach(e, n);
      for (r = 0, i = t.length; r < i; r++)
        e.call(n, t[r], r, t);
    },
    trim: function(t) {
      return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(t) {
      return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "");
    }
  }), Hs;
}
var Vs, Wd;
function Ix() {
  if (Wd) return Vs;
  Wd = 1;
  var t = Bh();
  function e(n, r) {
    n = t.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var i = n.length, o = !1, s = 0, l = 0, a = "";
    function c() {
      if (!o) {
        var f = t.trim(n.slice(s, l)), p = f.indexOf(":");
        if (p !== -1) {
          var h = t.trim(f.slice(0, p)), m = t.trim(f.slice(p + 1));
          if (h) {
            var g = r(s, a.length, h, m, f);
            g && (a += g + "; ");
          }
        }
      }
      s = l + 1;
    }
    for (; l < i; l++) {
      var d = n[l];
      if (d === "/" && n[l + 1] === "*") {
        var u = n.indexOf("*/", l + 2);
        if (u === -1) break;
        l = u + 1, s = l + 1, o = !1;
      } else d === "(" ? o = !0 : d === ")" ? o = !1 : d === ";" ? o || c() : d === `
` && c();
    }
    return t.trim(a);
  }
  return Vs = e, Vs;
}
var Ns, Ud;
function Dx() {
  if (Ud) return Ns;
  Ud = 1;
  var t = zh(), e = Ix();
  Bh();
  function n(o) {
    return o == null;
  }
  function r(o) {
    var s = {};
    for (var l in o)
      s[l] = o[l];
    return s;
  }
  function i(o) {
    o = r(o || {}), o.whiteList = o.whiteList || t.whiteList, o.onAttr = o.onAttr || t.onAttr, o.onIgnoreAttr = o.onIgnoreAttr || t.onIgnoreAttr, o.safeAttrValue = o.safeAttrValue || t.safeAttrValue, this.options = o;
  }
  return i.prototype.process = function(o) {
    if (o = o || "", o = o.toString(), !o) return "";
    var s = this, l = s.options, a = l.whiteList, c = l.onAttr, d = l.onIgnoreAttr, u = l.safeAttrValue, f = e(o, function(p, h, m, g, y) {
      var b = a[m], w = !1;
      if (b === !0 ? w = b : typeof b == "function" ? w = b(g) : b instanceof RegExp && (w = b.test(g)), w !== !0 && (w = !1), g = u(m, g), !!g) {
        var k = {
          position: h,
          sourcePosition: p,
          source: y,
          isWhite: w
        };
        if (w) {
          var v = c(m, g, k);
          return n(v) ? m + ":" + g : v;
        } else {
          var v = d(m, g, k);
          if (!n(v))
            return v;
        }
      }
    });
    return f;
  }, Ns = i, Ns;
}
var Kd;
function El() {
  return Kd || (Kd = 1, (function(t, e) {
    var n = zh(), r = Dx();
    function i(s, l) {
      var a = new r(l);
      return a.process(s);
    }
    e = t.exports = i, e.FilterCSS = r;
    for (var o in n) e[o] = n[o];
    typeof window < "u" && (window.filterCSS = t.exports);
  })(yi, yi.exports)), yi.exports;
}
var Rs, qd;
function Pa() {
  return qd || (qd = 1, Rs = {
    indexOf: function(t, e) {
      var n, r;
      if (Array.prototype.indexOf)
        return t.indexOf(e);
      for (n = 0, r = t.length; n < r; n++)
        if (t[n] === e)
          return n;
      return -1;
    },
    forEach: function(t, e, n) {
      var r, i;
      if (Array.prototype.forEach)
        return t.forEach(e, n);
      for (r = 0, i = t.length; r < i; r++)
        e.call(n, t[r], r, t);
    },
    trim: function(t) {
      return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(t) {
      var e = /\s|\n|\t/, n = e.exec(t);
      return n ? n.index : -1;
    }
  }), Rs;
}
var Jd;
function Fh() {
  if (Jd) return ae;
  Jd = 1;
  var t = El().FilterCSS, e = El().getDefaultWhiteList, n = Pa();
  function r() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var i = new t();
  function o(N, W, D) {
  }
  function s(N, W, D) {
  }
  function l(N, W, D) {
  }
  function a(N, W, D) {
  }
  function c(N) {
    return N.replace(u, "&lt;").replace(f, "&gt;");
  }
  function d(N, W, D, J) {
    if (D = R(D), W === "href" || W === "src") {
      if (D = n.trim(D), D === "#") return "#";
      if (!(D.substr(0, 7) === "http://" || D.substr(0, 8) === "https://" || D.substr(0, 7) === "mailto:" || D.substr(0, 4) === "tel:" || D.substr(0, 11) === "data:image/" || D.substr(0, 6) === "ftp://" || D.substr(0, 2) === "./" || D.substr(0, 3) === "../" || D[0] === "#" || D[0] === "/"))
        return "";
    } else if (W === "background") {
      if (b.lastIndex = 0, b.test(D))
        return "";
    } else if (W === "style") {
      if (w.lastIndex = 0, w.test(D) || (k.lastIndex = 0, k.test(D) && (b.lastIndex = 0, b.test(D))))
        return "";
      J !== !1 && (J = J || i, D = J.process(D));
    }
    return D = I(D), D;
  }
  var u = /</g, f = />/g, p = /"/g, h = /&quot;/g, m = /&#([a-zA-Z0-9]*);?/gim, g = /&colon;?/gim, y = /&newline;?/gim, b = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, w = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, k = /u\s*r\s*l\s*\(.*/gi;
  function v(N) {
    return N.replace(p, "&quot;");
  }
  function x(N) {
    return N.replace(h, '"');
  }
  function S(N) {
    return N.replace(m, function(D, J) {
      return J[0] === "x" || J[0] === "X" ? String.fromCharCode(parseInt(J.substr(1), 16)) : String.fromCharCode(parseInt(J, 10));
    });
  }
  function A(N) {
    return N.replace(g, ":").replace(y, " ");
  }
  function V(N) {
    for (var W = "", D = 0, J = N.length; D < J; D++)
      W += N.charCodeAt(D) < 32 ? " " : N.charAt(D);
    return n.trim(W);
  }
  function R(N) {
    return N = x(N), N = S(N), N = A(N), N = V(N), N;
  }
  function I(N) {
    return N = v(N), N = c(N), N;
  }
  function j() {
    return "";
  }
  function Z(N, W) {
    typeof W != "function" && (W = function() {
    });
    var D = !Array.isArray(N);
    function J(ze) {
      return D ? !0 : n.indexOf(N, ze) !== -1;
    }
    var De = [], gt = !1;
    return {
      onIgnoreTag: function(ze, ir, yt) {
        if (J(ze))
          if (yt.isClosing) {
            var or = "[/removed]", Cm = yt.position + or.length;
            return De.push([
              gt !== !1 ? gt : yt.position,
              Cm
            ]), gt = !1, or;
          } else
            return gt || (gt = yt.position), "[removed]";
        else
          return W(ze, ir, yt);
      },
      remove: function(ze) {
        var ir = "", yt = 0;
        return n.forEach(De, function(or) {
          ir += ze.slice(yt, or[0]), yt = or[1];
        }), ir += ze.slice(yt), ir;
      }
    };
  }
  function K(N) {
    for (var W = "", D = 0; D < N.length; ) {
      var J = N.indexOf("<!--", D);
      if (J === -1) {
        W += N.slice(D);
        break;
      }
      W += N.slice(D, J);
      var De = N.indexOf("-->", J);
      if (De === -1)
        break;
      D = De + 3;
    }
    return W;
  }
  function X(N) {
    var W = N.split("");
    return W = W.filter(function(D) {
      var J = D.charCodeAt(0);
      return J === 127 ? !1 : J <= 31 ? J === 10 || J === 13 : !0;
    }), W.join("");
  }
  return ae.whiteList = r(), ae.getDefaultWhiteList = r, ae.onTag = o, ae.onIgnoreTag = s, ae.onTagAttr = l, ae.onIgnoreTagAttr = a, ae.safeAttrValue = d, ae.escapeHtml = c, ae.escapeQuote = v, ae.unescapeQuote = x, ae.escapeHtmlEntities = S, ae.escapeDangerHtml5Entities = A, ae.clearNonPrintableCharacter = V, ae.friendlyAttrValue = R, ae.escapeAttrValue = I, ae.onIgnoreTagStripAll = j, ae.StripTagBody = Z, ae.stripCommentTag = K, ae.stripBlankChar = X, ae.attributeWrapSign = '"', ae.cssFilter = i, ae.getDefaultCSSWhiteList = e, ae;
}
var bi = {}, Gd;
function $h() {
  if (Gd) return bi;
  Gd = 1;
  var t = Pa();
  function e(u) {
    var f = t.spaceIndex(u), p;
    return f === -1 ? p = u.slice(1, -1) : p = u.slice(1, f + 1), p = t.trim(p).toLowerCase(), p.slice(0, 1) === "/" && (p = p.slice(1)), p.slice(-1) === "/" && (p = p.slice(0, -1)), p;
  }
  function n(u) {
    return u.slice(0, 2) === "</";
  }
  function r(u, f, p) {
    var h = "", m = 0, g = !1, y = !1, b = 0, w = u.length, k = "", v = "";
    e: for (b = 0; b < w; b++) {
      var x = u.charAt(b);
      if (g === !1) {
        if (x === "<") {
          g = b;
          continue;
        }
      } else if (y === !1) {
        if (x === "<") {
          h += p(u.slice(m, b)), g = b, m = b;
          continue;
        }
        if (x === ">" || b === w - 1) {
          h += p(u.slice(m, g)), v = u.slice(g, b + 1), k = e(v), h += f(
            g,
            h.length,
            k,
            v,
            n(v)
          ), m = b + 1, g = !1;
          continue;
        }
        if (x === '"' || x === "'")
          for (var S = 1, A = u.charAt(b - S); A.trim() === "" || A === "="; ) {
            if (A === "=") {
              y = x;
              continue e;
            }
            A = u.charAt(b - ++S);
          }
      } else if (x === y) {
        y = !1;
        continue;
      }
    }
    return m < w && (h += p(u.substr(m))), h;
  }
  var i = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(u, f) {
    var p = 0, h = 0, m = [], g = !1, y = u.length;
    function b(S, A) {
      if (S = t.trim(S), S = S.replace(i, "").toLowerCase(), !(S.length < 1)) {
        var V = f(S, A || "");
        V && m.push(V);
      }
    }
    for (var w = 0; w < y; w++) {
      var k = u.charAt(w), v, x;
      if (g === !1 && k === "=") {
        g = u.slice(p, w), p = w + 1, h = u.charAt(p) === '"' || u.charAt(p) === "'" ? p : l(u, w + 1);
        continue;
      }
      if (g !== !1 && w === h) {
        if (x = u.indexOf(k, w + 1), x === -1)
          break;
        v = t.trim(u.slice(h + 1, x)), b(g, v), g = !1, w = x, p = w + 1;
        continue;
      }
      if (/\s|\n|\t/.test(k))
        if (u = u.replace(/\s|\n|\t/g, " "), g === !1)
          if (x = s(u, w), x === -1) {
            v = t.trim(u.slice(p, w)), b(v), g = !1, p = w + 1;
            continue;
          } else {
            w = x - 1;
            continue;
          }
        else if (x = a(u, w - 1), x === -1) {
          v = t.trim(u.slice(p, w)), v = d(v), b(g, v), g = !1, p = w + 1;
          continue;
        } else
          continue;
    }
    return p < u.length && (g === !1 ? b(u.slice(p)) : b(g, d(t.trim(u.slice(p))))), t.trim(m.join(" "));
  }
  function s(u, f) {
    for (; f < u.length; f++) {
      var p = u[f];
      if (p !== " ")
        return p === "=" ? f : -1;
    }
  }
  function l(u, f) {
    for (; f < u.length; f++) {
      var p = u[f];
      if (p !== " ")
        return p === "'" || p === '"' ? f : -1;
    }
  }
  function a(u, f) {
    for (; f > 0; f--) {
      var p = u[f];
      if (p !== " ")
        return p === "=" ? f : -1;
    }
  }
  function c(u) {
    return u[0] === '"' && u[u.length - 1] === '"' || u[0] === "'" && u[u.length - 1] === "'";
  }
  function d(u) {
    return c(u) ? u.substr(1, u.length - 2) : u;
  }
  return bi.parseTag = r, bi.parseAttr = o, bi;
}
var Is, Zd;
function _x() {
  if (Zd) return Is;
  Zd = 1;
  var t = El().FilterCSS, e = Fh(), n = $h(), r = n.parseTag, i = n.parseAttr, o = Pa();
  function s(u) {
    return u == null;
  }
  function l(u) {
    var f = o.spaceIndex(u);
    if (f === -1)
      return {
        html: "",
        closing: u[u.length - 2] === "/"
      };
    u = o.trim(u.slice(f + 1, -1));
    var p = u[u.length - 1] === "/";
    return p && (u = o.trim(u.slice(0, -1))), {
      html: u,
      closing: p
    };
  }
  function a(u) {
    var f = {};
    for (var p in u)
      f[p] = u[p];
    return f;
  }
  function c(u) {
    var f = {};
    for (var p in u)
      Array.isArray(u[p]) ? f[p.toLowerCase()] = u[p].map(function(h) {
        return h.toLowerCase();
      }) : f[p.toLowerCase()] = u[p];
    return f;
  }
  function d(u) {
    u = a(u || {}), u.stripIgnoreTag && (u.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), u.onIgnoreTag = e.onIgnoreTagStripAll), u.whiteList || u.allowList ? u.whiteList = c(u.whiteList || u.allowList) : u.whiteList = e.whiteList, this.attributeWrapSign = u.singleQuotedAttributeValue === !0 ? "'" : e.attributeWrapSign, u.onTag = u.onTag || e.onTag, u.onTagAttr = u.onTagAttr || e.onTagAttr, u.onIgnoreTag = u.onIgnoreTag || e.onIgnoreTag, u.onIgnoreTagAttr = u.onIgnoreTagAttr || e.onIgnoreTagAttr, u.safeAttrValue = u.safeAttrValue || e.safeAttrValue, u.escapeHtml = u.escapeHtml || e.escapeHtml, this.options = u, u.css === !1 ? this.cssFilter = !1 : (u.css = u.css || {}, this.cssFilter = new t(u.css));
  }
  return d.prototype.process = function(u) {
    if (u = u || "", u = u.toString(), !u) return "";
    var f = this, p = f.options, h = p.whiteList, m = p.onTag, g = p.onIgnoreTag, y = p.onTagAttr, b = p.onIgnoreTagAttr, w = p.safeAttrValue, k = p.escapeHtml, v = f.attributeWrapSign, x = f.cssFilter;
    p.stripBlankChar && (u = e.stripBlankChar(u)), p.allowCommentTag || (u = e.stripCommentTag(u));
    var S = !1;
    p.stripIgnoreTagBody && (S = e.StripTagBody(
      p.stripIgnoreTagBody,
      g
    ), g = S.onIgnoreTag);
    var A = r(
      u,
      function(V, R, I, j, Z) {
        var K = {
          sourcePosition: V,
          position: R,
          isClosing: Z,
          isWhite: Object.prototype.hasOwnProperty.call(h, I)
        }, X = m(I, j, K);
        if (!s(X)) return X;
        if (K.isWhite) {
          if (K.isClosing)
            return "</" + I + ">";
          var N = l(j), W = h[I], D = i(N.html, function(J, De) {
            var gt = o.indexOf(W, J) !== -1, ze = y(I, J, De, gt);
            return s(ze) ? gt ? (De = w(I, J, De, x), De ? J + "=" + v + De + v : J) : (ze = b(I, J, De, gt), s(ze) ? void 0 : ze) : ze;
          });
          return j = "<" + I, D && (j += " " + D), N.closing && (j += " /"), j += ">", j;
        } else
          return X = g(I, j, K), s(X) ? k(j) : X;
      },
      k
    );
    return S && (A = S.remove(A)), A;
  }, Is = d, Is;
}
var Xd;
function Px() {
  return Xd || (Xd = 1, (function(t, e) {
    var n = Fh(), r = $h(), i = _x();
    function o(l, a) {
      var c = new i(a);
      return c.process(l);
    }
    e = t.exports = o, e.filterXSS = o, e.FilterXSS = i, (function() {
      for (var l in n)
        e[l] = n[l];
      for (var a in r)
        e[a] = r[a];
    })(), typeof window < "u" && (window.filterXSS = t.exports);
    function s() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    s() && (self.filterXSS = t.exports);
  })(gi, gi.exports)), gi.exports;
}
var zx = Px();
const Bx = /* @__PURE__ */ Rx(zx), Fx = {
  a: ["href", "title", "target"],
  span: ["style"],
  blockquote: ["class", "style"],
  p: ["class", "style"],
  hr: [],
  pre: [],
  code: [],
  strong: [],
  img: ["src", "alt", "title", "width", "height", "style", "data-display"],
  label: ["contenteditable"],
  input: ["type", "value", "checked"],
  div: ["class", "style"],
  iframe: ["src", "allowfullscreen", "frameborder", "width", "height"],
  em: [],
  s: [],
  mark: ["class", "style"],
  sub: ["class", "style"],
  sup: ["class", "style"],
  h1: ["class", "style"],
  h2: ["class", "style"],
  h3: ["class", "style"],
  h4: ["class", "style"],
  h5: ["class", "style"],
  h6: ["class", "style"],
  ul: ["class", "data-type"],
  li: ["class", "data-checked", "itemtypename"],
  ol: [],
  u: [],
  table: ["class", "style"],
  colgroup: [],
  col: ["style"],
  tbody: ["class", "style"],
  tr: ["class", "style"],
  th: ["class", "style", "colspan", "rowspan"],
  td: ["class", "style", "colspan", "rowspan"],
  br: []
}, $x = ["innerHTML"], sT = /* @__PURE__ */ F({
  __name: "VuetifyViewer",
  props: {
    value: { default: "" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    xss: { type: [Boolean, Array], default: !0 },
    xssOptions: { default: () => Fx },
    extensions: { default: () => [] }
  },
  setup(t) {
    const e = t, { state: n } = Yo(), r = Jl(), { markdownThemeStyle: i } = sh(U(() => e.markdownTheme)), o = U(() => [...n.extensions, ...e.extensions]), s = U(() => Gn(e.dark) ? e.dark : Gn(r.current.value.dark) ? r.current.value.dark : !1), l = U(() => ({
      __dark: M(s),
      dense: e.dense,
      view: !0,
      ...M(i)
    })), a = U(() => vr(e.value) ? e.value : Nx(e.value, M(o))), c = U(() => {
      if (e.xss === !1)
        return M(a);
      const d = M(a).replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/").replace("https://vimeo.com/", "https://player.vimeo.com/video/"), u = e.xssOptions;
      return Bx(d, { whiteList: u, css: !1 });
    });
    return (d, u) => (E(), le("div", {
      class: Jt(["vuetify-pro-tiptap-editor__content", l.value]),
      style: { width: "100%" }
    }, [
      Lt(d.$slots, "before"),
      Vt("div", {
        class: "content",
        innerHTML: c.value
      }, null, 8, $x),
      Lt(d.$slots, "after")
    ], 2));
  }
});
var jx = ye.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `

`) : ""
}), Wx = ye.create({
  name: "hardBreak",
  markdownTokenName: "br",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", te(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  renderMarkdown: () => `  
`,
  parseMarkdown: () => ({
    type: "hardBreak"
  }),
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: n, editor: r }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: i, storedMarks: o } = n;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: l } = r.extensionManager, a = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
            if (d && a && s) {
              const u = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(u);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Ux = Object.defineProperty, Kx = (t, e) => {
  for (var n in e)
    Ux(t, n, { get: e[n], enumerable: !0 });
}, qx = "listItem", Yd = "textStyle", Qd = /^\s*([-+*])\s$/, jh = ye.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", te(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => t.type !== "list" || t.ordered ? [] : {
    type: "bulletList",
    content: t.items ? e.parseChildren(t.items) : []
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(qx, this.editor.getAttributes(Yd)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = qn({
      find: Qd,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = qn({
      find: Qd,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Yd),
      editor: this.editor
    })), [t];
  }
}), Wh = ye.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", te(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (t, e) => {
    if (t.type !== "list_item")
      return [];
    let n = [];
    if (t.tokens && t.tokens.length > 0)
      if (t.tokens.some((i) => i.type === "paragraph"))
        n = e.parseChildren(t.tokens);
      else {
        const i = t.tokens[0];
        if (i && i.type === "text" && i.tokens && i.tokens.length > 0) {
          if (n = [
            {
              type: "paragraph",
              content: e.parseInline(i.tokens)
            }
          ], t.tokens.length > 1) {
            const s = t.tokens.slice(1), l = e.parseChildren(s);
            n.push(...l);
          }
        } else
          n = e.parseChildren(t.tokens);
      }
    return n.length === 0 && (n = [
      {
        type: "paragraph",
        content: []
      }
    ]), {
      type: "listItem",
      content: n
    };
  },
  renderMarkdown: (t, e, n) => Aa(
    t,
    e,
    (r) => r.parentType === "bulletList" ? "- " : r.parentType === "orderedList" ? `${r.index + 1}. ` : "- ",
    n
  ),
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Jx = {};
Kx(Jx, {
  findListItemPos: () => ei,
  getNextListDepth: () => za,
  handleBackspace: () => Ol,
  handleDelete: () => Ll,
  hasListBefore: () => Uh,
  hasListItemAfter: () => Gx,
  hasListItemBefore: () => Kh,
  listItemHasSubList: () => qh,
  nextListIsDeeper: () => Jh,
  nextListIsHigher: () => Gh
});
var ei = (t, e) => {
  const { $from: n } = e.selection, r = ge(t, e.schema);
  let i = null, o = n.depth, s = n.pos, l = null;
  for (; o > 0 && l === null; )
    i = n.node(o), i.type === r ? l = o : (o -= 1, s -= 1);
  return l === null ? null : { $pos: e.doc.resolve(s), depth: l };
}, za = (t, e) => {
  const n = ei(t, e);
  if (!n)
    return !1;
  const [, r] = Ub(e, t, n.$pos.pos + 4);
  return r;
}, Uh = (t, e, n) => {
  const { $anchor: r } = t.selection, i = Math.max(0, r.pos - 2), o = t.doc.resolve(i).node();
  return !(!o || !n.includes(o.type.name));
}, Kh = (t, e) => {
  var n;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - 2);
  return !(i.index() === 0 || ((n = i.nodeBefore) == null ? void 0 : n.type.name) !== t);
}, qh = (t, e, n) => {
  if (!n)
    return !1;
  const r = ge(t, e.schema);
  let i = !1;
  return n.descendants((o) => {
    o.type === r && (i = !0);
  }), i;
}, Ol = (t, e, n) => {
  if (t.commands.undoInputRule())
    return !0;
  if (t.state.selection.from !== t.state.selection.to)
    return !1;
  if (!en(t.state, e) && Uh(t.state, e, n)) {
    const { $anchor: l } = t.state.selection, a = t.state.doc.resolve(l.before() - 1), c = [];
    a.node().descendants((f, p) => {
      f.type.name === e && c.push({ node: f, pos: p });
    });
    const d = c.at(-1);
    if (!d)
      return !1;
    const u = t.state.doc.resolve(a.start() + d.pos + 1);
    return t.chain().cut({ from: l.start() - 1, to: l.end() + 1 }, u.end()).joinForward().run();
  }
  if (!en(t.state, e) || !Gb(t.state))
    return !1;
  const r = ei(e, t.state);
  if (!r)
    return !1;
  const o = t.state.doc.resolve(r.$pos.pos - 2).node(r.depth), s = qh(e, t.state, o);
  return Kh(e, t.state) && !s ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run();
}, Jh = (t, e) => {
  const n = za(t, e), r = ei(t, e);
  return !r || !n ? !1 : n > r.depth;
}, Gh = (t, e) => {
  const n = za(t, e), r = ei(t, e);
  return !r || !n ? !1 : n < r.depth;
}, Ll = (t, e) => {
  if (!en(t.state, e) || !Jb(t.state, e))
    return !1;
  const { selection: n } = t.state, { $from: r, $to: i } = n;
  return !n.empty && r.sameParent(i) ? !1 : Jh(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : Gh(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward();
}, Gx = (t, e) => {
  var n;
  const { $anchor: r } = e.selection, i = e.doc.resolve(r.pos - r.parentOffset - 2);
  return !(i.index() === i.parent.childCount - 1 || ((n = i.nodeAfter) == null ? void 0 : n.type.name) !== t);
}, Zx = Y.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && Ll(t, n) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && Ll(t, n) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
          t.state.schema.nodes[n] !== void 0 && Ol(t, n, r) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
          t.state.schema.nodes[n] !== void 0 && Ol(t, n, r) && (e = !0);
        }), e;
      }
    };
  }
}), eu = /^(\s*)(\d+)\.\s+(.*)$/, Xx = /^\s/;
function Yx(t) {
  const e = [];
  let n = 0, r = 0;
  for (; n < t.length; ) {
    const i = t[n], o = i.match(eu);
    if (!o)
      break;
    const [, s, l, a] = o, c = s.length;
    let d = a, u = n + 1;
    const f = [i];
    for (; u < t.length; ) {
      const p = t[u];
      if (p.match(eu))
        break;
      if (p.trim() === "")
        f.push(p), d += `
`, u += 1;
      else if (p.match(Xx))
        f.push(p), d += `
${p.slice(c + 2)}`, u += 1;
      else
        break;
    }
    e.push({
      indent: c,
      number: parseInt(l, 10),
      content: d.trim(),
      raw: f.join(`
`)
    }), r = u, n = u;
  }
  return [e, r];
}
function Zh(t, e, n) {
  var r;
  const i = [];
  let o = 0;
  for (; o < t.length; ) {
    const s = t[o];
    if (s.indent === e) {
      const l = s.content.split(`
`), a = ((r = l[0]) == null ? void 0 : r.trim()) || "", c = [];
      a && c.push({
        type: "paragraph",
        raw: a,
        tokens: n.inlineTokens(a)
      });
      const d = l.slice(1).join(`
`).trim();
      if (d) {
        const p = n.blockTokens(d);
        c.push(...p);
      }
      let u = o + 1;
      const f = [];
      for (; u < t.length && t[u].indent > e; )
        f.push(t[u]), u += 1;
      if (f.length > 0) {
        const p = Math.min(...f.map((m) => m.indent)), h = Zh(f, p, n);
        c.push({
          type: "list",
          ordered: !0,
          start: f[0].number,
          items: h,
          raw: f.map((m) => m.raw).join(`
`)
        });
      }
      i.push({
        type: "list_item",
        raw: s.raw,
        tokens: c
      }), o = u;
    } else
      o += 1;
  }
  return i;
}
function Qx(t, e) {
  return t.map((n) => {
    if (n.type !== "list_item")
      return e.parseChildren([n])[0];
    const r = [];
    return n.tokens && n.tokens.length > 0 && n.tokens.forEach((i) => {
      if (i.type === "paragraph" || i.type === "list" || i.type === "blockquote" || i.type === "code")
        r.push(...e.parseChildren([i]));
      else if (i.type === "text" && i.tokens) {
        const o = e.parseChildren([i]);
        r.push({
          type: "paragraph",
          content: o
        });
      } else {
        const o = e.parseChildren([i]);
        o.length > 0 && r.push(...o);
      }
    }), {
      type: "listItem",
      content: r
    };
  });
}
var eS = "listItem", tu = "textStyle", nu = /^(\d+)\.\s$/, Xh = ye.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (t) => t.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, ...n } = t;
    return e === 1 ? ["ol", te(this.options.HTMLAttributes, n), 0] : ["ol", te(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (t, e) => {
    if (t.type !== "list" || !t.ordered)
      return [];
    const n = t.start || 1, r = t.items ? Qx(t.items, e) : [];
    return n !== 1 ? {
      type: "orderedList",
      attrs: { start: n },
      content: r
    } : {
      type: "orderedList",
      content: r
    };
  },
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    start: (t) => {
      const e = t.match(/^(\s*)(\d+)\.\s+/), n = e?.index;
      return n !== void 0 ? n : -1;
    },
    tokenize: (t, e, n) => {
      var r;
      const i = t.split(`
`), [o, s] = Yx(i);
      if (o.length === 0)
        return;
      const l = Zh(o, 0, n);
      return l.length === 0 ? void 0 : {
        type: "list",
        ordered: !0,
        start: ((r = o[0]) == null ? void 0 : r.number) || 1,
        items: l,
        raw: i.slice(0, s).join(`
`)
      };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(eS, this.editor.getAttributes(tu)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = qn({
      find: nu,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = qn({
      find: nu,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(tu) }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1],
      editor: this.editor
    })), [t];
  }
}), tS = /^\s*(\[([( |x])?\])\s$/, Yh = ye.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => {
          const e = t.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      te(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  parseMarkdown: (t, e) => {
    const n = [];
    if (t.tokens && t.tokens.length > 0 ? n.push(e.createNode("paragraph", {}, e.parseInline(t.tokens))) : t.text ? n.push(e.createNode("paragraph", {}, [e.createNode("text", { text: t.text })])) : n.push(e.createNode("paragraph", {}, [])), t.nestedTokens && t.nestedTokens.length > 0) {
      const r = e.parseChildren(t.nestedTokens);
      n.push(...r);
    }
    return e.createNode("taskItem", { checked: t.checked || !1 }, n);
  },
  renderMarkdown: (t, e) => {
    var n;
    const i = `- [${(n = t.attrs) != null && n.checked ? "x" : " "}] `;
    return Aa(t, e, i);
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: e, getPos: n, editor: r }) => {
      const i = document.createElement("li"), o = document.createElement("label"), s = document.createElement("span"), l = document.createElement("input"), a = document.createElement("div"), c = (d) => {
        var u, f;
        l.ariaLabel = ((f = (u = this.options.a11y) == null ? void 0 : u.checkboxLabel) == null ? void 0 : f.call(u, d, l.checked)) || `Task item checkbox for ${d.textContent || "empty task item"}`;
      };
      return c(t), o.contentEditable = "false", l.type = "checkbox", l.addEventListener("mousedown", (d) => d.preventDefault()), l.addEventListener("change", (d) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const { checked: u } = d.target;
        r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: f }) => {
          const p = n();
          if (typeof p != "number")
            return !1;
          const h = f.doc.nodeAt(p);
          return f.setNodeMarkup(p, void 0, {
            ...h?.attrs,
            checked: u
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, u) || (l.checked = !l.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([d, u]) => {
        i.setAttribute(d, u);
      }), i.dataset.checked = t.attrs.checked, l.checked = t.attrs.checked, o.append(l, s), i.append(o, a), Object.entries(e).forEach(([d, u]) => {
        i.setAttribute(d, u);
      }), {
        dom: i,
        contentDOM: a,
        update: (d) => d.type !== this.type ? !1 : (i.dataset.checked = d.attrs.checked, l.checked = d.attrs.checked, c(d), !0)
      };
    };
  },
  addInputRules() {
    return [
      qn({
        find: tS,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), Qh = ye.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", te(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
  },
  parseMarkdown: (t, e) => e.createNode("taskList", {}, e.parseChildren(t.items || [])),
  renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, `
`) : "",
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(t) {
      var e;
      const n = (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : e.index;
      return n !== void 0 ? n : -1;
    },
    tokenize(t, e, n) {
      const r = (o) => {
        const s = dl(
          o,
          {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (l) => ({
              indentLevel: l[1].length,
              mainContent: l[4],
              checked: l[3].toLowerCase() === "x"
            }),
            createToken: (l, a) => ({
              type: "taskItem",
              raw: "",
              mainContent: l.mainContent,
              indentLevel: l.indentLevel,
              checked: l.checked,
              text: l.mainContent,
              tokens: n.inlineTokens(l.mainContent),
              nestedTokens: a
            }),
            // Allow recursive nesting
            customNestedParser: r
          },
          n
        );
        return s ? [
          {
            type: "taskList",
            raw: s.raw,
            items: s.items
          }
        ] : n.blockTokens(o);
      }, i = dl(
        t,
        {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: (o) => ({
            indentLevel: o[1].length,
            mainContent: o[4],
            checked: o[3].toLowerCase() === "x"
          }),
          createToken: (o, s) => ({
            type: "taskItem",
            raw: "",
            mainContent: o.mainContent,
            indentLevel: o.indentLevel,
            checked: o.checked,
            text: o.mainContent,
            tokens: n.inlineTokens(o.mainContent),
            nestedTokens: s
          }),
          // Use the recursive parser for nested content
          customNestedParser: r
        },
        n
      );
      if (i)
        return {
          type: "taskList",
          raw: i.raw,
          items: i.items
        };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
Y.create({
  name: "listKit",
  addExtensions() {
    const t = [];
    return this.options.bulletList !== !1 && t.push(jh.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(Wh.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(Zx.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(Xh.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(Yh.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(Qh.configure(this.options.taskList)), t;
  }
});
var nS = ye.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", te(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown: (t, e) => {
    const n = t.tokens || [];
    return n.length === 1 && n[0].type === "image" ? e.parseChildren([n[0]]) : e.createNode(
      "paragraph",
      void 0,
      // no attributes for paragraph
      e.parseInline(n)
    );
  },
  renderMarkdown: (t, e) => !t || !Array.isArray(t.content) ? "" : e.renderChildren(t.content),
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), rS = ye.create({
  name: "text",
  group: "inline",
  parseMarkdown: (t) => ({
    type: "text",
    text: t.text || ""
  }),
  renderMarkdown: (t) => t.text || ""
}), iS = 20, em = (t, e = 0) => {
  const n = [];
  return !t.children.length || e > iS || Array.from(t.children).forEach((r) => {
    r.tagName === "SPAN" ? n.push(r) : r.children.length && n.push(...em(r, e + 1));
  }), n;
}, oS = (t) => {
  if (!t.children.length)
    return;
  const e = em(t);
  e && e.forEach((n) => {
    var r, i;
    const o = n.getAttribute("style"), s = (i = (r = n.parentElement) == null ? void 0 : r.closest("span")) == null ? void 0 : i.getAttribute("style");
    n.setAttribute("style", `${s};${o}`);
  });
}, tm = rt.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !0
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        consuming: !1,
        getAttrs: (t) => t.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && oS(t), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", te(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleTextStyle: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      removeEmptyTextStyle: () => ({ tr: t }) => {
        const { selection: e } = t;
        return t.doc.nodesBetween(e.from, e.to, (n, r) => {
          if (n.isTextblock)
            return !0;
          n.marks.filter((i) => i.type === this.type).some((i) => Object.values(i.attrs).some((o) => !!o)) || t.removeMark(r, r + n.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), sS = Y.create({
  name: "backgroundColor",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (t) => {
              var e;
              const n = t.getAttribute("style");
              if (n) {
                const r = n.split(";").map((i) => i.trim()).filter(Boolean);
                for (let i = r.length - 1; i >= 0; i -= 1) {
                  const o = r[i].split(":");
                  if (o.length >= 2) {
                    const s = o[0].trim().toLowerCase(), l = o.slice(1).join(":").trim();
                    if (s === "background-color")
                      return l.replace(/['"]+/g, "");
                  }
                }
              }
              return (e = t.style.backgroundColor) == null ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.backgroundColor ? {
              style: `background-color: ${t.backgroundColor}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBackgroundColor: (t) => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: t }).run(),
      unsetBackgroundColor: () => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
    };
  }
}), nm = Y.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (t) => {
              var e;
              const n = t.getAttribute("style");
              if (n) {
                const r = n.split(";").map((i) => i.trim()).filter(Boolean);
                for (let i = r.length - 1; i >= 0; i -= 1) {
                  const o = r[i].split(":");
                  if (o.length >= 2) {
                    const s = o[0].trim().toLowerCase(), l = o.slice(1).join(":").trim();
                    if (s === "color")
                      return l.replace(/['"]+/g, "");
                  }
                }
              }
              return (e = t.style.color) == null ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.color ? {
              style: `color: ${t.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (t) => ({ chain: e }) => e().setMark("textStyle", { color: t }).run(),
      unsetColor: () => ({ chain: t }) => t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), rm = Y.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (t) => t.style.fontFamily,
            renderHTML: (t) => t.fontFamily ? {
              style: `font-family: ${t.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (t) => ({ chain: e }) => e().setMark("textStyle", { fontFamily: t }).run(),
      unsetFontFamily: () => ({ chain: t }) => t().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
}), lS = Y.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (t) => t.style.fontSize,
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${t.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), aS = Y.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (t) => t.style.lineHeight,
            renderHTML: (t) => t.lineHeight ? {
              style: `line-height: ${t.lineHeight}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (t) => ({ chain: e }) => e().setMark("textStyle", { lineHeight: t }).run(),
      unsetLineHeight: () => ({ chain: t }) => t().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run()
    };
  }
});
Y.create({
  name: "textStyleKit",
  addExtensions() {
    const t = [];
    return this.options.backgroundColor !== !1 && t.push(sS.configure(this.options.backgroundColor)), this.options.color !== !1 && t.push(nm.configure(this.options.color)), this.options.fontFamily !== !1 && t.push(rm.configure(this.options.fontFamily)), this.options.fontSize !== !1 && t.push(lS.configure(this.options.fontSize)), this.options.lineHeight !== !1 && t.push(aS.configure(this.options.lineHeight)), this.options.textStyle !== !1 && t.push(tm.configure(this.options.textStyle)), t;
  }
});
function cS(t = {}) {
  return new ne({
    view(e) {
      return new dS(e, t);
    }
  });
}
class dS {
  constructor(e, n) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: n }) => this.editorView.dom.removeEventListener(e, n));
  }
  update(e, n) {
    this.cursorPos != null && n.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), n = !e.parent.inlineContent, r, i = this.editorView.dom, o = i.getBoundingClientRect(), s = o.width / i.offsetWidth, l = o.height / i.offsetHeight;
    if (n) {
      let u = e.nodeBefore, f = e.nodeAfter;
      if (u || f) {
        let p = this.editorView.nodeDOM(this.cursorPos - (u ? u.nodeSize : 0));
        if (p) {
          let h = p.getBoundingClientRect(), m = u ? h.bottom : h.top;
          u && f && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let g = this.width / 2 * l;
          r = { left: h.left, right: h.right, top: m - g, bottom: m + g };
        }
      }
    }
    if (!r) {
      let u = this.editorView.coordsAtPos(this.cursorPos), f = this.width / 2 * s;
      r = { left: u.left - f, right: u.left + f, top: u.top, bottom: u.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let c, d;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, d = -pageYOffset;
    else {
      let u = a.getBoundingClientRect(), f = u.width / a.offsetWidth, p = u.height / a.offsetHeight;
      c = u.left - a.scrollLeft * f, d = u.top - a.scrollTop * p;
    }
    this.element.style.left = (r.left - c) / s + "px", this.element.style.top = (r.top - d) / l + "px", this.element.style.width = (r.right - r.left) / s + "px", this.element.style.height = (r.bottom - r.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, n, e) : i;
    if (n && !o) {
      let s = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = Zu(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
class pe extends $ {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    return pe.valid(r) ? new pe(r) : $.near(r);
  }
  content() {
    return O.empty;
  }
  eq(e) {
    return e instanceof pe && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new pe(e.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Ba(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let n = e.parent;
    if (n.isTextblock || !uS(e) || !fS(e))
      return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = n.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, n, r = !1) {
    e: for (; ; ) {
      if (!r && pe.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (n > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          o = l.child(n > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += n;
        let a = e.doc.resolve(i);
        if (pe.valid(a))
          return a;
      }
      for (; ; ) {
        let s = n > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !P.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * n), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += n;
        let l = e.doc.resolve(i);
        if (pe.valid(l))
          return l;
      }
      return null;
    }
  }
}
pe.prototype.visible = !1;
pe.findFrom = pe.findGapCursorFrom;
$.jsonID("gapcursor", pe);
class Ba {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Ba(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return pe.valid(n) ? new pe(n) : $.near(n);
  }
}
function im(t) {
  return t.isAtom || t.spec.isolating || t.spec.createGapCursor;
}
function uS(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.index(e), r = t.node(e);
    if (n == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || im(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function fS(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.indexAfter(e), r = t.node(e);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || im(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function pS() {
  return new ne({
    props: {
      decorations: yS,
      createSelectionBetween(t, e, n) {
        return e.pos == n.pos && pe.valid(n) ? new pe(n) : null;
      },
      handleClick: mS,
      handleKeyDown: hS,
      handleDOMEvents: { beforeinput: gS }
    }
  });
}
const hS = pa({
  ArrowLeft: wi("horiz", -1),
  ArrowRight: wi("horiz", 1),
  ArrowUp: wi("vert", -1),
  ArrowDown: wi("vert", 1)
});
function wi(t, e) {
  const n = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof B) {
      if (!o.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = pe.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new pe(c))), !0) : !1;
  };
}
function mS(t, e, n) {
  if (!t || !t.editable)
    return !1;
  let r = t.state.doc.resolve(e);
  if (!pe.valid(r))
    return !1;
  let i = t.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && P.isSelectable(t.state.doc.nodeAt(i.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new pe(r))), !0);
}
function gS(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof pe))
    return !1;
  let { $from: n } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = C.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = C.from(r[s].createAndFill(null, i));
  let o = t.state.tr.replace(n.pos, n.pos, new O(i, 0, 0));
  return o.setSelection(B.near(o.doc.resolve(n.pos + 1))), t.dispatch(o), !1;
}
function yS(t) {
  if (!(t.selection instanceof pe))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", oe.create(t.doc, [ke.widget(t.selection.head, e, { key: "gapcursor" })]);
}
var ro = 200, Se = function() {
};
Se.prototype.append = function(e) {
  return e.length ? (e = Se.from(e), !this.length && e || e.length < ro && this.leafAppend(e) || this.length < ro && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Se.prototype.prepend = function(e) {
  return e.length ? Se.from(e).append(this) : this;
};
Se.prototype.appendInner = function(e) {
  return new bS(this, e);
};
Se.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? Se.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
Se.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Se.prototype.forEach = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0);
};
Se.prototype.map = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, n, r), i;
};
Se.from = function(e) {
  return e instanceof Se ? e : e && e.length ? new om(e) : Se.empty;
};
var om = /* @__PURE__ */ (function(t) {
  function e(r) {
    t.call(this), this.values = r;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= ro)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= ro)
      return new e(i.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
})(Se);
Se.empty = new om([]);
var bS = /* @__PURE__ */ (function(t) {
  function e(n, r) {
    t.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
})(Se);
const wS = 500;
class Ye {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    n && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], d = [];
    return this.items.forEach((u, f) => {
      if (!u.step) {
        i || (i = this.remapping(r, f + 1), o = i.maps.length), o--, d.push(u);
        return;
      }
      if (i) {
        d.push(new st(u.map));
        let p = u.step.map(i.slice(o)), h;
        p && s.maybeStep(p).doc && (h = s.mapping.maps[s.mapping.maps.length - 1], c.push(new st(h, void 0, void 0, c.length + d.length))), o--, h && i.appendMap(h, o);
      } else
        s.maybeStep(u.step);
      if (u.selection)
        return l = i ? u.selection.map(i.slice(o)) : u.selection, a = new Ye(this.items.slice(0, r).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), f = new st(e.mapping.maps[d], u, n), p;
      (p = a && a.merge(f)) && (f = p, d ? o.pop() : l = l.slice(0, l.length - 1)), o.push(f), n && (s++, n = void 0), i || (a = f);
    }
    let c = s - r.depth;
    return c > kS && (l = vS(l, c), s -= c), new Ye(l.append(o), s);
  }
  remapping(e, n) {
    let r = new Nr();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, n), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ye(this.items.append(e.map((n) => new st(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - n), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = n;
    this.items.forEach((f) => {
      let p = o.getMirror(--a);
      if (p == null)
        return;
      s = Math.min(s, p);
      let h = o.maps[p];
      if (f.step) {
        let m = e.steps[p].invert(e.docs[p]), g = f.selection && f.selection.map(o.slice(a + 1, p));
        g && l++, r.push(new st(h, m, g));
      } else
        r.push(new st(h));
    }, i);
    let c = [];
    for (let f = n; f < s; f++)
      c.push(new st(o.maps[f]));
    let d = this.items.slice(0, i).append(c).append(r), u = new Ye(d, l);
    return u.emptyItemCount() > wS && (u = u.compress(this.items.length - r.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((n) => {
      n.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let n = this.remapping(0, e), r = n.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(n.slice(r)), c = a && a.getMap();
        if (r--, c && n.appendMap(c, r), a) {
          let d = s.selection && s.selection.map(n.slice(r));
          d && o++;
          let u = new st(c.invert(), a, d), f, p = i.length - 1;
          (f = i.length && i[p].merge(u)) ? i[p] = f : i.push(u);
        }
      } else s.map && r--;
    }, this.items.length, 0), new Ye(Se.from(i.reverse()), o);
  }
}
Ye.empty = new Ye(Se.empty, 0);
function vS(t, e) {
  let n;
  return t.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return n = i, !1;
  }), t.slice(n);
}
class st {
  constructor(e, n, r, i) {
    this.map = e, this.step = n, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new st(n.getMap().invert(), n, this.selection);
    }
  }
}
class Bt {
  constructor(e, n, r, i, o) {
    this.done = e, this.undone = n, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const kS = 20;
function xS(t, e, n, r) {
  let i = n.getMeta(bn), o;
  if (i)
    return i.historyState;
  n.getMeta(MS) && (t = new Bt(t.done, t.undone, null, 0, -1));
  let s = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t;
  if (s && s.getMeta(bn))
    return s.getMeta(bn).redo ? new Bt(t.done.addTransform(n, void 0, r, Hi(e)), t.undone, ru(n.mapping.maps), t.prevTime, t.prevComposition) : new Bt(t.done, t.undone.addTransform(n, void 0, r, Hi(e)), null, t.prevTime, t.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = t.prevTime == 0 || !s && t.prevComposition != l && (t.prevTime < (n.time || 0) - r.newGroupDelay || !SS(n, t.prevRanges)), c = s ? Ds(t.prevRanges, n.mapping) : ru(n.mapping.maps);
    return new Bt(t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, r, Hi(e)), Ye.empty, c, n.time, l ?? t.prevComposition);
  } else return (o = n.getMeta("rebased")) ? new Bt(t.done.rebased(n, o), t.undone.rebased(n, o), Ds(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new Bt(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), Ds(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
}
function SS(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let n = !1;
  return t.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (n = !0);
  }), n;
}
function ru(t) {
  let e = [];
  for (let n = t.length - 1; n >= 0 && e.length == 0; n--)
    t[n].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function Ds(t, e) {
  if (!t)
    return null;
  let n = [];
  for (let r = 0; r < t.length; r += 2) {
    let i = e.map(t[r], 1), o = e.map(t[r + 1], -1);
    i <= o && n.push(i, o);
  }
  return n;
}
function CS(t, e, n) {
  let r = Hi(e), i = bn.get(e).spec.config, o = (n ? t.undone : t.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (n ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new Bt(n ? l : o.remaining, n ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(bn, { redo: n, historyState: a });
}
let _s = !1, iu = null;
function Hi(t) {
  let e = t.plugins;
  if (iu != e) {
    _s = !1, iu = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        _s = !0;
        break;
      }
  }
  return _s;
}
const bn = new ce("history"), MS = new ce("closeHistory");
function AS(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new ne({
    key: bn,
    state: {
      init() {
        return new Bt(Ye.empty, Ye.empty, null, 0, -1);
      },
      apply(e, n, r) {
        return xS(n, r, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let r = n.inputType, i = r == "historyUndo" ? lm : r == "historyRedo" ? am : null;
          return !i || !e.editable ? !1 : (n.preventDefault(), i(e.state, e.dispatch));
        }
      }
    }
  });
}
function sm(t, e) {
  return (n, r) => {
    let i = bn.getState(n);
    if (!i || (t ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = CS(i, n, t);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const lm = sm(!1, !0), am = sm(!0, !0);
var TS = Y.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (t) => t.length,
      wordCounter: (t) => t.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t) => {
      const e = t?.node || this.editor.state.doc;
      if ((t?.mode || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (t) => {
      const e = t?.node || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let t = !1;
    return [
      new ne({
        key: new ce("characterCount"),
        appendTransaction: (e, n, r) => {
          if (t)
            return;
          const i = this.options.limit;
          if (i == null || i === 0) {
            t = !0;
            return;
          }
          const o = this.storage.characters({ node: r.doc });
          if (o > i) {
            const s = o - i, l = 0, a = s;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`
            );
            const c = r.tr.deleteRange(l, a);
            return t = !0, c;
          }
          t = !0;
        },
        filterTransaction: (e, n) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const i = this.storage.characters({ node: n.doc }), o = this.storage.characters({ node: e.doc });
          if (o <= r || i > r && o > r && o <= i)
            return !0;
          if (i > r && o > r && o > i || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = o - r, c = l - a, d = l;
          return e.deleteRange(c, d), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
}), ES = Y.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [cS(this.options)];
  }
}), OS = Y.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("focus"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: i } = e, o = [];
            if (!n || !r)
              return oe.create(t, []);
            let s = 0;
            this.options.mode === "deepest" && t.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(i >= c && i <= c + a.nodeSize - 1))
                return !1;
              s += 1;
            });
            let l = 0;
            return t.descendants((a, c) => {
              if (a.isText || !(i >= c && i <= c + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && s - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              o.push(
                ke.node(c, c + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), oe.create(t, o);
          }
        }
      })
    ];
  }
}), LS = Y.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [pS()];
  },
  extendNodeSchema(t) {
    var e;
    const n = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = Q(z(t, "allowGapCursor", n))) != null ? e : null
    };
  }
}), HS = Y.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new ne({
        key: new ce("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!n)
              return null;
            const o = this.editor.isEmpty;
            return t.descendants((s, l) => {
              const a = r >= l && r <= l + s.nodeSize, c = !s.isLeaf && Go(s);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const d = [this.options.emptyNodeClass];
                o && d.push(this.options.emptyEditorClass);
                const u = ke.node(l, l + s.nodeSize, {
                  class: d.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                i.push(u);
              }
              return this.options.includeChildren;
            }), oe.create(t, i);
          }
        }
      })
    ];
  }
});
Y.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: t, options: e } = this;
    return [
      new ne({
        key: new ce("selection"),
        props: {
          decorations(n) {
            return n.selection.empty || t.isFocused || !t.isEditable || hp(n.selection) || t.view.dragging ? null : oe.create(n.doc, [
              ke.inline(n.selection.from, n.selection.to, {
                class: e.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function ou({ types: t, node: e }) {
  return e && Array.isArray(t) && t.includes(e.type) || e?.type === t;
}
Y.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var t;
    const e = new ce(this.name), n = this.options.node || ((t = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : t.name) || "paragraph", r = Object.entries(this.editor.schema.nodes).map(([, i]) => i).filter((i) => (this.options.notAfter || []).concat(n).includes(i.name));
    return [
      new ne({
        key: e,
        appendTransaction: (i, o, s) => {
          const { doc: l, tr: a, schema: c } = s, d = e.getState(s), u = l.content.size, f = c.nodes[n];
          if (d)
            return a.insert(u, f.create());
        },
        state: {
          init: (i, o) => {
            const s = o.tr.doc.lastChild;
            return !ou({ node: s, types: r });
          },
          apply: (i, o) => {
            if (!i.docChanged || i.getMeta("__uniqueIDTransaction"))
              return o;
            const s = i.doc.lastChild;
            return !ou({ node: s, types: r });
          }
        }
      })
    ];
  }
});
var VS = Y.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => lm(t, e),
      redo: () => ({ state: t, dispatch: e }) => am(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [AS(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), NS = "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z", RS = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", IS = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", DS = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", _S = "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M11 8H9V10C9 11.1 8.1 12 7 12C8.1 12 9 12.9 9 14V16H11V18H9C7.9 18 7 17.1 7 16V15C7 13.9 6.1 13 5 13V11C6.1 11 7 10.1 7 9V8C7 6.9 7.9 6 9 6H11V8M19 13C17.9 13 17 13.9 17 15V16C17 17.1 16.1 18 15 18H13V16H15V14C15 12.9 15.9 12 17 12C15.9 12 15 11.1 15 10V8H13V6H15C16.1 6 17 6.9 17 8V9C17 10.1 17.9 11 19 11V13Z", PS = "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z", zS = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z", BS = "M13.09 20H6L12 14L13.88 15.88C14.5 14.9 15.36 14.1 16.4 13.6L18 12V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.1 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20M13 3.5L18.5 9H13V3.5M8 9C9.11 9 10 9.9 10 11S9.11 13 8 13 6 12.11 6 11 6.9 9 8 9M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z", su = "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z", FS = "M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z", $S = "M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z", jS = "M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z", WS = "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z", US = "M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z", KS = "M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z", qS = "M3,7H9V13H3V7M3,3H21V5H3V3M21,7V9H11V7H21M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", JS = "M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", GS = "M15,7H21V13H15V7M3,3H21V5H3V3M13,7V9H3V7H13M9,11V13H3V11H9M3,15H17V17H3V15M3,19H21V21H3V19Z", ZS = "M17,8H20V20H21V21H17V20H18V17H14L12.5,20H14V21H10V20H11L17,8M18,9L14.5,16H18V9M5,3H10C11.11,3 12,3.89 12,5V16H9V11H6V16H3V5C3,3.89 3.89,3 5,3M6,5V9H9V5H6Z", XS = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z", YS = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z", QS = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z", eC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z", tC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z", nC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z", rC = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z", iC = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z", oC = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z", sC = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z", lC = "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z", aC = "M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z", cC = "M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z", dC = "M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z", uC = "M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z", fC = "M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z", pC = "M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z", hC = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z", mC = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z", gC = "M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z", yC = "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", bC = "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", wC = "M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z", vC = "M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z", lu = "M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z", kC = "M19,13H5V11H19V13Z", xC = "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z", SC = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z", CC = "M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z", MC = "M9 7V17H15V15H11V7H9Z", AC = "M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z", TC = "M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z", EC = "M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z", OC = "M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z", LC = "M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z", HC = "M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z", VC = "M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z", NC = "M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", RC = "M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", IC = "M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z", DC = "M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z", _C = "M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z", PC = "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z", zC = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z", BC = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z", FC = "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";
const $C = {
  bold: WS,
  italic: sC,
  underline: gC,
  strike: pC,
  color: FC,
  highlight: KS,
  heading: rC,
  textAlign: su,
  fontFamily: ZS,
  fontSize: fC,
  subscript: hC,
  superscript: mC,
  bulletList: lC,
  orderedList: cC,
  taskList: aC,
  indent: oC,
  outdent: iC,
  link: lu,
  fileImagePlus: BS,
  image: wC,
  video: BC,
  table: EC,
  blockquote: uC,
  horizontalRule: kC,
  code: PS,
  codeBlock: _S,
  clear: US,
  undo: zC,
  redo: CC,
  markdownTheme: SC,
  fullscreen: yC,
  // heading
  h1: XS,
  h2: YS,
  h3: QS,
  h4: eC,
  h5: tC,
  h6: nC,
  p: dC,
  // textAlign
  left: $S,
  center: su,
  right: jS,
  justify: FS,
  // no tollbar icon
  circle: IS,
  close: DS,
  fullscreenExit: bC,
  linkVariant: lu,
  linkVariantOff: vC,
  openInNew: xC,
  formatFloatLeft: qS,
  formatFloatNone: JS,
  formatFloatRight: GS,
  sizeS: TC,
  sizeM: AC,
  sizeL: MC,
  aspectRatio: NS,
  delete: zS,
  text: PC,
  // table
  tablePlus: NC,
  tableRemove: RC,
  tableColumnPlusAfter: OC,
  tableColumnPlusBefore: LC,
  tableColumnRemove: HC,
  tableRowPlusAfter: IC,
  tableRowPlusBefore: DC,
  tableRowRemove: _C,
  tableMergeCells: VC,
  check: RS
};
function fe(t) {
  if (t)
    return `svg:${$C[t]}`;
}
const cm = {
  editor: {
    type: Object,
    required: !0
  },
  icon: {
    type: String,
    default: void 0
  },
  tooltip: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String,
    default: void 0
  },
  action: {
    type: Function,
    default: void 0
  },
  isActive: {
    type: Function,
    default: void 0
  }
}, de = {
  editor: {
    type: Object,
    required: !0
  },
  t: {
    type: Function,
    required: !0
  }
}, G = /* @__PURE__ */ F({
  __name: "index",
  props: cm,
  setup(t) {
    const e = t, n = Su("disableToolbar", ee(!1));
    return (r, i) => {
      const o = Mn, s = Tm, l = Kr;
      return E(), _(l, {
        class: Jt(["rounded me-1 ms-0", {
          "v-btn--active": r.isActive?.()
        }]),
        density: "comfortable",
        size: "small",
        disabled: M(n) || r.disabled,
        color: r.color,
        icon: "",
        onClick: r.action
      }, {
        default: L(() => [
          H(o, {
            icon: M(fe)(e.icon)
          }, null, 8, ["icon"]),
          H(s, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: e.tooltip
          }, null, 8, ["text"]),
          Lt(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class", "onClick"]);
    };
  }
}), jC = /* @__PURE__ */ F({
  __name: "BlockquoteActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleBlockquote().run(),
      "is-active": () => e.editor.isActive("blockquote") || !1,
      disabled: !e.editor.can().toggleBlockquote(),
      tooltip: e.t("editor.blockquote.tooltip"),
      icon: "blockquote"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), WC = /* @__PURE__ */ F({
  __name: "BoldActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleBold().run(),
      "is-active": () => e.editor.isActive("bold") || !1,
      disabled: !e.editor.can().toggleBold(),
      tooltip: e.t("editor.bold.tooltip"),
      icon: "bold"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), UC = /* @__PURE__ */ F({
  __name: "BulletListActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleBulletList().run(),
      "is-active": () => e.editor.isActive("bulletList") || !1,
      disabled: !e.editor.can().toggleBulletList(),
      tooltip: e.t("editor.bulletlist.tooltip"),
      icon: "bulletList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), KC = /* @__PURE__ */ F({
  __name: "ClearActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().clearNodes().unsetAllMarks().run(),
      disabled: !e.editor.can().chain().focus().clearNodes().unsetAllMarks().run(),
      tooltip: e.t("editor.clear.tooltip"),
      icon: "clear"
    }, null, 8, ["editor", "action", "disabled", "tooltip"]));
  }
}), qC = /* @__PURE__ */ F({
  __name: "CodeActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleCode().run(),
      "is-active": () => e.editor.isActive("code") || !1,
      disabled: !e.editor.can().toggleCode(),
      tooltip: e.t("editor.code.tooltip"),
      icon: "code"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), JC = /* @__PURE__ */ F({
  __name: "CodeBlockActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleCodeBlock().run(),
      "is-active": () => e.editor.isActive("codeBlock") || !1,
      disabled: !e.editor.can().toggleCodeBlock(),
      tooltip: e.t("editor.codeblock.tooltip"),
      icon: "codeBlock"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), dm = /* @__PURE__ */ F({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "" },
    nudgeLeft: { default: 0 },
    nudgeTop: { default: 0 },
    more: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = ee(""), o = ee(!1);
    Ot(o, (l) => {
      i.value = n.modelValue;
    });
    function s(l) {
      r("update:modelValue", l), r("change", l), i.value = l, o.value = !1;
    }
    return (l, a) => {
      const c = Mn, d = Kr, u = qr, f = Em, p = Bl, h = No;
      return E(), _(h, {
        modelValue: o.value,
        "onUpdate:modelValue": a[2] || (a[2] = (m) => o.value = m),
        "nudge-left": t.nudgeLeft || 255,
        "nudge-top": t.nudgeTop || 42,
        "close-on-content-click": !1,
        transition: "scale-transition",
        origin: t.nudgeLeft ? "top left" : "top right",
        activator: "parent"
      }, {
        default: L(() => [
          H(p, null, {
            default: L(() => [
              H(f, {
                class: "d-flex flex-wrap justify-between ma-1",
                fluid: "",
                "max-width": 230
              }, {
                default: L(() => [
                  (E(!0), le(be, null, Ne(M(ew), (m) => (E(), _(d, {
                    key: m,
                    flat: "",
                    icon: "",
                    density: "compact",
                    onClick: (g) => s(m)
                  }, {
                    default: L(() => [
                      H(c, {
                        icon: M(fe)("circle"),
                        color: m
                      }, null, 8, ["icon", "color"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)),
                  H(u, {
                    modelValue: i.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (m) => i.value = m),
                    class: "mt-2 mx-1",
                    "append-inner-icon": M(fe)("check"),
                    density: "compact",
                    label: "HEX",
                    variant: "outlined",
                    flat: "",
                    "hide-details": "",
                    "single-line": "",
                    clearable: "",
                    "onClick:appendInner": a[1] || (a[1] = (m) => s(i.value))
                  }, ql({ _: 2 }, [
                    i.value ? {
                      name: "prepend-inner",
                      fn: L(() => [
                        H(c, {
                          class: "opacity-100",
                          icon: M(fe)("circle"),
                          color: i.value
                        }, null, 8, ["icon", "color"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["modelValue", "append-inner-icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "nudge-left", "nudge-top", "origin"]);
    };
  }
}), GC = /* @__PURE__ */ F({
  __name: "ColorActionButton",
  props: de,
  setup(t) {
    const e = t, { state: n } = Ha();
    function r(o) {
      typeof o == "string" && e.editor.chain().focus().setColor(o).run();
    }
    function i() {
      const { color: o } = e.editor.getAttributes("textStyle");
      return o && e.editor.isActive({ color: o }) || !1;
    }
    return Tn(() => {
      const { color: o } = e.editor.getAttributes("textStyle");
      n.color = o;
    }), (o, s) => (E(), _(G, {
      editor: o.editor,
      icon: "color",
      tooltip: o.t("editor.color.tooltip"),
      disabled: !o.editor.can().setColor(""),
      color: M(n).color,
      "is-active": i
    }, {
      default: L(() => [
        H(dm, {
          modelValue: M(n).color,
          "onUpdate:modelValue": s[0] || (s[0] = (l) => M(n).color = l),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["editor", "tooltip", "disabled", "color"]));
  }
}), ZC = /* @__PURE__ */ F({
  __name: "FullscreenActionButton",
  props: {
    ...de,
    useWindow: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, { t: n } = Rt(), { state: r, toggleFullscreen: i } = Ha(), { isFullscreen: o, enter: s, exit: l } = bv();
    Ot(o, (u) => {
      !u && r.isFullscreen && e.useWindow && d();
    });
    const a = U(() => {
      const u = r.isFullscreen ? "editor.fullscreen.tooltip.exit" : "editor.fullscreen.tooltip.fullscreen";
      return M(n)(u);
    }), c = U(() => r.isFullscreen ? "fullscreenExit" : "fullscreen");
    function d(u = !1) {
      i(), r.isFullscreen ? (document.documentElement.classList.add("overflow-y-hidden"), u && s()) : (document.documentElement.classList.remove("overflow-y-hidden"), u && l());
    }
    return (u, f) => (E(), _(G, {
      editor: u.editor,
      icon: c.value,
      tooltip: a.value,
      action: () => d(t.useWindow)
    }, null, 8, ["editor", "icon", "tooltip", "action"]));
  }
}), XC = /* @__PURE__ */ F({
  __name: "HighlightActionButton",
  props: de,
  setup(t) {
    const e = t, { state: n } = Ha();
    function r(i) {
      typeof i == "string" && e.editor.chain().focus().setHighlight({ color: i }).run();
    }
    return Tn(() => {
      const { color: i } = e.editor.getAttributes("highlight");
      n.highlight = i;
    }), (i, o) => (E(), _(G, {
      editor: i.editor,
      icon: "highlight",
      tooltip: i.t("editor.highlight.tooltip"),
      disabled: !i.editor.can().setHighlight(),
      color: M(n).highlight,
      "is-active": () => i.editor.isActive("highlight") || !1
    }, {
      default: L(() => [
        H(dm, {
          modelValue: M(n).highlight,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => M(n).highlight = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["editor", "tooltip", "disabled", "color", "is-active"]));
  }
}), YC = /* @__PURE__ */ F({
  __name: "HistoryActionButton",
  props: de,
  setup(t) {
    const e = t, n = ["undo", "redo"];
    function r(i) {
      i === "redo" && e.editor.chain().focus().redo().run(), i === "undo" && e.editor.chain().focus().undo().run();
    }
    return (i, o) => (E(), le(be, null, Ne(n, (s) => H(G, {
      key: s,
      editor: i.editor,
      action: () => r(s),
      "is-active": () => !1,
      disabled: !i.editor.can()[s](),
      tooltip: i.t(`editor.${s}.tooltip`),
      icon: s
    }, null, 8, ["editor", "action", "disabled", "tooltip", "icon"])), 64));
  }
}), QC = /* @__PURE__ */ F({
  __name: "HorizontalRuleActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().setHorizontalRule().run(),
      "is-active": () => e.editor.isActive("horizontalRule") || !1,
      disabled: !e.editor.can().setHorizontalRule(),
      tooltip: e.t("editor.horizontalrule.tooltip"),
      icon: "horizontalRule"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), Fa = /* @__PURE__ */ F({
  __name: "OriginalThemeProvider",
  setup(t) {
    const { global: { name: e } } = Jl();
    return (n, r) => {
      const i = bu;
      return E(), _(i, { theme: M(e) }, {
        default: L(() => [
          Lt(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["theme"]);
    };
  }
}), eM = /* @__PURE__ */ F({
  __name: "ImageActionButton",
  props: {
    ...de,
    upload: {
      type: Function,
      default: void 0
    },
    imageTabs: {
      type: Array,
      default: () => []
    },
    hiddenTabs: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const e = t, n = ee({});
    function r() {
      const o = e.editor?.view.state.selection?.node?.attrs ?? {};
      o?.src && (n.value.src = o.src), o?.alt && (n.value.alt = o.alt), o?.title && (n.value.title = o.title), o?.width && (n.value.width = o.width), o?.height && (n.value.height = o.height), o?.display && (n.value.display = o.display), n.value.lockAspectRatio = o.lockAspectRatio ?? !0;
    }
    return (i, o) => (E(), _(G, {
      editor: i.editor,
      action: r,
      "is-active": () => i.editor.isActive("image") || !1,
      disabled: !i.editor.can().setImage({}),
      tooltip: i.t("editor.image.tooltip"),
      icon: "image"
    }, {
      default: L(() => [
        H(Fa, null, {
          default: L(() => [
            Lt(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value, imageTabs: t.imageTabs, hiddenTabs: t.hiddenTabs, upload: t.upload }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), tM = /* @__PURE__ */ F({
  __name: "IndentActionButton",
  props: de,
  setup(t) {
    const e = t, n = ["outdent", "indent"], r = {
      indent: "sinkListItem",
      outdent: "liftListItem"
    };
    function i(o) {
      o === "indent" && e.editor.chain().focus().sinkListItem("listItem").run(), o === "outdent" && e.editor.chain().focus().liftListItem("listItem").run();
    }
    return (o, s) => (E(), le(be, null, Ne(n, (l) => H(G, {
      key: l,
      editor: o.editor,
      action: () => i(l),
      "is-active": () => !1,
      disabled: !o.editor.can()[r[l]]("listItem"),
      tooltip: o.t(`editor.${l}.tooltip`),
      icon: l
    }, null, 8, ["editor", "action", "disabled", "tooltip", "icon"])), 64));
  }
}), nM = /* @__PURE__ */ F({
  __name: "ItalicActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleItalic().run(),
      "is-active": () => e.editor.isActive("italic") || !1,
      disabled: !e.editor.can().toggleItalic(),
      tooltip: e.t("editor.italic.tooltip"),
      icon: "italic"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), rM = /* @__PURE__ */ F({
  __name: "LinkActionButton",
  props: de,
  setup(t) {
    const e = t, n = ee({
      href: void 0,
      target: void 0
    });
    function r() {
      const { href: i, target: o } = e.editor.getAttributes("link");
      n.value = {
        href: i,
        target: o
      };
    }
    return (i, o) => (E(), _(G, {
      editor: i.editor,
      icon: "link",
      tooltip: i.t("editor.link.tooltip"),
      disabled: !i.editor.can().setLink({ href: "" }),
      "is-active": () => i.editor.isActive("link") || !1,
      action: r
    }, {
      default: L(() => [
        H(Fa, null, {
          default: L(() => [
            Lt(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value.href, ...n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "tooltip", "disabled", "is-active"]));
  }
}), iM = /* @__PURE__ */ F({
  __name: "OrderedListActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleOrderedList().run(),
      "is-active": () => e.editor.isActive("orderedList") || !1,
      disabled: !e.editor.can().toggleOrderedList(),
      tooltip: e.t("editor.orderedlist.tooltip"),
      icon: "orderedList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), oM = /* @__PURE__ */ F({
  __name: "StrikeActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleStrike().run(),
      "is-active": () => e.editor.isActive("strike") || !1,
      disabled: !e.editor.can().toggleStrike(),
      tooltip: e.t("editor.strike.tooltip"),
      icon: "strike"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), sM = /* @__PURE__ */ F({
  __name: "SubscriptActionButton",
  props: {
    ...de,
    extension: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = U(() => {
      const o = [], s = e.extension.options.subscript, l = e.extension.options.superscript;
      return s !== !1 && o.push("subscript"), l !== !1 && o.push("superscript"), o;
    }), r = {
      subscript: "toggleSubscript",
      superscript: "toggleSuperscript"
    };
    function i(o) {
      o === "subscript" && e.editor.chain().focus().toggleSubscript().run(), o === "superscript" && e.editor.chain().focus().toggleSuperscript().run();
    }
    return (o, s) => (E(!0), le(be, null, Ne(n.value, (l) => (E(), _(G, {
      key: l,
      editor: o.editor,
      action: () => i(l),
      "is-active": () => o.editor.isActive(l) || !1,
      disabled: !o.editor.can()[r[l]](),
      tooltip: o.t(`editor.${l}.tooltip`),
      icon: l
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip", "icon"]))), 128));
  }
}), lM = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, aM = /CrOS/, cM = /android|ipad|playbook|silk/i;
function au(t = {}) {
  let e = t.ua || typeof navigator < "u" && navigator.userAgent;
  return e && typeof e == "object" && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string" ? !1 : !!(lM.test(e) && !aM.test(e) || t.tablet && cM.test(e) || t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.includes("Macintosh") && e.includes("Safari"));
}
const dM = ["onMouseover", "onMousedown"], uM = /* @__PURE__ */ F({
  __name: "CreateTablePopover",
  emits: ["createTable"],
  setup(t, { emit: e }) {
    const n = e, { t: r } = Rt(), i = ee(!1), o = ee(!0), s = Or({
      rows: au() ? ui : di,
      cols: au() ? ui : di
    }), l = Or({
      rows: fi,
      cols: fi
    });
    function a(f, p) {
      const h = {
        boxSizing: "border-box",
        width: "16px",
        height: "16px",
        padding: "4px",
        border: "1px solid #dcdfe6",
        borderRadius: "2px"
      };
      return p <= l.cols && f <= l.rows && (h.backgroundColor = "#ecf5ff", h.borderColor = "var(--vp-theme-primary)"), h;
    }
    function c(f, p) {
      f === s.rows && (s.rows = Math.min(f + 1, ui)), p === s.cols && (s.cols = Math.min(p + 1, ui)), l.rows = f, l.cols = p;
    }
    function d(f, p) {
      n("createTable", { rows: f, cols: p, withHeaderRow: M(o) }), u();
    }
    function u() {
      i.value = !1, o.value = !0, s.rows = di, s.cols = di, l.rows = fi, l.cols = fi;
    }
    return (f, p) => {
      const h = Fl, m = jr, g = Om, y = Qn, b = No;
      return E(), _(b, {
        modelValue: i.value,
        "onUpdate:modelValue": p[1] || (p[1] = (w) => i.value = w),
        location: "end bottom",
        "open-on-click": "",
        "open-on-hover": "",
        "close-on-content-click": !1,
        activator: "parent"
      }, {
        default: L(() => [
          H(y, { density: "compact" }, {
            default: L(() => [
              H(m, { class: "pa-2 pb-0" }, {
                default: L(() => [
                  H(h, {
                    modelValue: o.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (w) => o.value = w),
                    density: "compact",
                    "hide-details": "",
                    label: M(r)("editor.table.menu.insert_table.with_header_row")
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(m, { class: "d-flex flex-column flex-wrap justify-space-between pa-2" }, {
                default: L(() => [
                  (E(!0), le(be, null, Ne(s.rows, (w) => (E(), le("div", {
                    key: `r${w}`,
                    class: "d-flex"
                  }, [
                    (E(!0), le(be, null, Ne(s.cols, (k) => (E(), le("div", {
                      key: `c${k}`,
                      class: "pa-1",
                      onMouseover: (v) => c(w, k),
                      onMousedown: (v) => d(w, k)
                    }, [
                      Vt("div", {
                        style: _n(a(w, k))
                      }, null, 4)
                    ], 40, dM))), 128))
                  ]))), 128))
                ]),
                _: 1
              }),
              H(g, { class: "pt-0 pb-2" }, {
                default: L(() => [
                  Ht(Te(l.rows) + " x " + Te(l.cols), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), fM = /* @__PURE__ */ F({
  __name: "TableMenu",
  props: {
    editor: {},
    activator: { default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Rt(), r = ee(!1), i = U(() => [
      {
        type: "item",
        key: "insert-table",
        title: M(n)("editor.table.menu.insert_table"),
        icon: fe("tablePlus"),
        disabled: !e.editor.can().insertTable() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "add-column-before",
        title: M(n)("editor.table.menu.add_column_before"),
        icon: fe("tableColumnPlusBefore"),
        disabled: !e.editor.can().addColumnBefore() || !1
      },
      {
        type: "item",
        key: "add-column-after",
        title: M(n)("editor.table.menu.add_column_after"),
        icon: fe("tableColumnPlusAfter"),
        disabled: !e.editor.can().addColumnAfter() || !1
      },
      {
        type: "item",
        key: "delete-column",
        title: M(n)("editor.table.menu.delete_column"),
        icon: fe("tableColumnRemove"),
        disabled: !e.editor.can().deleteColumn() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "add-row-before",
        title: M(n)("editor.table.menu.add_row_before"),
        icon: fe("tableRowPlusBefore"),
        disabled: !e.editor.can().addRowBefore() || !1
      },
      {
        type: "item",
        key: "add-row-after",
        title: M(n)("editor.table.menu.add_row_after"),
        icon: fe("tableRowPlusAfter"),
        disabled: !e.editor.can().addRowAfter() || !1
      },
      {
        type: "item",
        key: "delete-row",
        title: M(n)("editor.table.menu.delete_row"),
        icon: fe("tableRowRemove"),
        disabled: !e.editor.can().deleteRow() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "merge-or-split-cells",
        title: M(n)("editor.table.menu.merge_or_split_cells"),
        icon: fe("tableMergeCells"),
        disabled: !e.editor.can().mergeOrSplit() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "delete-table",
        title: M(n)("editor.table.menu.delete_table"),
        icon: fe("tableRemove"),
        disabled: !e.editor.can().deleteTable() || !1
      }
    ]);
    function o(l, a) {
      if (!l)
        return;
      const { editor: c } = e;
      ({
        "insert-table": () => c.chain().focus().insertTable({ ...a }).run(),
        "add-column-before": () => c.chain().focus().addColumnBefore().run(),
        "add-column-after": () => c.chain().focus().addColumnAfter().run(),
        "delete-column": () => c.chain().focus().deleteColumn().run(),
        "add-row-before": () => c.chain().focus().addRowBefore().run(),
        "add-row-after": () => c.chain().focus().addRowAfter().run(),
        "delete-row": () => c.chain().focus().deleteRow().run(),
        "merge-or-split-cells": () => c.chain().focus().mergeOrSplit().run(),
        "delete-table": () => c.chain().focus().deleteTable().run()
      })[l]?.();
    }
    function s(l) {
      o("insert-table", l), r.value = !1;
    }
    return (l, a) => {
      const c = Mn, d = vu, u = wu, f = Wr, p = Bl, h = No;
      return E(), _(h, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (m) => r.value = m),
        activator: "parent"
      }, {
        default: L(() => [
          H(p, { density: "compact" }, {
            default: L(() => [
              (E(!0), le(be, null, Ne(i.value, (m, g) => (E(), le(be, null, [
                m.key === "insert-table" ? (E(), _(u, {
                  key: g,
                  disabled: m.disabled
                }, {
                  prepend: L(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: L(() => [
                    H(d, null, {
                      default: L(() => [
                        Ht(Te(m.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    m.key === "insert-table" ? (E(), _(uM, {
                      key: g,
                      onCreateTable: s
                    })) : Xe("", !0)
                  ]),
                  _: 2
                }, 1032, ["disabled"])) : m.type === "item" ? (E(), _(u, {
                  key: `item-${g}`,
                  disabled: m.disabled,
                  onClick: (y) => o(m.key)
                }, {
                  prepend: L(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: L(() => [
                    H(d, null, {
                      default: L(() => [
                        Ht(Te(m.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : (E(), _(f, {
                  key: `divider-${g}`
                }))
              ], 64))), 256))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), pM = /* @__PURE__ */ F({
  __name: "TableActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      "is-active": () => e.editor.isActive("table") || !1,
      disabled: !e.editor.can().insertTable(),
      tooltip: e.t("editor.table.tooltip"),
      icon: "table"
    }, {
      default: L(() => [
        H(fM, {
          editor: e.editor,
          activator: "parent"
        }, null, 8, ["editor"])
      ]),
      _: 1
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), hM = /* @__PURE__ */ F({
  __name: "TaskListActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleTaskList().run(),
      "is-active": () => e.editor.isActive("taskList") || !1,
      disabled: !e.editor.can().toggleTaskList(),
      tooltip: e.t("editor.tasklist.tooltip"),
      icon: "taskList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), mM = /* @__PURE__ */ F({
  __name: "UnderlineActionButton",
  props: de,
  setup(t) {
    return (e, n) => (E(), _(G, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleUnderline().run(),
      "is-active": () => e.editor.isActive("underline") || !1,
      disabled: !e.editor.can().toggleUnderline(),
      tooltip: e.t("editor.underline.tooltip"),
      icon: "underline"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), gM = /* @__PURE__ */ F({
  __name: "VideoActionButton",
  props: de,
  setup(t) {
    const e = t, n = ee(void 0);
    function r() {
      const { src: i } = e.editor.getAttributes("video");
      n.value = i;
    }
    return (i, o) => (E(), _(G, {
      editor: i.editor,
      action: r,
      "is-active": () => i.editor.isActive("video") || !1,
      disabled: !i.editor.can().setVideo({}),
      tooltip: i.t("editor.video.tooltip"),
      icon: "video"
    }, {
      default: L(() => [
        H(Fa, null, {
          default: L(() => [
            Lt(i.$slots, "dialog", {
              props: { editor: i.editor, value: n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
});
function yM(t) {
  const e = ["float-left", "float-none", "float-right"], n = [
    "formatFloatLeft",
    "formatFloatNone",
    "formatFloatRight"
  ], r = ["left", "inline", "right"];
  return e.map((i, o) => ({
    type: i,
    component: G,
    componentProps: {
      tooltip: `editor.image.${i.replace("-", ".")}.tooltip`,
      icon: n[o],
      action: () => t.chain().focus().updateImage({ display: r[o] }).run(),
      isActive: () => t.isActive("image", { display: r[o] })
    }
  }));
}
function bM(t) {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, i) => ({
    type: `image-${r}`,
    component: G,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[i],
      action: () => t.chain().focus().updateImage({ width: Ji[r], height: null }).run(),
      isActive: () => t.isActive("image", { width: Ji[r] })
    }
  }));
}
function wM(t) {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, i) => ({
    type: `video-${r}`,
    component: G,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[i],
      action: () => t.chain().focus().updateVideo({ width: Gi[r] }).run(),
      isActive: () => t.isActive("video", { width: Gi[r] })
    }
  }));
}
function vM(t) {
  return [
    {
      type: "table-add-column-before",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.add_column_before",
        icon: "tableColumnPlusBefore",
        action: () => t.chain().focus().addColumnBefore().run(),
        disabled: !t.can().addColumnBefore()
      }
    },
    {
      type: "table-add-column-after",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.add_column_after",
        icon: "tableColumnPlusAfter",
        action: () => t.chain().focus().addColumnAfter().run(),
        disabled: !t.can().addColumnAfter()
      }
    },
    {
      type: "table-delete-column",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.delete_column",
        icon: "tableColumnRemove",
        action: () => t.chain().focus().deleteColumn().run(),
        disabled: !t.can().deleteColumn()
      }
    },
    {
      type: "table-add-row-before",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.add_row_before",
        icon: "tableRowPlusBefore",
        action: () => t.chain().focus().addRowBefore().run(),
        disabled: !t.can().addRowBefore()
      }
    },
    {
      type: "table-add-row-after",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.add_row_after",
        icon: "tableRowPlusAfter",
        action: () => t.chain().focus().addRowAfter().run(),
        disabled: !t.can().addRowAfter()
      }
    },
    {
      type: "table-delete-row",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.delete_row",
        icon: "tableRowRemove",
        action: () => t.chain().focus().deleteRow().run(),
        disabled: !t.can().deleteRow()
      }
    },
    {
      type: "table-merge-or-split-cells",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.merge_or_split_cells",
        icon: "tableMergeCells",
        action: () => t.chain().focus().mergeOrSplit().run(),
        disabled: !t.can().mergeOrSplit()
      }
    },
    {
      type: "table-delete-table",
      component: G,
      componentProps: {
        tooltip: "editor.table.menu.delete_table",
        icon: "tableRemove",
        action: () => t.chain().focus().deleteTable().run(),
        disabled: !t.can().deleteTable()
      }
    }
  ];
}
function kM(t) {
  return [
    ...yM(t),
    ...bM(t),
    ...wM(t),
    ...vM(t),
    {
      type: "image-aspect-ratio",
      component: G,
      componentProps: {
        tooltip: "editor.image.dialog.form.aspectRatio",
        icon: "aspectRatio",
        action: () => {
          const e = t.isActive("image", { lockAspectRatio: !0 });
          t.chain().focus().updateImage({
            lockAspectRatio: !e,
            height: e ? void 0 : null
          }).run();
        },
        isActive: () => t.isActive("image", { lockAspectRatio: !0 })
      }
    },
    {
      type: "unlink",
      component: G,
      componentProps: {
        tooltip: "editor.link.unlink.tooltip",
        icon: "linkVariantOff",
        action: () => {
          const { href: e } = t.getAttributes("link");
          t.chain().extendMarkRange("link", { href: e }).unsetLink().focus().run();
        }
      }
    },
    {
      type: "link-open",
      component: G,
      componentProps: {
        tooltip: "editor.link.open",
        icon: "openInNew",
        action: () => {
          const { href: e } = t.getAttributes("link");
          vr(e) && e && window.open(e, "_blank");
        }
      }
    },
    {
      type: "remove",
      component: G,
      componentProps: {
        tooltip: "editor.remove",
        icon: "delete",
        action: () => {
          const { state: e, dispatch: n } = t.view;
          zo(e, n);
        }
      }
    }
  ];
}
function xM(t, e, { editor: n, extension: r, t: i }) {
  const { extensions: o = [] } = n.extensionManager, s = {};
  for (const l of Object.keys(t)) {
    const a = t[l];
    if (!a)
      continue;
    const c = [];
    for (const f of a) {
      if (f === "divider") {
        if (c[c.length - 1]?.type === "divider")
          continue;
        c.push({
          type: "divider",
          component: void 0,
          componentProps: {}
        });
        continue;
      }
      const p = e.find((m) => m.type === f);
      if (p) {
        c.push({
          ...p,
          componentProps: {
            ...p.componentProps,
            tooltip: p.componentProps.tooltip ? i(p.componentProps.tooltip) : void 0
          },
          componentSlots: p.componentSlots
        });
        continue;
      }
      const h = o.find((m) => m.name === f);
      if (h) {
        const { button: m } = h.options, g = m({ editor: n, extension: h, t: i });
        c.push({
          type: f,
          component: g.component,
          componentProps: g.componentProps,
          componentSlots: g.componentSlots
        });
        continue;
      }
    }
    const d = c[c.length - 1], u = c[0];
    d?.type === "divider" && c.pop(), u?.type === "divider" && c.shift(), s[l] = c;
  }
  return s;
}
const lT = /* @__PURE__ */ Y.create({
  name: "base-kit",
  addOptions() {
    return {
      ...this.parent?.(),
      bubble: {
        list: rw,
        defaultBubbleList: kM,
        button: ({ editor: t, extension: e, t: n }) => {
          const { list: r = {}, defaultBubbleList: i } = e.options?.bubble ?? {}, o = i?.(t) ?? [];
          return xM(r, o, { editor: t, extension: e, t: n });
        }
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.placeholder !== !1 && t.push(
      HS.configure({
        placeholder: "",
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && t.push(
      OS.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.document !== !1 && t.push(jx.configure()), this.options.text !== !1 && t.push(rS.configure()), this.options.gapcursor !== !1 && t.push(LS.configure()), this.options.dropcursor !== !1 && t.push(ES.configure(this.options.dropcursor)), this.options.characterCount !== !1 && t.push(TS.configure(this.options.characterCount)), this.options.paragraph !== !1 && t.push(nS.configure(this.options.paragraph)), this.options.hardBreak !== !1 && t.push(Wx.configure(this.options.hardBreak)), this.options.listItem !== !1 && t.push(Wh.configure(this.options.listItem)), this.options.textStyle !== !1 && t.push(tm.configure(this.options.textStyle)), t;
  }
});
var io = (t, e) => {
  if (t === "slot")
    return 0;
  if (t instanceof Function)
    return t(e);
  const { children: n, ...r } = e ?? {};
  if (t === "svg")
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  return [t, r, n];
}, SM = /^\s*>\s$/, CM = ye.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ io("blockquote", { ...te(this.options.HTMLAttributes, t), children: /* @__PURE__ */ io("slot", {}) });
  },
  parseMarkdown: (t, e) => e.createNode("blockquote", void 0, e.parseChildren(t.tokens || [])),
  renderMarkdown: (t, e) => {
    if (!t.content)
      return "";
    const n = ">", r = [];
    return t.content.forEach((i) => {
      const l = e.renderChildren([i]).split(`
`).map((a) => a.trim() === "" ? n : `${n} ${a}`);
      r.push(l.join(`
`));
    }), r.join(`
${n}
`);
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      qn({
        find: SM,
        type: this.type
      })
    ];
  }
});
const aT = /* @__PURE__ */ CM.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: t, t: e }) => ({
        component: jC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var MM = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, AM = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, TM = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, EM = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, OM = rt.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ io("strong", { ...te(this.options.HTMLAttributes, t), children: /* @__PURE__ */ io("slot", {}) });
  },
  markdownTokenName: "strong",
  parseMarkdown: (t, e) => e.applyMark("bold", e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => `**${e.renderChildren(t)}**`,
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Sn({
        find: MM,
        type: this.type
      }),
      Sn({
        find: TM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      tn({
        find: AM,
        type: this.type
      }),
      tn({
        find: EM,
        type: this.type
      })
    ];
  }
});
const cT = /* @__PURE__ */ OM.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: WC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
}), dT = /* @__PURE__ */ jh.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: UC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
}), uT = /* @__PURE__ */ ye.create({
  name: "clear",
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: KC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var LM = /(^|[^`])`([^`]+)`(?!`)$/, HM = /(^|[^`])`([^`]+)`(?!`)/g, VM = rt.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", te(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (t, e) => e.applyMark("code", [{ type: "text", text: t.text || "" }]),
  renderMarkdown: (t, e) => t.content ? `\`${e.renderChildren(t.content)}\`` : "",
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      Sn({
        find: LM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      tn({
        find: HM,
        type: this.type
      })
    ];
  }
});
const fT = /* @__PURE__ */ VM.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: qC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var Ps = 4, NM = /^```([a-z]+)?[\s\n]$/, RM = /^~~~([a-z]+)?[\s\n]$/, IM = ye.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: Ps,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (t) => {
          var e;
          const { languageClassPrefix: n } = this.options;
          if (!n)
            return null;
          const o = [...((e = t.firstElementChild) == null ? void 0 : e.classList) || []].filter((s) => s.startsWith(n)).map((s) => s.replace(n, ""))[0];
          return o || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "pre",
      te(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
        },
        0
      ]
    ];
  },
  markdownTokenName: "code",
  parseMarkdown: (t, e) => {
    var n;
    return ((n = t.raw) == null ? void 0 : n.startsWith("```")) === !1 && t.codeBlockStyle !== "indented" ? [] : e.createNode(
      "codeBlock",
      { language: t.lang || null },
      t.text ? [e.createTextNode(t.text)] : []
    );
  },
  renderMarkdown: (t, e) => {
    var n;
    let r = "";
    const i = ((n = t.attrs) == null ? void 0 : n.language) || "";
    return t.content ? r = [`\`\`\`${i}`, e.renderChildren(t.content), "```"].join(`
`) : r = `\`\`\`${i}

\`\`\``, r;
  },
  addCommands() {
    return {
      setCodeBlock: (t) => ({ commands: e }) => e.setNode(this.name, t),
      toggleCodeBlock: (t) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", t)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: t, $anchor: e } = this.editor.state.selection, n = e.pos === 1;
        return !t || e.parent.type.name !== this.name ? !1 : n || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // handle tab indentation
      Tab: ({ editor: t }) => {
        var e;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (e = this.options.tabSize) != null ? e : Ps, { state: r } = t, { selection: i } = r, { $from: o, empty: s } = i;
        if (o.parent.type !== this.type)
          return !1;
        const l = " ".repeat(n);
        return s ? t.commands.insertContent(l) : t.commands.command(({ tr: a }) => {
          const { from: c, to: d } = i, p = r.doc.textBetween(c, d, `
`, `
`).split(`
`).map((h) => l + h).join(`
`);
          return a.replaceWith(c, d, r.schema.text(p)), !0;
        });
      },
      // handle shift+tab reverse indentation
      "Shift-Tab": ({ editor: t }) => {
        var e;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (e = this.options.tabSize) != null ? e : Ps, { state: r } = t, { selection: i } = r, { $from: o, empty: s } = i;
        return o.parent.type !== this.type ? !1 : s ? t.commands.command(({ tr: l }) => {
          var a;
          const { pos: c } = o, d = o.start(), u = o.end(), p = r.doc.textBetween(d, u, `
`, `
`).split(`
`);
          let h = 0, m = 0;
          const g = c - d;
          for (let x = 0; x < p.length; x += 1) {
            if (m + p[x].length >= g) {
              h = x;
              break;
            }
            m += p[x].length + 1;
          }
          const b = ((a = p[h].match(/^ */)) == null ? void 0 : a[0]) || "", w = Math.min(b.length, n);
          if (w === 0)
            return !0;
          let k = d;
          for (let x = 0; x < h; x += 1)
            k += p[x].length + 1;
          return l.delete(k, k + w), c - k <= w && l.setSelection(B.create(l.doc, k)), !0;
        }) : t.commands.command(({ tr: l }) => {
          const { from: a, to: c } = i, f = r.doc.textBetween(a, c, `
`, `
`).split(`
`).map((p) => {
            var h;
            const m = ((h = p.match(/^ */)) == null ? void 0 : h[0]) || "", g = Math.min(m.length, n);
            return p.slice(g);
          }).join(`
`);
          return l.replaceWith(a, c, r.schema.text(f)), !0;
        });
      },
      // exit node on triple enter
      Enter: ({ editor: t }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = t, { selection: n } = e, { $from: r, empty: i } = n;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : t.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: t }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = t, { selection: n, doc: r } = e, { $from: i, empty: o } = n;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? t.commands.command(({ tr: c }) => (c.setSelection($.near(r.resolve(l))), !0)) : t.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      cl({
        find: NM,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      }),
      cl({
        find: RM,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new ne({
        key: new ce("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (t, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i?.mode;
            if (!n || !o)
              return !1;
            const { tr: s, schema: l } = t.state, a = l.text(n.replace(/\r\n?/g, `
`));
            return s.replaceSelectionWith(this.type.create({ language: o }, a)), s.selection.$from.parent.type !== this.type && s.setSelection(B.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), t.dispatch(s), !0;
          }
        }
      })
    ];
  }
});
const pT = /* @__PURE__ */ IM.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: JC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
}), hT = /* @__PURE__ */ nm.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: GC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
}), DM = {
  ...Yw(cm, ["action", "isActive"]),
  maxHeight: {
    type: [String, Number],
    default: void 0
  },
  items: {
    type: Array,
    default: () => []
  }
};
function ti() {
  return {
    ...de,
    extension: {
      type: Object,
      required: !0
    }
  };
}
const ni = /* @__PURE__ */ F({
  __name: "index",
  props: DM,
  setup(t) {
    const e = t, n = ee(!1), r = U(() => {
      const i = e.items.find((s) => s.isActive());
      return i && !i.default ? {
        ...i,
        icon: i.icon ? i.icon : e.icon
      } : {
        title: e.tooltip,
        icon: e.icon,
        isActive: () => !1
      };
    });
    return (i, o) => {
      const s = Mn, l = vu, a = wu, c = Wr, d = Bl, u = No;
      return E(), _(M(G), {
        editor: i.editor,
        icon: r.value.icon,
        tooltip: r.value.title,
        disabled: i.disabled,
        color: i.color,
        "is-active": r.value.isActive
      }, {
        default: L(() => [
          H(u, {
            modelValue: n.value,
            "onUpdate:modelValue": o[0] || (o[0] = (f) => n.value = f),
            activator: "parent"
          }, {
            default: L(() => [
              H(d, {
                density: "compact",
                "max-height": i.maxHeight
              }, {
                default: L(() => [
                  (E(!0), le(be, null, Ne(i.items, (f, p) => (E(), le(be, { key: p }, [
                    H(a, {
                      active: f.isActive(),
                      disabled: f.disabled,
                      onClick: f.action
                    }, {
                      prepend: L(() => [
                        f.icon ? (E(), _(s, {
                          key: 0,
                          icon: M(fe)(f.icon)
                        }, null, 8, ["icon"])) : Xe("", !0)
                      ]),
                      default: L(() => [
                        H(l, {
                          style: _n(f.style)
                        }, {
                          default: L(() => [
                            Ht(Te(f.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1032, ["active", "disabled", "onClick"]),
                    f.divider ? (E(), _(c, { key: 0 })) : Xe("", !0)
                  ], 64))), 128))
                ]),
                _: 1
              }, 8, ["max-height"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["editor", "icon", "tooltip", "disabled", "color", "is-active"]);
    };
  }
}), _M = /* @__PURE__ */ F({
  __name: "FontFamilyActionMenuButton",
  props: ti(),
  setup(t) {
    const e = t, n = U(() => (e.extension.options?.fontFamilies || []).map((i) => ({
      title: e.t(i.title),
      isActive: () => {
        const { fontFamily: o } = e.editor.getAttributes("textStyle");
        return i.value === pl && o === void 0 ? !0 : e.editor.isActive({ fontFamily: i.value }) || !1;
      },
      action: () => {
        if (i.value === pl) {
          e.editor.chain().focus().unsetFontFamily().run();
          return;
        }
        e.editor.chain().focus().setFontFamily(i.value).run();
      },
      style: { fontFamily: i.value },
      divider: i.divider ?? !1,
      default: i.default ?? !1
    })));
    return (r, i) => (E(), _(ni, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: !e.editor.can().setFontFamily(""),
      tooltip: r.t("editor.fontFamily.tooltip"),
      icon: "fontFamily"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), PM = /* @__PURE__ */ F({
  __name: "FontSizeActionMenuButton",
  props: ti(),
  setup(t) {
    const e = t, n = U(() => {
      const r = e.extension.options?.fontSizes || [];
      return [Ln, ...r].map((i) => ({
        title: i === Ln ? e.t("editor.default") : String(i),
        isActive: () => {
          const { fontSize: o } = e.editor.getAttributes("textStyle");
          return i === Ln && o === void 0 ? !0 : e.editor.isActive({ fontSize: String(i) }) || !1;
        },
        action: () => {
          if (i === Ln) {
            e.editor.chain().focus().unsetFontSize().run();
            return;
          }
          e.editor.chain().focus().setFontSize(String(i)).run();
        },
        divider: i === Ln,
        default: i === Ln
      }));
    });
    return (r, i) => (E(), _(ni, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: !e.editor.can().setFontSize(""),
      tooltip: r.t("editor.fontSize.tooltip"),
      icon: "fontSize"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), zM = /* @__PURE__ */ F({
  __name: "HeadingActionMenuButton",
  props: ti(),
  setup(t) {
    const e = t, n = U(() => {
      const { extensions: r = [] } = e.editor.extensionManager ?? [], i = e.extension.options?.levels || [], o = r.find((l) => l.name === "base-kit"), s = i.map((l) => ({
        action: () => e.editor.chain().focus().toggleHeading({ level: l }).run(),
        isActive: () => e.editor.isActive("heading", { level: l }) || !1,
        disabled: !e.editor.can().toggleHeading({ level: l }),
        icon: `h${l}`,
        title: e.t(`editor.heading.h${l}.tooltip`)
      }));
      return o && o.options.paragraph !== !1 && s.unshift({
        action: () => e.editor.chain().focus().setParagraph().run(),
        isActive: () => e.editor.isActive("paragraph") || !1,
        disabled: !e.editor.can().setParagraph(),
        icon: "p",
        title: e.t("editor.paragraph.tooltip"),
        divider: !0
      }), s;
    });
    return (r, i) => (E(), _(ni, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: n.value.filter((o) => o.disabled).length === n.value.length,
      tooltip: r.t("editor.heading.tooltip"),
      icon: "heading"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), BM = /* @__PURE__ */ F({
  __name: "MarkdownThemeActionMenuButton",
  props: ti(),
  setup(t) {
    const e = t, { state: n } = Yo(), r = U(() => [...Rp, ...e.extension.options.markdownThemes].map((o) => ({
      title: e.t(o.title),
      isActive: () => n.defaultMarkdownTheme === o.value,
      action: () => {
        n.defaultMarkdownTheme = o.value;
      },
      divider: o.divider ?? !1,
      default: o.default ?? !1
    })));
    return (i, o) => (E(), _(ni, {
      editor: i.editor,
      items: r.value,
      "max-height": 280,
      disabled: !1,
      tooltip: i.t("editor.markdownTheme.tooltip"),
      icon: "markdownTheme"
    }, null, 8, ["editor", "items", "tooltip"]));
  }
}), FM = /* @__PURE__ */ F({
  __name: "TextAlignActionMenuButton",
  props: ti(),
  setup(t) {
    const e = t, n = U(() => (e.extension.options?.alignments || []).map((i) => ({
      title: e.t(`editor.textalign.${i}.tooltip`),
      icon: i,
      isActive: () => e.editor.isActive({ textAlign: i }) || !1,
      action: () => e.editor.chain().focus().setTextAlign(i).run(),
      disabled: !e.editor.can().setTextAlign(i)
    })));
    return (r, i) => (E(), _(ni, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: n.value.filter((o) => o.disabled).length === n.value.length,
      tooltip: r.t("editor.textalign.tooltip"),
      icon: "center"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), mT = /* @__PURE__ */ rm.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      fontFamilies: tw,
      button: ({ editor: t, extension: e, t: n }) => ({
        component: _M,
        componentProps: {
          editor: t,
          extension: e,
          t: n
        }
      })
    };
  }
}), gT = /* @__PURE__ */ Y.create({
  name: "fontSize",
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["textStyle"],
      fontSizes: [...nw],
      button: ({ editor: t, extension: e, t: n }) => ({
        component: PM,
        componentProps: {
          editor: t,
          extension: e,
          t: n
        }
      })
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (t) => {
              const n = (t.style.fontSize || "").match(/^(\d+(\.\d+)?)(px|em|rem|%)?$/);
              return n ? n[0] : "";
            },
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${kr(t.fontSize)}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), yT = /* @__PURE__ */ Y.create({
  name: "fullscreen",
  addOptions() {
    return {
      ...this.parent?.(),
      useWindow: !1,
      button: ({ editor: t, extension: e, t: n }) => ({
        component: ZC,
        componentProps: {
          editor: t,
          t: n,
          useWindow: e.options.useWindow ?? !1
        }
      })
    };
  }
});
var $M = ye.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, te(this.options.HTMLAttributes, e), 0];
  },
  parseMarkdown: (t, e) => e.createNode("heading", { level: t.depth || 1 }, e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => {
    var n;
    const r = (n = t.attrs) != null && n.level ? parseInt(t.attrs.level, 10) : 1, i = "#".repeat(r);
    return t.content ? `${i} ${e.renderChildren(t.content)}` : "";
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (t, e) => ({
        ...t,
        [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((t) => cl({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
const bT = /* @__PURE__ */ $M.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 2, 3, 4, 5, 6],
      button: ({ editor: t, extension: e, t: n }) => ({
        component: zM,
        componentProps: {
          editor: t,
          extension: e,
          t: n
        }
      })
    };
  }
});
var jM = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, WM = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, UM = rt.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-color") || t.style.backgroundColor,
        renderHTML: (t) => t.color ? {
          "data-color": t.color,
          style: `background-color: ${t.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", te(this.options.HTMLAttributes, t), 0];
  },
  renderMarkdown: (t, e) => `==${e.renderChildren(t)}==`,
  parseMarkdown: (t, e) => e.applyMark("highlight", e.parseInline(t.tokens || [])),
  markdownTokenizer: {
    name: "highlight",
    level: "inline",
    start: (t) => t.indexOf("=="),
    tokenize(t, e, n) {
      const i = /^(==)([^=]+)(==)/.exec(t);
      if (i) {
        const o = i[2].trim(), s = n.inlineTokens(o);
        return {
          type: "highlight",
          raw: i[0],
          text: o,
          tokens: s
        };
      }
    }
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: e }) => e.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      Sn({
        find: jM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      tn({
        find: WM,
        type: this.type
      })
    ];
  }
});
const wT = /* @__PURE__ */ UM.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: !0,
      button: ({ editor: t, t: e }) => ({
        component: XC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
}), vT = /* @__PURE__ */ VS.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      depth: 10,
      button: ({ editor: t, t: e }) => ({
        component: YC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var KM = ye.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {},
      nextNodeType: "paragraph"
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["hr", te(this.options.HTMLAttributes, t)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (t, e) => e.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: t, state: e }) => {
        if (!D0(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: n } = e, { $to: r } = n, i = t();
        return hp(n) ? i.insertContentAt(r.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ state: o, tr: s, dispatch: l }) => {
          if (l) {
            const { $to: a } = s.selection, c = a.end();
            if (a.nodeAfter)
              a.nodeAfter.isTextblock ? s.setSelection(B.create(s.doc, a.pos + 1)) : a.nodeAfter.isBlock ? s.setSelection(P.create(s.doc, a.pos)) : s.setSelection(B.create(s.doc, a.pos));
            else {
              const d = o.schema.nodes[this.options.nextNodeType] || a.parent.type.contentMatch.defaultType, u = d?.create();
              u && (s.insert(c, u), s.setSelection(B.create(s.doc, c + 1)));
            }
            s.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Vp({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
});
const kT = /* @__PURE__ */ KM.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: QC,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var qM = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, JM = ye.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {},
      resize: !1
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", te(this.options.HTMLAttributes, t)];
  },
  parseMarkdown: (t, e) => e.createNode("image", {
    src: t.href,
    title: t.title,
    alt: t.text
  }),
  renderMarkdown: (t) => {
    var e, n, r, i, o, s;
    const l = (n = (e = t.attrs) == null ? void 0 : e.src) != null ? n : "", a = (i = (r = t.attrs) == null ? void 0 : r.alt) != null ? i : "", c = (s = (o = t.attrs) == null ? void 0 : o.title) != null ? s : "";
    return c ? `![${a}](${l} "${c}")` : `![${a}](${l})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document > "u")
      return null;
    const { directions: t, minWidth: e, minHeight: n, alwaysPreserveAspectRatio: r } = this.options.resize;
    return ({ node: i, getPos: o, HTMLAttributes: s, editor: l }) => {
      const a = document.createElement("img");
      Object.entries(s).forEach(([u, f]) => {
        if (f != null)
          switch (u) {
            case "width":
            case "height":
              break;
            default:
              a.setAttribute(u, f);
              break;
          }
      }), a.src = s.src;
      const c = new I0({
        element: a,
        editor: l,
        node: i,
        getPos: o,
        onResize: (u, f) => {
          a.style.width = `${u}px`, a.style.height = `${f}px`;
        },
        onCommit: (u, f) => {
          const p = o();
          p !== void 0 && this.editor.chain().setNodeSelection(p).updateAttributes(this.name, {
            width: u,
            height: f
          }).run();
        },
        onUpdate: (u, f, p) => u.type === i.type,
        options: {
          directions: t,
          min: {
            width: e,
            height: n
          },
          preserveAspectRatio: r === !0
        }
      }), d = c.dom;
      return d.style.visibility = "hidden", d.style.pointerEvents = "none", a.onload = () => {
        d.style.visibility = "", d.style.pointerEvents = "";
      }, c;
    };
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      Vp({
        find: qM,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
});
const GM = /* @__PURE__ */ F({
  __name: "ImageUpload",
  props: {
    modelValue: { default: () => ({}) },
    upload: { type: Function, default: void 0 },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = ee(!1), o = U({
      get: () => n.modelValue,
      set: (l) => r("update:modelValue", l)
    });
    async function s(l) {
      const a = l instanceof File ? l : l[0];
      if (!a)
        throw new Error("No files to upload");
      try {
        i.value = !0;
        const c = await n.upload?.(a);
        if (!c)
          throw new Error("No link received after upload");
        o.value = {
          ...M(o),
          src: c
        };
      } catch (c) {
        vl.error(`Failed to execute upload file: ${c}`);
      } finally {
        i.value = !1;
      }
    }
    return (l, a) => {
      const c = Lm, d = qr, u = Fl, f = ku;
      return E(), _(f, { disabled: i.value }, {
        default: L(() => [
          H(c, {
            modelValue: o.value.file,
            "onUpdate:modelValue": [
              a[0] || (a[0] = (p) => o.value.file = p),
              s
            ],
            label: t.t("editor.image.dialog.form.file"),
            accept: "image/*",
            loading: i.value,
            "prepend-icon": M(fe)("fileImagePlus"),
            "onClick:clear": a[1] || (a[1] = (p) => o.value.src = void 0)
          }, null, 8, ["modelValue", "label", "loading", "prepend-icon"]),
          H(d, {
            modelValue: o.value.src,
            "onUpdate:modelValue": a[2] || (a[2] = (p) => o.value.src = p),
            label: t.t("editor.image.dialog.form.link"),
            disabled: "",
            autofocus: "",
            "prepend-icon": M(fe)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(d, {
            modelValue: o.value.alt,
            "onUpdate:modelValue": a[3] || (a[3] = (p) => o.value.alt = p),
            label: t.t("editor.image.dialog.form.alt"),
            "prepend-icon": M(fe)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(u, {
            modelValue: o.value.lockAspectRatio,
            "onUpdate:modelValue": a[4] || (a[4] = (p) => o.value.lockAspectRatio = p),
            label: t.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), ZM = /* @__PURE__ */ F({
  __name: "ImageUrl",
  props: {
    modelValue: { default: () => ({}) },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = U({
      get: () => n.modelValue,
      set: (o) => r("update:modelValue", o)
    });
    return (o, s) => {
      const l = qr, a = Fl, c = ku;
      return E(), _(c, null, {
        default: L(() => [
          H(l, {
            modelValue: i.value.src,
            "onUpdate:modelValue": s[0] || (s[0] = (d) => i.value.src = d),
            label: t.t("editor.image.dialog.form.link"),
            autofocus: "",
            "prepend-icon": M(fe)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(l, {
            modelValue: i.value.alt,
            "onUpdate:modelValue": s[1] || (s[1] = (d) => i.value.alt = d),
            label: t.t("editor.image.dialog.form.alt"),
            "prepend-icon": M(fe)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(a, {
            modelValue: i.value.lockAspectRatio,
            "onUpdate:modelValue": s[2] || (s[2] = (d) => i.value.lockAspectRatio = d),
            label: t.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      });
    };
  }
}), XM = { class: "headline" }, YM = /* @__PURE__ */ F({
  __name: "ImageDialog",
  props: {
    value: { default: () => ({}) },
    editor: {},
    upload: { type: Function, default: void 0 },
    imageTabs: { default: () => [] },
    hiddenTabs: { default: () => [] },
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Rt(), r = ee(!1), i = ee(!1), o = ee({}), s = U(() => [...[
      {
        name: M(n)("editor.image.dialog.tab.url"),
        type: "url",
        component: ZM
      },
      {
        name: M(n)("editor.image.dialog.tab.upload"),
        type: "upload",
        component: GM
      }
    ].filter((f) => f.type ? !e.hiddenTabs.includes(f.type) : f), ...e.imageTabs]), l = U(() => {
      const { src: d } = M(o);
      return !(typeof d == "string" && d !== "");
    });
    async function a() {
      const { src: d, lockAspectRatio: u, height: f } = M(o);
      d && (e.editor.chain().focus().setImage({
        ...M(o),
        src: d,
        height: u ? void 0 : f
      }).run(), c());
    }
    function c() {
      r.value = !1, o.value = {}, setTimeout(() => e.destroy?.(), 300);
    }
    return Ot(
      () => e.value,
      (d) => {
        o.value = {
          ...M(o),
          ...d
        };
      },
      { immediate: !0, deep: !0 }
    ), (d, u) => {
      const f = Ur, p = Mn, h = Kr, m = er, g = Vm, y = Hm, b = Rm, w = Nm, k = jr, v = jl, x = Qn, S = $l;
      return E(), _(S, {
        modelValue: r.value,
        "onUpdate:modelValue": u[3] || (u[3] = (A) => r.value = A),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": c
      }, {
        default: L(() => [
          H(x, null, {
            default: L(() => [
              H(m, {
                class: "px-6",
                density: "compact"
              }, {
                default: L(() => [
                  Vt("span", XM, Te(M(n)("editor.image.dialog.title")), 1),
                  H(f),
                  H(h, {
                    class: "mx-0",
                    icon: "",
                    onClick: c
                  }, {
                    default: L(() => [
                      H(p, {
                        icon: M(fe)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(y, {
                modelValue: i.value,
                "onUpdate:modelValue": u[0] || (u[0] = (A) => i.value = A)
              }, {
                default: L(() => [
                  (E(!0), le(be, null, Ne(s.value, (A, V) => (E(), _(g, {
                    key: V,
                    value: V
                  }, {
                    default: L(() => [
                      Ht(Te(A.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              H(k, null, {
                default: L(() => [
                  H(w, {
                    modelValue: i.value,
                    "onUpdate:modelValue": u[2] || (u[2] = (A) => i.value = A)
                  }, {
                    default: L(() => [
                      (E(!0), le(be, null, Ne(s.value, (A, V) => (E(), _(b, {
                        key: V,
                        value: V
                      }, {
                        default: L(() => [
                          (E(), _(Lr(A.component), {
                            modelValue: o.value,
                            "onUpdate:modelValue": u[1] || (u[1] = (R) => o.value = R),
                            upload: t.upload,
                            t: M(n)
                          }, null, 8, ["modelValue", "upload", "t"]))
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              H(v, null, {
                default: L(() => [
                  H(h, {
                    disabled: l.value,
                    onClick: a
                  }, {
                    default: L(() => [
                      Ht(Te(M(n)("editor.image.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), QM = ["src", "alt"], eA = {
  key: 0,
  class: "image-resizer"
}, tA = ["onMousedown"], nA = /* @__PURE__ */ F({
  __name: "ImageView",
  props: {
    ...Z0,
    selected: {
      type: Boolean,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = {
      TOP_LEFT: "tl",
      TOP_RIGHT: "tr",
      BOTTOM_LEFT: "bl",
      BOTTOM_RIGHT: "br"
    }, r = ee({
      width: cd,
      height: cd
    }), i = ee({
      width: 0,
      height: 0
    }), o = ee([
      n.TOP_LEFT,
      n.TOP_RIGHT,
      n.BOTTOM_LEFT,
      n.BOTTOM_RIGHT
    ]), s = ee(!1), l = ee({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ""
    }), a = U(() => {
      const { src: x, alt: S, width: A, height: V } = e.node.attrs, R = bl(A) ? `${A}px` : A, I = bl(V) ? `${V}px` : V;
      return {
        src: x || void 0,
        alt: S || void 0,
        style: {
          width: R || void 0,
          height: I || void 0
        }
      };
    }), c = U(() => e.node.attrs.display || void 0), d = U(() => e.node.attrs.lockAspectRatio ?? !0), u = U(() => typeof M(c) == "string" ? ["image-view", `image-view--${M(c)}`] : ["image-view"]), f = U(() => {
      const {
        style: { width: x }
      } = M(a);
      return { width: x === "100%" ? x : void 0 };
    });
    function p(x) {
      i.value = {
        width: x.target.width,
        height: x.target.height
      };
    }
    function h() {
      const { editor: x, getPos: S } = e, A = S();
      A && x.commands.setNodeSelection(A);
    }
    const m = br(() => {
      const { editor: x } = e, { width: S } = getComputedStyle(x.view.dom);
      r.value.width = Number.parseInt(S, 10);
    }, dd);
    function g(x, S) {
      x.preventDefault(), x.stopPropagation(), l.value.x = x.clientX, l.value.y = x.clientY;
      const A = M(i).width, V = M(i).height, R = A / V;
      let I = Number(e.node.attrs.width), j = Number(e.node.attrs.height);
      const Z = M(r).width;
      I && !j ? (I = I > Z ? Z : I, j = Math.round(I / R)) : j && !I ? (I = Math.round(j * R), I = I > Z ? Z : I) : !I && !j ? (I = A > Z ? Z : A, j = Math.round(I / R)) : I = I > Z ? Z : I, l.value.w = I, l.value.h = j, l.value.dir = S, s.value = !0, w();
    }
    const y = br((x) => {
      if (x.preventDefault(), x.stopPropagation(), !M(s))
        return;
      const { x: S, y: A, w: V, h: R, dir: I } = M(l), j = (x.clientX - S) * (/l/.test(I) ? -1 : 1), Z = (x.clientY - A) * (/t/.test(I) ? -1 : 1), K = nv(V + j, ad, M(r).width), X = M(d) ? null : Math.max(R + Z, ad);
      e.updateAttributes({
        width: K,
        height: X
      });
    }, dd);
    function b(x) {
      x.preventDefault(), x.stopPropagation(), M(s) && (s.value = !1, l.value = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, k(), h());
    }
    function w() {
      document?.addEventListener("mousemove", y, !0), document?.addEventListener("mouseup", b, !0);
    }
    function k() {
      document?.removeEventListener("mousemove", y, !0), document?.removeEventListener("mouseup", b, !0);
    }
    const v = new ResizeObserver(() => m());
    return Tn((x) => {
      M(v).observe(e.editor.view.dom), x(() => {
        M(v).disconnect();
      });
    }), (x, S) => (E(), _(M(q0), {
      as: "span",
      class: Jt(u.value),
      style: _n(f.value)
    }, {
      default: L(() => [
        Vt("div", {
          draggable: "true",
          "data-drag-handle": "",
          class: Jt([{
            "image-view__body--focused": t.selected,
            "image-view__body--resizing": s.value
          }, "image-view__body"]),
          style: _n(f.value)
        }, [
          Vt("img", {
            src: a.value.src,
            alt: a.value.alt,
            style: _n(a.value.style),
            class: "image-view__body__image",
            onLoad: p,
            onClick: h
          }, null, 44, QM),
          x.editor.view.editable ? Fm((E(), le("div", eA, [
            (E(!0), le(be, null, Ne(o.value, (A) => (E(), le("span", {
              key: A,
              class: Jt([`image-resizer__handler--${A}`, "image-resizer__handler"]),
              onMousedown: (V) => g(V, A)
            }, null, 42, tA))), 128))
          ], 512)), [
            [$m, t.selected || s.value]
          ]) : Xe("", !0)
        ], 6)
      ]),
      _: 1
    }, 8, ["class", "style"]));
  }
}), xT = /* @__PURE__ */ JM.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null
      },
      alt: {
        default: null
      },
      lockAspectRatio: {
        default: !0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: null
      },
      display: {
        default: this.options.display,
        renderHTML: ({ display: t }) => t ? {
          "data-display": t
        } : {},
        parseHTML: (t) => t.getAttribute("data-display") || "inline"
      }
    };
  },
  addNodeView() {
    return Y0(nA);
  },
  addCommands() {
    return {
      ...this.parent?.(),
      updateImage: (t) => ({ commands: e }) => e.updateAttributes(this.name, t)
    };
  },
  addOptions() {
    return {
      ...this.parent?.(),
      upload: void 0,
      width: Ji["size-large"],
      display: "inline",
      imageTabs: [],
      hiddenTabs: [],
      inline: !0,
      dialogComponent: () => YM,
      button: ({ editor: t, extension: e, t: n }) => {
        const { upload: r, imageTabs: i, hiddenTabs: o, dialogComponent: s } = e.options;
        return {
          component: eM,
          componentProps: {
            editor: t,
            t: n,
            upload: r,
            imageTabs: i,
            hiddenTabs: o
          },
          componentSlots: {
            dialog: s()
          }
        };
      }
    };
  }
}), ST = /* @__PURE__ */ Y.create({
  name: "indent",
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      button: ({ editor: t, t: e }) => ({
        component: tM,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var rA = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, iA = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, oA = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, sA = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, lA = rt.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", te(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (t, e) => e.applyMark("italic", e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => `*${e.renderChildren(t)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Sn({
        find: rA,
        type: this.type
      }),
      Sn({
        find: oA,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      tn({
        find: iA,
        type: this.type
      }),
      tn({
        find: sA,
        type: this.type
      })
    ];
  }
});
const CT = /* @__PURE__ */ lA.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: nM,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
}), aA = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", cA = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Hl = "numeric", Vl = "ascii", Nl = "alpha", Sr = "asciinumeric", pr = "alphanumeric", Rl = "domain", um = "emoji", dA = "scheme", uA = "slashscheme", zs = "whitespace";
function fA(t, e) {
  return t in e || (e[t] = []), e[t];
}
function pn(t, e, n) {
  e[Hl] && (e[Sr] = !0, e[pr] = !0), e[Vl] && (e[Sr] = !0, e[Nl] = !0), e[Sr] && (e[pr] = !0), e[Nl] && (e[pr] = !0), e[pr] && (e[Rl] = !0), e[um] && (e[Rl] = !0);
  for (const r in e) {
    const i = fA(r, n);
    i.indexOf(t) < 0 && i.push(t);
  }
}
function pA(t, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function _e(t = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
_e.groups = {};
_e.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t) {
    const e = this, n = e.j[t];
    if (n)
      return n;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(t))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t, e = !1) {
    return e ? t in this.j : !!this.go(t);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t, e, n, r) {
    for (let i = 0; i < t.length; i++)
      this.tt(t[i], e, n, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t, e, n, r) {
    r = r || _e.groups;
    let i;
    return e && e.j ? i = e : (i = new _e(e), n && r && pn(e, n, r)), this.jr.push([t, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t, e, n, r) {
    let i = this;
    const o = t.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(t[s]);
    return i.tt(t[o - 1], e, n, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t, e, n, r) {
    r = r || _e.groups;
    const i = this;
    if (e && e.j)
      return i.j[t] = e, e;
    const o = e;
    let s, l = i.go(t);
    if (l ? (s = new _e(), Object.assign(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new _e(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = Object.assign(pA(s.t, r), n);
          pn(o, a, r);
        } else n && pn(o, n, r);
      s.t = o;
    }
    return i.j[t] = s, s;
  }
};
const q = (t, e, n, r, i) => t.ta(e, n, r, i), ue = (t, e, n, r, i) => t.tr(e, n, r, i), cu = (t, e, n, r, i) => t.ts(e, n, r, i), T = (t, e, n, r, i) => t.tt(e, n, r, i), xt = "WORD", Il = "UWORD", fm = "ASCIINUMERICAL", pm = "ALPHANUMERICAL", Fr = "LOCALHOST", Dl = "TLD", _l = "UTLD", Vi = "SCHEME", Rn = "SLASH_SCHEME", $a = "NUM", Pl = "WS", ja = "NL", Cr = "OPENBRACE", Mr = "CLOSEBRACE", oo = "OPENBRACKET", so = "CLOSEBRACKET", lo = "OPENPAREN", ao = "CLOSEPAREN", co = "OPENANGLEBRACKET", uo = "CLOSEANGLEBRACKET", fo = "FULLWIDTHLEFTPAREN", po = "FULLWIDTHRIGHTPAREN", ho = "LEFTCORNERBRACKET", mo = "RIGHTCORNERBRACKET", go = "LEFTWHITECORNERBRACKET", yo = "RIGHTWHITECORNERBRACKET", bo = "FULLWIDTHLESSTHAN", wo = "FULLWIDTHGREATERTHAN", vo = "AMPERSAND", ko = "APOSTROPHE", xo = "ASTERISK", Ft = "AT", So = "BACKSLASH", Co = "BACKTICK", Mo = "CARET", Wt = "COLON", Wa = "COMMA", Ao = "DOLLAR", lt = "DOT", To = "EQUALS", Ua = "EXCLAMATION", Ue = "HYPHEN", Ar = "PERCENT", Eo = "PIPE", Oo = "PLUS", Lo = "POUND", Tr = "QUERY", Ka = "QUOTE", hm = "FULLWIDTHMIDDLEDOT", qa = "SEMI", at = "SLASH", Er = "TILDE", Ho = "UNDERSCORE", mm = "EMOJI", Vo = "SYM";
var gm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: pm,
  AMPERSAND: vo,
  APOSTROPHE: ko,
  ASCIINUMERICAL: fm,
  ASTERISK: xo,
  AT: Ft,
  BACKSLASH: So,
  BACKTICK: Co,
  CARET: Mo,
  CLOSEANGLEBRACKET: uo,
  CLOSEBRACE: Mr,
  CLOSEBRACKET: so,
  CLOSEPAREN: ao,
  COLON: Wt,
  COMMA: Wa,
  DOLLAR: Ao,
  DOT: lt,
  EMOJI: mm,
  EQUALS: To,
  EXCLAMATION: Ua,
  FULLWIDTHGREATERTHAN: wo,
  FULLWIDTHLEFTPAREN: fo,
  FULLWIDTHLESSTHAN: bo,
  FULLWIDTHMIDDLEDOT: hm,
  FULLWIDTHRIGHTPAREN: po,
  HYPHEN: Ue,
  LEFTCORNERBRACKET: ho,
  LEFTWHITECORNERBRACKET: go,
  LOCALHOST: Fr,
  NL: ja,
  NUM: $a,
  OPENANGLEBRACKET: co,
  OPENBRACE: Cr,
  OPENBRACKET: oo,
  OPENPAREN: lo,
  PERCENT: Ar,
  PIPE: Eo,
  PLUS: Oo,
  POUND: Lo,
  QUERY: Tr,
  QUOTE: Ka,
  RIGHTCORNERBRACKET: mo,
  RIGHTWHITECORNERBRACKET: yo,
  SCHEME: Vi,
  SEMI: qa,
  SLASH: at,
  SLASH_SCHEME: Rn,
  SYM: Vo,
  TILDE: Er,
  TLD: Dl,
  UNDERSCORE: Ho,
  UTLD: _l,
  UWORD: Il,
  WORD: xt,
  WS: Pl
});
const wt = /[a-z]/, lr = new RegExp("\\p{L}", "u"), Bs = new RegExp("\\p{Emoji}", "u"), vt = /\d/, Fs = /\s/, du = "\r", $s = `
`, hA = "️", mA = "‍", js = "￼";
let vi = null, ki = null;
function gA(t = []) {
  const e = {};
  _e.groups = e;
  const n = new _e();
  vi == null && (vi = uu(aA)), ki == null && (ki = uu(cA)), T(n, "'", ko), T(n, "{", Cr), T(n, "}", Mr), T(n, "[", oo), T(n, "]", so), T(n, "(", lo), T(n, ")", ao), T(n, "<", co), T(n, ">", uo), T(n, "（", fo), T(n, "）", po), T(n, "「", ho), T(n, "」", mo), T(n, "『", go), T(n, "』", yo), T(n, "＜", bo), T(n, "＞", wo), T(n, "&", vo), T(n, "*", xo), T(n, "@", Ft), T(n, "`", Co), T(n, "^", Mo), T(n, ":", Wt), T(n, ",", Wa), T(n, "$", Ao), T(n, ".", lt), T(n, "=", To), T(n, "!", Ua), T(n, "-", Ue), T(n, "%", Ar), T(n, "|", Eo), T(n, "+", Oo), T(n, "#", Lo), T(n, "?", Tr), T(n, '"', Ka), T(n, "/", at), T(n, ";", qa), T(n, "~", Er), T(n, "_", Ho), T(n, "\\", So), T(n, "・", hm);
  const r = ue(n, vt, $a, {
    [Hl]: !0
  });
  ue(r, vt, r);
  const i = ue(r, wt, fm, {
    [Sr]: !0
  }), o = ue(r, lr, pm, {
    [pr]: !0
  }), s = ue(n, wt, xt, {
    [Vl]: !0
  });
  ue(s, vt, i), ue(s, wt, s), ue(i, vt, i), ue(i, wt, i);
  const l = ue(n, lr, Il, {
    [Nl]: !0
  });
  ue(l, wt), ue(l, vt, o), ue(l, lr, l), ue(o, vt, o), ue(o, wt), ue(o, lr, o);
  const a = T(n, $s, ja, {
    [zs]: !0
  }), c = T(n, du, Pl, {
    [zs]: !0
  }), d = ue(n, Fs, Pl, {
    [zs]: !0
  });
  T(n, js, d), T(c, $s, a), T(c, js, d), ue(c, Fs, d), T(d, du), T(d, $s), ue(d, Fs, d), T(d, js, d);
  const u = ue(n, Bs, mm, {
    [um]: !0
  });
  T(u, "#"), ue(u, Bs, u), T(u, hA, u);
  const f = T(u, mA);
  T(f, "#"), ue(f, Bs, u);
  const p = [[wt, s], [vt, i]], h = [[wt, null], [lr, l], [vt, o]];
  for (let m = 0; m < vi.length; m++)
    _t(n, vi[m], Dl, xt, p);
  for (let m = 0; m < ki.length; m++)
    _t(n, ki[m], _l, Il, h);
  pn(Dl, {
    tld: !0,
    ascii: !0
  }, e), pn(_l, {
    utld: !0,
    alpha: !0
  }, e), _t(n, "file", Vi, xt, p), _t(n, "mailto", Vi, xt, p), _t(n, "http", Rn, xt, p), _t(n, "https", Rn, xt, p), _t(n, "ftp", Rn, xt, p), _t(n, "ftps", Rn, xt, p), pn(Vi, {
    scheme: !0,
    ascii: !0
  }, e), pn(Rn, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < t.length; m++) {
    const g = t[m][0], b = t[m][1] ? {
      [dA]: !0
    } : {
      [uA]: !0
    };
    g.indexOf("-") >= 0 ? b[Rl] = !0 : wt.test(g) ? vt.test(g) ? b[Sr] = !0 : b[Vl] = !0 : b[Hl] = !0, cu(n, g, g, b);
  }
  return cu(n, "localhost", Fr, {
    ascii: !0
  }), n.jd = new _e(Vo), {
    start: n,
    tokens: Object.assign({
      groups: e
    }, gm)
  };
}
function ym(t, e) {
  const n = yA(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = n.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = t, a = null, c = 0, d = null, u = -1, f = -1;
    for (; s < r && (a = l.go(n[s])); )
      l = a, l.accepts() ? (u = 0, f = 0, d = l) : u >= 0 && (u += n[s].length, f++), c += n[s].length, o += n[s].length, s++;
    o -= u, s -= f, c -= u, i.push({
      t: d.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function yA(t) {
  const e = [], n = t.length;
  let r = 0;
  for (; r < n; ) {
    let i = t.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? t[r] : t.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function _t(t, e, n, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    t.j[a] ? o = t.j[a] : (o = new _e(r), o.jr = i.slice(), t.j[a] = o), t = o;
  }
  return o = new _e(n), o.jr = i.slice(), t.j[e[s - 1]] = o, o;
}
function uu(t) {
  const e = [], n = [];
  let r = 0, i = "0123456789";
  for (; r < t.length; ) {
    let o = 0;
    for (; i.indexOf(t[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(n.join(""));
      for (let s = parseInt(t.substring(r, r + o), 10); s > 0; s--)
        n.pop();
      r += o;
    } else
      n.push(t[r]), r++;
  }
  return e;
}
const $r = {
  defaultProtocol: "http",
  events: null,
  format: fu,
  formatHref: fu,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Ja(t, e = null) {
  let n = Object.assign({}, $r);
  t && (n = Object.assign(n, t instanceof Ja ? t.o : t));
  const r = n.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = i;
}
Ja.prototype = {
  o: $r,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t) {
    return t;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t, e, n) {
    const r = e != null;
    let i = this.o[t];
    return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : $r[t], typeof i == "function" && r && (i = i(e, n))) : typeof i == "function" && r && (i = i(e, n.t, n)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, n) {
    let r = this.o[t];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  }
};
function fu(t) {
  return t;
}
function bm(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
bm.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(t) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t) {
    const e = this.toString(), n = t.get("truncate", e, this), r = t.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t = $r.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t) {
    const e = this, n = this.toHref(t.get("defaultProtocol")), r = t.get("formatHref", n, this), i = t.get("tagName", n, e), o = this.toFormattedString(t), s = {}, l = t.get("className", n, e), a = t.get("target", n, e), c = t.get("rel", n, e), d = t.getObj("attributes", n, e), u = t.getObj("events", n, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), d && Object.assign(s, d), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: u
    };
  }
};
function cs(t, e) {
  class n extends bm {
    constructor(i, o) {
      super(i, o), this.t = t;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t, n;
}
const pu = cs("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), hu = cs("text"), bA = cs("nl"), xi = cs("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t = $r.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== Fr && t[1].t === Wt;
  }
}), We = (t) => new _e(t);
function wA({
  groups: t
}) {
  const e = t.domain.concat([vo, xo, Ft, So, Co, Mo, Ao, To, Ue, $a, Ar, Eo, Oo, Lo, at, Vo, Er, Ho]), n = [ko, Wt, Wa, lt, Ua, Ar, Tr, Ka, qa, co, uo, Cr, Mr, so, oo, lo, ao, fo, po, ho, mo, go, yo, bo, wo], r = [vo, ko, xo, So, Co, Mo, Ao, To, Ue, Cr, Mr, Ar, Eo, Oo, Lo, Tr, at, Vo, Er, Ho], i = We(), o = T(i, Er);
  q(o, r, o), q(o, t.domain, o);
  const s = We(), l = We(), a = We();
  q(i, t.domain, s), q(i, t.scheme, l), q(i, t.slashscheme, a), q(s, r, o), q(s, t.domain, s);
  const c = T(s, Ft);
  T(o, Ft, c), T(l, Ft, c), T(a, Ft, c);
  const d = T(o, lt);
  q(d, r, o), q(d, t.domain, o);
  const u = We();
  q(c, t.domain, u), q(u, t.domain, u);
  const f = T(u, lt);
  q(f, t.domain, u);
  const p = We(pu);
  q(f, t.tld, p), q(f, t.utld, p), T(c, Fr, p);
  const h = T(u, Ue);
  T(h, Ue, h), q(h, t.domain, u), q(p, t.domain, u), T(p, lt, f), T(p, Ue, h);
  const m = T(p, Wt);
  q(m, t.numeric, pu);
  const g = T(s, Ue), y = T(s, lt);
  T(g, Ue, g), q(g, t.domain, s), q(y, r, o), q(y, t.domain, s);
  const b = We(xi);
  q(y, t.tld, b), q(y, t.utld, b), q(b, t.domain, s), q(b, r, o), T(b, lt, y), T(b, Ue, g), T(b, Ft, c);
  const w = T(b, Wt), k = We(xi);
  q(w, t.numeric, k);
  const v = We(xi), x = We();
  q(v, e, v), q(v, n, x), q(x, e, v), q(x, n, x), T(b, at, v), T(k, at, v);
  const S = T(l, Wt), A = T(a, Wt), V = T(A, at), R = T(V, at);
  q(l, t.domain, s), T(l, lt, y), T(l, Ue, g), q(a, t.domain, s), T(a, lt, y), T(a, Ue, g), q(S, t.domain, v), T(S, at, v), T(S, Tr, v), q(R, t.domain, v), q(R, e, v), T(R, at, v);
  const I = [
    [Cr, Mr],
    // {}
    [oo, so],
    // []
    [lo, ao],
    // ()
    [co, uo],
    // <>
    [fo, po],
    // （）
    [ho, mo],
    // 「」
    [go, yo],
    // 『』
    [bo, wo]
    // ＜＞
  ];
  for (let j = 0; j < I.length; j++) {
    const [Z, K] = I[j], X = T(v, Z);
    T(x, Z, X), T(X, K, v);
    const N = We(xi);
    q(X, e, N);
    const W = We();
    q(X, n), q(N, e, N), q(N, n, W), q(W, e, N), q(W, n, W), T(N, K, v), T(W, K, v);
  }
  return T(i, Fr, b), T(i, ja, bA), {
    start: i,
    tokens: gm
  };
}
function vA(t, e, n) {
  let r = n.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = t, a = null, c = null, d = 0, u = null, f = -1;
    for (; i < r && !(a = l.go(n[i].t)); )
      s.push(n[i++]);
    for (; i < r && (c = a || l.go(n[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, u = l) : f >= 0 && f++, i++, d++;
    if (f < 0)
      i -= d, i < r && (s.push(n[i]), i++);
    else {
      s.length > 0 && (o.push(Ws(hu, e, s)), s = []), i -= f, d -= f;
      const p = u.t, h = n.slice(i - d, i);
      o.push(Ws(p, e, h));
    }
  }
  return s.length > 0 && o.push(Ws(hu, e, s)), o;
}
function Ws(t, e, n) {
  const r = n[0].s, i = n[n.length - 1].e, o = e.slice(r, i);
  return new t(o, n);
}
const kA = typeof console < "u" && console && console.warn || (() => {
}), xA = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", se = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function SA() {
  return _e.groups = {}, se.scanner = null, se.parser = null, se.tokenQueue = [], se.pluginQueue = [], se.customSchemes = [], se.initialized = !1, se;
}
function mu(t, e = !1) {
  if (se.initialized && kA(`linkifyjs: already initialized - will not register custom scheme "${t}" ${xA}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  se.customSchemes.push([t, e]);
}
function CA() {
  se.scanner = gA(se.customSchemes);
  for (let t = 0; t < se.tokenQueue.length; t++)
    se.tokenQueue[t][1]({
      scanner: se.scanner
    });
  se.parser = wA(se.scanner.tokens);
  for (let t = 0; t < se.pluginQueue.length; t++)
    se.pluginQueue[t][1]({
      scanner: se.scanner,
      parser: se.parser
    });
  return se.initialized = !0, se;
}
function Ga(t) {
  return se.initialized || CA(), vA(se.parser.start, t, ym(se.scanner.start, t));
}
Ga.scan = ym;
function wm(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new Ja(n), i = Ga(t), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
var Za = "[\0-   ᠎ -\u2029 　]", MA = new RegExp(Za), AA = new RegExp(`${Za}$`), TA = new RegExp(Za, "g");
function EA(t) {
  return t.length === 1 ? t[0].isLink : t.length === 3 && t[1].isLink ? ["()", "[]"].includes(t[0].value + t[2].value) : !1;
}
function OA(t) {
  return new ne({
    key: new ce("autolink"),
    appendTransaction: (e, n, r) => {
      const i = e.some((c) => c.docChanged) && !n.doc.eq(r.doc), o = e.some((c) => c.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, l = op(n.doc, [...e]);
      if (pp(l).forEach(({ newRange: c }) => {
        const d = _b(r.doc, c, (p) => p.isTextblock);
        let u, f;
        if (d.length > 1)
          u = d[0], f = r.doc.textBetween(
            u.pos,
            u.pos + u.node.nodeSize,
            void 0,
            " "
          );
        else if (d.length) {
          const p = r.doc.textBetween(c.from, c.to, " ", " ");
          if (!AA.test(p))
            return;
          u = d[0], f = r.doc.textBetween(u.pos, c.to, void 0, " ");
        }
        if (u && f) {
          const p = f.split(MA).filter(Boolean);
          if (p.length <= 0)
            return !1;
          const h = p[p.length - 1], m = u.pos + f.lastIndexOf(h);
          if (!h)
            return !1;
          const g = Ga(h).map((y) => y.toObject(t.defaultProtocol));
          if (!EA(g))
            return !1;
          g.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: m + y.start + 1,
            to: m + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => t.validate(y.value)).filter((y) => t.shouldAutoLink(y.value)).forEach((y) => {
            xa(y.from, y.to, r.doc).some((b) => b.mark.type === t.type) || s.addMark(
              y.from,
              y.to,
              t.type.create({
                href: y.href
              })
            );
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function LA(t) {
  return new ne({
    key: new ce("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var i, o;
        if (r.button !== 0 || !e.editable)
          return !1;
        let s = !1;
        if (t.enableClickSelection && (s = t.editor.commands.extendMarkRange(t.type.name)), t.openOnClick) {
          let l = null;
          if (r.target instanceof HTMLAnchorElement)
            l = r.target;
          else {
            let u = r.target;
            const f = [];
            for (; u.nodeName !== "DIV"; )
              f.push(u), u = u.parentNode;
            l = f.find((p) => p.nodeName === "A");
          }
          if (!l)
            return s;
          const a = fp(e.state, t.type.name), c = (i = l?.href) != null ? i : a.href, d = (o = l?.target) != null ? o : a.target;
          l && c && (window.open(c, d), s = !0);
        }
        return s;
      }
    }
  });
}
function HA(t) {
  return new ne({
    key: new ce("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { shouldAutoLink: i } = t, { state: o } = e, { selection: s } = o, { empty: l } = s;
        if (l)
          return !1;
        let a = "";
        r.content.forEach((d) => {
          a += d.textContent;
        });
        const c = wm(a, { defaultProtocol: t.defaultProtocol }).find(
          (d) => d.isLink && d.value === a
        );
        return !a || !c || i !== void 0 && !i(c.href) ? !1 : t.editor.commands.setMark(t.type, {
          href: c.href
        });
      }
    }
  });
}
function an(t, e) {
  const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && n.push(i);
  }), !t || t.replace(TA, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var VA = rt.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        mu(t);
        return;
      }
      mu(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    SA();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      enableClickSelection: !1,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (t, e) => !!an(t, e.protocols),
      validate: (t) => !!t,
      shouldAutoLink: (t) => !!t
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(t) {
          return t.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (t) => {
          const e = t.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (n) => !!an(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!an(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", te(this.options.HTMLAttributes, t), 0] : ["a", te(this.options.HTMLAttributes, { ...t, href: "" }), 0];
  },
  markdownTokenName: "link",
  parseMarkdown: (t, e) => e.applyMark("link", e.parseInline(t.tokens || []), {
    href: t.href,
    title: t.title || null
  }),
  renderMarkdown: (t, e) => {
    var n;
    const r = ((n = t.attrs) == null ? void 0 : n.href) || "";
    return `[${e.renderChildren(t)}](${r})`;
  },
  addCommands() {
    return {
      setLink: (t) => ({ chain: e }) => {
        const { href: n } = t;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!an(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (t) => ({ chain: e }) => {
        const { href: n } = t || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!an(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      tn({
        find: (t) => {
          const e = [];
          if (t) {
            const { protocols: n, defaultProtocol: r } = this.options, i = wm(t).filter(
              (o) => o.isLink && this.options.isAllowedUri(o.value, {
                defaultValidate: (s) => !!an(s, n),
                protocols: n,
                defaultProtocol: r
              })
            );
            i.length && i.forEach((o) => {
              this.options.shouldAutoLink(o.value) && e.push({
                text: o.value,
                data: {
                  href: o.href
                },
                index: o.start
              });
            });
          }
          return e;
        },
        type: this.type,
        getAttributes: (t) => {
          var e;
          return {
            href: (e = t.data) == null ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const t = [], { protocols: e, defaultProtocol: n } = this.options;
    return this.options.autolink && t.push(
      OA({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (r) => this.options.isAllowedUri(r, {
          defaultValidate: (i) => !!an(i, e),
          protocols: e,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t.push(
      LA({
        type: this.type,
        editor: this.editor,
        openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && t.push(
      HA({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), t;
  }
});
const NA = { class: "headline" }, RA = /* @__PURE__ */ F({
  __name: "LinkDialog",
  props: {
    value: { default: void 0 },
    target: { default: "_blank" },
    editor: {},
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Rt();
    function r() {
      return {
        href: "",
        target: "_blank"
      };
    }
    const i = ee(r()), o = ee(!1), s = U(() => {
      const { href: c, target: d } = i.value;
      return c ? e.value === c && e.target === d : !0;
    });
    function l() {
      const { href: c, target: d } = i.value;
      c && e.editor.chain().focus().extendMarkRange("link").setLink({ href: c, target: d }).run(), a();
    }
    function a() {
      o.value = !1, i.value = r(), setTimeout(() => e.destroy?.(), 300);
    }
    return Ot(o, (c) => {
      c && (i.value = {
        href: e.value,
        target: e.target
      });
    }), (c, d) => {
      const u = Ur, f = Mn, p = Kr, h = er, m = qr, g = jr, y = jl, b = Qn, w = $l;
      return E(), _(w, {
        modelValue: o.value,
        "onUpdate:modelValue": d[1] || (d[1] = (k) => o.value = k),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": a
      }, {
        default: L(() => [
          H(b, null, {
            default: L(() => [
              H(h, {
                class: "px-6",
                density: "compact"
              }, {
                default: L(() => [
                  Vt("span", NA, Te(M(n)("editor.link.dialog.title")), 1),
                  H(u),
                  H(p, {
                    class: "mx-0",
                    icon: "",
                    onClick: a
                  }, {
                    default: L(() => [
                      H(f, {
                        icon: M(fe)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(g, null, {
                default: L(() => [
                  H(m, {
                    modelValue: i.value.href,
                    "onUpdate:modelValue": d[0] || (d[0] = (k) => i.value.href = k),
                    label: M(n)("editor.link.dialog.link"),
                    autofocus: ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(y, null, {
                default: L(() => [
                  H(p, {
                    disabled: s.value,
                    onClick: l
                  }, {
                    default: L(() => [
                      Ht(Te(M(n)("editor.link.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), MT = /* @__PURE__ */ VA.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      openOnClick: !1,
      dialogComponent: () => RA,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: r } = e.options;
        return {
          component: rM,
          componentProps: {
            editor: t,
            t: n
          },
          componentSlots: {
            dialog: r()
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.parent?.() || [],
      new ne({
        props: {
          handleClick(t, e) {
            const { schema: n, doc: r, tr: i } = t.state, o = Uo(r.resolve(e), n.marks.link);
            if (!o)
              return !1;
            const s = r.resolve(o.from), l = r.resolve(o.to), a = i.setSelection(new B(s, l));
            return t.dispatch(a), !0;
          }
        }
      })
    ];
  }
}), AT = /* @__PURE__ */ Y.create({
  name: "markdownTheme",
  addOptions() {
    return {
      ...this.parent?.(),
      markdownThemes: Rp,
      button: ({ editor: t, extension: e, t: n }) => ({
        component: BM,
        componentProps: {
          editor: t,
          extension: e,
          t: n
        }
      })
    };
  }
}), TT = /* @__PURE__ */ Xh.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: iM,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var IA = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, DA = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, _A = rt.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", te(this.options.HTMLAttributes, t), 0];
  },
  markdownTokenName: "del",
  parseMarkdown: (t, e) => e.applyMark("strike", e.parseInline(t.tokens || [])),
  renderMarkdown: (t, e) => `~~${e.renderChildren(t)}~~`,
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Sn({
        find: IA,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      tn({
        find: DA,
        type: this.type
      })
    ];
  }
});
const ET = /* @__PURE__ */ _A.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: oM,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var PA = rt.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sub", te(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSubscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSubscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), zA = rt.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sup", te(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSuperscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
});
const OT = /* @__PURE__ */ Y.create({
  name: "subAndSuperScript",
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, extension: e, t: n }) => ({
        component: sM,
        componentProps: {
          editor: t,
          extension: e,
          t: n
        }
      })
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(PA.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(zA.configure(this.options.superscript)), t;
  }
});
var vm = ye.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          var e, n;
          const r = t.getAttribute("colwidth"), i = r ? r.split(",").map((o) => parseInt(o, 10)) : null;
          if (!i) {
            const o = (e = t.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), s = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(t);
            if (s && s > -1 && o && o[s]) {
              const l = o[s].getAttribute("width");
              return l ? [parseInt(l, 10)] : null;
            }
          }
          return i;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", te(this.options.HTMLAttributes, t), 0];
  }
}), km = ye.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", te(this.options.HTMLAttributes, t), 0];
  }
}), xm = ye.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", te(this.options.HTMLAttributes, t), 0];
  }
});
function zl(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function gu(t, e, n, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const d = t.firstChild;
  if (d !== null)
    for (let f = 0, p = 0; f < d.childCount; f += 1) {
      const { colspan: h, colwidth: m } = d.child(f).attrs;
      for (let g = 0; g < h; g += 1, p += 1) {
        const y = i === p ? o : m && m[g], b = y ? `${y}px` : "";
        if (l += y || r, y || (a = !1), c) {
          if (c.style.width !== b) {
            const [w, k] = zl(r, y);
            c.style.setProperty(w, k);
          }
          c = c.nextSibling;
        } else {
          const w = document.createElement("col"), [k, v] = zl(r, y);
          w.style.setProperty(k, v), e.appendChild(w);
        }
      }
    }
  for (; c; ) {
    const f = c.nextSibling;
    (s = c.parentNode) == null || s.removeChild(c), c = f;
  }
  const u = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  a && !u ? (n.style.width = `${l}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${l}px`);
}
var BA = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), gu(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, gu(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function FA(t, e, n, r) {
  let i = 0, o = !0;
  const s = [], l = t.firstChild;
  if (!l)
    return {};
  for (let u = 0, f = 0; u < l.childCount; u += 1) {
    const { colspan: p, colwidth: h } = l.child(u).attrs;
    for (let m = 0; m < p; m += 1, f += 1) {
      const g = n === f ? r : h && h[m];
      i += g || e, g || (o = !1);
      const [y, b] = zl(e, g);
      s.push(["col", { style: `${y}: ${b}` }]);
    }
  }
  const a = o ? `${i}px` : "", c = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: a, tableMinWidth: c };
}
function yu(t, e) {
  return t.createAndFill();
}
function $A(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function jA(t, e, n, r, i) {
  const o = $A(t), s = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const d = yu(o.cell);
    if (d && l.push(d), r) {
      const u = yu(o.header_cell);
      u && s.push(u);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? s : l));
  return o.table.createChecked(null, a);
}
function WA(t) {
  return t instanceof ie;
}
var Si = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!WA(e))
    return !1;
  let n = 0;
  const r = sp(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, UA = "";
function KA(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function qA(t, e, n = {}) {
  var r;
  const i = (r = n.cellLineSeparator) != null ? r : UA;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((h) => {
    const m = [];
    h.content && h.content.forEach((g) => {
      let y = "";
      g.content && Array.isArray(g.content) && g.content.length > 1 ? y = g.content.map((v) => e.renderChildren(v)).join(i) : y = g.content ? e.renderChildren(g.content) : "";
      const b = KA(y), w = g.type === "tableHeader";
      m.push({ text: b, isHeader: w });
    }), o.push(m);
  });
  const s = o.reduce((h, m) => Math.max(h, m.length), 0);
  if (s === 0)
    return "";
  const l = new Array(s).fill(0);
  o.forEach((h) => {
    var m;
    for (let g = 0; g < s; g += 1) {
      const b = (((m = h[g]) == null ? void 0 : m.text) || "").length;
      b > l[g] && (l[g] = b), l[g] < 3 && (l[g] = 3);
    }
  });
  const a = (h, m) => h + " ".repeat(Math.max(0, m - h.length)), c = o[0], d = c.some((h) => h.isHeader);
  let u = `
`;
  const f = new Array(s).fill(0).map((h, m) => d && c[m] && c[m].text || "");
  return u += `| ${f.map((h, m) => a(h, l[m])).join(" | ")} |
`, u += `| ${l.map((h) => "-".repeat(Math.max(3, h))).join(" | ")} |
`, (d ? o.slice(1) : o).forEach((h) => {
    u += `| ${new Array(s).fill(0).map((m, g) => a(h[g] && h[g].text || "", l[g])).join(" | ")} |
`;
  }), u;
}
var JA = qA, Sm = ye.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: BA,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = FA(t, this.options.cellMinWidth), o = e.style;
    function s() {
      return o || (r ? `width: ${r}` : `min-width: ${i}`);
    }
    const l = [
      "table",
      te(this.options.HTMLAttributes, e, {
        style: s()
      }),
      n,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, l] : l;
  },
  parseMarkdown: (t, e) => {
    const n = [];
    if (t.header) {
      const r = [];
      t.header.forEach((i) => {
        r.push(e.createNode("tableHeader", {}, [{ type: "paragraph", content: e.parseInline(i.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, r));
    }
    return t.rows && t.rows.forEach((r) => {
      const i = [];
      r.forEach((o) => {
        i.push(e.createNode("tableCell", {}, [{ type: "paragraph", content: e.parseInline(o.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, i));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => JA(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = jA(o.schema, t, e, n);
        if (i) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(B.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => Bk(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => Fk(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => jk(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => Uk(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => Kk(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => Jk(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => tx(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Hd(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Vd(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Br("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Br("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => Qk(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Hd(t, e) ? !0 : Vd(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => Xk(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Rd(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Rd(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Rh(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = ie.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: Si,
      "Mod-Backspace": Si,
      Delete: Si,
      "Mod-Delete": Si
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        ux({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      kx({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: Q(z(t, "tableRole", e))
    };
  }
});
Y.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Sm.configure(this.options.table)), this.options.tableCell !== !1 && t.push(vm.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(km.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(xm.configure(this.options.tableRow)), t;
  }
});
const LT = /* @__PURE__ */ Sm.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      resizable: !0,
      HTMLAttributes: {
        class: "table-wrapper"
      },
      button: ({ editor: t, t: e }) => ({
        component: pM,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  },
  addExtensions() {
    return [
      xm.configure(this.options.tableRow),
      km.configure(this.options.tableHeader),
      vm.configure(this.options.tableCell)
    ];
  }
}), HT = /* @__PURE__ */ Qh.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      button: ({ editor: t, t: e }) => ({
        component: hM,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  },
  addExtensions() {
    return [Yh.configure(this.options.taskItem)];
  }
});
var GA = Y.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => {
              const e = t.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (t) => t.textAlign ? { style: `text-align: ${t.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.map((n) => e.updateAttributes(n, { textAlign: t })).some((n) => n) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.map((e) => t.resetAttributes(e, "textAlign")).some((e) => e),
      toggleTextAlign: (t) => ({ editor: e, commands: n }) => this.options.alignments.includes(t) ? e.isActive({ textAlign: t }) ? n.unsetTextAlign() : n.setTextAlign(t) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
});
const VT = /* @__PURE__ */ GA.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["heading", "paragraph"],
      button: ({ editor: t, extension: e, t: n }) => ({
        component: FM,
        componentProps: {
          editor: t,
          extension: e,
          t: n
        }
      })
    };
  }
});
var ZA = rt.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["u", te(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown(t, e) {
    return e.applyMark(this.name || "underline", e.parseInline(t.tokens || []));
  },
  renderMarkdown(t, e) {
    return `++${e.renderChildren(t)}++`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(t) {
      return t.indexOf("++");
    },
    tokenize(t, e, n) {
      const i = /^(\+\+)([\s\S]+?)(\+\+)/.exec(t);
      if (!i)
        return;
      const o = i[2].trim();
      return {
        type: "underline",
        raw: i[0],
        text: o,
        tokens: n.inlineTokens(o)
      };
    }
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: t }) => t.setMark(this.name),
      toggleUnderline: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetUnderline: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
const NT = /* @__PURE__ */ ZA.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button: ({ editor: t, t: e }) => ({
        component: mM,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
}), XA = { class: "headline" }, YA = /* @__PURE__ */ F({
  __name: "VideoDialog",
  props: {
    value: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Rt(), r = ee(""), i = ee(!1), o = U(() => e.value === r.value || !M(r));
    function s() {
      M(r) && e.editor.chain().focus().setVideo({ src: r.value }).run(), l();
    }
    function l() {
      i.value = !1, r.value = "", setTimeout(() => e.destroy?.(), 300);
    }
    return Tn(() => {
      e.value && (r.value = e.value);
    }), (a, c) => {
      const d = Ur, u = Mn, f = Kr, p = er, h = qr, m = jr, g = jl, y = Qn, b = $l;
      return E(), _(b, {
        modelValue: i.value,
        "onUpdate:modelValue": c[1] || (c[1] = (w) => i.value = w),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": l
      }, {
        default: L(() => [
          H(y, null, {
            default: L(() => [
              H(p, {
                class: "px-6",
                density: "compact"
              }, {
                default: L(() => [
                  Vt("span", XA, Te(M(n)("editor.video.dialog.title")), 1),
                  H(d),
                  H(f, {
                    class: "mx-0",
                    icon: "",
                    onClick: l
                  }, {
                    default: L(() => [
                      H(u, {
                        icon: M(fe)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(m, null, {
                default: L(() => [
                  H(h, {
                    modelValue: r.value,
                    "onUpdate:modelValue": c[0] || (c[0] = (w) => r.value = w),
                    label: M(n)("editor.video.dialog.link"),
                    "hide-details": "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(g, null, {
                default: L(() => [
                  H(f, {
                    disabled: o.value,
                    onClick: s
                  }, {
                    default: L(() => [
                      Ht(Te(M(n)("editor.video.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
function QA(t) {
  return t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/i, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const RT = /* @__PURE__ */ ye.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: t }) => ({
          src: t ? QA(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: kr(t)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { width: e = "100%" } = t ?? {}, n = {
      ...t,
      width: "100%",
      height: "100%"
    }, r = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${e};`, i = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, l = ["div", { style: r }, ["div", { style: i }], ["iframe", n]];
    return ["div", {
      ...this.options.HTMLAttributes,
      "data-video": ""
    }, l];
  },
  addCommands() {
    return {
      setVideo: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      }),
      updateVideo: (t) => ({ commands: e }) => e.updateAttributes(this.name, t)
    };
  },
  addOptions() {
    return {
      divider: !1,
      spacer: !1,
      allowFullscreen: !0,
      frameborder: !1,
      width: Gi["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      dialogComponent: () => YA,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: r } = e.options;
        return {
          component: gM,
          componentProps: {
            editor: t,
            t: n
          },
          componentSlots: {
            dialog: r()
          }
        };
      }
    };
  }
});
function IT(t) {
  return (n) => {
    const { lang: r, fallbackLang: i, markdownTheme: o, components: s = {}, extensions: l } = t || {};
    i && xr.setFallbackLang(i), r && xr.setLang(r), Object.keys(s).forEach((a) => n.component(a, s[a])), iw({
      defaultLang: r,
      defaultFallbackLang: i,
      defaultMarkdownTheme: o,
      extensions: l
    });
  };
}
export {
  G as ActionButton,
  lT as BaseKit,
  aT as Blockquote,
  cT as Bold,
  dT as BulletList,
  uT as Clear,
  fT as Code,
  pT as CodeBlock,
  hT as Color,
  Lv as DEFAULT_LOCALE_MESSAGE,
  mT as FontFamily,
  gT as FontSize,
  yT as Fullscreen,
  bT as Heading,
  wT as Highlight,
  vT as History,
  kT as HorizontalRule,
  xT as Image,
  ST as Indent,
  CT as Italic,
  MT as Link,
  AT as MarkdownTheme,
  TT as OrderedList,
  ET as Strike,
  OT as SubAndSuperScript,
  LT as Table,
  HT as TaskList,
  VT as TextAlign,
  NT as Underline,
  RT as Video,
  oT as VuetifyTiptap,
  sT as VuetifyViewer,
  IT as createVuetifyProTipTap,
  kM as defaultBubbleList,
  xr as locale,
  Yo as useContext,
  Rt as useLocale
};
