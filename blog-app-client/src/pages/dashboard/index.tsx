"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import styles from './dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Dashboard() {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Net Profit',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 86, 100, 91, 92],
        backgroundColor: '#6c5ce7',
      },
      {
        label: 'Revenue',
        data: [50, 45, 70, 71, 46, 45, 30, 60, 76, 90, 81, 82],
        backgroundColor: '#0984e3',
      },
    ],
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h2>Dashboard</h2>
        <div className={styles.headerIcons}>
          <FontAwesomeIcon icon={faTachometerAlt} className={styles.icon} />
        </div>
      </header>

      <div className={styles.mainContent}>
        <section className={styles.analytics}>
          <div className={styles.analyticsCard}>
            <h3>Monthly Earnings</h3>
            <Bar data={data} />
          </div>

          <div className={styles.trendingServices}>
            <h3>Trending Services</h3>
            <ul>
              <li>Social Network <span className={styles.trendUp}>32%</span></li>
              <li>File Management <span className={styles.trendUp}>25%</span></li>
              <li>Search Engine <span className={styles.trendUp}>16%</span></li>
              <li>Calendar <span className={styles.trendDown}>-4%</span></li>
              <li>Todo App <span className={styles.trendDown}>-17%</span></li>
            </ul>
          </div>
        </section>

        <section className={styles.statistics}>
          <div className={styles.statCard}>
            <h4>Sales Today</h4>
            <p>45.6k</p>
          </div>
          <div className={styles.statCard}>
            <h4>Support Questions</h4>
            <p>1.2k</p>
          </div>
          <div className={styles.statCard}>
            <h4>New Members</h4>
            <p>2.4k</p>
          </div>
        </section>
      </div>
    </div>
  );
}
