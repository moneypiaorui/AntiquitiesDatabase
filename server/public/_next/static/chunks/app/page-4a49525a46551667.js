(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7181:function(e,t,s){Promise.resolve().then(s.bind(s,3146))},3146:function(e,t,s){"use strict";s.d(t,{AppComponent:function(){return q}});var a=s(7437),r=s(2265),l=s(2660),i=s(3247),n=s(2369),c=s(740),o=s(2489),d=s(407),u=s(4938),m=s(8997),h=s(7689),x=s(3581),f=s(7168),g=s(8728),b=s(6595),j=s(1723),p=s(3464),w=s(7310),v=s.n(w),y=s(8819);let N=p.Z.create({baseURL:"/api"});N.interceptors.request.use(e=>{let t=localStorage.getItem("token");return t&&(e.headers.Authorization=t),e},e=>Promise.reject(e));let k=e=>e.startsWith("http://")?"/api/proxy/image?url=".concat(encodeURIComponent(e)):e,C=e=>{let{isLoggedIn:t,onLoginClick:s,showBackButton:r=!1,onBackClick:c,title:o="文物数据库"}=e;return(0,a.jsxs)("header",{className:"flex justify-between items-center p-4 bg-white border-b border-gray-200",children:[r?(0,a.jsx)("button",{onClick:c,className:"text-red-700",children:(0,a.jsx)(l.Z,{className:"w-6 h-6"})}):(0,a.jsx)("h1",{className:"text-xl font-bold text-gray-800",children:o}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("button",{className:"text-red-700 mr-4",children:(0,a.jsx)(i.Z,{className:"w-6 h-6"})}),!t&&(0,a.jsx)("button",{onClick:s,className:"text-red-700",children:(0,a.jsx)(n.Z,{className:"w-6 h-6"})})]})]})},S=e=>{let{activeCategory:t,onCategoryChange:s,onFilterClick:r,classification:l}=e,i=["古币","珍宝","陶瓷","书画"],n=Object.values(l).map(e=>e.unicode),o=n.length>=i.length?n:[...n,...i.slice(n.length)];return(0,a.jsxs)("nav",{className:"flex items-center p-2 bg-white border-b border-gray-200",children:[(0,a.jsx)("button",{className:"p-2 text-red-700 mr-2",onClick:r,children:(0,a.jsx)(c.Z,{className:"w-6 h-6"})}),(0,a.jsx)("div",{className:"flex overflow-x-auto whitespace-nowrap",children:o.map(e=>(0,a.jsx)("button",{className:"px-3 py-2 text-sm font-medium ".concat(e===t?"text-red-700 border-b-2 border-red-700":"text-gray-600"),onClick:()=>s(e),children:e},e))})]})},E=e=>{let t,{isOpen:s,onClose:l,onFilterChange:i,classification:n}=e,[c,d]=(0,r.useState)(0),[u,m]=(0,r.useState)(["","","","","",""]);(0,r.useEffect)(()=>{s&&(d(0),m(["","","","","",""]))},[s]);let h=(e,t)=>{let s=[...u];s[t]=e,s.fill("",t+1),m(s),i(s);let a=n;for(let e=0;e<=t;e++)if(a[s[e]])a=a[s[e]].childs;else{a={};break}0===Object.keys(a).length||5===t?l():d(t+1)};return s?(0,a.jsxs)("div",{className:"absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-64 z-50",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h2",{className:"text-lg font-bold",children:"筛选"}),(0,a.jsx)("button",{onClick:l,children:(0,a.jsx)(o.Z,{className:"w-5 h-5"})})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-700 mb-2",children:(t=n,u.filter(Boolean).map((e,s)=>{var a,r;let l=(null===(a=t[e])||void 0===a?void 0:a.unicode)||"";return t=(null===(r=t[e])||void 0===r?void 0:r.childs)||{},l}).join(" - "))}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:(()=>{let e=n;for(let t=0;t<c;t++){if(!e[u[t]])return null;e=e[u[t]].childs}return Object.entries(e).map(e=>{let[t,s]=e;return(0,a.jsx)("button",{className:"px-3 py-1 text-sm text-gray-700 hover:bg-red-50 rounded",onClick:()=>h(t,c),children:s.unicode},t)})})()})]})]}):null},Z=e=>{let{username:t,userId:s,isLoggedIn:r,onLoginClick:l}=e;return(0,a.jsx)("div",{className:"relative h-48 bg-gradient-to-b from-red-700 to-red-800 flex items-end",children:(0,a.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 flex items-end p-4",children:[(0,a.jsx)("div",{className:"w-16 h-16 rounded-full bg-white border-4 border-white overflow-hidden",children:r?(0,a.jsx)("img",{src:"http://ui-avatars.com/api/?name=".concat(encodeURIComponent(t||"")),alt:"Profile",className:"w-full h-full object-cover"}):(0,a.jsx)(n.Z,{className:"w-full h-full text-gray-400"})}),(0,a.jsx)("div",{className:"ml-4 mb-1 flex-grow",children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-white",children:t}),(0,a.jsxs)("p",{className:"text-xs text-red-100",children:["用户ID: ",s]})]}):(0,a.jsx)("button",{onClick:l,className:"px-4 py-2 bg-white text-red-700 rounded-full font-medium",children:"请登录"})})]})})},I=e=>{let{icon:t,title:s,onClick:r,disabled:l=!1}=e;return(0,a.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-gray-200 ".concat(l?"opacity-50 cursor-not-allowed":"cursor-pointer"),onClick:l?void 0:r,children:[(0,a.jsxs)("div",{className:"flex items-center",children:[t,(0,a.jsx)("span",{className:"ml-4 text-gray-700",children:s})]}),(0,a.jsx)(d.Z,{className:"w-5 h-5 text-gray-400"})]})},F=e=>{let{id:t,image:s,title:r,subtitle:l,onClick:i}=e;return(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden cursor-pointer",onClick:()=>i(t),children:[(0,a.jsx)("div",{className:"aspect-square bg-gray-200 mb-2",children:(0,a.jsx)("img",{src:k(s)||"/placeholder.svg?height=200&width=200",alt:r,className:"w-full h-full object-cover"})}),(0,a.jsxs)("div",{className:"p-2",children:[(0,a.jsx)("h3",{className:"text-sm font-medium truncate text-gray-800",children:r}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:l})]})]})},L=e=>{let{filter:t,onArtifactClick:s,artifacts:l,loading:i,hasMore:n,fetchMore:c}=e,{ref:o,inView:d}=(0,y.YD)({threshold:0});return(0,r.useEffect)(()=>{d&&!i&&n&&c()},[d,i,n,c]),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 p-4",children:[l.map((e,t)=>(0,a.jsx)(F,{id:e.pid,image:e.url,title:e.title,subtitle:"",onClick:s},e.pid)),i&&(0,a.jsx)("p",{className:"col-span-2 text-center text-gray-500",children:"加载中..."}),!i&&n&&(0,a.jsx)("div",{ref:o,className:"col-span-2 h-10"}),!n&&l.length>0&&(0,a.jsx)("p",{className:"col-span-2 text-center text-gray-500",children:"没有更多数据了"}),!i&&0===l.length&&(0,a.jsx)("p",{className:"col-span-2 text-center text-gray-500",children:"没有找到相关文物"})]})},R=e=>{let{activePage:t,onPageChange:s}=e;return(0,a.jsxs)("nav",{className:"fixed bottom-0 left-0 right-0 flex justify-around items-end bg-white border-t border-gray-200 p-2",children:[(0,a.jsxs)("button",{className:"flex flex-col items-center ".concat("database"===t?"text-red-700":"text-gray-600"),onClick:()=>s("database"),children:[(0,a.jsx)(u.Z,{className:"w-6 h-6"}),(0,a.jsx)("span",{className:"text-xs",children:"数据库"})]}),(0,a.jsx)("button",{className:"flex flex-col items-center relative -top-2",onClick:()=>s("identify"),children:(0,a.jsx)("div",{className:"w-[70px] h-[70px] rounded-full bg-red-700 flex items-center justify-center text-white absolute bottom-0",children:"识别"})}),(0,a.jsxs)("button",{className:"flex flex-col items-center ".concat("profile"===t?"text-red-700":"text-gray-600"),onClick:()=>s("profile"),children:[(0,a.jsx)(n.Z,{className:"w-6 h-6"}),(0,a.jsx)("span",{className:"text-xs",children:"我的"})]})]})},B=e=>{let{onLogin:t,onSwitchToRegister:s}=e,[l,i]=(0,r.useState)(""),[n,c]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(""),h=async e=>{e.preventDefault(),d(""),m("");try{await t(l,n),m("登录成功"),setTimeout(()=>m(""),500)}catch(e){d(e instanceof Error?e.message:"登录失败，请重试")}};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,a.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md w-96",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-center",children:"登录"}),o&&(0,a.jsx)("p",{className:"text-red-500 text-sm mb-4 animate-fade-in",children:o}),u&&(0,a.jsx)("p",{className:"text-green-500 text-sm mb-4 animate-fade-in",children:u}),(0,a.jsxs)("form",{onSubmit:h,className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"用户名"}),(0,a.jsx)("input",{type:"text",id:"username",value:l,onChange:e=>i(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"密码"}),(0,a.jsx)("input",{type:"password",id:"password",value:n,onChange:e=>c(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"登录"})]}),(0,a.jsx)("div",{className:"mt-4 text-center",children:(0,a.jsx)("button",{onClick:s,className:"text-sm text-red-600 hover:text-red-500",children:"还没有账号？注册"})})]})})},D=e=>{let{onRegister:t,onSwitchToLogin:s}=e,[l,i]=(0,r.useState)(""),[n,c]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),f=async e=>{if(e.preventDefault(),m(""),x(""),n!==o){m("密码不匹配");return}try{await t(l,n),x("注册成功"),setTimeout(()=>x(""),500)}catch(e){m(e instanceof Error?e.message:"注册失败，请重试")}};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,a.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md w-96",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-6 text-center",children:"注册"}),u&&(0,a.jsx)("p",{className:"text-red-500 text-sm mb-4 animate-fade-in",children:u}),h&&(0,a.jsx)("p",{className:"text-green-500 text-sm mb-4 animate-fade-in",children:h}),(0,a.jsxs)("form",{onSubmit:f,className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:"用户"}),(0,a.jsx)("input",{type:"text",id:"username",value:l,onChange:e=>i(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"密码"}),(0,a.jsx)("input",{type:"password",id:"password",value:n,onChange:e=>c(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"r_password",className:"block text-sm font-medium text-gray-700",children:"确认密码"}),(0,a.jsx)("input",{type:"password",id:"r_password",value:o,onChange:e=>d(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"注册"})]}),(0,a.jsx)("div",{className:"mt-4 text-center",children:(0,a.jsx)("button",{onClick:s,className:"text-sm text-red-600 hover:text-red-500",children:"已有账号？登录"})})]})})},A=e=>{let{pid:t,onBack:s,showToast:l}=e,[i,n]=(0,r.useState)(null),[c,o]=(0,r.useState)(!0),[d,u]=(0,r.useState)(!1),h=(0,r.useCallback)(v()(async e=>{let t=localStorage.getItem("token");if(t)try{await p.Z.post("/api/user-actions/record",{pid:e,timestamp:Date.now()},{headers:{Authorization:t}})}catch(e){console.error("Failed to record history:",e)}},1e3),[]);(0,r.useEffect)(()=>{(async()=>{try{let e=(await p.Z.get("/api/artifacts/search?id=".concat(t))).data;n(e),h(t);let s=(await N.get("/user-actions/favorite")).data;console.log(s.some(e=>e.pid==t)),u(s.some(e=>e.pid==t))}catch(e){console.error("Failed to fetch artifact details:",e)}finally{o(!1)}})()},[t,h]);let x=async()=>{try{d?(await N.delete("/user-actions/favorite",{data:{pid:t}}),u(!1),l("已取消收藏","success")):(await N.post("/user-actions/favorite",{pid:t}),u(!0),l("已添加到收藏","success"))}catch(e){console.error("Failed to update favorite:",e),l("操作失败，请重试","error")}};return c?(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:"加载中..."}):i?(0,a.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,a.jsx)(C,{showBackButton:!0,onBackClick:s,title:i.title,isLoggedIn:!1,onLoginClick:()=>{}}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("img",{src:k(i.img)||"/placeholder.svg?height=200&width=200",alt:i.title,className:"w-full h-64 object-cover rounded-lg mb-4"}),(0,a.jsx)("h2",{className:"text-2xl font-bold mb-2",children:i.title}),(0,a.jsx)("p",{className:"text-gray-600 mb-4",children:i.text}),(0,a.jsxs)("button",{onClick:x,className:"flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ".concat(d?"bg-gray-600 hover:bg-gray-700":"bg-red-600 hover:bg-red-700"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"),children:[(0,a.jsx)(m.Z,{className:"w-5 h-5 mr-2 ".concat(d?"fill-current":"")}),d?"取消收藏":"加入收藏"]})]})]}):(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:"未找到文物信息"})},T=e=>{let{onBack:t,onArtifactClick:s}=e,[l,i]=(0,r.useState)([]),[n,c]=(0,r.useState)(!0),[o,d]=(0,r.useState)(1),[u,m]=(0,r.useState)(!0),{ref:h,inView:x}=(0,y.YD)({threshold:0}),f=(0,r.useCallback)(async()=>{if(u){c(!0);try{let e=(await N.get("/user-actions/history?page=".concat(o,"&limit=20"))).data;0===e.length?m(!1):(i(t=>[...t,...e]),d(e=>e+1))}catch(e){console.error("Failed to fetch history:",e)}finally{c(!1)}}},[o,u]);(0,r.useEffect)(()=>{f()},[f]),(0,r.useEffect)(()=>{x&&f()},[x,f]);let g=e=>{s(e)};return(0,a.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,a.jsx)(C,{showBackButton:!0,onBackClick:t,title:"浏览历史",isLoggedIn:!0,onLoginClick:()=>{}}),(0,a.jsxs)("div",{className:"p-4",children:[0!==l.length||n?(0,a.jsx)("ul",{className:"divide-y divide-gray-200",children:l.map(e=>(0,a.jsx)("li",{className:"py-4 cursor-pointer",onClick:()=>g(e.pid),children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("img",{className:"h-12 w-12 rounded-md",src:e.url,alt:e.title})}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate",children:e.title}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:new Date(e.timestamp).toLocaleString()})]})]})},e.id))}):(0,a.jsx)("p",{className:"text-center text-gray-600",children:"暂无浏览历史"}),n&&(0,a.jsx)("p",{className:"text-center text-gray-600 mt-4",children:"加载中..."}),!n&&u&&(0,a.jsx)("div",{ref:h,className:"h-10"})]})]})},O=e=>{let{onBack:t,onArtifactClick:s,showToast:l}=e,[i,n]=(0,r.useState)([]),[c,o]=(0,r.useState)(!0),[d,u]=(0,r.useState)(1),[m,h]=(0,r.useState)(!0),x=(0,r.useCallback)(async()=>{if(m){o(!0);try{let e=(await N.get("/user-actions/favorite?page=".concat(d,"&limit=20"))).data;0===e.length?h(!1):(n(t=>[...t,...e]),u(e=>e+1))}catch(e){console.error("Failed to fetch favorites:",e),l("获取收藏失败","error")}finally{o(!1)}}},[d,m,l]);return(0,r.useEffect)(()=>{x()},[x]),(0,a.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,a.jsx)(C,{showBackButton:!0,onBackClick:t,title:"我的收藏",isLoggedIn:!0,onLoginClick:()=>{}}),(0,a.jsx)(L,{filter:[],onArtifactClick:s,artifacts:i,loading:c,hasMore:m,fetchMore:x})]})},_=e=>{let{message:t,type:s,onClose:l}=e,[i,n]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{n(!0);let e=setTimeout(()=>{d(!0),setTimeout(l,500)},1500);return()=>clearTimeout(e)},[l]),(0,a.jsx)("div",{className:"\n        fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 rounded-md shadow-md \n        ".concat("success"===s?"bg-green-500":"bg-red-700"," text-white\n        transition-all duration-500 ease-in-out\n        ").concat(i?c?"-translate-y-full opacity-0":"translate-y-0 opacity-100":"-translate-y-full opacity-0","\n      "),children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{children:t}),(0,a.jsx)("button",{onClick:()=>d(!0),className:"ml-2",children:(0,a.jsx)(o.Z,{size:18})})]})})},U=e=>{let{showToast:t}=e,[s,l]=(0,r.useState)(null),[i,n]=(0,r.useState)(null),c=(0,r.useRef)(null),o=(0,r.useRef)(null),d=(0,r.useRef)(null),[u,m]=(0,r.useState)("environment");(0,r.useEffect)(()=>{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:u}}).then(e=>{o.current&&(o.current.srcObject=e)}).catch(e=>console.error("摄像头访问失败:",e))},[u]);let g=async()=>{if(s)try{let e=new FormData,a=await fetch(s).then(e=>e.blob());e.append("file",a,"image.jpg");let r=await fetch("/api/upload",{method:"POST",body:e}),l=await r.json();if("success"==l.message)t("识别成功","success"),n(Array.isArray(l.itemInfo)?l.itemInfo:[]);else if("failed"===l.message){let e="识别失败";switch(l.error){case"no_codebar":e="未识别到条形码";break;case"no_item":e="未检测到物品";break;case"no_access":e="未找到评级信息"}n(null),t(e,"error")}else n(null),t("识别过程出错","error")}catch(e){console.error("识别过程出错:",e),n(null),t("识别过程出错，请重试","error")}};return(0,a.jsxs)("div",{className:"p-4",children:[s?(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("div",{className:"relative w-full pb-[120%] mb-4",children:[" ",(0,a.jsx)("img",{src:s,alt:"Captured",className:"absolute top-0 left-0 w-full h-full object-cover rounded-lg"})]}),(0,a.jsx)("button",{onClick:g,className:"w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700",children:"开始识别"}),i&&i.length>0&&(0,a.jsxs)("div",{className:"mt-4 p-4 bg-gray-100 rounded-lg",children:[(0,a.jsx)("h3",{className:"font-bold mb-2",children:"识别结果："}),(0,a.jsx)("table",{className:"w-full mt-4 border-collapse border border-gray-300",children:(0,a.jsx)("tbody",{children:i.map((e,t)=>(0,a.jsxs)("tr",{className:t%2==0?"bg-gray-50":"bg-white",children:[(0,a.jsx)("td",{className:"border border-gray-300 p-2 font-semibold",children:e.name}),(0,a.jsx)("td",{className:"border border-gray-300 p-2",children:e.value})]},t))})})]}),(0,a.jsx)("button",{onClick:()=>l(null),className:"mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700",children:"重新拍照"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"relative w-full pb-[120%] mb-4",children:(0,a.jsx)("video",{ref:o,autoPlay:!0,playsInline:!0,className:"absolute top-0 left-0 w-full h-full object-cover rounded-lg"})}),(0,a.jsxs)("div",{className:"flex justify-around mb-4",children:[(0,a.jsxs)("button",{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.click()},className:"flex flex-col items-center bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800",children:[(0,a.jsx)(h.Z,{className:"w-6 h-6 mb-1"}),"上传"]}),(0,a.jsxs)("button",{onClick:()=>{if(o.current&&d.current){let e=o.current,t=d.current,s=e.videoWidth,a=1.2*e.videoWidth;a>e.videoHeight&&(a=e.videoHeight,s=e.videoHeight/1.2),t.width=s,t.height=a;let r=t.getContext("2d");if(r){let i=(e.videoWidth-s)/2,n=(e.videoHeight-a)/2;r.drawImage(e,i,n,s,a,0,0,s,a),l(t.toDataURL("image/jpeg"))}}},className:"flex flex-col items-center bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800",children:[(0,a.jsx)(x.Z,{className:"w-6 h-6 mb-1"}),"拍照"]}),(0,a.jsxs)("button",{onClick:()=>{m(e=>"user"===e?"environment":"user")},className:"flex flex-col items-center bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800",children:[(0,a.jsx)(f.Z,{className:"w-6 h-6 mb-1"}),"切换"]}),(0,a.jsx)("input",{type:"file",ref:c,onChange:e=>{var t;let s=null===(t=e.target.files)||void 0===t?void 0:t[0];if(s){let e=new FileReader;e.onload=e=>{var t;let s=new Image;s.onload=()=>{let e=document.createElement("canvas"),t=s.width,a=1.2*s.width;a>s.height&&(a=s.height,t=s.height/1.2),e.width=t,e.height=a;let r=e.getContext("2d");if(r){let i=(s.width-t)/2,n=(s.height-a)/2;r.drawImage(s,i,n,t,a,0,0,t,a),l(e.toDataURL("image/jpeg"))}},s.src=null===(t=e.target)||void 0===t?void 0:t.result},e.readAsDataURL(s)}},accept:"image/*",className:"hidden"})]})]}),(0,a.jsx)("canvas",{ref:d,className:"hidden"})]})};function q(){let[e,t]=(0,r.useState)("机制银币"),[s,l]=(0,r.useState)(["jizhiyinbi","","","","",""]),[i,n]=(0,r.useState)("database"),[c,o]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1),[x,f]=(0,r.useState)(null),[w,v]=(0,r.useState)(null),[y,k]=(0,r.useState)(!1),[F,q]=(0,r.useState)({}),[M,P]=(0,r.useState)([]),[z,H]=(0,r.useState)(!1),[W,Y]=(0,r.useState)(1),[G,J]=(0,r.useState)(!0),K=(0,r.useRef)(null),[Q,V]=(0,r.useState)(!1),[X,$]=(0,r.useState)(null),[ee,et]=(0,r.useState)(!1),[es,ea]=(0,r.useState)({database:["main"],identify:["main"],profile:["main"]});(0,r.useCallback)(e=>{!z&&(K.current&&K.current.disconnect(),K.current=new IntersectionObserver(e=>{e[0].isIntersecting&&G&&Y(e=>e+1)}),e&&K.current.observe(e))},[z,G]);let er=(0,r.useCallback)(async()=>{if(G){H(!0);try{let e={c0:s[0],c1:s[1],c2:s[2],c3:s[3],c4:s[4],c5:s[5],page:W,limit:20};Object.keys(e).forEach(t=>""===e[t]&&delete e[t]);let t=(await N.get("/artifacts/searchItems",{params:e})).data;0===t.length?J(!1):(P(e=>[...e,...t]),Y(e=>e+1))}catch(e){console.error("Failed to fetch artifacts:",e)}finally{H(!1)}}},[s,W,G]);(0,r.useEffect)(()=>{er()},[er]);let el=(0,r.useCallback)(e=>{l(e),Y(1),P([]),J(!0)},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("token");e&&ei(e)},[]),(0,r.useEffect)(()=>{(async()=>{try{let e=await p.Z.get("/api/artifacts/classification");q(e.data)}catch(e){console.error("Failed to fetch classification:",e)}})()},[]);let ei=async e=>{try{let t=await p.Z.get("/api/users/verify",{headers:{Authorization:e}});if(200===t.status&&t.data){let{username:e,id:s}=t.data;o(!0),f({username:e,userRole:s.toString()})}else ec()}catch(e){console.error("登录状态验证失败:",e),ec()}},en=async(e,t)=>{try{let s=await p.Z.post("/api/users/login",{username:e,password:t});if(200===s.status&&s.data.token){let{token:e,id:t,username:a}=s.data;localStorage.setItem("token",e),o(!0),f({username:a,userRole:t.toString()}),u(!1)}else throw Error(s.data.message||"登录失败")}catch(e){if(console.error("登录失败:",e),p.Z.isAxiosError(e)&&e.response)throw Error(e.response.data.message||"登录失败，请重试");throw Error("登录失败，请重试")}},ec=()=>{o(!1),f(null),localStorage.removeItem("token")},eo=e=>{t(e);let s=[Object.keys(F).find(t=>{var s;return(null===(s=F[t])||void 0===s?void 0:s.unicode)===e})||"","","","","",""];l(s),el(s)},ed=e=>{v(e),ea(e=>({...e,[i]:[...e[i],"detail"]}))},eu=e=>{["database","identify","profile"].includes(e)?(n(e),ea(t=>({...t,[e]:["main"]})),u(!1),h(!1)):ea(t=>({...t,[i]:[...t[i],e]}))},em=()=>{ea(e=>{let t=e[i];return t.length>1?{...e,[i]:t.slice(0,-1)}:e})},eh=(e,t)=>{$({message:e,type:t})},ex=async(e,t)=>{try{let s=await N.post("/users/register",{username:e,password:t,userRole:"user"});if(200===s.status)eh("注册成功","success"),h(!1),u(!0);else throw Error(s.data.message||"注册失败")}catch(e){if(console.error("注册失败:",e),p.Z.isAxiosError(e)&&e.response)throw Error(e.response.data.message||"册失败，请重试");throw Error("注册失败，请重试")}};return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100 pb-16",children:[(()=>{if(d)return(0,a.jsx)(B,{onLogin:en,onSwitchToRegister:()=>{u(!1),h(!0)}});if(m)return(0,a.jsx)(D,{onRegister:ex,onSwitchToLogin:()=>{h(!1),u(!0)}});let t=es[i],r=t[t.length-1];switch(i){case"database":switch(r){case"main":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{isLoggedIn:c,onLoginClick:()=>u(!0)}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(S,{activeCategory:e,onCategoryChange:eo,onFilterClick:()=>et(!ee),classification:F}),(0,a.jsx)(E,{isOpen:ee,onClose:()=>et(!1),onFilterChange:el,classification:F})]}),(0,a.jsx)(L,{filter:s,onArtifactClick:ed,artifacts:M,loading:z,hasMore:G,fetchMore:er})]});case"detail":return(0,a.jsx)(A,{pid:w||"",onBack:em,showToast:eh});default:return null}case"identify":return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{isLoggedIn:c,onLoginClick:()=>u(!0),title:"文物识别"}),(0,a.jsx)(U,{showToast:eh})]});case"profile":switch(r){case"main":return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,a.jsx)(Z,{username:null==x?void 0:x.username,userId:null==x?void 0:x.userRole,isLoggedIn:c,onLoginClick:()=>u(!0)}),(0,a.jsxs)("div",{className:"mt-2 bg-white",children:[(0,a.jsx)(I,{icon:(0,a.jsx)(g.Z,{className:"w-5 h-5 text-red-700"}),title:"设置",onClick:()=>{},disabled:!c}),(0,a.jsx)(I,{icon:(0,a.jsx)(b.Z,{className:"w-5 h-5 text-red-700"}),title:"收藏",onClick:()=>c?eu("favorites"):eh("请先登录","error"),disabled:!c}),(0,a.jsx)(I,{icon:(0,a.jsx)(j.Z,{className:"w-5 h-5 text-red-700"}),title:"历史",onClick:()=>c?eu("history"):eh("请先登录","error"),disabled:!c}),c&&(0,a.jsx)("button",{onClick:ec,className:"w-full text-left px-4 py-3 text-red-700 font-medium border-t border-gray-200",children:"退出登录"})]})]});case"favorites":return(0,a.jsx)(O,{onBack:em,onArtifactClick:ed,showToast:eh});case"history":return(0,a.jsx)(T,{onBack:em,onArtifactClick:ed});case"detail":return(0,a.jsx)(A,{pid:w||"",onBack:em,showToast:eh});default:return null}default:return null}})(),(0,a.jsx)(R,{activePage:i,onPageChange:eu}),X&&(0,a.jsx)(_,{message:X.message,type:X.type,onClose:()=>$(null)})]})}}},function(e){e.O(0,[388,971,117,744],function(){return e(e.s=7181)}),_N_E=e.O()}]);