const heading = React.createElement(("h1"), {
    id:"heading" , abc: "xyzz",
}, "Hello World through React!")

console.log(heading) // return = object

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)
    
    //render = render method is basically responsible to take this object and put it up and converted into the heading tag and put up into the dom.

    //{} = this object basically means is the place where give the attributes to a tag.
    //heading is basically react h1 element.
    // what is react element? => react element is nothing but normal js object