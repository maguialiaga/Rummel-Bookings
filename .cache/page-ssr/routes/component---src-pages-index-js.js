"use strict";
exports.id = 678;
exports.ids = [678];
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

/***/ 4192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/node_modules/react/index.js"
var index_js_ = __webpack_require__(3196);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(6718);
;// CONCATENATED MODULE: ./src/assets/images/rummel-blanco.png
/* harmony default export */ const rummel_blanco = ("/static/rummel-blanco-83fd3522cf9abd1257f752af0651d4b0.png");
;// CONCATENATED MODULE: ./src/components/PreLoader.js
const Container=styled_components_esm["default"].div.withConfig({displayName:"PreLoader__Container",componentId:"sc-18xf3yx-0"})(["height:100vh;width:100%;background:black;position:fixed;bottom:0;left:0;right:0;z-index:100;display:flex;justify-content:center;align-items:center;overflow:hidden;"]);const ImgContainer=styled_components_esm["default"].div.withConfig({displayName:"PreLoader__ImgContainer",componentId:"sc-18xf3yx-1"})(["display:flex;align-items:center;justify-content:center;height:500px;width:100%;overflow:hidden;"]);const Img=styled_components_esm["default"].img.withConfig({displayName:"PreLoader__Img",componentId:"sc-18xf3yx-2"})(["color:white;width:10rem;z-index:-1;animation:flash;animation-duration:8s;animation-iteration-count:infinite;"]);function PreLoader(){return/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement(ImgContainer,null,/*#__PURE__*/index_js_default().createElement(Img,{src:rummel_blanco})));}
// EXTERNAL MODULE: ./src/components/Layout.js + 1 modules
var Layout = __webpack_require__(603);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/Seo.js
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */function SEO({description,lang,meta,title}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby_browser_entry.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/index_js_default().createElement(Helmet.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:defaultTitle?`%s | ${defaultTitle}`:null,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});}SEO.defaultProps={lang:`en`,meta:[],description:``};SEO.propTypes={description:(prop_types_default()).string,lang:(prop_types_default()).string,meta:prop_types_default().arrayOf((prop_types_default()).object),title:(prop_types_default()).string.isRequired};/* harmony default export */ const Seo = (SEO);
// EXTERNAL MODULE: ./src/components/NavBar.js + 1 modules
var NavBar = __webpack_require__(2729);
;// CONCATENATED MODULE: ./src/assets/images/slide-1.png
/* harmony default export */ const slide_1 = ("/static/slide-1-16727cfe102498f5594f8df2947e8e54.png");
;// CONCATENATED MODULE: ./src/assets/images/slide-2.png
/* harmony default export */ const slide_2 = ("/static/slide-2-16b064f130160e3f9dcef533f4c47365.png");
;// CONCATENATED MODULE: ./src/components/ImageSlider.js
const IndicatorWrapper=styled_components_esm["default"].div.withConfig({displayName:"ImageSlider__IndicatorWrapper",componentId:"sc-1c8q1np-0"})(["display:flex;flex-wrap:nowrap;position:absolute;bottom:15px;right:15px;"]);const Dot=styled_components_esm["default"].div.withConfig({displayName:"ImageSlider__Dot",componentId:"sc-1c8q1np-1"})(["width:12px;height:12px;border-radius:6px;background-color:white;opacity:",";margin:5px;transition:750ms all ease-in-out;"],props=>props.isActive?1:0.5);const Indicator=({currentSlide,amountSlides,nextSlide})=>{return/*#__PURE__*/index_js_default().createElement(IndicatorWrapper,null,Array(amountSlides).fill(1).map((_,i)=>/*#__PURE__*/index_js_default().createElement(Dot,{key:i,isActive:currentSlide===i,onClick:()=>nextSlide(i)})));};const TextChanger=({currentSlide,nextSlide})=>{};const Wrapper=styled_components_esm["default"].div.withConfig({displayName:"ImageSlider__Wrapper",componentId:"sc-1c8q1np-2"})(["height:100vh;display:flex;flex-wrap:nowrap;overflow-x:hidden;position:relative;"]);const Slide=styled_components_esm["default"].div.withConfig({displayName:"ImageSlider__Slide",componentId:"sc-1c8q1np-3"})(["height:100%;width:100vw;flex-shrink:0;background-position:center;background-size:cover;transition:750ms all ease-in-out;"]);const TextOverlay=styled_components_esm["default"].div.withConfig({displayName:"ImageSlider__TextOverlay",componentId:"sc-1c8q1np-4"})(["position:absolute;bottom:20px;left:20px;color:white;font-size:18px;"]);const ChildrenWrapper=styled_components_esm["default"].div.withConfig({displayName:"ImageSlider__ChildrenWrapper",componentId:"sc-1c8q1np-5"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]);const Gradient=styled_components_esm["default"].div.withConfig({displayName:"ImageSlider__Gradient",componentId:"sc-1c8q1np-6"})(["width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,0.2);"]);const ImageSlider=({images=[slide_1,slide_2],texts=[`Djolee, Gespona - "Malabares"`,""],autoPlay=true,autoPlayTime=3000,children,...props})=>{const{0:currentSlide,1:setCurrentSlide}=(0,index_js_.useState)(0);function nextSlide(slideIndex=currentSlide+1){const newSlideIndex=slideIndex>=images.length?0:slideIndex;setCurrentSlide(newSlideIndex);}(0,index_js_.useEffect)(()=>{const timer=setTimeout(()=>{nextSlide();},autoPlayTime);return()=>clearTimeout(timer);},[currentSlide]);return/*#__PURE__*/index_js_default().createElement(Wrapper,props,images.map((imageUrl,index)=>/*#__PURE__*/index_js_default().createElement(Slide,{key:index,style:{backgroundImage:`url(${imageUrl})`,marginLeft:index===0?`-${currentSlide*100}%`:undefined}},/*#__PURE__*/index_js_default().createElement(TextOverlay,{style:{color:"black"}},texts[index]))),/*#__PURE__*/index_js_default().createElement(Gradient,null),/*#__PURE__*/index_js_default().createElement(Indicator,{currentSlide:currentSlide,amountSlides:images.length,nextSlide:nextSlide}),/*#__PURE__*/index_js_default().createElement(ChildrenWrapper,null,children));};/* harmony default export */ const components_ImageSlider = (ImageSlider);
;// CONCATENATED MODULE: ./src/pages/index.js
function Home(){const{0:loading,1:setLoading}=(0,index_js_.useState)(true);(0,index_js_.useEffect)(()=>{setTimeout(()=>{setLoading(false);},2000);},[]);return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,loading?/*#__PURE__*/index_js_.createElement(PreLoader,null):/*#__PURE__*/index_js_.createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_.createElement(Seo,{title:"Rummel Label"}),/*#__PURE__*/index_js_.createElement(NavBar/* default */.Z,null),/*#__PURE__*/index_js_.createElement(components_ImageSlider,null)));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map