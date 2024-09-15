'use client'; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState,ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
 } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Car } from "lucide-react";

  // JSX return statement rendering the tip calculator UI
const TipCalculator = () => {
      // State hooks for managing the bill amount, tip percentage, tip amount, and total amount
    const [billAmount,setBillAmount] = useState<number | null>(null);
    const [tipPercentage,setTipPercentage] = useState<number | null>(null);
    const [tipAmount,setTipAmount] = useState<number>(0);
    const [totalAmount,setTotalAmount] = useState<number>(0);

      // Handler for updating bill amount state on input change
    const handleBillAmountChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setBillAmount(parseFloat(e.target.value));
    }

      // Handler for updating tip percentage state on input change
    const handleTipPercentageChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setTipPercentage(parseFloat(e.target.value));
    }

      // Function to calculate the tip and total amounts
    const calculateTip = () =>{
        if(billAmount !== null && tipPercentage !== null){
            const tip = billAmount * (tipPercentage / 100); // Calculate the tip amount
            setTipAmount(tip); // Set the tip amount state
            setTotalAmount(tip + billAmount); // Set the total amount state
        }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        {/* Center the tip calculator card within the screen */}
      <Card className="bg-white w-full max-w-md shadow-lg p-6 rounded-lg">
         <CardHeader>
            {/* Header with title and description */}
            <CardTitle>Tip Calculator</CardTitle>
            <CardDescription>
               Enter the bill amount and tip percentage to calculate the tip and total.
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            {/* Input for bill amount */}
            <div className="grid gap-2">
            <Label htmlFor="billAmount" className="font-bold">Bill Amount</Label>
            <Input 
            id="billAmount"
            type="number"
            value={billAmount !== null ? billAmount : ""}
            onChange={handleBillAmountChange}
            placeholder="Enter bill amount"
            className="rounded-2xl"
            />
            </div>
            {/* Input for tip percentage */}
            <div className="grid gap-2">
            <Label htmlFor="tip-percentage" className="font-bold">Tip Percentage</Label>
            <Input 
            id="tip-percentage"
            type="number"
            value={tipPercentage !== null ? tipPercentage : ""}
            onChange={handleTipPercentageChange}
            placeholder="Enter tip percentage"
            className="rounded-2xl"
            />
            </div>
            {/* Button to calculate tip */}
            <Button
            onClick={calculateTip}
            className="rounded-2xl font-bold"
            >
                Calculate
            </Button>
         </CardContent>
         <CardFooter className="grid gap-2">
            <div className="flex items-center justify-between">
                <span>Tip Amount</span>
                <span className="font-bold">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
                <span>Total Amount</span>
                <span className="font-bold">${totalAmount.toFixed(2)}</span>
            </div>
         </CardFooter>
      </Card>
    </div>
  )
}

export default TipCalculator
