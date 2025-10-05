import React from "react";
import styles from "./SingleApplication.module.css";
import dayjs from "dayjs";

const SingleApplication = ({ application, ...rest }) => {
  const date_created = dayjs(application.date_created).format("DD-MM-YYYY");
  const expiry_date = dayjs(application.expiry_date).format("DD-MM-YYYY");
  const loan_amount = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(application.loan_amount);
  return (
    <div className={styles.SingleApplication} {...rest}>
      <div className={styles.cell}>
        <sub>Company</sub>
        <span>{application.company}</span>
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        <span>
          {application.first_name} {application.last_name}
        </span>
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <a href={`mailto:${application.email}`}>{application.email}</a>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        <span> {loan_amount}</span>
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        <span> {date_created}</span>
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        <span> {expiry_date}</span>
      </div>
    </div>
  );
};

export default SingleApplication;
