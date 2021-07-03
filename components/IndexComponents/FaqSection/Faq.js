import React from "react";

const Faq = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a
                href="#"
                className="font-medium text-brand-100 hover:text-brand-200"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How do you make holy water?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  You boil the hell out of it. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quas cupiditate laboriosam
                  fugiat.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What&#039;s the best thing about Switzerland?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  I don&#039;t know, but the flag is a big plus. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What do you call someone with no body and no nose?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Nobody knows. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Why do you never see elephants hiding in trees?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Because they&#039;re so good at it. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quas cupiditate laboriosam
                  fugiat.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
