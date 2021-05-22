// ==UserScript==
// @name         4chan sanitizer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.4chan.org/*
// @icon         https://www.google.com/s2/favicons?domain=4chan.org
// @grant        none
// ==/UserScript==

(function() {
    const ignorelist = []

    function clear() {
        const threads = document.getElementsByClassName(`thread`)

        for (const thread of threads) {
            const content = thread.textContent.toLowerCase()

            for (const ignore of ignorelist) {
                if (content.includes(ignore)) {
                    thread.remove()
                }
            }
        }
    }

    setInterval(clear, 100)
})()
