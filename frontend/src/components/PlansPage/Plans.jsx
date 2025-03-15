import React from 'react'
import "./PlanPage.css"
import PlanComponent from './PlanComponent'
import EditComponent from './EditComponent'
import CreateComponent from './CreateComponent'
export default function Plans() {
  return (
    <div className='plansContainer'>
      <h2 className='plansHeading'>Plans</h2>
        <div className='allPlans'>

            <div className='createdPlan'>
                <PlanComponent/>
                <EditComponent/>
            </div>
            
            <div className='createdPlan'>
                <PlanComponent/>
                <EditComponent/>
            </div>
            
            <div className='createdPlan'>
                <PlanComponent/>
                <EditComponent/>
            </div>

            <CreateComponent/>

    </div>
     
        


    </div>
  )
}
