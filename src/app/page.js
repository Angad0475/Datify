"use client";
import Datepicker from "@/components/datepicker/Datepicker";
import store from "@/Redux/store";
import Image from "next/image";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
    <Datepicker/>
    </Provider>
  );
}
