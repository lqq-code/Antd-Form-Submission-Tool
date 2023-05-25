import React, { useRef, useState } from "react";
import { Form, TimePicker, Input, Button, message,InputNumber ,DatePicker } from "antd";
import dayjs from 'dayjs';

const Meeting = () => {
  const [form] = Form.useForm();
  const divRef = useRef(null);
  const format = 'HH:mm';

  const handleAuto = () => {
    form.setFieldValue('input7', handleTime(form.getFieldValue('input5')))
    form.setFieldValue('input9', handleTotal(form.getFieldValue('input5'), form.getFieldValue('input8')))
    form.setFieldValue('input10', handleTime(form.getFieldValue('input8')))
    form.setFieldValue('input11', handleTotal(form.getFieldValue('input5'), form.getFieldValue('input8')))
    form.setFieldValue('input12', form.getFieldValue('input6'))


    form.setFieldValue('input18', (form.getFieldValue('input19')+form.getFieldValue('input20')+form.getFieldValue('input21')) || 0) 


  }
  const onFinish = (values) => {
    const div = document.createElement('div');
    div.innerHTML = `
    无提请事项
          <br />
          @@@
          <br />
          1.观察员于${handleTime(values.input2)}拨打会议组织者电话并与其取得联系，被告知本次会议为网络会，会议将于当日${handleTime(values.input3)}通过腾讯会议APP线上召开，会议时间与计划一致；观察员通过腾讯会议APP接入会议观察。
          <br />
          2.观察员于${handleTime(values.input4)}通过腾讯会议APP接入会议，全程连接，确认本次会议开始时间为${handleTime(values.input5)}，讲者${values.input6} 于${handleTime(values.input5)}-${handleTime(values.input8)}行演讲，演讲时长${values.input9}min。
          <br />
          3.本次会议计划讲者${values.input12}，观察员在互联网上搜索到讲者带照片的详细信息(${values.input13})，根据讲者外貌特征、演讲水平及其他参会人员对其的称呼判断讲者身份属实，与计划信息一致；与会议组织者核实本次会议为院内科室会，参会人员来自${values.input14}。
          <br />
          4.观察员观察到本次会议使用ESM系统播放讲解材料，演讲材料主题为${values.input15}，审批编码为${values.input16}，有效期至${values.input17}。
          <br />
          5.观察员根据腾讯会议报表确认，除观察员外最大上线人数为${values.input18}人（内部${values.input19}人，外部${values.input20}人，讲者${values.input21}人），其中不含讲者满足参会时长且在CRM中的HCP人数为${values.input22}人，全程视频参会且满足时长的CRM库中HCP人数为${values.input23}人，本次会议满足参会人数要求。
          <br />
          6.由会议组织者告知本次会议不提供茶歇，不安排用餐。
          <br />
          7.会议组织者确认所有HCP均以本人真实姓名登录并参会。
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
          1.观察员于<Form.Item name="input2" ><TimePicker format={format} /></Form.Item>拨打会议组织者电话并与其取得联系，被告知本次会议为网络会，会议将于当日<Form.Item name="input3" ><TimePicker format={format} /></Form.Item>通过腾讯会议APP线上召开，会议时间与计划一致；观察员通过腾讯会议APP接入会议观察。
          <br />
          2.观察员于<Form.Item name="input4" ><TimePicker format={format} /></Form.Item>通过腾讯会议APP接入会议，全程连接，确认本次会议开始时间为<Form.Item name="input5" ><TimePicker format={format} /></Form.Item>，讲者<Form.Item name="input6" ><Input /></Form.Item>于<Form.Item name="input7" ><Input /></Form.Item>-<Form.Item name="input8" ><TimePicker format={format} /></Form.Item>进行演讲，演讲时长<Form.Item name="input9" ><Input /></Form.Item>min，无答疑讨论环节，会议组织者于<Form.Item name="input10" ><Input /></Form.Item>宣布本次会议正式结束，本次会议共<Form.Item name="input11" ><Input /></Form.Item>min。
          <br />
          3.本次会议计划讲者<Form.Item name="input12" ><Input /></Form.Item>，观察员在互联网上搜索到讲者带照片的详细信息(<Form.Item name="input13" ><Input /></Form.Item>)，根据讲者外貌特征、演讲水平及其他参会人员对其的称呼判断讲者身份属实，与计划信息一致；与会议组织者核实本次会议为院内科室会，参会人员来自<Form.Item name="input14" ><Input /></Form.Item>。
          <br />
          4.观察员观察到本次会议使用ESM系统播放讲解材料，演讲材料主题为<Form.Item name="input15" ><Input /></Form.Item>，审批编码为<Form.Item name="input16" ><Input /></Form.Item>，有效期至<Form.Item name="input17" ><Input /></Form.Item>。
          <br />
          5.观察员根据腾讯会议报表确认，除观察员外最大上线人数为<Form.Item name="input18" ><InputNumber min={0}  /></Form.Item>人（内部<Form.Item name="input19" ><InputNumber min={0}  /></Form.Item>人，外部<Form.Item name="input20" ><InputNumber min={0}  /></Form.Item>人，讲者<Form.Item name="input21" ><InputNumber min={0}  /></Form.Item>人），其中不含讲者满足参会时长且在CRM中的HCP人数为<Form.Item name="input22" ><InputNumber min={0}  /></Form.Item>人，全程视频参会且满足时长的CRM库中HCP人数为<Form.Item name="input23" ><InputNumber min={0}  /></Form.Item>人，本次会议满足参会人数要求。
          <br />
          6.由会议组织者告知本次会议不提供茶歇，不安排用餐。
          <br />
          7.会议组织者确认所有HCP均以本人真实姓名登录并参会。
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

export default Meeting;
