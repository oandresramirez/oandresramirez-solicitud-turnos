import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "../page/Routing";
import './_index.scss';
//import { Provider } from "react-redux";
//import { store } from "main/shared/state/store";

const App: React.FC = () => {
    return (
        <BrowserRouter>
                <Routing />
        </BrowserRouter>
    );
}

export default App;


/*         <BrowserRouter>
            <Provider store={store}>
                <Routing />
            </Provider>
        </BrowserRouter> */