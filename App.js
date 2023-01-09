const heading = React.createElement("h1",{
    id:"title",
    key:"1234",
},"Heading 1",React.createElement("p",{},"This is child inside Heading1"));
const heading2 = React.createElement("h1",{
    id:"title",
    key:"1245",
},"Heading 2",React.createElement("p",{},"This is from inside Heading 2"));
const container = React.createElement("div",{
    id:"container",
},[heading,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
