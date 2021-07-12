import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <span className="block text-base text-brand-200 font-semibold tracking-wide uppercase">
              Contact us
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Kosher Pharmaceuticals
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                G-6, Church Hill Compound, Holy Cross Road IC Colony, Borivli
                west, Opposite St.Thomas Church, Mumbai-400103, Maharashtra,
                India
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>022-289 078 69</p>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+91 976 976 8968</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>info@kosherpharmaceuticals.com</p>
                </div>
              </div>
              <div className="mt-2 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>kosherpharmaceuticals@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
