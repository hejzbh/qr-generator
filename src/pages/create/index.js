import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { changeSchema } from "../../redux/slices/qrSchemaSlice";
// Utils
import { schemaTypes } from "../../utils/constants";
// React router dom
import { Link, Outlet, useLocation } from "react-router-dom";

export const Create = () => {
  const schemaType = useSelector((state) => state.qrSchema.type);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleSchemaTypeChange = (type) => {
    dispatch(changeSchema({ newType: type }));
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white shadow-3xl rounded-2xl min-w-[70%] min-h-[25em] flex justify-between space-x-10 p-5">
        <div>
          {pathname === "/create" ? (
            <div className="grid grid-cols-4 gap-[1.5rem] ">
              {schemaTypes.map((type) => (
                <div
                  onClick={() => handleSchemaTypeChange(type.name)}
                  className={`p-4 rounded-2xl shadow-xl bg-blue-300 opacity-80 h-[8em] flex justify-center items-center text-center cursor-pointer ${
                    type.name === schemaType
                      ? "opacity-100 scale-[1.1] shadow-3xl"
                      : ""
                  }`}
                >
                  <h1 className="text-white uppercase">{type.displayName}</h1>
                </div>
              ))}
            </div>
          ) : (
            <Outlet />
          )}
        </div>
        <div>
          {pathname.includes("informations") === false && (
            <Link to="/create/informations">
              <button className="shadow-2xl rounded-2xl text-center uppercase text-white transition-all duration-150 bg-blue-400 hover:bg-blue-500 hover:translate-x-2 py-4 px-10">
                Go next
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
