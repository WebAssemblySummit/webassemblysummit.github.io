(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+H/T":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),s=i.a.createElement,o={1:{speakerId:"1",title:"Opening Keynote"},2:{speakerId:"2",title:"Shipping Tiny WebAssembly Builds",abstract:"Code size matters in many places, especially (but not only!) on the Web. This talk will present current best practices in generating small WebAssembly builds when using popular toolchains like LLVM, Emscripten, Rust, Go, and AssemblyScript."},3:{speakerId:"3",title:"Why the #wasmsummit Website isn't written in Wasm, and what that means for the future of Wasm",abstract:s(i.a.Fragment,null,s("p",null,"WebAssembly is not here to kill JavaScript. In fact, to be successful, it *must not*. But let me back up."),s("p",null,"WebAssembly is an exciting new technology that has the ambition to change how and what we program for not only the web, but everywhere. In the case of the web platform, WebAssembly's promise has led many to declare that WebAssembly's entrance means the death of JavaScript. This belief is not only reactionary, but deeply short-sighted, and likely to threaten the successful wide-spread adoption of WebAssembly."),s("p",null,"In this talk, we'll use the WebAssembly Summit website to discuss the uses and misuses of WebAssembly on the web. We'll explore the historical and material conditions of the web, past and present, to understand *how* and *why* the web changes and what its current trajectory is. With this understanding, we'll explore how WebAssembly can navigate this unique moment and discuss the practical implications of the specification's growth and better tooling as WebAssembly searches for its place in the web platform and beyond."))},4:{speakerId:"4",title:"JavaScriptCore's new WebAssembly interpreter",abstract:"In this talk, we will look at JavaScriptCore's newest WebAssembly tier, the Low Level Interpreter (LLInt). With the addition of the interpreter, JavaScriptCore now uses three tiers to execute WebAssembly: LLInt, BBQ and OMG. Because of the new interpreter, WebAssembly programs executing in JavaScriptCore now start up 3x faster. Because of the three-tiered approach, we were able to achieve this while maintaining the same throughput performance."},5:{speakerId:"5",title:"WebAssembly Music",abstract:"Been playing with computer music since the 80s from the tracker era to modern soft synths and DAWs, and even writing some myself. Recently as WebAssembly  came along with excellent performance, and AudioWorklet technology in  providing low latency audio, it's finally possible to use the web for serious music production. As a programmer I like to use a programming language for expressing the music, and also for synthesizing the instruments. I compose my music in Javascript and create my instruments in AssemblyScript which is compiled to WebAssembly. It's all running in the browser. You can write the music in a live coding-environment, and you can play and record the instruments with a midi-keyboard."},6:{speakerId:"6",title:"Making it easier to make Things: WebAssembly and the Internet of Things",abstract:"WebAssembly is moving beyond the browser - but is it ready for IoT apps and tiny embedded devices? Yes...ish. In this talk, learn about the state of running Wasm on embedded devices (as low as 512kb of RAM & 64 MHz) and what's left to solve. Also learn where Wasm can today help with IoT protocols and tools."},7:{speakerId:"7",title:"Building a Containerless Future with WebAssembly",abstract:"WebAssembly is the future of distributed computing. Its security, memory isolation, small footprint, and true portability are all advantages on the web, but become truly game-changing when used to build functions and services deployed in the cloud. This session illustrates how to host WebAssembly modules in Rust code, how to build modules in many different languages (including pros and cons of each), and how to securely grant cloud-native capabilities to these modules. Discussed in detail is the current state of the art in WebAssembly and what can be built with it today. Learn what developers can start doing now to build the containerless future where WebAssembly modules are the de-facto unit of immutable deployment in the cloud, at the edge, and even in IoT and embedded devices."},8:{speakerId:"8",title:"WebAssembly as a <video> polyfill",abstract:"An introduction to Wikipedia's ogv.js media compatibility shim, which uses WebAssembly codecs to provide video file format compatibility for VP9 and AV1 video in browsers that don't play them natively. Will explore the division between the JS and Wasm parts of the code base, and how advances in emscripten and LLVM create opportunities and challenges for performance as different browsers implement different levels of the spec (threading, SIMD, etc)."},9:{speakerId:"9",title:"Closing Keynote"}}},HmTN:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={1:{name:"Lin Clark",picture:"/lin-clark.jpg",company:"Mozilla",website:"https://twitter.com/linclark",talkId:"1"},2:{name:"Alon Zakai",company:"Google",picture:"/alon-zakai.jpeg",website:"https://twitter.com/kripken",talkId:"2"},3:{name:"Ashley Williams",company:"Cloudflare",picture:"/ashley-williams.jpg",website:"https://twitter.com/ag_dubs",talkId:"3"},4:{name:"Tadeu Zagallo",company:"Apple",picture:"/tadeu-zagallo.jpg",website:"https://twitter.com/tadeuzagallo",talkId:"4"},5:{name:"Peter Salomonsen",picture:"/peter-salomonsen.jpg",website:"https://twitter.com/salomonsen_p",talkId:"5"},6:{name:"Johnathan Beri",company:"Wasm SF",picture:"/johnathan-beri.jpeg",website:"https://twitter.com/beriberikix",talkId:"6"},7:{name:"Kevin Hoffman",picture:"/kevin-hoffman.jpeg",website:"https://twitter.com/kevinhoffman",talkId:"7"},8:{name:"Brion Vibber",picture:"/brion-vibber.jpg",website:"https://twitter.com/brionv",talkId:"8"},9:{name:"Ben Smith",company:"Google",picture:"/ben-smith.jpg",website:"https://twitter.com/binjimint",talkId:"9"}}},VZO5:function(e,t,a){"use strict";a.r(t),a.d(t,"Headline",(function(){return u}));var n=a("pLtp"),i=a.n(n),s=a("q1tI"),o=a.n(s),r=a("vOnD"),l=a("bgFo"),d=a("HmTN"),m=a("+H/T"),c=a("YFqc"),p=a.n(c),h=o.a.createElement;t.default=function(){return h(o.a.Fragment,null,h(b,null),h(l.b,{title:"Speakers",backgroundColor:l.g,bottom:!0}),h(w,{id:"speakers"},i()(d.a).map((function(e){var t=d.a[e]||{},a=m.a[t.talkId]||{},n=a.time||{};return h(p.a,{key:e,href:"/speakers/[id]",as:"/speakers/".concat(e)},h("a",null,h(l.c,null,h("img",{src:t.picture,alt:"picture of ".concat(t.name)}),h(l.d,null,h("strong",null,t.name)," ",t.company&&h(l.a,null,t.company)),h(l.e,null,a&&h(o.a.Fragment,null,h("p",null,n.start&&n.end&&"".concat(n.start," - ").concat(n.end)),h(l.f,null,a.title))))))}))))};var u=r.b.h1.withConfig({displayName:"speakers__Headline",componentId:"hw1l38-0"})(["font-size:2.3em;margin-top:3vh;margin-bottom:-3vh;padding:0;margin-left:40px;@media screen and (max-width:1280px){font-size:1.7em;margin-left:25px;}"]),b=r.b.div.withConfig({displayName:"speakers__Background",componentId:"hw1l38-1"})(["display:flex;position:fixed;top:0;bottom:0;left:0;right:0;background-color:hsla(237,0%,48%,0.15);padding:25px;z-index:-1;"]),w=r.b.div.withConfig({displayName:"speakers__Speakers",componentId:"hw1l38-2"})(["padding:25px;padding-top:6vh;padding-bottom:100px;display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));grid-gap:1vw;grid-row-gap:70px;justify-items:center;align-items:center;@media (max-width:1280px){grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:2vw;}"])},"l+3q":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/speakers",function(){return a("VZO5")}])}},[["l+3q",0,1]]]);