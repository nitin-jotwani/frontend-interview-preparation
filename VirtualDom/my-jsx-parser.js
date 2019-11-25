/*
Recreate situation like JSX.Transforms HTML like syntax into js function calls.
(in React it is transferred as React.createElement)

It simply creates DOM element with 
nodeName, 
Secondly, sets its attributes, 
and last step to append child nodes with the check for text nodes.
*/
export default function hyperscript(nodeName, attrs, ...children) {
  const $el = document.createElement(nodeName);

  for (let key in attrs) {
    $el.setAttribute(key, attrs[key]);
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      $el.appendChild(document.createTextNode(child));
    } else {
      $el.appendChild(child);
    }
  });

  return $el;
}

export function vDOM(nodeName, attrs, ...children) {
  console.log({ nodeName, attrs, children })
  return {
    nodeName,
    attrs,
    children
  }
}

// renderVDom — turns virtual DOM into DOM element
export function renderVDom(vNode) {
  const { nodeName, attrs, children }= vNode;
  if(vNode.split) return document.createTextNode(vNode);
  const $el = document.createElement(nodeName);

  for (let key in attrs) {
    $el.setAttribute(key, attrs[key]);
  }

  (children || []).forEach(child => $el.appendChild(renderVDom(child)))

  return $el;
}