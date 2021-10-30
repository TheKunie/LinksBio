import App from "./App.js";
import { createStore, StoreProvider, action } from "easy-peasy";

import { composeWithDevTools } from "remote-redux-devtools";

const AppWrapper = () => {
  const store = createStore({
    items: [
      {
        title: "Respiració Glucosa",
        name: "Cosmolinux",
        link:
          "http://cosmolinux.no-ip.org/recursos_aula/BIO2nBAT/Metabolisme/C7_RESPIRACION.pdf"
      },
      {
        title: "Fosforilació Oxidativa",
        name: "Khan Academy",
        link:
          "https://es.khanacademy.org/science/ap-biology/cellular-energetics/cellular-respiration-ap/a/oxidative-phosphorylation-etc"
      },
      {
        title: "PAU Biologia (Exàmens de tots els anys, corregits)",
        name: "PAU Biologia UB",
        link: "https://www.ub.edu/paubiologia/"
      },
      {
        title: "Resum metabolisme",
        name: "Metabolisme Weebly",
        link: "https://selectivitatbiologia.weebly.com/metabolisme.html"
      },
      {
        title: "Enzims Al·lostèrics",
        name: "Cosmolinux",
        link:
          "http://cosmolinux.no-ip.org/recursos_aula/BIO2nBAT/Metabolisme/enzims_al_losterics_regulacio.pdf"
      }
    ],
    bool: false,
    setBool: action((state, payload) => {
      state.bool = payload;
    }),
    removeItem: action((state) => {
      state.items.pop();
    }),
    addItem: action((state, payload) => {
      state.items.push(payload);
    }),
    compose: composeWithDevTools({ realtime: true, trace: true })
  });

  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
};

export default AppWrapper;
