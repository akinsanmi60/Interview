/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Layout, Input, Avatar } from "antd";
import { DashboardWrapper } from "./style";
import { NavigationA, NavigationB, FootNavigation } from "../util/navRoutes";
import { ReactComponent as FileLogo } from "../assets/file.svg";
import { ReactComponent as SearchLogo } from "../assets/search.svg";
import { ReactComponent as LeftLogo } from "../assets/left.svg";
import { ReactComponent as RightLogo } from "../assets/right.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;

const Dashboard = () => {
  const name = "Akinsanmi";
  const genres = [
    "Riff & Runs",
    "African Heat",
    "Gidi Nights",
    "Runnig Out",
    "Saturday Vibe",
    "Trending Songs",
    "Club Vibe",
  ];
  return (
    <DashboardWrapper>
      <Layout hasSider>
        <Sider className="sidebar">
          <div className="profile">
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              className="avatar"
            />
            <p>Hey! {name}</p>
          </div>
          <div className="sidebox">
            <div className="sidemenuA">
              {NavigationA.map(item => (
                <div key={item.title}>
                  <div className="listbox">
                    <div>{item.component}</div>
                    <div>
                      <p>
                        <Link to={item.path} className="link">
                          {item.title}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sidemenuA">
              {NavigationB.map(item => (
                <div key={item.title}>
                  <div className="listbox">
                    <div className="logo">{item.component}</div>
                    <div>
                      <p>
                        <Link to={item.path} className="link">
                          {item.title}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="sidemenuB">
                <div className="listbox">
                  <div className="logo">
                    <FileLogo />
                  </div>
                  <div>
                    <p>
                      <Link to={"myplaylist"} className="link">
                        Playlist
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="logo">
                  <SearchLogo />
                </div>
              </div>
            </div>
            <div className="sidemenuC">
              {genres.map((item, index) => (
                <div key={index.toString()}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            <div className="headerbox">
              <div className="arrow">
                <div className="sideA">
                  <LeftLogo className="btnside" />
                </div>
                <div className="sideB">
                  <RightLogo />
                </div>
              </div>
              <Input
                style={{ backgroundColor: "transparent" }}
                placeholder="Search"
                className="input"
                prefix={<SearchOutlined className="ico" />}
              />
            </div>
            <div className="profilehide">
              <Avatar
                src="https://joeschmoe.io/api/v1/random"
                className="avatar"
              />
              <p>Hey! {name}</p>
            </div>
          </Header>
          <Content className="content">
            <div className="contentbox">
              <Outlet />
            </div>
          </Content>
          <Footer className="footbar">
            <div className="box">
              {FootNavigation.map(item => (
                <div key={item.title}>
                  <div className="ioc">
                    <Link to={item.path}>{item.component}</Link>
                  </div>
                </div>
              ))}
            </div>
          </Footer>
        </Layout>
      </Layout>
    </DashboardWrapper>
  );
};

export default Dashboard;
