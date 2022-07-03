import React, { useState, useRef } from "react";
import { Form, Input, Button } from "./styles";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchBox({ barOpened, setBarOpened, searchType }) {
  const [input, setInput] = useState("");
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setBarOpened(false);

    if (searchType === "Livros")
      console.log(`Form was submited with input: ${input} and ${searchType}`);
    if (searchType === "Grupos")
      console.log(`Form was submited with input: ${input} and ${searchType}`);
  };

  return (
    <>
      <Form
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        onBlur={() => {
          setBarOpened(false);
        }}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit" barOpened={barOpened}>
          <BiSearchAlt />
        </Button>
        <Input
          onChange={(e) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Pesquisar..."
        />
      </Form>
    </>
  );
}
