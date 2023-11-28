import cfg from "../../src/cfg.js";

const generatedBtn = document.querySelector("#generate");
const generatedContent = document.querySelector("#generated");

const rules = {
    "start": ["In this example <noun.plural> is pluralized and the other picled word <noun.capitalize>|<verb.capitalized> is capitalized."],
    "article": ["a|an|the"],
    "noun": ["cat|dog|cow"],
    "verb": ["jump|cut|sing"]
}

const contextFreeGrammer = new cfg();

generatedBtn.onclick = () => {
    generatedContent.innerHTML = contextFreeGrammer.generateText(rules);
}
