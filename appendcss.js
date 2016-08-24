// ==UserScript==
// @name         XDA Modification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Append CSS to Sites
// @author       arunk140
// @match        http://forum.xda-developers.com/*
// @match        https://forum.xda-developers.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here..
    appendCSS('div.postbit-signature img { display: none; }');
    appendCSS('div.postbit-signature font { color: #ffffff; }');
    appendCSS('.post-text {color: #00ff2f;}');
    appendCSS('body{background:#333 !important;}');
})();
function appendCSS(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

