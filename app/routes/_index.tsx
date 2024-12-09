import React from "react";
import { redirect } from "@remix-run/node";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return redirect("/marketplace");
};

export const meta: MetaFunction = () => {
  return [
    { title: "YENİ" },
    { name: "description", content: "YENİ'ye hoşgeldiniz!" },
  ];
};

const Index: React.FC = () => {
  return null;
};

export default Index;
