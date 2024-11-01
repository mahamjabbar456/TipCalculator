'use client'

import { ChangeEvent, useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


const TipCalculator = () => {
  const [billAmount,setBillAmount] = useState<number | null>(null);
  const [tip,setTip] = useState<number | null>(null);
  const [totalAmount,setTotalAmount] = useState<number>(0);
  const [tipAmount,setTipAmount] = useState<number>(0);

  const calculateBill = () => {
    if(billAmount !== null && tip !==null){
      const TipAmount = billAmount * (tip/100);
      setTotalAmount(billAmount + TipAmount);
      setTipAmount(TipAmount);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="max-w-md w-full rounded-xl p-6">
        <CardHeader>
          <CardTitle>Tip Calculator</CardTitle>
          <CardDescription className="tracking-wide">
          Enter the bill amount and tip percentage to calculate the tip and total.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
          <Label htmlFor="bill" className="font-bold">Bill Amount</Label>
          <Input
          type="number"
          value={billAmount !== null ? billAmount : ""}
          id="bill"
          placeholder="Enter bill amount"
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setBillAmount(parseFloat(e.target.value))}
          className="rounded-[50px] shadow-sm border-2 focus:border-black"
          />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="tip" className="font-bold">Tip Percentage</Label>
          <Input
          type="number"
          value={tip !== null ? tip : ""}
          id="tip"
          placeholder="Enter tip percentage"
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setTip(parseFloat(e.target.value))}
          className="rounded-[50px] shadow-sm border-2 focus:border-black"
          />
          </div>
          <Button
          className="font-bold rounded-[50px]"
          onClick={calculateBill}
          >Calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-2">
          <div className="flex items-center justify-between">
            <p>Tip Amount:</p>
            <p className="font-bold">${(tipAmount).toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total Amount:</p>
            <p className="font-bold">${(totalAmount).toFixed(2)}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TipCalculator
