(this.webpackJsonpvenue_booking_app=this.webpackJsonpvenue_booking_app||[]).push([[0],{12:function(e,a,t){e.exports={Container:"Input_Container__1zW_S",Input:"Input_Input__34fE6"}},14:function(e,a,t){e.exports={Navbar:"Navbar_Navbar__3CP2A",Nav_Links:"Navbar_Nav_Links__2J-iT"}},16:function(e,a,t){e.exports={List:"Dropdown_List__2GZeH"}},18:function(e,a,t){e.exports={Home:"Home_Home__27-bg"}},29:function(e,a,t){"use strict";t.r(a);var n=t(1),u=t.n(n),o=t(5),l=t.n(o),r=t(8),c=t.n(r),i=t(9),s=t.n(i),v=t(15),y=t(12),k=t.n(y),h=t(19),d=t(3),A=t(7),j=Object(A.b)({name:"search",initialState:{occassion:"",location:"",venue:""},reducers:{updateOccassion:function(e,a){e.occassion=a.payload},updateLocation:function(e,a){e.location=a.payload},updateVenue:function(e,a){e.venue=a.payload}}}),b=j.actions,p=j,O=t(16),_=t.n(O),g=t(2),m=function(e){var a=e.showDropDown,t=e.matchedData,n=e.handleClick;return Object(g.jsx)("ul",{className:_.a.List,children:a&&t.slice(0,5).map((function(e){return Object(g.jsx)("button",{onClick:function(){return n(e.item.value)},children:e.item.value},e.item.key)}))})},x=function(e){var a=e.placeholder,t=e.searchData,u=e.value,o=e.name,l=Object(d.b)(),r=Object(n.useState)([]),c=Object(v.a)(r,2),i=c[0],s=c[1],y=Object(n.useState)(!1),A=Object(v.a)(y,2),j=A[0],p=A[1],O={keys:["value"],threshold:.4};return Object(g.jsxs)("div",{className:k.a.Container,children:[Object(g.jsx)("input",{type:"text",onChange:function(e){var a=new h.a(t,O);s(a.search(e.target.value)),"Occassion"===o?l(b.updateOccassion(e.target.value)):"Location"===o?l(b.updateLocation(e.target.value)):"Venue"===o&&l(b.updateVenue(e.target.value))},className:k.a.Input,placeholder:a,onFocus:function(){p(!0)},value:u}),Object(g.jsx)(m,{showDropDown:j,matchedData:i,handleClick:function(e){"Occassion"===o?l(b.updateOccassion(e)):"Location"===o?l(b.updateLocation(e)):"Venue"===o&&l(b.updateVenue(e)),p(!1)}})]})},S=t(0),f=t(17),P=[{key:"A00001",value:"Team Meeting"},{key:"A00002",value:"Board Meeting"},{key:"A00003",value:"Meeting"},{key:"A00004",value:"Conference Room"},{key:"A00005",value:"Casting"},{key:"A00006",value:"Client Meeting"},{key:"A00007",value:"Audition"},{key:"A00008",value:"Interview"},{key:"A00009",value:"Boardroom"},{key:"A00010",value:"Sales Meeting"},{key:"A00011",value:"Corporate Meeting"},{key:"A00012",value:"Auction"},{key:"A00013",value:"Product Demo"},{key:"A00014",value:"Company Party"},{key:"A00015",value:"Corporate Party"},{key:"A00016",value:"Press Conference"},{key:"A00017",value:"Fundraising Event"},{key:"A00018",value:"Anniversary"},{key:"A00019",value:"Fashion Show"},{key:"A00020",value:"Fashion Event"},{key:"A00021",value:"Awards Ceremony"},{key:"A00022",value:"Product Release"},{key:"A00023",value:"Banquet Hall"},{key:"A00024",value:"Party Hall"},{key:"A00025",value:"Gala"},{key:"A00026",value:"Job Fair"},{key:"A00027",value:"Career Expo"},{key:"A00028",value:"Memorial"},{key:"A00029",value:"Dance Party"},{key:"A00030",value:"Bachelor Party"},{key:"A00031",value:"Bridal Shower"},{key:"A00032",value:"Graduation Party"},{key:"A00033",value:"Kids Birthday Party"},{key:"A00034",value:"Engagement Party"},{key:"A00035",value:"Private Party"},{key:"A00036",value:"Retirement Party"},{key:"A00037",value:"Marriage Proposal"},{key:"A00038",value:"Wedding Shower"},{key:"A00039",value:"Reunion"},{key:"A00040",value:"Wedding Reception"},{key:"A00041",value:"Baby Shower"},{key:"A00042",value:"Cocktail Party"},{key:"A00043",value:"Bachelorette Party"},{key:"A00044",value:"Reception"},{key:"A00045",value:"Birthday Party"},{key:"A00046",value:"Film Shoot"},{key:"A00047",value:"Video Shoot"},{key:"A00048",value:"Recording Studio"},{key:"A00049",value:"Film Studio"},{key:"A00050",value:"Music Video"},{key:"A00051",value:"Filming"},{key:"A00052",value:"Dance Shoot"},{key:"A00053",value:"Theater"},{key:"A00054",value:"Auditorium"},{key:"A00055",value:"Photo Shoot"},{key:"A00056",value:"Family Photo Shoot"},{key:"A00057",value:"Wedding Photo Shoot"},{key:"A00058",value:"Product Shoot"},{key:"A00059",value:"Photo Shoot"},{key:"A00060",value:"Commercial Photoshoot"},{key:"A00061",value:"Fitness Class"},{key:"A00062",value:"Pilates Class"},{key:"A00063",value:"Dance Studio"},{key:"A00064",value:"Workout Class"},{key:"A00065",value:"Dance Class"},{key:"A00066",value:"Yoga Class"},{key:"A00067",value:"Yoga Studio"},{key:"A00068",value:"Fitness Studio"},{key:"A00069",value:"Rehearsal"},{key:"A00070",value:"Training"},{key:"A00071",value:"Coaching Session"},{key:"A00072",value:"Workshop"},{key:"A00073",value:"Convention"},{key:"A00074",value:"Lecture"},{key:"A00075",value:"Art Show"},{key:"A00076",value:"Art Exhibit"},{key:"A00077",value:"Breakfast"},{key:"A00078",value:"Dinner"},{key:"A00079",value:"Brunch"},{key:"A00080",value:"Luncheon"},{key:"A00081",value:"Wedding"},{key:"A00082",value:"Engagement Party"}],C=[{key:"L00001",value:"Indiranagar - Bengaluru"},{key:"L00002",value:"Koramangala - Bengaluru"},{key:"L00003",value:"MG Road - Bengaluru"},{key:"L00004",value:"Brigade Road - Bengaluru"},{key:"L00005",value:"RT Nagar - Bengaluru"},{key:"L00006",value:"Church Street - Bengaluru"},{key:"L00007",value:"Bengaluru"},{key:"L00008",value:"Chennai"},{key:"L00009",value:"Kochi"},{key:"L00010",value:"Mumbai"},{key:"L00011",value:"Pune"},{key:"L00012",value:"Delhi"},{key:"L00013",value:"Kolkata"},{key:"L00014",value:"Hyderabad"},{key:"L00015",value:"Mysore"}],L=[{key:"V00001",value:"Party"},{key:"V00002",value:"Conference"}],B=function(){var e=Object(d.c)((function(e){return e.search.occassion})),a=Object(d.c)((function(e){return e.search.location})),t=Object(d.c)((function(e){return e.search.venue}));return Object(g.jsxs)("div",{className:s.a.Search,children:[Object(g.jsx)(x,{placeholder:"What kind of event?",searchData:P,value:e,name:"Occassion"}),Object(g.jsx)(x,{placeholder:"Where?",searchData:C,value:a,name:"Location"}),Object(g.jsx)(x,{placeholder:"Party or Conference?",searchData:L,value:t,name:"Venue"}),Object(g.jsx)("button",{className:s.a.SearchButton,onClick:function(){console.log(e,a,t)},children:Object(g.jsx)(S.b.Provider,{value:{size:"32px",className:s.a.SVGButton},children:Object(g.jsx)(f.a,{})})})]})},H=function(){return Object(g.jsxs)("div",{className:c.a.Hero,children:[Object(g.jsx)(B,{}),Object(g.jsxs)("h1",{className:c.a.H1,children:["Find the ",Object(g.jsx)("span",{children:"Perfect Space"})," ",Object(g.jsx)("br",{})," for your next"]}),Object(g.jsx)("div",{className:c.a.Overlay})]})},N=t(14),D=t.n(N),w=function(){return Object(g.jsxs)("div",{className:D.a.Navbar,children:[Object(g.jsx)("div",{children:Object(g.jsx)("p",{children:"Spacelender"})}),Object(g.jsxs)("ul",{className:D.a.Nav_Links,children:[Object(g.jsx)("li",{children:Object(g.jsx)("button",{children:"About Us"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{children:"Contact"})}),Object(g.jsx)("li",{children:Object(g.jsx)("button",{children:"Log In"})})]})]})},F=t(18),M=t.n(F),V=function(){return Object(g.jsxs)("div",{className:M.a.Home,children:[Object(g.jsx)(w,{}),Object(g.jsx)(H,{})]})},I=function(){return Object(g.jsx)(u.a.Fragment,{children:Object(g.jsx)(V,{})})},R=Object(A.a)({reducer:{search:p.reducer}});l.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(d.a,{store:R,children:Object(g.jsx)(I,{})})}),document.getElementById("root"))},8:function(e,a,t){e.exports={Hero:"Hero_Hero__TOevj",changeBg:"Hero_changeBg__2sBUY",H1:"Hero_H1__1TmIp",changeWord:"Hero_changeWord__3fXIR",Overlay:"Hero_Overlay__4TPS3",H2:"Hero_H2__1Sknu"}},9:function(e,a,t){e.exports={Search:"Search_Search__2Ilqm",SearchButton:"Search_SearchButton__ScFS_",SVGButton:"Search_SVGButton__32XL1"}}},[[29,1,2]]]);
//# sourceMappingURL=main.93196e32.chunk.js.map