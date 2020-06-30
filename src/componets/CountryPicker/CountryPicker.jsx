import React from 'react';
import {NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'

const CountryPicker = (props) => {
    const {countries , handleCountryChange} = props;

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;