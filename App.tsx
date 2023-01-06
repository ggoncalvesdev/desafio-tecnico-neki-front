import React from "react";

import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/services/routes/NavigateScreen";

export default function App() {
    return (
        <>
            <StatusBar />
            <Routes />
        </>
    );
}
