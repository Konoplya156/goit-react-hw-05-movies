"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{275:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(439),c=n(791),i=n(689),r=n(635),u={cast:"Cast_cast__m5y0R",item:"Cast_item__a0CDL",name:"Cast_name__6UbFm"},o=n(184);function s(){var e=(0,i.UO)().movieId,t=(0,c.useState)(null),n=(0,a.Z)(t,2),s=n[0],l=n[1];(0,c.useEffect)((function(){(0,r.y)(e).then((function(e){var t=e.data;l(t.cast)}))}),[e]);return(0,o.jsx)("ul",{className:u.cast,children:s&&s.map((function(e){var t=e.name,n=e.id,a=e.profile_path;return(0,o.jsxs)("li",{className:u.item,children:[(0,o.jsx)("div",{className:u.wrapper,children:(0,o.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:286,alt:t,className:u.img})}),(0,o.jsx)("div",{className:u.name,children:t})]},n)}))})}},635:function(e,t,n){n.d(t,{Ny:function(){return r},bz:function(){return i},gQ:function(){return u},pI:function(){return o},y:function(){return s}});var a=n(243),c="1676e9bd6d1e52f74048e3da15b70e63";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return a.Z.get("/trending/all/day?api_key=".concat(c))},r=function(e){return a.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(c))},u=function(e){return a.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(c))},o=function(e){return a.Z.get("movie/".concat(e,"/reviews?language=en-US&page=1&api_key=").concat(c))},s=function(e){return a.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(c))}}}]);
//# sourceMappingURL=275.e20a8347.chunk.js.map