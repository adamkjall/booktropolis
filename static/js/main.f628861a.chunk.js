(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(16),s=a.n(l),o=a(28),c=a(18),i=a(46),u=a(47),m=(a(63),a(64),a(52)),h=a(11),d=a(12),p=a(14),E=a(13),f=a(15),b=a(48),g=a.n(b),v=a(49),S=a.n(v),y=function(e){var t=e.id,a=e.isFlipped,n=e.handleClick,l=e.book,s=l.title,o=l.description,c=l.book_image,i=l.rank,u=l.author,m=l.publisher,h=l.rank_last_week,d=l.weeks_on_list,p=l.primary_isbn13,E=l.amazon_product_url;return r.a.createElement("div",{id:t,className:"bg-light-gray br3 ba b--black ma2 w-70 w-40-m w5-l shadow-5 grow pointer",onClick:function(){return n(t)}},r.a.createElement(S.a,{isFlipped:a},r.a.createElement("div",{key:"front"},r.a.createElement("img",{className:"br3 br--top w-100",src:c,alt:"book cover"}),r.a.createElement("div",{className:"pa2"},r.a.createElement("h2",{className:"mv0"},r.a.createElement("b",null,i&&"#"+i+" "),s))),r.a.createElement("div",{className:"br3 br--top pa3",key:"back"},r.a.createElement("div",{className:"pa2"},r.a.createElement("h1",{className:"mv0"},r.a.createElement("b",null,i&&"#"+i+" "),s),r.a.createElement("h3",{className:"mv1"},"By",r.a.createElement("b",null," ",u)),r.a.createElement("hr",null),r.a.createElement("p",null,o),r.a.createElement("hr",null),r.a.createElement("div",{className:"tl"},h?r.a.createElement("div",null,r.a.createElement("b",null,"Rank last week"),": ",h):null,r.a.createElement("b",null,"Weeks on list:")," ",d," ",r.a.createElement("br",null),r.a.createElement("b",null,"Publisher:")," ",m," ",r.a.createElement("br",null),r.a.createElement("b",null,"ISBN:")," ",p," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer"},"Get it on Amazon"))))))},k=a(7),C=a(104),O=a(105),w=a(106),N=a(107),_=a(108),D=a(109),I=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).textInput=r.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.handleKeyPress,a=e.searchChange;return r.a.createElement("input",{className:"bg-lightest-blue br3 ba b--black bw1 pa1 mt3 mt2-l mr3 shadow",type:"search",placeholder:"Search for books",onChange:a,onKeyPress:function(e){return t(e)},ref:this.textInput})}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).toggle=a.toggle.bind(Object(k.a)(a)),a.state={isOpen:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props,t=e.searchChange,a=e.handleKeyPress,n=e.handleShowBestSellers,l=e.handleRouteChange;return r.a.createElement("div",null,r.a.createElement(C.a,{color:"muted",light:!0,expand:"lg"},r.a.createElement(O.a,{onClick:function(){return l("home")}},r.a.createElement("h1",{className:"f-subheadline-ns f1 ma0 pointer"},"Booktropolis")),r.a.createElement(w.a,{className:"mt3",onClick:this.toggle}),r.a.createElement(N.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(_.a,{className:"ml-auto",navbar:!0},r.a.createElement(D.a,{onClick:function(){n(),l("home")}},r.a.createElement("h1",{className:"f2-ns f3 ma0 mr3 bb bw1 pointer"},"Best sellers")),r.a.createElement(D.a,{className:"mt-auto mr3"},r.a.createElement("h1",{className:"f2-ns f3 ma0 bb bw1 pointer"},"Favorites"))),r.a.createElement(_.a,{className:"ml-auto",navbar:!0},r.a.createElement(D.a,null,r.a.createElement(I,{searchChange:t,handleKeyPress:a})),r.a.createElement(D.a,{onClick:function(){return l("register")}},r.a.createElement("h1",{className:"f3-ns f4 ma0 mt1 mr3 pointer"},"Register")),r.a.createElement(D.a,{onClick:function(){return l("signIn")}},r.a.createElement("h1",{className:"f3-ns f4 ma0 mt1 pointer"},"Login"))))))}}]),t}(r.a.Component),j=a(110),R=a(111),F=a(112),P=a(113),T=a(114),U=a(115),A=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={validate:{emailState:"",passwordState:""}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"validateEmail",value:function(e){var t=this.state.validate;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?t.emailState="has-success":t.emailState="has-danger",this.setState({validate:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{className:"mv5 ba br3 bw1 shadow pa3 w-40-l w-60-m w-70"},r.a.createElement("h2",{className:"mb4"},"Sign in"),r.a.createElement(R.a,{className:""},r.a.createElement(F.a,null,r.a.createElement(P.a,null,r.a.createElement(T.a,{type:"text",name:"username",id:"signInUsername",placeholder:"Username",minlength:"4",maxlength:"20",valid:"has-success"===this.state.validate.emailState,invalid:"has-danger"===this.state.validate.emailState,required:!0,onChange:function(t){return e.validateEmail(t)}}))),r.a.createElement(F.a,null,r.a.createElement(P.a,null,r.a.createElement(T.a,{type:"password",name:"password",id:"signInPassword",placeholder:"Password",minlength:"6",maxlength:"25",required:!0}))),r.a.createElement(F.a,null,r.a.createElement(P.a,null,r.a.createElement(U.a,{className:"w-100 bg-green"},"LOGIN")))))}}]),t}(r.a.Component),L=(a(101),"IoNgBtPcB2BAFBogGs0w6VxskM9amKDP"),K=function(){return fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=".concat(L)).then(function(e){return e.json()}).then(function(e){return e.results.books})},q=function(e){var t=e.getFullYear(),a=e.getMonth()<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=e.getDate()<10?"0"+e.getDate():e.getDate();return"".concat(t,"-").concat(a,"-").concat(n)};function x(e){return null!==e.book_image}var M=function(e){return function(t){t({type:"REQUEST_BOOKS_PENDING"}),t({type:"RESET_FLIPPED_CARDS"}),function(e){if(!e)return K();var t=q(e);return fetch("https://api.nytimes.com/svc/books/v3/lists/".concat(t,"/hardcover-fiction.json?api-key=").concat(L)).then(function(e){return e.json()}).then(function(e){return e.results.books})}(e).then(function(e){return t({type:"REQUEST_BOOKS_SUCCESS",payload:e})}).catch(function(e){return t({type:"REQUEST_BOOKS_FAILED",payload:e})})}},Q=function(e){return function(t){t({type:"REQUEST_BOOKS_PENDING"}),t({type:"RESET_FLIPPED_CARDS"}),function(e){return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=").concat(20,"&key=").concat("AIzaSyB9wQyJ2N2x9z15nzvO5g-9o-eV_ZLkOkI")).then(function(e){return e.json()}).then(function(e){return e.items.map(function(e){return{title:e.volumeInfo.title,description:e.volumeInfo.description,author:void 0===e.volumeInfo.authors?"":e.volumeInfo.authors.join(", "),book_image:void 0===e.volumeInfo.imageLinks?null:e.volumeInfo.imageLinks.thumbnail,publisher:e.volumeInfo.publisher,primary_isbn13:void 0===e.volumeInfo.industryIdentifiers?"":e.volumeInfo.industryIdentifiers[0].identifier}})}).then(function(e){return e.filter(x)}).catch(console.log)}(e).then(function(e){return t({type:"REQUEST_BOOKS_SUCCESS",payload:e})}).catch(function(e){return t({type:"REQUEST_BOOKS_FAILED",payload:e})})}},G=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).onRouteChange=function(t){e.setState({route:t})},e.onDateChange=function(t){e.props.onSetDate(t),e.props.onRequestBestSellersByDate(t)},e.handleSearch=function(){e.props.onRequestBooksBySearch(e.props.searchField.toLowerCase())},e.handleKeyPress=function(t){"Enter"===t.key&&(console.log("hellooooo"),e.handleSearch(),e.setState({inSearchMode:!0}))},e.showBestSellers=function(){e.props.onSetDate(new Date),e.props.onRequestCurrentBestSellers(),e.setState({inSearchMode:!1})},e.state={inSearchMode:!1,route:"home",isSignedIn:"false"},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestCurrentBestSellers()}},{key:"getWeekNumber",value:function(e){(e=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))).setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1)),a=Math.ceil(((e-t)/864e5+1)/7);return[e.getUTCFullYear(),a]}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,a=e.onCardFlip,n=e.books,l=e.isPending,s=e.date,o=e.isFlipped,c=this.getWeekNumber(this.props.date),i=Object(m.a)(c,2),u=i[0],h=i[1];return r.a.createElement("div",{className:"center tc w-90-ns"},r.a.createElement(B,{searchChange:t,handleKeyPress:this.handleKeyPress,handleShowBestSellers:this.showBestSellers,handleRouteChange:this.onRouteChange}),"home"===this.state.route?this.state.inSearchMode?r.a.createElement("h2",{className:"f2 mt3 mb2"},"Search results:"):r.a.createElement("div",{className:"mt3 mb3 mh2"},r.a.createElement("h3",{className:"f2-ns f3"},"New York Times Best Sellers week ",h," ",u," "),r.a.createElement("div",{className:"mv3"},r.a.createElement(g.a,{style:{color:"blue"},className:"br3 pa1-ns ba b--black bw1",onChange:this.onDateChange,value:s,format:"d / M / y",minDetail:"decade",maxDate:new Date,required:!0,clearIcon:null,showLeadingZeros:!1})),r.a.createElement("div",{className:"flex flex-wrap justify-center"},l?r.a.createElement("h1",{className:"f1-ns f2 mt4 mb3"},"Loading..."):n?n.map(function(e,t){return r.a.createElement(y,{key:t,id:t,isFlipped:o[t],handleClick:a,book:e})}):r.a.createElement("h2",{className:"f3 mt3"},"No results found :("))):"signIn"===this.state.route?r.a.createElement(A,null):r.a.createElement("h1",null,"Register"))}}]),t}(r.a.Component),z=Object(o.b)(function(e){return{searchField:e.searchBooks.searchField,date:e.changeDate.date,books:e.requestBooks.books,isPending:e.requestBooks.isPending,error:e.requestBooks.error,isFlipped:e.updateFlippedCards.isFlipped}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onSetDate:function(t){return e(function(e){return{type:"CHANGE DATE",payload:e}}(t))},onRequestCurrentBestSellers:function(){return e(function(e){e({type:"REQUEST_BOOKS_PENDING"}),e({type:"RESET_FLIPPED_CARDS"}),K().then(function(t){return e({type:"REQUEST_BOOKS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_BOOKS_FAILED",payload:t})})})},onRequestBestSellersByDate:function(t){return e(M(t))},onRequestBooksBySearch:function(t){return e(Q(t))},onCardFlip:function(t){return e(function(e){return{type:"FLIP_CARD",payload:e}}(t))}}})(G),H=a(9),Y={searchField:""},Z={date:new Date},J={isPending:!1,books:[],error:""},W={isFlipped:[],prevCardId:-1},V=(a(102),Object(i.createLogger)()),$=Object(c.c)({searchBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(H.a)({},e,{searchField:t.payload});default:return e}},requestBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_BOOKS_PENDING":return Object(H.a)({},e,{isPending:!0});case"REQUEST_BOOKS_SUCCESS":return Object(H.a)({},e,{isPending:!1,books:t.payload});case"REQUEST_BOOKS_FAILED":return Object(H.a)({},e,{isPending:!1,error:t.payload});default:return e}},changeDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE DATE":return Object(H.a)({},e,{date:t.payload});default:return e}},updateFlippedCards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FLIP_CARD":var a=t.payload,n=e.isFlipped.slice();return n[a]=!n[a],-1!==e.prevCardId&&a!==e.prevCardId&&(n[e.prevCardId]=!n[a]),Object(H.a)({},e,{isFlipped:n,prevCardId:a});case"RESET_FLIPPED_CARDS":return Object(H.a)({},e,{isFlipped:[],prevCardId:-1});default:return e}}}),X=Object(c.d)($,Object(c.a)(u.a,V));s.a.render(r.a.createElement(o.a,{store:X},r.a.createElement(z,null)),document.getElementById("root"))},54:function(e,t,a){e.exports=a(103)},63:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.f628861a.chunk.js.map