import * as React from 'react';
import Cell from './Cell';
import { Table } from './Style';
export default class DataTable extends React.Component {
 

  render() {
    var headerComponents = this.generateHeaders(),
        rowComponents = this.generateRows();

    return (
        <Table>
   
                    <thead> {headerComponents} </thead>
                    <tbody> {rowComponents} </tbody>

        </Table>
    );
};

generateHeaders () {
    var cols = this.props.headings;  // [{key, label}]
    // generate our header (th) cell components
    return cols.map(function(colData) {
      return (< Cell  header={colData.label} content={colData.label}  />);
    });
};

generateRows () {
    var cols = this.props.headings,  // [{key, label}]
        data = this.props.rows;
    let i=0;
    return data.map(function(item) {
        // handle the column data within each row
        
        var cells = cols.map(function(colData) {

          
            return(<Cell content={item[colData.key]}  />);
        });
        return <tr key={item._id}>  {cells}  </tr>;
        i++;
    });
}
};

