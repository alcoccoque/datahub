"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5932],{4137:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=u(n),s=r,k=g["".concat(p,".").concat(s)]||g[s]||m[s]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5071:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=["components"],o={title:"Glue",sidebar_label:"Glue",slug:"/generated/ingestion/sources/glue",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/glue.md"},p="Glue",u={unversionedId:"docs/generated/ingestion/sources/glue",id:"docs/generated/ingestion/sources/glue",isDocsHomePage:!1,title:"Glue",description:"Module glue",source:"@site/genDocs/docs/generated/ingestion/sources/glue.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/glue",permalink:"/docs/generated/ingestion/sources/glue",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/glue.md",tags:[],version:"current",frontMatter:{title:"Glue",sidebar_label:"Glue",slug:"/generated/ingestion/sources/glue",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/glue.md"},sidebar:"overviewSidebar",previous:{title:"File",permalink:"/docs/generated/ingestion/sources/file"},next:{title:"SAP HANA",permalink:"/docs/generated/ingestion/sources/hana"}},d=[{value:"Module <code>glue</code>",id:"module-glue",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3}],level:2},{value:"IAM permissions",id:"iam-permissions",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:d};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"glue"},"Glue"),(0,l.kt)("h2",{id:"module-glue"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"glue")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/domains"},"Domains")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported via the ",(0,l.kt)("inlineCode",{parentName:"td"},"domain")," config field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,l.kt)("p",null,"Note: if you also have files in S3 that you'd like to ingest, we recommend you use Glue's built-in data catalog. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/s3"},"here")," for a quick guide on how to set up a crawler on Glue and ingest the outputs with DataHub."),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables in the Glue catalog"),(0,l.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,l.kt)("li",{parentName:"ul"},"Table metadata, such as owner, description and parameters"),(0,l.kt)("li",{parentName:"ul"},"Jobs and their component transformations, data sources, and data sinks")),(0,l.kt)("h2",{id:"iam-permissions"},"IAM permissions"),(0,l.kt)("p",null,"For ingesting datasets, the following IAM permissions are required:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Effect": "Allow",\n    "Action": [\n        "glue:GetDatabases",\n        "glue:GetTables"\n    ],\n    "Resource": [\n        "arn:aws:glue:$region-id:$account-id:catalog",\n        "arn:aws:glue:$region-id:$account-id:database/*",\n        "arn:aws:glue:$region-id:$account-id:table/*"\n    ]\n}\n')),(0,l.kt)("p",null,"For ingesting jobs (",(0,l.kt)("inlineCode",{parentName:"p"},"extract_transforms: True"),"), the following additional permissions are required:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Effect": "Allow",\n    "Action": [\n        "glue:GetDataflowGraph",\n        "glue:GetJobs",\n    ],\n    "Resource": "*"\n}\n')),(0,l.kt)("p",null,"plus ",(0,l.kt)("inlineCode",{parentName:"p"},"s3:GetObject")," for the job script locations."),(0,l.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[glue]'\n")),(0,l.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: glue\n  config:\n    # Coordinates\n    aws_region: "my-aws-region"\n\nsink:\n  # sink configs\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"row_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for row count in glue table."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"column_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for column count in glue table."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unique_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the count of unique value in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unique_proportion"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the proportion of unique values in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the count of null values in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null_proportion"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the proportion of null values in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the min value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the max value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the mean value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"median"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the median value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stdev"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the standard deviation of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The platform that this source connects to"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_access_key_id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_secret_access_key"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_session_token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_role"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_profile"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Named AWS profile to use, if not set the default will be used"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_region"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS region code."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_endpoint_url"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_proxy"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extract_owners"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"When enabled, extracts ownership from Glue directly and overwrites existing owners. When disabled, ownership is left empty for datasets."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extract_transforms"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to extract Glue transform jobs."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"underlying_platform"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"@deprecated(Use ",(0,l.kt)("inlineCode",{parentName:"td"},"platform"),") Override for platform name. Allowed values - ",(0,l.kt)("inlineCode",{parentName:"td"},"glue"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"athena")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ignore_unsupported_connectors"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore unsupported connectors. If disabled, an error will be raised."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emit_s3_lineage"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to emit S3-to-Glue lineage."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"glue_s3_lineage_direction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"upstream"),", S3 is upstream to Glue. If ",(0,l.kt)("inlineCode",{parentName:"td"},"downstream")," S3 is downstream to Glue."),(0,l.kt)("td",{parentName:"tr",align:null},"upstream")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog_id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The aws account id where the target glue catalog lives. If None, datahub will ingest glue in aws caller's account."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_s3_bucket_tags"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"If an S3 Buckets Tags should be created for the Tables ingested by Glue. Please Note that this will not apply tags to any folders ingested, only the files."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_s3_object_tags"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"If an S3 Objects Tags should be created for the Tables ingested by Glue."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_patterns"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"Regex patterns for filtering partitions for profile. The pattern should be a string like: \"{'key':'value'}\"."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_patterns.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_patterns.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_patterns.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_patterns.alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"regex patterns for databases to filter in ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"regex patterns for tables to filter in ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict","[str, AllowDenyPattern]"),(0,l.kt)("td",{parentName:"tr",align:null},"regex patterns for tables to filter to assign domain_key."),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain.",(0,l.kt)("inlineCode",{parentName:"td"},"key"),".allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain.",(0,l.kt)("inlineCode",{parentName:"td"},"key"),".deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain.",(0,l.kt)("inlineCode",{parentName:"td"},"key"),".ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain.",(0,l.kt)("inlineCode",{parentName:"td"},"key"),".alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"GlueProfilingConfig (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"Configs to ingest data profiles from glue table"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.row_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for row count in glue table."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.column_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for column count in glue table."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.unique_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the count of unique value in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.unique_proportion"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the proportion of unique values in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.null_count"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the count of null values in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.null_proportion"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the proportion of null values in a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.min"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the min value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.max"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the max value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.mean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the mean value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.median"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the median value of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.stdev"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter name for the standard deviation of a column."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.partition_patterns"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"Regex patterns for filtering partitions for profile. The pattern should be a string like: \"{'key':'value'}\"."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.partition_patterns.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.partition_patterns.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.partition_patterns.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profiling.partition_patterns.alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]"))))),(0,l.kt)("h2",{id:"compatibility"},"Compatibility"),(0,l.kt)("p",null,'To capture lineage across Glue jobs and databases, a requirements must be met \u2013 otherwise the AWS API is unable to report any lineage. The job must be created in Glue Studio with the "Generate classic script" option turned on (this option can be accessed in the "Script" tab). Any custom scripts that do not have the proper annotations will not have reported lineage.'),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.aws.glue.GlueSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/aws/glue.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for Glue, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);