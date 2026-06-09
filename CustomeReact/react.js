const customeRender = (reactElement, container) => {
    // // This is a very basic implementation of a custom render function that can handle simple React elements with props and children.
    /*
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    */

    // A more dynamic implementation that can handle any type of props and children with Loop.
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'chidren') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElemet ={
    type: 'a',
    props: {
        href: 'https://www.pornhub.com',
        target:'_blank'
    },
    children: 'Open PornHub'
}

const container = document.getElementById('root')

customeRender(reactElemet, container)