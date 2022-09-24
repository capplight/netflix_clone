import React from "react";
import { useContent } from "../hooks";
import { BrowseContainer } from "../containers/browse";
import { selectionFilter } from "../utils";

export default function Browse() {
  //series n Films
  const { series } = useContent("series");
  const { films } = useContent("films");

  //slides
  const slides = selectionFilter({ series, films });

  // pass it to the browse containers

  return <BrowseContainer slides={slides} />;
}
