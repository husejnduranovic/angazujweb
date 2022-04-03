import React, { Fragment } from "react";
import { Header } from "./Header";
import slika from "../assets/images/background-image.jpg"
import CustomButton from "../custom-components/CustomButton";

export interface IJob {
  text: string;
  title: string;
  path?: string;
  price: number;
}

export default class JobPage extends React.Component<any, any> {
  constructor(props: IJob) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mt-3">
          <h1 className="h1">Lorem ipsum</h1>
          <div className="container p-4">
          <img className="rounded" src={slika} alt="slika" width="60%" />
          </div>
          <div className="container mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            asperiores aspernatur modi officiis in. Quisquam cum, unde
            perspiciatis, eos vel quasi assumenda eius sequi sapiente numquam,
            dicta odio fuga tempora.
          </div>
          <div className="container d-flex justify-content-between mt-3">
            <i className="h3">25KM</i>
            <CustomButton text={"Apply for this job"} />
          </div>
        </div>
      </Fragment>
    );
  }
}
