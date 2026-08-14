/**
 * dsh-theme-pack host 半侧：无服务内容。
 * 存在意义：让 cordis Loader 有一条可加载的入口（entry.fiber 非空、未禁用），
 * dsh-client-modules 的扫描才会把这个包名解析进客户端 boot 图，
 * 浏览器再经 /plugins/dsh-theme-pack/client.js 拿到真正的客户端 bundle。
 */
export const name = 'dsh-theme-pack';
export function apply() {}