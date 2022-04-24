import {useEffect, useState} from "react";
import PostStreamCard from "../components/PostStreamCard";
import Header from "../components/header";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("/Home")
  })
  return (
      <></>
  );
}
