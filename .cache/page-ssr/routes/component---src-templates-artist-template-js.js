"use strict";
exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/node_modules/react/index.js"
var index_js_ = __webpack_require__(3196);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(6718);
;// CONCATENATED MODULE: ./src/components/GlobalStyles.js
const GlobalStyles=(0,styled_components_esm.createGlobalStyle)(["*{box-sizing:border-box;margin:0;padding:0;font-family:'Montserrat',sans-serif;}"]);const Container=styled_components_esm["default"].div.withConfig({displayName:"GlobalStyles__Container",componentId:"sc-1rl8g1q-0"})(["z-index:1;width:100%;max-width:1300px;margin-right:auto;margin-left:auto;padding-right:50px;padding-left:50px;@media screen and (max-width:991px){padding-right:30px;padding-left:30px;}"]);// export const Container = styled.div`
//   width: 100%;
//   background-color: transparent;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 50px;
//   @media screen and (max-width: 960px) {
//     padding: 0 30px;
//   }
// `;
/* harmony default export */ const components_GlobalStyles = (GlobalStyles);
;// CONCATENATED MODULE: ./src/components/Layout.js
//import NavBar from "../components/NavBar";
const theme={color:{text:"black",background:"white"},fonts:{header:"Montserrat",body:"Inter"}};//aca agrego fonts, colors, etc todo lo que va a usar la pag
function Layout({children}){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(styled_components_esm.ThemeProvider,{theme:theme},/*#__PURE__*/index_js_default().createElement(components_GlobalStyles,null),children));}

/***/ }),

