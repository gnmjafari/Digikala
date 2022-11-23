import image133 from "../image/133.svg";
import image134 from "../image/134.svg";
import image135 from "../image/135.svg";
import image136 from "../image/136.svg";
import image137 from "../image/137.svg";
import image138 from "../image/138.svg";
import image139 from "../image/139.png";
import image140 from "../image/140.svg";
import image141 from "../image/141.svg";
import image142 from "../image/142.svg";
import image143 from "../image/143.svg";
import image145 from "../image/145.png";
import image146 from "../image/146.png";
import image147 from "../image/147.png";
import image150 from "../image/150.svg";
import image151 from "../image/151.svg";
import image152 from "../image/152.svg";
import image153 from "../image/153.svg";
import image154 from "../image/154.svg";
import image155 from "../image/155.svg";
import image156 from "../image/156.svg";
import image157 from "../image/157.svg";
import image158 from "../image/158.svg";
import image159 from "../image/159.svg";
import image160 from "../image/160.svg";
import image161 from "../image/161.svg";
import image162 from "../image/162.svg";
import image163 from "../image/163.svg";
import image164 from "../image/164.svg";
import image165 from "../image/165.svg";
import image166 from "../image/166.svg";
import { MdKeyboardArrowUp } from "react-icons/md";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { SiAparat } from "react-icons/si";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer dir="rtl">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={image133} alt="" />
          <button>
            بازگشت به بالا
            <MdKeyboardArrowUp style={{ fontSize: "25px" }} />
          </button>
        </div>

        <div className="BoxPhone">
          <div>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</div>
          <div>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</div>
        </div>

        <div className="BoxInformation">
          <a href="">
            <img src={image134} alt="" />
            <div>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</div>
          </a>
          <a href="">
            <img src={image135} alt="" />
            <div>امکان پرداخت در محل</div>
          </a>
          <a href="">
            <img src={image136} alt="" />
            <div>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</div>
          </a>
          <a href="">
            <img src={image137} alt="" />
            <div>هفت روز ضمانت بازگشت کالا</div>
          </a>
          <a href="">
            <img src={image138} alt="" />
            <div>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</div>
          </a>
        </div>

        <div className="BoxFooterMenu">
          <div className="BoxFooterMenuTiter">
            <h2>با دیجی‌کالا</h2>
            <a href="">اتاق خبر دیجی‌کالا</a>
            <a href="">فروش در دیجی‌کالا</a>
            <a href="">فرصت‌های شغلی</a>
            <a href="">گزارش تخلف در دیجی‌کالا</a>
            <a href="">تماس با دیجی‌کالا</a>
            <a href="">درباره دیجی‌کالا</a>
          </div>
          <div className="BoxFooterMenuTiter">
            <h2>خدمات مشتریان</h2>
            <a href="">پاسخ به پرسش‌های متداول</a>
            <a href="">رویه‌های بازگرداندن کالا</a>
            <a href="">شرایط استفاده</a>
            <a href="">حریم خصوصی</a>
            <a href="">گزارش باگ</a>
          </div>
          <div className="BoxFooterMenuTiter">
            <h2>راهنمای خرید از دیجی‌کالا</h2>
            <a href="">نحوه ثبت سفارش</a>
            <a href="">رویه ارسال سفارش</a>
            <a href="">شیوه‌های پرداخت</a>
          </div>
          <div className="BoxFooterMenuTiter">
            <h2>همراه ما باشید!</h2>
            <div className="BoxSocialNetworks">
              <a href="">
                <AiOutlineInstagram />
              </a>
              <a href="">
                <AiOutlineTwitter />
              </a>
              <a href="">
                <AiFillLinkedin />
              </a>
              <a href="">
                <SiAparat />
              </a>
            </div>
            <h2>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h2>
            <div>
              <input type="email" placeholder="ایمیل شما" size="30" />
              <input type="submit" value="ثبت" />
            </div>
          </div>
        </div>

        <div className="BoxDownload">
          <div>
            <img src={image139} alt="" />
            <h2>دانلود اپلیکیشن دیجی‌کالا</h2>
          </div>
          <div>
            <a href="">
              <img src={image140} alt="" />
            </a>
            <a href="">
              <img src={image141} alt="" />
            </a>
            <a href="">
              <img src={image142} alt="" />
            </a>
            <a href="">
              <img src={image143} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <FiMoreHorizontal />
            </a>
          </div>
        </div>

        <div className="BoxNemad">
          <div>
            <h3 style={{ color: "black" }}>
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
            </h3>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <a href="">
              مشاهده بیشتر
              <MdKeyboardArrowLeft />
            </a>
          </div>
          <div>
            <a href="">
              <img src={image145} alt="" />
            </a>
            <a href="">
              <img src={image146} alt="" />
            </a>
            <a href="">
              <img src={image147} alt="" />
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#a1a3a8",
            fontSize: "12px",
          }}
        >
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </div>
      </footer>

      <div className="BoxOderBrand">
        <a href="">
          <img src={image150} alt="" />
        </a>
        <a href="">
          <img src={image151} alt="" />
        </a>
        <a href="">
          <img src={image152} alt="" />
        </a>
        <a href="">
          <img src={image153} alt="" />
        </a>
        <a href="">
          <img src={image154} alt="" />
        </a>
        <a href="">
          <img src={image155} alt="" />
        </a>
        <a href="">
          <img src={image156} alt="" />
        </a>
        <a href="">
          <img src={image157} alt="" />
        </a>
        <a href="">
          <img src={image158} alt="" />
        </a>
        <a href="">
          <img src={image159} alt="" />
        </a>
        <a href="">
          <img src={image160} alt="" />
        </a>
        <a href="">
          <img src={image161} alt="" />
        </a>
        <a href="">
          <img src={image162} alt="" />
        </a>
        <a href="">
          <img src={image163} alt="" />
        </a>
        <a href="">
          <img src={image164} alt="" />
        </a>
        <a href="">
          <img src={image165} alt="" />
        </a>
        <a href="">
          <img src={image166} alt="" />
        </a>
      </div>
    </>
  );
}

export default Footer;
