function makeElement(id, terminal) {
  const element = {
    id: id,
    terminal: terminal
  };
}

const carbonTerm = makeElement("carbon", true);
const carbon = makeElement("carbon", false);
