(this.webpackJsonpdisney=this.webpackJsonpdisney||[]).push([[0],{53:function(n,e,t){},54:function(n,e,t){},81:function(n,e,t){"use strict";t.r(e);var i,a,o,s,c,r,p,d,l,b,x,g,j,m,h,u,f,O,v,y,w,k,I,F,D,z,S,E,A,T,L,R,P,C,M,H,N,B,G,U,X,V,W,J=t(3),Y=t.n(J),K=t(31),Z=t.n(K),$=(t(53),t(54),t(18)),q=t(12),Q=t(5),_=t(6),nn=t(2),en=_.a.section(i||(i=Object(Q.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100vh;\n"]))),tn=_.a.div(a||(a=Object(Q.a)(["\n  margin-bottom: 10vw;\n  width: 100%;\n  position: relative;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 40px;\n  height: 100%;\n"]))),an=_.a.div(o||(o=Object(Q.a)(['\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Flogin-background.jpg?alt=media&token=74f723fe-89f7-4b3f-bd9d-419e5a8949f5");\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: -1;\n']))),on=_.a.div(s||(s=Object(Q.a)(["\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),sn=_.a.img(c||(c=Object(Q.a)(["\n  margin-bottom: 12px;\n  max-width: 600px;\n  min-height: 1px;\n  display: block;\n  width: 100%;\n"]))),cn=_.a.a(r||(r=Object(Q.a)(["\n  font-weight: bold;\n  margin-bottom: 12px;\n  padding: 16px 0;\n  color: #f9f9f9;\n  background-color: #0063e5;\n  width: 100%;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),rn=_.a.p(p||(p=Object(Q.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  font-size: 11px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),pn=_.a.img(d||(d=Object(Q.a)(["\n  max-width: 600px;\n  margin-bottom: 20px;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n"]))),dn=function(n){return Object(nn.jsx)(en,{children:Object(nn.jsxs)(tn,{children:[Object(nn.jsxs)(on,{children:[Object(nn.jsx)(sn,{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fcta-logo-one.svg?alt=media&token=19d0ca72-e849-4c3b-938f-45f55e716f5a"}),Object(nn.jsx)(cn,{children:"GET ALL THERE"}),Object(nn.jsx)(rn,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(nn.jsx)(pn,{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fcta-logo-two.png?alt=media&token=25477062-8057-4d97-a4d0-43ea175d78c6",alt:""})]}),Object(nn.jsx)(an,{})]})})},ln=t(37),bn=t.n(ln),xn=t(45),gn=t(13),jn=t(33),mn=jn.a.initializeApp({apiKey:"AIzaSyBUfdFEg0wF4E4xUe2eOZ49V-BNgXNm5MY",authDomain:"disney-clone-907c9.firebaseapp.com",projectId:"disney-clone-907c9",storageBucket:"disney-clone-907c9.appspot.com",messagingSenderId:"746340032084",appId:"1:746340032084:web:35ae3cb4015cfb209657c1"}),hn=mn.firestore(),un=mn.auth(),fn=new jn.a.auth.GoogleAuthProvider,On=(jn.a.storage(),hn),vn=t(24),yn=Object(vn.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),wn=yn.actions,kn=wn.setUserLoginDetails,In=wn.setSignOutState,Fn=function(n){return n.user.name},Dn=function(n){return n.user.photo},zn=yn.reducer,Sn=_.a.nav(l||(l=Object(Q.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-color: #090b13;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 36px;\n  letter-spacing: 16px;\n  z-index: 3;\n"]))),En=_.a.a(b||(b=Object(Q.a)(["\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),An=_.a.div(x||(x=Object(Q.a)(['\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  margin-right: auto;\n  margin-left: 25px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    img {\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n      z-index: auto;\n    }\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      line-height: 1.08;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n      &:before {\n        background-color: rgb(249, 249, 249);\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n      }\n    }\n  }\n  /* @media (max-width: 768px) {\n    display: none;\n  } */\n']))),Tn=_.a.a(g||(g=Object(Q.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  border: 1px solid #f9f9f9;\n  border-radius: 4px;\n  transition: all 0.2s ease 0s;\n  &:hover {\n    background-color: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n  }\n"]))),Ln=_.a.img(j||(j=Object(Q.a)(["\n  height: 100%;\n"]))),Rn=_.a.div(m||(m=Object(Q.a)(["\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  background: rgb(19, 19, 19);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 14px;\n  letter-spacing: 3px;\n  width: 100px;\n  opacity: 0;\n"]))),Pn=_.a.div(h||(h=Object(Q.a)(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n"])),Ln,Rn),Cn=function(n){var e=Object(gn.b)(),t=Object(q.f)(),i=Object(gn.c)(Fn),a=Object(gn.c)(Dn);Object(J.useEffect)((function(){un.onAuthStateChanged(function(){var n=Object(xn.a)(bn.a.mark((function n(e){return bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(s(e),t.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[i]);var o=function(){i?i&&un.signOut().then((function(){e(In()),t.push("/")})).catch((function(n){return alert(n.message)})):un.signInWithPopup(fn).then((function(n){s(n.user)})).catch((function(n){alert(n.message)}))},s=function(n){e(kn({name:n.displayName,email:n.email,photo:n.photoURL}))};return Object(nn.jsxs)(Sn,{children:[Object(nn.jsx)(En,{children:Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Flogo.svg?alt=media&token=31607517-3599-43c7-b631-8e761e356310",alt:"Disney+"})}),i?Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsxs)(An,{children:[Object(nn.jsxs)("a",{href:"/home",children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fhome-icon.svg?alt=media&token=5cc0e7b3-cb16-4be2-a6b8-f62e87ab0e81",alt:"HOME"}),Object(nn.jsx)("span",{children:"HOME"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fsearch-icon.svg?alt=media&token=aca4f47f-fd14-4eb2-9724-48f413387b5d",alt:"SEARCH"}),Object(nn.jsx)("span",{children:"SEARCH"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fwatchlist-icon.svg?alt=media&token=76dfbb5a-8359-4556-b58f-4b764a7103c1",alt:"WATCHLIST"}),Object(nn.jsx)("span",{children:"WATCHLIST"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Foriginal-icon.svg?alt=media&token=474b6ae0-a967-4669-9323-df925ae63728",alt:"ORIGINALS"}),Object(nn.jsx)("span",{children:"ORIGINALS"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fmovie-icon.svg?alt=media&token=a74c4489-2689-461b-b6a5-922ddc7b60d3",alt:"MOVIES"}),Object(nn.jsx)("span",{children:"MOVIES"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fmovie-icon.svg?alt=media&token=a74c4489-2689-461b-b6a5-922ddc7b60d3",alt:"SERIES"}),Object(nn.jsx)("span",{children:"SERIES"})]})]}),Object(nn.jsxs)(Pn,{children:[Object(nn.jsx)(Ln,{src:a,alt:i}),Object(nn.jsx)(Rn,{children:Object(nn.jsx)("span",{onClick:o,children:"Sign out"})})]})]}):Object(nn.jsx)(Tn,{onClick:o,children:"Login"})]})},Mn=t(22),Hn=t(29),Nn=(t(64),t(65),t(47)),Bn=t.n(Nn),Gn=Object(_.a)(Bn.a)(u||(u=Object(Q.a)(["\n  margin-top: 20px;\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n  li.slick-active button:before {\n    color: white;\n  }\n  .slick-list {\n    overflow: initial;\n  }\n  .slick-prev {\n    left: -75px;\n  }\n  .slick-next {\n    right: -75px;\n  }\n"]))),Un=_.a.div(f||(f=Object(Q.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),Xn=function(n){return Object(nn.jsxs)(Gn,Object(Mn.a)(Object(Mn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fslider-badging.jpg?alt=media&token=30eb5d63-43a9-4ffa-82cd-5099a88f72aa",alt:""})})}),Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fslider-scale.jpg?alt=media&token=10a22549-a171-4af0-b9b2-8451412f1100",alt:""})})}),Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fslider-badag.jpg?alt=media&token=efe8d3c4-8ab2-40f5-95a7-8a04b7b5e520",alt:""})})}),Object(nn.jsx)(Un,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fslider-scale.jpg?alt=media&token=10a22549-a171-4af0-b9b2-8451412f1100",alt:""})})})]}))},Vn=Object(vn.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),Wn=Vn.actions.setMovies,Jn=function(n){return n.movie.recommend},Yn=function(n){return n.movie.newDisney},Kn=function(n){return n.movie.original},Zn=function(n){return n.movie.trending},$n=Vn.reducer,qn=_.a.div(O||(O=Object(Q.a)(["\n  padding: 0 0 26px;\n"]))),Qn=_.a.div(v||(v=Object(Q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),_n=_.a.div(y||(y=Object(Q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),ne=function(n){var e=Object(gn.c)(Yn);return Object(nn.jsxs)(qn,{children:[Object(nn.jsx)("h4",{children:"New to Disney+"}),Object(nn.jsx)(Qn,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(_n,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ee=_.a.div(w||(w=Object(Q.a)(["\n  padding: 0 0 26px;\n"]))),te=_.a.div(k||(k=Object(Q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ie=_.a.div(I||(I=Object(Q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),ae=function(n){var e=Object(gn.c)(Kn);return Object(nn.jsxs)(ee,{children:[Object(nn.jsx)("h4",{children:"Orignals"}),Object(nn.jsx)(te,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ie,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},oe=_.a.div(F||(F=Object(Q.a)(["\n  padding: 0 0 26px;\n"]))),se=_.a.div(D||(D=Object(Q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ce=_.a.div(z||(z=Object(Q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),re=function(n){var e=Object(gn.c)(Jn);return Object(nn.jsxs)(oe,{children:[Object(nn.jsx)("h4",{children:"Recommended for You"}),Object(nn.jsx)(se,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ce,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},pe=_.a.div(S||(S=Object(Q.a)(["\n  padding: 0 0 26px;\n"]))),de=_.a.div(E||(E=Object(Q.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),le=_.a.div(A||(A=Object(Q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),be=function(n){var e=Object(gn.c)(Zn);return Object(nn.jsxs)(pe,{children:[Object(nn.jsx)("h4",{children:"Trendings"}),Object(nn.jsx)(de,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(le,{children:[n.id,Object(nn.jsx)($.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},xe=_.a.div(T||(T=Object(Q.a)(["\n  margin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"]))),ge=_.a.div(L||(L=Object(Q.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    opacity: 0;\n    z-index: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n    video {\n      opacity: 1;\n    }\n  }\n"]))),je=function(n){return Object(nn.jsxs)(xe,{children:[Object(nn.jsxs)(ge,{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-disney.png?alt=media&token=59a3d1e7-4b82-48a1-9c30-bff2e418a85c",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(ge,{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-pixar.png?alt=media&token=70676a1f-da5a-4f30-9f2f-2f7bdab10767",alt:""}),Object(nn.jsxs)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:[Object(nn.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"}),Object(nn.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/ogg"})]})]}),Object(nn.jsxs)(ge,{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-marvel.png?alt=media&token=47c7b1c3-ef5a-4c0e-8c17-db3a5dc06aa0",alt:""}),Object(nn.jsxs)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:[Object(nn.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"}),Object(nn.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/ogg"})]})]}),Object(nn.jsxs)(ge,{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-starwars.png?alt=media&token=404b0d89-3efc-4ba1-90cf-3db1cd2d029c",alt:""}),Object(nn.jsxs)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:[Object(nn.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"}),Object(nn.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/ogg"})]})]}),Object(nn.jsxs)(ge,{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fviewers-national.png?alt=media&token=29982768-f0dc-49d4-b0eb-e0c0b098899e",alt:""}),Object(nn.jsxs)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:[Object(nn.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"}),Object(nn.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/ogg"})]})]})]})},me=_.a.main(R||(R=Object(Q.a)(['\n  position: relative;\n  min-height: calc(100vh - 250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n  &:after {\n    background: url("https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fhome-background.png?alt=media&token=893251df-b9bc-493b-9bf2-7b65563d7f1b") center center / cover\n      no-repeat fixed;\n    content: "";\n    position: absolute;\n    inset: 0px;\n    opacity: 1;\n    z-index: -1;\n  }\n']))),he=function(n){var e=Object(gn.b)(),t=Object(gn.c)(Fn),i=[],a=[],o=[],s=[];return Object(J.useEffect)((function(){console.log("hello"),On.collection("movies").onSnapshot((function(n){n.docs.map((function(n){switch(console.log(i),n.data().type){case"recommend":i=[].concat(Object(Hn.a)(i),[Object(Mn.a)({id:n.id},n.data())]);break;case"new":a=[].concat(Object(Hn.a)(a),[Object(Mn.a)({id:n.id},n.data())]);break;case"original":o=[].concat(Object(Hn.a)(o),[Object(Mn.a)({id:n.id},n.data())]);break;case"trending":s=[].concat(Object(Hn.a)(s),[Object(Mn.a)({id:n.id},n.data())])}})),e(Wn({recommend:i,newDisney:a,original:o,trending:s}))}))}),[t]),Object(nn.jsxs)(me,{children:[Object(nn.jsx)(Xn,{}),Object(nn.jsx)(je,{}),Object(nn.jsx)(re,{}),Object(nn.jsx)(ne,{}),Object(nn.jsx)(ae,{}),Object(nn.jsx)(be,{})]})},ue=t(48),fe=_.a.div(P||(P=Object(Q.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),Oe=_.a.div(C||(C=Object(Q.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n  img {\n    width: 100vw;\n    height: 100vh;\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),ve=_.a.div(M||(M=Object(Q.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),ye=_.a.div(H||(H=Object(Q.a)(["\n  max-width: 874px;\n"]))),we=_.a.div(N||(N=Object(Q.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),ke=_.a.button(B||(B=Object(Q.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n  img {\n    width: 32px;\n  }\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n    img {\n      width: 25px;\n    }\n  }\n"]))),Ie=Object(_.a)(ke)(G||(G=Object(Q.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),Fe=_.a.div(U||(U=Object(Q.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),De=_.a.div(X||(X=Object(Q.a)(["\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n    img {\n      width: 100%;\n    }\n  }\n"]))),ze=_.a.div(V||(V=Object(Q.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),Se=_.a.div(W||(W=Object(Q.a)(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Ee=function(n){var e=Object(q.g)().id,t=Object(J.useState)({}),i=Object(ue.a)(t,2),a=i[0],o=i[1];return Object(J.useEffect)((function(){On.collection("movies").doc(e).get().then((function(n){n.exists?o(n.data()):console.log("no such document in firebase \ud83d\udd25")})).catch((function(n){console.log("Error getting document:",n)}))}),[e]),Object(nn.jsxs)(fe,{children:[Object(nn.jsx)(Oe,{children:Object(nn.jsx)("img",{src:a.backgroundImg})}),Object(nn.jsx)(ve,{children:Object(nn.jsx)("img",{src:a.titleImg})}),Object(nn.jsxs)(ye,{children:[Object(nn.jsxs)(we,{children:[Object(nn.jsxs)(ke,{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fplay-icon-black.png?alt=media&token=6872205f-1fbe-4e2a-9ae2-5eb6daa5ba42"}),Object(nn.jsx)("span",{children:"Play"})]}),Object(nn.jsxs)(Ie,{children:[Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fplay-icon-white.png?alt=media&token=b1cb3255-b61b-46d8-a493-a50bcdd0dbfd"}),Object(nn.jsx)("span",{children:"Trailer"})]}),Object(nn.jsxs)(Fe,{children:[Object(nn.jsx)("span",{}),Object(nn.jsx)("span",{})]}),Object(nn.jsx)(De,{children:Object(nn.jsx)("div",{children:Object(nn.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fgroup-icon.png?alt=media&token=dc0e94ad-79de-47d2-abdb-f82a1fb355c1"})})})]}),Object(nn.jsx)(ze,{children:a.subTitle}),Object(nn.jsx)(Se,{children:a.description})]})]})};var Ae=function(){return Object(nn.jsx)("div",{className:"App",children:Object(nn.jsxs)($.a,{children:[Object(nn.jsx)(Cn,{}),Object(nn.jsxs)(q.c,{children:[Object(nn.jsx)(q.a,{exact:!0,path:"/",children:Object(nn.jsx)(dn,{})}),Object(nn.jsx)(q.a,{path:"/home",children:Object(nn.jsx)(he,{})}),Object(nn.jsx)(q.a,{path:"/detail/:id",children:Object(nn.jsx)(Ee,{})})]})]})})},Te=Object(vn.a)({reducer:{user:zn,movie:$n},middleware:Object(vn.c)({serializableCheck:!1})});Z.a.render(Object(nn.jsx)(Y.a.StrictMode,{children:Object(nn.jsx)(gn.a,{store:Te,children:Object(nn.jsx)(Ae,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.61516848.chunk.js.map