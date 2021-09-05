import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
          <Section
              title="Model S"
              description="Order Online for Touchless Delivery"
              backgroundImage="model-s.jpg"
              leftBtnText="Custom Order"
              rightBtntext="Existing Inventory"

              />
              <Section
              title="Model 3"
              description="Order Online for Touchless Delivery"
              backgroundImage="model-3.jpg"
              leftBtnText="Custom Order"
              rightBtntext="Existing Inventory"

              />
              <Section
              title="Model X"
              description="Order Online for Touchless Delivery"
              backgroundImage="model-x.jpg"
              leftBtnText="Custom Order"
              rightBtntext="Existing Inventory"

              />
              <Section
              title="Model Y"
              description="Order Online for Touchless Delivery"
              backgroundImage="model-y.jpg"
              leftBtnText="Custom Order"
              rightBtntext="Existing Inventory"

              />
              <Section
              title="Solar Panels"
              description="Lowest Cost Solar Panels in America"
              backgroundImage="solar-panel.jpg"
              leftBtnText="Custom Order"
              rightBtntext="Existing Inventory"

              />
              <Section
              title="Solar Roof"
              description="Produce Clean Energy From Your Roof"
              backgroundImage="solar-roof.jpg"
              leftBtnText="Custom Order"
              rightBtntext="Existing Inventory"

              />
              <Section
              title="Accessories"
              description=""
              backgroundImage="accessories.jpg"
              leftBtnText="Custom Order"
              

              />
          
        </Container>
    )
}

export default Home;

const Container=styled.div`
  height: 100vh;
  width: 100 vw;
  color: red; 
`

