import{_ as a,l as o,G as s,d as p,H as n}from"./mermaid.core-Doc2G8mG.js";import{p as m}from"./radar-MK3ICKWK-CnpK-hDo.js";import"./index-Sggqy_9J.js";import"./owner-D8MiYTPz.js";import"./isEmpty-C2NQZFK9.js";import"./line-D5asVbEF.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./_baseUniq-C0asizYL.js";import"./_basePickBy-DzHu_GpB.js";import"./has-CVu40qOM.js";import"./clone-lQlUZaTE.js";var g={parse:a(async r=>{const t=await m("info",r);o.debug(t)},"parse")},d={version:n.version},v=a(()=>d.version,"getVersion"),c={getVersion:v},l=a((r,t,i)=>{o.debug(`rendering info diagram
`+r);const e=s(t);p(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${i}`)},"draw"),f={draw:l},k={parser:g,db:c,renderer:f};export{k as diagram};
