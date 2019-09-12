import React from 'react';
import './editor.less';
import { Form, Button, Input } from 'antd';
const { TextArea } = Input;

const Editor = (props) => {
  return <>
    <Form.Item>
      <TextArea rows={4} onChange={props.onChange} value={props.value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={props.submitting} onClick={props.onSubmit} type="primary">
        Send Message
    </Button>
    </Form.Item>
  </>
}

export default Editor;