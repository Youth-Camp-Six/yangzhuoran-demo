import React, { Component, useEffect } from "react";
import Form, { Field, useForm } from "../components/my-rc-field-form";
import Input from "../components/input";
import NumberInput from "../components/num-input";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export const MyRCFieldForm: React.FC<any> = (props) => {
  const [form] = useForm();

  const onFinish = (val: string) => {
    console.log("数据提交", val);
  };

  // 表单校验失败执行
  const onFinishFailed = (val: string) => {
    console.log("数据校验失败", val);
  };

  useEffect(() => {
    // 初始化设置默认值
    form.setFieldsValue({ username: "default" });
  }, []);

  // 获取用户名
  const getUserNameHandler = () => {
    const res = form.getFieldValue('username')
    console.log(res)
  }

  // 修改数字
  const changeNumber = () => {
    const res = form.setFieldsValue({ num: 10 })
  }

  return (
    <div>
      <div style={{ border: "1px solid" }}>
        <h3>表单内容</h3>
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <p>用户名</p>
          <Field name="username" rules={[nameRules]}>
            <Input placeholder="Username" />
          </Field>
          <p>密码</p>
          <Field name="password" rules={[passworRules]}>
            <Input placeholder="Password" type="password" />
          </Field>
          <p>数字输入</p>
          <Field name="num" rules={[passworRules]}>
            <NumberInput />
          </Field>
          <button>提交</button>
        </Form>
      </div>
      <h2>数据双向绑定展示</h2>
      <button onClick={getUserNameHandler}>获取表单数据: 打印用户名</button>
      <button onClick={changeNumber}>修改表单数据: 修改数字为10</button>
    </div>
  );
};
