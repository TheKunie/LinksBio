import { Table, Icon } from "semantic-ui-react";
import React from "react";

const Cell = (title, name, link) => {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>
          <a href={link}>{name}</a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

export default Cell;
