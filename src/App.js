// React router dom
import { Routes, Route } from "react-router-dom";
// Pages - Components
import { Create as CreatePage } from "./pages/create/index";
import { Informations as InformationsPage } from "./pages/create/Informations";
import { Home as HomePage } from "./pages/Home";
// Redux
//import { useDispatch, useSelector } from "react-redux";

//import { changeSchema } from "./redux/slices/qrSchemaSlice";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/create" element={<CreatePage />}>
          <Route path="informations" element={<InformationsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