/***/ 2729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/node_modules/react/index.js"
var index_js_ = __webpack_require__(3196);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(6718);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/assets/images/rummel-negro.png
/* harmony default export */ const rummel_negro = ("/static/rummel-negro-133447d31c50293d5e38bbf38eb74893.png");
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(6893);
// EXTERNAL MODULE: ./node_modules/react-icons/lib/esm/index.js + 3 modules
var esm = __webpack_require__(4405);
;// CONCATENATED MODULE: ./src/components/NavBar.js
//STYLES
const Nav=styled_components_esm["default"].nav.withConfig({displayName:"NavBar__Nav",componentId:"sc-1lxpegy-0"})(["z-index:999;position:absolute;top:0;left:0;width:100%;display:flex;justify-content:space-between;align-items:center;padding-right:100px;padding-left:50px;@media screen and (max-width:960px){padding-left:20px;transition:0.8s all ease;}"]);const NavLogo=(0,styled_components_esm["default"])(gatsby_browser_entry.Link).withConfig({displayName:"NavBar__NavLogo",componentId:"sc-1lxpegy-1"})(["justify-self:flex-start;cursor:pointer;text-decoration:none;font-size:2rem;display:flex;align-items:center;z-index:50;margin-left:3rem;"]);const NavIcon=styled_components_esm["default"].img.withConfig({displayName:"NavBar__NavIcon",componentId:"sc-1lxpegy-2"})(["margin-right:0 0.5rem;width:9rem;"]);const MobileIcon=styled_components_esm["default"].div.withConfig({displayName:"NavBar__MobileIcon",componentId:"sc-1lxpegy-3"})(["display:none;z-index:50;@media screen and (max-width:960px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,60%);font-size:1.8rem;cursor:pointer;}"]);const NavMenu=styled_components_esm["default"].ul.withConfig({displayName:"NavBar__NavMenu",componentId:"sc-1lxpegy-4"})(["display:flex;align-items:center;list-style:none;text-align:center;width:100%;@media screen and (max-width:960px){flex-direction:column;width:100%;height:50vh;position:fixed;padding-top:30%;top:0;left:0;opacity:",";visibility:",";transform:translateY(",");transition:opacity 0.5s ease;background-color:rgb(255,255,255);}> li:first-child{margin-left:auto;}"],({click})=>click?1:0,({click})=>click?"visible":"hidden",({click})=>click?"0":"-10px");const NavItem=styled_components_esm["default"].li.withConfig({displayName:"NavBar__NavItem",componentId:"sc-1lxpegy-5"})(["height:80px;cursor:pointer;@media screen and (max-width:960px){width:100%;&:hover{border:none;}}"]);const NavLinks=(0,styled_components_esm["default"])(gatsby_browser_entry.Link).withConfig({displayName:"NavBar__NavLinks",componentId:"sc-1lxpegy-6"})(["color:black;display:flex;font-weight:500;align-items:center;text-decoration:none;padding:0.5rem 1rem;height:100%;&:hover{color:rgb(105,105,105);transition:all 0.3s ease;}@media screen and (max-width:960px){text-align:center;padding:2rem;width:100%;display:table;&:hover{color:rgb(105,105,105);transition:all 0.3s ease;}}"]);//DATA
const data=[{to:"/roaster",text:"ROASTER",id:"roaster"},{to:"/music",text:"MUSIC",id:"music"}];function Navbar(){const{0:click,1:setClick}=(0,index_js_.useState)(false);const{0:scroll,1:setScroll}=(0,index_js_.useState)(false);const handleClick=()=>{setClick(!click);};const closeMobileMenu=()=>{setClick(false);};const changeNav=()=>{if(window.scrollY>=80){setScroll(true);}else{setScroll(false);}};(0,index_js_.useEffect)(()=>{changeNav();window.addEventListener("scroll",changeNav);},[]);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(esm/* IconContext */.Pd.Provider,{value:{color:"#131313"}},/*#__PURE__*/index_js_default().createElement(Nav,{active:scroll,click:click},/*#__PURE__*/index_js_default().createElement(NavLogo,{to:"/",onClick:closeMobileMenu},/*#__PURE__*/index_js_default().createElement(NavIcon,{src:rummel_negro,alt:"logo"})),/*#__PURE__*/index_js_default().createElement(MobileIcon,{onClick:handleClick},click?/*#__PURE__*/index_js_default().createElement(index_esm/* FiX */.q5L,null):/*#__PURE__*/index_js_default().createElement(index_esm/* FiMenu */.cur,null)),/*#__PURE__*/index_js_default().createElement(NavMenu,{onClick:handleClick,click:click},data.map((el,index)=>/*#__PURE__*/index_js_default().createElement(NavItem,{key:index},/*#__PURE__*/index_js_default().createElement(NavLinks,{to:el.to},el.text)))))));}

/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ templates_artistTemplate)
});

