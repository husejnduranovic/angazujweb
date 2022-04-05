
export interface IProps{
    columns: string[],
    data: any,
    key: string[],
    onPress: Function,
}


const CustomTable = (columns: any, data: any, keys: any) => {

    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                    {columns.columns.map((columnsName: string) => {
                        return(
                            <th>{columnsName}</th>
                        )
                    })}
                    </tr>
                </thead>
                <tbody>
                    {
                        columns.data.map((row: any) => {
                            return(
                                <tr>
                                    {
                                        columns.keys.map((key: string) => {
                                            return(
                                                    <td>
                                                        {row[key]}
                                                    </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
        </div>
    )
}

export default CustomTable;