import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "What is Spacelinx-MES?",
    description: (
      <>
        Spacelinx-MES is a <b>Manufacturing Execution System</b> designed to
        streamline production processes, manage resources, and provide real-time
        visibility into manufacturing operations.
      </>
    ),
  },
  {
    title: "Key Features",
    description: (
      <>
        It offers{" "}
        <b>
          production tracking, quality management, resource scheduling, and
          analytics
        </b>
        , ensuring that every stage of manufacturing runs efficiently with
        minimal downtime.
      </>
    ),
  },
  {
    title: "Why Choose Spacelinx-MES?",
    description: (
      <>
        With its{" "}
        <b>
          scalable architecture, real-time dashboards, and integration with ERP
          systems
        </b>
        , Spacelinx-MES empowers manufacturers to improve productivity, reduce
        costs, and maintain high quality.
      </>
    ),
  },
];

function Feature({ Image, title, description }) {
  return (
    <div className="col col--4">
      <div className="text--center">
        {Image && (
          <div className={styles.featureLogo}>
            <img
              src={Image}
              alt={title}
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
