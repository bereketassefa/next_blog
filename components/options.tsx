"use client";
import React, { useState } from "react";
import { Select, Space } from "antd";
import type { SelectProps } from "antd";
import MDEditor from "@uiw/react-md-editor";
import prisma from "@/lib/prisma";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const options: SelectProps["options"] = [];

type tag = {
  id: string;
  name: string;
}[];

const Option = async ({ tags }: { tags: tag }) => {
  for (let i = 0; i < tags.length; i++) {
    options.push({
      label: tags[i].name,
      value: tags[i].id,
    });
  }

  const [value, setValue] = useState("initial");
  const [title, setTitle] = useState("jjhhh");

  return (
    <>
      <Input
        type="text"
        placeholder="Title of the blog"
        value={title}
        onChange={(e) => {
          console.log(e.target.value);
          setTitle(e.target.value);
        }}
      />

      <div className="my-5">
        <Space
          style={{ background: "black --important", minWidth: "200px" }}
          className="text-white bg-black border-0 "
          direction="vertical"
        >
          <Select
            mode="multiple"
            className="bg-black i"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={[tags[0].name]}
            // onChange={handleChange}
            options={options}
          />
        </Space>
      </div>
      <MDEditor
        value={value}
        onChange={(event) => {
          setValue(event as string);
        }}
      />

      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />

      <Button>Post</Button>
    </>
  );
};

export default Option;
