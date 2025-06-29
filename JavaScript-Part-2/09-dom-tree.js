// Traversing DOM tree

// const rootNode = document.getRootNode();
// // console.log(rootNode.childNodes[0]);
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes);

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(textNode1);

// document childs//////////

// const htmlElementNode = document.documentElement;

// const headElementNode = htmlElementNode.children[0]; // <head>
// const bodyElementNode = htmlElementNode.children[1]; // <body>

// console.log(headElementNode);
// console.log(bodyElementNode);

// body childs ////////////

// const body = document.body;
// console.log(body.children);

// Get Parent ///////////

// const ul = document.querySelector("ul");
// console.log(ul.parentNode);

// First and last child //////////////

// const body = document.body;
// console.log(body.firstChild); // can be text

// console.log(body.firstElementChild); // can be element

// console.log(body.lastChild);

// console.log(body.lastElementChild);

// Next sibling

// const header = document.querySelector(".header");
// console.log(header.nextElementSibling);

// previous sibling

// const section = document.querySelector(".section-signup");
// console.log(section.previousElementSibling);

// changing style

// const button = document.querySelector("button");
// const div = button.parentNode;
// div.style.color = "#efefef";
// div.style.background = "#333";

// querySelector inside Element

const head = document.querySelector("head");

const title = head.querySelector("title");
console.log(title);
