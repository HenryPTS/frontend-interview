import React, { useEffect, useState } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { Button } from "./ui/Button/Button";
import { ApplicationData } from "./types";
import { DotLoader } from "react-spinners";

const Applications = () => {
  const [loanData, setLoanData] = useState<ApplicationData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  async function getLoanData(nextPage: number) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3001/api/applications?_page=${nextPage}&_limit=5`,
        { cache: "no-store" }
      );
      const loanDataJson = await res.json();
      setIsLoading(false);
      if (Array.isArray(loanDataJson) && loanDataJson.length >= 1) {
        setLoanData(loanDataJson);
      } else {
        setError("Loan data could not be fetched");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getLoanData(pageNumber);
  }, [pageNumber]);

  return (
    <div className={styles.Applications}>
      {loanData.map((loanDatum) => (
        <SingleApplication key={loanDatum.id} application={loanDatum} />
      ))}
      <div className={styles.ButtonRow}>
        {error && <h4 className={styles.ErrorHeader}>{error}</h4>}

        <Button
          disabled={loading}
          className={styles.LoadButton}
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          {loading ? (
            <DotLoader size="1em" color="currentColor" />
          ) : (
            "Load More"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Applications;
