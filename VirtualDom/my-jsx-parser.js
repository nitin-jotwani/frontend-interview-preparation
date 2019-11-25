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

// renderComponent: It grabs the old base(current DOM before change that is saved in component.base)
export const renderComponent = (component, parent) => {
  const oldBase = component.base
  component.base = renderVDOMAdv(
    component.render(component.props, component.state)
  )

  if (parent) {
    parent.appendChild(component.base)
  } else {
    oldBase.parentNode.replaceChild(component.base, oldBase)
  }
}

const renderVDOMAdv = vnode => {
  let el

  const { nodeName, attrs, children } = vnode

  if (vnode.split) return document.createTextNode(vnode)

  if (typeof nodeName === 'string') {
    el = document.createElement(nodeName)

    for (let key in attrs) {
      el.setAttribute(key, attrs[key])
    }
  } else if (typeof nodeName === 'function') { // here is our `People`
    // initiate our component
    const component = new nodeName(attrs)
    el = renderVDOMAdv(
      component.render(component.props, component.state)
    )
    // save DOM reference to `base` field as in `renderComponent`
    component.base = el
  }
  // recursively do this to all of its children
  (children || []).forEach(child => el.appendChild(renderVDOMAdv(child)))

  return el
}