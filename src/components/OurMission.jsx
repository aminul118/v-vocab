import { FaLightbulb } from "react-icons/fa";

const OurMission = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/tcT0BHq/5e84f2d2-0aec-42cd-9e08-4bd84a125f47.webp"
              alt="A person learning vocabulary with technology"
              className="rounded-lg shadow-lg max-h-[400px] object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <article className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-primary flex items-center">
                  <FaLightbulb className="text-yellow-500 mr-3" /> Our Mission
                </h2>
                <p className="text-gray-700 mt-4 text-center md:text-left">
                  At{" "}
                  <span className="font-semibold text-primary">
                    VocabVantage
                  </span>
                  , our mission is to revolutionize the way individuals learn
                  and retain vocabulary across multiple languages. We strive to
                  make language fluency accessible and fun for everyone.
                </p>
                <p className="text-gray-700 mt-4 text-center md:text-left">
                  Through engaging games, contextual examples, and personalized
                  lessons, we empower learners to confidently communicate in
                  their target language. With secure and seamless access via
                  Firebase authentication, learning has never been easier.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
