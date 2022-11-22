import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { HiOutlineLogin, HiOutlineLocationMarker } from "react-icons/hi";
import { MdViewHeadline } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { MdKeyboardArrowDown } from "react-icons/md";
import { DropdownData } from "./DropdownData";
import {
  mobile,
  accessories,
  Mobile,
  DigitalproductData,
  Camera,
  MobileBrand,
  Cameraaccessories,
  MobilePrice,
  ComputersAndPeripherals,
  InternalMemory,
  Laptopaccessories,
  PhotoResolution,
  Officemachines,
  usage,
} from "./SubMenu/submenuData";
import "./menu.css";
import MenuData, { category } from "./MenuData";

function Menu() {
  const [dropdown, setdropdown] = useState(false);
  const [MobileMenu, setMobileMenu] = useState(true);
  const [Digitalproduct, setDigitalproduct] = useState(true);
  const [MobileBrandData, setMobileBrandData] = useState(true);
  const [MobilePriceData, setMobilePriceData] = useState(true);
  const [InternalMemoryData, setInternalMemoryData] = useState(true);
  const [ResolutionData, setResolutionData] = useState(true);
  const [usageData, setusageData] = useState(true);
  const [accessoriesData, setaccessoriesData] = useState(true);
  const [MobileData, setMobileData] = useState(true);
  const [CameraData, setCameraData] = useState(true);
  const [CameraaccessoriesData, setCameraaccessoriesData] = useState(true);
  const [ComputersAndPeripheralsData, setComputersAndPeripheralsData] =
    useState(true);
  const [LaptopaccessoriesData, setLaptopaccessoriesData] = useState(true);
  const [OfficemachinesData, setOfficemachinesData] = useState(true);
  const [showMenuMobile, setshowMenuMobile] = useState(false);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <header dir="rtl">
        <div
          onClick={() => setshowMenuMobile(!showMenuMobile)}
          className={showMenuMobile ? "leaveMenu show" : "leaveMenu"}
        ></div>

        <div className="boximg">
          <a>
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/d320be31a756e2682a69ee395c290355c8fdbfdc_1667053900.jpg?x-oss-process=image/quality,q_95"
              alt=""
            />
          </a>
        </div>

        <div className="BoxMenuMobile">
          <div>
            <MdViewHeadline
              onClick={() => setshowMenuMobile(!showMenuMobile)}
            />
            <div
              dir="rtl"
              className={
                showMenuMobile
                  ? "ContianerMobilMenu show"
                  : "ContianerMobilMenu"
              }
            >
              <div className="MobilMenuLogo">
                <a href="">
                  <img
                    src="https://www.digikala.com/statics/img/svg/digi.svg"
                    alt=""
                  />
                </a>
              </div>

              <div className="BoxMobilMenuAsli" style={{ width: "100%" }}>
                {MenuData.map((item, index) => {
                  return (
                    <div key={index}>
                      <a href="">{item.Titel}</a>
                    </div>
                  );
                })}
              </div>

              <div className="MobilMenuCategory">
                <h3>دسته بندی کالاها</h3>
                {DropdownData.map((item, index) => {
                  if (item.Titel === "موبایل") {
                    return (
                      <div>
                        <div onClick={() => setMobileMenu(!MobileMenu)}>
                          <a className={MobileMenu ? "color clicked" : "color"}>
                            {item.Titel}
                            <MdKeyboardArrowDown />
                          </a>
                        </div>
                        <div
                          className={
                            MobileMenu ? "BoxDropcss clicked" : "BoxDropcss"
                          }
                        >
                          {mobile.map((drop, keydrop) => {
                            if (
                              drop.subTitel === "برند های مختلف گوشی موبایل"
                            ) {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setMobileBrandData(!MobileBrandData)
                                    }
                                  >
                                    <a
                                      className={
                                        MobileBrandData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      MobileBrandData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {MobileBrand.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "گوشی بر اساس قیمت") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setMobilePriceData(!MobilePriceData)
                                    }
                                  >
                                    <a
                                      className={
                                        MobilePriceData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      MobilePriceData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {MobilePrice.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "گوشی براساس حافظه داخلی") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setInternalMemoryData(!InternalMemoryData)
                                    }
                                  >
                                    <a
                                      className={
                                        InternalMemoryData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      InternalMemoryData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {InternalMemory.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "رزولوشن عکس") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setResolutionData(!ResolutionData)
                                    }
                                  >
                                    <a
                                      className={
                                        ResolutionData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      ResolutionData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {PhotoResolution.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "گوشی براساس کاربری") {
                              return (
                                <>
                                  <div onClick={() => setusageData(!usageData)}>
                                    <a
                                      className={
                                        usageData ? "color clicked" : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      usageData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {usage.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            return (
                              <div className="Dropcss">
                                <a>
                                  {drop.subTitel}
                                  <MdKeyboardArrowDown />
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  if (item.Titel === "کالای دیجیتال") {
                    return (
                      <>
                        <div onClick={() => setDigitalproduct(!Digitalproduct)}>
                          <a
                            className={
                              Digitalproduct ? "color clicked" : "color"
                            }
                          >
                            {item.Titel}
                            <MdKeyboardArrowDown />
                          </a>
                        </div>
                        <div
                          className={
                            Digitalproduct ? "BoxDropcss clicked" : "BoxDropcss"
                          }
                        >
                          {DigitalproductData.map((drop, keydrop) => {
                            if (drop.subTitel === "لوازم جانبی گوشی") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setaccessoriesData(!accessoriesData)
                                    }
                                  >
                                    <a
                                      className={
                                        accessoriesData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      accessoriesData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {accessories.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "گوشی موبایل") {
                              return (
                                <>
                                  <div
                                    onClick={() => setMobileData(!MobileData)}
                                  >
                                    <a
                                      className={
                                        MobileData ? "color clicked" : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      MobileData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {Mobile.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "دوربین") {
                              return (
                                <>
                                  <div
                                    onClick={() => setCameraData(!CameraData)}
                                  >
                                    <a
                                      className={
                                        CameraData ? "color clicked" : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      CameraData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {Camera.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "لوازم جانبی دوربین") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setCameraaccessoriesData(
                                        !CameraaccessoriesData
                                      )
                                    }
                                  >
                                    <a
                                      className={
                                        CameraaccessoriesData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      CameraaccessoriesData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {Cameraaccessories.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "کامپیوتر و تجهیزات جانبی") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setComputersAndPeripheralsData(
                                        !ComputersAndPeripheralsData
                                      )
                                    }
                                  >
                                    <a
                                      className={
                                        ComputersAndPeripheralsData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      ComputersAndPeripheralsData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {ComputersAndPeripherals.map(
                                      (item, index) => {
                                        return (
                                          <>
                                            <div className="Dropcss">
                                              <a>{item.dropsub}</a>
                                            </div>
                                          </>
                                        );
                                      }
                                    )}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "لوازم جانبی لپ تاپ") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setLaptopaccessoriesData(
                                        !LaptopaccessoriesData
                                      )
                                    }
                                  >
                                    <a
                                      className={
                                        LaptopaccessoriesData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      LaptopaccessoriesData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {Laptopaccessories.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            if (drop.subTitel === "ماشین های اداری") {
                              return (
                                <>
                                  <div
                                    onClick={() =>
                                      setOfficemachinesData(!OfficemachinesData)
                                    }
                                  >
                                    <a
                                      className={
                                        OfficemachinesData
                                          ? "color clicked"
                                          : "color"
                                      }
                                    >
                                      {drop.subTitel}
                                      <MdKeyboardArrowDown />
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      OfficemachinesData
                                        ? "BoxDropcssAll clicked"
                                        : "BoxDropcssAll"
                                    }
                                  >
                                    {Officemachines.map((item, index) => {
                                      return (
                                        <>
                                          <div className="Dropcss">
                                            <a>{item.dropsub}</a>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            }
                            return (
                              <div className="Dropcss">
                                <a>{drop.subTitel}</a>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    );
                  }
                  return (
                    <div key={index}>
                      <a href="">
                        {item.Titel}
                        <MdKeyboardArrowDown />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://www.digikala.com/statics/img/svg/logo.svg"
              alt=""
            />
          </div>

          <div>
            <BsQuestionSquare />
          </div>
        </div>

        <div className="contianer">
          <div className="searchBox">
            <img
              src="https://www.digikala.com/statics/img/svg/logo.svg"
              alt=""
            />
            <AiOutlineSearch />
            <input type="text" placeholder="جستجو" size="80" />
          </div>

          <div className="searchBoxMobile">
            <AiOutlineSearch />
            <input type="text" placeholder="جستجو" size="120" />
          </div>

          <div className="singFormBox">
            <a href="">
              <button>
                <HiOutlineLogin />
                ورود | ثبت نام
              </button>
            </a>
            <a href="">
              <AiOutlineShoppingCart />
            </a>
          </div>

          <div className="singFormBoxMobile">
            <a href="">
              <button>
                <HiOutlineLogin />
                ورود
              </button>
            </a>
            <a href="">
              <AiOutlineShoppingCart />
            </a>
          </div>
        </div>

        <div className="contianerMenu" id="navbar">
          <div className="MenuBox">
            <h4>
              {category.map((item) => {
                return (
                  <a
                    href=""
                    onMouseEnter={() => setdropdown(true)}
                    onMouseLeave={() => setdropdown(false)}
                  >
                    <AiOutlineMenu />
                    دسته بندی کالاها
                    {dropdown && <Dropdown />}
                  </a>
                );
              })}
            </h4>
            <ul className="Menuboxasli">
              {MenuData.map((menu, index) => {
                return (
                  <>
                    <li key={index}>{menu.Titel}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="locationBox">
            <a href="">
              <HiOutlineLocationMarker />
              لطفا شهر خود را انتخاب کنید
            </a>
          </div>
        </div>
      </header>

      <div
        onClick={() => setshowMenuMobile(!showMenuMobile)}
        className={showMenuMobile ? "leaveMenu show" : "leaveMenu"}
      ></div>
    </>
  );
}

export default Menu;
