/**
 * 调色板 → DSH 语义 token 全集的映射。
 *
 * 契约来源：@deepseek-ai/dsh-client-ui-theme
 *   - ThemeRuntime.register({ id, colorScheme, tokens }) 注册第三方主题；
 *   - tokens 的键是 --dsw-alias-* / --dsw-specific-* 变量名，值是 CSS 颜色字符串；
 *   - ui-layout 的 ThemePresenter 把 tokens 以 inline style 写到 <body>，
 *     并按 colorScheme 设置 body[data-ds-dark-theme] 与 color-scheme；
 *   - 未覆盖的 token 回落到该 scheme 的内建调色板，所以这里只覆盖
 *     「皮肤感」所必需的语义面，遮罩等通用值沿用内建默认。
 */

const hex = (h) => {
  const m = h.replace('#', '');
  return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16)];
};
const rgb = (h) => { const [r, g, b] = hex(h); return `rgb(${r}, ${g}, ${b})`; };
const rgba = (h, a) => { const [r, g, b] = hex(h); return `rgba(${r}, ${g}, ${b}, ${a})`; };
const mix = (h1, h2, t) => {
  const a = hex(h1), b = hex(h2);
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(', ')})`;
};

/** 一套调色板 → 完整 token 覆盖表。 */
export function tokensFor(P) {
  const dark = P.scheme === 'dark';
  const el = dark ? P.bg2 : P.el;              // 浮起表面
  const elHover = dark ? P.bg3 : mix(P.el, P.fg, 0.05);
  const b1 = dark ? 0.07 : 0.06;               // 边框透明度基准
  return {
    // ── 背景层 ──
    '--dsw-alias-bg-base': rgb(P.bg),
    '--dsw-alias-bg-layer-1': dark ? rgb(P.bg1) : rgb(P.el),
    '--dsw-alias-bg-layer-2': dark ? rgb(P.bg2) : rgb(P.el),
    '--dsw-alias-bg-layer-3': dark ? rgb(P.bg3) : rgb(P.el),
    '--dsw-alias-bg-module-platform': rgb(P.bg2),
    '--dsw-alias-bg-multi-select': rgb(P.bg2),
    '--dsw-alias-bg-overlay': rgb(P.bg3),
    '--dsw-alias-bg-skeleton': rgba(P.fg, 0.06),
    // ── 边框 ──
    '--dsw-alias-border-l1': rgba(P.fg, b1),
    '--dsw-alias-border-l2': rgba(P.fg, b1 + 0.05),
    '--dsw-alias-border-l2-darkmode-thin': rgba(P.fg, b1 + 0.05),
    '--dsw-alias-border-l3': rgba(P.fg, b1 + 0.09),
    '--dsw-alias-border-l4': rgba(P.fg, b1 + 0.13),
    '--dsw-alias-border-inverted': rgba(dark ? '#ffffff' : '#000000', 0.06),
    '--dsw-alias-border-inverted2': rgba(dark ? '#ffffff' : '#000000', 0.08),
    // ── 品牌 / 主按钮 ──
    '--dsw-alias-brand-primary': rgb(P.fg),
    '--dsw-alias-brand-primary-invert': rgb(P.fg),
    '--dsw-alias-brand-text': rgb(P.fg),
    '--dsw-alias-brand-primary-new-colorprimary-new-color': rgb(P.blue),
    '--dsw-alias-button-primary-fill': rgb(P.fg),
    '--dsw-alias-button-primary-hover': mix(P.fg, P.bg, 0.2),
    '--dsw-alias-button-primary-dimmed': dark ? rgb(P.bg2) : rgb(P.bg1),
    '--dsw-alias-button-contrast-fill': rgb(P.fg),
    '--dsw-alias-button-elevated-fill': rgb(el),
    '--dsw-alias-button-floating-fill': rgb(el),
    '--dsw-alias-button-floating-hover': rgb(elHover),
    '--dsw-alias-button-ghost-active-border': rgb(P.muted),
    '--dsw-alias-button-ghost-active-fill': dark ? rgb(P.bg2) : rgb(P.bg1),
    '--dsw-alias-button-ghost-active-hover': dark ? rgb(P.bg3) : rgb(P.bg2),
    '--dsw-alias-button-info-fill': rgb(P.blue),
    '--dsw-alias-button-info-hover': dark ? mix(P.blue, '#ffffff', 0.18) : mix(P.blue, '#000000', 0.14),
    // ── 交互态 ──
    '--dsw-alias-interactive-bg-hover': rgba(P.fg, 0.06),
    '--dsw-alias-interactive-bg-active': rgba(P.fg, 0.12),
    '--dsw-alias-interactive-bg-hover-accent': rgba(P.fg, 0.18),
    '--dsw-alias-interactive-bg-hover-solid': dark ? rgb(P.bg2) : rgb(P.bg1),
    '--dsw-alias-interactive-bg-hover-danger': rgba(P.red, 0.12),
    // ── 文字 ──
    '--dsw-alias-label-primary': rgb(P.fg),
    '--dsw-alias-label-secondary': rgb(P.fg2),
    '--dsw-alias-label-tertiary': rgb(P.muted2),
    '--dsw-alias-label-caption': rgb(P.muted),
    '--dsw-alias-label-dimmed': rgb(P.bg3),
    '--dsw-alias-label-primary-dimmed': mix(P.fg, P.bg, 0.12),
    '--dsw-alias-label-primary-inverted': dark ? rgb(P.bg2) : rgb(P.el),
    '--dsw-alias-label-primary-foreground': rgb(dark ? P.bg : '#ffffff'),
    '--dsw-alias-label-primary-bluish': dark ? rgb(P.blue) : mix(P.blue, '#000000', 0.2),
    // ── Markdown ──
    '--dsw-alias-markdown-citation': rgb(P.bg3),
    '--dsw-alias-markdown-code-block': rgb(P.bgCode),
    '--dsw-alias-markdown-code-block-banner': rgb(P.bg1),
    '--dsw-alias-markdown-code-segment-selected': rgb(P.bg2),
    '--dsw-alias-markdown-code-segment-unselected': rgb(P.bgCode),
    '--dsw-alias-markdown-inline-code': rgb(P.bg1),
    '--dsw-alias-markdown-placeholder': rgb(P.bg1),
    '--dsw-alias-markdown-tag': rgb(P.bg1),
    // ── 滚动条 ──
    '--dsw-alias-scrollbar-bg-l1': rgb(P.bg3),
    '--dsw-alias-scrollbar-hover-l1': mix(P.bg3, P.fg, 0.35),
    '--dsw-alias-scrollbar-bg-l2': rgb(P.bg3),
    '--dsw-alias-scrollbar-hover-l2': mix(P.bg3, P.fg, 0.35),
    // ── 状态色 ──
    '--dsw-alias-state-business-primary': rgb(P.blue),
    '--dsw-alias-state-business-tertiary': mix(P.blue, P.bg, dark ? 0.22 : 0.12),
    '--dsw-alias-state-error-primary': rgb(P.red),
    '--dsw-alias-state-error-secondary': dark ? mix(P.red, '#ffffff', 0.15) : rgb(P.red),
    '--dsw-alias-state-success-primary': rgb(P.green),
    '--dsw-alias-state-success-secondary': dark ? mix(P.green, '#ffffff', 0.2) : mix(P.green, '#000000', 0.1),
    '--dsw-alias-state-success-tertiary': mix(P.green, P.bg, dark ? 0.82 : 0.86),
    '--dsw-alias-state-warn-primary': rgb(P.yellow),
    '--dsw-alias-state-warn-secondary': dark ? mix(P.yellow, '#ffffff', 0.2) : mix(P.yellow, '#000000', 0.1),
    '--dsw-alias-state-warn-tertiary': mix(P.yellow, P.bg, dark ? 0.82 : 0.86),
    '--dsw-alias-state-warn-label': dark ? rgb(P.yellow) : mix(P.yellow, '#000000', 0.22),
    // ── 浮层 ──
    '--dsw-alias-toast-bg': rgb(P.bg3),
    '--dsw-alias-tooltip-bg': rgb(P.bg3),
    // ── 会话/侧栏专属 ──
    '--dsw-specific-bubble': mix(P.blue, P.bg, dark ? 0.84 : 0.9),
    '--dsw-specific-bubble-highlight': mix(P.blue, P.bg, dark ? 0.72 : 0.8),
    '--dsw-specific-input-major': dark ? rgb(P.bg2) : rgb(P.el),
    '--dsw-specific-login-input': dark ? rgb(P.bgCode) : rgb(P.bg),
    '--dsw-specific-selector': dark ? rgb(P.bg2) : rgb(P.bg1),
    '--dsw-specific-sidebar-fill': rgb(P.bgSide),
    '--dsw-specific-sidebar-nav-item-hover': rgb(P.bg1),
    '--dsw-specific-sidebar-nav-item-active': dark ? rgb(P.bg2) : mix(P.bg2, P.fg, 0.1),
    '--dsw-specific-sidebar-nav-item-active-accent': mix(P.blue, P.bg, dark ? 0.7 : 0.8),
    '--dsw-specific-tip': dark ? rgb(P.bg2) : rgb(P.bg1),
  };
}

/** 设置页皮肤选择器里每个主题立方的 4 个色点。 */
export function swatchesOf(P) {
  return [P.bg, P.blue, P.green, P.red].map(rgb);
}

/** 主题定义（写入 lib/themes.json、嵌入 client.js）。 */
export function themeDefOf(P) {
  return {
    id: P.id,
    colorScheme: P.scheme,
    label: { zh: P.zh, en: P.en },
    swatches: swatchesOf(P),
    tokens: tokensFor(P),
  };
}