/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import './sort.css';
import { sortDocuments } from '../../Redux/actions/documentsAction';

const { Option } = Select;

function Sort() {
  const [sortField, setSortField] = useState('createdAt');
  const [sortType, setSortType] = useState('asc');
  const dispatch = useDispatch();

  function sortHandler() {
    dispatch(sortDocuments(sortField, sortType));
  }

  function fieldHandler(value) {
    setSortField(value);
  }

  function sortTypeHandler(value) {
    setSortType(value);
  }

  return (
    <div className="sort-block">
      <span className="sort-title">Сортировать по</span>
      <Select
        className="sort-select"
        defaultValue="По дате создания"
        style={{
          width: 200,
        }}
        onChange={fieldHandler}
      >
        <Option value="title">По названию</Option>
        <Option value="createdAt">По дате создания</Option>
      </Select>
      <Select
        defaultValue="По возрастанию"
        style={{
          width: 200,
        }}
        onChange={sortTypeHandler}
      >
        <Option value="asc">По возрастанию</Option>
        <Option value="desc">По убыванию</Option>
      </Select>
      <Button onClick={sortHandler} className="sort-btn" type="dashed">cортировать</Button>
    </div>
  );
}

export default Sort;
