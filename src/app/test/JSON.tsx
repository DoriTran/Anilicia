"use client";

import { FC } from "react";
import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";

interface JSONProps {
  json: any;
}

const JSON: FC<JSONProps> = ({ json }) => {
  return <JsonView data={json} shouldExpandNode={allExpanded} style={defaultStyles} />;
};

export default JSON;
