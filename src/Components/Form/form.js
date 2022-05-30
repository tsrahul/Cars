import React, { useState } from "react";
import { Radio, Form, Button, Input, Checkbox } from "antd";
import Layout from "../Layout";
import profile from "../../assets/profile.jpeg";

const form = () => {
  const [sOrP, setsOrP] = useState("student");
  const [tag, setTag] = useState("0-5");
  const [exp, setExp] = useState("react");
  const onFinish = (data) => {
    console.log("--------------->>>>>>>>>", data);
  };
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const handleAssoscChange = (e) => {
    setsOrP(e.target.value);
  };
  const handleTag = (e) => {
    setTag(e.target.value);
  };
  const handleExp = (e) => {
    setExp(e.target.value);
  };

  const plainOptions = ["Designer", "Developer", "Project Manager", "Sales"];
  return (
    <Layout>
      <section className="relative py-24 min-h-max px-5 lg:px-28">
        <div className="flex items-start">
          <img
            src={profile}
            className="w-52 h-52 mr-3"
            alt="plusIcon"
            loading="lazy"
          />
          <Form
            id="editAddressForm"
            name="basic"
            size={"large"}
            className="form-large border-2 p-3 flex-1"
            onFinish={onFinish}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base text-black p-0 m-0">Display Name</p>
                <Form.Item name="disName">
                  <Input
                    placeholder="Enter Display Name"
                    className="w-100 mt-3"
                  />
                </Form.Item>
              </div>
              <div>
                <p className="text-base text-black p-0 m-0 mb-3">First Name</p>
                <Form.Item name="firName">
                  <Input
                    placeholder="Enter First Name"
                    className="w-100  mt-3"
                  />
                </Form.Item>
              </div>
              <div>
                <p className="text-base text-black p-0 m-0">Last Name</p>
                <Form.Item name="lasName">
                  <Input placeholder="Enter Last Name" className="w-100 mt-3" />
                </Form.Item>
              </div>
            </div>
            <div>
              <p className="text-base text-black p-0 m-0 mb-3">
                About Yourself
              </p>
              <Form.Item name="remarks">
                <Input.TextArea
                  rows="4"
                  className=" mt-3"
                  placeholder="Enter your remarks"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-base text-black p-0 m-0 mb-3">
                Your Area of Interest
              </p>
              <Form.Item name="AOI">
                <Checkbox.Group
                  options={plainOptions}
                  defaultValue={["Apple"]}
                  onChange={onChange}
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-base text-black p-0 m-0 mb-3">
                Are you a Student or Professional?
              </p>
              <Form.Item name="SorP" label="">
                <Radio.Group onChange={(e) => handleAssoscChange(e)}>
                  <Radio style={{ display: "flex" }} value="student">
                    <div className="row mb-3 w-100">
                      <div className="col-10" style={{ marginTop: -10 }}>
                        <p className="text-black text-capitalize fnt-lg">
                          Student
                        </p>
                      </div>
                    </div>
                  </Radio>
                  <Radio style={{ display: "flex" }} value="professional">
                    <div className="row mb-3 w-100">
                      <div className="col-10" style={{ marginTop: -10 }}>
                        <p className="text-black text-capitalize fnt-lg">
                          Professional
                        </p>
                      </div>
                    </div>
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div>
              <p className="text-base text-black p-0 m-0 mb-3">
                How much experience you have?
              </p>
              <Form.Item name="exp" label="">
                <Radio.Group onChange={(e) => handleExp(e)}>
                  <Radio style={{ display: "flex" }} value="0-5">
                    <div className="row mb-3 w-100">
                      <div className="col-10" style={{ marginTop: -10 }}>
                        <p className="text-black text-capitalize fnt-lg">
                          0 - 5
                        </p>
                      </div>
                    </div>
                  </Radio>
                  <Radio style={{ display: "flex" }} value="5-10">
                    <div className="row mb-3 w-100">
                      <div className="col-10" style={{ marginTop: -10 }}>
                        <p className="text-black text-capitalize fnt-lg">
                          5 - 10
                        </p>
                      </div>
                    </div>
                  </Radio>
                  <Radio style={{ display: "flex" }} value="10 and Above">
                    <div className="row mb-3 w-100">
                      <div className="col-10" style={{ marginTop: -10 }}>
                        <p className="text-black text-capitalize fnt-lg">
                          10 and Above
                        </p>
                      </div>
                    </div>
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div>
              <p className="text-base text-black p-0 m-0 mb-3">
                What is your expertise?
              </p>
              <Form.Item name="tag" label="">
                <Radio.Group onChange={(e) => handleTag(e)}>
                  <Radio style={{ display: "flex" }} value="java">
                    <div className="row mb-3 w-100">
                      <div className="col-10" style={{ marginTop: -10 }}>
                        <p className="text-black text-capitalize fnt-lg">
                          Java
                        </p>
                      </div>
                    </div>
                  </Radio>
                  <Radio style={{ display: "flex" }}>
                    <div className="row mb-3 w-100">
                      <div
                        className="col-10"
                        style={{ marginTop: -10 }}
                        value="react"
                      >
                        <p className="text-black text-capitalize fnt-lg">
                          React
                        </p>
                      </div>
                    </div>
                  </Radio>
                  <Radio style={{ display: "flex" }} value="others">
                    <div className="row mb-3 w-100">
                      <div className="col-10" style={{ marginTop: -10 }}>
                        <p className="text-black text-capitalize fnt-lg">
                          Others
                        </p>
                      </div>
                    </div>
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div>
              <p className="text-base text-black p-0 m-0">Mention your role</p>
              <Form.Item name="role">
                <Input placeholder="Enter Last Name" className="w-100 mt-3" />
              </Form.Item>
            </div>
            <div className="row justify-content-between align-items-baseline text-right">
              <Form.Item>
                <Button className="c-button c-button--outline mr-3">
                  Cancel
                </Button>
                <Button className="c-button" type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </section>
    </Layout>
  );
};

export default form;
