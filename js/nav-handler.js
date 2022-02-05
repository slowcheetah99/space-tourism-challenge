const destinationEl = document.querySelector(".destination--nav--elements");
const headline = document.querySelector(".title__text");
const destinationNav = document.querySelector(".destination__nav");
const destinationMeta = document.querySelector(".destination__meta");
let navEl,
  navLink,
  navContent,
  headlineText,
  headlineContainer,
  headlineEl,
  headlineMeta,
  headlineMetaText,
  headlineMetaNode,
  headlineFooterDistance,
  headlineFooterTravel,
  headlineFooterSpan,
  headlineFooterSpanTwo,
  headlineFooterPar,
  headlineFooterParTwo,
  headlineFooter;

const fetchData = async () => {
  const data = await fetch("../data.json");
  let res = await data.json();
  res.destinations.forEach((el, index) => {
    navEl = document.createElement("li");
    navLink = document.createElement("a");
    navContent = document.createTextNode(el.name);
    navLink.appendChild(navContent);
    navLink.setAttribute("href", `#${el.name}`);
    navLink.setAttribute("id", `${el.name}`);
    navLink.classList.add("active", "nav-link");
    navLink.style.position = "relative";
    navEl.appendChild(navLink);

    destinationEl.appendChild(navEl);

    headlineText = document.createTextNode(el.name);
    headlineContainer = document.createElement("h3");
    headlineEl = document.createElement("span");
    headlineEl.appendChild(headlineText);
    headlineContainer.appendChild(headlineEl);
    headlineContainer.classList.add("positioned", `${el.name}`);

    headlineMetaText = document.createTextNode(el.description);
    headlineMetaNode = document.createElement("p");

    headlineFooterSpan = document.createElement("span");
    headlineFooterSpanTwo = document.createElement("span");

    headlineFooterSpan.textContent = "AVG. Distance";
    headlineFooterSpanTwo.textContent = "EST. Travel Time";

    headlineFooterDistance = document.createTextNode(`${el.distance}`);
    headlineFooterTravel = document.createTextNode(`${el.travel}`);

    headlineFooter = document.createElement("div");
    headlineFooterPar = document.createElement("p");
    headlineFooterParTwo = document.createElement("p");
    headlineFooterPar.appendChild(headlineFooterSpan);
    headlineFooterPar.appendChild(headlineFooterDistance);

    headlineFooterParTwo.appendChild(headlineFooterSpanTwo);
    headlineFooterParTwo.appendChild(headlineFooterTravel);

    headlineFooter.appendChild(headlineFooterPar);
    headlineFooter.appendChild(headlineFooterParTwo);
    headlineFooter.classList.add("d-flex");

    headlineMetaNode.appendChild(headlineMetaText);
    headlineContainer.appendChild(headlineMetaNode);
    headlineContainer.appendChild(headlineFooter);

    headline.appendChild(headlineContainer);
  });
  console.log(headline);
  let navLinkArr = document.querySelectorAll(".nav-link");
  let parentEl;

  let headlineArr = document.querySelectorAll(".positioned");
  for (let i = 0; i < navLinkArr.length; i++) {
    navLinkArr[i].addEventListener("click", (e) => {
      parentEl = e.target.id;
      headlineArr.forEach((arrEl) => {
        if (arrEl.classList.value.includes(parentEl)) {
          arrEl.style.display = "block";
        } else {
          arrEl.style.display = "none";
        }
      });
    });
  }
};

fetchData();
