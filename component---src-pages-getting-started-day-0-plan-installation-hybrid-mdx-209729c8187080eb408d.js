(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{U47m:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var i=n("k1TG"),r=n("8o2o"),o=(n("q1tI"),n("7ljp")),a=n("013z"),s=n("T0C+"),c=(n("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},p=l("PageDescription"),b=l("InlineNotification"),u={_frontmatter:c},h=a.a;function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(h,Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"Provides the considerations and steps to prepare an OpenShift cluster for\nan installation of ",Object(o.b)(s.a,{name:"shortName",mdxType:"Globals"})," ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"}),".")),Object(o.b)("h2",null,"1. Provision the cluster"),Object(o.b)("p",null,"Provisioning the OpenShift cluster is the minimum requirement to prepare for the Toolkit install. The cluster could be\nOpenShift CRC running on a laptop, a cloud-managed OpenShift cluster on AWS or Azure, or an on-premise install of\nOpenShift. We’ll leave the steps to provision to you since the details will vary considerably depending upon the\napproach. However, whichever platform you use we highly recommend utilizing or developing automation scripts to\nperform the provisioning, so that it can be done repeatably."),Object(o.b)("p",null,"Here are some resources that might help get started:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"./openshift-crc-setup"}),"OpenShift CRC setup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-aws"}),"OpenShift on AWS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-gcp"}),"OpenShift on GCP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-azure"}),"OpenShift on Azure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-vmware"}),"OpenShift on VMWare"))),Object(o.b)(b,{mdxType:"InlineNotification"},Object(o.b)("p",null,"The ",Object(o.b)(s.a,{name:"longName",mdxType:"Globals"})," is not responsible for maintaining the Terraform scripts provided in the links above\nand does not give any guarantee as to their current condition. If there are any issues with those scripts it would be\nbest to pursue it with the maintainers by raising issues against the appropriate repository.")),Object(o.b)("h2",null,"2. Configure access to the cluster"),Object(o.b)("p",null,"In order to interact with the cluster, user credentials need to be established having Cluster Admin rights. The initial\n",Object(o.b)("inlineCode",{parentName:"p"},"kubeadmin")," user (or whatever name is used after it is changed) can be used or a new user can be added for use by\nthe provisioning scripts."),Object(o.b)("h2",null,"Next steps"),Object(o.b)("p",null,"Now that the cluster has been provisioned and the access control has been configured, you are ready to move to the next\nstep and perform the installation with the Toolkit. Before moving on, be sure to record the following information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OpenShift login user (user id with Cluster Admin permission)"),Object(o.b)("li",{parentName:"ul"},"OpenShift login password"),Object(o.b)("li",{parentName:"ul"},"OpenShift server url")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-plan-installation-hybrid-mdx-209729c8187080eb408d.js.map