/**
 * <div id="parent">
 *    <div id="child">
 *       <h1>I'm H1 tag </h1>
 *        <h2>I'm H2 tag </h2>
 *    </div>
 *    <div id:"child2">
 *        <h1>Hey, I'm H1 tag</h1>
 *        <h1>Hey, I'm H2 tag</h1>
 *    <div>
 * </div>
 */

//ReactElement(object) = HTML(browser understanding)

const parent = React.createElement(
    "div",
    { id:"parent" },
    React.createElement(
        "div",
        {id:"child"},[
            React.createElement("h1",{}, "I'm a H1 tag"),
            React.createElement("h2",{}, "I'm a H2 tag")
        ]),

        React.createElement("div",{id:"child2"},
        [
            React.createElement("h1" ,{}, "Hey,I'm H1 tag"),
            React.createElement("h2" ,{}, "hey I'm H2 tag")
        ])
)

console.log(parent) // return = object

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)

//rendering

