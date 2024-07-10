
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material"
import { useState } from "react";

export const StepperComp = () => {
    const list = ['one', 'two', 'three'];
    const [activeStep,SetactiveStep] = useState(0);
    const handleBack = () =>{
        SetactiveStep(activeStep - 1);
        console.log('back')
    }
    const handleNext = () =>{
        SetactiveStep(activeStep + 1);
        console.log('Next')
    }
    const handleFinish = () =>{
        confirm("finished")
    }
    return (
        <>
            <Stepper activeStep={activeStep}>
                {list.map((label, index) => {
                    return (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box >
                <Button onClick={handleBack} disabled={activeStep === 0}>
                    Back
                </Button>
                {/* <Button onClick={handleNext}>
                {activeStep === list.length - 1 ? 'Finish' : 'Next'}
                </Button> */}
                {activeStep === list.length-1 ?(
                    <Button onClick={handleFinish}>Finish</Button>
                ):(
                    <Button onClick={handleNext}>Next</Button>
                ) }
            </Box>
        </>
    )
}
