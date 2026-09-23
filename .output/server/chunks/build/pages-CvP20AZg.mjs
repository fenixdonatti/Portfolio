import { _ as _plugin_vue_export_helper_default, a as _sfc_main$13, N as NuxtLink, u as useComponentProps, b as useAppConfig, t as tv, P as Primitive } from '../virtual/entry.mjs';
import { _ as _sfc_main$7 } from './Container-CacN4iKF.mjs';
import { mergeProps, withCtx, createVNode, useSlots, computed, unref, openBlock, createBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/components/Hero.vue
var _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NuxtImg = _sfc_main$13;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between gap-4 flex-col items-center text-center lg:flex-row lg:text-start lg:items-start" }, _attrs))}><div><h1 class="font-bold text-6xl mb-12">Fênix Rodrigues Pedro</h1><p class="text-3xl">Sou estudante de Engenharia de Software e desenvolvedor apaixonado por criar soluções digitais úteis, intuitivas e bem construídas.</p></div>`);
	_push(ssrRenderComponent(_component_NuxtImg, {
		src: "https://ik.imagekit.io/theartling/prod/tr:w-1650/products/Product/0d0f67e8663f4b1b9824053fadc2300f_sw-1500_sh-1506.jpg",
		class: "w-sm md:w-lg h-auto rounded-4xl"
	}, null, _parent));
	_push(`</div>`);
}
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Hero_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]), { __name: "Hero" });
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fcard.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcard_default = {
	"slots": {
		"root": "rounded-lg overflow-hidden",
		"header": "p-4 sm:px-6",
		"title": "text-highlighted font-semibold",
		"description": "mt-1 text-muted text-sm",
		"body": "p-4 sm:p-6",
		"footer": "p-4 sm:px-6"
	},
	"variants": { "variant": {
		"solid": {
			"root": "bg-inverted text-inverted",
			"title": "text-inverted",
			"description": "text-dimmed"
		},
		"outline": { "root": "bg-default ring ring-default divide-y divide-default" },
		"soft": { "root": "bg-elevated/50 divide-y divide-default" },
		"subtle": { "root": "bg-elevated/50 ring ring-default divide-y divide-default" }
	} },
	"defaultVariants": { "variant": "outline" }
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Card.vue
var _sfc_main$5 = {
	__name: "UCard",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const _props = __props;
		const slots = useSlots();
		const props = useComponentProps("card", _props);
		const appConfig = useAppConfig();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fcard_default,
			...appConfig.ui?.card || {}
		})({ variant: props.variant }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
							_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "header", {}, () => {
								if (unref(props).title || !!slots.title) {
									_push(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "title", {}, () => {
										_push(`${ssrInterpolate(unref(props).title)}`);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								} else _push(`<!---->`);
								if (unref(props).description || !!slots.description) {
									_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "description", {}, () => {
										_push(`${ssrInterpolate(unref(props).description)}`);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								} else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (!!slots.default) {
							_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (!!slots.footer) {
							_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [
						!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "header",
							class: ui.value.header({ class: unref(props).ui?.header })
						}, [renderSlot(_ctx.$slots, "header", {}, () => [unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "title",
							class: ui.value.title({ class: unref(props).ui?.title })
						}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "description",
							class: ui.value.description({ class: unref(props).ui?.description })
						}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
						!!slots.default ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "body",
							class: ui.value.body({ class: unref(props).ui?.body })
						}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("", true),
						!!slots.footer ? (openBlock(), createBlock("div", {
							key: 2,
							"data-slot": "footer",
							class: ui.value.footer({ class: unref(props).ui?.footer })
						}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region app/components/Projects.vue
var _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	const _component_UCard = _sfc_main$5;
	const _component_NuxtImg = _sfc_main$13;
	_push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-center mb-10"><h1 class="text-6xl font-bold">projetos</h1><p class="text-3xl text-center">Conheça alguns dos projetos em que transformei ideias em experiências digitais funcionais e acessíveis.</p></div><div class="flex justify-around flex-col gap-4 items-center lg:items-start lg:flex-row">`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "https://lomed.com.br/",
		target: "_blank",
		rel: "noopener noreferrer"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_UCard, { class: "max-w-md" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_NuxtImg, {
							src: "/images/lomed.png",
							alt: "Projeto Lomed",
							class: "mb-5"
						}, null, _parent, _scopeId));
						_push(`<h2 class="text-3xl"${_scopeId}>Lomed</h2><p class="text-xl"${_scopeId}>Site institucional desenvolvido para apresentar a Lomed e seus serviços de forma clara e profissional.</p>`);
					} else return [
						createVNode(_component_NuxtImg, {
							src: "/images/lomed.png",
							alt: "Projeto Lomed",
							class: "mb-5"
						}),
						createVNode("h2", { class: "text-3xl" }, "Lomed"),
						createVNode("p", { class: "text-xl" }, "Site institucional desenvolvido para apresentar a Lomed e seus serviços de forma clara e profissional.")
					];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_UCard, { class: "max-w-md" }, {
				default: withCtx(() => [
					createVNode(_component_NuxtImg, {
						src: "/images/lomed.png",
						alt: "Projeto Lomed",
						class: "mb-5"
					}),
					createVNode("h2", { class: "text-3xl" }, "Lomed"),
					createVNode("p", { class: "text-xl" }, "Site institucional desenvolvido para apresentar a Lomed e seus serviços de forma clara e profissional.")
				]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "https://kardape.com.br/",
		target: "_blank",
		rel: "noopener noreferrer"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_UCard, { class: "max-w-md" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_NuxtImg, {
							src: "/images/kardape.png",
							alt: "Projeto Kardape",
							class: "mb-5"
						}, null, _parent, _scopeId));
						_push(`<h2 class="text-3xl"${_scopeId}>Kardape</h2><p class="text-xl"${_scopeId}>Plataforma criada para facilitar a consulta e a organização de cardápios digitais.</p>`);
					} else return [
						createVNode(_component_NuxtImg, {
							src: "/images/kardape.png",
							alt: "Projeto Kardape",
							class: "mb-5"
						}),
						createVNode("h2", { class: "text-3xl" }, "Kardape"),
						createVNode("p", { class: "text-xl" }, "Plataforma criada para facilitar a consulta e a organização de cardápios digitais.")
					];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_UCard, { class: "max-w-md" }, {
				default: withCtx(() => [
					createVNode(_component_NuxtImg, {
						src: "/images/kardape.png",
						alt: "Projeto Kardape",
						class: "mb-5"
					}),
					createVNode("h2", { class: "text-3xl" }, "Kardape"),
					createVNode("p", { class: "text-xl" }, "Plataforma criada para facilitar a consulta e a organização de cardápios digitais.")
				]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push(`</div></div>`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Projects_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]), { __name: "Projects" });
//#endregion
//#region app/components/Experience.vue
var _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
	const _component_UCard = _sfc_main$5;
	const _component_NuxtImg = _sfc_main$13;
	_push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-center mb-10"><h1 class="text-6xl font-bold">experiências</h1><p class="text-3xl text-center">Minha experiência combina desenvolvimento de software, aprendizado contínuo e atenção aos detalhes em cada projeto.</p></div><div class="flex justify-around flex-col">`);
	_push(ssrRenderComponent(_component_UCard, { class: "flex" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_NuxtImg, { src: "/images/lomedLogo.jpg" }, null, _parent, _scopeId));
				_push(`<div${_scopeId}><h2 class="text-3xl"${_scopeId}>Lomed</h2><p class="text-xl"${_scopeId}>Desenvolvimento de aplicações web, manutenção de sistemas e criação de soluções digitais para diferentes necessidades.</p><p${_scopeId}>06/2026 - Atualmente</p></div>`);
			} else return [createVNode(_component_NuxtImg, { src: "/images/lomedLogo.jpg" }), createVNode("div", null, [
				createVNode("h2", { class: "text-3xl" }, "Lomed"),
				createVNode("p", { class: "text-xl" }, "Desenvolvimento de aplicações web, manutenção de sistemas e criação de soluções digitais para diferentes necessidades."),
				createVNode("p", null, "06/2026 - Atualmente")
			])];
		}),
		_: 1
	}, _parent));
	_push(`</div></div>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Experience_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]), { __name: "Experience" });
//#endregion
//#region app/components/Education.vue
var _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	const _component_NuxtImg = _sfc_main$13;
	_push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-center mb-10"><h1 class="text-6xl font-bold">escolaridade</h1><p class="text-3xl text-center">Minha formação reúne fundamentos de software, prática em tecnologia e uma busca constante por novos conhecimentos.</p></div><div class="flex gap-10 flex-col"><div class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between"><div><h2 class="text-4xl font-bold">PUCRS</h2><p class="text-2xl">Bacharelado em Engenharia de Software</p><p class="text-xl">06/2025 - presente</p></div>`);
	_push(ssrRenderComponent(_component_NuxtImg, {
		src: "/images/pucrs.png",
		class: "w-md h-58 lg:w-lg lg:h-80 rounded-4xl object-cover"
	}, null, _parent));
	_push(`</div><div class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between"><div><h2 class="text-4xl font-bold">Senac Distrito Criativo</h2><p class="text-2xl">Técnico em Informática para a Internet</p><p class="text-xl">2021 - 2023</p></div>`);
	_push(ssrRenderComponent(_component_NuxtImg, {
		src: "/images/senac.png",
		class: "w-md h-58 lg:w-lg lg:h-80 rounded-4xl object-cover"
	}, null, _parent));
	_push(`</div></div></div>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Education.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Education_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]), { __name: "Education" });
//#endregion
//#region app/components/Contact.vue
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	const _component_UCard = _sfc_main$5;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 sm:px-6 lg:px-8 py-12" }, _attrs))}><div class="flex flex-col items-center mb-12"><h1 class="text-5xl font-bold text-center md:text-6xl">contato</h1><p class="mt-4 text-xl md:text-2xl text-center"> Vamos conversar sobre tecnologia, projetos e novas oportunidades de colaboração. </p></div><div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "#",
		target: "_blank",
		rel: "noopener noreferrer",
		class: "block"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_UCard, { class: "h-full flex flex-col items-center p-6 text-center rounded-lg" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="text-2xl font-semibold mb-3"${_scopeId}>Email</h2><p class="text-lg mb-2"${_scopeId}>fenixdonatti@gmail.com</p><p class="text-sm flex-1"${_scopeId}>Entre em contato por e-mail para falar sobre um projeto ou oportunidade.</p>`);
					else return [
						createVNode("h2", { class: "text-2xl font-semibold mb-3" }, "Email"),
						createVNode("p", { class: "text-lg mb-2" }, "fenixdonatti@gmail.com"),
						createVNode("p", { class: "text-sm flex-1" }, "Entre em contato por e-mail para falar sobre um projeto ou oportunidade.")
					];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_UCard, { class: "h-full flex flex-col items-center p-6 text-center rounded-lg" }, {
				default: withCtx(() => [
					createVNode("h2", { class: "text-2xl font-semibold mb-3" }, "Email"),
					createVNode("p", { class: "text-lg mb-2" }, "fenixdonatti@gmail.com"),
					createVNode("p", { class: "text-sm flex-1" }, "Entre em contato por e-mail para falar sobre um projeto ou oportunidade.")
				]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, {
		to: "https://www.linkedin.com/in/fenixrodrigues/",
		target: "_blank",
		rel: "noopener noreferrer",
		class: "block"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_UCard, { class: "h-full flex flex-col items-center p-6 text-center rounded-lg" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="text-2xl font-semibold mb-3"${_scopeId}>LinkedIn</h2><p class="text-lg mb-2"${_scopeId}>Fênix Rodrigues Pedro</p><p class="text-sm flex-1"${_scopeId}>Acompanhe minha trajetória profissional e conecte-se comigo.</p>`);
					else return [
						createVNode("h2", { class: "text-2xl font-semibold mb-3" }, "LinkedIn"),
						createVNode("p", { class: "text-lg mb-2" }, "Fênix Rodrigues Pedro"),
						createVNode("p", { class: "text-sm flex-1" }, "Acompanhe minha trajetória profissional e conecte-se comigo.")
					];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_UCard, { class: "h-full flex flex-col items-center p-6 text-center rounded-lg" }, {
				default: withCtx(() => [
					createVNode("h2", { class: "text-2xl font-semibold mb-3" }, "LinkedIn"),
					createVNode("p", { class: "text-lg mb-2" }, "Fênix Rodrigues Pedro"),
					createVNode("p", { class: "text-sm flex-1" }, "Acompanhe minha trajetória profissional e conecte-se comigo.")
				]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push(`</div></div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Contact_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Contact" });
//#endregion
//#region app/pages/index.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_UContainer = _sfc_main$7;
	const _component_Hero = Hero_default;
	const _component_Projects = Projects_default;
	const _component_Experience = Experience_default;
	const _component_Education = Education_default;
	const _component_Contact = Contact_default;
	_push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "flex flex-col gap-24 md:gap-32 p-4 md:p-0" }, _attrs), {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_Hero, null, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_Projects, null, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_Experience, null, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_Education, null, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_Contact, null, null, _parent, _scopeId));
			} else return [
				createVNode(_component_Hero),
				createVNode(_component_Projects),
				createVNode(_component_Experience),
				createVNode(_component_Education),
				createVNode(_component_Contact)
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { pages_default as default };
//# sourceMappingURL=pages-CvP20AZg.mjs.map
