(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{449:function(t,s,a){t.exports=a.p+"assets/img/1.bb0440e4.png"},462:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"运行-runclient-时无法加载资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-runclient-时无法加载资源"}},[t._v("#")]),t._v(" 运行 runClient 时无法加载资源")]),t._v(" "),e("p",[t._v("于ForgeGradle 3.+版本运行"),e("code",[t._v("runClient")]),t._v("时无法加载资源，表现为模组信息（"),e("code",[t._v("mcmod.info")]),t._v("文件）无法加载，或纹理贴图文件无法加载。但是运行"),e("code",[t._v("build")]),t._v("并将生成的模组安装到游戏中时，又能够正常地加载模组信息和纹理贴图文件。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("查看图片")]),t._v(" "),e("p",[e("img",{attrs:{src:a(449),alt:""}})])]),t._v(" "),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("build.gradle")]),t._v("文件内容末尾添加以下代码：")]),t._v(" "),e("div",{staticClass:"language-groovy line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("sourceSets "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    main "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourcesDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classesDir \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("其他解决方案①")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("build.gradle")]),t._v("文件内容末尾添加以下代码：")]),t._v(" "),e("div",{staticClass:"language-groovy line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("sourceSets "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    main "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourcesDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputDir\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("其他解决方案②")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("build.gradle")]),t._v("文件内容末尾添加以下代码：")]),t._v(" "),e("div",{staticClass:"language-groovy line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("sourceSets "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmain "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\toutput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourcesDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build/combined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tjava"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputDir "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build/combined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.mcbbs.net/thread-1173660-1-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于IDEA构建模组时资源文件（如mcmod.info等）无法正确打包的解决办法"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forums.minecraftforge.net/topic/77064-solved-modding-with-intellij-the-asset-problem/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Modding with IntelliJ | The asset problem"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forums.minecraftforge.net/topic/61626-add-extra-resource-folder-to-runclient/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add extra resource folder to runClient"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.reddit.com/r/feedthebeast/comments/e4hfzz/intellij_idea_runclient_task_textures_not_shown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA: runClient task: textures not shown"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/DeflatedPickle/minecraft-forge-1.12-template/blob/main/build.gradle",target:"_blank",rel:"noopener noreferrer"}},[t._v("DeflatedPickle/minecraft-forge-1.12-template"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);