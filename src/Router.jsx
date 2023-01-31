import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "./i18n/i18n";
import { Home } from './Home';
import { ChangeLanguage } from "./ChangeLanguage";

function Router() {
    console.log(i18n.language)
    return (
        <BrowserRouter>
            <Routes>
                {['/ua', '/us', '/es'].map(item =>
                    <Route key={item} path={item} element={<Home />} />
                )}
                <Route path={'/'} element={<ChangeLanguage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;