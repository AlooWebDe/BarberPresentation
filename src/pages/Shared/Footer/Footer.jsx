import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#14100c] text-[#aba59f] py-12 md:py-16 dark:bg-gray-800">
        <div className="container grid grid-cols-1 gap-10 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          <div>
            <h3 className="mb-6 text-2xl font-bold uppercase text-white dark:text-gray-400">
              Contact
            </h3>
            <div className="mb-4 flex items-center space-x-2">
              <BuildingIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <span>Acme Inc.</span>
            </div>
            <div className="mb-4 flex items-center space-x-2">
              <MapPinIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <span>123 Main St, Anytown USA</span>
            </div>
            <div className="mb-4 flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <span>(555) 555-5555</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailOpenIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <span>info@example.com</span>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold uppercase text-white dark:text-gray-400">
              Business Hours
            </h3>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold uppercase text-white dark:text-gray-400">
              Newsletter
            </h3>
            <p className="mb-4 dark:text-gray-400">
              Stay up to date with our latest news and promotions.
            </p>
            <form className="flex flex-col gap-2">
              <div className="input-group">
                <input
                  type="email"
                  className="footer-input"
                  id="Email"
                  name="Email"
                  placeholder="uiverse@verse.io"
                  autoComplete="off"
                />
                <input
                  className="button--submit"
                  value="Subscribe"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
