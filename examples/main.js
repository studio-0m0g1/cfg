import cfg from "../src/cfg.js";

const generatedBtn = document.querySelector("#generate");
const generatedContent = document.querySelector("#generated");

const rules = {
    "start":[   ["<article>", "<adjective>", "<noun>", "."] ],
    "article": [["a"], ["an"], ["the"]],
    "adjective": [["slow"], ["fast"], ["big"], ["slim"]],
    "noun": [["cat"], ["dog"], ["cow"]]
};

const contextFreeGrammer = new cfg();

generatedBtn.onclick = () => {
    generatedContent.innerHTML = contextFreeGrammer.generateText(rules);
    // console.log(contextFreeGrammer.generateText(rules));
    // contextFreeGrammer.generateText(rules)
}
