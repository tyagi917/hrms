import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import  DashboardLayout from '../components/dashboardlayout/dashboard.js';

const Controller=()=>{
    return(
        <Router>
            <DashboardLayout>
            <switch>
                <Route/>

            </switch>
            </DashboardLayout>
           

        </Router>

    )
}
export default Controller;