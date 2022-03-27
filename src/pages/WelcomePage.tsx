import { Layout } from "antd"
import Title from "antd/lib/typography/Title"
import React from "react"
export default class WelcomePage extends React.Component<any, any>{

    constructor(props: any){
        super(props)
    };

    render() {
        return(
            <Layout>
                <Title>Angazuj me</Title>
            </Layout>
        )
    }
   
}