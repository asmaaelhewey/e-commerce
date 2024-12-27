import amazonPayment from "../../assets/imgs/amazon-pay.png"
import americanExpress from "../../assets/imgs/American-Express-Color.png"
import masterCard from "../../assets/imgs/mastercard.webp"
import payPal from "../../assets/imgs/paypal.png"

import appStore from "../../assets/imgs/get-apple-store.png"
import googlePlay from "../../assets/imgs/get-google-play.png"

export default function Footer() {
  return (
    <>
    <footer className="bg-slate-100 py-8">
      <div className="container space-y-4">
        <header>
        <h2 className="text-xl font-semibold text-slate-700">Get the FreshCart App</h2>
        <p className="text-slate-400">We will send you a link, open it on your phone to download the app </p>
        </header>

        <div className="flex gap-2 ">
          <input className="form-control grow" type="email" placeholder="Email Address" />
          <button className="btn uppercase bg-blue-100 hover:bg-blue-200 text-gray-600 font-semibold text-sm">Share App Link</button>
        </div>

       <div className="flex justify-between items-center py-4 border-y-2 border-slate-300 border-opacity-50">
        <div className="payment-partners flex gap-3 items-center">
          <h3>Payment Partners</h3>
          <img className="w-24" src={amazonPayment} alt=""  />
          <img className="w-24"  src={americanExpress}  alt="" />
          <img className="w-20" src={masterCard}  alt="" />
          <img className="w-24" src={payPal}  alt="" />
        </div>
        <div className="download flex gap-3 items-center">
          <h3>Get deliveries with FreshCart</h3>
          <img className="w-24" src={appStore}  />
          <img className="w-[110px]" src={googlePlay} />
        </div>
       </div>

      </div>
    </footer>
    </>
  )
}
