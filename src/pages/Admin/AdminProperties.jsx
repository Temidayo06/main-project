import AdminLayout from "../../components/Admin components/AdminLayout";
import { Outlet, Link } from "react-router-dom";
import refresh from "./../../assets/images/tabler_refresh.svg";
import "./../../styles/Admin Styles/adminProperties.css";
import { GoHome } from "react-icons/go";
import { properties } from "../../mockData/properties";
import location from "./../../assets/images/Location.svg";
import { GiBathtub } from "react-icons/gi";
import { BiSolidCarGarage } from "react-icons/bi";
import { LuNetwork } from "react-icons/lu";
import { MdFamilyRestroom } from "react-icons/md";
import { IoSquareOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { useAdminContext } from "../../adminContext";
import Loading from "../../components/Loading";

const AdminProperties = () => {
  // const houses = properties.slice(0, 10);
  const { isLoading, properties, type, updateType } = useAdminContext();

  return (
    <div>
      <AdminLayout>
        <main>
          <section>
            <div className="dashBoardPropertiesAboveNav">
              <div>
                <h2>Properties</h2>
              </div>
              <div>
                <button className="dashBoardHome">
                  {" "}
                  <GoHome /> Home / Properties{" "}
                </button>
              </div>
            </div>
            <div className="dashBoardPropertiesBelowNav">
              <div>
                <form>
                  <select
                    name=""
                    id=""
                    className="dashBoardLand"
                    value={type}
                    onChange={updateType}
                  >
                    <option value="">Type</option>
                    <option value="land">Lands</option>
                    <option value="house">Houses</option>
                  </select>
                </form>
              </div>
              <div className="dashBoardRefreshFlex">
                <div>
                  <Link to="/admin/add">
                    <button className="dashBoardAddNew"> + Add New</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="dashBoardGrid">
              {!isLoading && properties.length < 1 && (
                <h1 className="text-success display-5">
                  NO properties for your search
                </h1>
              )}

              {isLoading ? (
                <Loading />
              ) : (
                properties.map((h) => {
                  return (
                    <div key={h._id}>
                      <img
                        src={h.media.images[0]}
                        alt={h.title}
                        className="dashBoardImage"
                      />
                      <div className="dashParaBody">
                        <p className="paraPost">
                          Posted on {new Date(h.createdAt).toLocaleDateString}
                        </p>
                        <div className="paraTags">
                          <p>
                            {" "}
                            <LuNetwork /> {h.tags}
                          </p>{" "}
                          <p>
                            {" "}
                            <MdFamilyRestroom /> {h.tags}
                          </p>
                        </div>
                        <h2>{h.title}</h2>
                        <p className="text-capitalize">
                          <img src={location} alt="location" /> {h.location}{" "}
                        </p>
                        <h3>${h.price}</h3>
                        <div className="paraFeatures">
                          <p>
                            <LiaBedSolid /> {h.bedroom} Bedroom
                          </p>
                          <p>
                            <GiBathtub /> {h.bathroom} Bathroom
                          </p>
                        </div>
                        <div className="paraFeatures">
                          {h.garage && (
                            <p>
                              <BiSolidCarGarage /> Garage
                            </p>
                          )}
                          <p>
                            <IoSquareOutline /> {h.squareFeet} Square Feet
                          </p>
                        </div>
                      </div>
                      <Link to={`/admin/properties/${h._id}`}>
                        <button className="dashBoardButton">View</button>
                      </Link>
                    </div>
                  );
                })
              )}
            </div>

            {/* <div className="dashBoardNum"> <button> <img src={prev} alt="previous" className="prevButton"/> </button> <button> 1 </button> <button> 2 </button> <button> 3 </button> <button> 4 </button> <button> 5 </button></div> */}

            <p className="backToTop">
              <a href="#">Back To Top</a>
            </p>
          </section>
        </main>
      </AdminLayout>
    </div>
  );
};

export default AdminProperties;
