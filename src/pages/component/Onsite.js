import React, { useRef, useState } from "react";
import { Form, TimePicker, Input, Button, message,InputNumber  } from "antd";
import dayjs from 'dayjs';

const Onsite = () => {
  const [form] = Form.useForm();
  const divRef = useRef(null);
  const format = 'HH:mm';

  const handleAuto = () => {
    form.setFieldValue('input2', handleTimeEarly(form.getFieldValue('input1')))
    form.setFieldValue('input5', handleTime(form.getFieldValue('input4')))
    form.setFieldValue('input7', handleTotal(form.getFieldValue('input4'),form.getFieldValue('input6')))
    form.setFieldValue('input8', form.getFieldValue('input6'))
    form.setFieldValue('input9', handleTotal(form.getFieldValue('input4'),form.getFieldValue('input6')))
    form.setFieldValue('input10', handleTotal(form.getFieldValue('input4'),form.getFieldValue('input6')))
    form.setFieldValue('input14', (form.getFieldValue('input15')+form.getFieldValue('input16')+form.getFieldValue('input17')) || 0) 
    form.setFieldValue('input20', (form.getFieldValue('input21')+form.getFieldValue('input22')) || 0)
    form.setFieldValue('input23', (form.getFieldValue('input24')+form.getFieldValue('input25')) || 0)
  }
  const onFinish = (values) => {
    const div = document.createElement('div');
    div.innerHTML = `
    无提请事项
    <br />
    @@@
    <br />
    1.观察员与会议组织者于${handleTime(values.input1)}取得联系，被告知会议将于${(values.input2)}在${values.input3}召开，与计划一致。
    <br />
    2.观察员确认会议开始时间为${handleTime(values.input4)}，讲者于${handleTime(values.input4)}-${handleTime(values.input6)}演讲材料，共${(values.input7)}min，无讨论答疑环节。会议于${handleTime(values.input8)}正式结束，会议总时长${(values.input9)}min，讲者服务时长${(values.input10)}min。
    <br />
    3.观察员观察到本次会议使用ESM系统播放讲解材料，演讲材料主题为${(values.input11)}，审批编码${(values.input12)}，有效期至${(values.input13)}。
    <br />
    4.观察员观察到包括会议组织者在内最大参会人数为${(values.input14)}人（内部${(values.input15)}人，外部${(values.input16)}人，讲者${(values.input17)}人）。
    <br />
    5.本次会议计划讲者${(values.input18)}，观察员在互联网上搜索到讲者信息（${(values.input19)}），根据讲者外貌特征、对业务的熟练度及在场人员对其称呼判断讲者身份属实且与计划一致。
    <br />
    6.本次会议使用电子签到，观察员观察到本次会议签到过程，确认无代签行为。根据会议组织者会后出示的签到页面显示本次会议签到人数为${(values.input20)}（外部${(values.input21)}人，讲者${(values.input22)}人），iCustomer签到人数为${(values.input23)}人（外部${(values.input24)}人，讲者${(values.input25)}人）。会议组织者告知${(values.input26)}医生本人参会并签到，参会人员来自${(values.input27)}。
    <br />
    7.会议组织者告知本次会议不提供茶歇${(values.input28)}。
    <br />
    8.观察员确认会议结束后离场。
              `;
    document.body.appendChild(div);

    const range = document.createRange();
    range.selectNodeContents(div);

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      message.success("Text copied to clipboard！");
    }
    document.body.removeChild(div);

  };

  const handleTime = (time) => {
    return dayjs(time).format('HH:mm')
  }

  const handleTimeEarly = (time) => {
    const newTime = dayjs(time).add(1, 'hour');
    return newTime.format('HH:mm');
  }

  const handleTotal = (t1, t2) => {
    const diffMinutes = dayjs(t2).diff(dayjs(t1), 'minute');
    return diffMinutes;
  }

  const onReset = () => {
    form.resetFields();
    message.success("Text reset！");
  };



  return (
    <div>
      <Button type="primary" onClick={handleAuto} style={{ width: 100, marginLeft:30 }}>
        Autofill
      </Button>
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        layout="vertical"
        style={{ padding: 30 }}
      >
        <div ref={divRef}>
          无提请事项
          <br />
          @@@
          <br />
          1.观察员与会议组织者于<Form.Item name="input1" ><TimePicker format={format} /></Form.Item>取得联系，被告知会议将于<Form.Item name="input2" ><Input /></Form.Item>在<Form.Item name="input3" ><Input /></Form.Item>召开，与计划一致。
          <br />
          2.观察员确认会议开始时间为<Form.Item name="input4" ><TimePicker format={format} /></Form.Item>，讲者于<Form.Item name="input5" ><Input /></Form.Item>-<Form.Item name="input6" ><TimePicker format={format} /></Form.Item>演讲材料，共<Form.Item name="input7" ><Input /></Form.Item>min，无讨论答疑环节。会议于<Form.Item name="input8" ><TimePicker format={format} /></Form.Item>正式结束，会议总时长<Form.Item name="input9" ><Input /></Form.Item>min，讲者服务时长<Form.Item name="input10" ><Input /></Form.Item>min。
          <br />
          3.观察员观察到本次会议使用ESM系统播放讲解材料，演讲材料主题为<Form.Item name="input11" ><Input /></Form.Item>，审批编码<Form.Item name="input12" ><Input /></Form.Item>，有效期至<Form.Item name="input13" ><Input /></Form.Item>。
          <br />
          4.观察员观察到包括会议组织者在内最大参会人数为<Form.Item name="input14" ><InputNumber min={0}  /></Form.Item>人（内部<Form.Item name="input15" ><InputNumber min={0}  /></Form.Item>人，外部<Form.Item name="input16" ><InputNumber min={0}  /></Form.Item>人，讲者<Form.Item name="input17" ><InputNumber min={0}  /></Form.Item>人）。
          <br />
          5.本次会议计划讲者<Form.Item name="input18" ><Input /></Form.Item>，观察员在互联网上搜索到讲者信息（<Form.Item name="input19" ><Input /></Form.Item>），根据讲者外貌特征、对业务的熟练度及在场人员对其称呼判断讲者身份属实且与计划一致。
          <br />
          6.本次会议使用电子签到，观察员观察到本次会议签到过程，确认无代签行为。根据会议组织者会后出示的签到页面显示本次会议签到人数为<Form.Item name="input20" ><InputNumber min={0}  /></Form.Item>人（外部<Form.Item name="input21" ><InputNumber min={0}  /></Form.Item>人，讲者<Form.Item name="input22" ><InputNumber min={0}  /></Form.Item>人），iCustomer签到人数为<Form.Item name="input23" ><InputNumber min={0}   /></Form.Item>人（外部<Form.Item name="input24" ><InputNumber min={0}  /></Form.Item>人，讲者<Form.Item name="input25" ><InputNumber min={0}  /></Form.Item>人）。会议组织者告知<Form.Item name="input26" ><Input /></Form.Item>医生本人参会并签到，参会人员来自<Form.Item name="input27" ><Input /></Form.Item>。
          <br />
          7.会议组织者告知本次会议不提供茶歇<Form.Item name="input28" ><Input /></Form.Item>。
          <br />
          8.观察员确认会议结束后离场。

        </div>
        <Form.Item >
          <div style={{ display: 'flex', marginTop: 30 }}>

            <Button type="primary" htmlType="submit" style={{ width: 100 }}>
              Copy
            </Button>
            <Button htmlType="button" onClick={onReset} style={{ width: 100, marginLeft: 20 }}>
              Reset
            </Button>
          </div>
        </Form.Item>
      </Form>

    </div>
  );
};

export default Onsite;
