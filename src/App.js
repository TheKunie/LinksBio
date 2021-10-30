import "./styles.css";
import React, { Children } from "react";
import { Header, Container, Table } from "semantic-ui-react";
import Cell from "./cell.js";
import { Formik, ErrorMessage } from "formik";
import { Form, Input, SubmitButton, Button } from "formik-semantic-ui-react";

import { useStoreState, useStoreActions, useStore } from "easy-peasy";

export default function App() {
  const items = useStoreState((state) => state.items);
  const [bool, setBool] = React.useState(false);
  const addItem = useStoreActions((actions) => actions.addItem);
  const removeitem = useStoreActions((actions) => actions.removeItem);
  const [dis, setDis] = React.useState(false);

  const FormK = () => {
    const initialValues = {
      title: "",
      name: "",
      link: ""
    };

    const onSubmit = (values, actions) => {
      addItem(values);
      console.log(values);
      actions.setSubmitting(false);
      actions.resetForm();
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        <Form>
          <br />
          <Input id="title" name="title" placeholder="Titol"></Input>
          <Input id="name" name="name" placeholder="Nom del link"></Input>
          <Input id="link" name="link" placeholder="Link"></Input>
          <SubmitButton fluid primary>
            Acceptar
          </SubmitButton>
          <button
            className="ui button"
            type="button"
            onClick={() => {
              removeitem();
            }}
          >
            Remove last Item
          </button>
        </Form>
      </Formik>
    );
  };

  var count = 0;
  const FormRender = () => {
    const initialPass = {
      pass: ""
    };
    if (bool) {
      return (
        <>
          <button className="ui button" onClick={() => onClick(false)}>
            Hide Form
          </button>
          <FormK />
        </>
      );
    } else if (!bool) {
      return (
        <Formik
          initialValues={initialPass}
          onSubmit={(values, actions) => onClick(true, values, actions)}
        >
          <Form>
            <Input
              disabled={dis}
              id="pass"
              name="pass"
              placeholder="Password"
              action={
                <SubmitButton fluid secondary>
                  Acceptar
                </SubmitButton>
              }
            ></Input>
            <ErrorMessage name="pass" />
          </Form>
        </Formik>
      );
    }
  };

  const onClick = (a, password, actions) => {
    if (!a) {
      setBool(false);
    } else if (password.pass === "SuperLink") {
      actions.resetForm();
      setBool(a);
    } else {
      count += 1;
      actions.setFieldError("pass", "Wrong password");
      actions.setSubmitting(false);
      actions.setErrors({ pass: "Wrong Password" });
      actions.setFieldValue("pass", "");
      if (count > 5) {
        actions.resetForm();
        actions.setErrors({ pass: "Too many attempts" });
        setDis(true);
      }
    }
  };

  return (
    <div className="App">
      <Container>
        <br />
        <Header as="h1" color="green" textAlign="center">
          Links Biologia
        </Header>
        <br />
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">Títol</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Link</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {items.map((item) => {
            return Cell(item.title, item.name, item.link);
          })}
        </Table>

        <br />

        {/*FormRender()*/}
      </Container>
    </div>
  );
}