// EXTERNAL MODULE: external "/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/node_modules/react/index.js"
var index_js_ = __webpack_require__(3196);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js + 1 modules
var Layout = __webpack_require__(603);
// EXTERNAL MODULE: ./src/components/NavBar.js + 1 modules
var NavBar = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(6718);
;// CONCATENATED MODULE: ./src/assets/images/gonCover.jpg
/* harmony default export */ const gonCover = ("/static/gonCover-b0e9550335af3b3aa5f806baf4c605cb.jpg");
;// CONCATENATED MODULE: ./src/components/Artist.js
//import NameSlider from "../components/NameSlider";
const Wrapper=styled_components_esm["default"].div.withConfig({displayName:"Artist__Wrapper",componentId:"sc-7xdj6k-0"})(["height:100vh;display:flex;flex-wrap:nowrap;overflow-x:hidden;position:relative;"]);const Slide=styled_components_esm["default"].div.withConfig({displayName:"Artist__Slide",componentId:"sc-7xdj6k-1"})(["height:100%;width:100vw;flex-shrink:0;background-position:center;background-size:cover;"]);const Gradient=styled_components_esm["default"].div.withConfig({displayName:"Artist__Gradient",componentId:"sc-7xdj6k-2"})(["width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,0.6);"]);const Container=styled_components_esm["default"].div.withConfig({displayName:"Artist__Container",componentId:"sc-7xdj6k-3"})(["display:flex;justify-content:center;align-items:center;height:100vh;@media (max-width:768px){height:100vh;padding:20px;}"]);const Left=styled_components_esm["default"].div.withConfig({displayName:"Artist__Left",componentId:"sc-7xdj6k-4"})(["width:60%;display:flex;flex-direction:column;align-items:center;justify-content:center;@media only screen and (max-width:480px){width:100%;height:100%;}"]);const Title=styled_components_esm["default"].h1.withConfig({displayName:"Artist__Title",componentId:"sc-7xdj6k-5"})(["width:100%;font-size:20px;background-color:white;@media only screen and (max-width:480px){width:100%;font-size:50px;}"]);const Desc=styled_components_esm["default"].p.withConfig({displayName:"Artist__Desc",componentId:"sc-7xdj6k-6"})(["width:60%;font-size:20px;margin-top:20px;@media only screen and (max-width:480px){width:100%;}"]);const Info=styled_components_esm["default"].div.withConfig({displayName:"Artist__Info",componentId:"sc-7xdj6k-7"})(["width:60%;margin-top:50px;display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:480px){width:100%;flex-direction:column;}"]);const Button=styled_components_esm["default"].button.withConfig({displayName:"Artist__Button",componentId:"sc-7xdj6k-8"})(["border-radius:4px;background:white;white-space:nowrap;padding:10px 20px;font-size:16px;color:black;outline:none;border:solid white;cursor:pointer;overflow:hidden;position:relative;&:hover{transition:0.3s ease;background-color:black;border:solid black;color:white;}"]);const Contact=styled_components_esm["default"].div.withConfig({displayName:"Artist__Contact",componentId:"sc-7xdj6k-9"})(["display:flex;flex-direction:column;"]);const Phone=styled_components_esm["default"].span.withConfig({displayName:"Artist__Phone",componentId:"sc-7xdj6k-10"})(["color:#f0667d;font-weight:bold;"]);const ContactText=styled_components_esm["default"].span.withConfig({displayName:"Artist__ContactText",componentId:"sc-7xdj6k-11"})(["color:gray;margin-top:5px;"]);const Right=styled_components_esm["default"].div.withConfig({displayName:"Artist__Right",componentId:"sc-7xdj6k-12"})(["width:10%;height:3vh;position:relative;@media only screen and (max-width:480px){display:none;}"]);const Image=styled_components_esm["default"].img.withConfig({displayName:"Artist__Image",componentId:"sc-7xdj6k-13"})(["width:100%;height:auto;"]);const Text=styled_components_esm["default"].h1.withConfig({displayName:"Artist__Text",componentId:"sc-7xdj6k-14"})(["color:white;"]);const Artist=()=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Wrapper,null,/*#__PURE__*/index_js_default().createElement(Gradient,null),/*#__PURE__*/index_js_default().createElement(Slide,{style:{backgroundImage:`url(${gonCover})`}},/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement(Right,null,/*#__PURE__*/index_js_default().createElement(Text,null,"GESPONA"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement(Button,null,"BOOKING REQUEST")),/*#__PURE__*/index_js_default().createElement(Left,null,/*#__PURE__*/index_js_default().createElement(Desc,null),/*#__PURE__*/index_js_default().createElement(Info,null,/*#__PURE__*/index_js_default().createElement(Contact,null,/*#__PURE__*/index_js_default().createElement(ContactText,null))))))));};/* harmony default export */ const components_Artist = (Artist);
;// CONCATENATED MODULE: ./src/templates/artistTemplate.js
//import NameSlider from "../components/NameSlider";
function artistTemplate({data}){return/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(NavBar/* default */.Z,null),/*#__PURE__*/index_js_default().createElement(components_Artist,null));}/* harmony default export */ const templates_artistTemplate = (artistTemplate);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-artist-template-js.js.map