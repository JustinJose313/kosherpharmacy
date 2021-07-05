import React from "react";

const TermCondition = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto p-2 md:p-4 my-4 sm:my-10">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg pb-4">
          <div
            style={{
              backgroundImage: "linear-gradient(310deg ,#48BCD1,#004d5e)",
            }}
            className="rounded-t-lg text-white py-12 px-4 md:px-8"
          >
            <h1 className="text-3xl font-bold">Terms & Conditions</h1>
            <div className="flex">
              <p className="font-medium text-gray-200">
                Effective date:
                <span>5th of July, 2021</span>{" "}
              </p>
            </div>
          </div>
          <div className="px-4 md:px-8 py-4 text-sm md:text-base">
            {/* Page content */}
            <div>
              {/* <h2 className="text-3xl font-bold my-4">Terms & Conditions</h2> */}
              <p className="mt-2">
                We reserve the right to change these Terms of Service at any
                time without notice in its discretion and to notify users of any
                such changes solely by changing this Terms of Service. Your
                continued use of the Website after the posting of any amended
                Terms of Service shall constitute your agreement to be bound by
                any such changes. Your use of this Website prior to the time
                this Terms of Service was posted will be governed according to
                the Terms of Service that applied at the time of your use.
              </p>
              <p className="mt-2">
                We may modify, suspend, discontinue or restrict the use of any
                portion, including the availability of any portion of the
                Content at any time, without notice or liability. We may deny
                access to any person or user at any time for any reason. In
                addition, we may at any time transfer rights and obligations
                under this Agreement to any affiliate, subsidiary or business
                unit, or any of their affiliated companies or divisions, or any
                entity that acquires us or any of their assets.
              </p>
              <p className="mt-2">
                We hereby reserve the right to block usage of the Website if any
                breach of the Terms of Service is caused by a User.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermCondition;
