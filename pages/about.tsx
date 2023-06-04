/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider,
} from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
  const PAGE_SEO: iSEO = {
    title: "About Us",
    description: `Hi we are WebExpe. This is an open source blog template which can help you start a simple static blog.`,
    keywords: "webexpx, contact us, webexpe13@gmail.com, next js blog template",
    author: "Mayur Nalwala, Rupali Yadav",
  };
  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container px-3 md:pb-20 md:pt-10 pt-20">
        <div className="">
          <Text title className="mb-5 mt-10 dark:text-sky-400 text-sky-600">
            Welcome to My Tech Blog!
          </Text>
          <Text subtitle className="text-xl mb-5">
            Explore Interesting Articles and Insights on Technology
          </Text>

          <Text p className="text-lg">
            My blog website is dedicated to sharing informative and engaging
            content about the world of technology. From the latest tech news and
            trends to in-depth articles on various tech topics, I strive to
            provide valuable insights to the readers.
            <br />
            <br />
            Whether you're a tech enthusiast, a professional in the industry, or
            simply curious about the latest advancements, This blog is for you!
          </Text>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
