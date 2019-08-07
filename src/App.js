import React, { Component, Fragment } from 'react';
import {AppProvider, Page} from '@shopify/polaris';
import axios from 'axios';
import DataTable from './DataTable';



class App extends Component {
  
  state = {
    store: []
  }

  componentDidMount(){
    axios.get('//localhost:8080/store?token=master&idprogram=1').then(res => {
      const store = res.data.obj.storeList; 
      this.setState({ store });
    });
  }

  render() {

    const headings = [
      {
        key: 'dsc_trade_name',
        label: 'Nome Comercial'
      },
      { 
        key: 'dsc_fantasy_name',
        label: 'Nome fantasia'
      },
      {
        key: 'cnpj_company',
        label: 'CNPJ'
      }
    ];

 
    return (

      <Fragment>
      <AppProvider>

      
        <Page title="Funciona">
          {this.state.store.length!=0 &&
            <DataTable headings={headings} rows={this.state.store} />
          }
          {this.state.store.length===0 && <div> <h3> Carregando...</h3> </div>}
          </Page>
          

      </AppProvider>
      </Fragment>
    );
  }
}

export default App;