(this.webpackJsonpvenue_booking_app=this.webpackJsonpvenue_booking_app||[]).push([[0],[,,,function(e,a,t){e.exports={plates:"Burgermenu_plates__2LgkT",plate:"Burgermenu_plate__11W-l",x:"Burgermenu_x__IBmK5",line:"Burgermenu_line__17nM2",active:"Burgermenu_active__3Dr7A",plate2:"Burgermenu_plate2__2Ko1o",line1:"Burgermenu_line1__3ClbD",line2:"Burgermenu_line2__3wtXh",line3:"Burgermenu_line3__2moAm",line4:"Burgermenu_line4__pfXjD",line5:"Burgermenu_line5__1fTSG",line6:"Burgermenu_line6__CcC5Q"}},function(e,a,t){e.exports={Footer:"Footer_Footer__2H2Fv",Logo:"Footer_Logo__3Isd8",Contact:"Footer_Contact__2LMto",Heading:"Footer_Heading__2uDVa",Item:"Footer_Item__z2j-J",Icon:"Footer_Icon__2q7Ko",SocialLink:"Footer_SocialLink__2iuq5"}},,function(e,a,t){e.exports={Navbar:"Navbar_Navbar__3CP2A",active:"Navbar_active__2bfbH",DropdownNav:"Navbar_DropdownNav__2dVYE",Nav_Links_Dropdown:"Navbar_Nav_Links_Dropdown__gaxp-",Nav_Links:"Navbar_Nav_Links__2J-iT"}},,,,,,,function(e,a,t){e.exports={Hero:"Hero_Hero__TOevj",changeBg:"Hero_changeBg__2sBUY",H1:"Hero_H1__1TmIp",changeWord:"Hero_changeWord__3fXIR",Overlay:"Hero_Overlay__4TPS3",H2:"Hero_H2__1Sknu"}},function(e,a,t){e.exports={Search:"Search_Search__2Ilqm",SearchButton:"Search_SearchButton__ScFS_",SVGButton:"Search_SVGButton__32XL1"}},,,function(e,a,t){e.exports={Container:"Input_Container__1zW_S",Input:"Input_Input__34fE6"}},,function(e,a,t){e.exports={List:"Dropdown_List__2GZeH"}},function(e,a,t){e.exports={Home:"Home_Home__27-bg"}},function(e,a,t){e.exports={Rest:"Rest_Rest__r9_gZ"}},,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),o=t(11),r=t.n(o),l=t(13),s=t.n(l),i=t(14),u=t.n(i),v=t(7),j=t(17),d=t.n(j),h=t(24),b=t(5),y=t(8),_=Object(y.b)({name:"search",initialState:{occassion:"",location:"",venue:""},reducers:{updateOccassion:function(e,a){e.occassion=a.payload},updateLocation:function(e,a){e.location=a.payload},updateVenue:function(e,a){e.venue=a.payload}}}),k=_.actions,O=_,p=t(19),x=t.n(p),m=t(1),A=function(e){var a=e.showDropDown,t=e.matchedData,n=e.handleClick;return Object(m.jsx)("ul",{className:x.a.List,children:a&&t.slice(0,5).map((function(e){return Object(m.jsx)("button",{onClick:function(){return n(e.item.value)},children:e.item.value},e.item.key)}))})},g=function(e){var a=e.placeholder,t=e.searchData,c=e.value,o=e.name,r=Object(b.b)(),l=Object(n.useState)([]),s=Object(v.a)(l,2),i=s[0],u=s[1],j=Object(n.useState)(!1),y=Object(v.a)(j,2),_=y[0],O=y[1],p={keys:["value"],threshold:.4};return Object(m.jsxs)("div",{className:d.a.Container,children:[Object(m.jsx)("input",{type:"text",onChange:function(e){var a=new h.a(t,p);u(a.search(e.target.value)),"Occassion"===o?r(k.updateOccassion(e.target.value)):"Location"===o?r(k.updateLocation(e.target.value)):"Venue"===o&&r(k.updateVenue(e.target.value))},className:d.a.Input,placeholder:a,onFocus:function(){O(!0)},value:c}),Object(m.jsx)(A,{showDropDown:_,matchedData:i,handleClick:function(e){"Occassion"===o?r(k.updateOccassion(e)):"Location"===o?r(k.updateLocation(e)):"Venue"===o&&r(k.updateVenue(e)),O(!1)}})]})},N=t(0),C=t(10),S=[{key:"A00001",value:"Team Meeting"},{key:"A00002",value:"Board Meeting"},{key:"A00003",value:"Meeting"},{key:"A00004",value:"Conference Room"},{key:"A00005",value:"Casting"},{key:"A00006",value:"Client Meeting"},{key:"A00007",value:"Audition"},{key:"A00008",value:"Interview"},{key:"A00009",value:"Boardroom"},{key:"A00010",value:"Sales Meeting"},{key:"A00011",value:"Corporate Meeting"},{key:"A00012",value:"Auction"},{key:"A00013",value:"Product Demo"},{key:"A00014",value:"Company Party"},{key:"A00015",value:"Corporate Party"},{key:"A00016",value:"Press Conference"},{key:"A00017",value:"Fundraising Event"},{key:"A00018",value:"Anniversary"},{key:"A00019",value:"Fashion Show"},{key:"A00020",value:"Fashion Event"},{key:"A00021",value:"Awards Ceremony"},{key:"A00022",value:"Product Release"},{key:"A00023",value:"Banquet Hall"},{key:"A00024",value:"Party Hall"},{key:"A00025",value:"Gala"},{key:"A00026",value:"Job Fair"},{key:"A00027",value:"Career Expo"},{key:"A00028",value:"Memorial"},{key:"A00029",value:"Dance Party"},{key:"A00030",value:"Bachelor Party"},{key:"A00031",value:"Bridal Shower"},{key:"A00032",value:"Graduation Party"},{key:"A00033",value:"Kids Birthday Party"},{key:"A00034",value:"Engagement Party"},{key:"A00035",value:"Private Party"},{key:"A00036",value:"Retirement Party"},{key:"A00037",value:"Marriage Proposal"},{key:"A00038",value:"Wedding Shower"},{key:"A00039",value:"Reunion"},{key:"A00040",value:"Wedding Reception"},{key:"A00041",value:"Baby Shower"},{key:"A00042",value:"Cocktail Party"},{key:"A00043",value:"Bachelorette Party"},{key:"A00044",value:"Reception"},{key:"A00045",value:"Birthday Party"},{key:"A00046",value:"Film Shoot"},{key:"A00047",value:"Video Shoot"},{key:"A00048",value:"Recording Studio"},{key:"A00049",value:"Film Studio"},{key:"A00050",value:"Music Video"},{key:"A00051",value:"Filming"},{key:"A00052",value:"Dance Shoot"},{key:"A00053",value:"Theater"},{key:"A00054",value:"Auditorium"},{key:"A00055",value:"Photo Shoot"},{key:"A00056",value:"Family Photo Shoot"},{key:"A00057",value:"Wedding Photo Shoot"},{key:"A00058",value:"Product Shoot"},{key:"A00059",value:"Photo Shoot"},{key:"A00060",value:"Commercial Photoshoot"},{key:"A00061",value:"Fitness Class"},{key:"A00062",value:"Pilates Class"},{key:"A00063",value:"Dance Studio"},{key:"A00064",value:"Workout Class"},{key:"A00065",value:"Dance Class"},{key:"A00066",value:"Yoga Class"},{key:"A00067",value:"Yoga Studio"},{key:"A00068",value:"Fitness Studio"},{key:"A00069",value:"Rehearsal"},{key:"A00070",value:"Training"},{key:"A00071",value:"Coaching Session"},{key:"A00072",value:"Workshop"},{key:"A00073",value:"Convention"},{key:"A00074",value:"Lecture"},{key:"A00075",value:"Art Show"},{key:"A00076",value:"Art Exhibit"},{key:"A00077",value:"Breakfast"},{key:"A00078",value:"Dinner"},{key:"A00079",value:"Brunch"},{key:"A00080",value:"Luncheon"},{key:"A00081",value:"Wedding"},{key:"A00082",value:"Engagement Party"}],f=[{key:"L00001",value:"Indiranagar - Bengaluru"},{key:"L00002",value:"Koramangala - Bengaluru"},{key:"L00003",value:"MG Road - Bengaluru"},{key:"L00004",value:"Brigade Road - Bengaluru"},{key:"L00005",value:"RT Nagar - Bengaluru"},{key:"L00006",value:"Church Street - Bengaluru"},{key:"L00007",value:"Bengaluru"},{key:"L00008",value:"Chennai"},{key:"L00009",value:"Kochi"},{key:"L00010",value:"Mumbai"},{key:"L00011",value:"Pune"},{key:"L00012",value:"Delhi"},{key:"L00013",value:"Kolkata"},{key:"L00014",value:"Hyderabad"},{key:"L00015",value:"Mysore"}],B=[{key:"V00001",value:"Party"},{key:"V00002",value:"Conference"}],L=function(){var e=Object(b.c)((function(e){return e.search.occassion})),a=Object(b.c)((function(e){return e.search.location})),t=Object(b.c)((function(e){return e.search.venue}));return Object(m.jsxs)("div",{className:u.a.Search,children:[Object(m.jsx)(g,{placeholder:"What kind of event?",searchData:S,value:e,name:"Occassion"}),Object(m.jsx)(g,{placeholder:"Where?",searchData:f,value:a,name:"Location"}),Object(m.jsx)(g,{placeholder:"Party or Conference?",searchData:B,value:t,name:"Venue"}),Object(m.jsx)("button",{className:u.a.SearchButton,onClick:function(){console.log(e,a,t)},children:Object(m.jsx)(N.b.Provider,{value:{size:"32px",className:u.a.SVGButton},children:Object(m.jsx)(C.c,{})})})]})},w=function(){return Object(m.jsxs)("div",{className:s.a.Hero,children:[Object(m.jsx)(L,{}),Object(m.jsxs)("h1",{className:s.a.H1,children:["Find the ",Object(m.jsx)("span",{children:"Perfect Space"})," ",Object(m.jsx)("br",{})," for your next"]}),Object(m.jsx)("div",{className:s.a.Overlay})]})},P=t(20),D=t.n(P),H=t(21),I=t.n(H),F=t(4),M=t.n(F),R=t(22),V=t(23),W=function(){return Object(m.jsxs)("div",{className:M.a.Footer,children:[Object(m.jsx)("div",{className:M.a.Logo,children:Object(m.jsx)("p",{children:"Spacelender"})}),Object(m.jsxs)("div",{className:M.a.Contact,children:[Object(m.jsx)("p",{className:M.a.Heading,children:"Contact Us"}),Object(m.jsxs)("div",{className:M.a.Item,children:[Object(m.jsx)(N.b.Provider,{value:{size:"24px",className:M.a.Icon},children:Object(m.jsx)(C.b,{})}),Object(m.jsx)("p",{children:"Address"})]}),Object(m.jsxs)("div",{className:M.a.Item,children:[Object(m.jsx)(N.b.Provider,{value:{size:"24px",className:M.a.Icon},children:Object(m.jsx)(C.a,{})}),Object(m.jsx)("p",{children:"contact@spacelender.co.in"})]}),Object(m.jsxs)("div",{className:M.a.Item,children:[Object(m.jsx)(N.b.Provider,{value:{size:"24px",className:M.a.Icon},children:Object(m.jsx)(R.a,{})}),Object(m.jsx)("p",{children:"+91 9611358806"})]}),Object(m.jsxs)("div",{className:M.a.Item,children:[Object(m.jsx)(N.b.Provider,{value:{size:"24px",className:M.a.Icon},children:Object(m.jsx)(V.a,{})}),Object(m.jsx)("a",{href:"https://www.instagram.com/",className:M.a.SocialLink,target:"_blank",rel:"noreferrer",children:"Click here to follow us on Instagram"})]})]})]})},E=function(){return Object(m.jsx)("div",{className:I.a.Rest,children:Object(m.jsx)(W,{})})},T=function(){return Object(m.jsxs)("div",{className:D.a.Home,children:[Object(m.jsx)(w,{}),Object(m.jsx)(E,{})]})},G=t(6),z=t.n(G),K=t(3),J=t.n(K),Y=Object(y.b)({name:"ui",initialState:{showDropNavBar:!1},reducers:{updateShowDropNavBar:function(e){e.showDropNavBar=!e.showDropNavBar}}}),q=Y.actions,U=Y,X=function(){var e=Object(b.b)(),a=Object(n.useState)(!1),t=Object(v.a)(a,2),c=t[0],o=t[1];return Object(m.jsx)("div",{className:J.a.plates,children:Object(m.jsxs)("div",{className:c?"".concat(J.a.plate," ").concat(J.a.plate2," ").concat(J.a.active):"".concat(J.a.plate," ").concat(J.a.plate2),onClick:function(){e(q.updateShowDropNavBar()),o((function(e){return!e}))},children:[Object(m.jsxs)("svg",{className:J.a.burger,version:"1.1",height:"100",width:"100",viewBox:"0 0 100 100",children:[Object(m.jsx)("path",{className:"".concat(J.a.line," ").concat(J.a.line1),d:"M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"}),Object(m.jsx)("path",{className:"".concat(J.a.line," ").concat(J.a.line2),d:"M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"}),Object(m.jsx)("path",{className:"".concat(J.a.line," ").concat(J.a.line3),d:"M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"}),Object(m.jsx)("path",{className:"".concat(J.a.line," ").concat(J.a.line4),d:"M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"}),Object(m.jsx)("path",{className:"".concat(J.a.line," ").concat(J.a.line5),d:"M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"}),Object(m.jsx)("path",{className:"".concat(J.a.line," ").concat(J.a.line6),d:"M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"})]}),Object(m.jsxs)("svg",{className:J.a.x,version:"1.1",height:"100",width:"100",viewBox:"0 0 100 100",children:[Object(m.jsx)("path",{className:J.a.line,d:"M 34,32 L 66,68"}),Object(m.jsx)("path",{className:J.a.line,d:"M 66,32 L 34,68"})]})]})})},Z=function(){var e=Object(n.useState)(!1),a=Object(v.a)(e,2),t=a[0],o=a[1],r=Object(b.c)((function(e){return e.ui.showDropNavBar}));return window.addEventListener("scroll",(function(){window.scrollY>=70?o(!0):o(!1)})),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsxs)("div",{className:t?"".concat(z.a.Navbar," ").concat(z.a.active):"".concat(z.a.Navbar),children:[Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Spacelender"})}),Object(m.jsx)(X,{}),Object(m.jsxs)("ul",{className:z.a.Nav_Links,children:[Object(m.jsx)("li",{children:Object(m.jsx)("button",{children:"About Us"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{children:"Contact"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{children:"Log In"})})]})]}),Object(m.jsx)("div",{className:r?"".concat(z.a.DropdownNav," ").concat(z.a.active):"".concat(z.a.DropdownNav),children:Object(m.jsxs)("ul",{className:z.a.Nav_Links_Dropdown,children:[Object(m.jsx)("li",{children:Object(m.jsx)("button",{children:"About Us"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{children:"Contact"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{children:"Log In"})})]})})]})},Q=function(){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(Z,{}),Object(m.jsx)(T,{})]})},$=Object(y.a)({reducer:{search:O.reducer,ui:U.reducer}});r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(b.a,{store:$,children:Object(m.jsx)(Q,{})})}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.daf450d4.chunk.js.map