(()=>{"use strict";const e=function(){!function(){let e=document.querySelectorAll(".form");console.log(e),e.length>0&&e.forEach((e=>{e.remove()}))}();let e=document.createElement("form");return e.classList.add("form"),e.innerText="asd",e};(()=>{const t=[],n=[];let o=[];const c=document.createElement("section");c.classList.add("projectsSection"),root.appendChild(c);const a=document.createElement("section");a.classList.add("navBar");const r=document.createElement("button");r.innerText="NEW PROJECT",r.setAttribute("name","newProject"),r.onclick=function(t){t.preventDefault;let n=t.target.getAttribute("name");if(console.log(n),"newProject"===n){let t=e();root.appendChild(t)}};const i=document.createElement("button");i.setAttribute("name","newToDo"),i.innerText="NEW TO-DO",a.appendChild(r),a.appendChild(i),root.appendChild(a);const s=document.createElement("section");s.classList.add("toDosSection"),root.appendChild(s);class d{constructor(e,t,o,c,a){this.title=e,this.description=t,this.dueDate=o,this.priority=c,this.notes=a,this.project="any",this.any="any",n.push({...this})}}class l{constructor(e){this.name=e,t.push(this)}}function p(e,t){document.querySelector("#root");const n=document.querySelector(".toDoArticle");n&&n.remove();const c=document.createElement("article");c.classList.add("toDoArticle"),t.forEach((n=>{const a=document.createElement("div");a.classList.add("toDoCard");const r=document.createElement("h2");r.innerText=`${n.title}`,a.appendChild(r);const i=document.createElement("p");i.innerText=`description: ${n.description}`,a.appendChild(i);const d=document.createElement("p");d.innerText=`Due date: ${n.dueDate}`,a.appendChild(d);const l=document.createElement("p");l.innerText=`Priority: ${n.priority}`,a.appendChild(l);const p=document.createElement("p");p.innerText=`notes: ${n.notes}`,a.appendChild(p);const m=document.createElement("form"),h=document.createElement("label");h.setAttribute("for","projects"),h.innerText="choose project: ";const f=document.createElement("select");f.setAttribute("name","projects"),f.setAttribute("id","projects"),f.classList.add("select");const E=document.createElement("option");E.classList.add("option"),E.setAttribute("value","any"),E.innerText="Any",f.appendChild(E),e.forEach((e=>{const t=document.createElement("option");t.classList.add("option"),t.setAttribute("value",`${e.name}`),t.innerText=`${e.name}`,f.appendChild(t)})),m.onchange=function(c){c.preventDefault();const a=c.target.value;n.project=a;const r=t.findIndex((e=>e.title===n.title));t[r]=n,o=t,u(e,o)},m.appendChild(h),m.appendChild(f),a.appendChild(m),c.appendChild(a),s.appendChild(c)}))}function u(e,n){const o=document.querySelector(".projectsContainer");o&&o.remove();const a=document.createElement("div");a.classList.add("projectsContainer");const r=document.createElement("button");if(r.innerText="Any",r.classList.add("projectBtn"),r.setAttribute("any","any"),r.addEventListener("click",(()=>{let e=n.filter((e=>"any"===e.any));p(t,e)})),a.appendChild(r),e.length>0){function i(e){e.preventDefault;let o=e.target.getAttribute("project-name"),c=n.filter((e=>e.project===o));p(t,c)}e.forEach((e=>{const t=document.createElement("button");t.innerText=e.name,t.classList.add("projectBtn"),t.addEventListener("click",i),t.setAttribute("project-name",e.name),a.appendChild(t)}))}c.appendChild(a)}new d("watarfo","watarfo","watarfo","watarfo","watarfo"),new d("watarfo2","watarfo2","watarfo2","watarfo2","watarfo2"),new l("proyecto 1"),new l("proyecto 2"),u(t,n),p(t,n)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUNwUEp3RCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiB0aGUgSFRNTCBmb3IgdGhlIHByb2plY3QgZm9ybVxuICAgICAgKGZ1bmN0aW9uIGNoZWNrSWZJdEV4aXN0cygpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByZXZpb3VzRm9ybSlcbiAgICAgICAgaWYgKHByZXZpb3VzRm9ybS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcmV2aW91c0Zvcm0uZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH0gXG4gICAgICB9KSgpO1xuICAgICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpXG4gICAgICBcbiAgICAgIHByb2plY3RGb3JtLmlubmVyVGV4dCA9ICdhc2QnXG4gICAgICAgIFxuICAgICAgcmV0dXJuIHByb2plY3RGb3JtO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Eb0Zvcm0oKSB7XG4gICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiB0aGUgSFRNTCBmb3IgdGhlIHRvLWRvIGZvcm1cbiAgICAgIGxldCB0b0RvRm9ybTsgLyogbWUgZmFsdGEgaGFjZXIgbG8gbWlzbW8gcXVlIGhpY2UgY29uIGVsIGZvcm0gZGUgYXJyaWJhISAqL1xuICAgICAgcmV0dXJuIHRvRG9Gb3JtO1xuICAgIH1cbiAgXG4gICAgLy8gRXhwb3NlIHRoZSBmdW5jdGlvbnMgeW91IHdhbnQgdG8gbWFrZSBwdWJsaWNcbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdEZvcm06IGNyZWF0ZVByb2plY3RGb3JtLFxuICAgICAgdG9Eb0Zvcm06IGNyZWF0ZVRvRG9Gb3JtLFxuICAgIH07XG4gIH0pKCk7IiwiXG5pbXBvcnQgeyBmb3JtcyB9IGZyb20gXCIuL2Zvcm1zXCI7XG5leHBvcnQgY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gKCkgPT4ge1xuICAgIC8qIGdsb2JhbCB2YXJpYWJsZXMgKi9cbiAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gW107XG4gICAgY29uc3QgdG9Eb3MgPSBbXTtcbiAgICBsZXQgdG9Eb3NVcGRhdGVkID0gW107XG4gICAgXG4gICBcbiAgICAvKiBET00gc3RhdGljIHNlY3Rpb25zICovXG4gICAgXG5cbiAgICBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgcHJvamVjdHNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzU2VjdGlvbicpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQocHJvamVjdHNTZWN0aW9uKVxuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZCYXInKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdC5pbm5lclRleHQgPSAnTkVXIFBST0pFQ1QnO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Byb2plY3QnKTtcbiAgICBuZXdQcm9qZWN0Lm9uY2xpY2sgPSBoYW5kbGVDbGljaztcblxuICAgIGNvbnN0IG5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUb0RvLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXdUb0RvJyk7XG4gICAgbmV3VG9Eby5pbm5lclRleHQgPSAnTkVXIFRPLURPJztcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmV3VG9Ebyk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0XG4gICAgICAgIGxldCBjbGlja2VkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWQpXG4gICAgICAgIGlmIChjbGlja2VkID09PSAnbmV3UHJvamVjdCcpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0Rm9ybSA9IGZvcm1zLnByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICByb290LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRvRG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHRvRG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvRG9zU2VjdGlvbicpXG4gICAgcm9vdC5hcHBlbmRDaGlsZCh0b0Rvc0NvbnRhaW5lcilcblxuICAgIFxuICAgIC8qIGNsYXNzZXMgKi9cbiAgICBjbGFzcyBUb2RvIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUsXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXMsXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSAnYW55JztcbiAgICAgICAgICAgIHRoaXMuYW55ID0gJ2FueSdcbiAgICAgICAgICAgIHRvRG9zLnB1c2goIHsgLi4udGhpcyB9IClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxuICAgIC8qIHRveSBvYmplY3RzIHRvIHNlZSBpZiBpdCB3b3JrcyAqL1xuICAgIGNvbnN0IHRvZG9yYW5kb20gPSBuZXcgVG9kbyhcIndhdGFyZm9cIiwgXCJ3YXRhcmZvXCIsIFwid2F0YXJmb1wiLCBcIndhdGFyZm9cIiwgXCJ3YXRhcmZvXCIsICk7XG4gICAgY29uc3QgdG9kb3JhbmRvbTIgPSBuZXcgVG9kbyhcIndhdGFyZm8yXCIsIFwid2F0YXJmbzJcIiwgXCJ3YXRhcmZvMlwiLCBcIndhdGFyZm8yXCIsIFwid2F0YXJmbzJcIiwgKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0YXJkbyA9IG5ldyBQcm9qZWN0KCdwcm95ZWN0byAxJyk7XG4gICAgY29uc3QgcHJvamVjdGFyZG8yID0gbmV3IFByb2plY3QoJ3Byb3llY3RvIDInKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0FycmF5LCB0b0Rvcyk7XG4gICAgXG4gICAgcmVuZGVyVG9Ebyhwcm9qZWN0c0FycmF5LCB0b0Rvcyk7XG4gICAgXG4gICBcbiAgICBcbiAgICBcbiAgICAvKiByZW5kZXIgYSB0b2RvIGl0ZW0gKi9cbiAgICBmdW5jdGlvbiByZW5kZXJUb0RvIChwcm9qZWN0cywgdG9Eb3MpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgIFxuICAgICAgICBcbiAgICBjb25zdCB0b0Rvc1ByZXZpb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9BcnRpY2xlJyk7XG4gICAgaWYgKHRvRG9zUHJldmlvdXMpIHtcbiAgICAgICAgdG9Eb3NQcmV2aW91cy5yZW1vdmUoKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgdG9Eb0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgdG9Eb0FydGljbGUuY2xhc3NMaXN0LmFkZCgndG9Eb0FydGljbGUnKTtcbiAgICBcbiAgICB0b0Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgIFxuICAgIFxuICAgICAgICBjb25zdCB0b2RvQ2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b0RvQ2FyZCcpXG4gICAgICAgIFxuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGAke3RvZG8udGl0bGV9YFxuICAgICAgICB0b2RvQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgZGVzY3JpcHRpb246ICR7dG9kby5kZXNjcmlwdGlvbn1gO1xuICAgICAgICB0b2RvQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZSBkYXRlOiAke3RvZG8uZHVlRGF0ZX1gO1xuICAgICAgICB0b2RvQ2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgICAgIHRvZG9DYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5vdGVzLmlubmVyVGV4dCA9IGBub3RlczogJHt0b2RvLm5vdGVzfWA7XG4gICAgICAgIHRvZG9DYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIFxuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3RzJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLmlubmVyVGV4dCA9ICdjaG9vc2UgcHJvamVjdDogJ1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0cycpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMnKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QnKVxuICAgICAgICBjb25zdCBhbnlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgYW55T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xuICAgICAgICBhbnlPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdhbnknKTtcbiAgICAgICAgYW55T3B0aW9uLmlubmVyVGV4dCA9ICdBbnknO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGFueU9wdGlvbilcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKGBvcHRpb25gKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGAke3Byb2plY3QubmFtZX1gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdEZvcm0ub25jaGFuZ2UgPSBoYW5kbGVDaGFuZ2U7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgICAgIHRvZG9DYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLnByb2plY3QgPSBzZWxlY3RlZFByb2plY3Q7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGluQXJyYXkgPSB0b0Rvcy5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRpdGxlID09PSB0b2RvLnRpdGxlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b0Rvc1tpbkFycmF5XSA9IHRvZG87XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvRG9zVXBkYXRlZCA9IHRvRG9zO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cywgdG9Eb3NVcGRhdGVkKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRvRG9BcnRpY2xlLmFwcGVuZENoaWxkKHRvZG9DYXJkQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHRvRG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9BcnRpY2xlKVxuICAgICAgICBcbiAgICB9KVxuICAgICBcbn1cbiAgICAvKiBwcm9qZWN0IHJlbmRlcmluZyAqL1xuICAgIGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzLCB0b0Rvcykge1xuICAgICAgICBcbiAgICAgICAgLyogY2hlY2sgaWYgcHJvamVjdHMgYWxyZWFkeSBleGlzdHMsIGFuZCByZW1vdmUgaXQqL1xuICAgICAgICBjb25zdCBwcmV2aW91c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpXG4gICAgICAgIGlmKHByZXZpb3VzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBwcmV2aW91c0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBpZiBpdCBkb2VzbnQgZXhpc3QsIGNyZWF0ZSBpdCAqL1xuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xuICAgICAgICAvKiByZW5kZXIgYW55IGJ1dHRvbiAqL1xuICAgICAgICBjb25zdCBhbnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYW55QnRuLmlubmVyVGV4dCA9ICdBbnknO1xuICAgICAgICBhbnlCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdEJ0bicpO1xuICAgICAgICBhbnlCdG4uc2V0QXR0cmlidXRlKCdhbnknLCAnYW55JylcbiAgICAgICAgYW55QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2plY3RUb0RvcyA9IHRvRG9zLmZpbHRlciggKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmFueSA9PT0gJ2FueSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlbmRlclRvRG8ocHJvamVjdHNBcnJheSwgcHJvamVjdFRvRG9zKVxuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbnlCdG4pXG4gICAgICAgIC8qIHJlbmRlciBlYWNoIHByb2plY3QgYXMgYSBidXR0b24sIGlmIHRoZXJlJ3MgbW9yZSB0aGFuIDAqL1xuICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RCdG4uaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdEJ0bicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QtbmFtZScsIHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdG4pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qIGV2ZW50IGxpc3RlbmVyLCByZW5kZXJzIGV2ZXJ5IGVsZW1lbnQgdGhhdCBjb3JyZXNwb25kcyB3aXRoIHRoZSBwcm9qZWN0IGNsaWNrZWQqL1xuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0XG4gICAgICAgICAgICBsZXQgcHJvamVjdENsaWNrZWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRvRG9zID0gdG9Eb3MuZmlsdGVyKCAoZWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwucHJvamVjdCA9PT0gcHJvamVjdENsaWNrZWQgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVuZGVyVG9Ebyhwcm9qZWN0c0FycmF5LCBwcm9qZWN0VG9Eb3MpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcilcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICB9XG4gICAgXG5cblxuIiwiaW1wb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5kb21NYW5pcHVsYXRpb24oKTtcblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJwcmV2aW91c0Zvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZm9yRWFjaCIsImZvcm0iLCJyZW1vdmUiLCJwcm9qZWN0Rm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJwcm9qZWN0c0FycmF5IiwidG9Eb3MiLCJ0b0Rvc1VwZGF0ZWQiLCJwcm9qZWN0c1NlY3Rpb24iLCJyb290IiwiYXBwZW5kQ2hpbGQiLCJuYXZCYXIiLCJuZXdQcm9qZWN0Iiwic2V0QXR0cmlidXRlIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrZWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJuZXdUb0RvIiwidG9Eb3NDb250YWluZXIiLCJUb2RvIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJ0aGlzIiwicHJvamVjdCIsImFueSIsInB1c2giLCJQcm9qZWN0IiwibmFtZSIsInJlbmRlclRvRG8iLCJwcm9qZWN0cyIsInF1ZXJ5U2VsZWN0b3IiLCJ0b0Rvc1ByZXZpb3VzIiwidG9Eb0FydGljbGUiLCJ0b2RvIiwidG9kb0NhcmRDb250YWluZXIiLCJzZWxlY3RMYWJlbCIsInByb2plY3RTZWxlY3QiLCJhbnlPcHRpb24iLCJvcHRpb24iLCJvbmNoYW5nZSIsInNlbGVjdGVkUHJvamVjdCIsInZhbHVlIiwiaW5BcnJheSIsImZpbmRJbmRleCIsImVsIiwicmVuZGVyUHJvamVjdHMiLCJwcmV2aW91c0NvbnRhaW5lciIsInByb2plY3RzQ29udGFpbmVyIiwiYW55QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3RUb0RvcyIsImZpbHRlciIsImhhbmRsZUNsaWNrIiwicHJvamVjdENsaWNrZWQiLCJwcm9qZWN0QnRuIiwiZG9tTWFuaXB1bGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==