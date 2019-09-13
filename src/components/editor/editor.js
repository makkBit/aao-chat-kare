import React, { useRef, useEffect } from 'react';
import './editor.less';
import { Form, Button, Input } from 'antd';
const { TextArea } = Input;

const Editor = (props) => {
  const inputEl = useRef(null);
  useEffect(() => {
    if(inputEl.current) {
      inputEl.current.focus();
    }
  }, [])
  return <>
    <Form.Item>
      <TextArea 
        rows={2}
        onChange={props.onChange}
        value={props.value} 
        placeholder="Type your message here"
        ref={inputEl}
        />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={props.submitting} onClick={props.onSubmit} type="primary">
        Send Message
    </Button>
    </Form.Item>
  </>
}

export default Editor;