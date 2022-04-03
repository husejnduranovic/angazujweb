import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../custom-components/CustomButton";
import CustomCard from "../custom-components/CustomCard";
import CustomTable from "../custom-components/CustomTable";
import Movie from "../models/Movie";
import { Header } from "./Header";


export default class WelcomePage extends React.Component<any, any> {
 constructor(props: any) {
        super(props)

        this.state = {
            people: []
        }
 }


 render() {

    const columns = ['Godina rodenja', 'kreirano', 'uredeno', 'boja ociju']

    const { people } = this.state;

    

    return (
      <Fragment>
          <Header />
        <div className="container pt-4">
          <Link to={"/jobs"}>
            <CustomButton text={"See avaliable jobs!"} buttonStyle={"btn-outline-primary"} buttonSize={"btn-lg"} />
          </Link>
        </div>
        </Fragment>
    );
  }
}

