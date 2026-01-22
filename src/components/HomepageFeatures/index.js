import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        This python library is very easy to use, but has very powerful features
      </>
    ),
  },
  {
    title: 'Many modules',
    description: (
      <>
        There are many useful modules like Configs, Plugins and others
      </>
    ),
  },
  {
    title: 'Open source',
    description: (
      <>
        This is an open-source and fully safe library. You can report an issue, give us update ideas, create pull requests that can later be merged and added into the latest update.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
