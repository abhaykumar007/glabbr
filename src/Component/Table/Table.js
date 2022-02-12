import React from "react";
import "antd/dist/antd.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Table, Tag, Space } from "antd";
import { Avatar } from "antd";
import "./Table.css";
import { useSelector } from "react-redux";

function TableComp() {
  const users = useSelector((state) => state.users.users);
  const columns = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      render: (url) => <Avatar size={51} src={url} />,
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="name">
          <h3>{text[0]}</h3>
          <p>{text[1]}</p>
        </div>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "LOCATION",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "TAGS",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 20 ? "geekblue" : "green";
            return (
              <Tag className="tag" color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "ACTIONS",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <div className="action">
            <ChatBubbleOutlineIcon className="icon" />
            <p>Send Message</p>
          </div>
          <div className="action">
            <PhoneInTalkIcon className="icon" />
            <p>Call</p>
          </div>
        </Space>
      ),
    },
  ];

  let data = [];
  users.map((element, i) => {
    let obj = {
      key: i + 1,
      avatar: element.avatar,
      name: [
        `${element.first_name} ${element.last_name}`,
        ` ${element.address.city}`,
      ],
      status: element.subscription.status,
      location: `${element.address.state}, ${element.address.country}`,
      tags: [element.employment.title],
    };
    data.push(obj);
  });

  return (
    <div className="table">
      {data.length > 0 && (
        <div>
          <div className="header">
            <h2>Contacts List</h2>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 3 }}
          />
        </div>
      )}
    </div>
  );
}

export default TableComp;
