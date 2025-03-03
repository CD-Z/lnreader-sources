var t=this&&this.__awaiter||function(t,e,a,r){return new(a||(a=Promise))((function(n,i){function o(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(o,s)}l((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var a,r,n,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),n=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=a(require("dayjs")),l=require("@libs/storage"),c=function(t,e){return new RegExp(e.join("|")).test(t)},u=new(function(){function a(t){var e,a;this.hideLocked=l.storage.get("hideLocked"),this.parseData=function(t){var e,a=(0,s.default)(),r=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",n=parseInt(r,10);if(!r)return t;if(c(t,["detik","segundo","second","วินาที"]))a=a.subtract(n,"second");else if(c(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(n,"minute");else if(c(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(n,"hours");else if(c(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(n,"days");else if(c(t,["week","semana"]))a=a.subtract(n,"week");else if(c(t,["month","mes"]))a=a.subtract(n,"month");else{if(!c(t,["year","año"]))return"Invalid Date"!==(0,s.default)(t).format("LL")?(0,s.default)(t).format("LL"):t;a=a.subtract(n,"year")}return a.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var r=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(6+r),this.options=t.options,this.filters=t.filters,(null===(a=this.options)||void 0===a?void 0:a.hasLocked)&&(this.pluginSettings={hideLocked:{value:"",label:"Hide locked chapters",type:"Switch"}})}return a.prototype.translateDragontea=function(t){var e;if("dragontea"!==this.id)return t;var a=(0,n.load)((null===(e=t.html())||void 0===e?void 0:e.replace("\n","").replace(/<br\s*\/?>/g,"\n"))||"");return t.html(a.html()),t.find("*").addBack().contents().filter((function(t,e){return 3===e.nodeType})).each((function(t,e){var r=a(e),n=r.text().normalize("NFD").split("").map((function(t){var e=t.normalize("NFC"),a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e);return a>=0?"zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"[a]+t.slice(e.length):t})).join("");r.replaceWith(n.replace("\n","<br>"))})),t},a.prototype.getHostname=function(t){var e=(t=t.split("/")[2]).split(".");return e.pop(),e.join(".")},a.prototype.getCheerio=function(a,i){return t(this,void 0,void 0,(function(){var t,o,s,l;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(a)];case 1:if(!(t=e.sent()).ok&&1!=i)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return s=n.load,[4,t.text()];case 2:if(o=s.apply(void 0,[e.sent()]),l=o("title").text().trim(),this.getHostname(a)!=this.getHostname(t.url)||"Bot Verification"==l||"You are being redirected..."==l||"Un instant..."==l||"Just a moment..."==l||"Redirecting..."==l)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},a.prototype.parseNovels=function(t){var e=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(a,r){var n=t(r).find(".post-title").text().trim(),o=t(r).find(".post-title").find("a").attr("href")||"";if(n&&o){var s=t(r).find("img"),l={name:n,cover:s.attr("data-src")||s.attr("src")||s.attr("data-lazy-srcset")||i.defaultCover,path:o.replace(/https?:\/\/.*?\//,"/")};e.push(l)}})),e},a.prototype.popularNovels=function(a,r){return t(this,arguments,void 0,(function(t,a){var r,n,i,o,s,l,c=a.filters,u=a.showLatestNovels;return e(this,(function(e){switch(e.label){case 0:for(n in r=this.site+"/page/"+t+"/?s=&post_type=wp-manga",c||(c=this.filters||{}),u&&(r+="&m_orderby=latest"),c)if("object"==typeof c[n].value)for(i=0,o=c[n].value;i<o.length;i++)s=o[i],r+="&".concat(n,"=").concat(s);else c[n].value&&(r+="&".concat(n,"=").concat(c[n].value));return[4,this.getCheerio(r,1!=t)];case 1:return l=e.sent(),[2,this.parseNovels(l)]}}))}))},a.prototype.parseNovel=function(a){return t(this,void 0,void 0,(function(){var t,l,c,u,p,h,d,m,f=this;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(t=e.sent())(".manga-title-badges, #manga-title span").remove(),(l={path:a,name:t(".post-title h1").text().trim()||t("#manga-title h1").text().trim()}).cover=t(".summary_image > a > img").attr("data-lazy-src")||t(".summary_image > a > img").attr("data-src")||t(".summary_image > a > img").attr("src")||i.defaultCover,t(".post-content_item, .post-content").each((function(){var e=t(this).find("h5").text().trim(),a=t(this).find(".summary-content");switch(e){case"Genre(s)":case"Genre":case"Tags(s)":case"Tag(s)":case"Tags":case"Género(s)":case"التصنيفات":l.genres?l.genres+=", "+a.find("a").map((function(e,a){return t(a).text()})).get().join(", "):l.genres=a.find("a").map((function(e,a){return t(a).text()})).get().join(", ");break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":l.author=a.text().trim();break;case"Status":case"Novel":case"Estado":l.status=a.text().trim().includes("OnGoing")||a.text().trim().includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed;break;case"Artist(s)":l.artist=a.text().trim()}})),l.author||(l.author=t(".manga-authors").text().trim()),t("div.summary__content .code-block,script,noscript").remove(),l.summary=this.translateDragontea(t("div.summary__content")).text().trim()||t("#tab-manga-about").text().trim()||t('.post-content_item h5:contains("Summary")').next().find("span").map((function(e,a){return t(a).text()})).get().join("\n\n").trim()||t(".manga-summary p").map((function(e,a){return t(a).text()})).get().join("\n\n").trim()||t(".manga-excerpt p").map((function(e,a){return t(a).text()})).get().join("\n\n").trim(),c=[],u="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,r.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST",referrer:this.site+a}).then((function(t){return t.text()}))]:[3,3];case 2:return u=e.sent(),[3,5];case 3:return p=t(".rating-post-id").attr("value")||t("#manga-chapters-holder").attr("data-id")||"",(h=new FormData).append("action","manga_get_chapters"),h.append("manga",p),[4,(0,r.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:h}).then((function(t){return t.text()}))];case 4:u=e.sent(),e.label=5;case 5:return"0"!==u&&(t=(0,n.load)(u)),d=t(".wp-manga-chapter").length,t(".wp-manga-chapter").each((function(e,a){var r=t(a).find("a").text().trim(),n=a.attribs.class.includes("premium-block");n&&(r="🔒 "+r);var i=t(a).find("span.chapter-release-date").text().trim();i=i?f.parseData(i):(0,s.default)().format("LL");var o=t(a).find("a").attr("href")||"";!o||"#"==o||n&&f.hideLocked||c.push({name:r,path:o.replace(/https?:\/\/.*?\//,"/"),releaseTime:i||null,chapterNumber:d-e})})),l.chapters=c.reverse(),[2,l]}}))}))},a.prototype.parseChapter=function(a){return t(this,void 0,void 0,(function(){var t,r,n;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return t=e.sent(),r=t(".text-left")||t(".text-right")||t(".entry-content")||t(".c-blog-post > div > div:nth-child(2)"),null===(n=this.options)||void 0===n||n.customJs,[2,this.translateDragontea(r).html()||""]}}))}))},a.prototype.searchNovels=function(a,r){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/page/"+r+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(t,!0)];case 1:return n=e.sent(),[2,this.parseNovels(n)]}}))}))},a}())({id:"wordexcerpt",sourceSite:"https://wordexcerpt.com/",sourceName:"WordExcerpt",options:{lang:"English"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[]},op:{type:"Switch",label:"Having ALL selected genres",value:!1},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"",value:"",options:[]}}});exports.default=u;