/**
 * dsh-theme-pack — 16 套主题的紧凑配色定义（唯一数据源）。
 *
 * 每套主题只声明调色板原色；build.mjs 里的 tokensFor() 负责把调色板
 * 映射成 DSH 的 --dsw-alias-* / --dsw-specific-* 语义 token 全集。
 *
 * 字段约定（全部为 #rrggbb 十六进制）：
 *   bg      主背景            bgSide  侧栏背景（通常比 bg 更深/更灰）
 *   el      浮起层背景（浅主题用，如卡片/菜单）
 *   bg1/2/3 逐级抬升的表面    bgCode  代码块背景
 *   fg/fg2  主/次级文字       muted   说明文字（caption）   muted2 三级文字
 *   blue    主题主强调色（按钮、链接、选中）
 *   red/green/yellow  错误/成功/警告
 *   syn     代码高亮：kw 关键字 / str 字符串 / fn 函数 / num 数字 / com 注释
 */

export const PALETTES = [
  // ── 深色系 ────────────────────────────────────────────────
  {
    id: 'catppuccin-mocha', scheme: 'dark',
    zh: '猫布奇诺 · 摩卡', en: 'Catppuccin Mocha',
    bg: '#1e1e2e', bgSide: '#181825', bgCode: '#11111b',
    bg1: '#262738', bg2: '#313244', bg3: '#45475a',
    fg: '#cdd6f4', fg2: '#bac2de', muted2: '#a6adc8', muted: '#7f849c',
    blue: '#89b4fa', red: '#f38ba8', green: '#a6e3a1', yellow: '#f9e2af',
    syn: { kw: '#cba6f7', str: '#a6e3a1', fn: '#89b4fa', num: '#fab387', com: '#6c7086' },
  },
  {
    id: 'gruvbox-dark', scheme: 'dark',
    zh: 'Gruvbox · 暗', en: 'Gruvbox Dark',
    bg: '#282828', bgSide: '#1d2021', bgCode: '#1d2021',
    bg1: '#32302f', bg2: '#3c3836', bg3: '#504945',
    fg: '#ebdbb2', fg2: '#d5c4a1', muted2: '#a89984', muted: '#928374',
    blue: '#83a598', red: '#fb4934', green: '#b8bb26', yellow: '#fabd2f',
    syn: { kw: '#fb4934', str: '#b8bb26', fn: '#8ec07c', num: '#d3869b', com: '#928374' },
  },
  {
    id: 'everforest', scheme: 'dark',
    zh: '永恒森林', en: 'Everforest',
    bg: '#2d353b', bgSide: '#232a2e', bgCode: '#272e33',
    bg1: '#343f44', bg2: '#3d484d', bg3: '#475258',
    fg: '#d3c6aa', fg2: '#c1b498', muted2: '#9da9a0', muted: '#859289',
    blue: '#7fbbb3', red: '#e67e80', green: '#a7c080', yellow: '#dbbc7f',
    syn: { kw: '#e67e80', str: '#a7c080', fn: '#7fbbb3', num: '#d699b6', com: '#859289' },
  },
  {
    id: 'rose-pine', scheme: 'dark',
    zh: '玫瑰松 · 夜', en: 'Rosé Pine',
    bg: '#191724', bgSide: '#121019', bgCode: '#14121d',
    bg1: '#1f1d2e', bg2: '#26233a', bg3: '#403d52',
    fg: '#e0def4', fg2: '#908caa', muted2: '#7d7a98', muted: '#6e6a86',
    blue: '#c4a7e7', red: '#eb6f92', green: '#9ccfd8', yellow: '#f6c177',
    syn: { kw: '#c4a7e7', str: '#9ccfd8', fn: '#ebbcba', num: '#f6c177', com: '#6e6a86' },
  },
  {
    id: 'solarized-dark', scheme: 'dark',
    zh: '日光 · 暗', en: 'Solarized Dark',
    bg: '#002b36', bgSide: '#00212b', bgCode: '#002732',
    bg1: '#073642', bg2: '#12434f', bg3: '#2a4f56',
    fg: '#93a1a1', fg2: '#839496', muted2: '#657b83', muted: '#586e75',
    blue: '#268bd2', red: '#dc322f', green: '#859900', yellow: '#b58900',
    syn: { kw: '#859900', str: '#2aa198', fn: '#268bd2', num: '#d33682', com: '#586e75' },
  },
  {
    id: 'kanagawa', scheme: 'dark',
    zh: '神奈川冲浪里', en: 'Kanagawa Wave',
    bg: '#1f1f28', bgSide: '#16161d', bgCode: '#181820',
    bg1: '#2a2a37', bg2: '#363646', bg3: '#54546d',
    fg: '#dcd7ba', fg2: '#c8c093', muted2: '#9c9c8f', muted: '#727169',
    blue: '#7e9cd8', red: '#e46876', green: '#98bb6c', yellow: '#e6c384',
    syn: { kw: '#957fb8', str: '#98bb6c', fn: '#7e9cd8', num: '#d27e99', com: '#727169' },
  },
  {
    id: 'tokyo-night', scheme: 'dark',
    zh: '东京夜', en: 'Tokyo Night',
    bg: '#1a1b26', bgSide: '#16161e', bgCode: '#16161e',
    bg1: '#1f2335', bg2: '#292e42', bg3: '#3b4261',
    fg: '#c0caf5', fg2: '#a9b1d6', muted2: '#737aa2', muted: '#565f89',
    blue: '#7aa2f7', red: '#f7768e', green: '#9ece6a', yellow: '#e0af68',
    syn: { kw: '#bb9af7', str: '#9ece6a', fn: '#7aa2f7', num: '#ff9e64', com: '#565f89' },
  },
  {
    id: 'tokyo-storm', scheme: 'dark',
    zh: '东京夜 · 风暴', en: 'Tokyo Night Storm',
    bg: '#24283b', bgSide: '#1f2335', bgCode: '#1f2335',
    bg1: '#292f47', bg2: '#323a59', bg3: '#3b4261',
    fg: '#c0caf5', fg2: '#a9b1d6', muted2: '#737aa2', muted: '#565f89',
    blue: '#7aa2f7', red: '#f7768e', green: '#9ece6a', yellow: '#e0af68',
    syn: { kw: '#bb9af7', str: '#9ece6a', fn: '#7aa2f7', num: '#ff9e64', com: '#565f89' },
  },
  {
    id: 'night-owl', scheme: 'dark',
    zh: '夜猫子', en: 'Night Owl',
    bg: '#011627', bgSide: '#01111d', bgCode: '#010d16',
    bg1: '#0c2337', bg2: '#1d3b53', bg3: '#2b4a63',
    fg: '#d6deeb', fg2: '#aab8c9', muted2: '#8b9bab', muted: '#637777',
    blue: '#82aaff', red: '#ef5350', green: '#addb67', yellow: '#ecc48d',
    syn: { kw: '#c792ea', str: '#ecc48d', fn: '#82aaff', num: '#f78c6c', com: '#637777' },
  },
  {
    id: 'nord', scheme: 'dark',
    zh: '北境极光', en: 'Nord',
    bg: '#2e3440', bgSide: '#262b35', bgCode: '#292f3a',
    bg1: '#3b4252', bg2: '#434c5e', bg3: '#4c566a',
    fg: '#d8dee9', fg2: '#cdd3de', muted2: '#98a0ae', muted: '#767e8d',
    blue: '#81a1c1', red: '#bf616a', green: '#a3be8c', yellow: '#ebcb8b',
    syn: { kw: '#81a1c1', str: '#a3be8c', fn: '#88c0d0', num: '#b48ead', com: '#616e88' },
  },
  {
    id: 'dracula', scheme: 'dark',
    zh: '德古拉', en: 'Dracula',
    bg: '#282a36', bgSide: '#21222c', bgCode: '#1e1f29',
    bg1: '#2f3241', bg2: '#44475a', bg3: '#4e5266',
    fg: '#f8f8f2', fg2: '#e2e2dc', muted2: '#8795bd', muted: '#6272a4',
    blue: '#bd93f9', red: '#ff5555', green: '#50fa7b', yellow: '#f1fa8c',
    syn: { kw: '#ff79c6', str: '#f1fa8c', fn: '#50fa7b', num: '#bd93f9', com: '#6272a4' },
  },
  {
    id: 'one-dark', scheme: 'dark',
    zh: '深一', en: 'One Dark',
    bg: '#282c34', bgSide: '#21252b', bgCode: '#21252b',
    bg1: '#2c313a', bg2: '#353b45', bg3: '#3e4451',
    fg: '#abb2bf', fg2: '#9da5b3', muted2: '#828997', muted: '#5c6370',
    blue: '#61afef', red: '#e06c75', green: '#98c379', yellow: '#e5c07b',
    syn: { kw: '#c678dd', str: '#98c379', fn: '#61afef', num: '#d19a66', com: '#5c6370' },
  },

  // ── 浅色系 ────────────────────────────────────────────────
  {
    id: 'catppuccin-latte', scheme: 'light',
    zh: '猫布奇诺 · 拿铁', en: 'Catppuccin Latte',
    bg: '#eff1f5', bgSide: '#e6e9ef', el: '#ffffff', bgCode: '#dee2ec',
    bg1: '#e4e6ec', bg2: '#dadde5', bg3: '#ccd0da',
    fg: '#4c4f69', fg2: '#5c5f77', muted2: '#8c8fa1', muted: '#9ca0b0',
    blue: '#1e66f5', red: '#d20f39', green: '#40a02b', yellow: '#df8e1d',
    syn: { kw: '#8839ef', str: '#40a02b', fn: '#1e66f5', num: '#fe640b', com: '#9ca0b0' },
  },
  {
    id: 'gruvbox-light', scheme: 'light',
    zh: 'Gruvbox · 光', en: 'Gruvbox Light',
    bg: '#fbf1c7', bgSide: '#f2e5bc', el: '#fdf6dc', bgCode: '#ebdbb2',
    bg1: '#ebdbb2', bg2: '#d5c4a1', bg3: '#bdae93',
    fg: '#3c3836', fg2: '#504945', muted2: '#7c6f64', muted: '#928374',
    blue: '#076678', red: '#9d0006', green: '#79740e', yellow: '#b57614',
    syn: { kw: '#9d0006', str: '#79740e', fn: '#427b58', num: '#8f3f71', com: '#928374' },
  },
  {
    id: 'solarized-light', scheme: 'light',
    zh: '日光 · 亮', en: 'Solarized Light',
    bg: '#fdf6e3', bgSide: '#eee8d5', el: '#fffdf4', bgCode: '#eee8d5',
    bg1: '#eee8d5', bg2: '#e2dcc4', bg3: '#cfc9b0',
    fg: '#586e75', fg2: '#657b83', muted2: '#839496', muted: '#93a1a1',
    blue: '#268bd2', red: '#dc322f', green: '#859900', yellow: '#b58900',
    syn: { kw: '#859900', str: '#2aa198', fn: '#268bd2', num: '#d33682', com: '#93a1a1' },
  },
  {
    id: 'rose-pine-dawn', scheme: 'light',
    zh: '玫瑰松 · 黎明', en: 'Rosé Pine Dawn',
    bg: '#faf4ed', bgSide: '#f2e9e1', el: '#fffaf3', bgCode: '#f0e6dd',
    bg1: '#f2e9e1', bg2: '#dfdad9', bg3: '#cecacd',
    fg: '#575279', fg2: '#6f6a8a', muted2: '#797593', muted: '#9893a5',
    blue: '#907aa9', red: '#b4637a', green: '#56949f', yellow: '#ea9d34',
    syn: { kw: '#907aa9', str: '#56949f', fn: '#286983', num: '#ea9d34', com: '#9893a5' },
  },
];
