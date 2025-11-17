"use client";
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import Session from "./Account/Session";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <div id="wd-kambaz">
            <div className="d-flex">
              <div>
                <KambazNavigation />
              </div>

              <div className="wd-main-content-offset p-3 flex-fill">
                {children}
              </div>
            </div>
          </div>
        </PersistGate>
      </Session>
    </Provider>
  );
}
