import React from "react";

function Certificate() {
  return (
    <div>
      
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px]  max-sm:pl-20  py-5 max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight">
                Certificate Verification
              </p>
              <p className="text-[#49779c] text-sm font-normal leading-normal">
                Your certificate is unique and can be verified here. You will
                need the certificate ID to verify your certificate.
              </p>
            </div>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Enter Certificate ID
              </p>
              {/* <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                  value=""
                /> */}
              <input
                type="text"
                id="default-input"
                className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#e7eef4] dark:placeholder-gray-400  dark:focus:ring-blue-500 "
              ></input>
            </label>
          </div>
          <div className="flex px-4 py-3">
            <a href="Verify Certificate ">
              {" "}
              <button className="flex min-w-[380px]  max-w-[480px]  cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Verify Certificate</span>
              </button>
            </a>
          </div>
          <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Refund Policy</h3>
            <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              You may cancel your registration up to 7 days before the event start date for a full refund. We do not provide refunds for cancellations made within 7 days of the
              event start date.Refunds will be processed within 7-10 business days after the cancellation date. For any refund-related queries, please contact our support team.
            </p>
            <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Attendance Policy</h3>
            <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              You are required to attend at least 80% of the workshop sessions to be eligible for a certificate. Any missed sessions must be notified in advance to the workshop
              coordinator.
            </p>
            <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Cancellation Policy</h3>
            <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We reserve the right to cancel or reschedule any workshop. In the event of cancellation, we will provide a full refund. In the event of rescheduling, we will offer a
              transfer to a future event or a full refund if the new date does not work for you.
            </p>
            <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#49779c] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
                <a className="text-[#49779c] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              </div>
              <p className="text-[#49779c] text-base font-normal leading-normal">Hubnex Educate</p>
            </footer>
          </div>
        </footer>
        </div>
        
      </div>

      {/* <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style='font-family: "Space Grotesk", "Noto Sans", sans-serif;'>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d151c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">Hubnex Educate</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">Blog</a>
              <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-[#0d151c] text-sm font-medium leading-normal" href="#">Pricing</a>
            </div>
            <div className="flex gap-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Login</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7eef4] text-[#0d151c] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Register</span>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight">Certificate Verification</p>
                <p className="text-[#49779c] text-sm font-normal leading-normal">
                  Your certificate is unique and can be verified here. You will need the certificate ID to verify your certificate.
                </p>
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">Enter Certificate ID</p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Verify Certificate</span>
              </button>
            </div>
            <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Refund Policy</h3>
            <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              You may cancel your registration up to 7 days before the event start date for a full refund. We do not provide refunds for cancellations made within 7 days of the
              event start date.Refunds will be processed within 7-10 business days after the cancellation date. For any refund-related queries, please contact our support team.
            </p>
            <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Attendance Policy</h3>
            <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              You are required to attend at least 80% of the workshop sessions to be eligible for a certificate. Any missed sessions must be notified in advance to the workshop
              coordinator.
            </p>
            <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Cancellation Policy</h3>
            <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We reserve the right to cancel or reschedule any workshop. In the event of cancellation, we will provide a full refund. In the event of rescheduling, we will offer a
              transfer to a future event or a full refund if the new date does not work for you.
            </p>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#49779c] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
                <a className="text-[#49779c] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              </div>
              <p className="text-[#49779c] text-base font-normal leading-normal">Hubnex Educate</p>
            </footer>
          </div>
        </footer>
      </div>
            </div> */}
    </div>
  );
}

export default Certificate;
