(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7181:function(e,t,s){Promise.resolve().then(s.bind(s,3146))},3146:function(e,t,s){"use strict";s.d(t,{AppComponent:function(){return _}});var a=s(7437),r=s(2265),l=s(2660),i=s(3247),n=s(2369),c=s(740),o=s(2489),d=s(407),u=s(4938),m=s(8997),h=s(7689),x=s(3581),f=s(7168),g=s(8728),b=s(6595),j=s(1723),p=s(3464),w=s(7310),v=s.n(w);let y=p.Z.create({baseURL:"/api"});y.interceptors.request.use(e=>{let t=localStorage.getItem("token");return t&&(e.headers.Authorization=t),e},e=>Promise.reject(e));let N=e=>{let{isLoggedIn:t,onLoginClick:s,showBackButton:r=!1,onBackClick:c,title:o="文物数据库"}=e;return(0,a.jsxs)("header",{className:"flex justify-between items-center p-4 bg-white border-b border-gray-200",children:[r?(0,a.jsx)("button",{onClick:c,className:"text-red-700",children:(0,a.jsx)(l.Z,{className:"w-6 h-6"})}):(0,a.jsx)("h1",{className:"text-xl font-bold text-gray-800",children:o}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("button",{className:"text-red-700 mr-4",children:(0,a.jsx)(i.Z,{className:"w-6 h-6"})}),!t&&(0,a.jsx)("button",{onClick:s,className:"text-red-700",children:(0,a.jsx)(n.Z,{className:"w-6 h-6"})})]})]})},k=e=>{let{activeCategory:t,onCategoryChange:s,onFilterClick:r,classification:l}=e,i=["古币","珍宝","陶瓷","书画"],n=Object.values(l).map(e=>e.unicode),o=n.length>=i.length?n:[...n,...i.slice(n.length)];return(0,a.jsxs)("nav",{className:"flex items-center p-2 bg-white border-b border-gray-200",children:[(0,a.jsx)("button",{className:"p-2 text-red-700 mr-2",onClick:r,children:(0,a.jsx)(c.Z,{className:"w-6 h-6"})}),(0,a.jsx)("div",{className:"flex overflow-x-auto whitespace-nowrap",children:o.map(e=>(0,a.jsx)("button",{className:"px-3 py-2 text-sm font-medium ".concat(e===t?"text-red-700 border-b-2 border-red-700":"text-gray-600"),onClick:()=>s(e),children:e},e))})]})},C=e=>{let t,{isOpen:s,onClose:l,onFilterChange:i,classification:n}=e,[c,d]=(0,r.useState)(0),[u,m]=(0,r.useState)(["","","","","",""]);(0,r.useEffect)(()=>{s&&(d(0),m(["","","","","",""]))},[s]);let h=(e,t)=>{let s=[...u];s[t]=e,s.fill("",t+1),m(s),i(s);let a=n;for(let e=0;e<=t;e++)if(a[s[e]])a=a[s[e]].childs;else{a={};break}0===Object.keys(a).length||5===t?l():d(t+1)};return s?(0,a.jsxs)("div",{className:"absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-64 z-50",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h2",{className:"text-lg font-bold",children:"筛选"}),(0,a.jsx)("button",{onClick:l,children:(0,a.jsx)(o.Z,{className:"w-5 h-5"})})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-700 mb-2",children:(t=n,u.filter(Boolean).map((e,s)=>{var a,r;let l=(null===(a=t[e])||void 0===a?void 0:a.unicode)||"";return t=(null===(r=t[e])||void 0===r?void 0:r.childs)||{},l}).join(" - "))}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:(()=>{let e=n;for(let t=0;t<c;t++){if(!e[u[t]])return null;e=e[u[t]].childs}return Object.entries(e).map(e=>{let[t,s]=e;return(0,a.jsx)("button",{className:"px-3 py-1 text-sm text-gray-700 hover:bg-red-50 rounded",onClick:()=>h(t,c),children:s.unicode},t)})})()})]})]}):null},S=e=>{let{username:t,userId:s,isLoggedIn:r,onLoginClick:l}=e;return(0,a.jsx)("div",{className:"relative h-48 bg-gradient-to-b from-red-700 to-red-800 flex items-end",children:(0,a.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 flex items-end p-4",children:[(0,a.jsx)("div",{className:"w-16 h-16 rounded-full bg-white border-4 border-white overflow-hidden",children:r?(0,a.jsx)("img",{src:"http://ui-avatars.com/api/?name=".concat(encodeURIComponent(t||"")),alt:"Profile",className:"w-full h-full object-cover"}):(0,a.jsx)(n.Z,{className:"w-full h-full text-gray-400"})}),(0,a.jsx)("div",{className:"ml-4 mb-1 flex-grow",children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-white",children:t}),(0,a.jsxs)("p",{className:"text-xs text-red-100",children:["用户ID: ",s]})]}):(0,a.jsx)("button",{onClick:l,className:"px-4 py-2 bg-white text-red-700 rounded-full font-medium",children:"请登录"})})]})})},Z=e=>{let{icon:t,title:s,onClick:r,disabled:l=!1}=e;return(0,a.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-gray-200 ".concat(l?"opacity-50 cursor-not-allowed":"cursor-pointer"),onClick:l?void 0:r,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[t,(0,a.jsx)("span",{className:"ml-4 text-gray-700",children:s})]}),(0,a.jsx)(d.Z,{className:"w-5 h-5 text-gray-400"})]})},E=e=>{let{id:t,image:s,title:r,subtitle:l,onClick:i}=e;return(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden cursor-pointer",onClick:()=>i(t),children:[(0,a.jsx)("div",{className:"aspect-square bg-gray-200 mb-2",children:(0,a.jsx)("img",{src:s||"/placeholder.svg?height=200&width=200",alt:r,className:"w-full h-full object-cover"})}),(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium truncate text-gray-800",children:r}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:l})]})]})},I=e=>{let{filter:t,onArtifactClick:s,artifacts:r,loading:l,hasMore:i,setPage:n,lastArtifactElementRef:c}=e;return(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 p-4",children:[r.map((e,t)=>(0,a.jsx)("div",{ref:t===r.length-1?c:null,children:(0,a.jsx)(E,{id:e.pid,image:e.url,title:e.title,subtitle:"",onClick:s})},e.pid)),l&&(0,a.jsx)("p",{className:"col-span-2 text-center text-gray-500",children:"加载中..."}),!i&&r.length>0&&(0,a.jsx)("p",{className:"col-span-2 text-center text-gray-500",children:"没有更多数据了"}),!l&&0===r.length&&(0,a.jsx)("p",{className:"col-span-2 text-center text-gray-500",children:"没有找到相关文物"})]})},F=e=>{let{activePage:t,onPageChange:s}=e;return(0,a.jsxs)("nav",{className:"fixed bottom-0 left-0 right-0 flex justify-around items-end bg-white border-t border-gray-200 p-2",children:[(0,a.jsxs)("button",{className:"flex flex-col items-center ".concat("database"===t?"text-red-700":"text-gray-600"),onClick:()=>s("database"),children:[(0,a.jsx)(u.Z,{className:"w-6 h-6"}),(0,a.jsx)("span",{className:"text-xs",children:"数据库"})]}),(0,a.jsx)("button",{className:"flex flex-col items-center relative -top-2",onClick:()=>s("identify"),children:(0,a.jsx)("div",{className:"w-[70px] h-[70px] rounded-full bg-red-700 flex items-center justify-center text-white absolute bottom-0",children:"识别"})}),(0,a.jsxs)("button",{className:"flex flex-col items-center ".concat("profile"===t?"text-red-700":"text-gray-600"),onClick:()=>s("profile"),children:[(0,a.jsx)(n.Z,{className:"w-6 h-6"}),(0,a.jsx)("span",{className:"text-xs",children:"我的"})]})]})},L=e=>{let{onLogin:t,onSwitchToRegister:s}=e,[l,i]=(0,r.useState)(""),[n,c]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(""),h=async e=>{e.preventDefault(),d(""),m("");try{await t(l,n),m("登录成功"),setTimeout(()=>m(""),500)}catch(e){d(e instanceof Error?e.message:"登录失败，请重试")}};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,a.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md w-96",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-center",children:"登录"}),o&&(0,a.jsx)("p",{className:"text-red-500 text-sm mb-4 animate-fade-in",children:o}),u&&(0,a.jsx)("p",{className:"text-green-500 text-sm mb-4 animate-fade-in",children:u}),(0,a.jsxs)("form",{onSubmit:h,className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"用户名"}),(0,a.jsx)("input",{type:"text",id:"username",value:l,onChange:e=>i(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"密码"}),(0,a.jsx)("input",{type:"password",id:"password",value:n,onChange:e=>c(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"登录"})]}),(0,a.jsx)("div",{className:"mt-4 text-center",children:(0,a.jsx)("button",{onClick:s,className:"text-sm text-red-600 hover:text-red-500",children:"还没有账号？注册"})})]})})},R=e=>{let{onRegister:t,onSwitchToLogin:s}=e,[l,i]=(0,r.useState)(""),[n,c]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),f=async e=>{if(e.preventDefault(),m(""),x(""),n!==o){m("密码不匹配");return}try{await t(l,n),x("注册成功"),setTimeout(()=>x(""),500)}catch(e){m(e instanceof Error?e.message:"注册失败，请重试")}};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,a.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md w-96",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-center",children:"注册"}),u&&(0,a.jsx)("p",{className:"text-red-500 text-sm mb-4 animate-fade-in",children:u}),h&&(0,a.jsx)("p",{className:"text-green-500 text-sm mb-4 animate-fade-in",children:h}),(0,a.jsxs)("form",{onSubmit:f,className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"用户"}),(0,a.jsx)("input",{type:"text",id:"username",value:l,onChange:e=>i(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"密码"}),(0,a.jsx)("input",{type:"password",id:"password",value:n,onChange:e=>c(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"r_password",className:"block text-sm font-medium text-gray-700",children:"确认密码"}),(0,a.jsx)("input",{type:"password",id:"r_password",value:o,onChange:e=>d(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"注册"})]}),(0,a.jsx)("div",{className:"mt-4 text-center",children:(0,a.jsx)("button",{onClick:s,className:"text-sm text-red-600 hover:text-red-500",children:"已有账号？登录"})})]})})},B=e=>{var t;let{pid:s,onBack:l,showToast:i}=e,[n,c]=(0,r.useState)(null),[o,d]=(0,r.useState)(!0),[u,h]=(0,r.useState)(!1),x=(0,r.useCallback)(v()(async e=>{let t=localStorage.getItem("token");if(t)try{await p.Z.post("/api/user-actions/record",{pid:e,timestamp:Date.now()},{headers:{Authorization:t}})}catch(e){console.error("Failed to record history:",e)}},1e3),[]);(0,r.useEffect)(()=>{(async()=>{try{let e=(await p.Z.get("/api/artifacts/search?id=".concat(s))).data;c(e),x(s);let t=(await y.get("/user-actions/favorite")).data;console.log(t.some(e=>e.pid==s)),h(t.some(e=>e.pid==s))}catch(e){console.error("Failed to fetch artifact details:",e)}finally{d(!1)}})()},[s,x]);let f=async()=>{try{u?(await y.delete("/user-actions/favorite",{data:{pid:s}}),h(!1),i("已取消收藏","success")):(await y.post("/user-actions/favorite",{pid:s}),h(!0),i("已添加到收藏","success"))}catch(e){console.error("Failed to update favorite:",e),i("操作失败，请重试","error")}};return o?(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:"加载中..."}):n?(0,a.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,a.jsx)(N,{showBackButton:!0,onBackClick:l,title:n.title,isLoggedIn:!1,onLoginClick:()=>{}}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("img",{src:n.img?(t=n.img).startsWith("//")?"".concat(window.location.protocol).concat(t):t:"/placeholder.svg?height=200&width=200",alt:n.title,className:"w-full h-64 object-cover rounded-lg mb-4"}),(0,a.jsx)("h2",{className:"text-2xl font-bold mb-2",children:n.title}),(0,a.jsx)("p",{className:"text-gray-600 mb-4",children:n.text}),(0,a.jsxs)("button",{onClick:f,className:"flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ".concat(u?"bg-gray-600 hover:bg-gray-700":"bg-red-600 hover:bg-red-700"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"),children:[(0,a.jsx)(m.Z,{className:"w-5 h-5 mr-2 ".concat(u?"fill-current":"")}),u?"取消收藏":"加入收藏"]})]})]}):(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:"未找到文物信息"})},A=e=>{let{onBack:t,onArtifactClick:s}=e,[l,i]=(0,r.useState)([]),[n,c]=(0,r.useState)(!0);(0,r.useEffect)(()=>{(async()=>{try{let e=(await y.get("/user-actions/history")).data,t=await Promise.all(e.map(async e=>{let t=await y.get("/artifacts/search?id=".concat(e.pid));return{id:e.id,pid:e.pid,url:t.data.img,title:t.data.title,timestamp:e.timestamp}}));i(t)}catch(e){console.error("Failed to fetch history:",e),i([])}finally{c(!1)}})()},[]);let o=e=>{s(e)};return(0,a.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,a.jsx)(N,{showBackButton:!0,onBackClick:t,title:"浏览历史",isLoggedIn:!0,onLoginClick:()=>{}}),(0,a.jsx)("div",{className:"p-4",children:n?(0,a.jsx)("p",{className:"text-center text-gray-600",children:"加载中..."}):0===l.length?(0,a.jsx)("p",{className:"text-center text-gray-600",children:"暂无浏览历史"}):(0,a.jsx)("ul",{className:"divide-y divide-gray-200",children:l.map(e=>(0,a.jsx)("li",{className:"py-4 cursor-pointer",onClick:()=>o(e.pid),children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("img",{className:"h-12 w-12 rounded-md",src:e.url,alt:e.title})}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate",children:e.title}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:new Date(e.timestamp).toLocaleString()})]})]})},e.id))})})]})},D=e=>{let{onBack:t,onArtifactClick:s,showToast:l}=e,[i,n]=(0,r.useState)([]),[c,d]=(0,r.useState)(!0),u=(0,r.useCallback)(async()=>{try{let e=(await y.get("/user-actions/favorite")).data,t=await Promise.all(e.map(async e=>{let t=await y.get("/artifacts/search?id=".concat(e.pid));return{id:e.id,pid:e.pid,url:t.data.img,title:t.data.title}}));n(t)}catch(e){console.error("Failed to fetch favorites:",e),l("获取收藏失败","error")}finally{d(!1)}},[l]);(0,r.useEffect)(()=>{u()},[u]);let m=async e=>{try{await y.delete("/user-actions/favorite",{data:{pid:e}}),l("已从收藏中移除","success"),u()}catch(e){console.error("Failed to remove favorite:",e),l("移除收藏失败","error")}};return(0,a.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,a.jsx)(N,{showBackButton:!0,onBackClick:t,title:"我的收藏",isLoggedIn:!0,onLoginClick:()=>{}}),(0,a.jsx)("div",{className:"p-4",children:c?(0,a.jsx)("p",{className:"text-center text-gray-600",children:"加载中..."}):0===i.length?(0,a.jsx)("p",{className:"text-center text-gray-600",children:"暂无收藏"}):(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:i.map(e=>(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"cursor-pointer",onClick:()=>s(e.pid),children:[(0,a.jsx)("img",{src:e.url,alt:e.title,className:"w-full h-40 object-cover rounded-lg"}),(0,a.jsx)("p",{className:"mt-2 text-sm font-medium text-gray-900 truncate",children:e.title})]}),(0,a.jsx)("button",{onClick:()=>m(e.pid),className:"absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:(0,a.jsx)(o.Z,{className:"w-4 h-4"})})]},e.id))})})]})},T=e=>{let{message:t,type:s,onClose:l}=e,[i,n]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{n(!0);let e=setTimeout(()=>{d(!0),setTimeout(l,500)},1500);return()=>clearTimeout(e)},[l]),(0,a.jsx)("div",{className:"\n        fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 rounded-md shadow-md \n        ".concat("success"===s?"bg-green-500":"bg-red-700"," text-white\n        transition-all duration-500 ease-in-out\n        ").concat(i?c?"-translate-y-full opacity-0":"translate-y-0 opacity-100":"-translate-y-full opacity-0","\n      "),children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{children:t}),(0,a.jsx)("button",{onClick:()=>d(!0),className:"ml-2",children:(0,a.jsx)(o.Z,{size:18})})]})})},O=e=>{let{showToast:t}=e,[s,l]=(0,r.useState)(null),[i,n]=(0,r.useState)(null),c=(0,r.useRef)(null),o=(0,r.useRef)(null),d=(0,r.useRef)(null),[u,m]=(0,r.useState)("environment");(0,r.useEffect)(()=>{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:u}}).then(e=>{o.current&&(o.current.srcObject=e)}).catch(e=>console.error("摄像头访问失败:",e))},[u]);let g=async()=>{if(s)try{let e=new FormData,a=await fetch(s).then(e=>e.blob());e.append("file",a,"image.jpg");let r=await fetch("/api/upload",{method:"POST",body:e}),l=await r.json();if("success"==l.message)t("识别成功","success"),n(Array.isArray(l.itemInfo)?l.itemInfo:[]);else if("failed"===l.message){let e="识别失败";switch(l.error){case"no_codebar":e="未识别到条形码";break;case"no_item":e="未检测到物品";break;case"no_access":e="未找到评级信息"}n(null),t(e,"error")}else n(null),t("识别过程出错","error")}catch(e){console.error("识别过程出错:",e),n(null),t("识别过程出错，请重试","error")}};return(0,a.jsxs)("div",{className:"p-4",children:[s?(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("div",{className:"relative w-full pb-[120%] mb-4",children:[" ",(0,a.jsx)("img",{src:s,alt:"Captured",className:"absolute top-0 left-0 w-full h-full object-cover rounded-lg"})]}),(0,a.jsx)("button",{onClick:g,className:"w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700",children:"开始识别"}),i&&i.length>0&&(0,a.jsxs)("div",{className:"mt-4 p-4 bg-gray-100 rounded-lg",children:[(0,a.jsx)("h3",{className:"font-bold mb-2",children:"识别结果："}),(0,a.jsx)("table",{className:"w-full mt-4 border-collapse border border-gray-300",children:(0,a.jsx)("tbody",{children:i.map((e,t)=>(0,a.jsxs)("tr",{className:t%2==0?"bg-gray-50":"bg-white",children:[(0,a.jsx)("td",{className:"border border-gray-300 p-2 font-semibold",children:e.name}),(0,a.jsx)("td",{className:"border border-gray-300 p-2",children:e.value})]},t))})})]}),(0,a.jsx)("button",{onClick:()=>l(null),className:"mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700",children:"重新拍照"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"relative w-full pb-[120%] mb-4",children:(0,a.jsx)("video",{ref:o,autoPlay:!0,playsInline:!0,className:"absolute top-0 left-0 w-full h-full object-cover rounded-lg"})}),(0,a.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,a.jsxs)("button",{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.click()},className:"flex flex-col items-center bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800",children:[(0,a.jsx)(h.Z,{className:"w-6 h-6 mb-1"}),"上传"]}),(0,a.jsxs)("button",{onClick:()=>{if(o.current&&d.current){let e=o.current,t=d.current,s=e.videoWidth,a=1.2*e.videoWidth;a>e.videoHeight&&(a=e.videoHeight,s=e.videoHeight/1.2),t.width=s,t.height=a;let r=t.getContext("2d");if(r){let i=(e.videoWidth-s)/2,n=(e.videoHeight-a)/2;r.drawImage(e,i,n,s,a,0,0,s,a),l(t.toDataURL("image/jpeg"))}}},className:"flex flex-col items-center bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800",children:[(0,a.jsx)(x.Z,{className:"w-6 h-6 mb-1"}),"拍照"]}),(0,a.jsxs)("button",{onClick:()=>{m(e=>"user"===e?"environment":"user")},className:"flex flex-col items-center bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800",children:[(0,a.jsx)(f.Z,{className:"w-6 h-6 mb-1"}),"切换"]}),(0,a.jsx)("input",{type:"file",ref:c,onChange:e=>{var t;let s=null===(t=e.target.files)||void 0===t?void 0:t[0];if(s){let e=new FileReader;e.onload=e=>{var t;let s=new Image;s.onload=()=>{let e=document.createElement("canvas"),t=s.width,a=1.2*s.width;a>s.height&&(a=s.height,t=s.height/1.2),e.width=t,e.height=a;let r=e.getContext("2d");if(r){let i=(s.width-t)/2,n=(s.height-a)/2;r.drawImage(s,i,n,t,a,0,0,t,a),l(e.toDataURL("image/jpeg"))}},s.src=null===(t=e.target)||void 0===t?void 0:t.result},e.readAsDataURL(s)}},accept:"image/*",className:"hidden"})]})]}),(0,a.jsx)("canvas",{ref:d,className:"hidden"})]})};function _(){let[e,t]=(0,r.useState)("机制银币"),[s,l]=(0,r.useState)(["jizhiyinbi","","","","",""]),[i,n]=(0,r.useState)("database"),[c,o]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1),[x,f]=(0,r.useState)(null),[w,v]=(0,r.useState)(null),[E,_]=(0,r.useState)(!1),[P,q]=(0,r.useState)({}),[U,z]=(0,r.useState)([]),[H,M]=(0,r.useState)(!1),[W,G]=(0,r.useState)(1),[J,K]=(0,r.useState)(!0),Q=(0,r.useRef)(null),[V,X]=(0,r.useState)(!1),[Y,$]=(0,r.useState)(null),[ee,et]=(0,r.useState)(!1),[es,ea]=(0,r.useState)({database:["main"],identify:["main"],profile:["main"]}),er=(0,r.useCallback)(e=>{!H&&(Q.current&&Q.current.disconnect(),Q.current=new IntersectionObserver(e=>{e[0].isIntersecting&&J&&G(e=>e+1)}),e&&Q.current.observe(e))},[H,J]),el=(0,r.useCallback)(async()=>{M(!0);try{let e={c0:s[0],c1:s[1],c2:s[2],c3:s[3],c4:s[4],c5:s[5],page:W,limit:10};Object.keys(e).forEach(t=>""===e[t]&&delete e[t]);let t=(await y.get("/artifacts/searchItems",{params:e})).data;z(e=>1===W?t:[...e,...t]),K(10===t.length)}catch(e){console.error("Failed to fetch artifacts:",e)}finally{M(!1)}},[s,W]);(0,r.useEffect)(()=>{el()},[el]);let ei=(0,r.useCallback)(e=>{l(e),G(1),z([]),K(!0)},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("token");e&&en(e)},[]),(0,r.useEffect)(()=>{(async()=>{try{let e=await p.Z.get("/api/artifacts/classification");q(e.data)}catch(e){console.error("Failed to fetch classification:",e)}})()},[]);let en=async e=>{try{let t=await p.Z.get("/api/users/verify",{headers:{Authorization:e}});if(200===t.status&&t.data){let{username:e,id:s}=t.data;o(!0),f({username:e,userRole:s.toString()})}else eo()}catch(e){console.error("登录状态验证失败:",e),eo()}},ec=async(e,t)=>{try{let s=await p.Z.post("/api/users/login",{username:e,password:t});if(200===s.status&&s.data.token){let{token:e,id:t,username:a}=s.data;localStorage.setItem("token",e),o(!0),f({username:a,userRole:t.toString()}),u(!1)}else throw Error(s.data.message||"登录失败")}catch(e){if(console.error("登录失败:",e),p.Z.isAxiosError(e)&&e.response)throw Error(e.response.data.message||"登录失败，请重试");throw Error("登录失败，请重试")}},eo=()=>{o(!1),f(null),localStorage.removeItem("token")},ed=e=>{t(e);let s=[Object.keys(P).find(t=>{var s;return(null===(s=P[t])||void 0===s?void 0:s.unicode)===e})||"","","","","",""];l(s),ei(s)},eu=e=>{v(e),ea(e=>({...e,[i]:[...e[i],"detail"]}))},em=e=>{["database","identify","profile"].includes(e)?(n(e),ea(t=>({...t,[e]:["main"]})),u(!1),h(!1)):ea(t=>({...t,[i]:[...t[i],e]}))},eh=()=>{ea(e=>{let t=e[i];return t.length>1?{...e,[i]:t.slice(0,-1)}:e})},ex=(e,t)=>{$({message:e,type:t})},ef=async(e,t)=>{try{let s=await y.post("/users/register",{username:e,password:t,userRole:"user"});if(200===s.status)ex("注册成功","success"),h(!1),u(!0);else throw Error(s.data.message||"注册失败")}catch(e){if(console.error("注册失败:",e),p.Z.isAxiosError(e)&&e.response)throw Error(e.response.data.message||"册失败，请重试");throw Error("注册失败，请重试")}};return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100 pb-16",children:[(()=>{if(d)return(0,a.jsx)(L,{onLogin:ec,onSwitchToRegister:()=>{u(!1),h(!0)}});if(m)return(0,a.jsx)(R,{onRegister:ef,onSwitchToLogin:()=>{h(!1),u(!0)}});let t=es[i],r=t[t.length-1];switch(i){case"database":switch(r){case"main":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{isLoggedIn:c,onLoginClick:()=>u(!0)}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(k,{activeCategory:e,onCategoryChange:ed,onFilterClick:()=>et(!ee),classification:P}),(0,a.jsx)(C,{isOpen:ee,onClose:()=>et(!1),onFilterChange:ei,classification:P})]}),(0,a.jsx)(I,{filter:s,onArtifactClick:eu,artifacts:U,loading:H,hasMore:J,setPage:G,lastArtifactElementRef:er})]});case"detail":return(0,a.jsx)(B,{pid:w||"",onBack:eh,showToast:ex});default:return null}case"identify":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N,{isLoggedIn:c,onLoginClick:()=>u(!0),title:"文物识别"}),(0,a.jsx)(O,{showToast:ex})]});case"profile":switch(r){case"main":return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,a.jsx)(S,{username:null==x?void 0:x.username,userId:null==x?void 0:x.userRole,isLoggedIn:c,onLoginClick:()=>u(!0)}),(0,a.jsxs)("div",{className:"mt-2 bg-white",children:[(0,a.jsx)(Z,{icon:(0,a.jsx)(g.Z,{className:"w-5 h-5 text-red-700"}),title:"设置",onClick:()=>{},disabled:!c}),(0,a.jsx)(Z,{icon:(0,a.jsx)(b.Z,{className:"w-5 h-5 text-red-700"}),title:"收藏",onClick:()=>c?em("favorites"):ex("请先登录","error"),disabled:!c}),(0,a.jsx)(Z,{icon:(0,a.jsx)(j.Z,{className:"w-5 h-5 text-red-700"}),title:"历史",onClick:()=>c?em("history"):ex("请先登录","error"),disabled:!c}),c&&(0,a.jsx)("button",{onClick:eo,className:"w-full text-left px-4 py-3 text-red-700 font-medium border-t border-gray-200",children:"退出登录"})]})]});case"favorites":return(0,a.jsx)(D,{onBack:eh,onArtifactClick:eu,showToast:ex});case"history":return(0,a.jsx)(A,{onBack:eh,onArtifactClick:eu});case"detail":return(0,a.jsx)(B,{pid:w||"",onBack:eh,showToast:ex});default:return null}default:return null}})(),(0,a.jsx)(F,{activePage:i,onPageChange:em}),Y&&(0,a.jsx)(T,{message:Y.message,type:Y.type,onClose:()=>$(null)})]})}}},function(e){e.O(0,[947,971,117,744],function(){return e(e.s=7181)}),_N_E=e.O()}]);