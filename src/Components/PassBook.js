import React from "react";
import PassBookInfo from "./PassBookInfo";

export default function PassBook() {
  const Details = [
    {
      id: 1,
      date: "12-02-2022",
      transaction: "UPI",
      debit: "1000",
      credit: "0000",
      balance: "3000",
    },
    {
      id: 1,
      date: "13-02-2022",
      transaction: "Bank Transfer",
      debit: "2000",
      credit: "0000 ",
      balance: "1000",
    },
    {
      id: 1,
      date: "13-02-2022",
      transaction: "sent via UPI",
      debit: "0000",
      credit: "10000 ",
      balance: "11000",
    },
  ];

  return (
    <div>
      <PassBookInfo
        date={Details[0].date}
        transaction={Details[0].transaction}
        debit={Details[0].debit}
        credit={Details[0].credit}
        balance={Details[0].balance}
      />

<PassBookInfo
        date={Details[1].date}
        transaction={Details[1].transaction}
        debit={Details[1].debit}
        credit={Details[1].credit}
        balance={Details[1].balance}
      />

<PassBookInfo
        date={Details[2].date}
        transaction={Details[2].transaction}
        debit={Details[2].debit}
        credit={Details[2].credit}
        balance={Details[2].balance}
      />
    </div>
  );
}
