import { _ as _plugin_vue_export_helper_default, N as NuxtLink } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './Container-CacN4iKF.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '@vueuse/core';
import '@vueuse/shared';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region app/components/Header.vue
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	const _component_UContainer = _sfc_main$2;
	const _component_NuxtLink = NuxtLink;
	_push(ssrRenderComponent(_component_UContainer, _attrs, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<header class="flex justify-between flex-col items-center gap-5 md:flex-row mb-20 p-3"${_scopeId}>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`sobre`);
						else return [createTextVNode("sobre")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`projetos`);
						else return [createTextVNode("projetos")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`experiência`);
						else return [createTextVNode("experiência")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`escolaridade`);
						else return [createTextVNode("escolaridade")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`contato`);
						else return [createTextVNode("contato")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</header>`);
			} else return [createVNode("header", { class: "flex justify-between flex-col items-center gap-5 md:flex-row mb-20 p-3" }, [
				createVNode(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx(() => [createTextVNode("sobre")]),
					_: 1
				}),
				createVNode(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx(() => [createTextVNode("projetos")]),
					_: 1
				}),
				createVNode(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx(() => [createTextVNode("experiência")]),
					_: 1
				}),
				createVNode(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx(() => [createTextVNode("escolaridade")]),
					_: 1
				}),
				createVNode(_component_NuxtLink, {
					class: "text-2xl font-bold",
					to: "#"
				}, {
					default: withCtx(() => [createTextVNode("contato")]),
					_: 1
				})
			])];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Header_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Header" });
//#endregion
//#region app/layouts/default.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_Header = Header_default;
	_push(`<!--[-->`);
	_push(ssrRenderComponent(_component_Header, null, null, _parent));
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default };
//# sourceMappingURL=default-1J4du3dn.mjs.map
