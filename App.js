// const ele = React.createElement("h1", {id:"heading", xyz:"abs"}, "hello world by react?");



/*

<div id="root">
    <div id="parent">
        <div id="child">
            <h1>Im h1</h1>
            <h2>Im h2</h2>
        </div>
        <div id="child">
            <h1>Im h1</h1>
            <h2>Im h2</h2>
        </div>
    </div>
</div>       
*/

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "Im h1"),
        React.createElement("h2", {}, "Im h2"),
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Im h1"),
        React.createElement("h2", {}, "Im h2"),
    ])
] );






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);