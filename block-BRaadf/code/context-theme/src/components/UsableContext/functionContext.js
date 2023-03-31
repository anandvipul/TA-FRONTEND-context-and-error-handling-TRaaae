import React from "react";

const FunctionContext = React.createContext();

const FunctionProvider = FunctionContext.Provider;
const FunctionConsumer = FunctionContext.Consumer;

export { FunctionConsumer, FunctionProvider };
