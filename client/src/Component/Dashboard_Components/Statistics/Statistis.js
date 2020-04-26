import React, { Component } from "react";
import ProfitCard from "./profitCard/pofitCard";
import CapitalCard from "./capitalCard/capitalCard";
import axios from "axios";
import { Row, Container } from "react-bootstrap";
import { faMoneyBillAlt, faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faSortAmountUp,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";

class Statistics extends Component {
  state = {
    Transactions: "",
    UnclearTransactions: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/transaction/non_withdraw_clear")
      .then(res => {
        this.setState({ Transactions: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/api/transaction/non_withdraw_Unclear")
      .then(res => {
        this.setState({ UnclearTransactions: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  withDrawHandler = () => {
    axios.post("http://localhost:5000/api/transaction/withdraw");
  };

  render() {
    console.log(this.state);
    var totalProfits = 0;

    var credit = 0;
    var due_amount = 0;
    var cash_in_hand = 0;
    var total_amount = 0;
    var reInvestment = 0;
    var Charity = 0;
    var Parents = 0;
    var Earning = 0;

    if (this.state.Transactions === "") {
    } else {
      this.state.Transactions.forEach(element => {
        totalProfits = totalProfits + element.profit;
      });

      reInvestment = (totalProfits * 60) / 100;
      Charity = (totalProfits * 1) / 100;
      Parents = (totalProfits * 9) / 100;
      Earning = (totalProfits * 30) / 100;
    }

    if (this.state.UnclearTransactions === "") {
    } else {
      this.state.UnclearTransactions.forEach(element => {
        credit = credit + element.credit;
      });
      this.state.UnclearTransactions.forEach(element => {
        total_amount = total_amount + element.total_amount;
      });
      this.state.UnclearTransactions.forEach(element => {
        cash_in_hand = cash_in_hand + element.paid_amount;
      });
      this.state.UnclearTransactions.forEach(element => {
        due_amount = due_amount + element.due_amount;
      });
    }

    return (
      <Container>
        <Row>
          <ProfitCard heading="Total Amount" para={total_amount} />
          <ProfitCard heading="Cash in Hand" para={cash_in_hand} />
          <ProfitCard heading="Due Amount" para={due_amount} />
          <ProfitCard heading="Credit" para={credit} />
        </Row>
        <Row>
          <ProfitCard
            icon={faMoneyBillAlt}
            heading="Re-Investment"
            para={reInvestment}
          />
          <ProfitCard icon={faSmile} heading="Parents" para={Parents} />
          <ProfitCard icon={faSortAmountUp} heading="Charity" para={Charity} />
          <ProfitCard icon={faUniversity} heading="Earning" para={Earning} />
        </Row>
        <button onClick={this.withDrawHandler}>Withdraw</button>
        <Row>
          <CapitalCard heading="Total Captal" para="500" />
          <CapitalCard heading="Total Profit" para="500" />
        </Row>
      </Container>
    );
  }
}

export default Statistics;
