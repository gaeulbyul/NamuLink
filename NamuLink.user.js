// ==UserScript==
// @name         NamuLink
// @encoding     utf-8
// @namespace    https://github.com/List-KR/NamuLink
// @homepageURL  https://github.com/List-KR/NamuLink
// @supportURL   https://github.com/List-KR/NamuLink/issues
// @updateURL    https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/List-KR/NamuLink@main/NamuLink.user.js
// @license      MIT
//
// @version      1.5
// @author       PiQuark6046 and contributors
//
// @match        https://namu.wiki/*
//
// @description        NamuLink blocks the license-abused PowerLink advertisement on NamuWiki.
// @description:ko     NamuLink는 나무위키에 있는 라이선스를 위반한 파워링크 광고를 차단합니다.
//
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(() => {
	'use strict'

	const win = typeof unsafeWindow != "undefined" ? unsafeWindow : window

	const Gen =
	{
		Parents: (element) =>
		{
			var data = [element]
			while (data[0].parentElement != null)
			{
				data = [data[0].parentElement].concat(data)
			}
			return data.filter((FilterElement) => { return FilterElement != element })
		},
		Children: (element) =>
		{
			return Array.from(element.querySelectorAll("*"))
		},
		Peers: (element) =>
		{
			return Array.from(element.parentElement.children).filter((FElement) => { return FElement != element })
		}
	}

	const GetBoxRate = (e) =>
	{
		return e.offsetWidth / e.offsetHeight
	}

	const HideElementsImportant = (e) =>
	{
		let target = e.filter((k) => k != undefined)
		setInterval((k) =>
		{
			Array.from(k).forEach((o) => { o.style.setProperty("display", "none", "important") })
		}, 50, target)
		console.debug("NamuLink: HideElementsImportant: ", target)
		return target.length
	}

	const HideArcaliveAdver = () =>
	{
		Array.from(document.querySelectorAll("iframe[src]")).filter((e) => { return /\/\/arca\.live\/external\/callad/.test(e.getAttribute("src")) })
		.forEach((e) => { HideElementsImportant(Gen.Parents(e).filter((o) => { return o.innerText == "" && getComputedStyle(o).getPropertyValue("padding-bottom").replace(/px$/, "") > 15 }))})
	}

	const HideJSONPowerLink = () =>
	{
		HideElementsImportant(Array.from(document.querySelectorAll("iframe[src*='//arca.live/static/ad/powerlink.html?size=']")).filter((e) => { return e.offsetHeight > 100 && e.offsetWidth > 100 }))
	}

	const HidePendingPowerLink = () =>
	{
		HideElementsImportant(Array.from(document.querySelectorAll("*"))
			.filter((e) => { return /^(|[​\n\t ]{1,})$/.test(e.innerText) && getComputedStyle(e).getPropertyValue("margin-top").replace(/px$/, "") > 20 // zero-width space (U+200B) included
			&& Array.from(document.querySelectorAll("*"))
			.filter((k) => { return getComputedStyle(k).getPropertyValue("animation-iteration-count") == "infinite" })
			.every((k) => { return e.contains(k) }) }))
	}

	Object.defineProperty = new Proxy(
		Object.defineProperty,
		{
			apply: (target, thisArg, argsList) =>
			{
				var Original = Reflect.apply(target, thisArg, argsList)
				if (Array.isArray(Original) && /\/\/adcr\.naver\.com\/adcr\?.+,.+/.test(Original.toString()))
				{
					HideArcaliveAdver()
					HidePendingPowerLink()
					return new ReferenceError()
				}
				else
				{
					return Original
				}
			}
		}
	)

	document.addEventListener("DOMContentLoaded", () =>
	{
		HideArcaliveAdver()
		HideJSONPowerLink()
	})
})()