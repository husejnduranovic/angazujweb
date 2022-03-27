import { Button, Layout } from "antd";
import React from "react";

export default class LoginPage extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    render(): React.ReactNode {
        return(
            <Layout>
                <p>Login Page</p>
            </Layout>
        )
    }
}