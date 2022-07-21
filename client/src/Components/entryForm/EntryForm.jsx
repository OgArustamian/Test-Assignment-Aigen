import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Input,
} from 'antd';
import './entryForm.css';
import { fetchDocuments } from '../../Redux/actions/documentsAction';

function EntryForm() {
  const [inputs, setInputs] = useState({
    id: '',
    date: '',
    title: '',
  });
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  function resetFormFields() {
    form.resetFields();
    setInputs({
      id: '',
      date: '',
      title: '',
    });
  }

  async function submitHandler(e) {
    dispatch(fetchDocuments(inputs));
    resetFormFields();
  }

  function changeHandler(evt) {
    setInputs({ ...inputs, [evt.target.name]: evt.target.value });
  }

  return (
    <Form
      className="entry-form"
      onFinish={() => submitHandler()}
      layout="vertical"
      form={form}
    >
      <Form.Item label="ID документа" name="id" tooltip="Если это поле заполнено, другие поля будут проигнорированы">
        <Input name="id" placeholder="введите id" value={inputs.id} onChange={(evt) => changeHandler(evt)} />
      </Form.Item>
      <Form.Item
        label="Дата создания"
        name="date"
      >
        <Input name="date" placeholder="введите дату в формате ГГГГ-ММ-ДД" value={inputs.date} onChange={(evt) => changeHandler(evt)} />
      </Form.Item>
      <Form.Item
        label="Название документа"
        name="title"
      >
        <Input name="title" placeholder="введите название, например 'счет-фактура'" value={inputs.title} onChange={(evt) => changeHandler(evt)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button className="reset-btn" htmlType="reset">Reset</Button>
      </Form.Item>
    </Form>
  );
}

export default EntryForm;
