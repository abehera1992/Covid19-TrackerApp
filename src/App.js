import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import  covid19_Title from './Images/covid19_Title.png'


class App extends React.Component{

    state = {
        data: {},
        country: '',
    }

   async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
        //console.log(fetchedData);
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country)
        
        //set the state
        this.setState({data: fetchedData, country: country});
      
    }

    render() {
        const { data, country } = this.state;
        return(
            <div className = {styles.container}>
                <img className={styles.Img_Title} src={covid19_Title} alt="covid-19"/>
                <Cards data = {data} />
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Charts data={data} country={country}/>
                <footer className={styles.footer}>Designed and Developed by &copy; Abhishek B. - 2020 </footer>
            </div>
            
        )
    }
}

export default App;