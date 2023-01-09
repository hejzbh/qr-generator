import { ignoreFields } from "./constants";

export const getInputsForFields = (
  parentObject = null,
  object,
  onchangeHandler = () => {},
  qrData
) => {
  return Object.entries(object)
    .filter(([key]) => !ignoreFields.includes(key))
    .map(([key, value]) => {
      if (typeof value === "object") {
        return getInputsForFields(key, value, onchangeHandler, qrData);
      } else {
        return (
          <input
            key={key}
            data-parentObject={parentObject ?? null}
            name={key}
            value={parentObject ? qrData[parentObject][key] : qrData[key]}
            placeholder={`Insert ${key}`}
            onChange={onchangeHandler}
          />
        );
      }
    });
};
