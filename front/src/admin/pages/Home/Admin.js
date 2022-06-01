import Cookies from "universal-cookie";
import Card from "../../Card/Card";
import Sidebar from "../../Sidebar/Sidebar";
import Topnav from "../../Topnav/Topnav";
import "./admin.scss";

export default function Admin() {
 
  return (
    <>
      <Topnav />
      <div className="container-admin">
        <Sidebar />
        <div className="admin">
          <Card title="Home" link="/" />
          <Card title="About Us" link="/" />
          <Card title="Projects" link={"/admin/projects"} />
          <Card title="Portfolio" link="/" />
          <Card title="Gallery" link="/" />
          <Card title="Contact" link="/" />
        </div>
      </div>
    </>
  );
}
