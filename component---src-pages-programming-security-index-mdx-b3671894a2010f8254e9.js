(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{V2Bb:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return p})),o.d(t,"default",(function(){return h}));var a=o("k1TG"),i=o("8o2o"),n=(o("q1tI"),o("7ljp")),r=o("013z"),p=(o("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=c("PageDescription"),l=c("AnchorLinks"),u=c("AnchorLink"),d={_frontmatter:p},b=r.a;function h(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(n.b)(b,Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use App ID to authenticate application clients and users")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"IBM Garage for Cloud Developer Tools provides a set of tools to speed development of applications built for Kubernetes or OpenShift, using agile DevOps processes."),Object(n.b)("p",null,"No matter what kind of applications you’re building, whether you want to leverage Service Mesh, Ingress Controller, or simply use application SDKs, AppID can be used to help secure you application experience."),Object(n.b)("p",null," You can easily use App ID for all these scenarios easily add user authentication to your app, protecting applications running on Kubernetes or OpenShift clusters, getting administrative and authentication events in Activity Tracker."),Object(n.b)("h2",null,"What is App ID"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/appid"}),"IBM Cloud App ID")," is an IBM Cloud service that enables developers to easily add authentication capabilities to their applications while all the operational aspects of the service are handled by the IBM Cloud platform. App ID is intended to enable developers to add authentication to their application without having to know anything about various security protocols. The service provides capabilities like Cloud Directory (a highly scalable user repository in the cloud), enterprise identity federation, social login, SSO, customizable Login Widget UI, flexible access controls and user profiles, multi-factor authentication, a set of open-sourced SDKs for easy app instrumentation."),Object(n.b)("h2",null,"Setting up Security"),Object(n.b)("p",null,"Setting up application security can be complicated. For most developers, it can be one of the hardest parts of creating an app. How can you be sure that you are securely storing your users’ information? How can you be sure your system cannot be infiltrated? How do you manage access controls? How do you ensure that you address any and all vulnerabilities? What if your application runs on different cloud providers with completely different security systems?"),Object(n.b)("p",null,"In most cases, developers prefer to focus on delivering the business value while leaving any security aspects to experts and specialized products. There are a number of approaches"),Object(n.b)("h3",null,"The programmatic approach"),Object(n.b)("p",null,"Most developers are fairly familiar with the programmatic approach. You pull an SDK into your app, you change some code, you do some configurations, and voila, your app is protected. This approach has existed for ages, and while it is a valid one, it has some scaling concerns."),Object(n.b)("p",null,"Imagine having a microservices-based architecture with dozens, or even hundreds, of microservices. Instrumenting each one with SDK would work but the overhead will grow fast as your ecosystem evolves. Each time you need to update the SDK version, you’ll need to update all your microservices’ code and redeploy them."),Object(n.b)("h3",null,"The declarative approach"),Object(n.b)("p",null,"The declarative approach is a more modern, recommended way of protecting your distributed apps. With the declaraåtive approach, in most cases, you wouldn’t need to change a single line in your application in order to protect it or even redeploy. You just need to “declare”—hence the name—that you want your app to be protected instead."),Object(n.b)("p",null,"The declarative approach is fully language-agnostic, it helps you to scale more easily, and allows to have a centralized way of managing security settings for all your apps and microservices. Updating security settings is also significantly easier with the declarative approach since you simply update the configuration, which is immediately applied without changing or redeploying your apps."),Object(n.b)("h3",null,"Declaratively protecting your apps"),Object(n.b)("p",null,"If you’re running your apps on managed Red Hat OpenShift on IBM Cloud, the easiest approach is to use the declarative Ingress annotation. Add a single line to your Ingress resource YAML file, and your app is protected. See the full documentation ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-kube-auth"}),"here")," and a video tutorial below:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/sqGS7naTkoU"}),"Securing your IBM Kubernetes or Red Hat OpenShift managed cluster"))),Object(n.b)("h3",null,"Programmatically protecting your apps"),Object(n.b)("p",null,"Protecting your apps with a programmatic approach can be different depending on what language and/or what web framework you’re using. The concept is the same—add an SDK to your app (or use the one bundled within your framework), configure it, and you’re done. However, different SDKs and framework are configured in different ways. The list below covers most popular scenarios but, in general, you can use App ID with any other web application framework that supports OAuth2 and OpenID Connect."),Object(n.b)("p",null,"Need to protect an existing Node.js application, be it web application or backend? Use the following links to see documentation and videos:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/6roa1ZOvwtw"}),"Protecting Node.js Web Applications with IBM Cloud App ID")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/jJLSgkHpZwA"}),"Protecting Node.js Backend Application with IBM Cloud App ID"))),Object(n.b)("p",null,"Need to protect an existing Java application running on Liberty server, be it web application or backend? Use the following links to see documentation and videos:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/o_Er69YUsMQ"}),"Protecting Liberty Java Web Applications with IBM Cloud App ID")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/QA6DY2qqLaw"}),"Protecting Liberty Java Backend Applications with IBM Cloud App ID"))),Object(n.b)("p",null,"Need to protect an existing Spring Boot application, be it web application or backend? Use the following links to see documentation and videos:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/EZWl1ij3dAE"}),"Protecting Spring Boot Web Applications with IBM Cloud App ID")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/roQ4mKJBOqg"}),"Protecting Spring Boot Backend Application with IBM Cloud App ID"))),Object(n.b)("h2",null,"Other Links"),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(u,{to:"https://cloud.ibm.com/docs/services/appid?topic=appid-about",mdxType:"AnchorLink"},"IBM Cloud App ID: About App ID"),Object(n.b)(u,{to:"https://cloud.ibm.com/docs/services/appid?topic=appid-at-events",mdxType:"AnchorLink"},"IBM Cloud App ID: Activity Tracker events")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-programming-security-index-mdx-b3671894a2010f8254e9.js.map