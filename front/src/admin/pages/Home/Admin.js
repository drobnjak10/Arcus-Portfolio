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
          <h3>Dashboard</h3>
          <div className="cards">
            <Card title="Projects" link={"/admin/projects"} img={'proj.jpg'} />
            <Card title="Portfolio" link="/admin/portfolio" img={'portfoliobg.jpg'} />
            <Card title="Gallery" link="/admin/gallery" img={'gallerybg.png'} />
          </div>
        </div>
      </div>
    </>
  );
}
