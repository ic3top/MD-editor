(function(e){function n(n){for(var i,s,r=n[0],l=n[1],c=n[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);h&&h(n);while(u.length)u.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(i=!1)}i&&(a.splice(n--,1),e=r(r.s=t[0]))}return e}var i={},o={app:0},a=[];function s(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ec64438e"}[e]+".js"}function r(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,i){t=o[e]=[n,i]}));n.push(t[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(e);var c=new Error;a=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,t[1](c)}o[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},r.m=e,r.c=i,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/MD-editor/dist/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var h=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4848:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("7a23"),o=t("9319"),a=t("b24b");function s(e,n,t,o,a,s){var r=Object(i["A"])("router-view");return Object(i["s"])(),Object(i["f"])(r)}var r={name:"App"};t("5ba1");r.render=s;var l=r,c=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),d=Object(i["K"])("data-v-e179ca20");Object(i["v"])("data-v-e179ca20");var h={class:"v-home"},u=Object(i["i"])("h1",{class:"p-text-center"},"All of your files",-1),m={class:"v-buttons"},p={class:"p-d-flex p-justify-end p-mt-4"},b=Object(i["i"])("h3",null,"Create new file",-1),f={class:"p-d-flex p-flex-column"},w=Object(i["i"])("label",{for:"fileName",class:"p-mb-2"},"File name:",-1);Object(i["t"])();var g=d((function(e,n,t,o,a,s){var r=Object(i["A"])("router-link"),l=Object(i["A"])("Button"),c=Object(i["A"])("Card"),g=Object(i["A"])("ConfirmPopup"),A=Object(i["A"])("InputText"),y=Object(i["A"])("Dialog");return Object(i["s"])(),Object(i["f"])("div",h,[Object(i["i"])(c,{class:"p-shadow-6 p-pt-4"},{header:d((function(){return[u]})),content:d((function(){return[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(e.getAllFileNames,(function(e){return Object(i["s"])(),Object(i["f"])("div",{key:e,class:"v-link-wrapper"},[Object(i["i"])(r,{to:"/files/"+e},{default:d((function(){return[Object(i["h"])(Object(i["E"])(e),1)]})),_:2},1032,["to"]),Object(i["i"])("div",m,[Object(i["i"])(l,{icon:"pi pi-ellipsis-v",class:"p-button-rounded p-button-text"}),Object(i["i"])(l,{icon:"pi pi-times",onClick:function(n){return s.deleteFile(n,e)},class:"p-button-rounded p-button-text"},null,8,["onClick"])])])})),128))]})),footer:d((function(){return[Object(i["i"])("div",p,[Object(i["i"])(l,{label:"Create new file +",class:"p-button-outlined",onClick:n[1]||(n[1]=function(e){return a.displayDialog=!0})})])]})),_:1}),Object(i["i"])(g),Object(i["i"])(y,{visible:a.displayDialog,"onUpdate:visible":n[3]||(n[3]=function(e){return a.displayDialog=e}),dismissableMask:"",modal:!0,draggable:!1},{header:d((function(){return[b]})),footer:d((function(){return[Object(i["i"])(l,{onClick:s.createNewFile,label:"Create",icon:"pi pi-check",autofocus:""},null,8,["onClick"])]})),default:d((function(){return[Object(i["i"])("div",f,[w,Object(i["i"])(A,{id:"fileName",type:"text",modelValue:a.fileName,"onUpdate:modelValue":n[2]||(n[2]=function(e){return a.fileName=e}),onKeyup:Object(i["J"])(s.createNewFile,["enter"]),autofocus:""},null,8,["modelValue","onKeyup"])])]})),_:1},8,["visible"])])})),A=t("5530"),y=t("5bd2"),v=t("bb57"),k=t("9899"),j=t("9421"),O=t("8398"),x=t("5502"),I={name:"Home",data:function(){return{displayDialog:!1,fileName:null}},components:{Card:k["a"],Button:v["a"],ConfirmPopup:j["a"],Dialog:y["a"],InputText:O["a"]},computed:Object(A["a"])({},Object(x["b"])(["getAllFileNames"])),methods:Object(A["a"])(Object(A["a"])({},Object(x["c"])(["DELETE_FILE","CREATE_NEW_FILE"])),{},{deleteFile:function(e,n){var t=this;this.$confirm.require({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:function(){t.DELETE_FILE({name:n})}})},createNewFile:function(){this.fileName&&(this.CREATE_NEW_FILE({name:this.fileName}),this.$router.push("/files/".concat(this.fileName)))}})};t("ed8a");I.render=g,I.__scopeId="data-v-e179ca20";var S=I,E=Object(i["K"])("data-v-962e4e0c"),T=E((function(e,n,t,o,a,s){var r=Object(i["A"])("v-menubar"),l=Object(i["A"])("v-editor");return Object(i["s"])(),Object(i["f"])(i["a"],null,[Object(i["i"])(r),Object(i["i"])(l)],64)})),M=(t("b0c0"),Object(i["K"])("data-v-1488f6ff"));Object(i["v"])("data-v-1488f6ff");var N={class:"v-wrapper"};Object(i["t"])();var C=M((function(e,n,t,o,a,s){var r=Object(i["A"])("Menubar");return Object(i["s"])(),Object(i["f"])("div",N,[Object(i["i"])(r,{model:a.items},null,8,["model"])])})),F=t("c0c3"),L={name:"VSidebar",components:{Menubar:F["a"]},data:function(){return{visible:!0,items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"All files",icon:"pi pi-fw pi-folder",items:this.$store.getters.getFileItems},{label:"New",icon:"pi pi-fw pi-plus"},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"},{label:"Import",icon:"pi pi-fw pi-upload"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}}};t("8e64");L.render=C,L.__scopeId="data-v-1488f6ff";var B=L,R=Object(i["K"])("data-v-006cf484");Object(i["v"])("data-v-006cf484");var Y={class:"container"},_=Object(i["i"])("textarea",{name:"editor",id:"editor"},"\n    ",-1);Object(i["t"])();var H=R((function(e,n,t,o,a,s){return Object(i["s"])(),Object(i["f"])("div",Y,[_,Object(i["i"])("div",{ref:"output",class:"v-output",innerHTML:a.convertedHTML},null,8,["innerHTML"])])})),D=t("339e"),U=t.n(D),q=function(e){U.a.setOption("strikethrough",!0);var n=new U.a.Converter({strikethrough:!0,tablesHeaderId:!0,tasklists:!0,parseImgDimensions:!0,smoothLivePreview:!0});return n.makeHtml(e)},Q=t("56b3");t("a7be"),t("5a25"),t("44a0"),t("959b"),t("f9d4"),t("31c5"),t("6d78"),t("6a70"),t("4498"),t("1fdb");function G(e){var n=Q["fromTextArea"](document.getElementById(e),{lineNumbers:!0,lineWrapping:!0,theme:"material-ocean",mode:"gfm",styleActiveLine:!0,scrollbarStyle:"overlay",extraKeys:{F11:function(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc:function(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}}});return n}var P={name:"VEditor",data:function(){return{convertedHTML:""}},mounted:function(){var e=this;this.editor=G("editor"),this.editor.on("scroll",(function(n){var t=n.getScrollInfo().top/n.getScrollInfo().height;e.$refs.output.scrollTop=e.$refs.output.scrollHeight*t})),this.editor.on("changes",(function(n){e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){e.convertedHTML=q(n.getValue()),e.CHANGE_CONTENT_BY_FILE_NAME({name:e.currentFileName,content:n.getValue()})}),400)}));try{this.editor.getDoc().setValue(this.getContentByFileName(this.currentFileName))}catch(n){this.$router.push("/")}},computed:Object(A["a"])(Object(A["a"])({},Object(x["b"])(["getContentByFileName"])),{},{currentFileName:function(){return this.$route.params.name}}),methods:Object(A["a"])({},Object(x["c"])(["CHANGE_CONTENT_BY_FILE_NAME"])),watch:{$route:{handler:function(){try{this.editor.getDoc().setValue(this.getContentByFileName(this.currentFileName))}catch(e){this.$router.push("/")}},deep:!0}}};t("e1f2");P.render=H,P.__scopeId="data-v-006cf484";var V=P,J={name:"MainEditor",components:{VMenubar:B,VEditor:V},beforeRouteUpdate:function(e,n,t){this.getContentByFileName(e.params.name)?t():t("/")},computed:Object(A["a"])({},Object(x["b"])(["getContentByFileName"]))};J.render=T,J.__scopeId="data-v-962e4e0c";var K=J,z=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/files/:name",name:"MainEditor",component:K}],X=Object(c["a"])({history:Object(c["b"])("/MD-editor/dist/"),routes:z}),Z=X;function $(e){e.subscribe((function(e,n){localStorage.setItem("allFiles",JSON.stringify(n.files.allFiles))}))}var W,ee=t("ade3"),ne=(t("b64b"),{"New file":'# Showdown parser\n\n> Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io).\n\n\n# Installation\n\n## Download tarball\n\nYou can download the latest release tarball directly from [releases][releases]\n\n## Bower\n\n    bower install showdown\n\n## npm (server-side)\n\n    npm install showdown\n\n## CDN\n\nYou can also use one of several CDNs available:\n\n* rawgit CDN\n\n        https://cdn.rawgit.com/showdownjs/showdown/<version tag>/dist/showdown.min.js\n\n* cdnjs\n\n        https://cdnjs.cloudflare.com/ajax/libs/showdown/<version tag>/showdown.min.js\n\n\n[sd-logo]: https://raw.githubusercontent.com/showdownjs/logo/master/dist/logo.readme.png\n[releases]: https://github.com/showdownjs/showdown/releases\n[atx]: http://www.aaronsw.com/2002/atx/intro\n[setext]: https://en.wikipedia.org/wiki/Setext\n\n---------\n\n# Syntax\n\n\n## Table of contents\n\n- [Introduction](#introduction)\n- [Paragraphs](#paragraphs)\n- [Headings](#headings)\n    * [Atx Style](#atx-style)\n    * [Setext style](#setext-style)\n    * [Header IDs](#header-ids)\n- [Blockquotes](#blockquotes)\n- [Bold and Italic](#bold-and-italic)\n- [Strikethrough](#strikethrough)\n- [Emojis](#emojis)\n- [Code formatting](#code-formatting)\n    * [Inline formats](#inline-formats)\n    * [Multiple lines](#multiple-lines)\n- [Lists](#lists)\n    * [Unordered lists](#unordered-lists)\n    * [Ordered lists](#ordered-lists)\n    * [TaskLists (GFM Style)](#tasklists--gfm-style-)\n    * [List syntax](#list-syntax)\n    * [Nested blocks](#nested-blocks)\n    * [Nested lists](#nested-lists)\n    * [Nested code blocks](#nested-code-blocks)\n- [Links](#links)\n    * [Simple](#simple)\n    * [Inline](#inline)\n    * [Reference Style](#reference-style)\n- [Images](#images)\n    * [Inline](#inline-1)\n    * [Reference Style](#reference-style-1)\n    * [Image dimensions](#image-dimensions)\n    * [Base64 encoded images](#base64-encoded-images)\n- [Tables](#tables)\n- [Mentions](#mentions)\n- [Handling HTML in markdown documents](#handling-html-in-markdown-documents)\n- [Escaping entities](#escaping-entities)\n    * [Escaping markdown entities](#escaping-markdown-entities)\n    * [Escaping html tags](#escaping-html-tags)\n- [Known differences and Gotchas](#known-differences-and-gotchas)\n\n## Introduction\n\nShowdown was created by John Fraser as a direct port of the original parser written by markdown\'s creator, John Gruber. Although Showdown has evolved since its inception, in "vanilla mode", it tries to follow the [original markdown spec][md-spec] (henceforth refereed as vanilla) as much as possible. There are, however, a few important differences, mainly due to inconsistencies in the original spec, which we addressed following the author\'s advice as stated in the [markdown\'s "official" newsletter][md-newsletter].\n\nShowdown also support "extra" syntax not defined in the original spec as opt-in features. This means new syntax elements are not enabled by default and require users to enable them through options.\n\nThis document provides a quick description the syntax supported and the differences in output from the original markdown.pl implementation.\n\n## Paragraphs\n\nParagraphs in Showdown are just **one or more lines of consecutive text** followed by one or more blank lines.\n\n```md\nOn July 2, an alien mothership entered Earth\'s orbit and deployed several dozen\nsaucer-shaped "destroyer" spacecraft, each 15 miles (24 km) wide.\n\nOn July 3, the Black Knights, a squadron of Marine Corps F/A-18 Hornets,\nparticipated in an assault on a destroyer near the city of Los Angeles.\n```\n\nThe implication of the “one or more consecutive lines of text” is that Showdown supports\n“hard-wrapped” text paragraphs. This means the following examples produce the same output:\n\n```md\nA very long line of text\n```\n\n```md\nA very\nlong line\nof text\n```\n\nIf you DO want to add soft line breaks (which translate to `<br>` in HTML) to a paragraph,\nyou can do so by adding 3 space characters to the end of the line (`  `).\n\nYou can also force every line break in paragraphs to translate to `<br>` (as Github does) by\nenabling the option **`simpleLineBreaks`**.\n\n## Headings\n\n### Atx Style\n\nYou can create a heading by adding one or more # symbols before your heading text. The number of # you use will determine the size of the heading. This is similar to [**atx style**][atx].\n\n```md\n# The largest heading (an <h1> tag)\n## The second largest heading (an <h2> tag)\n…\n###### The 6th largest heading (an <h6> tag)\n```\n\nThe space between `#` and the heading text is not required but you can make that space mandatory by enabling the option **`requireSpaceBeforeHeadingText`**.\n\nYou can wrap the headings in `#`. Both leading and trailing `#` will be removed.\n\n```md\n## My Heading ##\n```\n\nIf, for some reason, you need to keep a leading or trailing `#`, you can either add a space or escape it:\n\n```md\n# # My header # #\n\n#\\# My Header \\# #\n```\n\n### Setext style\n\nYou can also use [**setext style**][setext] headings, although only two levels are available.\n\n```md\nThis is an H1\n=============\n\nThis is an H2\n-------------\n```\n\n**Note:**\nIn live preview editors, when a paragraph is followed by a list it can cause an awkward effect.\n\n![awkward effect][]\n\nYou can prevent this by enabling the option **`smoothPreview`**.\n\n### Header IDs\n\nShowdown generates bookmarks anchors in titles automatically, by adding an id property to an heading.\n\n```md\n# My cool header with ID\n```\n\n```html\n<h1 id="mycoolheaderwithid">My cool header with ID</h1>\n```\n\nThis behavior can be modified with options:\n\n - **`noHeaderId`** disables automatic id generation;\n - **`ghCompatibleHeaderId`** generates header ids compatible with github style (spaces are replaced with dashes and a bunch of non alphanumeric chars are removed)\n - **`prefixHeaderId`** adds a prefix to the generated header ids (either automatic or custom).\n - **`headerLevelStart`** sets the header starting level. For instance, setting this to 3 means that `# header` will be converted to `<h3>`.\n\nRead the [README.md][readme] for more info\n\n## Blockquotes\n\nYou can indicate blockquotes with a >.\n\n```md\nIn the words of Abraham Lincoln:\n\n> Pardon my french\n```\n\nBlockquotes can have multiple paragraphs and can have other block elements inside.\n\n```md\n> A paragraph of text\n>\n> Another paragraph\n>\n> - A list\n> - with items\n```\n\n## Bold and Italic\n\nYou can make text bold or italic.\n\n    *This text will be italic*\n    **This text will be bold**\n\nBoth bold and italic can use either a \\* or an \\_ around the text for styling. This allows you to combine both bold and italic if needed.\n\n    **Everyone _must_ attend the meeting at 5 o\'clock today.**\n\n## Strikethrough\n\nWith the option **`strikethrough`** enabled, Showdown supports strikethrough elements.\nThe syntax is the same as GFM, that is, by adding two tilde (`~~`) characters around\na word or groups of words.\n\n```md\na ~~strikethrough~~ element\n```\n\na ~~strikethrough~~ element\n\n## Emojis\n\nSince version 1.8.0, showdown supports github\'s emojis. A complete list of available emojis can be foun [here][emoji list].\n\n```md\nthis is a :smile: smile emoji\n```\n\nthis is a :smile: smile emoji\n\n## Code formatting\n\n### Inline formats\n\nUse single backticks (`) to format text in a special monospace format. Everything within the backticks appear as-is, with no other special formatting.\n\n```md\nHere\'s an idea: why don\'t we take `SuperiorProject` and turn it into `**Reasonable**Project`.\n```\n\n```html\n<p>Here\'s an idea: why don\'t we take <code>SuperiorProject</code> and turn it into <code>**Reasonable**Project</code>.</p>\n```\n\n### Multiple lines\n\nTo create blocks of code you should indent it by four spaces.\n\n```md\n    this is a piece\n    of\n    code\n```\n\nIf the options **`ghCodeBlocks`** is activated (which is by default), you can use triple backticks (```) to format text as its own distinct block.\n\n    Check out this neat program I wrote:\n\n    ```\n    x = 0\n    x = 2 + 2\n    what is x\n    ```\n\n## Lists\n\nShowdown supports ordered (numbered) and unordered (bulleted) lists.\n\n### Unordered lists\n\nYou can make an unordered list by preceding list items with either a *, a - or a +. Markers are interchangeable too.\n\n```md\n* Item\n+ Item\n- Item\n```\n\n### Ordered lists\n\nYou can make an ordered list by preceding list items with a number.\n\n```md\n1. Item 1\n2. Item 2\n3. Item 3\n```\n\nIt’s important to note that the actual numbers you use to mark the list have no effect on the HTML output Showdown produces. So you can use the same number in all items if you wish to.\n\n### TaskLists (GFM Style)\n\nShowdown also supports GFM styled takslists if the **`tasklists`** option is enabled.\n\n```md\n - [x] checked list item\n - [ ] unchecked list item\n```\n\n - [x] checked list item\n - [ ] unchecked list item\n\n### List syntax\n\nList markers typically start at the left margin, but may be indented by up to three spaces.\n\n```md\n   * this is valid\n   * this is too\n```\n\nList markers must be followed by one or more spaces or a tab.\n\nTo make lists look nice, you can wrap items with hanging indents:\n\n```md\n*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\n    viverra nec, fringilla in, laoreet vitae, risus.\n*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\n    Suspendisse id sem consectetuer libero luctus adipiscing.\n```\n\nBut if you want to be lazy, you don’t have to\n\nIf one list item is separated by a blank line, Showdown will wrap all the list items in `<p>` tags in the HTML output.\nSo this input:\n\n```md\n* Bird\n\n* Magic\n* Johnson\n```\n\nResults in:\n\n```html\n<ul>\n<li><p>Bird</p></li>\n<li><p>Magic</p></li>\n<li><p>Johnson</p></li>\n</ul>\n```\n\nThis differs from other markdown implementations such as GFM (github) or commonmark.\n\n### Nested blocks\n\nList items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab:\n\n```md\n1.  This is a list item with two paragraphs. Lorem ipsum dolor\n    sit amet, consectetuer adipiscing elit. Aliquam hendrerit\n    mi posuere lectus.\n\n    Vestibulum enim wisi, viverra nec, fringilla in, laoreet\n    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum\n    sit amet velit.\n\n2.  Suspendisse id sem consectetuer libero luctus adipiscing.\n```\n\nThis is valid for other block elements such as blockquotes:\n\n```md\n*   A list item with a blockquote:\n\n    > This is a blockquote\n    > inside a list item.\n```\n\nor event other lists.\n\n### Nested lists\n\nYou can create nested lists by indenting list items by **four** spaces.\n\n```md\n1.  Item 1\n    1. A corollary to the above item.\n    2. Yet another point to consider.\n2.  Item 2\n    * A corollary that does not need to be ordered.\n    * This is indented four spaces\n    * You might want to consider making a new list.\n3.  Item 3\n```\n\nThis behavior is consistent with the original spec but differs from other implementations such as GFM or commonmark. Prior to version 1.5, you just needed to indent two spaces for it to be considered a sublist.\nYou can disable the **four spaces requirement** with option **`disableForced4SpacesIndentedSublists`**\n\nTo nest a third (or more) sublist level, you need to indent 4 extra spaces (or 1 extra tab) for each level.\n\n```md\n1.  level 1\n    1.  Level 2\n        *   Level 3\n    2.  level 2\n        1.  Level 3\n1.  Level 1\n```\n\n### Nested code blocks\n\nYou can nest fenced codeblocks the same way you nest other block elements, by indenting by fours spaces or a tab:\n\n```md\n1.  Some code:\n\n    ```js\n    var foo = \'bar\';\n    console.log(foo);\n    ```\n```\n\nTo put a *indented style* code block within a list item, the code block needs to be indented twice — 8 spaces or two tabs:\n\n```md\n1.  Some code:\n\n    var foo = \'bar\';\n    console.log(foo);\n```\n\n## Links\n\n### Simple\n\nIf you wrap a valid URL or email in `<>` it will be turned into a link whose text is the link itself.\n\n```md\nlink to <http://www.google.com/>\n\nthis is my email <somedude@mail.com>\n```\n\nIn the case of email addreses, Showdown will also perform a bit of randomized decimal and hex entity-encoding to help obscure your address from address-harvesting spambots.\nYou can disable this obfuscation setting **`encodeEmails`** option to `false`.\n\nWith the option **`simplifiedAutoLink`** enabled, Showdown will automagically turn every valid URL it finds in the text body to links for you, without the need to wrap them in `<>`.\n\n```md\nlink to http://www.google.com/\n\nthis is my email somedude@mail.com\n```\n\n### Inline\n\nYou can create an inline link by wrapping link text in brackets ( `[ ]` ), and then wrapping the link in parentheses ( `( )` ).\n\nFor example, to create a hyperlink to github.com/showdownjs/showdown, with a link text that says, Get Showdown!, you\'d write this in Markdown: `[Get Showdown!](https://github.com/showdownjs/showdown)`.\n\n### Reference Style\n\nYou can also use the reference style, like this:\n\n```md\nthis is a [link to google][1]\n\n[1]: www.google.com\n```\n\nShowdown also supports implicit link references:\n\n```md\nthis is a link to [google][]\n\n[google]: www.google.com\n```\n\n## Images\n\nMarkdown uses an image syntax that is intended to resemble the syntax for links, also allowing for two styles: inline and reference.\n\n### Inline\n\nInline image syntax looks like this:\n\n```md\n![Alt text](url/to/image)\n\n![Alt text](url/to/image "Optional title")\n```\n\nThat is:\n\n + An exclamation mark: !;\n + followed by a set of square brackets, containing the alt attribute text for the image;\n + followed by a set of parentheses, containing the URL or path to the image, and an optional title attribute enclosed in double or single quotes.\n\n\n### Reference Style\n\nReference-style image syntax looks like this:\n\n```md\n![Alt text][id]\n```\n\nWhere “id” is the name of a defined image reference. Image references are defined using syntax identical to link references:\n\n```md\n[id]: url/to/image  "Optional title attribute"\n```\n\nImplicit references are also supported in images, similar to what happens with links:\n\n```md\n![showdown logo][]\n\n[showdown logo]: http://showdownjs.github.io/demo/img/editor.logo.white.png\n```\n\n### Image dimensions\n\nWhen the option **`parseImgDimension`** is activated, you can also define the image dimensions, like this:\n\n```md\n![Alt text](url/to/image =250x250 "Optional title")\n```\n\nor in reference style:\n\n```md\n![Alt text][id]\n\n[id]: url/to/image =250x250\n```\n\n### Base64 encoded images\n\nShowdown also supports Base64 encoded images, both reference and inline style.\n**Since version 1.7.4**, wrapping base64 strings, which are usually extremely long lines of text, is supported.\nYou can add newlines arbitrarily, as long as they are added after the `,` character.\n\n**inline style**\n```md\n![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\njmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAY\nSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=)\n```\n\n**reference style**\n```md\n![Alt text][id]\n\n[id]:\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\njmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D\nAcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=\n```\n\nPlease note that with reference style base64 image sources, regardless of "wrapping", a double newline is needed after the base64 string to separate them from a paragraph or other text block (but references can be adjacent).\n\n**wrapped reference style**\n```md\n![Alt text][id]\n![Alt text][id2]\n\n[id]:\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\njmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D\nAcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=\n[id2]:\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l\njmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D\nAcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=\n\nthis text needs to be separated from the references by 2 newlines\n```\n\n\n## Tables\n\nTables aren\'t part of the core Markdown spec, but they are part of GFM and Showdown supports them by turning on the option `tables`.\n\nColons can be used to align columns.\n\nIn the new version, the outer pipes (`|`) are optional, matching GFM spec.\n\nYou also don\'t need to make the raw Markdown line up prettily.\n\nYou can also use other markdown syntax inside them.\n\n```md\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| **col 3 is**  | right-aligned | $1600 |\n| col 2 is      | *centered*    |   $12 |\n| zebra stripes | ~~are neat~~  |    $1 |\n```\n\n## Mentions\n\nShowdown supports github mentions by enabling the option **`ghMentions`**. This will turn every `@username` into a link to their github profile.\n\n```md\nhey @tivie, check this out\n```\n\nSince version 1.6.2 you can customize the generated link in mentions with the option **`ghMentionsLink`**.\nFor instance, setting this option to `http://mysite.com/{u}/profile`:\n\n```html\n<p>hey <a href="http://mysite.com/tivie/profile">@tivie</a>, check this out</p>\n```\n\n## Handling HTML in markdown documents\n\nShowdown, in most cases, leaves HTML tags alone, leaving them untouched in the output document.\n\n```md\nsome markdown **here**\n<div>this is *not* **parsed**</div>\n```\n\n```html\n<p>some markdown <strong>here</strong></p>\n<div>this is *not* **parsed**</div>\n```\n\nHowever, there are exceptions to this. With `<code>` and `<pre><code>` tags, their contents are always escaped.\n\n```md\nsome markdown **here** with <code>foo & bar <baz></baz></code>\n```\n\n ```html\n<p>some markdown <strong>here</strong> with <code>foo &amp; bar &lt;baz&gt;&lt;/baz&gt;</code></p>\n```\n\nIf you wish to enable markdown parsing inside a specific HTML tag, you can enable it by using the html attribute **`markdown`** or  **`markdown="1"`**  or **`data-markdown="1"`**.\n\n```md\nsome markdown **here**\n<div markdown="1">this is *not* **parsed**</div>\n```\n\n```html\n<p>some markdown <strong>here</strong></p>\n<div markdown="1"><p>this is <em>not</em> <strong>parsed</strong></p></div>\n```\n\n## Escaping entities\n\n### Escaping markdown entities\n\nShowdown allows you to use backslash (`\\`\n)\nescapes\nto\ngenerate\nliteral\ncharacters\nwhich\nwould\notherwise\nhave\nspecial\nmeaning in markdown’s\nsyntax.For\nexample,\nif you wanted\nto\nsurround\na\nword\nwith literal underscores(instead\nof\nan\nHTML `<em>` tag), you can use backslashes before the unserscores, like this:\n\n```md\n\\_literal underscores\\_\n```\n\nShowdown provides backslash escapes for the following characters:\n\n```\n\\   backslash\n`   backtick\n*   asterisk\n_   underscore\n{}  curly braces\n[]  square brackets\n()  parentheses\n#   hash mark\n+   plus sign\n-   minus sign (hyphen)\n.   dot\n!   exclamation mark\n```\n\n### Escaping HTML tags\n\nSince [version 1.7.2](https://github.com/showdownjs/showdown/tree/1.7.2) backslash escaping HTML tags is supported when `backslashEscapesHTMLTags` option is enabled.\n\n```md\n\\<div>a literal div\\</div>\n```\n\n## Known differences and Gotchas\n\nIn most cases, Showdown\'s output is identical to that of Perl Markdown v1.0.2b7.  What follows is a list of all known deviations.  Please file an issue if you find more.\n\n* **Since version 1.4.0, showdown supports the markdown="1" attribute**, but for older versions, this attribute is ignored. This means:\n\n        <div markdown="1">\n             Markdown does *not* work in here.\n        </div>\n\n\n* You can only nest square brackets in link titles to a depth of two levels:\n\n        [[fine]](http://www.github.com/)\n        [[[broken]]](http://www.github.com/)\n\n    If you need more, you can escape them with backslashes.\n\n\n* A list is **single paragraph** if it has only **1 line-break separating items** and it becomes **multi paragraph if ANY of its items is separated by 2 line-breaks**:\n\n   ```md\n    - foo\n\n    - bar\n    - baz\n   ```\n   becomes\n\n    ```html\n    <ul>\n      <li><p>foo</p></li>\n      <li><p>bar</p></li>\n      <li><p>baz</p></li>\n    </ul>\n    ```\n'}),te=ne,ie="CHANGE_CONTENT_BY_FILE_NAME",oe="CREATE_NEW_FILE",ae="DELETE_FILE",se=JSON.parse(localStorage.getItem("allFiles"))||te,re={state:{allFiles:se},mutations:(W={},Object(ee["a"])(W,ie,(function(e,n){var t=n.name,i=n.content;e.allFiles[t]=i})),Object(ee["a"])(W,oe,(function(e,n){var t=n.name,i=n.content,o=void 0===i?"":i;if(e.allFiles[t])throw Error("File with name '".concat(t,"' already exists"));e.allFiles[t]=o})),Object(ee["a"])(W,ae,(function(e,n){var t=n.name;delete e.allFiles[t]})),W),getters:{getAllFiles:function(e){return e.allFiles},getAllFileNames:function(e){return Object.keys(e.allFiles)},getFileItems:function(e,n){return n.getAllFileNames.reduce((function(e,n){return e.push({label:n,to:"/files/".concat(n)}),e}),[])},getContentByFileName:function(e){return function(n){if(void 0===e.allFiles[n])throw Error("There is no file with name ".concat(n));return e.allFiles[n]}}},actions:{},modules:{}},le=re,ce=Object(x["a"])({plugins:[$],state:{},mutations:{},getters:{},actions:{},modules:{files:le}});t("9ad7"),t("4121"),t("bddf");Object(i["e"])(l).use(o["a"]).use(a["a"]).use(ce).use(Z).mount("#app")},"594a":function(e,n,t){},"5ba1":function(e,n,t){"use strict";t("4848")},"6c64":function(e,n,t){},"8e64":function(e,n,t){"use strict";t("963a")},"963a":function(e,n,t){},e1f2:function(e,n,t){"use strict";t("594a")},ed8a:function(e,n,t){"use strict";t("6c64")}});
//# sourceMappingURL=app.a2f8c09c.js.map