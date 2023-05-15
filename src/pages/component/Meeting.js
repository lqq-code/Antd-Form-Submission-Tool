import React, { useRef, useState } from "react";
import { Form, Descriptions, Input, Button, message } from "antd";

const Meeting= () => {
  const [form] = Form.useForm();
  const divRef = useRef(null);

  const onFinish = (values) => {
    const div = document.createElement('div');
    div.innerHTML = `
              无提请事项
              <br/>
              @@
              <br/>
              1.观察员于${values.input1}拨打会议组织者电话并与其取得联系，被告知本次会议将于${values.input2}在${values.input3}召开，会议时间、地点与计划一致。
              <br/>
              2.观察员于${values.input4}与会议组织者视频接入会议，全程连接，确认会议开始时间为${values.input5}，由讲者${values.input6}于${values.input7}-${values.input8}进行演讲，演讲时长${values.input9}分钟，无讨论答疑环节，会议组织者${values.input10}于宣布会议结束，本次会议${values.input11}共分钟。
              <br/>
              3.本次会议计划讲者${values.input12}，观察员在互联网上搜索到讲者带照片的详细信息（${values.input13}），根据讲者外貌特征、演讲水平及其他参会人员对其的称呼判断讲者身份属实，与计划信息一致；与会议组织者核实参会人员来自${values.input14}。
              <br/>
              4.观察员观察到本次会议ESM系统播放材料，讲者演讲的材料主题为${values.input15}，审批编码为${values.input16}，有效期至${values.input17}。
              <br/>
              5.观察员观察到本次会议最大参会人数为${values.input18}人（内部${values.input19}人，外部${values.input20}人、讲者${values.input21}人），会议组织者告知本次会议参会人数为${values.input22}位（内部${values.input23}人，外部${values.input24}人、讲者${values.input25}人）。
              <br/>
              6.观察员未观察到本次会议签到过程，故根据会议组织者会后上传的签到页面确认本次会议签到人数为${values.input26}人（外部${values.input27}人、讲者${values.input28}人）。
              <br/>
              7.观察员依据签到表与会议组织者确认iCustomer签到人数为${values.input29}人（外部${values.input30}人、讲者${values.input31}人）；与会议组织者核实${values.input32}为参会医生本人签到。
              <br/>
              8.本次会议不提供茶歇，${values.input33}。
              <br/>
              9.iSpotCheck小程序显示讲者照片${values.input34}上传，讲者照片、讲者材料、签到表的照片，上传时间为${values.input35}-${values.input36}。观察员查询后确认会议开始照片上传至讲者服务部分。
              <br/>

              1.讲者照片上传时间为${values.input37}。
              <br/>
              2.观察员获取了讲者照片、讲者材料、签到表的照片，上传时间为${values.input38}-${values.input39}，获取方式为ispotcheck小程序。
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

  const onReset = () => {
    form.resetFields();
    message.success("Text reset！");
  };



  return (
    <div>
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        layout="vertical"
        style={{ padding: 30 }}
      >
        {/* <Form.Item name="meeting" label="Meeting details" > */}
        <div ref={divRef}>
          无提请事项
          <br />
          @@
          <br />
          1.观察员于 <Form.Item name="input1" ><Input /></Form.Item>拨打会议组织者电话并与其取得联系，被告知本次会议将于<Form.Item name="input2" ><Input /></Form.Item>在<Form.Item name="input3" ><Input /></Form.Item>召开，会议时间、地点与计划一致。
          <br />
          2.观察员于<Form.Item name="input4" ><Input /></Form.Item>与会议组织者视频接入会议，全程连接，确认会议开始时间为<Form.Item name="input5" ><Input /></Form.Item>，由讲者<Form.Item name="input6" ><Input /></Form.Item>于<Form.Item name="input7" ><Input /></Form.Item>-<Form.Item name="input8" ><Input /></Form.Item>进行演讲，演讲时长<Form.Item name="input9" ><Input /></Form.Item>分钟，无讨论答疑环节，会议组织者于<Form.Item name="input10" ><Input /></Form.Item>宣布会议结束，本次会议共
          <Form.Item name="input11" ><Input /></Form.Item>分钟。
          <br />
          3.本次会议计划讲者<Form.Item name="input12" ><Input /></Form.Item>，观察员在互联网上搜索到讲者带照片的详细信息（<Form.Item name="input13" ><Input /></Form.Item>），根据讲者外貌特征、演讲水平及其他参会人员对其的称呼判断讲者身份属实，与计划信息一致；与会议组织者核实参会人员来自<Form.Item name="input14" ><Input /></Form.Item>。
          <br />
          4.观察员观察到本次会议ESM系统播放材料，讲者演讲的材料主题为<Form.Item name="input15" ><Input /></Form.Item>，审批编码为<Form.Item name="input16" ><Input /></Form.Item>，有效期至<Form.Item name="input17" ><Input /></Form.Item>。
          <br />
          5.观察员观察到本次会议最大参会人数为<Form.Item name="input18" ><Input /></Form.Item>人（内部<Form.Item name="input19" ><Input /></Form.Item>人，外部<Form.Item name="input20" ><Input /></Form.Item>人、讲者<Form.Item name="input21" ><Input /></Form.Item>人），会议组织者告知本次会议参会人数为<Form.Item name="input22" ><Input /></Form.Item>位（内部<Form.Item name="input23" ><Input /></Form.Item>人，外部<Form.Item name="input24" ><Input /></Form.Item>人、讲者<Form.Item name="input25" ><Input /></Form.Item>人）。
          <br />
          6.观察员未观察到本次会议签到过程，故根据会议组织者会后上传的签到页面确认本次会议签到人数为<Form.Item name="input26" ><Input /></Form.Item>人（外部<Form.Item name="input27" ><Input /></Form.Item>人、讲者<Form.Item name="input28" ><Input /></Form.Item>人）。
          <br />
          7.观察员依据签到表与会议组织者确认iCustomer签到人数为<Form.Item name="input29" ><Input /></Form.Item>人（外部<Form.Item name="input30" ><Input /></Form.Item>人、讲者<Form.Item name="input31" ><Input /></Form.Item>人）；与会议组织者核实<Form.Item name="input32" ><Input /></Form.Item>为参会医生本人签到。
          <br />
          8.本次会议不提供茶歇，<Form.Item name="input33" ><Input /></Form.Item>。
          <br />
          9.iSpotCheck小程序显示讲者照片<Form.Item name="input34" ><Input /></Form.Item>上传，讲者照片、讲者材料、签到表的照片，上传时间为<Form.Item name="input35" ><Input /></Form.Item>-<Form.Item name="input36" ><Input /></Form.Item>。观察员查询后确认会议开始照片上传至讲者服务部分。
          <br />
          <br />
          <br />
          1.讲者照片上传时间为<Form.Item name="input37" ><Input /></Form.Item>。
          <br />
          2.观察员获取了讲者照片、讲者材料、签到表的照片，上传时间为<Form.Item name="input38" ><Input /></Form.Item>-<Form.Item name="input39" ><Input /></Form.Item>，获取方式为ispotcheck小程序。

        </div>
        <Form.Item >
          <div style={{display:'flex',marginTop:30}}>

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
