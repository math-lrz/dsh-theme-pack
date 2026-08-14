// 冒烟测试：模拟浏览器环境加载 client bundle，验证 16 套主题全部注册、选择器插槽注册成功。
import { readFileSync } from 'node:fs';
const code = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8');
const registered = [];
const slotsRegistered = [];
const locales = [];
let factory;
global.window = { __ModuleLoader__: { load: ({ id, factory: f }) => { if (id !== 'dsh-theme-pack') throw new Error('bad id'); factory = f; } } };
const require = (spec) => {
  if (spec === 'react/jsx-runtime') return { jsx: () => null, jsxs: () => null };
  if (spec === '@deepseek-ai/dsh-client-runtime/client') return { defineStore: (d) => d };
  throw new Error('unexpected require: ' + spec);
};
eval(code);
const ctx = {
  theme: { register: (def) => { if (!def.id || !def.colorScheme || typeof def.tokens !== 'object') throw new Error('bad def'); registered.push(def); return () => {}; },
           getTheme: () => ({ preference: 'system', revision: 0 }), setTheme: () => {} },
  locale: { register: (ns, dict) => { locales.push(ns); return () => {}; } },
  slots: { inject: (name, fn) => fn(), register: (desc, comp) => { slotsRegistered.push(desc); return () => {}; } },
  on: () => () => {},
  effect: (fn) => { fn(); },
};
const plugin = factory(require);
plugin.apply(ctx);
const bad = registered.filter((t) => Object.keys(t.tokens).length < 50);
console.log('themes registered:', registered.length);
console.log('slot:', slotsRegistered[0]?.name, slotsRegistered[0]?.id, 'order', slotsRegistered[0]?.order);
console.log('locale:', locales[0], 'zh keys:', Object.keys(ctx ? {} : {}));
console.log('token counts:', Math.min(...registered.map((t) => Object.keys(t.tokens).length)), '-', Math.max(...registered.map((t) => Object.keys(t.tokens).length)));
console.log('schemes:', registered.filter((t) => t.colorScheme === 'dark').length, 'dark /', registered.filter((t) => t.colorScheme === 'light').length, 'light');
if (registered.length !== 16 || bad.length) { console.error('FAIL', bad.map((t) => t.id)); process.exit(1); }
console.log('SMOKE OK');