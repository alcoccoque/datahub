"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2555],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,b=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(b,c(c({ref:t},d),{},{components:n})):a.createElement(b,c({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),c=["components"],s={sidebar_position:31,title:"DataHubAccessToken",sidebar_label:"DataHubAccessToken",slug:"/generated/metamodel/entities/datahubaccesstoken",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubAccessToken.md"},i="DataHubAccessToken",l={unversionedId:"docs/generated/metamodel/entities/dataHubAccessToken",id:"docs/generated/metamodel/entities/dataHubAccessToken",isDocsHomePage:!1,title:"DataHubAccessToken",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubAccessToken.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubaccesstoken",permalink:"/docs/generated/metamodel/entities/datahubaccesstoken",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubAccessToken.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,title:"DataHubAccessToken",sidebar_label:"DataHubAccessToken",slug:"/generated/metamodel/entities/datahubaccesstoken",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubAccessToken.md"},sidebar:"overviewSidebar",previous:{title:"Telemetry",permalink:"/docs/generated/metamodel/entities/telemetry"},next:{title:"DataHub GraphQL API",permalink:"/docs/api/graphql/overview"}},d=[{value:"Aspects",id:"aspects",children:[{value:"dataHubAccessTokenInfo",id:"datahubaccesstokeninfo",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubaccesstoken"},"DataHubAccessToken"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubaccesstokeninfo"},"dataHubAccessTokenInfo"),(0,o.kt)("p",null,"Information about a DataHub Access Token"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubAccessTokenInfo"\n  },\n  "name": "DataHubAccessTokenInfo",\n  "namespace": "com.linkedin.access.token",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "User defined name for the access token if defined."\n    },\n    {\n      "Searchable": {\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "actorUrn",\n      "doc": "Urn of the actor to which this access token belongs to."\n    },\n    {\n      "Searchable": {\n        "fieldType": "URN"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "ownerUrn",\n      "doc": "Urn of the actor which created this access token."\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT",\n        "queryByDefault": false\n      },\n      "type": "long",\n      "name": "createdAt",\n      "doc": "When the token was created."\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT",\n        "queryByDefault": false\n      },\n      "type": "long",\n      "name": "expiresAt",\n      "doc": "When the token was expires."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the token if defined."\n    }\n  ],\n  "doc": "Information about a DataHub Access Token"\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);