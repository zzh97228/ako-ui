import{B as e,l,f as a,g as t,D as d,t as r,s as o}from"./framework.f4907b1f.js";const s={data:()=>({word:"hello world"}),computed:{rules:()=>[e=>e.length>0&&"hhahahaha"]}},i='{"title":"Field","description":"","frontmatter":{},"relativePath":"components/field.md","lastUpdated":1612851301220}',n=t("h1",{id:"field"},[t("a",{class:"header-anchor",href:"#field","aria-hidden":"true"},"#"),o(" Field")],-1);s.render=function(o,s,i,u,f,h){const c=e("ac-text-input"),p=e("ac-field");return l(),a("div",null,[n,t(p,{modelValue:f.word,"onUpdate:modelValue":s[1]||(s[1]=e=>f.word=e),"label-col":"6","input-col":"6",rules:h.rules},{default:d((()=>[t(c)])),_:1},8,["modelValue","rules"]),t("p",null,r(f.word),1)])};export default s;export{i as __pageData};
