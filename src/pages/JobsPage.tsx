import React, { Fragment } from "react";
import CustomCard from "../custom-components/CustomCard";
import { Header } from "./Header";

export default class JobsPage extends React.Component<any, any> {
    render() {

        const cards = 
    [
      {
        id: "1",
      title: "MOLER",
      text: "Potreban moler za okrecit stan, bice nesto i para",
      price: 50
    },
      {
        id: "2",
      title: "MOLER",
      text: "Potreban moler za okrecit stan, bice nesto i para",
      price: 50
    },
      {
        id: "3",
      title: "MOLER",
      text: "Potreban moler za okrecit stan, bice nesto i para",
      price: 50
    },
  ]




        return(
            <Fragment>
                <Header />
        <div className="container pt-4">
        <div className="d-flex justify-content-between">

          {cards.map((card) => {
            return (
              <CustomCard price={card.price} text={card.text} title={card.title} />
            )
          })}
              </div>

        </div>
            </Fragment>
        )
    }
}