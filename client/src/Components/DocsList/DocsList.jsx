import React from 'react';
import { Collapse } from 'antd';
import { useSelector } from 'react-redux';

const { Panel } = Collapse;

function DocsList() {
  const documents = useSelector((state) => state.documents);
  return (
    <Collapse>
      {documents.length
        ? documents.map((document) => (
          <Panel header={document.title} key={document.id}>
            <p>{document.body}</p>
          </Panel>
        ))
        : <p className="not-found-msg">ничего не найдено</p>}
    </Collapse>
  );
}

export default DocsList;
