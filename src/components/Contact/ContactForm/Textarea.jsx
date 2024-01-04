import React from "react";

export const Textarea = (props) => {
  return <textarea {...props}>{props.children}</textarea>;
};
