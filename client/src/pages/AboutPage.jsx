// import {
//   MapPinIcon,
//   PhoneIcon,
//   EnvelopeIcon,
// } from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <div className="aboutDiv">
      <img
        src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
        alt="Logo"
        className="imgAboutPage"
      />
      <div className="contactDiv">
        <h1 className="aboutH1">We would love to hear from you!</h1>
        <div className="contactInfo">
          <div className="contactItem">
            {/* <MapPinIcon className="icon" /> */}
            <span>123 Main St, Anytown, USA</span>
          </div>
          <div className="contactItem">
            {/* <PhoneIcon className="icon" /> */}
            <span>(123) 456-7890</span>
          </div>
          <div className="contactItem">
            {/* <EnvelopeIcon className="icon" /> */}
            <span>info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
